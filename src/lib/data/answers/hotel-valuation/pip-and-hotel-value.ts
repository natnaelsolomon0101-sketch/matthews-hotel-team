/**
 * How does a PIP affect my hotel's value?
 * Answer page: /hotel-valuation/pip-and-hotel-value
 *
 * Written 2026-09-18. Worked-example arithmetic recomputed by script.
 * The financing side lives at /hotel-financing/pip-and-renovation-loans and
 * is linked, not repeated.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "pip-and-hotel-value",
  cluster: "hotel-valuation",
  isHub: false,
  title: "How Does a PIP Affect My Hotel's Value?",
  h1: "How does a PIP affect my hotel's value?",
  description: "A PIP lowers hotel value by its cost, the income lost during the work and a risk premium. The arithmetic, the appraisal rule and the break-even test.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How does a hotel PIP (property improvement plan) affect its value?",
    "How does a PIP affect the sale price of a hotel?",
    "Does having an open PIP kill my deal if I'm trying to sell?",
    "What is a PIP (property improvement plan) and who pays for it?",
    "How often do I have to do a PIP on a branded hotel?",
    "What are Hampton Inn's PIP requirements typically like?"
  ],
  answer: "A property improvement plan lowers value three ways: the cost of the work, the income lost while rooms are out of service, and a premium for the risk that scope grows. Buyers deduct all three from stabilized value. HVS wrote in April 2026 that older hotels facing a big renovation will likely trade above the normal 8.0 to 8.5 percent cap rate.[1]",
  takeaways: [
    "As-is value equals stabilized value, less PIP cost, less displaced income, less a risk premium. The deduction is larger than the contractor's bid.",
    "A sale usually triggers a PIP. Under Hilton's 2025 Hampton FDD the buyer must agree to the brand's request for upgrades as a condition of the transfer.[2]",
    "Appraisers make the same deduction. Federal minimum standards require appraisals to analyze and report deductions for proposed renovation.[3]",
    "A PIP only adds value if the NOI it produces, divided by the cap rate, exceeds what it cost. In the hypothetical below the break-even is a 12.4 percent NOI lift.",
    "How to pay for the work is a separate question, answered at /hotel-financing/pip-and-renovation-loans."
  ],
  sections: [
    {
      h2: "How do buyers price an open PIP?",
      lead: "They value the hotel as if the work were done, then subtract everything it takes to get there.",
      body: "The starting point is stabilized NOI divided by a cap rate. From that, a buyer subtracts the estimated cost of the PIP. Then it subtracts the income it expects to lose while floors are closed and the lobby is under construction. Then it adds a cushion, because renovation budgets tend to grow once walls are open and because the brand, not the owner, decides when the work passes. The size of that cushion is a negotiation, and no public source publishes it. The worked example below assumes 10 percent of PIP cost to show the arithmetic. A seller who treats the PIP as a dollar-for-dollar credit will be surprised by the offer."
    },
    {
      h2: "Why does selling my hotel trigger a PIP?",
      lead: "Because the buyer signs a new franchise agreement, and the brand can condition its approval on bringing the hotel to current standards.",
      body: "Hilton's 2025 Hampton Franchise Disclosure Document is a clear example. A sale is a Change of Ownership Transfer. The proposed buyer must apply, pay the franchise application fee, sign the then-current franchise agreement and agree to Hilton's request for upgrades to the hotel, which may include paying a PIP fee.[2] The fee to prepare the PIP is $10,000, which Hilton may waive or credit toward the application fee.[2] So a hotel with no open PIP today can still have one at the closing table. Ordering the brand's change-of-ownership PIP before going to market replaces a buyer's guess with a scope. What the process looks like from the seller's side is at [What is involved in selling a hotel?](/sell-a-hotel)"
    },
    {
      h2: "Do I face PIPs even if I never sell?",
      lead: "Yes. Brands can require renovations during the franchise term, on their own schedule.",
      body: "The 2025 Hampton FDD says Hilton may periodically require a franchisee to replace, modernize or upgrade furniture, fixtures, finishes and equipment to meet current standards, may use renovation schedules under its Fixed Renovation Cycle Management program, and that the franchisee bears the cost.[2] A buyer reads your renovation history against that cycle. A hotel that is early in its cycle carries less near-term capital than one that is due, and the second one is worth less at the same NOI. Deadlines and scope vary by brand and by agreement, so read your own. The definition and typical scope categories are at [/glossary/pip](/glossary/pip)"
    },
    {
      h2: "Does a PIP change my cap rate or my NOI?",
      lead: "Mostly neither. It is a capital deduction. But a large, uncertain renovation can also push a buyer toward a wider cap rate.",
      body: "The Matthews Hotel Index cap-rate bands describe stabilized, PIP-current hotels, 7.50 to 8.75 percent for select-service in Q1 2026.[4] The clean way to value a hotel with an open PIP is to use a band rate on post-renovation NOI and then deduct the capital. Some buyers instead apply a higher rate to current NOI. HVS describes the pattern in its April 2026 Market Pulse: older limited-service, select-service and full-service hotels facing a big renovation will likely trend above the 8.0 to 8.5 percent mark.[1] Be careful not to do both in full. Deducting the whole PIP and also widening the cap rate for the same PIP counts the cost twice, and a seller should push back when an offer does."
    },
    {
      h2: "How does an appraiser treat a PIP?",
      lead: "As a required deduction, often shown as separate as-is and prospective values.",
      body: "Federal minimum appraisal standards say an appraisal for a federally related transaction must analyze and report appropriate deductions and discounts for proposed construction or renovation.[3] The interagency appraisal guidelines add that for a loan financing renovation, a lender would generally request the as-is value and, as applicable, prospective values upon completion and upon stabilization.[5] For a hotel with a PIP, the as-is figure carries the deduction and the as-stabilized figure assumes the work is done and the hotel has recovered. Which one a lender sizes to depends on what it is funding. More on reading those numbers is at [Why did my hotel appraise for less than I expected?](/hotel-valuation/appraisal-lower-than-expected)"
    },
    {
      h2: "When does a PIP add value instead of subtracting it?",
      lead: "When the NOI it produces, capitalized, is worth more than the work cost. Many PIPs protect value more than they add to it.",
      body: "The test is arithmetic. Multiply the PIP cost by the cap rate. The result is the permanent NOI increase needed just to break even. A $2.4 million PIP at 8.25 percent needs $198,000 of new NOI every year. Some renovations clear that bar, usually when the hotel has been losing rate to newer competitors. Many do not, because much of a PIP replaces worn items the guest already expected. The honest case for those PIPs is defensive: the work keeps the flag, and losing the flag would cost more. Whether to do the work yourself or sell and let the buyer do it turns on your cost of capital, which is covered at [How do I finance a hotel PIP or renovation?](/hotel-financing/pip-and-renovation-loans)"
    }
  ],
  table: {
    caption: "How a PIP moves hotel value, line by line",
    columns: [
      "Component",
      "Direction",
      "How it is estimated",
      "Who has the evidence"
    ],
    rows: [
      [
        "PIP cost",
        "Deduction",
        "Contractor bids against the brand's written scope",
        "Seller, if the PIP was ordered before marketing"
      ],
      [
        "Displaced income",
        "Deduction",
        "Rooms out of service times expected occupancy and rate, less saved variable cost",
        "Buyer's model, from the construction schedule"
      ],
      [
        "Risk premium",
        "Deduction",
        "Negotiated. No public source publishes it",
        "Neither side. A firm bid shrinks it"
      ],
      [
        "Post-renovation NOI lift",
        "Addition, if real",
        "New NOI divided by the cap rate",
        "STR index history before and after similar renovations"
      ],
      [
        "Franchise application and PIP fees",
        "Deduction",
        "From the brand's FDD, $200,000 and $10,000 for Hampton in 2025[2]",
        "Public"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The cap-rate bands in the Matthews Hotel Index for Q1 2026, published by Matthews Hotel Markets, describe stabilized, PIP-current hotels: 7.50 to 8.75 percent for select-service across 14 markets. A hotel with an open PIP prices below what that band implies by the amount of the deduction.[4]"
  },
  workedExample: {
    label: "Hypothetical: a $2.4M PIP on a 120-key hotel",
    body: "Hypothetical. 120 keys, stabilized NOI of $1,600,000, an 8.25 percent cap rate. Stabilized value equals $1,600,000 divided by 0.0825, or $19.39 million, about $161,600 per key.\n\nThe brand's PIP is bid at $2,400,000, which is $20,000 per key in this hypothetical and not a market figure. The buyer models $180,000 of NOI lost during the work and adds a risk premium of 10 percent of PIP cost, $240,000. Both are assumptions. Total deduction is $2,820,000, which is 1.18 times the bid.\n\nAs-is value equals $19.39 million minus $2.82 million, or $16.57 million, about $138,100 per key.\n\nNow the upside test. If the renovation lifts NOI 8 percent, to $1,728,000, value after the work is $20.95 million. That is a gain of $1.55 million for $2.4 million spent. Break-even needs $198,000 of new NOI, a 12.4 percent lift. Below that, the PIP is the price of keeping the flag, not an investment that pays for itself."
  },
  faq: [
    {
      q: "How much does a PIP reduce my hotel's value?",
      a: "By more than its cost. Buyers deduct the bid, the income lost during the work and a risk premium. In the hypothetical on this page the total deduction is 1.18 times the bid."
    },
    {
      q: "Does an open PIP kill a hotel sale?",
      a: "No. It changes the price. Buyers of branded hotels expect a change-of-ownership PIP, and a written scope with bids makes the deduction smaller and the process faster."
    },
    {
      q: "Who pays for the PIP when a hotel sells?",
      a: "It is negotiated. Either the price falls and the buyer does the work, or the seller completes or escrows it before closing. See /hotel-financing/pip-and-renovation-loans for both structures."
    },
    {
      q: "Should I complete the PIP before I sell?",
      a: "Compare your cost to fund the work with the larger deduction a buyer will take. Owners with liquidity often come out ahead doing it. Owners without it usually should not borrow expensively to renovate for someone else."
    },
    {
      q: "Does a renovation always raise NOI enough to pay for itself?",
      a: "No. Multiply the PIP cost by the cap rate to get the NOI lift needed to break even. At 8.25 percent, a $2.4 million PIP needs $198,000 a year."
    },
    {
      q: "How does an appraiser handle a PIP?",
      a: "Federal minimum standards require the appraisal to analyze and report deductions for proposed renovation.[3] Expect an as-is value with the deduction and, where the loan funds the work, prospective values after it.[5]"
    },
    {
      q: "Will the brand require a PIP when I sell my Hampton Inn?",
      a: "Under the 2025 Hampton FDD, the buyer must agree to Hilton's request for upgrades as a condition of a change of ownership, and Hilton charges $10,000 to prepare the PIP.[2]"
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
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Items 5, 8 and 17",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "12 CFR 34.44, minimum appraisal standards",
      url: "https://www.law.cornell.edu/cfr/text/12/34.44",
      publisher: "Legal Information Institute, Cornell Law School",
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
      label: "Interagency Appraisal and Evaluation Guidelines, December 2010 (full text)",
      url: "https://www.fdic.gov/news/news/financial/2010/fil10082a.pdf",
      publisher: "OCC, Federal Reserve, FDIC, OTS and NCUA, via FDIC",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-valuation",
    siblings: [
      "/hotel-valuation/appraisal-lower-than-expected",
      "/hotel-valuation/branded-select-service-hotel-value",
      "/hotel-valuation/hotel-cap-rates",
      "/hotel-valuation/how-to-value-a-hotel",
      "/hotel-valuation/broker-opinion-of-value"
    ],
    glossary: [
      "/glossary/pip",
      "/glossary/noi",
      "/glossary/cap-rate"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Price your PIP before a buyer does",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets prices a PIP the way a buyer will, as cost plus displacement plus risk, before a hotel goes to market."
};

export default page;
