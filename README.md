# laihaibo.github.io

Personal homepage for Lai Haibo, built with Vue 3 + Vite + Tailwind CSS v4.

## Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: Vue Router 4 (hash mode)
- **i18n**: Vue I18n 9 (Chinese / English)

## Local Development

```bash
npm install
npm run dev
```

The dev server will start at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output is in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Deployment

Push to the `master` branch triggers GitHub Actions, which builds and deploys to GitHub Pages automatically.

The workflow is defined in `.github/workflows/deploy.yml`.

## Project Structure

```
src/
  assets/main.css      -- Tailwind v4 theme config + animations
  components/          -- Reusable Vue components
  i18n/                -- Internationalization (zh-CN, en)
  layouts/             -- Page layout wrappers
  router/              -- Vue Router config (hash mode)
  views/               -- Page views (Home, About)
public/
  404.html             -- Old URL redirect handler
  avatar.svg           -- Profile avatar
```

## License

All rights reserved.
