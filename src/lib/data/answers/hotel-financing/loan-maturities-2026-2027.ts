/**
 * How much hotel debt is maturing in 2026 and 2027?
 * Answer page: /hotel-financing/loan-maturities-2026-2027
 *
 * PROVENANCE. Agent 6 shipped this page as STATUS: BLOCKED
 * (geo/06-pages/financing/hotel-financing__loan-maturities-2026-2027.md),
 * because a "$30 billion through year-end 2027" figure circulates in this repo
 * six times with no attributable source, and no public source gives a hotel-
 * specific 2027 maturity volume.
 *
 * EDITORIAL RULING (orchestrator, 2026-09-17): publish, using Trepp's dated
 * $18.7 billion figure for 2026 and saying plainly that no 2027 hotel-specific
 * maturity figure is publicly published as of September 2026. Saying what is
 * not known is the correct posture on a page we are asking engines to cite,
 * not a reason to withhold the page. The $30 billion figure is never used.
 *
 * Structure and arithmetic follow the brief,
 * geo/05-briefs/hotel-financing__loan-maturities-2026-2027.md. Every figure is
 * also on /data/hotel-financing-statistics with the same publisher and date.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "loan-maturities-2026-2027",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Loan Maturities in 2026 and 2027",
  h1: "How much hotel debt is maturing in 2026 and 2027?",
  description:
    "What public sources actually say about hotel loan maturities in 2026 and 2027, how to tell if yours is at risk, and what to do 12 months out.",
  lastUpdated: "2026-09-18",
  authorSlug: "miles-cortez",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How much hotel CMBS debt is maturing in 2026?",
    "Is my hotel at risk of maturity default?",
    "What happens if I can't refinance my hotel loan when it matures?",
    "Are hotel lenders extending more loans or foreclosing more in 2026?",
    "Which hotel brands or markets are seeing the most loan distress in 2026?",
    "What's a hotel loan maturity checklist I should work through 12 months out?",
    "How does a maturity default differ from a payment default on a hotel loan?",
  ],
  answer:
    "Trepp counts $18.7 billion of hotel CMBS maturing in 2026, and nearly 70 percent of it floats, reported August 3, 2026. No public source gives a hotel-specific 2027 figure, so this page does not state one. The number that decides your own outcome is smaller and local: does today's NOI support today's balance at today's rate?",
  takeaways: [
    "Trepp's published hotel CMBS figure is $18.7 billion maturing in 2026. Nearly 70 percent of it carries a floating rate.",
    "There is no publicly published hotel-specific 2027 maturity volume as of September 2026. We do not estimate one.",
    "A maturity default is a refinancing failure, not a payment failure. A loan can be current on every payment and still default at maturity.",
    "The diagnostic is one calculation: does today's NOI support today's balance at today's rate?",
    "Twelve months of lead time is the difference between five options and one.",
  ],
  sections: [
    {
      h2: "How much hotel debt is actually maturing, and who says so?",
      lead: "Trepp counts $18.7 billion of hotel CMBS maturing in 2026, nearly 70 percent of it floating; nobody publishes a hotel-specific 2027 number, and the figures that do exist count different loan universes.",
      body: "Trepp's figure covers securitized hotel CMBS only.[1] It does not include bank balance-sheet hotel loans, life company loans, SBA loans, or debt-fund paper, none of which Trepp's CMBS count covers. So $18.7 billion is a real, dated, checkable number for one slice of the market, and it is not the size of the hotel maturity wall.\n\nThe floating-rate detail matters more than the headline. If nearly 70 percent of that 2026 book floats, then SOFR, not the 10-year Treasury, is the number that decides whether those specific loans can extend.[1] SOFR was 3.85% for September 17, 2026.[4] A floating loan that was underwritten when SOFR was near zero has already repriced; the question for that borrower is whether the cap they bought is still in the money and what a replacement cap costs, which is covered on `/hotel-financing/bridge-loans`.\n\nFor 2027 we found nothing publishable. The Mortgage Bankers Association's maturity survey says 30 percent of hotel/motel loan balances come due in 2026, but it gives no hotel dollar amount and no hotel breakdown for 2027, only a $652 billion total for all commercial and multifamily loans maturing that year.[2] Quoting that total here would imply a hotel figure that the release does not contain. The Federal Reserve publishes bank-held commercial real estate balances in H.8 with no hotel split at all.[3] A larger, round-number, multi-year hotel figure covering 2026 through year-end 2027 circulates in the trade press and, until this update, in three articles on this site. We could not source it to any publisher, so we removed it from those articles and we do not restate it here, not even to knock it down. Adding an unknown 2027 book to a sourced 2026 figure and attributing the total to a research house is not sourcing. The reasoning is on `/data/hotel-financing-statistics`, which lists every figure we rejected and why.",
    },
    {
      h2: "How do I tell if my loan is at risk?",
      lead: "Run one calculation: divide trailing NOI by your lender's coverage test to get maximum debt service, convert that to a loan amount at today's rate and amortization, and compare it to your balance.",
      body: "That number, the gap between what the asset supports today and what you owe, is the only maturity statistic that changes what you should do. A national maturity total does not. The worked example below runs the arithmetic twice on the same hypothetical loan, once at a healthy NOI and once at a soft one, because the same balance produces two completely different conversations.\n\nThree inputs move the answer and you can get all three in a week: your trailing twelve-month NOI from the P&L, your lender's stated coverage test, and today's index plus the spread a lender will actually quote you. The first two are yours. For the third, `/rates` publishes the index and says plainly which spreads are not published, and `/hotel-financing/refinance` walks the full process.",
    },
    {
      h2: "What is a maturity default?",
      lead: "A maturity default is a failure to repay the loan on its maturity date, even when every scheduled payment has been made on time.",
      body: "It is the reason a hotel with no payment history problem can end up in special servicing. The loan documents require the full remaining balance on a date. If the refinance does not close and the borrower does not write a check, the loan is in default on that date regardless of how the property is performing. That is a different event from a payment default, where the borrower misses a monthly payment because the property is not producing enough cash.\n\nThe practical difference is timing and leverage. A payment default is visible to the lender the month it happens. A maturity default is visible to both sides years in advance, on the term sheet, which is why it is the one kind of default an owner can usually prevent. `/hotel-financing/loan-workouts` covers what happens once a loan does transfer.",
    },
    {
      h2: "What do lenders do when a hotel loan cannot refinance?",
      lead: "Most often they extend a performing loan on new terms rather than take the asset back, but that is a tendency driven by their own economics, not a policy you can rely on.",
      body: "A lender taking back a hotel takes back an operating business: a franchise agreement with transfer conditions, a management contract, payroll, and a property condition assessment it has not seen. That is expensive and slow, which is why an extension on new terms, often with a rate reset, a partial paydown, a cash-management sweep and a funded reserve, is the common outcome for a loan that is current and covering.\n\nThe tendency weakens fast when the loan is not covering. The overall CMBS special servicing rate rose 33 basis points in August 2026 to 11.42%, its highest level since February 2013.[5] Special servicing leads delinquency, because a loan transfers before it misses a payment. The lodging CMBS delinquency rate was 5.35% in July 2026, up 13 basis points on the month.[6] Trepp reported a further lodging increase in August without publishing the August lodging number in any release we could open.[5] So the direction is clear and the current level is not; we publish July's figure rather than an August figure we cannot source.",
    },
    {
      h2: "Which segments are seeing the most stress?",
      lead: "Floating-rate loans on transitional assets with open PIPs, across segments, rather than any one brand or market that public data identifies.",
      body: "We are deliberately not naming brands or markets here. No public release we could open breaks hotel maturity or delinquency data down by flag or by metro, and inventing that breakdown from a handful of deals we happen to have seen would be a worse answer than saying so.\n\nWhat the public data does support is a structural read. The stress concentrates where three things overlap: a floating-rate loan originated in the 2019 to 2021 rate environment, an asset that has not stabilized or that carries an unfunded brand-mandated PIP, and a sponsor without the liquidity to write a paydown check. Any one of those is manageable. All three together is the profile that transfers to special servicing. `/hotel-financing/pip-and-renovation-loans` covers the PIP-funding piece specifically.",
    },
    {
      h2: "What should I do 12 months before maturity?",
      lead: "Order a fresh value opinion, get the PIP status in writing, run the coverage test at today's rate, and open the conversation with your incumbent lender before you need anything from it.",
      body: "Twelve months out, an owner has five real options: write a paydown check, negotiate an extension with the incumbent lender, bring in mezzanine or preferred equity, bridge to a later permanent takeout, or sell. Each of those takes time to arrange, and the ones that require a third party take the most.\n\nThe sequence that works is boring: value opinion first, because it prices the equity and it is what a new lender will size against; franchise and PIP status second, in writing, because an unquantified PIP stalls every other track; coverage test third, at a quoted rate rather than a remembered one. `/hotel-financing/refinance-or-sell` is the decision page for the last of the five options, and it is not a defeat. A sale at 14 months out is a normal disposition. A sale at 60 days out is a distressed one.",
    },
    {
      h2: "What if I am already inside 90 days?",
      lead: "The five options have usually narrowed to whatever the incumbent lender will offer, so the work is to make that offer as good as it can be and to run a takeout search in parallel.",
      body: "Inside 90 days, a new permanent lender generally cannot complete third-party reports, franchise approval and closing in time, which removes the competitive tension that would otherwise improve terms. What is still available: a short extension to create runway for a proper process, a forbearance while a takeout is arranged, and a paydown sized to whatever the incumbent needs to re-underwrite.\n\nGo to the lender with the same package a new lender would want: trailing twelve-month P&L, a current STAR report, the franchise agreement and PIP status, and a written plan with dates. A borrower who arrives with that gets a materially different conversation than one who arrives asking for time. `/hotel-financing/loan-workouts` covers the mechanics from there.",
    },
  ],
  table: {
    caption: "Hotel loan maturity figures, by publisher, as of September 17, 2026",
    columns: ["Publisher", "What it counts", "Figure", "As of"],
    rows: [
      [
        "Trepp, read via Hotel Dive",
        "Securitized hotel CMBS only, 2026 maturities",
        "$18.7 billion, nearly 70% floating rate",
        "August 3, 2026",
      ],
      [
        "Trepp, read via Hotel Dive",
        "Securitized hotel CMBS only, 2027 maturities",
        "Not published",
        "n/a",
      ],
      [
        "Mortgage Bankers Association",
        "All commercial and multifamily lenders; hotel/motel share only, no hotel dollar amount",
        "30% of hotel/motel loan balances mature in 2026; no hotel figure for 2027",
        "February 10, 2026",
      ],
      [
        "Federal Reserve, H.8",
        "Bank-held commercial real estate; no hotel split published",
        "Not published for hotels",
        "n/a",
      ],
      [
        "Widely repeated trade figure",
        "Claimed hotel CMBS through year-end 2027",
        "Not used on this site. We could not source it to any publisher.",
        "n/a",
      ],
    ],
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' September 2026 rate sheet gives you the index to run your own maturity stress test against: the 10-year Treasury at 4.94% on September 17, 2026 and SOFR at 3.85% for September 17, 2026.[4] It marks the spread over each as not yet published, because we do not print a spread until three independent lenders quote the same structure in a month.[7]",
  },
  workedExample: {
    label: "Hypothetical: the one calculation that tells you if you are at risk",
    body: "Hypothetical. Loan balance $12.60M maturing in 14 months. Trailing twelve-month NOI $1.42M. The lender's stated coverage test is 1.35x, on a 25-year schedule, at a 7.25 percent quote.\n\nMaximum debt service = $1.42M / 1.35 = $1,051,852. The annual constant at 7.25 percent over 25 years is about $86,800 per $1M of loan. Supportable loan = $1,051,852 / $86,800 per $1M = $12.12M. Gap = $12.60M minus $12.12M = $480,000, about 3.8 percent of the balance.\n\nA 3.8 percent gap is a check, not a crisis. Now rerun the identical loan with NOI at $1.15M: maximum debt service $851,852, supportable loan about $9.81M, gap $2.79M, or 22 percent of the balance. Same building, same balance, same rate. That second version is a different conversation and it needs to start today, not in month thirteen.",
  },
  faq: [
    {
      q: "How much hotel CMBS debt matures in 2026?",
      a: "Trepp counts $18.7 billion, reported August 3, 2026, with nearly 70 percent of it carrying a floating rate. That covers securitized hotel CMBS only, not bank, life company, SBA or debt-fund loans.",
    },
    {
      q: "How much hotel debt matures in 2027?",
      a: "No public source we could open publishes a hotel-specific 2027 maturity figure as of September 2026. We do not estimate one. A widely repeated multi-year number is not attributable to any publisher.",
    },
    {
      q: "What is a maturity default on a hotel loan?",
      a: "A failure to repay the balance on the maturity date, even when every monthly payment has been made on time. It is a refinancing failure rather than a payment failure, and it is usually preventable.",
    },
    {
      q: "Will my lender extend my hotel loan?",
      a: "Often, if the loan is current and covering, because taking back an operating hotel is expensive for a lender. Expect new terms: a rate reset, a paydown, a cash sweep, or a funded reserve.",
    },
    {
      q: "How do I know if my hotel loan can refinance?",
      a: "Divide trailing NOI by your lender's coverage test, convert the result to a loan amount at today's rate and amortization, and compare it to your balance. The gap is your answer.",
    },
    {
      q: "What is special servicing?",
      a: "Transfer of a securitized loan to a servicer that handles troubled loans. It leads delinquency, because a loan usually transfers before it misses a payment. The overall rate hit 11.42 percent in August 2026.",
    },
    {
      q: "When should I start working on a maturity?",
      a: "Twelve months out. At that point an owner has five options: pay down, extend, add mezzanine or preferred equity, bridge, or sell. At ninety days out, most of those have closed off.",
    },
  ],
  sources: [
    {
      n: 1,
      label: "4 trends reshaping the 2026 hospitality investment market",
      url: "https://www.hoteldive.com/news/trends-reshaping-2026-hospitality-investment-market/826807/",
      publisher: "Hotel Dive, citing Trepp",
      accessed: "2026-09-17",
    },
    {
      n: 2,
      label:
        "MBA: 17% of Commercial and Multifamily Mortgage Balances to Mature in 2026",
      url: "https://newslink.mba.org/cmf-newslinks/2026/february/mba-commercial-multifamily-newslink-thursday-feb-12-2026/mba-17-of-commercial-and-multifamily-mortgage-balances-to-mature-in-2026/",
      publisher: "Mortgage Bankers Association (MBA NewsLink)",
      accessed: "2026-09-18",
    },
    {
      n: 3,
      label: "H.8 Assets and Liabilities of Commercial Banks in the United States",
      url: "https://www.federalreserve.gov/releases/h8/",
      publisher: "Board of Governors of the Federal Reserve System",
      accessed: "2026-09-17",
    },
    {
      n: 4,
      label: "Secured Overnight Financing Rate (SOFR)",
      url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
      publisher: "Federal Reserve Bank of New York",
      accessed: "2026-09-18",
    },
    {
      n: 5,
      label:
        "Multifamily CMBS servicing rate declined, delinquencies stayed flat in August",
      url: "https://www.multifamilydive.com/news/bank-reo-cmbs-servicing-multifamily-deliquency/830531/",
      publisher: "Multifamily Dive, citing Trepp",
      accessed: "2026-09-17",
    },
    {
      n: 6,
      label: "Trepp: CMBS Delinquency Rate Up 51 Basis Points in July",
      url: "https://newslink.mba.org/mba-newslinks/2026/august/mba-newslink-thursday-august-6-2026/trepp-cmbs-delinquency-rate-up-51-basis-points-in-july/",
      publisher: "MBA Newslink, citing Trepp",
      accessed: "2026-09-17",
    },
    {
      n: 7,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-17",
    },
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/loan-workouts",
      "/hotel-financing/refinance",
      "/hotel-financing/refinance-or-sell",
      "/hotel-financing/cmbs-loans",
    ],
    glossary: ["/glossary/dscr", "/glossary/noi", "/glossary/debt-yield"],
    data: ["/rates", "/data/hotel-financing-statistics"],
  },
  cta: { label: "Run your maturity stress test with us", href: "/contact" },
  brandSentence:
    "Matthews Hotel Markets runs this stress test for owners at no cost, because the answer determines whether the next call is about debt or about a sale.",
};

export default page;
