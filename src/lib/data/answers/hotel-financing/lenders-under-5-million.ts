/**
 * Who lends on hotels under $5 million?
 * Answer page: /hotel-financing/lenders-under-5-million
 *
 * Every figure was read at its source on 2026-09-18. Worked-example arithmetic was
 * recomputed by script before publishing. Do not hand-edit prose without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "lenders-under-5-million",
  cluster: "hotel-financing",
  isHub: false,
  title: "Who Lends on Hotels Under $5 Million? (2026)",
  h1: "Who lends on hotels under $5 million?",
  description: "Small-balance hotel loans in 2026: SBA 7(a), SBA 504, community banks, credit unions and the USDA B&I guarantee, with the program limits that matter.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "What's the minimum loan size hotel lenders will do?",
    "Who lends on hotels under $5 million?",
    "I'm buying a 40-room motel for $2.8 million. Who will finance it?",
    "Can I get an SBA loan to buy a hotel?",
    "Can I get a USDA loan for a hotel in a small town?",
    "Do credit unions make hotel loans?",
    "My bank says my hotel loan is too big for them. What does that mean?",
    "What's the minimum down payment for an SBA loan on a hotel?"
  ],
  answer: "Four groups make most hotel loans under $5 million: SBA 7(a) lenders, banks paired with an SBA 504 debenture, community banks and credit unions lending conventionally, and rural lenders using the USDA Business and Industry guarantee. A 7(a) loan caps at $5 million.[1] For fiscal 2026 USDA guarantees 85 percent of a B&I loan under $5 million.[2] Prime has been 7.00 percent since September 17, 2026.[3]",
  takeaways: [
    "Small hotel loans are relationship and program loans. CMBS conduits and life companies mostly work above this size, so expect recourse.",
    "SBA 7(a): one loan up to $5 million, guaranteed up to 75 percent above $150,000, up to 25 years on real estate, no balloon.[1][4]",
    "SBA 504: a bank first lien, a fixed-rate debenture up to $5 million on a hotel, and at least 15 percent from the borrower.[5][4] The 25-year debenture priced at 6.54 percent on September 10, 2026.[3]",
    "USDA B&I: hotels and motels are named as eligible in the regulation, in areas outside cities of more than 50,000 people, with terms up to 40 years and no balloon.[6][7][8]",
    "A bank's legal lending limit is 15 percent of its capital and surplus per borrower.[9] A small bank can run out of room on one hotel."
  ],
  sections: [
    {
      h2: "Why is the lender list different under $5 million?",
      lead: "The fixed cost of underwriting and securitizing a hotel loan pushes capital-markets lenders toward bigger loans, which leaves small loans to banks, credit unions and government-guaranteed programs.",
      body: "A public example shows the scale conduits work at. The Benchmark 2026-B42 CMBS pool, marketed in February 2026, held 62 loans totaling $729,201,713, an average of about $11.8 million per loan, and hospitality was 1.8 percent of the pool.[10] A $3 million motel loan is not what that machine is built for.\n\nOur rate sheet calls conventional bank and credit union debt the most common source of hotel debt under $15 million.[3] Under $5 million the SBA programs join it, because the 7(a) loan cap and the 504 hotel debenture cap both sit at $5 million.[1][4] Nearly all of this debt is recourse. If that is a problem, read `/hotel-financing/non-recourse-loans` before you shop."
    },
    {
      h2: "How does SBA 7(a) work for a small hotel?",
      lead: "It is one loan from one lender, up to $5 million, with a federal guaranty that lets the bank lend longer and at higher leverage than it would alone.",
      body: "SBA guarantees up to 75 percent of a 7(a) loan above $150,000. A loan that finances real estate can run up to 25 years, and proceeds can cover the purchase, equipment, working capital and a change of ownership.[1] SBA does not allow balloon payments, so the loan fully amortizes.[4] The maximum variable rate on loans over $350,000 is the base rate plus 3.0 percent, which is 10.00 percent on the 7.00 percent Prime in effect since September 17, 2026.[1][3] SBA publishes a maximum loan size and no minimum.[1]\n\nTwo conditions catch hotel buyers. Holders of at least 20 percent of the business generally must personally guarantee the loan.[11] And the hotel has to be a hotel: more than 50 percent of prior-year revenue must come from guests who stay 30 days or less.[4] `/hotel-financing/extended-stay-financing` covers that test."
    },
    {
      h2: "When is SBA 504 the better small-hotel loan?",
      lead: "When the purchase is mostly real estate and you want part of the debt fixed for up to 25 years.",
      body: "A 504 project has three pieces: a bank first lien, a debenture-funded second lien from a Certified Development Company, and the borrower's contribution. SBA's SOP lists hotels, motels and other lodging as Limited or Special Purpose Property, so the borrower contributes at least 15 percent, or 20 percent if the business is also two years old or less.[5][4] The debenture on a hotel caps at $5 million.[4] It cannot fund working capital.[12]\n\nThe debenture rate is published monthly. The 25-year debenture priced at 6.54 percent on September 10, 2026, fees included.[3] The bank prices its first lien separately. `/hotel-financing/sba-7a-vs-504` runs the two programs side by side on the same purchase."
    },
    {
      h2: "Can I get a USDA loan for a hotel?",
      lead: "Yes, if the hotel is in an eligible rural area. The Business and Industry program guarantees a bank's loan, and its regulation names hotels and motels as eligible projects.",
      body: "The OneRD guaranteed loan regulation lists tourist and recreation facilities, including hotels, motels and bed and breakfast establishments, among eligible B&I projects.[6] Rural means an area outside a city or town of more than 50,000 inhabitants and outside the urbanized area next to one, based on the latest decennial census.[7] USDA maintains an eligibility map, and your lender will check the address.\n\nThe program limit is $25 million per borrower, far above this page's range.[13] For fiscal 2026, a B&I loan under $5 million receives an 85 percent guarantee, with an initial guarantee fee of 3.0 percent and a periodic retention fee of 0.55 percent; loans from $5 million to $25 million receive 80 percent. Those rates took effect October 1, 2025.[2] Terms can run up to 40 years, limited to the useful life of the assets, balloon maturities are not allowed, and any interest-only period ends within three years of the note date.[8]\n\nNot every bank is a B&I lender, and the guarantee adds a federal agency review. It is worth the effort for a rural hotel that is too large or too real-estate-heavy for 7(a), or where a longer amortization makes the coverage test work. The program's equity, appraisal and refinancing rules are on `/hotel-financing/usda-b-and-i-loans`."
    },
    {
      h2: "Do community banks and credit unions make hotel loans?",
      lead: "Yes, and for a small hotel they are often the fastest and most flexible option, within two legal limits worth knowing.",
      body: "The first is the legal lending limit. A national bank's total loans to one borrower may not exceed 15 percent of its capital and surplus, plus another 10 percent if that excess is fully secured by readily marketable collateral, which a hotel is not.[9] State-chartered banks follow their own state limits. When a banker says a loan is too big for the bank, this is usually what it means, and the fix is a participation with another bank or a larger lender.\n\nThe second applies to credit unions. A federally insured credit union's member business loans are capped in aggregate at 1.75 times its net worth.[14] A credit union near that cap may like your hotel and still decline it. Ask early.\n\nNeither type publishes its DSCR floor, leverage limit or spread, so our rate sheet marks those cells not yet published.[3] Expect a personal guaranty, a shorter fixed period than the amortization, and a deposit relationship."
    },
    {
      h2: "How do I choose among them?",
      lead: "Start with what the hotel and the buyer qualify for, then weigh down payment, rate structure and speed.",
      body: "If you are an owner-operator buying your first hotel, start with 7(a): it is one loan, it can include working capital, and the lender's policy sets the down payment instead of a regulatory minimum. If the deal is mostly real estate and you want a fixed rate, price 504. If the hotel is rural, ask a B&I lender what a 40-year maximum term does to coverage. If you have a banking relationship, liquidity and want speed and light prepayment terms, a conventional bank or credit union loan is often simplest.\n\nWhichever path you take, the lender will size the loan the way `/hotel-financing/loan-requirements` describes, and the documents are the same. A renovation or brand change on top of the purchase changes the answer; see `/hotel-financing/pip-and-renovation-loans`."
    }
  ],
  table: {
    caption: "Small-balance hotel loan options and their published limits, September 2026",
    columns: [
      "Option",
      "Published size limit",
      "Government guaranty",
      "Longest term",
      "Published rate fact",
      "Key condition"
    ],
    rows: [
      [
        "SBA 7(a)",
        "$5 million loan maximum; no published minimum[1]",
        "Up to 75% above $150,000[1]",
        "25 years on real estate, no balloon[1][4]",
        "Maximum 10.00% variable on loans over $350,000[3]",
        "Personal guaranty from 20% owners; 30-day transient revenue test[11][4]"
      ],
      [
        "SBA 504",
        "$5 million debenture on a hotel; bank first lien sized by the bank[4]",
        "SBA backs the debenture that funds the second lien",
        "10, 20 or 25 year debenture[12]",
        "25-year debenture 6.54%, priced September 10, 2026[3]",
        "Borrower contributes at least 15% on a hotel; no working capital[5][12]"
      ],
      [
        "USDA B&I guarantee",
        "$25 million per borrower[13]",
        "85% under $5 million for fiscal 2026[2]",
        "Up to 40 years, no balloon[8]",
        "Rate set by the lender; 3.0% guarantee fee and 0.55% retention fee[2]",
        "Rural area: outside cities of more than 50,000[7]"
      ],
      [
        "Community or regional bank",
        "Legal limit of 15% of the bank's capital and surplus per borrower[9]",
        "None",
        "Set by the bank; not published",
        "Not published[3]",
        "Relationship and personal guaranty"
      ],
      [
        "Credit union",
        "Aggregate business loans capped at 1.75 times net worth[14]",
        "None",
        "Set by the credit union; not published",
        "Not published[3]",
        "Membership; room under the business loan cap"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet shows the two published small-balance benchmarks: a 10.00% maximum allowable rate on SBA 7(a) loans over $350,000, which is the 7.00% Prime effective September 17, 2026 plus SBA's 3.00% cap, and 6.54% on the 25-year SBA 504 debenture priced September 10, 2026. It marks conventional bank and credit union spreads as not yet published.[3]"
  },
  workedExample: {
    label: "Hypothetical: a $4.2M purchase of a 48-key rural hotel, four ways",
    body: "Hypothetical. A 48-key hotel in a town of 9,000 people sells for $4,200,000. The loan-to-price figures for 7(a), B&I and the bank are assumptions for the arithmetic, not quotes or program rules.\n\nSBA 7(a) at an assumed 85 percent of price: a $3,570,000 loan and $630,000 down. SBA guarantees 75 percent, or $2,677,500, and the lender holds $892,500 of unguaranteed exposure.[1]\n\nSBA 504 at the hotel minimums: bank first lien 50 percent, $2,100,000; debenture 35 percent, $1,470,000; borrower 15 percent, $630,000.[5][4] The down payment matches the 7(a) case here, and $1,470,000 of the debt is fixed for up to 25 years.\n\nUSDA B&I at an assumed 80 percent of price: a $3,360,000 loan and $840,000 down. The fiscal 2026 guarantee is 85 percent, or $2,856,000. The initial guarantee fee is 3.0 percent of the guaranteed amount, $85,680, and the periodic retention fee is 0.55 percent of the guaranteed share of the outstanding balance, about $15,708 at the starting balance.[2][15]\n\nConventional bank at the same $3,360,000: under the 15 percent lending limit, the bank needs at least $22,400,000 of capital and surplus to hold this loan alone.[9] A bank with $30,000,000 of capital and surplus has a $4,500,000 limit, so this one borrower would use most of it.\n\nFour structures, down payments from $630,000 to $840,000, and the right one depends on the rate structure, fees and speed you need."
  },
  faq: [
    {
      q: "What's the minimum loan size hotel lenders will do?",
      a: "It depends on the lender type. SBA publishes a $5 million maximum for 7(a) and no minimum, so SBA lenders and community banks go smallest. CMBS conduits and life companies generally prefer larger loans. One 2026 conduit pool averaged about $11.8 million per loan."
    },
    {
      q: "I'm buying a 40-room motel for $2.8 million. Who will finance it?",
      a: "Most likely an SBA 7(a) lender, a bank paired with an SBA 504 debenture, or a community bank or credit union that knows you. If the motel is outside a city of more than 50,000 people, a USDA B&I lender is a fourth option."
    },
    {
      q: "Can I get a USDA loan for a hotel in a small town?",
      a: "Yes. The USDA Business and Industry regulation names hotels and motels as eligible projects in rural areas. A bank makes the loan and USDA guarantees 85 percent of it for fiscal 2026 if the loan is under $5 million."
    },
    {
      q: "Do credit unions make hotel loans?",
      a: "Many do. A federally insured credit union's total member business loans are capped at 1.75 times its net worth, so appetite depends on how much room it has left. You also need to qualify for membership."
    },
    {
      q: "My bank says my hotel loan is too big for them. What does that mean?",
      a: "Usually the legal lending limit. A national bank cannot lend one borrower more than 15 percent of its capital and surplus on a loan like this. The bank can sell a participation to another bank, or you can move to a larger lender."
    },
    {
      q: "How much do I need to put down on a small hotel?",
      a: "SBA 504 requires at least 15 percent on a hotel, or 20 percent for a business two years old or less. SBA 7(a), USDA B&I and conventional lenders set equity by their own credit policy and do not publish it. Get the requirement in writing."
    },
    {
      q: "Are small hotel loans always recourse?",
      a: "Nearly always. SBA rules generally require a personal guaranty from every owner of 20 percent or more, and banks and credit unions ask for one by policy. Non-recourse lenders mostly work at larger loan sizes."
    },
    {
      q: "Is there a balloon payment on an SBA or USDA hotel loan?",
      a: "No. SBA does not allow balloon payments on 7(a) loans, and the USDA regulation says balloon maturities are not allowed on guaranteed loans. Conventional bank loans often do have a balloon, because the fixed period is shorter than the amortization."
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
      label: "OneRD Annual Notice of Guarantee Fee Rates, Periodic Retention Fee Rates, Loan Guarantee Percentage and Fee for Issuance of the Loan Note Guarantee Prior to Construction Completion for Fiscal Year 2026 (91 FR 11272, March 9, 2026)",
      url: "https://www.federalregister.gov/documents/2026/03/09/2026-04581/onerd-annual-notice-of-guarantee-fee-rates-periodic-retention-fee-rates-loan-guarantee-percentage",
      publisher: "Federal Register, U.S. Department of Agriculture Rural Development",
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
      label: "SOP 50 10 8, Lender and Development Company Loan Programs (effective June 1, 2025): 30-day transient revenue test (pp. 19-20), no balloon payments (p. 125), debenture limits (p. 350), hotels as Limited or Special Purpose Property (pp. 354-355)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "13 CFR 120.910, Borrower contributions",
      url: "https://www.law.cornell.edu/cfr/text/13/120.910",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "7 CFR 5001.105, Eligible projects: tourist and recreation facilities, including hotels and motels",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.105",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "7 CFR 5001.3, Definitions: rural and rural area",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.3",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "7 CFR 5001.402, Term length, loan schedule, and repayment",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.402",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 9,
      label: "12 CFR 32.3, Lending limits",
      url: "https://www.law.cornell.edu/cfr/text/12/32.3",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 10,
      label: "Benchmark 2026-B42 Mortgage Trust, free writing prospectus: new issue announcement, February 18, 2026",
      url: "https://www.sec.gov/Archives/edgar/data/2110410/000153949726000696/n5676_x6-newissue.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-09-18"
    },
    {
      n: 11,
      label: "13 CFR 120.160, Loan conditions (personal guarantees)",
      url: "https://www.law.cornell.edu/cfr/text/13/120.160",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 12,
      label: "504 loans",
      url: "https://www.sba.gov/loans/504-loans/",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-09-18"
    },
    {
      n: 13,
      label: "7 CFR 5001.406, Maximum loan amounts",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.406",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 14,
      label: "12 CFR 723.8, Aggregate member business loan limit; exclusions and exceptions",
      url: "https://www.law.cornell.edu/cfr/text/12/723.8",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 15,
      label: "7 CFR 5001.454, Guarantee fee, and 7 CFR 5001.455, Guarantee retention fee (how each fee is calculated)",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.454",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/non-recourse-loans",
      "/hotel-financing/extended-stay-financing"
    ],
    glossary: [
      "/glossary/dscr",
      "/glossary/noi"
    ],
    data: [
      "/rates",
      "/tools/hotel-loan-sizing-calculator",
      "/data/sba-hotel-lending"
    ]
  },
  cta: {
    label: "Ask which small-balance lenders fit your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets quotes SBA, USDA and conventional options side by side on small hotel loans, because the program that fits is rarely the first one a buyer calls."
};

export default page;
