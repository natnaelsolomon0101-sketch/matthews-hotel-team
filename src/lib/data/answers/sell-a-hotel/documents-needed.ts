/**
 * What documents do I need to sell my hotel?
 * Answer page: /sell-a-hotel/documents-needed
 *
 * Converted from geo/07-pages/sell-a-hotel__documents-needed.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "documents-needed",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Documents Needed to Sell a Hotel",
  h1: "What documents do I need to sell my hotel?",
  description: "The full document package a hotel sale requires, what a buyer will ask for in due diligence, and what goes in a CIM versus the data room.",
  lastUpdated: "2026-09-25",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What documents do I need to sell my hotel?",
    "What documents does a buyer need from me during hotel due diligence?",
    "What do I need to prepare before listing my hotel for sale?",
    "What's in a hotel CIM (confidential information memorandum)?",
    "What's a T-12 and why do hotel buyers ask for one?",
    "What's actually in a hotel CIM that's different from a regular commercial real estate OM?",
    "What financials should I ask for before underwriting a hotel deal?",
    "What happens to my staff and franchise agreement when I sell my hotel?"
  ],
  answer: "Three tiers: the marketing package a buyer sees before an NDA, the CIM they see after, and the data room they get in due diligence. As of September 2026, in our experience, the four documents that decide the deal are the trailing twelve-month P&L, the STAR report, the franchise agreement with the PIP status letter, and three years of capital expenditure history.",
  takeaways: [
    "A hotel CIM carries operating detail a standard commercial OM does not: segmentation, index, departmental margins under USALI, brand position.[1]",
    "The T-12 is a monthly profit and loss for the trailing twelve months. It must reconcile to bank statements.",
    "The PIP status letter is the document buyers price uncertainty against. Get it in writing before marketing.",
    "Employees are commonly terminated and rehired by the buyer's operator at closing. Plan the communication.",
    "Missing documents do not delay a deal. They reduce the price."
  ],
  sections: [
    {
      h2: "What goes in the package before an NDA?",
      lead: "An anonymized teaser: key count, market, chain scale and price guidance, with nothing that identifies the property.",
      body: "This is the first thing a prospective buyer sees, before signing anything. It is deliberately thin, enough to let an unqualified buyer self-select out and a qualified one ask for the NDA. Nothing in a teaser should let a competitor, employee or guest identify the specific hotel."
    },
    {
      h2: "What is in a hotel CIM?",
      lead: "Trailing and stabilized financials, a market and competitive-set analysis, segmentation and brand position, PIP status, capital expenditure history, and photos.",
      body: "A hotel CIM covers everything a commercial real estate offering memorandum covers, plus the operating-business layer that makes a hotel different from an apartment or office asset: revenue segmentation by source (transient, group, contract), a competitive-set index position, departmental profit margins under the Uniform System of Accounts for the Lodging Industry,[1] and a clear PIP status. The market context section draws on the Matthews Hotel Index for Q1 2026 without republishing any licensed STAR or CoStar tables.[2]"
    },
    {
      h2: "What is a T-12 and why does it matter so much?",
      lead: "A month-by-month profit and loss for the trailing twelve months, and it is the single document a buyer's accountant will try to break.",
      body: "Every number in a hotel CIM traces back to the T-12: NOI, margin, segmentation, all of it. A buyer's diligence team reconciles the T-12 line by line against bank deposits and vendor payments. In our experience, a T-12 that does not tie out, whether from a genuine bookkeeping error or an undisclosed add-back, is a leading reason a deal re-trades or dies, shown in the worked example below."
    },
    {
      h2: "What does the buyer ask for in due diligence?",
      lead: "Everything behind the CIM: the franchise and management agreements, title and survey, a property condition assessment, environmental reports, tax bills, insurance loss runs, and the employee census.",
      body: "The data room row in the table above lists the full set. Two items deserve specific attention: a Phase I Environmental Site Assessment under the ASTM E1527-21 standard,[3] and current title and an ALTA/NSPS land title survey,[4] both of which take time to order and should start as soon as the PSA is signed, not after."
    },
    {
      h2: "What franchise documents do I need?",
      lead: "The current franchise agreement, brand correspondence on standards compliance, and a written PIP status or scope letter.",
      body: "A buyer cannot simply assume the seller's franchise agreement. Under Hilton's 2025 Hampton agreement, for example, the buyer must meet the requirements for new franchisees, submit a change of ownership application, sign the current form of franchise agreement and agree to requested upgrades.[5] The seller's job is to make the brand relationship as legible as possible: no ambiguity about current compliance status, and a written answer on what PIP, if any, is coming due."
    },
    {
      h2: "What happens to my staff at closing?",
      lead: "Employees are commonly terminated by the seller's operator and rehired by the buyer's operator, and employers with 100 or more employees may owe federal WARN Act notice.[6]",
      body: "This is standard in hotel transactions because the operating agreement, not just the real estate, changes hands. Sellers should plan the employee communication timeline with counsel. Where WARN applies, notice generally must be served 60 days before a plant closing or mass layoff, and in a sale the seller is responsible for notice of any layoff up to and including the closing, the buyer after it.[7] The thresholds, the state laws that sit below the federal ones, and what the purchase agreement should say about it are at [What happens to my employees when I sell my hotel?](/sell-a-hotel/employees-when-you-sell)."
    },
    {
      h2: "What should I start gathering today?",
      lead: "Twelve months of bank statements to reconcile against the P&L, the current STAR report, and a written PIP scope letter, regardless of when you plan to list.",
      body: "None of these require a broker engagement to begin, and starting early is one of the biggest things an owner can do to shorten the process, covered at [How long does it take to sell a hotel?](/sell-a-hotel/how-long-it-takes)"
    }
  ],
  table: {
    caption: "Hotel sale document package, by tier",
    columns: [
      "Tier",
      "Documents",
      "When it is shared",
      "Who prepares it"
    ],
    rows: [
      [
        "Teaser",
        "Anonymized summary, keys, market, price guidance",
        "Pre-NDA",
        "Broker"
      ],
      [
        "CIM",
        "T-12 and T-36 P&L, STAR summary, segmentation, brand position, PIP status, capex history, photos, market analysis",
        "Post-NDA",
        "Broker and owner"
      ],
      [
        "Data room",
        "Franchise agreement, management agreement, ground lease, title, survey, PCA, environmental, tax bills, insurance loss runs, service contracts, employee census, permits, licenses, liquor license",
        "Under contract",
        "Owner and counsel"
      ],
      [
        "Closing",
        "Payoff letter, estoppels, transfer applications, FF&E inventory, prorations",
        "Final 2 weeks, weeks 22 to 24 in our playbook[8]",
        "Attorneys and broker"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 supplies the market context section of the CIM without republishing any licensed data.[2]"
  },
  workedExample: {
    label: "Hypothetical: what a T-12 that does not reconcile costs",
    body: "Hypothetical. A hotel goes under contract at $17.0 million on reported NOI of $1.42 million, an 8.35 percent cap. In due diligence the buyer's accountant finds $94,000 of owner-paid expenses that were booked below the NOI line. Corrected NOI: $1.42 million minus $94,000 is $1.326 million. At the same 8.35 percent cap, that recalculates to $15.88 million. The re-trade is $1.12 million, or 6.6 percent of price. And the re-trade is the good outcome. The other outcome is that the buyer stops trusting every other number in the package and walks in week 18, after the property has been off the market for four months. Reconcile the T-12 to bank statements before you list."
  },
  faq: [
    {
      q: "What is a T-12 in a hotel deal?",
      a: "A month-by-month profit and loss statement for the trailing twelve months. Buyers reconcile it against bank statements, and in our experience discrepancies are a leading reason deals re-trade or fail."
    },
    {
      q: "What documents do I need to sell my hotel?",
      a: "A teaser, a CIM with trailing financials and market data, and a due diligence data room with the franchise agreement, title, survey, PCA and employee census. See the tier breakdown above."
    },
    {
      q: "What is in a hotel CIM?",
      a: "Trailing and stabilized financials, competitive-set positioning, segmentation, brand and PIP status, capital expenditure history, and photos, all under NDA."
    },
    {
      q: "How is a hotel CIM different from a normal commercial OM?",
      a: "It carries operating-business detail an apartment or office OM does not: revenue segmentation, competitive index, departmental margins, franchise standing and PIP status."
    },
    {
      q: "What does a buyer ask for in hotel due diligence?",
      a: "The franchise and management agreements, title and survey, a property condition assessment, environmental reports, tax bills, insurance loss runs, service contracts and the employee census."
    },
    {
      q: "What happens to my employees when the hotel sells?",
      a: "They are commonly terminated by the seller's operator and rehired by the buyer's operator at closing. Employers with 100 or more employees can owe 60 days' WARN Act notice.[6][7] Use employment counsel."
    },
    {
      q: "Can my franchise agreement transfer to the buyer?",
      a: "Not automatically. The buyer applies to the franchisor as a new franchisee, subject to approval and typically a PIP, rather than assuming the seller's existing agreement.[5]"
    },
    {
      q: "Do I need a PIP letter before I list?",
      a: "Not legally, but it removes the single biggest source of re-trade risk. Request the brand's current PIP status in writing before marketing starts."
    }
  ],
  sources: [
    {
      n: 1,
      label: "HFTP, AHLA and GFC unveil the 12th Revised Edition of the Uniform System of Accounts for the Lodging Industry (adopted January 1, 2026)",
      url: "https://www.ahla.com/news/hftp-ahla-and-gfc-unveil-groundbreaking-12th-revised-edition-uniform-system-accounts-lodging",
      publisher: "American Hotel & Lodging Association",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-17"
    },
    {
      n: 3,
      label: "E1527-21 Standard Practice for Environmental Site Assessments: Phase I Environmental Site Assessment Process",
      url: "https://store.astm.org/e1527-21.html",
      publisher: "ASTM International",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "ALTA/NSPS Land Title Survey Standards (2026 standards, effective February 23, 2026)",
      url: "https://www.alta.org/topics/topic-land-survey-standards",
      publisher: "American Land Title Association",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Items 5, 6 and 17 and Franchise Agreement section 12.2.2",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "20 CFR 639.3, WARN Act definitions (employer)",
      url: "https://www.law.cornell.edu/cfr/text/20/639.3",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "20 CFR 639.4, who must give notice (including in a sale of a business)",
      url: "https://www.law.cornell.edu/cfr/text/20/639.4",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "How to sell a hotel: the 24-week transaction process",
      url: "/process",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/how-to-sell-a-hotel",
      "/sell-a-hotel/how-long-it-takes",
      "/sell-a-hotel/broker-fees",
      "/sell-a-hotel/how-to-choose-a-hotel-broker"
    ],
    glossary: [
      "/glossary/iom",
      "/glossary/bov",
      "/glossary/noi",
      "/glossary/pip"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Get the document checklist for your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets builds the data room before the asset goes to market, so the questions a buyer asks in week 18 already have answers."
};

export default page;
