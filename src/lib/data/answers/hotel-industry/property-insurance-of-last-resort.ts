/**
 * What do I do if no insurer will cover my hotel?
 * Answer page: /hotel-industry/property-insurance-of-last-resort
 *
 * Written 2026-11-16 from a coverage scan of src/lib/data/: "windstorm",
 * "named storm", "coinsurance", "wind pool", "Citizens Property" and "TWIA"
 * appeared in ZERO files, and "insurance" appeared in 57 only ever as a line
 * item or a closing condition. The one federal slice, flood, is already
 * answered at /hotel-financing/flood-insurance-requirements. Nothing on the
 * site said what an owner does when the admitted market declines the hotel
 * altogether, which is the live question on every coastal and wildfire-area
 * asset.
 *
 * Every figure here was read out of a primary or first-party source in the run
 * that wrote this file (2026-11-16):
 *   - the TWIA Q2 2026 Fact Book, for the $4,424,000 commercial maximum
 *     liability limit with data as of 6/30/2026, the five eligibility
 *     requirements, the Certificate of Compliance requirement under Texas
 *     Insurance Code chapter 2210, and the ten-year policy count and exposure
 *     table;
 *   - Texas Commissioner of Insurance Official Order 2026-10103 of 09/08/2026,
 *     for the DISAPPROVAL of the proposed 2027 commercial limit of $4,563,000,
 *     the BOECKH-tracked comparison of $4,130,000 and the 332 commercial or
 *     governmental risks at the maximum;
 *   - the California Department of Insurance announcement of March 28, 2025,
 *     for the Division I commercial limits of $20,000,000 per building and
 *     $100,000,000 per location under binding Order No. 2024-2;
 *   - the California FAIR Plan's own Commercial policy page, for the eligible
 *     habitational occupancies including hotels and motels and for the named
 *     peril scope of fire, lightning and internal explosion;
 *   - Citizens Property Insurance Corporation's Commercial Lines New-Business
 *     Submission Guide, 05.15.2025, for Hotel/Motel as an eligible commercial
 *     nonresidential risk, the no-offer test, the statement that the 20% rule
 *     does NOT apply to commercial nonresidential, the 80 percent flood
 *     condition and the $10 million A-Rate referral;
 *   - the California FAIR Plan Key Statistics page, through September 2026;
 *   - the California Assembly Insurance Committee oversight hearing document
 *     of January 28, 2026, for the limit history, the 2028 sunset, Cal. Ins.
 *     Code 10090 and 10100.2 and the difference in conditions mechanism.
 *
 * The worked example was recomputed line by line with
 * scripts/check-insurance-math.mjs (27 assertions) before saving. Do not
 * hand-edit a number without re-reading its source and bumping `lastUpdated`.
 *
 * Deliberately absent, and the reason in each case:
 *   - ANY hotel property insurance premium, per key or per room night. No
 *     public source publishes one. The worked example moves a premium by an
 *     assumed amount and never states a level.
 *   - Any lender's insurance requirement: limits, deductibles, named-storm
 *     percentages, business interruption periods. Rule 1. None is published.
 *   - Any count of hotels insured by these three pools. None publishes the
 *     occupancy breakdown of its book, so the page says the published counts
 *     are all-lines counts and not hotel counts.
 *   - Florida's 2026 legislation on Citizens eligibility (SB 1028, SB 943).
 *     Enacted status was not confirmed at a primary source in this run, so no
 *     pending change is described.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "property-insurance-of-last-resort",
  cluster: "hotel-industry",
  isHub: false,
  title: "Hotel Insurance of Last Resort and What It Caps",
  description:
    "What a hotel owner does when no carrier will quote: the three state pools that write hotels, what each caps, and what the premium does to value.",
  h1: "What do I do if no insurer will cover my hotel?",
  lastUpdated: "2026-11-16",
  authorSlug: "miles-cortez",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "What do I do if no insurer will cover my hotel?",
    "Can a hotel get insurance through the Texas windstorm pool?",
    "Does Citizens Property Insurance cover hotels in Florida?",
    "Does the California FAIR Plan cover hotels?",
    "How much property insurance can I get on a coastal hotel?",
    "What does a property insurance increase do to my hotel's value?",
    "Will my lender accept a FAIR Plan policy on a hotel?"
  ],
  answer:
    "Three states run an insurer of last resort that will take a hotel. Texas caps a commercial structure and its contents at $4,424,000, and an order of September 8, 2026 held it there for 2027.[1][2] California's FAIR Plan writes up to $20,000,000 a building, but covers fire, lightning and internal explosion only.[3][4] Florida's Citizens takes a hotel only when no admitted insurer will quote.[5]",
  takeaways: [
    "A pool is not a cheaper policy, it is a narrower one. Texas writes wind and hail. California writes fire, lightning and internal explosion, with vandalism as a paid option.[1][4]",
    "The caps are the problem on a hotel. $4,424,000 reaches 23.04 percent of a $19,200,000 replacement cost, and 2.10 percent of Texas commercial and governmental risks already sit at the limit.[1][2]",
    "Price is not a way in. For commercial nonresidential, Citizens says the 20 percent rule does not apply: the applicant must be unable to get any offer from an authorized insurer.[5]",
    "A pool policy on its own leaves holes a buyer prices. California's own legislature describes the fix as a difference in conditions policy wrapped around it.[6]",
    "California's commercial limits are temporary. They were finalized in July 2025 and are set to sunset in 2028.[3][6]"
  ],
  sections: [
    {
      h2: "Why can I not get property insurance on my hotel?",
      lead:
        "Because admitted carriers have pulled back from wind and wildfire exposure, and the state pools that take their place are growing fast and cap what they will write.",
      body:
        "An insurer of last resort exists for the case where the normal market says no. California's is defined that way in statute: under Insurance Code 10090 the FAIR Plan insures qualified property for which basic property insurance cannot be obtained in the normal market.[6]\n\nThe growth is the backdrop. The Texas Windstorm Insurance Association carried 184,890 policies and $55.0 billion of exposure in 2020, and 288,676 policies and $128.3 billion at June 30, 2026, a rise of 56.1 percent in policies and 133.3 percent in exposure.[1] The California FAIR Plan reports 698,307 policies in force and $773 billion of exposure as of September 2026, up 157 and 252 percent since September 2022.[7] Both counts are all-lines and mostly homes, and neither pool publishes how many hotels it insures.\n\nOne thing before the detail: no public source publishes what a hotel pays for property insurance. There is no credible per-key premium, no national average and no published renewal increase, so this page prints none. The number that matters is on your own renewal, and the arithmetic below is what to do with it."
    },
    {
      h2: "What will the Texas windstorm pool cover on a hotel?",
      lead:
        "Wind and hail, and not more than $4,424,000 on a commercial structure and its contents, a limit the Commissioner held in place for 2027 by an order of September 8, 2026.",
      body:
        "TWIA is the wind and hail residual market for the 14 first tier coastal counties and the part of Harris County east of Highway 146. It publishes five eligibility requirements: the property sits in the designated area, at least one private insurer writing wind and hail there denied coverage, a policyholder in a flood zone may have to carry flood insurance, the property complies with the applicable windstorm building code, and it is in insurable condition.[1]\n\nThe fourth one catches hotels that have renovated. Texas Insurance Code chapter 2210 requires a TWIA-insured property to be certified as meeting the windstorm building code for its area, and TWIA states the test plainly: a structure must have a Certificate of Compliance, a WPI-8, WPI-8-E or WPI-8-C, to be insurable and eligible for TWIA coverage.[1] A re-roof done without the inspection is not a paperwork problem, it is an eligibility problem.\n\nThe cap moves by index, when it moves at all. TWIA must propose BOECKH Index adjustments by September 30 each year under Insurance Code 2210.502, and its board proposed a 3.1 percent rise for 2027, from $4,424,000 to $4,563,000. Official Order 2026-10103 of September 8, 2026 disapproved it, because cumulative past adjustments had already outrun the weighted average BOECKH factors. Had the limit tracked the index since 1997 it would be $4,130,000.[2] For a hotel the level matters more than the direction: 332 commercial or governmental risks, 2.10 percent of that book, are already insured to the maximum.[2]"
    },
    {
      h2: "Does my hotel qualify for Florida's Citizens?",
      lead:
        "Only on a total shutout. Citizens writes a hotel in its commercial nonresidential line, and the applicant has to be unable to procure any offer from an authorized insurer.",
      body:
        "Citizens' own Commercial Lines New-Business Submission Guide lists Hotel/Motel among the eligible risk types, alongside mercantile, office and restaurant.[5] The occupancy is not the obstacle.\n\nThe route in is. For commercial residential risks an applicant qualifies two ways: no authorized insurer will write it at approved rates, or the authorized insurer's premium is more than 20 percent above comparable coverage from Citizens. For commercial nonresidential, where a hotel sits, the guide says eligible applicants are those unable to procure any offer from an authorized insurer, and that the 20 percent rule does not apply.[5] Read that twice if you own a Florida hotel. A quote at twice the Citizens premium is still a quote, and it keeps the hotel out.\n\nTwo mechanics worth knowing before the application. For a property in a special flood zone, Citizens wants flood cover written to at least 80 percent of the Citizens building limit or the maximum available under the National Flood Insurance Program.[5] That runs into the $500,000 per non-residential building ceiling covered at [does my hotel need flood insurance to close a loan?](/hotel-financing/flood-insurance-requirements). A building insured above $10 million is also referred for individual A-rating rather than priced off the manual, and most hotels are in that bracket.[5]"
    },
    {
      h2: "What does California's FAIR Plan cover on a hotel?",
      lead:
        "Up to $20,000,000 a building and $100,000,000 a location, on a named peril policy that pays for fire, lightning and internal explosion and nothing else.",
      body:
        "Hotels are named in the eligible occupancies. The FAIR Plan's commercial page lists habitational buildings, five or more habitational units such as apartment buildings, hotels or motels, among the types it writes for applicants unable to buy coverage from a traditional insurer.[4]\n\nThe limits are recent, and generous next to Texas. On March 28, 2025 the Insurance Commissioner approved the FAIR Plan's filing raising Division I commercial limits to $20,000,000 per building and $100,000,000 per location, to be available to every eligible applicant within 120 days under binding Order No. 2024-2.[3] The Assembly Insurance Committee's history runs $8.4 million per location in 2021, $20 million per location in 2023, then $20 million per structure with the $100 million maximum finalized in July 2025 and set to sunset in 2028.[6] That per-building limit is 4.52 times the Texas commercial cap, so the same hotel can be fully covered in one state and a quarter covered in the other.\n\nThe scope is where it narrows. The Commercial Fire Policy is a named peril policy, which the Plan says covers only damage caused by the causes of loss listed in it: fire, lightning and internal explosion, with options such as vandalism at additional cost.[4] Water damage, theft, equipment breakdown, liability and lost room revenue are not in it. The Legislature's hearing document gives the standard answer, a difference in conditions policy bought alongside it, wrapping around the gaps so the combination matches what a standard policy would have covered, and rates the FAIR Plan policy as fully sound and as satisfying lenders' security requirements.[6] A hotel on the FAIR Plan alone carries the business interruption risk itself, and on a hotel that is the biggest number in a loss."
    },
    {
      h2: "What will my lender require?",
      lead:
        "Nothing published, which is the honest answer: no bank, life company, CMBS lender or debt fund publishes its property insurance requirements.",
      body:
        "Limits, deductible ceilings, named-storm sublimits, the months of business interruption, whether insurable value is replacement cost or actual cash value, and whether a surplus lines or pool policy is acceptable at all are loan document terms. They are negotiated, they vary by lender and by year, and no public source states them. Anyone publishing a typical hotel insurance covenant is inventing it. Read your own commitment letter.\n\nThree requirements near it are published. Federal law forces flood insurance on a loan from a regulated lender where the building sits in a special flood hazard area, which has its own page. Citizens imposes its 80 percent flood condition as a term of its own policy, not of any loan.[5] And California's legislature states that a FAIR Plan policy satisfies lenders' security requirements, which is useful if a lender balks at the insurer of last resort as a carrier.[6]\n\nThe sequence is the same every time: get the insurance quote before the loan application is far along, because the premium enters the underwriting as an expense and changes the income the loan is sized against. The covenants that follow are at [what covenants and cash management will my hotel lender require?](/hotel-financing/covenants-and-cash-management), and the rest at [what do lenders require for a hotel loan?](/hotel-financing/loan-requirements)."
    },
    {
      h2: "What does the premium do to what my hotel is worth?",
      lead:
        "Every recurring dollar of premium comes out of net operating income, and a buyer capitalizes it, so the loss of value is a multiple of the extra premium.",
      body:
        "Value is net operating income divided by a cap rate, so at an 8.5 percent cap rate every recurring dollar of cost removes $11.76 of value. That multiple is why an insurance renewal is a valuation event on a hotel.\n\nInsurance is also the wrong kind of cost. It is a fixed charge that does not fall when occupancy falls, set out with two public owners' reported figures at [what does it cost to operate a hotel?](/hotel-industry/hotel-operating-costs). A hotel that loses 10 points of occupancy pays the same premium out of a smaller income.\n\nNone of that needs a published premium. It needs your renewal and a cap rate. Put the new expense through [the hotel cap rate calculator](/tools/cap-rate-calculator) and [the hotel DSCR calculator](/tools/dscr-calculator), and take the cap rate from [what is a good cap rate for a hotel in 2026?](/hotel-valuation/hotel-cap-rates)."
    },
    {
      h2: "What should a buyer or a seller check before closing?",
      lead:
        "Four documents settle most of it: the loss runs, the current declarations, the pool eligibility evidence and the wrap policy.",
      body:
        "Start with insurable value against the cap. Divide replacement cost by the pool's limit and you have the share the pool covers; the rest comes from the admitted or surplus lines market, and a buyer underwrites that excess layer rather than assuming it.[1]\n\nThen the eligibility paperwork, which differs by state. In Texas, ask for the Certificate of Compliance, and ask again about every improvement since, because the certificate attaches to the work. WPI-8-C applications were accepted only from January 1, 2017 to May 31, 2020 and WPI-8-E applications from June 1, 2020, so which certificate a structure holds dates its last inspected improvement.[1] In Florida, ask for the declinations, since eligibility rests on being unable to get any offer.[5] In California, ask whether a difference in conditions policy sits alongside the FAIR Plan policy, because without it the water damage and the lost room revenue are uninsured.[4][6]\n\nThe rest belongs with the diligence list at [what due diligence do I need before buying a hotel?](/buy-a-hotel/due-diligence-checklist) and the seller's file at [what documents do I need to sell my hotel?](/sell-a-hotel/documents-needed). A renewal quote that lands mid-inspection well above the offering memorandum is a retrade, and the way to avoid it is to have the current quote in the file on day one."
    }
  ],
  table: {
    caption:
      "Insurers of last resort that will write a hotel, read at each program's own publication, November 2026",
    columns: [
      "Program",
      "Which hotels qualify",
      "What the policy covers",
      "Most it will write",
      "Where the rule is"
    ],
    rows: [
      [
        "Texas Windstorm Insurance Association",
        "In the designated area, the 14 first tier coastal counties plus Harris County east of Hwy 146, after a denial by at least one private wind and hail insurer, with a Certificate of Compliance and in insurable condition",
        "Windstorm and hail",
        "$4,424,000 on a commercial structure and its associated contents, unchanged for policies issued or renewed on or after January 1, 2027",
        "Texas Insurance Code ch. 2210, 2210.502; Commissioner's Order 2026-10103[1][2]"
      ],
      [
        "Citizens Property Insurance Corporation, commercial nonresidential",
        "Hotel/Motel is a listed eligible risk type, but only for an applicant unable to procure any offer from an authorized insurer. The 20 percent rule does not apply",
        "Multiperil (CNR-M) or wind only (CNR-W)",
        "Not published as a flat cap. A building insured above $10 million is referred for individual A-rating",
        "Citizens Commercial Lines New-Business Submission Guide, 05.15.2025, and Rule 103[5]"
      ],
      [
        "California FAIR Plan, Division I commercial",
        "Habitational buildings with five or more units, naming hotels and motels, where coverage cannot be bought from a traditional insurer",
        "Named peril: fire, lightning and internal explosion. Vandalism and malicious mischief optional at extra cost",
        "$20,000,000 per building and $100,000,000 per location, available within 120 days of the March 28, 2025 approval and set to sunset in 2028",
        "Cal. Ins. Code 10090 and 10100.2; Commissioner's binding Order No. 2024-2[3][4][6]"
      ],
      [
        "The admitted and surplus lines market",
        "Set by each carrier's own appetite",
        "Negotiated",
        "Negotiated",
        "Nothing published. No carrier publishes its hotel appetite, limits or pricing, and this page prints none"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet is where a higher premium turns into a smaller loan. As of September 30, 2026 it shows the 10-year Treasury at 5.29 percent and Prime at 7.00 percent, and it marks the debt service coverage and loan-to-value cells not yet published, because lenders do not publish them.[8] Whatever those floors are, a premium increase shrinks the income the loan is sized against."
  },
  workedExample: {
    label:
      "Hypothetical: a 120-key coastal Texas hotel against the published caps",
    body:
      "This hotel does not exist. The 120 keys, the $160,000 per key of insurable replacement cost, the $180,000 renewal increase, the 70 percent occupancy and the 8.5 percent cap rate are assumptions, and yours will differ. The caps are published. No premium level appears here, because no public source gives one for a hotel.\n\nReplacement cost: 120 keys at $160,000 is $19,200,000.\n\nWhat the pool reaches: the TWIA maximum on a commercial structure and its contents is $4,424,000, or 23.04 percent of that replacement cost and $36,867 a key.[1] The remaining $14,776,000 is insured somewhere else, or not at all.\n\nWhat the disapproved step would have changed: TWIA asked for $4,563,000 for 2027, which would have covered 23.77 percent and cut the gap to $14,637,000. The order of September 8, 2026 disapproved it, so the gap stays $14,776,000.[2]\n\nThe same hotel in California: $19,200,000 sits inside the FAIR Plan's $20,000,000 per-building limit with $800,000 of headroom, and five buildings this size fit inside the $100,000,000 per-location maximum.[3] But the policy covers fire, lightning and internal explosion, so the wind exposure that drives the Texas problem would be uninsured without a wrap.[4]\n\nNow the value arithmetic. Assume the renewal comes back $180,000 a year higher, which is $1,500 a key and $5.87 on every one of the 30,660 room nights this hotel sells at 70 percent occupancy. At an 8.5 percent cap rate, $180,000 divided by 0.085 removes $2,117,647 of value, or $17,647 a key. At 8 percent the same $180,000 removes $2,250,000 and at 9 percent $2,000,000.\n\nThe two halves together: the gap above the cap is an insurance problem, the premium is a valuation problem, and a buyer underwrites both."
  },
  faq: [
    {
      q: "Can a hotel buy a policy from the Texas windstorm pool?",
      a: "Yes, if it is in the designated coastal area, was denied by at least one private wind and hail insurer, holds a Certificate of Compliance and is in insurable condition. TWIA publishes those five eligibility requirements.[1]"
    },
    {
      q: "How much will TWIA write on a hotel?",
      a: "Up to $4,424,000 on a commercial structure and its associated contents. The Commissioner disapproved an increase to $4,563,000 on September 8, 2026, so that limit also applies to policies issued or renewed from January 1, 2027.[1][2]"
    },
    {
      q: "Does Citizens cover hotels in Florida?",
      a: "Hotel/Motel is a listed eligible risk type in Citizens' commercial nonresidential line. Eligibility requires being unable to procure any offer from an authorized insurer, and Citizens says the 20 percent rule does not apply to commercial nonresidential.[5]"
    },
    {
      q: "Can I move to Citizens because my Florida quote is too expensive?",
      a: "Not for a hotel. Price is a route in for commercial residential risks, where a premium more than 20 percent above Citizens qualifies. For commercial nonresidential, Citizens says that rule does not apply and only a total shutout counts.[5]"
    },
    {
      q: "Does the California FAIR Plan cover hurricane or water damage on a hotel?",
      a: "No. The Commercial Fire Policy is a named peril policy covering fire, lightning and internal explosion, with vandalism and malicious mischief available at extra cost. Water damage, theft, liability and lost room revenue are not covered.[4]"
    },
    {
      q: "What is a difference in conditions policy?",
      a: "A wraparound policy bought alongside a FAIR Plan policy. California's Assembly Insurance Committee describes it as providing the coverage the FAIR Plan policy leaves out, so the combination matches what a standard policy would have covered.[6]"
    },
    {
      q: "Will my lender accept a FAIR Plan policy on a hotel?",
      a: "California's legislature states that a FAIR Plan policy satisfies lenders' security requirements.[6] No lender publishes its own insurance requirements, so the answer for your loan is in the commitment letter, not in any public source."
    },
    {
      q: "Does Matthews Hotel Markets place hotel insurance?",
      a: "No. We sell hotels and arrange the debt behind them, and placing coverage is work for an insurance broker. What we do is underwrite the renewal and the pool's cap into the offering material, and say so in writing."
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "Q2 2026 TWIA Fact Book: the current maximum liability limits, $4,424,000 for commercial structures and associated contents with 2.4% of policies insured to that limit and $1,773,000 for dwellings, data as of 6/30/2026; the duty to file proposed changes with TDI by September 30 each year; the five eligibility requirements, location in the area designated by the Commissioner covering the 14 first tier coastal counties and the portion of Harris County east of Hwy. 146, denial by at least one private market insurer actively writing wind and hail there, possible flood insurance for policyholders in flood zones, compliance with applicable windstorm building code requirements and insurable condition; the Texas Insurance Code chapter 2210 certification requirement and the statement that a structure must have a Certificate of Compliance (WPI-8, WPI-8-E or WPI-8-C) to be considered insurable and eligible for TWIA coverage, with TDI administering the Windstorm Inspection Program, WPI-8-E applications accepted from June 1, 2020 and WPI-8-C applications accepted from January 1, 2017 to May 31, 2020; and the Policy Count and Exposures by Year table, 184,890 policies and $55.0 billion of exposure in 2020 against 288,676 policies and $128.3 billion at Q2 2026",
      url: "https://www.twia.org/wp-content/uploads/Q2-2026-TWIA-Fact-Book.pdf",
      publisher: "Texas Windstorm Insurance Association",
      accessed: "2026-11-16"
    },
    {
      n: 2,
      label:
        "Official Order of the Texas Commissioner of Insurance No. 2026-10103, dated 09/08/2026, on TWIA policy maximum liability limits: the Insurance Code 2210.502 duty to propose BOECKH Index inflation adjustments by September 30, the board's proposal of August 4, 2026 and filing of August 6, 2026 under petition P-0826-04 for commercial property, the proposed 3.1 percent increase from $4,424,000 to $4,563,000 for commercial and governmental structures and their contents, the finding that the limit would be $4,130,000 had past increases tracked the BOECKH Index since 1997, the finding that 332 commercial or governmental risks or approximately 2.10 percent of that book are at the maximum limit, the finding that cumulative adjustments have exceeded the increases in the weighted average BOECKH Index factors, and the disapproval of the proposed commercial increase for policies delivered, issued for delivery or renewed on or after January 1, 2027",
      url: "https://tdi.texas.gov/submissions/limits/documents/202610103.pdf",
      publisher: "Texas Department of Insurance",
      accessed: "2026-11-16"
    },
    {
      n: 3,
      label:
        "Commissioner Lara approves major FAIR Plan expansion to help HOAs, builders, farmers, and businesses access insurance coverage, March 28, 2025: approval of the California FAIR Plan Association's commercial filing increasing Division I Commercial Property coverage limits to $20 million per building with a total $100 million maximum limit per location, and the requirement that the FAIR Plan make the new limits available to all eligible applicants for both new and renewal policies within 120 days of the approval date as stipulated in binding Order No. 2024-2",
      url:
        "https://www.insurance.ca.gov/0400-news/0102-alerts/2025/upload/032825-Commissioner-Lara-approves-major-FAIR-Plan-expansion-to-help-HOAs-builders-farmers-and-businesses-access-insurance-coverage.pdf",
      publisher: "California Department of Insurance",
      accessed: "2026-11-16"
    },
    {
      n: 4,
      label:
        "The California FAIR Plan, Commercial: the commercial property types covered for applicants unable to purchase coverage with a traditional insurance company, including habitational buildings, meaning buildings with five or more habitational units such as apartment buildings, hotels or motels, alongside retail mercantiles, manufacturing, office buildings, buildings under construction and farms and wineries; and the statement that the California FAIR Plan Commercial Fire Policy is a named peril policy providing coverage only for damage caused by the specific causes of loss listed in the policy, namely fire, lightning and internal explosion, with optional coverages such as vandalism and malicious mischief available at additional cost",
      url: "https://www.cfpnet.com/policies/commercial/",
      publisher: "California FAIR Plan Association",
      accessed: "2026-11-16"
    },
    {
      n: 5,
      label:
        "Citizens Property Insurance Corporation, PolicyCenter Commercial Lines New-Business Submission Guide, 05.15.2025: the eligible types of risk for Commercial Nonresidential, which include Hotel/Motel, mercantile, office, restaurant and boarding and lodging or rooming houses; the commercial residential eligibility rules, no offer of coverage from an authorized insurer willing to write the risk at its approved rates, or the 20% rule where the authorized insurer's premium is more than 20% greater than the premium for comparable coverage from Citizens; the statement that eligible applicants for Commercial Nonresidential Multiperil or Wind coverage are those unable to procure any offer from an authorized insurer and that the 20% rule does NOT apply, with the direction to shop the risk with private-market carriers first and the reference to Rule 103 on ineligible risks; the flood affirmation requirement that property in a special flood zone be insured to either 80 percent of the Citizens building limit or the maximum available limit under the National Flood Insurance Program, evidenced by the current flood declarations or form CIT FW01 10 19; and the note that buildings valued over $10 million are submitted for A-Rate with no premium displayed",
      url:
        "https://training.citizensfla.com/lms/CIS/PC/CL_New_Business_Submission_Guide.pdf",
      publisher: "Citizens Property Insurance Corporation",
      accessed: "2026-11-16"
    },
    {
      n: 6,
      label:
        "Assembly Insurance Committee Oversight Hearing, The California FAIR Plan, January 28, 2026: the California Insurance Code 10090 purpose of insuring qualified property for which basic property insurance cannot be obtained through the normal insurance market and the Insurance Code 10100.2 rate standard; the statement that FAIR Plan policies are capped at $3.3 million for residential properties and $20 million per structure up to $100 million for commercial properties, with commercial moving from $8.4 million per location in 2021 to $20 million per location in 2023 to $20 million per structure with a $100 million maximum finalized in July 2025 and set to sunset in 2028; the statement that the FAIR Plan policy is not as broad as traditional policies but is fully sound and satisfies lenders' security requirements, with other coverages typically bought through a difference in conditions or DIC policy providing wraparound coverage; and the reported total exposure of $724 billion and 668,609 policies in force as of December 2025",
      url: "https://ains.assembly.ca.gov/media/340",
      publisher: "California State Assembly, Assembly Insurance Committee",
      accessed: "2026-11-16"
    },
    {
      n: 7,
      label:
        "The California FAIR Plan, Key Statistics & Data, representing the latest available information through September 2026 (Fiscal Year End 2026): total exposure of $773 billion, an 11 percent increase since September 2025 and a 252 percent increase since September 2022, and total dwelling and commercial policies in force of 698,307, an 8 percent increase since September 2025 and a 157 percent increase since September 2022, updated quarterly",
      url: "https://www.cfpnet.com/key-statistics-data/",
      publisher: "California FAIR Plan Association",
      accessed: "2026-11-16"
    },
    {
      n: 8,
      label:
        "Matthews Hotel Markets hotel debt rate sheet, October 2026 edition: the 10-year Treasury at 5.29% and Prime at 7.00% as of September 30, 2026, with the debt service coverage and loan-to-value cells marked not yet published",
      url: "https://matthewshotelmarkets.com/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-11-16"
    }
  ],
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/hotel-operating-costs",
      "/hotel-industry/energy-benchmarking-and-emissions-limits",
      "/hotel-industry/cost-to-build-a-hotel",
      "/hotel-industry/hotel-worker-minimum-wage"
    ],
    glossary: ["/glossary/noi", "/glossary/cap-rate", "/glossary/per-key"],
    data: ["/rates"]
  },
  cta: {
    label: "Talk to the hospitality team",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets does not place insurance, and when we sell a hotel on a coast or in a wildfire area we underwrite the current renewal and the pool's cap into the offering material, because a buyer who finds the gap after closing discounts the next deal."
};
