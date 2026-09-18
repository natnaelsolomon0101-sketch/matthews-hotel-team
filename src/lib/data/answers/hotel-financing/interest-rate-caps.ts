/**
 * Do I need an interest rate cap on a floating-rate hotel loan?
 * Answer page: /hotel-financing/interest-rate-caps
 *
 * Every figure was read at its source on 2026-09-18. Worked-example arithmetic was
 * recomputed by script before publishing. Do not hand-edit prose without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "interest-rate-caps",
  cluster: "hotel-financing",
  isHub: false,
  title: "Interest Rate Caps on Floating-Rate Hotel Loans (2026)",
  h1: "Do I need an interest rate cap on a floating-rate hotel loan?",
  description: "How a rate cap works on a SOFR-based hotel loan, who requires one, what drives the price, and what one public hotel owner paid from 2023 to 2025.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "Do I need an interest rate cap on a floating-rate hotel loan?",
    "What's a rate cap and do I need one to refinance my hotel?",
    "My bridge lender is requiring a SOFR cap on my hotel loan. How does it work?",
    "How much does an interest rate cap cost on a $12 million hotel bridge loan?",
    "What strike rate should I pick for a rate cap on my hotel loan?",
    "My hotel loan extension requires a new rate cap. What should I expect?",
    "Is a rate cap or a swap better for a floating-rate hotel loan?",
    "Who pays me when SOFR goes above my cap strike?"
  ],
  answer: "If the loan is floating-rate bridge or debt fund money, expect the lender to require one. A cap pays you whenever SOFR resets above a strike rate, so your index cost stops rising there. SOFR was 3.85 percent on September 17, 2026.[1] One public hotel owner paid $5.1 million in 2025 for caps on $1.64 billion of notional, struck between 4.00 and 5.25 percent.[2]",
  takeaways: [
    "A cap is a one-time purchase, paid at closing. It is insurance on the index, not a change to your loan.[3]",
    "The payout formula is simple: day count fraction times notional times the amount by which the index exceeds the strike.[3]",
    "Price moves with four things: the strike, the term, the notional amount, and where the market expects SOFR to go and how volatile it is.[2]",
    "A lender-required cap is assigned to the lender as collateral, and an extension usually needs a new cap bought at that day's price.[3][2]",
    "No one publishes cap prices for private deals. The dated public evidence is what hotel REITs disclose: caps cost one public owner $28.3 million in 2023 and $5.1 million in 2025.[2]"
  ],
  sections: [
    {
      h2: "What is an interest rate cap, and how does it pay out?",
      lead: "An interest rate cap is a contract that pays the buyer when a floating index such as SOFR resets above an agreed strike rate.",
      body: "Chatham Financial, a hedging adviser, describes a cap as an insurance policy on a floating-rate index. It pays out to the purchaser if the index rises above a pre-determined threshold, the strike rate. Once the cap is in the money, the cap provider makes monthly payments for the difference between the strike and where the index resets each period.[3]\n\nChatham's published formula is: cap payout equals the monthly day count fraction, times the notional amount, times the index rate minus the cap strike. Its example is a $50 million cap on SOFR with a 0.50 percent strike. When SOFR reset at 0.76 percent for a 31-day period, the payout was 31 divided by 360, times $50,000,000, times 0.26 percent, or $11,194.44.[3]\n\nThe cap does not change your loan. You still pay the lender the full floating rate. The cap provider, usually a bank, pays you the excess, so your net index cost stops at the strike. Your spread over the index is unaffected. `/glossary/sofr` explains the index."
    },
    {
      h2: "Who requires a rate cap on a hotel loan?",
      lead: "Lenders that make floating-rate, interest-only hotel loans, mainly bridge lenders, debt funds and floating-rate CMBS lenders, commonly make a cap a condition of closing.",
      body: "The reason is coverage. A floating-rate loan sized to today's SOFR can fail its DSCR test if the index rises, and a hotel in transition has little room for that. The lender fixes the worst case by requiring a cap at a strike where the hotel's cash flow still covers interest.\n\nChatham's guidance distinguishes two cases. With a lender-required cap, the cap is collaterally assigned to the lender, and lenders often require cap payments to be sent to a lender-controlled lockbox account. With an elective cap, the owner chooses the terms and receives the payments directly.[3]\n\nPublic hotel owners show how common caps are on floating-rate hotel debt. Ashford Hospitality Trust reported $2.4 billion of variable-rate debt at December 31, 2025, and held caps with $2.07 billion of notional against mortgage loans with $1.76 billion of principal.[2] Fixed-rate loans from banks, CMBS conduits, life companies and SBA 504 debentures do not need one. `/hotel-financing/bridge-loans` covers the loans that do."
    },
    {
      h2: "What does a rate cap cost?",
      lead: "A rate cap's price is a single upfront premium set by the strike, the term, the notional amount and the market's expectations for SOFR, and no one publishes prices for private deals.",
      body: "A lower strike costs more, because the cap is more likely to pay. A longer term costs more. A larger notional costs more in proportion. And the same cap costs more when the forward curve is higher or rates are more volatile. Ashford's annual report describes the standard valuation method: discount the expected future receipts, using SOFR forward curves and volatilities as the inputs.[2]\n\nOur rate sheet marks the cap strike and cost on the bridge row as not yet published, because nobody publishes either.[4] What is public and dated is what REITs disclose. Ashford entered into caps with $2.58 billion of notional in 2023 at a total cost of $28.3 million, $2.34 billion in 2024 for $15.5 million, and $1.64 billion in 2025 for $5.1 million. Strikes ranged from 2.50 to 6.90 percent in 2023 and from 4.00 to 5.25 percent in 2025.[2] By our arithmetic that is about 1.09 percent of notional in 2023, 0.66 percent in 2024 and 0.31 percent in 2025.\n\nThose ratios mix many caps with different terms and strikes across a large portfolio, so they show direction, not a quote for your loan. Get a live indication from a hedge adviser or the cap desk of a bank before you sign the term sheet, and put the premium in your sources and uses. `/hotel-financing/closing-costs` lists the other closing line items."
    },
    {
      h2: "How do I choose the strike and the term?",
      lead: "On a lender-required cap the lender sets the maximum strike and the minimum term, and the owner's choice is whether to buy more protection than required.",
      body: "The lender's strike is usually set so that interest at the strike plus the spread still meets its coverage test. The term usually matches the initial loan term. You can buy a lower strike or a longer term than required, and pay more for it.\n\nA practical way to choose is to run your DSCR at the capped rate. If the hotel cannot cover interest at the strike plus the spread, the cap the lender asked for protects the lender's loan more than it protects your cash flow. `/tools/dscr-calculator` makes that check quick, and the worked example below shows it on a $12.0 million loan.\n\nNotional should match the loan balance you expect to have outstanding. If the loan funds in stages for a PIP, ask whether the cap can step up with the draws, because an oversized cap is wasted premium."
    },
    {
      h2: "What happens to the cap when I extend or refinance?",
      lead: "A cap ends on its termination date, so an extension option usually requires buying a new cap at whatever the market charges that day.",
      body: "This is the most common surprise. Bridge loans are often written with a short initial term and extension options subject to conditions. Ashford's February 2025 refinancing of 16 hotels is a public example of the shape: a $580 million interest-only loan at SOFR plus 4.37 percent, with a two-year initial term and three one-year extension options subject to conditions.[2] A large portfolio loan is not a quote for a single hotel, but the structure is the same.\n\nOne extension condition is usually a replacement cap. When Ashford failed to meet the conditions of an extension on a separate eight-hotel loan in February 2026, the lender's default notice demanded, among other things, delivery of a replacement interest rate cap agreement.[2]\n\nIf you refinance or sell before the cap expires, the cap is yours. It can be terminated for whatever value it has left, which may be little. If rates have risen, a cap that is in the money has real value, and Ashford reported $3.0 million of proceeds from in-the-money caps in 2025.[2] `/hotel-financing/loan-maturities-2026-2027` covers extension planning."
    },
    {
      h2: "Is a cap better than a swap or a fixed-rate loan?",
      lead: "A cap limits your rate and lets you benefit if rates fall, a swap fixes your rate in both directions, and a fixed-rate loan removes the question but adds prepayment cost.",
      body: "A cap costs cash up front and nothing afterward. If SOFR falls, your interest falls with it. A swap has no upfront premium, but it locks the rate, and ending it early when rates have fallen means paying a termination amount. That matters on a transitional hotel loan, where the plan is to repay early. It is why short-term hotel bridge loans are usually hedged with caps.\n\nFixed-rate permanent loans solve rate risk differently and carry their own exit cost. `/glossary/yield-maintenance` and `/glossary/defeasance` explain the two common prepayment structures, and `/hotel-financing/hotel-loan-rates` compares the indexes each loan type is priced from. The 10-year Treasury was 4.94 percent on September 17, 2026.[4]\n\nIf the hotel is stabilized and you plan to hold, the better question may be whether you need floating-rate debt at all. `/hotel-financing/refinance` covers moving from bridge to permanent debt."
    }
  ],
  table: {
    caption: "Interest rate caps a public hotel owner entered into, 2023 to 2025",
    columns: [
      "Year",
      "Notional amount",
      "Strike rate range",
      "Total cost",
      "Cost as a share of notional (our arithmetic)"
    ],
    rows: [
      [
        "2023",
        "$2,583,271,000",
        "2.50% to 6.90%",
        "$28,256,000",
        "1.09%"
      ],
      [
        "2024",
        "$2,341,742,000",
        "3.10% to 7.31%",
        "$15,532,000",
        "0.66%"
      ],
      [
        "2025",
        "$1,642,505,000",
        "4.00% to 5.25%",
        "$5,120,000",
        "0.31%"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts SOFR, the index a hotel bridge loan floats over, at 3.85% for September 17, 2026. It marks the bridge spread and the cap strike as not yet published, because no lender publishes either.[4]"
  },
  workedExample: {
    label: "Hypothetical: a 4.50% SOFR cap on a $12.0M hotel bridge loan",
    body: "Hypothetical. Loan $12,000,000, interest-only, floating at SOFR plus an assumed 3.50 percent spread. The lender requires a cap with a 4.50 percent strike. The spread and the strike are assumptions for the arithmetic, not quotes. The table above is from Ashford Hospitality Trust's 2025 annual report.[2]\n\nToday. With SOFR at 3.85 percent, the loan rate is 7.35 percent and interest is $882,000 a year. SOFR is below the strike, so the cap pays nothing.\n\nSOFR at 5.00 percent. The loan rate is 8.50 percent. The cap pays 0.50 percent on $12,000,000, or $60,000 a year. For a 30-day period that is 30 divided by 360, times $12,000,000, times 0.50 percent, or $5,000.\n\nSOFR at 6.00 percent. The loan rate is 9.50 percent, and uncapped interest is $1,140,000 a year. The cap pays 1.50 percent on $12,000,000, or $180,000 a year, which is $15,000 for a 30-day period. Net interest is $960,000, an effective rate of 8.00 percent. That is the strike plus the spread, and it is the worst case for as long as the cap lasts.\n\nCoverage check. If the hotel's NOI is $1,200,000, DSCR at the capped rate is $1,200,000 divided by $960,000, or 1.25 times. Without the cap at 6.00 percent SOFR it would be 1.05 times. That difference is why the lender requires the cap."
  },
  faq: [
    {
      q: "What's a rate cap and do I need one to refinance my hotel?",
      a: "A rate cap pays you when SOFR rises above a strike rate. You need one only if the new loan floats, which usually means a bridge or debt fund loan, and the lender requires it. A fixed-rate bank, CMBS, life company or SBA 504 refinance does not use one."
    },
    {
      q: "My bridge lender is requiring a SOFR cap on my hotel loan. How does it work?",
      a: "You buy the cap at closing for a one-time premium and assign it to the lender as collateral. If SOFR resets above the strike, the cap provider pays the difference on the notional amount each period, often into a lender-controlled account that offsets your interest."
    },
    {
      q: "How much does an interest rate cap cost on a $12 million hotel bridge loan?",
      a: "No public price list exists. Cost depends on strike, term, notional and the SOFR forward curve on the day you buy. One public hotel owner's caps cost about 0.31 percent of notional in 2025 and 1.09 percent in 2023. Get a live indication before signing."
    },
    {
      q: "Who pays me when SOFR goes above my cap strike?",
      a: "The cap provider, usually a bank, pays you each period. If the cap was required by your lender and assigned to it, the payment typically goes to a lender-controlled account and is netted against your interest or reimbursed to you."
    },
    {
      q: "My hotel loan extension requires a new rate cap. What should I expect?",
      a: "Expect to buy a replacement cap for the extension period at that day's market price, at a strike the lender sets. Budget for it a year ahead. If rates or volatility are higher than when you closed, the new cap can cost more than the first one."
    },
    {
      q: "Is a rate cap or a swap better for a floating-rate hotel loan?",
      a: "For a short transitional loan, usually a cap. It has a known upfront cost, no termination payment, and lets your rate fall if SOFR falls. A swap has no premium but can be expensive to end early, which works against a plan to refinance or sell."
    },
    {
      q: "Can I get money back on a rate cap if I pay off the loan early?",
      a: "Sometimes. The cap belongs to you, and it can be terminated for its remaining market value. If SOFR is well below the strike and little time is left, that value may be close to zero."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Secured Overnight Financing Rate (SOFR): 3.85% for September 17, 2026",
      url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
      publisher: "Federal Reserve Bank of New York",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Ashford Hospitality Trust, Inc., Form 10-K for the year ended December 31, 2025 (filed March 23, 2026): Note 9, Derivative Instruments and Hedging; interest rate risk; indebtedness; financing cash flows",
      url: "https://www.sec.gov/Archives/edgar/data/1232582/000123258226000067/aht-20251231.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Interest rate cap payout mechanics (definition, payout formula, lender-required and elective caps; example data as of May 16, 2022)",
      url: "https://cf.com/insights/interest-rate-cap-payout-mechanics",
      publisher: "Chatham Financial",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/bridge-loans",
      "/hotel-financing/hotel-loan-rates",
      "/hotel-financing/refinance",
      "/hotel-financing/loan-maturities-2026-2027",
      "/hotel-financing/closing-costs"
    ],
    glossary: [
      "/glossary/sofr",
      "/glossary/dscr",
      "/glossary/yield-maintenance",
      "/glossary/defeasance"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Compare floating and fixed-rate options for your hotel loan",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets arranges bridge and permanent hotel financing from $5 million, and a required rate cap is part of the all-in cost it compares across lenders."
};

export default page;
