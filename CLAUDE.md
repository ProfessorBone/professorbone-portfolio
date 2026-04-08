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

Custom client-side router in `App.jsx` — `pageFromPath()` extracts the URL pathname and validates it against a whitelist: `["home","about","projects","research","education","academy","contact","continuum","freightmind","buildguide"]`. Route state is a plain string held in `page`; navigation calls `setPage(page)` which updates state + `window.history.pushState()` + scrolls to top. `vercel.json` rewrites all paths to `index.html`.

**Immersive full-screen pages** (`Continuum.jsx`, `FreightMind.jsx`, `BuildGuide.jsx`) bypass the standard layout entirely — App.jsx renders them without `<Nav>` or `<footer>` when those routes are active.

### Data Layer

Static data files drive the content:
- `src/data/projects.js` — project metadata (id, title, description, tags, comingSoon flag)
- `src/data/research.js` — research paper metadata and `ggibParts[]` array (6 parts with title + file reference)

Components import from these files and render via `.map()`. There is no backend or API.

### Research / Paper Readers

`Research.jsx` manages an `activePaper` state. When a paper is opened, it swaps in a dedicated reader component from `src/components/papers/` (10 components total). Each reader renders its full content inline — content is hardcoded in the component, not fetched from files. Paper layout uses `.paper-wrap` with structured sections (header, abstract with keyword chips, numbered sections, references). The GGIB benchmark card is a separate expandable section with 6 collapsible parts (GGIBPart1-6.jsx).

### CSS Architecture

Three CSS files, each with a distinct scope:
- `src/index.css` — design system tokens, global resets, Nav, footer, shared utility classes (`.glass-card`, `.chip`, `.btn-primary`, `.btn-glass`, `.section-tag`, `.section-heading`)
- `src/App.css` — page-level styles (Hero, About, Projects, Research, Education, Academy, Contact) and responsive breakpoints
- `src/buildguide.css` — BuildGuide-specific styles including the 3D flipbook animation

### Design System

CSS variables in `index.css`:
- `--bg: #050A14`, `--glass: rgba(255,255,255,0.04)`, `--glass-border: rgba(255,255,255,0.08)`
- `--cyan: #00D4FF`, `--purple: #9B4DFF` (primary accents)
- `--text-primary: #E8EDF5`, `--text-secondary: #6B7A99`, `--text-muted: #3D4966`
- Fonts: `--font-display: 'Syne'`, `--font-mono: 'Syne Mono'`, `--font-body: 'Outfit'` — loaded from Google Fonts
- Glass morphism pattern: `backdrop-filter: blur(24px)` + semi-transparent backgrounds
- Background: fixed `.bg-layer` with 3 drifting orbs, `.grid-overlay` (64px grid), `.pb-avatar-bg` (avatar watermark at 18% opacity)
- Animations: pure `@keyframes` — `drift` (floating orbs 22–35s), `blink`, `slideDown`, `slideLeft`, `fadeIn`
- Responsive sizing via `clamp()` throughout (e.g., hero name: `clamp(3.2rem, 8vw, 8rem)`)
- FreightMind pages use `#FF8C00` gold accent instead of cyan

### Video Handling

Project hero cards use HTML5 `<video autoPlay muted loop playsInline>` pointing to files in `/public` (`continuum-bg.mp4`, `freightmind-bg.mp4`). Vignette overlays are CSS gradient masks on top of the video.

### Public Assets

`/public` contains background videos, downloadable PDFs (`CONTINUUM.pdf`, `FREIGHTMIND.pdf`), a `/papers/` subdirectory with research PDFs, `professor-bone-avatar.png` (fixed-position watermark in the hero), and `buildguide-cover.png`.
