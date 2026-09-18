/**
 * Can I sell a hotel that sits on a ground lease?
 * Answer page: /sell-a-hotel/selling-a-hotel-on-a-ground-lease
 *
 * Written 2026-09-18. Seller's side. The definition lives at
 * /glossary/ground-lease and is linked, not re-covered. Sources fetched and
 * read 2026-09-18. SOP page numbers are the SOP's own printed page numbers.
 * Worked example arithmetic checked by script.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "selling-a-hotel-on-a-ground-lease",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Selling a Hotel on a Ground Lease: What Changes",
  h1: "Can I sell a hotel that sits on a ground lease?",
  description: "Yes, you sell the leasehold. How remaining term, ground rent, landlord consent, the buyer's lender, the brand and 1031 rules shape price and buyers.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How do I sell my hotel?",
    "What documents do I need to sell my hotel?",
    "Can I sell a hotel that sits on a ground lease?",
    "My hotel is on leased land with 28 years left. Will a buyer be able to get a loan?",
    "Does a ground lease lower the value of my hotel?",
    "Can a 1031 exchange buyer buy my leasehold hotel?",
    "Should I extend my ground lease before I sell my hotel?"
  ],
  answer: "Yes. You sell your leasehold: the building, the business and the right to use the land for the lease term. Lenders and brands test that term. As of September 18, 2026, an SBA 504 loan requires the lease, with tenant-controlled options, to run at least as long as the debenture, 25 years on our rate sheet.[1][2] A leasehold with 30 years or more to run is like-kind to real estate.[3]",
  takeaways: [
    "What you own is a leasehold. At the end of the lease the improvements go back to the landowner unless the lease says otherwise, so remaining term is the first number every buyer asks for.",
    "Ground rent is paid before debt service, so it lowers NOI dollar for dollar and lowers value by the rent divided by the cap rate.",
    "SBA publishes its leasehold rules. 504: remaining term including tenant-controlled options at least equal to the debenture term.[1] 7(a): the ground lease must contain specific lender protections.[4]",
    "Hilton's 2026 Hampton franchise agreement accepts a long-term ground leasehold with a term equal to the franchise term.[5]",
    "Read the assignment clause before you list. If the landowner must consent to a sale, that consent is on your critical path."
  ],
  sections: [
    {
      h2: "What exactly am I selling?",
      lead: "A hotel on a ground lease is sold as a leasehold interest: the buyer takes an assignment of your ground lease and buys the building, the furniture and the business.",
      body: "Under a ground lease the landowner keeps the land and you, the tenant, own and operate the improvements for the lease term. The term, the rent and what happens at expiration are all in the lease. The basics are defined at [Ground Lease](/glossary/ground-lease).\n\nA sale therefore has a third party that a fee simple sale does not: the landowner. The buyer steps into your lease, pays the ground rent, and takes on the expiration date. Everything that follows on this page comes from those three facts.\n\nThe sale process is otherwise the same as any hotel sale, and it is laid out at `/sell-a-hotel/how-to-sell-a-hotel`."
    },
    {
      h2: "Does a ground lease lower my hotel's value?",
      lead: "Yes, in two ways: the rent reduces NOI, and buyers apply a higher cap rate to income that ends when the lease does.",
      body: "The first effect is arithmetic. Ground rent is an operating cost paid ahead of the mortgage. Each dollar of rent is a dollar less NOI, and at a given cap rate the value lost is the rent divided by that cap rate. Rent that escalates with inflation or with hotel revenue keeps taking a larger share.\n\nThe second effect is judgment. A fee simple owner has the income forever. A leasehold owner has it until expiration, and then the building reverts. The shorter the remaining term, the more a buyer discounts. No public source publishes a leasehold cap rate premium for hotels, so we do not print one. The Matthews Hotel Index for Q1 2026 puts fee simple select-service cap rates at 7.50 to 8.75 percent across 14 markets, and a leasehold prices outside that band by an amount that depends on the term and the rent.[6] How cap rates work is covered at `/hotel-valuation/hotel-cap-rates`.\n\nYou can test the rent effect with `/tools/hotel-value-estimator`: run it once with NOI before ground rent and once after."
    },
    {
      h2: "Can my buyer get a loan on a leasehold hotel?",
      lead: "Yes, if the remaining term is long enough and the lease protects the lender. The SBA programs publish their tests, and other lenders set their own.",
      body: "SBA 504. A borrower may use 504 proceeds on land leased from an unrelated lessor if the remaining term of the lease, including options to renew exercisable only by the lessee, equals or exceeds the term of the debenture, the borrower assigns its interest in the lease to the CDC, and the loan is secured by a recorded lien against the leasehold estate.[1] The debenture on the current Matthews Hotel Markets rate sheet is 25 years.[2]\n\nSBA 7(a). SOP 50 10 8 says that where loan proceeds finance improvements on a leasehold interest in land, the ground lease must include, at a minimum, clauses covering the tenant's right to encumber the leasehold, no modification or cancellation of the lease without the lender's approval, the lender's right to acquire the leasehold at foreclosure and reassign it without the landowner unreasonably withholding consent, the right to sublease, a share of hazard insurance and condemnation proceeds, and the lender's rights on the tenant's default or termination (p. 54).[4] A 7(a) real estate loan can run up to 25 years (p. 120).[4]\n\nBanks, CMBS lenders and life companies do not publish a minimum remaining term. A practical reading of the SBA list is that any leasehold lender wants the same protections. If your lease lacks them, the fix is an amendment or an estoppel from the landowner, and it takes time. The buyer's side of loan sizing is at `/tools/hotel-loan-sizing-calculator`."
    },
    {
      h2: "Will the brand approve a buyer on leased land?",
      lead: "Hilton's 2026 Hampton franchise agreement requires fee simple title or a long-term ground leasehold for a term equal to the franchise term.[5]",
      body: "Section 5.1.15 of the Hampton franchise agreement in Hilton's 2026 disclosure document says the franchisee must own fee simple title, or a long-term ground leasehold interest for a term equal to the term of the franchise agreement, or at Hilton's request have the fee owner or another acceptable party guarantee the franchisee's obligations.[5] Hilton's franchise application asks for the recorded ground lease and its expiration date.[5]\n\nOn a sale, the buyer applies for a change of ownership, and the new term is generally the remaining term of the existing agreement or another term Hilton approves (p. 69).[5] So line up three dates before you go to market: ground lease expiration, franchise expiration and the buyer's likely loan maturity. If the franchise is also near its end, read `/sell-a-hotel/franchise-agreement-expiration`. Other brands have their own rules, stated in their own disclosure documents."
    },
    {
      h2: "Can a 1031 exchange buyer buy my leasehold?",
      lead: "Yes if the leasehold has 30 years or more to run, under the Treasury regulation's own example.",
      body: "Section 1031 applies to real property held for business or investment that is exchanged for real property of like kind.[3] The regulations list a leasehold among the interests that are real property for section 1031, and give as an example of a like-kind exchange a leasehold of a fee with 30 years or more to run exchanged for real estate.[3]\n\nThe text of that example does not say how renewal options count. A buyer's tax counsel will have a view, and a seller with 27 years plus options should expect the question. A leasehold under 30 years is a smaller buyer pool, because exchange buyers may pass.\n\nThe hotel's furniture and equipment are personal property and sit outside section 1031 either way. The buyer's side is covered at `/hotel-financing/1031-exchange-hotels`."
    },
    {
      h2: "Should I extend the ground lease or buy the land before I sell?",
      lead: "If the remaining term is short enough to fail a lender's or a brand's test, fixing the lease first is often worth the negotiation. Ask the landowner early.",
      body: "There are three moves. Extend the term or add tenant-controlled options, so the lease clears the 25-year SBA test and the 30-year exchange example.[1][3] Amend the lease to add the lender protections in the SBA list.[4] Or buy the land and sell fee simple.\n\nEach one is a negotiation with a landowner who knows you need it. Start before the hotel is on the market, because a buyer who finds the problem in diligence will price it against you or walk. A public landowner such as an airport authority, a university or a city may need board approval, which can add time. The documents a buyer will ask for, including the recorded lease, every amendment and a current landlord estoppel, are listed at `/sell-a-hotel/documents-needed`.\n\nAlso read the lease for an assignment clause, a landowner's right of first refusal or first offer, and any transfer fee. Those terms decide how confidential the process can be, which is discussed at `/sell-a-hotel/off-market-vs-marketed`."
    }
  ],
  table: {
    caption: "Who tests the ground lease when a leasehold hotel is sold, as of September 18, 2026",
    columns: [
      "Who is testing",
      "Published term test",
      "What else they look for"
    ],
    rows: [
      [
        "SBA 504 lender and CDC",
        "Remaining term, including options only the tenant can exercise, at least equal to the debenture term[1]",
        "Assignment of the lease to the CDC; recorded lien on the leasehold[1]"
      ],
      [
        "SBA 7(a) lender",
        "Real estate loan term up to 25 years (p. 120)[4]",
        "Right to encumber, no changes without lender approval, foreclosure and reassignment rights, insurance and condemnation proceeds (p. 54)[4]"
      ],
      [
        "Bank, CMBS or life company lender",
        "Not published",
        "Not published; ask the lender before going to market"
      ],
      [
        "Brand (Hampton, 2026 agreement)",
        "Long-term ground leasehold for a term equal to the franchise term[5]",
        "Recorded ground lease with the application[5]"
      ],
      [
        "1031 exchange buyer",
        "Leasehold with 30 years or more to run is like-kind to real estate[3]",
        "Furniture and equipment are outside section 1031[3]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet lists the SBA 504 debenture at 25 years, priced at 6.54 percent on September 10, 2026.[2] That 25-year term is the number a leasehold's remaining term is measured against for a 504 buyer."
  },
  workedExample: {
    label: "Hypothetical: pricing the rent and testing the term",
    body: "Hypothetical. A 110-key hotel earns $1,200,000 before ground rent. Ground rent is $150,000 a year, so NOI is $1,200,000 - $150,000 = $1,050,000. The rent takes 12.5 percent of the income before rent.\n\nValue. At an assumed 8.50 percent leasehold cap rate, value is $1,050,000 / 0.085 = $12,352,941. The rent alone accounts for $150,000 / 0.085 = $1,764,706 of value at that rate. The cap rate is an assumption for illustration, not a quoted market figure.\n\nTerm tests, with 27 years remaining and one 10-year option that only the tenant can exercise:\n\nSBA 504: 27 + 10 = 37 years, which is at least the 25-year debenture. Pass.[1]\n\nBrand: a buyer taking the remaining 12 years of the franchise term needs a leasehold of at least 12 years. Pass.[5]\n\n1031 buyer: 27 years to run is under the 30 in the regulation's example, and the example does not address options. Uncertain, so some exchange buyers will pass.[3]\n\nIf the landowner agrees to extend the base term by 5 years, to 32, all three tests pass without relying on the option. That is the case for negotiating the extension before listing."
  },
  faq: [
    {
      q: "Can I sell my hotel if I do not own the land?",
      a: "Yes. You sell the leasehold: the building, the furniture, the business and an assignment of the ground lease. Check the lease for a landowner consent requirement or a right of first refusal before you list."
    },
    {
      q: "How many years need to be left on a ground lease to sell a hotel?",
      a: "There is no single rule. SBA 504 needs the term, with tenant-controlled options, to at least equal the debenture term, 25 years on the current rate sheet.[1][2] The 1031 regulation's example uses 30 years.[3] Other lenders do not publish a minimum."
    },
    {
      q: "Does a ground lease lower the value of my hotel?",
      a: "Yes. Ground rent reduces NOI, and the value lost is the rent divided by the cap rate. At an assumed 8.50 percent, $150,000 of rent is about $1.76 million. Buyers also discount income that ends at expiration."
    },
    {
      q: "Will a bank lend on a hotel with a ground lease?",
      a: "It can. SBA lists what a 7(a) ground lease must contain: the right to mortgage the leasehold, no changes without lender approval, foreclosure and reassignment rights, and insurance and condemnation proceeds.[4] Expect any leasehold lender to look for the same."
    },
    {
      q: "Can a 1031 exchange buyer purchase a hotel on a ground lease?",
      a: "Under the Treasury regulation's example, a leasehold with 30 years or more to run is like-kind to real estate.[3] Under 30 years, expect exchange buyers to ask their tax counsel, and some to pass."
    },
    {
      q: "Will Hilton approve a buyer for a hotel on leased land?",
      a: "Hilton's 2026 Hampton franchise agreement accepts a long-term ground leasehold with a term equal to the franchise term, and the application asks for the recorded lease and its expiration date.[5]"
    },
    {
      q: "Should I extend my ground lease before selling my hotel?",
      a: "If the remaining term fails a lender, brand or 1031 test, it is worth trying. Ask the landowner before you go to market. A buyer who finds a short lease in diligence will reprice or walk."
    },
    {
      q: "What ground lease documents will a hotel buyer ask for?",
      a: "The recorded lease and every amendment, the rent schedule and escalations, proof rent is current, the option terms, the leasehold mortgage provisions, and a current estoppel from the landowner. See /sell-a-hotel/documents-needed."
    }
  ],
  sources: [
    {
      n: 1,
      label: "13 CFR 120.870, Leasing Project Property",
      url: "https://www.law.cornell.edu/cfr/text/13/120.870",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "26 U.S. Code section 1031; 26 CFR 1.1031(a)-1(c) (leasehold with 30 years or more to run) and 26 CFR 1.1031(a)-3 (definition of real property)",
      url: "https://www.law.cornell.edu/cfr/text/26/1.1031(a)-1",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025): ground lease clauses (Section A, Ch. 3, p. 54) and 7(a) maturities (Section B, Ch. 1, p. 120)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "2026 Hampton Franchise Disclosure Document: Item 17 (p. 69), Franchise Agreement section 5.1.15, and the franchise application (Exhibit F)",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/how-to-sell-a-hotel",
      "/sell-a-hotel/documents-needed",
      "/sell-a-hotel/franchise-agreement-expiration",
      "/sell-a-hotel/what-buyers-look-for"
    ],
    glossary: [
      "/glossary/ground-lease",
      "/glossary/noi",
      "/glossary/cap-rate",
      "/glossary/sba-504"
    ],
    data: [
      "/rates",
      "/research/mhi/q1-2026",
      "/tools/hotel-value-estimator",
      "/tools/hotel-loan-sizing-calculator"
    ]
  },
  cta: {
    label: "Talk through a leasehold sale",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells hotels and places hotel debt, so the same desk can tell you how a buyer's lender will read your ground lease before you list."
};

export default page;
