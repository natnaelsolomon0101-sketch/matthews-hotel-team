/**
 * What happens to my hotel if I file Chapter 11?
 * Answer page: /hotel-financing/chapter-11-bankruptcy
 *
 * Every figure and every rule here was read out of a primary source in the run
 * that wrote this file (2026-10-16): 11 U.S.C. 101, 301, 362, 363, 365, 552,
 * 1112, 1121 and 1129 and 28 U.S.C. 1930 on Cornell LII; the Judicial
 * Conference's Bankruptcy Court Miscellaneous Fee Schedule and the
 * Administrative Office's filing statistics release of July 28, 2026 on
 * uscourts.gov; and the triennial dollar adjustment at 90 FR 8941 (February 4,
 * 2025) from govinfo.
 *
 * Every figure in the worked example was recomputed in
 * scripts/check-chapter-11-math.mjs, committed alongside this file. Re-run it
 * before changing any number here.
 *
 * Deliberately absent, because no public source publishes them: what a hotel
 * Chapter 11 costs in professional fees; what share of hotel Chapter 11 cases
 * confirm a plan (the Administrative Office publishes filings by chapter, not
 * outcomes by collateral type); and whether a given loan's non-recourse
 * carve-out schedule converts on a voluntary filing, which is a lender term no
 * lender publishes. The page says so in each place rather than guessing.
 *
 * Also deliberately absent: any claim that a hotel is or is not single asset
 * real estate. Section 101(51B) gives a three-part test and does not name
 * hotels, so the page states the test and says the court makes the finding.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "chapter-11-bankruptcy",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Chapter 11 Bankruptcy: What Happens",
  h1: "What happens to my hotel if I file Chapter 11?",
  description:
    "What Chapter 11 does for a hotel owner and what it does not: the automatic stay, the 90-day single-asset clock, room revenue as cash collateral.",
  lastUpdated: "2026-10-16",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "What happens to my hotel if I file Chapter 11?",
    "Can filing bankruptcy stop a hotel foreclosure?",
    "Is a hotel single asset real estate in bankruptcy?",
    "Can I use my hotel's room revenue in bankruptcy?",
    "What happens to my franchise agreement if I file Chapter 11?",
    "Can a hotel file Subchapter V?",
    "How long do I have to file a plan in a hotel Chapter 11?",
    "What does a hotel Chapter 11 cost?"
  ],
  answer:
    "Filing stops a foreclosure the day it is filed.[1] But if the court finds the hotel is single asset real estate, the lender can have that stay lifted unless, within 90 days, the owner files a confirmable plan or starts paying monthly interest at the nondefault contract rate.[1][2] Chapter 11 filings reached 10,320 in the year ending June 30, 2026.[3]",
  takeaways: [
    "The automatic stay is immediate and it is the whole of what filing buys. Section 362(a) stops the foreclosure sale, the receivership application and the collection suit the moment the petition is filed, because a voluntary petition is itself the order for relief.[1][4]",
    "Room revenue is not free cash. Section 552(b)(2) names hotels and keeps a pre-filing lien attached to payments for the use or occupancy of rooms, which makes that money cash collateral the owner cannot spend without consent or a court order.[5][6]",
    "The franchise agreement's clause terminating on a bankruptcy filing is unenforceable under section 365(e)(1), and the exception in section 365(e)(2) is where franchisors argue.[7]",
    "Chapter 11 costs $1,738 to open, then 0.9 percent of disbursements every quarter the hotel pays out $1,000,000 or more.[8][9]",
    "Subchapter V is closed to most hotel owners: the ceiling is $3,424,000 since April 1, 2025, and the definition excludes a debtor whose primary activity is owning single asset real estate.[2][10]"
  ],
  sections: [
    {
      h2: "What does filing Chapter 11 actually stop?",
      lead:
        "The foreclosure sale, the receivership application and the collection suit, on the day the petition is filed, because the filing of a voluntary case is itself the order for relief.[4]",
      body:
        "Section 362(a) stops the commencement or continuation of a judicial, administrative or other action against the debtor, any act to create, perfect or enforce a lien against property of the estate, and any act to enforce a pre-petition lien against property of the debtor.[1]\n\nWhat the stay does not do is change the loan. The balance, the rate, the maturity and the default interest that has been accruing since the breach all survive the filing. The stay buys time, and the Code sets exactly how much. It does not make the hotel profitable."
    },
    {
      h2: "Is a hotel single asset real estate?",
      lead:
        "The Code does not say. It gives a three-part test, and the answer decides whether a 90-day clock runs against the owner.[1][2]",
      body:
        "Section 101(51B) defines single asset real estate as real property constituting a single property or project, other than residential real property with fewer than four residential units, that generates substantially all of the gross income of a debtor that is not a family farmer, and on which no substantial business is being conducted by the debtor other than the business of operating the real property and activities incidental to it.[2]\n\nA single-hotel borrowing entity clears the first two parts of that test without argument. The third is the fight. A hotel sells rooms, food, meeting space and parking, and whether that is a substantial business beyond operating real property is a finding the judge makes on the record in front of them. The statute carves out small residential property and does not name hotels either way, so an owner should not assume the answer and should not let a lender assert it without a ruling."
    },
    {
      h2: "What is the 90-day deadline?",
      lead:
        "90 days after the order for relief, or 30 days after the court rules the paragraph applies, whichever is later, to do one of exactly two things.[1]",
      body:
        "Section 362(d)(3) directs the court to lift the stay for a creditor secured by single asset real estate unless, by that date, the debtor has either filed a plan of reorganization that has a reasonable possibility of being confirmed within a reasonable time, or commenced monthly payments equal to interest at the then applicable nondefault contract rate on the value of the creditor's interest in the real estate.[1]\n\nThree details decide what that costs. The rate is the nondefault contract rate, not the default rate the note has been running at. The payment is calculated on the value of the creditor's interest in the real estate rather than on the loan balance, which on an underwater hotel is the smaller of the two numbers. And the statute lets the debtor make those payments out of rents or other income at the debtor's sole discretion, notwithstanding section 363(c)(2), which is the one place the Code hands a hotel debtor its own room revenue without a motion.[1][6] The 90 days can be extended for cause, but only by an order entered inside the first 90 days."
    },
    {
      h2: "Can I spend the hotel's room revenue?",
      lead:
        "Not without the lender's consent or a court order. Section 552(b)(2) reaches hotel room revenue by name, which makes it cash collateral.[5][6]",
      body:
        "Section 552(a) is the general rule: property the estate acquires after the filing is not subject to a lien created by a pre-filing security agreement. Section 552(b)(2) is the exception, and it was drafted for lodging. Where the security agreement extends to rents, or to the fees, charges, accounts or other payments for the use or occupancy of rooms and other public facilities in hotels, motels or other lodging properties, the lien keeps reaching that money after the filing, subject to the court ordering otherwise based on the equities of the case.[5]\n\nSection 363(a) defines cash collateral to include cash and deposit accounts in which both the estate and another entity hold an interest, section 363(c)(2) bars using it without each interested entity's consent or a court order, and section 363(c)(4) requires the rest to be segregated and accounted for.[6] Unauthorized use of cash collateral that substantially harms a creditor is itself cause to convert the case to Chapter 7 or dismiss it under section 1112(b)(4)(D).[11] So is failure to maintain insurance in a way that puts the estate or the public at risk.[11]"
    },
    {
      h2: "Does filing make me personally liable on the loan?",
      lead:
        "That depends on the carve-out schedule in your own guaranty, and no lender publishes one.",
      body:
        "A non-recourse hotel loan is non-recourse until a listed event converts it, and the list sits in the guaranty and the loan agreement rather than in any public document. Banks, CMBS lenders, life companies and debt funds do not publish their carve-out schedules, so no page can honestly tell an owner what their own documents say about a voluntary filing.\n\nRead the documents with counsel before the petition rather than after it. Where a carve-out does convert on a filing, the effect is to turn a balance the entity cannot pay into a judgment the principals can be pursued for."
    },
    {
      h2: "Can a hotel use Subchapter V?",
      lead:
        "Not if owning the hotel is the debtor's primary activity, and not at hotel loan sizes.[2][10]",
      body:
        "Subchapter V eligibility runs through the definition of small business debtor in section 101(51D), which carries two bars for a hotel owner. The first is the exclusion in the definition itself for a person whose primary activity is the business of owning single asset real estate.[2]\n\nThe second is the debt ceiling: $3,424,000 of aggregate noncontingent liquidated secured and unsecured debt, excluding debt owed to affiliates and insiders, raised from $3,024,725 by the triennial adjustment published at 90 FR 8941 on February 4, 2025 and effective for cases commenced on or after April 1, 2025.[10] The $7,500,000 ceiling many owners remember came from a temporary provision in section 1182(1) that sunset on June 21, 2024, which the same notice records.[10] A $14,000,000 hotel loan is over the current ceiling by a factor of four on its own."
    },
    {
      h2: "What happens to the franchise agreement?",
      lead:
        "The clause saying the filing terminates it is unenforceable under section 365(e)(1), and the exception in section 365(e)(2) is where the argument goes.[7]",
      body:
        "Section 365(a) lets the debtor, subject to the court's approval, assume or reject any executory contract or unexpired lease.[7] Section 365(e)(1) says a contract may not be terminated or modified after the case begins solely because of a clause conditioned on the debtor's insolvency or financial condition, the commencement of a case, or the appointment of a trustee or custodian.[7] Check the termination section of your own agreement for that clause.\n\nSection 365(e)(2)(A) takes it back where applicable law excuses the other party from accepting performance from or rendering performance to the trustee or an assignee and that party does not consent, which is the same test section 365(c)(1) applies to assumption and assignment.[7] Trademark licensing is the ground franchisors argue it on. If the agreement is assumed, section 365(b)(1) requires the debtor to cure the default or give adequate assurance of a prompt cure, compensate the counterparty, and give adequate assurance of future performance, which on a hotel usually means funding the deferred property improvement plan.[7] Section 365(n), which protects a licensee when the debtor is the licensor, does not help here, because a franchisee is the licensee and not the licensor.[7]"
    },
    {
      h2: "How long do I have to file a plan, and can the lender be forced to accept it?",
      lead:
        "120 days of exclusivity, never extendable past 18 months, and confirmation over the lender's objection only if the plan is fair and equitable.[12][13]",
      body:
        "Section 1121(b) gives the debtor the exclusive right to file a plan until 120 days after the order for relief, and section 1121(c)(3) runs exclusivity to 180 days to get that plan accepted by each impaired class.[12] A court can lengthen or shorten both periods for cause, but section 1121(d)(2) caps the 120-day period at 18 months and the 180-day period at 20 months after the order for relief.[12] After that, anyone can file a competing plan, the lender included.\n\nConfirmation needs at least one impaired class to accept, counting no insider's vote, under section 1129(a)(10).[13] Where an impaired class rejects, section 1129(b)(1) still lets the court confirm a plan that does not discriminate unfairly and is fair and equitable. For a secured claim, section 1129(b)(2)(A) sets out what that means: the lender keeps its lien and takes deferred cash payments totalling at least the allowed amount of the claim with a present value at least equal to its interest in the property, or the property is sold free and clear with the lien attaching to the proceeds, subject to credit bidding under section 363(k).[13][6] A plan that cannot show the hotel carrying that payment stream is not a plan, which is why the debt service coverage ratio matters inside a Chapter 11."
    },
    {
      h2: "What does Chapter 11 cost to run?",
      lead:
        "$1,738 to open the case, then 0.9 percent of disbursements in every quarter the hotel pays out $1,000,000 or more.[8][9]",
      body:
        "The statutory fee for a Chapter 11 case that does not concern a railroad is $1,167 under 28 U.S.C. 1930(a)(3), and item 8 of the Judicial Conference's Bankruptcy Court Miscellaneous Fee Schedule, effective December 1, 2023, adds a $571 administrative fee for a Chapter 11 petition.[8][9]\n\nThe running cost is the quarterly United States trustee fee. During the ten-year period beginning January 1, 2021, section 1930(a)(6)(B) sets that fee at 0.9 percent of disbursements, capped at $250,000, for any quarter in which disbursements total at least $1,000,000, and at the greater of 0.4 percent or $250 below that line.[8] The 0.9 percent figure came in with Public Law 119-76 and applies to fees for disbursements in any calendar quarter beginning on or after February 6, 2026.[8] Disbursements means money paid out, not profit, so a hotel meeting payroll and paying vendors crosses $1,000,000 a quarter at a modest size.\n\nThe larger bill is professional fees, and no public source publishes what a hotel Chapter 11 costs in counsel, financial advisors and the lender's fees charged to the estate. Ask for an estimate in writing before filing. Failure to file a disclosure statement, or to file or confirm a plan, within the time the court fixes is itself cause to convert or dismiss under section 1112(b)(4)(J).[11]"
    }
  ],
  table: {
    caption: "Chapter 11 deadlines and statutory costs a hotel owner cannot negotiate",
    columns: ["Item", "What the statute sets", "Measured from", "Authority"],
    rows: [
      [
        "Automatic stay begins",
        "On filing. A voluntary petition is itself the order for relief",
        "Petition date",
        "11 U.S.C. 362(a), 301(b)"
      ],
      [
        "Single asset real estate: plan or pay",
        "90 days, or 30 days after the court rules the paragraph applies, whichever is later. Extendable for cause only by an order inside the 90 days",
        "Order for relief",
        "11 U.S.C. 362(d)(3)"
      ],
      [
        "Exclusive right to file a plan",
        "120 days, extendable for cause but never past 18 months",
        "Order for relief",
        "11 U.S.C. 1121(b), (d)(2)(A)"
      ],
      [
        "Exclusive right to get it accepted",
        "180 days, extendable for cause but never past 20 months",
        "Order for relief",
        "11 U.S.C. 1121(c)(3), (d)(2)(B)"
      ],
      [
        "Case filing fee",
        "$1,167 statutory plus a $571 administrative fee, $1,738 in total",
        "Petition date",
        "28 U.S.C. 1930(a)(3); Fee Schedule item 8"
      ],
      [
        "Quarterly United States trustee fee",
        "0.9 percent of disbursements, capped at $250,000, in any quarter with $1,000,000 or more disbursed",
        "Each calendar quarter",
        "28 U.S.C. 1930(a)(6)(B)"
      ],
      [
        "Subchapter V debt ceiling",
        "$3,424,000, and closed to a debtor whose primary activity is owning single asset real estate",
        "Petition date",
        "11 U.S.C. 101(51D); 90 FR 8941"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet puts the 10-year Treasury at 5.29 percent as of September 30, 2026 and Prime at 7.00 percent, unchanged since September 17.[14] Those are the published benchmarks a replacement loan prices off. The discount rate a court uses to test present value under section 1129(b)(2)(A)(i)(II) is a finding in the case, not a published number, and nobody should treat a benchmark as a substitute for it.[13]"
  },
  workedExample: {
    label: "Hypothetical: a 110-key hotel and the 90-day choice under section 362(d)(3)",
    body:
      "Hypothetical, and every input is an assumption rather than a published figure. A 110-key select-service hotel. Loan balance $14,000,000. Nondefault contract rate 6.50 percent. The court values the lender's interest in the real estate at $11,500,000. The hotel runs $7,600,000 of revenue and disburses about $1,850,000 a quarter.\n\nThe section 362(d)(3)(B) payment is interest at the nondefault contract rate on the value of the creditor's interest in the real estate, so $11,500,000 times 6.50 percent is $747,500 a year, or $62,291.67 a month.[1] Interest on the full $14,000,000 balance at the same rate would be $75,833.33 a month, so calculating on value rather than balance saves about $13,542 a month. The annual figure, $747,500, is 9.8 percent of revenue.\n\nThe statutory costs stack on top. Four quarters at 0.9 percent of $1,850,000 is $16,650 a quarter, or $66,600 a year, plus $1,738 to open the case.[8][9] If the owner takes the payment route at day 90 and the case runs a year, that is nine monthly payments of $62,291.67, which is $560,625, plus $66,600, plus $1,738: $628,963, or $5,718 a key, before a dollar of professional fees. The alternative is to have a plan on file inside 90 days that a court could confirm within a reasonable time.[1]"
  },
  faq: [
    {
      q: "Does filing Chapter 11 stop a hotel foreclosure?",
      a: "Yes, on the day the petition is filed. Section 362(a) stops the sale, the receivership application and the collection suit, and the filing of a voluntary case is itself the order for relief.[1][4] It does not change the loan."
    },
    {
      q: "Is a hotel single asset real estate under the Bankruptcy Code?",
      a: "The Code does not say. Section 101(51B) asks whether the debtor conducts a substantial business beyond operating the real property, and the court makes that finding on the record in front of it.[2] Hotels are not named either way."
    },
    {
      q: "Can I use my hotel's room revenue after I file?",
      a: "Only with the lender's consent or a court order. Section 552(b)(2) keeps a pre-filing lien on payments for the use or occupancy of rooms, which makes it cash collateral under section 363.[5][6] Section 362(d)(3) is the narrow exception."
    },
    {
      q: "Will I lose the franchise if I file?",
      a: "Not automatically. Section 365(e)(1) makes a clause terminating on a bankruptcy filing unenforceable.[7] Assuming the agreement means curing the default and giving adequate assurance of future performance, which usually means funding the property improvement plan."
    },
    {
      q: "Can a hotel file under Subchapter V?",
      a: "Rarely. Section 101(51D) excludes a debtor whose primary activity is owning single asset real estate, and caps debt at $3,424,000 since April 1, 2025.[2][10] The temporary $7,500,000 ceiling sunset on June 21, 2024."
    },
    {
      q: "How long does a hotel Chapter 11 take?",
      a: "The Code sets the outer edges, not the duration. Exclusivity runs 120 days and cannot be extended past 18 months after the order for relief; acceptance exclusivity runs 180 days and stops at 20 months.[12]"
    },
    {
      q: "What does Chapter 11 cost a hotel owner?",
      a: "$1,738 to open, then 0.9 percent of quarterly disbursements above $1,000,000, capped at $250,000 a quarter.[8][9] Professional fees are the larger number and no public source publishes them. Get an estimate in writing first."
    },
    {
      q: "Is a court-approved sale better than a plan?",
      a: "Sometimes. Section 363(f) allows a sale free and clear of liens in defined circumstances, and section 363(k) lets the lender credit bid.[6] A clean title attracts buyers; the cost is fees, time and a public process."
    }
  ],
  sources: [
    {
      n: 1,
      label: "11 U.S.C. 362, automatic stay, including (a) and (d)(3) on single asset real estate",
      url: "https://www.law.cornell.edu/uscode/text/11/362",
      publisher: "Cornell Law School Legal Information Institute",
      accessed: "2026-10-16"
    },
    {
      n: 2,
      label: "11 U.S.C. 101, definitions, including (51B) single asset real estate and (51D) small business debtor",
      url: "https://www.law.cornell.edu/uscode/text/11/101",
      publisher: "Cornell Law School Legal Information Institute",
      accessed: "2026-10-16"
    },
    {
      n: 3,
      label: "Bankruptcies Rise 12.2 Percent (10,320 Chapter 11 filings in the year ending June 30, 2026), July 28, 2026",
      url: "https://www.uscourts.gov/data-news/judiciary-news/2026/07/28/bankruptcies-rise-122-percent",
      publisher: "Administrative Office of the U.S. Courts",
      accessed: "2026-10-16"
    },
    {
      n: 4,
      label: "11 U.S.C. 301, voluntary cases: the commencement of a voluntary case constitutes an order for relief",
      url: "https://www.law.cornell.edu/uscode/text/11/301",
      publisher: "Cornell Law School Legal Information Institute",
      accessed: "2026-10-16"
    },
    {
      n: 5,
      label: "11 U.S.C. 552, postpetition effect of a security interest, including (b)(2) on hotels, motels and other lodging properties",
      url: "https://www.law.cornell.edu/uscode/text/11/552",
      publisher: "Cornell Law School Legal Information Institute",
      accessed: "2026-10-16"
    },
    {
      n: 6,
      label: "11 U.S.C. 363, use, sale or lease of property, including (a) and (c) on cash collateral, (f) on sales free and clear and (k) on credit bidding",
      url: "https://www.law.cornell.edu/uscode/text/11/363",
      publisher: "Cornell Law School Legal Information Institute",
      accessed: "2026-10-16"
    },
    {
      n: 7,
      label: "11 U.S.C. 365, executory contracts and unexpired leases, including (b)(1), (c)(1), (e) and (n)",
      url: "https://www.law.cornell.edu/uscode/text/11/365",
      publisher: "Cornell Law School Legal Information Institute",
      accessed: "2026-10-16"
    },
    {
      n: 8,
      label: "28 U.S.C. 1930, bankruptcy fees, including (a)(3) and the quarterly fee schedule at (a)(6)",
      url: "https://www.law.cornell.edu/uscode/text/28/1930",
      publisher: "Cornell Law School Legal Information Institute",
      accessed: "2026-10-16"
    },
    {
      n: 9,
      label: "Bankruptcy Court Miscellaneous Fee Schedule, item 8, effective December 1, 2023",
      url: "https://www.uscourts.gov/court-programs/fees/bankruptcy-court-miscellaneous-fee-schedule",
      publisher: "Administrative Office of the U.S. Courts",
      accessed: "2026-10-16"
    },
    {
      n: 10,
      label: "Adjustment of Certain Dollar Amounts Applicable to Bankruptcy Cases, 90 FR 8941 (February 4, 2025), effective April 1, 2025",
      url: "https://www.govinfo.gov/content/pkg/FR-2025-02-04/html/2025-02207.htm",
      publisher: "Judicial Conference of the United States, via the Federal Register",
      accessed: "2026-10-16"
    },
    {
      n: 11,
      label: "11 U.S.C. 1112, conversion or dismissal, including (b)(4)(C), (D) and (J)",
      url: "https://www.law.cornell.edu/uscode/text/11/1112",
      publisher: "Cornell Law School Legal Information Institute",
      accessed: "2026-10-16"
    },
    {
      n: 12,
      label: "11 U.S.C. 1121, who may file a plan, including the 120-day and 180-day periods and the 18-month and 20-month caps",
      url: "https://www.law.cornell.edu/uscode/text/11/1121",
      publisher: "Cornell Law School Legal Information Institute",
      accessed: "2026-10-16"
    },
    {
      n: 13,
      label: "11 U.S.C. 1129, confirmation of plan, including (a)(10) and (b) on cramdown",
      url: "https://www.law.cornell.edu/uscode/text/11/1129",
      publisher: "Cornell Law School Legal Information Institute",
      accessed: "2026-10-16"
    },
    {
      n: 14,
      label: "Hotel debt rate sheet, October 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-10-16"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/loan-workouts",
      "/hotel-financing/non-recourse-loans",
      "/hotel-financing/covenants-and-cash-management",
      "/hotel-financing/refinance-or-sell"
    ],
    glossary: [
      "/glossary/non-recourse-carve-outs",
      "/glossary/franchise-agreement",
      "/glossary/dscr"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Talk to the capital markets desk",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets works on distressed hotels, including receivership and note sales, and a free broker opinion of value is the cheapest way to find out whether the asset can carry its debt before a filing is on the table."
};

export default page;
