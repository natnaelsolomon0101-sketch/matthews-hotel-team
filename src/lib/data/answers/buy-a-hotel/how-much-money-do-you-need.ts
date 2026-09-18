/**
 * How much money do I need to buy a hotel?
 * Answer page: /buy-a-hotel/how-much-money-do-you-need
 *
 * Written 2026-09-18. Every figure was read in its source on that date.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "how-much-money-do-you-need",
  cluster: "buy-a-hotel",
  isHub: false,
  title: "How Much Money Do You Need to Buy a Hotel?",
  h1: "How much money do I need to buy a hotel?",
  description: "The cash a hotel purchase takes: the SBA 504 equity minimum, why conventional equity is lender-set, plus franchise fees, PIP, closing costs and reserves.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "How much cash do I need to buy a select-service hotel?",
    "What financing options exist for a first-time hotel buyer?",
    "What down payment do I need for an SBA hotel loan?",
    "What's the minimum down payment for an SBA loan on a hotel?",
    "Can I get 100% financing on a hotel purchase?",
    "Can I get an SBA loan to buy a hotel?"
  ],
  answer: "There is no single number. As of September 2026, the one equity minimum written into federal regulation for a hotel purchase is SBA 504: at least 15 percent of project cost, or 20 percent for a business two years old or less.[1][2] Conventional lenders set their own and do not publish it. Then add the brand's application fee, $200,000 on Hilton's 2025 Hampton schedule.[3]",
  takeaways: [
    "SBA 504 requires at least 15 percent of project cost from a hotel buyer, and 20 percent if the business has operated two years or less.[1][2]",
    "Banks, CMBS lenders, life companies and debt funds do not publish an equity requirement. Get it in writing from the lender you are talking to.[4]",
    "The down payment is not the check. Franchise fees, a PIP, closing costs and reserves sit on top of it.",
    "Hilton's 2025 Hampton disclosure lists a $200,000 change of ownership application fee and a $10,000 PIP fee. Franchisees paid $0 to $200,000 in 2024.[3]",
    "Anyone holding 20 percent or more of an SBA borrower generally signs a personal guarantee.[5]"
  ],
  sections: [
    {
      h2: "What is the minimum down payment on a hotel?",
      lead: "Under SBA 504 it is 15 percent of project cost, or 20 percent if the business has operated two years or less. No other lender type publishes a minimum.[1][2]",
      body: "The 504 rule comes from two documents read together. The regulation sets the borrower's contribution at 15 percent when the project is a limited or single purpose building, and at 20 percent when the borrower has also operated for two years or less.[1] SBA's operating procedures list hotels, motels and other lodging facilities as limited or special purpose property.[2] An ordinary building with an established operator needs 10 percent, so a hotel always sits above that floor.[1]\n\nThese are minimums. A lender or Certified Development Company can ask for more. If you are buying through a newly formed company, ask the CDC early whether SBA will treat the borrower as a business that has operated two years or less, because that one answer moves the minimum from 15 to 20 percent."
    },
    {
      h2: "How much do conventional lenders want down?",
      lead: "They do not say in public. No bank, CMBS lender, life company or debt fund publishes its loan-to-value ceiling for hotels.[4]",
      body: "Our September 2026 rate sheet marks maximum loan-to-value as not yet published for every lender type except SBA, because no lender type prints one.[4] What is public is the cost of the money. The 10-year Treasury was 4.94 percent on September 17, 2026, SOFR was 3.85 percent for the same day, and Prime has been 7.00 percent since September 17, 2026.[4] A lender's equity requirement follows from its own sizing tests on the hotel's income, so two lenders can look at the same hotel and ask for different down payments. The way to find your number is to ask for it in a written term sheet. The comparison of lender types is at [Which lenders finance hotels?](/hotel-financing/hotel-lenders-by-type), and the sizing tests are explained at [What do lenders require for a hotel loan?](/hotel-financing/loan-requirements)."
    },
    {
      h2: "What does SBA 7(a) require?",
      lead: "A 7(a) loan caps at $5 million, and SBA's program page gives no single equity percentage for it.[6]",
      body: "SBA describes 7(a) interest rates as negotiated between borrower and lender, subject to SBA maximums.[6] With Prime at 7.00 percent, the maximum on a variable-rate 7(a) loan over $350,000 is 10.00 percent.[4] The detailed 7(a) underwriting rules, including how much of the borrower's own money must go in, live in SBA's operating procedures, and the lender applies them alongside its own credit policy.[2] Treat any 7(a) down payment figure you hear as one lender's answer, and get it in writing. The two programs are compared side by side at [SBA 7(a) versus 504 for a hotel](/hotel-financing/sba-7a-vs-504)."
    },
    {
      h2: "What does the brand charge a buyer?",
      lead: "An application fee and a PIP fee up front, both listed in the brand's Franchise Disclosure Document. On Hilton's 2025 Hampton schedule that is $200,000 and $10,000.[3]",
      body: "A buyer does not take over the seller's franchise agreement. The buyer applies for a new one. Hilton's 2025 Hampton disclosure lists a $200,000 Franchise Application Fee for a change of ownership, due with the application, and a $10,000 fee to prepare the property improvement plan.[3] The same document says the fee is sometimes reduced, and that franchisees paid between $0 and $200,000 for change of ownership applications in 2024.[3] If the sale does not close, Hilton refunds the fee less a $7,500 processing charge.[3] If your lender wants a comfort letter from the brand, Hampton charges $3,500 to process it.[3]\n\nOther brands publish different schedules. Hilton's 2025 disclosures list a $150,000 change of ownership application fee for Tapestry Collection and $75,000 for Spark.[7][8] Read Item 5 of the current disclosure document for the brand you are buying. Do not carry one brand's fee over to another."
    },
    {
      h2: "How much should I hold back for a PIP?",
      lead: "Whatever the brand's written scope says, priced by a contractor. No public source gives a reliable per-room figure for a change of ownership PIP.",
      body: "Hilton's Hampton disclosure says a buyer in a change of ownership may be required to upgrade the hotel to current standards, on deadlines the brand sets in the PIP.[3] The scope is specific to the building, so the cost is too. Order the PIP inspection early in due diligence, get the scope in writing, and have a contractor price it before your deposit goes hard. The financing side, including loans that fund the work after closing, is covered at [How do I finance a PIP or renovation?](/hotel-financing/pip-and-renovation-loans). The worked example below uses a hypothetical per-room figure only to show the arithmetic."
    },
    {
      h2: "What closing costs and reserves come on top?",
      lead: "Title insurance, a survey, legal fees, an appraisal, a property condition assessment, a Phase I environmental report, lender fees, and working capital for the first months.",
      body: "None of these has a published national price. Each comes from a quote: the title company, the surveyor, your attorney, the lender's fee letter. Ask for the quotes during due diligence so the closing statement holds no surprises. The third-party reports are described at [What due diligence do I need before buying a hotel?](/buy-a-hotel/due-diligence-checklist).\n\nReserves are the item first-time buyers skip. A hotel pays staff, utilities and franchise fees from the first day, while receivables and seasonal swings work against the new owner. Lenders often require a reserve at closing as well. Neither amount is published, so ask the lender for its requirement and set your own working capital target on top of it."
    },
    {
      h2: "Can I buy a hotel with no money down?",
      lead: "Not with SBA 504, because the borrower contribution is a regulatory minimum.[1]",
      body: "The 504 regulation requires the borrower to contribute at least 15 percent of project cost on a hotel.[1][2] Conventional lenders size to the hotel's income and to value, which leaves a gap the buyer fills. Partners can fill part of it, and so can a seller note where the senior lender allows one, but both come with conditions. Under SBA rules, holders of at least a 20 percent ownership interest generally must guarantee the loan, so bringing in partners spreads the guarantee along with the equity.[5]"
    }
  ],
  table: {
    caption: "Where the cash goes when you buy a hotel, and what is public about each item (September 2026)",
    columns: [
      "Item",
      "Who sets it",
      "What is public"
    ],
    rows: [
      [
        "Equity, SBA 504",
        "Federal regulation",
        "At least 15% of project cost for a hotel, 20% if the business has operated two years or less[1][2]"
      ],
      [
        "Equity, SBA 7(a)",
        "SBA procedures and the lender",
        "Loan maximum of $5 million. No single equity percentage on SBA's program page[6]"
      ],
      [
        "Equity, conventional loan",
        "The lender",
        "Not published by any lender type[4]"
      ],
      [
        "Franchise application fee",
        "The brand's FDD, Item 5",
        "Change of ownership: $200,000 Hampton, $150,000 Tapestry, $75,000 Spark (2025 disclosures)[3][7][8]"
      ],
      [
        "PIP fee",
        "The brand's FDD",
        "$10,000 on Hampton's 2025 schedule[3]"
      ],
      [
        "PIP work",
        "The brand's written scope",
        "Property specific. Not published"
      ],
      [
        "Lender comfort letter",
        "The brand's FDD, Item 6",
        "$3,500 on Hampton's 2025 schedule[3]"
      ],
      [
        "Closing costs",
        "Title company, surveyor, counsel, lender, state",
        "Quotes only. No national figure"
      ],
      [
        "Reserves and working capital",
        "The lender and you",
        "Not published"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet publishes the one hotel leverage ceiling that is written down anywhere: SBA rules cap a 504 hotel structure at 85% of project cost. It marks maximum LTV as not yet published for every other lender type, and it puts the 25-year 504 debenture at 6.54% as of September 10, 2026.[4]"
  },
  workedExample: {
    label: "Hypothetical: cash to close on an $8.0M, 80-key Hampton under SBA 504",
    body: "Hypothetical. An 80-key Hampton Inn at an $8,000,000 purchase price, financed under SBA 504.\n\nThe stack. The bank's first lien must be at least 50 percent of project cost on a hotel, so $4,000,000.[9] The borrower contributes 15 percent, or $1,200,000.[1] The CDC debenture covers the remaining 35 percent, $2,800,000, which is under the $5 million hotel cap.[2]\n\nThe brand. Hampton's 2025 schedule lists a $200,000 change of ownership application fee, a $10,000 PIP fee and a $3,500 comfort letter fee, for $213,500.[3]\n\nAssumptions for the rest. Closing costs at 2 percent of price, $160,000. Working capital of $150,000. A PIP at $10,000 per room, $800,000. All three are assumptions for the arithmetic, not market figures.\n\nTotal cash: $1,200,000 plus $213,500 plus $160,000 plus $150,000 plus $800,000 equals $2,523,500. That is 2.1 times the down payment. If SBA treats the borrower as a business that has operated two years or less, the contribution rises to 20 percent, $1,600,000, and the total to $2,923,500.[1] Ask the lender whether the PIP can be included in project cost, because that changes how much of it you fund in cash."
  },
  faq: [
    {
      q: "How much do I need to put down on a hotel?",
      a: "Under SBA 504, at least 15 percent of project cost, or 20 percent if the business has operated two years or less.[1][2] Conventional lenders set their own requirement and do not publish it, so ask for it in a written term sheet."
    },
    {
      q: "Can I buy a hotel with 10 percent down?",
      a: "Not under SBA 504. The 10 percent minimum applies to ordinary buildings with an established operator. A hotel is limited or special purpose property, so the minimum is 15 percent.[1][2]"
    },
    {
      q: "What is the franchise application fee when I buy a branded hotel?",
      a: "It depends on the brand. Hilton's 2025 Hampton disclosure lists $200,000 for a change of ownership and says franchisees paid $0 to $200,000 in 2024.[3] Read Item 5 of the current disclosure document for your brand."
    },
    {
      q: "Does the seller or the buyer pay for the PIP?",
      a: "The brand requires the buyer to agree to the upgrades as a condition of the new franchise agreement.[3] Who bears the cost is a price negotiation. Buyers usually deduct a priced PIP from their offer."
    },
    {
      q: "Do I have to personally guarantee a hotel loan?",
      a: "On an SBA loan, holders of at least a 20 percent ownership interest generally must guarantee it.[5] Conventional lenders set their own recourse terms, and those terms are not published."
    },
    {
      q: "What interest rate should I budget for?",
      a: "As of September 17, 2026, the 10-year Treasury is 4.94 percent, SOFR is 3.85 percent and Prime is 7.00 percent. The SBA 7(a) maximum is 10.00 percent and the 25-year 504 debenture priced at 6.54 percent.[4] Conventional spreads are not published."
    },
    {
      q: "How large a hotel can an SBA loan finance?",
      a: "A 7(a) loan caps at $5 million.[6] A 504 debenture on a hotel caps at $5 million, with a bank first lien alongside it, so the total project can be larger.[2]"
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
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section C, Ch. 1: debenture limits (p. 350) and Limited or Special Purpose Property, which lists hotels (pp. 354-355)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Items 5, 6, 7 and 17",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "13 CFR 120.160, Loan conditions (guarantees)",
      url: "https://www.law.cornell.edu/cfr/text/13/120.160",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "7(a) loan program: terms, conditions, and eligibility",
      url: "https://www.sba.gov/sba-lenders/#7a-terms",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "2025 Tapestry Collection by Hilton Franchise Disclosure Document (issued March 30, 2025), Item 5",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Tapestry.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "2025 Spark by Hilton Franchise Disclosure Document (issued March 30, 2025), Item 5",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Spark.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 9,
      label: "13 CFR 120.920, Required participation by Third Party Lenders",
      url: "https://www.law.cornell.edu/cfr/text/13/120.920",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/buy-a-hotel",
    siblings: [
      "/buy-a-hotel/due-diligence-checklist",
      "/buy-a-hotel/first-hotel-no-experience",
      "/buy-a-hotel/branded-vs-independent"
    ],
    glossary: [
      "/glossary/pip",
      "/glossary/dscr",
      "/glossary/noi"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Ask what your deal needs in cash",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets builds the full sources and uses for a buyer before the offer goes in, so the equity check is known before the deposit is at risk."
};

export default page;
