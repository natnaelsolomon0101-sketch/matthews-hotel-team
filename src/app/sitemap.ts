import type { MetadataRoute } from "next";
import { listings } from "@/lib/data/listings";
import { team } from "@/lib/data/team";
import { insights } from "@/lib/data/insights";
import { closed } from "@/lib/data/closed";
import { markets } from "@/lib/data/markets";
import { brands } from "@/lib/data/brands";
import { services } from "@/lib/data/services";
import { offices } from "@/lib/data/offices";
import { mhiQuarters } from "@/lib/data/mhi";
import { glossary } from "@/lib/data/glossary";
import { LISTINGS_UPDATED } from "@/lib/data/listings";
import { answerPages, answerPath, clusters, clusterLastUpdated } from "@/lib/data/answers";
import { tools as toolPages, toolsHub } from "@/lib/data/tools";
import { latestEdition, EDITIONS } from "@/lib/rates/sheet";
import { UPDATED as STATS_UPDATED } from "@/app/data/hotel-financing-statistics/updated";
import { SBA_UPDATED } from "@/lib/sba";
import { statePages as sbaStatePages } from "@/lib/sba/states";

const SITE_URL = "https://matthewshotelmarkets.com";

// ---------------------------------------------------------------------------
// lastModified — why this file used to be wrong, and what replaces it
// ---------------------------------------------------------------------------
// Every entry previously used `lastModified: new Date()`. That tells every
// crawler "this changed right now" on every single build, which is the exact
// anti-pattern search engines warn about (a sitemap that always says
// "everything is new" gets its lastmod signal ignored entirely — Google
// Search Central, "Build and submit a sitemap": lastmod should reflect the
// actual last significant edit).
//
// Fix, in priority order:
//   1. Real per-item date fields where the data module already has them
//      (glossary.lastUpdated, mhi.publishedAt, insights.lastUpdated/date).
//   2. A per-data-file constant derived from `git log -1 --format=%cI --
//      <path>`, captured 2026-09-17 (see geo/02-crawl-index.md for the exact
//      commands and output). This is coarser than per-item — every listing in
//      listings.ts shares one date until that file gets per-item dates — but
//      it is a real, verifiable timestamp instead of a lie, and it stops
//      changing on every deploy that doesn't touch the file.
//
// Deliberately NOT done: shelling out to `git log` inside this file at Vercel
// build time. Vercel does not publish its Git checkout depth for the build
// container, and an unverified assumption here is exactly what the ground
// rules forbid — a shallow checkout would make every path resolve to the same
// boundary-commit date, which is no better than `new Date()` and would fail
// silently. If a future agent confirms full-history checkouts on Vercel,
// swap FILE_LAST_MODIFIED for a `git log` call with a try/catch fallback to
// these same constants.
//
// Maintenance: when you materially edit one of the files below, bump its
// constant here (`git log -1 --format=%cI -- <path>`), or better, add a real
// `lastUpdated` field to that data module's type, the way glossary/mhi/
// insights already do. Filed as a follow-up in geo/requests.md for Agent 10:
// add `lastUpdated` to Listing, ClosedDeal, TeamMember, Market, Brand,
// Service, and Office types so every route gets item-level accuracy.
const FILE_LAST_MODIFIED = {
  home: "2026-05-06T13:51:56-05:00", // src/app/page.tsx
  // /about shipped mid-sprint (Agent 3, entity-schema-engineer) after this
  // file's other constants were captured via git log. Mirrors the page's own
  // visible "Last updated" constant (src/app/about/page.tsx LAST_UPDATED) —
  // update both together.
  about: "2026-09-17T00:00:00-05:00",
  // Superseded by LISTINGS_UPDATED in src/lib/data/listings.ts, which the
  // home page also renders. Kept only as the fallback for the /listings index
  // if that constant is ever removed.
  listings: "2026-05-16T15:16:49-05:00", // src/lib/data/listings.ts
  closed: "2026-05-12T10:06:25-05:00", // src/lib/data/closed.ts
  team: "2026-07-18T14:27:57-05:00", // src/lib/data/team.ts
  insights: "2026-05-10T19:37:00-05:00", // src/lib/data/insights.ts
  process: "2026-05-10T11:54:13-05:00", // src/app/process/page.tsx
  contact: "2026-05-10T11:54:13-05:00", // src/app/contact/page.tsx
  research: "2026-05-11T08:37:54-05:00", // src/app/research/page.tsx
  markets: "2026-05-10T14:17:58-05:00", // src/lib/data/markets.ts
  brands: "2026-05-10T13:24:52-05:00", // src/lib/data/brands.ts
  services: "2026-05-10T13:24:52-05:00", // src/lib/data/services.ts
  offices: "2026-05-10T13:24:52-05:00", // src/lib/data/offices.ts
  // Shipped on the geo/ai-visibility branch. Mirrors the page's own visible
  // LAST_UPDATED constant (src/app/press/page.tsx). Update both together.
  press: "2026-09-17T00:00:00-05:00",
} as const;

// "March 2026" -> 2026-03-01. Insights carry a human-readable `date` string
// and an optional ISO `lastUpdated`. Prefer `lastUpdated`; fall back to
// parsing `date`; fall back to the file-level constant if both are unusable.
const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
] as const;

function parseMonthYear(value: string): Date | null {
  const match = value.trim().toLowerCase().match(/^([a-z]+)\s+(\d{4})$/);
  if (!match) return null;
  const monthIndex = MONTHS.indexOf(match[1] as (typeof MONTHS)[number]);
  if (monthIndex === -1) return null;
  return new Date(Date.UTC(Number(match[2]), monthIndex, 1));
}

function insightLastModified(i: (typeof insights)[number]): Date {
  if (i.lastUpdated) return new Date(i.lastUpdated);
  const parsed = parseMonthYear(i.date);
  if (parsed) return parsed;
  return new Date(FILE_LAST_MODIFIED.insights);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(FILE_LAST_MODIFIED.home),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(FILE_LAST_MODIFIED.about),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/listings`,
      lastModified: new Date(FILE_LAST_MODIFIED.listings),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/closed`,
      lastModified: new Date(FILE_LAST_MODIFIED.closed),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/team`,
      lastModified: new Date(FILE_LAST_MODIFIED.team),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/insights`,
      lastModified: new Date(FILE_LAST_MODIFIED.insights),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/process`,
      lastModified: new Date(FILE_LAST_MODIFIED.process),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(FILE_LAST_MODIFIED.contact),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/research`,
      lastModified: new Date(FILE_LAST_MODIFIED.research),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/research/mhi`,
      // Index of quarters — track the newest quarter's publish date.
      lastModified: new Date(mhiQuarters[0]?.publishedAt ?? FILE_LAST_MODIFIED.research),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/glossary`,
      lastModified: new Date(
        glossary.reduce(
          (latest, g) => (g.lastUpdated > latest ? g.lastUpdated : latest),
          glossary[0]?.lastUpdated ?? FILE_LAST_MODIFIED.research,
        ),
      ),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const mhiRoutes: MetadataRoute.Sitemap = mhiQuarters.map((q) => ({
    url: `${SITE_URL}/research/mhi/${q.slug}`,
    lastModified: new Date(q.publishedAt),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const glossaryRoutes: MetadataRoute.Sitemap = glossary.map((g) => ({
    url: `${SITE_URL}/glossary/${g.slug}`,
    lastModified: new Date(g.lastUpdated),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const listingRoutes: MetadataRoute.Sitemap = listings
    // A listing with omUrl 307s off-domain to its OM site, so it has no page
    // of ours for a crawler to index.
    .filter((l) => l.hasDetail !== false && !l.omUrl)
    .map((l) => ({
    url: `${SITE_URL}/listings/${l.slug}`,
    // One date, shared with the home page's visible "Updated" line.
    lastModified: new Date(`${LISTINGS_UPDATED}T12:00:00Z`),
    changeFrequency: "weekly",
    priority: 0.85,
    images: [
      l.photo
        ? `${SITE_URL}${l.photo}`
        : `${SITE_URL}/listings/${l.slug}/opengraph-image`,
    ],
  }));

  const teamRoutes: MetadataRoute.Sitemap = team
    .filter((m) => m.hasBio !== false)
    .map((m) => ({
      url: `${SITE_URL}/team/${m.slug}`,
      lastModified: new Date(FILE_LAST_MODIFIED.team),
      changeFrequency: "monthly",
      priority: 0.7,
      images: m.photo
        ? [`${SITE_URL}${m.photo}`]
        : [`${SITE_URL}/team/${m.slug}/opengraph-image`],
    }));

  const insightRoutes: MetadataRoute.Sitemap = insights.map((i) => ({
    url: `${SITE_URL}/insights/${i.slug}`,
    lastModified: insightLastModified(i),
    changeFrequency: "monthly",
    priority: 0.75,
    images: [`${SITE_URL}/insights/${i.slug}/opengraph-image`],
  }));

  const closedRoutes: MetadataRoute.Sitemap = closed.map((d) => ({
    url: `${SITE_URL}/closed/${d.slug}`,
    lastModified: new Date(FILE_LAST_MODIFIED.closed),
    changeFrequency: "yearly",
    priority: 0.7,
    images: d.photo
      ? [`${SITE_URL}${d.photo}`]
      : [`${SITE_URL}/closed/${d.slug}/opengraph-image`],
  }));

  const marketRoutes: MetadataRoute.Sitemap = markets.map((m) => ({
    url: `${SITE_URL}/markets/${m.slug}`,
    lastModified: new Date(FILE_LAST_MODIFIED.markets),
    changeFrequency: "weekly",
    priority: 0.9,
    images: [`${SITE_URL}/markets/${m.slug}/opengraph-image`],
  }));

  const brandRoutes: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${SITE_URL}/hotels-for-sale/${b.slug}`,
    lastModified: new Date(FILE_LAST_MODIFIED.brands),
    changeFrequency: "weekly",
    priority: 0.85,
    images: [`${SITE_URL}/hotels-for-sale/${b.slug}/opengraph-image`],
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(FILE_LAST_MODIFIED.services),
    changeFrequency: "monthly",
    priority: 0.75,
    images: [`${SITE_URL}/services/${s.slug}/opengraph-image`],
  }));

  const officeRoutes: MetadataRoute.Sitemap = offices.map((o) => ({
    url: `${SITE_URL}/offices/${o.slug}`,
    lastModified: new Date(FILE_LAST_MODIFIED.offices),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [`${SITE_URL}/offices/${o.slug}/opengraph-image`],
  }));

  // ---------------------------------------------------------------------
  // Routes added on the geo/ai-visibility branch. Agent 2 left a TODO here
  // for them; this is that TODO, closed.
  //
  // Every lastModified below is a REAL authored date read from a data module:
  // AnswerPage.lastUpdated for the clusters and the tool, the rate sheet
  // edition's publishedAt for /rates, and the page's own UPDATED constant for
  // /data/hotel-financing-statistics. None of them is `new Date()`, which is
  // the bug this file already fixed everywhere else.
  //
  // /rates.json and /rates.csv are deliberately NOT here. They are data
  // endpoints, not pages, and they are already declared in the Dataset node's
  // `distribution` on /rates (geo/requests.md, Agent 8 item 4).
  // ---------------------------------------------------------------------

  const clusterHubRoutes: MetadataRoute.Sitemap = clusters.map((c) => ({
    url: `${SITE_URL}/${c.cluster}`,
    lastModified: new Date(clusterLastUpdated(c)),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const answerRoutes: MetadataRoute.Sitemap = answerPages
    .filter((p) => !p.isHub)
    .map((p) => ({
      url: `${SITE_URL}${answerPath(p)}`,
      lastModified: new Date(p.lastUpdated),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const toolRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}${toolsHub.path}`,
      lastModified: new Date(toolsHub.lastUpdated),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...toolPages.map((t) => ({
      url: `${SITE_URL}/tools/${t.slug}`,
      lastModified: new Date(t.lastUpdated),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  const latest = latestEdition();
  const ratesRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/rates`,
      lastModified: new Date(latest.modifiedAt ?? latest.publishedAt),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/rates/methodology`,
      lastModified: new Date(latest.modifiedAt ?? latest.publishedAt),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    ...EDITIONS.map((e) => ({
      url: `${SITE_URL}/rates/${e.slug}`,
      lastModified: new Date(e.modifiedAt ?? e.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];

  const dataRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/data/hotel-financing-statistics`,
      lastModified: new Date(STATS_UPDATED),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/data/sba-hotel-lending`,
      lastModified: new Date(SBA_UPDATED),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...sbaStatePages.map((s) => ({
      url: s.url,
      lastModified: new Date(SBA_UPDATED),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  // Index pages built in the same pass, replacing three vercel.json 307s that
  // pointed at an arbitrary child with no index behind them.
  const indexRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/markets`,
      lastModified: new Date(mhiQuarters[0]?.publishedAt ?? FILE_LAST_MODIFIED.markets),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date(FILE_LAST_MODIFIED.services),
      changeFrequency: "yearly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/hotels-for-sale`,
      lastModified: new Date(FILE_LAST_MODIFIED.brands),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/press`,
      lastModified: new Date(FILE_LAST_MODIFIED.press),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/developers`,
      // Authored 2026-09-18 with the agent-access layer; bump when it changes.
      lastModified: new Date("2026-09-18T12:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  return [
    ...clusterHubRoutes,
    ...answerRoutes,
    ...toolRoutes,
    ...ratesRoutes,
    ...dataRoutes,
    ...indexRoutes,
    ...staticRoutes,
    ...listingRoutes,
    ...closedRoutes,
    ...teamRoutes,
    ...insightRoutes,
    ...marketRoutes,
    ...brandRoutes,
    ...serviceRoutes,
    ...officeRoutes,
    ...mhiRoutes,
    ...glossaryRoutes,
  ];
}
