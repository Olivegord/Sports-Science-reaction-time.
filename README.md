# Reaction Time Distraction Lab

A self-contained reaction time tester for sports science experiments. The app runs entirely in the browser (including GitHub Pages) and records four different distraction conditions, six trials each, while measuring only the moment the participant presses **J** after the screen turns green.

## Features

- Four distraction sets with on-screen instructions between each block:
  1. **Baseline** – wait for green and press **J**.
  2. **Letter X Task** – clear a flashing **X** with **F** while still reacting to green with **J**.
  3. **Progress Bar Game** – repeat the X task and tap **Space** to knock back a filling bar.
  4. **Rainbow Confetti Finale** – all distractions together plus celebratory confetti and a rainbow theme that never turns green (so the go signal remains distinct).
- Six trials per set with automatic averages and a per-set data table on the tester page.
- Bright, low-distraction default styling so lab participants view a neutral white background until the go signal turns the screen green.
- Splash instructions before each block so participants understand the current distractions.
- Local storage of the most recent sessions for later review on a dedicated data page.
- Tables record which distractions were active in each set so observations remain clear during analysis.
- Offline support via a service worker so the site can run without internet once cached.

## Getting Started Locally

1. Clone or download this repository.
2. Open `index.html` in a modern browser. You can double-click the file or serve the folder with a lightweight server such as:

   ```bash
   python -m http.server 8000
   ```

   Then visit <http://localhost:8000>.
3. Follow the on-screen instructions. After completing all four sets the session is saved automatically.
4. Open `data.html` to view the stored tables, copy results into a lab notebook, or clear prior sessions.

> **Tip:** If the browser blocks the service worker while opening files directly, use the temporary local server command above.

## Deploying to GitHub Pages

1. Commit these files to your GitHub repository and push to the `main` branch (or whichever branch Pages is configured to serve).
2. In the repository settings, enable GitHub Pages for the branch and root directory.
3. After Pages finishes building, visit the published URL (typically `https://<username>.github.io/<repository>/`).
4. Load both `index.html` and `data.html` once while online so the service worker can cache assets. Afterwards the tester will continue working offline on that device.

### GitHub Pages deployment checklist

If the site doesn’t appear after a merge, walk through this sequence in the GitHub web UI:

1. **Confirm the target** – open **Settings → Pages** and ensure “Source” is set to *Deploy from a branch*, the branch matches your production branch (usually `main`), and the folder is set to `/` unless you are serving from `/docs`.
2. **Verify a build ran** – in **Actions**, look for a fresh “pages build and deployment” run at the time of your push. If it failed, open the run and choose **Re-run all jobs** after resolving any issues noted at the top of the log.
3. **Check the branch contents** – on GitHub, browse the branch you are deploying from and confirm that `index.html`, `data.html`, and `sw.js` live in the folder selected for Pages.
4. **Confirm the URL** – copy the link shown in **Settings → Pages**. For project sites the format is `https://<username>.github.io/<repo-name>/`; for user sites it is `https://<username>.github.io/`.
5. **Save configuration changes** – if the Save button was previously greyed out, re-select both the branch and folder in **Settings → Pages** so the Save button activates, then click it.
6. **Force a rebuild** – either toggle the Pages source to “GitHub Actions” and back to “Deploy from a branch” (re-selecting branch and folder each time) or open the latest “pages build and deployment” run in **Actions** and choose **Re-run all jobs**.
7. **Review common blockers** – Pages will not deploy if it points to the wrong branch or folder, if no `index.html` exists in that folder, or if a custom domain/DNS is misconfigured. Plain static files at the repository root avoid Jekyll’s `_`-prefixed folder exclusions.

The service worker caches the HTML files and assets at scope. If you change any HTML, CSS, or JavaScript later, bump the `CACHE_VERSION` constant in `sw.js` before redeploying to force browsers to refresh their caches.

## Data Handling

- Session data is stored only in the browser’s `localStorage` under the key `reactionTimeSessions-v2`.
- The data page can display up to the ten most recent sessions and lets you clear them from the browser.
- For older single-set sessions (from a previous version of the project), the viewer converts them into a “Legacy Session” table so nothing is lost.

## Keyboard Summary

| Control | Purpose |
| ------- | ------- |
| **J** | Stop the timer after the screen turns green (only measurement recorded). |
| **F** | Dismiss the distraction “X” when it appears (Sets 2–4). |
| **Space** | Knock back the progress bar (Sets 3–4). |

## License

Use, adapt, or extend the project as needed for your investigation.
# Sports Science Reaction Time Tester

This repository hosts a lightweight, offline-friendly reaction time tester that can be published with GitHub Pages.

## Getting started

Open `index.html` in any modern browser to run the test. The app will guide you through five trials. When the screen turns green, press the **J** key as quickly as you can. The average reaction time is displayed once all trials are complete.

Your most recent session is saved to `localStorage`. Visit `data.html` to review the recorded times in a table. Clearing browser storage removes the saved results.

To deploy with GitHub Pages (user or project site), commit these files to the repository and enable GitHub Pages in the repository settings, pointing it to the `main` branch root.
