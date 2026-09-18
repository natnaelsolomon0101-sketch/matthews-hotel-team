/**
 * ENTITY: the single source of truth for who this site says it is.
 *
 * Every JSON-LD block, every boilerplate sentence, and every canonical URL on
 * the site derives from this file. If a brand fact changes (address, phone,
 * email, the one-sentence description, a social profile), it changes HERE and
 * nowhere else. Do not re-type these strings in a page component.
 *
 * Sourcing rules applied when this file was written (2026-09-17):
 *   - Address, offices, geo: src/lib/data/offices.ts
 *   - People, titles, phones, emails, LinkedIn: src/lib/data/team.ts
 *   - Service lines and their dollar ranges: src/lib/data/services.ts
 *   - Parent social profiles: links published on matthews.com (fetched 2026-09-17)
 *   - Nothing here is invented. Facts the repo cannot support are listed in
 *     geo/03-entity.md under "Unverified" and are deliberately ABSENT from the
 *     graph (notably: a founding year, a Denver street address, an
 *     organization-level phone number, and any Wikidata/Wikipedia item).
 */

import { offices } from "@/lib/data/offices";
import { services } from "@/lib/data/services";
import { team, type TeamMember } from "@/lib/data/team";

/* ---------------------------------------------------------------- constants */

export const SITE_URL = "https://matthewshotelmarkets.com";

/** Exact brand string. Never abbreviate, never re-case. */
export const BRAND = "Matthews Hotel Markets";
/** The one alternate name already in circulation on the site and in llms.txt. */
export const BRAND_ALTERNATE = "Matthews Hotel Team";
/** Exact legal parent string. */
export const PARENT = "Matthews Real Estate Investment Services";
export const PARENT_URL = "https://www.matthews.com";

/** Team inbox. The only org-level contact address on the site. */
export const EMAIL = "hotelteam@matthews.com";

/**
 * There is NO organization-level telephone number anywhere in this repo: the
 * footer, the contact page, and offices.ts all omit one. Individual brokers
 * have direct lines (team.ts). We do not publish a switchboard number we
 * cannot verify, so Organization/LocalBusiness carry no `telephone`.
 */
export const ORG_TELEPHONE: string | undefined = undefined;

export const LINKEDIN = "https://www.linkedin.com/company/matthews-hotel-markets/";

/** Parent profiles, taken from the links matthews.com publishes on its own site. */
export const PARENT_SAME_AS = [
  PARENT_URL,
  "https://www.linkedin.com/company/4821421",
  "https://x.com/Matthews_REIS",
];

export const LOGO_URL = `${SITE_URL}/images/matthews-logo.jpg`;
export const IMAGE_URL = `${SITE_URL}/images/hero-landscape.jpg`;

/* ------------------------------------------------------------- boilerplate */

/**
 * THE BOILERPLATE. These are the two sentences a model should be able to lift
 * verbatim, and every clause in them is backed by the repo:
 *   - "hospitality investment sales and capital markets team of <parent>"
 *      -> services.ts (investment-sales + capital-markets), footer, llms.txt
 *   - "515 Congress Ave. in Austin, Texas"
 *      -> offices.ts austin.streetAddress, rendered in the footer on every page
 *   - "sells hotels from $2 million"
 *      -> services.ts investment-sales.rangeValue "$2M to $200M+", rendered
 *         visibly on /services/investment-sales
 *   - "places hotel debt from $5 million"
 *      -> services.ts capital-markets.rangeValue "$5M to $200M+", rendered
 *         visibly on /services/capital-markets
 *   - "nationwide" -> areaServed United States, used site-wide
 *
 * Same words everywhere: Organization.description, /about, /team, the footer,
 * and llms.txt. Consistency is the signal. No em-dashes.
 */
export const BOILERPLATE =
  "Matthews Hotel Markets is the hospitality investment sales and capital markets team of Matthews Real Estate Investment Services, based at 515 Congress Ave. in Austin, Texas. The team sells hotels from $2 million and places hotel debt from $5 million, nationwide.";

/** Footer-length version. First sentence only, minus the street address. */
export const BOILERPLATE_SHORT =
  "Matthews Hotel Markets is the hospitality investment sales and capital markets team of Matthews Real Estate Investment Services, based in Austin, Texas.";

/* ---------------------------------------------------------------- addresses */

const austin = offices.find((o) => o.slug === "austin");

export const HQ = {
  streetAddress: austin?.streetAddress ?? "515 Congress Ave., Suite 2410",
  addressLocality: austin?.city ?? "Austin",
  addressRegion: austin?.state ?? "TX",
  postalCode: austin?.zip ?? "78701",
  addressCountry: "US",
} as const;

/** One-line address string for visible copy. Matches the footer exactly. */
export const HQ_ADDRESS_LINE = `${HQ.streetAddress}, ${HQ.addressLocality}, ${HQ.addressRegion} ${HQ.postalCode}`;

export const HQ_GEO = austin?.geo ?? { lat: 30.2672, lng: -97.7431 };

/**
 * States the site actually names in its own market, office, and listing data.
 * Kept narrow on purpose: areaServed is a claim, not a wish.
 */
export const AREA_SERVED_STATES = [
  "Texas",
  "Colorado",
  "Arizona",
  "Florida",
  "Georgia",
  "North Carolina",
  "South Carolina",
  "Tennessee",
];

export const KNOWS_ABOUT = [
  "Hotel Investment Sales",
  "Hospitality Brokerage",
  "Hotel Capital Markets",
  "Hotel Debt Placement",
  "Select-Service Hotels",
  "Full-Service Hotels",
  "Boutique Hotels",
  "Resort Sales",
  "Hotel Valuation",
  "Broker Opinion of Value",
  "Hotel Cap Rates",
  "Hotel Acquisition Advisory",
  "Hotel Underwriting",
];

/* ------------------------------------------------------------------- @ids */

export const ID = {
  org: `${SITE_URL}/#org`,
  parent: `${SITE_URL}/#parent-org`,
  website: `${SITE_URL}/#website`,
  hq: `${SITE_URL}/#office-austin`,
  person: (slug: string) => `${SITE_URL}/team/${slug}#person`,
  service: (slug: string) => `${SITE_URL}/services/${slug}#service`,
} as const;

/* ------------------------------------------------------------- node types */

export type JsonLdNode = Record<string, unknown>;

/** Strip undefined so JSON.stringify never emits half-empty properties. */
function clean<T extends JsonLdNode>(node: T): T {
  for (const k of Object.keys(node)) {
    if (node[k] === undefined) delete node[k];
  }
  return node;
}

/* ------------------------------------------------------------ graph nodes */

export function parentOrganizationNode(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ID.parent,
    name: PARENT,
    alternateName: "Matthews REIS",
    url: PARENT_URL,
    // No Wikidata or Wikipedia entry exists for this firm as of 2026-09-17
    // (checked via the Wikidata wbsearchentities API and the English Wikipedia
    // search API: both returned zero results). Do not add a guessed Q-number.
    sameAs: PARENT_SAME_AS,
  };
}

/**
 * The brand itself. RealEstateAgent is a LocalBusiness subtype, so it keeps
 * local eligibility while naming the industry. FinancialService is carried as
 * additionalType because the team also places debt.
 */
export function organizationNode(): JsonLdNode {
  return clean({
    "@type": "RealEstateAgent",
    "@id": ID.org,
    additionalType: "https://schema.org/FinancialService",
    name: BRAND,
    alternateName: BRAND_ALTERNATE,
    url: SITE_URL,
    logo: LOGO_URL,
    image: IMAGE_URL,
    description: BOILERPLATE,
    telephone: ORG_TELEPHONE,
    email: EMAIL,
    parentOrganization: { "@id": ID.parent },
    address: { "@type": "PostalAddress", ...HQ },
    location: { "@id": ID.hq },
    areaServed: [
      { "@type": "Country", name: "United States" },
      ...AREA_SERVED_STATES.map((name) => ({ "@type": "State", name })),
    ],
    knowsAbout: KNOWS_ABOUT,
    sameAs: [LINKEDIN, PARENT_URL],
    // The three published brokers. The wider bench is enumerated on /team,
    // where it is visible, not on every page.
    employee: bioMembers().map((m) => ({ "@id": ID.person(m.slug) })),
    makesOffer: services.map((s) => ({ "@id": ID.service(s.slug) })),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: EMAIL,
      areaServed: "US",
      availableLanguage: "English",
    },
  });
}

/**
 * Austin HQ only. Denver has a real team member (Miles Cortez III) but
 * offices.ts carries no Denver street address, so there is no second
 * LocalBusiness node. Denver appears as areaServed and as an office page.
 */
export function hqLocalBusinessNode(): JsonLdNode {
  return {
    "@type": ["LocalBusiness", "RealEstateAgent"],
    "@id": ID.hq,
    name: `${BRAND}, Austin`,
    url: `${SITE_URL}/offices/austin`,
    email: EMAIL,
    parentOrganization: { "@id": ID.org },
    address: { "@type": "PostalAddress", ...HQ },
    geo: {
      "@type": "GeoCoordinates",
      latitude: HQ_GEO.lat,
      longitude: HQ_GEO.lng,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "State", name: "Texas" },
    ],
  };
}

export function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": ID.website,
    url: SITE_URL,
    name: BRAND,
    description: BOILERPLATE,
    publisher: { "@id": ID.org },
    inLanguage: "en-US",
  };
}

/**
 * The roster is 22 real people. Three of them (Luke Thompson, Miles Cortez III,
 * Nate Solomon) have `hasBio: true` and full detail pages at /team/[slug]; the
 * other 19 are the wider Matthews hospitality bench and render on /team as
 * name + title + office + email + phone cards only.
 *
 * bioMembers() is the three with published bios. They are the only people who
 * may appear in an author or reviewer box, because they are the only ones with
 * a page to link to.
 */
export function bioMembers(): TeamMember[] {
  return team.filter((m) => m.hasBio !== false);
}

/** The 19 bench members: visible on /team, no detail page. */
export function liteMembers(): TeamMember[] {
  return team.filter((m) => m.hasBio === false);
}

/**
 * Minimal Person node for a bench member. Only properties the repo actually
 * has AND /team actually renders: name, title, office, email, phone, photo.
 * No sameAs, no knowsAbout, no description: we do not have them, so we do not
 * claim them.
 */
export function litePersonNode(member: TeamMember): JsonLdNode {
  const parts = member.name.split(/\s+/);
  return clean({
    "@type": "Person",
    "@id": `${SITE_URL}/team#${member.slug}`,
    name: member.name,
    givenName: parts[0],
    familyName: parts.length > 1 ? parts[parts.length - 1] : undefined,
    jobTitle: member.title || undefined,
    email: member.email || undefined,
    telephone: member.phone || undefined,
    image: member.photo || undefined,
    worksFor: { "@id": ID.org },
    workLocation: member.office
      ? { "@type": "Place", name: `${PARENT}, ${member.office}` }
      : undefined,
  });
}

export function personNode(member: TeamMember): JsonLdNode {
  const url = `${SITE_URL}/team/${member.slug}`;
  const parts = member.name.split(/\s+/);

  return clean({
    "@type": "Person",
    "@id": ID.person(member.slug),
    name: member.name,
    givenName: parts[0],
    familyName: parts.length > 1 ? parts[1] : undefined,
    jobTitle: member.title,
    description: member.bio || undefined,
    image: member.photo ? `${SITE_URL}${member.photo}` : LOGO_URL,
    telephone: member.phone || undefined,
    email: member.email || undefined,
    url,
    mainEntityOfPage: url,
    worksFor: { "@id": ID.org },
    affiliation: { "@id": ID.org },
    workLocation: {
      "@type": "Place",
      name: `${BRAND}, ${member.office}`,
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Real Estate Broker",
      // BLS SOC code for Real Estate Sales Agents.
      occupationalCategory: "41-9022.00",
      occupationLocation: {
        "@type": "Place",
        name: `${BRAND}, ${member.office}`,
      },
    },
    knowsAbout: Array.from(
      new Set<string>([
        ...member.specialties,
        "Hotel Investment Sales",
        "Hospitality Capital Markets",
        "Hotel Acquisition Advisory",
        "Hotel Underwriting",
        "Hotel Valuation",
      ]),
    ),
    sameAs: member.linkedin ? [member.linkedin] : undefined,
    alumniOf:
      member.education.length > 0
        ? member.education.map((e) => {
            const seg = e.split(",").map((s) => s.trim());
            return {
              "@type": "EducationalOrganization",
              name: seg[seg.length - 1],
            };
          })
        : undefined,
    memberOf:
      member.affiliations && member.affiliations.length > 0
        ? member.affiliations.map((a) => ({ "@type": "Organization", name: a }))
        : undefined,
    award: member.designations.length > 0 ? member.designations : undefined,
  });
}

export function serviceNode(slug: string): JsonLdNode | null {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@type": "Service",
    "@id": ID.service(s.slug),
    name: s.name,
    serviceType: s.name,
    description: s.description,
    url: `${SITE_URL}/services/${s.slug}`,
    provider: { "@id": ID.org },
    areaServed: { "@type": "Country", name: "United States" },
    audience: { "@type": "BusinessAudience", audienceType: s.audience },
    offers: {
      "@type": "Offer",
      // Range is the visible `rangeValue` on /services/[slug]. No invented price.
      description: `${s.rangeLabel}: ${s.rangeValue}`,
      availability: "https://schema.org/InStock",
      seller: { "@id": ID.org },
    },
  };
}

export function serviceNodes(): JsonLdNode[] {
  return services
    .map((s) => serviceNode(s.slug))
    .filter((n): n is JsonLdNode => n !== null);
}

/** Breadcrumb helper. Pass the trail WITHOUT Home; Home is prepended. */
export function breadcrumb(
  trail: { name: string; path: string }[],
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: t.name,
        item: t.path.startsWith("http") ? t.path : `${SITE_URL}${t.path}`,
      })),
    ],
  };
}

/** Ordered list of internal URLs. Used on /listings and /closed. */
export function itemList(
  items: { name: string; path: string }[],
  id?: string,
): JsonLdNode {
  return clean({
    "@type": "ItemList",
    "@id": id,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: it.path.startsWith("http") ? it.path : `${SITE_URL}${it.path}`,
    })),
  });
}

/** Standard WebPage node, @id-linked into the WebSite and the Organization. */
export function webPage(opts: {
  url: string;
  name: string;
  description: string;
  primaryImage?: string;
  mainEntity?: string;
  datePublished?: string;
  dateModified?: string;
}): JsonLdNode {
  return clean({
    "@type": "WebPage",
    "@id": opts.url,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": ID.website },
    about: { "@id": ID.org },
    primaryImageOfPage: opts.primaryImage,
    mainEntity: opts.mainEntity ? { "@id": opts.mainEntity } : undefined,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: "en-US",
  });
}

/**
 * The nodes that appear on EVERY page. JsonLd merges these with the page's own
 * nodes into a single @graph and de-duplicates by @id, so a page may safely
 * emit a fuller version of any node below (e.g. /team/[slug] emits its own
 * Person node) and that version wins.
 */
export function baseGraph(): JsonLdNode[] {
  return [
    organizationNode(),
    parentOrganizationNode(),
    websiteNode(),
    hqLocalBusinessNode(),
    ...bioMembers().map(personNode),
    ...serviceNodes(),
  ];
}

/* -------------------------------------------- answer-page / tool nodes --
 *
 * Added for the Wave 1 answer clusters (/hotel-financing, /sell-a-hotel,
 * /hotel-valuation) and the tool shelf. Every node below mirrors something
 * visible on the page it is emitted from: the FAQ entries are rendered as
 * visible <dt>/<dd> pairs, the sources are rendered as a numbered list, the
 * dates are rendered under the H1. Schema for invisible content is forbidden
 * (SHARED SPEC 5.6), so these helpers only take what the page already shows.
 */

/** A cluster hub, as a CollectionPage its spokes can point `isPartOf` at. */
export function collectionPageNode(opts: {
  url: string;
  name: string;
  description: string;
  dateModified?: string;
  hasPart?: { url: string; name: string }[];
}): JsonLdNode {
  return clean({
    "@type": "CollectionPage",
    "@id": `${opts.url}#collection`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": ID.website },
    about: { "@id": ID.org },
    dateModified: opts.dateModified,
    inLanguage: "en-US",
    hasPart: opts.hasPart?.map((p) => ({
      "@type": "WebPage",
      "@id": p.url,
      url: p.url,
      name: p.name,
    })),
  });
}

/** The article body of an answer page. `citation` mirrors the visible sources. */
export function articleNode(opts: {
  url: string;
  headline: string;
  description: string;
  datePublished?: string;
  dateModified: string;
  authorSlug?: string;
  reviewerSlug?: string;
  isPartOf?: string;
  citation?: { label: string; url: string; publisher?: string }[];
  about?: string[];
  wordCount?: number;
}): JsonLdNode {
  const author = opts.authorSlug
    ? bioMembers().find((m) => m.slug === opts.authorSlug)
    : undefined;
  const reviewer = opts.reviewerSlug
    ? bioMembers().find((m) => m.slug === opts.reviewerSlug)
    : undefined;

  return clean({
    "@type": "Article",
    "@id": `${opts.url}#article`,
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished ?? opts.dateModified,
    dateModified: opts.dateModified,
    inLanguage: "en-US",
    // Only ever a Person with a published /team page. The other 19 roster
    // members have no page to link and never appear in a byline.
    author: author ? { "@id": ID.person(author.slug) } : { "@id": ID.org },
    reviewedBy: reviewer ? { "@id": ID.person(reviewer.slug) } : undefined,
    publisher: { "@id": ID.org },
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    isPartOf: opts.isPartOf ? { "@id": opts.isPartOf } : undefined,
    wordCount: opts.wordCount,
    about: opts.about,
    citation: opts.citation?.map((c) =>
      clean({
        "@type": "CreativeWork",
        name: c.label,
        url: c.url.startsWith("http") ? c.url : `${SITE_URL}${c.url}`,
        publisher: c.publisher
          ? { "@type": "Organization", name: c.publisher }
          : undefined,
      }),
    ),
  });
}

/**
 * FAQPage. Pass ONLY question/answer pairs that are rendered visibly on the
 * page, one for one, in the same order.
 */
export function faqPageNode(
  url: string,
  faq: { q: string; a: string }[],
): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      // Inline citation markers like "[2]" link to the visible source list on
      // the page; they mean nothing inside JSON-LD, so strip them here.
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\s*\[\d+\]/g, "") },
    })),
  };
}

/**
 * A calculator. No `offers` node: the tool is free and nothing is sold on the
 * page (geo/05-templates.md §5).
 */
export function webApplicationNode(opts: {
  url: string;
  name: string;
  description: string;
  dateModified: string;
  featureList?: string[];
}): JsonLdNode {
  return clean({
    "@type": "WebApplication",
    "@id": `${opts.url}#app`,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any modern web browser",
    browserRequirements: "Requires JavaScript for the interactive calculator. The formula, the worked example and every threshold are rendered in HTML without it.",
    isAccessibleForFree: true,
    creator: { "@id": ID.org },
    publisher: { "@id": ID.org },
    dateModified: opts.dateModified,
    featureList: opts.featureList,
  });
}
