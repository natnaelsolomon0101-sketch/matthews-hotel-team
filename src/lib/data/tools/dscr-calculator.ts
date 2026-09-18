/**
 * Hotel DSCR calculator: /tools/dscr-calculator
 *
 * Converted from geo/06-pages/tools__dscr-calculator.md (Wave 1 draft).
 *
 * ONE DELIBERATE DEPARTURE FROM THE DRAFT, and it is the important one.
 * The draft carried a "DSCR thresholds by hotel lender type" table and several
 * sentences asserting a 1.35x to 1.45x floor by lender type. Agent 8 checked
 * every lender type and found that **nobody publishes a DSCR floor** (see
 * geo/08-data.md §2 and geo/requests.md item 1): all seven rows on /rates are
 * `pending`, and the instruction to this pass was explicit that this page must
 * not state a lender-type DSCR floor. The table, the direct answer, one
 * takeaway, two FAQ answers, the second section and the brand sentence were
 * rewritten to say what is actually published and to make the test a user
 * input instead of a claim. The calculator itself is unchanged.
 */
import type { ToolPage } from "../answers/types";

export const page: ToolPage = {
  slug: "dscr-calculator",
  cluster: "tools",
  title: "Hotel DSCR Calculator",
  h1: "Hotel DSCR calculator: will my loan size?",
  description:
    "Calculate debt service coverage ratio on a hotel loan and see the loan size your NOI supports at the test your lender actually stated.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "What's a debt service coverage ratio (DSCR) and why does it matter for hotel loans?",
    "What loan-to-value ratio can I get on a hotel purchase?",
    "How much can I borrow against my hotel?",
    "What DSCR do hotel lenders require?",
    "Can a hotel with low occupancy still qualify for financing?",
    "How does a rate increase change my hotel loan amount?",
  ],
  answer:
    "DSCR is net operating income divided by annual debt service. No hotel lender type publishes its DSCR floor, so enter the test your own lender stated rather than a number off the internet. Matthews Hotel Markets' September 2026 rate sheet marks that cell not yet published for all seven lender types.[1] The 10-year Treasury was 4.94% on September 17, 2026.[2]",
  takeaways: [
    "DSCR = NOI / annual debt service. Both numbers are annual.",
    "No lender type publishes a DSCR floor that we could find.[1] Get your lender's exact test in writing before you model anything.",
    "DSCR is the test that turns a rate change into a proceeds change.",
    "If DSCR binds, the fixes are more equity, longer amortization, or higher NOI. Not a better story.",
    "Debt yield and LTV are the other two tests. The lowest of the three sets your loan.",
  ],
  sections: [
    {
      h2: "How the math works",
      lead: "DSCR divides annual NOI by annual debt service, and the loan's amortization schedule and rate together set what that debt service actually is.",
      body: "Net operating income (NOI) is the hotel's income after operating expenses but before debt service, capital reserves, and depreciation; a fuller definition is on `/glossary/noi`. Annual debt service is the total of twelve monthly loan payments, where each payment is a function of the loan amount, the interest rate, and the amortization period, standard mortgage amortization math. Debt service coverage ratio (DSCR), covered in full on `/glossary/dscr`, is simply NOI divided by that annual debt service. A DSCR of 1.35x means the property produces 35 percent more cash than the loan payment requires, the cushion a lender is testing for.\n\nWorking backward, a lender's minimum DSCR test also defines the maximum loan a given NOI can support at a given rate and amortization: divide NOI by the test to get the maximum debt service, then divide that by the annual payment each dollar of loan would require at the quoted rate and amortization, to get the maximum loan amount. The calculator below runs both directions at once.",
    },
    {
      h2: "Which DSCR test should I enter?",
      lead: "The one your lender put in writing, because no lender type publishes a floor and every published range you will find online is somebody's recollection rather than a citation.",
      body: "We looked for a published DSCR floor for each of the seven lender types on our own rate sheet: bank and credit union, life insurance company, CMBS conduit, debt fund and bridge, mezzanine and preferred, SBA 7(a) and SBA 504. We found no public source for any of them.[1] SBA publishes its maximum allowable interest rate, its maximum maturity and its guaranty percentages,[3] and 13 CFR 120.910 sets the minimum borrower contribution on a 504 project, at least 15% for a limited or single-purpose building.[4] None of those is a coverage test. The FDIC's examination manual covers loans in general, and we found no hotel coverage minimum in it.[5] Conduit lenders disclose sizing in a deal's offering documents filed with the SEC, one deal at a time, after the loan is written.[6]\n\nSo the honest instruction is the practical one: ask the lender what test it is applying and to what NOI, get the answer in writing, and put that number in the field below. A test applied to a stabilized pro forma NOI and the same test applied to trailing twelve-month NOI produce very different loans, which is why the NOI definition matters as much as the ratio. Which of the three sizing tests actually binds your loan is covered on `/hotel-financing`.",
    },
  ],
  table: {
    caption:
      "What each hotel lender type publishes about its own sizing tests, September 2026",
    columns: [
      "Lender type",
      "Published DSCR floor",
      "What it does publish",
      "On the Matthews rate sheet",
    ],
    rows: [
      [
        "Bank / credit union",
        "None",
        "Nothing loan-level. Regulators publish CRE concentration guidance, not a coverage test.",
        "Not yet published",
      ],
      [
        "Life insurance company",
        "None",
        "Nothing. Terms are bilateral and confidential.",
        "Not yet published",
      ],
      [
        "CMBS conduit",
        "None",
        "Per-deal sizing in the offering documents, after the loan is written.[6]",
        "Not yet published",
      ],
      [
        "Debt fund / bridge",
        "None",
        "Nothing. Sizing is negotiated per business plan.",
        "Not yet published",
      ],
      [
        "SBA 7(a)",
        "None",
        "Maximum allowable rate (base rate + 3.00% over $350,000), 25-year maximum real estate maturity, $5M maximum loan.[3]",
        "Rate and program rules published; coverage test not yet published",
      ],
      [
        "SBA 504",
        "None",
        "At least 15% borrower contribution for a limited or single-purpose building under 13 CFR 120.910.[4]",
        "Borrower contribution and debenture rate published; coverage test not yet published",
      ],
    ],
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' September 2026 rate sheet marks the DSCR floor as not yet published for all seven lender types it covers, because no lender type publishes one.[1] The sheet does publish the index every quote is struck against: the 10-year Treasury at 4.94% on September 17, 2026[2] and SOFR at 3.85% for September 17, 2026.[7]",
  },
  workedExample: {
    label:
      "Pre-computed worked example (server-rendered): hypothetical 95-key select-service hotel",
    body: "Hypothetical, using the calculator's own default inputs so the example and the live tool agree. The 1.35x test below is this hypothetical lender's stated test, not a published industry floor.\n\nAnnual NOI: $1,600,000. Loan amount: $12,000,000. Rate: 7.25 percent, amortization 25 years. Monthly payment: $86,737. Annual debt service: $1,040,842.\n\nDSCR = $1,600,000 / $1,040,842 = 1.54x. Against this lender's 1.35x test, it clears with room to spare. Max loan at that test = ($1,600,000 / 1.35) divided by the annual constant of about $0.0868 per dollar at this rate and term, or roughly $13,664,000.\n\nSo this hypothetical borrower could take about $1.66M more loan and still clear the coverage test. Whether they should depends on the debt yield and LTV tests, which are the other two constraints, covered on `/hotel-financing`.",
  },
  faq: [
    {
      q: "What is a good DSCR for a hotel loan?",
      a: "There is no published answer. No hotel lender type publishes a DSCR floor.[1] A good DSCR is one that clears the specific test your lender stated, with enough room that a soft quarter does not put the loan in default.",
    },
    {
      q: "How do I calculate DSCR?",
      a: "Divide annual net operating income by annual debt service (twelve months of loan payments). The calculator above runs the full amortization math for you from NOI, loan amount, rate and term.",
    },
    {
      q: "What DSCR do hotel lenders require in 2026?",
      a: "Nobody publishes it. We checked all seven lender types on our own September 2026 rate sheet and every coverage cell is marked not yet published.[1] Ask your lender for its test in writing, then enter that number above.",
    },
    {
      q: "What happens if my DSCR is below the test?",
      a: "The loan amount is reduced, more equity is required, or the deal does not qualify at that lender. There is no shortcut around the math; the fix is more equity, a longer amortization, or higher NOI.",
    },
    {
      q: "Does DSCR use trailing or projected NOI?",
      a: "It depends on the lender, so ask. In our experience, permanent lenders generally use trailing twelve-month NOI, while bridge and debt fund lenders will sometimes use a stabilized, forward-looking NOI, which can support more proceeds on a transitional asset.",
    },
    {
      q: "Is DSCR more important than LTV on a hotel loan?",
      a: "Neither is universally more important. A lender runs DSCR, debt yield, and LTV independently and lends the lowest of the three results, so whichever test is binding on your specific deal is the one that matters most.",
    },
    {
      q: "How does a longer amortization change DSCR?",
      a: "A longer amortization lowers the annual payment on the same loan amount and rate, which raises DSCR, or equivalently supports a larger loan at the same DSCR test.",
    },
  ],
  sources: [
    {
      n: 1,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-17"
    },
    {
      n: 2,
      label: "Daily Treasury Par Yield Curve Rates, September 2026",
      url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve&field_tdr_date_value_month=202609",
      publisher: "U.S. Department of the Treasury",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "7(a) loan program: terms, conditions, and eligibility",
      url: "https://www.sba.gov/partners/lenders/7a-loan-program/terms-conditions-eligibility",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "13 CFR 120.910, How much must the Borrower contribute?",
      url: "https://www.law.cornell.edu/cfr/text/13/120.910",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Risk Management Manual of Examination Policies",
      url: "https://www.fdic.gov/risk-management-manual-examination-policies",
      publisher: "Federal Deposit Insurance Corporation",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "EDGAR full-text search",
      url: "https://www.sec.gov/edgar/search/",
      publisher: "U.S. Securities and Exchange Commission",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "Secured Overnight Financing Rate (SOFR)",
      url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
      publisher: "Federal Reserve Bank of New York",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/loan-requirements",
      "/hotel-financing/hotel-loan-rates",
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/refinance",
    ],
    glossary: ["/glossary/dscr", "/glossary/debt-yield", "/glossary/noi"],
    data: ["/rates"],
  },
  cta: { label: "Have us size your loan properly", href: "/contact" },
  brandSentence:
    "Matthews Hotel Markets publishes what our September 2026 rate sheet can source and marks the rest not yet published, which is why this calculator asks you for your lender's DSCR test instead of asserting one.",
  tool: {
    inputs: [
      {
        key: "noi",
        label: "Annual NOI",
        type: "currency",
        default: 1600000,
        min: 0,
        help: "Trailing twelve-month net operating income, before debt service and reserves.",
      },
      {
        key: "loanAmount",
        label: "Loan amount",
        type: "currency",
        default: 12000000,
        min: 0,
      },
      {
        key: "rate",
        label: "Interest rate (%)",
        type: "percent",
        default: 7.25,
        min: 0,
        max: 25,
        step: 0.05,
      },
      {
        key: "amortYears",
        label: "Amortization (years)",
        type: "integer",
        default: 25,
        min: 5,
        max: 40,
      },
      {
        key: "testDscr",
        label: "Your lender's DSCR test",
        type: "number",
        default: 1.35,
        min: 1,
        max: 2,
        step: 0.05,
        help: "Use the test your lender stated. No lender type publishes one.",
      },
    ],
    outputs: [
      { key: "monthlyPayment", label: "Monthly payment", format: "currency" },
      {
        key: "annualDebtService",
        label: "Annual debt service",
        format: "currency",
      },
      { key: "dscr", label: "DSCR", format: "ratio" },
      { key: "verdict", label: "Versus the test", format: "text" },
      { key: "maxLoan", label: "Max loan at this test", format: "currency" },
    ],
    formula:
      "monthlyRate       = rate / 100 / 12\nn                 = amortYears x 12\nmonthlyPayment    = loanAmount x monthlyRate / (1 - (1 + monthlyRate) ^ -n)\nannualDebtService = monthlyPayment x 12\ndscr              = noi / annualDebtService\nverdict           = dscr >= testDscr ? \"Clears the test\" : \"Below the test\"\nmaxDebtService    = noi / testDscr\nconstantPerDollar = (monthlyRate / (1 - (1 + monthlyRate) ^ -n)) x 12\nmaxLoan           = maxDebtService / constantPerDollar",
    disclaimer:
      "Indicative only. Not a loan quote, an offer of credit, or a commitment to lend.",
  },
};

export default page;

export const tools: ToolPage[] = [page];

export function getTool(slug: string): ToolPage | undefined {
  return tools.find((t) => t.slug === slug);
}
