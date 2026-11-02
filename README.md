# Atul Baliyan · Developer portfolio

A static, responsive React Native developer portfolio with React, TypeScript, Vite, Tailwind CSS, Motion and Lucide. Charcoal surfaces, mint accents, original device studies, and the supplied professional portrait.

## Development

Use Node 24 LTS (Node 22 also supported).

```sh
npm ci
npm run dev
npm run lint
npm run build
npm test
npm run format:check
npm run preview
```

Open the printed URL at `/portfolio-website/`. `lint` performs strict TypeScript checking. Tests validate the production entry paths, project links, navigation targets and delivered assets; run build before tests. Browser checks should cover 320px, tablet and desktop, keyboard navigation, mobile-menu Escape behavior, and reduced motion.

## Editing

- Update typed project content, skill groups and destinations in `src/data/portfolio.ts`.
- Sections live in `src/components`; shared styling and tokens live in `src/styles.css`.
- Replace `public/assets/atul-portrait.webp` with an optimized portrait. The supplied WebP is approximately 82 KB; the face is not altered.
- Replace `public/resume/Atul_Baliyan_Resume.pdf` with the real résumé. The original PDF is copied intact. Hero view and download controls use the same base-aware URL.
- Update metadata in `index.html`, plus `public/sitemap.xml`, when changing the site URL. Social preview is `public/assets/social-preview.png`.
- Vite base is `/portfolio-website/`. Use `import.meta.env.BASE_URL` for public assets.

Project visuals are original CSS interface studies, not screenshots or claims of exact released UI. WallpaperHub is the only project with a Play Store button. The equation solver description follows its public README (Streamlit, OCR and SymPy), resolving the Flask discrepancy in the résumé. No private repository content is included.

## GitHub Pages

Repository: https://github.com/atulbaliyan/portfolio-website

1. In **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**.
2. Push validated commits to `main`. `.github/workflows/deploy.yml` installs from the lockfile, checks TypeScript, builds, runs smoke tests and deploys `dist` using the Pages environment.
3. Alternatively select **Actions → Deploy portfolio to GitHub Pages → Run workflow**.
4. Verify the deployment job succeeds before treating the published URL as live: https://atulbaliyan.github.io/portfolio-website/

The workflow uses minimal Pages permissions and deployment concurrency. No API keys, database, runtime server, or paid services are needed.

## Accessibility and motion

Semantic sections, skip link, descriptive portrait alt text, visible keyboard focus, active navigation, touch targets and an Escape-dismissable mobile menu are included. Reduced-motion preferences disable entry/scroll effects and smooth scrolling. Direct email replaces a server-dependent contact form.

## Delivery record

See `PROGRESS.md` and the Git history for incremental implementation milestones. The supplied résumé is the canonical professional source; exact performance metrics are intentionally omitted from the site copy.
