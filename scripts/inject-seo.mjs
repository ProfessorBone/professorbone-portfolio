/**
 * Post-build SEO injection.
 *
 * For each public route, copies dist/index.html with route-specific metadata
 * swapped in and writes it to dist/<route>/index.html.
 *
 * Vercel serves static files before applying rewrites, so each generated file
 * is served directly at its route — social scrapers and non-JS bots get correct
 * metadata on deep links. The catch-all rewrite in vercel.json remains as a
 * fallback for any path without a pre-generated file.
 *
 * Usage: node scripts/inject-seo.mjs  (called via postbuild)
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const BASE_URL = 'https://professorbone.com'
const DEFAULT_IMAGE = `${BASE_URL}/professor-bone-avatar.png`

const routes = {
  '/': {
    title: 'Professor Bone — AI Systems Architect & Logistics Technologist',
    description:
      'Clarence Downs designs agentic AI systems grounded in real logistics and field operations experience. Governed multi-agent infrastructure, research, and education from Professor Bone Lab.',
  },
  '/about': {
    title: 'About Clarence Downs — Professor Bone',
    description:
      'From UPS management to agentic AI engineering: the professional path of Clarence Downs, aka Professor Bone. AI Systems Architect, JHU Agentic AI Certificate, Anthropic Claude Certified Architect.',
  },
  '/projects': {
    title: 'Projects — Agentic AI Systems | Professor Bone',
    description:
      'Production-grade agentic AI infrastructure built on real logistics context. CONTINUUM: a governed 8-agent control system. FREIGHTMIND: a two-agent field operations system.',
  },
  '/research': {
    title: 'Research — Agentic AI Papers & Frameworks | Professor Bone Lab',
    description:
      'Original research on agentic AI architecture, epistemic governance, cognitive limits, and multi-agent evaluation. GGIB-M benchmark and peer papers from Professor Bone Lab at JHU.',
  },
  '/education': {
    title: 'Education & Credentials — Clarence Downs | Professor Bone',
    description:
      'B.S. Information Technology, JHU Agentic AI Certificate, Anthropic Claude Certified Architect. A non-traditional path built on real systems and serious study.',
  },
  '/academy': {
    title: "Unc's AI Academy — Practical AI Education | Professor Bone",
    description:
      "Unc's AI Academy is a practical AI education initiative for adult learners and career changers. Four build tiers: Foundations, Builder, Systems, and Architect.",
  },
  '/contact': {
    title: "Let's Talk — AI Engineering, Research & Collaboration | Professor Bone",
    description:
      'Reach out to Clarence Downs for AI engineering roles, research collaboration, speaking, or consulting. Open to serious opportunities.',
  },
  '/continuum': {
    title: 'CONTINUUM — Governed Multi-Agent AI Control System | Professor Bone',
    description:
      'CONTINUUM is a governed 8-agent AI control system built by Clarence Downs. 46 architectural decisions, 23 failure injection tests, 100 knowledge graph entries, zero cloud dependencies.',
  },
  '/freightmind': {
    title: 'FREIGHTMIND — Multi-Agent Field Operations System | Professor Bone',
    description:
      'FREIGHTMIND pairs two specialized agents for real-time logistics operations. Jack Crawford commands; Will Graham executes. Built from years of field experience in freight management.',
  },
  '/buildguide': {
    title: 'AI Agent Build Guide — Field Manual for Agentic AI | Professor Bone',
    description:
      'A 172-page step-by-step field manual for building AI agents across four tiers of increasing power. Written by Clarence Downs covering 9 AGI phases and 7 event classes.',
  },
}

/** Escape special HTML characters for use in attribute values. */
function esc(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

const template = readFileSync('dist/index.html', 'utf-8')

for (const [route, { title, description, image = DEFAULT_IMAGE }] of Object.entries(routes)) {
  const canonical = route === '/' ? BASE_URL : `${BASE_URL}${route}`
  const t = esc(title)
  const d = esc(description)

  let html = template
  html = html.replace(/(<title>)[^<]*(<\/title>)/,                             `$1${t}$2`)
  html = html.replace(/(<meta name="description" content=")[^"]*(")/,          `$1${d}$2`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/,                `$1${canonical}$2`)
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/,         `$1${t}$2`)
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/,   `$1${d}$2`)
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/,           `$1${canonical}$2`)
  html = html.replace(/(<meta property="og:image" content=")[^"]*(")/,         `$1${image}$2`)
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/,        `$1${t}$2`)
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/,  `$1${d}$2`)
  html = html.replace(/(<meta name="twitter:image" content=")[^"]*(")/,        `$1${image}$2`)

  const dir = route === '/' ? 'dist' : `dist${route}`
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  console.log(`  wrote ${dir}/index.html`)
}

console.log(`\nSEO injection complete — ${Object.keys(routes).length} routes processed.`)
