# Sports Science Reaction Time Tester

This repository hosts a lightweight, offline-friendly reaction time tester with four distraction conditions that can be published with GitHub Pages.

## Run it locally

1. Download or clone this repository.
2. Open the `index.html` file directly in any modern desktop browser (double-click it in your file manager or drag it into a browser window).
3. The page will load the tester with all assets bundled, so no additional build step is required.
4. Each run contains four distraction sets with six trials per set. Follow the splash instructions before every set and press the **J** key as soon as the background flashes green.
5. In the distraction sets, tap **F** whenever the large **X** appears and press the **Space bar** to knock down the progress bar when it creeps upward. These distractions keep participants busy, but only the J-key reaction is recorded.
6. After all four sets finish, review the per-set tables on the main page. Your most recent session is also saved to `localStorage`; open `data.html` in the same browser to revisit every set table later. Clearing browser storage removes the saved results.

### Distraction sets

1. **Baseline (no distraction)** – react to the green background as quickly as possible.
2. **Letter distraction** – keep reacting with **J** while hiding the large **X** with the **F** key.
3. **Letter + progress bar** – continue the letter task and tap **Space** to push the creeping bar back down.
4. **Rainbow celebration** – the letter and progress bar remain while a rainbow backdrop and confetti add extra visual noise.

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
