# Yucheng Liu · academic website

Personal research website at https://yuchengliu0424.github.io/, published from the root of `main` with GitHub Pages.

Plain HTML and CSS; no build step or external dependencies. Edit `index.html` for content, `styles.css` for presentation, and `papers/` for downloadable manuscripts. Preview with `python -m http.server 8000`.

The introduction links to the November 2026 CVs in `cv/`: the one-page version is the primary download, with the full two-page version alongside it. Update both PDFs from the current files in the local resume folder when revising the CV.

Asset caching: `index.html` uses content-hash query versions for `styles.css` and `site.js`. Refresh the corresponding `?v=` value (first 12 SHA-256 characters) whenever either file changes, so returning visitors receive matching HTML and assets.
