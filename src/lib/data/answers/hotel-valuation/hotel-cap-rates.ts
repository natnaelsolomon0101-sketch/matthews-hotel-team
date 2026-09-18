/**
 * What is a good cap rate for a hotel in 2026?
 * Answer page: /hotel-valuation/hotel-cap-rates
 *
 * Converted from geo/07-pages/hotel-valuation__hotel-cap-rates.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "hotel-cap-rates",
  cluster: "hotel-valuation",
  isHub: false,
  title: "Hotel Cap Rates in 2026: What Is Good?",
  h1: "What is a good cap rate for a hotel in 2026?",
  description: "Hotel cap rates by segment and market in 2026, what drives compression and expansion, and the spread between Sun Belt and gateway assets.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What's a good cap rate for a hotel in 2026?",
    "What are cap rates by hotel segment (select-service vs full-service vs luxury)?",
    "How do rising interest rates affect hotel cap rates?",
    "What is cap rate compression and why does it matter for hotel sellers?",
    "What's the typical cap rate spread between Sun Belt and gateway-market hotels?",
    "What is Matthews Hotel Markets' current view on hotel cap rates?",
    "What cap rate should I use to value my hotel?"
  ],
  answer: "There is no single good hotel cap rate. It depends on segment, market, PIP status and buyer pool. The Matthews Hotel Index for Q1 2026 puts select-service across its 14 covered markets at 7.50 to 8.75 percent, full-service at 6.50 to 8.25 percent, and resort and lifestyle at 6.00 to 7.75 percent.[1] Use the band that matches your asset, then adjust.",
  takeaways: [
    "A cap rate is an output of a buyer's risk view, not an input you choose.",
    "Select-service prices in a narrower, more consistent band because the cash flow is more legible; top-tier full-service and resort assets can still price tighter in gateway and leisure markets.",
    "Cap rates respond to the 10-year Treasury, but not one for one.[2]",
    "Compression raises prices and expansion lowers them. Sellers care about the direction more than the level.",
    "Sun Belt secondary markets and gateway markets price differently in our index, and the spread has not been stable.[1]"
  ],
  sections: [
    {
      h2: "What cap rate applies to my hotel?",
      lead: "The band for your segment and market in the current Matthews Hotel Index, adjusted up or down for brand strength, PIP status and submarket supply.",
      body: "Start with the segment band in the table above, then move within it based on what makes your specific asset different from the median property in that band: a stronger brand and a clean franchise term push toward the tight end, an open PIP or a single-demand-driver local economy push toward the wide end. A broker opinion of value applies this adjustment explicitly, comp by comp, rather than picking a number from the middle of the range. For a public cross-check, HVS reported in April 2026 that U.S. hotel trades averaged an 8.2 percent cap rate in 2025, with stabilized hotels typically selling at 8 to 9 percent.[3]"
    },
    {
      h2: "How do cap rates differ by segment?",
      lead: "Select-service trades in a narrower band across the 14 markets we track; resort and lifestyle assets in supply-constrained leisure markets price the tightest of all three segments.",
      body: "The Matthews Hotel Index data is specific here rather than following the common shorthand that select-service always prices tighter than full-service. Across our 14 markets, select-service spans 7.50 to 8.75 percent, a 125-basis-point range,[1] reflecting the deep, standardized buyer pool for that product. Full-service spans 6.50 to 8.25 percent, a wider 175-basis-point range,[1] because it blends tight trophy urban assets in gateway markets like Miami and Charleston with wider secondary-metro full-service in markets like Atlanta and Denver. Resort and lifestyle assets, concentrated in supply-constrained leisure destinations, price the tightest of the three in aggregate, 6.00 to 7.75 percent.[1] The honest takeaway: select-service is the more predictable band, not always the lowest number."
    },
    {
      h2: "How do interest rates move cap rates?",
      lead: "Cap rates respond to the 10-year Treasury, but the pass-through is partial, not one for one.",
      body: "CBRE's H1 2026 survey is a clean example. The 10-year Treasury peaked at 4.67 percent in mid-May, yet the all-property average cap rate was essentially flat, and hotel cap rates compressed.[2] HVS, writing in April 2026, credited declining interest rates with helping to narrow the gap between buyers and sellers.[3] Risk premiums specific to hospitality, PIP exposure, labor cost trends, brand standard changes, move independently of rates and can offset or amplify the rate effect in either direction."
    },
    {
      h2: "What is cap rate compression?",
      lead: "A decline in the cap rate buyers accept, which raises price for the same NOI; expansion is the reverse and lowers price.",
      body: "Compression and expansion describe direction, not a specific number, and sellers should track the direction of the trend as closely as the current level. The worked example below shows exactly how much fifty basis points of movement, in either direction, is worth in dollars on a representative asset."
    },
    {
      h2: "What is the Sun Belt versus gateway spread?",
      lead: "It is real but not stable: Sun Belt secondary markets can price wider on select-service while gateway and resort submarkets price tighter on trophy full-service and leisure assets.",
      body: "The Matthews Hotel Index shows Miami and Charleston full-service and resort product pricing at the tight end of the range, while select-service in Atlanta and Denver prices at the wide end.[1] That pattern has shifted over recent cycles and should not be assumed to hold indefinitely; check the current quarter's data before pricing off a remembered spread."
    },
    {
      h2: "How does a PIP change my cap rate?",
      lead: "It does not change the cap rate itself so much as it adds a separate deduction and risk premium on top of the capitalized value, covered in full at the valuation hub.",
      body: "A cap rate reflects the market's view of stabilized, PIP-current cash flow. An open PIP is handled as a distinct line item, subtracted from the unencumbered value along with a risk premium and a displacement cost, rather than folded into a higher cap rate. The full mechanics are at [What is my hotel worth, and who decides?](/hotel-valuation) and [What is involved in selling a hotel?](/sell-a-hotel)"
    },
    {
      h2: "Where do these numbers come from?",
      lead: "The Matthews Hotel Index, reconciled quarterly against CBRE and HVS public research and STR press releases, never against subscriber-only STAR or CoStar tables.",
      body: "The methodology reconciles the CBRE H2 2025 U.S. Cap Rate Survey[4] with HVS U.S. Market Pulse commentary for April 2026[3] and Matthews' own underwriting on active mandates, with ADR, RevPAR and occupancy bands drawn from STR headline press releases rather than licensed subscriber tables.[1] The full methodology note is published at [/research/mhi/q1-2026](/research/mhi/q1-2026)"
    }
  ],
  table: {
    caption: "Hotel cap rate bands by segment, Matthews Hotel Index, Q1 2026",
    columns: [
      "Segment",
      "Cap rate band across 14 markets",
      "What tightens it",
      "What widens it"
    ],
    rows: [
      [
        "Select-service, PIP current",
        "7.50% - 8.75%[1]",
        "Brand strength, new supply constraints, clean franchise term",
        "Open PIP, short franchise term, single-demand-driver market"
      ],
      [
        "Full-service",
        "6.50% - 8.25%[1]",
        "Group and convention base, barriers to entry, gateway location",
        "F&B labor exposure, capex intensity, secondary-market location"
      ],
      [
        "Resort and lifestyle",
        "6.00% - 7.75%[1]",
        "Supply constraint, leisure demand durability",
        "Seasonality, concentration risk"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 puts select-service cap rates in a 7.50 to 8.75 percent band across the 14 markets we cover.[1]"
  },
  workedExample: {
    label: "Hypothetical: what 50 basis points is worth",
    body: "Hypothetical. NOI $1.42 million. At 7.75 percent: value equals $1.42 million divided by 0.0775, or $18.32 million. At 8.25 percent: value equals $1.42 million divided by 0.0825, or $17.21 million. At 8.75 percent: value equals $1.42 million divided by 0.0875, or $16.23 million. Fifty basis points is worth about $1.1 million, roughly 6 percent of value, on this asset. Nothing about the hotel changes across those three lines. That is why sellers watch the 10-year Treasury, and why the timing question is a real question rather than a rationalization."
  },
  faq: [
    {
      q: "What is a good hotel cap rate in 2026?",
      a: "There is no single good number. The Matthews Hotel Index for Q1 2026 shows select-service at 7.50 to 8.75 percent, full-service at 6.50 to 8.25 percent, and resort/lifestyle at 6.00 to 7.75 percent, across our 14 covered markets.[1]"
    },
    {
      q: "What cap rate do select-service hotels trade at?",
      a: "7.50 to 8.75 percent across the Matthews Hotel Index's 14 covered markets in Q1 2026,[1] narrower than the full-service range, reflecting more consistent, legible cash flow."
    },
    {
      q: "Do full-service hotels have higher cap rates?",
      a: "Not always. Full-service spans a wider band, 6.50 to 8.25 percent,[1] because it includes both tight trophy urban assets and wider secondary-market properties with heavier F&B exposure."
    },
    {
      q: "How do interest rates affect hotel cap rates?",
      a: "They respond, but not one for one. In CBRE's H1 2026 survey, hotel cap rates compressed even as the 10-year Treasury peaked at 4.67 percent in mid-May.[2]"
    },
    {
      q: "What is cap rate compression?",
      a: "A decline in the cap rate buyers require, which raises price for the same NOI. Expansion is the reverse: a wider cap rate at the same NOI lowers price."
    },
    {
      q: "Is there a Sun Belt cap rate premium?",
      a: "The spread exists but is not stable. Sun Belt secondary select-service can price wider than gateway or resort full-service and lifestyle assets, which is the opposite of a blanket premium."
    },
    {
      q: "How does a PIP affect my cap rate?",
      a: "It does not change the cap rate itself. It adds a separate deduction from capitalized value plus a risk premium, covered at /hotel-valuation and /sell-a-hotel."
    },
    {
      q: "Where can I see Matthews Hotel Markets' cap rate data?",
      a: "At /research/mhi/q1-2026, refreshed quarterly across our 14 covered markets, reconciled against CBRE, HVS and STR public releases.[1]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-17"
    },
    {
      n: 2,
      label: "U.S. Cap Rate Survey H1 2026",
      url: "https://www.cbre.com/insights/reports/us-cap-rate-survey-h1-2026",
      publisher: "CBRE Research",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "HVS U.S. Market Pulse: April 2026",
      url: "https://www.hvs.com/article/10450-hvs-us-market-pulse-april-2026",
      publisher: "HVS",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "U.S. Cap Rate Survey H2 2025",
      url: "https://www.cbre.com/insights/reports/us-cap-rate-survey-h2-2025",
      publisher: "CBRE Research",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-valuation",
    siblings: [
      "/hotel-valuation/how-to-value-a-hotel",
      "/hotel-valuation/select-service-vs-full-service",
      "/hotel-valuation/broker-opinion-of-value",
      "/hotel-valuation"
    ],
    glossary: [
      "/glossary/cap-rate",
      "/glossary/noi",
      "/glossary/revpar"
    ],
    data: [
      "/research/mhi/q1-2026",
      "/tools/hotel-value-estimator"
    ]
  },
  cta: {
    label: "Get the cap rate for your specific asset",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets publishes the Matthews Hotel Index each quarter, with cap-rate bands by segment across 14 markets."
};

export default page;
