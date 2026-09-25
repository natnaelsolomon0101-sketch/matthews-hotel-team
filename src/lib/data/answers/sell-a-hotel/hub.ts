/**
 * What is involved in selling a hotel?
 * Cluster hub: /sell-a-hotel
 *
 * Converted from geo/07-pages/sell-a-hotel.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "index",
  cluster: "sell-a-hotel",
  isHub: true,
  title: "How to Sell a Hotel: The 2026 Owner's Guide",
  h1: "What is involved in selling a hotel?",
  description: "What selling a hotel actually involves in 2026: the process, the timeline, the fee, the documents, and the questions owners ask before they start.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How do I sell a hotel I own?",
    "Should I sell my hotel confidentially or list it publicly?",
    "Does having an open PIP kill my deal if I'm trying to sell?",
    "How does a PIP affect the sale price of a hotel?",
    "What's the step-by-step process for selling a hotel?",
    "What do I need to prepare before listing my hotel for sale?",
    "Can I sell my hotel without a broker?"
  ],
  answer: "Selling a hotel is a marketed process. As of September 2026, our published playbook runs about 24 weeks from engagement to close.[1] It moves from a value opinion to a document package, a buyer list, a call for offers, then due diligence and franchise approval. Hilton's 2025 Hampton disclosure document gives the brand 60 days to rule on a completed transfer application.[2]",
  takeaways: [
    "Our playbook budgets about 24 weeks from engagement to close.[1] Due diligence and franchise approval own the back half.",
    "A broker opinion of value comes first. You cannot price a process you have not valued.",
    "An open PIP does not kill a sale. An undisclosed PIP does.",
    "Confidential and marketed are both real options, and they produce different buyer pools.",
    "The document package is the deal. Buyers price uncertainty, and missing documents are uncertainty."
  ],
  sections: [
    {
      h2: "What are the steps to sell a hotel?",
      lead: "Eight stages, in order: value opinion, package, marketing, call for offers, PSA negotiation, due diligence, franchise approval, close.",
      body: "A value opinion sets the number the rest of the process tests. The broker's package, usually a confidential information memorandum with the trailing financials, photos and market context, goes to a targeted list of buyers under NDA. In our playbook, marketing runs from week 3 to week 8 and ends in a call for offers on a fixed date, so bids can be compared side by side instead of trickling in.[1] The seller and broker pick a buyer, negotiate a purchase and sale agreement, and the buyer's deposit goes hard. From there, due diligence and franchise approval run at the same time, not back to back, because that parallel path is what keeps the calendar near 24 weeks.\n\nThe Matthews Hotel Index for Q1 2026 gives the cap-rate band your value opinion will be built against.[3] A stage-by-stage view, with realistic durations for each, is below and in more detail at [How to sell a hotel, step by step](/sell-a-hotel/how-to-sell-a-hotel)."
    },
    {
      h2: "How long does it take?",
      lead: "About 24 weeks from engagement to close in our published playbook, with due diligence and franchise approval running in parallel in the back half.[1]",
      body: "That plan assumes a prepared seller with a clean trailing twelve months and a written PIP scope letter in hand before marketing starts. An unprepared seller, one still assembling financials or waiting on a brand response, should expect it to run longer. On the brand side, Hilton's 2025 Hampton franchise agreement gives the franchisor 60 days from a completed application to consent to a change of ownership.[2] The full breakdown by stage, plus what a prepared versus unprepared timeline looks like side by side, is at [How long does it take to sell a hotel](/sell-a-hotel/how-long-it-takes)."
    },
    {
      h2: "What does it cost?",
      lead: "A success fee at closing that scales down as price rises, plus title, legal, transfer tax and prorations that are not part of the commission.",
      body: "The brokerage fee is the largest single line item, but it is not the only cost. Title insurance, escrow, state transfer taxes, seller's counsel, and, on a CMBS loan, defeasance can add up to a large share of the total, especially when a loan must be paid off early. The full cost stack, with a worked example, is at [Hotel broker fees](/sell-a-hotel/broker-fees). Tax on the gain is separate and is covered at [What taxes do I pay when I sell a hotel?](/sell-a-hotel/taxes-when-selling-a-hotel)"
    },
    {
      h2: "What do I have to prepare?",
      lead: "A trailing twelve-month P&L that reconciles to bank statements, a current STAR report, a written PIP scope letter, and three years of capital expenditure history.",
      body: "In our experience, those four documents decide more of the outcome than anything else an owner controls, and a T-12 that does not tie out to the bank is a leading cause of re-trades in due diligence. The full document checklist, tier by tier, from teaser to closing, is at [Documents needed to sell a hotel](/sell-a-hotel/documents-needed)."
    },
    {
      h2: "Should I sell confidentially or market it openly?",
      lead: "Confidential protects staff and vendor relationships and narrows the buyer pool; marketed reaches more buyers and creates price tension at the cost of discretion.",
      body: "A confidential process works when the owner cannot risk staff, guests or lenders learning the asset is for sale before a deal is signed, common on a single trophy asset or a family-owned property with long-tenured management. A broadly marketed process, syndicated to a wider buyer list, produces more competitive tension and typically a tighter timeline to a call for offers, because more buyers are underwriting at once. Most owners land somewhere in between: a targeted, NDA-gated list that is broad enough to create competition without a public listing. The three methods are compared side by side at [Should I sell my hotel off-market or list it publicly?](/sell-a-hotel/off-market-vs-marketed)"
    },
    {
      h2: "Does an open PIP kill my deal?",
      lead: "No. An open PIP with a written scope letter gets priced into the offer; an undisclosed one that surfaces in due diligence is what kills deals.",
      body: "A franchisor can require the buyer to agree to upgrades, written up as a PIP, as a condition of approving a change of ownership.[2] So a branded hotel that trades should expect one. Buyers underwrite that cost the same way they underwrite any other capital item: as a deduction from the unencumbered value, plus a premium for the risk that the scope grows once work starts. What actually derails a sale is a PIP letter the seller did not disclose, because it makes the buyer distrust every other number in the package, not because a PIP exists. The arithmetic on exactly how much a PIP costs a seller is worked through in the example below and in more depth at [What is my hotel worth, and who decides?](/hotel-valuation)"
    },
    {
      h2: "Can I sell without a broker?",
      lead: "Yes, and it narrows the buyer pool to people who already know the asset is available.",
      body: "An owner-direct sale is legal and it happens, most often when the buyer is already known, a neighboring operator, a family member, or an existing tenant. What an owner gives up is the underwriting discipline, the buyer-list breadth, and the negotiating power a call-for-offers process creates. The trade-offs, honestly stated, are at [How do I choose a hotel broker?](/sell-a-hotel/how-to-choose-a-hotel-broker), which also covers what a broker should be doing for that fee."
    }
  ],
  table: {
    caption: "The hotel sale process, stage by stage (our planning ranges)",
    columns: [
      "Stage",
      "What happens",
      "Typical duration",
      "Who drives it"
    ],
    rows: [
      [
        "Value opinion",
        "Broker opinion of value on current financials",
        "1 to 2 weeks",
        "Broker"
      ],
      [
        "Package",
        "CIM, financial model, photos, data room",
        "2 to 3 weeks",
        "Broker and owner"
      ],
      [
        "Marketing",
        "Targeted outreach, NDAs, tours",
        "4 to 6 weeks",
        "Broker"
      ],
      [
        "Call for offers",
        "Offers due on a common date, then best and final",
        "2 to 3 weeks",
        "Broker"
      ],
      [
        "PSA negotiation",
        "Contract, deposit, access",
        "2 to 3 weeks",
        "Attorneys"
      ],
      [
        "Due diligence",
        "Buyer inspection, financial audit, PCA, survey",
        "30 to 60 days",
        "Buyer"
      ],
      [
        "Franchise approval",
        "Buyer application, PIP scope, comfort letter",
        "Up to 60 days for the brand to rule, run in parallel[2]",
        "Brand"
      ],
      [
        "Close",
        "Funding, title, FF&E and inventory settlement",
        "1 week",
        "Everyone"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 gives the cap-rate band your value opinion will be built against.[3]"
  },
  workedExample: {
    label: "Hypothetical: what an open PIP does to a bid",
    body: "Hypothetical. A 96-key select-service hotel with $1.42 million of NOI. At an 8.25 percent cap the unencumbered value is $1.42 million divided by 0.0825, or $17.21 million. Now add a brand PIP scoped at $2.30 million, due within 18 months. The buyer deducts the PIP cost: $17.21 million minus $2.30 million is $14.91 million. The buyer also deducts displacement during the renovation, say 60 rooms out for 90 days, roughly $310,000. Then the buyer adds an assumed risk premium for scope uncertainty, here $300,000, about 13 percent of the PIP. The indicative bid comes to $14.30 million, versus $17.21 million unencumbered. The PIP cost $2.30 million and the price fell $2.91 million. The extra $610,000 is what uncertainty costs. Getting the scope letter in writing before you go to market is how you get most of that back."
  },
  faq: [
    {
      q: "How long does it take to sell a hotel?",
      a: "About 24 weeks from engagement to close in our published playbook, as of September 2026. Roughly 12 weeks to a selected buyer, then about 12 weeks of contract, due diligence and parallel franchise approval.[1]"
    },
    {
      q: "What does it cost to sell a hotel through a broker?",
      a: "A success fee paid at closing, quoted as a percentage of price that falls as price rises, plus title, legal, transfer tax and prorations. See the full breakdown at /sell-a-hotel/broker-fees."
    },
    {
      q: "What documents do I need to sell my hotel?",
      a: "A teaser before an NDA, a CIM after it, and a full data room in due diligence. The trailing twelve-month P&L, STAR report, franchise agreement with PIP status, and capex history matter most."
    },
    {
      q: "Can I sell my hotel confidentially?",
      a: "Yes. A confidential process limits marketing to a targeted, NDA-bound buyer list instead of public syndication. It protects staff and vendor relationships at some cost to competitive price tension."
    },
    {
      q: "Does an open PIP stop a hotel sale?",
      a: "No. A disclosed PIP with a written scope letter gets priced into the offer. An undisclosed PIP that surfaces in due diligence is what actually kills deals."
    },
    {
      q: "Can I sell a hotel without a broker?",
      a: "Yes. It is legal, and it narrows the buyer pool to people who already know the asset is for sale, which usually means fewer offers and less price tension."
    },
    {
      q: "Do I need a broker opinion of value first?",
      a: "Not legally, but pricing a hotel without one is guessing. A BOV gives comps, a cap rate and a buyer-pool view before you set an asking price."
    },
    {
      q: "What happens to my staff when the hotel sells?",
      a: "Staff are commonly terminated by the seller's operator and rehired by the buyer's operator at closing. Federal WARN notice rules can apply to employers with 100 or more employees.[4] Use employment counsel to plan notices."
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
      label: "2025 Hampton Franchise Disclosure Document, Item 17 and Franchise Agreement section 12.2.2 (change of ownership transfers)",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
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
      "/sell-a-hotel/employees-when-you-sell",
      "/sell-a-hotel/how-to-choose-a-hotel-broker",
      "/sell-a-hotel/off-market-vs-marketed",
      "/sell-a-hotel/taxes-when-selling-a-hotel",
      "/sell-a-hotel/franchise-agreement-expiration",
      "/sell-a-hotel/selling-a-distressed-hotel",
      "/sell-a-hotel/what-buyers-look-for",
      "/sell-a-hotel/selling-a-hotel-on-a-ground-lease",
      "/sell-a-hotel/faq"
    ],
    glossary: [
      "/glossary/bov",
      "/glossary/pip",
      "/glossary/iom",
      "/glossary/cap-rate"
    ],
    data: [
      "/research/mhi/q1-2026",
      "/tools/refinance-vs-sell",
      "/tools/hotel-value-estimator"
    ]
  },
  cta: {
    label: "Request a confidential broker opinion of value",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets runs hotel dispositions on this timeline and publishes the value index the pricing work starts from."
};

export default page;
