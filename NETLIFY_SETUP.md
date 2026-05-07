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

## 3. Confirm the contact form is collecting submissions

The homepage now includes a full Netlify-ready contact form with customer contact fields, request details, optional delivery details, and a customer contact list opt-in.

The form includes Netlify's required static HTML attributes:

```html
<form name="contact" id="contact-form" method="POST" action="/thank-you/" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
</form>
```

After the first deploy:

1. In Netlify, open the site dashboard.
2. Go to **Forms**.
3. Confirm that a form named **contact** was detected.
4. Open the live Netlify website and submit a test request.
5. Return to **Forms → contact** and confirm the test submission appears.
6. Optional: export submissions as a CSV for a customer/contact list.

## 4. Add email notifications

1. In the Netlify site dashboard, go to **Forms**.
2. Select the **contact** form.
3. Go to **Form notifications**.
4. Add an email notification for the business owner or staff member who should receive new requests.

## 5. Custom domain

Once the Netlify site is live, you can connect a custom domain from the Netlify dashboard under Domain Management.

## Notes

- This site does not require a paid CMS.
- Netlify has free plan usage limits, so check the account dashboard occasionally.
- The form must be tested on the live Netlify URL, not by opening `index.html` directly on a computer.
- If form detection is disabled in Netlify, new forms will not process submissions.
