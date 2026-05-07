# Netlify Setup Guide

Netlify is the recommended free host for this version because it can deploy the static website from GitHub and process the built-in contact form.

## 1. Upload this project to GitHub

1. Create or open the `His-Herbs` GitHub repository.
2. Upload the contents of this folder into the root of the repository.
3. Make sure `index.html`, `.pages.yml`, `content/`, `assets/`, `thank-you/`, and `netlify.toml` are visible in the repository root.

## 2. Connect the repository to Netlify

1. Go to Netlify and create a new site from Git.
2. Choose GitHub as the provider.
3. Select the `His-Herbs` repository.
4. Use these settings:
   - Build command: leave blank
   - Publish directory: `.`
5. Deploy the site.

## 3. Contact form setup

The homepage contact form already includes Netlify Forms attributes:

```html
<form name="contact" method="POST" action="/thank-you/" data-netlify="true" netlify-honeypot="bot-field">
```

After the first deploy:

1. In Netlify, open the site dashboard.
2. Go to Forms.
3. Confirm that a form named `contact` was detected.
4. Test the form from the live website.
5. Optional: add email notifications in the Netlify Forms settings so new submissions are sent to the business email.

## 4. Custom domain

Once the Netlify site is live, you can connect a custom domain from the Netlify dashboard under Domain Management.

## Notes

- This site does not require a paid CMS.
- Netlify has free plan usage limits, so check the account dashboard occasionally.
- If form detection is disabled in Netlify, new forms will not process submissions.
