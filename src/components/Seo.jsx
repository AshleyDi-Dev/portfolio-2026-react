import { Helmet } from 'react-helmet-async'

/*
 * Per-page meta (title + description + Open Graph + Twitter), mirroring the
 * <head> blocks from the original static pages.
 */
export default function Seo({
  title,
  description,
  ogType = 'website',
  url,
  image = 'https://ashleydibuduo.ca/images/og/Home.png',
  imageAlt,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  noindex = false,
}) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:type" content={ogType} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={image} />
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      <meta property="og:site_name" content="Ashley DiBuduo Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
