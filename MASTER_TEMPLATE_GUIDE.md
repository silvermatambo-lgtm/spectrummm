# WebDevPro Master One-Page Website Template

This branch is the reusable WebDevPro master template created from the working Spectrum SA deployment after fixing the Vercel dependency conflict, blank-page runtime crash, favicon mismatch, and SPA deployment configuration.

## Rebrand workflow

1. Edit `src/config/site.ts` first. This is the main rebrand file for business name, slogan, SEO, contact details, navigation, hero slides, about content, services, benefits, process, gallery, FAQs, chatbot and footer content.
2. Replace the images in `public/images/` with the new client's logo, hero images and gallery images. Update the image paths in `src/config/site.ts` if the filenames change.
3. Update the favicon links in `index.html` to the same client logo used by `siteConfig.logo`. Keep all favicon links pointing to the same logo file.
4. Do not upgrade Vite, Tailwind, React or the Vite plugins unless compatibility has been checked. The pinned versions in `package.json` are intentional.
5. Keep `vercel.json` unchanged for standard Vercel deployments. It forces the Vite build command, the `dist` output directory and SPA routing.
6. Do not restore fixed gallery indexes in `src/lib/media.ts`. The helper functions intentionally use safe fallbacks so a client website cannot crash because it has fewer gallery images.
7. Keep at least one hero slide. Gallery items can be fewer than five because the template now handles missing items safely.
8. Before deployment, check that `npm run build` succeeds. On Vercel, use the repository root, framework Vite, build command `npm run build`, and output directory `dist` if manual settings are requested.

## Locked technical baseline

- React 19.2.0
- React DOM 19.2.0
- Vite 7.3.1
- Tailwind CSS 4.2.1
- `@tailwindcss/vite` 4.2.1
- `@vitejs/plugin-react` 5.2.0
- Node 22.x
- npm 10.x
- Vercel output: `dist`

## Important rule

For normal client rebrands, do not edit the technical framework files. Rebrand through `src/config/site.ts`, client images and the favicon/title in `index.html`. This keeps future websites on the same proven deployment baseline.
