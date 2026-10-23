/**
 * Can I use New Markets Tax Credits on a hotel?
 * Answer page: /hotel-financing/new-markets-tax-credits
 *
 * Written 2026-10-23 from 26 U.S.C. 45D, 1397C, 144 and 168 on Cornell LII;
 * 26 CFR 1.45D-1 read through the eCFR versioner API for the 2026-10-01 issue
 * of title 26; the CY 2026 Notice of Allocation Availability at 91 FR 58526
 * (September 15, 2026), read as the govinfo HTML; the CDFI Fund's September
 * 17, 2026 news release; the IRS page on the credit being made permanent; and
 * the CDFI Fund's FY 2025 NMTC Public Data Release (2003-2023 data file and
 * summary report), all read that day. Not tax advice.
 *
 * Every figure recomputed by scripts/check-nmtc-math.mjs.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "new-markets-tax-credits",
  cluster: "hotel-financing",
  isHub: false,
  title: "New Markets Tax Credits for Hotels",
  h1: "Can I use New Markets Tax Credits on a hotel?",
  description:
    "Whether a hotel qualifies for the New Markets Tax Credit: the census tract test, the 39 percent credit over 7 years, the exclusions, the 7-year hold.",
  lastUpdated: "2026-10-23",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Can I use New Markets Tax Credits on a hotel?",
    "Does a hotel qualify for the New Markets Tax Credit?",
    "How do I find a CDE with New Markets Tax Credit allocation for my hotel project?",
    "Is my hotel site in a New Markets Tax Credit low-income community?",
    "How much is a New Markets Tax Credit worth on a hotel conversion?",
    "What happens to New Markets Tax Credits if I sell the hotel before 7 years?",
    "Can I combine New Markets Tax Credits with historic tax credits on a hotel?",
    "Is the New Markets Tax Credit permanent now?"
  ],
  answer:
    "Sometimes. A hotel is not an excluded business, so a hotel in a qualifying low-income census tract can be financed with New Markets Tax Credits, worth 39 percent of the investment spread over 7 years.[1] The credit is rationed, though. Treasury put $5 billion of authority into the round whose applications are due November 10, 2026, and it goes to community development entities, not to hotel owners.[2]",
  takeaways: [
    "The site has to sit in a qualifying census tract: a poverty rate of at least 20 percent, or median family income no more than 80 percent of the state or metro figure.[1]",
    "A hotel is not on the excluded-business list, but a private or commercial golf course, a gambling facility and an off-premises liquor store are.[3]",
    "The credit totals 39 percent of the qualified equity investment: 5 percent on each of the first 3 allowance dates and 6 percent on each of the last 4.[1]",
    "The investor in the community development entity claims the credit, not the hotel owner. What the owner gets is cheaper capital, and no public source prices it.[1]",
    "Everything has to hold for 7 years. A recapture event inside that window claws the credits back with interest.[1][3]"
  ],
  sections: [
    {
      h2: "Does a hotel qualify for the New Markets Tax Credit?",
      lead:
        "A hotel qualifies as a trade or business, because the rules exclude a specific list of businesses by name and lodging is not on it.",
      body:
        "The regulation says a qualified business means any trade or business, then excludes a short list: a private or commercial golf course, a country club, a massage parlor, a hot tub facility, a suntan facility, a racetrack or other facility used for gambling, and any store whose principal business is the sale of alcoholic beverages for consumption off the premises.[3] A hotel is not on that list. The list reaches the credit through section 1397C, whose qualified business definition section 45D borrows and which points at the facilities described in section 144(c)(6)(B).[4][5] A hotel bar is not a problem: the alcohol exclusion is written for off-premises sales.[5]\n\nTwo hotel shapes do run into it. A resort that operates its own golf course is running an excluded business alongside the hotel. The regulation lets a community development entity treat a portion of a business as the qualifying business if that portion would pass on its own and keeps separate books and records, but the proceeds then have to be used for that portion and not the rest.[3] The second is leasing: where the qualifying business is the rental of real property, the entity's loan stops being a qualified investment to the extent a lessee is an excluded business.[3] Price ground-floor retail in early.\n\nRenting real property is a qualified business only if the property is not residential rental property and carries substantial improvements.[3] A transient hotel clears that: a unit in a hotel where more than half the units are used on a transient basis is not a dwelling unit.[6]"
    },
    {
      h2: "Is the hotel's site in a qualifying low-income community?",
      lead:
        "This is the test that disqualifies most hotels, and the census tract the building sits in decides it, not the owner and not the brand.",
      body:
        "Section 45D(e) defines a low-income community as a population census tract where either the poverty rate is at least 20 percent, or median family income does not exceed 80 percent of statewide median family income.[1] Inside a metropolitan area the income test runs against the greater of the statewide or metropolitan figure, which makes a tract in a wealthy metro harder to qualify.[1] The threshold rises to 85 percent in high-migration rural counties.[1]\n\nNothing about the hotel itself changes this. A well-located select-service hotel at a suburban interchange usually sits in a tract that does not qualify, so this is the first thing to check, before any conversation with a lender or a community development entity. The projects that clear it tend to be downtown conversions, small-town hotels and redevelopment sites.\n\nRural sites get a modest advantage. The CY 2026 notice says the CDFI Fund will endeavour to put 20 percent of the investments made with round proceeds into non-metropolitan counties, under section 102(b) of the Tax Relief and Health Care Act of 2006.[2] That does not lower the tract test. It means a qualifying rural project competes for a reserved share."
    },
    {
      h2: "What tests does the hotel entity have to pass every year?",
      lead:
        "The hotel entity has to be a qualified active low-income community business, which is five tests it must meet for each year of the credit period.",
      body:
        "The five are: at least 50 percent of gross income from the active conduct of a qualified business within a low-income community; at least 40 percent of the use of its tangible property within one; at least 40 percent of its employees' services performed in one; less than 5 percent of the average of its aggregate unadjusted property bases in collectibles; and less than 5 percent in nonqualified financial property.[3]\n\nA single-site hotel in a qualifying tract passes the first three almost by construction. The 5 percent nonqualified financial property cap is the one that bites a construction deal, because cash counts toward it. Reasonable working capital in cash is carved out, and proceeds to be spent on construction of real property within 12 months of the investment count as reasonable working capital.[3] A draw schedule that runs past 12 months puts the test at risk.\n\nThe community development entity has a test of its own. Substantially all of the investment, which the regulation defines as at least 85 percent, has to be out in qualified low-income community investments in each annual period of the 7-year credit period.[3] The entity is treated as meeting the business tests for the life of the investment if it reasonably expected at the outset that the business would pass throughout.[3]"
    },
    {
      h2: "How much is the credit worth, and who actually claims it?",
      lead:
        "The credit is 39 percent of the qualified equity investment, and the taxpayer who put money into the community development entity claims it, not the hotel.",
      body:
        "There are 7 credit allowance dates: the date the investment is made and each of the 6 anniversaries.[1] The applicable percentage is 5 percent on each of the first 3 and 6 percent on each of the remaining 4, so 15 plus 24 gives 39 percent.[1] On a $10,000,000 qualified equity investment that is $3,900,000 of federal credits, which the table below sets out year by year.[1]\n\nThat $3,900,000 is not money the hotel receives. It is a reduction in someone else's federal tax over 7 years, and the project sees the benefit only to the extent an investor pays for those credits and that money arrives as cheaper capital. What investors pay per dollar of credit is negotiated privately and no public source publishes it, so this page prints no net subsidy figure. Ask the community development entity what its structure delivers in dollars to the project, in writing.\n\nThe credit belongs to the holder of the equity investment, and recapture reaches both the original purchaser and every later holder, which is why these structures restrict transfers for the whole 7 years.[3] None of this changes how a senior lender sizes its loan. That still runs off the hotel's [net operating income](/glossary/noi) and the [debt service coverage ratio](/glossary/dscr) the lender tests. A New Markets structure changes the equity the project has to raise, not the price of the debt."
    },
    {
      h2: "Who gets the allocation, and how much is there?",
      lead:
        "Community development entities apply for allocation and hotel owners do not, and the current round put $5 billion of authority on the table.",
      body:
        "The CDFI Fund runs a competitive round. For calendar year 2026 it published its Notice of Allocation Availability in the Federal Register on September 15, 2026, announcing $5 billion of allocation authority and saying it anticipates up to $100 million of tax credit investment authority per allocatee.[2] Applications are due November 10, 2026 at 5:00 p.m. eastern time, and an applicant had to be a certified community development entity at publication or have applied for certification by September 22, 2026.[2]\n\nAs of its September 17, 2026 news release the Fund said it had completed 21 allocation rounds and awarded $91 billion of tax credit allocation authority since the program began in 2000.[7]\n\nIt is also no longer temporary. The One Big Beautiful Bill Act of 2025, Public Law 119-21, made the credit permanent, and the notice cites section 45D(f)(1)(D) as the authority for the $5 billion it is offering.[2][8] The IRS says the same law changed the limit on carryforwards of unused allocation to an up to five-year rule, where unused carryovers were previously allowed through 2030; that page was last reviewed September 15, 2026.[8] For an owner this means searching for an entity that holds allocation and wants the deal, which is not the same exercise as shopping a loan."
    },
    {
      h2: "What has the program funded, and does it fund hotels?",
      lead:
        "The CDFI Fund publishes project-level data, and it does not say how many of the projects were hotels, because the file carries no industry code.",
      body:
        "The FY 2025 public data release, updated August 7, 2026, lists 8,439 projects with origination years running from 2001 to 2023.[9] Those projects received $71,018,792,859 of qualified low-income community investments against $127,615,323,405 of estimated total project cost.[9] The Fund's summary report for the same release prints $71.019 billion and the same project count.[10]\n\nThe median project received $5,362,148, which is the size range a single hotel conversion occupies.[9] Of the 8,439 projects, 2,938 are coded as real estate and 3,960 as non-real estate.[9] 6,776 sat in metropolitan counties and 1,663 in non-metropolitan ones, which is 19.7 percent and close to the 20 percent the CY 2026 notice aims for.[2][9]\n\nWhat the file does not carry is an industry field. Its only classification of the business is whether the project was a real estate investment, a non-real estate investment, an investment in another community development entity, or a special purpose entity, and the release's own data dictionary describes only the first three of those codes.[9] Neither the data file nor the summary report mentions hotels, lodging or NAICS codes anywhere.[9][10] So no public source states how many New Markets projects were hotels, and this page does not estimate it. Ask an entity for its own closed hotel deals by name."
    },
    {
      h2: "What does the 7-year compliance period do if I want to sell?",
      lead:
        "Selling the hotel is not itself a recapture event, but repaying the investment out of a sale starts a clock that can cause one.",
      body:
        "Recapture runs for the 7-year period that begins on the date the qualified equity investment is issued.[1] The regulation lists three recapture events: the entity ceases to be a community development entity, the proceeds cease to satisfy the substantially-all requirement, or the investment is redeemed or otherwise cashed out by the entity.[3] A sale of the hotel is not on that list. The exposure is indirect: a sale that pays off the entity's loan hands it cash, and amounts received in payment of principal have to be reinvested in another qualified investment within 12 months to count as continuously invested.[3] Miss that and the 85 percent test fails, which is a recapture event.\n\nThree reliefs matter. Amounts the entity receives during the seventh year of the credit period need not be reinvested at all.[3] Bankruptcy of the entity is not a recapture event.[3] And the Commissioner may waive a requirement or extend a deadline where that does not materially frustrate the purposes of the statute.[3]\n\nThe recapture amount is the credit decrease for prior years plus interest at the section 6621 underpayment rate, and that interest is not deductible.[1] By statute the increased tax falls on the investor holding the investment. Whether the hotel owner ends up paying for it is a question for the deal documents, which are private. Plan the hold for 7 years."
    }
  ],
  table: {
    caption: "New Markets Tax Credit allowance schedule on a $10,000,000 qualified equity investment",
    columns: ["Credit allowance date", "Statutory percentage", "Credit claimed", "Cumulative"],
    rows: [
      ["Date of the investment", "5%", "$500,000", "$500,000"],
      ["First anniversary", "5%", "$500,000", "$1,000,000"],
      ["Second anniversary", "5%", "$500,000", "$1,500,000"],
      ["Third anniversary", "6%", "$600,000", "$2,100,000"],
      ["Fourth anniversary", "6%", "$600,000", "$2,700,000"],
      ["Fifth anniversary", "6%", "$600,000", "$3,300,000"],
      ["Sixth anniversary", "6%", "$600,000", "$3,900,000"],
      ["Total over 7 years", "39%", "$3,900,000", "$3,900,000"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet puts the 10-year Treasury at 5.29% and Prime at 7.00% as of September 30, 2026, and carries no New Markets row, because what a community development entity charges on a qualified investment is negotiated deal by deal and is not published anywhere.[11]"
  },
  workedExample: {
    label: "Hypothetical: a 110-key conversion in a qualifying tract, $10,000,000 of New Markets investment",
    body:
      "Assume a developer converts a vacant downtown building into a 110-key hotel for $26,000,000 all in. The tract has a 24 percent poverty rate, so it is a low-income community.[1] A community development entity with allocation puts a $10,000,000 qualified equity investment into the project. Every figure here is an assumption except the statutory percentages and thresholds.\n\nThe credit. 5 percent on each of the first 3 allowance dates is $500,000 a year, and 6 percent on each of the last 4 is $600,000 a year. $1,500,000 plus $2,400,000 is $3,900,000 over 7 years, which is 39 percent of the $10,000,000.[1]\n\nThe entity's test. At least 85 percent of the $10,000,000, so $8,500,000, has to be out in qualified low-income community investments in every annual period of the 7 years.[3]\n\nThe hotel entity's test. On a $26,000,000 property base, less than 5 percent, so under $1,300,000, may sit in nonqualified financial property.[3] Construction proceeds to be spent within 12 months count as reasonable working capital and stay outside that cap, so an 11-month build is safe on this point and an 18-month one is not.[3]\n\nSelling early. If the owner sells in year 5 and the entity's loan is repaid, the credits already claimed are $500,000 times 3 plus $600,000 times 2, which is $2,700,000. The entity then has 12 months to reinvest, and if it does not, that $2,700,000 is recaptured with interest at the section 6621 rate.[1][3] A sale in year 7 raises no such question: seventh-year repayments need no reinvestment.[3]"
  },
  faq: [
    {
      q: "Can I apply to the CDFI Fund for New Markets Tax Credits myself?",
      a: "No. Allocation goes to certified community development entities, which apply in a competitive round. For calendar year 2026 applications are due November 10, 2026. An owner's route is to find an entity that already holds allocation.[2]"
    },
    {
      q: "Is a hotel an excluded business for the New Markets Tax Credit?",
      a: "No. The excluded list names golf courses, country clubs, massage parlors, hot tub and suntan facilities, racetracks, gambling facilities and off-premises liquor stores. Lodging is not on it.[3]"
    },
    {
      q: "What if my resort has a golf course?",
      a: "A private or commercial golf course is an excluded business. An entity may treat the hotel portion as the qualifying business if it would pass on its own and keeps separate books, but the proceeds must then be used for that portion.[3]"
    },
    {
      q: "Is a hotel residential rental property under these rules?",
      a: "No. A unit in a hotel where more than half the units are used on a transient basis is not a dwelling unit, so the building is not residential rental property and the rental route stays open.[6]"
    },
    {
      q: "What happens if I sell the hotel inside the 7 years?",
      a: "A sale is not itself a recapture event. But repaying the investment gives the entity 12 months to reinvest, and if it does not, the substantially-all test fails and the credits are recaptured with interest.[1][3]"
    },
    {
      q: "Is the New Markets Tax Credit permanent now?",
      a: "Yes. Public Law 119-21, the One Big Beautiful Bill Act of 2025, made it permanent, and the CY 2026 notice offers $5 billion under section 45D(f)(1)(D). The IRS notes an up to five-year carryforward for unused allocation.[2][8]"
    },
    {
      q: "How many New Markets projects have been hotels?",
      a: "No public source says. The CDFI Fund's project-level file lists 8,439 projects through 2023 but carries no industry code, only whether the project was real estate. Neither it nor the summary report mentions lodging.[9][10]"
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "26 U.S.C. 45D, New markets tax credit: the 5 percent and 6 percent applicable percentages and the 7 credit allowance dates (subsections (a)(2) and (a)(3)), the national limitation of $5,000,000,000 for each calendar year after 2019 (subsection (f)(1)), the low-income community definition with its 20 percent poverty rate and 80 percent median family income tests and the 85 percent high-migration rural figure (subsection (e)), and the 7-year recapture period with interest at the section 6621 underpayment rate (subsection (g))",
      url: "https://www.law.cornell.edu/uscode/text/26/45D",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-23"
    },
    {
      n: 2,
      label:
        "Funding Opportunity; Notice of Allocation Availability Inviting Applications for the Calendar Years 2026 Allocation Round of the New Markets Tax Credit Program, 91 FR 58526 (September 15, 2026): $5 billion of allocation authority under IRC 45D(f)(1)(D) and the One Big Beautiful Bill Act of 2025 (P.L. 119-21), up to $100 million anticipated per allocatee, the November 10, 2026 application deadline and September 22, 2026 certification deadline in Table 1, and the 20 percent non-metropolitan target under section 102(b) of the Tax Relief and Health Care Act of 2006",
      url: "https://www.govinfo.gov/content/pkg/FR-2026-09-15/html/2026-18883.htm",
      publisher: "Community Development Financial Institutions Fund, Department of the Treasury, via govinfo",
      accessed: "2026-10-23"
    },
    {
      n: 3,
      label:
        "26 CFR 1.45D-1, New markets tax credit (published December 28, 2004, as amended), read through the eCFR versioner API for the October 1, 2026 issue of title 26: substantially all defined as at least 85 percent for each annual period of the 7-year credit period (paragraph (c)(5)(i)), the five qualified active low-income community business tests (paragraph (d)(4)(i)), the portions-of-business rule (paragraph (d)(4)(iii)), the construction working capital rule (paragraph (d)(4)(i)(E)(2)), the qualified business exclusions and the rental and lessee rules (paragraph (d)(5)), the reasonable-expectations rule (paragraph (d)(6)(i)), the 12-month reinvestment rule and seventh-year relief (paragraph (d)(2)(i)), and the recapture events, the bankruptcy carve-out and the waiver provision (paragraph (e))",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-26.xml?part=1&section=1.45D-1",
      publisher: "Code of Federal Regulations, via the eCFR versioner API",
      accessed: "2026-10-23"
    },
    {
      n: 4,
      label:
        "26 U.S.C. 1397C, Enterprise zone business: subsection (d), the qualified business definition that section 45D borrows, including the rental of real property rule in (d)(2) and the exclusion at (d)(5)(A) of any trade or business consisting of the operation of a facility described in section 144(c)(6)(B)",
      url: "https://www.law.cornell.edu/uscode/text/26/1397C",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-23"
    },
    {
      n: 5,
      label:
        "26 U.S.C. 144(c)(6)(B): the facilities whose operation is an excluded trade or business, namely any private or commercial golf course, country club, massage parlor, hot tub facility, suntan facility, racetrack or other facility used for gambling, or any store the principal business of which is the sale of alcoholic beverages for consumption off premises",
      url: "https://www.law.cornell.edu/uscode/text/26/144",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-23"
    },
    {
      n: 6,
      label:
        "26 U.S.C. 168(e)(2): residential rental property is a building 80 percent or more of whose gross rental income is from dwelling units, and a dwelling unit does not include a unit in a hotel, motel or other establishment more than one-half of the units in which are used on a transient basis",
      url: "https://www.law.cornell.edu/uscode/text/26/168",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-23"
    },
    {
      n: 7,
      label:
        "CDFI Fund Opens CY 2026 Round of New Markets Tax Credit Program (September 17, 2026): $5 billion of allocation authority, the round's deadlines, and the statement that the CDFI Fund has completed 21 allocation rounds and awarded $91 billion in tax credit allocation authority since the program began in 2000",
      url: "https://www.cdfifund.gov/news/741",
      publisher: "Community Development Financial Institutions Fund, Department of the Treasury",
      accessed: "2026-10-23"
    },
    {
      n: 8,
      label:
        "New markets credit updated and made permanent (page last reviewed or updated September 15, 2026): P.L. 119-21, the One Big Beautiful Bill Act, made the section 45D credit permanent and changed the limit on carryforwards of unused credit amounts to an up to five-year carryforward, where unused carryovers were previously allowed through 2030",
      url: "https://www.irs.gov/forms-pubs/new-markets-credit-updated-and-made-permanent",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-23"
    },
    {
      n: 9,
      label:
        "FY 2025 NMTC Public Data Release: 2003-2023 Data File (updated August 7, 2026), Projects sheet: 8,439 projects with origination years 2001 to 2023, $71,018,792,859 of project QLICI amounts, $127,615,323,405 of estimated total project cost, a median project QLICI of $5,362,148, QALICB types of 2,938 real estate and 3,960 non-real estate, and 6,776 metropolitan against 1,663 non-metropolitan projects; the Data Point Description sheet carries no industry or NAICS field",
      url: "https://www.cdfifund.gov/system/files?file=2026-08/NMTC_Public_Data_Release_includes_FY2003_FY_2023_Data_Final_08062026.xlsx",
      publisher: "Community Development Financial Institutions Fund, Department of the Treasury",
      accessed: "2026-10-23"
    },
    {
      n: 10,
      label:
        "FY 2025 NMTC Public Data Release: 2003-2023 Summary Report (updated August 7, 2026): $71.019 billion of total QLICIs and 8,439 projects, and no breakdown of investments by industry, NAICS code or property type",
      url: "https://www.cdfifund.gov/system/files?file=2026-08/2025_NMTC_Public_Data_Release_Summary_FY2003toFY2023_Final_08052026.pdf",
      publisher: "Community Development Financial Institutions Fund, Department of the Treasury",
      accessed: "2026-10-23"
    },
    {
      n: 11,
      label: "Matthews Hotel Markets October 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-10-23"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/historic-tax-credits",
      "/hotel-financing/opportunity-zones",
      "/hotel-financing/c-pace-financing",
      "/hotel-financing/brand-conversion-financing",
      "/hotel-financing/capital-stack",
      "/hotel-financing/usda-b-and-i-loans",
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/refinance-or-sell"
    ],
    glossary: [
      "/glossary/noi",
      "/glossary/dscr"
    ],
    data: [
      "/rates",
      "/tools/hotel-loan-sizing-calculator"
    ]
  },
  cta: {
    label: "Talk to the capital markets desk",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets checks the census tract before anything else on a New Markets question, because a hotel outside a qualifying tract has no deal to structure no matter how good the project is."
};

export default page;
