/**
 * Can I get a USDA B&I loan for a hotel?
 * Answer page: /hotel-financing/usda-b-and-i-loans
 *
 * Written 2026-09-18 from the text of 7 CFR part 5001 and the fiscal 2026
 * Federal Register fee notice, both read that day. The small-balance page
 * (/hotel-financing/lenders-under-5-million) carries the short version; this
 * page goes deeper and links back instead of repeating it.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "usda-b-and-i-loans",
  cluster: "hotel-financing",
  isHub: false,
  title: "USDA B&I Loans for Hotels: Rules and Fees",
  h1: "Can I get a USDA B&I loan for a hotel?",
  description: "USDA B&I guaranteed loans for rural hotels: eligibility, the $25 million limit, equity rules, fiscal 2026 fees, appraisal and refinance tests.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "Can I get a USDA B&I loan for a hotel?",
    "I want to buy a hotel in a town of 12,000 people. Does a USDA loan work and how much do I need down?",
    "What are the USDA B&I guarantee fees for 2026?",
    "How much equity does USDA require on a hotel loan?",
    "Can I refinance my rural hotel with a USDA B&I loan?",
    "Is there a maximum USDA B&I loan amount for a hotel?",
    "Does a USDA business loan require a personal guarantee?"
  ],
  answer: "Yes, if the hotel is in an eligible rural area. The regulation names hotels and motels as eligible Business and Industry projects, and a borrower can carry up to $25 million of B&I guaranteed loans.[1][2] For loans obligated in fiscal 2026, under a notice effective October 1, 2025, USDA guarantees 80 percent of a loan from $5 million to $25 million and charges a 3.0 percent guarantee fee.[3]",
  takeaways: [
    "A bank makes the loan and USDA guarantees part of it. Hotels, motels and bed and breakfasts are named in 7 CFR 5001.105 as eligible tourist and recreation facilities.[1]",
    "The borrower limit is $25 million of B&I guaranteed loans, with a $100 million limit per guarantor, so B&I reaches loans that SBA 7(a) cannot.[2]",
    "Equity is a balance sheet test, not a down payment rule: 10 percent for an existing business, and for most new businesses 20 percent balance sheet equity or 25 percent of project cost invested.[1]",
    "Fiscal 2026 terms: 85 percent guarantee under $5 million, 80 percent from $5 million to $25 million, a 3.0 percent guarantee fee and a 0.55 percent annual retention fee.[3]",
    "The appraisal must strip out going-concern value. Any business or going-concern value is deducted from market value before the lender discounts the collateral.[4]"
  ],
  sections: [
    {
      h2: "Is a hotel eligible for a USDA B&I guaranteed loan?",
      lead: "Yes. The OneRD guaranteed loan regulation lists tourist and recreation facilities, including hotels, motels and bed and breakfast establishments, among eligible B&I projects.",
      body: "The list is in 7 CFR 5001.105(b)(8).[1] The same section covers the uses a hotel deal needs: purchase and development of land and buildings, business acquisitions when jobs are created or saved, machinery and equipment, and permanent working capital.[1] A business acquisition means buying the entire business, not part of its stock.[1]\n\nOne hotel-specific rule: if the owner lives on site, the pro rata value of the owner's living quarters, measured by square footage, is deducted from the loan. The regulation says so twice, once in the eligible list and again under ineligible projects.[1]\n\nThe borrower can be a corporation, partnership, cooperative, tribe, public body or an individual. An individual borrower must be a U.S. citizen or a lawful permanent resident holding a green card, and the loan must be collateralized with fixed assets that stay in the United States.[5] The short version of the program, side by side with SBA and bank options, is on [Who lends on hotels under $5 million?](/hotel-financing/lenders-under-5-million)"
    },
    {
      h2: "How does USDA define a rural area?",
      lead: "Rural means anywhere outside a city or town of more than 50,000 people and outside the urbanized area next to one, measured by the latest decennial census.",
      body: "The definition in 7 CFR 5001.3 adds a point that catches buyers out: an application cannot be approved subject to meeting the rural requirement. The site qualifies on the day USDA looks, or the loan does not.[6] Areas contiguous and adjacent to an urbanized area show as ineligible on the Rural Development property eligibility map, which the regulation names as the reference.[6]\n\nA project that straddles rural and non-rural ground gets a guarantee only for the rural part.[1] For a hotel that is rarely an issue, since the building sits on one parcel, but check the address on the map before you spend money on a purchase agreement. Many interstate-exit and small-college-town hotels qualify. A hotel on the edge of a metro area often does not."
    },
    {
      h2: "How much can I borrow, and how much does USDA guarantee?",
      lead: "One borrower can have up to $25 million of B&I guaranteed loans outstanding, and for fiscal 2026 USDA guarantees 85 percent of a loan under $5 million or 80 percent of a loan from $5 million to $25 million.",
      body: "The $25 million figure counts the guaranteed and unguaranteed portions of every B&I loan to the borrower, existing balances included. There is also a $100 million limit per guarantor.[2] The regulation caps any guarantee at 90 percent of eligible loss and tells the agency to set the percentage each year by Federal Register notice.[7]\n\nThe fiscal 2026 notice was published March 9, 2026, with fees effective October 1, 2025. It sets an 85 percent guarantee for B&I loans under $5 million and 80 percent for B&I loans of $5 million to $25 million.[3] That is where B&I earns its place for hotels: a $12 million loan on a rural hotel is too large for SBA 7(a), but well inside B&I. See [What is the difference between an SBA 7(a) loan and an SBA 504 loan for a hotel?](/hotel-financing/sba-7a-vs-504) for those limits.\n\nThe notice applies to loans obligated in fiscal 2026, which ends September 30, 2026.[3] USDA publishes a new notice for each fiscal year. If your loan will be obligated after that date, ask the lender for the fiscal 2027 figures."
    },
    {
      h2: "What fees does USDA charge on a B&I loan?",
      lead: "For fiscal 2026 the one-time guarantee fee is 3.0 percent and the annual retention fee is 0.55 percent, each applied to the guaranteed portion of the loan.",
      body: "The guarantee fee is the loan amount times the guarantee percentage times the fee rate. The lender pays it at or before closing and may pass it to the borrower.[8] The retention fee is the fee rate times the outstanding principal on December 31 times the guarantee percentage, paid once a year.[3][8] The rate in effect when the loan is obligated stays in place for the life of the guarantee, so a later notice does not reprice an existing loan.[8]\n\nTwo other lines in the notice matter to hotels. A lender that wants the guarantee issued before construction is finished pays an extra 0.50 percent. That fee applies only to those loans, not to every construction loan.[3] The notice also lists a reduced-fee B&I category at 1.0 percent and 0.50 percent with an 80 percent guarantee.[3] It does not say which projects qualify for it, so ask the lender or the state Rural Development office.\n\nThe lender's own fees sit on top. The regulation lets a lender charge reasonable, customary fees like the ones it charges on similar loans without a guarantee, and customary prepayment penalties if they are written into the loan documents.[9]"
    },
    {
      h2: "How much equity do I need?",
      lead: "An existing business needs 10 percent; most new businesses, which includes most first-time hotel buyers forming a new entity, need 20 percent balance sheet equity or a 25 percent investment in the project.",
      body: "The rule is in 7 CFR 5001.105(d). An existing business meets it one of three ways: at least 10 percent balance sheet equity at closing, a borrower investment of at least 10 percent of eligible project cost, or owner-contributed capital of at least 10 percent of net fixed assets plus depreciation.[1] A new business building a hotel, where the lender wants the guarantee before construction is complete, needs 25 percent either way. All other new businesses need 20 percent balance sheet equity or 25 percent of project cost invested.[1]\n\nEquity has to be cash or earning assets on the balance sheet. It cannot include appraisal surplus or a bargain-purchase gain. Subordinated debt counts only if it was exchanged for cash that stays in the business for the life of the loan under a standstill agreement.[1] USDA can raise the requirement for a loan it considers higher risk, and it weighs industry conditions and its own portfolio concentration when it does. It can lower the requirement for an existing business with strong guarantees and ratios.[1]\n\nThese are program minimums. The bank sets its own requirement on top and does not publish it. For how lenders size the loan itself, see [What do lenders require for a hotel loan?](/hotel-financing/loan-requirements)"
    },
    {
      h2: "What are the rate, term and guarantee rules?",
      lead: "The rate is negotiated with the bank and can be fixed or variable, the loan must fully amortize with no balloon over a term of up to 40 years, and anyone owning 20 percent or more guarantees the loan.",
      body: "USDA does not set the rate. The regulation says the rate is negotiated between lender and borrower, can be fixed, variable or a mix, and cannot exceed what the lender customarily charges on similar loans without a guarantee. A variable rate must track a published base rate and can adjust no more often than quarterly.[10] For context, Prime has been 7.00 percent since September 17, 2026.[11]\n\nThe maximum term is the justified useful life of the assets, not more than 40 years. Balloon maturities are not allowed. If the note has an interest-only period, the first full principal and interest payment must start within three years.[12] That is the feature owners notice most next to a bank loan that balloons in five or ten years. More on payment structures: [Can I get an interest-only hotel loan?](/hotel-financing/interest-only-loans)\n\nUnsecured personal or corporate guarantees for the full term are required from any person or entity owning 20 percent or more of the borrower, in an amount at least equal to that owner's percentage times the loan. USDA can require more, and a lender can request an exception for a borrower with above-average strength. Passive investors are outside the rule.[13]"
    },
    {
      h2: "How does USDA treat the hotel appraisal?",
      lead: "USDA requires a real estate appraisal by a state certified general appraiser, and any going-concern or business value in it is deducted before the lender discounts the collateral.",
      body: "This is the rule that surprises hotel borrowers. 7 CFR 5001.203 says that if an appraisal contains value attributed to business valuation or to a going concern, that value must be deducted from the reconciled market value prior to discounting.[4] A hotel appraisal normally values the operating business and the real estate together, so the collateral value USDA's lender works from can be lower than the number on the cover page. The term is explained at [going-concern value](/glossary/going-concern-value).\n\nThe lender then discounts the collateral under its own loan-to-discounted-value practice and has to justify the discounts it uses.[14] The regulation does not publish a discount rate or a loan-to-value ceiling, and lenders do not either. Appraisals cannot be more than one year old, and for construction the lender needs both an as-is value and a prospective value at completion.[4]"
    },
    {
      h2: "Can I refinance an existing hotel loan with B&I?",
      lead: "Yes. B&I can refinance debt owed to another lender with no limit on its share of the loan, and debt owed to the same lender within limits.",
      body: "Under 7 CFR 5001.102(d), a new lender refinancing another creditor's debt faces no cap on the share of loan funds used for that purpose. When the applicant lender refinances its own debt, that debt cannot exceed 50 percent of the new loan, must have been current for the past six months, and the new loan must offer better rates or terms.[15] USDA must find the project viable and the refinancing necessary to improve cash flow. Where refinancing is the majority purpose for an existing business, the borrower must show historical debt service coverage of at least 1.1 times on the proposed payments, or show it has recovered from whatever hurt past results, with current coverage of at least 1 to 1.[15]\n\nA 1.1 times program floor is not the bank's test. The lender will apply its own coverage requirement, which it does not publish. If your current loan matures soon, read [How much hotel debt is maturing in 2026 and 2027?](/hotel-financing/loan-maturities-2026-2027)"
    }
  ],
  table: {
    caption: "USDA B&I guarantee terms for a hotel loan obligated in fiscal 2026",
    columns: [
      "Term",
      "Loan under $5 million",
      "Loan of $5 million to $25 million"
    ],
    rows: [
      [
        "Guarantee percentage",
        "85%[3]",
        "80%[3]"
      ],
      [
        "One-time guarantee fee",
        "3.0% of the guaranteed amount[3][8]",
        "3.0% of the guaranteed amount[3][8]"
      ],
      [
        "Annual retention fee",
        "0.55% of the guaranteed share of the December 31 balance[3]",
        "0.55% of the guaranteed share of the December 31 balance[3]"
      ],
      [
        "Guarantee issued before construction completion",
        "Additional 0.50%[3]",
        "Additional 0.50%[3]"
      ],
      [
        "Minimum equity, existing business",
        "10% by one of three tests[1]",
        "10% by one of three tests[1]"
      ],
      [
        "Minimum equity, most new businesses",
        "20% balance sheet equity or 25% of project cost[1]",
        "20% balance sheet equity or 25% of project cost[1]"
      ],
      [
        "Maximum term",
        "Useful life of the assets, up to 40 years, no balloon[12]",
        "Useful life of the assets, up to 40 years, no balloon[12]"
      ],
      [
        "Guarantors",
        "Owners of 20% or more[13]",
        "Owners of 20% or more[13]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet shows Prime at 7.00% since September 17, 2026 and the 10-year Treasury at 4.94% on the same date. B&I rates are negotiated between the bank and the borrower, so the sheet publishes the indexes and not a B&I coupon.[11]"
  },
  workedExample: {
    label: "Hypothetical: an $8.0M purchase of an 85-key hotel in a town of 12,000",
    body: "Hypothetical. A buyer forms a new company to purchase an 85-key branded hotel for $8,000,000 in a town of 12,000 people, outside any urbanized area. The hotel's net operating income is $800,000. The 80 percent loan-to-price and the 8.00 percent rate are assumptions for the arithmetic, not quotes or program rules.\n\nLoan and guarantee. 80 percent of $8,000,000 is a $6,400,000 loan and $1,600,000 of equity. The loan is between $5 million and $25 million, so the fiscal 2026 guarantee is 80 percent: $5,120,000 guaranteed, $1,280,000 held by the bank without a guarantee.[3]\n\nFees. Guarantee fee: $5,120,000 times 3.0 percent equals $153,600, paid once. Retention fee: $5,120,000 times 0.55 percent equals $28,160 in the first year, falling as the balance amortizes.[3][8]\n\nEquity test. The borrower is a new business. $1,600,000 is exactly 20 percent of an $8,000,000 balance sheet, which meets the 20 percent balance sheet test only if closing costs and the guarantee fee are paid with additional cash and not borrowed. The alternative test, 25 percent of project cost, would take $2,000,000.[1]\n\nPayment. At the assumed 8.00 percent, a 25-year amortization costs $49,396 a month, or $592,755 a year, which is 1.35 times coverage on $800,000. A 30-year amortization costs $46,961 a month, or $563,531 a year, which is 1.42 times. The longer term B&I allows buys about $29,000 a year of cash flow, with no balloon at the end of either schedule.[12]\n\nOne more check. If the appraisal supports $8,000,000 only as a going concern, the business value is deducted before the lender discounts the collateral, and the bank may ask for more equity.[4]"
  },
  faq: [
    {
      q: "What is the maximum USDA B&I loan for a hotel?",
      a: "A borrower can have up to $25 million of B&I guaranteed loans, counting guaranteed and unguaranteed portions and existing balances. The $40 million exception is only for rural cooperatives processing agricultural commodities, so it does not help a hotel."
    },
    {
      q: "What town size qualifies for a USDA hotel loan?",
      a: "The hotel must be outside any city or town of more than 50,000 people and outside the urbanized area next to one, using the latest decennial census. Check the address on USDA's eligibility map. Approval cannot be made conditional on qualifying later."
    },
    {
      q: "What are the USDA B&I fees for 2026?",
      a: "For loans obligated in fiscal 2026: a 3.0 percent one-time guarantee fee and a 0.55 percent annual retention fee, both on the guaranteed portion, plus 0.50 percent if the guarantee is issued before construction completion. Fiscal 2026 ends September 30, 2026."
    },
    {
      q: "Does USDA lend the money directly?",
      a: "No. A bank or other approved lender makes and services the loan, and USDA guarantees a percentage of it against loss. You apply through the lender, and the agency reviews and approves the guarantee."
    },
    {
      q: "Do I have to personally guarantee a USDA B&I loan?",
      a: "Generally yes. Anyone owning 20 percent or more of the borrower gives an unsecured guarantee for the full term, at least equal to their ownership share of the loan. Passive investors are outside the rule, and lenders can request exceptions for unusually strong borrowers."
    },
    {
      q: "Can a non-U.S. citizen get a USDA B&I hotel loan?",
      a: "An individual borrower must be a U.S. citizen or a lawful permanent resident with a green card, or a citizen or resident of certain Pacific territories. USDA will not approve an application subject to meeting that requirement later."
    },
    {
      q: "Can a buyer assume my USDA B&I loan when I sell the hotel?",
      a: "Yes, with prior written USDA approval. The regulation sets a one-time $1,500 transfer fee for an eligible borrower, and the seller is released only with the agency's written approval.[16] The loan assumption page has the details."
    },
    {
      q: "Is a USDA B&I loan better than an SBA loan for a hotel?",
      a: "It reaches larger loans, up to $25 million, and allows terms up to 40 years with no balloon. SBA works anywhere, not only in rural areas, and 504 offers a fixed debenture rate. Price both if the hotel qualifies for both."
    }
  ],
  sources: [
    {
      n: 1,
      label: "7 CFR 5001.105, Eligible B&I projects and requirements: hotels and motels at (b)(8), capital and equity at (d)",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.105",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "7 CFR 5001.406, Guaranteed loan amounts",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.406",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "OneRD Annual Notice of Guarantee Fee Rates, Periodic Retention Fee Rates, Loan Guarantee Percentage and Fee for Issuance of the Loan Note Guarantee Prior to Construction Completion for Fiscal Year 2026 (91 FR 11272, March 9, 2026)",
      url: "https://www.federalregister.gov/documents/2026/03/09/2026-04581/onerd-annual-notice-of-guarantee-fee-rates-periodic-retention-fee-rates-loan-guarantee-percentage",
      publisher: "Federal Register, U.S. Department of Agriculture Rural Development",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "7 CFR 5001.203, Appraisals",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.203",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "7 CFR 5001.126, Borrower eligibility",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.126",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "7 CFR 5001.3, Definitions: rural and rural area",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.3",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "7 CFR 5001.407, Percentage of loan guarantee",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.407",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "7 CFR 5001.454, Guarantee fee, and 5001.455, Periodic guarantee retention fee",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.454",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 9,
      label: "7 CFR 5001.403, Lender fees",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.403",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 10,
      label: "7 CFR 5001.401, Interest rate provisions",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.401",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 11,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 12,
      label: "7 CFR 5001.402, Term length, loan schedule, and repayment",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.402",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 13,
      label: "7 CFR 5001.204, Personal, partnership, and corporate guarantees",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.204",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 14,
      label: "7 CFR 5001.202, Lender's credit evaluation: collateral and discounting",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.202",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 15,
      label: "7 CFR 5001.102, Project eligibility, general: debt refinancing at (d)",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.102",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 16,
      label: "7 CFR 5001.506, Loan transfers and assumptions, and 5001.509, Servicing fees",
      url: "https://www.law.cornell.edu/cfr/text/7/5001.506",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/lenders-under-5-million",
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/loan-assumption",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/interest-only-loans"
    ],
    glossary: [
      "/glossary/going-concern-value",
      "/glossary/dscr",
      "/glossary/ltv",
      "/glossary/prime-rate"
    ],
    data: [
      "/rates",
      "/tools/dscr-calculator",
      "/tools/hotel-loan-sizing-calculator",
      "/data/sba-hotel-lending"
    ]
  },
  cta: {
    label: "Talk through financing your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets does not originate or package USDA B&I loans. It arranges SBA 7(a), SBA 504 and conventional hotel debt, the options a rural hotel owner would compare a B&I loan against."
};

export default page;
