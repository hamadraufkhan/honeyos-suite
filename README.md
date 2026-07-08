# HoneyOS Suite

HoneyOS Suite is a React + Vite web experience inspired by the HoneyOS desktop concept.  
It includes a rich landing page and UI sections for desktop, settings, dashboard, file manager, and docs.

## Tech Stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS 4
- TanStack Router / Start packages
- Bun (used in CI and recommended locally)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed

### Install

```bash
bun install
```

### Run Development Server

```bash
bun run dev
```

### Build

Main app build:

```bash
bun run build
```

GitHub Pages static build:

```bash
bun run build:pages
```

### Preview Production Build

```bash
bun run preview
```

## Scripts

- `bun run dev` - start local dev server
- `bun run build` - standard project build
- `bun run build:pages` - static Pages build using `vite.pages.config.ts`
- `bun run build:dev` - build in development mode
- `bun run preview` - preview production output
- `bun run lint` - run ESLint
- `bun run format` - run Prettier

## Deploying to GitHub Pages

Deployment is automated via `.github/workflows/deploy-pages.yml`.

Flow:

1. Push to `main`
2. GitHub Actions runs `bun run build:pages`
3. Artifacts from `dist-pages` are uploaded and deployed to Pages

The workflow also creates `404.html` from `index.html` for client-side routing fallback.

## Project Structure

- `src/routes/` - route components
- `src/gh-pages-entry.tsx` - dedicated static entry for GitHub Pages build
- `vite.config.ts` - primary project config
- `vite.pages.config.ts` - static Pages-specific Vite config
- `.github/workflows/deploy-pages.yml` - GitHub Pages deployment workflow

## License

This project is private/internal unless you choose to publish it under a license.
