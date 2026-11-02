/**
 * How does the H-2B visa program work for a seasonal hotel?
 * Answer page: /hotel-industry/h2b-seasonal-workers
 *
 * Every figure is from a public primary source fetched on 2026-11-02:
 * 8 U.S.C. 1184(g), the USCIS H-2B cap count page, 20 CFR 655.6/.10/.15/.20
 * via the eCFR API, 91 FR 5040, the DOL OFLC H-2B disclosure file for
 * FY2025 Q4, and BLS OES May 2025. The occupation table and every hotel
 * count on this page were computed from the OFLC file by
 * scripts/check-h2b-math.mjs, which also re-checks the worked example.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "h2b-seasonal-workers",
  cluster: "hotel-industry",
  isHub: false,
  title: "H-2B Seasonal Workers for Hotels",
  h1: "How does the H-2B visa program work for a seasonal hotel?",
  description:
    "The H-2B cap, the 9-month limit, what hotels actually get certified, the three-fourths guarantee, and the 75 to 90 day filing window.",
  lastUpdated: "2026-11-02",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Can I use H-2B visas to staff my seasonal hotel?",
    "How many H-2B workers can a hotel get?",
    "What does an H-2B worker cost a hotel?",
    "When do I have to file for H-2B workers for next season?",
    "Why was my hotel's H-2B petition rejected?",
    "What is the three-fourths guarantee for H-2B workers?",
    "Do seasonal hotels depend on foreign workers?"
  ],
  answer:
    "USCIS reached the 33,000 first-half cap for fiscal 2027 on September 4, 2026, before the fiscal year began.[1][2] Hotels are heavy users: 2,299 of the 17,552 H-2B applications in the Department of Labor's fiscal 2025 file came from traveler accommodation, and 24,269 workers were certified.[3] Applications are due 75 to 90 days before the start date.[4]",
  takeaways: [
    "The cap is 66,000 a year, split 33,000 to each half.[1] First-half fiscal 2027 filled on September 4, 2026, before the year started, so later petitions for a start before April 1, 2027 are rejected.[2]",
    "A labor certification is not a visa: the fiscal 2025 file shows 232,326 workers certified against a 66,000 cap.[2][3]",
    "Housekeeping is the job. Maids and housekeeping cleaners are 10,556 of the 24,269 hotel workers certified, 43.5 percent, at a median offered wage of $16.67 an hour.[3]",
    "The three-fourths guarantee makes a hotel pay for hours it does not use in a soft season: the duty is to offer hours, not to need them.[7]",
    "Need lasting more than 9 months is denied unless it is a one-time occurrence, so a year-round position cannot be filled this way.[5]"
  ],
  sections: [
    {
      h2: "Can a hotel use H-2B workers at all?",
      lead:
        "Only for temporary need under 9 months, in one of four categories: a one-time occurrence, a seasonal need, a peakload need or an intermittent need.[5]",
      body: "Need must be temporary \"regardless of whether the underlying job is permanent or temporary,\" and the certifying officer denies any request where the need lasts more than 9 months, with a one-time occurrence the only exception.[5] A hotel open all year with a front desk staffed all year has no temporary need for a front desk clerk, however hard the role is to fill.\n\nWhich category hotels claim is not what most people assume. Of the 2,121 certified or partly certified hotel applications in the fiscal 2025 data, 1,449 were justified as peakload and only 671 as seasonal.[3] Peakload means a permanent year-round staff plus short-term help at the peak, a different story from a property that closes in the off season.\n\nCertified periods sit inside the limit for most hotels: the median runs 227 days, about 7.5 months, with the middle half between 211 and 258 days.[3] Even so, 260 of the 2,121 certified cases end later than nine calendar months after the begin date, 238 of them peakload claims.[3] The file records the dates without explaining them, so this page reports the count and not a reason for it."
    },
    {
      h2: "How many H-2B workers can a hotel get, and when does the cap close?",
      lead:
        "There is no per-hotel limit, but the national cap is 66,000 a year with not more than 33,000 entering in the first six months, and it closes early.[1]",
      body: "The statute sets 66,000 at 8 U.S.C. 1184(g)(1)(B) and caps first-half entries at 33,000 at 1184(g)(10).[1] USCIS splits the year at October 1 and April 1 and moves unused first-half numbers into the second half, but nothing carries into the next fiscal year.[2]\n\nTiming is what catches hotels. The first-half fiscal 2027 cap was reached on September 4, 2026, before the fiscal year started, and announced a week later.[2] Any cap-subject petition received after September 4 asking for a start before April 1, 2027 is rejected.[2] A year earlier, first-half fiscal 2026 demand overshot the remaining numbers and USCIS ran a lottery, giving every selected petition the receipt date of September 12, 2025.[8]\n\nCongress has repeatedly let the Secretary of Homeland Security add visas above the statutory number. For fiscal 2026 the add was 64,716, split into allocations of 18,490, 27,736 and 18,490 by start date of need and limited to employers attesting to impending irreparable harm, meaning permanent and severe financial loss.[8] That rule expired on September 30, 2026, and as of November 2, 2026 no comparable rule exists for fiscal 2027.[2][8] Do not budget for an allocation that has not been published.\n\nA certification is not a worker. The fiscal 2025 file shows 232,326 workers certified across all industries against a 66,000 cap, and USCIS states that approvals normally exceed the cap because of withdrawals, denials and approvals where no visa is issued.[2][3] Certification means the job may be filled. The visa is a separate queue."
    },
    {
      h2: "Which hotel jobs actually get certified?",
      lead:
        "Housekeeping, by a wide margin: 10,556 of 24,269 certified hotel workers, 43.5 percent, with food and beverage roles taking most of the rest.[3]",
      body: "The table above counts the certified and partly certified traveler accommodation cases in the fiscal 2025 OFLC file by occupation.[3] Fifty-six occupations appear, but the eight largest carry 20,985 of the 24,269 workers, 86.5 percent.[3] Notice how much is food and beverage: cooks, waiters, dishwashers and dining room attendants come to 8,016 workers, a third of the hotel total. A full-service resort with a busy restaurant is a different staffing problem from a select-service property.\n\nThe geography is resort markets, not big cities. By worksite state, Florida leads with 3,232 certified workers, then Maine with 2,610, Michigan with 2,338 and Massachusetts with 1,911.[3] Montana at 1,173 and Colorado at 1,070 rank in the top seven, which is the mountain-resort season showing up in federal paperwork.[3]\n\nThe industry code is entered inconsistently, which matters to anyone reproducing the count. Of the 2,299 traveler accommodation rows, 1,328 carry the six-digit 721110 and 867 a five-digit 72111, the rest spread across 721199, 721191, 72112, 72119, 7211 and 721120.[3] This page counts every row whose code begins 7211, the only way to avoid dropping a third of the hotels. A hotel inside a mixed-use entity filed under another code is invisible here, so 2,299 is a floor."
    },
    {
      h2: "What does an H-2B worker cost a hotel?",
      lead:
        "At least the highest of the local prevailing wage, the federal minimum, the state minimum and any local minimum, and the same rate has to go to U.S. workers doing the same job.[6]",
      body: "The wage floor is not set by the hotel. Where no collective bargaining agreement covers the job, the prevailing wage is the arithmetic mean for similarly employed workers in the area, from the BLS Occupational Employment Statistics survey.[6] The employer must obtain a prevailing wage determination before filing the job order, valid on the day the job order posts.[6] Across several worksites in one area, the highest applicable rate governs.[6]\n\nThe sentence that costs the most is in 655.10(a): the employer \"must offer and pay this wage (or higher) to both its H-2B workers and its workers in corresponding employment.\"[6] Hiring ten H-2B housekeepers at the prevailing wage raises the floor for every U.S. housekeeper doing the same work at that property. A hotel that models H-2B against its current payroll alone has modeled the smaller half.\n\nOffered wages in the file land where the rule points. The median hourly wage in certified hotel cases is $17.19, and $16.67 for housekeeping, against a May 2025 BLS median of $16.79 and mean of $17.63 for maids and housekeeping cleaners in traveler accommodation, an occupation employing 415,160 people nationally.[3][9]\n\nNo public source gives all-in cost per worker. Recruiter charges, housing and the agent and attorney work behind an application are published nowhere, and none of it can be pushed onto the worker, so that budget has to come from the hotel's own quotes."
    },
    {
      h2: "What obligations come with the workers?",
      lead:
        "A guarantee to offer three-quarters of the job order's hours, inbound travel and subsistence once the worker is halfway through, and an absolute bar on charging the worker for any of it.[7]",
      body: "The employer must offer each worker hours equal to at least three-quarters of the workdays in every 12-week period of the job order, a workday being the hours the job order itself states; for job orders under 120 days the period is six weeks.[7] The duty is to offer the hours. If the hotel does not need them it pays anyway, and the worked example below sizes that. A season cut short by fire, weather or another act of God outside the employer's control only reduces the guarantee to the elapsed portion, and ending the job order early needs the certifying officer's approval.[7]\n\nTransportation follows a completion test: the employer must provide or reimburse travel and subsistence from where the worker came once the worker completes 50 percent of the job order's period, or advance the most economical common carrier cost before departure.[7]\n\nThe fee prohibition is written broadly. The employer and its attorneys, agents and employees must not have sought or received payment of any kind from the worker for anything related to the certification or the job, and \"payment\" expressly includes wage concessions, deductions, kickbacks, bribes, in-kind payments and free labor.[7] The employer must also contractually prohibit its recruiters in writing from taking money from prospective workers.[7] A hotel that lets a recruiter charge the workers has broken its own certification. Earnings records must break out hours offered inside the guarantee from hours above it, which is how this gets audited.[7]"
    },
    {
      h2: "When does a hotel have to file for next season?",
      lead:
        "The application is due no more than 90 and no fewer than 75 calendar days before the start date, and the prevailing wage determination has to be in hand first.[4][6]",
      body: "That window is 16 days wide and it is the whole planning problem. For an April 1, 2027 start, the first day of the second-half cap, the application may be filed between January 1 and January 16, 2027.[4] For a May 15, 2027 start the window is February 14 to March 1, 2027.[4] Miss it in either direction and the application is untimely.\n\nWork backwards, because two things must finish first: the employer must register and must obtain a prevailing wage determination under 655.10, or the application is returned without review.[4][6] A hotel that starts thinking about next summer in March has already lost the season.\n\nThe filing goes to the national processing center with the ETA Form 9142B and appendices, the valid prevailing wage determination, a copy of the job order going to the state workforce agency at the same time, and copies of every agent and recruiter contract.[4] Emergency procedures exist under 655.17 for employers who could not have planned, which is not the same as employers who did not.[4]"
    },
    {
      h2: "How does seasonal labor affect what a hotel is worth?",
      lead:
        "It moves net operating income in ways a trailing twelve-month statement hides, which is why a buyer should ask for the H-2B file before pricing a seasonal hotel.[10]",
      body: "A seasonal hotel's payroll carries a risk a year-round hotel's does not: a fixed floor set by federal rule against revenue that arrives in a few months. The three-fourths guarantee turns part of a variable cost into a fixed one, and the corresponding-employment rule lifts the rate for the domestic crew at the same time.[6][7] Neither shows on a profit and loss statement, which records what was paid and not what was promised.\n\nThere is also a step change no model smooths. A hotel staffed on H-2B workers that then misses the cap, as every filer after September 4, 2026 did for a start before April 1, 2027, has to cover the same rooms from the local labor market or sell fewer of them.[2] No public source publishes what that costs in a resort town in February, and this page will not invent one.\n\nFor a buyer, three documents answer most of it: the certified applications for the last two seasons, which give occupations, headcount, offered wages and job order hours; the earnings records 655.20(i) requires; and the recruiter contracts, because the fee prohibition travels with the employer.[7] For a seller the same file is an asset when it shows a repeat filer with a clean record, and a disclosure item when it does not."
    }
  ],
  table: {
    caption:
      "Hotel H-2B certifications by occupation, fiscal 2025: traveler accommodation (NAICS 7211), certified and partly certified cases (DOL OFLC disclosure file)",
    columns: [
      "Occupation (SOC title)",
      "Cases",
      "Workers certified",
      "Share of hotel workers",
      "Median offered wage, per hour"
    ],
    rows: [
      ["Maids and housekeeping cleaners", "741", "10,556", "43.5%", "$16.67"],
      ["Cooks, restaurant", "319", "3,892", "16.0%", "$18.92"],
      ["Waiters and waitresses", "148", "2,191", "9.0%", "$18.71"],
      ["Hotel, motel and resort desk clerks", "185", "1,063", "4.4%", "$17.50"],
      ["Dishwashers", "96", "1,002", "4.1%", "$16.00"],
      ["Dining room attendants and bartender helpers", "79", "931", "3.8%", "$15.00"],
      ["Landscaping and groundskeeping workers", "70", "733", "3.0%", "$18.54"],
      ["Janitors and cleaners, except maids", "61", "617", "2.5%", "$19.00"],
      ["Top eight occupations", "1,699", "20,985", "86.5%", "n/a"],
      ["All 56 occupations", "2,121", "24,269", "100%", "$17.19"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet is where a seasonal payroll floor turns into a smaller loan. As of September 30, 2026 it shows the 10-year Treasury at 5.29 percent and Prime at 7.00 percent, and it marks the coverage and loan-to-value cells not yet published, because lenders do not publish them.[10] A guarantee the hotel pays in a soft season comes straight out of the income the loan is sized against.",
  },
  workedExample: {
    label:
      "Hypothetical: ten H-2B housekeepers at a 120-key seasonal resort hotel, 36-week season",
    body: "This hotel does not exist. The ten workers, the 36-week season, the drop to 24 useful hours a week and the 8.5 percent cap rate are assumptions, and yours will differ. Every figure below was recomputed by scripts/check-h2b-math.mjs before this page was saved.\n\nInputs: 10 workers; a job order stating 35 hours a week, which 1,149 of the 2,121 certified hotel cases do, the most common figure in the file; an offered wage of $16.67 an hour, the median for certified hotel housekeeping cases; and a 36-week season, 252 days, inside both the 211 to 258 day middle half of certified periods and the 9-month limit.[3][5]\n\nThe job order on its face: 35 hours times 36 weeks is 1,260 hours per worker, $21,004.20 each at $16.67, or $210,042 for ten.\n\nThe guarantee floor: 36 weeks is three 12-week periods, and three-quarters of 35 hours times 12 weeks is 315 hours per period, so 945 hours across the season.[7] At $16.67 that is $15,753.15 each, $157,531.50 for ten, owed whatever happens to occupancy.\n\nThe soft season: suppose only 24 hours of real work a week per housekeeper. Actual need is 24 times 36, or 864 hours each, against a 945-hour guarantee. The gap is 81 hours per worker, at $16.67 some $1,350.27 each and $13,502.70 across ten, paid for hours nobody worked. Check it per period: 315 guaranteed against 288 worked is 27 hours, times three is 81.\n\nWhat it is worth: $13,502.70 is 8.57 percent of the guarantee payroll. At an 8.5 percent cap rate, $13,502.70 divided by 0.085 is $158,855 of value, about $1,324 a key on 120 keys.\n\nTwo costs are missing on purpose. Inbound travel and subsistence are owed once each worker passes 50 percent of the period, and the corresponding-employment rule lifts the rate for the hotel's domestic housekeepers to the same floor.[6][7] No public source prices either, so neither is here, and both push the real figure up."
  },
  faq: [
    {
      q: "Can I still get H-2B workers for spring 2027?",
      a: "Not for a start date before April 1, 2027. That cap was reached on September 4, 2026, and later petitions are rejected.[2] April 1 or later falls in the second-half cap of 33,000, which takes an application filed 75 to 90 days ahead.[1][4]"
    },
    {
      q: "Can I use H-2B for a year-round front desk job?",
      a: "No. The need must be temporary and the certifying officer denies need lasting more than 9 months unless it is a one-time occurrence.[5] A permanently staffed position fails the test however hard it is to fill locally."
    },
    {
      q: "What is the three-fourths guarantee?",
      a: "A promise to offer each worker at least three-quarters of the workdays in every 12-week period of the job order, six weeks if the job order runs under 120 days.[7] The duty is to offer hours, so a soft season still gets paid for."
    },
    {
      q: "Do I have to raise pay for my existing housekeepers?",
      a: "Yes, if they do the same job. The employer must offer and pay the prevailing wage to H-2B workers and to workers in corresponding employment alike.[6] That is usually the larger cost of the two."
    },
    {
      q: "Can a recruiter charge the workers instead of the hotel?",
      a: "No. The employer, its attorneys, agents and employees must not seek or receive payment of any kind from a worker for anything tied to the certification or job, and recruiters must be contractually barred in writing.[7]"
    },
    {
      q: "Are extra H-2B visas available this year?",
      a: "None for fiscal 2027 as of November 2, 2026. The fiscal 2026 rule added 64,716 visas but expired on September 30, 2026, and the USCIS cap count page lists no supplemental numbers.[2][8] Do not budget for one."
    },
  ],
  sources: [
    {
      n: 1,
      label:
        "8 U.S.C. 1184(g): the H-2B numerical limitation of 66,000 a fiscal year at (g)(1)(B), and the limit of not more than 33,000 entries in the first six months of the fiscal year at (g)(10)",
      url: "https://www.law.cornell.edu/uscode/text/8/1184",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-02"
    },
    {
      n: 2,
      label:
        "Cap Count for H-2B Nonimmigrants, last reviewed or updated September 11, 2026: the 66,000 cap split into 33,000 for October 1 to March 31 and 33,000 for April 1 to September 30, unused first-half numbers moving to the second half and none carrying into the next fiscal year, the first-half fiscal 2027 cap reached on September 4, 2026 with that final receipt date and the September 11, 2026 announcement, no supplemental numbers listed, and the statement that approved and pending beneficiaries normally exceed the cap because of withdrawals, denials and approvals without a visa being issued",
      url: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-2b-non-agricultural-workers/cap-count-for-h-2b-nonimmigrants",
      publisher: "U.S. Citizenship and Immigration Services",
      accessed: "2026-11-02"
    },
    {
      n: 3,
      label:
        "H-2B Disclosure Data, fiscal year 2025 fourth quarter (H-2B_Disclosure_Data_FY2025_Q4.xlsx): 17,552 rows carrying a NAICS code of which 2,299 begin 7211, 13,844 certified cases and 232,326 workers certified across all industries, and for traveler accommodation 2,121 certified or partly certified cases, 24,269 workers certified, the occupation counts and median offered wages in the table, 1,449 peakload and 671 seasonal need claims, worksite state counts, a 227-day median certified employment period with a 211 to 258 day interquartile range, 260 cases ending more than nine calendar months after the begin date, a 35-hour modal job order week on 1,149 cases, 2,107 of 2,121 cases quoting an hourly rate, and a $17.19 median hourly offered wage. Counts computed from the file by scripts/check-h2b-math.mjs; the file carries 1,048,209 rows of which 1,030,656 are empty",
      url: "https://www.dol.gov/agencies/eta/foreign-labor/performance",
      publisher:
        "Office of Foreign Labor Certification, Employment and Training Administration, U.S. Department of Labor",
      accessed: "2026-11-02"
    },
    {
      n: 4,
      label:
        "20 CFR 655.15 (application filing requirements), title 20 edition of October 1, 2026: the requirement to file no more than 90 and no fewer than 75 calendar days before the date of need at (b), the return without review of applications from employers who failed to register or to obtain a prevailing wage determination, the ETA Form 9142B filing contents including the concurrent job order and agent and recruiter contracts at (a), electronic or mail filing at (c), multiple positions on one application at (e), and the emergency procedures cross-reference to 655.17",
      url: "https://www.ecfr.gov/current/title-20/part-655/section-655.15",
      publisher: "Electronic Code of Federal Regulations, National Archives",
      accessed: "2026-11-02"
    },
    {
      n: 5,
      label:
        "20 CFR 655.6 (temporary need), title 20 edition of October 1, 2026: need must be temporary regardless of whether the underlying job is permanent, the four categories of one-time occurrence, seasonal, peakload and intermittent need, and denial of any request where the need lasts more than 9 months except a one-time occurrence",
      url: "https://www.ecfr.gov/current/title-20/part-655/section-655.6",
      publisher: "Electronic Code of Federal Regulations, National Archives",
      accessed: "2026-11-02"
    },
    {
      n: 6,
      label:
        "20 CFR 655.10 (determination of prevailing wage), title 20 edition of October 1, 2026: the offered wage at least equal to the prevailing wage or the federal, state or local minimum wage, whichever is highest, the duty to offer and pay that wage to H-2B workers and workers in corresponding employment at (a), the prevailing wage as the arithmetic mean from the BLS Occupational Employment Statistics survey where no collective bargaining agreement applies at (b)(2), the determination required before the job order is filed and valid on the posting date at (c), and the highest applicable rate governing multiple worksites at (d)",
      url: "https://www.ecfr.gov/current/title-20/part-655/section-655.10",
      publisher: "Electronic Code of Federal Regulations, National Archives",
      accessed: "2026-11-02"
    },
    {
      n: 7,
      label:
        "20 CFR 655.20 (assurances and obligations of H-2B employers), title 20 edition of October 1, 2026: the rate of pay free and clear at (a), the three-fourths guarantee over each 12-week period, or six weeks for job orders under 120 days, with a workday measured by the hours the job order states, at (f), impossibility of fulfillment requiring certifying officer approval and the guarantee for elapsed time at (g), the earnings records breaking out hours offered inside and outside the guarantee at (i), transportation and subsistence to the place of employment on completion of 50 percent of the period at (j)(1)(i), the prohibition on employees paying fees at (o), the required written prohibition in recruiter contracts at (p), and non-discriminatory hiring at (r)",
      url: "https://www.ecfr.gov/current/title-20/part-655/section-655.20",
      publisher: "Electronic Code of Federal Regulations, National Archives",
      accessed: "2026-11-02"
    },
    {
      n: 8,
      label:
        "Exercise of Time-Limited Authority To Increase the Fiscal Year 2026 Numerical Limitation for the H-2B Temporary Nonagricultural Worker Program, 91 FR 5040 (February 3, 2026), effective January 30, 2026 through September 30, 2026: up to 64,716 additional visas limited to employers attesting to impending irreparable harm meaning permanent and severe financial loss, three allocations of 18,490, 27,736 and 18,490 by start date of need with the first two limited to returning workers from fiscal 2023, 2024 or 2025, no petitions accepted after September 15, 2026 or approved after September 30, 2026, and the first-half fiscal 2026 lottery assigning selected petitions the receipt date of September 12, 2025",
      url: "https://www.govinfo.gov/content/pkg/FR-2026-02-03/html/2026-02131.htm",
      publisher:
        "Office of the Federal Register and U.S. Government Publishing Office",
      accessed: "2026-11-02"
    },
    {
      n: 9,
      label:
        "Occupational Employment and Wage Statistics, May 2025, national industry-specific estimates (oesm25in4, four-digit NAICS file nat4d_M2025_dl.xlsx): maids and housekeeping cleaners (SOC 37-2012) in traveler accommodation (NAICS 721100) at 415,160 employed, a mean hourly wage of $17.63, a median of $16.79 and an annual mean of $36,670",
      url: "https://www.bls.gov/oes/special-requests/oesm25in4.zip",
      publisher: "U.S. Bureau of Labor Statistics",
      accessed: "2026-11-02"
    },
    {
      n: 10,
      label:
        "Matthews Hotel Markets hotel debt rate sheet, October 2026 edition: the 10-year Treasury at 5.29% and Prime at 7.00% as of September 30, 2026, with the debt service coverage and loan-to-value cells marked not yet published",
      url: "https://matthewshotelmarkets.com/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-11-02"
    }
  ],
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/hotel-operating-costs",
      "/hotel-industry/hotel-worker-minimum-wage",
      "/hotel-industry/how-hotels-make-money",
      "/hotel-industry/extended-stay-hotels"
    ],
    glossary: ["/glossary/noi", "/glossary/gop", "/glossary/cap-rate"],
    data: ["/rates"]
  },
  cta: {
    label: "Talk to the hospitality team",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets asks a seasonal hotel for its certified H-2B applications and job order hours before pricing it, because a payroll floor set by federal rule belongs in the offering material rather than in a buyer's re-trade."
};
