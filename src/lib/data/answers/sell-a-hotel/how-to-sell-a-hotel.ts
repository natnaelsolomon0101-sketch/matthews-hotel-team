/**
 * What is the step-by-step process for selling a hotel?
 * Answer page: /sell-a-hotel/how-to-sell-a-hotel
 *
 * Converted from geo/07-pages/sell-a-hotel__how-to-sell-a-hotel.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "how-to-sell-a-hotel",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "How to Sell a Hotel: Step by Step",
  h1: "What is the step-by-step process for selling a hotel?",
  description: "The 24-week hotel disposition process in detail: every stage, who drives it, what can go wrong, and where deals actually die.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What's the step-by-step process for selling a hotel?",
    "How do I sell a hotel I own?",
    "Can I sell my hotel without a broker?",
    "What's the best time of year to list a hotel for sale?",
    "How does a hotel call for offers work?",
    "What happens between accepted offer and closing on a hotel?",
    "How many buyers actually see my hotel?"
  ],
  answer: "Eight stages over roughly 24 weeks in our published playbook, as of September 2026: value opinion, package, targeted marketing, call for offers, best and final, purchase agreement, due diligence, close.[1] Franchise approval runs in parallel with due diligence. Hilton's 2025 Hampton agreement gives the brand 60 days from a completed application to decide.[2] In our experience, failed deals usually fail over financial discrepancies, not price.",
  takeaways: [
    "Twenty-four weeks is the plan in our playbook.[1] Franchise approval is the variable that stretches it.",
    "A call for offers on a fixed date creates competition. Rolling offers do not.",
    "In our experience, deals die in due diligence over an unreconciled T-12 more often than over price.",
    "Seasonality matters less than readiness. A packaged asset beats a well-timed unpackaged one.",
    "Selling without a broker is possible and it narrows the buyer pool to people who found you."
  ],
  sections: [
    {
      h2: "What happens in each stage?",
      lead: "Value opinion, package, marketing, call for offers, PSA, due diligence and franchise approval in parallel, then close.",
      body: "The value opinion, typically a broker opinion of value, sets the number everything else tests against. The package stage builds the confidential information memorandum: financials, photos, market context and brand position. In our playbook, marketing runs from week 3 to week 8 against a targeted buyer list under NDA. The call for offers collects bids on a common date in weeks 8 to 9, and a best-and-final round with the top two or three bidders follows in week 10.[1] Once a buyer is selected, the purchase and sale agreement gets negotiated and signed, the deposit goes hard, and due diligence and franchise approval begin on parallel tracks. Closing, the final stage, is mostly mechanical: funding, title transfer, and FF&E and inventory settlement."
    },
    {
      h2: "How does a call for offers actually work?",
      lead: "The broker sets a common due date, collects offers on the same terms, then runs a best-and-final round with the top two or three bidders.",
      body: "A fixed date matters because it forces every serious buyer to commit at the same time, rather than negotiating one at a time against a moving target. The Matthews Hotel Index for Q1 2026 shows the transaction counts and cap-rate bands the buyer list is built from,[3] which is what tells a broker how many qualified buyers to expect for a given asset in a given market. After offers come in, the broker typically shortlists two or three and asks for a best-and-final, sometimes with a request to firm up financing contingencies or shorten the diligence period. Rolling offers, where the seller negotiates whoever calls first, in our experience usually leave money on the table because no buyer is bidding against a deadline."
    },
    {
      h2: "What happens after I accept an offer?",
      lead: "A purchase and sale agreement, a hard deposit, and the start of due diligence and franchise approval on parallel tracks.",
      body: "The PSA sets the price, the deposit, the diligence period, and the conditions to closing. Once the deposit goes hard, typically after an initial inspection period, the buyer's diligence team and the franchise application both start moving. This is the stage where sequencing choices matter most: a buyer who files the franchise application the day the PSA is signed finishes weeks ahead of one who waits until diligence clears."
    },
    {
      h2: "Where do hotel deals usually die?",
      lead: "In due diligence, most often because the trailing twelve-month P&L does not reconcile to bank statements.",
      body: "A buyer's accountant will trace reported NOI back to bank deposits and vendor payments. When owner-paid personal expenses, one-time items, or unrecorded concessions show up below the line, the buyer either re-trades the price or walks. An undisclosed PIP that surfaces mid-diligence does similar damage, not because of the dollar amount but because it makes the buyer question every other number in the package. Franchise approval stalling, a buyer's financing resizing after the appraisal, and a property condition assessment under ASTM E2018 finding more deferred maintenance than expected[4] round out the common failure points, shown with timing and prevention in the table above."
    },
    {
      h2: "How does franchise approval fit in?",
      lead: "It should start at PSA signing and run alongside due diligence. Hilton's 2025 Hampton agreement gives the brand 60 days from a completed application to consent.[2]",
      body: "The Hampton agreement, for example, requires the buyer to meet the brand's requirements for new franchisees, submit a change of ownership application, sign the current franchise agreement and agree to requested upgrades before the transfer can close.[2] In our experience, turnaround varies by brand and by how experienced the buyer's operating platform is; a first-time hotel owner takes longer to clear than an existing multi-unit franchisee of the same brand. The practical lesson is sequencing, not speed: starting the application at PSA signing rather than waiting for diligence to clear is worth about a month on the hypothetical calendar below."
    },
    {
      h2: "Is there a best time of year to list?",
      lead: "Readiness matters more than season. A packaged, clean asset listed in a slow month outsells an unready one listed at the ideal time.",
      body: "Buyers underwrite trailing performance and forward bookings regardless of calendar month, and a targeted marketing process reaches the same buyer list in January as in June. What does move the needle is having the document package, the PIP status letter and a reconciled T-12 ready before the first buyer conversation, covered in full at [Documents needed to sell a hotel](/sell-a-hotel/documents-needed)."
    },
    {
      h2: "Can I do this without a broker?",
      lead: "Yes, and the buyer pool narrows to people who already know the asset exists, which usually means fewer bidders and less price tension.",
      body: "An owner-direct sale is legal and happens most often when the buyer is already known. What a broker adds is underwriting discipline, a wider and more current buyer list, and a negotiated call-for-offers structure that creates competition. Whether that trade is worth the fee, and what questions to ask before hiring one, is covered honestly at [How do I choose a hotel broker?](/sell-a-hotel/how-to-choose-a-hotel-broker)"
    }
  ],
  table: {
    caption: "Where hotel deals fail, and the fix (weeks on our playbook calendar)",
    columns: [
      "Failure point",
      "What it looks like",
      "When it shows up",
      "How to prevent it"
    ],
    rows: [
      [
        "T-12 does not reconcile",
        "Buyer's audit finds NOI overstated",
        "Due diligence, week 16",
        "Reconcile to bank statements before you list"
      ],
      [
        "Undisclosed PIP",
        "Scope letter arrives mid-diligence",
        "Week 14 to 18",
        "Request the scope letter before marketing"
      ],
      [
        "Franchise approval stalls",
        "Buyer's application sits with the brand",
        "Week 16 to 24",
        "Start the application at PSA signing"
      ],
      [
        "Buyer financing falls out",
        "Lender resizes after appraisal",
        "Week 18 to 22",
        "Vet the buyer's lender, not just the buyer"
      ],
      [
        "Deferred maintenance",
        "PCA finds more than expected",
        "Week 15",
        "Get your own PCA first"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 shows the transaction counts and cap-rate bands the buyer list is built from.[3]"
  },
  workedExample: {
    label: "Hypothetical: a 24-week calendar",
    body: "Hypothetical. Engagement signed January 6. Weeks 1 to 2, value opinion delivered: January 20. Weeks 3 to 5, package complete: February 10. Weeks 6 to 11, marketing and tours: March 24. Week 12, call for offers: March 31. Weeks 13 to 14, best and final, buyer selected: April 14. Weeks 15 to 17, PSA signed, deposit hard-dated: May 5. Weeks 18 to 23, due diligence and franchise approval in parallel: June 16. Week 24, close: June 23. Add four weeks if the franchise application starts at the end of due diligence instead of at PSA signing. That one sequencing choice is worth a month."
  },
  faq: [
    {
      q: "How long does it take to sell a hotel?",
      a: "About 24 weeks from engagement to close in our published playbook, as of September 2026, for a prepared seller.[1] Franchise approval and due diligence run in parallel across the back half."
    },
    {
      q: "What is a call for offers?",
      a: "A fixed date by which all interested buyers submit offers on the same terms, followed by a best-and-final round with the top bidders. It creates competitive tension that rolling offers do not."
    },
    {
      q: "Can I sell a hotel without a broker?",
      a: "Yes. It narrows the buyer pool to people who already know the asset is available and puts the underwriting and negotiation work on the owner."
    },
    {
      q: "What is the best time of year to sell a hotel?",
      a: "Readiness matters more than season. A hotel with a clean T-12 and a written PIP scope letter sells faster in a slow month than an unready one at the ideal time."
    },
    {
      q: "What happens during hotel due diligence?",
      a: "The buyer audits the T-12, orders a property condition assessment and an ALTA/NSPS survey,[5] reviews the franchise agreement and PIP status, and verifies title. Our playbook budgets 60 to 90 days for diligence and closing together.[1]"
    },
    {
      q: "Why do hotel deals fall apart?",
      a: "In our experience, most often the trailing twelve-month P&L does not reconcile to bank statements, an undisclosed PIP surfaces, or the buyer's financing resizes after the appraisal comes in."
    },
    {
      q: "When does franchise approval start?",
      a: "At purchase and sale agreement signing, ideally, so it runs alongside due diligence instead of after it. In our experience, starting it late is a common cause of a delayed close."
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
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-17"
    },
    {
      n: 4,
      label: "E2018-24 Standard Guide for Property Condition Assessments",
      url: "https://store.astm.org/e2018-24.html",
      publisher: "ASTM International",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "ALTA/NSPS Land Title Survey Standards (2026 standards, effective February 23, 2026)",
      url: "https://www.alta.org/topics/topic-land-survey-standards",
      publisher: "American Land Title Association",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/how-long-it-takes",
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
    label: "Talk through your timeline",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets publishes this timeline at /process and runs against it, which is why the franchise application starts at PSA signing on our deals."
};

export default page;
