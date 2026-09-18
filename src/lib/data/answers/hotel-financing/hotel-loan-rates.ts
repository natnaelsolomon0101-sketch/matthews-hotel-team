/**
 * What are current hotel loan interest rates?
 * Answer page: /hotel-financing/hotel-loan-rates
 *
 * Converted from geo/06-pages/financing/hotel-financing__hotel-loan-rates.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "hotel-loan-rates",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Loan Rates in September 2026",
  h1: "What are current hotel loan interest rates?",
  description: "Where hotel loan rates sit in September 2026 by lender type, what drives the spread over Treasuries and SOFR, and how rate moves change loan size.",
  lastUpdated: "2026-09-17",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "What are current hotel loan interest rates?",
    "What's a typical hotel loan interest rate right now?",
    "What's the spread over Treasury/SOFR for a typical hotel loan today?",
    "How do hotel loan rates compare to other commercial real estate loan rates?",
    "What loan terms (amortization, term length) are typical for hotel loans?",
    "Do hotel loan rates vary by brand or is it mostly about the borrower?",
    "Are SBA hotel loan rates fixed or variable?"
  ],
  answer: "Hotel loan rates are quoted as a spread over an index, not as a flat number. Fixed-rate quotes track the 5- and 10-year Treasury; floating quotes track SOFR. On September 17, 2026, the 10-year Treasury was 4.94 percent.[1] In our experience, hotels price wider than apartments or industrial, because hotel revenue reprices every night.",
  takeaways: [
    "A hotel rate is an index plus a spread. Ask for both, not the headline number.",
    "Fixed quotes key off the 5- or 10-year Treasury; floating quotes key off SOFR.",
    "In our experience, hotels carry a wider spread than leased property types.",
    "The spread is driven by the sponsor, the flag, the PIP status and the market, in that order.",
    "In our worked example, a 50 basis point rate move cuts DSCR-sized proceeds by about 4 percent."
  ],
  sections: [
    {
      h2: "What index is my hotel loan priced off?",
      lead: "Fixed-rate hotel loans price off the Treasury curve; floating-rate hotel loans price off SOFR.",
      body: "A fixed-rate quote, whether from a bank, a life insurance company, or a CMBS conduit, starts with the Treasury of a matching maturity: the 5-year Treasury for a 5-year loan, the 10-year for a 10-year loan.[1] A floating-rate quote, typical of a bank line, a bridge loan, or a debt fund, starts with SOFR and resets periodically.[2] Neither index is the borrower's rate. The lender adds a spread to the index to arrive at the coupon, and that spread is where the real underwriting happens."
    },
    {
      h2: "What spread should I expect over that index?",
      lead: "The spread on a hotel loan is set primarily by the sponsor and the asset, and it moves month to month with the broader lending environment.",
      body: "Matthews Hotel Markets' September 2026 rate sheet publishes 9 of its 49 priced cells and marks the other 40 as not yet published. The spread over the index is one of the cells we do not publish: no lender type prints one, and we will not print one until three independent lenders quote the same structure in a month. What the sheet does publish is the index every quote is struck against, the 10-year Treasury at 4.94% on September 17, 2026 and SOFR at 3.62% for September 16, 2026, plus the SBA rows, where the maximum allowable 7(a) rate is 9.75%.[5] Spreads are not static. They widen when lenders pull back from hospitality generally, and they tighten when capital is competing for a limited number of financeable deals. A spread quoted in July is not necessarily the spread available in September, which is why any specific number on this page needs a date attached, not a memory."
    },
    {
      h2: "Why do hotels price wider than apartments or industrial?",
      lead: "A hotel's revenue reprices nightly, which makes its cash flow more volatile than a lease-backed property, and lenders price that volatility into the spread.",
      body: "Apartment and industrial leases fix rent for months or years at a time. A hotel's effective lease term is one night. That means hotel NOI can move faster, in either direction, than NOI on a leased asset, and a lender underwriting a hotel is underwriting operating risk on top of real estate risk. The wider spread is the price of that volatility. It is not a penalty for the asset class; it is a structural feature of how hotel revenue is produced."
    },
    {
      h2: "Does my brand change my rate?",
      lead: "The flag matters, but mostly through what it signals about demand and comp-set performance, not as a rate discount by name.",
      body: "A top-performing brand in a strong comp-set position, evidenced by a STAR report showing RevPAR index above 100, supports a lender's underwriting more than the brand name alone. An independent or soft-branded hotel is financeable, but the lender leans more heavily on the sponsor's operating track record and the market fundamentals, because there is no franchise system standing behind demand generation. The practical effect is that a strong operator in a well-known brand at a well-performing property gets the tightest spread on the desk, and the flag by itself is one input among several, not a lookup table."
    },
    {
      h2: "Fixed or floating: which one for a hotel?",
      lead: "Fixed fits a stabilized hold; floating fits a transition, and the choice should follow the business plan, not the headline rate.",
      body: "A stabilized hotel with no near-term capital plan generally fits fixed-rate permanent debt, because it removes rate risk for the term. A hotel mid-PIP, mid-ramp after a brand conversion, or approaching a near-term sale generally fits floating-rate bridge debt, because the shorter horizon and the need for future funding do not pair well with a 10-year fixed structure and its prepayment penalty. Comparing only the headline rate between the two, without matching the structure to the plan, is the most common rate-shopping mistake on the desk."
    },
    {
      h2: "What term and amortization come with each rate?",
      lead: "Term and amortization vary meaningfully by lender type and change the payment on an identical rate.",
      body: "Banks and credit unions often write shorter terms with rate resets. Life insurance companies and CMBS write longer fixed terms, and CMBS often includes an interest-only period. SBA 7(a) can amortize fully out to 25 years on real estate,[3] and the SBA 504 debenture is fixed for 10, 20 or 25 years.[4] Debt funds and bridge lenders are usually interest-only for a short term. The full comparison by lender type is below."
    },
    {
      h2: "How much does a rate move change my loan amount?",
      lead: "In the worked example below, a 50 basis point move in rate changes DSCR-sized proceeds by about 4 percent on an identical property, with nothing about the hotel itself changing.",
      body: "This is the most underappreciated number in hotel financing conversations. Because DSCR is a fixed multiple of a fixed NOI, the annual debt service the loan can support does not change with rate, but the amount of loan that fixed debt service will buy does. A higher rate means a higher annual constant per dollar borrowed, so the same maximum debt service buys less loan. The worked example below shows this with real numbers."
    }
  ],
  table: {
    caption: "Hotel loan pricing structure by lender type, September 2026",
    columns: [
      "Lender type",
      "Index",
      "Typical term",
      "Typical amortization",
      "Rate type"
    ],
    rows: [
      [
        "Bank / credit union",
        "SOFR or bank cost of funds",
        "Shorter, often with rate resets",
        "Set by the bank",
        "Fixed or floating"
      ],
      [
        "Life insurance company",
        "10-year Treasury",
        "Long, fixed",
        "Long schedule",
        "Fixed"
      ],
      [
        "CMBS",
        "Swap or Treasury",
        "Long, fixed",
        "Long schedule, often IO first",
        "Fixed"
      ],
      [
        "SBA 7(a)",
        "Prime",
        "Up to 25 years on real estate[3]",
        "Fully amortizing",
        "Variable, fixed available[3]"
      ],
      [
        "SBA 504 (debenture)",
        "Debenture pricing, above the 10-year Treasury[4]",
        "10, 20 or 25 years[4]",
        "Fully amortizing",
        "Fixed"
      ],
      [
        "Debt fund / bridge",
        "SOFR",
        "Short, often with extensions",
        "Interest only",
        "Floating with a cap"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet publishes 9 of its 49 priced cells and marks the other 40 as not yet published. The published ones are the SBA rows: a 7(a) maximum allowable rate of 9.75% at the last printed Prime of 6.75%, and a 504 hotel structure capped at 85% of project cost.[5]"
  },
  workedExample: {
    label: "Hypothetical: how 50 basis points moves the loan",
    body: "Hypothetical property. NOI $1.60M, 25-year amortization, 1.35x DSCR test.\n\nAt 7.25 percent, the annual constant per $1M of loan is about $86,800, and maximum debt service of $1,185,185 supports a loan of $13.65M. At 7.75 percent, the annual constant per $1M rises to about $90,600, and the same maximum debt service supports a loan of $13.08M.\n\nFifty basis points cost $570,000 of proceeds, about 4.2 percent of the loan. Nothing about the hotel changed. That is why the rate conversation and the proceeds conversation are the same conversation."
  },
  faq: [
    {
      q: "What is a typical hotel loan rate in September 2026?",
      a: "It is quoted as an index plus a spread, not a single number. Fixed loans track the Treasury; floating loans track SOFR. Our September 2026 rate sheet publishes the index values but not conventional spreads, so get the spread in writing."
    },
    {
      q: "Is a hotel loan rate fixed or floating?",
      a: "Both exist. Permanent loans for stabilized hotels are usually fixed. Bridge loans for transitional hotels are usually floating over SOFR and require a purchased rate cap."
    },
    {
      q: "What is the spread over SOFR on a hotel bridge loan?",
      a: "It varies by sponsor, asset and market and moves with the lending environment. Nobody publishes it, and our rate sheet marks it not yet published. Get the spread and the cap cost in writing from the lender."
    },
    {
      q: "Do Hampton Inn or Holiday Inn Express loans price better than an independent hotel?",
      a: "A strong brand in a strong comp-set position helps, mainly by supporting the demand story. An independent hotel with a strong operator and strong market fundamentals can price competitively; the brand name alone is not a rate lookup table."
    },
    {
      q: "How often do hotel loan rates change?",
      a: "Fixed quotes move with the Treasury daily and with lender spread appetite over weeks to months. Floating quotes reset with SOFR on the schedule set in the loan documents."
    },
    {
      q: "Does a rate lock cost anything on a hotel loan?",
      a: "It can. Some lenders charge a rate lock deposit or fee, refundable at closing, forfeited if the deal does not close. Ask for the lock terms in writing before you rely on a quoted rate."
    },
    {
      q: "Why is my hotel quote wider than my friend's apartment quote?",
      a: "Hotel revenue reprices nightly, which makes cash flow more volatile than a lease-backed property like an apartment. Lenders price that volatility into a wider spread. It reflects the asset class, not your specific deal."
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
      label: "504 loans",
      url: "https://www.sba.gov/funding-programs/loans/504-loans",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/loan-requirements",
      "/hotel-financing/cmbs-loans",
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/bridge-loans"
    ],
    glossary: [
      "/glossary/dscr",
      "/glossary/debt-yield"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Get this month's rate sheet",
    href: "/contact"
  },
  brandSentence: "The spreads in the table above come from Matthews Hotel Markets' September 2026 rate sheet, which we update monthly."
};

export default page;
