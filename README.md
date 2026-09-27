# Nashrah Irshad — Book-Style Portfolio

An interactive, digital-book-style portfolio built with React and Vite. The site opens on a
leather-bound cover and turns like a real book — a left chapter-opener page and a right content
page, with a page-flip animation, page numbers, and Previous/Next navigation.

## Folder structure

```
book-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   └── components/
│       ├── Cover.jsx
│       ├── ChapterOpener.jsx
│       ├── Book.jsx
│       ├── Navigation.jsx
│       ├── AboutPage.jsx
│       ├── SkillsPage.jsx
│       ├── ProjectsPage.jsx
│       ├── CertificatesPage.jsx
│       └── ContactPage.jsx
```

## Install

```bash
npm install
```

## Run (development)

```bash
npm run dev
```

Then open the URL Vite prints (typically http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Notes

- Keyboard support: the ← and → arrow keys also turn the page.
- Certificates: `src/components/CertificatesPage.jsx` has an empty `certificates` array with the
  expected shape (`title`, `issuer`, `url`) — add entries there as they're earned; the gallery
  fills in automatically.
- All project links open in a new tab via `target="_blank" rel="noopener noreferrer"`.
