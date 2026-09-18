/**
 * How do I buy a hotel?
 * Cluster hub: /buy-a-hotel
 *
 * Written 2026-09-18. Every figure was read in its source on that date.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "index",
  cluster: "buy-a-hotel",
  isHub: true,
  title: "How to Buy a Hotel: The 2026 Buyer's Guide",
  h1: "How do I buy a hotel?",
  description: "How buying a hotel works in 2026: the cash it takes, the loan, the brand's approval, due diligence, and whether a 1031 exchange fits.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How do I buy my first hotel?",
    "What's the process for making an offer on a hotel?",
    "How much cash do I need to buy a select-service hotel?",
    "Can I use a 1031 exchange to buy a hotel?",
    "Should I buy an independent hotel or a branded hotel?",
    "What due diligence items should I check before buying a hotel?",
    "How do I find off-market hotel deals?",
    "What financing options exist for a first-time hotel buyer?"
  ],
  answer: "Buying a hotel takes three approvals and one contract: a lender, a brand if the hotel is flagged, an operator the brand accepts, and a purchase agreement that gives you time to test the numbers. As of September 2026, SBA 504 requires at least 15 percent down on a hotel,[1][2] and Hilton's 2025 Hampton agreement requires 60 days' written notice of a change of ownership.[3]",
  takeaways: [
    "A hotel is an operating business inside a building. You are underwriting both, and so is your lender.",
    "The one equity minimum in federal regulation is SBA 504: 15 percent of project cost on a hotel, 20 percent if the business has operated two years or less.[1][2]",
    "You do not inherit the seller's franchise. You apply for your own, pay the fee and accept the brand's upgrade list.[3]",
    "Our published sale playbook puts offers in weeks 8 to 12 and due diligence through closing in weeks 12 to 24, typically 60 to 90 days.[4]",
    "A 1031 exchange can buy a hotel, but only the real property qualifies, and the 45-day and 180-day clocks do not move.[5][6]"
  ],
  sections: [
    {
      h2: "What are the steps to buy a hotel?",
      lead: "Seven, in order: set your criteria and capital, line up the operator and lender, find the hotel, make an offer, sign the purchase agreement, run due diligence with the franchise application alongside it, and close.",
      body: "The common mistake is to start at step three. A seller choosing between offers picks the buyer who can show equity, a lender conversation already under way and an operator the brand will accept. Get those ready before you tour anything.\n\nHotels reach the market two ways: a marketed process run by a broker, which ends in a call for offers on a fixed date, and quiet conversations with owners who would sell at a price. Our published sale playbook shows the seller's side of the first path. Offers and buyer selection run from week 8 to week 12, and due diligence through closing runs from week 12 to week 24, typically 60 to 90 days.[4] Current listings are on the [hotels for sale](/listings) page, and buyer representation is described at [acquisition advisory](/services/acquisition-advisory)."
    },
    {
      h2: "How much money do I need?",
      lead: "The down payment plus the brand's fees, the PIP, closing costs and reserves. Only one of those has a minimum written into federal regulation.",
      body: "SBA 504 requires a hotel buyer to contribute at least 15 percent of project cost, or 20 percent if the business has operated two years or less.[1][2] Banks, CMBS lenders, life companies and debt funds set their own equity requirements and do not publish them, which our September 2026 rate sheet records as not yet published.[7] On top of equity, a branded purchase carries an application fee, $200,000 for a change of ownership on Hilton's 2025 Hampton schedule, and a property improvement plan.[3] The full stack, with a worked example, is at [How much money do I need to buy a hotel?](/buy-a-hotel/how-much-money-do-you-need)."
    },
    {
      h2: "How do I finance it?",
      lead: "With an SBA loan on a smaller hotel, or a bank, CMBS, life company or debt fund loan on a larger or more stable one. Each type reads the same hotel differently.",
      body: "As of September 17, 2026, the 10-year Treasury is 4.94 percent, SOFR is 3.85 percent and Prime is 7.00 percent. The SBA 7(a) maximum allowable rate is 10.00 percent, and the 25-year SBA 504 debenture priced at 6.54 percent on September 10.[7] Spreads over those indexes are not published by any lender type, so the only real quote is a written one. Start at [How does hotel financing work?](/hotel-financing), compare the SBA programs at [SBA 7(a) versus 504](/hotel-financing/sba-7a-vs-504), and test a purchase price against a loan with the [DSCR calculator](/tools/dscr-calculator)."
    },
    {
      h2: "What due diligence do I need?",
      lead: "Financials restated to the USALI format, the STR report, a property condition assessment, a survey, a Phase I, the franchise application, the liquor license and the staffing plan.",
      body: "Each item has a public standard behind it, and several have outside parties who set their own pace. The checklist, with the standard and the owner of each item, is at [What due diligence do I need before buying a hotel?](/buy-a-hotel/due-diligence-checklist). The one to start on the day the purchase agreement is signed is the franchise application. Hilton's 2025 Hampton agreement requires 60 days' written notice of a change of ownership, and the buyer must meet the brand's requirements for new franchisees, sign the current form of agreement and agree to the requested upgrades.[3]"
    },
    {
      h2: "Can I buy a hotel with no hotel experience?",
      lead: "Yes, if someone qualified runs it. The brand approves the operator as well as the owner.",
      body: "Hilton's 2025 Hampton disclosure requires the hotel to be operated by the owner or by a management company Hilton has approved, and it lists operations experience among the requirements a buyer must meet.[3] Lenders do not publish an experience requirement. What the public documents say, and how a management company fills the gap, is at [How do I buy my first hotel with no hotel experience?](/buy-a-hotel/first-hotel-no-experience)."
    },
    {
      h2: "Should I buy a branded or an independent hotel?",
      lead: "A brand charges a share of rooms revenue for demand you would otherwise have to create. Whether that is a good trade depends on the market.",
      body: "Hilton's 2025 Hampton disclosure lists a 6 percent royalty and a 4 percent program fee on gross rooms revenue.[3] An independent keeps that money and carries its own marketing, distribution and reinvestment decisions. The fee schedules, the performance Hilton reports, and the cost of leaving a flag are at [Should I buy a branded or independent hotel?](/buy-a-hotel/branded-vs-independent)."
    },
    {
      h2: "Can I use a 1031 exchange to buy a hotel?",
      lead: "Yes. A hotel's real property is like-kind to other real property held for business or investment, and the exchange runs on two fixed deadlines.[5][6]",
      body: "You have 45 days from the sale of the property you gave up to identify the replacement, and the exchange must be completed within 180 days.[5] Since January 1, 2018, Section 1031 applies only to real property, so the furniture, fixtures and equipment in a hotel purchase do not qualify.[6] Those two facts shape a hotel exchange more than any other: the calendar is short for an asset that needs franchise approval, and part of the price falls outside the exchange. We keep the full answer on one page, with the statute, the regulations and a worked example: [Can I use a 1031 exchange to buy or sell a hotel?](/hotel-financing/1031-exchange-hotels). Talk to a tax adviser and a qualified intermediary before you sell."
    },
    {
      h2: "What is the hotel worth?",
      lead: "What its income supports at the cap rate buyers are paying for that segment and market, less the capital the building needs.",
      body: "The Matthews Hotel Index for Q1 2026 publishes cap-rate bands by segment across the 14 markets we cover.[8] Run the seller's income through your own adjustments before you apply any of them, because an owner-operated statement often leaves out a management fee and a reserve. The method is at [What is my hotel worth, and who decides?](/hotel-valuation), and the terms are defined at [cap rate](/glossary/cap-rate) and [NOI](/glossary/noi)."
    }
  ],
  table: {
    caption: "Buying a hotel, step by step, and what is public about each step (September 2026)",
    columns: [
      "Step",
      "What happens",
      "What is public"
    ],
    rows: [
      [
        "1. Criteria and capital",
        "Set size, segment, market and how much equity you have",
        "SBA 504 minimum: 15% of project cost on a hotel, 20% for a business two years old or less[1][2]"
      ],
      [
        "2. Operator and lender",
        "Pick a management company if needed. Open lender conversations",
        "Brand must approve the operator.[3] Lender terms are not published[7]"
      ],
      [
        "3. Find the hotel",
        "Marketed listings and direct owner conversations",
        "Cap-rate bands by segment and market[8]"
      ],
      [
        "4. Offer",
        "Letter of intent: price, deposit, diligence period, closing date",
        "Marketed sales take offers in weeks 8 to 12 of our playbook[4]"
      ],
      [
        "5. Purchase agreement",
        "Binding contract. File the franchise application at signing",
        "Hampton: 60 days' written notice, $200,000 application fee, $10,000 PIP fee[3]"
      ],
      [
        "6. Due diligence",
        "Financials, STR report, PCA, survey, Phase I, PIP scope, liquor license, staffing",
        "Standards listed on the due diligence page"
      ],
      [
        "7. Close",
        "Loan funds, title transfers, new franchise agreement takes effect",
        "Diligence through close: weeks 12 to 24, typically 60 to 90 days[4]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet gives a buyer the indexes every quote is struck against: the 10-year Treasury at 4.94% on September 17, 2026, SOFR at 3.85% for the same day, and Prime at 7.00%. It marks the spreads over them as not yet published.[7]"
  },
  workedExample: {
    label: "Hypothetical: when the franchise application is filed decides when you close",
    body: "Hypothetical. A buyer signs a purchase agreement on a Hampton Inn with a 45-day due diligence period and a closing 30 days after that, so closing is planned for day 75. Both periods are assumptions. Every contract sets its own.\n\nPath one. The seller gives Hilton notice and the buyer files the change of ownership application on day 0. The Hampton agreement requires 60 days' written notice,[3] so the notice period ends on day 60. Closing on day 75 holds, with 15 days to spare.\n\nPath two. The buyer waits until due diligence clears on day 45 to file. The notice period ends on day 105. Closing slips from day 75 to day 105 at the earliest, which is 30 days.\n\nThose 30 days are not free. The rate lock, the seller's patience and the deposit are all exposed for an extra month. The application fee is refundable, less a $7,500 processing charge, if the change of ownership does not occur,[3] so filing early puts $7,500 at risk to protect the whole calendar."
  },
  faq: [
    {
      q: "How much money do I need to buy a hotel?",
      a: "Under SBA 504, at least 15 percent of project cost, or 20 percent for a business two years old or less.[1][2] Conventional equity is set by the lender and not published. Add franchise fees, the PIP, closing costs and reserves."
    },
    {
      q: "Can I buy a hotel with an SBA loan?",
      a: "Yes. SBA's procedures classify hotels as limited or special purpose property under 504, which sets the 15 percent minimum contribution.[1][2] As of September 2026 the 7(a) maximum allowable rate is 10.00 percent.[7]"
    },
    {
      q: "How long does it take to buy a hotel?",
      a: "From a signed purchase agreement, our published sale playbook budgets 60 to 90 days for due diligence and closing.[4] Franchise approval and a liquor license can take longer, so start both at signing."
    },
    {
      q: "Do I take over the seller's franchise agreement?",
      a: "No. Under Hilton's 2025 Hampton agreement the buyer files a change of ownership application, pays the fee, signs the current form of franchise agreement and agrees to the brand's requested upgrades.[3]"
    },
    {
      q: "Can I use a 1031 exchange to buy a hotel?",
      a: "Yes, for the real property. You have 45 days to identify the hotel and 180 days to close.[5] Furniture, fixtures and equipment have not qualified since January 1, 2018.[6]"
    },
    {
      q: "Do I need a broker to buy a hotel?",
      a: "No. In a marketed sale the listing broker represents the seller. A buyer can hire its own adviser to source hotels, underwrite them and run the offer. Ask who pays that adviser before you sign anything."
    },
    {
      q: "How do I find off-market hotels?",
      a: "Through people who talk to owners every week: brokers, lenders and management companies. Owners respond to buyers who can show equity, a lender and an operator, so have all three ready."
    }
  ],
  sources: [
    {
      n: 1,
      label: "13 CFR 120.910, How much must the Borrower contribute?",
      url: "https://www.law.cornell.edu/cfr/text/13/120.910",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section C, Ch. 1: Limited or Special Purpose Property, which lists hotels (pp. 354-355)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Items 5, 6, 15 and 17",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "How to sell a hotel: the 24-week transaction process",
      url: "/process",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "26 U.S.C. Section 1031",
      url: "https://www.law.cornell.edu/uscode/text/26/1031",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Like-kind exchanges, real estate tax tips",
      url: "https://www.irs.gov/businesses/small-businesses-self-employed/like-kind-exchanges-real-estate-tax-tips",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/buy-a-hotel",
    siblings: [
      "/buy-a-hotel/how-much-money-do-you-need",
      "/buy-a-hotel/due-diligence-checklist",
      "/buy-a-hotel/first-hotel-no-experience",
      "/buy-a-hotel/branded-vs-independent"
    ],
    glossary: [
      "/glossary/pip",
      "/glossary/cap-rate",
      "/glossary/noi",
      "/glossary/dscr"
    ],
    data: [
      "/rates",
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Tell us what you want to buy",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets runs hotel sale processes from the seller's side, which is how we know what a winning buyer looks like."
};

export default page;
