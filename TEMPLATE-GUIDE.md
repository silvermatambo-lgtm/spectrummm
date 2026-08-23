# WebDevPro Master One-Page Template

This project is the deployment-safe master copy for rebranding client websites.

## What was changed
- Removed Lovable project metadata and Lovable runtime/error-reporting code.
- Removed the Lovable-specific Vite/TanStack/Nitro deployment wrapper.
- Converted the site to a plain Vite + React static SPA for predictable hosting.
- Added Vercel SPA rewrites, Netlify `_redirects`, and Cloudflare assets config.
- Replaced Lovable-only `.asset.json` image references with local `/public/images/` files.
- Added `src/config/site.ts` as the central client data/configuration file.

## Rebranding a new client
1. Copy this project to a new folder/repository.
2. Edit `src/config/site.ts` with the client's business information.
3. Replace the files in `public/images/` with the client's real logo and photos. You may keep the same filenames to avoid code changes.
4. Adjust component wording only where an industry needs special sections.
5. Run `npm install` once, then `npm run build`.
6. Confirm that `dist/` is generated without errors.

## Deploy
### Vercel
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- `public/_redirects` is already included.

### Cloudflare Pages
- Build command: `npm run build`
- Build output directory: `dist`

## Important image note
The original Lovable ZIP did not contain the real image binaries. It contained only Lovable `.asset.json` pointers. Placeholder SVGs are included so this master always builds and deploys. Replace them with real client images before sending a demo.

## Deployment-stability rule
Keep `package.json`, `vercel.json`, `.nvmrc`, `.npmrc`, `vite.config.ts` and `tsconfig.json` unchanged between ordinary client rebrands. Change only content, images and intentional design settings.
