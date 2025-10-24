# Sports Science Reaction Time Tester

This repository hosts a lightweight, offline-friendly reaction time tester that can be published with GitHub Pages.

## Run it locally

1. Download or clone this repository.
2. Open the `index.html` file directly in any modern desktop browser (double-click it in your file manager or drag it into a browser window).
3. The page will load the tester with all assets bundled, so no additional build step is required.
4. Complete the five trials. When the screen turns green, press the **J** key as quickly as you can. Your average reaction time is displayed once all trials are complete.
5. Your most recent session is saved to `localStorage`. Open `data.html` in the same browser to review the recorded times in a table. Clearing browser storage removes the saved results.

> **Tip:** If you prefer to serve the files over HTTP instead of opening them directly, run a static file server (for example `npx serve .`) from the project root and visit `http://localhost:3000/index.html`.

## Deploy on GitHub Pages

1. Commit the repository contents to Git.
2. Push the branch to GitHub.
3. In your repository settings, open the **Pages** section.
4. Choose **Deploy from a branch**.
5. Select your branch (usually `main`) and the root folder (`/`), then click **Save**.
6. Wait for Pages to build. Your tool will be available at `https://<username>.github.io/<repository-name>/`.
7. Visit the published URL once while online so the service worker can cache the assets. Subsequent visits will work offline.

The `index.html`, `data.html`, and `sw.js` files are all that GitHub Pages needs; no build or bundling step is required.
