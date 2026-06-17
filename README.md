# Personal Website

Personal website built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Prerequisites

- Node.js 18+
- npm

## Development

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:8080
```

Other useful scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
npm test         # run tests
```

## Deploy to GitHub Pages

The site deploys to the `gh-pages` branch via the `gh-pages` package.

```bash
npm run deploy   # builds, then publishes dist/ to the gh-pages branch
```

`deploy` runs `predeploy` (`npm run build`) automatically, so the single command builds and publishes.

In the GitHub repo settings, set **Pages → Source** to the `gh-pages` branch (root).
