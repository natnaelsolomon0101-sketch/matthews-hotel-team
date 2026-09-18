/**
 * How do I take cash out when I refinance my hotel?
 * Answer page: /hotel-financing/cash-out-refinance
 *
 * Every figure was read at its source on 2026-09-18. Worked-example arithmetic was
 * recomputed by script before publishing. Do not hand-edit prose without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "cash-out-refinance",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Cash-Out Refinance: How It Works (2026)",
  h1: "How do I take cash out when I refinance my hotel?",
  description: "How a hotel cash-out refinance works: sources and uses, what limits proceeds, SBA limits on cash out, seasoning, and how loan proceeds are taxed.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "How do I take cash out when I refinance my hotel?",
    "I own my hotel free and clear. Can I borrow against it and pull cash out?",
    "How much cash can I take out of my hotel on a refinance?",
    "Can I do a cash-out refinance on my hotel with an SBA loan?",
    "Is the cash I take out of a hotel refinance taxable?",
    "How long do I have to own a hotel before I can do a cash-out refinance?",
    "I want to pull equity out of my hotel to buy a second one. How do lenders look at that?",
    "How much equity do I need to refinance my hotel?"
  ],
  answer: "You take cash out when the new loan is larger than the old loan's payoff, the closing costs and the reserves combined. The difference is wired to you at closing. Lenders size the loan on NOI first. In one Marriott refinance dated May 28, 2026, $17.8 million of a $46.5 million loan, 38.2 percent, went back to the owner.[1] SBA loans largely rule out cash to owners.[2][3]",
  takeaways: [
    "Cash out is what is left after the payoff, prepayment costs, closing costs and lender reserves. Build a sources and uses table before you count on a number.",
    "The loan is sized by DSCR, debt yield and loan-to-value, and the smallest result wins. No conventional lender publishes its limits, for cash-out loans or any others.[4]",
    "Conduit lenders do fund cash-out hotel loans. Two 2026 public examples returned 38.2 percent and 11.0 percent of the loan to the sponsor.[1][5]",
    "SBA 7(a) proceeds may not be used for payments or distributions to the owners, and a 504 refinance can only add eligible business expenses, up to 90 percent of value.[2][3]",
    "The IRS says loan proceeds are not included in gross income, because you have to repay them. How you use the cash decides whether the interest is deductible.[6][7]"
  ],
  sections: [
    {
      h2: "How does a hotel cash-out refinance work, step by step?",
      lead: "A hotel cash-out refinance is a new first mortgage sized on the hotel's current NOI, with the amount above the payoff and closing costs paid to the owner.",
      body: "The lender sizes the loan the same way it sizes any hotel loan: DSCR, debt yield and loan-to-value against trailing twelve-month NOI, lending the smallest result. `/hotel-financing/loan-requirements` explains the tests and `/tools/hotel-loan-sizing-calculator` runs them.\n\nAt closing, the loan proceeds pay the uses in order. First the existing loan, including any prepayment cost; `/glossary/defeasance` and `/glossary/yield-maintenance` explain the two common ones. Then closing costs. Then the reserves the new lender requires, which on a hotel can include taxes, FF&E, a seasonality reserve and the full cost of an open PIP. Whatever remains is the cash out.\n\nA public example shows the proportions. The $46.5 million loan on the 310-room Marriott Tampa Westshore, dated May 28, 2026, paid off $22,424,487 of existing debt (48.2 percent of the loan), funded $5,507,309 of upfront reserves (11.8 percent), including a $4,414,900 PIP reserve, paid $811,172 of closing costs (1.7 percent), and returned $17,757,032 of equity to the sponsor (38.2 percent).[1]"
    },
    {
      h2: "How much cash can I take out of my hotel?",
      lead: "The cash you can take out of a hotel is capped by the lender's sizing tests, not by your equity, and those tests are not published.",
      body: "The two public 2026 examples show how different the answers can be. The Tampa loan was underwritten at a 1.84 times net cash flow DSCR, a 16.8 percent NOI debt yield and a loan-to-value of 56.6 percent on the as-is appraised value, and returned 38.2 percent of the loan to the sponsor.[1] The $76.5 million Holiday Inn Hotel Chelsea loan, dated June 5, 2026, was underwritten at 1.40 times, 11.6 percent and 67.1 percent. Its uses were $66,776,840 of loan payoff, $8,401,598 listed as borrower sponsor equity, $905,203 of closing costs and $416,359 of upfront reserves.[5] Those are two loans on large full-service hotels, not a rule.\n\nBanks work under a supervisory ceiling. The interagency guidelines say a bank's own loan-to-value limit for improved property should not exceed 85 percent, and tell each bank to set its internal limits.[8] Banks do not publish their hotel limits, and our rate sheet marks conventional thresholds as not yet published.[4]\n\nLenders also look at the purpose. Cash that goes into the hotel, such as a PIP, is an easier request than cash that leaves. Say what the money is for, and show that the hotel covers the larger payment with room to spare."
    },
    {
      h2: "Can I take cash out with an SBA loan?",
      lead: "Not for yourself. SBA rules bar using loan proceeds for payments or distributions to the owners, and the 504 refinance program only adds cash for defined business expenses.",
      body: "The regulation on uses of proceeds is direct. SBA will not authorize, and a borrower may not use, loan proceeds for payments, distributions, or loans to Associates of the applicant, except for ordinary compensation for services rendered or to facilitate changes of ownership.[3] A 7(a) refinance also has a payment-history rule in the SOP: the debt to be refinanced must be, and must have been, current for at least the last 12 months or for the life of the loan, whichever is less.[2]\n\nThe 504 program's debt refinance without expansion is the closest SBA comes to cash out. The SOP says that for projects that refinance only Qualified Debt, the maximum loan to value of the Refinancing Project allowed is 90 percent, and the same 90 percent maximum applies to projects that include Eligible Business Expenses. Those expenses are limited to operating expenses of the business, such as salaries, rent, utilities and inventory, that were incurred but not paid before the application or will come due within 18 months after it. They must be itemized.[2]\n\nHotels get one more limit. When the refinancing involves a limited or special purpose property, which includes hotels and motels, the borrower contribution rules apply, and that contribution is at least 15 percent.[2] `/hotel-financing/sba-7a-vs-504` compares the two programs."
    },
    {
      h2: "Do I have to own the hotel for a certain time first?",
      lead: "SBA's 504 refinance program has written seasoning rules, and conventional lenders set their own and do not publish them.",
      body: "Under the SOP, debt is Qualified Debt for a 504 refinance only if it was incurred not less than 6 months prior to the date of application and has been secured by the eligible fixed assets for at least 6 months. The applicant must also have been in operation for all of the 2-year period ending on the date the application is submitted.[2]\n\nConventional lenders have no public rule. In practice the questions are how long you have owned the hotel, what you paid, what you have invested since, and whether the value increase comes from NOI you can document. A recent purchase price is strong evidence of value, so a cash-out request soon after a purchase has to explain what changed. A completed PIP, a reflag or a documented ramp in NOI are the usual answers. `/hotel-valuation/how-to-value-a-hotel` covers how value is built up, and `/hotel-valuation/broker-opinion-of-value` explains a free first estimate."
    },
    {
      h2: "Is the cash I take out taxable?",
      lead: "Loan proceeds are generally not income, because you are obligated to repay them, but the structure of your ownership entity and your use of the cash both matter.",
      body: "The IRS states the principle in Tax Topic 432: when you borrow money, you do not include the loan proceeds in gross income because you have an obligation to repay the lender later. If the lender later cancels the debt, the canceled amount may be income.[6] A refinance is not a sale of the hotel. `/sell-a-hotel/taxes-when-selling-a-hotel` covers what a sale triggers.\n\nTwo cautions apply. First, many hotels are held in partnerships or LLCs taxed as partnerships. Under the Internal Revenue Code, a partner recognizes gain on a distribution to the extent the money distributed exceeds the adjusted basis of the partner's interest.[9] An increase in a partner's share of partnership liabilities is treated as a contribution of money by that partner.[10] How those two rules net out for each partner in a cash-out refinance is a calculation for your CPA.\n\nSecond, interest deductibility follows the use of the money. Treasury's interest tracing rules allocate debt, and the interest on it, by tracing disbursements of the debt proceeds to specific expenditures. Interest allocated to a personal expenditure is treated as personal interest.[7] Matthews Hotel Markets does not give tax advice. Ask your CPA before closing, not after."
    },
    {
      h2: "What are the risks of taking cash out?",
      lead: "A larger loan means a larger payment against the same NOI, so the hotel has less room before a DSCR covenant or cash sweep trigger is tripped.",
      body: "The worked example below adds about $301,000 a year of debt service to take out $3.05 million. That is cash the hotel no longer has in a weak year. Hotel NOI moves faster than income on leased property, and lender covenants are written around it. `/hotel-financing/covenants-and-cash-management` shows real trigger levels from 2026 loans.\n\nThe second risk is the next maturity. A larger balance has to be refinanced or repaid at the end of the term, and an interest-only loan does not shrink along the way. `/hotel-financing/interest-only-loans` and `/hotel-financing/loan-maturities-2026-2027` cover both.\n\nThe third is recourse. If the larger loan comes from a bank with a personal guaranty, you have converted hotel equity into cash and added a personal obligation. If selling would raise more than borrowing, compare the two directly with `/tools/refinance-vs-sell` and `/hotel-financing/refinance-or-sell`."
    }
  ],
  table: {
    caption: "Sources and uses in two hotel cash-out refinances securitized in 2026",
    columns: [
      "Item",
      "Marriott Tampa Westshore, 310 rooms[1]",
      "Holiday Inn Hotel Chelsea, 226 rooms[5]"
    ],
    rows: [
      [
        "Loan amount and note date",
        "$46,500,000; May 28, 2026",
        "$76,500,000 whole loan; June 5, 2026"
      ],
      [
        "Existing loan payoff",
        "$22,424,487 (48.2%)",
        "$66,776,840 (87.3%)"
      ],
      [
        "Cash returned to the sponsor",
        "$17,757,032 (38.2%)",
        "$8,401,598 (11.0%)"
      ],
      [
        "Upfront reserves",
        "$5,507,309 (11.8%)",
        "$416,359 (0.5%)"
      ],
      [
        "Closing costs",
        "$811,172 (1.7%)",
        "$905,203 (1.2%)"
      ],
      [
        "Underwritten NCF DSCR",
        "1.84x",
        "1.40x"
      ],
      [
        "Underwritten NOI debt yield",
        "16.8%",
        "11.6%"
      ],
      [
        "Loan-to-value at cut-off",
        "56.6% on the as-is value; 50.0% on the as-complete value",
        "67.1%"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts the 10-year Treasury at 4.94% and SOFR at 3.85% as of September 17, 2026. It marks conventional DSCR, debt yield and loan-to-value limits as not yet published, for cash-out loans as for any other, because no lender publishes them.[4]"
  },
  workedExample: {
    label: "Hypothetical: taking cash out of a $15.0M hotel with a $6.2M loan balance",
    body: "Hypothetical. The hotel is worth $15,000,000 and earns $1,450,000 of NOI. The existing loan balance is $6,200,000 with no prepayment cost. The new lender's tests, the 7.00 percent rate, 25-year amortization, the 1.5 percent closing cost figure and the reserves are all assumptions for the arithmetic, not quotes or lender rules.\n\nSizing. At an assumed 65 percent loan-to-value, the loan is $9,750,000. Debt service is $68,911 a month, or $826,932 a year. DSCR is $1,450,000 divided by $826,932, or 1.75 times. Debt yield is $1,450,000 divided by $9,750,000, or 14.9 percent. In this example loan-to-value is the binding test.\n\nSources and uses. Loan proceeds $9,750,000. Less payoff of $6,200,000. Less closing costs at 1.5 percent, or $146,250. Less reserves of $350,000. Cash to the owner is $3,053,750, which is 31.3 percent of the loan.\n\nCost of the cash. A $6,200,000 loan on the same terms would cost $525,844 a year. The larger loan costs $826,932, so the owner pays about $301,088 more each year, part of it principal, to hold $3,053,750 of cash.\n\nSBA 504 contrast. On a $6,000,000 owner-operated hotel with $4,200,000 of qualified debt, the 90 percent ceiling is $5,400,000. A hotel owner must also contribute at least 15 percent, which leaves 85 percent, or $5,100,000. The $900,000 above the debt could fund only itemized eligible business expenses, not a distribution to the owner."
  },
  faq: [
    {
      q: "I own my hotel free and clear. Can I borrow against it and pull cash out?",
      a: "Yes, from conventional lenders. With no payoff, nearly all of the loan after closing costs and reserves is cash to you. The lender will still size the loan to NOI and ask what the money is for. SBA loans cannot be used for distributions to owners."
    },
    {
      q: "How much cash can I take out of my hotel on a refinance?",
      a: "The new loan amount minus the payoff, prepayment cost, closing costs and reserves. Lenders do not publish their limits. In two public 2026 hotel refinances, 38.2 percent and 11.0 percent of the loan went back to the sponsor, at loan-to-value ratios of 56.6 and 67.1 percent."
    },
    {
      q: "Can I do a cash-out refinance on my hotel with an SBA loan?",
      a: "Not to pay yourself. SBA's regulation bars using proceeds for payments or distributions to the owners. A 504 refinance can add itemized eligible business expenses up to 90 percent of value, and a hotel must meet the 15 percent borrower contribution rule."
    },
    {
      q: "Is the cash I take out of a hotel refinance taxable?",
      a: "Generally no. The IRS says loan proceeds are not included in gross income because you must repay them. But a partnership distribution above a partner's basis can trigger gain, and interest deductibility depends on how the cash is used. Ask your CPA first."
    },
    {
      q: "How long do I have to own a hotel before I can do a cash-out refinance?",
      a: "Conventional lenders publish no rule, but a recent purchase price anchors value, so expect to document what changed. SBA's 504 refinance requires debt incurred at least 6 months before application and a business operating for 2 years."
    },
    {
      q: "I want to pull equity out of my hotel to buy a second one. How do lenders look at that?",
      a: "As a business purpose, which helps. They will test whether the first hotel covers the larger payment on its own, and the second hotel's lender will count the new debt in your global cash flow. Interest tracing rules also tie deductibility to that use."
    },
    {
      q: "Do I pay closing costs on a cash-out refinance?",
      a: "Yes, and they come out of the proceeds. In two public 2026 hotel refinances, closing costs were 1.7 percent and 1.2 percent of the loan. Reserves came out too: one loan held back $5.5 million, mostly for a PIP."
    }
  ],
  sources: [
    {
      n: 1,
      label: "BANK5 2026-5YR23, free writing prospectus: structural and collateral term sheet dated June 22, 2026 (Loan No. 9, Marriott Tampa Westshore: sources and uses, underwriting, reserves, pp. T-104 to T-108)",
      url: "https://www.sec.gov/Archives/edgar/data/2140978/000153949726001820/n5964_x2-ts.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025): 7(a) debt refinancing (Section B, Ch. 1, Para. A.1, p. 111); 504 debt refinance without expansion, Qualified Debt, Eligible Business Expenses and the 90% loan-to-value limit (Section C, Ch. 1, Para. C.10, pp. 338-342); borrower contribution for special purpose property (pp. 354-355)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "13 CFR 120.130, Restrictions on uses of proceeds",
      url: "https://www.law.cornell.edu/cfr/text/13/120.130",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
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
      label: "BMO 2026-5C16 Mortgage Trust, free writing prospectus: structural and collateral term sheet dated August 4, 2026 (Loan No. 10, Holiday Inn Hotel Chelsea: sources and uses, underwriting, p. 135)",
      url: "https://www.sec.gov/Archives/edgar/data/2136643/000153949726002077/n6057_x4-ts.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Topic no. 432, Form 1099-A and Form 1099-C (page last reviewed September 5, 2026)",
      url: "https://www.irs.gov/taxtopics/tc432",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "26 CFR 1.163-8T, Allocation of interest expense among expenditures (temporary)",
      url: "https://www.law.cornell.edu/cfr/text/26/1.163-8T",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "12 CFR Part 34, Subpart D, Appendix A: Interagency Guidelines for Real Estate Lending Policies (supervisory loan-to-value limits)",
      url: "https://www.law.cornell.edu/cfr/text/12/appendix-A_to_subpart_D_of_part_34",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 9,
      label: "26 U.S.C. 731, Extent of recognition of gain or loss on distribution",
      url: "https://www.law.cornell.edu/uscode/text/26/731",
      publisher: "U.S. Code, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 10,
      label: "26 U.S.C. 752, Treatment of certain liabilities",
      url: "https://www.law.cornell.edu/uscode/text/26/752",
      publisher: "U.S. Code, via Legal Information Institute",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/refinance",
      "/hotel-financing/refinance-or-sell",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/closing-costs",
      "/hotel-financing/covenants-and-cash-management"
    ],
    glossary: [
      "/glossary/ltv",
      "/glossary/dscr",
      "/glossary/debt-yield",
      "/glossary/defeasance"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Find out how much your hotel could borrow",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets arranges hotel refinancing and recapitalizations from $5 million and provides a free broker opinion of value to start the sizing."
};

export default page;
