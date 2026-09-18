import { insights } from "@/lib/data/insights";
import { answerPages, answerPath } from "@/lib/data/answers";
import { tools } from "@/lib/data/tools";
import { latestEdition } from "@/lib/rates/sheet";
import { glossary } from "@/lib/data/glossary";
import { mhiQuarters } from "@/lib/data/mhi";
import { SBA_PATH, SBA_UPDATED, TITLE as SBA_TITLE, DIRECT_ANSWER as SBA_DIRECT_ANSWER } from "@/lib/sba";
import { UPDATED as STATS_UPDATED } from "@/app/data/hotel-financing-statistics/updated";

/** Inline "[2]" citation markers point at a page's source list, which a feed item does not carry. */
const stripRefs = (t: string) => t.replace(/\s*\[\d+\]/g, "");

// Content only depends on build-time data modules — prerender it once.
export const dynamic = "force-static";

// RSS 2.0 feed for /insights, full-text via <content:encoded>.
//
// Scope as of 2026-09-17: /insights (dated commentary, full text), the three
// answer clusters, the tool shelf, and the current rate-sheet edition. The
// clusters and the rate sheet carry their direct-answer block rather than the
// full body, because an evergreen answer page is updated in place: pushing its
// whole text into a feed every time a sentence changes is noise, while the
// dated `pubDate` still tells a reader something moved.
//
// Agent 2 left this route noting /rates did not exist yet. It does now.
//
// A `<link rel="alternate" type="application/rss+xml">` pointing at this
// route was added to src/app/layout.tsx's metadata so feed readers and
// crawlers can discover it from every page.

const SITE_URL = "https://matthewshotelmarkets.com";
const FEED_TITLE = "Matthews Hotel Markets";
const FEED_DESCRIPTION =
  "Hotel investment sales, capital markets and valuation from Matthews Hotel Markets: dated commentary, evergreen answer pages, calculators and the monthly rate sheet.";

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

/** Answer pages and tools publish their direct-answer block, not the full body. */
function answerItems(): string {
  const edition = latestEdition();
  const entries: {
    title: string;
    url: string;
    date: string;
    description: string;
  }[] = [
    ...answerPages.map((p) => ({
      title: p.h1,
      url: `${SITE_URL}${answerPath(p)}`,
      date: p.lastUpdated,
      description: stripRefs(p.answer),
    })),
    ...tools.map((t) => ({
      title: t.h1,
      url: `${SITE_URL}/tools/${t.slug}`,
      date: t.lastUpdated,
      description: stripRefs(t.answer),
    })),
    {
      title: `Matthews Hotel Markets rate sheet, ${edition.label}`,
      url: `${SITE_URL}/rates`,
      date: edition.modifiedAt ?? edition.publishedAt,
      description:
        "The monthly hotel rate sheet: dated public benchmarks and published SBA program rules, with every cell we cannot source marked not yet published.",
    },
    // 2026-09-18: the other dated page types, each with a date and a sentence
    // its own page already carries. Listings, closed deals, markets, brands,
    // services and offices stay out: none of them has a per-item date.
    {
      title: SBA_TITLE,
      url: `${SITE_URL}${SBA_PATH}`,
      date: SBA_UPDATED,
      description: stripRefs(SBA_DIRECT_ANSWER),
    },
    {
      title: "Hotel Financing Statistics, 2026",
      url: `${SITE_URL}/data/hotel-financing-statistics`,
      date: STATS_UPDATED,
      description:
        "Sourced hotel financing statistics, each with the date the source carries and the date it was last verified.",
    },
    ...mhiQuarters.map((q) => ({
      title: `Matthews Hotel Index, ${q.label}`,
      url: `${SITE_URL}/research/mhi/${q.slug}`,
      date: q.publishedAt,
      description: q.summary,
    })),
    ...glossary.map((g) => ({
      title: g.term,
      url: `${SITE_URL}/glossary/${g.slug}`,
      date: g.lastUpdated,
      description: g.shortDef,
    })),
  ];

  return entries
    .map(
      (e) => `
    <item>
      <title>${xmlEscape(e.title)}</title>
      <link>${e.url}</link>
      <guid isPermaLink="true">${e.url}</guid>
      <pubDate>${new Date(`${e.date.slice(0, 10)}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${xmlEscape(e.description)}</description>
    </item>`,
    )
    .join("");
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
    <language>en-us</language>${items}${answerItems()}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
