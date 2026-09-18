/**
 * Hotel debt yield calculator: /tools/debt-yield-calculator
 *
 * Spec: geo/05-briefs/_wave2-stubs.md, section D. Inputs NOI and loan amount,
 * plus the debt yield test the user's own lender stated. Outputs debt yield
 * and the maximum loan at that test.
 *
 * No debt yield floor is asserted anywhere on this page. No lender type
 * publishes one, and the /rates sheet carries no debt yield column for the
 * same reason. The default test is a labeled hypothetical, the same 10 percent
 * placeholder /glossary/debt-yield uses. Default NOI and loan match
 * /tools/dscr-calculator so the two tools describe one hypothetical hotel.
 */
import type { ToolPage } from "../answers/types";
import { computeDebtYield, pct, usd, type DebtYieldInput } from "./math";
import { EDITION_LABEL, benchmarkOn } from "./rates-line";

export const DEFAULTS: DebtYieldInput = {
  noi: 1600000,
  loanAmount: 12000000,
  testDebtYield: 10,
};

const TEST_STEPS = [9, 10, 11, 12];
const tableRows = TEST_STEPS.map((testDebtYield) => {
  const r = computeDebtYield({ ...DEFAULTS, testDebtYield });
  return [
    pct(testDebtYield),
    usd(r.maxLoan),
    r.room !== null && r.room >= 0
      ? `Clears, with ${usd(r.room)} of room`
      : `Over by ${usd(r.room === null ? null : -r.room)}`,
  ];
});

export const page: ToolPage = {
  slug: "debt-yield-calculator",
  cluster: "tools",
  title: "Hotel Debt Yield Calculator",
  h1: "Hotel debt yield calculator: how big a loan does my NOI support?",
  description:
    "Calculate debt yield on a hotel loan from NOI and loan amount, then see the maximum loan at the debt yield test your own lender stated.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "What is debt yield and how do lenders use it on hotel loans?",
    "How much can I borrow against my hotel?",
    "What debt yield do hotel lenders require?",
    "How do CMBS lenders size a hotel loan?",
    "Why did my hotel loan proceeds come in lower than the LTV suggested?",
  ],
  answer: `Debt yield is net operating income divided by the loan amount, as a percent. It ignores the rate, the amortization and the appraisal. A hotel with $1,600,000 of NOI and a $12,000,000 loan has a 13.33% debt yield. No lender type publishes its floor, so Matthews Hotel Markets' ${EDITION_LABEL} rate sheet prints none.[1] Type the test your lender stated.`,
  takeaways: [
    "Debt yield = NOI / loan amount. Maximum loan = NOI / the lender's debt yield test.",
    "It is the one sizing test that does not move when rates move. DSCR does.",
    "No lender type publishes a debt yield floor.[1] CMBS sizing is disclosed one deal at a time, in offering documents, after the loan is written.[2]",
    "A lender runs debt yield, DSCR and LTV and lends the smallest result.",
    "Because the rate is not in the formula, the only ways to clear a debt yield test are more NOI or a smaller loan.",
  ],
  sections: [
    {
      h2: "How the math works",
      lead: "Divide annual NOI by the loan amount to get debt yield, or divide NOI by a debt yield test to get the largest loan that test allows.",
      body: "Net operating income (`/glossary/noi`) goes on top. The loan amount goes on the bottom. The result is a percent, and it answers one question for the lender: if we took this hotel back on day one, what would our money earn at today's NOI? A fuller definition is on `/glossary/debt-yield`.\n\nTurn it around to size a loan. If a lender's test is a given percent, the maximum loan is NOI divided by that percent. Nothing else enters. There is no rate, no amortization schedule and no appraised value in the formula, which is why a borrower cannot improve the result by negotiating terms.",
    },
    {
      h2: "Which debt yield test should I enter?",
      lead: "The one your lender put in writing, because no lender type publishes a floor and the default in the field below is only a hypothetical placeholder.",
      body: `We publish a monthly rate sheet and it has no debt yield column, because there is no public source to fill one from. The sizing cells it does carry for priced lender types, the DSCR floor and the maximum LTV, are marked not yet published for the same reason.[1] Conduit lenders disclose how a loan was sized in that deal's offering documents filed with the SEC, one deal at a time, after the loan closes.[2] That tells you what one lender did on one hotel. It is not a floor you can plan around.\n\nSo ask. Get the test, and the NOI it is applied to, in writing. A test applied to trailing twelve-month NOI after an FF&E reserve produces a smaller loan than the same test applied to a stabilized pro forma. The definition of NOI matters as much as the percent.`,
    },
    {
      h2: "How is debt yield different from DSCR and cap rate?",
      lead: "DSCR depends on the interest rate, cap rate depends on price, and debt yield depends on neither.",
      body: `DSCR divides NOI by annual debt service, so it changes whenever the rate or the amortization changes. The 10-year Treasury was ${benchmarkOn("ust10")}.[3] When that index moves, the payment on a new fixed-rate loan moves, and the DSCR test allows a different loan. The debt yield test allows exactly the same loan as before. Run the coverage side on \`/tools/dscr-calculator\`.\n\nCap rate divides the same NOI by the price rather than the loan. The loan is smaller than the price, so on the same hotel the debt yield is a larger percent than the cap rate. The two are easy to mix up and they measure different things: cap rate is the buyer's unlevered return on the price, debt yield is the lender's on the loan. The cap rate side is on \`/tools/cap-rate-calculator\`.`,
    },
  ],
  table: {
    caption:
      "Hypothetical hotel with $1,600,000 of NOI and a $12,000,000 loan request: maximum loan at four hypothetical debt yield tests",
    columns: [
      "Debt yield test you enter (hypothetical)",
      "Maximum loan (NOI / test)",
      "The $12,000,000 request",
    ],
    rows: tableRows,
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: `Matthews Hotel Markets' ${EDITION_LABEL} rate sheet carries no debt yield column and marks its DSCR floor and maximum LTV cells not yet published for priced lender types, because lenders do not publish those tests.[1] It does publish the index quotes are struck against: the 10-year Treasury at ${benchmarkOn("ust10")}.[3]`,
  },
  workedExample: {
    label:
      "Pre-computed worked example (server-rendered): hypothetical 95-key select-service hotel",
    body: "Hypothetical, using the calculator's own default inputs so the example and the live tool agree. It is the same hypothetical hotel as the worked example on `/tools/dscr-calculator`. The 10 percent test is this hypothetical lender's stated test, not a published industry floor.\n\nAnnual NOI: $1,600,000. Loan amount: $12,000,000.\n\nDebt yield = $1,600,000 / $12,000,000 = 13.33%. Against this lender's 10.00% test, it clears.\n\nMaximum loan at that test = $1,600,000 / 0.10 = $16,000,000. That is $4,000,000 more than the request.\n\nNow compare tests. On the DSCR calculator, the same NOI at a hypothetical 1.35x test, 7.25 percent and 25 years supports about $13,664,000. That is smaller than $16,000,000, so for this hypothetical lender DSCR is the binding test, not debt yield. If the rate fell far enough, the DSCR loan would grow past $16,000,000 and debt yield would bind instead, because the debt yield number does not move with the rate.",
  },
  faq: [
    {
      q: "How do I calculate debt yield?",
      a: "Divide annual net operating income by the loan amount and express it as a percent. $1,600,000 of NOI on a $12,000,000 loan is a 13.33% debt yield.",
    },
    {
      q: "What debt yield do hotel lenders require?",
      a: "No lender type publishes one, so we do not print a number.[1] CMBS sizing shows up deal by deal in offering documents filed with the SEC.[2] Ask your lender for its test in writing and enter it above.",
    },
    {
      q: "How do I find the maximum loan from a debt yield test?",
      a: "Divide NOI by the test. At a hypothetical 10% test, $1,600,000 of NOI supports a $16,000,000 loan. At a hypothetical 12% test, the same NOI supports $13,333,333.",
    },
    {
      q: "Does the interest rate change debt yield?",
      a: "No. The formula has no rate and no amortization in it. A rate change moves the DSCR test and leaves the debt yield test where it was.",
    },
    {
      q: "Is debt yield the same as cap rate?",
      a: "No. Cap rate is NOI divided by price. Debt yield is NOI divided by the loan. Because the loan is smaller than the price, debt yield is the larger percent on the same hotel.",
    },
    {
      q: "How can I improve my debt yield?",
      a: "Raise NOI or borrow less. Rate buydowns, longer amortization and a higher appraisal do nothing to it, which is the reason lenders use it.",
    },
    {
      q: "Which NOI does the lender use?",
      a: "Ask, because it varies by lender. Expect NOI after a management fee and an FF&E reserve, which is lower than the NOI on many owner statements. Enter the lender's version, not yours.",
    },
  ],
  sources: [
    {
      n: 1,
      label: `Matthews Hotel Markets ${EDITION_LABEL} rate sheet`,
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18",
    },
    {
      n: 2,
      label: "EDGAR full-text search",
      url: "https://www.sec.gov/edgar/search/",
      publisher: "U.S. Securities and Exchange Commission",
      accessed: "2026-09-18",
    },
    {
      n: 3,
      label: "Daily Treasury Par Yield Curve Rates, September 2026",
      url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve&field_tdr_date_value_month=202609",
      publisher: "U.S. Department of the Treasury",
      accessed: "2026-09-18",
    },
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/loan-requirements",
      "/hotel-financing/cmbs-loans",
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/refinance",
    ],
    glossary: ["/glossary/debt-yield", "/glossary/dscr", "/glossary/noi"],
    data: ["/rates"],
  },
  cta: { label: "Have us size your loan properly", href: "/contact" },
  brandSentence:
    "Matthews Hotel Markets prints only what our rate sheet can source, which is why this calculator asks for your lender's debt yield test instead of asserting one.",
  tool: {
    inputs: [
      {
        key: "noi",
        label: "Annual NOI",
        type: "currency",
        default: DEFAULTS.noi,
        min: 0,
        help: "The NOI your lender underwrites, usually after a management fee and an FF&E reserve.",
      },
      {
        key: "loanAmount",
        label: "Loan amount",
        type: "currency",
        default: DEFAULTS.loanAmount,
        min: 0,
      },
      {
        key: "testDebtYield",
        label: "Your lender's debt yield test (%)",
        type: "percent",
        default: DEFAULTS.testDebtYield,
        min: 1,
        max: 30,
        step: 0.25,
        help: "Use the test your lender stated. No lender type publishes one. The default is hypothetical.",
      },
    ],
    outputs: [
      { key: "debtYield", label: "Debt yield", format: "text" },
      { key: "verdict", label: "Versus the test", format: "text" },
      { key: "maxLoan", label: "Max loan at this test", format: "currency" },
      { key: "room", label: "Room under the test", format: "text" },
    ],
    formula:
      "debtYield = noi / loanAmount x 100\nverdict   = debtYield >= testDebtYield ? \"Clears the test\" : \"Below the test\"\nmaxLoan   = noi / (testDebtYield / 100)\nroom      = maxLoan - loanAmount",
    disclaimer:
      "Indicative only. Every default is hypothetical. Not a loan quote, an offer of credit, or a commitment to lend.",
  },
};

export default page;
