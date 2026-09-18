/**
 * Who are the biggest hotel lenders, and which type fits my deal?
 * Answer page: /hotel-financing/hotel-lenders-by-type
 *
 * Converted from geo/06-pages/financing/hotel-financing__hotel-lenders-by-type.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "hotel-lenders-by-type",
  cluster: "hotel-financing",
  isHub: false,
  title: "Who Lends on Hotels? Lender Types Compared",
  h1: "Who are the biggest hotel lenders, and which type fits my deal?",
  description: "Banks, life companies, CMBS, SBA and debt funds compared on rate, leverage, recourse and speed, with the deal profile each one wants.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "Who are the biggest hotel lenders (banks, life cos, CMBS shops)?",
    "What's the difference between a bank loan and a life insurance company loan for a hotel?",
    "Do life insurance companies lend on hotels?",
    "What's the minimum loan size hotel lenders will do?",
    "Which lenders do non-recourse hotel loans?",
    "Who lends on independent hotels?",
    "What type of lender is fastest to close on a hotel?"
  ],
  answer: "Five lender types compete for hotel debt in September 2026 and they want different deals. Banks want a relationship and recourse. Life companies want stabilized, low-leverage, long-term. CMBS wants non-recourse at higher leverage. SBA wants owner-operators under program caps. Debt funds want transition. Matching the asset to the type is most of the work.",
  takeaways: [
    "There is no single best hotel lender. There is a best lender for your specific asset and business plan.",
    "Recourse is the fastest way to narrow the list. If you will not sign, banks and SBA mostly drop out.",
    "Life companies offer the lowest rates and the least leverage. That trade is the whole product.",
    "Debt funds are the only type that will lend against a business plan instead of a trailing twelve.",
    "Minimum loan size is the quiet filter. On a small loan, CMBS and life companies usually are not options."
  ],
  sections: [
    {
      h2: "What are the five types of hotel lender?",
      lead: "Banks and credit unions, life insurance companies, CMBS conduits, SBA lenders, and debt funds each compete for hotel debt, and each one wants a structurally different deal.",
      body: "Banks and credit unions lend against a relationship, often with deposits or other business tied to the loan, and generally want recourse. Life insurance companies deploy long-duration insurance liabilities into long-term, low-leverage, stabilized real estate debt, and their product is defined by that low-leverage, low-rate trade. CMBS conduits originate to securitize and sell, want stabilized cash flow they can pool, and are typically non-recourse with standard carve-outs. SBA lenders serve owner-operators inside the government-guaranteed programs' caps and eligibility rules: $5 million for a 7(a) loan and $5 million for a 504 debenture on a hotel.[1][2][4] Debt funds and bridge lenders serve transition situations that the other four types are not built to underwrite."
    },
    {
      h2: "Which ones do non-recourse?",
      lead: "CMBS and debt funds typically offer non-recourse with standard carve-outs; banks and SBA typically require a personal guarantee.",
      body: "Life insurance companies also generally lend non-recourse, but at their characteristically lower leverage and higher borrower quality bar. A sponsor who will not sign personally has, in practice, already narrowed the realistic lender universe to CMBS, life companies, and certain debt funds, each of which comes with its own leverage and asset-quality trade-offs in exchange for that non-recourse structure."
    },
    {
      h2: "Who has the lowest rate, and what do they want in return?",
      lead: "Life insurance companies typically offer the lowest rate on a hotel loan, in exchange for the lowest leverage and the strictest asset-quality and stabilization requirements.",
      body: "Matthews Hotel Markets' September 2026 rate sheet shows what each lender type will actually put in writing. For SBA that is a lot: a 7(a) maximum allowable rate of 10.00%, which is SBA's 3.00% cap[1] over the 7.00% Prime in effect since September 17, 2026,[5][6] and a 504 hotel structure capped at 85% of project cost under SBA rules. For banks, life companies, CMBS conduits and debt funds it is the index only, the 10-year Treasury at 4.94% on September 17, 2026 and SOFR at 3.85% for September 17, 2026,[7] with the spread and the working leverage ceiling both marked not yet published.[3] The trade is structural, not just a market quirk: a life company is matching a long-duration liability to a long-duration, low-risk asset, which only works on the most stabilized, best-located hotels at conservative leverage. A borrower chasing the lowest rate without meeting that bar will not find it available, regardless of the quoted spread."
    },
    {
      h2: "Who will lend on an independent hotel?",
      lead: "Banks, debt funds, and, within program limits, SBA lenders will finance an independent, unflagged hotel; CMBS and life companies generally prefer the demand-generation and brand-standard assurance a franchise provides.",
      body: "An independent hotel is financeable, but the lender leans more heavily on the sponsor's own operating track record and the specific market's demand fundamentals, because there is no franchise system's reservation channel and brand standards behind the asset. This generally narrows the realistic lender list and can mean somewhat more conservative leverage than an otherwise-identical branded hotel would receive."
    },
    {
      h2: "Who is fastest to close?",
      lead: "Banks and debt funds are generally fastest to close, particularly with an existing relationship or a sponsor already known to the lender; CMBS and SBA typically take longer because of pooling and guaranty processes.",
      body: "A bank that already knows the sponsor and the asset can move quickly because much of the underwriting groundwork is already in place. CMBS timelines are set by the need to fit the loan into a pooling and securitization process on a schedule the borrower does not control. SBA timelines are set by the government guaranty process on top of ordinary underwriting. Speed should be weighed against rate and leverage, not treated as the deciding factor alone."
    },
    {
      h2: "What is the minimum loan size for each?",
      lead: "SBA will go smallest, because the 7(a) program lists no minimum loan size; banks will size to a relationship even on a smaller loan; CMBS and life companies generally prefer larger loans.[1]",
      body: "This minimum-size filter operates before rate ever enters the conversation. An owner with a small loan need should expect the realistic lender universe to be banks, credit unions, SBA, and some debt funds, not CMBS or life companies, regardless of how strong the asset otherwise looks."
    },
    {
      h2: "How do I pick?",
      lead: "Match the lender type to the business plan first, recourse tolerance and hold period second, and rate last, because rate only matters among the lender types that actually fit the deal.",
      body: "The worked example below runs one hotel through three lender types and shows how the same asset produces meaningfully different proceeds, structure, and prepayment cost depending on which type is selected, with the right answer depending on the sponsor's actual hold period, not a generic ranking of lender types."
    }
  ],
  table: {
    caption: "Hotel lender types compared, September 2026",
    columns: [
      "Lender type",
      "Typical leverage",
      "Recourse",
      "Typical minimum",
      "Wants"
    ],
    rows: [
      [
        "Bank / credit union",
        "Set by the bank; not published",
        "Usually recourse",
        "Flexible, sized to the relationship",
        "Relationship, deposits, a sponsor they know"
      ],
      [
        "Life insurance company",
        "Lowest of the five; not published",
        "Non-recourse",
        "Larger loans only",
        "Stabilized, well-located, long term, low leverage"
      ],
      [
        "CMBS conduit",
        "Higher than a life company; sized to a debt yield floor",
        "Non-recourse with carve-outs",
        "Larger loans; pooling costs are fixed",
        "Stabilized cash flow, no near-term sale"
      ],
      [
        "SBA 7(a) / 504",
        "Up to 85% of project cost on a hotel under 504[3][4]",
        "Personal guarantee required",
        "No listed 7(a) minimum; $5M 7(a) maximum[1]",
        "Owner-operator, within program caps"
      ],
      [
        "Debt fund / bridge",
        "Highest; sized to the business plan, often against cost",
        "Non-recourse with carve-outs",
        "Varies by fund",
        "A transition story: PIP, ramp, reposition"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet publishes what each lender type will put in writing. For SBA that is a lot: a 7(a) maximum allowable rate of 10.00% at the 7.00% Prime in effect since September 17, 2026, and a 504 hotel structure capped at 85% of project cost. For banks, life companies, CMBS and debt funds it is the index only.[3]"
  },
  workedExample: {
    label: "Hypothetical: the same hotel, three lender types",
    body: "Hypothetical. 110-key stabilized Hampton Inn, NOI $1.90M, value $23.5M, sponsor has hotel experience and will not sign recourse.\n\nA life company at 55 percent LTV supports $12.93M, the lowest rate, 10-year fixed, non-recourse. A CMBS conduit at 65 percent LTV supports $15.28M, a wider rate, 10-year fixed, non-recourse with carve-outs, and defeasance on prepayment. A bank at 65 percent LTV also supports $15.28M, but requires recourse, which the sponsor has already ruled out.\n\nThe choice is $2.35M of extra proceeds against a wider coupon and a painful prepayment. If the hold is 10 years, CMBS fits. If a sale is possible in year four, the life company loan is cheaper to exit even though it is smaller. The prepayment term decides this, not the rate."
  },
  faq: [
    {
      q: "Who lends on hotels?",
      a: "Five lender types compete for hotel debt: banks and credit unions, life insurance companies, CMBS conduits, SBA lenders, and debt funds. Each wants a structurally different deal, not just a different price."
    },
    {
      q: "Do life insurance companies lend on hotels?",
      a: "Yes, on stabilized, well-located hotels at conservative leverage, typically the lowest rate available in exchange for the lowest leverage and strictest asset-quality bar of the five lender types."
    },
    {
      q: "Which hotel lenders offer non-recourse?",
      a: "CMBS conduits, life insurance companies, and many debt funds offer non-recourse structures with standard carve-outs. Banks and SBA lenders generally require a personal guarantee."
    },
    {
      q: "What is the minimum hotel loan size?",
      a: "SBA's 7(a) program lists no minimum loan size, so SBA goes smallest. CMBS and life insurance companies generally prefer larger loans. Banks size flexibly around an existing relationship."
    },
    {
      q: "Who lends on independent hotels?",
      a: "Banks, debt funds, and SBA lenders within program limits will finance independent, unflagged hotels. CMBS and life companies generally prefer the demand assurance a franchise brand provides."
    },
    {
      q: "Which hotel lender is fastest?",
      a: "Banks and debt funds are generally fastest, particularly with an existing sponsor relationship. CMBS and SBA typically take longer because of pooling and government guaranty processes."
    },
    {
      q: "Can I get a hotel loan without a personal guarantee?",
      a: "Yes, through CMBS, life insurance companies, or certain debt funds, generally at lower leverage or with a stronger sponsor and asset profile than a recourse loan would require."
    }
  ],
  sources: [
    {
      n: 1,
      label: "7(a) loan program: terms, conditions, and eligibility",
      url: "https://www.sba.gov/sba-lenders/#7a-terms",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "504 loans",
      url: "https://www.sba.gov/loans/504-loans/",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025), Section C, Ch. 1: debenture limits (p. 350) and Limited or Special Purpose Property, which lists hotels (pp. 354-355)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "BNY Increases Prime Lending Rate to 7.00%",
      url: "https://www.prnewswire.com/news-releases/bny-increases-prime-lending-rate-to-7-00-302881066.html",
      publisher: "The Bank of New York Mellon Corporation, via PR Newswire",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "PNC Bank, N.A. Changes Prime Rate",
      url: "https://www.prnewswire.com/news-releases/pnc-bank-na-changes-prime-rate-302881163.html",
      publisher: "PNC Bank, N.A., via PR Newswire",
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
      "/hotel-financing/cmbs-loans",
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/bridge-loans",
      "/hotel-financing/how-debt-placement-works"
    ],
    glossary: [
      "/glossary/dscr",
      "/glossary/debt-yield"
    ],
    data: [
      "/rates",
      "/tools/hotel-loan-sizing-calculator"
    ]
  },
  cta: {
    label: "Find the right lender type for your asset",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets maintains the lender list behind this table and refreshes it with the monthly rate sheet."
};

export default page;
