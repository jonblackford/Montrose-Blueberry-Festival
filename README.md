# Montrose Blueberry Festival Website

A modern, multi-page, GitHub Pages-ready static site for the Montrose Blueberry Festival.

## Pages included

- `index.html` — homepage
- `schedule.html` — filterable event schedule
- `events.html` — major festival events and traditions
- `forms.html` — applications, registrations, and downloadable forms
- `vendors.html` — searchable vendor directory
- `sponsors.html` — sponsor recognition
- `news.html` — festival updates
- `contact.html` — contact information and email helper
- `content-manager.html` — local helper for editing the site data

## How to edit events, forms, vendors, sponsors, and news

Most of the website content is stored in:

```text
data/site-data.json
```

Open that file and edit the matching section:

- `schedule` — add or change events
- `forms` — add, remove, or replace downloadable forms
- `vendors` — update marketplace, food, and special vendor lists
- `sponsors` — update sponsor groups
- `news` — update news cards
- `eventOverview` — update the main event cards

## How to update a downloadable form

1. Add the new file to the `downloads/` folder.
2. Open `data/site-data.json`.
3. Find the form inside the `forms` array.
4. Change the `url` value to the new file path.

Example:

```json
{
  "title": "2027 Super Parade Application",
  "category": "Vendors",
  "date": "2027-08-14",
  "status": "Download",
  "description": "Application for parade entries.",
  "url": "downloads/parade-2027.pdf",
  "button": "Download PDF"
}
```

## Optional content manager

Open `content-manager.html` after the site is running. It lets you add events or forms and download a new `site-data.json` file.

Because GitHub Pages is static hosting, the content manager cannot save changes directly to GitHub by itself. You still need to upload or commit the updated JSON file.

## Publishing to GitHub Pages

1. Upload all files to your GitHub repository.
2. Go to **Settings → Pages**.
3. Set the source to the main branch and root folder.
4. Save.
5. Wait for GitHub Pages to publish.

## Local preview

Because the site loads JSON with JavaScript, preview it through a local server instead of double-clicking the HTML file.

From the folder, run:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```
