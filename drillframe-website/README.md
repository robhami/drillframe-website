# DrillFrame website — version 1

A responsive static marketing site for DrillFrame, created as a first design draft. Files: `index.html`, `styles.css`, `script.js`.

## Preview locally

Open `index.html` in a browser, or serve the folder with `python -m http.server 8000` and visit `http://localhost:8000`.

## Before publishing

- Confirm the name and relevant trademark rights before commercial launch.
- Confirm that you own `drillframe.com` before configuring the custom domain.
- Replace the provisional `robhami@yahoo.co.uk` address in `index.html` with your preferred business address.
- Replace the illustrative hero engineering chart with actual screenshots **only once those screenshots are cleared for public use**.
- Review all engineering/service descriptions and module development statuses for accuracy.
- Add privacy policy and cookie controls if deploying analytics or other tracking tools (none are included by default).
- Domain/DNS, business email, analytics, SEO metadata, legal footers and hosting are not yet configured.

## Deploy to GitHub Pages

1. Create a new public repository such as `drillframe-website`.
2. Upload these three web files into the repository root.
3. In repository Settings → Pages, choose deploy from main branch root.
4. Test the resulting GitHub Pages link.
5. Once `drillframe.com` is registered, configure the custom domain and DNS following GitHub's current documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
6. Enable HTTPS in GitHub Pages after DNS settles.

Static hosting is sufficient for this marketing site. The engineering app should remain a separate deployment.
