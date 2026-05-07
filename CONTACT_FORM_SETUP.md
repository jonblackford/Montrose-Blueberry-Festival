# Contact Form Setup

The site now includes a full contact form with fields for:

- Name
- Phone
- Email
- Request type
- Date needed
- Pickup or delivery preference
- Delivery address
- Message/details

## Recommended: CloudCannon Forms

If the site is hosted on CloudCannon:

1. In CloudCannon, open the site settings.
2. Go to Hosting > Forms.
3. Create an inbox named `contact`.
4. Connect the inbox to this site.
5. Add the customer's email as a form target/notification recipient.
6. Submit a test form from the live site.
7. Confirm the submission appears in CloudCannon and arrives by email.

The form includes this hidden field for CloudCannon:

```html
<input type="hidden" name="inbox_key" value="contact" />
```

If you name the inbox something else, update the `value="contact"` text to match the inbox key.

## Optional: Netlify Forms

If you host on Netlify instead of CloudCannon, the same form is already prepared with:

```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
```

After deploying on Netlify, submit a test form, then turn on email notifications in the Netlify Forms dashboard.

## Same-day requests

The form includes a note that same-day availability is not guaranteed and that calling is fastest.
