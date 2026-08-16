# Contributing to onepage-zephyr

Thanks for considering a contribution! This project aims to stay small,
fast and dependency-light — please keep that in mind when proposing changes.

## Getting started

1. Fork the repository and clone your fork
2. Use the Node version in `.nvmrc` (Node 20+): `nvm use`
3. Install dependencies: `npm install`
4. Start the dev server: `npm run dev`
5. Create a branch for your change: `git checkout -b feat/my-change`

## Development workflow

- `npm run dev` — start the local dev server with hot reload
- `npm run lint` — run ESLint (flat config, Astro + TypeScript + a11y rules)
- `npm run format` — format the codebase with Prettier
- `npm run check` — run Astro's type checker
- `npm run build` — produce a production build in `dist/`
- `npm run preview` — preview the production build locally

Please run `npm run lint`, `npm run format:check` and `npm run build` before
opening a pull request — the same checks run in CI.

## Commit messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add pricing section
fix: correct contrast on dark theme buttons
docs: update deployment guide
chore: bump astro to 5.19
```

## Pull requests

1. Keep PRs focused — one change per PR is easier to review and revert
2. Update `README.md` / `src/content/site.json` docs if behavior changes
3. Make sure `npm run build` succeeds and CI (lint, format, build,
   Lighthouse CI) is green
4. Describe **what** changed and **why** in the PR description
5. Link any related issue

## Reporting bugs / requesting features

Please open a GitHub issue with:

- A clear, descriptive title
- Steps to reproduce (for bugs) or the use case (for features)
- Screenshots if relevant

## Code style

- TypeScript strict mode — avoid `any`, prefer explicit types
- Astro components only — no React/Vue/Svelte unless there's no alternative
- Tailwind utility classes over custom CSS where possible
- Keep components accessible: semantic HTML, `aria-*` attributes, keyboard
  support

By contributing, you agree that your contributions will be licensed under
the [MIT License](./LICENSE).
