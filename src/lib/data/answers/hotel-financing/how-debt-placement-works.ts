/**
 * How does hotel debt placement actually work?
 * Answer page: /hotel-financing/how-debt-placement-works
 *
 * Converted from geo/06-pages/financing/hotel-financing__how-debt-placement-works.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "how-debt-placement-works",
  cluster: "hotel-financing",
  isHub: false,
  title: "How Hotel Debt Placement Works",
  h1: "How does hotel debt placement actually work?",
  description: "What a debt placement broker does on a hotel loan, how lenders are selected, what it costs, and when to run a process instead of calling your bank.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "How does hotel debt placement work?",
    "Do I need a mortgage broker to get a hotel loan?",
    "What does a hotel debt placement broker charge?",
    "How many lenders should I approach for a hotel loan?",
    "Does Matthews Hotel Markets do hotel capital markets and debt placement?",
    "What's the difference between a hotel mortgage broker and going direct to a bank?",
    "How long does a hotel debt placement process take?"
  ],
  answer: "Debt placement is a competitive process, not an introduction. The broker packages the asset, takes it to the lenders most likely to want it, collects term sheets against a common deadline, and normalizes them. It costs a fee, usually a percentage of the loan, and pays for itself when the gap between quotes beats the fee. Fixed quotes start from the 10-year Treasury, 4.94 percent on September 17, 2026.[1]",
  takeaways: [
    "Going direct to one bank gets you one quote and no way to know if it is good.",
    "The value is comparability: same package, same deadline, quotes normalized to the same terms.",
    "A fee is paid at closing, quoted as a percentage of loan amount. Ask for it in writing up front.",
    "The right lender list is short and specific, not every lender in the market.",
    "Budget a few months from complete package to funding on a straightforward hotel loan."
  ],
  sections: [
    {
      h2: "What does a debt placement broker actually do?",
      lead: "A debt placement broker packages the deal once, sends it to a curated list of lenders on a common timeline, and normalizes the term sheets that come back so an owner is comparing apples to apples.",
      body: "The package includes the trailing financials, STAR report, franchise documentation, and a written summary of the business plan, all assembled the way the target lenders expect to see it. Rather than each lender receiving a slightly different, informally assembled set of materials, every lender in the process sees the same package, on the same deadline, which is what makes the resulting quotes genuinely comparable rather than apples to oranges."
    },
    {
      h2: "How is the lender list built?",
      lead: "The list is built from the specific deal's profile, leverage target, recourse tolerance, hold period, and business plan, matched against which lender types and which specific institutions are actually active in that combination today.",
      body: "A short, well-targeted list of lenders who are actually likely to want the specific deal produces a stronger competitive process than a long list that includes lenders who will decline or come back with an uncompetitive quote. This targeting is where a broker's ongoing market contact matters most: knowing which lender types are currently aggressive on hospitality, which are pulling back, and which specific institutions have appetite for the asset's leverage and structure this month, not last year."
    },
    {
      h2: "How do I compare term sheets that are not alike?",
      lead: "Term sheets rarely arrive in identical form, and normalizing them to the same rate basis, term, amortization, and fee structure is the step that turns five different documents into one real comparison.",
      body: "A quote at a lower headline rate but a shorter interest-only period, a higher origination fee, or a tighter prepayment structure is not automatically the better loan. Normalizing every quote to an all-in effective cost, over the same assumed hold period, is the only way to compare them honestly. This is mechanical work, but it is work that is easy to get wrong under time pressure without a consistent framework applied to every quote."
    },
    {
      h2: "What does debt placement cost?",
      lead: "A placement fee is typically quoted as a percentage of the loan amount, paid at closing, and it is a negotiable line item, not a fixed industry rate.",
      body: "Matthews Hotel Markets' September 2026 rate sheet marks the spread between lender types as not yet published, and that is exactly the point: the gap a placement process captures is not a number anyone prints, which is why an owner cannot look it up and decide on their own whether the process is worth the fee. What the sheet does publish is the index every quote is struck against, the 10-year Treasury at 4.94% on September 17, 2026 and SOFR at 3.85% for September 17, 2026.[1][2][3] The fee should be agreed in writing before the process starts, not negotiated after term sheets are in hand, and an owner should ask directly what the fee is and whether it is contingent on closing."
    },
    {
      h2: "When should I just call my bank?",
      lead: "Calling your existing bank directly makes sense on a smaller loan with a strong existing relationship, where the relationship itself is likely to produce a competitive quote without a formal process.",
      body: "The honest answer is that a placement process is not always worth running. When the loan is small, the relationship is strong, and the expected spread between the best available quote and the relationship quote is modest, the broker fee can exceed the value captured. The worked example below shows exactly where that line sits with real numbers."
    },
    {
      h2: "How long does the process take?",
      lead: "In our experience, a straightforward hotel debt placement takes a few months from a complete application package to funding, and term sheets come back within a few weeks of the package going out.",
      body: "That timeline assumes the trailing financials, STAR report and PIP status are ready before the process starts; the full document checklist and realistic lead times for each item are on `/hotel-financing/loan-requirements`. Anything missing when the process begins adds directly to the total timeline."
    },
    {
      h2: "What do I need to start?",
      lead: "The same core package every hotel lender wants: a trailing twelve-month P&L, a STAR report, the franchise agreement and any PIP status, and a summary of the business plan and sponsor.",
      body: "Starting a placement process without this package assembled produces a slower, weaker process, because lenders either decline to quote on an incomplete picture or come back with soft, heavily caveated indications rather than real term sheets. Assembling the package before approaching lenders, rather than during, is the single highest-leverage step an owner controls directly. For representation on the placement itself, see `/services/capital-markets`."
    }
  ],
  table: {
    caption: "Going direct versus running a placement process",
    columns: [
      "Category",
      "Direct to one lender",
      "Placement process"
    ],
    rows: [
      [
        "Quotes received",
        "One",
        "Several, from a targeted list"
      ],
      [
        "Package prepared",
        "Whatever you send",
        "Standardized, with the questions pre-answered"
      ],
      [
        "Comparability",
        "None",
        "Quotes normalized to the same term and structure"
      ],
      [
        "Negotiating position",
        "Take it or leave it",
        "Competitive tension"
      ],
      [
        "Cost",
        "No broker fee",
        "Fee at closing, percentage of loan"
      ],
      [
        "Time to term sheets",
        "Depends on the lender",
        "A few weeks from a complete package"
      ],
      [
        "Best fit",
        "Small loan, strong existing relationship",
        "Anything where the spread between quotes exceeds the fee"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet marks the spread between lender types as not yet published, and that is the point: the number a placement process captures is not a number anyone prints. The sheet does publish the index every quote is struck against, the 10-year Treasury at 4.94% on September 17, 2026 and SOFR at 3.85% for September 17, 2026.[2][3]"
  },
  workedExample: {
    label: "Hypothetical: does the fee pay for itself?",
    body: "Hypothetical. A $12.0M hotel loan. A placement process returns six term sheets. The best rate is 7.10 percent; the one the owner would have taken from their existing bank is 7.55 percent.\n\nThe rate difference is 45 basis points. Annual interest saved is $12.0M times 0.45 percent, or $54,000. Over a 5-year term, that is $270,000. A placement fee at 0.75 percent of $12.0M is $90,000.\n\nThe process nets $180,000 over the term in this hypothetical, before considering that the best quote also came with a year of interest-only. Run the same math with a 10 basis point spread and the fee does not pay for itself. Both outcomes happen. Ask for the spread history before you engage anyone, including us."
  },
  faq: [
    {
      q: "What does a hotel debt placement broker do?",
      a: "Packages the deal once, presents it to a curated list of lenders on a common deadline, collects term sheets, and normalizes them to the same basis so they can be compared honestly."
    },
    {
      q: "How much does hotel debt placement cost?",
      a: "Typically a percentage of the loan amount, paid at closing, and negotiable. Get the fee in writing before the process starts, not after term sheets arrive."
    },
    {
      q: "Do I need a broker to get a hotel loan?",
      a: "Not always. A small loan with a strong existing bank relationship can be worth calling direct. A broker earns its fee when running a competitive process is likely to beat the relationship quote by more than the fee costs."
    },
    {
      q: "How many lenders will see my deal?",
      a: "A well-run process returns several term sheets from a targeted lender list, not every lender in the market. A shorter, well-matched list usually beats a long, unfocused one."
    },
    {
      q: "How long does hotel debt placement take?",
      a: "In our experience, a few months from a complete application package to funding, with term sheets back within a few weeks of the package going out. Anything missing from the package adds time."
    },
    {
      q: "Who pays the placement fee, me or the lender?",
      a: "The borrower generally pays the placement fee at closing, quoted as a percentage of the loan amount. Confirm the fee structure in writing before starting the process."
    },
    {
      q: "What documents do I need to start a placement process?",
      a: "A trailing twelve-month P&L, a STAR report, the franchise agreement and PIP status, and a summary of the business plan and sponsor. The full checklist with lead times is on the loan requirements page."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Daily Treasury Par Yield Curve Rates",
      url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve",
      publisher: "U.S. Department of the Treasury",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Secured Overnight Financing Rate (SOFR)",
      url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
      publisher: "Federal Reserve Bank of New York",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/hotel-loan-rates",
      "/hotel-financing/refinance"
    ],
    glossary: [
      "/glossary/dscr",
      "/glossary/debt-yield"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Start a debt placement process",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets runs hotel debt placement as a competitive process and publishes the rate sheet so clients can see the spread we are working against."
};

export default page;
