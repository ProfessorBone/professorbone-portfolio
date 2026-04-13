import { BASE_URL, DEFAULT_OG_IMAGE } from '../seoData.js'

/**
 * Route-level SEO metadata component.
 *
 * React 19 hoists <title>, <meta>, and <link> elements from the component tree
 * into <head> automatically — no react-helmet needed.
 *
 * JSON-LD <script> renders in-place (valid anywhere per spec; Google accepts body).
 */
export default function Seo({
  title,
  description,
  canonical,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  structuredData,
  noindex = false,
}) {
  const absCanonical = canonical
    ? canonical === '/'
      ? BASE_URL
      : `${BASE_URL}${canonical}`
    : BASE_URL

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={absCanonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={absCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Professor Bone" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  )
}
