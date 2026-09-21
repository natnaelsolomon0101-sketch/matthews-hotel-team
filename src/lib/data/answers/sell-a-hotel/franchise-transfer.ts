/**
 * What happens to my franchise agreement when I sell my hotel?
 * Answer page: /sell-a-hotel/franchise-transfer
 *
 * Every brand figure on this page was read out of that brand's own 2026
 * franchise disclosure document in the run that wrote this file
 * (2026-09-21). Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "franchise-transfer",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Hotel Franchise Transfer When You Sell",
  h1: "What happens to my franchise agreement when I sell my hotel?",
  description:
    "Your hotel franchise agreement does not transfer. What the brand charges, how long consent takes and what it can require, from 2026 disclosure documents.",
  lastUpdated: "2026-09-21",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What happens to my staff and franchise agreement when I sell my hotel?",
    "Can I take over an existing franchise agreement when I buy a branded hotel?",
    "How does franchise approval factor into a hotel purchase timeline?",
    "What's the actual difference between a hotel brand and a hotel franchise?",
    "Do hotel loans require a franchise comfort letter?"
  ],
  answer:
    "Your franchise agreement does not move to the buyer. In the Hilton, Choice and Hyatt systems the buyer applies for a new agreement and yours terminates at closing.[1][2][3] Hilton and Hyatt each give the brand 60 days from a completed application to answer.[1][3] Hilton's 2026 change-of-ownership application fee is $200,000, and 2025 franchisees paid $25,000 to $200,000.[1]",
  takeaways: [
    "Your agreement does not transfer. The buyer signs the franchisor's then-current form, which can differ materially from yours, and yours ends on the closing date.[1][2][3]",
    "The brand-side cost is published. Hilton lists a $200,000 change-of-ownership fee plus a $10,000 PIP fee; Choice charges its affiliation fee or $45,000 on Quality, whichever is greater.[1][2]",
    "The clock starts at the application. Hilton and Hyatt each take up to 60 days from a completed one; Choice sets no outside date at all.[1][2][3]",
    "Hyatt wants 10 days' notice before you list the hotel, and holds a right of first offer where you signed its Exhibit C.[3]",
    "The buyer's lender will want a comfort letter. Hilton charges $3,500 to issue one and $1,500 to assign one.[1]"
  ],
  sections: [
    {
      h2: "Does my franchise agreement transfer to the buyer?",
      lead: "No. In the Hilton, Choice and Hyatt systems the buyer applies for a new franchise agreement on the franchisor's then-current form, and your agreement terminates at closing.[1][2][3]",
      body: "Owners often call this \"assigning the flag\". It is not. The Hampton agreement says that once the conditions to consent are met, the closing date is the termination date of your agreement and the effective date of the buyer's new one.[1] Choice's Quality agreement requires the transferee to sign Choice's then-current form and pay a re-licensing fee equal to the then-current affiliation fee for new franchisees.[2] Hyatt reserves the choice: at its option the buyer signs Hyatt's then-current agreement, which Item 17 says may be materially different, or signs documents assuming your rights and obligations.[3]\n\nSo part of what your buyer is underwriting does not exist yet. Royalty, program fee, term and brand standards come from the form the brand issues on the closing date, not the form you signed years ago. You can read those terms in advance: the Federal Trade Commission's Franchise Rule makes every franchisor publish a table in Item 17 covering approval of transfer, the conditions for approval, any right of first refusal and any option to purchase.[6]"
    },
    {
      h2: "What does a hotel franchise transfer cost?",
      lead: "Hilton lists $200,000 for a Hampton or Hilton Garden Inn change of ownership, Choice charges its then-current affiliation fee or $45,000 on Quality, whichever is greater, and Hyatt's change-of-ownership application fee is capped at $200,000.[1][2][3][4]",
      body: "List price and paid price are not the same number, and Hilton publishes the gap. The 2026 Hampton document discloses that in 2025 franchisees paid change-of-ownership application fees ranging from $25,000 to $200,000, and says Hilton may reduce the fee after considering criteria that include the hotel's market position, the property size and the number of hotels in the system the franchisee operates.[1] That is the only disclosed basis for a discount.\n\nSmaller line items sit around it. Hilton charges a $10,000 PIP fee to write the improvement plan for a change of ownership.[1] Hyatt's PIP preparation fee runs $5,000 to $10,000 and is due when the application is filed.[3] Choice's WoodSpring Suites transfer fee is its then-current affiliation fee or $60,000, whichever is greater, so the floor moves by brand inside one franchisor.[5]\n\nWho writes the check is a purchase agreement term. The Hampton agreement says \"you or Transferee\" must pay the PIP fee and all amounts due to Hilton at or before closing, and lets the two of you escrow the estimate.[1] Settle it in the letter of intent, before it becomes a closing-week argument."
    },
    {
      h2: "How long does franchise approval take?",
      lead: "Hilton and Hyatt each have 60 days from receipt of a completed and signed change-of-ownership application; Choice's Quality agreement sets no outside date and asks for 15 days' written notice from you.[1][2][3]",
      body: "The trap is the word completed. The Hampton agreement gives Hilton 60 days from receipt of the completed and signed application to consent or withhold consent, and says consent will not be unreasonably withheld.[1] Hyatt's section 12.4 uses the same structure.[3] Neither clock starts when the buyer downloads the form. It starts when the last missing item arrives.\n\nThere is notice you owe on top of that. Hilton's Item 17 requires 60 days' written notice of a change-of-ownership transfer, and Hilton Garden Inn carries the same notice and the same consent window.[1][4] Hyatt goes further and requires 10 days' written notice before you list the hotel or a controlling ownership interest for sale, which is worth finding before you sign a listing agreement.[3] Choice's Quality agreement requires at least 15 days' prior written notice and says consent will not be unreasonably withheld or delayed, but sets no date by which Choice must answer.[2]\n\nOur published playbook budgets 60 to 90 days for due diligence and closing together.[9] A 60-day brand clock fits inside that only if the application is filed at purchase agreement signing. Filed later, it is additive."
    },
    {
      h2: "What does the franchisor require before it consents?",
      lead: "A qualified buyer, a hotel that meets current standards, every dollar paid through closing, and no unresolved default.[1][2][3]",
      body: "The Hampton agreement sets out seven conditions, all to be satisfied at or before closing: the buyer submits a completed change-of-ownership application, pays the then-current application fee and signs the then-current form of agreement; you are not in default under that or any other Hilton agreement; you or the buyer pay the PIP fee and all amounts due; you conclude or secure any pending or threatened suit relating to the hotel; you and the buyer supply the information Hilton asks for; the buyer meets Hilton's then-current business requirements for new franchisees; and the buyer indemnifies Hilton over fees charged to guests.[1] Item 17 says those business requirements cover credit, background investigation, operations experience and prior business dealings, and that the buyer may not be a sanctioned person or a competitor.[1]\n\nChoice asks the buyer to meet its then-current qualifications, requires the hotel to comply with its brand image and standards, and requires all of the buyer's owners to sign Choice's then-current personal guaranty.[2] Hyatt adds a look-back: you must not have violated the agreement in the 60 days before you requested consent or between the request and closing, and the buyer's general manager has to complete brand training.[3]\n\nNone of that is fixable in the last week. A default you have been carrying, an open brand-standards issue or a live lawsuit about the hotel is a consent problem rather than a diligence problem, and it surfaces on the brand's schedule."
    },
    {
      h2: "Will the buyer get a PIP, and who pays for it?",
      lead: "Assume yes. Hilton charges $10,000 to prepare a change-of-ownership PIP and Hyatt $5,000 to $10,000, and the construction cost behind it is published nowhere.[1][3]",
      body: "The Hampton document says that in conversion, re-licensing or change-of-ownership situations you may be required to upgrade the property to meet Hilton's standards, with completion deadlines set in the PIP on a project-by-project basis.[1] Choice's Quality agreement conditions consent on the transferee signing a property improvement plan documenting the renovations it must complete.[2] Hyatt's Item 17 lists the buyer's agreement to renovate, remodel or expand the hotel and its furniture, fixtures and equipment as a condition of approval.[3]\n\nThe fee to write the PIP is small and published. The scope is large and is not, because it depends on the age and condition of your asset. No disclosure document can tell you what your PIP will cost. This is also the number that moves price: a seller who orders a written PIP scope letter before listing turns the largest unknown in the deal into a disclosed figure buyers underwrite once, rather than a surprise they re-trade on."
    },
    {
      h2: "Can the brand buy my hotel instead of approving my buyer?",
      lead: "Not in the Hilton or Choice systems. Hyatt has a right of first offer, but only on hotels where you signed its Exhibit C.[1][2][3]",
      body: "Item 17(n) of every disclosure document answers this, and the Franchise Rule requires it to be there.[6] Hilton answers \"None\" for Hampton and Hilton Garden Inn, with one caveat: you must notify Hilton if you want to market equity interests outside a permitted or change-of-ownership transfer.[1][4] Choice answers \"Not Applicable\" for both Quality and WoodSpring Suites.[2][5]\n\nHyatt is the exception, and narrower than owners assume. Exhibit C to its franchise agreement is a right of first offer for strategic markets, and it applies only if Hyatt and the franchisee both signed it. If they did, you must give Hyatt written notice of the material terms before selling the hotel or a controlling interest, and Hyatt has 30 days to elect whether to acquire.[3]\n\nA right of first offer is not a right of first refusal: it runs before you go to market rather than after you hold a signed contract, so it costs time rather than a buyer. Check Exhibit C of your own agreement before you engage a broker."
    },
    {
      h2: "Am I released when the sale closes?",
      lead: "Your franchise agreement ends on the closing date, but releasing your personal guaranty is a separate document and not every system promises one.[1][3]",
      body: "Under the Hampton agreement the closing date is the termination date of your agreement, which ends the forward obligations running with the license.[1] It does not erase what you already owe, and Hilton conditions consent on you concluding or securing any suit relating to the hotel.[1] Hyatt's Item 17 is blunter: you and your guarantors sign a termination and release if state law allows, and you remain liable.[3]\n\nSo the answer turns on a guaranty you signed, sometimes years ago, and on which state's law governs it. That is a question for your lawyer. We read the transfer and guaranty sections to price and sequence a deal. We do not give legal advice."
    },
    {
      h2: "What does the buyer's lender need from the brand?",
      lead: "A comfort letter. Hilton charges $3,500 to issue one and $1,500 to assign an existing one.[1]",
      body: "A comfort letter is the agreement between the franchisor and the lender about what happens to the flag if the lender ends up with the hotel. The Hampton agreement lets you mortgage the hotel or an equity interest without Hilton's consent when you are the sole borrower and the loan is not secured by other collateral. Anything else, including a collateral assignment of the franchise agreement, needs Hilton's consent, which it may issue as a lender comfort letter agreement that can include an estoppel and a general release of claims.[1]\n\nThe brand documents anticipate SBA debt. The Hampton agreement requires you and the buyer to escrow Hilton's estimated fees for disbursement at closing if the buyer has SBA financing, and points at SBA's Standard Operating Procedure 50 10 for the lender paperwork.[1] The current origination SOP is version 8, effective June 1, 2025; version 8.1 takes effect October 1, 2026, so a deal closing this autumn may be underwritten under one and funded under the other.[7] Budget the comfort letter into the closing timeline as well as the closing statement."
    },
    {
      h2: "What happens to my staff?",
      lead: "For most single-asset hotel sales the federal WARN Act does not reach the transaction at all, because it applies only to employers with 100 or more employees, excluding part-time.[10]",
      body: "The threshold is in the regulation: a WARN employer employs 100 or more people excluding part-time, or 100 or more including part-time who together work at least 4,000 hours a week before overtime.[10] A single select-service hotel is usually well under that. A portfolio seller, or an owner whose entity employs staff across several properties, may not be.\n\nWhere WARN does apply, a sale splits the duty by date. The seller gives notice of any plant closing or mass layoff up to and including the effective date of the sale, and the buyer gives notice of any that takes place after it.[11] If the seller knows of definite buyer plans for a closing or mass layoff within 60 days of purchase, it may give notice as the buyer's agent when empowered to do so, though the responsibility still sits with the buyer.[11]\n\nSeveral states run their own versions with lower headcounts, which are not covered here, and employment law is not something we advise on. The franchise agreement says nothing about your staff: it licenses a brand, it is not an employment contract. In practice the buyer brings its own management company."
    }
  ],
  table: {
    caption:
      "Hotel franchise change-of-ownership terms, from each brand's own 2026 disclosure document",
    columns: [
      "Brand (issuance date)",
      "Change-of-ownership fee",
      "Notice you owe",
      "Brand's deadline to answer",
      "Right of first refusal or offer"
    ],
    rows: [
      [
        "Hampton, Hilton (March 30, 2026)",
        "$200,000 list; 2025 payments ran $25,000 to $200,000[1]",
        "60 days' written notice[1]",
        "60 days from a completed application[1]",
        "None[1]"
      ],
      [
        "Hilton Garden Inn, Hilton (March 30, 2026)",
        "$200,000 list[4]",
        "60 days' written notice[4]",
        "60 days from a completed application[4]",
        "None[4]"
      ],
      [
        "Quality, Choice (April 1, 2026, amended May 20, 2026)",
        "Then-current affiliation fee or $45,000, whichever is greater[2]",
        "15 days' prior written notice[2]",
        "Not stated; consent not to be unreasonably withheld or delayed[2]",
        "Not applicable[2]"
      ],
      [
        "WoodSpring Suites, Choice (April 1, 2026, amended May 20, 2026)",
        "Then-current affiliation fee or $60,000, whichever is greater[5]",
        "15 days' prior written notice[5]",
        "Not stated; consent not to be unreasonably withheld or delayed[5]",
        "Not applicable[5]"
      ],
      [
        "Hyatt House, Hyatt (March 27, 2026, amended August 5, 2026)",
        "Change-of-ownership application fee, capped at $200,000[3]",
        "10 days before you list the hotel for sale[3]",
        "60 days from a completed application[3]",
        "Right of first offer, only where Exhibit C was signed; 30 days to elect[3]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' September 2026 rate sheet puts the SBA 7(a) maximum variable rate at 10.00% as of September 17, 2026. That is the rate the worked example below uses to price the brand fees a buyer finances.[8]"
  },
  workedExample: {
    label: "Hypothetical: 110-key Hampton Inn selling for $14.5 million",
    body: "Hypothetical. The brand figures are Hilton's published 2026 list prices for the Hampton brand.[1] At list, the change of ownership costs a $200,000 franchise application fee, a $10,000 PIP fee and a $3,500 lender comfort letter, which is $213,500, or 1.47% of a $14,500,000 price. Now take the bottom of the range Hilton discloses for 2025: a $25,000 application fee, so $25,000 plus $10,000 plus $3,500 is $38,500, or 0.27% of the same price. The spread is $175,000, which is 1.21% of the price. Funded inside an SBA 7(a) acquisition loan at the September 17, 2026 maximum variable rate of 10.00% over a 25-year amortization, that $175,000 costs about $1,590 a month, or roughly $19,100 a year.[8] None of it includes the construction cost of the PIP, which is specific to the property and is published in no disclosure document."
  },
  faq: [
    {
      q: "Does my hotel franchise agreement transfer to the buyer?",
      a: "No. In the Hilton, Choice and Hyatt systems the buyer applies for a new franchise agreement on the franchisor's then-current form, and your agreement terminates on the closing date.[1][2][3] Hyatt may instead let the buyer assume yours, at Hyatt's option.[3]"
    },
    {
      q: "How much is a hotel franchise transfer fee?",
      a: "Hilton lists $200,000 for a Hampton or Hilton Garden Inn change of ownership, though 2025 franchisees paid $25,000 to $200,000.[1][4] Choice charges its then-current affiliation fee or $45,000 on Quality, whichever is greater.[2]"
    },
    {
      q: "How long does franchise approval take on a hotel sale?",
      a: "Hilton and Hyatt each have 60 days from receipt of a completed and signed change-of-ownership application.[1][3] Choice's Quality agreement sets no outside date and says consent will not be unreasonably withheld or delayed.[2]"
    },
    {
      q: "Can the franchisor block my hotel sale?",
      a: "It can withhold consent, though Hilton, Choice and Hyatt all say consent will not be unreasonably withheld.[1][2][3] The usual grounds are a buyer who fails the brand's qualification test, or a hotel out of compliance."
    },
    {
      q: "Does the brand have a right of first refusal on my hotel?",
      a: "Hilton and Choice both answer no in Item 17 of their 2026 documents.[1][2] Hyatt has a right of first offer, but only where you signed its Exhibit C, and it then has 30 days to elect.[3]"
    },
    {
      q: "Will the buyer have to do a PIP?",
      a: "Assume so. Hilton charges $10,000 to prepare a change-of-ownership PIP and Hyatt's preparation fee runs $5,000 to $10,000.[1][3] The construction cost is property-specific and no disclosure document publishes it."
    },
    {
      q: "Who pays the franchise transfer fee, buyer or seller?",
      a: "The purchase agreement decides. Hilton's Hampton agreement says you or the transferee must pay the PIP fee and all amounts due at or before closing, so the brand does not mind who writes the check.[1]"
    },
    {
      q: "Does the WARN Act apply when I sell my hotel?",
      a: "Only if you employ 100 or more people, excluding part-time.[10] In a sale the seller gives notice for any closing or mass layoff up to the sale date and the buyer gives it after.[11] State rules can be stricter."
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "2026 Hampton Franchise Disclosure Document (issuance date March 30, 2026), Items 5, 6 and 17 and Franchise Agreement sections 12.2 and 12.4",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-21"
    },
    {
      n: 2,
      label:
        "2026 Quality Franchise Disclosure Document (April 1, 2026, as amended May 20, 2026), Items 6 and 17 and Franchise Agreement section 9",
      url: "https://www.cards.commerce.state.mn.us/documents/%7B5055B19E-0000-C316-BD49-E91CD982D575%7D/download?documentClass=FRANCHISE_REGISTRATIONS&contentSequence=0",
      publisher:
        "Choice Hotels International, via Minnesota Department of Commerce CARDS",
      accessed: "2026-09-21"
    },
    {
      n: 3,
      label:
        "2026 Hyatt House Franchise Disclosure Document (March 27, 2026, as amended August 5, 2026), Items 5, 6 and 17 and Franchise Agreement section 12.4 and Exhibit C",
      url: "https://www.cards.commerce.state.mn.us/documents/%7B1023FB9F-0000-C81F-BD9C-6AD05228A886%7D/download?documentClass=FRANCHISE_REGISTRATIONS&contentSequence=0",
      publisher:
        "Hyatt Franchising, L.L.C., via Minnesota Department of Commerce CARDS",
      accessed: "2026-09-21"
    },
    {
      n: 4,
      label:
        "2026 Hilton Garden Inn Franchise Disclosure Document (issuance date March 30, 2026), Items 6 and 17 and Franchise Agreement section 12.2.2",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-HGI.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-21"
    },
    {
      n: 5,
      label:
        "2026 WoodSpring Suites Franchise Disclosure Document (April 1, 2026, as amended May 20, 2026), Items 6 and 17 and Franchise Agreement section 9",
      url: "https://www.cards.commerce.state.mn.us/documents/%7B503B8D9E-0000-C31C-804D-870B9402993E%7D/download?documentClass=FRANCHISE_REGISTRATIONS&contentSequence=0",
      publisher:
        "Choice Hotels International, via Minnesota Department of Commerce CARDS",
      accessed: "2026-09-21"
    },
    {
      n: 6,
      label: "16 CFR 436.5(q), Item 17: Renewal, Termination, Transfer, and Dispute Resolution",
      url: "https://www.law.cornell.edu/cfr/text/16/436.5",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-21"
    },
    {
      n: 7,
      label:
        "SOP 50 10, Lender and Development Company Loan Programs (version 8 effective June 1, 2025; version 8.1 effective October 1, 2026)",
      url: "https://www.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-21"
    },
    {
      n: 8,
      label: "Hotel financing rate sheet, September 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-21"
    },
    {
      n: 9,
      label: "How to sell a hotel: the 24-week transaction process",
      url: "/process",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-21"
    },
    {
      n: 10,
      label: "20 CFR 639.3(a), definition of employer under the WARN Act",
      url: "https://www.law.cornell.edu/cfr/text/20/639.3",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-21"
    },
    {
      n: 11,
      label: "20 CFR 639.4(c), who must give notice in the sale of a business",
      url: "https://www.law.cornell.edu/cfr/text/20/639.4",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-21"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/franchise-agreement-expiration",
      "/sell-a-hotel/how-long-it-takes",
      "/sell-a-hotel/documents-needed",
      "/sell-a-hotel/how-to-sell-a-hotel"
    ],
    glossary: [
      "/glossary/franchise-agreement",
      "/glossary/franchise-fdd",
      "/glossary/comfort-letter",
      "/glossary/pip"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Talk to us about selling your hotel",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets asks for the transfer section of the franchise agreement early, because the brand's fee and its 60-day clock both change what a buyer is really paying.[1]"
};

export default page;
