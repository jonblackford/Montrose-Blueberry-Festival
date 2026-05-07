# Editing Guide

## Fastest updates

### Change festival dates

Edit this section in `data/site-data.json`:

```json
"site": {
  "dates": "August 9–16, 2026",
  "year": "2026"
}
```

### Add an event

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
