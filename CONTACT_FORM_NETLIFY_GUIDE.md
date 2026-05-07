# Netlify Contact Form Guide

The homepage includes a full Netlify-ready contact form named `contact`.

## What the form collects

The form collects:

- First name
- Last name
- Email
- Phone
- Preferred contact method
- City
- Request type
- Date needed
- Occasion
- Budget range
- Pickup or delivery preference
- Recipient name, if floral delivery
- Delivery address, if applicable
- Full message/details
- Customer contact list opt-in
- Contact permission confirmation

## Why it works with Netlify

The form is plain HTML inside `index.html`, which is what Netlify needs in order to detect it during deployment.

The form includes:

```html
<form name="contact" id="contact-form" method="POST" action="/thank-you/" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
</form>
```

The form also includes a hidden honeypot field named `bot-field` to help reduce spam.

## How to view submissions

After deploying on Netlify:

1. Open the site in Netlify.
2. Go to **Forms**.
3. Select the form named **contact**.
4. View each submission, export submissions as a CSV, or set up email notifications.

## How to send submissions to the business email

1. In Netlify, open the deployed site.
2. Go to **Forms**.
3. Open the **contact** form.
4. Go to **Form notifications**.
5. Add an email notification for the business owner.

## Important notes

- The form must be tested on the live Netlify URL, not by opening the file directly on a computer.
- If the form is not showing up in Netlify, redeploy the site and make sure form detection is enabled in the Netlify site settings.
- Do not remove the `name`, `method`, `data-netlify`, `netlify-honeypot`, or hidden `form-name` fields from the form.
