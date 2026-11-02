# Implementation checklist

- [x] Inspect empty repository and supplied assets
- [x] Scaffold React, TypeScript, Vite and Tailwind
- [x] Navigation
- [x] Hero and assets
- [x] Featured work
- [x] About, toolbox and experience
- [x] Contact and footer
- [x] SEO, deployment workflow and local verification
- [x] Push validated commits and verify GitHub Pages deployment

## Validation

- Strict TypeScript lint, production build, production smoke tests and formatting pass.
- Browser: desktop composition reviewed via a 1440px frame; narrow mobile reviewed at 307px and in a 320px frame. No horizontal overflow at 307px. Mobile menu opens and closes with Escape.
- All three project repositories verified public. WallpaperHub Play Store listing resolves. Equation solver README confirms Streamlit.
- Original résumé copied intact; portrait is the supplied 82 KB WebP.
- Native browser viewport resizing is unavailable; tablet layout has CSS coverage but no dedicated viewport screenshot.

- First CI run exposed a Node 24/npm clean-install incompatibility with Tailwind optional dependencies. CI now matches the tested Node 22/npm 10 toolchain.

- Deployment succeeded: https://github.com/atulbaliyan/portfolio-website/actions/runs/41531421393
- Live homepage, resume PDF and portrait each return HTTP 200. Published page rendered in browser.
