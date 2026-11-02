# DrillFrame website

A responsive static website for DrillFrame's specialist technical consulting and proprietary engineering software. Web files: `index.html`, `styles.css`, `script.js` and `favicon.svg`.

## Preview locally

Open `index.html` in a browser, or serve the folder with `python -m http.server 8000` and visit `http://localhost:8000`.

No dependency installation or build step is required. Contact actions use email links; there is no contact form or backend.

## Before publishing

- Confirm the name and relevant trademark rights before commercial launch.
- Check desktop and mobile layouts, keyboard navigation, and email links with a configured mail client. Confirm receipt of a test enquiry at `rob@drillframe.com`.
- Replace the illustrative hero engineering chart with actual screenshots **only once those screenshots are cleared for public use**.
- Review all engineering/service descriptions, Robert Hamilton's profile and module development statuses for accuracy. Confirm JarFrame's supported calculation scope and the distinction from preliminary dynamic-impact research.
- Add privacy policy and cookie controls if deploying analytics or other tracking tools (none are included by default).

## Deploy to GitHub Pages

This is the existing `robhami/drillframe-website` repository. Preserve `CNAME` (`drillframe.com`), existing Pages settings, workflows and DNS configuration. The web assets use relative paths and are suitable for static GitHub Pages hosting.

Before publishing, confirm the configured Pages source under repository Settings → Pages. Review the website diff and preview it before authorising any commit, push, merge or deployment. Include `favicon.svg` with the other web files. Test the published site after an authorised release.

Static hosting is sufficient for this marketing site. The engineering app should remain a separate deployment.
