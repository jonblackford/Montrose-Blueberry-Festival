let editorData = null;
const editor = document.querySelector('[data-json-editor]');
const statusLine = document.querySelector('[data-editor-status]');

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('data/site-data.json', { cache: 'no-store' });
    editorData = await response.json();
    syncEditor();
  } catch (error) {
    setStatus('Could not load data/site-data.json. You can still import a file.', true);
  }
  setupTabs();
  setupEditorActions();
  setupEventManager();
  setupFormManager();
});

function setupTabs() {
  document.querySelectorAll('[data-editor-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('[data-editor-tab]').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('[data-editor-section]').forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`[data-editor-section="${tab.dataset.editorTab}"]`).classList.add('active');
      if (tab.dataset.editorTab === 'manage-event') refreshEventSelect();
      if (tab.dataset.editorTab === 'manage-form') refreshFormSelect();
    });
  });
}

function setupEditorActions() {
  document.querySelector('[data-add-event]').addEventListener('click', () => {
    const event = collect('[data-new-event]');
    if (!event.title || !event.date) return setStatus('Event title and date are required.', true);
    event.id = slugify(`event-${event.title}-${event.date}`);
    event.featured = false;
    editorData = parseCurrentJSON();
    editorData.schedule.push(event);
    syncEditor(event.id);
    clearFields('[data-new-event]');
    setStatus(`Added event: ${event.title}`);
  });

  document.querySelector('[data-add-form]').addEventListener('click', () => {
    const form = collect('[data-new-form]');
    if (!form.title || !form.category) return setStatus('Form title and category are required.', true);
    form.button = form.status === 'Coming Soon' ? 'Coming soon' : form.status === 'Online' ? 'Open online' : 'Download PDF';
    editorData = parseCurrentJSON();
    editorData.forms.push(form);
    syncEditor();
    refreshFormSelect(String(editorData.forms.length - 1));
    clearFields('[data-new-form]');
    setStatus(`Added form: ${form.title}`);
  });

  document.querySelector('[data-validate-json]').addEventListener('click', () => {
    try {
      parseCurrentJSON();
      setStatus('JSON is valid.');
    } catch (error) {
      setStatus(error.message, true);
    }
  });

  document.querySelector('[data-download-json]').addEventListener('click', () => {
    try {
      const data = parseCurrentJSON();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'site-data.json';
      a.click();
      URL.revokeObjectURL(a.href);
      setStatus('Downloaded site-data.json. Replace the file in the data folder of your GitHub repo.');
    } catch (error) {
      setStatus(error.message, true);
    }
  });

  document.querySelector('[data-import-json]').addEventListener('change', event => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        editorData = JSON.parse(reader.result);
        syncEditor();
        setStatus(`Imported ${file.name}.`);
      } catch (error) {
        setStatus('Imported file is not valid JSON.', true);
      }
    };
    reader.readAsText(file);
  });

  editor?.addEventListener('input', () => {
    refreshEventSelect();
    refreshFormSelect();
  });
}

function setupEventManager() {
  const select = document.querySelector('[data-event-select]');
  const filter = document.querySelector('[data-event-filter]');
  const saveButton = document.querySelector('[data-save-event]');
  const deleteButton = document.querySelector('[data-delete-event]');
  if (!select || !filter || !saveButton || !deleteButton) return;

  filter.addEventListener('input', () => refreshEventSelect());
  select.addEventListener('change', fillEventEditor);

  saveButton.addEventListener('click', () => {
    const selectedId = select.value;
    if (!selectedId) return setStatus('Choose an event to edit first.', true);
    const data = parseCurrentJSON();
    const index = data.schedule.findIndex(event => event.id === selectedId);
    if (index === -1) return setStatus('Could not find the selected event in the JSON.', true);
    const updates = collect('[data-edit-event]');
    if (!updates.title || !updates.date) return setStatus('Event title and date are required.', true);
    data.schedule[index] = { ...data.schedule[index], ...updates, id: data.schedule[index].id || slugify(`event-${updates.title}-${updates.date}`) };
    editorData = data;
    syncEditor(data.schedule[index].id);
    setStatus(`Saved changes to: ${updates.title}`);
  });

  deleteButton.addEventListener('click', () => {
    const selectedId = select.value;
    if (!selectedId) return setStatus('Choose an event to delete first.', true);
    const data = parseCurrentJSON();
    const event = data.schedule.find(item => item.id === selectedId);
    data.schedule = data.schedule.filter(item => item.id !== selectedId);
    editorData = data;
    syncEditor();
    clearFields('[data-edit-event]');
    setStatus(`Deleted event: ${event?.title || selectedId}`);
  });

  refreshEventSelect();
}

function refreshEventSelect(selectedId = '') {
  const select = document.querySelector('[data-event-select]');
  if (!select || !editor?.value) return;
  let data;
  try {
    data = parseCurrentJSON();
  } catch {
    return;
  }
  const q = (document.querySelector('[data-event-filter]')?.value || '').toLowerCase().trim();
  const sorted = [...data.schedule]
    .map((event, index) => ({ ...event, _index: index, id: event.id || slugify(`event-${event.title}-${event.date}`) }))
    .sort((a,b) => `${a.date}${a.sortTime || a.time || ''}`.localeCompare(`${b.date}${b.sortTime || b.time || ''}`));
  const filtered = sorted.filter(event => {
    const text = `${event.title} ${event.date} ${event.time} ${event.category} ${event.location} ${event.description}`.toLowerCase();
    return !q || text.includes(q);
  });
  select.innerHTML = '<option value="">Select an event</option>' + filtered.map(event => {
    const label = `${event.date || 'No date'} · ${event.time || 'No time'} · ${event.title || 'Untitled event'}`;
    return `<option value="${escapeAttr(event.id)}">${escapeHTML(label)}</option>`;
  }).join('');
  if (selectedId) select.value = selectedId;
  if (!select.value) clearFields('[data-edit-event]');
}

function fillEventEditor() {
  const selectedId = document.querySelector('[data-event-select]')?.value;
  if (!selectedId) return clearFields('[data-edit-event]');
  const data = parseCurrentJSON();
  const event = data.schedule.find(item => item.id === selectedId);
  if (!event) return;
  document.querySelectorAll('[data-edit-event]').forEach(input => {
    const key = input.dataset.editEvent;
    if (input.type === 'checkbox') input.checked = Boolean(event[key]);
    else input.value = event[key] || '';
  });
}


function setupFormManager() {
  const select = document.querySelector('[data-form-select]');
  const filter = document.querySelector('[data-form-filter]');
  const saveButton = document.querySelector('[data-save-form]');
  const deleteButton = document.querySelector('[data-delete-form]');
  if (!select || !filter || !saveButton || !deleteButton) return;

  filter.addEventListener('input', () => refreshFormSelect());
  select.addEventListener('change', fillFormEditor);

  saveButton.addEventListener('click', () => {
    const selectedIndex = select.value;
    if (selectedIndex === '') return setStatus('Choose a form to edit first.', true);
    const data = parseCurrentJSON();
    const index = Number(selectedIndex);
    if (!data.forms[index]) return setStatus('Could not find the selected form in the JSON.', true);
    const updates = collect('[data-edit-form]');
    if (!updates.title || !updates.category) return setStatus('Form title and category are required.', true);
    if (!updates.button) updates.button = updates.status === 'Coming Soon' ? 'Coming soon' : updates.status === 'Online' ? 'Open online' : 'Download PDF';
    data.forms[index] = { ...data.forms[index], ...updates };
    editorData = data;
    syncEditor();
    refreshFormSelect(String(index));
    setStatus(`Saved changes to: ${updates.title}`);
  });

  deleteButton.addEventListener('click', () => {
    const selectedIndex = select.value;
    if (selectedIndex === '') return setStatus('Choose a form to delete first.', true);
    const data = parseCurrentJSON();
    const index = Number(selectedIndex);
    const form = data.forms[index];
    data.forms.splice(index, 1);
    editorData = data;
    syncEditor();
    refreshFormSelect();
    clearFields('[data-edit-form]');
    setStatus(`Deleted form: ${form?.title || 'selected form'}`);
  });

  refreshFormSelect();
}

function refreshFormSelect(selectedIndex = '') {
  const select = document.querySelector('[data-form-select]');
  if (!select || !editor?.value) return;
  let data;
  try {
    data = parseCurrentJSON();
  } catch {
    return;
  }
  const q = (document.querySelector('[data-form-filter]')?.value || '').toLowerCase().trim();
  const forms = data.forms.map((form, index) => ({ ...form, _index: index }))
    .sort((a,b) => `${a.category || ''}${a.title || ''}`.localeCompare(`${b.category || ''}${b.title || ''}`));
  const filtered = forms.filter(form => {
    const text = `${form.title} ${form.category} ${form.status} ${form.url} ${form.description}`.toLowerCase();
    return !q || text.includes(q);
  });
  select.innerHTML = '<option value="">Select a form</option>' + filtered.map(form => {
    const label = `${form.category || 'No category'} · ${form.title || 'Untitled form'}`;
    return `<option value="${form._index}">${escapeHTML(label)}</option>`;
  }).join('');
  if (selectedIndex !== '') select.value = selectedIndex;
  if (!select.value) clearFields('[data-edit-form]');
}

function fillFormEditor() {
  const selectedIndex = document.querySelector('[data-form-select]')?.value;
  if (selectedIndex === '') return clearFields('[data-edit-form]');
  const data = parseCurrentJSON();
  const form = data.forms[Number(selectedIndex)];
  if (!form) return;
  document.querySelectorAll('[data-edit-form]').forEach(input => {
    const key = input.dataset.editForm;
    input.value = form[key] || '';
  });
}

function collect(selector) {
  const result = {};
  document.querySelectorAll(selector).forEach(input => {
    const key = input.dataset.newEvent || input.dataset.newForm || input.dataset.editEvent;
    if (!key) return;
    result[key] = input.type === 'checkbox' ? input.checked : input.value.trim();
  });
  return result;
}

function clearFields(selector) {
  document.querySelectorAll(selector).forEach(input => {
    if (input.type === 'checkbox') input.checked = false;
    else if (input.tagName === 'SELECT') input.selectedIndex = 0;
    else input.value = '';
  });
}

function syncEditor(selectedEventId = '') {
  editor.value = JSON.stringify(editorData, null, 2);
  refreshEventSelect(selectedEventId);
  refreshFormSelect();
}

function parseCurrentJSON() {
  const data = JSON.parse(editor.value);
  if (!Array.isArray(data.schedule)) throw new Error('JSON must include a schedule array.');
  if (!Array.isArray(data.forms)) throw new Error('JSON must include a forms array.');
  return data;
}

function setStatus(message, isError = false) {
  statusLine.textContent = message;
  statusLine.style.color = isError ? '#a02742' : '#31258c';
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
