/**
 * Can I get seller financing to buy a hotel?
 * Answer page: /buy-a-hotel/seller-financing
 *
 * Written 2026-09-18. Sources fetched and read that day: SOP 50 10 8 (page
 * numbers are the SOP's own printed page numbers), the SOP 50 10 8.1 text
 * posted for October 1, 2026, IRS Publication 537 (2025), Rev. Rul. 2026-19.
 * Worked example arithmetic checked by script.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "seller-financing",
  cluster: "buy-a-hotel",
  isHub: false,
  title: "Seller Financing for a Hotel Purchase: How It Works",
  h1: "Can I get seller financing to buy a hotel?",
  description: "When a hotel seller will carry a note, how SBA counts it toward your down payment, what the bank requires, and how the IRS taxes the seller. With sources.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What financing options exist for a first-time hotel buyer?",
    "How much cash do I need to buy a select-service hotel?",
    "How do I buy my first hotel?",
    "Can I get seller financing to buy a hotel?",
    "The owner of a motel I want to buy offered to carry a note. How does that work with an SBA loan?",
    "I am selling my hotel and the buyer wants me to hold a second mortgage. What are the tax rules?",
    "Can a seller note count as my down payment on a hotel?"
  ],
  answer: "Yes, if the seller agrees and your senior lender allows it. On an SBA 7(a) purchase, SBA requires at least 10 percent equity, and a seller note can cover up to half of that only if it is on full standby for the life of the SBA loan.[1] As of September 18, 2026, the IRS mid-term applicable federal rate for October is 4.61 percent, the floor for the note's rate.[2]",
  takeaways: [
    "A seller note is a loan from the seller for part of the price. It sits behind the bank's mortgage, so the bank decides whether it is allowed at all.",
    "SBA counts a seller note as equity only when it is on full standby: no principal or interest payments for the term of the 7(a) loan. Even then it can be no more than half of the required 10 percent.[1]",
    "A seller note that is being paid is debt, not equity. The lender has to put its payments into the debt service coverage test, which SBA sets at 1.15 or higher.[3]",
    "For the seller, a carried note is an installment sale. Gain is spread over the payments, but depreciation recapture is taxed in the year of sale no matter when the cash arrives.[4]",
    "A note that charges less than the applicable federal rate gets part of its principal recharacterized as interest by the IRS.[4]"
  ],
  sections: [
    {
      h2: "What is seller financing on a hotel purchase?",
      lead: "Seller financing means the seller takes part of the purchase price as a promissory note from the buyer instead of cash at closing.",
      body: "A seller note can be the whole loan, but when a hotel purchase also has a first mortgage the seller note is a second-position piece. A bank, an SBA lender or another senior lender makes the first mortgage, the buyer brings cash, and the seller note fills part of the space between them. The note can be secured by a second lien, a pledge of ownership interests or a guaranty, and its rate and maturity are whatever the two sides agree to and the senior lender accepts.\n\nSellers agree to it for three reasons: it widens the pool of buyers who can close, it can support the price, and it lets the seller report part of the gain over time under the installment method.[4] Buyers ask for it because it lowers the cash needed at closing. The cash side of a purchase is laid out at `/buy-a-hotel/how-much-money-do-you-need`.\n\nNo public data set reports how often hotel sellers carry paper or at what rates, so this page does not print a typical rate or a typical share of the price."
    },
    {
      h2: "Will my bank or SBA lender allow a seller note?",
      lead: "The senior lender decides, and its answer depends on whether the note is on standby, whether it is subordinated, and whether the hotel's cash flow covers it.",
      body: "A first mortgage lender does not want a second creditor that can sue the borrower or foreclose ahead of it. So a lender that allows a seller note can be expected to ask for a written subordination and limits on what the seller may do after a default. Conventional lenders do not publish these policies, so ask before you negotiate the note with the seller.\n\nSBA publishes its rules. In the 7(a) program, the lender's credit memo must discuss any seller financing and any standby agreements.[3] A standby creditor must sign SBA Form 155 or the lender's equivalent, must subordinate any lien on the collateral to the lender, and may take no action against the borrower or the collateral without the lender's consent.[1] If the buyer borrows more from the seller than the minimum injection requires, the lender must address the repayment terms and any standby or subordination terms in its file.[5]\n\nThe note also counts in the coverage math. SBA defines debt service as the required principal and interest payments on all business debt, and the ratio of operating cash flow to debt service must be 1.15 or higher.[3] A seller note with current payments makes that test harder to pass. A note on full standby does not add payments during the SBA loan."
    },
    {
      h2: "Can a seller note count as my down payment on an SBA loan?",
      lead: "Partly. SOP 50 10 8 lets seller debt count toward the required equity injection only if it is on full standby for the life of the SBA loan and is no more than half of that injection.[1]",
      body: "The SOP's words, for a complete change of ownership: SBA requires an equity injection of at least 10 percent of the total project costs, and seller debt may not be considered part of the equity injection unless it is on full standby for the life of the SBA loan and it does not exceed half of the SBA-required equity injection.[1] Full standby is defined as no payments of principal or interest for the term of the 7(a) loan. The standby debt may accrue interest, and it may be amortized after the 7(a) loan is paid in full.[1]\n\nThat is a long wait for the seller. A 7(a) real estate loan can run up to 25 years.[6] In practice the seller is paid when the buyer refinances or sells. Under SOP 50 10 8, a seller note must have been in place and current, not on standby, for at least 24 months before a 7(a) loan can refinance it.[7]\n\nThe rules change on October 1, 2026. SBA has posted SOP 50 10 8.1 with that effective date. It keeps the 10 percent minimum for an initial acquisition, says that injection cannot be reduced or eliminated, keeps seller debt among the sources limited to half of the required injection, and lengthens the seasoning period before seller debt can be refinanced to 36 months.[8] It raises the required debt service coverage on an initial acquisition from 1.15 to 1.25, measured on historical or adjusted results, and it adds a rule that acquisition debt which is not on full standby and is interest-only must be underwritten on an amortization of no more than 10 years.[8] If your loan will be approved after that date, ask your lender which version applies.\n\nThe two SBA programs are compared at `/hotel-financing/sba-7a-vs-504`."
    },
    {
      h2: "What interest rate does a seller note need to carry?",
      lead: "At least the IRS applicable federal rate for its term, or the IRS will treat part of the principal as interest.",
      body: "IRS Publication 537 says an installment sale contract generally has adequate stated interest if its rate is at least the test rate, which is built from the applicable federal rate (AFR). The AFR depends on the note's term: the short-term rate for 3 years or less, the mid-term rate for over 3 and up to 9 years, and the long-term rate for over 9 years.[4] If the contract does not provide adequate stated interest, section 1274 or section 483 recharacterizes part of the stated principal as interest.[4]\n\nFor October 2026 the annual AFRs are 4.25 percent short-term, 4.61 percent mid-term and 5.22 percent long-term.[2] Those are tax floors, not market rates. A second-position note behind a hotel mortgage is riskier than a Treasury, and the seller is entitled to price it that way. For context, Matthews Hotel Markets' rate sheet shows the 10-year Treasury at 4.94 percent on September 17, 2026 and the SBA 7(a) maximum variable rate at 10.00 percent.[9]"
    },
    {
      h2: "I am the seller. How is a carried note taxed?",
      lead: "As an installment sale: you report gain as you receive payments, except for depreciation recapture, which is all taxed in the year of sale.[4]",
      body: "Publication 537 defines an installment sale as a sale of property where you receive at least one payment after the tax year of the sale. Each payment is split into interest, return of basis and gain, using the gross profit percentage.[4] You report it on Form 6252 unless you elect out.\n\nThree rules matter for a hotel.\n\nFirst, recapture. If you sell property for which you claimed depreciation, you must report any depreciation recapture income in the year of sale, whether or not an installment payment was received that year.[4] Hotels carry a lot of depreciated furniture and equipment, so a note defers less tax than owners expect.\n\nSecond, allocation. A hotel is a group of assets that make up a business, so buyer and seller must allocate the price among the assets using the residual method, and the installment method is tested asset by asset.[4]\n\nThird, size. If the sale price is over $150,000 and your outstanding installment obligations from the year exceed $5 million at year end, you owe interest on the deferred tax.[4] And if you pledge the note as security for a loan, the loan proceeds can be treated as a payment on the note.[4]\n\nThe full tax picture for a sale is at `/sell-a-hotel/taxes-when-selling-a-hotel`. Use a CPA before you agree to terms."
    },
    {
      h2: "What should the note say?",
      lead: "The note should match what the senior lender approved, because the intercreditor terms control what the seller can do if the buyer stops paying.",
      body: "Terms to settle in the purchase agreement, not at the closing table: the amount, the rate and whether interest is paid or accrues; the maturity and whether it falls before or after the first mortgage matures; the collateral (a recorded second lien, a pledge of ownership interests, or a personal guaranty); standby or payment terms that match the lender's approval; what happens on a sale or refinance; and the seller's remedies, which under an SBA standby agreement require the lender's consent.[1]\n\nSellers should also think about what they are lending against. If the buyer defaults on the first mortgage, the seller note is behind it. Publication 537 has separate rules for a seller who repossesses real property after an installment sale.[4] A seller who would not want the hotel back should size the note accordingly.\n\nTo see what first mortgage the hotel's income supports, use `/tools/hotel-loan-sizing-calculator`. For a value check before you negotiate price, use `/tools/hotel-value-estimator`."
    }
  ],
  table: {
    caption: "How a seller note is treated: SBA 7(a) rules in force on September 18, 2026 and the posted October 1, 2026 rules",
    columns: [
      "Question",
      "SOP 50 10 8 (effective June 1, 2025)",
      "SOP 50 10 8.1 (effective October 1, 2026)"
    ],
    rows: [
      [
        "Minimum equity on a purchase by a new owner",
        "At least 10% of total project costs[1]",
        "10% for an initial acquisition; cannot be reduced or eliminated[8]"
      ],
      [
        "Can seller debt count as equity?",
        "Only on full standby for the life of the SBA loan, and no more than half of the required injection[1]",
        "Only if subordinated and on full standby; limited sources together no more than half of the required injection[8]"
      ],
      [
        "What full standby means",
        "No payments of principal or interest for the term of the 7(a) loan; interest may accrue[1]",
        "Same definition[8]"
      ],
      [
        "Seller note that is being paid",
        "Counts as business debt in the 1.15 coverage test[3]",
        "Counts in the coverage test, which rises to 1.25 for an initial acquisition; if interest-only, underwritten on an amortization of no more than 10 years[8]"
      ],
      [
        "When a 7(a) loan can refinance the seller note",
        "After 24 months in place and current, not on standby[7]",
        "After 36 months in place and current[8]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts the SBA 7(a) maximum variable rate at 10.00 percent and the 25-year SBA 504 debenture at 6.54 percent.[9] A seller note is priced between the IRS floor and what that senior debt costs, by negotiation."
  },
  workedExample: {
    label: "Hypothetical: a seller note inside an SBA 7(a) hotel purchase, from both sides",
    body: "Hypothetical. A buyer agrees to pay $4,700,000 for a roadside hotel and has $300,000 of closing costs and working capital, so total project costs are $5,000,000.\n\nBuyer's side. The required SBA equity injection is 10 percent of $5,000,000, or $500,000.[1] A seller note on full standby can cover at most half: $250,000. The buyer brings the other $250,000 in cash. The stack is a $4,250,000 7(a) loan, $250,000 cash, a $250,000 standby seller note, and a second $250,000 seller note that is paid currently and does not count as equity. $4,250,000 + $250,000 + $250,000 + $250,000 = $5,000,000.\n\nCoverage. At an assumed 10.00 percent rate over 25 years, the 7(a) loan costs about $463,437 a year. The paying seller note, assumed at 7.00 percent over 10 years, costs about $34,833 a year. At SBA's 1.15 ratio the hotel needs operating cash flow of at least ($463,437 + $34,833) x 1.15 = $573,010.[3] At the 1.25 ratio in the October 1, 2026 rules, the same debt needs $622,838.[8]\n\nThe standby note. At an assumed 7.00 percent accruing annually, $250,000 grows to about $491,788 if the buyer refinances in year 10. The seller receives nothing on it until then.\n\nSeller's side. The seller's adjusted basis is $2,900,000, selling expenses are $200,000, and depreciation recapture income is assumed at $400,000. Recapture is taxed in the year of sale and added to the installment sale basis: $2,900,000 + $200,000 + $400,000 = $3,500,000.[4] Gross profit is $4,700,000 - $3,500,000 = $1,200,000, and the gross profit percentage is 25.53 percent. The seller receives $4,200,000 in the year of sale, so $1,072,340 of that gain is taxed then. Only $500,000 x 25.53 percent = $127,660 is deferred. The notes are 10.6 percent of the price, so they defer about that share of the non-recapture gain. This is a simplified illustration, not tax advice."
  },
  faq: [
    {
      q: "Can I buy a hotel with seller financing and no bank loan?",
      a: "Only if the seller owns the hotel free of debt or can pay off the mortgage at closing, and is willing to carry most of the price. With a bank or SBA first mortgage, the seller note is a second piece behind it."
    },
    {
      q: "Does a seller note count as my down payment for an SBA loan?",
      a: "Up to half of it can. SBA requires at least 10 percent equity, and seller debt counts only if it is on full standby for the life of the SBA loan and is no more than half of that injection.[1]"
    },
    {
      q: "What does full standby mean on an SBA seller note?",
      a: "No payments of principal or interest for the term of the 7(a) loan. Interest may accrue, and the note can be amortized after the SBA loan is paid in full. The seller signs SBA Form 155 or the lender's equivalent.[1]"
    },
    {
      q: "What interest rate should a hotel seller charge on a carried note?",
      a: "At least the IRS applicable federal rate for the note's term, or part of the principal is treated as interest.[4] For October 2026 the mid-term rate is 4.61 percent.[2] The actual rate on a second-position hotel note is negotiated between buyer and seller."
    },
    {
      q: "I am selling my hotel. Does carrying a note defer my taxes?",
      a: "It defers the gain tied to the payments you receive later. Depreciation recapture is taxed in the year of sale regardless.[4] If the note is a small share of the price, the deferral is small too."
    },
    {
      q: "Are the SBA seller note rules changing?",
      a: "Yes. SOP 50 10 8.1 takes effect October 1, 2026. It keeps the 10 percent minimum and the half limit, raises required coverage on an initial acquisition to 1.25, and lengthens the wait to refinance seller debt from 24 to 36 months.[7][8]"
    },
    {
      q: "What happens to the seller note if I default on the bank loan?",
      a: "The seller is behind the bank. Under an SBA standby agreement the seller has subordinated its lien and cannot act against you or the collateral without the lender's consent.[1] That risk is why sellers limit the size of the note."
    },
    {
      q: "Can I refinance the seller note later with an SBA loan?",
      a: "Under SOP 50 10 8, a seller note must have been in place and current, not on standby, for at least 24 months after the purchase.[7] The October 1, 2026 version raises that to 36 months.[8]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section B, Ch. 1: equity requirements for changes of ownership and Standby Agreements (pp. 131-133)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Rev. Rul. 2026-19, Table 1: applicable federal rates for October 2026",
      url: "https://www.irs.gov/pub/irs-drop/rr-26-19.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "SOP 50 10 8, Section B, Ch. 1: debt service definition, 1.15 debt service coverage requirement, and seller financing and standby agreements in the credit memorandum (pp. 129-130)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Publication 537 (2025), Installment Sales",
      url: "https://www.irs.gov/publications/p537",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "SOP 50 10 8, Section B, Ch. 5: verifying equity injection, borrowed funds and seller financing in excess of the minimum injection (p. 320)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "SOP 50 10 8, Section B, Ch. 1: 7(a) loan maturities, real estate loans must not exceed 25 years (p. 120)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "SOP 50 10 8, Section B, Ch. 1: refinancing debt used to finance a change of ownership, seller note in place and current for 24 months (p. 112)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "SOP 50 10 8.1 (effective October 1, 2026), Appendix 15: 7(a) Changes of Ownership, equity injection sources and seller debt",
      url: "https://legacy.sba.gov/sites/default/files/2026-08/SOP%2050%2010%208.1%20effective%2010.1.2026_0.docx",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 9,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/buy-a-hotel",
    siblings: [
      "/buy-a-hotel/how-much-money-do-you-need",
      "/buy-a-hotel/first-hotel-no-experience",
      "/buy-a-hotel/due-diligence-checklist",
      "/buy-a-hotel/buying-a-hotel-from-receivership-or-foreclosure"
    ],
    glossary: [
      "/glossary/sba-7a",
      "/glossary/dscr",
      "/glossary/mezzanine-debt"
    ],
    data: [
      "/rates",
      "/tools/hotel-loan-sizing-calculator",
      "/tools/hotel-value-estimator"
    ]
  },
  cta: {
    label: "Talk through your capital stack",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets places hotel debt and sells hotels, so the same desk can look at a seller note from the buyer's side and the seller's side."
};

export default page;
