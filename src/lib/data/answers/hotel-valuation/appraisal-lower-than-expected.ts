/**
 * Why did my hotel appraise for less than I expected?
 * Answer page: /hotel-valuation/appraisal-lower-than-expected
 *
 * Written 2026-09-18. Worked-example arithmetic recomputed by script.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "appraisal-lower-than-expected",
  cluster: "hotel-valuation",
  isHub: false,
  title: "Why Did My Hotel Appraise for Less Than Expected?",
  h1: "Why did my hotel appraise for less than I expected?",
  description: "Why a lender's hotel appraisal comes in below the owner's number or a broker's BOV: as-is value, restated NOI, cap rates and renovation deductions.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What are my options if my hotel's appraised value has dropped since I bought it?",
    "What do appraisers look at that a broker's opinion of value doesn't?",
    "What's the difference between a hotel appraisal and a broker's opinion of value?",
    "Why did my hotel's value drop even though NOI held up?",
    "What's the difference between a hotel broker's opinion of value and a formal appraisal?",
    "How do I figure out what my hotel is actually worth?"
  ],
  answer: "Usually for four reasons. The appraiser valued the hotel as is, not as you plan it. The appraiser added a management fee and a reserve to your expenses. The cap rate was wider than yours. And renovation cost was deducted. Federal rules define the value an appraiser must estimate,[1] and HVS put a normal stabilized hotel cap rate near 8.0 to 8.5 percent in April 2026.[2]",
  takeaways: [
    "A bank appraisal estimates market value as federal rules define it: the most probable price in an open market, with a typically motivated buyer and seller.[1] It is not the best price a targeted sale process might reach.",
    "For a loan funding a renovation, regulators expect an as-is value and, where it applies, prospective values on completion and on stabilization.[3] Owners often quote the last one. Lenders often size to the first.",
    "Appraisals for federally related loans must analyze and report deductions for proposed renovation.[4] A PIP comes off the number.",
    "In the hypothetical below, $294,000 of expense adjustments removes $3.68 million of value, more than the cap rate and the PIP combined.",
    "You cannot order the appraisal yourself. A bank's use of a borrower-ordered appraisal violates the agencies' appraisal regulations.[3]"
  ],
  sections: [
    {
      h2: "What is the appraiser actually estimating?",
      lead: "Market value under a federal definition: the most probable price in a competitive and open market, as of a specific date.",
      body: "For national banks the definition sits at 12 CFR 34.42. Market value is the most probable price a property should bring under all conditions requisite to a fair sale, with buyer and seller each acting prudently and knowledgeably, typically motivated, and with a reasonable time allowed for exposure in the open market.[1] The interagency guidelines that all the federal bank regulators issued together apply the same concept.[3] Notice what the definition leaves out. It does not ask what the most motivated buyer might pay. It does not give credit for a business plan that has not happened. Appraisals for federally related transactions must also conform to USPAP,[4] which The Appraisal Foundation describes as the national standards for real estate appraisal.[5] The appraiser's job is a supportable number for a lender's file, and the rules push it toward the probable case."
    },
    {
      h2: "Why is the appraiser's NOI lower than mine?",
      lead: "Because the appraiser restates your income statement the way a buyer would, with a management fee and an FF&E reserve you may not be paying.",
      body: "An owner-operator's books often show no management fee, because the owner is the manager. They often show no reserve for replacing furniture, fixtures and equipment, because the owner pays for replacements when they come due. An appraiser values the hotel in the hands of a typical buyer, who will pay for both. One-time revenue, such as a construction crew that filled the hotel for a season, may be removed. Property tax may be restated. None of this is a judgment about how you run the hotel. It is the difference between your tax return and a buyer's underwriting. The full line-by-line build is at [Walk me through the math on valuing a select-service hotel](/hotel-valuation/how-to-value-a-hotel)"
    },
    {
      h2: "Why did the appraiser use a higher cap rate than I did?",
      lead: "Because the appraiser has to support the rate with evidence, and the published evidence sits higher than most owners assume.",
      body: "HVS wrote in April 2026 that U.S. hotel transactions averaged an 8.2 percent cap rate in 2025, that a normal rate for a stabilized or near-stabilized hotel remains near 8.0 to 8.5 percent, and that prevalent discount rates are 10 to 11 percent.[2] HVS also warned readers to be wary of valuations that use aggressively low exit cap rates and discount rates, and said an exit cap rate of 6 to 7 percent in a low-barriers market for a typical limited-service, select-service or full-service hotel should flash yellow lights.[2] The Matthews Hotel Index for Q1 2026 puts select-service at 7.50 to 8.75 percent across 14 markets.[6] An owner who capitalized at the rate from a 2021 purchase will see a lower number from any appraiser working from current evidence."
    },
    {
      h2: "What is the difference between as-is and as-stabilized value?",
      lead: "As-is is the hotel today in its current condition. As-stabilized is a prospective value after a renovation or ramp-up is finished.",
      body: "The interagency guidelines define as-is market value as the value of the property in its current physical condition, use and zoning as of the appraisal's effective date.[3] For a loan that finances renovation, the guidelines say an institution would generally request the as-is value and, as applicable, the prospective market value upon completion and upon stabilization, and that it should consider the prospective value that corresponds to the credit decision and the phase of the project being funded.[3] Federal minimum standards also require an appraisal to analyze and report appropriate deductions and discounts for proposed construction or renovation.[4] So one report can hold three numbers. If you are comparing your expectation with the lowest of the three, read the other two before you conclude the appraiser missed something. How the renovation deduction is built is at [How does a PIP affect my hotel's value?](/hotel-valuation/pip-and-hotel-value)"
    },
    {
      h2: "Why was my broker's BOV higher than the appraisal?",
      lead: "They answer different questions. A BOV estimates what a marketed sale could achieve. An appraisal supports a lender's collateral decision.",
      body: "A broker opinion of value prices to the live buyer pool, including the buyer who will pay more because the hotel fits its portfolio. An appraisal prices to the typically motivated buyer in the definition.[1] Neither corrects the other, and the numbers can sit far apart on the same hotel. Bank regulators do not accept a broker price opinion in place of an appraisal or even as an evaluation.[7] The full comparison is at [What is a hotel broker opinion of value, and how is it different from an appraisal?](/hotel-valuation/broker-opinion-of-value)"
    },
    {
      h2: "What can I do about a low appraisal?",
      lead: "Read the report, correct facts, supply evidence through the lender, and if the number stands, change the loan or the plan.",
      body: "Start with the lender, because the lender is the appraiser's client. The guidelines bar a bank from using an appraisal the borrower ordered or provided, and they require the people who select appraisers to be independent of loan production.[3] That means you cannot shop for a second opinion and hand it in. You can ask the lender for the report, check the room count, revenue, expenses and PIP scope for errors, and send documented corrections and comparable sales through the lender. If the value holds, the choices are practical: more equity, a smaller loan, a different lender type, finishing the renovation before refinancing, or selling. For national banks the appraisal requirement applies to commercial real estate transactions above $500,000,[8] so a bank loan on a hotel will almost always need one. The financing side of that decision is at [Should I refinance my hotel or sell it instead?](/hotel-financing/refinance-or-sell)"
    }
  ],
  table: {
    caption: "Why an owner's number and a lender's appraisal differ",
    columns: [
      "Item",
      "Owner's expectation",
      "Lender's appraisal",
      "Why"
    ],
    rows: [
      [
        "Value definition",
        "Best price a good sale process might reach",
        "Most probable price, typically motivated parties[1]",
        "12 CFR 34.42 sets the definition"
      ],
      [
        "Condition valued",
        "After the renovation and ramp-up",
        "As is, plus prospective values where the loan funds work[3]",
        "The lender sizes to the phase it is funding"
      ],
      [
        "NOI",
        "As reported, often with no management fee or reserve",
        "Restated to a typical buyer's expense load",
        "The next owner will pay both"
      ],
      [
        "Cap rate",
        "Remembered from the purchase or a headline trade",
        "Supported by current sales and surveys[2]",
        "The report must conform to USPAP[4]"
      ],
      [
        "Renovation or PIP",
        "Ignored, or assumed to pay for itself",
        "Deducted and reported[4]",
        "12 CFR 34.44(d)"
      ],
      [
        "Who orders it",
        "The owner",
        "The lender, independent of loan production[3]",
        "Borrower-ordered appraisals cannot be used"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026, published by Matthews Hotel Markets, puts select-service cap rates at 7.50 to 8.75 percent and full-service at 6.50 to 8.25 percent across 14 markets. An expectation built on a rate below those bands needs its own evidence.[6]"
  },
  workedExample: {
    label: "Hypothetical: a $16.25M expectation and an $11.29M as-is appraisal",
    body: "Hypothetical. An owner-operated hotel with $4,200,000 of revenue reports NOI of $1,300,000. The books carry no management fee and no FF&E reserve. The owner capitalizes at 8.00 percent and expects $1,300,000 divided by 0.08, or $16.25 million.\n\nThe appraiser adds a 3 percent management fee, $126,000, and a 4 percent reserve, $168,000. Restated NOI is $1,006,000. The appraiser supports an 8.25 percent cap rate. Stabilized value equals $1,006,000 divided by 0.0825, or $12.19 million. A $900,000 PIP is outstanding, so the as-is value is $11.29 million.\n\nThe gap is $4.96 million, 30 percent. Of that, $3.68 million comes from the two expense lines, $0.38 million from 25 basis points of cap rate, and $0.90 million from the PIP. The percentages used for the fee and the reserve are assumptions for this hypothetical. The point is the order of size. Most of the gap was in the owner's income statement, not in the appraiser's cap rate."
  },
  faq: [
    {
      q: "Can I order my own appraisal for the bank to use?",
      a: "No. The interagency guidelines say an institution's use of a borrower-ordered or borrower-provided appraisal violates the agencies' appraisal regulations.[3] The lender engages the appraiser."
    },
    {
      q: "Is an appraisal the same as market price?",
      a: "It estimates the most probable price under a federal definition, with typically motivated parties and reasonable market exposure.[1] A marketed sale can beat it or miss it."
    },
    {
      q: "Why did the appraiser deduct my PIP?",
      a: "Minimum federal appraisal standards require an appraisal to analyze and report appropriate deductions and discounts for proposed construction or renovation.[4] A buyer would deduct it too."
    },
    {
      q: "What cap rate do hotel appraisers use in 2026?",
      a: "They support one from sales and surveys. HVS put a normal stabilized hotel near 8.0 to 8.5 percent in April 2026, with discount rates of 10 to 11 percent.[2]"
    },
    {
      q: "Can I challenge a low hotel appraisal?",
      a: "You can send factual corrections and comparable sales through the lender, who is the appraiser's client. You cannot substitute your own report.[3] Whether the lender asks for a revision is its decision."
    },
    {
      q: "Does a low appraisal mean my hotel lost value?",
      a: "Not always. It may mean your expectation left out a management fee, a reserve or a PIP. Compare the appraiser's restated NOI with yours line by line before drawing a conclusion."
    },
    {
      q: "Will a broker opinion of value help with the lender?",
      a: "Not as a valuation. Regulators say a broker price opinion is not acceptable even as an evaluation.[7] Its comparable sales can still be useful evidence to pass along."
    }
  ],
  sources: [
    {
      n: 1,
      label: "12 CFR 34.42, definitions (market value)",
      url: "https://www.law.cornell.edu/cfr/text/12/34.42",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "HVS U.S. Market Pulse: April 2026",
      url: "https://www.hvs.com/article/10450-hvs-us-market-pulse-april-2026",
      publisher: "HVS",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Interagency Appraisal and Evaluation Guidelines, December 2010 (full text)",
      url: "https://www.fdic.gov/news/news/financial/2010/fil10082a.pdf",
      publisher: "OCC, Federal Reserve, FDIC, OTS and NCUA, via FDIC",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "12 CFR 34.44, minimum appraisal standards",
      url: "https://www.law.cornell.edu/cfr/text/12/34.44",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Uniform Standards of Professional Appraisal Practice (USPAP)",
      url: "https://appraisalfoundation.org/products/uspap",
      publisher: "The Appraisal Foundation",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "Interagency Appraisal and Evaluation Guidelines (FIL-82-2010), summary letter",
      url: "https://www.fdic.gov/news/financial-institution-letters/2010/fil10082.html",
      publisher: "Federal Deposit Insurance Corporation",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "12 CFR 34.43, appraisals required; transactions requiring a state certified or licensed appraiser",
      url: "https://www.law.cornell.edu/cfr/text/12/34.43",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-valuation",
    siblings: [
      "/hotel-valuation/broker-opinion-of-value",
      "/hotel-valuation/how-to-value-a-hotel",
      "/hotel-valuation/pip-and-hotel-value",
      "/hotel-valuation/hotel-cap-rates",
      "/hotel-valuation/interest-rates-and-hotel-value"
    ],
    glossary: [
      "/glossary/bov",
      "/glossary/noi",
      "/glossary/cap-rate",
      "/glossary/pip"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Ask for a broker opinion of value",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets is a brokerage, not an appraiser. It prepares free broker opinions of value, which an owner can set next to a lender's appraisal, starting with the income statement, where the example above puts most of the gap."
};

export default page;
