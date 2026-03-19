# Women in Tech Meetup 2026 — site

Next.js app (static export) for the event landing page.

## GitHub Pages

1. Repo **Settings → Pages**
2. **Build and deployment → Source**: choose **GitHub Actions** (not “Deploy from a branch”).
3. Push to `main` (or `master`). The workflow uploads the `out/` folder from `next run build`.

If the site URL shows the README or looks broken, the Pages source is almost always still set to a **branch** (GitHub then builds Jekyll from the repo root / `docs` and never uses your Next build).

### Repo is `yourname.github.io`

Use a site at the domain root: remove the `NEXT_PUBLIC_BASE_PATH` env block from `.github/workflows/deploy-pages.yml` before building.

## Local

```bash
npm install
npm run dev
```

Static export (same as CI):

```bash
NEXT_PUBLIC_BASE_PATH=/wit-event npm run build
npx serve out
```

Adjust `NEXT_PUBLIC_BASE_PATH` to match your repo name, or leave unset for `/`.
