/**
 * How long does it take to sell a hotel through a broker?
 * Answer page: /sell-a-hotel/how-long-it-takes
 *
 * Converted from geo/07-pages/sell-a-hotel__how-long-it-takes.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "how-long-it-takes",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "How Long Does It Take to Sell a Hotel?",
  h1: "How long does it take to sell a hotel through a broker?",
  description: "How long a hotel sale takes stage by stage, what stretches the timeline, and how to compress it without leaving money behind.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How long does it take to sell a hotel through a broker?",
    "How long does due diligence take once I have a buyer for my hotel?",
    "How does franchise approval factor into a hotel purchase timeline?",
    "How fast can I sell a hotel if I need to?",
    "What's the fastest a hotel sale can close?",
    "How long does a hotel stay on the market?",
    "What slows down a hotel closing?"
  ],
  answer: "About 24 weeks from engagement to close in our published playbook, as of September 2026: roughly 12 weeks to a selected buyer, then about 12 weeks of contract, due diligence and franchise approval.[1] The brand clock is set by contract. Hilton's 2025 Hampton agreement gives the franchisor 60 days from a completed application to consent.[2] Preparation moves the front half most.",
  takeaways: [
    "Twenty-four weeks is the plan in our published playbook.[1]",
    "Due diligence length is a negotiated contract term. A Hampton franchise transfer can take up to 60 days for the brand to decide, so run it alongside diligence, not after.[2]",
    "Preparation compresses the front half. Nothing compresses the brand.",
    "A fast sale to a known buyer trades weeks for dollars, and usually more dollars than owners expect.",
    "The clock that matters most is the franchise application date."
  ],
  sections: [
    {
      h2: "How long does the whole process take?",
      lead: "About 24 weeks for a prepared seller in our published playbook,[1] shorter with a known buyer and longer for an unprepared seller.",
      body: "In our experience, the spread between a fast sale and a slow one is mostly preparation, not market conditions. A seller who arrives with a reconciled trailing twelve-month P&L, a current STAR report and a written PIP scope letter compresses the front half of the process by weeks. A seller who is still assembling financials when marketing starts loses that time and more, because a buyer who senses disorganization in the package underwrites more conservatively and negotiates harder."
    },
    {
      h2: "How long does each stage take?",
      lead: "In our playbook, the package runs weeks 1 to 2, marketing weeks 3 to 8, offers and contract weeks 8 to 12, and due diligence through close weeks 12 to 24.[1]",
      body: "The table above breaks out our planning estimates for prepared, typical and unprepared sellers, stage by stage. They are estimates from our own deal planning, not market statistics. The biggest single swing is marketing to a selected buyer: 6 weeks for a prepared, well-packaged asset versus 10 weeks when the broker is still filling gaps in the data room while trying to run a process. The back half is more fixed, because due diligence and franchise approval both have external actors, the buyer's team and the brand, setting the pace rather than the seller."
    },
    {
      h2: "How long is due diligence on a hotel?",
      lead: "As long as the purchase agreement allows. Our playbook budgets 60 to 90 days for due diligence and closing together.[1]",
      body: "A buyer's diligence team works from a standard list: financial audit against bank statements, a property condition assessment under the ASTM E2018 standard,[3] a current ALTA/NSPS survey,[4] title review, and confirmation of franchise standing. Any one of those turning up a surprise, most often the financial audit, extends the period. A seller who has already run a PCA and reconciled the T-12 before listing removes the two most common sources of delay before the buyer ever asks."
    },
    {
      h2: "How long does franchise approval take?",
      lead: "Hilton's 2025 Hampton agreement gives the brand 60 days from a completed application to consent, so the application should start at PSA signing and finish alongside due diligence.[2]",
      body: "The window varies by brand and by agreement, so check the transfer section of your own franchise agreement.\n\nThe Hampton agreement, for example, requires the buyer to meet the brand's requirements for new franchisees, sign the current form of franchise agreement and agree to requested upgrades before the brand consents.[2] In our experience, a buyer who already operates that brand clears faster than a first-time franchisee. The variable owners control is not the brand's timeline but when the clock starts: filing at PSA signing rather than waiting for due diligence to clear is the most valuable timing decision in the whole process, worked through in the example below."
    },
    {
      h2: "What makes a sale take longer?",
      lead: "An unreconciled T-12, an undisclosed PIP, a franchise application filed late, or a buyer whose financing was not vetted before the PSA.",
      body: "Each of these adds weeks in a predictable place: financial discrepancies surface in the first two weeks of diligence, an undisclosed PIP surfaces when the buyer requests brand correspondence, franchise delay compounds whenever the application starts late, and financing problems typically surface right after the appraisal comes back, inside the diligence window."
    },
    {
      h2: "How fast can I sell if I have to?",
      lead: "Faster than a marketed process, with a known buyer who has cash or pre-arranged financing, but speed usually costs price.",
      body: "Compressing the timeline usually means going direct to a small number of buyers who already know the asset and skipping a broad marketing process, which removes the competitive tension that a call for offers creates. It can also mean accepting a buyer's financing contingency timeline rather than negotiating it down. Sellers under real time pressure, an estate, a maturing loan, a partnership dispute, should expect to give something on price for the speed."
    },
    {
      h2: "What can I do now to shorten it?",
      lead: "Reconcile the T-12 to bank statements, get a written PIP scope letter, and order your own property condition assessment before you list.",
      body: "These three actions remove the three most common causes of delay before a buyer ever sees the asset. None of them require a broker engagement to start; an owner can do all three months before deciding to sell, which is also good portfolio hygiene independent of a transaction."
    }
  ],
  table: {
    caption: "Hotel sale timeline: prepared versus unprepared seller (our planning estimates)",
    columns: [
      "Stage",
      "Prepared seller",
      "Typical",
      "Unprepared seller"
    ],
    rows: [
      [
        "Value opinion",
        "1 week",
        "2 weeks",
        "4 weeks, waiting on financials"
      ],
      [
        "Package and data room",
        "2 weeks",
        "3 weeks",
        "6 weeks"
      ],
      [
        "Marketing to selected buyer",
        "6 weeks",
        "8 weeks",
        "10 weeks"
      ],
      [
        "PSA negotiation",
        "2 weeks",
        "3 weeks",
        "4 weeks"
      ],
      [
        "Due diligence",
        "30 days",
        "45 days",
        "60 days plus re-trade"
      ],
      [
        "Franchise approval",
        "parallel",
        "parallel",
        "sequential, adds 4 to 6 weeks"
      ],
      [
        "Total",
        "about 16 weeks",
        "about 24 weeks[1]",
        "about 32 weeks"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 reports observed transaction counts by market, which is the demand side of how fast a given asset moves.[5]"
  },
  workedExample: {
    label: "Hypothetical: what sequencing franchise approval is worth",
    body: "Hypothetical. Purchase price $17.0 million, closing targeted for week 24. Parallel path: the buyer files the franchise application at PSA signing, week 17. The brand responds in 45 days, week 23.5. Due diligence ends week 23. Close at week 24. Sequential path: the buyer waits until due diligence clears at week 23 to apply. The brand responds 45 days later, week 29.5. Close at week 30. That is six weeks. On a $17.0 million deal with an $11.0 million loan at 7.25 percent, the seller's carrying cost for those six weeks is roughly $11.0 million times 7.25 percent times 6 over 52 weeks, or about $92,000, before operating risk and before the chance that something changes in the meantime. It is one email, filed six weeks earlier."
  },
  faq: [
    {
      q: "How long does it take to sell a hotel?",
      a: "About 24 weeks from engagement to close in our published playbook, as of September 2026, for a prepared seller with a clean trailing twelve-month P&L and a written PIP scope letter.[1]"
    },
    {
      q: "How long is due diligence on a hotel sale?",
      a: "As long as the purchase agreement allows. Our playbook budgets 60 to 90 days for due diligence and closing together.[1] A re-trade, a title issue or a Phase I environmental follow-up can stretch it."
    },
    {
      q: "How long does hotel franchise approval take?",
      a: "Hilton's 2025 Hampton agreement gives the brand 60 days from a completed application to consent.[2] Other brands and agreements vary. Start it at PSA signing so it runs alongside due diligence."
    },
    {
      q: "What is the fastest a hotel can sell?",
      a: "Faster than a marketed process when a known buyer has financing already arranged, though speed typically trades against price and buyer-pool depth."
    },
    {
      q: "Why do hotel sales take longer than other commercial deals?",
      a: "Franchise approval adds a step apartment and office deals do not have, and a hotel's operating-business character means diligence covers labor, brand standards and PIP status, not just real estate."
    },
    {
      q: "Can I speed up a hotel sale?",
      a: "Yes. Reconcile the T-12 before listing, get a written PIP scope letter in hand, and start the franchise application at PSA signing instead of waiting for due diligence to clear."
    },
    {
      q: "How long should my hotel be on the market?",
      a: "Our playbook runs active marketing from week 3 to week 8, with the call for offers in weeks 8 to 9.[1] A long stretch without meaningful offers usually signals a pricing or packaging problem."
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
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Items 5, 6 and 17 and Franchise Agreement section 12.2.2",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "E2018-24 Standard Guide for Property Condition Assessments",
      url: "https://store.astm.org/e2018-24.html",
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
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-17"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/how-to-sell-a-hotel",
      "/sell-a-hotel/documents-needed",
      "/sell-a-hotel/broker-fees",
      "/sell-a-hotel/how-to-choose-a-hotel-broker"
    ],
    glossary: [
      "/glossary/bov",
      "/glossary/iom",
      "/glossary/pip"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Get a timeline for your asset",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets publishes the 24-week timeline at /process, so a client can hold us to it."
};

export default page;
