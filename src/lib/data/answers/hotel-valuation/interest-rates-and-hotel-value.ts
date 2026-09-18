/**
 * How do rising interest rates change what my hotel is worth?
 * Answer page: /hotel-valuation/interest-rates-and-hotel-value
 *
 * Written 2026-09-18. Worked-example arithmetic recomputed by script.
 * This page deliberately claims no fixed lag or ratio between Treasury yields
 * and hotel cap rates. The public 2026 evidence does not support one.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "interest-rates-and-hotel-value",
  cluster: "hotel-valuation",
  isHub: false,
  title: "How Rising Interest Rates Change Hotel Value",
  h1: "How do rising interest rates change what my hotel is worth?",
  description: "Rates reach hotel value through the buyer's loan and the cap rate. What the 2026 Treasury, CBRE and HVS evidence shows, and what it does not.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How do rising interest rates affect hotel cap rates?",
    "Why did my hotel's value drop even though NOI held up?",
    "What is cap rate compression and why does it matter for hotel sellers?",
    "What's a good cap rate for a hotel in 2026?",
    "How do rising interest rates affect my hotel refinance options?",
    "What is Matthews Hotel Markets' current view on hotel cap rates?"
  ],
  answer: "Higher rates lower what a leveraged buyer can pay, because the same NOI supports a smaller loan. They also put upward pressure on cap rates, but not one for one and not on a fixed schedule. The 10-year Treasury rose from 4.75 percent on August 31, 2026 to 4.94 percent on September 17.[1] In CBRE's H1 2026 survey, hotel cap rates compressed while Treasury yields rose.[2]",
  takeaways: [
    "Rates reach your value through two channels: the size of the loan a buyer can get, and the return buyers require, which is the cap rate.",
    "The loan channel is arithmetic. In the hypothetical below, one point of loan rate cuts supportable loan proceeds by 8.4 percent on the same NOI.",
    "The cap-rate channel is looser. CBRE reported the 10-year peaking at 4.67 percent in mid-May 2026 while the all-property average cap rate was essentially flat and hotel cap rates compressed.[2]",
    "We do not publish a lag or a ratio between Treasury yields and hotel cap rates. The 2026 public evidence does not support one.",
    "The 10-year Treasury rose 19 basis points between August 31 and September 17, 2026.[1][3] That move is too recent to show up in any published cap-rate survey."
  ],
  sections: [
    {
      h2: "How do interest rates reach my hotel's value?",
      lead: "Through the buyer's loan and through the buyer's required return. The first is mechanical. The second is a market judgment.",
      body: "Most hotel buyers borrow. A lender sizes the loan so that NOI covers the debt payments by some margin. When the loan rate rises, the payment on each dollar borrowed rises, so the same NOI supports fewer dollars of loan. If the buyer's equity is fixed, the price it can pay falls by about the amount of loan it lost. That is the first channel, and it starts working the week rates move. The second channel is the cap rate. Buyers compare a hotel's yield with what they can earn on Treasuries and on other property. When the risk-free rate rises, they want more from the hotel too. But hotel cap rates also carry premiums for operating risk, capital needs and the depth of the buyer pool, and those move on their own."
    },
    {
      h2: "Do hotel cap rates move one for one with the 10-year Treasury?",
      lead: "No. The 2026 evidence shows cap rates holding or compressing through a period of higher and volatile Treasury yields.",
      body: "CBRE's U.S. Cap Rate Survey for H1 2026 reports that Treasury yields were volatile and increased substantially during the first half of the year. The 10-year fell below 4 percent in late February, then peaked at 4.67 percent in mid-May.[2] Over the same period the all-property average cap rate was essentially flat, and on average neighborhood retail compressed the most, followed by hotel and industrial.[2] The survey reflects more than 200 CBRE professionals responding in late June, informed by deals that closed in the first six months.[2] HVS, writing in April 2026, said transactions averaged an 8.2 percent cap rate in 2025 and that it expects average cap rates to trend downward in 2026.[4] With the 10-year at 4.94 percent on September 17,[1] that 2025 average sits more than three points above the Treasury. A spread that wide leaves room for buyers to absorb part of a rate move, which may be one reason the pass-through has been partial. The two figures are from different dates, so read the gap as rough."
    },
    {
      h2: "Is there a lag between rates and cap rates?",
      lead: "Hotel pricing takes time to show up in data, but we have found no public primary source that measures a dependable lag, so we do not state one.",
      body: "Some delay is built into how the evidence is made. A hotel sale takes months from pricing to closing, and surveys are published after that. CBRE's H1 2026 survey was completed in late June from deals closed through June.[2] It cannot reflect a Treasury move in September. That is a delay in the data. It is not proof that cap rates will follow by a set amount after a set number of months. The first half of 2026 is a caution: yields rose and hotel cap rates compressed anyway.[2] Anyone who tells you that a 50 basis point rise in the 10-year means a specific cap-rate change by a specific quarter is guessing. What you can observe directly is the debt market, which reprices daily. Current benchmarks are on our [rate sheet](/rates)"
    },
    {
      h2: "What happened to rates in September 2026?",
      lead: "The 10-year Treasury rose 19 basis points in under three weeks, from 4.75 percent on August 31 to 4.94 percent on September 17.",
      body: "Treasury's daily par yield curve shows the 10-year at 4.75 percent on August 31, 2026 and 4.94 percent on September 17, with the 5-year moving from 4.49 to 4.78 percent.[1] The Matthews Hotel Markets September 2026 rate sheet records the same move, along with SOFR at 3.85 percent and Prime at 7.00 percent.[3] The September 17 reading is 27 basis points above the mid-May peak CBRE cited.[2] For an owner, the near-term effect is on loan quotes, since fixed-rate hotel loans are priced as a spread over the matching Treasury. Lenders do not publish those spreads, so the way to learn the all-in rate is to get quotes. See [What are current hotel loan interest rates?](/hotel-financing/hotel-loan-rates)"
    },
    {
      h2: "Why did my value fall when my NOI held up?",
      lead: "Because value is NOI divided by a cap rate, and a wider cap rate lowers value with no change at the hotel.",
      body: "On $1.42 million of NOI, moving the cap rate from 8.25 to 8.50 percent lowers value from $17.21 million to $16.71 million. That is about $510,000, or 2.9 percent, for 25 basis points. The Matthews Hotel Index shows a 125 basis point spread inside the select-service band alone, 7.50 to 8.75 percent in Q1 2026,[5] so where a hotel sits in the band matters more than most single rate moves. The full treatment of compression and expansion, with a 50 basis point example, is at [What is a good cap rate for a hotel in 2026?](/hotel-valuation/hotel-cap-rates)"
    },
    {
      h2: "Should I wait for rates to fall before I sell or refinance?",
      lead: "Only if your loan lets you. Timing a rate move is a bet, and a maturity date is not.",
      body: "HVS wrote in April 2026 that sales activity was picking up and that declining interest rates were helping bridge the gap between buyers and sellers.[4] Since then the 10-year has moved up.[1] Nobody knows the next move. What an owner can control is NOI, the condition of the hotel and the time left on the loan. If your loan matures within 18 months, the rate on the day you must refinance matters more than the rate you hope for. If you have years of term left, waiting costs you little beyond the risk that operations soften. The decision framework is at [Should I refinance my hotel or sell it instead?](/hotel-financing/refinance-or-sell) and for a lender's view of value see [Why did my hotel appraise for less than I expected?](/hotel-valuation/appraisal-lower-than-expected)"
    }
  ],
  table: {
    caption: "Two channels from interest rates to hotel value",
    columns: [
      "Channel",
      "How it works",
      "How fast",
      "2026 public evidence"
    ],
    rows: [
      [
        "Buyer's loan",
        "A higher loan rate means the same NOI supports a smaller loan, so a leveraged buyer can pay less",
        "Immediate. Loan quotes reprice with the index",
        "10-year Treasury 4.75% on August 31, 4.94% on September 17[1]"
      ],
      [
        "Cap rate",
        "Buyers want a higher yield when the risk-free rate rises, offset or amplified by hotel-specific risk",
        "Uneven. No dependable lag is published",
        "H1 2026: 10-year peaked at 4.67% in mid-May, all-property cap rate essentially flat, hotels compressed[2]"
      ],
      [
        "Transaction volume",
        "Lower rates narrow the gap between what buyers bid and sellers accept. Higher rates widen it",
        "Over quarters",
        "HVS, April 2026: declining rates were helping bridge the buy-sell gap[4]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet shows the 10-year Treasury at 4.94 percent on September 17, 2026, up 19 basis points from 4.75 percent on August 31, with SOFR at 3.85 percent and Prime at 7.00 percent.[3]"
  },
  workedExample: {
    label: "Hypothetical: one point of loan rate on $1.42M of NOI",
    body: "Hypothetical. A hotel produces $1,420,000 of NOI. A lender sizes to a 1.40x coverage test on a 25-year amortization. The 1.40x figure and both loan rates are assumptions for illustration. Lenders do not publish their tests or their spreads.\n\nAllowed annual debt service equals $1,420,000 divided by 1.40, or $1,014,286. At a 7.00 percent loan rate the annual payment constant is 8.48 percent, so the loan is $1,014,286 divided by 0.0848, or $11.96 million. At 8.00 percent the constant is 9.26 percent, and the loan is $10.95 million. One point of rate removed $1.01 million of proceeds, 8.4 percent, with no change in NOI.\n\nA buyer with $6.0 million of equity could pay $17.96 million at the lower rate, a 7.91 percent cap rate. At the higher rate it can pay $16.95 million, an 8.38 percent cap rate. The cap rate moved 47 basis points because the loan rate moved 100. That is one buyer's arithmetic, not a market law. A cash buyer, or one who accepts a lower return, would not move as far."
  },
  faq: [
    {
      q: "Do higher interest rates lower hotel values?",
      a: "They lower what leveraged buyers can pay, and they pressure cap rates upward. The size of the effect is not fixed. In H1 2026, hotel cap rates compressed while Treasury yields rose.[2]"
    },
    {
      q: "How much does a 1 percent rate increase reduce my hotel's value?",
      a: "There is no fixed ratio. In this page's hypothetical, one point of loan rate cuts loan proceeds 8.4 percent and moves one buyer's price about 5.6 percent. Your result depends on the buyer pool and the leverage used."
    },
    {
      q: "Do hotel cap rates follow the 10-year Treasury?",
      a: "Loosely. CBRE's H1 2026 survey found the all-property cap rate essentially flat as the 10-year peaked at 4.67 percent in mid-May.[2] Hotel-specific risk premiums move independently."
    },
    {
      q: "How long do cap rates take to react to rates?",
      a: "We have found no public primary source that measures a dependable lag, so we do not state one. Surveys trail the market because deals take months to close and reports follow."
    },
    {
      q: "Where is the 10-year Treasury now?",
      a: "4.94 percent on September 17, 2026, up from 4.75 percent on August 31, per Treasury's daily par yield curve.[1] The current reading is on /rates."
    },
    {
      q: "Should I sell before rates rise more?",
      a: "Nobody can time rates. Decide from your loan maturity, your NOI trend and your capital needs. If a maturity is within 18 months, start now either way. See /hotel-financing/refinance-or-sell."
    },
    {
      q: "What cap rates does the Matthews Hotel Index show?",
      a: "For Q1 2026: select-service 7.50 to 8.75 percent, full-service 6.50 to 8.25 percent, resort and lifestyle 6.00 to 7.75 percent, across 14 markets.[5]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "Daily Treasury Par Yield Curve Rates (readings for August 31 and September 17, 2026)",
      url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve",
      publisher: "U.S. Department of the Treasury",
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
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "HVS U.S. Market Pulse: April 2026",
      url: "https://www.hvs.com/article/10450-hvs-us-market-pulse-april-2026",
      publisher: "HVS",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-valuation",
    siblings: [
      "/hotel-valuation/hotel-cap-rates",
      "/hotel-valuation/appraisal-lower-than-expected",
      "/hotel-valuation/how-to-value-a-hotel",
      "/hotel-valuation/revpar-multiples-and-per-key"
    ],
    glossary: [
      "/glossary/cap-rate",
      "/glossary/dscr",
      "/glossary/noi"
    ],
    data: [
      "/rates",
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "See what today's rates mean for your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets updates its rate sheet monthly and its cap-rate index quarterly, so owners can see both sides of this question in one place."
};

export default page;
