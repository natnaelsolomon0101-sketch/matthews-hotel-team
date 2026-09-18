/**
 * Selling a hotel: questions owners ask
 * Answer page: /sell-a-hotel/faq
 *
 * Written 2026-09-18 from geo/content-queue.md section B. A routing page in
 * the pattern of /hotel-financing/faq: short answers, every one links to the
 * spoke that goes deeper. Every figure here is already sourced on that spoke.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "faq",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Selling a Hotel FAQ (September 2026)",
  h1: "Selling a hotel: questions owners ask",
  description: "Short answers to what hotel owners ask before selling: timeline, fees, taxes, staff, the franchise, confidentiality, and selling with a troubled loan.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How do I sell a hotel I own?",
    "Should I sell my hotel now or wait until next year?",
    "What happens to my staff and franchise agreement when I sell my hotel?",
    "How do I get a confidential valuation on my hotel before deciding to sell?",
    "Do I need a 1031 exchange lined up before I sell my hotel?",
    "What's the difference between an OM/CIM and a BOV?",
    "Can I sell my hotel without a broker?",
    "I'm thinking about selling my hotel in the next year or two. What should I know first?"
  ],
  answer: "This page answers the short questions hotel owners ask before a sale and links each one to the page that goes deeper. The anchors, as of September 2026: about 24 weeks from engagement to close in our published playbook,[1] 60 days for Hilton to rule on a Hampton change of ownership,[2] and a 25 percent maximum federal rate on gain from building depreciation.[3]",
  takeaways: [
    "Plan on about 24 weeks from engagement to close, with the brand's 60-day review running inside due diligence.[1][2]",
    "Start with a broker opinion of value. It does not commit you to sell, and it tells you whether selling beats holding.",
    "Tax is layered: up to 20 percent on capital gain, up to 25 percent on building depreciation, ordinary rates on FF&E.[3]",
    "Staff, brand and lender all find out eventually. A confidential process controls when.",
    "Every answer on this page links to a longer page with its sources."
  ],
  sections: [
    {
      h2: "How do I find out what my hotel is worth before I decide?",
      lead: "Ask for a broker opinion of value, a written estimate built from your trailing twelve-month financials, comparable sales and current cap rates.",
      body: "A BOV is not an appraisal and does not commit you to sell. It is the document that lets you compare selling against holding or refinancing. The Matthews Hotel Index for Q1 2026 publishes the cap-rate bands a BOV is built against.[4] How a BOV differs from a lender's appraisal is at `/hotel-valuation/broker-opinion-of-value`, and the valuation math is at `/hotel-valuation/how-to-value-a-hotel`. An offering memorandum, by contrast, is the marketing document written for buyers after you decide to sell. See `/glossary/bov` and `/glossary/iom`."
    },
    {
      h2: "How long will it take, and what are the steps?",
      lead: "About 24 weeks in our published playbook: 2 weeks of packaging, 6 of marketing, 4 of offers and contract, and 12 of due diligence and closing.[1]",
      body: "The steps in order are value opinion, package, marketing, call for offers, contract, due diligence, franchise approval and close. They are laid out at `/sell-a-hotel/how-to-sell-a-hotel`. What stretches or shortens each stage is at `/sell-a-hotel/how-long-it-takes`."
    },
    {
      h2: "What will it cost me to sell?",
      lead: "A success fee paid at closing, plus title, legal, transfer tax and, on some loans, a prepayment or defeasance cost.",
      body: "The fee structure, who pays it and what is negotiable are at `/sell-a-hotel/broker-fees`. Federal and state tax on the gain is usually the bigger number. It is layered: long-term capital gain at up to 20 percent, gain from building depreciation at up to 25 percent, and ordinary income on FF&E recapture.[3] The full walk-through is at `/sell-a-hotel/taxes-when-selling-a-hotel`."
    },
    {
      h2: "Do I need a 1031 exchange lined up before I sell?",
      lead: "If you want to defer the gain, yes. The exchange has to be structured before closing, because the 45-day and 180-day clocks start when you transfer the hotel.[5]",
      body: "You have 45 days after the sale to identify replacement property and 180 days to close on it, or until your tax return is due, with extensions, if that is earlier.[5] Only the real property qualifies, so the price allocated to FF&E is taxed anyway. The hotel-specific mechanics are at `/hotel-financing/1031-exchange-hotels`."
    },
    {
      h2: "Should I sell quietly or put the hotel on the market?",
      lead: "Most owners do best in between: a confidential process marketed to a targeted buyer list under NDA.",
      body: "Off-market saves the marketing weeks and gives up competing bids. A public listing reaches the most buyers and exposes the sale to staff and competitors. The three methods are compared at `/sell-a-hotel/off-market-vs-marketed`. Whether to use a broker at all, and how to pick one, is at `/sell-a-hotel/how-to-choose-a-hotel-broker`."
    },
    {
      h2: "What happens to my franchise agreement and my staff?",
      lead: "The buyer applies to the brand as a new franchisee, and staff are typically rehired by the buyer's operator at closing.",
      body: "Under Hilton's 2025 Hampton agreement, the seller gives 60 days' written notice, the buyer signs a new franchise agreement and accepts a PIP, and the brand has 60 days from a completed application to consent.[2] If your agreement is within a few years of expiring, read `/sell-a-hotel/franchise-agreement-expiration` first. On staff, federal WARN notice rules can apply to employers with 100 or more employees.[6] Use employment counsel to plan notices."
    },
    {
      h2: "What should I get ready now?",
      lead: "A trailing twelve-month P&L that ties to the bank statements, a current STAR report, the franchise agreement with any PIP letter, and three years of capital spending.",
      body: "Those four items decide more of the outcome than anything else an owner controls. The full list, tier by tier from teaser to closing, is at `/sell-a-hotel/documents-needed`."
    },
    {
      h2: "What if my hotel is losing money or my loan is in trouble?",
      lead: "You can still sell, and an early sale you control is usually better than a later one the lender controls.",
      body: "If the price will not clear the loan, the lender has to approve the payoff in writing, and forgiven debt can be taxable. The sale paths, from a lender-approved sale to a receivership sale and a deed in lieu, are at `/sell-a-hotel/selling-a-distressed-hotel`. The workout side is at `/hotel-financing/loan-workouts`, and the hold-or-sell math is at `/hotel-financing/refinance-or-sell`."
    }
  ],
  table: {
    caption: "Quick reference: selling a hotel, September 2026",
    columns: [
      "Question",
      "Short answer",
      "Full page"
    ],
    rows: [
      [
        "How long does it take?",
        "About 24 weeks, engagement to close[1]",
        "`/sell-a-hotel/how-long-it-takes`"
      ],
      [
        "How long does the brand take?",
        "Hampton: 60 days from a completed application[2]",
        "`/sell-a-hotel/franchise-agreement-expiration`"
      ],
      [
        "What is the broker paid?",
        "A success fee at closing that scales down as price rises",
        "`/sell-a-hotel/broker-fees`"
      ],
      [
        "What is the federal tax?",
        "Up to 20% capital gain, up to 25% on building depreciation, ordinary on FF&E[3]",
        "`/sell-a-hotel/taxes-when-selling-a-hotel`"
      ],
      [
        "1031 deadlines?",
        "45 days to identify, 180 days to close[5]",
        "`/hotel-financing/1031-exchange-hotels`"
      ],
      [
        "Quiet or public?",
        "Usually confidential marketing under NDA",
        "`/sell-a-hotel/off-market-vs-marketed`"
      ],
      [
        "What do I prepare?",
        "T-12, STAR report, franchise agreement and PIP letter, capex history",
        "`/sell-a-hotel/documents-needed`"
      ],
      [
        "Loan in default?",
        "Sell early; lender must approve any short payoff",
        "`/sell-a-hotel/selling-a-distressed-hotel`"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 publishes cap-rate bands by market and segment, which is where a broker opinion of value starts.[4]"
  },
  workedExample: {
    label: "Hypothetical: counting back from a target closing date",
    body: "Hypothetical. An owner wants to close by December 15, 2027 so the gain lands in that tax year. Our playbook runs about 24 weeks from engagement to close,[1] so the engagement date is about July 1, 2027. The owner needs four to six weeks before that to reconcile the trailing twelve months and get a PIP scope from the brand, so preparation starts in mid-May. The purchase contract should be signed around week 12, late September, and the buyer should file its franchise application that same week, because a brand with 60 days to rule[2] would then answer by late November, inside due diligence. If the owner plans a 1031 exchange, the 45-day identification window opens at closing and ends January 29, 2028, and the 180-day window ends June 12, 2028, or on the due date of the owner's 2027 tax return including extensions if that comes first, so the owner files an extension.[5] Working backward from the date you care about shows quickly if the start date has already passed."
  },
  faq: [
    {
      q: "I am thinking about selling my hotel. Where do I start?",
      a: "With a broker opinion of value, which prices the hotel from your trailing twelve-month financials and current cap rates without committing you to sell. Then compare selling against holding or refinancing. See /hotel-valuation/broker-opinion-of-value."
    },
    {
      q: "How long does it take to sell a hotel?",
      a: "About 24 weeks from engagement to close in our published playbook, as of September 2026: roughly 12 weeks to a signed contract and 12 weeks of due diligence, franchise approval and closing.[1] Details at /sell-a-hotel/how-long-it-takes."
    },
    {
      q: "How much tax will I pay when I sell my hotel?",
      a: "Federal tax is layered: up to 20 percent on long-term capital gain, up to 25 percent on gain from building depreciation, and ordinary rates on FF&E recapture.[3] State tax is extra. See /sell-a-hotel/taxes-when-selling-a-hotel."
    },
    {
      q: "Should I sell my hotel now or wait until next year?",
      a: "Compare in dollars: net sale proceeds today against a year of cash flow plus next year's likely price, less any PIP or loan maturity in between. The framework is at /hotel-financing/refinance-or-sell."
    },
    {
      q: "Will my employees and the brand find out I am selling?",
      a: "The brand must, because it approves the buyer. Hampton's 2025 agreement requires 60 days' notice.[2] Staff usually learn near closing in a confidential process. See /sell-a-hotel/off-market-vs-marketed."
    },
    {
      q: "My franchise agreement expires soon. Should I sell first?",
      a: "Decide two to three years out. Hampton's 2025 disclosure document gives no right to renew, and both a sale and a re-license trigger a PIP.[2] See /sell-a-hotel/franchise-agreement-expiration."
    },
    {
      q: "Can I sell a hotel that is losing money or behind on its loan?",
      a: "Yes. If the price covers the loan, it is a normal sale. If not, the lender must approve the payoff in writing, and forgiven debt can be taxable. See /sell-a-hotel/selling-a-distressed-hotel."
    },
    {
      q: "Can I sell my hotel without a broker?",
      a: "Yes. It is legal, and it limits the buyer pool to people who already know the hotel is available, which usually means fewer offers. The trade-offs are at /sell-a-hotel/how-to-choose-a-hotel-broker."
    }
  ],
  sources: [
    {
      n: 1,
      label: "How to sell a hotel: the 24-week transaction process",
      url: "/process",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Item 17 and Franchise Agreement section 12.2.2",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Topic no. 409, Capital gains and losses; and Publication 544 (2025), Sales and Other Dispositions of Assets",
      url: "https://www.irs.gov/taxtopics/tc409",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "26 U.S. Code section 1031, Exchange of real property held for productive use or investment",
      url: "https://www.law.cornell.edu/uscode/text/26/1031",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "20 CFR 639.3, WARN Act definitions (employer)",
      url: "https://www.law.cornell.edu/cfr/text/20/639.3",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/how-to-sell-a-hotel",
      "/sell-a-hotel/how-long-it-takes",
      "/sell-a-hotel/broker-fees",
      "/sell-a-hotel/documents-needed",
      "/sell-a-hotel/how-to-choose-a-hotel-broker",
      "/sell-a-hotel/off-market-vs-marketed",
      "/sell-a-hotel/franchise-agreement-expiration",
      "/sell-a-hotel/taxes-when-selling-a-hotel",
      "/sell-a-hotel/selling-a-distressed-hotel"
    ],
    glossary: [
      "/glossary/bov",
      "/glossary/iom",
      "/glossary/pip",
      "/glossary/cap-rate"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Ask us your question directly",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets publishes the 24-week playbook and the hotel index that these answers rest on."
};

export default page;
