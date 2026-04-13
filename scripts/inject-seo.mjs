/**
 * Post-build SEO injection.
 *
 * Imports route metadata directly from src/seoData.js — the single source of
 * truth. For each route in SEO_ROUTES, copies dist/index.html with route-specific
 * metadata swapped in and writes it to dist/<route>/index.html.
 *
 * Vercel serves static files before applying rewrites, so each generated file
 * is served directly at its URL path — social scrapers and non-JS bots get
 * correct metadata on every deep link without SSR or framework migration.
 *
 * Usage: node scripts/inject-seo.mjs  (called automatically via postbuild)
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import { SEO_ROUTES, BASE_URL, DEFAULT_OG_IMAGE } from '../src/seoData.js'

/** Escape special HTML characters for use in attribute values and title content. */
function esc(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

const template = readFileSync('dist/index.html', 'utf-8')
let count = 0

for (const [, meta] of Object.entries(SEO_ROUTES)) {
  const { canonical, title, description, image = DEFAULT_OG_IMAGE } = meta
  const absUrl = canonical === '/' ? BASE_URL : `${BASE_URL}${canonical}`
  const t = esc(title)
  const d = esc(description)

  let html = template
  html = html.replace(/(<title>)[^<]*(<\/title>)/,                             `$1${t}$2`)
  html = html.replace(/(<meta name="description" content=")[^"]*(")/,          `$1${d}$2`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/,                `$1${absUrl}$2`)
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/,         `$1${t}$2`)
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/,   `$1${d}$2`)
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/,           `$1${absUrl}$2`)
  html = html.replace(/(<meta property="og:image" content=")[^"]*(")/,         `$1${image}$2`)
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/,        `$1${t}$2`)
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/,  `$1${d}$2`)
  html = html.replace(/(<meta name="twitter:image" content=")[^"]*(")/,        `$1${image}$2`)

  const dir = canonical === '/' ? 'dist' : `dist${canonical}`
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  console.log(`  wrote ${dir}/index.html`)
  count++
}

console.log(`\nSEO injection complete — ${count} routes processed.`)
