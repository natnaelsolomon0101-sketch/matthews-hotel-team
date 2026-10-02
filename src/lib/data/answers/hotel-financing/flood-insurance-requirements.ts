/**
 * Does my hotel need flood insurance to close a loan?
 * Answer page: /hotel-financing/flood-insurance-requirements
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-10-02): 42 U.S.C. 4012a, 4013 and 4026 on Cornell LII;
 * 12 CFR part 22, the OCC's flood rule, from the eCFR API (title 12, issue of
 * 2026-09-28); the Interagency Questions and Answers Regarding Flood
 * Insurance, 87 FR 32826 (May 31, 2022), read as the govinfo PDF, which
 * supplies the lesser-of test, the insurable-value definition and the
 * classification of a hotel as a non-residential building; the Standard Flood
 * Insurance Policy General Property Form and section 61.11 from 44 CFR part
 * 61 via the eCFR API; the substantial-improvement definition in 44 CFR 59.1
 * and the floodproofing standard in 44 CFR 60.3(c); SBA SOP 50 10 8.1,
 * effective October 1, 2026, read as the .docx on legacy.sba.gov; and FEMA's
 * congressional reauthorization page, last updated September 28, 2026, for
 * the December 11, 2026 authorization date.
 *
 * The worked example was recomputed line by line with
 * scripts/check-flood-math.mjs before saving. Do not hand-edit a number
 * without re-reading its source and bumping `lastUpdated`.
 *
 * Deliberately absent: any flood insurance premium, any required excess limit,
 * and any share of hotels sitting in a special flood hazard area. No public
 * source publishes a lender's required limits, and no public source publishes
 * hotel flood premiums or that share. The page says so rather than guessing.
 *
 * Watch the authorization date. The codified text of 42 U.S.C. 4026 on
 * 2026-10-02 still printed September 30, 2026, two days past, because the
 * extension signed September 2, 2026 had not reached the US Code release yet.
 * FEMA's page is the faster source. Re-read both before changing the date.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "flood-insurance-requirements",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Flood Insurance and Your Loan",
  description:
    "When federal law forces flood insurance on a hotel loan, why the $500,000 NFIP cap leaves a gap, what the policy excludes, and the authorization date.",
  h1: "Does my hotel need flood insurance to close a loan?",
  lastUpdated: "2026-10-02",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Does my hotel need flood insurance to close a loan?",
    "How much flood insurance does my lender require on a hotel?",
    "Is my hotel in a special flood hazard area and what does that cost me?",
    "Does NFIP flood insurance cover lost hotel room revenue?",
    "Can I use a private flood policy instead of NFIP on a hotel loan?",
    "What happens if my hotel's flood policy lapses?",
    "Will flood insurance delay my hotel closing?",
    "Does a renovation in a flood zone trigger elevation requirements?",
  ],
  answer:
    "If any part of the building sits in a FEMA special flood hazard area and your lender is federally regulated, yes.[1][2] The federal minimum is the lesser of your loan balance or the most the NFIP will write, which is $500,000 per non-residential building.[3][5] NFIP authority runs to December 11, 2026.[4]",
  takeaways: [
    "The trigger is the flood map plus who regulates your lender, not the loan size. A regulated lender may not make, increase, extend or renew the loan without coverage for its term.[1][2]",
    "The federal floor is small: the lesser of the loan balance or the NFIP maximum, which is itself the lesser of $500,000 per non-residential building or the building's insurable value.[2][3][5]",
    "A standard NFIP policy pays nothing for the rooms you cannot sell: the General Property Form excludes loss of revenue, loss of use and interruption of business.[6]",
    "Hotel loans sit outside the flood escrow rule, because 12 CFR 22.5(a)(2)(i) excepts a loan made primarily for business purposes.[2]",
    "The program's authority moves. FEMA said on September 28, 2026 that it runs to 11:59 p.m. on December 11, 2026.[4]",
  ],
  sections: [
    {
      h2: "When does federal law make me buy flood insurance on a hotel?",
      lead:
        "Federal law makes it mandatory when the hotel building sits in a special flood hazard area in a community that participates in the NFIP and the loan comes from a lender the rule reaches.",
      body:
        "The statute is 42 U.S.C. 4012a(b)(1). It directs the federal banking regulators to bar a regulated lending institution from making, increasing, extending or renewing any loan secured by improved real estate in an identified special flood hazard area unless the building and any personal property securing the loan is covered for the term of the loan.[1] The OCC's version, 12 CFR 22.3(a), adds that the coverage reaches the building and the personal property securing the loan, never the land.[2]\n\nWho holds the loan decides whether the statute reaches it. It binds regulated lending institutions, federal agency lenders under 4012a(b)(2), and Fannie Mae and Freddie Mac through 4012a(b)(3).[1] SBA is a federal agency lender, and SOP 50 10 8.1, effective October 1, 2026, carries the duty into 7(a) and 504 hotel loans: where any portion of a collateral building is in a special flood hazard area, the lender must require flood insurance on that building, and on equipment, fixtures or inventory inside it that also secures the loan.[8] A debt fund or conduit originator outside those categories is not bound by the statute and requires flood insurance by loan document instead, on terms nobody publishes.\n\nTwo mechanics follow: 12 CFR 22.6 makes the lender use FEMA's standard flood hazard determination form, and 22.9 makes it send you written notice that the building is in the zone, whether or not coverage is available.[2]"
    },
    {
      h2: "How much flood insurance does the rule actually require?",
      lead:
        "The required amount is the lesser of the loan balance or the maximum NFIP coverage available, and that maximum is itself the lesser of the program cap for the building type or the building's insurable value.",
      body:
        "The five federal banking agencies wrote the test out as Question Amount 5 of the Interagency Questions and Answers Regarding Flood Insurance, 87 FR 32826, May 31, 2022, where their own example runs a $300,000 loan against a shed worth $30,000 and lands on $30,000, because insurable value is the binding leg.[3]\n\nOn a hotel the program cap binds instead. Question Amount 1 sets maximum building coverage at $500,000 for everything written on the General Property Form, which includes all non-residential buildings, and $500,000 for contents on the same form; the statute behind both is 42 U.S.C. 4013(b)(4).[3][5] Question Amount 4 puts a hotel where the normal stay is under six months in the non-residential class, and an extended-stay hotel where normal occupancy runs six months or more in the other-residential class, also on the General Property Form at the same cap.[3] In an emergency program community the business-property structure limit is $100,000.[5]\n\nInsurable value is the other leg, and Question Amount 2 defines it as generally 100 percent replacement cost value, including the foundation. Amount 6 makes the lender size each collateral building and add the results, and Amount 8 lets a lender require more than the minimum.[3] How much more is lender-set and unpublished."
    },
    {
      h2: "Why is the federal minimum never enough for a hotel?",
      lead:
        "A 100-key hotel costs many times $500,000 to rebuild, so the statutory floor covers a fraction of the building and the lender has to look past the NFIP for the rest.",
      body:
        "The gap is arithmetic: replacement cost on a limited-service hotel runs into the millions, and the cap is $500,000 per building rather than per key or per dollar of loan.[3][5] The answer is usually a private layer, and the rule leaves room for one. Under 12 CFR 22.3(c)(1) a federally regulated lender must accept a private flood policy meeting the definition in 22.2(k): coverage at least as broad as the standard NFIP policy, 45 days' notice of cancellation or non-renewal, a mortgage interest clause and cancellation terms as restrictive as the NFIP's. Section 22.3(c)(3) then permits discretionary acceptance of a policy that misses the definition, naming the structure hotels actually use: a difference in conditions, multiple peril or other blanket policy on non-residential commercial property from a surplus lines insurer the state has recognized or not disapproved.[2] SBA requires a private policy to match the standard NFIP policy.[8]\n\nThe deductible on such a policy has its own answer. Question Amount 10 lets a lender accept a blanket flood or multi-peril policy with a per-occurrence deductible even where one covered building is worth less than the deductible, and notes such policies are often used on hotels and resorts; what a lender may not do is let the deductible equal aggregate insurable value.[3] Required limits are lender-set and unpublished."
    },
    {
      h2: "What does a standard NFIP policy on a hotel not cover?",
      lead:
        "The General Property Form pays for direct physical loss to the building and its contents, and refuses every economic loss that follows, including lost room revenue.",
      body:
        "Section V.A lists what direct physical loss does not reach: loss of revenue or profits, loss of access, loss of use, loss from interruption of business, and any other economic loss.[6] On a hotel that is the largest number in a flood: rooms out of service for two months earn nothing, and the NFIP pays none of it. Business interruption cover is a separate policy, and its price is not published.\n\nThe settlement is narrower than owners expect. Section VII pays the least of the amount of insurance, the actual cash value, or the cost to repair with like kind and quality, and actual cash value is depreciated, so an older hotel can settle below replacement cost even inside the cap. Coverage D, Increased Cost of Compliance, adds up to $30,000 for ordinance-driven elevation, floodproofing, relocation or demolition, but Coverage A and Coverage D together cannot exceed the Act's maximum, so a hotel insured at the $500,000 cap collects nothing extra.[6]\n\nThe property exclusions in section IV read like a list of hotel amenities. Pools, hot tubs and spas that are not bathroom fixtures, and their pumps and heaters, are out wherever they sit, along with decks and patios outside the exterior walls, retaining walls, underground equipment, property not inside the enclosed building, and any building more than 49 percent of whose actual cash value is below ground.[6]"
    },
    {
      h2: "Will flood insurance hold up my closing?",
      lead:
        "A policy bought in connection with a loan takes effect at the moment of closing, so flood insurance should not add a day to the schedule unless the program's authority has lapsed.",
      body:
        "The waiting period is the thing to know, and the loan exception to it. A new NFIP policy normally takes effect at 12:01 a.m. on the thirtieth day after the application and premium are presented, but under 44 CFR 61.11(b) the initial purchase in connection with making, increasing, extending or renewing a loan is effective as of the time of the closing, provided the request reaches the NFIP and the premium is presented at or before it.[9] The statute agrees at 42 U.S.C. 4013(c)(2)(A), and a separate exception covers the first purchase after a map revision.[5]\n\nThe real schedule risk is the program's authorization. No new contract for flood insurance may be written after the date Congress sets in 42 U.S.C. 4026, and Congress has moved that date more than thirty times since 1987.[7] FEMA's reauthorization page, last updated September 28, 2026, says legislation signed on September 2, 2026 extended it to 11:59 p.m. on December 11, 2026, and that in a lapse FEMA keeps paying valid claims from available funds but stops selling and renewing policies.[4]\n\nSo check the date rather than the code: on October 2, 2026 the codified text of 4026 still printed September 30, 2026, because the September extension had not reached a US Code release.[7] If you are closing inside a window where the authority could lapse, ask early whether your lender will take a private policy under 12 CFR 22.3(c), which the authorization does not touch.[2]"
    },
    {
      h2: "What happens if the policy lapses, or the map changes under me?",
      lead:
        "Your lender must notify you, and if you do not replace the coverage within 45 days it buys a policy for you, charges you for it, and backdates the cost to the day coverage lapsed.",
      body:
        "Force placement is in 42 U.S.C. 4012a(e) and 12 CFR 22.7. On finding at any point in the term that the collateral is uninsured or underinsured, the lender must tell you to buy coverage at your expense, and if you have not bought it 45 days later it must purchase the policy and may charge you the premiums and fees, back to the day the old coverage lapsed.[1][2] Within 30 days of confirmation that you do have coverage, it must cancel the force-placed policy and refund the overlapping premiums and fees, and it must accept a declarations page showing the policy number and the insurer as proof.[1]\n\nA remap does the same without any act of yours, because the duty attaches to a building FEMA has identified as being in a special flood hazard area at origination or later in the term.[1] Under 12 CFR 22.8 the lender may charge a reasonable determination fee, including for life-of-loan monitoring, and may pass it on when a FEMA revision triggers a new determination.[2]\n\nLenders are rigid here because they are the ones penalized. Under 42 U.S.C. 4012a(f) a regulated lender found to have a pattern or practice of violating the purchase, escrow or notice requirements is assessed up to $2,000 for each violation, and selling the loan does not remove the liability. The duty outlives a sale too: for federal financial assistance, 4012a(a) applies it during the life of the property, regardless of transfer of ownership.[1]"
    },
    {
      h2: "Does a flood zone change what my hotel is worth or what a renovation costs?",
      lead:
        "It can change the renovation, because a project costing half the building's value forces the whole building into compliance with the local floodplain ordinance.",
      body:
        "The definition is in 44 CFR 59.1. A substantial improvement is any reconstruction, rehabilitation, addition or other improvement costing 50 percent or more of the building's market value before the work starts, and it includes a building that has taken substantial damage, meaning repair costs of 50 percent or more of pre-damage market value. Correcting code violations the local official calls the minimum needed for safe conditions does not count, nor does qualifying work on a historic structure.[10]\n\nCrossing the line is expensive. Under 44 CFR 60.3(c)(3) a participating community must require new construction and substantial improvement of a non-residential building in an A1-30, AE or AH zone either to put its lowest floor at or above the base flood level, or to be designed with its utility and sanitary facilities so the structure is watertight below that level and can resist hydrostatic and hydrodynamic loads and buoyancy. Section 60.3(c)(4) makes a registered engineer or architect certify the design and the elevation reached.[11] A brand-mandated property improvement plan on a hotel in an AE zone can walk into that test, and the floodproofing cost is not in the brand's scope.\n\nFor value, the exposure shows up through underwriting. A buyer prices the premium, the deductible and the business interruption layer into expenses, and a lender sizes debt off what is left. No public source publishes hotel flood premiums or the share of US hotels in special flood hazard areas, so this page prints neither."
    }
  ],
  table: {
    caption:
      "A standard NFIP policy on a hotel: the federal floor and what it leaves out, October 2026",
    columns: ["Item", "What the standard NFIP policy does", "Where the rule is"],
    rows: [
      [
        "Maximum building coverage",
        "$500,000 per non-residential building in a regular program community",
        "42 U.S.C. 4013(b)(4); Q&A Amount 1",
      ],
      [
        "Maximum contents coverage",
        "$500,000 for contents the building owner owns",
        "42 U.S.C. 4013(b)(4); Q&A Amount 1",
      ],
      [
        "Maximum in an emergency program community",
        "$100,000 for the structure",
        "42 U.S.C. 4013(b)(1)(B)",
      ],
      [
        "Minimum the lender must require",
        "Lesser of the loan balance or the NFIP maximum, which is itself the lesser of the cap or insurable value",
        "12 CFR 22.3(a); Q&A Amount 5",
      ],
      [
        "Basis of a building claim",
        "Least of the coverage amount, actual cash value, or the cost to repair with like kind and quality",
        "44 CFR 61 app. A(2), VII",
      ],
      [
        "Room revenue lost while rooms are out",
        "Not covered, along with loss of use and interruption of business",
        "44 CFR 61 app. A(2), V.A.1 and V.A.4",
      ],
      [
        "Pool, spa and their equipment",
        "Not covered, wherever located",
        "44 CFR 61 app. A(2), IV.14",
      ],
      [
        "Increased Cost of Compliance",
        "Up to $30,000, but Coverage A and Coverage D together cannot exceed the Act's maximum",
        "44 CFR 61 app. A(2), III.D.2",
      ],
      [
        "Escrow of the premium",
        "Not required on a loan made primarily for business or commercial purposes",
        "12 CFR 22.5(a)(2)(i)",
      ],
      [
        "Effective date when bought at closing",
        "The time of the loan closing, if applied for and paid at or before closing",
        "44 CFR 61.11(b); 42 U.S.C. 4013(c)(2)(A)",
      ],
      [
        "Effective date otherwise",
        "12:01 a.m. on the thirtieth day after application and premium",
        "44 CFR 61.11(d)",
      ],
      [
        "Private policy instead of NFIP",
        "Must be accepted if it meets the definition; may be accepted if it does not, including a surplus lines blanket policy on commercial property",
        "12 CFR 22.2(k), 22.3(c)",
      ],
    ],
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet is the other half of this question. As of September 30, 2026 it shows the 10-year Treasury at 5.29 percent and Prime at 7.00 percent, and marks the debt service coverage and loan-to-value cells as not yet published, because lenders do not publish them.[12] An insurance certificate a lender will not accept stops a closing at any of those rates.",
  },
  workedExample: {
    label: "Hypothetical: a 120-key select-service hotel in an AE zone",
    body:
      "This hotel does not exist. The 120 keys, the $16,800,000 replacement cost, the $2,100,000 of owner-owned furniture and equipment, the $9,400,000 loan balance, the $50,000 deductible, the depreciation to 70 percent of replacement cost, the two-month closure and the $155 rate are assumptions. The rules applied to them are not, and every figure was recomputed with scripts/check-flood-math.mjs.\n\nStart with the sizing test. The NFIP maximum on the building is the lesser of the $500,000 cap and the $16,800,000 insurable value, so $500,000; the required amount is the lesser of that and the $9,400,000 balance, so $500,000 again. Contents land on $500,000 the same way. The floor is $1,000,000 against $18,900,000 of insurable value, 5.3 percent of it, leaving the building uninsured by the NFIP for $16,300,000.[2][3][5] Increased Cost of Compliance adds nothing, because Coverage A is already at the Act's maximum.[6]\n\nNow flood the ground floor and call the repair $2,000,000. Section VII pays the least of the $500,000 of coverage, the $11,760,000 actual cash value and the $2,000,000 repair cost, so $500,000, less the $50,000 deductible: $450,000.[6] That is 22.5 percent of the repair bill, and $1,550,000 of it is yours. Then add what the policy refuses. Rooms are out for 60 nights; at 70 percent occupancy that is 5,040 occupied room nights, and at $155 each it is $781,200 of rooms revenue excluded outright.[6] Total uninsured on one event: $2,331,200, or 24.8 percent of the loan balance.\n\nThe renovation test is separate. If pre-work market value is $14,000,000, the substantial improvement line sits at $7,000,000. A $35,000 per key property improvement plan costs $4,200,000, or 30.0 percent of market value, and stays under it. A larger scope, or a flood damaging half the value, crosses it, and the community must then require base flood elevation or certified floodproofing.[10][11]"
  },
  faq: [
    {
      q: "Is flood insurance required if only part of my hotel is in the flood zone?",
      a: "Yes. SBA's SOP says that if any portion of a collateral building is in a special flood hazard area, the lender must require flood insurance on it.[8] The bank rules reach a building located or to be located in such an area.[1][2]",
    },
    {
      q: "My lender is a debt fund, not a bank. Does the federal rule apply?",
      a: "Not directly. The statute binds regulated lending institutions, federal agency lenders and the two housing enterprises.[1] A lender outside those categories requires flood insurance by loan document instead, on terms no public source publishes.",
    },
    {
      q: "Can I use a private flood policy instead of NFIP?",
      a: "Yes. A federally regulated lender must accept a private policy meeting 12 CFR 22.2(k), and may accept one that does not under 22.3(c)(3), including a surplus lines blanket policy on commercial property.[2] SBA requires coverage matching a standard NFIP policy.[8]",
    },
    {
      q: "Does NFIP flood insurance pay for the rooms I cannot sell?",
      a: "No. The General Property Form excludes loss of revenue or profits, loss of access, loss of use, interruption of business and any other economic loss.[6] Business interruption on a hotel comes from a separate policy.",
    },
    {
      q: "Will buying flood insurance delay my closing?",
      a: "It should not. A policy bought in connection with making, increasing, extending or renewing a loan takes effect at the time of closing if it is applied for and paid at or before closing.[9] Otherwise the wait is 30 days.[5][9]",
    },
    {
      q: "What happens if my hotel's flood policy lapses?",
      a: "Your lender must notify you. If you do not buy coverage within 45 days, it must buy a policy for you and may charge the premium back to the date your coverage lapsed, then refund any overlap once you prove new coverage.[1][2]",
    },
    {
      q: "Does a renovation in a flood zone trigger elevation requirements?",
      a: "It can. Work costing 50 percent or more of the building's pre-work market value is a substantial improvement, and the community must then require the lowest floor at or above base flood elevation or certified floodproofing.[10][11]",
    },
    {
      q: "Is the NFIP's authority about to lapse?",
      a: "FEMA said on September 28, 2026 that authorization runs to 11:59 p.m. on December 11, 2026.[4] It says that in a lapse it keeps paying valid claims from available funds but stops selling and renewing policies.[4]",
    },
  ],
  sources: [
    {
      n: 1,
      label:
        "42 U.S.C. 4012a: the purchase requirement for regulated lending institutions, federal agency lenders and the housing enterprises in (b)(1) to (b)(3), the private flood insurance definition in (b)(7), the small-loan exception in (c)(2), the escrow direction in (d), force placement with its 45-day notice, 30-day termination and declarations-page proof in (e), the civil penalty of up to $2,000 per violation in (f)(5), and the life-of-the-property duty in (a)",
      url: "https://www.law.cornell.edu/uscode/text/42/4012a",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-02",
    },
    {
      n: 2,
      label:
        "12 CFR part 22, the OCC's Loans in Areas Having Special Flood Hazards: the purchase requirement and coverage amount in 22.3(a), table funding in 22.3(b), mandatory, compliance-aid and discretionary acceptance of private flood insurance in 22.3(c) with the definition in 22.2(k), the exemptions in 22.4, the business-purpose escrow exception in 22.5(a)(2)(i), the standard flood hazard determination form in 22.6, force placement in 22.7, determination and life-of-loan monitoring fees in 22.8, and the borrower notice in 22.9 (title 12 issue of September 28, 2026)",
      url: "https://www.ecfr.gov/current/title-12/part-22",
      publisher: "Electronic Code of Federal Regulations, National Archives",
      accessed: "2026-10-02",
    },
    {
      n: 3,
      label:
        "Loans in Areas Having Special Flood Hazards; Interagency Questions and Answers Regarding Flood Insurance, 87 FR 32826 (May 31, 2022): Amount 1 on the $500,000 General Property Form caps for building and contents, Amount 2 on insurable value as 100 percent replacement cost value, Amount 4 classifying hotels and motels with stays under six months as non-residential buildings, Amount 5 on the lesser-of test with a worked example, Amount 6 on multiple buildings, Amount 8 on a lender requiring more than the minimum, and Amount 10 on blanket flood and multi-peril policies with per-occurrence deductibles, which the agencies note are often used on hotels and resorts",
      url:
        "https://www.federalregister.gov/documents/2022/05/31/2022-10414/loans-in-areas-having-special-flood-hazards-interagency-questions-and-answers-regarding-flood",
      publisher:
        "Office of the Comptroller of the Currency, Federal Reserve Board, FDIC, Farm Credit Administration and NCUA, via the Federal Register",
      accessed: "2026-10-02",
    },
    {
      n: 4,
      label:
        "Congressional Reauthorization for the National Flood Insurance Program, last updated September 28, 2026: legislation signed September 2, 2026 extended the NFIP's authorization to 11:59 p.m. on December 11, 2026, and during a lapse FEMA would retain authority to pay valid claims with available funds but would stop selling and renewing policies",
      url:
        "https://www.fema.gov/flood-insurance/rules-legislation/congressional-reauthorization",
      publisher: "Federal Emergency Management Agency",
      accessed: "2026-10-02",
    },
    {
      n: 5,
      label:
        "42 U.S.C. 4013: the $500,000 aggregate liability for a non-residential building and $500,000 for contents in (b)(4), the $100,000 emergency program structure limit for business property in (b)(1)(B), the 30-day waiting period in (c)(1), and the exceptions for a purchase in connection with a loan and for a map revision in (c)(2)",
      url: "https://www.law.cornell.edu/uscode/text/42/4013",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-02",
    },
    {
      n: 6,
      label:
        "Standard Flood Insurance Policy, General Property Form, 44 CFR part 61 appendix A(2): the coverage of non-residential buildings in I.A, the $30,000 Increased Cost of Compliance limit and its combined cap with Coverage A in III.D.2, the property not insured in IV including pools, spas and their equipment and buildings more than 49 percent below ground, the exclusions for loss of revenue or profits, loss of access, loss of use, interruption of business and any other economic loss in V.A, the doubled deductible during construction in VI, and the loss settlement at the least of coverage, actual cash value or repair cost in VII (title 44 issue of September 28, 2026)",
      url: "https://www.ecfr.gov/current/title-44/part-61",
      publisher: "Electronic Code of Federal Regulations, National Archives",
      accessed: "2026-10-02",
    },
    {
      n: 7,
      label:
        "42 U.S.C. 4026: no new contract for flood insurance may be entered into after the date Congress sets, which the codified text read on October 2, 2026 still printed as September 30, 2026, with amendment notes showing more than thirty changes to that date since 1987 and the Public Law 119-75 amendment of February 3, 2026 taking effect as if enacted January 30, 2026",
      url: "https://www.law.cornell.edu/uscode/text/42/4026",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-02",
    },
    {
      n: 8,
      label:
        "SBA SOP 50 10 8.1, effective October 1, 2026, Flood Insurance: requirements built on FEMA Form 086-0-32, the duty to require flood insurance where any portion of a collateral building is in a special flood hazard area and on personal property collateral inside it, coverage at the lesser of the outstanding principal balance or the maximum limit available (itself the lesser of the NFIP limit for the structure type or the structure's insurable value), the six conditions a private flood policy must meet, and the 45-day cancellation notice for private flood insurance",
      url:
        "https://legacy.sba.gov/sites/default/files/2026-08/SOP%2050%2010%208.1%20effective%2010.1.2026_0.docx",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-10-02",
    },
    {
      n: 9,
      label:
        "44 CFR 61.11: the effective date of a new Standard Flood Insurance Policy, which is the time of the loan closing where the initial purchase is in connection with making, increasing, extending or renewing a loan and the application and premium are presented at or before closing under (b), and otherwise 12:01 a.m. on the thirtieth calendar day after the application and premium under (d) (title 44 issue of September 28, 2026)",
      url: "https://www.ecfr.gov/current/title-44/section-61.11",
      publisher: "Electronic Code of Federal Regulations, National Archives",
      accessed: "2026-10-02",
    },
    {
      n: 10,
      label:
        "44 CFR 59.1: the definitions of substantial improvement, being any reconstruction, rehabilitation, addition or other improvement costing 50 percent or more of the structure's market value before the start of construction, and of substantial damage, with the exclusions for minimum code-violation corrections and for qualifying alterations to a historic structure (title 44 issue of September 28, 2026)",
      url: "https://www.ecfr.gov/current/title-44/section-59.1",
      publisher: "Electronic Code of Federal Regulations, National Archives",
      accessed: "2026-10-02",
    },
    {
      n: 11,
      label:
        "44 CFR 60.3(c)(3) and (c)(4): a participating community must require new construction and substantial improvement of a non-residential structure in an A1-30, AE or AH zone either to have the lowest floor at or above the base flood level or to be floodproofed watertight below it, and must have a registered professional engineer or architect certify the design and the elevation reached (title 44 issue of September 28, 2026)",
      url: "https://www.ecfr.gov/current/title-44/section-60.3",
      publisher: "Electronic Code of Federal Regulations, National Archives",
      accessed: "2026-10-02",
    },
    {
      n: 12,
      label: "Hotel financing rate sheet, October 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-10-02",
    },
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/loan-requirements",
      "/hotel-financing/closing-costs",
      "/hotel-financing/pip-and-renovation-loans",
      "/hotel-financing/sba-7a-vs-504",
    ],
    glossary: ["/glossary/ffe-reserve", "/glossary/noi", "/glossary/ltv"],
    data: ["/rates"],
  },
  cta: {
    label: "Talk to the capital markets desk about your hotel loan",
    href: "/contact",
  },
  brandSentence:
    "Matthews Hotel Markets arranges hotel debt from $5 million and sells hotels from $2 million, including buildings that sit inside a special flood hazard area. We do not place insurance: your broker does that, and your lender will put its requirement in writing.",
};
