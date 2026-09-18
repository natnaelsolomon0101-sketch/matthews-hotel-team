/**
 * What due diligence do I need before buying a hotel?
 * Answer page: /buy-a-hotel/due-diligence-checklist
 *
 * Written 2026-09-18. Every figure was read in its source on that date.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "due-diligence-checklist",
  cluster: "buy-a-hotel",
  isHub: false,
  title: "Hotel Due Diligence Checklist for Buyers (2026)",
  h1: "What due diligence do I need before buying a hotel?",
  description: "A buyer's hotel due diligence checklist: STR report, USALI financials, PCA, ALTA survey, Phase I, franchise transfer, liquor license and WARN.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What due diligence items should I check before buying a hotel?",
    "How do buyers verify a hotel's reported NOI before closing?",
    "What red flags should I look for in a hotel's financials before buying?",
    "What's a T-12 and why do hotel buyers ask for one?",
    "Can I take over an existing franchise agreement when I buy a branded hotel?",
    "How does franchise approval factor into a hotel purchase timeline?",
    "Do hotel loans require a franchise comfort letter?",
    "What happens to my staff and franchise agreement when I sell my hotel?"
  ],
  answer: "Eight workstreams, run at the same time: the STR report, financials restated to the USALI format, a property condition assessment under ASTM E2018-24, an ALTA/NSPS survey, a Phase I under ASTM E1527-21, the franchise application, the liquor license and the staffing plan.[1][2][3][4] As of September 2026, Hilton's Hampton agreement requires 60 days' written notice of a change of ownership.[5]",
  takeaways: [
    "A hotel is real estate and an operating business. Diligence has to cover both.",
    "The standards are public: ASTM E2018-24 for the building, ASTM E1527-21 for the ground, the 2026 ALTA/NSPS standards for the survey, USALI for the books.[1][2][3][4]",
    "You do not inherit the franchise. Under Hilton's 2025 Hampton agreement the buyer applies, pays the fee, signs a new agreement and agrees to the upgrades.[5]",
    "A liquor license is a separate approval. California says most transfer investigations take about 55 to 65 days.[6]",
    "Our published sale playbook budgets 60 to 90 days for due diligence and closing together, so start every third-party report in week one.[7]"
  ],
  sections: [
    {
      h2: "How do I verify the hotel's income?",
      lead: "Rebuild the trailing twelve months from source documents, in the USALI format, and tie it to bank statements and tax returns.",
      body: "The Uniform System of Accounts for the Lodging Industry is the standard format for hotel financial statements. Its 12th revised edition was adopted on January 1, 2026.[2] Ask for three years of monthly profit and loss statements plus the trailing twelve months, then map every line to USALI departments so the hotel can be compared with others. An owner-operated hotel often shows no management fee, a family payroll that a new owner cannot match, and no reserve for replacing furniture and equipment. Each one overstates the income a buyer or lender will underwrite, and the worked example below shows how much that can move price.\n\nThen test the revenue. Tie monthly room revenue to the property management system's night audit reports, to occupancy tax filings and to bank deposits. Revenue that appears in the P&L and in none of those three is the red flag that matters most. Net operating income is defined at [NOI](/glossary/noi)."
    },
    {
      h2: "What does the STR report tell me?",
      lead: "How the hotel performs against its competitors on occupancy, rate and RevPAR, expressed as an index where 100 is fair share.",
      body: "Hilton's Hampton disclosure defines the measure plainly: RevPAR index is the hotel's RevPAR divided by its competitive set's RevPAR, times 100, and an index above 100 means the hotel takes more than its fair share.[5] Ask the seller for the monthly STAR reports covering the same three years as the financials. Look at the trend, not one month. A falling index with stable market RevPAR points at the hotel itself: condition, management or reviews. Check which hotels are in the competitive set too, because a set of weaker hotels flatters the index. The terms are defined at [RevPAR](/glossary/revpar) and [ADR](/glossary/adr). STR data is licensed, so the seller shares it under the confidentiality agreement and you cannot republish it."
    },
    {
      h2: "What physical and site reports do I need?",
      lead: "A property condition assessment, an ALTA/NSPS land title survey and a Phase I environmental site assessment. Most lenders will ask for all three.",
      body: "ASTM E2018-24 is the current standard guide for a baseline property condition assessment of commercial real estate.[1] The report lists physical deficiencies and the cost to cure them, which gives you a capital plan alongside the brand's PIP.\n\nThe 2026 ALTA/NSPS Land Title Survey standards took effect on February 23, 2026 and replaced the 2021 version.[3] Title insurers and lenders use the survey to evaluate title matters such as boundaries, easements, encroachments and access.[3]\n\nASTM E1527-21 is the standard practice for a Phase I environmental site assessment.[4] EPA's rule on all appropriate inquiries names E1527-21 as a standard that may be used to comply.[8] ASTM says the practice is meant to let a buyer satisfy one of the requirements for the landowner liability protections under the federal Superfund law.[4] Hotels near former gas stations, dry cleaners or industrial sites need the closest reading."
    },
    {
      h2: "What do I have to do about the franchise?",
      lead: "Apply for your own franchise agreement the day the purchase agreement is signed. You cannot assume the seller's.",
      body: "Hilton's 2025 Hampton disclosure sets out what a change of ownership takes. The seller gives 60 days' written notice. The buyer must meet the brand's current requirements for new franchisees, which the document lists as credit, a background investigation, operations experience and prior business dealings. The buyer submits a change of ownership application, pays the application fee, signs the current form of franchise agreement and agrees to the brand's request for upgrades.[5] The schedule lists a $200,000 application fee and a $10,000 PIP fee.[5]\n\nTwo more items from the same document. Hilton may require an independent survey by an ADA consultant in a change of ownership.[5] If your lender needs a comfort letter from the brand, Hampton charges $3,500 to process one, and issues it only if the request meets its qualifications.[5] Other brands differ, so read Items 5, 6 and 17 of the current disclosure document for your brand. The PIP itself is explained at [PIP](/glossary/pip)."
    },
    {
      h2: "What about the liquor license?",
      lead: "It is a separate government approval on its own clock, and the rules are set state by state.",
      body: "A hotel with a bar, a restaurant or a market that sells beer and wine cannot serve under the seller's license once the seller is gone, unless the state has approved the change. California is one example of how long that takes. The state's Department of Alcoholic Beverage Control says most investigations for the issuance or transfer of a license take about 55 to 65 days, and that by law a license cannot be issued for at least 30 days.[6] It also allows the buyer to operate during the transfer under a 120-day temporary permit, if the premises are currently licensed and have been operating within the past 30 days.[6] Other states work differently. Ask a local liquor license attorney in the first week, because this approval can outlast every other item on the list."
    },
    {
      h2: "What do I owe the employees?",
      lead: "If the hotel has 100 or more employees, the federal WARN Act can require 60 days' notice before a mass layoff or closing, and the sale splits that duty between seller and buyer.",
      body: "WARN covers employers with 100 or more employees, not counting part-time employees.[9] It requires at least 60 days' notice of a plant closing or mass layoff.[10] In a sale, the seller is responsible for notice of any covered event up to and including the effective date of the sale, and the buyer is responsible after that.[11] Many smaller hotels fall under the threshold. A large full-service or resort hotel may not, and some states have notice laws of their own. If you plan to change the management company or re-staff, settle who gives notice in the purchase agreement."
    },
    {
      h2: "How long does all this take?",
      lead: "Our published sale playbook budgets 60 to 90 days for due diligence and closing together, from week 12 to week 24.[7]",
      body: "The length of the diligence period is a negotiated term of the purchase agreement, so the contract you sign sets your real deadline. The slow items are the ones with outside parties: the brand, the liquor authority, the lender's appraisal and the third-party reports. Order the property condition assessment, the survey and the Phase I in the first week, file the franchise application at signing, and leave the last weeks for negotiating what the reports found. The seller's view of the same calendar is at [How long does it take to sell a hotel?](/sell-a-hotel/how-long-it-takes), and the documents a seller should hand over are listed at [Documents needed to sell a hotel](/sell-a-hotel/documents-needed)."
    }
  ],
  table: {
    caption: "Hotel buyer due diligence checklist, with the public standard behind each item (September 2026)",
    columns: [
      "Item",
      "What it answers",
      "Standard or rule",
      "Who orders it"
    ],
    rows: [
      [
        "Financials: 3 years plus trailing twelve months",
        "Is the income real and repeatable?",
        "USALI, 12th revised edition, adopted January 1, 2026[2]",
        "Buyer, from the seller"
      ],
      [
        "STR STAR reports",
        "Is the hotel gaining or losing share?",
        "Index of 100 equals fair share[5]",
        "Seller provides under NDA"
      ],
      [
        "Property condition assessment",
        "What is broken and what will it cost?",
        "ASTM E2018-24[1]",
        "Buyer or lender"
      ],
      [
        "ALTA/NSPS land title survey",
        "Boundaries, easements, encroachments, access",
        "2026 standards, effective February 23, 2026[3]",
        "Buyer, with the title company"
      ],
      [
        "Phase I environmental site assessment",
        "Is there contamination risk?",
        "ASTM E1527-21, named in 40 CFR 312.11[4][8]",
        "Buyer or lender"
      ],
      [
        "Franchise application and PIP",
        "Will the brand approve me, and at what cost?",
        "Brand FDD. Hampton: 60 days' notice, $200,000 application fee, $10,000 PIP fee[5]",
        "Buyer, at signing"
      ],
      [
        "Lender comfort letter",
        "Will the brand recognize my lender?",
        "Hampton: $3,500 processing fee[5]",
        "Buyer, for the lender"
      ],
      [
        "Liquor license",
        "Can I serve on day one?",
        "State law. California: most investigations take 55 to 65 days[6]",
        "Buyer, with local counsel"
      ],
      [
        "Employees and WARN",
        "Who gives notice if staffing changes?",
        "100 or more employees, 60 days' notice[9][10][11]",
        "Buyer and seller, in the contract"
      ],
      [
        "Title, contracts, permits, taxes",
        "What comes with the property?",
        "Title commitment and the documents themselves",
        "Buyer's counsel"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "Matthews Hotel Markets publishes the cap-rate bands a diligence adjustment gets priced at. The Matthews Hotel Index for Q1 2026 puts select-service cap rates in a 7.50 to 8.75 percent band across the 14 markets we cover.[12]"
  },
  workedExample: {
    label: "Hypothetical: what restating the seller's NOI does to price",
    body: "Hypothetical. An owner-operated, 90-key select-service hotel with $4,000,000 of total revenue. The seller's P&L shows net operating income of $1,500,000, with no management fee and no reserve.\n\nThe buyer restates it the way a lender will. A management fee assumed at 3 percent of revenue is $120,000. A reserve for furniture, fixtures and equipment assumed at 4 percent of revenue is $160,000. Both percentages are assumptions for the arithmetic. Restated NOI is $1,500,000 minus $120,000 minus $160,000, or $1,220,000.\n\nAt an 8.00 percent cap rate, inside the select-service band in the Matthews Hotel Index,[12] the seller's number implies $1,500,000 divided by 0.08, or $18,750,000. The restated number implies $1,220,000 divided by 0.08, or $15,250,000.\n\nThe gap is $3,500,000, and it comes from two lines that were never on the seller's statement. Nothing was hidden. The statement was simply not built the way a buyer's lender reads it. The method is at [How do I value a hotel?](/hotel-valuation/how-to-value-a-hotel), and the ratio is defined at [cap rate](/glossary/cap-rate)."
  },
  faq: [
    {
      q: "How long is due diligence when buying a hotel?",
      a: "As long as the purchase agreement says. Our published sale playbook budgets 60 to 90 days for due diligence and closing together.[7] Franchise approval and a liquor license transfer are the items most likely to set the pace."
    },
    {
      q: "Can I take over the seller's franchise agreement?",
      a: "Not under Hilton's 2025 Hampton agreement. The buyer submits a change of ownership application, pays the fee, signs the current form of franchise agreement and agrees to requested upgrades.[5] Check Item 17 of your own brand's disclosure document."
    },
    {
      q: "What is a T-12 and why do buyers ask for one?",
      a: "It is the profit and loss statement for the trailing twelve months. Buyers and lenders use it because it shows current earning power, where a calendar-year statement can be many months stale."
    },
    {
      q: "Do I need a Phase I on a hotel?",
      a: "Almost always, and most lenders require one. ASTM E1527-21 is the current standard, and EPA's all appropriate inquiries rule names it as a standard that may be used to comply.[4][8]"
    },
    {
      q: "What is a PCA?",
      a: "A property condition assessment. ASTM E2018-24 is the current standard guide.[1] An engineer walks the building, lists physical deficiencies and estimates the cost to fix them."
    },
    {
      q: "Does the WARN Act apply to a hotel sale?",
      a: "Only if the employer has 100 or more employees, not counting part-time staff.[9] If it does, the seller owes notice for covered layoffs through the sale date and the buyer owes it afterward.[11]"
    },
    {
      q: "What are the red flags in a hotel's financials?",
      a: "Revenue that does not tie to bank deposits or occupancy tax filings, no management fee, no reserve, family payroll below market, and repairs booked as capital. Each one makes reported income higher than a lender will underwrite."
    }
  ],
  sources: [
    {
      n: 1,
      label: "E2018-24 Standard Guide for Property Condition Assessments: Baseline Property Condition Assessment Process",
      url: "https://store.astm.org/e2018-24.html",
      publisher: "ASTM International",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "HFTP, AHLA and GFC unveil the 12th Revised Edition of the Uniform System of Accounts for the Lodging Industry (adopted January 1, 2026)",
      url: "https://www.ahla.com/news/hftp-ahla-and-gfc-unveil-groundbreaking-12th-revised-edition-uniform-system-accounts-lodging",
      publisher: "American Hotel & Lodging Association",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "ALTA/NSPS Land Title Survey Standards (2026 standards, effective February 23, 2026)",
      url: "https://www.alta.org/topics/topic-land-survey-standards",
      publisher: "American Land Title Association",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "E1527-21 Standard Practice for Environmental Site Assessments: Phase I Environmental Site Assessment Process",
      url: "https://store.astm.org/e1527-21.html",
      publisher: "ASTM International",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Items 5, 6, 7, 17 and 19",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Frequently asked questions: licensing (transfer timing and the 120-day temporary permit)",
      url: "https://www.abc.ca.gov/licensing/frequently-asked-questions/",
      publisher: "California Department of Alcoholic Beverage Control",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "How to sell a hotel: the 24-week transaction process",
      url: "/process",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "40 CFR 312.11, References (standards for conducting all appropriate inquiries)",
      url: "https://www.law.cornell.edu/cfr/text/40/312.11",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 9,
      label: "20 CFR 639.3, WARN Act definitions (employer)",
      url: "https://www.law.cornell.edu/cfr/text/20/639.3",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 10,
      label: "20 CFR 639.2, What does WARN require?",
      url: "https://www.law.cornell.edu/cfr/text/20/639.2",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 11,
      label: "20 CFR 639.4, who must give notice (including in a sale of a business)",
      url: "https://www.law.cornell.edu/cfr/text/20/639.4",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 12,
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
      "/buy-a-hotel/first-hotel-no-experience",
      "/buy-a-hotel/branded-vs-independent"
    ],
    glossary: [
      "/glossary/noi",
      "/glossary/revpar",
      "/glossary/pip",
      "/glossary/cap-rate"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Get a second set of eyes on the deal",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets prepares sellers against this same list, which is why we know where buyers find the problems."
};

export default page;
