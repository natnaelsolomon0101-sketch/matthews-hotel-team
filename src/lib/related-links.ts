/**
 * Related links for the detail pages: /listings/[slug], /closed/[slug] and
 * /insights/[slug].
 *
 * Every target is chosen by an explicit rule or an explicit map below and is
 * resolved against its own data module before it is returned, so a link can
 * never point at a route that does not exist. Anchor text is always the
 * target's own H1 (or the H1's lead line for market and brand pages).
 *
 * Rules:
 * - Market: only when the record's city AND state equal a market's city and
 *   state. No metro-membership guessing for suburbs (geo/05-architecture.md
 *   R16: never link a market whose metro does not contain the asset).
 * - Brand: only through FLAGS, an explicit flag-to-page map. Each entry names
 *   the exact `flagFamilies` entry in brands.ts it relies on, and the link is
 *   dropped if that entry is not on the brand page. No first-word matching
 *   (geo/content-queue.md section G: it makes "Hilton Garden Inn" match
 *   "hilton").
 * - Franchise guide: only when FLAGS names a /hotel-franchise-costs guide that
 *   covers that exact flag.
 * - SBA: the record's state page under /data/sba-hotel-lending, when one exists.
 * - Answers: explicit per-page-type maps.
 */
import { markets } from "./data/markets";
import { brands } from "./data/brands";
import { answerPages, answerPath } from "./data/answers";
import { insights, type Insight } from "./data/insights";
import type { Listing } from "./data/listings";
import type { ClosedDeal } from "./data/closed";
import { statePageByCode, stateH1 } from "./sba/states";

export type RelatedLink = { href: string; label: string };
export type RelatedGroup = { heading: string; links: RelatedLink[] };

/* ----------------------------------------------------------- resolvers */

function answerLink(path: string): RelatedLink | undefined {
  const page = answerPages.find((p) => answerPath(p) === path);
  return page ? { href: path, label: page.h1 } : undefined;
}

function marketLink(city: string, state: string): RelatedLink | undefined {
  const m = markets.find((x) => x.city === city && x.state === state);
  return m ? { href: `/markets/${m.slug}`, label: `Hotels for sale in ${m.city}, ${m.state}` } : undefined;
}

function sbaLink(state: string): RelatedLink | undefined {
  const p = statePageByCode(state);
  return p ? { href: p.path, label: stateH1(p) } : undefined;
}

/* --------------------------------------------------------------- flags */

type FlagPages = {
  /** [brands.ts slug, the exact `flagFamilies` entry on that page]. */
  brand?: readonly [string, string];
  /** Slug of the /hotel-franchise-costs guide that covers this exact flag. */
  franchise?: string;
};

/**
 * Keyed by the flag as the records name it: `Listing.brand` verbatim, and the
 * flag in a closed deal's name (see CLOSED_FLAGS). A flag with no entry gets
 * no brand or franchise link.
 */
const FLAGS = {
  // Hilton
  "Hampton Inn": { brand: ["hampton-inn", "Hampton Inn"], franchise: "hampton-inn" },
  "Hampton Inn & Suites": { brand: ["hampton-inn", "Hampton Inn & Suites"], franchise: "hampton-inn" },
  "Hampton by Hilton": { brand: ["hampton-inn", "Hampton by Hilton"], franchise: "hampton-inn" },
  "Hilton Garden Inn": { brand: ["hilton", "Hilton Garden Inn"], franchise: "hilton-garden-inn" },
  "Home2 Suites": { brand: ["hilton", "Home2 Suites"], franchise: "home2-suites" },
  // IHG
  "Holiday Inn Express": { brand: ["holiday-inn-express", "Holiday Inn Express"] },
  "Holiday Inn": { brand: ["ihg", "Holiday Inn"] },
  "Staybridge Suites": { brand: ["ihg", "Staybridge Suites"] },
  "Crowne Plaza": { brand: ["ihg", "Crowne Plaza"] },
  InterContinental: { brand: ["ihg", "InterContinental"] },
  // Marriott
  Marriott: { brand: ["marriott", "Marriott (Full Service)"] },
  "Courtyard by Marriott": { brand: ["marriott", "Courtyard by Marriott"] },
  "Residence Inn": { brand: ["marriott", "Residence Inn"] },
  "SpringHill Suites": { brand: ["marriott", "SpringHill Suites"] },
  "Fairfield by Marriott": { brand: ["marriott", "Fairfield Inn & Suites"] },
  // Choice. Country Inn & Suites is recorded with brand "Radisson" in closed.ts.
  "Comfort Suites": { brand: ["choice", "Comfort Suites"], franchise: "comfort-inn" },
  "Quality Inn": { brand: ["choice", "Quality Inn"], franchise: "quality-inn" },
  Radisson: { brand: ["choice", "Radisson"] },
  "Country Inn & Suites": { brand: ["choice", "Radisson"] },
  // Econo Lodge is not among the Choice page's flag families, so guide only.
  "Econo Lodge": { franchise: "econo-lodge" },
  // Wyndham
  "La Quinta by Wyndham": { brand: ["wyndham", "La Quinta Inn & Suites"], franchise: "la-quinta" },
  "La Quinta Inn & Suites": { brand: ["wyndham", "La Quinta Inn & Suites"], franchise: "la-quinta" },
  Microtel: { brand: ["wyndham", "Microtel Inn & Suites"], franchise: "microtel" },
  "Days Inn": { brand: ["wyndham", "Days Inn"], franchise: "days-inn" },
  "Super 8": { brand: ["wyndham", "Super 8"], franchise: "super-8" },
  Ramada: { brand: ["wyndham", "Ramada"] },
  // Best Western. The Best Western guide's FDD covers Best Western Plus.
  "Best Western Plus": { brand: ["best-western", "Best Western Plus"], franchise: "best-western" },
  // No brand page on this site.
  "Red Roof Inn": { franchise: "red-roof-inn" },
} as const satisfies Record<string, FlagPages>;

type Flag = keyof typeof FLAGS;

/**
 * Closed deals record the parent company in `brand`, so the flag comes from
 * this explicit map by slug. Multi-brand portfolios and independents are left
 * out on purpose.
 */
const CLOSED_FLAGS: Record<string, Flag[]> = {
  "courtyard-lake-charles-debt": ["Courtyard by Marriott"],
  "marriott-2-pack-del-mar-debt": ["Marriott"],
  "full-service-marriott-fort-collins-debt": ["Marriott"],
  "4-pack-marriott-intercon-portfolio-debt": ["Marriott", "InterContinental"],
  "residence-inn-san-marcos-construction": ["Residence Inn"],
  "staybridge-suites-austin-permanent": ["Staybridge Suites"],
  "country-inn-suites-augusta-cmbs": ["Country Inn & Suites"],
  "hampton-inn-portfolio-atlanta-sale-bridge": ["Hampton Inn"],
  "crown-plaza-downtown-dallas-permanent": ["Crowne Plaza"],
  "radisson-hotel-corning-sale": ["Radisson"],
  "hilton-garden-inn-bozeman-permanent": ["Hilton Garden Inn"],
  "hampton-inn-suites-beaumont-sale-bridge": ["Hampton Inn & Suites"],
  "holiday-inn-express-augusta-sale-bridge": ["Holiday Inn Express"],
  "ramada-houston-permanent": ["Ramada"],
  "staybridge-suites-houston-permanent": ["Staybridge Suites"],
  "country-inn-suites-san-antonio-permanent": ["Country Inn & Suites"],
  "hampton-home2-suites-austin-pref-equity": ["Hampton Inn", "Home2 Suites"],
  "home2-suites-del-rio-construction": ["Home2 Suites"],
  "dual-brand-hampton-home2-austin-construction": ["Hampton Inn", "Home2 Suites"],
  "hampton-inn-beaumont-permanent": ["Hampton Inn"],
  "home2-suites-columbus-permanent": ["Home2 Suites"],
  "hampton-inn-suites-altoona-permanent": ["Hampton Inn & Suites"],
  "la-quinta-inn-suites-waco-permanent": ["La Quinta Inn & Suites"],
  "holiday-inn-express-early-permanent": ["Holiday Inn Express"],
  "home2-suites-hanford-permanent": ["Home2 Suites"],
  "hampton-inn-home2-suites-tulsa-permanent": ["Hampton Inn", "Home2 Suites"],
  "quality-inn-carthage-permanent": ["Quality Inn"],
  "home2-suites-merrillville-permanent": ["Home2 Suites"],
  "home2-suites-austin-permanent": ["Home2 Suites"],
  "holiday-inn-vidor-permanent": ["Holiday Inn"],
};

function isFlag(s: string): s is Flag {
  return Object.prototype.hasOwnProperty.call(FLAGS, s);
}

function brandLinks(flags: Flag[]): RelatedLink[] {
  const out: RelatedLink[] = [];
  for (const f of flags) {
    const pages: FlagPages = FLAGS[f];
    if (!pages.brand) continue;
    const [slug, family] = pages.brand;
    const b = brands.find((x) => x.slug === slug);
    if (b && b.flagFamilies.includes(family)) {
      out.push({ href: `/hotels-for-sale/${b.slug}`, label: `${b.name} for sale` });
    }
  }
  return out;
}

function franchiseLinks(flags: Flag[]): RelatedLink[] {
  const out: RelatedLink[] = [];
  for (const f of flags) {
    const pages: FlagPages = FLAGS[f];
    const link = pages.franchise ? answerLink(`/hotel-franchise-costs/${pages.franchise}`) : undefined;
    if (link) out.push(link);
  }
  return out;
}

/* ------------------------------------------------------------- answers */

const DUE_DILIGENCE = "/buy-a-hotel/due-diligence-checklist";
const MAKE_OFFER = "/buy-a-hotel/how-to-make-an-offer";
const UNDERWRITE = "/buy-a-hotel/how-to-underwrite-a-hotel-deal";
const BRANDED_VS_INDEPENDENT = "/buy-a-hotel/branded-vs-independent";
const HOW_TO_SELL = "/sell-a-hotel/how-to-sell-a-hotel";
const HOW_TO_VALUE = "/hotel-valuation/how-to-value-a-hotel";
const DEBT_PLACEMENT = "/hotel-financing/how-debt-placement-works";
const MEZZ_PREF = "/hotel-financing/mezzanine-debt-and-preferred-equity";
const CONSTRUCTION = "/hotel-financing/construction-loans";
const COST_TO_BUILD = "/hotel-industry/cost-to-build-a-hotel";

/** Listings: buying questions. Overrides by slug, then by flag. */
const LISTING_ANSWERS_BY_SLUG: Record<string, string[]> = {
  // An approved development site, not an operating hotel.
  "hotel-pad-site-morrisville": [COST_TO_BUILD, CONSTRUCTION],
};
const LISTING_ANSWERS_BY_FLAG: Record<string, string[]> = {
  Independent: [DUE_DILIGENCE, MAKE_OFFER, BRANDED_VS_INDEPENDENT],
};
const LISTING_ANSWERS_DEFAULT = [DUE_DILIGENCE, MAKE_OFFER, UNDERWRITE];

/**
 * Closed deals: keyed by `transactionTypeLabel`, falling back to
 * `transactionType`. Sales get selling and valuation; financings get the
 * placement process and the matching product page.
 */
const CLOSED_ANSWERS: Record<string, string[]> = {
  // Investment Sale
  "Asset Sale": [HOW_TO_SELL, HOW_TO_VALUE],
  "Asset Sale + Bridge Financing": [HOW_TO_SELL, HOW_TO_VALUE, "/hotel-financing/bridge-loans"],
  "Asset Sale + CMBS Assumption": [HOW_TO_SELL, HOW_TO_VALUE, "/hotel-financing/loan-assumption"],
  "Land Purchase": [COST_TO_BUILD, CONSTRUCTION],
  "Investment Sale": [HOW_TO_SELL, HOW_TO_VALUE],
  // Debt Placement
  "Permanent Financing": [DEBT_PLACEMENT, "/hotel-financing/loan-requirements"],
  "CMBS Debt Placement": [DEBT_PLACEMENT, "/hotel-financing/cmbs-loans"],
  "Bank Debt Placement": [DEBT_PLACEMENT, "/hotel-financing/hotel-lenders-by-type"],
  "Debt Fund + Mezz Placement": [DEBT_PLACEMENT, MEZZ_PREF],
  "Construction Financing": [DEBT_PLACEMENT, CONSTRUCTION],
  "Development + Construction Financing": [DEBT_PLACEMENT, CONSTRUCTION],
  "Debt Placement": [DEBT_PLACEMENT, "/hotel-financing/hotel-lenders-by-type"],
  // Equity Placement
  "Preferred Equity": [MEZZ_PREF, "/hotel-financing/capital-stack"],
  "Equity Placement": [MEZZ_PREF, "/hotel-financing/capital-stack"],
  Recapitalization: ["/hotel-financing/capital-stack", "/hotel-financing/refinance-or-sell"],
};
/** Added to an extended-stay financing, up to three answer links. */
const EXTENDED_STAY_FINANCING = "/hotel-financing/extended-stay-financing";

/** Insights: up to three answer pages per article, chosen by hand per topic. */
const INSIGHT_ANSWERS: Record<string, string[]> = {
  "texas-hotel-cap-rates-q2-2026": [
    "/hotel-valuation/hotel-cap-rates",
    HOW_TO_VALUE,
    "/hotel-valuation/interest-rates-and-hotel-value",
  ],
  "select-service-vs-full-service-2026": [
    "/hotel-valuation/select-service-vs-full-service",
    "/hotel-industry/chain-scales-and-classes",
    "/hotel-valuation/pip-and-hotel-value",
  ],
  "hotel-refinancing-wave-2026": [
    "/hotel-financing/refinance",
    "/hotel-financing/refinance-or-sell",
    "/hotel-financing/loan-maturities-2026-2027",
  ],
  "sun-belt-hospitality-investment-2026": [
    "/hotel-industry/who-buys-hotels",
    "/hotel-valuation/hotel-cap-rates",
    "/hotel-industry/outlook-2026-2027",
  ],
  "brand-flag-cap-rate-guide-2026": [
    "/hotel-valuation/branded-select-service-hotel-value",
    "/hotel-valuation/pip-and-hotel-value",
    "/hotel-franchise-costs",
  ],
  "how-to-sell-a-hotel-2026": [
    HOW_TO_SELL,
    "/sell-a-hotel/how-long-it-takes",
    "/sell-a-hotel/broker-fees",
  ],
  "hotel-cmbs-distress-trepp-2026": [
    "/hotel-financing/cmbs-loans",
    "/hotel-financing/loan-workouts",
    "/buy-a-hotel/buying-a-hotel-from-receivership-or-foreclosure",
  ],
  "hotel-adr-revpar-recovery-2026": [
    "/hotel-industry/revpar-adr-occupancy",
    "/hotel-industry/outlook-2026-2027",
    "/hotel-valuation/revpar-multiples-and-per-key",
  ],
  "q1-2026-outlook": [
    "/hotel-valuation/hotel-cap-rates",
    "/hotel-valuation/select-service-vs-full-service",
    "/hotel-industry/outlook-2026-2027",
  ],
  "adr-recovery-texas-secondary": ["/hotel-industry/revpar-adr-occupancy", UNDERWRITE],
  "glamping-investment-thesis": [BRANDED_VS_INDEPENDENT, "/hotel-industry/how-hotels-make-money"],
  "select-service-vs-full-service-capital-markets-2026": [
    "/hotel-valuation/select-service-vs-full-service",
    "/hotel-financing/brand-conversion-financing",
    "/hotel-valuation/hotel-cap-rates",
  ],
  "hotel-owners-refinancing-wave-2026": [
    "/hotel-financing/refinance-or-sell",
    "/hotel-financing/loan-workouts",
    "/hotel-valuation/broker-opinion-of-value",
  ],
  "sun-belt-hospitality-2026-investor-sentiment-preview": [
    "/hotel-industry/who-buys-hotels",
    "/hotel-valuation/hotel-cap-rates",
  ],
};

/**
 * Related insights for an article that has no `relatedInsights` of its own:
 * the articles sharing the most tags, ties in site order. When fewer than
 * three share a tag, this explicit list tops it up.
 */
const INSIGHT_FALLBACK: Record<string, string[]> = {
  "adr-recovery-texas-secondary": ["texas-hotel-cap-rates-q2-2026"],
  // No shared tags. These three discuss resort and lifestyle demand.
  "glamping-investment-thesis": [
    "q1-2026-outlook",
    "sun-belt-hospitality-investment-2026",
    "texas-hotel-cap-rates-q2-2026",
  ],
};

/* --------------------------------------------------------------- build */

function resolveAnswers(paths: string[], max = 3): RelatedLink[] {
  return paths
    .map(answerLink)
    .filter((l): l is RelatedLink => Boolean(l))
    .slice(0, max);
}

function dedupe(links: RelatedLink[]): RelatedLink[] {
  const seen = new Set<string>();
  return links.filter((l) => {
    if (seen.has(l.href)) return false;
    seen.add(l.href);
    return true;
  });
}

function groups(
  forSale: (RelatedLink | undefined)[],
  questions: RelatedLink[],
  data: (RelatedLink | undefined)[],
): RelatedGroup[] {
  const clean = (ls: (RelatedLink | undefined)[]) =>
    dedupe(ls.filter((l): l is RelatedLink => Boolean(l)));
  return [
    { heading: "Hotels for sale", links: clean(forSale) },
    { heading: "Related questions", links: clean(questions) },
    { heading: "Data", links: clean(data) },
  ].filter((g) => g.links.length > 0);
}

export function listingRelated(l: Listing): RelatedGroup[] {
  const flags: Flag[] = isFlag(l.brand) ? [l.brand] : [];
  const answers =
    LISTING_ANSWERS_BY_SLUG[l.slug] ?? LISTING_ANSWERS_BY_FLAG[l.brand] ?? LISTING_ANSWERS_DEFAULT;
  return groups(
    [marketLink(l.city, l.state), ...brandLinks(flags)],
    [...franchiseLinks(flags), ...resolveAnswers(answers)],
    [sbaLink(l.state)],
  );
}

// Closed records whose state field does not describe one hotel in one state:
// two multi-state portfolios and a multifamily deal. A state SBA hotel-lending
// page says nothing useful about them.
const NO_SBA_LINK = new Set([
  "26-hotel-portfolio-acquisition-debt",
  "4-pack-marriott-intercon-portfolio-debt",
  "tampa-boutique-multifamily-pref-equity",
]);

export function closedRelated(d: ClosedDeal): RelatedGroup[] {
  const flags = CLOSED_FLAGS[d.slug] ?? [];
  const byLabel = d.transactionTypeLabel ? CLOSED_ANSWERS[d.transactionTypeLabel] : undefined;
  const base = byLabel ?? CLOSED_ANSWERS[d.transactionType] ?? [];
  const answers =
    d.transactionType === "Debt Placement" && d.segment === "Extended Stay"
      ? [...base, EXTENDED_STAY_FINANCING]
      : base;
  return groups(
    [marketLink(d.city, d.state), ...brandLinks(flags)],
    [...franchiseLinks(flags), ...resolveAnswers(answers)],
    [NO_SBA_LINK.has(d.slug) ? undefined : sbaLink(d.state)],
  );
}

export function insightAnswerLinks(i: Insight): RelatedLink[] {
  return resolveAnswers(INSIGHT_ANSWERS[i.slug] ?? []);
}

export function relatedInsightSlugs(i: Insight): string[] {
  if (i.relatedInsights && i.relatedInsights.length > 0) return i.relatedInsights;
  const tags = new Set(i.tags);
  const byTag = insights
    .filter((o) => o.slug !== i.slug)
    .map((o, idx) => ({ slug: o.slug, idx, shared: o.tags.filter((t) => tags.has(t)).length }))
    .filter((o) => o.shared > 0)
    .sort((a, b) => b.shared - a.shared || a.idx - b.idx)
    .map((o) => o.slug);
  const known = new Set(insights.map((o) => o.slug));
  const fallback = (INSIGHT_FALLBACK[i.slug] ?? []).filter((s) => known.has(s) && s !== i.slug);
  return [...new Set([...byTag, ...fallback])].slice(0, 3);
}
