/**
 * Does my hotel have to report energy use or cut its carbon emissions?
 * Answer page: /hotel-industry/energy-benchmarking-and-emissions-limits
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-10-08):
 *   - Local Law 97 of 2019, read as the City Council's own enacted text on
 *     nyc.gov, for the covered-building test, the reporting duty and both
 *     penalties;
 *   - 1 RCNY 103-14, the Department of Buildings rule, for the emissions
 *     factors that apply to the ENERGY STAR Portfolio Manager property type
 *     "Hotel" in each compliance period, the greenhouse gas coefficients for
 *     2030-2034, and the mitigation and mediated-resolution routes. The rule's
 *     2030-2034 factor for a hotel (0.003850668) is STRICTER than the
 *     statutory occupancy-group R-1 figure (0.00526), so the statute alone is
 *     not a safe read for any year after 2029;
 *   - the Department of Buildings benchmarking page, for Local Law 84 of 2009
 *     as amended, the letter grade under Local Laws 33 and 95, and the
 *     benchmarking and label penalties;
 *   - RCW 19.27A.200, .210 and .250, which name hotels and motels in the
 *     tier definitions, set the June 2026, 2027 and 2028 compliance dates by
 *     size, and set the penalties;
 *   - the Boston BERDO page and the California Energy Commission's
 *     benchmarking program page;
 *   - EPA ENERGY STAR, for Portfolio Manager;
 *   - EIA CBECS 2018 Tables C22 and C32 for hotel energy intensity, and the
 *     EIA heat content series for Btu per cubic foot.
 *
 * The worked example was recomputed line by line with
 * scripts/check-bps-math.mjs before saving. Do not hand-edit a number without
 * re-reading its source and bumping `lastUpdated`.
 *
 * Deliberately absent: any retrofit cost per key or per square foot, any
 * estimate of how many hotels are covered or non-compliant, any Boston
 * alternative compliance payment rate, and any California square-footage
 * threshold. None of those was read at its publisher in this run. Lender
 * policy on compliance capital is not published at all, and the page says so.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "energy-benchmarking-and-emissions-limits",
  cluster: "hotel-industry",
  isHub: false,
  title: "Hotel Energy Benchmarking and Emissions Limits",
  description:
    "Which hotels must report energy use or meet a carbon limit, what New York City requires of a hotel through 2049, and what each penalty costs.",
  h1: "Does my hotel have to report energy use or cut its carbon emissions?",
  lastUpdated: "2026-10-08",
  authorSlug: "miles-cortez",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Does Local Law 97 apply to my hotel?",
    "What is the Local Law 97 emissions limit for a hotel?",
    "Do I have to benchmark my hotel's energy use?",
    "What is the fine for a hotel that misses the benchmarking deadline?",
    "Does my hotel have to post an energy grade?",
    "Which states require hotels to meet an energy performance standard?",
    "What do building emissions laws do to a hotel's value?"
  ],
  answer:
    "Only in certain cities and states, and it turns on floor area. A New York City hotel over 25,000 square feet files a benchmarking report and an emissions report every May 1, and may not exceed 0.00987 tCO2e per square foot through 2029.[1][2][3] Washington covers hotel floor area above 50,000 square feet, first compliance date June 1, 2026.[4][5]",
  takeaways: [
    "Two duties get confused. Benchmarking reports what the hotel used; a performance standard holds it below a limit. New York City, Boston and Washington do both; California requires only the report.[3][5][7][8]",
    "New York City's limit for a hotel tightens by 61 percent at the end of 2029, from 0.00987 to 0.003850668 tCO2e per square foot, and to 0.002640017 for 2035 through 2039.[2]",
    "The rule is stricter than the statute: for 2030 through 2034 it sets a hotel at 0.003850668 where the Administrative Code's occupancy group R-1 says 0.00526.[1][2]",
    "The paperwork penalty is the larger one. Exceeding the limit costs $268 a ton; filing the emissions report late costs $0.50 per square foot a month, or $45,000 a month on 90,000 square feet.[1][2] The duty follows the building, so a buyer takes the next step with the keys.[2]"
  ],
  sections: [
    {
      h2: "Does my hotel have to report its energy use?",
      lead:
        "If the hotel sits in a city or state with a benchmarking law and clears that law's floor-area threshold, yes, and the report is due on a fixed calendar date every year.",
      body:
        "Benchmarking is the lighter of the two duties: the owner puts twelve months of whole-building energy and water data into the Environmental Protection Agency's ENERGY STAR Portfolio Manager and releases it to the government. The tool is free, and the EPA says nearly 25 percent of United States commercial building space already benchmarks in it.[9]\n\nFour calendars matter to hotel owners. New York City's Local Law 84 of 2009, as amended by Local Law 133 of 2016, takes the report by May 1, with fallback quarterly deadlines of August 1, November 1 and February 1.[3] Boston takes the prior year's energy and water use by May 15, with third-party verification in the first reporting year and each later verification year.[7] California's Energy Commission takes a report from owners of large commercial and multifamily buildings by June 1, carrying a benchmarking reference number since 2023.[8] Washington asks a tier 2 building, 20,000 to 50,000 square feet, for an energy management plan and benchmarking by July 1, 2027 and every five years after.[6]\n\nNew York City then turns the report into a letter at the front door. Under Local Law 33 of 2018 as amended by Local Law 95 of 2019 the ENERGY STAR score becomes a grade, A at 85 or above, B at 70, C at 55, D below 55, F for a building that did not submit and N for an exempt one, posted near each public entrance within 30 days after October 1.[3] Failing to display it costs $1,250, and the city publishes every grade building by building.[3] No other asset class shows the paying customer its energy performance at the point of sale."
    },
    {
      h2: "Which hotels have to cut emissions, not just report them?",
      lead:
        "A covered building in New York City or Boston has to hold annual emissions under a limit, and a Washington tier 1 building has to hit an energy use intensity target or show it is working toward one.",
      body:
        "New York City's test is floor area as the Department of Finance records it. A covered building exceeds 25,000 gross square feet, or is two or more buildings on one tax lot that together exceed 50,000, or two or more condominium buildings under the same board of managers that together exceed 50,000.[1] None of the seven exceptions reaches a hotel, so the only question is the square footage.[1] Boston covers any non-residential building of 20,000 square feet or more, with emissions standards beginning in either 2025 or 2030 and running to net zero by 2050.[7]\n\nWashington names hotels in the statute itself: a tier 1 covered building is one where nonresidential, hotel, motel and dormitory floor area together exceed 50,000 gross square feet, excluding the parking garage.[4] Targets come from ANSI/ASHRAE/IES Standard 100-2018, and the statute requires each to be no greater than the average energy use intensity for that occupancy type, so about half of existing hotels start above it by construction.[5]"
    },
    {
      h2: "What is New York City's emissions limit for a hotel, and when does it tighten?",
      lead:
        "A hotel gets 0.00987 metric tons of carbon dioxide equivalent per square foot a year through 2029, then 0.003850668 for 2030 through 2034, 0.002640017 for 2035 through 2039 and 0.001465772 for 2040 through 2049.[2]",
      body:
        "Those four numbers come from the Department of Buildings rule, not the statute, and the difference is the most expensive detail on this page. Local Law 97 set the limit by building code occupancy group, and transient lodging is group R-1 at 0.00987 for 2024 through 2029 and 0.00526 for 2030 through 2034.[1] The rule instead assigns a factor to each ENERGY STAR Portfolio Manager property type, and for \"Hotel\" the 2030 through 2034 factor is 0.003850668, about 27 percent below the statutory figure.[2] An owner reading only the Administrative Code would budget for the wrong limit. The occupancy-group alternative ran only for reporting years 2024 and 2025, and the types \"Other\" and \"Mixed Use\" may not be used at all.[2]\n\nHow emissions are counted matters as much as the limit. For 2024 through 2029 the statute counts grid electricity at 0.000288962 tCO2e per kilowatt hour, natural gas at 0.00005311 per kBtu and district steam at 0.00004493 per kBtu.[1] For 2030 through 2034 the rule halves the electricity coefficient to 0.000145 and leaves gas unchanged.[2] The city is pricing a grid it expects to be cleaner, which makes gas the binding constraint. The report is due every May 1, certified by a registered design professional.[1]"
    },
    {
      h2: "What happens if I miss a deadline or exceed the limit?",
      lead:
        "Exceeding the New York City limit costs $268 for every metric ton over it, and filing the emissions report late costs $0.50 per square foot for each month it is late, for up to twelve months.[1][2]",
      body:
        "Read those two rates together. On a 90,000 square foot hotel the late-filing penalty is $45,000 a month and up to $540,000 over twelve months, more than nineteen times what the same hotel would owe for a realistic overage.[1][2] A compliant report filed within 60 days escapes it, and an owner who misses the date despite good faith efforts can seek an extension from 30 days before to 60 days after May 1.[1][2] A knowing false statement is a misdemeanor carrying up to $500,000.[1] Missing the separate benchmarking report draws $500, rising to $2,000 in a year.[3]\n\nWashington's penalty is built the other way around: up to $5,000 plus a continuing amount capped at $1 per year per gross square foot, so a 90,000 square foot hotel faces $90,000 a year on top of the $5,000.[5] A tier 2 building faces up to 30 cents per square foot, $12,000 on a 40,000 square foot hotel.[6] Neither tier may pass the penalty to a tenant that cooperated.[5][6]\n\nNew York City leaves room to negotiate in the first compliance period: a penalty of zero where a hurricane, flood or fire prevented compliance, mitigation for documented good faith efforts, and a mediated resolution with the Department setting out a compliance plan instead of an enforcement proceeding.[2]"
    },
    {
      h2: "What does this do to my hotel's value and my loan?",
      lead:
        "A recurring penalty is a permanent reduction in net operating income, so it comes off value at a multiple.",
      body:
        "Value is net operating income divided by a cap rate, so a penalty that repeats costs a multiple of itself. At an 8 percent cap rate, a round number we chose rather than a quote, every recurring dollar removes $12.50 of value, which makes a $27,266 annual penalty $340,825 of value.\n\nThe retrofit side is harder to price, and this page prints no number for it. No public source publishes what a hotel pays per key to cut gas use, and no lender publishes what it will advance against compliance work, so a typical figure would be a guess. What is published is the cost of the money: Commercial Property Assessed Clean Energy financing exists for this work in many states, at [C-PACE financing for hotels](/hotel-financing/c-pace-financing), and a renovation loan is the other route, at [PIP and renovation loans](/hotel-financing/pip-and-renovation-loans).\n\nTiming is what an owner controls. The cheapest compliance replaces a system at the end of its useful life, which is why Washington's conditional compliance route lets an owner phase measures and never requires early replacement.[5] A boiler due in 2029 in a New York City hotel is a decision about 2030, not 2026, and it should be scoped with the brand's renovation list, at [PIP and hotel value](/hotel-valuation/pip-and-hotel-value)."
    },
    {
      h2: "What should a buyer or a seller check before closing?",
      lead:
        "The covered buildings list, the filing history, the letter grade, the Portfolio Manager account and, in Washington, which of the three compliance dates the square footage lands on.",
      body:
        "Coverage first, because it is public and binary. New York City publishes a covered buildings list by borough, block and lot, and the compliance notification also appears on the hotel's own property tax bill.[3] Boston publishes a list too.[7] If the hotel is on it, the duty exists whatever the seller believes.\n\nThen the file: the last three benchmarking submissions, the last emissions report with its certification, the current letter grade, and any notice of violation or mediated resolution. A mediated resolution transfers to a subsequent owner that consents, and so does the consequence of breaching it, so read the plan before taking it.[2] Unfiled years are the real risk, because that penalty accrues monthly and the seller's exposure becomes the building's.\n\nThe Portfolio Manager account is a document, not an afterthought, and twelve months of data with the utility feeds connected is worth asking for alongside the T-12. It belongs on the list at [What documents do I need to sell a hotel?](/sell-a-hotel/documents-needed). In Washington, check the square footage against the three tier 1 dates: a hotel of 90,001 square feet owed compliance on June 1, 2027, and one of 90,000 does not owe it until June 1, 2028.[5]"
    }
  ],
  table: {
    caption:
      "Energy reporting and emissions duties reaching hotels, read at each government's publication, October 2026",
    columns: ["Jurisdiction", "Hotels covered", "What it requires", "Deadline", "Published penalty"],
    rows: [
      [
        "New York City, benchmarking",
        "Over 25,000 gross square feet",
        "Annual energy and water use in ENERGY STAR Portfolio Manager, plus a letter grade at each public entrance",
        "May 1 each year; label within 30 days after October 1",
        "$500 per violation, up to $2,000 a year; $1,250 for not displaying the label[3]"
      ],
      [
        "New York City, emissions limit",
        "Over 25,000 gross square feet, or 50,000 across a tax lot",
        "Hold emissions under the factor for property type Hotel: 0.00987 tCO2e per square foot to 2029, then 0.003850668, 0.002640017 and 0.001465772",
        "Certified report every May 1",
        "$268 per metric ton over the limit; $0.50 per square foot a month for a late report, up to 12 months[1][2]"
      ],
      [
        "Washington, tier 1",
        "Hotel, motel, nonresidential and dormitory area over 50,000 gross square feet, less parking",
        "Meet an ASHRAE 100-2018 energy use intensity target, or qualify for conditional compliance with an audit and a plan",
        "June 1, 2026 above 220,000 sq ft; June 1, 2027 from 90,001; June 1, 2028 from 50,001",
        "Up to $5,000 plus up to $1 per square foot a year while the violation continues[4][5]"
      ],
      [
        "Washington, tier 2",
        "20,000 to 50,000 gross square feet",
        "Energy management plan, operations and maintenance plan, and benchmarking",
        "July 1, 2027, then every five years",
        "Up to 30 cents per square foot[6]"
      ],
      [
        "Boston",
        "Non-residential buildings of 20,000 square feet or more",
        "Report energy and water use, verify it through a third party, meet an annual emissions standard",
        "May 15 each year; emissions standards from 2025 or 2030",
        "Not read at the publisher in this run; alternative compliance payments are one route to compliance[7]"
      ],
      [
        "California",
        "Large commercial and multifamily buildings",
        "Report energy use to the California Energy Commission with the building's reference number",
        "June 1 each year",
        "Not read at the publisher in this run[8]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet is where a compliance retrofit becomes a financing question. As of September 30, 2026 it shows the 10-year Treasury at 5.29 percent and Prime at 7.00 percent, and marks every coverage and loan-to-value cell as not yet published, because lenders do not publish them.[13] No lender publishes a policy on emissions-compliance capital either."
  },
  workedExample: {
    label:
      "Hypothetical: a 150-key, 90,000 square foot New York City hotel against the Local Law 97 ladder",
    body:
      "This hotel does not exist. The 90,000 square feet, the 150 keys and the 8 percent cap rate are assumptions. The energy intensities are national hotel figures from the 2018 Commercial Buildings Energy Consumption Survey, and a hotel with a pool, a laundry or a full kitchen will sit above them. Every figure was recomputed before this page was saved.\n\nEnergy, at CBECS hotel intensity: 13.0 kWh per square foot is 1,170,000 kWh a year, and 34.4 cubic feet of gas per square foot is 3,096,000 cubic feet.[10][11] At the EIA's 1,032 Btu per cubic foot for gas consumed in New York, that gas is 3,195,072 kBtu.[12]\n\nEmissions for 2024 through 2029: 1,170,000 kWh times 0.000288962 is 338.1 tCO2e, and 3,195,072 kBtu times 0.00005311 is 169.7, for 507.8 tCO2e.[1]\n\nThe limit for 2024 through 2029: 90,000 square feet times 0.00987 is 888.3 tCO2e.[2] The hotel is at 57.2 percent of its limit, with 380.5 tons of headroom, and owes nothing.\n\nNow 2030 through 2034. Electricity is counted at 0.000145, so the same 1,170,000 kWh is 169.7 tCO2e; gas is unchanged at 169.7; the total is 339.3.[2] The limit is 90,000 times 0.003850668, or 346.6 tons.[2] The hotel clears it by 7.2 tons, 2.1 percent. Solving for the gas it can burn at that electricity coefficient gives 35.9 cubic feet per square foot, against the 34.4 it uses. That is the whole margin.\n\nThen 2035 through 2039, limit 237.6 tons.[2] At the same energy, the hotel is 101.7 tons over, which is $27,266 a year at $268 a ton, and $340,825 of value at an 8 percent cap rate, or $2,272 per key. To clear it instead, gas has to fall to 13.8 cubic feet per square foot, a cut of about 60 percent.\n\nThe filing penalty dwarfs all of it. Miss the May 1 emissions report and the exposure is 90,000 times $0.50, or $45,000 a month and up to $540,000 over twelve months: $3,600 per key for paperwork, and 19.8 times the 2035 overage penalty.[1][2]"
  },
  faq: [
    {
      q: "Does Local Law 97 apply to my hotel?",
      a: "If the building exceeds 25,000 gross square feet as the Department of Finance records it, yes. Two or more buildings on one tax lot totalling more than 50,000 square feet are also covered. None of the article's exceptions covers a hotel.[1]"
    },
    {
      q: "What is the Local Law 97 limit for a hotel?",
      a: "0.00987 metric tons of carbon dioxide equivalent per square foot a year for 2024 through 2029, then 0.003850668 for 2030 through 2034, 0.002640017 for 2035 through 2039, and 0.001465772 for 2040 through 2049.[2]"
    },
    {
      q: "Is the fine for being over the limit or for not filing?",
      a: "Both, and the filing fine is usually larger. Exceeding the limit costs $268 a metric ton. A late emissions report costs $0.50 per square foot a month for up to twelve months, which is $45,000 a month on 90,000 square feet.[1][2]"
    },
    {
      q: "Does my hotel have to post an energy grade at the entrance?",
      a: "In New York City, yes. The grade and ENERGY STAR score go near each public entrance within 30 days after October 1. Failure to display costs $1,250, and a building that did not benchmark is graded F.[3]"
    },
    {
      q: "Which states require hotels to meet an energy performance standard?",
      a: "Washington names hotels and motels in its statute: tier 1 covers hotel floor area above 50,000 square feet, with compliance dates of June 1 in 2026, 2027 or 2028 by size.[4][5]"
    },
    {
      q: "Can Matthews Hotel Markets get my hotel into compliance?",
      a: "No. That is work for an energy engineer and a registered design professional. What we do is price the published limits into the offering material and arrange the debt, including C-PACE, behind the capital the work needs."
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "Local Law 97 of 2019, Administrative Code Article 320: the covered building test of more than 25,000 gross square feet, two or more buildings on a tax lot over 50,000, and condominium buildings under one board over 50,000, with the seven exceptions; the occupancy group R-1 intensity limits of 0.00987 tCO2e/sf for 2024-2029 and 0.00526 for 2030-2034; the greenhouse gas coefficients of 0.000288962 tCO2e per kWh of grid electricity, 0.00005311 per kBtu of natural gas and 0.00004493 per kBtu of district steam for 2024-2029; the report certified by a registered design professional due by May 1, 2025 and every May 1 after; the civil penalty at 28-320.6 of $268 multiplied by the tons over the limit; the late-filing penalty at 28-320.6.2 of gross floor area times $0.50 a month within the 12 months after the deadline, with no penalty for a compliant report filed within 60 days; and the $500,000 false statement penalty",
      url: "https://www.nyc.gov/assets/buildings/local_laws/ll97of2019.pdf",
      publisher: "New York City Council",
      accessed: "2026-10-08"
    },
    {
      n: 2,
      label:
        "1 RCNY 103-14, Requirements for Reporting Annual Greenhouse Gas Emissions for Covered Buildings: the emissions factors for the ENERGY STAR Portfolio Manager property type Hotel of 0.00987 tCO2e/sf for 2024-2029, 0.003850668 for 2030-2034, 0.002640017 for 2035-2039 and 0.001465772 for 2040-2049; the rule that property type is determined by the registered design professional and that Other and Mixed Use may not be assigned; the occupancy-group alternative limited to reporting years 2024 and 2025; the 2030-2034 coefficients of 0.000145 tCO2e per kWh for utility electricity, 0.00005311 per kBtu for natural gas and 0.0000432 per kBtu for district steam, with the optional time-of-use election; the subdivision (g) late-filing penalty and its extension window of 30 days before to 60 days after May 1; the subdivision (h) penalty of $268 per ton over the limit; and the subdivision (i) mitigating factors, including a penalty of zero for an unforeseeable event, mitigation for good faith efforts, and a mediated resolution that may be transferred to a consenting subsequent owner",
      url: "https://www.nyc.gov/assets/buildings/rules/1_RCNY_103-14.pdf",
      publisher: "New York City Department of Buildings",
      accessed: "2026-10-08"
    },
    {
      n: 3,
      label:
        "Benchmarking and Energy Efficiency Rating: the Local Law 84 of 2009 benchmarking duty as amended by Local Law 133 of 2016, submitted through ENERGY STAR Portfolio Manager by May 1 each year with quarterly fallback deadlines of August 1, November 1 and February 1; the $500 penalty for missing May 1 and up to $2,000 a year for continued failure; the Local Law 33 of 2018 and Local Law 95 of 2019 grades, A at 85 or above, B at 70 or above, C at 55 or above, D below 55, F for a building that did not submit and N for an exempt building; the label published in the DOB NOW public portal each October 1 and displayed near each public entrance within 30 days; the $1,250 penalty for failing to display it; the annual Local Law 33 data disclosure files; and the covered buildings list and property tax bill compliance notification",
      url: "https://www.nyc.gov/site/buildings/codes/benchmarking.page",
      publisher: "New York City Department of Buildings",
      accessed: "2026-10-08"
    },
    {
      n: 4,
      label:
        "RCW 19.27A.200, state energy performance standard definitions: a tier 1 covered building is one where the sum of nonresidential, hotel, motel and dormitory floor area exceeds 50,000 gross square feet excluding the parking garage; a tier 2 covered building is one where that sum exceeds 20,000 but not 50,000 gross square feet; and energy use intensity means net annual energy divided by gross floor area excluding parking, in thousand British thermal units per square foot per year",
      url: "https://app.leg.wa.gov/RCW/default.aspx?cite=19.27A.200",
      publisher: "Washington State Legislature",
      accessed: "2026-10-08"
    },
    {
      n: 5,
      label:
        "RCW 19.27A.210, state energy performance standard: the Department of Commerce standard built on ANSI/ASHRAE/IES Standard 100-2018 with energy use intensity targets that may be no greater than the average energy use intensity for the occupancy type; the conditional compliance route requiring an investment grade audit, a life-cycle cost analysis, a savings-to-investment ratio of at least 1.0 and no requirement to replace equipment before the end of its useful life, with an exemption for historic buildings; the tier 1 reporting schedule of June 1, 2026 above 220,000 gross square feet, June 1, 2027 from 90,001 to 220,000 and June 1, 2028 from 50,001 to 90,000; the extension window of six months either side of the compliance date, valid two years; the administrative penalty of not more than $5,000 plus a continuing amount not exceeding a daily amount equal to $1 per year per gross square foot; and the bar on passing penalties to cooperating tenants",
      url: "https://app.leg.wa.gov/RCW/default.aspx?cite=19.27A.210",
      publisher: "Washington State Legislature",
      accessed: "2026-10-08"
    },
    {
      n: 6,
      label:
        "RCW 19.27A.250, state energy management and benchmarking requirement: the tier 2 duties limited to energy management planning, operations and maintenance planning and energy use analysis through benchmarking; the administrative penalty not to exceed 30 cents per square foot for failing to document compliance, with no pass-through to cooperating tenants; the July 1, 2027 reporting date and the five-year cycle after it; and the direction to adopt tier 2 performance standards by December 31, 2030, with rules that may not take effect before the end of the 2031 regular legislative session",
      url: "https://app.leg.wa.gov/RCW/default.aspx?cite=19.27A.250",
      publisher: "Washington State Legislature",
      accessed: "2026-10-08"
    },
    {
      n: 7,
      label:
        "Building Emissions Reduction and Disclosure, page last updated October 5, 2026: coverage of residential buildings with 15 or more units, non-residential buildings of 20,000 square feet or larger and any tax parcel whose buildings sum to that; the duty to report total energy and water use for the prior calendar year by May 15 each year; third-party verification in the first reporting year and each verification year after; annual emissions standards by building use type beginning in either 2025 or 2030 and reaching net zero by 2050; the covered buildings list; and compliance through emissions reduction, renewable energy or alternative compliance payments",
      url: "https://www.boston.gov/departments/environment/building-energy-reporting-and-disclosure-ordinance",
      publisher: "City of Boston",
      accessed: "2026-10-08"
    },
    {
      n: 8,
      label:
        "Building Energy Benchmarking Program: the AB 802 requirement that owners of large commercial and multifamily buildings report energy use to the California Energy Commission by June 1 annually, the benchmarking reference number required on every report since 2023, and the Commission's statement that it charges no fee to submit a report",
      url:
        "https://www.energy.ca.gov/programs-and-topics/programs/building-energy-benchmarking-program",
      publisher: "California Energy Commission",
      accessed: "2026-10-08"
    },
    {
      n: 9,
      label:
        "Benchmark Your Building With Portfolio Manager: benchmarking defined as measuring and comparing a building's energy against similar buildings, past consumption or a reference level; Portfolio Manager as the tool used for that comparison and as the national benchmarking tool in Canada; and the statement that nearly 25 percent of United States commercial building space is actively benchmarking in it",
      url: "https://www.energystar.gov/buildings/benchmark",
      publisher:
        "ENERGY STAR, U.S. Environmental Protection Agency",
      accessed: "2026-10-08"
    },
    {
      n: 10,
      label:
        "Commercial Buildings Energy Consumption Survey 2018, Table C22, electricity consumption totals and conditional intensities by building activity subcategories, released December 2022: hotels, 66,000 buildings and 3,551 million square feet, electricity intensity of 13.0 kWh per square foot with a median building-level intensity of 12.8",
      url: "https://www.eia.gov/consumption/commercial/data/2018/ce/pdf/c22.pdf",
      publisher: "U.S. Energy Information Administration",
      accessed: "2026-10-08"
    },
    {
      n: 11,
      label:
        "Commercial Buildings Energy Consumption Survey 2018, Table C32, natural gas consumption totals and conditional intensities by building activity subcategories, released December 2022: hotels, natural gas intensity of 34.4 cubic feet per square foot with a median building-level intensity of 21.1",
      url: "https://www.eia.gov/consumption/commercial/data/2018/ce/pdf/c32.pdf",
      publisher: "U.S. Energy Information Administration",
      accessed: "2026-10-08"
    },
    {
      n: 12,
      label:
        "Heat Content of Natural Gas Consumed, Btu per cubic foot, annual: 1,032 for New York and 1,036 for the United States in 2025",
      url:
        "https://www.eia.gov/dnav/ng/ng_cons_heat_a_EPG0_VGTH_btucf_a.htm",
      publisher: "U.S. Energy Information Administration",
      accessed: "2026-10-08"
    },
    {
      n: 13,
      label:
        "Matthews Hotel Markets hotel debt rate sheet, October 2026 edition: the 10-year Treasury at 5.29% and Prime at 7.00% as of September 30, 2026, with the debt service coverage and loan-to-value cells marked not yet published",
      url: "https://matthewshotelmarkets.com/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-10-08"
    }
  ],
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/hotel-operating-costs",
      "/hotel-industry/ada-requirements",
      "/hotel-industry/hotel-worker-minimum-wage",
      "/hotel-industry/cost-to-build-a-hotel"
    ],
    glossary: ["/glossary/noi", "/glossary/cap-rate", "/glossary/pip"],
    data: ["/rates"]
  },
  cta: {
    label: "Talk to the hospitality team",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets reads the covered buildings list and the filing history into the offering material when it sells a hotel in a city with an emissions limit, because a buyer who finds an unfiled year after closing prices the next deal lower."
};
