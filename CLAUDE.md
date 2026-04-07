# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # Production build
npm run lint     # ESLint (flat config)
npm run preview  # Preview production build locally
```

No test suite is configured.

## Architecture

**Stack**: React 19 + Vite 8, plain CSS (no Tailwind, no animation libraries). Deployed as a static SPA on Vercel.

### Routing

Custom client-side router in `App.jsx` using `window.history.pushState` and a `popstate` listener — no router library. Routes are string states (`home`, `about`, `projects`, `research`, `continuum`, `freightmind`, etc.) held in a `page` state variable. `vercel.json` rewrites all paths to `index.html`.

**Immersive project pages** (`Continuum.jsx`, `FreightMind.jsx`) bypass the standard layout entirely — App.jsx renders them without `<Nav>` or `<footer>` when those routes are active.

### Data Layer

Static data files drive the content:
- `src/data/projects.js` — project metadata (title, tags, stats, video path, CTA links)
- `src/data/research.js` — research paper metadata and GGIB benchmark structure

Components import from these files and render via `.map()`. There is no backend or API.

### Research / Paper Readers

`Research.jsx` manages an `activePaper` state. When a paper is opened, it swaps in a dedicated reader component from `src/components/papers/` (10 components total). Each reader renders its full content inline — content is hardcoded in the component, not fetched from files. The GGIB benchmark card is a separate expandable section with 6 collapsible parts.

### Design System

CSS variables in `index.css` define the full design system:
- `--bg: #050A14` (near-black background)
- `--cyan: #00D4FF`, `--purple: #9B4DFF` (primary accent colors)
- Fonts: Syne (display/headings), Outfit (body) — loaded from Google Fonts
- Glass morphism pattern: `backdrop-filter: blur(24px)` + semi-transparent backgrounds
- Animations: pure `@keyframes` CSS — `drift` (floating orbs), `blink`, `slideDown`, `slideLeft`, `fadeIn`
- Responsive sizing via `clamp()` throughout (e.g., hero name: `clamp(3.2rem, 8vw, 8rem)`)

### Video Handling

Project hero cards use HTML5 `<video autoPlay muted loop playsInline>` pointing to files in `/public` (`continuum-bg.mp4`, `freightmind-bg.mp4`). Vignette overlays are CSS gradient masks on top of the video.

### Public Assets

`/public` contains the background videos, downloadable PDFs (`CONTINUUM.pdf`, `FREIGHTMIND.pdf`), a `/papers/` subdirectory with research PDFs, and `professor-bone-avatar.png` (used as a fixed-position watermark in the hero).
