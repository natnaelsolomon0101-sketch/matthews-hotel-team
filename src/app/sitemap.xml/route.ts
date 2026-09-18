import { SITE_URL } from "@/lib/entity";
import { siteMapEntries } from "@/lib/site-map";

/**
 * /sitemap.xml, as a route handler.
 *
 * This used to be `src/app/sitemap.ts` (Next's metadata file convention). That
 * convention registers its route as `/sitemap`, which collides with the HTML
 * site map page at /sitemap ("Conflicting page and metadata at /sitemap"), so
 * the XML is written here instead. Same URL, same fields, same output format
 * Next produced: <loc>, <lastmod>, <changefreq>, <priority>, <image:image>.
 *
 * The route inventory, and the reasoning behind every lastModified value,
 * live in src/lib/site-map.ts, which the HTML page reads too. Register a page
 * in its data module and it appears in both.
 *
 * One file, not a sitemap index: the site is a few hundred URLs against a
 * 50,000-URL limit, and a single file is one fewer hop for a crawler.
 */
export const dynamic = "force-static";

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const urls = siteMapEntries().map((e) => {
    const loc = e.path === "/" ? SITE_URL : `${SITE_URL}${e.path}`;
    const images = (e.images ?? [])
      .map((src) => `<image:image>\n<image:loc>${xmlEscape(src)}</image:loc>\n</image:image>\n`)
      .join("");
    return (
      `<url>\n<loc>${xmlEscape(loc)}</loc>\n${images}` +
      `<lastmod>${e.lastModified.toISOString()}</lastmod>\n` +
      `<changefreq>${e.changeFrequency}</changefreq>\n` +
      `<priority>${e.priority}</priority>\n</url>\n`
    );
  });

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
    urls.join("") +
    `</urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
