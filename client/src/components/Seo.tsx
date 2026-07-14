import { Helmet } from "react-helmet-async";

/**
 * Per-route <head> manager: title, description, canonical, Open Graph / Twitter
 * card, and optional JSON-LD structured data. Rendered client-side, so it is seen
 * by users and by JS-rendering crawlers (e.g. Googlebot). Non-JS consumers (raw
 * curl, most LLM URL fetchers, social scrapers) rely on the static /llms.txt and
 * the defaults baked into index.html; full parity for those needs prerendering.
 */
export function Seo({
  title,
  description,
  canonical,
  image = "https://ameyem.com/og-default.png",
  type = "website",
  jsonLd,
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  type?: string;
  jsonLd?: object | object[];
}) {
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
}
