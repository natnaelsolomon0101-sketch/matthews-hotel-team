/**
 * What happens at a hotel loan closing, and what does it cost?
 * Answer page: /hotel-financing/closing-costs
 *
 * Every figure was read at its source on 2026-09-18. Worked-example arithmetic was
 * recomputed by script before publishing. Do not hand-edit prose without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "closing-costs",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Loan Closing Costs and Process (2026)",
  h1: "What happens at a hotel loan closing, and what does it cost?",
  description: "What happens at a hotel loan closing and what it costs: title, legal, third-party reports, lender fees, taxes and reserves, with 2026 figures.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "What happens at a hotel loan closing, and what does it cost?",
    "How much are closing costs on a $10 million hotel loan?",
    "What origination fees or points should I expect on a hotel loan?",
    "Who pays for the appraisal and environmental report on a hotel loan?",
    "How much is title insurance on a hotel loan in Texas?",
    "What is the SBA guaranty fee on a $5 million hotel loan?",
    "How much cash do I need to bring to a hotel loan closing?",
    "Why is my lender holding back reserves at closing?"
  ],
  answer: "At closing the lender funds, the old loan is paid off, title and lien documents are recorded, and reserves and fees are paid from the proceeds. Cost varies by loan. In two hotel refinances securitized in 2026, closing costs were 1.7 percent and 1.2 percent of the loan.[1][2] Some items are published: Texas title premium on a $10 million policy is $38,216 under rates effective March 1, 2026.[3]",
  takeaways: [
    "Closing costs are separate from reserves. One 2026 hotel loan had $811,172 of closing costs and $5,507,309 of upfront reserves. Budget for both.[1]",
    "A few line items have public prices: title premiums in states that set them, mortgage recording taxes, and SBA guaranty fees.[3][4][5]",
    "Most line items do not: origination, lender legal, borrower legal, survey and third-party reports are quoted deal by deal, and our rate sheet does not print them.[6]",
    "The SBA 7(a) upfront fee on a $5,000,000 loan approved by September 30, 2026 is $138,125, which is 2.76 percent of the loan.[5]",
    "What a term sheet calls closing costs can include a rate buydown. One 2026 loan's closing costs included a $780,000 interest rate buydown.[2]"
  ],
  sections: [
    {
      h2: "What actually happens at a hotel loan closing?",
      lead: "A hotel loan closing is the day the loan documents are signed, the lender wires the proceeds to the title company, and the title company pays everyone in order.",
      body: "The title company, acting as escrow agent, collects the signed documents and the lender's funds. It pays off the existing lender, pays the closing costs on the settlement statement, funds the reserves the new lender requires, records the mortgage or deed of trust, issues the lender's title policy, and wires what is left to the borrower, or collects what is short.\n\nHotels add steps that other property types do not have. On a loan with a lockbox, the borrower delivers direction letters at origination telling its credit card banks and processors to send receipts to the lender-controlled account.[1] On a branded hotel, the franchisor issues a comfort letter to the lender, and the lender may reserve for replacing it later: the 2026 loan on the Marriott Tampa Westshore reserved $2,500 for the cost of replacement or reissued comfort letters in a secondary market transaction.[1] `/glossary/comfort-letter` explains the document.\n\nThe work that makes closing day uneventful happens in the weeks before. `/hotel-financing/how-debt-placement-works` covers the path from term sheet to closing, and `/hotel-financing/loan-requirements` lists the documents."
    },
    {
      h2: "How much are closing costs on a hotel loan?",
      lead: "In two hotel refinances disclosed in 2026 CMBS term sheets, closing costs were 1.7 percent and 1.2 percent of the loan amount, and no standard percentage is published.",
      body: "The $46.5 million loan on the 310-room Marriott Tampa Westshore, dated May 28, 2026, shows $811,172 of closing costs in its sources and uses, 1.7 percent of the loan.[1] The $76.5 million loan on the 226-room Holiday Inn Hotel Chelsea, dated June 5, 2026, shows $905,203, or 1.2 percent.[2] Both are large loans, and many closing costs do not scale down with loan size, so a smaller loan should expect a higher percentage.\n\nThe label hides a lot. A third loan in the same 2026 pool, on a non-hotel property, shows closing costs of $2,007,290, which is 4.7 percent of total uses, and a footnote explains that the figure includes an interest rate buydown of $780,000.[2] Lenders sometimes lower the rate in exchange for an upfront fee. One lender's underwriting guidelines in a 2026 prospectus say so directly and note that the lower rate raises the DSCR.[7]\n\nAsk for a closing cost estimate with the term sheet and ask what is in it. `/hotel-financing/hotel-loan-rates` covers how to compare quotes that trade rate against fees."
    },
    {
      h2: "Which hotel closing costs have published prices?",
      lead: "Title insurance premiums in states that set them, state mortgage recording taxes, and SBA guaranty fees are published, and nearly everything else is quoted.",
      body: "Texas sets title premiums by rule. Under the Texas Department of Insurance schedule effective March 1, 2026, the basic premium on a policy between $5,000,001 and $15,000,000 is $21,466 plus 0.335 percent of the amount over $5,000,000. On a $10,000,000 policy that is $38,216, before any credits or endorsements.[3] Outside Texas, rules differ by state, so ask the title company for a quote early.\n\nSome states tax the mortgage itself. Florida charges documentary stamp tax of 35 cents per $100 on the full amount of indebtedness secured by a recorded mortgage, with no cap, payable when the mortgage is recorded. On a $10,000,000 mortgage that is $35,000. Florida also lists a separate nonrecurring intangible tax.[4] Mortgage taxes vary widely by state, so check your own before you build a budget.\n\nSBA publishes its fees each fiscal year. For 7(a) loans approved from October 1, 2025 through September 30, 2026 with a maturity over 12 months, the upfront fee on loans of $700,001 to $5,000,000 is 3.5 percent of the guaranteed portion up to $1,000,000, plus 3.75 percent of the guaranteed portion over $1,000,000.[5] SBA's maximum guarantee on a 7(a) loan above $150,000 is 75 percent.[8] The lender's 0.55 percent annual service fee may not be passed on to the borrower.[5] A new notice will set fiscal 2027 fees."
    },
    {
      h2: "What third-party reports will the lender order, and who pays?",
      lead: "A hotel lender orders an appraisal, an environmental assessment and a property condition report, and the borrower pays for them, usually through a deposit made when the term sheet is signed.",
      body: "A 2026 CMBS prospectus lists what a loan seller's underwriting file contains: appraisals, environmental assessment reports, property condition reports, seismic studies, zoning reports and insurance review summaries.[7] For banks, the appraisal is a legal requirement. Federal regulations require an appraisal by a state certified appraiser for federally related commercial real estate transactions of more than $500,000.[9]\n\nThe lender engages the vendors, so the reports are addressed to the lender even though the borrower pays. No public price list exists for these reports and we do not print a range.\n\nLenders also typically ask for a current survey and a zoning report. SBA's 504 rules show how the agency classifies these costs: title insurance, title searches and abstract costs, surveys and zoning matters are project-related professional fees that can be financed in the project, while attorney's fees for closing the interim and third party loans cannot.[10]"
    },
    {
      h2: "What lender fees and legal fees should I expect?",
      lead: "Expect an origination fee, the lender's legal fees, your own legal fees, and on some loans an exit fee or a rate cap premium, none of which is published.",
      body: "Origination is quoted in points on the loan amount and is negotiable. The borrower pays the lender's counsel as well as its own, and on securitized, mezzanine or multi-lender deals the legal work grows with each added document. `/hotel-financing/mezzanine-debt-and-preferred-equity` explains the intercreditor agreement that adds a second set of lawyers.\n\nFloating-rate loans add a rate cap premium, paid at closing. `/hotel-financing/interest-rate-caps` shows what one public hotel owner paid for caps from 2023 to 2025. Bridge loans often add an exit fee, paid at payoff, not at closing, so it belongs in your total cost even though it is not on the settlement statement. `/hotel-financing/bridge-loans` covers both.\n\nOur rate sheet prints public indexes and published program fees. It does not print origination points or legal fees, because no lender publishes them.[6]"
    },
    {
      h2: "How much cash do I need on closing day besides the closing costs?",
      lead: "Reserves are often larger than closing costs on a hotel loan, because the lender funds taxes, PIP work and seasonal shortfalls up front.",
      body: "The Marriott Tampa Westshore loan is a clear example. Against $811,172 of closing costs, the lender held back $5,507,309 of upfront reserves: $4,414,900 for the PIP, $595,000 for seasonality, $410,837 for real estate taxes, $84,072 for ground rent and $2,500 for comfort letters.[1] Reserves are still your money, but you do not control them.\n\nOn a purchase, add the franchise application fee, which is paid to the franchisor, not the lender. `/hotel-franchise-costs` lists those fees brand by brand from each franchise disclosure document. `/hotel-financing/covenants-and-cash-management` explains the reserves, and `/buy-a-hotel/how-much-money-do-you-need` adds up the full cash requirement for a purchase."
    }
  ],
  table: {
    caption: "Hotel loan closing line items: what is published and what is quoted, September 2026",
    columns: [
      "Line item",
      "Paid to",
      "Published figure, if any",
      "Notes"
    ],
    rows: [
      [
        "Lender's title policy",
        "Title company",
        "Texas: $38,216 basic premium on a $10,000,000 policy, rates effective March 1, 2026[3]",
        "Set by rule in Texas; ask the title company elsewhere"
      ],
      [
        "Mortgage recording tax",
        "State or county",
        "Florida: 35 cents per $100 of debt secured, no cap[4]",
        "Varies by state"
      ],
      [
        "SBA 7(a) upfront fee",
        "SBA, through the lender",
        "3.5% of the guaranteed portion up to $1,000,000 plus 3.75% above it, for loans of $700,001 to $5,000,000 approved by September 30, 2026[5]",
        "Charged on the guaranteed portion, not the whole loan"
      ],
      [
        "Appraisal",
        "Appraiser, engaged by the lender",
        "Not published",
        "Required by regulation on bank loans over $500,000[9]"
      ],
      [
        "Environmental, property condition, zoning, seismic",
        "Vendors, engaged by the lender",
        "Not published",
        "Listed in CMBS underwriting files[7]"
      ],
      [
        "Origination and rate buydown",
        "Lender",
        "Not published; one 2026 loan disclosed a $780,000 buydown inside closing costs[2]",
        "Negotiable"
      ],
      [
        "Lender's and borrower's legal",
        "Law firms",
        "Not published",
        "Grows with each added document"
      ],
      [
        "Upfront reserves",
        "Lender-controlled accounts",
        "One 2026 hotel loan: $5,507,309, or 11.8% of the loan[1]",
        "Your money, held by the lender"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts the 10-year Treasury at 4.94% and the SBA 7(a) maximum rate at 10.00% as of September 17, 2026. It prints published program fees and marks origination points and lender legal fees as not published, because no lender publishes them.[6]"
  },
  workedExample: {
    label: "Hypothetical: closing budget for a $10.0M hotel refinance in Texas",
    body: "Hypothetical. Loan $10,000,000 on a Texas hotel. The 1.5 percent total is an assumption that sits between the two public 2026 examples of 1.2 and 1.7 percent. It is not a quote, and a smaller loan should expect a higher percentage.\n\nTotal budget. $10,000,000 times 1.5 percent is $150,000.\n\nThe published piece. The Texas basic title premium on a $10,000,000 policy is $21,466 plus 0.335 percent of $5,000,000, which is $16,750, for a total of $38,216 before credits and endorsements. That is about 25 percent of the budget.\n\nThe quoted pieces. The remaining $111,784 has to cover origination, lender's counsel, borrower's counsel, the appraisal, the environmental and property condition reports, the survey and zoning report, and recording fees. None of those has a public price, so get each one in writing.\n\nThe same loan in Florida. Documentary stamp tax on the mortgage is $10,000,000 divided by $100, times $0.35, or $35,000, before the state's intangible tax.\n\nSBA contrast. A $5,000,000 7(a) loan approved by September 30, 2026 has a guaranteed portion of 75 percent, or $3,750,000. The upfront fee is 3.5 percent of $1,000,000, or $35,000, plus 3.75 percent of $2,750,000, or $103,125. The total is $138,125, which is 2.76 percent of the loan, before any other closing cost."
  },
  faq: [
    {
      q: "How much are closing costs on a $10 million hotel loan?",
      a: "There is no published standard. Two hotel refinances in 2026 CMBS filings showed 1.2 and 1.7 percent of the loan, on loans of $76.5 million and $46.5 million. Smaller loans usually run higher as a percentage, because legal fees and reports do not shrink with the loan."
    },
    {
      q: "What origination fees or points should I expect on a hotel loan?",
      a: "Origination is quoted in points on the loan amount and is negotiable. No lender publishes it. Ask whether the quote includes a rate buydown, since one 2026 public loan's closing costs included a $780,000 buydown. Compare offers on total cost, not rate alone."
    },
    {
      q: "Who pays for the appraisal and environmental report on a hotel loan?",
      a: "The borrower pays, but the lender orders them. Banks must get an appraisal from a state certified appraiser on commercial real estate transactions over $500,000. Expect to fund a deposit for third-party reports when you sign the term sheet."
    },
    {
      q: "How much is title insurance on a hotel loan in Texas?",
      a: "Texas sets the rate. Under the schedule effective March 1, 2026, a $10,000,000 policy has a basic premium of $38,216: $21,466 plus 0.335 percent of the amount over $5,000,000. Credits and endorsements change the final figure."
    },
    {
      q: "What is the SBA guaranty fee on a $5 million hotel loan?",
      a: "For a 7(a) loan approved by September 30, 2026, the upfront fee is 3.5 percent of the first $1,000,000 of the guaranteed portion plus 3.75 percent of the rest. On a $5,000,000 loan with a 75 percent guaranty, that is $138,125."
    },
    {
      q: "How much cash do I need to bring to a hotel loan closing?",
      a: "On a refinance, often none: costs and reserves come out of the proceeds, and you bring cash only if the new loan is smaller than the payoff plus costs. On a purchase, bring the equity, closing costs, reserves and franchise fees."
    },
    {
      q: "Why is my lender holding back reserves at closing?",
      a: "To make sure taxes, insurance, PIP work and seasonal debt service get paid. One 2026 hotel loan held $5,507,309 at closing, including $4,414,900 for the PIP and $595,000 for seasonality. The money is yours, released as the work is done or the bills come due."
    },
    {
      q: "Can closing costs be financed in the hotel loan?",
      a: "On a refinance they are paid from proceeds, which has the same effect. SBA's 504 rules allow title insurance, surveys and zoning costs in the financed project but exclude attorney's fees for closing the interim and third party loans."
    }
  ],
  sources: [
    {
      n: 1,
      label: "BANK5 2026-5YR23, free writing prospectus: structural and collateral term sheet dated June 22, 2026 (Loan No. 9, Marriott Tampa Westshore: sources and uses, reserves, lockbox, pp. T-104 to T-108)",
      url: "https://www.sec.gov/Archives/edgar/data/2140978/000153949726001820/n5964_x2-ts.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "BMO 2026-5C16 Mortgage Trust, free writing prospectus: structural and collateral term sheet dated August 4, 2026 (Loan No. 10, Holiday Inn Hotel Chelsea sources and uses, p. 135; Loan No. 7 sources and uses and closing cost footnote)",
      url: "https://www.sec.gov/Archives/edgar/data/2136643/000153949726002077/n6057_x4-ts.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Texas Title Insurance Basic Premium Rates, effective March 1, 2026",
      url: "https://tdi.texas.gov/title/titlerates2026.html",
      publisher: "Texas Department of Insurance",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Florida Documentary Stamp Tax: mortgages, liens and other evidences of indebtedness (section 201.08, Florida Statutes)",
      url: "https://floridarevenue.com/taxes/taxesfees/Pages/doc_stamp.aspx",
      publisher: "Florida Department of Revenue",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "SBA Information Notice 5000-872051, 7(a) Fees Effective October 1, 2025 for Fiscal Year 2026 (effective August 28, 2025; expires October 1, 2026)",
      url: "https://legacy.sba.gov/document/information-notice-5000-872051-7a-fees-effective-october-1-2025-fiscal-year-2026",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "Benchmark 2026-B42 Mortgage Trust, prospectus (Form 424B2, filed February 25, 2026): loan seller review of third-party reports (pp. 289-290); upfront fee in exchange for a reduced interest rate and escrow requirements (p. 292)",
      url: "https://www.sec.gov/Archives/edgar/data/2110410/000153949726000776/n5676_x16-424b2.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "7(a) loan program: terms, conditions, and eligibility (maximum SBA guarantee percentages)",
      url: "https://www.sba.gov/sba-lenders/#7a-terms",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 9,
      label: "12 CFR 34.43, Appraisals required; transactions requiring a State certified or licensed appraiser",
      url: "https://www.law.cornell.edu/cfr/text/12/34.43",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 10,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section C, Ch. 1: eligible project costs, professional fees (p. 337)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/how-debt-placement-works",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/cash-out-refinance",
      "/hotel-financing/covenants-and-cash-management",
      "/hotel-financing/sba-7a-vs-504"
    ],
    glossary: [
      "/glossary/comfort-letter",
      "/glossary/sba-7a",
      "/glossary/pip",
      "/glossary/ffe-reserve"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Get a closing cost estimate with your hotel loan quotes",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets arranges hotel financing from $5 million and asks each lender for its fees, reserves and third-party costs alongside the rate."
};

export default page;
