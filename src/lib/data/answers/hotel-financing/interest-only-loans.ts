/**
 * Can I get an interest-only hotel loan?
 * Answer page: /hotel-financing/interest-only-loans
 *
 * Every figure was read at its source on 2026-09-18. Worked-example arithmetic was
 * recomputed by script before publishing. Do not hand-edit prose without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "interest-only-loans",
  cluster: "hotel-financing",
  isHub: false,
  title: "Interest-Only Hotel Loans: Who Offers Them (2026)",
  h1: "Can I get an interest-only hotel loan?",
  description: "Which hotel lenders offer interest-only periods in 2026, which programs forbid them, and what interest-only does to payment, DSCR and the balloon.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "Can I get an interest-only hotel loan?",
    "Can I get interest-only on a hotel CMBS loan?",
    "How much lower is an interest-only payment on a $10 million hotel loan?",
    "Are SBA hotel loans ever interest-only?",
    "Does interest-only help my DSCR on a hotel refinance?",
    "My hotel loan has three years of interest-only left. What happens when it ends?",
    "What's a debt service coverage ratio (DSCR) and why does it matter for hotel loans?",
    "What's the typical amortization period on a hotel loan?"
  ],
  answer: "Yes, from some lenders. Bridge and construction loans are usually interest-only, and CMBS conduits often grant it: in one conduit pool marketed in February 2026, 67.3 percent of the balance was interest-only to maturity and another 10.1 percent had a partial interest-only period.[1] SBA 7(a) loans must fully amortize with no balloon,[2] and bank regulators require limits on non-amortizing loans.[3]",
  takeaways: [
    "Interest-only lowers the payment. It does not lower the debt, so the full balance is still there at maturity.",
    "Who offers it: bridge lenders and construction lenders as a matter of course, CMBS and life companies for stronger loans, banks for short periods.",
    "Who does not: SBA does not allow balloon payments on 7(a) loans, and USDA guaranteed loans must amortize, with any interest-only period ending within three years.[2][4]",
    "Interest-only raises DSCR but leaves debt yield and LTV untouched. If debt yield is your binding test, interest-only will not get you more proceeds.",
    "On a $10 million loan at 7.00 percent, interest-only saves about $148,000 a year against a 25-year schedule, and skips about $2.1 million of principal paydown over ten years."
  ],
  sections: [
    {
      h2: "Which hotel lenders offer interest-only?",
      lead: "Transitional lenders offer it by default, securitized and insurance lenders offer it to stronger loans, and banks offer it sparingly.",
      body: "Bridge and debt fund loans are usually interest-only for the whole term, because the hotel is in transition and the business plan needs the cash; see `/hotel-financing/bridge-loans`. Construction loans charge interest only on the drawn balance while the hotel is built; see `/hotel-financing/construction-loans`.\n\nCMBS is where a stabilized hotel is most likely to find interest-only on permanent debt. Conduit pool disclosures are public, and one shows the scale. The Benchmark 2026-B42 pool, marketed February 18, 2026, held 62 loans totaling $729,201,713 across property types. By balance, 67.3 percent was interest-only for the full term, 10.1 percent was interest-only and then amortizing, and 16.5 percent amortized from the start. The pool's weighted average loan-to-value was 50.1 percent and its underwritten debt service coverage was 2.57 times.[1] That is one pool and only 1.8 percent of it was hospitality, so it shows what conduits will do for low-leverage loans, not what a hotel should expect. `/hotel-financing/cmbs-loans` covers the hotel-specific terms.\n\nBanks sit under a rule. The interagency real estate lending guidelines require each bank's loan policy to include standards for the acceptability of, and limits on, non-amortizing loans.[3] In practice that means a bank may give a year or two of interest-only during a renovation or a ramp, then amortize. No lender publishes its interest-only policy as a number, and our rate sheet does not print one.[5]"
    },
    {
      h2: "Are SBA or USDA hotel loans ever interest-only?",
      lead: "Only briefly. Both programs require the loan to pay itself off, so interest-only is limited to an early period such as construction.",
      body: "SBA's SOP is direct: SBA does not allow balloon payments, and a fixed-rate loan must use a payment that fully amortizes it by maturity. The lender may adjust the amortization schedule to meet the cash flow needs of the business, and the note terms must state any interest-only payment period.[2] A 7(a) loan can run 25 years on real estate plus the period needed to complete construction or improvements, which is where an interest-only stretch usually sits.[6] The 504 debenture is fully amortizing over 10, 20 or 25 years.[5]\n\nUSDA's guaranteed loan regulation is more specific. Balloon maturities are not allowed. If the note provides an interest-only period, the first full payment of principal and interest must begin no more than three years from the date of the note.[4]\n\nFor a small hotel, then, the trade is clear. Government-guaranteed debt gives long amortization and no refinance risk. It does not give years of interest-only."
    },
    {
      h2: "How much does interest-only lower the payment?",
      lead: "On a $10 million loan at 7.00 percent, interest-only is $700,000 a year, against about $848,000 on a 25-year amortization schedule.",
      body: "The rate in that comparison is an assumption for the arithmetic, not a quote. Interest-only is simply the balance times the rate: $10,000,000 times 7.00 percent equals $700,000 a year, or $58,333 a month. A 25-year amortizing payment at the same rate is $70,678 a month, or $848,135 a year. The difference is $148,135 a year.\n\nThe saving shrinks as amortization lengthens and as rates rise, because at higher rates more of an amortizing payment is interest anyway. The 10-year Treasury, the index a fixed-rate quote is struck against, was 4.94 percent on September 17, 2026.[5][7] Run your own numbers with `/tools/dscr-calculator`."
    },
    {
      h2: "Does interest-only help me qualify for a bigger loan?",
      lead: "It helps on the DSCR test and does nothing on the debt yield and LTV tests, so it depends on which test is binding.",
      body: "DSCR divides NOI by annual debt service, so a smaller payment produces a higher ratio. Debt yield divides NOI by the loan amount and ignores the payment entirely. Loan-to-value ignores it too. `/hotel-financing/loan-requirements` explains how lenders run all three and lend the smallest result.\n\nLenders know this. Some underwrite DSCR on an amortizing payment even when the loan is interest-only, precisely so the structure cannot inflate proceeds. Ask which payment the lender's coverage test uses. If the answer is the amortizing payment, interest-only changes your cash flow and nothing else."
    },
    {
      h2: "What is the catch?",
      lead: "The balloon. Every dollar of principal you did not pay is still owed at maturity, and the refinance has to cover it.",
      body: "On the same $10 million loan, ten years of 25-year amortization pays the balance down to about $7,863,000. The interest-only borrower still owes $10,000,000. If rates or values have moved against the hotel by then, that $2.1 million gap is the difference between a routine refinance and a cash-in one. `/hotel-financing/loan-maturities-2026-2027` describes what that looks like for loans coming due now, and `/hotel-financing/loan-workouts` covers what happens when a maturity cannot be met.\n\nA partial interest-only period has its own cliff. When it ends, the payment steps up to the amortizing amount, about 21 percent higher in this example, with no change in the hotel's income. Budget for the step before it arrives."
    },
    {
      h2: "When does interest-only make sense for a hotel?",
      lead: "When the cash it frees has a better use than paying down the loan, and the exit does not depend on amortization.",
      body: "Three cases are common. A renovation or PIP period, when cash flow dips and then recovers; see `/hotel-financing/pip-and-renovation-loans`. A short hold, where the owner plans to sell before amortization would have mattered much. And a low-leverage loan, where the balloon is comfortably refinanceable even at a lower value.\n\nIt makes less sense on a high-leverage loan held to maturity in a flat market, because amortization is the only thing reducing refinance risk there. If a lender offers a choice, compare the two structures over your actual hold period, including the balance you will owe at the end; `/hotel-financing/how-debt-placement-works` explains how to compare quotes on an all-in basis."
    }
  ],
  table: {
    caption: "Interest-only availability by hotel lender type, September 2026",
    columns: [
      "Lender type",
      "Interest-only?",
      "Rule or evidence",
      "Balloon at maturity?"
    ],
    rows: [
      [
        "Bridge and debt fund",
        "Usually, for the full term",
        "Rate sheet describes the row as floating-rate and short-term[5]",
        "Yes"
      ],
      [
        "Construction",
        "Yes, on the drawn balance during the build",
        "Interest usually paid from a budgeted reserve",
        "Yes, unless the loan converts to permanent"
      ],
      [
        "CMBS conduit",
        "Often, full-term or partial, for stronger loans",
        "One February 2026 pool: 67.3% full-term and 10.1% partial by balance[1]",
        "Yes"
      ],
      [
        "Life company",
        "Sometimes, at low leverage",
        "Not published",
        "Usually"
      ],
      [
        "Bank and credit union",
        "Short periods, case by case",
        "Policy must set limits on non-amortizing loans[3]",
        "Often, when the term is shorter than the amortization"
      ],
      [
        "SBA 7(a)",
        "Only a stated early period, such as construction",
        "No balloon payments; must fully amortize by maturity[2]",
        "No"
      ],
      [
        "USDA B&I guarantee",
        "Up to three years from the note date",
        "7 CFR 5001.402[4]",
        "No"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts the 10-year Treasury at 4.94% and SOFR at 3.85% as of September 17, 2026, and describes both SBA programs as fully amortizing. It publishes no interest-only terms for conventional lenders, because none of them publishes any.[5]"
  },
  workedExample: {
    label: "Hypothetical: a $10.0M hotel loan, interest-only versus 25-year amortization",
    body: "Hypothetical. Loan amount $10,000,000, rate 7.00 percent, NOI $1,200,000. The rate and the coverage test are assumptions for the arithmetic.\n\nPayment. Interest-only: $10,000,000 times 7.00 percent equals $700,000 a year. Amortizing over 25 years: $70,678 a month, or $848,135 a year. Interest-only saves $148,135 a year. A three-year interest-only period followed by amortization saves about $444,400 of cash in total.\n\nCoverage. DSCR is $1,200,000 divided by $700,000, or 1.71 times, on the interest-only payment. It is $1,200,000 divided by $848,135, or 1.41 times, on the amortizing payment. Same hotel, same loan, same risk of default at maturity.\n\nProceeds. At an assumed 1.35 times test, interest-only sizing would support $1,200,000 divided by 1.35 divided by 7.00 percent, or about $12.70M. Amortizing sizing supports about $10.48M. But the debt yield on $12.70M is only 9.45 percent, against 11.45 percent on $10.48M. A lender with a debt yield floor between those two numbers lends the smaller amount no matter how the payment is structured.\n\nBalance. After five years the amortizing loan owes about $9,116,000. After ten years it owes about $7,863,000. The interest-only loan owes $10,000,000 at both dates. The ten-year difference is about $2,137,000, against about $1,481,000 of payments saved over the same ten years."
  },
  faq: [
    {
      q: "Can I get interest-only on a hotel CMBS loan?",
      a: "Often, if leverage is low and coverage is strong. In one conduit pool marketed in February 2026, 67.3 percent of the balance was interest-only for the full term and 10.1 percent had a partial period. Hotels were a small share of that pool, so expect closer scrutiny."
    },
    {
      q: "Are SBA hotel loans ever interest-only?",
      a: "Only for a stated early period, typically during construction or renovation. SBA's SOP says balloon payments are not allowed and the loan must fully amortize by maturity. The 504 debenture is fully amortizing over 10, 20 or 25 years."
    },
    {
      q: "How much lower is an interest-only payment on a $10 million hotel loan?",
      a: "At an assumed 7.00 percent, interest-only is $700,000 a year. A 25-year amortizing payment is about $848,000 a year. The difference is about $148,000 a year, or roughly $12,300 a month."
    },
    {
      q: "Does interest-only help my DSCR on a hotel refinance?",
      a: "It raises the DSCR calculated on the actual payment. Some lenders test coverage on an amortizing payment anyway, and debt yield and LTV ignore the payment entirely. Ask the lender which payment its test uses before counting on extra proceeds."
    },
    {
      q: "My hotel loan has three years of interest-only left. What happens when it ends?",
      a: "The payment steps up to the amortizing amount, based on the schedule in your note. On a 7.00 percent loan with 25-year amortization the step is about 21 percent. Put the higher payment in your budget now, and check coverage covenants against it."
    },
    {
      q: "Is an interest-only loan riskier?",
      a: "It carries more refinance risk, because the full balance comes due at maturity. After ten years, a 25-year amortizing loan at 7.00 percent has paid off about 21 percent of its balance. An interest-only loan has paid off none."
    },
    {
      q: "Do banks offer interest-only on hotel loans?",
      a: "Sometimes, for a year or two around a renovation, a ramp-up or a seasonal business. Federal guidelines require every bank's loan policy to set limits on non-amortizing loans, so long interest-only periods on permanent bank debt are uncommon."
    },
    {
      q: "Can I get an interest-only USDA loan for a rural hotel?",
      a: "For a limited time. Under 7 CFR 5001.402, if a guaranteed loan has an interest-only period, the first full principal and interest payment must start within three years of the note date. Balloon maturities are not allowed."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Benchmark 2026-B42 Mortgage Trust, free writing prospectus: new issue announcement, February 18, 2026 (pool balance, amortization types, property types)",
      url: "https://www.sec.gov/Archives/edgar/data/2110410/000153949726000696/n5676_x6-newissue.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section B: amortization, no balloon payments (p. 125); note terms and interest-only payment periods (p. 316)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "12 CFR Part 34, Subpart D, Appendix A: Interagency Guidelines for Real Estate Lending Policies (standards for and limits on non-amortizing loans)",
      url: "https://www.law.cornell.edu/cfr/text/12/appendix-A_to_subpart_D_of_part_34",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "7 CFR 5001.402, Term length, loan schedule, and repayment",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.402",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
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
      label: "Daily Treasury Par Yield Curve Rates",
      url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve",
      publisher: "U.S. Department of the Treasury",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/cmbs-loans",
      "/hotel-financing/bridge-loans",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/hotel-loan-rates",
      "/hotel-financing/loan-maturities-2026-2027"
    ],
    glossary: [
      "/glossary/dscr",
      "/glossary/debt-yield",
      "/glossary/noi"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Ask which lenders will offer interest-only on your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets compares interest-only and amortizing quotes over the owner's actual hold period, balloon included, before recommending either."
};

export default page;
