/**
 * Hotel value estimator: /tools/hotel-value-estimator
 *
 * "What is my hotel worth?" as a screening range, never a point value.
 *
 * Rules this file follows:
 * - The only cap rates on the page are the Matthews Hotel Index bands, read
 *   from src/lib/data/mhi.ts at build time, printed with their quarter and
 *   linked to the edition. When a new quarter is added the page follows it.
 * - The MHI describes its own bands as ranges reconciled from public research
 *   and our underwriting, for stabilized, PIP-current hotels. This page says
 *   the same and does not claim more precision than that.
 * - The MHI covers 14 markets and has no national figure. "All 14 markets" is
 *   the envelope (lowest low to highest high) of the markets that publish a
 *   band for the segment. A market with no band for a segment falls back to
 *   that envelope and the page says so.
 * - Every hotel input default is hypothetical. The worked example and the
 *   table are computed by the same functions the island runs (math.ts).
 */
import type { ToolPage } from "../answers/types";
import { getLatestMhi, type Segment } from "../mhi";
import { markets } from "../markets";
import {
  computeValueEstimate,
  resolveCapBand,
  usd,
  type BandPoint,
  type ResolvedBand,
} from "./math";

const mhi = getLatestMhi();
export const MHI_LABEL = mhi.label;
export const MHI_PATH = `/research/mhi/${mhi.slug}`;
const MHI_PUBLISHED = new Date(`${mhi.publishedAt}T12:00:00Z`).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export const SEGMENTS: { value: Segment; label: string }[] = [
  { value: "select-service", label: "Select-service" },
  { value: "full-service", label: "Full-service" },
  { value: "resort-lifestyle", label: "Resort and lifestyle" },
];

/** Compact, serializable band data. The page hands this to the island. */
export const BAND_POINTS: (BandPoint & { label: string })[] = mhi.data.map((d) => {
  const m = markets.find((x) => x.slug === d.marketSlug);
  return {
    marketSlug: d.marketSlug,
    label: m ? `${m.city}, ${m.state}` : d.marketSlug,
    capRates: d.capRates.map((c) => ({ segment: c.segment, low: c.low, high: c.high })),
  };
});
const MARKET_COUNT = BAND_POINTS.length;

export const DEFAULT_SEGMENT: Segment = "select-service";
/** Empty string means "all markets". */
export const DEFAULT_MARKET = "";

export const DEFAULTS = {
  keys: 78,
  noi: 1050000,
  revenue: 3500000,
  noiMarginPct: 30,
  pip: 1100000,
};

export const bandText = (b: { low: number; high: number }) =>
  `${b.low.toFixed(2)}% to ${b.high.toFixed(2)}%`;

function must(b: ResolvedBand | null, what: string): ResolvedBand {
  if (!b) throw new Error(`MHI publishes no ${what} band in any market`);
  return b;
}

const envelope = Object.fromEntries(
  SEGMENTS.map((s) => [s.value, must(resolveCapBand(BAND_POINTS, s.value, null), s.value)]),
) as Record<Segment, ResolvedBand>;

const band = envelope[DEFAULT_SEGMENT];
const ex = computeValueEstimate({ ...DEFAULTS, bandLow: band.low, bandHigh: band.high });

/** A market that lacks a segment band, found in the data, for the fallback example. */
const gapMarket = BAND_POINTS.find(
  (p) => !p.capRates.some((c) => c.segment === DEFAULT_SEGMENT),
);

const tableRows = [
  ...BAND_POINTS.map((p) => [
    p.label,
    ...SEGMENTS.map((s) => {
      const b = p.capRates.find((c) => c.segment === s.value);
      return b ? bandText(b) : "No band published";
    }),
  ]),
  [
    `All ${MARKET_COUNT} markets (lowest low to highest high)`,
    ...SEGMENTS.map((s) => `${bandText(envelope[s.value])}[1]`),
  ],
];

export const page: ToolPage = {
  slug: "hotel-value-estimator",
  cluster: "tools",
  title: "Hotel Value Estimator: What Is My Hotel Worth?",
  h1: "What is my hotel worth? A hotel value estimator that gives a screening range",
  description:
    "Enter keys, NOI or revenue and margin, segment, market and PIP. Get a value range and per-key range from the Matthews Hotel Index cap rate bands. No sign-up.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What is my hotel worth?",
    "I own a 78-key select-service hotel. Roughly what could it sell for?",
    "How do I estimate the value of my hotel from its NOI?",
    "What is my hotel worth per key?",
    "How much does a PIP take off my hotel's value?",
    "Is there a free hotel valuation calculator?",
  ],
  answer: `A first-pass hotel value is NOI divided by a cap rate band, less any PIP still to fund. The Matthews Hotel Index for ${MHI_LABEL}, published ${MHI_PUBLISHED}, puts ${SEGMENTS[0].label.toLowerCase()} hotels at ${bandText(band)} across its ${MARKET_COUNT} markets.[1] On $1,050,000 of NOI with a $1,100,000 PIP, that is ${usd(ex.valueLow)} to ${usd(ex.valueHigh)}. Matthews Hotel Markets calls that a screening range, not a valuation.`,
  takeaways: [
    "The output is a range, because the index publishes cap rate bands and not a single rate.[1]",
    "The wide end of the band gives the low value and the tight end gives the high value. The PIP comes off both.",
    `The bands are the ${MHI_LABEL} Matthews Hotel Index, first-party data reconciled from public research and our own underwriting. They describe stabilized, PIP-current hotels.[1]`,
    "The estimator ignores brand, condition, ground leases, new supply, deferred capital work and management contracts. Any one of them can move a hotel outside the range.",
    "A broker opinion of value, built from named comparable sales, is the real answer. This tool only tells you roughly where that conversation starts.",
  ],
  sections: [
    {
      h2: "How the estimate works",
      lead: "The hotel value estimator divides one NOI by both ends of a published cap rate band, then subtracts the PIP from both results.",
      body: `Net operating income (\`/glossary/noi\`) is the starting number. Type it directly if you know it. If you do not, leave NOI at zero and enter total revenue and an NOI margin, and the tool multiplies them. Use NOI after a management fee and an FF&E reserve (\`/glossary/ffe-reserve\`), because that is the NOI a buyer underwrites.\n\nThe tool then looks up the cap rate band (\`/glossary/cap-rate\`) for your segment and market in the Matthews Hotel Index for ${MHI_LABEL}.[1] NOI divided by the high end of the band is the low value. NOI divided by the low end is the high value. The index describes its ranges as reflecting stabilized, PIP-current product, so a hotel with brand-required work outstanding is not that product yet. The tool subtracts the PIP (\`/glossary/pip\`) you enter from both ends, then divides by keys for the per-key range (\`/glossary/per-key\`).\n\nNothing else goes in. The tool does not ask for your email and does not store what you type. The arithmetic runs in your browser.`,
    },
    {
      h2: "What this estimate ignores",
      lead: "The hotel value estimator ignores brand, physical condition, ground leases, new supply in the market, deferred capital work and management encumbrance, and each one moves real pricing.",
      body: "Brand. Two select-service hotels with the same NOI do not trade at the same yield if one flag has a stronger reservation system or a longer franchise term remaining. The band covers a segment, not a flag. See `/hotel-valuation/branded-select-service-hotel-value`.\n\nCondition and deferred capital work. The PIP field captures work the brand has required. It does not capture a roof, a chiller or an elevator that the brand has not written up but a buyer's engineer will. Buyers price that work too.\n\nGround lease. A hotel on leased land is worth less than the same hotel on fee land, and the rent resets and remaining term matter more than the current payment. The estimator assumes fee simple. See `/glossary/ground-lease`.\n\nMarket supply. A band for a metro says nothing about the three hotels under construction at your exit. New rooms in the comp set lower the NOI a buyer will underwrite.\n\nManagement encumbrance. A hotel that must be sold subject to a long-term management contract has a smaller buyer pool than one delivered unencumbered, and the price reflects that.\n\nThe estimator also does not value excess land, and it does not check whether the NOI you typed is the NOI a buyer would accept. `/hotel-valuation/how-to-value-a-hotel` covers how buyers rebuild NOI.",
    },
    {
      h2: "Where the cap rate bands come from",
      lead: `The cap rate bands are the Matthews Hotel Index for ${MHI_LABEL}, a first-party dataset covering ${MARKET_COUNT} markets, published ${MHI_PUBLISHED}.[1]`,
      body: `The index states its own method. Its cap rate ranges reconcile the CBRE H2 2025 U.S. Cap Rate Survey with HVS U.S. Market Pulse commentary and Matthews' internal underwriting on active mandates, and they reflect stabilized, PIP-current product.[1] That makes each band a reconciled range, not a record of closed-sale cap rates and not a forecast. The full table and the methodology note are at \`${MHI_PATH}\`.\n\nThe index covers ${MARKET_COUNT} markets and publishes no national figure. When you leave the market on "All ${MARKET_COUNT} markets", the tool uses the lowest low and the highest high among the markets that publish a band for your segment. That is a range of ranges. It is wider than any one market's band, which is the honest result when the market is unknown.\n\nNot every market publishes every segment.${gapMarket ? ` ${gapMarket.label}, for example, has no ${SEGMENTS[0].label.toLowerCase()} band in ${MHI_LABEL}.` : ""} When you pick a market that has no band for your segment, the tool falls back to the all-markets band and says so next to the result. If your hotel is outside the ${MARKET_COUNT} markets, use the all-markets band and treat the result with more caution. How segment and market move cap rates is covered on \`/hotel-valuation/hotel-cap-rates\`.`,
    },
    {
      h2: "What is the real answer to what my hotel is worth?",
      lead: "A broker opinion of value is the real answer, because it prices your hotel against named comparable sales instead of a segment band.",
      body: "A broker opinion of value, or BOV (`/glossary/bov`), rebuilds your NOI the way a buyer will, picks a cap rate from closed sales of comparable hotels, prices the PIP and the franchise position, and states a value range with the evidence behind it. What goes into one, and how it differs from an appraisal, is on `/hotel-valuation/broker-opinion-of-value`.\n\nUse this estimator to decide whether the conversation is worth having, or to sanity-check a number someone gave you. Do not use it to set an asking price, size a loan or settle a partnership dispute. If the range matters to a decision, request a BOV.",
    },
  ],
  table: {
    caption: `Cap rate bands the estimator uses, by market and segment: Matthews Hotel Index, ${MHI_LABEL}`,
    columns: ["Market", ...SEGMENTS.map((s) => s.label)],
    rows: tableRows,
  },
  originalDataPoint: {
    source: "mhi",
    ref: MHI_PATH,
    sentence: `The Matthews Hotel Index for ${MHI_LABEL}, published ${MHI_PUBLISHED}, puts cap rates across its ${MARKET_COUNT} markets at ${bandText(envelope["select-service"])} for select-service, ${bandText(envelope["full-service"])} for full-service and ${bandText(envelope["resort-lifestyle"])} for resort and lifestyle hotels.[1] Those bands, and each market's own, are the only cap rates this estimator uses.`,
  },
  workedExample: {
    label:
      "Pre-computed worked example (server-rendered): hypothetical 78-key select-service hotel",
    body: `Hypothetical hotel, using the estimator's own default inputs so the example and the live tool agree. The hotel, its NOI and its PIP are invented. The cap rate band is not: it is the ${MHI_LABEL} Matthews Hotel Index.[1]\n\nInputs: 78 keys. NOI ${usd(DEFAULTS.noi)}. Segment select-service. Market left on all ${MARKET_COUNT} markets. PIP still to fund ${usd(DEFAULTS.pip)}.\n\nBand. Select-service across all ${MARKET_COUNT} markets: ${bandText(band)}.\n\nLow end. ${usd(DEFAULTS.noi)} / ${(band.high / 100).toFixed(4)} = ${usd(ex.grossLow)}. Less the ${usd(DEFAULTS.pip)} PIP = ${usd(ex.valueLow)}, or ${usd(ex.perKeyLow)} per key.\n\nHigh end. ${usd(DEFAULTS.noi)} / ${(band.low / 100).toFixed(4)} = ${usd(ex.grossHigh)}. Less the ${usd(DEFAULTS.pip)} PIP = ${usd(ex.valueHigh)}, or ${usd(ex.perKeyHigh)} per key.\n\nScreening range: ${usd(ex.valueLow)} to ${usd(ex.valueHigh)}. The two ends are ${usd((ex.valueHigh as number) - (ex.valueLow as number))} apart on the same hotel, which is why this is a screening range and a broker opinion of value is the next step.\n\nThe revenue path gives the same NOI: ${usd(DEFAULTS.revenue)} of total revenue at a hypothetical ${DEFAULTS.noiMarginPct} percent NOI margin is ${usd(DEFAULTS.revenue * (DEFAULTS.noiMarginPct / 100))}.`,
  },
  faq: [
    {
      q: "How do I estimate what my hotel is worth?",
      a: "Divide NOI by a cap rate band for your segment and market, then subtract any PIP still to fund. That gives a screening range. A broker opinion of value built from comparable sales narrows it.",
    },
    {
      q: "Why does the estimator give a range and not one number?",
      a: `Because the Matthews Hotel Index publishes cap rate bands, not single rates, and ${MHI_LABEL} select-service spans ${bandText(band)} across its markets.[1] One number would claim precision the data does not have.`,
    },
    {
      q: "What cap rate does the estimator use?",
      a: `The ${MHI_LABEL} Matthews Hotel Index band for your segment and market.[1] If that market publishes no band for your segment, it falls back to the band across all ${MARKET_COUNT} markets and tells you.`,
    },
    {
      q: "My hotel is not in one of the 14 markets. Can I still use it?",
      a: `Yes. Leave the market on all ${MARKET_COUNT} markets. The index has no national figure, so that band is the lowest low to the highest high among its markets, and a hotel elsewhere can fall outside it.`,
    },
    {
      q: "Why is the PIP subtracted from the value?",
      a: "The index bands describe stabilized, PIP-current hotels.[1] A buyer who inherits brand-required work prices it into the bid. A buyer may price it above or below cost, so treat the subtraction as a first pass.",
    },
    {
      q: "What NOI margin should I enter?",
      a: "Your own, from a trailing twelve-month statement, after a management fee and an FF&E reserve. The 30 percent default is a hypothetical placeholder, not a benchmark. If you know NOI, type it and skip the margin.",
    },
    {
      q: "Is this a hotel appraisal or a broker opinion of value?",
      a: "Neither. It is arithmetic on a published band. It ignores brand, condition, ground leases, supply, deferred capital work and management contracts. A broker opinion of value prices those against named comparable sales.",
    },
    {
      q: "Do I have to give my email to see the result?",
      a: "No. There is no sign-up, the result shows as you type, and the numbers stay in your browser.",
    },
  ],
  sources: [
    {
      n: 1,
      label: `Matthews Hotel Index, ${MHI_LABEL}: cap rate bands by market and segment, and methodology (published ${mhi.publishedAt})`,
      url: MHI_PATH,
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18",
    },
  ],
  related: {
    hub: "/hotel-valuation",
    siblings: [
      "/hotel-valuation/broker-opinion-of-value",
      "/hotel-valuation/how-to-value-a-hotel",
      "/hotel-valuation/hotel-cap-rates",
      "/hotel-valuation/pip-and-hotel-value",
      "/hotel-valuation/revpar-multiples-and-per-key",
    ],
    glossary: [
      "/glossary/noi",
      "/glossary/cap-rate",
      "/glossary/per-key",
      "/glossary/pip",
      "/glossary/bov",
    ],
    data: [MHI_PATH, "/tools", "/tools/cap-rate-calculator"],
  },
  cta: { label: "Request a confidential broker opinion of value", href: "/contact" },
  brandSentence:
    "Matthews Hotel Markets produces broker opinions of value at no cost, built from the Matthews Hotel Index and named comparable sales.",
  tool: {
    inputs: [
      {
        key: "keys",
        label: "Keys (rooms)",
        type: "integer",
        default: DEFAULTS.keys,
        min: 1,
      },
      {
        key: "noi",
        label: "Annual NOI",
        type: "currency",
        default: DEFAULTS.noi,
        min: 0,
        help: "Trailing twelve months, after a management fee and an FF&E reserve. Enter 0 to estimate it from revenue and margin.",
      },
      {
        key: "revenue",
        label: "Total revenue (used only if NOI is 0)",
        type: "currency",
        default: DEFAULTS.revenue,
        min: 0,
        help: "Trailing twelve months, all departments.",
      },
      {
        key: "noiMarginPct",
        label: "NOI margin (%) (used only if NOI is 0)",
        type: "percent",
        default: DEFAULTS.noiMarginPct,
        min: 0,
        max: 100,
        step: 0.5,
        help: "Your own margin. The default is hypothetical, not a benchmark.",
      },
      {
        key: "pip",
        label: "Planned PIP cost",
        type: "currency",
        default: DEFAULTS.pip,
        min: 0,
        help: "Brand-required work still to fund. Enter 0 if the PIP is complete.",
      },
    ],
    outputs: [
      { key: "band", label: "Cap rate band used", format: "text" },
      { key: "noiUsed", label: "NOI used", format: "currency" },
      { key: "range", label: "Screening value range, after PIP", format: "text" },
      { key: "perKey", label: "Per-key range, after PIP", format: "text" },
    ],
    formula:
      "noiUsed    = noi, or revenue x noiMargin / 100 when noi is 0\nband       = Matthews Hotel Index band for your segment and market\n             (all-markets band when the market has none for the segment)\n\nvalueLow   = noiUsed / (bandHigh / 100) - pip\nvalueHigh  = noiUsed / (bandLow / 100) - pip\n\nperKeyLow  = valueLow / keys\nperKeyHigh = valueHigh / keys",
    disclaimer: `A screening range, not a valuation, an appraisal or a broker opinion of value. Cap rate bands are the Matthews Hotel Index, ${MHI_LABEL}. The hotel inputs shown at the start are hypothetical. The estimate ignores brand, condition, ground leases, market supply, deferred capital work and management encumbrance.`,
  },
};

/** Labels for the two select inputs, which ToolInput (numbers only) cannot hold. */
export const SELECT_INPUT_LABELS = ["Segment", "Market (optional)"];

export default page;
