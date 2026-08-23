# WebDevPro Master Template — Deployment

This master is prepared for Vercel first and Cloudflare Pages second.

## Vercel — recommended

1. Create a GitHub repository and upload the contents of this folder.
2. In Vercel choose **Add New > Project** and import that repository.
3. Vercel should read `vercel.json` automatically.
4. Expected settings:
   - Framework: Vite
   - Install Command: `npm install --no-audit --no-fund`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Node.js: 22.x
5. Click Deploy. You do not run npm commands manually in Vercel.

## Cloudflare Pages

Connect the same GitHub repository.

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22

## Rebranding a new client

Change business content in `src/config/site.ts` and replace the files in `public/images/`.
Do not rename or restructure the build files unless necessary.

## Reliability rules

- No Lovable runtime or Lovable asset URLs.
- Client images are ordinary local files under `public/images/`.
- Dependency versions are pinned (no `^` or `~`).
- Node is pinned to 22 for consistent cloud builds.
- Do not add packages unless the client site genuinely needs them.
