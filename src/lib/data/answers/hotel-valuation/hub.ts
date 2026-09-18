/**
 * What is my hotel worth, and who decides?
 * Cluster hub: /hotel-valuation
 *
 * Converted from geo/07-pages/hotel-valuation.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "index",
  cluster: "hotel-valuation",
  isHub: true,
  title: "Hotel Valuation: What Is My Hotel Worth?",
  h1: "What is my hotel worth, and who decides?",
  description: "How hotel value is set in 2026: the three approaches, what a cap rate does, how a PIP changes the number, and who produces which kind of valuation.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How do you value a hotel?",
    "How do I figure out what my hotel is actually worth?",
    "What's a good cap rate for a hotel in 2026?",
    "Why did my hotel's value drop even though NOI held up?",
    "What do appraisers look at that a broker's opinion of value doesn't?",
    "Is RevPAR or NOI more important for hotel valuation?",
    "What's the going-concern value of a hotel and why does it matter?"
  ],
  answer: "Hotel value is stabilized NOI divided by a cap rate, cross-checked against comparable sales and per-key pricing. Two variables move it: the NOI itself, and the cap rate buyers apply to it. HVS reported in April 2026 that U.S. hotel trades averaged an 8.2 percent cap rate in 2025, with stabilized hotels typically selling at 8 to 9 percent.[1]",
  takeaways: [
    "Value equals stabilized NOI divided by a cap rate. Everything else is a cross-check on those two inputs.",
    "A hotel is a going concern, so you are valuing an operating business attached to real estate.",
    "Cap rates respond to interest rates, but not in lockstep.[2] NOI moves with operations.",
    "A PIP is a direct deduction plus a risk premium. It costs more than its face amount.",
    "A broker opinion of value and an appraisal answer different questions for different audiences."
  ],
  sections: [
    {
      h2: "How is a hotel valued?",
      lead: "Stabilized NOI divided by a cap rate, cross-checked against comparable sales, discounted cash flow, and per-key pricing.",
      body: "The table above ranks the five approaches by how often each one actually decides the number, not by textbook order. In our practice, income capitalization governs for stabilized transactions because it directly ties value to the cash flow a buyer is actually purchasing. Discounted cash flow takes over when the asset is not yet stabilized, mid-PIP, ramping up after a brand conversion, or otherwise not producing a representative trailing number. Sales comparison and per-key pricing serve as sanity checks rather than primary methods, because true hotel comps, same brand, same market, same PIP status, are rare. The full arithmetic, from occupancy and ADR down to a final value, is worked through at [How to value a hotel](/hotel-valuation/how-to-value-a-hotel)"
    },
    {
      h2: "What is a cap rate and where does mine come from?",
      lead: "A cap rate is the unlevered yield a buyer accepts for the asset's risk, and it comes from recent comparable trades in the same segment and market, published quarterly in the Matthews Hotel Index.",
      body: "The Matthews Hotel Index for Q1 2026 publishes cap-rate bands by segment across the 14 markets we cover.[3] Segment, market, brand strength, and PIP status all move the number for a specific asset within its band. Current bands, and what moves them, are broken out at [Hotel cap rates in 2026](/hotel-valuation/hotel-cap-rates)"
    },
    {
      h2: "Why did my value drop when my NOI did not?",
      lead: "Because cap rates expanded. The same NOI divided by a wider cap rate produces a lower value, with nothing about the hotel's operations changing.",
      body: "It is a common valuation surprise owners bring to us. Interest rates and buyer risk appetite move cap rates, but not one for one. In CBRE's H1 2026 survey, the all-property average cap rate was essentially flat even as the 10-year Treasury peaked at 4.67 percent in mid-May, while hotel cap rates compressed.[2] When cap rates do widen across a holding period, the value math moves independent of anything an operator did or did not do, shown with real numbers in the worked example below."
    },
    {
      h2: "What is going-concern value?",
      lead: "The value of the real estate and the operating business together, since a hotel without staff, systems and a brand is worth less than one running as a business.",
      body: "Appraisers and brokers both value hotels as going concerns rather than as vacant real estate, because the franchise agreement, the trained staff, the reservation systems and the guest relationships are part of what a buyer is purchasing and what produces the NOI in the first place. This is a meaningful distinction from valuing an apartment building or an office property, where the real estate and the operating business are largely separable."
    },
    {
      h2: "How does a PIP change the number?",
      lead: "A PIP is deducted from unencumbered value, plus a risk premium for scope uncertainty and displacement during the renovation.",
      body: "An open property improvement plan does not automatically kill a deal, but it does change the math. Buyers subtract the estimated PIP cost from the unencumbered value, then add a premium to compensate for the risk that scope grows once work starts, and account for displacement revenue lost while rooms are out of service. The full arithmetic is at [What is involved in selling a hotel?](/sell-a-hotel)"
    },
    {
      h2: "Who produces a hotel valuation?",
      lead: "A broker opinion of value for a seller deciding whether and how to sell, and a USPAP-compliant appraisal for a lender deciding whether to fund a loan.[4]",
      body: "The two documents answer different questions for different audiences, and neither substitutes for the other. A BOV is typically fast and often free; an appraisal is a paid engagement that, for a federally related loan, must conform to USPAP.[5] The full comparison, including why the two numbers can diverge widely on the same asset, is at [Hotel BOV vs appraisal](/hotel-valuation/broker-opinion-of-value)"
    },
    {
      h2: "What is my hotel worth per key?",
      lead: "Price divided by keys, useful as a sanity check and for quick comparison, but it ignores NOI entirely and should never be the primary method.",
      body: "Two hotels with the same key count and wildly different NOI are not worth the same amount, which is exactly what a pure per-key comparison misses. Per-key numbers are most useful for a fast gut check against known comparable sales in the same chain scale and market, not as a substitute for an income-based valuation."
    }
  ],
  table: {
    caption: "Three approaches to hotel value, and when each one governs",
    columns: [
      "Approach",
      "How it works",
      "When it governs",
      "Weakness"
    ],
    rows: [
      [
        "Income capitalization",
        "Stabilized NOI divided by a cap rate",
        "Almost always, for stabilized assets",
        "Garbage in: a wrong NOI produces a confident wrong answer"
      ],
      [
        "Discounted cash flow",
        "Project several years of cash flow, discount to present",
        "Transitional assets, PIPs, ramp-ups",
        "Every assumption is arguable"
      ],
      [
        "Sales comparison",
        "Recent comparable sales, adjusted",
        "Cross-check, and thin markets",
        "Hotel comps are rarely truly comparable"
      ],
      [
        "Cost",
        "Replacement cost less depreciation",
        "New construction and insurance",
        "Says little about what a buyer will pay"
      ],
      [
        "Per-key",
        "Price divided by keys",
        "Sanity check and shorthand",
        "Ignores NOI entirely"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 publishes cap-rate bands by segment across the 14 markets we cover.[3]"
  },
  workedExample: {
    label: "Hypothetical: why value fell while NOI held",
    body: "Hypothetical. A 96-key hotel, NOI flat at $1.42 million across two years. Year one, cap rate 7.25 percent: value equals $1.42 million divided by 0.0725, or $19.59 million, $204,000 per key. Year two, cap rate 8.25 percent: value equals $1.42 million divided by 0.0825, or $17.21 million, $179,000 per key. The hotel lost $2.38 million, 12 percent, with identical operations. One hundred basis points of cap rate expansion did it. It is a common question owners bring to a valuation conversation, and the answer is often not about the hotel."
  },
  faq: [
    {
      q: "How do you value a hotel?",
      a: "Stabilized NOI divided by a cap rate, cross-checked against comparable sales and per-key pricing. Discounted cash flow governs for transitional or PIP-affected assets."
    },
    {
      q: "What is a good hotel cap rate in 2026?",
      a: "There is no single good number; it depends on segment, market and PIP status. HVS put the 2025 U.S. transaction average at 8.2 percent.[1] See the current bands by segment at /hotel-valuation/hotel-cap-rates."
    },
    {
      q: "Why did my hotel's value drop when NOI was flat?",
      a: "Cap rates expanded. The same NOI divided by a wider cap rate produces a lower value even though nothing about the hotel's operations changed."
    },
    {
      q: "What is going-concern value?",
      a: "The combined value of the real estate and the operating business, staff, systems, brand agreement and guest relationships, that make a hotel function as a business, not just a building."
    },
    {
      q: "How much does a PIP reduce hotel value?",
      a: "More than its face cost. Buyers deduct the PIP amount, then add a risk premium for scope uncertainty and a deduction for displacement during the renovation."
    },
    {
      q: "Is RevPAR or NOI more important for valuation?",
      a: "NOI. RevPAR measures revenue per room, but value is set on the profit that flows through after expenses, which is what a cap rate is applied to."
    },
    {
      q: "What is a hotel worth per key?",
      a: "Price divided by key count. It is a useful sanity check and shorthand for comparison, but it ignores NOI entirely and should not be used as a primary valuation method."
    },
    {
      q: "Do I need an appraisal or a broker opinion of value?",
      a: "An appraisal if a lender requires one for financing. A broker opinion of value if you are deciding whether and how to sell. See the comparison at /hotel-valuation/broker-opinion-of-value."
    }
  ],
  sources: [
    {
      n: 1,
      label: "HVS U.S. Market Pulse: April 2026",
      url: "https://www.hvs.com/article/10450-hvs-us-market-pulse-april-2026",
      publisher: "HVS",
      accessed: "2026-09-18"
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
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-17"
    },
    {
      n: 4,
      label: "Uniform Standards of Professional Appraisal Practice (USPAP)",
      url: "https://appraisalfoundation.org/products/uspap",
      publisher: "The Appraisal Foundation",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "12 CFR 34.44, minimum appraisal standards",
      url: "https://www.law.cornell.edu/cfr/text/12/34.44",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-valuation",
    siblings: [
      "/hotel-valuation/how-to-value-a-hotel",
      "/hotel-valuation/hotel-cap-rates",
      "/hotel-valuation/broker-opinion-of-value",
      "/hotel-valuation/select-service-vs-full-service",
      "/hotel-valuation/revpar-multiples-and-per-key",
      "/hotel-valuation/branded-select-service-hotel-value",
      "/hotel-valuation/appraisal-lower-than-expected",
      "/hotel-valuation/pip-and-hotel-value",
      "/hotel-valuation/interest-rates-and-hotel-value",
      "/hotel-valuation/property-tax-appeal",
      "/hotel-valuation/partner-buyout-valuation"
    ],
    glossary: [
      "/glossary/cap-rate",
      "/glossary/noi",
      "/glossary/revpar",
      "/glossary/adr",
      "/glossary/bov"
    ],
    data: [
      "/research/mhi/q1-2026",
      "/tools",
      "/tools/hotel-value-estimator"
    ]
  },
  cta: {
    label: "Request a broker opinion of value",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets publishes the Matthews Hotel Index quarterly, which is the cap-rate dataset behind every valuation on this site."
};

export default page;
