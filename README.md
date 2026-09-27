# laihaibo.github.io

Personal website of [Lai Haibo](https://github.com/laihaibo), built with **Next.js** and an Apple-style **Liquid Glass** design (light & dark themes).

## Tech Stack

- [Next.js](https://nextjs.org/) 15 (App Router) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- Lightweight custom i18n (zh-CN / en) — no extra dependencies
- Pure CSS aurora background (no particle libraries)

## Development

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build & Deploy

The site is statically exported (`output: 'export'`) and deployed to **GitHub Pages** via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `master`. Build output goes to `out/`; `public/.nojekyll` keeps GitHub Pages from ignoring `_next/` assets.

```bash
npm run build   # static export → out/
```

## Structure

```
src/
├── app/            # layout, home, about, 404, sitemap, robots
├── components/     # glass UI components (header, hero, repo list, …)
└── i18n/           # zh-CN / en dictionaries + provider
public/
├── .nojekyll       # serve _next/ assets on GitHub Pages
├── avatar.svg
└── favicon.svg
```

## License

All rights reserved.
