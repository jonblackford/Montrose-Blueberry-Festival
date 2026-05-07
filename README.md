# Montrose Blueberry Festival — Modern Website Redesign

This is a GitHub Pages-ready static website concept for the Montrose Blueberry Festival.

## Files

- `index.html` — site structure and content
- `styles.css` — responsive modern styling
- `script.js` — schedule filters, vendor search, countdown, mobile menu, and reveal animations
- `README.md` — publishing notes

## How to publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from this folder into the root of the repository.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save and wait for GitHub Pages to publish the site.

## Notes

- This version uses the current festival site’s public event, sponsor, vendor, application, and contact information as starter content.
- Images are referenced from the current public festival website. For a permanent production site, download approved images from the festival and place them in a local `assets/` folder, then update the image paths.
- The contact form was intentionally replaced with email and phone buttons because GitHub Pages does not process forms by itself. To add a working form, use a service like Formspree, Basin, Netlify Forms, or a custom backend.
- The application links currently point to the official application page. For production, replace each application item link with the direct PDF or registration link.
