
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
});

function setupTabs() {
  document.querySelectorAll('[data-editor-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('[data-editor-tab]').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('[data-editor-section]').forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`[data-editor-section="${tab.dataset.editorTab}"]`).classList.add('active');
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
    syncEditor();
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
}

function collect(selector) {
  const result = {};
  document.querySelectorAll(selector).forEach(input => {
    const key = input.dataset.newEvent || input.dataset.newForm;
    result[key] = input.value.trim();
  });
  return result;
}

function clearFields(selector) {
  document.querySelectorAll(selector).forEach(input => {
    if (input.tagName === 'SELECT') input.selectedIndex = 0;
    else input.value = '';
  });
}

function syncEditor() {
  editor.value = JSON.stringify(editorData, null, 2);
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
