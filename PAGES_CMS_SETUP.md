# Pages CMS Setup Guide

Pages CMS is the free editing layer for this project. It lets the customer edit `content/site.json` through a friendly interface instead of touching code.

## What the customer can edit

The customer can update:

- Business name and tagline
- Hero headline and intro text
- Announcement / hours note
- Phone number and address
- About section
- Services
- Seasonal highlights
- Gallery photos
- Contact section intro
- Footer text

## Setup steps

1. Upload this project to GitHub.
2. Go to the Pages CMS hosted app.
3. Sign in with GitHub.
4. Install the Pages CMS GitHub App on the account that owns the `His-Herbs` repository.
5. Open the `His-Herbs` repository in Pages CMS.
6. Pages CMS should automatically find `.pages.yml` in the repository root.
7. Open **Website Content** and edit the fields.
8. Save changes.
9. Netlify will redeploy the website after the content file is updated in GitHub.

## Customer access

For the easiest setup, the customer should have a GitHub account and be granted access to the repository. They do not need to edit code directly; they only need to use the Pages CMS interface.

## Important notes

- Uploaded customer photos will go into `assets/uploads/`.
- Keep image file sizes reasonable so the website stays fast.
- The site reads content from `content/site.json`, so most page edits should happen there.
