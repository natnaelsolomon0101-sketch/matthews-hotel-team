/**
 * Do I need an appraisal to get a hotel loan?
 * Answer page: /hotel-financing/appraisal-requirements
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-10-13):
 *   - 12 CFR part 34 subpart C, pulled as XML from the eCFR versioner API at
 *     the 2026-09-28 issue of title 12, for the OCC rule: the $500,000
 *     commercial threshold and the thirteen other exemptions in 34.43(a), the
 *     evaluation requirement in 34.43(b), the state certified appraiser tests
 *     in 34.43(d), the six minimum standards in 34.44, the fee appraiser
 *     engagement and transfer rules in 34.45(b), and the competency rule in
 *     34.46(b);
 *   - 12 CFR 323.3 on Cornell LII, to confirm the FDIC rule carries the same
 *     $500,000 line in the same words;
 *   - 12 CFR 722.3 on Cornell LII, for the NCUA rule: a state certified
 *     appraisal at $1,000,000 or more, and a written estimate of market value
 *     below that;
 *   - the Interagency Appraisal and Evaluation Guidelines, 75 FR 77450
 *     (December 10, 2010), read as the govinfo PDF, for the bar on going
 *     concern value as market value, the borrower-ordered appraisal sentence,
 *     the three conditions on using another institution's appraisal, the ban
 *     on a readdressed report, the list of things that invalidate an existing
 *     appraisal, and the statement that a broker price opinion cannot serve
 *     as an evaluation;
 *   - the Real Estate Appraisals final rule, 83 FR 15019 (April 9, 2018),
 *     also as the govinfo PDF, for the date the commercial threshold moved
 *     from $250,000 to $500,000 and for the evaluation that replaced it;
 *   - 12 U.S.C. 3339 on Cornell LII, for the three statutory minimums under
 *     title XI of FIRREA;
 *   - SBA SOP 50 10 8.1, effective October 1, 2026, downloaded as the .docx
 *     on legacy.sba.gov and read with pandoc, for the 504 appraisal trigger,
 *     the twelve-month dating rule, the SBA-as-intended-user rule, the bar on
 *     using an appraisal prepared for the applicant, the going concern
 *     allocation, the special purpose industry experience rule, the 90 percent
 *     test, the 100 percent test on non-arm's length and change of ownership
 *     projects, the 50 / 35 / 15 structure for a special purpose property, and
 *     the list that names hotels, motels and other lodging facilities;
 *   - 13 CFR 120.160(b) on Cornell LII, the regulation the SOP cites;
 *   - the Appraisal Foundation's USPAP page, for the 2024 edition;
 *   - the Appraisal Subcommittee's National Registries page, for the public
 *     credential search and its monthly state reporting.
 *
 * The worked example was recomputed line by line with
 * scripts/check-appraisal-math.mjs before saving: 29 assertions covering the
 * 504 sizing at both values, the 90 percent test, per-key arithmetic, the
 * debenture reduction, the cash the buyer brings, the cost of the special
 * purpose classification and the going concern allocation.
 *
 * Deliberately absent: what a hotel appraisal costs, how many weeks it takes,
 * and how often appraisals come in below contract. No public source publishes
 * any of the three. The page says so rather than guessing.
 *
 * Two things to re-read before changing a number. The SOP reissues roughly
 * annually, so the 504 trigger, the 90 percent test and the special purpose
 * list all move with it. And USPAP is re-editioned on an as-needed basis: the
 * 2024 edition was still current on October 13, 2026.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "appraisal-requirements",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Appraisal Requirements",
  description:
    "When a hotel loan needs an appraisal, why you cannot order it yourself, what the report must contain, and the extra rules SBA adds on a 504 deal.",
  h1: "Do I need an appraisal to get a hotel loan?",
  lastUpdated: "2026-10-13",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "Do I need an appraisal to get a hotel loan?",
    "Who orders the appraisal on a hotel loan?",
    "Can I use my own appraisal for a hotel loan?",
    "What is the appraisal threshold for a commercial real estate loan?",
    "What does a hotel appraisal have to include?",
    "Does an SBA hotel loan need an appraisal?",
    "How long is a hotel appraisal good for?",
    "What is the difference between an appraisal and an evaluation?"
  ],
  answer:
    "Usually yes, and you will not be the one who orders it. A bank needs a state certified appraisal on any commercial transaction above $500,000, a line the banking agencies set on April 9, 2018.[1][2] SBA requires one on a 504 project valued above $500,000, and its rules effective October 1, 2026 bar a lender from using an appraisal prepared for you.[3]",
  takeaways: [
    "The line is $500,000 of transaction value at a bank, in the OCC and FDIC rules alike.[1][4] At a federal credit union it is $1,000,000, and below that the file needs only a written estimate of market value.[5]",
    "You cannot hand a lender an appraisal you paid for. The Interagency Guidelines say a borrower-ordered or borrower-provided appraisal violates the appraisal regulations.[6] The one legal route runs lender to lender.",
    "Going concern value may not be used as market value for a federally related transaction.[6] For a hotel, a business wrapped around a building, that sentence explains most of the gap between a broker's number and the bank's.",
    "Nobody publishes what a hotel appraisal costs or how long it takes. Get the fee and the turnaround from your lender in writing before signing a term sheet."
  ],
  sections: [
    {
      h2: "When does a hotel loan require an appraisal?",
      lead:
        "Above $500,000 of transaction value at a bank, above $500,000 of project value on an SBA 504 deal, and at or above $1,000,000 at a federal credit union.",
      body:
        "Title XI of the Financial Institutions Reform, Recovery, and Enforcement Act of 1989 tells each banking agency to require appraisals that are written, follow generally accepted appraisal standards, and are reviewed for USPAP compliance.[7] The OCC rule, 12 CFR 34.43, requires an appraisal by a state certified or licensed appraiser for all real estate-related financial transactions, then lists fourteen exemptions. One exempts a commercial transaction worth $500,000 or less.[1] The FDIC rule repeats it word for word.[4]\n\nTwo exemptions get read wrong. The business loan exemption reaches a loan of $1 million or less, but only when it is **not** dependent on the sale of, or rental income derived from, real estate as the primary source of repayment.[1] A hotel loan is. The other exempts a transaction wholly or partially guaranteed by a United States government agency, so on a 7(a) loan the banking rule steps aside and SBA's rules govern, and SBA requires an appraisal anyway.[1][3]\n\nBelow the line the file is not empty: 34.43(b) requires an evaluation consistent with safe and sound banking practices.[1] The agencies moved the commercial threshold from $250,000 to $500,000 effective April 9, 2018, with evaluations covering what the increase exempted.[2] A [broker opinion of value](/hotel-valuation/broker-opinion-of-value) cannot be that evaluation, because a method that gives a sales or list price does not give market value.[6]"
    },
    {
      h2: "Who orders it, and can I use the appraisal I already paid for?",
      lead:
        "The lender orders it. An appraisal you commissioned cannot be used, and the only lawful workaround runs from your old lender to your new one.",
      body:
        "Section 34.45(b)(1) requires a fee appraiser to be engaged directly by the regulated institution or its agent, with no direct or indirect interest in the property or the transaction.[1] The Interagency Guidelines name the thing owners try: independence is compromised when a borrower recommends an appraiser, and use of a borrower-ordered or borrower-provided appraisal violates the appraisal regulations.[6]\n\nThere is a route, and it is narrow. Section 34.45(b)(2) lets a lender accept an appraisal prepared by an appraiser engaged directly by another financial services institution, if that appraiser had no interest in the property and the report conforms to the rule.[1] The Guidelines add three things the new lender must confirm: the other institution engaged the appraiser directly, the appraiser had no direct, indirect or prospective interest in the property or transaction, and the institution rather than the borrower ordered the report, shown for example by an engagement letter.[6] So the workable sentence is this: tell the new lender a current appraisal exists and let it request the report from the old lender. The Guidelines say a borrower may do exactly that.[6]\n\nOne thing never works: a lender must not accept an appraisal readdressed or altered to conceal the original client, which is misleading, fails USPAP and violates the regulations.[6]"
    },
    {
      h2: "What must the report contain, and who can write it?",
      lead:
        "Six minimums set by 12 CFR 34.44, a state certified appraiser on anything above $500,000, and hotel experience on top of the license.",
      body:
        "An appraisal must conform to USPAP; be written, with enough information and analysis to support the lending decision; be subject to appropriate review for USPAP compliance; analyze and report appropriate deductions and discounts for proposed construction or renovation, partially leased buildings, non-market lease terms and tract developments with unsold units; rest on the rule's own definition of market value; and come from a state licensed or certified appraiser.[1] The current edition of USPAP is the 2024 edition, effective January 1, 2024, re-editioned as needed rather than on a cycle.[9]\n\nThe license is the floor, not the test. Section 34.46(b) says a credential alone does not make an appraiser competent: competency turns on experience and education as they relate to the particular assignment, and the Guidelines tell the lender to document that the appraiser knows the market, location and property type.[1][6] SBA writes the hotel case out, requiring an appraiser experienced in the particular industry when the collateral is a special purpose property, and its list of limited or special purpose properties names hotels, motels and other lodging facilities.[3] The credential is public: the Appraisal Subcommittee publishes national registries of appraisers a state has authorized to work on federally related transactions, though states report only monthly and the Subcommittee does not verify what they send.[8]\n\nDeductions and discounts is the standard that surprises an owner with a [property improvement plan](/hotel-financing/pip-and-renovation-loans) due. On a renovation the lender asks for current as-is market value and, where applicable, prospective value upon completion and upon stabilization, and is told to use the prospective figure matching the phase being funded.[6] Two of those three numbers are not what today's loan is sized on."
    },
    {
      h2: "Why is the appraised value lower than what my hotel is worth as a business?",
      lead:
        "Because the rule forbids a lender from using going concern value as market value, and a hotel's worth is part real estate and part operating business.",
      body:
        "The Guidelines are explicit. Every appraisal must contain an estimate of market value as the appraisal regulations define it, and opinions such as going concern value, value in use, or a special value to a specific user may not be used as market value for federally related transactions, though an appraisal may carry them separately when clearly identified and disclosed.[6] The same document defines going concern value as the value of a business entity rather than of the real property, based on existing operations and the current operating record.[6]\n\nSBA requires the split in writing. If the engagement letter asks the appraiser for a business enterprise or going concern value, the appraiser must allocate separate values to the components of the transaction, including land, building, equipment, and business including intangible assets.[3] That produces four numbers instead of one, and the loan is sized on the real property number.\n\nSo the [going-concern value](/glossary/going-concern-value) of a flagged hotel and its appraised real property value are different quantities, not one quantity measured twice. A buyer paying for a trailing twelve months of cash flow is buying the business; a regulated lender advancing against the building has been told which of the two it may count. For low appraisals with other causes, `/hotel-valuation/appraisal-lower-than-expected` works through them."
    },
    {
      h2: "What does SBA require that a bank does not?",
      lead:
        "A twelve-month dating rule, SBA named as a client or intended user, and a 90 percent value test that can cut the debenture or raise your equity check.",
      body:
        "On a 504 project SBA requires an appraisal when the estimated value of the project property is greater than $500,000, citing 13 CFR 120.160(b), which says SBA may require professional appraisals.[3][10] Below that value the CDC takes an evaluation, except in six named cases, among them a close-relationship transaction, a seller carry-back counted toward the borrower's contribution, and any project that includes a change of ownership. The report must be USPAP compliant, dated no more than twelve months before the application, and must name SBA as the client or an intended user; naming the third party lender as client and SBA as intended user is acceptable. The CDC may not use an appraisal prepared for the applicant.[3]\n\nThen the test with money attached. On a non-delegated loan the appraisal goes to SBA's Sacramento Loan Processing Center before closing, and if it comes in at less than 90 percent of estimated value the debenture must be reduced, or the CDC must find additional collateral or additional borrower or guarantor investment sufficient to address the gap. On a non-arm's length transaction or a change of ownership project the test tightens to 100 percent, and the price is capped at the lesser of the as-is appraised value or the price of eligible fixed assets.[3]\n\nThe 7(a) side has no dollar trigger: where a standard 7(a) loan is secured by commercial real estate the lender must obtain an appraisal. It must be independent, state licensed or certified, USPAP compliant, dated within twelve months of the application for guaranty, state certified once estimated value exceeds $1,000,000, and never one prepared for the seller or the applicant.[3] See `/hotel-financing/sba-7a-vs-504` for how the programs differ elsewhere."
    },
    {
      h2: "How long is an appraisal good for?",
      lead:
        "A bank has no federal expiry date. The lender must decide whether the existing report still reflects market value, against a list of ten things that can invalidate it.",
      body:
        "The Guidelines let a lender use an existing appraisal or evaluation for a later transaction, but require criteria for judging whether it still reflects market value, and the supporting facts in the credit file. A new one is necessary if the reported value has changed through any of ten listed causes, among them the passage of time, volatility of the local market, changes in the terms and availability of financing, natural disasters, oversupply of competing properties, and changes in economic assumptions such as capitalization rates.[6] Two of those have moved hard in this cycle: financing terms and cap rate assumptions.\n\nSBA is simpler and stricter: its appraisals must be dated within twelve months of the application on both programs, and on a 504 debt refinancing within twelve months of the approval date.[3]\n\nThere is also a refinance exemption owners rarely hear about. Section 34.43(a)(7) exempts a transaction involving an existing extension of credit at the same lending institution, provided either that no obvious and material change in market conditions or in the property threatens collateral protection, or that no new money is advanced beyond reasonable closing costs.[1] A rate-and-term renewal with your current bank can sit outside the requirement, with an evaluation in its place. Pulling cash out is a different transaction, covered at `/hotel-financing/cash-out-refinance`."
    }
  ],
  table: {
    caption: "What triggers a hotel appraisal, by lender, as the rules stood on October 13, 2026",
    columns: ["Lender", "Rule", "Appraisal required when", "What stands in for it below that line", "Credential"],
    rows: [
      [
        "National bank or federal savings association",
        "12 CFR 34.43[1]",
        "Commercial transaction value above $500,000",
        "An evaluation consistent with safe and sound banking practices",
        "State certified above $500,000"
      ],
      [
        "State nonmember bank",
        "12 CFR 323.3[4]",
        "Commercial transaction value above $500,000, same words",
        "An evaluation consistent with safe and sound banking practices",
        "State certified above $500,000"
      ],
      [
        "Federal credit union",
        "12 CFR 722.3[5]",
        "Transaction value of $1,000,000 or more",
        "A written estimate of market value by an independent, qualified person",
        "State certified at $1,000,000 or more"
      ],
      [
        "SBA 504, CDC and debenture",
        "SOP 50 10 8.1[3]",
        "Estimated value of the project property above $500,000, plus six named cases below it",
        "An evaluation, not required to follow USPAP or use a licensed appraiser",
        "State licensed or certified; certified above $1,000,000"
      ],
      [
        "SBA 7(a), standard, secured by commercial real estate",
        "SOP 50 10 8.1[3]",
        "No dollar trigger: the lender must obtain an appraisal",
        "Not applicable",
        "State licensed or certified; certified above $1,000,000"
      ],
      [
        "CMBS conduit, life company, debt fund",
        "Outside 12 CFR 34.41(b)(1), which reaches the agency's own regulated institutions[1]",
        "Whenever the lender says so",
        "Set by the lender",
        "Set by the lender"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "The appraised value is the denominator of your loan-to-value ratio, and the ceiling above it is a number nobody publishes: the Matthews Hotel Markets October 2026 rate sheet marks maximum LTV as not yet published for every lender type except the SBA 504 structure.[11] The appraisal rules are the half of the test you can read in advance."
  },
  workedExample: {
    label: "Hypothetical: a 78-key limited-service hotel bought on a 504, appraised 12.3 percent below contract",
    body:
      "A buyer agrees to pay $6,500,000 for a 78-key limited-service hotel, $83,333 per key, and takes it to a CDC. Project value is above $500,000, so SBA requires an appraisal, not an evaluation. Hotels sit on SBA's limited or special purpose property list, so the structure is 50 / 35 / 15: the borrower contributes at least 15 percent, or $975,000, the debenture funds no more than 35 percent, or $2,275,000, and the third party lender at least 50 percent, or $3,250,000. Were the property not special purpose the borrower's floor would be 10 percent, or $650,000, so the classification alone costs $325,000 of equity.[3]\n\nThe appraisal comes back at an as-is market value of $5,700,000, which is $73,077 per key and 87.7 percent of estimated value. Ninety percent of $6,500,000 is $5,850,000, so the report lands $150,000 under the line, and SBA's rule applies: reduce the debenture, or find additional collateral or additional borrower investment sufficient to address the gap.[3] Re-sized to the appraised value the same structure gives a $855,000 contribution, a $1,995,000 debenture and a $2,850,000 third party loan, so the debenture falls by $280,000. The seller does not move, so the buyer also funds the $800,000 difference between price and appraised value: $1,655,000 of cash in total, 25.5 percent of the price, against the $975,000 budgeted.\n\nSuppose the engagement letter also asked for going concern value, and the appraiser returns $6,300,000 allocated as $5,700,000 to land and building, $450,000 to equipment and $150,000 to business and intangible assets.[3] The real property leg is 90.5 percent of that figure, and the $600,000 above it is not value this loan can be sized against.[6] Every figure here was recomputed by scripts/check-appraisal-math.mjs. The hotel, the price and the appraisal are invented; the rules applied to them are not."
  },
  faq: [
    {
      q: "Can I order my own hotel appraisal and give it to the bank?",
      a: "No. The Interagency Guidelines say a borrower-ordered or borrower-provided appraisal violates the appraisal regulations.[6] You may tell a lender a current appraisal exists and let it request the report directly from the institution that ordered it.[6]"
    },
    {
      q: "What is the appraisal threshold for a commercial real estate loan?",
      a: "At a bank, $500,000 of transaction value; at or below that an evaluation takes its place.[1][4] The agencies raised the line from $250,000 effective April 9, 2018.[2] At a federal credit union it is $1,000,000.[5]"
    },
    {
      q: "Does an SBA hotel loan need an appraisal?",
      a: "On a 504 project, yes above $500,000 of estimated project value, plus six named cases below it. On a standard 7(a) loan secured by commercial real estate there is no dollar trigger: the lender must obtain one.[3]"
    },
    {
      q: "How long is a hotel appraisal valid?",
      a: "SBA requires a report dated within twelve months of the application.[3] Banks have no fixed expiry: the lender documents that the value still holds against ten listed factors, including capitalization rate assumptions and financing terms.[6]"
    },
    {
      q: "Does my appraiser need hotel experience?",
      a: "Effectively yes. A license alone does not establish competency, which turns on experience relevant to the assignment.[1] SBA requires an appraiser experienced in the industry when the collateral is a special purpose property, and its list names hotels and motels.[3]"
    },
    {
      q: "What does a hotel appraisal cost and how long does it take?",
      a: "No public source publishes either figure. The banking agencies, SBA and the appraisal organizations set standards, not fees or turnaround times. Get both from your lender in writing before signing a term sheet."
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "12 CFR part 34 subpart C, Appraisals (34.41 authority and scope, 34.42 definitions, 34.43 appraisals required and the $500,000 commercial exemption, 34.44 minimum appraisal standards, 34.45 appraiser independence, 34.46 competency)",
      url: "https://www.ecfr.gov/current/title-12/part-34/subpart-C",
      publisher: "Office of the Comptroller of the Currency, via the Electronic Code of Federal Regulations",
      accessed: "2026-10-13"
    },
    {
      n: 2,
      label:
        "Real Estate Appraisals, final rule, 83 FR 15019 (April 9, 2018), raising the commercial real estate appraisal threshold from $250,000 to $500,000 and requiring an evaluation for the transactions it exempts",
      url: "https://www.govinfo.gov/content/pkg/FR-2018-04-09/pdf/2018-06960.pdf",
      publisher: "Office of the Comptroller of the Currency, Federal Reserve Board and FDIC, via govinfo",
      accessed: "2026-10-13"
    },
    {
      n: 3,
      label:
        "SOP 50 10 8.1, Lender and Development Company Loan Programs (effective October 1, 2026): Section C, Ch. 1, Para. E.2.b (Appraisals), for the $500,000 504 trigger, the six cases below it, the twelve-month dating rule, the SBA client or intended user rule, the bar on an appraisal prepared for the applicant, the going concern allocation, the special purpose industry experience rule, the 90 percent test and the 100 percent test; Para. E.1.c and the Typical 504 Structures table for the 50 / 35 / 15 structure and the list naming hotels, motels and other lodging facilities; Appendix 19, Para. A.1.d, for the 7(a) appraisal requirements",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-10-13"
    },
    {
      n: 4,
      label: "12 CFR 323.3, Appraisals required; transactions requiring a State certified or licensed appraiser",
      url: "https://www.law.cornell.edu/cfr/text/12/323.3",
      publisher: "Federal Deposit Insurance Corporation, via Legal Information Institute",
      accessed: "2026-10-13"
    },
    {
      n: 5,
      label:
        "12 CFR 722.3, Appraisals and written estimates of market value requirements for real estate-related financial transactions",
      url: "https://www.law.cornell.edu/cfr/text/12/722.3",
      publisher: "National Credit Union Administration, via Legal Information Institute",
      accessed: "2026-10-13"
    },
    {
      n: 6,
      label:
        "Interagency Appraisal and Evaluation Guidelines, 75 FR 77450 (December 10, 2010), at 77455 to 77462 and Appendix D",
      url: "https://www.govinfo.gov/content/pkg/FR-2010-12-10/pdf/2010-30913.pdf",
      publisher:
        "Office of the Comptroller of the Currency, Federal Reserve Board, FDIC, Office of Thrift Supervision and NCUA, via govinfo",
      accessed: "2026-10-13"
    },
    {
      n: 7,
      label:
        "12 U.S.C. 3339, Functions of Federal financial institutions regulatory agencies relating to appraisal standards",
      url: "https://www.law.cornell.edu/uscode/text/12/3339",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-13"
    },
    {
      n: 8,
      label: "National Registries of appraisers and appraisal management companies",
      url: "https://www.asc.gov/national-registries",
      publisher: "Appraisal Subcommittee of the Federal Financial Institutions Examination Council",
      accessed: "2026-10-13"
    },
    {
      n: 9,
      label: "USPAP, current edition and effective date",
      url: "https://appraisalfoundation.org/pages/uspap",
      publisher: "The Appraisal Foundation",
      accessed: "2026-10-13"
    },
    {
      n: 10,
      label: "13 CFR 120.160, Loan conditions, paragraph (b) Appraisals",
      url: "https://www.law.cornell.edu/cfr/text/13/120.160",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-13"
    },
    {
      n: 11,
      label: "Matthews Hotel Markets October 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-10-13"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/loan-requirements",
      "/hotel-financing/closing-costs",
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/refinance",
      "/hotel-financing/cash-out-refinance",
      "/hotel-financing/pip-and-renovation-loans"
    ],
    glossary: [
      "/glossary/going-concern-value",
      "/glossary/bov",
      "/glossary/ltv",
      "/glossary/per-key"
    ],
    data: ["/rates"]
  },
  cta: {
    label: "Talk to the capital markets desk",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets works through the appraisal rules with owners before a term sheet is signed, so the value question is settled on the lender's standard rather than on the price in the contract."
};
