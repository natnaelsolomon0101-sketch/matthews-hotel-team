/**
 * Is my hotel company too big for an SBA loan?
 * Answer page: /hotel-financing/sba-size-standards
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-10-22):
 *   - 13 CFR 121.201, read twice and in agreement: once through the eCFR
 *     versioner API for the October 1, 2026 issue of title 13 and once on
 *     Cornell LII. Both print $40.0 million for NAICS 721110, Hotels (except
 *     Casino Hotels) and Motels, $40.0 million for 721120 Casino Hotels,
 *     $9.0 million for 721191 Bed-and-Breakfast Inns and 721199 All Other
 *     Traveler Accommodation, $10.0 million for 721211 RV Parks and
 *     Campgrounds, $9.0 million for 721214 Recreational and Vacation Camps
 *     and $14.0 million for 721310 Rooming and Boarding Houses, Dormitories,
 *     and Workers' Camps. The section's own header sentence supplies the two
 *     facts people get wrong: the standards are expressed in annual receipts
 *     in millions of dollars, and the figure is the maximum allowed for a
 *     concern AND its affiliates;
 *   - 13 CFR 121.301 (eCFR, same issue) for paragraph (a)'s two criteria,
 *     paragraph (b)(2)'s alternative standard of $20 million tangible net
 *     worth and $6.5 million average net income with the pass-through
 *     gross-up in (b)(2)(i) to (iii), paragraph (e)'s 25 percent increase
 *     inside a labor surplus area, and paragraph (f)(1)'s six ownership
 *     tests, (f)(2)'s present effect for options and agreements to merge,
 *     (f)(3)'s instruction to count every domestic and foreign affiliate and
 *     (f)(4)'s pointer to the exceptions in 121.103(b);
 *   - 13 CFR 121.104 (eCFR) for what receipts are, the exclusions, the
 *     reliance on the filed Federal income tax return in (a)(1), the
 *     five-year period of measurement in (c)(1) and the three-year election
 *     the Business Loan Programs get in (c)(4), and (d)(1)'s rule that
 *     affiliate receipts are added average to average;
 *   - 13 CFR 121.302 (eCFR) for the date size is fixed, the Preferred Lenders
 *     Program exception, and paragraph (e), that later changes in size do not
 *     disqualify an applicant;
 *   - 13 CFR 121.105 (eCFR) for the business concern definition and
 *     paragraph (c)'s predecessor-entity rule;
 *   - 13 CFR 121.106 (Cornell LII) for the 24-month employee average, which
 *     is how the standards that are not receipts-based are measured;
 *   - 13 CFR 120.100 (eCFR) for the five basic eligibility requirements,
 *     including (d), small under part 121 including affiliates;
 *   - 13 CFR 120.151 (Cornell LII) for the $3,750,000 aggregate guaranty to a
 *     single borrower including its affiliates as defined in 121.301(f), the
 *     $5,000,000 maximum for any one 7(a) loan, and the rule that an Eligible
 *     Passive Company's loan counts against both it and the Operating
 *     Company;
 *   - 13 CFR 120.111 (Cornell LII) for the condition that the Eligible
 *     Passive Company and the Operating Company each be small;
 *   - SBA's 7(a) terms page for the 85 percent guaranty at or below $150,000,
 *     the 75 percent guaranty above it and maximum exposure of $3.75 million;
 *   - 87 FR 69118 (govinfo) for the 13.65 percent inflation adjustment that
 *     moved 721110 from $35.0 million to $39.78 million, rounded to $40.0
 *     million, effective December 19, 2022, and 88 FR 46048 (govinfo), which
 *     finalized those interim provisions without change on July 19, 2023;
 *   - 88 FR 21074 (govinfo) for the affiliation rule effective May 11, 2023,
 *     which removed affiliation based on management and control, franchise
 *     and license agreements and identity of interest between close
 *     relatives, and for the preamble sentence at 21079 saying the
 *     three-digit subsector limit exists "to restrict affiliates to
 *     businesses in the same field";
 *   - 89 FR 11703 (govinfo) for the 34.46 percent adjustment that took the
 *     Jobs Act's $15 million and $5 million to $20 million and $6.5 million,
 *     effective March 18, 2024, adopted without change from the July 28,
 *     2023 proposal;
 *   - the Department of Labor's Labor Surplus Area page for the FY2027 list,
 *     in effect October 1, 2026 through September 30, 2027, and its 6.0
 *     percent floor;
 *   - content/sba/summary.json, the site's own NAICS 721110 extract of SBA's
 *     7(a) and 504 FOIA dataset as of June 30, 2026, published at
 *     /data/sba-hotel-lending.
 *
 * The worked example was recomputed line by line with
 * scripts/check-sba-size-math.mjs before saving: 70 assertions covering both
 * receipts averages for all three companies, the three-year election, the
 * restaurant case, the alternative standard, the labor surplus uplift, the
 * guaranty arithmetic, both inflation adjustments, the dataset's own bands
 * and the template's answer, takeaway, FAQ, source and body-length limits.
 *
 * Deliberately absent: any "typical" portfolio size a lender will bank, any
 * internal cap on how many SBA hotel loans one sponsor can hold at one
 * lender, and any DSCR or leverage figure tied to being small. None of the
 * three is published by anyone.
 *
 * One thing to re-read before changing a number. The ownership tests in
 * 121.301(f)(1) are not symmetrical. (f)(1)(i), where the applicant itself
 * owns more than half of another business, carries no subsector limit;
 * (f)(1)(ii) to (v), which run through an owner of the applicant, only reach
 * a business in the same 3-digit NAICS subsector. The worked example turns on
 * that difference. Do not flatten them into one rule.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "sba-size-standards",
  cluster: "hotel-financing",
  isHub: false,
  title: "SBA Size Standards for Hotel Owners",
  description:
    "The $40.0 million receipts standard for NAICS 721110, the $20 million alternative, which of your other hotels count, and the $3.75 million guaranty cap.",
  h1: "Is my hotel company too big for an SBA loan?",
  lastUpdated: "2026-10-22",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "Is my hotel company too big for an SBA loan?",
    "What is the SBA size standard for a hotel?",
    "How many hotels can I own and still get an SBA loan?",
    "Do my other hotels count against me on an SBA loan?",
    "Can I get a second SBA loan on another hotel?",
    "What is the SBA alternative size standard?",
    "How does SBA calculate annual receipts for a hotel?",
    "Does my restaurant business affect my SBA hotel loan?"
  ],
  answer:
    "Probably not. The size standard for NAICS 721110, Hotels (except Casino Hotels) and Motels, is $40.0 million in average annual receipts for the applicant and its affiliates combined.[1][2] An owner over that line can still qualify on $20 million of tangible net worth and $6.5 million of average net income, a test in force since March 18, 2024.[3][4] What binds first is usually the $3,750,000 guaranty cap.[5]",
  takeaways: [
    "The $40.0 million is a ceiling on a group, not on a hotel. The size standards section says in its own words that the figure is the maximum allowed for a concern and its affiliates.[1][2]",
    "Affiliation has been ownership only since May 11, 2023, and the tests that run through an owner reach only businesses in the same 3-digit NAICS subsector.[6][3]",
    "The alternative standard is the door most portfolio owners use: tangible net worth of $20 million or less and average net income of $6.5 million or less for the last two fiscal years, affiliates included.[3][4]",
    "The real ceiling is money. The SBA portions of all loans to one borrower and its affiliates cap at a $3,750,000 guaranty, and one 7(a) loan caps at $5,000,000.[5][7]",
    "Size is fixed on the day the application is accepted for processing, and growing after that does not disqualify you.[8]"
  ],
  sections: [
    {
      h2: "What size standard applies to a hotel?",
      lead:
        "A hotel sits in NAICS 721110, and its size standard is $40.0 million in average annual receipts.",
      body:
        "SBA sets a standard for every industry code and publishes the table in 13 CFR 121.201. For 721110, Hotels (except Casino Hotels) and Motels, the entry reads $40.0 million, and casino hotels at 721120 get the same. The rest of the subsector gets far less: $9.0 million for bed-and-breakfast inns (721191) and all other traveler accommodation (721199), $10.0 million for RV parks and campgrounds (721211) and $14.0 million for rooming and boarding houses, dormitories and workers' camps (721310). Read twice for this page, through the eCFR versioner API for the October 1, 2026 issue of title 13 and on Cornell's copy, which agree line for line.[1][2]\n\nTwo sentences at the head of that section do the work people get wrong. The standards are expressed either in number of employees or in annual receipts in millions of dollars, so a hotel is tested on revenue, not on rooms or staff. And the figure is the maximum allowed for a concern and its affiliates. That second sentence is what catches portfolio owners.[1]\n\nThe number also moves: the November 17, 2022 inflation rule added 13.65 percent, taking 721110 from $35.0 million to a computed $39.78 million, rounded to $40.0 million and effective December 19, 2022,[9] and those interim provisions were finalized without change on July 19, 2023.[10] Codes measured by headcount use a 24-month employee average instead.[11]"
    },
    {
      h2: "How does SBA count a hotel's receipts?",
      lead:
        "Receipts are total income plus cost of goods sold as reported on the filed Federal income tax return, averaged over five completed fiscal years, or three if the applicant elects it.",
      body:
        "Receipts means all revenue in whatever form received or accrued, reduced by returns and allowances. SBA takes total income plus cost of goods sold as reported on the return, and relies on the return and any amendments filed with the IRS on or before the date of self-certification.[12]\n\nThree exclusions matter to a hotel. Net capital gains and losses are out, so selling a hotel at a gain inside the measured years does not inflate the figure. Taxes collected for and remitted to a taxing authority are out, which is why transient occupancy tax and sales tax collected from guests do not count, though taxes levied on the business itself do. Proceeds from transactions between a concern and its affiliates are out, so an intercompany management fee is not counted twice. Nothing else comes out, payroll taxes and franchise fees included.[12]\n\nThe period of measurement is where an owner has a real choice. The general rule is total receipts over the five most recently completed fiscal years divided by five. But the Business Loan Programs, which the regulation defines to include the 7(a) and 504 programs by name, let a concern in business three or more completed fiscal years elect either the five-year or the three-year average.[12] For a portfolio that grew after 2021 the five-year average is the lower of the two, because it still carries the depressed years."
    },
    {
      h2: "Which of my other hotels count against me?",
      lead:
        "Every hotel company you own more than half of, and every hotel company more than half owned by someone who owns more than half of you, counted at its full receipts rather than your share.",
      body:
        "The final rule effective May 11, 2023 removed affiliation based on management and control, on franchise and license agreements, on identity of interest between close relatives, and the power-to-control principle behind all three. What is left in 13 CFR 121.301(f) is ownership, with a three-digit subsector limit SBA added to restrict affiliates to businesses in the same field.[6][3]\n\nThe six ownership tests are not symmetrical, and the asymmetry decides most hotel cases. If the applicant itself owns more than half of another business, the two are affiliated with no industry limit. Where the link runs through an owner instead, the other business is an affiliate only if it is in the same 3-digit NAICS subsector. Every lodging code above sits in subsector 721, so one individual's two hotel companies are affiliated and that same individual's restaurant company, in subsector 722, is not. Where no owner holds more than half of the applicant the threshold drops to 20 percent. Spouses' and minor children's interests combine, ownership through entities counts pro rata, and options and agreements to merge count as already exercised.[3]\n\nThree traps sit outside that list. Receipts are added average to average, each affiliate in full rather than at your percentage, and across the whole period of measurement rather than only the part after the affiliation arose, so buying into a hotel company in 2025 pulls its 2021 revenue in.[12] The two-entity structure most hotel loans use does not help: the Eligible Passive Company holding the real estate and the Operating Company running the hotel must each be small, and the loan counts against both limits.[13][5] And a new entity holding substantially a predecessor's assets is not a separate concern.[14]"
    },
    {
      h2: "Is there another way to qualify if my receipts are too high?",
      lead:
        "Yes. For 7(a) and 504 an applicant can qualify on the alternative standard instead: $20 million of tangible net worth and $6.5 million of average net income, including affiliates.[3]",
      body:
        "13 CFR 121.301(b) gives a 7(a) or 504 applicant two independent doors and asks it to walk through one. The first is the industry test: small alone, and small with its affiliates against the higher of the two applicable standards. The second is the alternative test: including affiliates, tangible net worth not in excess of $20 million and average net income after Federal income taxes, excluding carry-over losses, not in excess of $6.5 million for the two most recently completed fiscal years. Failing the receipts test does not end the application.[3]\n\nFor a pass-through entity, which is most hotel ownership, the regulation builds a hypothetical corporate tax bill out of the marginal state and Federal rates rather than using book income.[3] Depreciation is usually what keeps a large portfolio's net income under $6.5 million when its receipts are well over $40.0 million.\n\nThe levels are recent. The Small Business Jobs Act of 2010 set an interim standard of $15 million and $5 million. SBA made it permanent effective March 18, 2024, adjusted upward by 34.46 percent for the inflation since 2010.[4]\n\nOne lever is easy to miss. Every applicable size standard for SBA's financial assistance programs, the surety bond program aside, rises 25 percent when the applicant agrees to use all of the assistance within a labor surplus area, taking a hotel's receipts standard to $50.0 million.[3] A jurisdiction needs a two-year unemployment rate of 6.0 percent or higher to be on the Department of Labor's list; the fiscal year 2027 list runs October 1, 2026 through September 30, 2027.[15]"
    },
    {
      h2: "If I am small enough, how much can I actually borrow?",
      lead:
        "Less than the size test implies. The SBA portions of all loans to a borrower and its affiliates cap at a $3,750,000 guaranty, and one 7(a) loan caps at $5,000,000.[5]",
      body:
        "This is the ceiling that stops repeat hotel buyers, and it is not a size standard at all. The aggregate SBA portions of all loans to a single borrower, including its affiliates as defined in 121.301(f), must not exceed a guaranty amount of $3,750,000, and any one 7(a) loan caps at $5,000,000.[5] SBA guarantees 85 percent at or below $150,000 and 75 percent above that, and puts its maximum exposure at $3.75 million.[7] One $5,000,000 loan at 75 percent therefore consumes $3,750,000, the entire cap for the whole group.\n\nSBA's own loan-level data shows how often that binds. Of the 3,879 7(a) loans to hotels and motels approved in fiscal years 2021 through 2025, 499 fell in the $5.0 million and over band, and those 499 total $2,495,000,000, an average of exactly $5,000,000 each. Since $5,000,000 is the program maximum, all 499 sat precisely at the cap: 12.9 percent of hotel 7(a) loans were written at the largest number the statute allows. At the other end, 1,593 of the 3,879, or 41.1 percent, were under $2 million.[16]\n\nWhen the guaranty room is gone the conversation is conventional, not federal. A 504 structure helps, because the bank's first lien carries no SBA guaranty, though the debenture counts. Beyond that it is [bank, credit union, life company, CMBS or bridge debt](/hotel-financing/hotel-lenders-by-type) priced on the hotel."
    },
    {
      h2: "When is my size measured, and what will a lender check?",
      lead:
        "Size is fixed when the application is accepted for processing, or when a Preferred Lender approves the loan, and the evidence is the filed tax returns, the ownership chart and the existing SBA exposure.[8][12]",
      body:
        "13 CFR 121.302 fixes the date: for an ordinary application, the date SBA accepts it for processing, and under the Preferred Lenders Program, the date the lender approves the loan. Paragraph (e) is the part to hold on to, that changes in size after the applicable date will not disqualify an applicant.[8] An acquisition closing before acceptance is inside the calculation; one closing after approval is not. Size is also only one of the five basic eligibility requirements in 13 CFR 120.100.[17]\n\nThe documents are knowable in advance: returns for the measured years for the applicant and every affiliate, with books of account standing in where a year has none;[12] an ownership chart showing percentages and industry codes;[6] and the guaranty outstanding across the group.[5]\n\nWhat is not published is appetite. No bank, credit union or certified development company publishes how many hotels one sponsor may own before it stops lending, how much exposure to one borrower it will carry, or a coverage threshold that moves with portfolio size. That is credit policy, set institution by institution and not disclosed. The one number a borrower can check alone is the industry code, because the gap between $40.0 million and $9.0 million decides small or not small for a property that calls itself an inn.[1]"
    }
  ],
  table: {
    caption: "The numbers that decide whether a hotel owner is small enough for SBA",
    columns: ["Test", "The number", "What it is measured on", "Where it is set"],
    rows: [
      [
        "Industry size standard, NAICS 721110",
        "$40.0 million",
        "Average annual receipts of the applicant and every affiliate, added average to average",
        "13 CFR 121.201[1][12]"
      ],
      [
        "Alternative standard, tangible net worth",
        "$20 million",
        "The applicant including its affiliates",
        "13 CFR 121.301(b)(2)[3]"
      ],
      [
        "Alternative standard, average net income",
        "$6.5 million",
        "After Federal income taxes, excluding carry-over losses, for the two most recently completed fiscal years, including affiliates",
        "13 CFR 121.301(b)(2)[3]"
      ],
      [
        "Labor surplus area increase",
        "25 percent, taking the receipts standard to $50.0 million",
        "Applies when the applicant agrees to use all of the financial assistance inside a labor surplus area",
        "13 CFR 121.301(e)[3][15]"
      ],
      [
        "Aggregate SBA guaranty to one borrower",
        "$3,750,000",
        "The SBA portions of all loans to the borrower and its affiliates",
        "13 CFR 120.151[5]"
      ],
      [
        "Maximum single 7(a) loan",
        "$5,000,000",
        "One loan, whatever the group's size",
        "13 CFR 120.151[5][7]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet prints the two SBA numbers a size-eligible hotel borrower actually prices against: the 7(a) maximum allowable rate of 10.00%, which is the 7.00% Prime plus the 3.00% spread cap SBA sets above $350,000, and the 25-year 504 debenture at 6.54% as of September 10, 2026.[18] Our own extract of SBA's loan-level data, at /data/sba-hotel-lending, shows why the size test is rarely the binding one: 499 of the 3,879 7(a) hotel loans approved in fiscal years 2021 through 2025 were written at exactly the $5,000,000 program maximum.[16]"
  },
  workedExample: {
    label: "Hypothetical: eleven hotels in three companies, buying a twelfth",
    body:
      "Hypothetical, not a transaction. One individual owns 100 percent of the applicant, a company holding four hotels; 100 percent of a second holding four; 60 percent of a third holding three; and 100 percent of a restaurant company. The hotel companies are all NAICS 721110.\n\nWho is an affiliate. The second and third hotel companies are: one individual owns more than half of the applicant and of each of them, and all three sit in subsector 721.[3] The 60 percent stake counts the same as the 100 percent stake, and the receipts come in whole.[12] The restaurant company is not, because 722 is not 721 and the test running through an individual owner reaches only the same subsector. Had the applicant held it directly, there would be no subsector limit.[3]\n\nThe five-year test, on receipts for fiscal 2021 through 2025. Applicant: $9,200,000, $12,400,000, $14,100,000, $15,300,000, $16,000,000, averaging $13,400,000. Second: $8,600,000, $11,800,000, $13,500,000, $14,600,000, $15,500,000, averaging $12,800,000. Third: $6,100,000, $8,300,000, $9,600,000, $10,400,000, $11,100,000, averaging $9,100,000. Added average to average the group is at $35,300,000, $4,700,000 under the standard. Small.[1][12]\n\nThe three-year test, which is the applicant's choice. Taking 2023 to 2025 only, the three averages are $15,133,333, $14,533,333 and $10,366,667, a group total of $40,033,333. That is $33,333 over the line. Not small: the same eleven hotels, the same returns, and the election worth $4,733,333 of measured receipts.[12]\n\nHad the applicant held the restaurant company's $7,400,000 of average receipts, the five-year figure would be $42,700,000, $2,700,000 over, leaving the alternative test as the only door. This group passes that anyway: tangible net worth $18,400,000 and average net income after Federal income taxes for the two most recent fiscal years $4,900,000, each $1,600,000 inside its line.[3]\n\nWhat actually stops the loan. The applicant carries $2,100,000 of SBA guaranty on an existing 7(a) loan and the second company $1,200,000, a total of $3,300,000 against the $3,750,000 cap. The room left is $450,000, which at 75 percent supports a gross 7(a) loan of $600,000.[5][7] On a hotel purchase that is not a financing: comfortably small, completely out of program. A county on the fiscal year 2027 labor surplus area list would lift the receipts standard to $50.0 million, fixing a size problem this group does not have and doing nothing about the cap.[15]"
  },
  faq: [
    {
      q: "What is the SBA size standard for a hotel?",
      a: "$40.0 million in average annual receipts for NAICS 721110, Hotels (except Casino Hotels) and Motels, measured across the applicant and all its affiliates together.[1][2]"
    },
    {
      q: "How many hotels can I own and still get an SBA loan?",
      a: "No limit on the count. The tests are combined receipts under $40.0 million, or $20 million tangible net worth and $6.5 million net income, plus the $3,750,000 guaranty cap.[1][3][5]"
    },
    {
      q: "Do my other hotels' revenues count against me?",
      a: "Yes, if they are affiliates by ownership under 13 CFR 121.301(f) and sit in subsector 721. An affiliate's receipts are added in full, not at your percentage.[3][12]"
    },
    {
      q: "Does my restaurant or gas station business count?",
      a: "Only if the applicant entity itself owns more than half of it. Where an individual owns both, it counts only if it is in the same 3-digit NAICS subsector as the applicant.[3]"
    },
    {
      q: "Can I use three years of receipts instead of five?",
      a: "Yes. For 7(a) and 504, a concern in business three or more completed fiscal years may elect either the five-year or the three-year average.[12]"
    },
    {
      q: "Does the occupancy tax I collect count as receipts?",
      a: "No. Taxes collected for and remitted to a taxing authority are excluded, as are net capital gains and payments between a concern and its affiliates. Payroll taxes are not.[12]"
    },
    {
      q: "Can I get a second SBA loan on another hotel?",
      a: "Only within the cap. All SBA portions of loans to the borrower and its affiliates are limited to a $3,750,000 guaranty, so one $5,000,000 loan at 75 percent uses the whole allowance.[5][7]"
    },
    {
      q: "What if my company grows after I apply?",
      a: "It does not matter. Size is determined when the application is accepted for processing, or when a Preferred Lender approves the loan; later changes do not disqualify an applicant.[8]"
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "13 CFR 121.201, What size standards has SBA identified by North American Industry Classification System codes? The header sentences on receipts in millions and the maximum for a concern and its affiliates, and subsector 721: 721110 and 721120 at $40.0 million, 721191 and 721199 at $9.0 million, 721211 at $10.0 million, 721214 at $9.0 million and 721310 at $14.0 million",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-13.xml?part=121&section=121.201",
      publisher: "Code of Federal Regulations, via the eCFR versioner API, October 1, 2026 issue of title 13",
      accessed: "2026-10-22"
    },
    {
      n: 2,
      label: "13 CFR 121.201, the same table read a second time as a cross-check, agreeing on every line of subsector 721",
      url: "https://www.law.cornell.edu/cfr/text/13/121.201",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-22"
    },
    {
      n: 3,
      label:
        "13 CFR 121.301, What size standards and affiliation principles are applicable to financial assistance programs? Paragraph (a)'s two criteria, (b)(2)'s $20 million tangible net worth and $6.5 million average net income with the pass-through gross-up in (b)(2)(i) to (iii), (e)'s 25 percent labor surplus area increase, and (f)(1)'s ownership tests, (f)(2)'s present effect for options, and (f)(3)'s counting of every domestic and foreign affiliate",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-13.xml?part=121&section=121.301",
      publisher: "Code of Federal Regulations, via the eCFR versioner API, October 1, 2026 issue of title 13",
      accessed: "2026-10-22"
    },
    {
      n: 4,
      label:
        "Small Business Size Standards: Adjustment of Alternative Size Standard for SBA's 7(a) and CDC/504 Loan Programs for Inflation; and Surety Bond Limits: Adjustments for Inflation, 89 FR 11703 (February 15, 2024), effective March 18, 2024: the Jobs Act interim standard of $15 million and $5 million, the 34.46 percent inflation adjustment to $20 million and $6.5 million, and the adoption of the July 28, 2023 proposal without change",
      url: "https://www.govinfo.gov/content/pkg/FR-2024-02-15/html/2024-02776.htm",
      publisher: "U.S. Small Business Administration, in the Federal Register via govinfo",
      accessed: "2026-10-22"
    },
    {
      n: 5,
      label:
        "13 CFR 120.151, What is the statutory limit for total loans to a Borrower? The $3,750,000 aggregate guaranty across a single borrower and its affiliates as defined in 121.301(f), the $5,000,000 maximum for any one 7(a) loan, and the rule that an Eligible Passive Company's loan applies to the limit of both it and the Operating Company",
      url: "https://www.law.cornell.edu/cfr/text/13/120.151",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-22"
    },
    {
      n: 6,
      label:
        "Affiliation and Lending Criteria for the SBA Business Loan Programs, 88 FR 21074 (April 10, 2023), effective May 11, 2023: the removal of affiliation based on management and control, franchise and license agreements and identity of interest between close relatives, and the preamble at 21079 on adding the three-digit subsector limit to restrict affiliates to businesses in the same field",
      url: "https://www.govinfo.gov/content/pkg/FR-2023-04-10/html/2023-07173.htm",
      publisher: "U.S. Small Business Administration, in the Federal Register via govinfo",
      accessed: "2026-10-22"
    },
    {
      n: 7,
      label: "7(a) loan program: terms, conditions and eligibility, for the $5 million maximum loan, the 85 percent guaranty at or below $150,000, the 75 percent guaranty above it and SBA's stated maximum exposure of $3.75 million",
      url: "https://www.sba.gov/sba-lenders",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-10-22"
    },
    {
      n: 8,
      label:
        "13 CFR 121.302, When does SBA determine the size status of an applicant? The date the application is accepted for processing, the Preferred Lenders Program exception at the date of the lender's approval, and paragraph (e), that changes in size afterwards do not disqualify an applicant",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-13.xml?part=121&section=121.302",
      publisher: "Code of Federal Regulations, via the eCFR versioner API, October 1, 2026 issue of title 13",
      accessed: "2026-10-22"
    },
    {
      n: 9,
      label:
        "Small Business Size Standards: Adjustment of Monetary-Based Size Standards, Disadvantage Thresholds, and 8(a) Eligibility Thresholds for Inflation, 87 FR 69118 (November 17, 2022), effective December 19, 2022: the 13.65 percent increase, and the table entry moving NAICS 721110 from $35.0 million to a computed $39.78 million, adopted as $40.0 million",
      url: "https://www.govinfo.gov/content/pkg/FR-2022-11-17/html/2022-24595.htm",
      publisher: "U.S. Small Business Administration, in the Federal Register via govinfo",
      accessed: "2026-10-22"
    },
    {
      n: 10,
      label:
        "Small Business Size Standards: Adjustment of Monetary-Based Size Standards, Disadvantage Thresholds, and 8(a) Eligibility Thresholds for Inflation, 88 FR 46048 (July 19, 2023), the final rule that finalized the November 17, 2022 interim provisions without change",
      url: "https://www.govinfo.gov/content/pkg/FR-2023-07-19/html/2023-15078.htm",
      publisher: "U.S. Small Business Administration, in the Federal Register via govinfo",
      accessed: "2026-10-22"
    },
    {
      n: 11,
      label: "13 CFR 121.106, How does SBA calculate number of employees? The average across the pay periods of the preceding completed 24 calendar months, including affiliates",
      url: "https://www.law.cornell.edu/cfr/text/13/121.106",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-22"
    },
    {
      n: 12,
      label:
        "13 CFR 121.104, How does SBA calculate annual receipts? The total income plus cost of goods sold definition, the exclusions for net capital gains, taxes collected and remitted and transactions with affiliates, (a)(1)'s reliance on the filed Federal income tax return, (c)(1)'s five-year period of measurement, (c)(4)'s three-year election for the Business Loan Programs, and (d)'s aggregation of affiliate receipts across the whole period of measurement",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-13.xml?part=121&section=121.104",
      publisher: "Code of Federal Regulations, via the eCFR versioner API, October 1, 2026 issue of title 13",
      accessed: "2026-10-22"
    },
    {
      n: 13,
      label: "13 CFR 120.111, What conditions must an Eligible Passive Company satisfy? Paragraph (a)(2), that the Eligible Passive Company and the Operating Company each must be small under part 121",
      url: "https://www.law.cornell.edu/cfr/text/13/120.111",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-22"
    },
    {
      n: 14,
      label: "13 CFR 121.105, How does SBA define business concern or concern? Paragraph (c), that a firm holding substantially the same assets or liabilities as a predecessor is not a separate concern and the predecessor's receipts are taken into account",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-13.xml?part=121&section=121.105",
      publisher: "Code of Federal Regulations, via the eCFR versioner API, October 1, 2026 issue of title 13",
      accessed: "2026-10-22"
    },
    {
      n: 15,
      label: "Labor Surplus Area, the fiscal year 2027 list in effect October 1, 2026 through September 30, 2027, built on unemployment data from January 2024 through December 2025, with a 6.0 percent floor for classification",
      url: "https://www.dol.gov/agencies/eta/lsa",
      publisher: "U.S. Department of Labor, Employment and Training Administration",
      accessed: "2026-10-22"
    },
    {
      n: 16,
      label: "SBA loans to hotels: who lends, how much, and where. Our extract of SBA's 7(a) and 504 FOIA dataset filtered to NAICS 721110, as of June 30, 2026: 3,879 7(a) hotel loans approved in fiscal years 2021 through 2025, of which 499 totalling $2,495,000,000 fell in the $5.0 million and over band, and 1,593 under $2 million",
      url: "/data/sba-hotel-lending",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-10-22"
    },
    {
      n: 17,
      label: "13 CFR 120.100, What are the basic eligibility requirements for all applicants for SBA business loans? Including (d), small under the size requirements of part 121 including affiliates",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-13.xml?part=120&section=120.100",
      publisher: "Code of Federal Regulations, via the eCFR versioner API, October 1, 2026 issue of title 13",
      accessed: "2026-10-22"
    },
    {
      n: 18,
      label: "Matthews Hotel Markets October 2026 rate sheet, the SBA rows",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-10-22"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/sba-franchise-directory",
      "/hotel-financing/lenders-under-5-million",
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/bank-cre-concentration-limits",
      "/hotel-financing/usda-b-and-i-loans",
      "/buy-a-hotel/how-much-money-do-you-need"
    ],
    glossary: [
      "/glossary/sba-7a",
      "/glossary/sba-504"
    ],
    data: [
      "/rates",
      "/data/sba-hotel-lending",
      "/data/hotel-financing-statistics"
    ]
  },
  cta: {
    label: "Ask what your group can borrow",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets arranges SBA 7(a) and 504 debt alongside bank, CMBS, life company and bridge quotes, so a group that has run out of guaranty room at $3,750,000 sees the conventional number next to the program one."
};

export default page;
