import { insights } from "@/lib/data/insights";

// Content only depends on build-time data modules — prerender it once.
export const dynamic = "force-static";

// RSS 2.0 feed for /insights, full-text via <content:encoded>.
//
// /rates is not in scope: it does not exist on the site yet (confirmed
// missing 2026-09-17, owned by Agent 8 — data-and-rate-sheet). When it
// ships, add its change feed here; tracked in geo/requests.md.
//
// A `<link rel="alternate" type="application/rss+xml">` pointing at this
// route was added to src/app/layout.tsx's metadata so feed readers and
// crawlers can discover it from every page.

const SITE_URL = "https://matthewshotelmarkets.com";
const FEED_TITLE = "Matthews Hotel Markets | Insights";
const FEED_DESCRIPTION =
  "Hotel investment sales, capital markets, and acquisition advisory commentary from Matthews Hotel Markets.";

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// "March 2026" -> RFC 822 date (1st of month, UTC). Falls back to `now` only
// if the string is unparseable, which should not happen given the data
// module's format — logged loudly rather than silently swallowed.
const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
] as const;

function pubDate(i: (typeof insights)[number]): string {
  const iso = i.lastUpdated;
  if (iso) return new Date(iso).toUTCString();
  const match = i.date.trim().toLowerCase().match(/^([a-z]+)\s+(\d{4})$/);
  if (match) {
    const monthIndex = MONTHS.indexOf(match[1] as (typeof MONTHS)[number]);
    if (monthIndex !== -1) {
      return new Date(Date.UTC(Number(match[2]), monthIndex, 1)).toUTCString();
    }
  }
  console.warn(`[feed.xml] could not parse date "${i.date}" for ${i.slug}; using build time`);
  return new Date().toUTCString();
}

function contentEncoded(body: string): string {
  const paragraphs = body
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${xmlEscape(p)}</p>`)
    .join("");
  return `<![CDATA[${paragraphs}]]>`;
}

export async function GET() {
  const items = insights
    .map((i) => {
      const url = `${SITE_URL}/insights/${i.slug}`;
      return `
    <item>
      <title>${xmlEscape(i.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate(i)}</pubDate>
      <description>${xmlEscape(i.excerpt)}</description>
      <content:encoded>${contentEncoded(i.body)}</content:encoded>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlEscape(FEED_TITLE)}</title>
    <link>${SITE_URL}/insights</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${xmlEscape(FEED_DESCRIPTION)}</description>
    <language>en-us</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
