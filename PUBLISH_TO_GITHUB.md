# How to Publish This Site on GitHub Pages

## Option 1: Upload through the GitHub website

1. Go to GitHub and create a new repository.
   - Example repository name: `montrose-greenhouse`
   - Keep it public if using free GitHub Pages.
2. Open the new repository.
3. Click **Add file → Upload files**.
4. Drag all files and folders from this website package into GitHub.
   - Make sure `index.html` is in the main/root area, not inside an extra folder.
5. Click **Commit changes**.
6. Go to **Settings → Pages**.
7. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/root`
8. Click **Save**.
9. Wait a few minutes. GitHub will show the published site link near the top of the Pages settings.

Your site URL will usually look like this:

```text
https://your-github-username.github.io/montrose-greenhouse/
```

## Option 2: Publish with Git commands

Replace the repository URL with your own GitHub repo URL.

```bash
git init
git add .
git commit -m "Initial Montrose Greenhouse website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/montrose-greenhouse.git
git push -u origin main
```

Then turn on GitHub Pages:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Select `main` and `/root`.
5. Save.

## Custom domain setup

If the business buys a custom domain, create a file named `CNAME` in the root of the repository with only the domain inside it.

Example:

```text
montrosegreenhouse.com
```

Then update DNS through the domain registrar using GitHub Pages' current DNS instructions.

## After publishing

Test these items:

- The homepage loads.
- All photos load.
- The phone button opens the phone app on mobile.
- The directions button opens Google Maps.
- The Facebook link opens the correct page.
- The site looks good on a phone.
