/**
 * How does hotel financing work, and what does it cost right now?
 * Cluster hub: /hotel-financing
 *
 * Converted from geo/06-pages/financing/hotel-financing.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "index",
  cluster: "hotel-financing",
  isHub: true,
  title: "Hotel Financing: Rates, Terms and Lenders (2026)",
  h1: "How does hotel financing work, and what does it cost right now?",
  description: "How hotel loans are sized, priced and placed in 2026: lender types, DSCR and debt-yield tests, and what a hotel loan costs today.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "What loan-to-value ratio can I get on a hotel purchase?",
    "What's a debt service coverage ratio (DSCR) and why does it matter for hotel loans?",
    "Who are the biggest hotel lenders (banks, life cos, CMBS shops)?",
    "Can a hotel with low occupancy still qualify for financing?",
    "Do hotel loans require a franchise comfort letter?",
    "What origination fees or points should I expect on a hotel loan?",
    "What's the minimum loan size hotel lenders will do?"
  ],
  answer: "Hotel loans are sized by cash flow, not by price. A lender starts with trailing twelve-month NOI, applies a debt service coverage test and a debt yield floor, then lends whatever is smaller. Loan-to-value is the third test, not the first. Fixed-rate quotes start from the 10-year Treasury, which was 4.94 percent on September 17, 2026.[1]",
  takeaways: [
    "Three tests size a hotel loan: DSCR, debt yield, and LTV. The lowest number wins.",
    "Hotels price wider than apartments or industrial because the revenue reprices nightly.",
    "Five lender types compete for hotel debt and they do not want the same deal.",
    "A franchise comfort letter is a closing condition on almost every branded hotel loan.",
    "Bring a trailing twelve-month P&L, a STAR report and a PIP status letter to the first call."
  ],
  sections: [
    {
      h2: "How do lenders decide how much they will lend on a hotel?",
      lead: "A hotel lender runs three sizing tests against the same trailing twelve-month NOI and lends against whichever produces the smallest number.",
      body: "The debt service coverage ratio (DSCR) test divides NOI by the proposed loan's annual debt service and requires the result to clear a minimum the lender sets. The debt yield test divides NOI by the loan amount directly, against a floor; it ignores rate and amortization entirely, which is why it can bind even when DSCR looks comfortable. Loan-to-value caps the loan against an appraised or purchase value. Each lender sets its own thresholds, and no conventional lender type publishes them, so our rate sheet marks them not yet published rather than guess.[4] Get your lender's tests in writing.\n\nNone of the three tests is a formality. A lender runs all three and lends the lowest number, because that is the number every test in the package agrees the asset can carry. Amortization schedule matters here too: a 25-year schedule produces a smaller annual payment than a 20-year schedule on the same rate, which raises DSCR and can move which test binds. Ask a lender which test is binding on your deal before you negotiate rate, because moving the rate half a point does nothing if debt yield, not DSCR, is the constraint."
    },
    {
      h2: "What does a hotel loan cost in September 2026?",
      lead: "Hotel loan pricing is quoted as an index plus a spread, and the spread on hotels runs wider than on apartments or industrial property.",
      body: "Fixed-rate hotel quotes track the 5- or 10-year Treasury; floating quotes track SOFR.[1][2] The spread over that index is set by five things, in the order we see lenders weigh them: the sponsor's experience and liquidity, the franchise flag and its market position, whether a PIP is open or funded, the market itself, and finally the loan structure. A hotel with an experienced sponsor, a top-performing flag, a funded PIP and no near-term renovation prices tighter than an identical building with a first-time buyer and an open PIP notice, even at the same leverage.\n\nMatthews Hotel Markets' September 2026 rate sheet puts the 10-year Treasury at 4.94% as of September 17, 2026 and the SBA 7(a) maximum allowable rate at 10.00%, which is SBA's 3.00% cap over the 7.00% Prime in effect since September 17, 2026.[3][6] It marks the conventional spread over that index as not yet published, because we do not print a spread until three independent lenders quote the same structure in a month.[4] The sheet shows what is and is not published, which is the part most rate sheets leave out. See the full breakout by lender type on `/hotel-financing/hotel-loan-rates`."
    },
    {
      h2: "Who actually lends on hotels?",
      lead: "Five lender types compete for hotel debt, and each one wants a different deal, not the same deal at a different price.",
      body: "Banks and credit unions want a relationship and will usually ask for recourse. Life insurance companies want the lowest leverage and the longest, most stabilized hold, in exchange for the lowest rate. CMBS conduits want stabilized cash flow they can pool and sell, sized to a debt yield floor, non-recourse with standard carve-outs. SBA lenders want an owner-operator inside the program's caps. Debt funds and bridge lenders want a transition story: a PIP in progress, a ramp after a brand change, or a maturity that cannot yet refinance permanently.\n\nThe full comparison, with typical leverage and minimum loan size by type, is on `/hotel-financing/hotel-lenders-by-type`."
    },
    {
      h2: "What do I need before a lender will quote me?",
      lead: "A lender wants a trailing twelve-month P&L, a STAR report, and a PIP status letter before it will give you a real number, not an indication.",
      body: "The document package that actually moves a quote from an indication to a term sheet is a trailing twelve-month profit and loss statement, a STAR report showing occupancy, ADR and RevPAR against the competitive set, the franchise agreement and any PIP letter, and a personal financial statement from the sponsor. Lenders also want recent capital expenditure history, because a NOI that was bought by deferring maintenance is not the same NOI as one that was earned. The full checklist, with realistic lead times for each document, is on `/hotel-financing/loan-requirements`."
    },
    {
      h2: "Can a hotel with weak occupancy still get financed?",
      lead: "Yes, but a lender underwrites the trend and the cause, not just the trailing number.",
      body: "A hotel running below its competitive set on occupancy is not automatically unfinanceable. What matters is whether the shortfall is temporary (a renovation disruption, a market supply wave that is being absorbed, a brand transition mid-completion) or structural (a declining submarket, an aging property losing share to newer supply). A lender that believes the shortfall is temporary will often underwrite to a near-term stabilized number instead of the trailing twelve, particularly in a bridge or debt fund structure. One that believes it is structural will size conservatively to the trailing number or decline."
    },
    {
      h2: "What fees should I expect beyond the rate?",
      lead: "Origination points, third-party reports, and legal costs sit on top of the quoted rate, and all but the third-party reports are negotiable.",
      body: "Origination is typically quoted in points on the loan amount, and it is one of the more negotiable line items in a hotel loan, particularly when a lender is competing for the deal. Third-party costs, appraisal, property condition assessment, environmental report and, on a franchised property, the franchise's own transfer and application fees, are not generally negotiable and should be budgeted up front. Legal fees run both ways: the lender's counsel is typically a borrower cost. None of these figures belongs on this page as a flat number without a date, because they move with the lending environment; see the current rate sheet for what is quoting this month."
    },
    {
      h2: "What is the smallest hotel loan a lender will do?",
      lead: "Minimum loan size is a quiet filter that rules out entire lender types before rate ever comes up.",
      body: "SBA's 7(a) program terms set a $5 million maximum and list no minimum loan size, so SBA lenders go smaller than any other type.[3] CMBS conduits and life insurance companies generally prefer larger loans, because the fixed cost of underwriting and, for CMBS, pooling a small loan does not pencil against the fee. Banks sit in between and will size to a relationship even on a smaller loan. If your loan need is small, the practical lender universe narrows to banks, credit unions, SBA, and some debt funds before you ever discuss rate."
    }
  ],
  table: {
    caption: "Hotel loan sizing tests, September 2026",
    columns: [
      "Test",
      "What it measures",
      "Typical threshold",
      "What it constrains"
    ],
    rows: [
      [
        "DSCR",
        "NOI divided by annual debt service",
        "Set by the lender; not published by any conventional lender type[4]",
        "Payment, so it caps loan size at a given rate"
      ],
      [
        "Debt yield",
        "NOI divided by loan amount",
        "Set by the lender; not published[4]",
        "Loan size directly, independent of rate"
      ],
      [
        "LTV",
        "Loan divided by appraised value",
        "Set by the lender; SBA 504 allows up to 85% of project cost on a hotel[4][5]",
        "Loan size at a given valuation"
      ],
      [
        "Amortization",
        "Schedule used to compute payment",
        "Varies by lender; SBA 7(a) allows up to 25 years on real estate[3]",
        "Payment, so it moves DSCR"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts the 10-year Treasury, the index a fixed-rate select-service quote is struck against, at 4.94% as of September 17, 2026. It marks the conventional spread over that index as not yet published, because we do not print a spread until three independent lenders quote the same structure in a month.[4]"
  },
  workedExample: {
    label: "Hypothetical: 95-key select-service hotel, Texas secondary market",
    body: "This property is hypothetical. Stabilized NOI is $1.60M. The lender quotes 25-year amortization and a 1.35x DSCR test.\n\nMaximum annual debt service equals $1.60M divided by 1.35, or $1,185,185. At a 7.25 percent rate over 25 years, each $1M of loan carries about $86,800 a year of debt service, so the DSCR test supports a loan of $1,185,185 divided by $86,800 per $1M, or $13.65M. The debt yield test at 10 percent divides $1.60M by 0.10, supporting $16.0M. The LTV test at 60 percent of a $20.0M value supports $12.0M.\n\nThe LTV test is the binding constraint here, so the loan is $12.0M, not $13.65M and not $16.0M. Change the rate to 8.00 percent and the DSCR number falls to roughly $12.8M, and the two tests nearly converge. That is the whole exercise: find which test binds, then work on that one."
  },
  faq: [
    {
      q: "What DSCR do hotel lenders require in 2026?",
      a: "Each lender sets its own minimum, and no conventional lender type publishes one, so there is no honest single number to quote. Ask the lender for its test in writing. Life companies generally want more cushion in exchange for lower leverage."
    },
    {
      q: "Is debt yield or DSCR the harder test on a hotel loan?",
      a: "It depends on the rate environment. When rates are high relative to NOI, debt yield often binds first because it ignores rate and amortization. When rates are low, DSCR usually binds. Ask your lender which test is constraining your specific loan."
    },
    {
      q: "What loan-to-value can I get on a hotel today?",
      a: "It depends on the lender and the asset. SBA 504 allows up to 85 percent of project cost on a hotel. Conventional lenders do not publish a ceiling. At the same NOI, leverage is lower than in 2021 because the payment on each dollar is higher."
    },
    {
      q: "Do hotel loans have prepayment penalties?",
      a: "Almost always. Bank loans typically use a declining step-down penalty. CMBS loans use defeasance or yield maintenance, both of which are expensive in the first years of the loan. Ask for the exact schedule before you sign."
    },
    {
      q: "How long does it take to close a hotel loan?",
      a: "Plan on a few months from a complete application package to funding. SBA loans can take longer because of the guaranty process. Bridge loans can close faster when the asset and sponsor are already known to the lender."
    },
    {
      q: "Do I need a personal guarantee on a hotel loan?",
      a: "Most bank and SBA hotel loans carry a personal guarantee. Non-recourse structures are available through CMBS and life companies, generally at larger loan sizes and lower leverage."
    },
    {
      q: "What is a franchise comfort letter and why does the lender want one?",
      a: "A comfort letter is the franchisor's agreement to let the lender step into the franchise agreement if it forecloses, so the flag survives a change of ownership. Almost every branded hotel loan requires one as a closing condition, and the franchisor sets the timeline, so request it early."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Daily Treasury Par Yield Curve Rates",
      url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve",
      publisher: "U.S. Department of the Treasury",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Secured Overnight Financing Rate (SOFR)",
      url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
      publisher: "Federal Reserve Bank of New York",
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
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section C, Ch. 1: debenture limits (p. 350) and Limited or Special Purpose Property, which lists hotels (pp. 354-355)",
      url: "https://www.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "BNY Increases Prime Lending Rate to 7.00%",
      url: "https://www.prnewswire.com/news-releases/bny-increases-prime-lending-rate-to-7-00-302881066.html",
      publisher: "The Bank of New York Mellon Corporation, via PR Newswire",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/hotel-loan-rates",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/refinance",
      "/hotel-financing/how-debt-placement-works"
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
    label: "Talk to the capital markets desk",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets places hotel debt and equity, and publishes the rate sheet the numbers on this page come from."
};

export default page;
