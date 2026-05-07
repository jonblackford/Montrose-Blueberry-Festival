# Editing Guide

## Fastest updates

### Use the visual content editor

Open `content-manager.html` after publishing or while running the site locally. From there you can add an event, edit an existing event, delete an event, add a form, validate the JSON, and download a replacement `site-data.json` file. Replace `data/site-data.json` in GitHub with the downloaded file.

The Events page calendar and list view both use the same `schedule` array, so one event update changes both views automatically.


### Change festival dates

Edit this section in `data/site-data.json`:

```json
"site": {
  "dates": "August 9–16, 2026",
  "year": "2026"
}
```

### Add or edit an event manually

Add a new object inside the `schedule` array:

```json
{
  "id": "event-blueberry-baking-contest",
  "title": "Blueberry Baking Contest",
  "date": "2026-08-15",
  "time": "2:00 PM–4:00 PM",
  "sortTime": "14:00",
  "location": "Entertainment Tent",
  "category": "Kids & Family",
  "description": "Community baking contest with blueberry desserts.",
  "featured": false
}
```

### Replace a form

Upload the new file to `downloads/`, then update the matching form's `url` field:

```json
"url": "downloads/marketplace-application-2027.pdf"
```

### Mark a form as coming soon

Use:

```json
"status": "Coming Soon",
"url": "",
"button": "Coming soon"
```

## Important notes

- Keep commas between JSON items.
- Dates should use `YYYY-MM-DD`.
- `sortTime` should use 24-hour time like `08:00`, `13:30`, or `20:00`.
- Do not delete the main section names like `schedule`, `forms`, `vendors`, or `sponsors`.


## Calendar behavior

- The Events page opens in calendar view by default.
- Visitors can switch to list view using the Calendar/List toggle.
- Calendar events come from the `schedule` array in `data/site-data.json`.
- Each event needs a `date` in `YYYY-MM-DD` format.
- Use `sortTime` in 24-hour format so events display in the correct order within each day.

## Downloadable forms

To update a PDF or application form, upload the file into the `downloads/` folder and update the matching form entry in `data/site-data.json`. For example, if the file is named `parade-application-2027.pdf`, the URL should be `downloads/parade-application-2027.pdf`.
