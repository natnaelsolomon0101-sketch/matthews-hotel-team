/**
 * How do I finance hotel construction in 2026?
 * Answer page: /hotel-financing/construction-loans
 *
 * Every figure was read at its source on 2026-09-18. Worked-example arithmetic was
 * recomputed by script before publishing. Do not hand-edit prose without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "construction-loans",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Construction Loans: How They Work in 2026",
  h1: "How do I finance hotel construction in 2026?",
  description: "How ground-up hotel construction loans work in 2026: bank limits, equity, draws, interest reserve, guaranties, SBA options and the permanent takeout.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "How do I finance hotel construction in 2026?",
    "I own land and want to build a 90-room Hampton Inn. How do I get a construction loan?",
    "How much equity do I need to build a hotel?",
    "Can I use an SBA loan to build a new hotel?",
    "What does it cost to build a Hampton Inn or a Home2 Suites?",
    "Are banks still making hotel construction loans right now?",
    "What is a completion guaranty on a hotel construction loan?",
    "What's the minimum loan size hotel lenders will do?"
  ],
  answer: "Most ground-up hotels are financed with a bank construction loan that funds in draws, then refinanced into permanent debt after opening. Federal guidelines cap a bank's construction loan at 80 percent of value,[1] and bank capital rules favor projects with at least 15 percent borrower equity.[2] Private lodging construction ran at a $23.3 billion annual rate in July 2026, down 9.9 percent from July 2025.[3]",
  takeaways: [
    "A construction loan is sized to cost, funded in draws, and interest-only while you build. The permanent loan that replaces it is sized to cash flow.",
    "Federal real estate lending guidelines set a supervisory ceiling of 80 percent loan-to-value on commercial construction and 65 percent on raw land.[1] Banks set their own limits under that ceiling and do not publish them.",
    "If the borrower has less than 15 percent of the as-completed value in the deal as cash or land, the bank must hold capital against the loan at a 150 percent risk weight instead of 100 percent.[2][4] That is why lenders ask for real equity.",
    "SBA 7(a) can fund construction and then amortize for up to 25 years after it. SBA 504 is permanent takeout money, so a bank still carries the build.[5][6]",
    "In the Federal Reserve's July 2026 survey, a significant net share of banks said construction lending standards sit at the tighter end of their range since 2005.[7]"
  ],
  sections: [
    {
      h2: "Who actually makes hotel construction loans?",
      lead: "Banks make most of them, SBA lenders cover the smaller owner-operator projects, and debt funds fill the gap when a bank will not reach the leverage the project needs.",
      body: "A ground-up hotel has no cash flow, so the lender types that size to trailing NOI, CMBS and life companies, are not construction lenders. That leaves three groups. Local and regional banks fund most select-service builds, usually for a sponsor they already know, with a personal guaranty. SBA lenders use the 7(a) program for projects that fit inside its $5 million loan cap, or pair a bank loan with a 504 debenture that arrives after completion.[5][6] Debt funds lend on larger or more complicated projects at a higher cost.\n\nOur rate sheet carries a Construction row indexed to Prime or SOFR. The spread on that row is marked not yet published, because no construction lender publishes one and we do not print a spread until three independent lenders quote the same structure in a month.[8] For how each lender type behaves once the hotel is open, see `/hotel-financing/hotel-lenders-by-type`."
    },
    {
      h2: "How much equity do I need to build a hotel?",
      lead: "There is no published minimum, but two federal rules explain why banks want meaningful cash or land equity in a hotel project before the first draw.",
      body: "The first rule is the interagency real estate lending guidelines. They tell every bank to set internal loan-to-value limits no higher than the supervisory limits: 65 percent for raw land, 75 percent for land development, and 80 percent for commercial construction. A bank can exceed those limits only within a capped bucket, and its exceptions on commercial property cannot total more than 30 percent of its capital.[1] The guidelines also require the bank's policy to set minimum hard equity, limits on interest reserves, and requirements for guarantor support.[1]\n\nThe second rule is the capital treatment of high volatility commercial real estate, or HVCRE. A hotel construction loan escapes that label if the loan-to-value is inside the supervisory limit and the borrower has contributed capital of at least 15 percent of the appraised as-completed value, in cash, unencumbered marketable assets, paid development costs, or land. The capital has to stay in the project until the loan is reclassified.[2] An HVCRE loan carries a 150 percent risk weight, against 100 percent for an ordinary corporate exposure.[4] A loan that costs the bank half again as much capital gets priced higher or declined.\n\nThese are floors that come from regulation. The equity your lender actually asks for is a credit decision, it is usually higher on a hotel than the floor, and it is not published. Get it in writing."
    },
    {
      h2: "How is a construction loan different from a permanent hotel loan?",
      lead: "A construction loan is sized to the budget, funds a piece at a time, and charges interest only on what has been drawn; a permanent loan is sized to NOI and funds once.",
      body: "The budget is the underwriting. The lender reviews the general contract, the franchise approval, a feasibility study, and a line-by-line budget that includes an interest reserve, which is loan money set aside to pay the loan's own interest until the hotel can. Each month the borrower submits a draw request, an inspector confirms the work is in place, and the lender funds that draw. Equity almost always goes in first.\n\nThe sponsor typically signs two guaranties on a bank construction loan: repayment, and completion, which is a promise to finish the building and cover cost overruns. Better structures let the repayment guaranty fall away or shrink once the hotel opens and reaches an agreed coverage level. The table below sets the two loan types side by side."
    },
    {
      h2: "Can I use an SBA loan to build a hotel?",
      lead: "Yes. SBA 7(a) can finance construction directly, and SBA 504 can take out a bank's construction loan with a fixed-rate debenture after the hotel is finished.",
      body: "A 7(a) loan caps at $5 million. The portion used to build or improve real estate can run 25 years plus the additional period needed to complete construction.[5] With Prime at 7.00 percent since September 17, 2026, the maximum variable rate on a 7(a) loan over $350,000 is 10.00 percent.[8][9] SBA's regulation requires a 100 percent payment and performance bond and builder's risk insurance on 7(a) construction unless SBA waives it.[10] The current SOP applies that to construction components over $350,000 and waives the bonds when the lender hires a third-party construction management firm that controls disbursements.[6] SBA does not allow balloon payments on 7(a) loans.[6]\n\nThe 504 program is permanent or take-out financing. An interim lender, usually the same bank that holds the first lien, funds construction, and the debenture sale repays the interim loan after the project is complete.[6] For a hotel the debenture is capped at $5 million and at 35 percent of project cost, and the borrower puts in at least 15 percent.[6] On a larger project the $5 million cap binds first, as the worked example shows. The 25-year debenture priced at 6.54 percent on September 10, 2026.[8] See `/hotel-financing/sba-7a-vs-504` for the full comparison."
    },
    {
      h2: "What does it cost to build a branded select-service hotel?",
      lead: "Hilton's 2026 franchise disclosure documents put a new 89-room Hampton Inn at $17.0 million to $24.7 million and a new 107-suite Home2 Suites at $18.1 million to $26.6 million, both before land.",
      body: "Those are the franchisor's own Item 7 estimates, issued March 30, 2026. The Hampton Inn range is $17,043,739 to $24,732,532 for 89 rooms, which works out to about $191,500 to $277,900 per room, excluding real property.[11] The Home2 Suites range is $18,075,688 to $26,550,592 for 107 suites, or about $168,900 to $248,100 per suite, excluding real property.[12] Land, financing costs and interest during construction sit on top.\n\nAn FDD estimate is a planning range, not a bid. Your lender will underwrite the general contractor's number, test it against an independent cost review, and add a contingency line. Hilton requires a new-development franchisee to start construction within 15 months of application approval, so the loan has to be ready when the franchise clock is running.[11]"
    },
    {
      h2: "Are banks making hotel construction loans right now?",
      lead: "Yes, selectively. Standards stopped tightening in 2026, but they remain tight by historical measure and developer demand is soft.",
      body: "The Federal Reserve's July 2026 Senior Loan Officer Opinion Survey, released August 3, 2026, reported that standards for construction and land development loans were basically unchanged over the second quarter, while a moderate net share of banks saw weaker demand for those loans. Asked where standards sit relative to their range since 2005, a significant net share of banks put construction loans at the tighter end, though fewer banks said so than in July 2025.[7]\n\nThe building data agrees. The Census Bureau put private lodging construction at a seasonally adjusted annual rate of $23.3 billion in July 2026, down 9.9 percent from $25.9 billion in July 2025.[3] Less new supply is a reason some lenders like the hotels that do get built. It also means a construction request competes for a small allocation, so the sponsor's track record and liquidity carry most of the decision."
    },
    {
      h2: "What happens when construction is finished?",
      lead: "The construction loan has to be replaced or converted, and the exit is underwritten before the first draw, not after the ribbon cutting.",
      body: "There are three common exits. A construction-to-permanent loan converts to an amortizing loan with the same bank once the hotel opens. A bridge loan carries the hotel through its ramp until trailing NOI supports permanent debt; see `/hotel-financing/bridge-loans`. Or the owner refinances straight into permanent debt once the hotel has a stabilized trailing twelve months; see `/hotel-financing/refinance` and `/hotel-financing/loan-requirements` for what that lender will test.\n\nBuild the timeline backward from the construction loan's maturity. A new hotel needs time to ramp, the permanent lender needs a trailing period to underwrite, and the closing itself takes months. Extension options on the construction loan are worth negotiating up front for that reason."
    }
  ],
  table: {
    caption: "Hotel construction loan versus permanent hotel loan",
    columns: [
      "Feature",
      "Construction loan",
      "Permanent loan"
    ],
    rows: [
      [
        "Sized to",
        "Project cost and as-completed value. Supervisory ceiling of 80% loan-to-value at banks[1]",
        "Trailing NOI through DSCR, debt yield and LTV tests"
      ],
      [
        "Funding",
        "Monthly draws against inspected work, equity in first",
        "One funding at closing"
      ],
      [
        "Payments during the term",
        "Interest only on the drawn balance, usually paid from an interest reserve in the budget",
        "Principal and interest, sometimes after an interest-only period"
      ],
      [
        "Rate",
        "Floating over Prime or SOFR; spread not published[8]",
        "Fixed over Treasuries or floating, by lender type"
      ],
      [
        "Guaranties",
        "Repayment and completion guaranties are standard at banks",
        "Recourse at banks and SBA; non-recourse with carve-outs at CMBS and life companies"
      ],
      [
        "Lender's main risk",
        "The hotel is not finished on budget, or opens into a weak market",
        "NOI falls below debt service"
      ],
      [
        "Exit or conversion",
        "Converts to permanent, or is refinanced by bridge, SBA 504 debenture or permanent debt[6]",
        "Refinance or sale at maturity"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet indexes its Construction row to Prime or SOFR, with Prime at 7.00% effective September 17, 2026 and SOFR at 3.85% for the same date. It marks the construction spread as not yet published, because no lender publishes one and we do not print a spread until three independent lenders quote the same structure in a month.[8]"
  },
  workedExample: {
    label: "Hypothetical: 89-room select-service hotel, $21.0M all-in cost",
    body: "Hypothetical. Total project cost is $21.0M including land, inside the range Hilton's 2026 FDD gives for an 89-room Hampton Inn once land is added.[11] The appraised as-completed value is $24.0M. The loan-to-cost, the spread and the draw pattern below are assumptions for the arithmetic, not quotes.\n\nBank path. A bank offers 65 percent of cost: $21.0M times 0.65 equals a $13.65M loan, so equity is $7.35M, or 35 percent of cost. The supervisory ceiling is 80 percent of $24.0M, or $19.2M, and this loan is 56.9 percent of value, well inside it.[1] The HVCRE capital test needs 15 percent of $24.0M, or $3.6M, of contributed capital; $7.35M clears it, so the bank holds the loan at the ordinary risk weight.[2][4]\n\nInterest reserve. Assume an 18-month build, an average drawn balance of 55 percent of the loan, and a rate of 8.00 percent, which is the 7.00 percent Prime plus an assumed 1.00 percent. $13.65M times 0.55 times 8.00 percent times 1.5 years equals about $900,900. That reserve is a budget line inside the $21.0M, and it is why a rate move during construction is a cost overrun risk.\n\nSBA 504 path. The bank first lien is 50 percent, or $10.5M. A hotel debenture could be 35 percent, but it is capped at $5.0M, which is 23.8 percent of this project. Equity is the remainder: $5.5M, or 26.2 percent. The cap starts to bind once project cost passes $5.0M divided by 0.35, or about $14.3M.[6] The 504 path needs $1.85M less equity than the bank path here, and the bank still has to fund the debenture's share during construction as the interim lender."
  },
  faq: [
    {
      q: "How much do I have to put down to build a hotel?",
      a: "No lender publishes a minimum. Federal guidelines cap bank construction loans at 80 percent of value, and bank capital rules favor borrowers with at least 15 percent of as-completed value in cash or land. SBA 504 requires at least 15 percent on a hotel. Expect to be asked for more."
    },
    {
      q: "I already own the land. Does that count as my equity?",
      a: "Usually yes. The bank capital rule counts contributed land toward the 15 percent test, and SBA 504 accepts land that is part of the project as the borrower's contribution. The lender decides the value it will credit, so ask before you rely on an appraisal."
    },
    {
      q: "Can I get an SBA loan to build a new hotel?",
      a: "Yes. SBA 7(a) can fund construction up to its $5 million cap and then amortize for up to 25 years. SBA 504 takes out the construction lender with a fixed-rate debenture, capped at $5 million for a hotel, after the building is complete."
    },
    {
      q: "Is a hotel construction loan recourse?",
      a: "At a bank or SBA lender, yes. Expect a repayment guaranty and a completion guaranty. Some structures reduce or release the repayment guaranty after the hotel opens and reaches an agreed coverage level. Non-recourse construction debt exists at debt funds, at lower leverage and higher cost."
    },
    {
      q: "What interest rate should I expect on a hotel construction loan in 2026?",
      a: "A floating rate over Prime or SOFR. Prime has been 7.00 percent since September 17, 2026. No lender publishes its construction spread, so our rate sheet does not print one. The SBA 7(a) maximum on loans over $350,000 is 10.00 percent."
    },
    {
      q: "What is an interest reserve?",
      a: "It is a line in the construction budget, funded by the loan, that pays the loan's interest while the hotel has no income. It is sized from the draw schedule and an assumed rate, so a longer build or a higher rate uses it up faster."
    },
    {
      q: "How long does a hotel construction loan last?",
      a: "Long enough to build and begin the ramp, usually with extension options. SBA 7(a) is different: it runs up to 25 years plus the construction period, so there is no separate refinance. Match the term to a realistic opening date and permanent-loan timeline."
    },
    {
      q: "Do I need the franchise approved before I apply for a construction loan?",
      a: "In practice, yes for a branded hotel. The lender underwrites the flag, the prototype cost and the franchise term. Hilton's 2026 Hampton FDD requires construction to start within 15 months of application approval, so line up the loan and the franchise together."
    }
  ],
  sources: [
    {
      n: 1,
      label: "12 CFR Part 34, Subpart D, Appendix A: Interagency Guidelines for Real Estate Lending Policies (supervisory loan-to-value limits)",
      url: "https://www.law.cornell.edu/cfr/text/12/appendix-A_to_subpart_D_of_part_34",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "12 CFR 217.2, Definitions: high volatility commercial real estate (HVCRE) exposure",
      url: "https://www.law.cornell.edu/cfr/text/12/217.2",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Monthly Construction Spending, July 2026 (release CB26-140, September 1, 2026), Table 1, private lodging",
      url: "https://www.census.gov/construction/c30/pdf/release.pdf",
      publisher: "U.S. Census Bureau",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "12 CFR 217.32, General risk weights: corporate exposures (f) and HVCRE exposures (j)",
      url: "https://www.law.cornell.edu/cfr/text/12/217.32",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "7(a) loan program: terms, conditions, and eligibility",
      url: "https://www.sba.gov/sba-lenders/#7a-terms",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025): amortization and balloons (p. 125), 7(a) construction loan provisions (pp. 311-312), 504 interim financing (pp. 332-333), debenture limits (p. 350), hotels as Limited or Special Purpose Property (pp. 354-355)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "The July 2026 Senior Loan Officer Opinion Survey on Bank Lending Practices (released August 3, 2026)",
      url: "https://www.federalreserve.gov/data/sloos/sloos-202607.htm",
      publisher: "Board of Governors of the Federal Reserve System",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 9,
      label: "BNY Increases Prime Lending Rate to 7.00%",
      url: "https://www.prnewswire.com/news-releases/bny-increases-prime-lending-rate-to-7-00-302881066.html",
      publisher: "The Bank of New York Mellon Corporation, via PR Newswire",
      accessed: "2026-09-18"
    },
    {
      n: 10,
      label: "13 CFR 120.200, What bonding requirements exist during construction?",
      url: "https://www.law.cornell.edu/cfr/text/13/120.200",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 11,
      label: "2026 US Hampton Franchise Disclosure Document (issued March 30, 2026), Item 5 notes and Item 7",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    },
    {
      n: 12,
      label: "2026 US Home2 Suites Franchise Disclosure Document (issued March 30, 2026), Item 7",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Home2.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/bridge-loans",
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/hotel-loan-rates"
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
    label: "Talk to the capital markets desk about a construction loan",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets places construction, bridge and permanent hotel debt, and sizes the permanent takeout before the construction loan is signed."
};

export default page;
