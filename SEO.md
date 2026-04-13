# SEO Architecture — Professor Bone Portfolio

## Overview

This document describes the SEO implementation for this site, including architecture decisions, how the system works, how to maintain it, and recommended next steps.

---

## Stack Context

- React 19 + Vite 8, plain CSS
- Custom SPA router (not React Router) — `window.history.pushState` with Vercel rewrite fallback
- Deployed as static output on Vercel
- No server-side rendering

---

## Architecture Decisions

### React 19 Native Metadata (no react-helmet)

React 19 natively hoists `<title>`, `<meta>`, and `<link>` elements from anywhere in the component tree into `<head>`. This means placing these tags inside a component is all that's needed — React handles deduplication and hoisting.

This eliminates the need for `react-helmet` or `react-helmet-async`, which were the standard solution before React 19. No extra dependency was added.

**How it works at runtime:** When a user navigates from `/about` to `/research`, React re-renders the Research component, which renders `<Seo>`. React updates `<head>` with the new title and metadata automatically.

**Limitation:** This is client-side only. The initial HTML served by the server (before JavaScript executes) contains only the default metadata from `index.html`. This matters for social scrapers (Twitter/X, LinkedIn, Slack, iMessage previews) which do not execute JavaScript.

### Post-Build Static HTML Injection (bridging the social scraper gap)

`scripts/inject-seo.mjs` runs after `vite build`. It reads `dist/index.html` and for each route in `SEO_ROUTES`, produces a copy of that HTML with the correct title, description, canonical, OG, and Twitter tags substituted in. The output is written to `dist/<route>/index.html`.

Vercel serves static files before applying rewrites. So:
- A request to `/research/cognitive` finds `dist/research/cognitive/index.html` — correct metadata served.
- A request to `/undefined-route` finds no static file — the rewrite fires and serves `dist/index.html`.
- The existing rewrite in `vercel.json` remains correct as a fallback. No changes needed there.

**Result:** Social scrapers, non-JS bots, and crawlers all receive route-specific `<head>` metadata on every deep link.

### Single Source of Truth: `src/seoData.js`

All route metadata lives in `src/seoData.js`. The `inject-seo.mjs` script imports directly from it. This means:
- Adding a new route to `seoData.js` automatically prerendered it at build time
- No duplication between client-side metadata and build-time injection
- `BASE_URL` is defined once and used everywhere

---

## File Structure

```
src/
  seoData.js              — All route titles, descriptions, canonicals, OG, JSON-LD
  components/
    Seo.jsx               — React 19 metadata component (renders <title>, <meta>, <link>, JSON-LD)

scripts/
  inject-seo.mjs          — Post-build: writes per-route index.html with metadata injected

public/
  robots.txt              — Allows all crawlers, references sitemap
  sitemap.xml             — All 20 public routes (10 core + 10 research papers)

index.html                — Site-level defaults: OG, Twitter Card, description, canonical for /
```

---

## How to Add a New Page

1. Add the route string to the `VALID_PAGES` array in `src/App.jsx`
2. Add a `pageComponent` entry in App.jsx for the new page
3. Add the route to `SEO_ROUTES` in `src/seoData.js` with `title`, `description`, and `canonical`
4. Add a `<url>` entry in `public/sitemap.xml`
5. Add `<Seo {...SEO_ROUTES.yourRoute} />` inside the new page component
6. Run `npm run build` — the prerender step handles the rest automatically

---

## Route SEO Map

| Route | Title | Structured Data |
|---|---|---|
| `/` | Professor Bone — AI Systems Architect & Logistics Technologist | WebSite + Person |
| `/about` | About Clarence Downs — Professor Bone | ProfilePage |
| `/projects` | Projects — Agentic AI Systems \| Professor Bone | — |
| `/research` | Research — Agentic AI Papers & Frameworks \| Professor Bone Lab | CollectionPage |
| `/education` | Education & Credentials — Clarence Downs \| Professor Bone | — |
| `/academy` | Unc's AI Academy — Practical AI Education \| Professor Bone | — |
| `/contact` | Let's Talk — AI Engineering, Research & Collaboration \| Professor Bone | ContactPage |
| `/continuum` | CONTINUUM — Governed Multi-Agent AI Control System \| Professor Bone | SoftwareApplication |
| `/freightmind` | FREIGHTMIND — Multi-Agent Field Operations System \| Professor Bone | SoftwareApplication |
| `/buildguide` | AI Agent Build Guide — Field Manual for Agentic AI \| Professor Bone | Book |
| `/research/agent-state` | Agent State Framework — Professor Bone Lab · JHU | ScholarlyArticle |
| `/research/orchestrator` | Orchestrator Epistemic Capture — Professor Bone Lab · JHU | ScholarlyArticle |
| `/research/cognitive` | Cognitive Horizon — Professor Bone Lab · JHU | ScholarlyArticle |
| `/research/epistemic` | Epistemic Governance: Deep Research — Professor Bone Lab · JHU | ScholarlyArticle |
| `/research/ggib-1` through `/research/ggib-6` | GGIB-M Part N: [Part Title] — Professor Bone Lab | — |

---

## Person Entity (structured data)

The `Person` schema defined on the home page establishes the canonical entity record:

```json
{
  "@type": "Person",
  "@id": "https://professorbone.com/#person",
  "name": "Clarence Downs",
  "alternateName": "Professor Bone",
  "jobTitle": "AI Systems Architect",
  "url": "https://professorbone.com",
  "image": "https://professorbone.com/professor-bone-avatar.png",
  "sameAs": [
    "https://github.com/ProfessorBone",
    "https://www.linkedin.com/in/clarencedowns/"
  ]
}
```

Other pages reference this entity via `{ "@id": "https://professorbone.com/#person" }`. This is the correct pattern for establishing a coherent Knowledge Graph entity across a site.

---

## Internal Linking

Navigation elements were converted from `<button>` to `<a href>` elements. This matters because crawlers do not follow `<button>` elements — they only follow `<a href>` links. Without this change, a crawler landing on `/` would see no links to follow.

Affected elements:
- Nav logo, all nav links, Build Guide button, Let's Talk CTA (desktop + mobile)
- Hero "View My Work" and "Read My Papers" action buttons
- Project cards (CONTINUUM, FREIGHTMIND) — `div[role=button]` replaced with `<a href>`
- Research paper cards — `div` replaced with `<a href>` pointing to `/research/[id]`
- GGIB part links — `div` replaced with `<a href>` pointing to `/research/ggib-[n]`

SPA behavior is preserved: each `<a>` calls `e.preventDefault()` and navigates via `setPage()`.

---

## Heading Hierarchy Fix

The standard layout pages (About, Projects, Research, Education, Academy, Contact) had zero `h1` elements. The main section heading was `h2`. This was corrected:

- `h2.section-heading` promoted to `h1` on all six standard pages
- `h3 "Clarence Downs"` in the About identity card promoted to `h2`
- `h3 "CONTINUUM"` on the Projects card remains `h2` (correct — child of page `h1`)

Immersive pages (Continuum, FreightMind, BuildGuide) already had correct `h1` structure.

---

## Remaining Gaps

### 1. OG Social Image (open)

Every route currently uses `/professor-bone-avatar.png` as the OG image. This renders correctly but is not optimized for social sharing. Social platforms expect 1200x630px images.

**Recommendation:** Create a dedicated `og-image.png` (1200x630) with the Professor Bone identity. Place it in `/public/og-image.png`. Update `DEFAULT_OG_IMAGE` in `src/seoData.js`:

```js
export const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`
```

Per-route OG images (e.g., the CONTINUUM hero image for `/continuum`) can be added by setting `image` in each route's entry in `SEO_ROUTES`.

### 2. Academy Course Schema (deferred)

The Academy page describes four curriculum tiers but has no live enrollment, dates, or pricing. Prematurely adding `Course` schema without content to back it up is not recommended.

**When to add:** Once Academy has real enrollment, dates, or a sign-up flow, add:

```js
// In SEO_ROUTES.academy.structuredData:
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Unc's AI Academy",
  "description": "...",
  "provider": { "@id": "https://professorbone.com/#person" },
  "hasCourseInstance": [{ "@type": "CourseInstance", ... }]
}
```

### 3. Research Paper Rich Results (partially open)

Papers now have individual routes and `ScholarlyArticle` schema (for the 4 main papers). The GGIB parts have metadata but no structured data — they could receive it once the benchmark specification is published or finalized.

---

## Post-Deploy Checklist

After deploying to production:

1. **Confirm BASE_URL** — `src/seoData.js` line 2 must match the live domain. Currently set to `https://professorbone.com`.

2. **Google Search Console**
   - Verify site ownership (HTML tag or DNS method)
   - Submit `https://professorbone.com/sitemap.xml`
   - Request indexing for the home page
   - Monitor Coverage report for any crawl errors

3. **Bing Webmaster Tools** — separate submission, covers Bing + DuckDuckGo
   - Import from Google Search Console to save time

4. **Social preview validation**
   - LinkedIn Post Inspector: `https://www.linkedin.com/post-inspector/`
   - Twitter/X Card Validator: `https://cards-dev.twitter.com/validator`
   - Facebook Open Graph Debugger: `https://developers.facebook.com/tools/debug/`
   - Test at least `/`, `/continuum`, `/research`, `/buildguide`

5. **Indexing check** — after 3-7 days, run `site:professorbone.com` in Google to confirm all routes are indexed

6. **Search Console Performance** — after 28 days, check which queries drive clicks and whether any titled pages appear for branded searches

---

## Configuration Reference

| Setting | Location | Value |
|---|---|---|
| Canonical base URL | `src/seoData.js` line 2 | `https://www.professorbone.com` |
| Default OG image | `src/seoData.js` line 3 | `/professor-bone-avatar.png` |
| Valid page routes | `src/App.jsx` — `VALID_PAGES` | 10 routes |
| Valid paper sub-routes | `src/App.jsx` — `VALID_PAPERS` | 10 paper IDs |
| Robots.txt | `public/robots.txt` | All crawlers allowed |
| Sitemap | `public/sitemap.xml` | 20 URLs |
