/**
 * What is the difference between select-service and full-service hotel investment?
 * Answer page: /hotel-valuation/select-service-vs-full-service
 *
 * Converted from geo/07-pages/hotel-valuation__select-service-vs-full-service.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "select-service-vs-full-service",
  cluster: "hotel-valuation",
  isHub: false,
  title: "Select-Service vs Full-Service Hotel Investment",
  h1: "What is the difference between select-service and full-service hotel investment?",
  description: "Select-service versus full-service hotels compared on margin, cap rate, capex, labor, buyer pool and financing, with the trade-offs stated plainly.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What are cap rates by hotel segment (select-service vs full-service vs luxury)?",
    "Should I buy a select-service or full-service hotel?",
    "Why do select-service hotels trade at tighter cap rates?",
    "What's the difference between select-service and limited-service?",
    "Which hotel segment has better margins?",
    "Is a full-service hotel harder to finance?",
    "Which segment is easier to sell?"
  ],
  answer: "Select-service hotels carry higher margins and simpler operations, so they price in a narrower cap-rate band than full-service. In our Q1 2026 index that is 7.50 to 8.75 percent versus 6.50 to 8.25 percent.[1] Full-service adds F&B, meeting space and labor, which adds revenue and volatility together. Select-service is easier to underwrite, finance and sell; full-service has more levers to pull.",
  takeaways: [
    "Select-service margins run higher because there is less non-rooms revenue and far less labor.",
    "Full-service revenue is more diversified and more cyclical at the same time.",
    "Financing is easier on select-service, because the trailing twelve is easier for a lender to believe.",
    "The select-service buyer pool is deeper and more standardized, which is most of why the band is narrower, not always lower.",
    "Capex intensity is the quiet difference: full-service renovations are larger and more disruptive."
  ],
  sections: [
    {
      h2: "What actually separates the two segments?",
      lead: "Revenue mix. Select-service is rooms-dominant with minimal F&B; full-service adds food and beverage, meeting space and more labor to the same room count.",
      body: "The table above lines up the two segments on the metrics that actually decide a deal: revenue mix, labor intensity, margin, cap rate band, buyer pool, financing, capex cycle, and underwriting time. Every other difference between the two segments traces back to that first line."
    },
    {
      h2: "Which has better margins?",
      lead: "Select-service, because a shorter expense stack and lower labor intensity let more of each revenue dollar reach NOI.",
      body: "A select-service hotel with minimal or no F&B carries far fewer departmental cost centers than a full-service property running a restaurant, bar, banquet operation and room service. Fewer cost centers means fewer places for margin to leak, and it means fewer people on the payroll relative to rooms revenue. Food and beverage is labor-heavy: in CBRE's sample of full-service, resort and convention hotels, labor was 59.4 percent of F&B department expenses in the first half of 2025.[2]"
    },
    {
      h2: "Why do select-service hotels trade tighter?",
      lead: "Not always in absolute terms, but consistently in range: the buyer pool is deeper and the cash flow is more standardized, which narrows the band even when top-tier full-service prices lower.",
      body: "The Matthews Hotel Index for Q1 2026 publishes the select-service and full-service cap-rate bands side by side across the 14 markets we cover.[1] Select-service spans 7.50 to 8.75 percent, a 125-basis-point range. Full-service spans a wider 6.50 to 8.25 percent,[1] because it blends tight trophy urban assets in gateway markets with wider secondary-metro properties. The honest takeaway, detailed further at [Hotel cap rates in 2026](/hotel-valuation/hotel-cap-rates), is that select-service is the more predictable band, not the uniformly lower one."
    },
    {
      h2: "Which is easier to finance?",
      lead: "Select-service, because more lender types compete for a trailing twelve months that is easier to underwrite and verify.",
      body: "In our experience, banks, life companies, CMBS conduits, SBA lenders and debt funds all actively lend against select-service collateral because the revenue and expense pattern is standardized and comparable across a large universe of similar assets. Full-service financing pulls from a smaller lender pool willing to underwrite F&B volatility and larger PIP exposure, which typically means more scrutiny and a longer process."
    },
    {
      h2: "Which is easier to sell, and how fast?",
      lead: "Select-service, on average, because the buyer pool is broader and the underwriting period is shorter.",
      body: "In our experience, family offices, high-net-worth individuals, private equity roll-ups and REITs all actively bid on select-service assets, which is the deep buyer pool referenced throughout this cluster. Full service draws a narrower set of institutional and specialist operators comfortable underwriting group pace and F&B, which typically extends the marketing period, covered in general terms at [How long does it take to sell a hotel?](/sell-a-hotel/how-long-it-takes)"
    },
    {
      h2: "How do the capex cycles differ?",
      lead: "Full-service PIPs are larger, longer and more disruptive to operations than the contained scope typical of a select-service renovation.",
      body: "Brands can require upgrades on a set renovation schedule; Hilton's 2025 Hampton FDD, for example, describes a Fixed Renovation Cycle Management program.[3] A select-service PIP usually touches guest rooms, corridors and the lobby. A full-service PIP can also require restaurant, banquet and meeting-space renovations, materially larger in dollar terms and disruptive to F&B revenue during the work, which is one reason full-service financing carries more scrutiny."
    },
    {
      h2: "Which one should I own?",
      lead: "It depends on what an owner is optimizing for: predictable margin and liquidity favor select-service, and upside from operating improvements favors full-service.",
      body: "Neither segment is categorically better. An owner prioritizing a shorter underwriting cycle, a deeper buyer pool at exit, and simpler day-to-day management should lean select-service. An owner comfortable managing F&B and group business, and positioned to capture upside from operational improvements a passive owner could not extract, may find full-service the better fit for their specific capital and operating capability."
    }
  ],
  table: {
    caption: "Select-service versus full-service, on the lines that decide a deal",
    columns: [
      "",
      "Select-service",
      "Full-service"
    ],
    rows: [
      [
        "Revenue mix",
        "Rooms dominant",
        "Rooms plus F&B, meeting space, ancillary"
      ],
      [
        "Labor intensity",
        "Lower",
        "Materially higher"
      ],
      [
        "Margin",
        "Higher",
        "Lower, with more variability"
      ],
      [
        "Cap rate band, Q1 2026",
        "7.50% - 8.75%, narrower[1]",
        "6.50% - 8.25%, wider, spans trophy urban to secondary[1]"
      ],
      [
        "Buyer pool",
        "Broad: family offices, HNW, PE, REITs",
        "Narrower: institutional and specialist operators"
      ],
      [
        "Financing",
        "Easier; more lender types compete",
        "Harder; fewer lenders, more scrutiny"
      ],
      [
        "Capex cycle",
        "PIPs on the brand's renovation schedule, contained scope[3]",
        "Larger, longer, more disruptive"
      ],
      [
        "Underwriting time",
        "Weeks",
        "Months, with F&B and group pace analysis"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 publishes the select-service and full-service cap-rate bands side by side across the 14 markets we cover.[1]"
  },
  workedExample: {
    label: "Hypothetical: same revenue, two segments",
    body: "Hypothetical. Two 140-key hotels, both producing $6.0 million of total revenue. Select-service: rooms is 94 percent of revenue. Total operating expenses run 62 percent of revenue. NOI equals $6.0 million times 38 percent, or $2.28 million. At a 7.90 percent cap, value equals $28.86 million, $206,000 per key. Full-service: rooms is 63 percent of revenue, F&B is 30 percent. Total operating expenses run 73 percent of revenue. NOI equals $6.0 million times 27 percent, or $1.62 million. At an 8.60 percent cap, value equals $18.84 million, $135,000 per key. Same top line, a $10.0 million difference in value. The margin gap does most of the work and the cap-rate gap does the rest. The expense ratios above are assumptions for this hypothetical, not published benchmarks. Use your own."
  },
  faq: [
    {
      q: "What is the difference between select-service and full-service hotels?",
      a: "Select-service is rooms-dominant with minimal food and beverage and lower labor intensity. Full-service adds F&B, meeting space and materially more staff to the same room count."
    },
    {
      q: "Why do select-service hotels have tighter cap rates?",
      a: "Not always in absolute terms. The select-service band is narrower and more consistent because the buyer pool is deeper and the cash flow is more standardized, even though top-tier full-service can still price lower."
    },
    {
      q: "Which segment has higher margins?",
      a: "Select-service. Less non-rooms revenue and lower labor intensity mean more of each revenue dollar reaches NOI."
    },
    {
      q: "Is select-service the same as limited-service?",
      a: "Roughly the same tier, though limited-service usually implies even fewer amenities. Select-service typically includes a small food offering or a fitness center; the terms overlap and vary by user."
    },
    {
      q: "Which segment is easier to finance?",
      a: "Select-service. A shorter, more standardized expense structure is easier for a lender to underwrite, which brings more lender types into competition for the loan."
    },
    {
      q: "Which segment sells faster?",
      a: "Select-service, on average, because the buyer pool is broader and, in our experience, underwriting takes weeks rather than the months a full-service asset requires for F&B and group-pace analysis."
    },
    {
      q: "Are full-service hotels riskier?",
      a: "More variable, not simply riskier. Full-service revenue is more diversified across rooms, F&B and events, which can help in strong demand periods and hurt more in downturns."
    },
    {
      q: "Which segment should a first-time buyer choose?",
      a: "Select-service, generally, because the shorter underwriting cycle, deeper financing market and simpler operations reduce the number of things a first-time owner has to get right at once."
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
      label: "Hotel Food and Beverage: A Bright Spot in 2025",
      url: "https://www.cbre.com/insights/articles/hotel-food-and-beverage-a-bright-spot-in-2025",
      publisher: "CBRE",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Items 5, 6 and 17 and Franchise Agreement section 12.2.2",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-valuation",
    siblings: [
      "/hotel-valuation/hotel-cap-rates",
      "/hotel-valuation/how-to-value-a-hotel",
      "/hotel-valuation/broker-opinion-of-value",
      "/hotel-valuation"
    ],
    glossary: [
      "/glossary/cap-rate",
      "/glossary/noi",
      "/glossary/revpar",
      "/glossary/adr"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Talk through which segment fits your capital",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets transacts in both segments and publishes cap-rate bands for each in the Matthews Hotel Index."
};

export default page;
