# Free Platform Recommendation

## Recommended free stack

**Netlify + Pages CMS + GitHub**

This is the best free setup for this project because:

- The site stays static, fast, and simple.
- Netlify can host the site and process the contact form.
- Pages CMS gives the customer an editing dashboard.
- GitHub keeps a version history of every change.
- No paid CMS subscription is required.

## How it works

1. Website files live in GitHub.
2. Netlify publishes the site from GitHub.
3. The customer logs into Pages CMS.
4. Pages CMS edits `content/site.json` and saves changes to GitHub.
5. Netlify automatically redeploys the updated site.

## Tradeoffs

- The customer will need a GitHub login or repository access.
- This is not quite as visual as CloudCannon, but it is free.
- Contact forms work best on Netlify, not GitHub Pages.

## Why not only GitHub Pages?

GitHub Pages is good for free hosting, but it does not handle form submissions by itself. For a real contact form, Netlify is the simpler free option.
