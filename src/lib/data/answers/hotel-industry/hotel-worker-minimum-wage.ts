/**
 * What is the hotel worker minimum wage, and what does it do to my hotel's value?
 * Answer page: /hotel-industry/hotel-worker-minimum-wage
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-10-07):
 *   - the Los Angeles Office of Wage Standards Citywide Hotel Worker Minimum
 *     Wage Rate chart, revision 05/27/2026, and the Notice to Hotel Workers,
 *     revision 05/26/2026, both read as the city's own PDFs on
 *     wagesla.lacity.gov;
 *   - the Rules and Regulations Implementing the CHMWO, Version 2, May 1,
 *     2026, for coverage, service charges, the no-offset rule and the cure
 *     period. Its Regulation #7 wage table is SUPERSEDED by the May 26, 2026
 *     amendment and is deliberately not used for any rate on this page;
 *   - the Office of Wage Standards homepage, for the May 26, 2026 amendment
 *     (Ordinance 188944, Council File 25-1466) and the citywide minimum wage;
 *   - the Long Beach city clerk's Notice of Annual Adjustment and the
 *     Measure RW initiative ordinance, LBMC 5.48.020;
 *   - the Santa Monica minimum wage page, for SMMC 4.63.015(b)(2);
 *   - the Oakland Measure Z official notice poster set for 2026;
 *   - Cal. Code Regs. tit. 8, section 3345, on dir.ca.gov;
 *   - the California minimum wage FAQ on dir.ca.gov;
 *   - the Bureau of Labor Statistics industry page for NAICS 721.
 *
 * The worked example was recomputed line by line with
 * scripts/check-hotel-wage-math.mjs before saving. Do not hand-edit a number
 * without re-reading its source and bumping `lastUpdated`.
 *
 * Deliberately absent: any staffing count per room, any labor cost per
 * occupied room, and any estimate of how many hotels these ordinances reach.
 * No public source publishes them. The worked example states its own staffing
 * as an assumption and says so twice.
 *
 * Also deliberately absent: West Hollywood, Glendale and Emeryville, each of
 * which sets a hotel rate. weho.org, glendaleca.gov and emeryville.org all
 * answered 403 to every reader available in this run, so no rate for them was
 * read at its publisher and none is printed.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "hotel-worker-minimum-wage",
  cluster: "hotel-industry",
  isHub: false,
  title: "Hotel Worker Minimum Wage Laws and Hotel Value",
  description:
    "Which cities set a separate minimum wage for hotel workers, what Los Angeles requires in 2026, and what each step does to NOI and value.",
  h1: "What is the hotel worker minimum wage, and what does it do to my hotel's value?",
  lastUpdated: "2026-10-07",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "What is the hotel worker minimum wage in Los Angeles?",
    "Which cities have a separate minimum wage for hotel workers?",
    "Does the Los Angeles hotel minimum wage apply to my hotel?",
    "How much is the Long Beach hotel worker minimum wage?",
    "What does a hotel minimum wage increase do to my hotel's value?",
    "Do I have to pay hotel housekeepers more than other employees?",
    "Does a buyer inherit the hotel worker wage ordinance when I sell?"
  ],
  answer:
    "In the City of Los Angeles it is $25.00 an hour in cash plus $4.25 an hour toward health care, or $29.25 all in cash, for hotels with 60 or more guest rooms, effective July 1, 2026.[1] Long Beach pays $26.50 at 100 rooms and up.[6] Santa Monica matches Los Angeles by ordinance.[5]",
  takeaways: [
    "The rate is set by city, not by state, and applies to hotels alone. Los Angeles asks a hotel for $29.25 an hour all in where it asks every other employer for $18.42.[1][4]",
    "Coverage turns on guest rooms: 60 in Los Angeles, 50 inside its Airport Hospitality Enhancement Zone, 100 in Long Beach, 50 in Oakland.[3][7][8]",
    "The schedule is not fixed. Los Angeles amended its own on May 26, 2026, replacing a $30.00 rate for July 2028 with $28.50.[4]",
    "The duty runs with the hotel, so a buyer takes the next scheduled step with the keys.[3][7] A clear waiver in a union contract is the one exception.[3][7]"
  ],
  sections: [
    {
      h2: "Which cities set a separate minimum wage for hotel workers?",
      lead:
        "A handful of California cities do, and each sets a hotel-only rate well above what the same city asks of every other employer.",
      body:
        "This is local law. California's statewide minimum wage is $16.90 an hour for any employer with no higher industry or local rate, effective January 1, 2026.[9] The hotel ordinances sit on top of it.\n\nFour publish a current rate we read at the city itself. Los Angeles requires $25.00 an hour in cash plus $4.25 toward health care from July 1, 2026.[1] Long Beach requires $26.50 from the same date under Measure RW, which its voters adopted on March 5, 2024.[6][7] Santa Monica sets no number of its own: Municipal Code 4.63.015(b)(2) matches its hotel wage to the Los Angeles rate, so $25.00.[5] Oakland, under Measure Z, requires $18.85 with employer health benefits and $25.14 without.[8]\n\nThe gap is the point: the Los Angeles all-in floor of $29.25 runs 58.8 percent above the $18.42 the city asks of everyone else.[1][4] West Hollywood, Glendale and Emeryville set hotel rates too, but their city websites answered no reader available in this run, so no figure for them is printed."
    },
    {
      h2: "Does the Los Angeles ordinance apply to my hotel?",
      lead:
        "If the building has 60 or more guest rooms inside the city limits, yes, and the room count is the only test that matters.",
      body:
        "The Office of Wage Standards defines a covered hotel as any residential structure with 60 or more guest rooms, suites or dwelling units rentable for 30 consecutive calendar days or less.[3] There is no revenue test and no brand or franchise carve-out. A 62-room limited-service hotel is covered; a 58-room one is not.\n\nTwo extensions widen it. A hotel inside the Airport Hospitality Enhancement Zone is covered at 50 rooms, and that zone is the Gateway to LA Property Business Improvement District boundary under Ordinance 177211, so it is a map question.[3] Coverage also reaches any contracted, leased or sublet premises operated in conjunction with the hotel's purpose, which takes in the restaurant you lease out and the contractor whose housekeepers work your floors.[3] Home sharing under LAMC 12.22.A.32 is carved out.[3]"
    },
    {
      h2: "How much is the Los Angeles rate, and what comes next?",
      lead:
        "It is $25.00 an hour in cash plus a $4.25 hourly health benefit payment today, rising to $25.50 plus $6.00 on July 1, 2027.",
      body:
        "The health benefit payment is the part owners miss. Under LAMC 186.04 a covered employer must pay $4.25 an hour toward health care for the worker and dependents from July 1, 2026. An employer providing none pays it as additional wages, and one whose rate falls short pays the difference, so the city's own arithmetic is $25.00 plus $4.25, or $29.25 an hour. It is not owed on overtime hours.[2]\n\nThe published ladder runs four more years: $25.00 from July 1, 2026, $25.50 from 2027, $28.50 from 2028 and $29.00 from 2029.[2] The wage chart carries the matching health benefit payments, $4.25 then $6.00, and marks the July 2028 payment pending, because from then it equals the payment for an airport service employee under Los Angeles Administrative Code 10.37.3(a).[1]\n\nThat ladder is newer than it looks. On May 26, 2026 the City Council approved Ordinance 188944 under Council File 25-1466, changing every increase from July 1, 2027 on.[4] The rules published three weeks earlier still print the old ladder of $27.50 for 2027 and $30.00 for 2028.[3] Those two numbers are dead. A package quoting $30.00 for 2028 is reading a document the city replaced."
    },
    {
      h2: "What do these ordinances require besides the hourly rate?",
      lead:
        "Paid and unpaid time off, the full pass-through of service charges, a bar on crediting tips toward the wage, and in Oakland a cap on the floor space one room cleaner may be assigned in a day.",
      body:
        "Los Angeles adds at least 96 compensated hours off a year for a full-time worker plus 80 uncompensated, carrying to a cap of at least 192 hours, above which the excess is cashed out every 30 days.[2][3]\n\nService charges are not the hotel's money. LAMC 186.03 sends every one of them to the workers who performed the service, and Long Beach reaches any separately designated amount however labeled, a healthcare surcharge or hotel worker protection fee included, with none going to supervisors or managers.[2][3][7] Neither city lets other pay count toward the floor: Los Angeles bars offsetting the wage with gratuities, service charges or bonuses, citing California Labor Code 351.[3]\n\nOakland regulates the work. Under OMC 5.93.030 a room cleaner may not be required to clean more than 4,000 square feet in an eight-hour workday without double the regular rate for every hour that day, cut by 500 square feet per checkout room beyond six.[8] Statewide, and with no room threshold, Title 8 section 3345 has required every hotel, motel, resort and bed and breakfast inn to keep a written housekeeping injury prevention program since July 1, 2018.[10]"
    },
    {
      h2: "What does an increase do to NOI and to what my hotel is worth?",
      lead:
        "It takes the increase out of net operating income every year, and a buyer capitalizes that loss, so the hit to value is a multiple of the hit to payroll.",
      body:
        "A dollar an hour across a covered payroll leaves NOI, and value is NOI divided by a cap rate. At an 8 percent cap rate, a round number we chose rather than a quote, every recurring dollar of cost removes $12.50 of value.\n\nThat is why the health benefit payment matters more than its size suggests. Los Angeles added $4.25 an hour on July 1, 2026 to a cash wage that rose $2.50 the same day, so the combined step is $6.75 an hour against the rate in force from September 8, 2025, with another $2.25 due in July 2027.[1][2][3] How much a hotel absorbs depends on what it already paid: one at the floor takes the whole step, one already at $25.00 with a health plan worth $3.00 an hour owes only the $1.25 shortfall.\n\nWhat no public source gives you is the staffing. The Bureau of Labor Statistics reports a 2025 median of $16.78 an hour for the 420,800 maids and housekeeping cleaners in accommodation.[11] That shows the $29.25 Los Angeles floor running 74.3 percent above what the median housekeeper earned in 2025, and says nothing about how many covered hours your hotel runs.[1][11] That comes off your own payroll register. Test the effect with the [hotel DSCR calculator](/tools/dscr-calculator) and the [hotel cap rate calculator](/tools/cap-rate-calculator)."
    },
    {
      h2: "What should a buyer or a seller check before closing?",
      lead:
        "Whether the hotel is covered, whether a union contract waives the ordinance, and whether four years of payroll records hold up.",
      body:
        "Coverage first, because it is binary and public. Count the guest rooms against the city threshold and, in Los Angeles, check the Gateway to LA district boundary near the airport.[3] A hotel that crosses the threshold through an addition crosses into the ordinance with it, and a sale resets nothing: each ordinance binds whoever owns, controls or operates the hotel, so the duty attaches to the buyer at closing at the step the schedule has reached.[3][7] Someone buying in Los Angeles in 2026 is buying the 2027 and 2028 increases too.\n\nThen read the labor agreement. Los Angeles allows the collective bargaining exemption at LAMC 186.08, and Long Beach allows a waiver only where it is explicit, in clear and unambiguous terms.[3][7] A union hotel can be cheaper to run than the statute suggests, or dearer, and the only way to know is to read the contract and its expiry. It belongs on the list at [What do buyers look for in a hotel?](/sell-a-hotel/what-buyers-look-for), next to [what happens to the staff](/sell-a-hotel/employees-when-you-sell).\n\nLast, the exposure the file creates. Los Angeles requires four years of payroll records under LAMC 188.03.B, and a worker must give written notice to cure and 30 days before suing.[3] Long Beach has no cure step, and a worker who wins is awarded attorney's fees.[7] Oakland adds $50 per person for each day a violation continued, capped at $1,000.[8] An unresolved wage claim is a holdback at closing, so find it in diligence."
    },
    {
      h2: "Can these rates change again before I sell?",
      lead:
        "Yes, by three different routes, and a buyer should know which one applies to the hotel in front of them.",
      body:
        "Amendment: Los Angeles changed its ladder by ordinance on May 26, 2026, after the rate was already law, and nothing stops it again.[4]\n\nIndexation: once the published Los Angeles ladder runs out, the Office of Wage Standards sets the change each January off the Los Angeles area price index for urban wage earners, announces it February 1 and applies it July 1.[3] Oakland runs the same cycle to January 1.[8] An indexed rate does not stop rising because a hotel's revenue did.\n\nA voter lock: Measure RW bars any increase to Long Beach hotel wages before June 1, 2029, then requires a two-thirds council vote, a five-year gap and a labor market analysis.[7] Its published steps, $28.00 in 2027 and $29.50 in 2028, are the most predictable of the three.[7]"
    }
  ],
  table: {
    caption:
      "Hotel-specific minimum wage by city, read at each city's own publication, October 2026",
    columns: ["City", "Covered hotels", "Hourly floor now", "Next published step", "Source"],
    rows: [
      [
        "Los Angeles",
        "60 or more guest rooms; 50 inside the Airport Hospitality Enhancement Zone",
        "$25.00 cash plus $4.25 toward health care, or $29.25 all in cash, from July 1, 2026",
        "$25.50 plus $6.00 on July 1, 2027; $28.50 on July 1, 2028",
        "LAMC 186.01.C, 186.02.A, 186.04[1][2][3]"
      ],
      [
        "Long Beach",
        "100 or more guest rooms",
        "$26.50 from July 1, 2026",
        "$28.00 on July 1, 2027; $29.50 on July 1, 2028",
        "LBMC 5.48.020.A, Measure RW[6][7]"
      ],
      [
        "Santa Monica",
        "All hotels apart from youth hostels",
        "$25.00, matched by ordinance to the Los Angeles hotel rate",
        "Moves whenever Los Angeles moves",
        "SMMC 4.63.015(b)(2)[5]"
      ],
      [
        "Oakland",
        "50 or more guest rooms or suites",
        "$18.85 with health benefits, $25.14 without, from January 1, 2026",
        "Price index adjustment each January 1",
        "OMC 5.93.040, Measure Z[8]"
      ],
      [
        "Los Angeles, every other employer",
        "Any employer in the city",
        "$18.42 from July 1, 2026",
        "Price index adjustment each July 1",
        "LAMC 187.02[4]"
      ],
      [
        "California, statewide floor",
        "Any employer with no higher local or industry rate",
        "$16.90 from January 1, 2026",
        "Annual inflation adjustment, capped at 3.5 percent",
        "Labor Commissioner's Office[9]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet is where lost income becomes lost borrowing capacity. As of September 30, 2026 it shows the 10-year Treasury at 5.29 percent and Prime at 7.00 percent, and marks the coverage and loan-to-value cells as not yet published, because lenders do not publish them.[12] Whatever the floor is, a payroll increase shrinks the loan it supports."
  },
  workedExample: {
    label:
      "Hypothetical: a 150-key Los Angeles hotel crossing the July 1, 2026 step",
    body:
      "This hotel does not exist. The 150 keys, the 45 covered hourly workers, the 2,080 hours each, the absence of overtime and the 8 percent cap rate are assumptions, and yours will differ. The wage rates are published, and every figure was recomputed before this page was saved.\n\nCovered hours: 45 workers times 2,080 hours is 93,600 paid hours a year.\n\nThe step: the floor was $22.50 an hour in cash from September 8, 2025, with no health benefit payment. From July 1, 2026 it is $25.00 plus $4.25, or $29.25 all in, a difference of $6.75 an hour.[1][2][3]\n\nScenario A, a hotel paying at the floor: 93,600 hours times $6.75 is $631,800 a year, which is $4,212 per key. At an 8 percent cap rate, $631,800 divided by 0.08 is $7,897,500 of value, or $52,650 per key.\n\nScenario B, a hotel already above it: suppose it paid $25.00 in cash and provided health benefits worth $3.00 an hour. Only the $1.25 shortfall is new. 93,600 times $1.25 is $117,000 a year, $780 per key, and $1,462,500 of value.\n\nThe next step is published. On July 1, 2027 the cash wage goes to $25.50 and the health benefit payment to $6.00, a combined $31.50 and another $2.25 an hour: $210,600 a year on these hours, and $2,632,500 of value. July 1, 2028 adds $3.00 of cash wage, $280,800 a year.[1]\n\nThe spread between the scenarios is the underwriting question. Two 150-key hotels on the same street with the same RevPAR can be $514,800 a year apart in cost and $6,435,000 apart in value, purely on what each already paid. Neither figure is visible from outside, which is why a buyer asks for the payroll register."
  },
  faq: [
    {
      q: "What is the hotel worker minimum wage in Los Angeles right now?",
      a: "$25.00 an hour in cash plus $4.25 toward health care, effective July 1, 2026, for hotels with 60 or more guest rooms. A worker with no employer-provided health benefits is paid $29.25 an hour in cash.[1][2]"
    },
    {
      q: "Is the Los Angeles hotel wage going to $30.00 in 2028?",
      a: "No. That came from a schedule the city replaced. Ordinance 188944, approved May 26, 2026, reset the ladder, and the current chart shows $28.50 for July 1, 2028 and $29.00 for July 1, 2029.[1][2][4]"
    },
    {
      q: "Does the ordinance apply to a 55-room hotel?",
      a: "Not in Los Angeles, unless it sits inside the Airport Hospitality Enhancement Zone, where the threshold is 50 rooms. The citywide threshold is 60 guest rooms rentable for 30 consecutive days or less.[3]"
    },
    {
      q: "Can I count tips or a service charge toward the hotel minimum wage?",
      a: "No. The Los Angeles rules bar offsetting the wage with gratuities, service charge distributions or bonuses, citing California Labor Code 351, and Long Beach says the same.[3][7] Service charges go to the workers who performed the service."
    },
    {
      q: "Does a buyer inherit the hotel wage ordinance when I sell?",
      a: "Yes. Each ordinance binds whoever owns, controls or operates the hotel, so the duty attaches at closing at whatever step the published schedule has reached.[3][7] The buyer is also buying the increases already scheduled."
    },
    {
      q: "Can Matthews Hotel Markets handle my wage and hour compliance?",
      a: "No. We sell hotels and arrange the debt behind them, and compliance is work for your employment counsel. What we do is underwrite what the published schedule does to net operating income and say so in the offering material."
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "Citywide Hotel Worker Minimum Wage Rate chart, revision 05/27/2026: $25.00 cash and $4.25 health benefit for July 1, 2026 to June 30, 2027, $25.50 and $6.00 for July 1, 2027 to June 30, 2028, and $28.50 with the health benefit pending calculation for July 1, 2028 to June 30, 2029; the LAMC 186.01.C coverage test of 60 or more guest rooms, or 50 within the Airport Hospitality Enhancement Zone; the LAMC 186.04 rule that an employer who provides no health benefits pays the amount as additional wages; and the peg of the 2028 health benefit to Los Angeles Administrative Code 10.37.3(a)",
      url:
        "https://wagesla.lacity.gov/sites/g/files/wph1941/files/2026-06/2026%20CHMWO%20Wage%20Chart%20wHB%20Rev05-27-26.pdf",
      publisher:
        "Office of Wage Standards, Bureau of Contract Administration, City of Los Angeles",
      accessed: "2026-10-07"
    },
    {
      n: 2,
      label:
        "Citywide Hotel Worker Minimum Wage Ordinance, Notice to Hotel Workers, revision 05/26/2026: the wage schedule at $25.00 for July 1, 2026, $25.50 for 2027, $28.50 for 2028 and $29.00 for 2029; the $4.25 health benefit payment and the $29.25 all-cash alternative; health benefits not required on overtime hours and the LAMC 186.10.C waiver; 96 compensated and 80 uncompensated hours off a year with the 192-hour carry-over cap and the 30-day cash-out; and the LAMC 186.03 service charge pass-through",
      url:
        "https://wagesla.lacity.gov/sites/g/files/wph1941/files/2026-06/2026%20CHMWO%20Notice%20Rev%2005-26-26%20-%20English%20ADA_0.pdf",
      publisher:
        "Office of Wage Standards, Bureau of Contract Administration, City of Los Angeles",
      accessed: "2026-10-07"
    },
    {
      n: 3,
      label:
        "Rules and Regulations Implementing the Citywide Hotel Worker Minimum Wage Ordinance, Version 2, May 1, 2026: the hotel employer and covered hotel definitions, the 60-room and 30-consecutive-day test, the Airport Hospitality Enhancement Zone as the Gateway to LA Property Business Improvement District under Ordinance 177211, the short-term rental exclusion under LAMC 12.22.A.32, the bar on offsetting the wage with gratuities, service charges or bonuses under California Labor Code 351, the collective bargaining exemption at LAMC 186.08, four-year record retention under LAMC 188.03.B, the 30-day Notice to Cure, and the February 1 Consumer Price Index announcement cycle. Its Regulation #7 wage table predates the May 26, 2026 amendment and is superseded",
      url:
        "https://wagesla.lacity.gov/sites/g/files/wph1941/files/2026-05/CHMWO%20Rules%20&%20Regulations%20%20Ver%202%20Final%2004-30-2026.pdf",
      publisher:
        "Office of Wage Standards, Bureau of Contract Administration, City of Los Angeles",
      accessed: "2026-10-07"
    },
    {
      n: 4,
      label:
        "Office of Wage Standards homepage: the May 26, 2026 approval of Ordinance 188944 under Council File 25-1466, amending LAMC Sections 186.02.A and 186.04 and changing the July 1, 2026 health benefit payment and every scheduled wage increase from July 1, 2027, with the April 1, 2026 memo withdrawn; and the citywide Minimum Wage Ordinance rate of $18.42 effective July 1, 2026, adjusted each July 1 by the Los Angeles area Consumer Price Index for urban wage earners and clerical workers",
      url: "https://wagesla.lacity.gov/",
      publisher:
        "Office of Wage Standards, Bureau of Contract Administration, City of Los Angeles",
      accessed: "2026-10-07"
    },
    {
      n: 5,
      label:
        "Santa Monica minimum wage page: the hotel worker rate of $25.00 an hour from July 1, 2026, the coverage of all hotels apart from youth hostels and of businesses that contract, lease or sublet on hotel property, and Santa Monica Municipal Code 4.63.015(b)(2), under which the city's hotel worker minimum wage matches the rate set for hotel workers in the City of Los Angeles",
      url: "https://www.santamonica.gov/minimum-wage",
      publisher: "City of Santa Monica",
      accessed: "2026-10-07"
    },
    {
      n: 6,
      label:
        "Notice of Annual Adjustment, Hotel Worker Hourly Rate $26.50 effective July 1, 2026: the March 5, 2024 adoption of Measure RW by Long Beach voters, the 2012 Measure N that preceded it, and the written notification and payroll adjustment duty under Long Beach Municipal Code 5.48.020",
      url:
        "https://www.longbeach.gov/globalassets/city-clerk/media-library/documents/public-notices/public-notices/measure-rw-bulletin-effective-july-1-2026",
      publisher: "City Clerk, City of Long Beach",
      accessed: "2026-10-07"
    },
    {
      n: 7,
      label:
        "Measure RW, the Long Beach initiative ordinance at Municipal Code 5.48.020: the wage ladder of $23.00 in 2024, $25.00 in 2025, $26.50 in 2026, $28.00 in 2027 and $29.50 in 2028; the April 1 bulletin and the bar on crediting service charges, commissions, bonuses, tips or gratuities against the rate; the service charge pass-through and its definition reaching a healthcare surcharge, benefits surcharge, hotel worker protection fee or housekeeping fee, with no payment to supervisors or managers; five compensated sick days accruing at five-twelfths of a day a month with a year-end cash-out; the collective bargaining waiver in clear and unambiguous terms; the private right of action with reasonable attorney's fees; the 100-guest-room definition of a hotel reaching contracted, leased and sublet premises; and the two-thirds council amendment power with no wage increase before June 1, 2029",
      url:
        "https://www.longbeach.gov/globalassets/city-clerk/media-library/documents/elections/2024/ballot-measures/measure-rw-ordinance",
      publisher: "City Clerk, City of Long Beach",
      accessed: "2026-10-07"
    },
    {
      n: 8,
      label:
        "Oakland Hotel Worker's Minimum Wage Rate and Humane Workload Requirements, official notice poster set for 2026: $18.85 an hour with health benefits or $25.14 without from January 1, 2026, with health benefits defined as $6.29 an hour toward health care; the 50-guest-room threshold and the five-hours-a-week-for-four-weeks test under Oakland Municipal Code 5.93.040; the January 1 Consumer Price Index adjustment on the San Francisco, Oakland and San Jose index; the $50 per person per day penalty capped at $1,000 under OMC 5.93.060; and the OMC 5.93.030 workload limits, 4,000 square feet in an eight-hour day, prorated for shorter shifts and reduced by 500 square feet per checkout room beyond six, plus the written consent required past 10 hours in a workday",
      url:
        "https://www.oaklandca.gov/files/assets/city/v/1/workplace-employment-standards/documents/download-posters/posters-2026/hotel_measure_z_english_poster_set_2026.pdf",
      publisher:
        "Department of Workplace and Employment Standards, City of Oakland",
      accessed: "2026-10-07"
    },
    {
      n: 9,
      label:
        "Minimum Wage Frequently Asked Questions: the California minimum wage of $16.90 an hour for all employers not otherwise covered by a higher industry or local minimum wage, effective January 1, 2026, and the annual inflation adjustment capped at 3.5 percent",
      url: "https://www.dir.ca.gov/dlse/faq_minimumwage.htm",
      publisher:
        "Labor Commissioner's Office, California Department of Industrial Relations",
      accessed: "2026-10-07"
    },
    {
      n: 10,
      label:
        "Cal. Code Regs. tit. 8, section 3345, Hotel Housekeeping Musculoskeletal Injury Prevention: the application to hotels, motels, resorts and bed and breakfast inns, the written prevention program, the worksite hazard evaluation within three months and annual review, and the training duty on establishment, on hire and annually, effective July 1, 2018",
      url: "https://www.dir.ca.gov/title8/3345.html",
      publisher:
        "Division of Occupational Safety and Health, California Department of Industrial Relations",
      accessed: "2026-10-07"
    },
    {
      n: 11,
      label:
        "Accommodation, NAICS 721, industry at a glance: average hourly earnings of $24.74 for all employees in July 2026, preliminary, and the 2025 occupational employment and wage statistics showing 420,800 maids and housekeeping cleaners at a $16.78 median hourly wage and 247,700 hotel, motel and resort desk clerks at $16.82",
      url: "https://www.bls.gov/iag/tgs/iag721.htm",
      publisher: "U.S. Bureau of Labor Statistics",
      accessed: "2026-10-07"
    },
    {
      n: 12,
      label:
        "Matthews Hotel Markets hotel debt rate sheet, October 2026 edition: the 10-year Treasury at 5.29% and Prime at 7.00% as of September 30, 2026, with the debt service coverage and loan-to-value cells marked not yet published",
      url: "https://matthewshotelmarkets.com/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-10-07"
    }
  ],
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/hotel-operating-costs",
      "/hotel-industry/how-hotels-make-money",
      "/hotel-industry/extended-stay-hotels",
      "/hotel-industry/ada-requirements"
    ],
    glossary: ["/glossary/noi", "/glossary/gop", "/glossary/cap-rate"],
    data: ["/rates"]
  },
  cta: {
    label: "Talk to the hospitality team",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets underwrites the published wage schedule into the offering material when it sells a hotel in one of these cities, because a buyer who finds the next step after closing discounts the next deal."
};
