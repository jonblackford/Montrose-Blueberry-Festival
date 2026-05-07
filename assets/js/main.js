
const DATA_URL = 'data/site-data.json';
const NAV = [
  ['Home','index.html'], ['Schedule','schedule.html'], ['Events','events.html'], ['Forms','forms.html'], ['Vendors','vendors.html'], ['Sponsors','sponsors.html'], ['News','news.html'], ['Contact','contact.html']
];
let MBF_DATA = null;

document.addEventListener('DOMContentLoaded', async () => {
  renderHeader();
  try {
    MBF_DATA = await fetchJSON(DATA_URL);
    applyGlobalContent(MBF_DATA);
    renderPage(document.body.dataset.page, MBF_DATA);
  } catch (error) {
    console.error(error);
    showLoadError(error);
  }
});

async function fetchJSON(url) {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Could not load ${url}`);
  return response.json();
}

function renderHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;
  const current = location.pathname.split('/').pop() || 'index.html';
  header.innerHTML = `
    <div class="container nav-wrap">
      <a class="brand" href="index.html" aria-label="Montrose Blueberry Festival home">
        <img src="assets/img/blueberry-mark.svg" alt="" />
        <span>Montrose Blueberry Festival<small>Montrose, Michigan</small></span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-navigation">Menu</button>
      <nav class="main-nav" id="main-navigation" aria-label="Main navigation">
        ${NAV.map(([label, href]) => `<a href="${href}" class="${current === href ? 'active' : ''}">${label}</a>`).join('')}
      </nav>
    </div>`;
  const toggle = header.querySelector('.nav-toggle');
  const nav = header.querySelector('.main-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

function applyGlobalContent(data) {
  textAll('[data-site-anniversary]', data.site.anniversary);
  textAll('[data-site-tagline]', data.site.tagline);
  textAll('[data-site-dates]', data.site.dates);
  textAll('[data-site-sponsor]', data.site.presentingSponsor);
  textAll('[data-site-mission]', data.site.mission);
  renderFooter(data);
}

function textAll(selector, value) {
  document.querySelectorAll(selector).forEach(el => el.textContent = value || '');
}

function renderFooter(data) {
  const footer = document.querySelector('[data-footer]');
  if (!footer) return;
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <h2>${escapeHTML(data.site.name)}</h2>
          <p>${escapeHTML(data.site.dates)} · ${escapeHTML(data.site.primaryLocation)}</p>
          <p>${escapeHTML(data.site.tagline)}</p>
        </div>
        <div>
          <h3>Site pages</h3>
          <ul class="footer-nav">${NAV.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h3>Contact</h3>
          <p><a href="tel:${digitsOnly(data.contact.phone)}">${escapeHTML(data.contact.phone)}</a><br>
          <a href="mailto:${escapeHTML(data.contact.email)}">${escapeHTML(data.contact.email)}</a></p>
          <p>${escapeHTML(data.contact.mailingAddress)}</p>
        </div>
      </div>
      <div class="footer-bottom">© ${new Date().getFullYear()} Montrose Blueberry Festival, Inc. Static site content is editable in <code>data/site-data.json</code>.</div>
    </div>`;
}

function renderPage(page, data) {
  switch(page) {
    case 'home': renderHome(data); break;
    case 'schedule': renderSchedule(data); break;
    case 'events': renderEventsPage(data); break;
    case 'forms': renderForms(data); break;
    case 'vendors': renderVendors(data); break;
    case 'sponsors': renderSponsors(data); break;
    case 'news': renderNews(data); break;
    case 'contact': renderContact(data); break;
    default: break;
  }
}

function renderHome(data) {
  renderQuickLinks(data);
  renderEventOverview(data);
  setupCountdowns();
}

function renderEventsPage(data) {
  renderEventOverview(data);
  setupEventCalendar(data);
}

function setupEventCalendar(data) {
  const schedule = getSortedSchedule(data);
  const calendarWrap = document.querySelector('[data-events-calendar]');
  const listWrap = document.querySelector('[data-events-list]');
  if (!calendarWrap || !listWrap) return;

  const search = document.querySelector('[data-calendar-search]');
  const categorySelect = document.querySelector('[data-calendar-category]');
  const note = document.querySelector('[data-calendar-note]');
  const calendarPanel = document.querySelector('[data-calendar-view]');
  const listPanel = document.querySelector('[data-list-view]');
  const title = document.querySelector('[data-calendar-title]');
  const prev = document.querySelector('[data-calendar-prev]');
  const next = document.querySelector('[data-calendar-next]');
  const viewButtons = document.querySelectorAll('[data-view-toggle]');

  const categories = unique(schedule.map(e => e.category)).sort();
  categories.forEach(cat => categorySelect.insertAdjacentHTML('beforeend', `<option value="${escapeAttr(cat)}">${escapeHTML(cat)}</option>`));
  if (note) note.textContent = data.site.announcement || 'Event information can be updated in data/site-data.json or through the content editor.';

  let currentMonth = new Date((schedule[0]?.date || new Date().toISOString().slice(0,10)) + 'T12:00:00');
  currentMonth.setDate(1);
  let view = 'calendar';

  const filteredEvents = () => {
    const q = (search?.value || '').toLowerCase().trim();
    const cat = categorySelect?.value || 'all';
    return schedule.filter(event => {
      const haystack = `${event.title} ${event.time} ${event.location} ${event.category} ${event.description}`.toLowerCase();
      return (cat === 'all' || event.category === cat) && (!q || haystack.includes(q));
    });
  };

  const update = () => {
    const events = filteredEvents();
    renderEventsCalendar(events, currentMonth, calendarWrap, title);
    renderScheduleList(events, '[data-events-list]');
    const showCalendar = view === 'calendar';
    calendarPanel.hidden = !showCalendar;
    listPanel.hidden = showCalendar;
    viewButtons.forEach(button => {
      const active = button.dataset.viewToggle === view;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };

  prev?.addEventListener('click', () => {
    currentMonth.setMonth(currentMonth.getMonth() - 1);
    update();
  });
  next?.addEventListener('click', () => {
    currentMonth.setMonth(currentMonth.getMonth() + 1);
    update();
  });
  [search, categorySelect].forEach(el => el?.addEventListener('input', update));
  viewButtons.forEach(button => button.addEventListener('click', () => {
    view = button.dataset.viewToggle;
    update();
  }));

  update();
}

function renderEventsCalendar(events, monthDate, wrap, titleEl) {
  const month = new Date(monthDate);
  month.setDate(1);
  const monthIndex = month.getMonth();
  const year = month.getFullYear();
  titleEl.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(month);

  const monthEvents = events.filter(event => {
    const eventDate = new Date(event.date + 'T12:00:00');
    return eventDate.getMonth() === monthIndex && eventDate.getFullYear() === year;
  });
  const byDate = groupBy(monthEvents, 'date');

  const start = new Date(year, monthIndex, 1);
  start.setDate(start.getDate() - start.getDay());
  const end = new Date(year, monthIndex + 1, 0);
  end.setDate(end.getDate() + (6 - end.getDay()));

  const weekdayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    .map(day => `<div class="calendar-weekday">${day}</div>`).join('');

  const cells = [];
  for (let day = new Date(start); day <= end; day.setDate(day.getDate() + 1)) {
    const dateKey = toDateKey(day);
    const inMonth = day.getMonth() === monthIndex;
    const dayEvents = byDate[dateKey] || [];
    cells.push(`<article class="calendar-day ${inMonth ? '' : 'muted-month'} ${dayEvents.length ? 'has-events' : ''}">
      <div class="calendar-date">
        <span>${day.getDate()}</span>
        ${dayEvents.length ? `<strong>${dayEvents.length} event${dayEvents.length === 1 ? '' : 's'}</strong>` : ''}
      </div>
      <div class="calendar-events">
        ${dayEvents.map(event => `<a class="calendar-event" href="schedule.html#${escapeAttr(event.id)}">
          <span>${escapeHTML(event.time)}</span>
          <strong>${escapeHTML(event.title)}</strong>
        </a>`).join('')}
      </div>
    </article>`);
  }

  document.querySelector('[data-calendar-empty]')?.remove();
  wrap.innerHTML = weekdayHeadings + cells.join('');
  if (!monthEvents.length) {
    wrap.insertAdjacentHTML('afterend', '<div class="empty-state calendar-empty" data-calendar-empty>No events match the filters for this month.</div>');
  }
}

function renderQuickLinks(data) {
  const wrap = document.querySelector('[data-quick-links]');
  if (!wrap) return;
  wrap.innerHTML = data.quickLinks.map(link => `
    <article class="quick-card">
      <h3>${escapeHTML(link.title)}</h3>
      <p>${escapeHTML(link.description)}</p>
      <a class="text-link" href="${escapeAttr(link.url)}">${escapeHTML(link.label)} →</a>
    </article>`).join('');
}

function renderEventOverview(data) {
  const containers = document.querySelectorAll('[data-event-overview]');
  containers.forEach(wrap => {
    const limit = Number(wrap.getAttribute('limit')) || data.eventOverview.length;
    wrap.innerHTML = data.eventOverview.slice(0, limit).map(event => `
      <article class="event-card">
        <span class="tag">${escapeHTML(event.category)}</span>
        <h3>${escapeHTML(event.title)}</h3>
        <p><strong>${escapeHTML(event.date)}</strong></p>
        <p>${escapeHTML(event.description)}</p>
        <a class="text-link" href="${escapeAttr(event.url)}">Learn more →</a>
      </article>`).join('');
  });
}

function renderSchedule(data) {
  const schedule = getSortedSchedule(data);
  const daySelect = document.querySelector('[data-event-day]');
  const categorySelect = document.querySelector('[data-event-category]');
  const search = document.querySelector('[data-event-search]');
  const note = document.querySelector('[data-schedule-note]');
  const days = unique(schedule.map(e => e.date));
  const cats = unique(schedule.map(e => e.category)).sort();
  days.forEach(date => daySelect.insertAdjacentHTML('beforeend', `<option value="${date}">${formatDay(date)}</option>`));
  cats.forEach(cat => categorySelect.insertAdjacentHTML('beforeend', `<option value="${escapeAttr(cat)}">${escapeHTML(cat)}</option>`));
  note.textContent = data.site.announcement;
  const update = () => {
    const q = (search.value || '').toLowerCase().trim();
    const day = daySelect.value;
    const cat = categorySelect.value;
    const filtered = schedule.filter(e => {
      const text = `${e.title} ${e.time} ${e.location} ${e.category} ${e.description}`.toLowerCase();
      return (day === 'all' || e.date === day) && (cat === 'all' || e.category === cat) && (!q || text.includes(q));
    });
    renderScheduleList(filtered);
  };
  [search, daySelect, categorySelect].forEach(el => el.addEventListener('input', update));
  update();
}

function renderScheduleList(events, selector = '[data-schedule]') {
  const wrap = document.querySelector(selector);
  if (!wrap) return;
  if (!events.length) {
    wrap.innerHTML = `<div class="empty-state">No events match those filters.</div>`;
    return;
  }
  const grouped = groupBy(events, 'date');
  wrap.innerHTML = Object.entries(grouped).map(([date, list]) => `
    <section class="day-group">
      <div class="day-heading"><h2>${formatDay(date)}</h2><span class="event-chip">${list.length} event${list.length === 1 ? '' : 's'}</span></div>
      ${list.map(event => `
        <article class="schedule-card" id="${escapeAttr(event.id)}">
          <div class="schedule-time">${escapeHTML(event.time)}</div>
          <div>
            <span class="tag">${escapeHTML(event.category)}</span>
            <h3>${escapeHTML(event.title)}</h3>
            <p class="location">${escapeHTML(event.location)}</p>
            <p>${escapeHTML(event.description)}</p>
          </div>
        </article>`).join('')}
    </section>`).join('');
}

function renderForms(data) {
  const formList = [...data.forms].sort((a,b) => (a.category + a.title).localeCompare(b.category + b.title));
  const categorySelect = document.querySelector('[data-form-category]');
  const search = document.querySelector('[data-form-search]');
  const cats = unique(formList.map(f => f.category)).sort();
  cats.forEach(cat => categorySelect.insertAdjacentHTML('beforeend', `<option value="${escapeAttr(cat)}">${escapeHTML(cat)}</option>`));
  const update = () => {
    const q = (search.value || '').toLowerCase().trim();
    const cat = categorySelect.value;
    const filtered = formList.filter(f => {
      const text = `${f.title} ${f.category} ${f.status} ${f.description}`.toLowerCase();
      return (cat === 'all' || f.category === cat) && (!q || text.includes(q));
    });
    renderFormCards(filtered);
  };
  [search, categorySelect].forEach(el => el.addEventListener('input', update));
  update();
}

function renderFormCards(forms) {
  const wrap = document.querySelector('[data-forms]');
  if (!wrap) return;
  if (!forms.length) {
    wrap.innerHTML = `<div class="empty-state">No forms match those filters.</div>`;
    return;
  }
  wrap.innerHTML = forms.map(form => {
    const statusClass = (form.status || '').toLowerCase().replace(/\s+/g, '-');
    const link = form.url ? `<a class="btn btn-secondary" href="${escapeAttr(form.url)}" target="_blank" rel="noopener">${escapeHTML(form.button || 'Open')}</a>` : `<span class="btn btn-secondary" aria-disabled="true">Coming soon</span>`;
    return `<article class="form-card">
      <div><span class="status-pill ${statusClass}">${escapeHTML(form.status || 'Download')}</span></div>
      <h3>${escapeHTML(form.title)}</h3>
      <p><strong>${escapeHTML(form.category)}</strong>${form.date ? ` · ${formatShortDate(form.date)}` : ''}</p>
      <p>${escapeHTML(form.description || '')}</p>
      ${link}
    </article>`;
  }).join('');
}

function renderVendors(data) {
  const search = document.querySelector('[data-vendor-search]');
  const type = document.querySelector('[data-vendor-type]');
  const note = document.querySelector('[data-vendor-note]');
  note.textContent = `${data.vendors.year} vendor list. ${data.vendors.note}`;
  const update = () => renderVendorSections(data, search.value, type.value);
  [search, type].forEach(el => el.addEventListener('input', update));
  update();
}

function renderVendorSections(data, query = '', type = 'all') {
  const wrap = document.querySelector('[data-vendors]');
  if (!wrap) return;
  const q = query.toLowerCase().trim();
  const map = {
    marketplace: ['Marketplace Vendors', data.vendors.marketplace],
    food: ['Food Vendors', data.vendors.food],
    special: ['Special Vendors', data.vendors.special]
  };
  const keys = type === 'all' ? Object.keys(map) : [type];
  const html = keys.map(key => {
    const [title, list] = map[key];
    const filtered = list.filter(item => !q || item.toLowerCase().includes(q));
    if (!filtered.length) return '';
    return `<section class="vendor-section"><h2>${title} <span class="event-chip">${filtered.length}</span></h2><ul class="vendor-list">${filtered.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul></section>`;
  }).join('');
  wrap.innerHTML = html || `<div class="empty-state">No vendors match those filters.</div>`;
}

function renderSponsors(data) {
  const wrap = document.querySelector('[data-sponsors]');
  if (!wrap) return;
  wrap.innerHTML = Object.entries(data.sponsors).map(([group, sponsors]) => `
    <section class="sponsor-section">
      <h2>${escapeHTML(group)} <span class="event-chip">${sponsors.length}</span></h2>
      <ul class="sponsor-list">${sponsors.map(name => `<li>${escapeHTML(name)}</li>`).join('')}</ul>
    </section>`).join('');
}

function renderNews(data) {
  const wrap = document.querySelector('[data-news]');
  if (!wrap) return;
  wrap.innerHTML = data.news.map(post => `
    <article class="news-card">
      <time datetime="${escapeAttr(post.date)}">${formatShortDate(post.date)}</time>
      <h2>${escapeHTML(post.title)}</h2>
      <p>${escapeHTML(post.summary)}</p>
      <a class="text-link" href="${escapeAttr(post.url)}">Read more →</a>
    </article>`).join('');
}

function renderContact(data) {
  const phone = document.querySelector('[data-contact-phone]');
  const email = document.querySelector('[data-contact-email]');
  const mail = document.querySelector('[data-contact-mail]');
  const office = document.querySelector('[data-contact-office]');
  const note = document.querySelector('[data-contact-note]');
  const emailBtn = document.querySelector('[data-email-button]');
  const fb = document.querySelector('[data-facebook]');
  if (phone) { phone.textContent = data.contact.phone; phone.href = `tel:${digitsOnly(data.contact.phone)}`; }
  if (email) { email.textContent = data.contact.email; email.href = `mailto:${data.contact.email}`; }
  if (mail) mail.textContent = data.contact.mailingAddress;
  if (office) office.textContent = data.contact.officeAddress;
  if (note) note.textContent = data.contact.officeNote;
  if (emailBtn) emailBtn.href = `mailto:${data.contact.email}`;
  if (fb) fb.href = data.contact.facebook;
  const form = document.querySelector('[data-mailto-form]');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name') || '';
      const subject = fd.get('subject') || 'Question about the Montrose Blueberry Festival';
      const message = fd.get('message') || '';
      const body = `${message}\n\nFrom: ${name}`;
      window.location.href = `mailto:${data.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
}

function setupCountdowns() {
  document.querySelectorAll('[data-countdown]').forEach(el => {
    const target = new Date(el.dataset.countdown);
    const tick = () => {
      const diff = Math.max(0, target - new Date());
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor(diff / 3600000) % 24;
      const mins = Math.floor(diff / 60000) % 60;
      const secs = Math.floor(diff / 1000) % 60;
      el.innerHTML = [['Days', days], ['Hours', hours], ['Mins', mins], ['Secs', secs]].map(([label, value]) => `<div><strong>${String(value).padStart(2,'0')}</strong><span>${label}</span></div>`).join('');
    };
    tick();
    setInterval(tick, 1000);
  });
}

function showLoadError(error) {
  const main = document.querySelector('main');
  if (!main) return;
  main.insertAdjacentHTML('afterbegin', `<div class="container"><div class="notice">Could not load site data. If you opened this file directly from your computer, run it through a local server or publish to GitHub Pages. ${escapeHTML(error.message)}</div></div>`);
}

function getSortedSchedule(data) { return [...(data.schedule || [])].sort((a,b) => `${a.date}${a.sortTime || a.time || ''}`.localeCompare(`${b.date}${b.sortTime || b.time || ''}`)); }
function toDateKey(date) { return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
function unique(arr) { return [...new Set(arr.filter(Boolean))]; }
function groupBy(arr, key) { return arr.reduce((acc, item) => { (acc[item[key]] ||= []).push(item); return acc; }, {}); }
function digitsOnly(str) { return String(str || '').replace(/[^+\d]/g, ''); }
function formatDay(date) { return new Intl.DateTimeFormat('en-US', { weekday:'long', month:'long', day:'numeric', year:'numeric' }).format(new Date(date + 'T12:00:00')); }
function formatShortDate(date) { return new Intl.DateTimeFormat('en-US', { month:'short', day:'numeric', year:'numeric' }).format(new Date(date + 'T12:00:00')); }
function escapeHTML(value) { return String(value ?? '').replace(/[&<>"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch])); }
function escapeAttr(value) { return escapeHTML(value).replace(/'/g, '&#39;'); }
