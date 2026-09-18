/**
 * Hotel refinance vs sell calculator: /tools/refinance-vs-sell
 *
 * The calculator version of /hotel-financing/refinance-or-sell
 * (geo/05-briefs/_wave2-stubs.md, section D). The default inputs are the same
 * hypothetical 78-key hotel that page works through, so the two agree on the
 * loan the NOI supports and on the value at the cap rate.
 *
 * Rules this file follows:
 * - Every default is labeled hypothetical. The DSCR test, the cap rate and the
 *   sale cost are user inputs, never stated as market facts.
 * - The only benchmark shown comes from the current /rates edition, read from
 *   the rate sheet at build time (rates-line.ts), with its date.
 * - The sensitivity table is computed by the same functions the island runs
 *   (math.ts). math.check.ts asserts the worked example matches them.
 */
import type { ToolPage } from "../answers/types";
import { computeRefiVsSell, usd, type RefiVsSellInput } from "./math";
import { EDITION_LABEL, benchmarkOn } from "./rates-line";

export const DEFAULTS: RefiVsSellInput = {
  noi: 1050000,
  loanBalance: 8400000,
  rate: 7.25,
  amortYears: 25,
  testDscr: 1.35,
  capRate: 8.25,
  saleCostPct: 2,
  pip: 1100000,
};

const signed = (n: number | null) =>
  n === null ? "n/a" : n < 0 ? `Owner brings ${usd(-n)}` : `${usd(n)} cash out`;

const CAP_STEPS = [7.75, 8.25, 8.75];
const tableRows = CAP_STEPS.map((capRate) => {
  const r = computeRefiVsSell({ ...DEFAULTS, capRate });
  return [
    `${capRate.toFixed(2)}%`,
    usd(r.value),
    usd(r.netSale),
    signed(r.refiNet),
    usd(r.gap),
  ];
});

export const page: ToolPage = {
  slug: "refinance-vs-sell",
  cluster: "tools",
  title: "Hotel Refinance vs Sell Calculator",
  h1: "Hotel refinance vs sell calculator: which path leaves me more cash?",
  description:
    "Enter NOI, loan balance, rate, your lender's DSCR test, a cap rate, sale costs and the PIP. See refinance proceeds, net sale proceeds and the gap.",
  lastUpdated: "2026-09-18",
  authorSlug: "miles-cortez",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Should I refinance my hotel or sell it instead?",
    "I own a 78-key Hampton Inn in Georgia, loan matures next year - what are my options?",
    "How do I compare holding versus selling my hotel?",
    "What do I net from a hotel sale after fees and debt?",
    "How much can I borrow against my hotel?",
  ],
  answer: `Size the new loan from NOI, then price the sale from the same NOI. Maximum refinance proceeds are NOI divided by your lender's DSCR test, divided by the loan constant. Net sale proceeds are value at your cap rate, less the PIP, sale costs and the payoff. Matthews Hotel Markets' ${EDITION_LABEL} rate sheet shows the 10-year Treasury at ${benchmarkOn("ust10")}.[1][2]`,
  takeaways: [
    "Both paths start from one number, NOI. Use the same NOI and the same PIP in both columns.",
    "Refinance proceeds come from NOI, the rate, the amortization and the lender's DSCR test. What you owe does not change them.",
    "Net sale proceeds here are before tax. A sale can realize a taxable gain; a refinance is not a sale.[3]",
    "The gap is the extra cash a sale puts in your hands today. The price of that cash is the hotel.",
    "No lender type publishes a DSCR floor, so type the test your lender gave you.[1]",
  ],
  sections: [
    {
      h2: "How the math works",
      lead: "The refinance column turns NOI into a maximum loan, and the sale column turns the same NOI into a price, then both subtract what it costs to get there.",
      body: "Refinance side. Divide net operating income (`/glossary/noi`) by the lender's DSCR test to get the most debt service the lender will allow. Divide that by the loan constant, the annual payment on one dollar of loan at the new rate and amortization, to get the maximum loan. Subtract the balance you have to pay off and the PIP you still have to fund. A positive result is cash out. A negative result is equity you bring to close. The coverage math is covered in full on `/glossary/dscr`.\n\nSale side. Divide the same NOI by a cap rate (`/glossary/cap-rate`) to get value. Subtract the PIP, because a buyer who inherits the work prices it into the bid (`/glossary/pip`). Subtract sale costs as a percent of that price, then the loan payoff. What is left is net sale proceeds before tax.\n\nThe gap is net sale proceeds minus refinance cash. It is not a verdict. If you refinance you still own a hotel producing that NOI. If you sell you hold cash and the hotel is gone.",
    },
    {
      h2: "What this calculator leaves out",
      lead: "It leaves out tax, refinance closing costs, prepayment charges, and the debt yield and LTV tests, all of which can move the answer.",
      body: "Tax is the large one. A sale produces a gain when the amount you realize is more than your adjusted basis, and depreciation you have taken lowers that basis.[3] The size of the tax depends on your basis and holding structure, so this tool stops at the pre-tax number and a CPA takes it from there. Exchange rules are on `/hotel-financing/1031-exchange-hotels`.\n\nOn the refinance side, a lender sizes to the lowest of three tests: DSCR, debt yield and LTV. This tool runs DSCR only. If your lender also stated a debt yield test, run it separately and use the smaller loan. Lender fees, legal costs, rate caps and any prepayment charge on the old loan also come out of refinance proceeds, and they vary too much by loan to model with one field.\n\nThe PIP field is applied in full to both columns. In practice a buyer may price a PIP at less or more than its cost, and a lender may fund part of it. If you have a real bid or a real term sheet, change the inputs to match it. The longer discussion of when each path is right is on `/hotel-financing/refinance-or-sell`.",
    },
    {
      h2: "Which inputs should I be most careful with?",
      lead: "NOI and the cap rate, because a small change in either moves the sale column by hundreds of thousands of dollars.",
      body: "Use trailing twelve-month NOI after a management fee and an FF&E reserve, because that is the figure both a lender and a buyer will underwrite. If you enter an NOI before reserves, both columns will look better than any term sheet or bid you receive.\n\nThe cap rate is not something an owner chooses. It is what buyers pay for that cash flow in that market, and the way to find it is recent comparable sales and a broker opinion of value, covered on `/hotel-valuation/hotel-cap-rates`. The table below shows how much the sale column moves across a one point spread in the cap rate with everything else held still.\n\nThe DSCR test, the rate and the amortization should come from a term sheet or a lender conversation. No lender type publishes its DSCR floor, and our rate sheet marks those cells not yet published rather than guessing.[1]",
    },
  ],
  table: {
    caption:
      "Hypothetical 78-key hotel: both paths at three cap rates, all other inputs at the calculator's defaults",
    columns: [
      "Cap rate you enter",
      "Value (NOI / cap rate)",
      "Net sale proceeds, pre-tax",
      "Refinance cash after payoff and PIP",
      "The gap",
    ],
    rows: tableRows,
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: `Matthews Hotel Markets' ${EDITION_LABEL} rate sheet publishes the index a fixed-rate quote is struck against, the 10-year Treasury at ${benchmarkOn("ust10")},[2] and marks the DSCR floor not yet published for every lender type, because no lender type publishes one.[1] That is why the DSCR test and the rate below are fields you fill in.`,
  },
  workedExample: {
    label:
      "Pre-computed worked example (server-rendered): hypothetical 78-key select-service hotel",
    body: "Hypothetical, using the calculator's own default inputs so the example and the live tool agree. The 1.35x test, the 7.25 percent rate, the 8.25 percent cap rate and the 2 percent sale cost are this hypothetical's assumptions, not market figures.\n\nInputs: NOI $1,050,000. Loan balance $8,400,000. New rate 7.25 percent, 25-year amortization, lender DSCR test 1.35x. Cap rate 8.25 percent, sale costs 2 percent, PIP $1,100,000.\n\nRefinance. Maximum debt service = $1,050,000 / 1.35 = $777,778. The loan constant at 7.25 percent over 25 years is 0.086737. Maximum refinance proceeds = $777,778 / 0.086737 = $8,967,100. Less the $8,400,000 payoff and the $1,100,000 PIP = negative $532,900. The owner brings $532,900 and keeps the hotel.\n\nSale. Value = $1,050,000 / 0.0825 = $12,727,273. Less the $1,100,000 PIP = $11,627,273. Sale costs at 2 percent = $232,545. Less the $8,400,000 payoff. Net sale proceeds before tax = $2,994,727.\n\nThe gap = $2,994,727 minus negative $532,900 = $3,527,627. Selling puts about $3.53M more cash in hand today than refinancing, before tax, and the hotel's $1,050,000 of NOI goes to the buyer. The paired page, `/hotel-financing/refinance-or-sell`, runs the same hotel with a smaller PIP price reduction and lands on a different sale number, which is the point of changing the inputs.",
  },
  faq: [
    {
      q: "How do I calculate maximum refinance proceeds on a hotel?",
      a: "Divide annual NOI by your lender's DSCR test to get maximum debt service, then divide by the loan constant at the new rate and amortization. In the hypothetical above, $1,050,000 of NOI at a 1.35x test, 7.25 percent and 25 years supports $8,967,100.",
    },
    {
      q: "How do I calculate net proceeds from selling a hotel?",
      a: "Take value, which is NOI divided by the cap rate, subtract any PIP the buyer will price in, subtract sale costs, then subtract the loan payoff. The result is before tax. Tax depends on your adjusted basis, so run that with a CPA.[3]",
    },
    {
      q: "What DSCR test should I enter?",
      a: "The one your lender stated in writing. No lender type publishes a DSCR floor, and our rate sheet marks that cell not yet published for every lender type.[1] The 1.35x default is a hypothetical placeholder.",
    },
    {
      q: "Does a bigger gap mean I should sell?",
      a: "No. The gap is only the extra cash a sale produces today, before tax. Refinancing keeps the asset and its income. Compare the gap, after tax, with what the hotel would earn you if you kept it.",
    },
    {
      q: "Why is the PIP subtracted from both columns?",
      a: "Because it is a cost on both paths. If you keep the hotel you fund or reserve for it. If you sell, a buyer prices the work into the bid. Set the field to zero if the PIP is already funded and complete.",
    },
    {
      q: "What does the calculator not include?",
      a: "Capital gains and depreciation recapture tax, refinance closing costs, prepayment charges on the old loan, and the debt yield and LTV tests. Each one can change the answer, so treat the output as a first pass.",
    },
    {
      q: "What rate should I use for the new loan?",
      a: `A quoted rate if you have one. Fixed-rate quotes are struck over the Treasury curve, and the 10-year Treasury was ${benchmarkOn("ust10")}.[2] Lenders do not publish their hotel spreads, so we do not print one.[1]`,
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
      label: "Publication 544, Sales and Other Dispositions of Assets",
      url: "https://www.irs.gov/publications/p544",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18",
    },
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/refinance-or-sell",
      "/hotel-financing/refinance",
      "/hotel-financing/loan-maturities-2026-2027",
      "/hotel-valuation/hotel-cap-rates",
    ],
    glossary: [
      "/glossary/noi",
      "/glossary/dscr",
      "/glossary/cap-rate",
      "/glossary/pip",
    ],
    data: ["/rates"],
  },
  cta: { label: "Have us run both numbers on your hotel", href: "/contact" },
  brandSentence:
    "Matthews Hotel Markets places hotel debt and sells hotels, so an owner can get both columns of this comparison from one team.",
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
        key: "loanBalance",
        label: "Current loan balance",
        type: "currency",
        default: DEFAULTS.loanBalance,
        min: 0,
        help: "The payoff amount. It comes out of both columns.",
      },
      {
        key: "rate",
        label: "New loan rate (%)",
        type: "percent",
        default: DEFAULTS.rate,
        min: 0,
        max: 25,
        step: 0.05,
        help: "Use a quoted rate. The default is hypothetical.",
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
        min: 1,
        max: 2.5,
        step: 0.05,
        help: "Use the test your lender stated. No lender type publishes one.",
      },
      {
        key: "capRate",
        label: "Cap rate for the sale (%)",
        type: "percent",
        default: DEFAULTS.capRate,
        min: 1,
        max: 20,
        step: 0.05,
        help: "From comparable sales or a broker opinion of value. The default is hypothetical.",
      },
      {
        key: "saleCostPct",
        label: "Sale costs (% of price)",
        type: "percent",
        default: DEFAULTS.saleCostPct,
        min: 0,
        max: 10,
        step: 0.25,
        help: "Brokerage fee plus closing costs, from your own listing agreement. The default is hypothetical.",
      },
      {
        key: "pip",
        label: "PIP still to fund",
        type: "currency",
        default: DEFAULTS.pip,
        min: 0,
        help: "Applied to both columns. Enter 0 if the PIP is complete.",
      },
    ],
    outputs: [
      { key: "maxLoan", label: "Max refinance proceeds", format: "currency" },
      {
        key: "refiNet",
        label: "Refinance cash after payoff and PIP",
        format: "text",
      },
      { key: "value", label: "Value at your cap rate", format: "currency" },
      { key: "netSale", label: "Net sale proceeds, pre-tax", format: "currency" },
      { key: "gap", label: "The gap (sale minus refinance)", format: "currency" },
    ],
    formula:
      "monthlyRate   = rate / 100 / 12\nn             = amortYears x 12\nloanConstant  = (monthlyRate / (1 - (1 + monthlyRate) ^ -n)) x 12\nmaxLoan       = noi / testDscr / loanConstant\nrefiNet       = maxLoan - loanBalance - pip\n\nvalue         = noi / (capRate / 100)\nsalePrice     = value - pip\nsaleCosts     = salePrice x saleCostPct / 100\nnetSale       = salePrice - saleCosts - loanBalance\n\ngap           = netSale - refiNet",
    disclaimer:
      "Indicative only, before tax and before refinance closing costs. Every default is hypothetical. Not a loan quote, an offer of credit, a valuation or tax advice.",
  },
};

export default page;
