import { listings, LISTINGS_UPDATED } from "@/lib/data/listings";
import { team } from "@/lib/data/team";
import { insights } from "@/lib/data/insights";
import { closed } from "@/lib/data/closed";
import { markets } from "@/lib/data/markets";
import { brands } from "@/lib/data/brands";
import { services } from "@/lib/data/services";
import { offices } from "@/lib/data/offices";
import { mhiQuarters } from "@/lib/data/mhi";
import { glossary } from "@/lib/data/glossary";
import { answerPath, clusters, clusterLastUpdated } from "@/lib/data/answers";
import { tools as toolPages, toolsHub } from "@/lib/data/tools";
import { latestEdition, EDITIONS } from "@/lib/rates/sheet";
import { UPDATED as STATS_UPDATED } from "@/app/data/hotel-financing-statistics/updated";
import { SBA_UPDATED } from "@/lib/sba";
import { statePages as sbaStatePages } from "@/lib/sba/states";
import { SITE_URL } from "@/lib/entity";

/**
 * The one inventory of indexable HTML pages. Two readers:
 *   - src/app/sitemap.xml/route.ts -> /sitemap.xml
 *   - src/app/sitemap/page.tsx     -> /sitemap, the HTML site map in the footer
 * Both are built from siteMapSections(), so a page registered in a data module
 * appears in both, and scripts/sitemap-check.mjs fails the gate if the two
 * ever disagree.
 *
 * What does NOT belong here: Markdown twins, .json/.csv/.txt endpoints, and
 * any URL that redirects (a listing with `omUrl`, and /research/mhi, which is
 * a 307 to the latest quarter). A sitemap lists canonical pages only.
 */

export type SiteMapEntry = {
  path: string;
  /** Link text on /sitemap. */
  label: string;
  lastModified: Date;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: string[];
};

export type SiteMapSection = {
  id: string;
  heading: string;
  /** The section's own index page, listed first. */
  hub?: SiteMapEntry;
  entries: SiteMapEntry[];
};

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

/** Authored with the HTML site map; bump when the page template changes. */
export const SITE_MAP_PAGE_PATH = "/sitemap";

export function siteMapSections(): SiteMapSection[] {
  const latest = latestEdition();
  const ratesModified = new Date(latest.modifiedAt ?? latest.publishedAt);
  const mhiModified = new Date(mhiQuarters[0]?.publishedAt ?? FILE_LAST_MODIFIED.research);
  const listingsModified = new Date(`${LISTINGS_UPDATED}T12:00:00Z`);

  const answerSections: SiteMapSection[] = clusters.map((c) => ({
    id: c.cluster,
    heading: c.label,
    hub: {
      path: `/${c.cluster}`,
      label: c.hub.h1,
      lastModified: new Date(clusterLastUpdated(c)),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    entries: c.spokes.map((p) => ({
      path: answerPath(p),
      label: p.h1,
      lastModified: new Date(p.lastUpdated),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  }));

  const sections: SiteMapSection[] = [
    ...answerSections,
    {
      id: "tools",
      heading: "Calculators",
      hub: {
        path: toolsHub.path,
        label: toolsHub.title,
        lastModified: new Date(toolsHub.lastUpdated),
        changeFrequency: "monthly",
        priority: 0.75,
      },
      entries: toolPages.map((t) => ({
        path: `/tools/${t.slug}`,
        label: t.title,
        lastModified: new Date(t.lastUpdated),
        changeFrequency: "monthly" as const,
        priority: 0.75,
      })),
    },
    {
      id: "rates",
      heading: "Rate sheet",
      // /rates.json and /rates.csv are data endpoints, not pages. They are
      // declared in the Dataset node's `distribution` on /rates instead.
      hub: {
        path: "/rates",
        label: "Hotel loan rate sheet",
        lastModified: ratesModified,
        changeFrequency: "monthly",
        priority: 0.95,
      },
      entries: [
        {
          path: "/rates/methodology",
          label: "Rate sheet methodology",
          lastModified: ratesModified,
          changeFrequency: "yearly",
          priority: 0.7,
        },
        ...EDITIONS.map((e) => ({
          path: `/rates/${e.slug}`,
          label: `Rate sheet, ${e.label}`,
          lastModified: new Date(e.modifiedAt ?? e.publishedAt),
          changeFrequency: "yearly" as const,
          priority: 0.6,
        })),
      ],
    },
    {
      id: "data",
      heading: "Data",
      entries: [
        {
          path: "/data/hotel-financing-statistics",
          label: "Hotel financing statistics",
          lastModified: new Date(STATS_UPDATED),
          changeFrequency: "monthly",
          priority: 0.85,
        },
        {
          path: "/data/sba-hotel-lending",
          label: "SBA loans to hotels",
          lastModified: new Date(SBA_UPDATED),
          changeFrequency: "monthly",
          priority: 0.85,
        },
        ...sbaStatePages.map((s) => ({
          path: s.path,
          label: `SBA loans to hotels in ${s.name}`,
          lastModified: new Date(SBA_UPDATED),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        })),
      ],
    },
    {
      id: "research",
      heading: "Research and insights",
      hub: {
        path: "/research",
        label: "Research",
        lastModified: new Date(FILE_LAST_MODIFIED.research),
        changeFrequency: "monthly",
        priority: 0.9,
      },
      entries: [
        // /research/mhi itself is a 307 to the newest quarter, so only the
        // quarter pages are listed.
        ...mhiQuarters.map((q) => ({
          path: `/research/mhi/${q.slug}`,
          label: `Matthews Hotel Index, ${q.label}`,
          lastModified: new Date(q.publishedAt),
          changeFrequency: "monthly" as const,
          priority: 0.85,
        })),
        {
          path: "/insights",
          label: "Insights",
          lastModified: new Date(FILE_LAST_MODIFIED.insights),
          changeFrequency: "weekly",
          priority: 0.85,
        },
        ...insights.map((i) => ({
          path: `/insights/${i.slug}`,
          label: i.title,
          lastModified: insightLastModified(i),
          changeFrequency: "monthly" as const,
          priority: 0.75,
          images: [`${SITE_URL}/insights/${i.slug}/opengraph-image`],
        })),
      ],
    },
    {
      id: "glossary",
      heading: "Glossary",
      hub: {
        path: "/glossary",
        label: "Hotel finance glossary",
        lastModified: new Date(
          glossary.reduce(
            (newest, g) => (g.lastUpdated > newest ? g.lastUpdated : newest),
            glossary[0]?.lastUpdated ?? FILE_LAST_MODIFIED.research,
          ),
        ),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      entries: glossary.map((g) => ({
        path: `/glossary/${g.slug}`,
        label: g.term,
        lastModified: new Date(g.lastUpdated),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    },
    {
      id: "listings",
      heading: "Active listings",
      hub: {
        path: "/listings",
        label: "Active listings",
        lastModified: listingsModified,
        changeFrequency: "daily",
        priority: 0.9,
      },
      entries: listings
        // A listing with omUrl 307s off-domain to its OM site, so it has no
        // page of ours for a crawler to index.
        .filter((l) => l.hasDetail !== false && !l.omUrl)
        .map((l) => ({
          path: `/listings/${l.slug}`,
          label: `${l.name}, ${l.city}, ${l.state}`,
          // One date, shared with the home page's visible "Updated" line.
          lastModified: listingsModified,
          changeFrequency: "weekly" as const,
          priority: 0.85,
          images: [
            l.photo ? `${SITE_URL}${l.photo}` : `${SITE_URL}/listings/${l.slug}/opengraph-image`,
          ],
        })),
    },
    {
      id: "hotels-for-sale",
      heading: "Hotels for sale by brand",
      hub: {
        path: "/hotels-for-sale",
        label: "Hotels for sale by brand",
        lastModified: new Date(FILE_LAST_MODIFIED.brands),
        changeFrequency: "weekly",
        priority: 0.85,
      },
      entries: brands.map((b) => ({
        path: `/hotels-for-sale/${b.slug}`,
        label: `${b.name} hotels for sale`,
        lastModified: new Date(FILE_LAST_MODIFIED.brands),
        changeFrequency: "weekly" as const,
        priority: 0.85,
        images: [`${SITE_URL}/hotels-for-sale/${b.slug}/opengraph-image`],
      })),
    },
    {
      id: "markets",
      heading: "Markets",
      hub: {
        path: "/markets",
        label: "Markets",
        lastModified: mhiModified,
        changeFrequency: "monthly",
        priority: 0.85,
      },
      entries: markets.map((m) => ({
        path: `/markets/${m.slug}`,
        label: `Hotels for sale in ${m.city}, ${m.state}`,
        lastModified: new Date(FILE_LAST_MODIFIED.markets),
        changeFrequency: "weekly" as const,
        priority: 0.9,
        images: [`${SITE_URL}/markets/${m.slug}/opengraph-image`],
      })),
    },
    {
      id: "closed",
      heading: "Closed deals",
      hub: {
        path: "/closed",
        label: "Closed deals",
        lastModified: new Date(FILE_LAST_MODIFIED.closed),
        changeFrequency: "weekly",
        priority: 0.85,
      },
      entries: closed.map((d) => ({
        path: `/closed/${d.slug}`,
        label: `${d.name}, ${d.city}, ${d.state}`,
        lastModified: new Date(FILE_LAST_MODIFIED.closed),
        changeFrequency: "yearly" as const,
        priority: 0.7,
        images: d.photo
          ? [`${SITE_URL}${d.photo}`]
          : [`${SITE_URL}/closed/${d.slug}/opengraph-image`],
      })),
    },
    {
      id: "services",
      heading: "Services and offices",
      hub: {
        path: "/services",
        label: "Services",
        lastModified: new Date(FILE_LAST_MODIFIED.services),
        changeFrequency: "yearly",
        priority: 0.75,
      },
      entries: [
        ...services.map((s) => ({
          path: `/services/${s.slug}`,
          label: s.name,
          lastModified: new Date(FILE_LAST_MODIFIED.services),
          changeFrequency: "monthly" as const,
          priority: 0.75,
          images: [`${SITE_URL}/services/${s.slug}/opengraph-image`],
        })),
        ...offices.map((o) => ({
          path: `/offices/${o.slug}`,
          label: `${o.city}, ${o.state} office`,
          lastModified: new Date(FILE_LAST_MODIFIED.offices),
          changeFrequency: "monthly" as const,
          priority: 0.7,
          images: [`${SITE_URL}/offices/${o.slug}/opengraph-image`],
        })),
      ],
    },
    {
      id: "company",
      heading: "Company",
      hub: {
        path: "/",
        label: "Home",
        lastModified: new Date(FILE_LAST_MODIFIED.home),
        changeFrequency: "weekly",
        priority: 1.0,
      },
      entries: [
        {
          path: "/about",
          label: "About",
          lastModified: new Date(FILE_LAST_MODIFIED.about),
          changeFrequency: "monthly",
          priority: 0.6,
        },
        {
          path: "/team",
          label: "Team",
          lastModified: new Date(FILE_LAST_MODIFIED.team),
          changeFrequency: "monthly",
          priority: 0.8,
        },
        ...team
          .filter((m) => m.hasBio !== false)
          .map((m) => ({
            path: `/team/${m.slug}`,
            label: m.name,
            lastModified: new Date(FILE_LAST_MODIFIED.team),
            changeFrequency: "monthly" as const,
            priority: 0.7,
            images: m.photo
              ? [`${SITE_URL}${m.photo}`]
              : [`${SITE_URL}/team/${m.slug}/opengraph-image`],
          })),
        {
          path: "/process",
          label: "Transaction process",
          lastModified: new Date(FILE_LAST_MODIFIED.process),
          changeFrequency: "yearly",
          priority: 0.7,
        },
        {
          path: "/press",
          label: "Press",
          lastModified: new Date(FILE_LAST_MODIFIED.press),
          changeFrequency: "monthly",
          priority: 0.5,
        },
        {
          path: "/developers",
          label: "For developers and AI agents",
          // Authored 2026-09-18 with the agent-access layer; bump when it changes.
          lastModified: new Date("2026-09-18T12:00:00Z"),
          changeFrequency: "monthly",
          priority: 0.4,
        },
        {
          path: "/contact",
          label: "Contact",
          lastModified: new Date(FILE_LAST_MODIFIED.contact),
          changeFrequency: "yearly",
          priority: 0.7,
        },
      ],
    },
  ];

  // The HTML site map lists itself last. Its date is the newest date above:
  // the page changes exactly when the inventory does.
  const all = sections.flatMap((s) => [...(s.hub ? [s.hub] : []), ...s.entries]);
  const newest = all.reduce((d, e) => (e.lastModified > d ? e.lastModified : d), new Date(0));
  sections[sections.length - 1].entries.push({
    path: SITE_MAP_PAGE_PATH,
    label: "Site map",
    lastModified: newest,
    changeFrequency: "weekly",
    priority: 0.3,
  });

  return sections;
}

/** Flat list, hubs first inside each section. */
export function siteMapEntries(): SiteMapEntry[] {
  return siteMapSections().flatMap((s) => [...(s.hub ? [s.hub] : []), ...s.entries]);
}
