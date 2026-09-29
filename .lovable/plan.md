## Deploy to GitHub Pages (repo: `Mazen-hisham`)

Since this is a **project site**, it will be served from `https://mazenhisham1.github.io/Mazen-hisham/`, so Vite needs a matching `base` path. I'll also add a GitHub Actions workflow that builds and deploys on every push to `main`, and fix SPA routing for GitHub Pages (which doesn't support automatic fallback like Lovable hosting does).

### Changes

1. **`vite.config.ts`** — Add `base: "/Mazen-hisham/"` so built asset URLs resolve correctly under the project subpath.

2. **`src/App.tsx`** — Pass `basename="/Mazen-hisham"` to `<BrowserRouter>` so React Router works under the subpath.

3. **`.github/workflows/deploy.yml`** (new) — GitHub Actions workflow that:
   - Triggers on push to `main`
   - Installs deps with `npm ci`
   - Runs `npm run build`
   - Deploys `dist/` to GitHub Pages using the official `actions/deploy-pages` action

4. **`public/404.html`** (new) — SPA fallback for GitHub Pages. GitHub Pages serves `404.html` for unknown paths; a small script redirects back to `index.html` preserving the path, so deep links and refresh work.

5. **`index.html`** — Add the matching redirect-recovery snippet (single sessionStorage hop) so the router lands on the right route after the 404 redirect.

### One-time setup you'll do on GitHub (not code)

- Push these changes to `main`
- In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**
- First workflow run will publish to `https://mazenhisham1.github.io/Mazen-hisham/`

### Notes / trade-offs

- The `base` path is hardcoded to `/Mazen-hisham/`. If you ever rename the repo, both `vite.config.ts` and `App.tsx` need updating.
- Your Lovable preview at `https://mazenhisham.lovable.app` will keep working — Lovable serves from `/`, and the `base` setting only affects the production build output paths. (If you notice asset issues in the Lovable preview after the change, we can switch to a conditional `base` based on mode.)
- The `mailto:` contact form will continue to work on GitHub Pages (no backend needed).
