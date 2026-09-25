/**
 * What happens to my employees when I sell my hotel?
 * Answer page: /sell-a-hotel/employees-when-you-sell
 *
 * Written 2026-09-25 from primary sources: 29 U.S.C. 2101-2104 (Cornell LII),
 * 20 CFR 639.4 (eCFR), BLS QCEW 2025 annual data for NAICS 72111, California
 * Labor Code 1400.5, 1401, 1402, 1403 and 2810.8 (leginfo), New York State
 * Department of Labor, Fall River Dyeing v. NLRB, and IRS Publication 15 (2026).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "employees-when-you-sell",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "What Happens to Hotel Staff in a Sale?",
  description: "Who employs your hotel staff after closing, when federal and state WARN notice applies, and what the purchase agreement should say about it.",
  h1: "What happens to my employees when I sell my hotel?",
  lastUpdated: "2026-09-25",
  authorSlug: "nate-solomon",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "What happens to my staff and franchise agreement when I sell my hotel?",
    "What happens to my employees when the hotel sells?",
    "Do I have to give my hotel staff notice before I sell?",
    "Does the WARN Act apply when I sell my hotel?",
    "Does the buyer have to keep my hotel employees?",
    "When do I tell my hotel staff the hotel is being sold?",
    "Who pays accrued vacation when a hotel changes hands?"
  ],
  answer: "At closing the seller's operator usually terminates the staff and the buyer's operator rehires them the same day. Federal WARN reaches employers with 100 or more employees, and the average US hotel employed about 25 people in 2025, so most single-asset sales sit outside it.[1][2] California's threshold is 75.[3]",
  takeaways: [
    "Federal WARN covers employers with 100 or more employees, excluding part-time.[1] The average US hotel employed 25.1 people in 2025.[2]",
    "On a sale, the seller owns the notice duty up to and including the closing date and the buyer owns it after.[4][5] Staff employed by the seller at closing are treated as the buyer's employees immediately after.[1]",
    "State thresholds are lower and notice periods longer. California covers establishments of 75 or more and New York requires 90 days.[3][6][7]",
    "A California hotel with 50 or more guest rooms can carry recall obligations that survive a change of ownership, until the statute goes inoperative on January 1, 2027.[8]",
    "Nobody at a brokerage should answer this for you. Get employment counsel on the file before the purchase agreement is signed."
  ],
  sections: [
    {
      h2: "What actually happens to the staff at closing?",
      lead: "In the standard structure the seller's operator terminates the employees effective at closing and the buyer's operator hires them back the same day, usually at the same wage.",
      body: "A hotel sale transfers a business, not just a building. Almost every hotel purchase agreement excludes the employees from the assets conveyed, so the seller's employing entity, often a third-party management company rather than the owner, ends the employment relationship at the closing hour. The buyer's operator extends offers, usually to nearly everyone, and the staff works the next shift for a new employer.\nFor a line-level employee that means a new W-2, new benefit enrollment and often a reset of internal seniority. For the seller it means a final payroll, a final accrual settlement, and making sure the terminations do not count as an employment loss the law required notice for. The money and the notice are what the purchase agreement allocates."
    },
    {
      h2: "Does selling my hotel trigger WARN notice?",
      lead: "Usually not, because federal WARN only reaches employers with 100 or more employees and the statute treats a sale's employees as continuing with the buyer.[1]",
      body: "Two tests have to be met before the federal Worker Adjustment and Retraining Notification Act applies. The employer test: a business enterprise that employs 100 or more employees excluding part-time, or 100 or more who in the aggregate work at least 4,000 hours a week excluding overtime.[1] A part-time employee is one averaging fewer than 20 hours a week, or employed fewer than 6 of the preceding 12 months.[1] The event test: a plant closing is 50 or more employment losses at a single site in any 30-day period, and a mass layoff is 50 or more losses that are also at least 33 percent of the workforce, or 500 or more outright.[1]\n\nMost single-asset hotel sales fail the first test. Bureau of Labor Statistics quarterly census data for hotels and motels except casino hotels puts 1,548,238 average employment across 61,618 establishments in 2025, or 25.1 employees per hotel.[2] A full-service or resort property can clear 100; a 90-key select-service hotel almost never does.\n\nEven where the employer test is met, the sale itself is not automatically an employment loss. Any person who is an employee of the seller, other than a part-time employee, as of the effective date of the sale is considered an employee of the purchaser immediately after that date.[1] Same-day terminate-and-rehire therefore does not create the 50 losses on its own. What creates them is the buyer declining to take a large part of the staff, after closing, on the buyer's notice duty."
    },
    {
      h2: "Who gives the notice, the buyer or the seller?",
      lead: "The seller is responsible for notice of any closing or mass layoff up to and including the effective date of the sale, and the buyer for any that happens after.[4][5]",
      body: "Congress drew the line at the closing hour and the Department of Labor's regulation repeats it: the seller gives notice for a plant closing or mass layoff up to and including the effective date of the sale, the buyer for one that takes place thereafter, and affected employees are always entitled to notice.[5] The regulation adds a point that belongs in every letter of intent. If the seller is made aware of definite plans by the buyer to carry out a closing or mass layoff within 60 days of purchase, the seller may give notice as agent of the buyer where it is empowered to do so, and if the seller does not, the buyer is still responsible.[5] The regulation then says it may be prudent for buyer and seller to work out the impact on workers between them in advance.[5]\n\nThat is the drafting instruction. If the buyer intends to cut headcount in the first two months, decide before signing who serves the notice and when, because the 60-day federal clock runs backward from the layoff date, not from closing.[4]"
    },
    {
      h2: "Which state laws are stricter than federal WARN?",
      lead: "Several. California covers establishments of 75 or more persons and New York requires 90 days' notice from employers with 50 or more full-time employees.[3][7]",
      body: "California's Cal/WARN Act defines a covered establishment as any industrial or commercial facility, or part of one, that employs or has employed within the preceding 12 months 75 or more persons.[3] There is no part-time carve-out in that count, and an employee is anyone employed at least 6 of the preceding 12 months.[3] A mass layoff is 50 or more employees at a covered establishment in any 30-day period, and a termination is the cessation or substantial cessation of operations.[3] Notice runs 60 days and goes to the affected employees, the Employment Development Department, the local workforce development board and the chief elected official of each city and county involved, with required content including rapid-response and CalFresh information.[6]\n\nNew York is longer on timing. Its WARN Act applies to private businesses with 50 or more full-time employees in the state and covers closings affecting 25 or more, mass layoffs of 25 or more full-time employees that are at least 33 percent of the site, and mass layoffs of 250 or more. Notice is 90 days.[7]\n\nOther states have their own versions with their own numbers. Check the law where the hotel sits. We are hotel brokers, not employment lawyers, and nothing here is legal advice."
    },
    {
      h2: "Does California's hotel recall law follow the sale?",
      lead: "Yes. Section 2810.8 applies to hotels of 50 or more guest rooms and reaches a buyer that acquires substantially all the assets and runs the same operations, until the section goes inoperative on January 1, 2027.[8]",
      body: "Section 2810.8 gives recall rights to a laid-off employee, defined as someone employed 6 months or more whose most recent separation happened on or after March 4, 2020 for a reason related to the COVID-19 pandemic, including lack of business or a reduction in force.[8] A separation for an economic, nondisciplinary reason is presumed pandemic-related unless the employer proves otherwise.[8] A hotel means a lodging building with 50 or more guest rooms or suites.[8]\n\nWhen a position opens, the employer has five business days to offer it in writing to qualified laid-off employees in order of length of service, and each has five business days to respond.[8] Layoff records must be kept three years.[8] The part that matters on a sale is subdivision (b)(6): the section also applies where ownership of the employer changed after the separation but the enterprise conducts the same or similar operations, and where substantially all of the assets were acquired by another entity running the same or similar operations.[8] A buyer can inherit a recall list.\n\nRemedies run to reinstatement, front pay or back pay for each day the violation continues, benefit value, a $100 civil penalty per employee and $500 per employee per day in liquidated damages.[8] The section is operative only until January 1, 2027, though a violation occurring on or before December 31, 2026 stays enforceable.[8] Any California hotel closing in 2026 should ask for the recall records in diligence."
    },
    {
      h2: "What does the buyer inherit if the hotel is union?",
      lead: "Not the contract, but usually the duty to bargain, if a majority of the buyer's workforce came from the seller's.",
      body: "The Supreme Court held in Fall River Dyeing & Finishing Corp. v. NLRB that a successor employer is not bound by the substantive provisions of its predecessor's collective bargaining agreement, but must bargain with the union so long as it is in fact a successor and a majority of its employees worked for the predecessor.[9] Successorship turns on the totality of the circumstances, with the emphasis on substantial continuity between the enterprises, judged largely from the retained employees' view of whether their job situations are essentially unaltered.[9] The counting moment is when the successor has a substantial and representative complement of employees.[9]\n\nA hotel that reopens the next morning with the same rooms, the same guests and most of the same staff is close to the paradigm case. A buyer changing the operator, the brand and most of the staff is not, and that is a question for labor counsel before the offer."
    },
    {
      h2: "What does it cost to get the notice wrong?",
      lead: "Back pay and benefits for each day of violation, capped at 60 days, plus a civil penalty of up to $500 a day, enforced only in court.[10][11]",
      body: "Under the federal statute an employer that orders a covered closing or layoff without notice owes each aggrieved employee back pay for each day of violation, at the higher of the average regular rate over the last three years or the final regular rate, plus benefits including medical expenses a plan would have covered.[10] Liability is capped at 60 days, and never more than half the days the employee worked there.[10] Wages actually paid in the period, voluntary unconditional payments and third-party benefit payments reduce it.[10] A separate civil penalty of up to $500 a day runs to the unit of local government, and does not apply if the employer pays every aggrieved employee in full within three weeks of ordering the layoff.[10] California's remedy is built the same way, with the same 60-day cap and the same $500 daily penalty and three-week cure.[12][13]\n\nOne detail sellers get wrong: the Department of Labor does not enforce this. Its own guidance says the federal court solely enforces the Act and that DOL's answers are not binding on courts.[11] There is no agency to call for a ruling and no safe harbor letter to obtain. The exposure is decided by a judge, years later, on facts the parties created at closing."
    },
    {
      h2: "What should the purchase agreement say about employees?",
      lead: "Who terminates and when, who offers and on what terms, who pays accrued time off, who serves any notice, and an indemnity that follows those lines.",
      body: "Five points do the work. The termination mechanic: the seller's employing entity terminates effective at the closing hour, with a stated employee list. The buyer's offer covenant: whether the buyer must offer employment to a set share of the staff, at what wage, and for how long it holds headcount. That clause decides whether a post-closing layoff becomes the buyer's notice problem. Accrued paid time off: the seller pays it out at closing, or the buyer assumes it and takes a credit against the price. Notice allocation: who serves any federal or state notice, and by what date. And an indemnity on each side of the closing line.\n\nPayroll tax is the easy part. Where an acquisition meets the requirements, wages paid by the predecessor count toward the social security wage base, $184,500 for 2026, and the $200,000 Additional Medicare Tax threshold.[14] A buyer that skips it restarts every employee's wage base and overpays employer social security tax on the rehired staff. Ask the seller's payroll provider for the detail before closing, not in February."
    }
  ],
  table: {
    caption: "Layoff notice thresholds that can apply to a hotel sale, September 2026",
    columns: [
      "Rule",
      "Employer or site size",
      "Event that triggers notice",
      "Notice period",
      "Who enforces"
    ],
    rows: [
      [
        "Federal WARN",
        "100 or more employees excluding part-time, or 100 or more working 4,000 or more hours a week[1]",
        "50 or more employment losses at one site in 30 days; or 50 or more that are 33 percent of the site; or 500 or more[1]",
        "60 days[4]",
        "Federal district court only; DOL has no enforcement role[11]"
      ],
      [
        "California Cal/WARN",
        "Establishment employing, or having employed in the preceding 12 months, 75 or more persons[3]",
        "Mass layoff of 50 or more in 30 days, a termination of operations, or a relocation 100 miles or more away[3]",
        "60 days[6]",
        "Back pay plus up to $500 a day civil penalty[12][13]"
      ],
      [
        "New York WARN",
        "50 or more full-time employees in New York State[7]",
        "Closing affecting 25 or more; mass layoff of 25 or more that is 33 percent of the site; or 250 or more[7]",
        "90 days[7]",
        "New York State Department of Labor[7]"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 publishes observed transaction counts by market, which is the count of hotels whose staff changed employers in the quarter.[15]"
  },
  workedExample: {
    label: "Hypothetical: a 120-key California hotel with 114 people on the payroll",
    body: "Hypothetical, and illustrative rather than a quote for any real hotel. A 120-key full-service hotel in California employs 96 full-time people averaging 38 hours a week and 18 part-time people averaging 15 hours. The buyer's operator will rehire almost everyone.\n\nFederal test one, headcount: 96 employees excluding part-time, below the 100 threshold.[1] Federal test two, aggregate hours: 96 times 38 is 3,648, plus 18 times 15, which is 270, for 3,918 hours a week. That is 82 hours short of the 4,000-hour alternative.[1] Not a federal WARN employer, by a margin one new full-time hire would erase.\n\nCalifornia is a different answer. Cal/WARN counts persons employed at the establishment in the preceding 12 months with no part-time carve-out, so the count is 114, above the 75-person threshold.[3] If the closing is structured as a termination of all 114, that clears the 50-employee mass layoff trigger too, and 60 days' notice is owed.[3][6]\n\nWhat missing that notice would cost, using the national average hotel wage as a stand-in for this hotel's actual payroll: Bureau of Labor Statistics quarterly census data puts the 2025 average weekly wage at hotels and motels except casino hotels at $857.[2] Sixty calendar days is 60 divided by 7, or 8.571 weeks. 8.571 times $857 is $7,345.71 per employee. Across 114 employees that is $837,411, before the value of benefits, and before a civil penalty of $500 a day for 60 days, which is $30,000.[12][13] The statute caps liability at 60 days or half the days the employee worked there, whichever is smaller, and reduces it by wages actually paid in the period, so a real number lands lower.[12] It is still large next to the cost of one question to employment counsel in week one."
  },
  faq: [
    {
      q: "Does the buyer have to keep my hotel employees?",
      a: "Not as a matter of federal law. The buyer decides who to offer jobs to, subject to any covenant in the purchase agreement and to state laws such as California's hotel recall statute, which can follow a change of ownership.[8]"
    },
    {
      q: "Do I have to give my hotel staff 60 days' notice before selling?",
      a: "Only if federal or state WARN applies. Federal WARN reaches employers with 100 or more employees excluding part-time, and the average US hotel employed 25.1 people in 2025.[1][2] California's threshold is 75 persons.[3]"
    },
    {
      q: "Who is responsible for WARN notice, me or the buyer?",
      a: "The seller is responsible for any closing or mass layoff up to and including the effective date of the sale, the buyer for any afterward.[4][5] If the buyer plans cuts inside 60 days, settle who notices before signing."
    },
    {
      q: "When should I tell my hotel employees the hotel is selling?",
      a: "That is a timing decision for you and employment counsel. Where notice is legally required the deadline is fixed: 60 days before the event under federal and California law, 90 days in New York.[4][6][7]"
    },
    {
      q: "What happens to accrued vacation when a hotel changes hands?",
      a: "It is a negotiated line in the purchase agreement. Either the seller pays it out at closing or the buyer assumes the liability and takes a credit against the price. State wage law can force the payout, so confirm it locally."
    },
    {
      q: "Does a union contract transfer to the hotel buyer?",
      a: "The substantive contract terms do not bind a successor, but the duty to bargain with the union usually does where a majority of the buyer's employees came from the seller and there is substantial continuity in the business.[9]"
    },
    {
      q: "Does the buyer restart payroll taxes on rehired hotel staff?",
      a: "Not if the acquisition qualifies. Wages the predecessor paid can count toward the social security wage base, $184,500 for 2026, and the $200,000 Additional Medicare Tax threshold.[14] Get the predecessor wage detail before closing."
    },
    {
      q: "Can my broker answer the WARN question for me?",
      a: "No. Matthews Hotel Markets sells hotels and arranges hotel financing; we do not practice employment law. Put employment counsel on the file before the purchase agreement is signed, because the answer sets the closing date."
    }
  ],
  sources: [
    {
      n: 1,
      label: "29 U.S.C. 2101, Definitions; exclusions from definition of loss of employment",
      url: "https://www.law.cornell.edu/uscode/text/29/2101",
      publisher: "Cornell Law School, Legal Information Institute",
      accessed: "2026-09-25"
    },
    {
      n: 2,
      label: "Quarterly Census of Employment and Wages, 2025 annual averages, NAICS 72111 hotels and motels except casino hotels, private ownership, United States",
      url: "https://data.bls.gov/cew/data/api/2025/a/industry/72111.csv",
      publisher: "U.S. Bureau of Labor Statistics",
      accessed: "2026-09-25"
    },
    {
      n: 3,
      label: "California Labor Code section 1400.5, Cal/WARN Act definitions",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=1400.5",
      publisher: "California Legislative Information",
      accessed: "2026-09-25"
    },
    {
      n: 4,
      label: "29 U.S.C. 2102, Notice required before plant closings and mass layoffs",
      url: "https://www.law.cornell.edu/uscode/text/29/2102",
      publisher: "Cornell Law School, Legal Information Institute",
      accessed: "2026-09-25"
    },
    {
      n: 5,
      label: "20 CFR 639.4(c), Who must give notice, sale of part or all of a business",
      url: "https://www.ecfr.gov/current/title-20/chapter-V/part-639/section-639.4",
      publisher: "Electronic Code of Federal Regulations, U.S. Department of Labor",
      accessed: "2026-09-25"
    },
    {
      n: 6,
      label: "California Labor Code section 1401, required notice and its contents",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=1401",
      publisher: "California Legislative Information",
      accessed: "2026-09-25"
    },
    {
      n: 7,
      label: "Worker Adjustment and Retraining Notification (WARN), how WARN works",
      url: "https://dol.ny.gov/worker-adjustment-and-retraining-notification-warn",
      publisher: "New York State Department of Labor",
      accessed: "2026-09-25"
    },
    {
      n: 8,
      label: "California Labor Code section 2810.8, rehiring and retention of displaced hotel and hospitality workers (amended by Stats. 2025, Ch. 280)",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=2810.8",
      publisher: "California Legislative Information",
      accessed: "2026-09-25"
    },
    {
      n: 9,
      label: "Fall River Dyeing & Finishing Corp. v. NLRB, 482 U.S. 27 (1987)",
      url: "https://www.law.cornell.edu/supremecourt/text/482/27",
      publisher: "Cornell Law School, Legal Information Institute",
      accessed: "2026-09-25"
    },
    {
      n: 10,
      label: "29 U.S.C. 2104, Administration and enforcement of requirements",
      url: "https://www.law.cornell.edu/uscode/text/29/2104",
      publisher: "Cornell Law School, Legal Information Institute",
      accessed: "2026-09-25"
    },
    {
      n: 11,
      label: "Worker Adjustment and Retraining Notification Act (WARN), program page",
      url: "https://www.dol.gov/agencies/eta/layoffs/warn",
      publisher: "U.S. Department of Labor, Employment and Training Administration",
      accessed: "2026-09-25"
    },
    {
      n: 12,
      label: "California Labor Code section 1402, employer liability for failure to give notice",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=1402",
      publisher: "California Legislative Information",
      accessed: "2026-09-25"
    },
    {
      n: 13,
      label: "California Labor Code section 1403, civil penalty",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=1403",
      publisher: "California Legislative Information",
      accessed: "2026-09-25"
    },
    {
      n: 14,
      label: "Publication 15 (2026), Circular E, Employer's Tax Guide, successor employer and the 2026 social security wage base",
      url: "https://www.irs.gov/publications/p15",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-25"
    },
    {
      n: 15,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-25"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/documents-needed",
      "/sell-a-hotel/franchise-transfer",
      "/sell-a-hotel/how-to-sell-a-hotel",
      "/sell-a-hotel/how-long-it-takes",
      "/sell-a-hotel/off-market-vs-marketed"
    ],
    glossary: [
      "/glossary/gop",
      "/glossary/franchise-agreement",
      "/glossary/noi"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Talk through your sale timeline",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells hotels from $2 million, and the employee question belongs on the timeline in the first week of an engagement, not the week before closing."
};

export default page;
