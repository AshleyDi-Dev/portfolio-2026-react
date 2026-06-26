# Portfolio 2026 — React

Ashley DiBuduo's portfolio, built with Vite + React Router. A React rebuild of the
original static HTML/CSS site, with shared components and consolidated styles.

## Tech
- Vite + React 18
- React Router (SPA)
- react-helmet-async (per-page meta / SEO)
- Plain CSS, scoped per page-root (`.page-home`, `.cs-root`, …)

## Getting started
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Structure
- `src/pages/` — standard pages + `casestudies/` (5 case studies)
- `src/components/` — Layout, Nav, MobileMenu, Footer, CaseStudyLayout, ProjectCard, Seo
- `src/data/projects.js` — project list (home featured + projects grid)
- `src/styles/` — `base`, `layout`, `components`, `case-study`, plus `pages/` and `case-studies/`
- `public/images/` — images, tool icons, résumé PDF
