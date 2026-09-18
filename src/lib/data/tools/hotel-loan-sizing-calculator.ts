/**
 * Hotel loan sizing calculator: /tools/hotel-loan-sizing-calculator
 *
 * "How big a loan can my hotel support?" Runs the user's own three tests
 * (DSCR, debt yield, LTV or LTC), shows the loan under each, names the one
 * that binds and the equity that implies. Optional SBA 504 mode.
 *
 * Rules this file follows:
 * - The three tests are the user's. No lender type publishes a DSCR floor, a
 *   debt yield floor, an LTV ceiling or a spread, so the page prints none as a
 *   market fact. Test defaults are labeled hypothetical.
 * - The index field is pre-filled with the 10-year Treasury from the current
 *   /rates edition (read at build time). The spread field starts at zero and
 *   the page does not suggest one.
 * - Because the default rate follows the rate sheet, every number in the
 *   worked example and the table is computed here from math.ts, never typed.
 * - SBA 504 mode uses only published rules: 13 CFR 120.910, 13 CFR 120.920 and
 *   SOP 50 10 8 (pp. 350, 354-355), the same citations as
 *   /hotel-financing/sba-7a-vs-504.
 */
import type { ToolPage } from "../answers/types";
import { benchmark } from "../../rates/sheet";
import {
  SBA_504_HOTEL,
  computeLoanSizing,
  computeSba504,
  loanConstant,
  pct,
  usd,
  type LoanSizingResult,
  type SizingTest,
} from "./math";
import { EDITION_LABEL, benchmarkOn } from "./rates-line";

const ust10 = benchmark("ust10");
if (!ust10) throw new Error('rate sheet has no benchmark "ust10"');

export const DEFAULTS = {
  noi: 1050000,
  value: 12000000,
  indexRate: ust10.value,
  spread: 0,
  amortYears: 25,
  testDscr: 1.35,
  testDebtYield: 10,
  testLtv: 65,
};

export const TEST_LABEL: Record<SizingTest, string> = {
  dscr: "DSCR",
  debtYield: "Debt yield",
  ltv: "LTV / LTC",
};

const size = (rate: number): LoanSizingResult =>
  computeLoanSizing({
    noi: DEFAULTS.noi,
    value: DEFAULTS.value,
    rate,
    amortYears: DEFAULTS.amortYears,
    testDscr: DEFAULTS.testDscr,
    testDebtYield: DEFAULTS.testDebtYield,
    testLtv: DEFAULTS.testLtv,
  });

const defaultRate = DEFAULTS.indexRate + DEFAULTS.spread;
const ex = size(defaultRate);
const constant = loanConstant(defaultRate, DEFAULTS.amortYears);

/** All-in rates for the sensitivity table: the index alone, then round steps. */
const RATE_STEPS = [defaultRate, 6, 7, 8, 9].filter(
  (r, i, a) => a.indexOf(r) === i && (i === 0 || r > defaultRate),
);
const tableRows = RATE_STEPS.map((rate, i) => {
  const r = size(rate);
  return [
    i === 0 ? `${pct(rate)} (the Treasury alone, zero spread)` : pct(rate),
    usd(r.byDscr),
    usd(r.byDebtYield),
    usd(r.byLtv),
    r.binding ? `${TEST_LABEL[r.binding]}: ${usd(r.maxLoan)}` : "n/a",
  ];
});

const sba = computeSba504({ projectCost: DEFAULTS.value, newBusiness: false });
const SBA_BIG = 16000000;
const sbaBig = computeSba504({ projectCost: SBA_BIG, newBusiness: false });
const sbaNew = computeSba504({ projectCost: DEFAULTS.value, newBusiness: true });

export const page: ToolPage = {
  slug: "hotel-loan-sizing-calculator",
  cluster: "tools",
  title: "Hotel Loan Sizing Calculator: DSCR, Debt Yield, LTV",
  h1: "How big a loan can my hotel support? A hotel loan sizing calculator",
  description:
    "Enter NOI, value, rate, amortization and your lender's DSCR, debt yield and LTV tests. See the loan under each test, which one binds, and the equity. SBA 504 mode included.",
  lastUpdated: "2026-09-18",
  authorSlug: "miles-cortez",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "How big a loan can my hotel support?",
    "How much can I borrow against my hotel?",
    "My lender quoted a DSCR, a debt yield and an LTV. Which one limits my loan?",
    "How much equity do I need to buy a hotel?",
    "How does an SBA 504 loan split between the bank, the debenture and my down payment on a hotel?",
    "How do lenders size a hotel loan?",
  ],
  answer: `A hotel lender sizes the loan three ways and lends the smallest result. DSCR caps it at NOI divided by the test and the loan constant. Debt yield caps it at NOI divided by the test. LTV caps it at a percent of value. Lenders do not publish those tests, so enter yours.[1] Matthews Hotel Markets' ${EDITION_LABEL} rate sheet has the 10-year Treasury at ${benchmarkOn("ust10")}.[2]`,
  takeaways: [
    "Three tests, one loan: the smallest of the DSCR, debt yield and LTV results is the loan. The calculator names the test that binds.",
    "DSCR moves with the interest rate and amortization. Debt yield and LTV do not.",
    "No lender type publishes a DSCR floor, a debt yield floor, an LTV ceiling or a spread, so every test here is a field you fill in.[1]",
    `The rate is an index plus a spread. The index field starts at the 10-year Treasury, ${benchmarkOn("ust10")}.[2] The spread field starts at zero because lenders do not publish spreads.`,
    `SBA 504 mode splits a hotel project by published rule: a bank loan of at least ${SBA_504_HOTEL.bankMinPct} percent, a borrower contribution of at least ${SBA_504_HOTEL.borrowerMinPct} percent, and a debenture capped at ${usd(SBA_504_HOTEL.debentureCap)}.[3][4][5]`,
  ],
  sections: [
    {
      h2: "How the three tests size a hotel loan",
      lead: "Each of the three sizing tests turns one input into a maximum loan, and the lender lends the smallest of the three.",
      body: "Debt service coverage. Divide net operating income (`/glossary/noi`) by the lender's DSCR test to get the most annual debt service the lender will allow. Divide that by the loan constant, the annual payment on one dollar of loan at the rate and amortization, to get the loan. A higher rate or a shorter amortization raises the constant and shrinks the loan. The full definition is on `/glossary/dscr`.\n\nDebt yield. Divide NOI by the lender's debt yield test. The rate does not appear, which is why lenders use it: it cannot be flattered by a low coupon or an interest-only period. See `/glossary/debt-yield`.\n\nLoan to value, or loan to cost. Multiply the appraised value by the LTV test. On a purchase, lenders usually use the lower of price and appraised value, and on a construction or renovation deal they test against total cost. Enter whichever figure your lender is using. See `/glossary/ltv`.\n\nThe binding constraint is the test that produces the smallest loan. Implied equity is the value or price you entered, less that loan. Closing costs, reserves and any PIP are on top of that figure.",
    },
    {
      h2: "What rate should I enter?",
      lead: `The rate field is an index plus a spread: the index starts at the 10-year Treasury from our ${EDITION_LABEL} rate sheet, and the spread is yours to type.`,
      body: `Fixed-rate hotel loans are quoted as a spread over a Treasury or swap index. The index is public. The 10-year Treasury was ${benchmarkOn("ust10")},[2] and the calculator pre-fills it from the current edition of \`/rates\`. If your quote is struck over a different index, such as the 5-year Treasury or SOFR, replace the number.\n\nThe spread is not public. No bank, CMBS lender, life company or debt fund publishes its hotel spread, and our rate sheet marks those cells not yet published instead of guessing.[1] So the spread field starts at zero and this page does not suggest one. Type the spread from your term sheet or a lender conversation.\n\nWith the spread at zero the rate is the Treasury alone, which no hotel lender quotes. The DSCR result at that rate is a ceiling, not an estimate. The table below shows how fast the DSCR loan falls as the all-in rate rises while the other two tests stay still. How quotes are built is covered on \`/hotel-financing/hotel-loan-rates\`.`,
    },
    {
      h2: "Which tests should I enter?",
      lead: "Enter the DSCR, debt yield and LTV tests your own lender stated, because no lender type publishes them.",
      body: "A term sheet or a lender's screening email usually states all three. If you have only one or two, set the others to zero and the calculator skips them. The defaults in the fields are hypothetical placeholders so the page shows a complete example. They are not a lender requirement and not a market range.[1]\n\nDifferent lender types weight the tests differently. What each lender type looks at is covered on `/hotel-financing/loan-requirements` and `/hotel-financing/hotel-lenders-by-type`. For one test at a time, with a sensitivity table, use `/tools/dscr-calculator` and `/tools/debt-yield-calculator`.\n\nUse the NOI the lender will use. Lenders deduct a management fee and an FF&E reserve whether or not you pay them, and many size to the lower of trailing twelve-month and underwritten NOI.",
    },
    {
      h2: "How does SBA 504 mode split a hotel project?",
      lead: `SBA 504 mode splits total project cost into a bank first lien of at least ${SBA_504_HOTEL.bankMinPct} percent, a CDC debenture, and a borrower contribution of at least ${SBA_504_HOTEL.borrowerMinPct} percent, using published SBA rules and no lender assumptions.[3][4]`,
      body: `A 504 project has three pieces. SBA lists hotels, motels and other lodging facilities as Limited or Special Purpose Property.[5] For that property type the borrower contributes at least ${SBA_504_HOTEL.borrowerMinPct} percent of project cost, or ${SBA_504_HOTEL.borrowerMinPctNew} percent when the business has also operated for two years or less.[3] The Third Party Lender, usually a bank, must lend at least ${SBA_504_HOTEL.bankMinPct} percent of project cost.[4] The CDC debenture covers what is left, ${sba.debenturePct} percent in the standard case, and caps at ${usd(SBA_504_HOTEL.debentureCap)} on a hotel.[5]\n\nOnce 35 percent of project cost is more than ${usd(SBA_504_HOTEL.debentureCap)}, the cap binds. The calculator shows the amount the three minimum pieces no longer cover. That amount comes from a larger bank loan, more borrower equity, or both, and the bank decides how much of it the bank will carry.\n\nThese are regulatory minimums, not typical terms. A bank can require more equity than the minimum, and the bank still sizes its first lien with its own DSCR and LTV tests, which it does not publish.[1] The debenture itself is fixed rate: the 25-year 504 debenture was ${benchmarkOn("sba504")} on our rate sheet.[1] The two SBA programs are compared on \`/hotel-financing/sba-7a-vs-504\`, and the program is defined on \`/glossary/sba-504\`.`,
    },
    {
      h2: "What this calculator leaves out",
      lead: "The loan sizing calculator leaves out closing costs, reserves, interest-only periods, recourse, and the lender's own haircut to your NOI.",
      body: "The equity figure is value or price less the loan. It does not include lender fees, legal costs, rate caps, upfront reserves or PIP funding, all of which add to the cash you bring. It assumes an amortizing loan, so a DSCR test measured on an interest-only payment will size larger than shown. It does not model a stressed rate, which some lenders use for floating-rate loans.\n\nIt also takes your NOI as given. A lender may underwrite lower revenue, a higher management fee or a larger reserve than your statement shows, and every dollar of haircut lowers the DSCR and debt yield loans. If the loan is for a refinance and you are weighing a sale as well, run `/tools/refinance-vs-sell` next.",
    },
  ],
  table: {
    caption:
      "Hypothetical hotel, $1,050,000 NOI and $12,000,000 value: maximum loan under each test as the all-in rate rises, other inputs at the calculator's defaults",
    columns: [
      "All-in rate you enter",
      "DSCR test loan",
      "Debt yield test loan",
      "LTV test loan",
      "Binding test and loan",
    ],
    rows: tableRows,
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: `Matthews Hotel Markets' ${EDITION_LABEL} rate sheet publishes the index a fixed-rate hotel quote is struck against, the 10-year Treasury at ${benchmarkOn("ust10")},[2] and marks the spread, the DSCR floor and the maximum LTV not yet published for banks, CMBS lenders, life companies and debt funds, because none of them publishes those terms.[1] That is why the calculator pre-fills the index and leaves the spread and the tests to you.`,
  },
  workedExample: {
    label: "Pre-computed worked example (server-rendered): hypothetical hotel at the calculator's defaults",
    body: `Hypothetical, using the calculator's own default inputs so the example and the live tool agree. The 1.35x, 10 percent and 65 percent tests are this hypothetical's assumptions, not lender requirements or market figures. The rate is the 10-year Treasury alone with a zero spread, which no lender quotes, so read the DSCR line as a ceiling.\n\nInputs: NOI ${usd(DEFAULTS.noi)}. Appraised value ${usd(DEFAULTS.value)}. Index ${pct(DEFAULTS.indexRate)} plus spread ${pct(DEFAULTS.spread)} = ${pct(defaultRate)}, ${DEFAULTS.amortYears}-year amortization. Tests: DSCR ${DEFAULTS.testDscr.toFixed(2)}x, debt yield ${pct(DEFAULTS.testDebtYield)}, LTV ${pct(DEFAULTS.testLtv)}.\n\nDSCR test. Maximum debt service = ${usd(DEFAULTS.noi)} / ${DEFAULTS.testDscr.toFixed(2)} = ${usd(DEFAULTS.noi / DEFAULTS.testDscr)}. The loan constant at ${pct(defaultRate)} over ${DEFAULTS.amortYears} years is ${constant.toFixed(6)}. Loan = ${usd(ex.byDscr)}.\n\nDebt yield test. ${usd(DEFAULTS.noi)} / ${(DEFAULTS.testDebtYield / 100).toFixed(2)} = ${usd(ex.byDebtYield)}.\n\nLTV test. ${usd(DEFAULTS.value)} x ${(DEFAULTS.testLtv / 100).toFixed(2)} = ${usd(ex.byLtv)}.\n\nThe binding constraint is ${ex.binding ? TEST_LABEL[ex.binding] : "n/a"}, so the loan is ${usd(ex.maxLoan)}. Implied equity = ${usd(DEFAULTS.value)} less ${usd(ex.maxLoan)} = ${usd(ex.equity)}. At that loan the DSCR is ${(ex.impliedDscr as number).toFixed(2)}x and the debt yield is ${pct(ex.impliedDebtYield)}.\n\nSBA 504 mode on the same ${usd(DEFAULTS.value)} as total project cost: bank first lien at ${SBA_504_HOTEL.bankMinPct} percent = ${usd(sba.bankLoan)}, debenture at ${sba.debenturePct} percent = ${usd(sba.debenture)}, borrower contribution at ${SBA_504_HOTEL.borrowerMinPct} percent = ${usd(sba.borrowerMin)}.[3][4] For a business two years old or less the contribution is ${usd(sbaNew.borrowerMin)} and the debenture ${usd(sbaNew.debenture)}.[3] On a ${usd(SBA_BIG)} project, ${sbaBig.debenturePct} percent would be ${usd((SBA_BIG * (sbaBig.debenturePct as number)) / 100)}, so the ${usd(SBA_504_HOTEL.debentureCap)} cap binds and ${usd(sbaBig.gap)} has to come from a larger bank loan or more equity.[5]`,
  },
  faq: [
    {
      q: "How do lenders decide how much to lend on a hotel?",
      a: "They size the loan under a DSCR test, a debt yield test and an LTV or LTC test, then lend the smallest result. The test that produces the smallest loan is the binding constraint.",
    },
    {
      q: "What DSCR, debt yield and LTV should I enter?",
      a: "The ones your lender stated. No lender type publishes a DSCR floor, a debt yield floor or an LTV ceiling, and our rate sheet marks those cells not yet published.[1] The defaults are hypothetical placeholders.",
    },
    {
      q: "Why is the spread field empty?",
      a: `Because lenders do not publish hotel spreads, and we will not print one we cannot source.[1] The index is public: the 10-year Treasury was ${benchmarkOn("ust10")}.[2] Type the spread from your own quote.`,
    },
    {
      q: "What does binding constraint mean?",
      a: "It is the sizing test that limits the loan. If LTV binds, a higher appraisal helps and a lower rate does not. If DSCR binds, rate and amortization matter. If debt yield binds, only NOI moves the loan.",
    },
    {
      q: "How much equity do I need to buy a hotel?",
      a: "Price less the loan the binding test allows, plus closing costs, reserves and any PIP. The calculator shows the first part. Under SBA 504 the minimum borrower contribution on a hotel is 15 percent of project cost, or 20 percent for a business two years old or less.[3]",
    },
    {
      q: "What is the largest SBA 504 debenture on a hotel?",
      a: `${usd(SBA_504_HOTEL.debentureCap)}.[5] The bank first lien sits alongside it and must be at least ${SBA_504_HOTEL.bankMinPct} percent of project cost, so the project can be far larger than the debenture.[4]`,
    },
    {
      q: "Can I use LTC instead of LTV?",
      a: "Yes. Enter total project cost or purchase price in the value field and your lender's loan-to-cost test in the LTV field. The arithmetic is the same.",
    },
    {
      q: "Is this a loan quote?",
      a: "No. It is arithmetic on the numbers you type. It is not a quote, a commitment or an offer of credit, and a lender will underwrite its own NOI.",
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
      label: "Daily Treasury Par Yield Curve Rates, September 2026",
      url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve&field_tdr_date_value_month=202609",
      publisher: "U.S. Department of the Treasury",
      accessed: "2026-09-18",
    },
    {
      n: 3,
      label: "13 CFR 120.910, How much must the Borrower contribute?",
      url: "https://www.law.cornell.edu/cfr/text/13/120.910",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18",
    },
    {
      n: 4,
      label: "13 CFR 120.920, Required participation by Third Party Lenders",
      url: "https://www.law.cornell.edu/cfr/text/13/120.920",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18",
    },
    {
      n: 5,
      label:
        "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section C, Ch. 1: debenture limits (p. 350) and Limited or Special Purpose Property, which lists hotels (pp. 354-355)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18",
    },
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/loan-requirements",
      "/hotel-financing/hotel-loan-rates",
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/refinance",
    ],
    glossary: [
      "/glossary/dscr",
      "/glossary/debt-yield",
      "/glossary/ltv",
      "/glossary/noi",
      "/glossary/sba-504",
    ],
    data: ["/rates", "/tools", "/tools/dscr-calculator", "/tools/debt-yield-calculator"],
  },
  cta: { label: "Have us size the loan on your hotel", href: "/contact" },
  brandSentence:
    "Matthews Hotel Markets prints only what our rate sheet can source, which is why this calculator asks for your lender's three tests and your quoted spread instead of asserting them.",
  tool: {
    inputs: [
      {
        key: "noi",
        label: "Annual NOI",
        type: "currency",
        default: DEFAULTS.noi,
        min: 0,
        help: "Trailing twelve months, after a management fee and an FF&E reserve.",
      },
      {
        key: "value",
        label: "Appraised value, price or total project cost",
        type: "currency",
        default: DEFAULTS.value,
        min: 0,
        help: "The figure your lender tests LTV or LTC against. SBA 504 mode treats it as total project cost.",
      },
      {
        key: "indexRate",
        label: "Index rate (%)",
        type: "percent",
        default: DEFAULTS.indexRate,
        min: 0,
        max: 25,
        step: 0.01,
        help: `Pre-filled with the 10-year Treasury, ${benchmarkOn("ust10")}, from our ${EDITION_LABEL} rate sheet. Replace it if your quote uses another index.`,
      },
      {
        key: "spread",
        label: "Your quoted spread (percentage points)",
        type: "percent",
        default: DEFAULTS.spread,
        min: 0,
        max: 20,
        step: 0.05,
        help: "Starts at zero. Lenders do not publish spreads, so we do not suggest one. Type the spread from your own term sheet.",
      },
      {
        key: "amortYears",
        label: "Amortization (years)",
        type: "integer",
        default: DEFAULTS.amortYears,
        min: 5,
        max: 40,
      },
      {
        key: "testDscr",
        label: "Your lender's DSCR test",
        type: "number",
        default: DEFAULTS.testDscr,
        min: 0,
        max: 3,
        step: 0.05,
        help: "Hypothetical default. No lender type publishes one. Enter 0 to skip this test.",
      },
      {
        key: "testDebtYield",
        label: "Your lender's debt yield test (%)",
        type: "percent",
        default: DEFAULTS.testDebtYield,
        min: 0,
        max: 30,
        step: 0.25,
        help: "Hypothetical default. Enter 0 to skip this test.",
      },
      {
        key: "testLtv",
        label: "Your lender's LTV or LTC test (%)",
        type: "percent",
        default: DEFAULTS.testLtv,
        min: 0,
        max: 100,
        step: 1,
        help: "Hypothetical default. Enter 0 to skip this test.",
      },
    ],
    outputs: [
      { key: "byDscr", label: "Max loan, DSCR test", format: "currency" },
      { key: "byDebtYield", label: "Max loan, debt yield test", format: "currency" },
      { key: "byLtv", label: "Max loan, LTV / LTC test", format: "currency" },
      { key: "binding", label: "Binding constraint", format: "text" },
      { key: "maxLoan", label: "Loan the three tests support", format: "currency" },
      { key: "equity", label: "Implied equity", format: "currency" },
    ],
    formula: `rate          = indexRate + spread\nmonthlyRate   = rate / 100 / 12\nn             = amortYears x 12\nloanConstant  = (monthlyRate / (1 - (1 + monthlyRate) ^ -n)) x 12\n\nloanByDscr    = noi / testDscr / loanConstant\nloanByDY      = noi / (testDebtYield / 100)\nloanByLtv     = value x testLtv / 100\n\nmaxLoan       = the smallest of the tests you entered\nequity        = value - maxLoan\n\nSBA 504 mode, hotel (13 CFR 120.910, 120.920; SOP 50 10 8):\nbankLoan      = projectCost x ${SBA_504_HOTEL.bankMinPct}%   (minimum)\nborrower      = projectCost x ${SBA_504_HOTEL.borrowerMinPct}%   (${SBA_504_HOTEL.borrowerMinPctNew}% if the business is two years old or less)\ndebenture     = the smaller of the remainder and ${usd(SBA_504_HOTEL.debentureCap)}\nuncovered     = remainder - debenture`,
    disclaimer:
      "Indicative arithmetic only. The three tests are yours: the defaults are hypothetical and no lender publishes them. Not a loan quote, a commitment or an offer of credit. SBA 504 figures are regulatory minimums and caps, not a lender's terms.",
  },
};

export default page;
