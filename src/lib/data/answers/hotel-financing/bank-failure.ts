/**
 * What happens to my hotel loan if my bank fails?
 * Answer page: /hotel-financing/bank-failure
 *
 * Written 2026-11-26 from 12 U.S.C. 1821, 1823(e) and 1831o and 12 CFR
 * 324.403 read on Cornell LII, plus the FDIC's own borrower, depositor,
 * creditor and lien-release pages, its Failed Bank List and the third
 * quarter 2026 Quarterly Banking Profile release. Every figure in the worked
 * example is recomputed by scripts/check-bank-failure-math.mjs.
 *
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "bank-failure",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Loan When Your Bank Fails",
  description: "What happens to a hotel loan when the lender fails: who you pay, whether the undrawn construction money survives, and what the FDIC will not honor.",
  h1: "What happens to my hotel loan if my bank fails?",
  lastUpdated: "2026-11-26",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "What happens to my hotel loan if my bank fails?",
    "Do I still have to pay my mortgage if the bank that made it failed?",
    "Can the FDIC stop funding my hotel construction loan?",
    "Does the FDIC have to honor the forbearance my banker agreed to?",
    "Who do I send my hotel loan payment to after a bank failure?",
    "Are my hotel's operating accounts insured if the bank fails?",
    "Can the FDIC sell my hotel loan without my consent?"
  ],
  answer: "Your obligation does not change. The FDIC states that a bank failure does not change a borrower's duty to pay or comply with the loan terms, and a sale of the note does not change them either.[1] All six banks that closed in 2026, the last on September 25, 2026, passed to an acquiring institution.[2] Undrawn money is the exception: a receiver may repudiate a commitment.[3]",
  takeaways: [
    "Nobody asks your permission. As receiver the FDIC may transfer any asset or liability of the failed bank without any approval, assignment or consent.[4]",
    "Undrawn construction and PIP money is the exposure. The receiver generally stops lending, may repudiate the commitment, and damages exclude lost profits by name.[1][3][5]",
    "An unwritten accommodation is worth nothing. Under 12 U.S.C. 1823(e) it binds the FDIC only if written, signed contemporaneously, approved in the minutes and kept in the bank's records.[6][7]",
    "The clocks end the claim. A bar date at least 90 days after the receiver's published notice, 180 days for the FDIC to decide, then 60 days to sue.[8][9][10]"
  ],
  sections: [
    {
      h2: "Does my hotel loan disappear, and who do I pay now?",
      lead: "It does not disappear. The note and every term in it survive, and within days the FDIC writes to you with payment instructions.",
      body: "The FDIC says it in one line: a bank failure does not change your obligation to make payments and comply with the terms of your loan.[1] Loans are offered before the closing to healthy institutions, normally the one assuming the deposits; anything unsold is packaged for sale within a few months.[1] A sale changes nothing: the new owner collects what is owed and assumes the receiver's obligations and commitments.[1]\n\nUntil then the FDIC services the loan, sending written payment instructions and staffing the failed bank's offices within one business day.[1] Because it is not a bank, it strongly encourages borrowers to find a new lender, sometimes offsetting part of the closing costs.[1] That is the receiver's plan: a [refinance](/hotel-financing/refinance), from the same [lender types](/hotel-financing/hotel-lenders-by-type) as before.\n\nSix banks closed in 2026, the last on September 25, 2026, each with an acquirer, all six on a Friday.[2] The third quarter 2026 Quarterly Banking Profile, released November 24, 2026, covers 4,205 insured banks.[12] Six of 4,205 is 0.1427 percent, about one in 701."
    },
    {
      h2: "What happens to the undrawn money on my PIP or construction loan?",
      lead: "This is where a hotel actually gets hurt, because the receiver generally stops lending and can repudiate the rest of the commitment.",
      body: "The FDIC analyzes unfunded and partially funded lines of credit and construction and development loans immediately, and says the role of receiver generally precludes continuing a failed bank's lending operations.[1] It will consider advances that protect collateral or maximize recovery, and may require a third-party escrow to control draws.[1]\n\nOr it repudiates. Section 1821(e)(1) lets the receiver disaffirm any contract the institution is party to where performance is burdensome in its own discretion and repudiation will, again in its own discretion, promote the orderly administration of the institution's affairs.[3] It decides within a reasonable period after the appointment, which the statute never turns into a number.[13]\n\nThe damages rule is the part to price. Liability is limited to actual direct compensatory damages at the appointment date, and the statute says that phrase excludes punitive damages and damages for lost profits or opportunity.[5] For a hotel stopped halfway through a brand [property improvement plan](/hotel-financing/pip-and-renovation-loans), the loss is the ramp that never happened: the lost profit the statute excludes. Unpaid contractors are the second edge: their [mechanic's liens](/hotel-financing/mechanics-liens) relate back to the start of work in several states, ahead of the [construction lender](/hotel-financing/construction-loans)."
    },
    {
      h2: "Is my interest rate cap still worth anything?",
      lead: "The contract is protected, but your right to walk away lasts about one business day.",
      body: "A hotel's [rate cap](/hotel-financing/interest-rate-caps) is a qualified financial contract: the swap agreement definition in section 1821(e)(8)(D)(vi)(I) names a rate floor, rate cap and rate collar, and paragraph (e)(8)(A) says no person shall be stayed from exercising a right to terminate, liquidate or accelerate such a contract on the FDIC's appointment as receiver.[14]\n\nThe timing is the catch. Paragraph (e)(10)(B)(i) bars exercising that right until 5:00 p.m. eastern on the business day following the appointment, and bars it entirely once notice arrives that the contract has been transferred, while (e)(9)(A) requires the receiver to give that notice by 5:00 p.m. eastern the same day.[15] Both clocks land on one afternoon, and with every 2026 closing on a Friday that afternoon was the Monday.[2] Whether terminating is worth anything cannot be answered here: a cap's mark turns on the forward curve and the dealer's pricing, and neither is published. The [SOFR](/glossary/sofr) index is published, and the rate sheet carries it."
    },
    {
      h2: "My banker agreed to a forbearance. Does that survive the failure?",
      lead: "Only if it met all four requirements of 12 U.S.C. 1823(e) before the bank closed, and most accommodations agreed with a relationship officer do not.",
      body: "No agreement that tends to diminish or defeat the FDIC's interest in an asset it acquires, including as receiver, is valid against the FDIC unless it is in writing; was executed by the bank and every person claiming an adverse interest under it, the obligor included, contemporaneously with the bank's acquisition of the asset; was approved by the board or loan committee, with the approval in the minutes; and has been continuously an official record of the bank.[6] Section 1821(d)(9)(A) carries the same test into the claims process, so an agreement failing 1823(e) cannot form the basis of a claim against the receiver either.[7]\n\nAn email from a relationship officer, a verbal rate-lock extension, an unsigned term sheet, a side letter that never went to committee: each disappears the day the receiver is appointed, and the loan reverts to its written terms. So every [workout](/hotel-financing/loan-workouts), deferral, covenant waiver and reserve release belongs in a signed amendment, approved where the minutes will show it, filed at the bank, with your own copy elsewhere."
    },
    {
      h2: "My hotel's operating accounts are at the same bank. What then?",
      lead: "Insurance stops at $250,000 per depositor, per bank, per ownership category, and whether the rest can be applied against your loan turns on which entity holds it.",
      body: "The standard maximum deposit insurance amount is $250,000, set in section 1821(a)(1)(E) and stated by the FDIC as $250,000 per depositor, per insured bank, for each ownership category, including interest accrued to the closing date.[16][11] A hotel's operating account, FF&E reserve and escrows together routinely run past that.\n\nSetoff is the part owners miss. On a delinquent loan the FDIC sets the loan off against the borrower's deposits before paying deposit insurance; on a current loan the depositor may elect the same setoff to recover uninsured funds. Neither direction works unless the obligations are mutual, meaning the borrower and the depositor are the same person or legal entity acting in the same legal capacity.[17] Hotel ownership is rarely built that way: the mortgage sits in a property-owning entity while the accounts sit with an operating company, and where the entities differ there is no setoff at all.\n\nAn uninsured balance is then a receivership claim, paid after insured and uninsured depositors over several years as assets liquidate.[18] Concentration at one bank is a [cash management](/hotel-financing/covenants-and-cash-management) question first."
    },
    {
      h2: "Can I sue the FDIC, and how long do I have?",
      lead: "Not first. The receiver's claims process comes first, and missing its 60-day step ends the claim permanently.",
      body: "The receiver publishes a notice to creditors to present claims by a date not less than 90 days after publication, and mails it to creditors on the bank's books.[8] A claim filed later is disallowed and that disallowance is final, subject to a narrow exception for a claimant who never got notice in time.[19] The FDIC then has 180 days from filing to allow or disallow.[9]\n\nThen the 60 days that matter. Within 60 days of the earlier of the end of that period or a notice of disallowance, the claimant must request administrative review or file suit where the bank had its principal place of business or in the District of Columbia. Do neither and the claim is deemed disallowed, finally, with no further rights or remedies.[10]\n\nThe fence is high. Except as that subsection provides, no court has jurisdiction over a claim for payment from a receivership's assets or over an act or omission of the receiver, and nothing may be attached in the receiver's possession.[20] No court may act to restrain or affect the FDIC's powers as receiver.[21]"
    },
    {
      h2: "Is there any warning, and what should I do now?",
      lead: "The statutory trigger is public and the supervisory judgment behind it is not, so the preparation is structural rather than predictive.",
      body: "The trigger is a ratio. A bank is critically undercapitalized when tangible equity is equal to or less than 2.0 percent of total assets.[22] Within 90 days the banking agency must appoint a receiver or conservator, or document why another action better achieves the statute's purpose, with that other action expiring every 90 days unless redetermined and a receiver becoming mandatory if the bank is still critically undercapitalized during the quarter beginning 270 days later.[23] Capital ratios reach the public in quarterly Call Reports.\n\nWhat is not published matters more. No agency publishes which banks are on its problem bank list, no bank publishes its own supervisory rating, and no borrower is warned. Nothing here predicts a failure.\n\nSo prepare for the version you cannot forecast. Keep operating balances inside the insurance limit or across institutions. Put every accommodation in a signed, committee-approved, filed amendment, because 1823(e) does not bend.[6] Keep your own copy of the loan file, since the FDIC says failed-bank files are often incomplete.[1] Know which second lender you would call. If a [sale](/sell-a-hotel/how-to-sell-a-hotel) is in view, pull title early: where a paid-off mortgage was never released by a bank that later failed, the FDIC handles the release only if that bank failed within the last two years and no acquirer took the lien, and FDIC Resolution Inquiries answers on 888-206-4662.[24] Whether a [refinance or a sale](/hotel-financing/refinance-or-sell) is better is arithmetic, and the [concentration limits](/hotel-financing/bank-cre-concentration-limits) your next bank works under shape the quote."
    }
  ],
  table: {
    caption: "What survives a bank failure and what does not, read November 26, 2026",
    columns: [
      "Item",
      "What happens to it",
      "Authority"
    ],
    rows: [
      [
        "Your note, mortgage and payment obligation",
        "Unchanged. A failure does not change the duty to pay, and a sale of the loan does not either",
        "FDIC Borrower's Guide[1]"
      ],
      [
        "Who holds the loan",
        "The receiver may transfer any asset or liability without any approval, assignment or consent",
        "1821(d)(2)(G)(i)(II)[4]"
      ],
      [
        "Undrawn construction or PIP commitment",
        "At risk. The receiver generally stops lending and may repudiate a commitment it finds burdensome",
        "FDIC Borrower's Guide; 1821(e)(1)[1][3]"
      ],
      [
        "Damages if that commitment is repudiated",
        "Actual direct compensatory damages only, at the appointment date. Lost profits and opportunity are excluded by name",
        "1821(e)(3)[5]"
      ],
      [
        "An oral or emailed accommodation",
        "Invalid against the FDIC unless written, executed contemporaneously by both sides, approved in the minutes, and continuously an official record",
        "1823(e); 1821(d)(9)(A)[6][7]"
      ],
      [
        "An interest rate cap bought from the bank",
        "A qualified financial contract. The right to terminate survives but dies at 5:00 p.m. eastern the next business day, or on notice of a transfer",
        "1821(e)(8), (e)(9)(A), (e)(10)(B)(i)[14][15]"
      ],
      [
        "Deposits at the failed bank",
        "Insured to $250,000 per depositor, per bank, per ownership category. The rest is a receivership claim paid over years, if at all",
        "1821(a)(1)(E); FDIC[16][18]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' October 2026 rate sheet puts SOFR at 3.90% as of September 30, 2026 and the 10-year Treasury at 5.29%, the indexes a replacement loan is struck against; the spread on top is lender-set and the sheet marks it not yet published.[25]"
  },
  workedExample: {
    label: "Hypothetical: 124-key select-service hotel, mid-PIP, lender closed on a Friday",
    body: "Hypothetical, with labeled assumptions. A 124-key hotel carries a $9,200,000 mortgage at a $23,000 monthly payment and is halfway through a $4,960,000 brand PIP, $40,000 a key. The PIP commitment is $3,500,000, of which $2,100,000 is drawn, 60.0 percent, leaving $1,400,000 undrawn: 28.23 percent of the contract and $11,290.32 a key.\n\nThe bank closes on a Friday, the pattern of all six 2026 closings.[2]\n\nThe mortgage is unaffected: rate, payment and maturity are what the note says, and only the payment address changes.[1]\n\nThe receiver repudiates the $1,400,000 of undrawn PIP money as burdensome.[3] Replacing it takes nine months, and at the published index alone, SOFR at 3.90 percent, nine months on $1,400,000 costs $40,950, or $330.24 a key, before any lender spread, and no lender publishes its spread. Rooms revenue lost while the renovation sat is the lost profit section 1821(e)(3) excludes.[5]\n\nThe emailed agreement to defer three payments and re-amortize is gone. Three payments of $23,000 is $69,000, 0.75 percent of the mortgage, due at once, because an email is in writing but was never executed contemporaneously by both sides, never went to the loan committee minutes, and was never an official record.[6][7]\n\nThe deposits: $640,000 sits at the bank in the operating company's name, while the borrower is a separate property-owning entity. $250,000 is insured and $390,000 is not, 60.9375 percent of the balance.[16] Different entities means no mutuality, so none of it can be set off against the loan, and it becomes a receivership claim paid over years.[17] Filed on the bar date, that claim runs 90 days, then 180, then 60: 330 days, about 11 months.[8][9][10] Every figure is recomputed by scripts/check-bank-failure-math.mjs."
  },
  faq: [
    {
      q: "Do I still have to pay my hotel loan if the bank failed?",
      a: "Yes. The FDIC states that a bank failure does not change your obligation to make payments and comply with the terms of your loan. Pay on the old schedule until the FDIC or the new holder sends written instructions.[1]"
    },
    {
      q: "Can the FDIC sell my hotel loan without asking me?",
      a: "Yes. As receiver it may transfer any asset or liability of the failed bank without any approval, assignment or consent.[4] The sale does not change your terms, and the new owner assumes the receiver's obligations and commitments.[1]"
    },
    {
      q: "Will the FDIC fund the rest of my construction or PIP loan?",
      a: "Maybe not. The receiver generally does not continue a failed bank's lending operations, though it will consider advances that protect collateral or maximize recovery.[1] It may also repudiate the commitment outright.[3]"
    },
    {
      q: "Are my hotel's operating deposits safe?",
      a: "Insured to $250,000 per depositor, per insured bank, for each ownership category.[16] Above that you are a receivership creditor, paid after insured and uninsured depositors as assets liquidate, often over several years.[18]"
    },
    {
      q: "Does the forbearance my banker agreed to survive?",
      a: "Only if it was written, signed by both sides contemporaneously, approved in the board or loan committee minutes, and continuously an official record of the bank. Otherwise 12 U.S.C. 1823(e) makes it invalid against the FDIC.[6]"
    }
  ],
  sources: [
    { n: 1, label: "A Borrower's Guide to an FDIC Insured Bank Failure (the obligation to pay, the asset disposition process, interim servicing, lines of credit and construction loans, repudiation of funding obligations, and what a loan sale does not change), last updated June 18, 2024", url: "https://www.fdic.gov/bank-failures/borrowers-guide-fdic-insured-bank-failure", publisher: "Federal Deposit Insurance Corporation", accessed: "2026-11-26" },
    { n: 2, label: "Failed Bank List (six closings in 2026, the most recent Nano Banc, Irvine, California, September 25, 2026, acquired by Sunwest Bank; every 2026 closing date falls on a Friday)", url: "https://www.fdic.gov/bank-failures/failed-bank-list", publisher: "Federal Deposit Insurance Corporation", accessed: "2026-11-26" },
    { n: 3, label: "12 U.S.C. 1821(e)(1), Authority to repudiate contracts", url: "https://www.law.cornell.edu/uscode/text/12/1821", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 4, label: "12 U.S.C. 1821(d)(2)(G)(i)(II), transfer of any asset or liability without any approval, assignment or consent", url: "https://www.law.cornell.edu/uscode/text/12/1821", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 5, label: "12 U.S.C. 1821(e)(3), Claims for damages for repudiation (actual direct compensatory damages; nothing for punitive damages or for lost profits or opportunity)", url: "https://www.law.cornell.edu/uscode/text/12/1821", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 6, label: "12 U.S.C. 1823(e)(1), Agreements against interests of Corporation (the four requirements)", url: "https://www.law.cornell.edu/uscode/text/12/1823", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 7, label: "12 U.S.C. 1821(d)(9)(A), Agreement as basis of claim", url: "https://www.law.cornell.edu/uscode/text/12/1821", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 8, label: "12 U.S.C. 1821(d)(3)(B), notice to creditors and a claims bar date not less than 90 days after publication", url: "https://www.law.cornell.edu/uscode/text/12/1821", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 9, label: "12 U.S.C. 1821(d)(5)(A)(i), the 180-day determination period", url: "https://www.law.cornell.edu/uscode/text/12/1821", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 10, label: "12 U.S.C. 1821(d)(6), agency review or judicial determination within 60 days, final disallowance if neither happens, and the tolling effect of filing", url: "https://www.law.cornell.edu/uscode/text/12/1821", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 11, label: "When a Bank Fails: Facts for Depositors, Creditors, and Borrowers (the FDIC's two capacities; $250,000 per depositor, per insured bank, for each ownership category), last updated July 28, 2014", url: "https://www.fdic.gov/bank-failures/when-bank-fails-facts-depositors-creditors-and-borrowers", publisher: "Federal Deposit Insurance Corporation", accessed: "2026-11-26" },
    { n: 12, label: "FDIC-Insured Institutions Reported Return on Assets of 1.28 Percent and Net Income of $84.8 Billion in Third Quarter 2026 (reports from 4,205 insured commercial banks and savings institutions), November 24, 2026", url: "https://www.fdic.gov/news/press-releases/2026/fdic-insured-institutions-reported-return-assets-128-percent-and-net", publisher: "Federal Deposit Insurance Corporation", accessed: "2026-11-26" },
    { n: 13, label: "12 U.S.C. 1821(e)(2), Timing of repudiation (a reasonable period following the appointment)", url: "https://www.law.cornell.edu/uscode/text/12/1821", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 14, label: "12 U.S.C. 1821(e)(8), Certain qualified financial contracts, with the swap agreement definition naming a rate cap, rate floor and rate collar at (e)(8)(D)(vi)(I)", url: "https://www.law.cornell.edu/uscode/text/12/1821", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 15, label: "12 U.S.C. 1821(e)(9)(A) and (e)(10)(B)(i), notice of a transfer by 5:00 p.m. eastern on the business day following the appointment, and the bar on terminating before then", url: "https://www.law.cornell.edu/uscode/text/12/1821", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 16, label: "12 U.S.C. 1821(a)(1)(E), the standard maximum deposit insurance amount of $250,000", url: "https://www.law.cornell.edu/uscode/text/12/1821", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 17, label: "Borrowers: what happens to a loan when a bank fails, including setoff against deposits and the mutuality requirement, last updated January 16, 2010", url: "https://www.fdic.gov/bank-failures/borrowers", publisher: "Federal Deposit Insurance Corporation", accessed: "2026-11-26" },
    { n: 18, label: "Priority of Payments and Timing (insured depositors, then uninsured depositors, then general creditors, then stockholders; dividends on uninsured funds paid over several years), last updated April 6, 2023", url: "https://www.fdic.gov/bank-failures/priority-payments-and-timing", publisher: "Federal Deposit Insurance Corporation", accessed: "2026-11-26" },
    { n: 19, label: "12 U.S.C. 1821(d)(5)(C), disallowance of claims filed after the end of the filing period, and its narrow exception", url: "https://www.law.cornell.edu/uscode/text/12/1821", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 20, label: "12 U.S.C. 1821(d)(13)(C) and (D), no attachment or execution on assets in the receiver's possession, and the limitation on judicial review", url: "https://www.law.cornell.edu/uscode/text/12/1821", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 21, label: "12 U.S.C. 1821(j), Limitation on court action", url: "https://www.law.cornell.edu/uscode/text/12/1821", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 22, label: "12 CFR 324.403(b)(5), critically undercapitalized: tangible equity equal to or less than 2.0 percent of total assets", url: "https://www.law.cornell.edu/cfr/text/12/324.403", publisher: "Code of Federal Regulations, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 23, label: "12 U.S.C. 1831o(h)(3), conservatorship, receivership or other action required within 90 days, with redeterminations every 90 days and a mandatory receiver after 270 days", url: "https://www.law.cornell.edu/uscode/text/12/1831o", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-26" },
    { n: 24, label: "Obtaining a Lien Release (the FDIC processes releases only where the bank failed within the last two years and no acquirer took the lien; FDIC Resolution Inquiries, 888-206-4662)", url: "https://www.fdic.gov/bank-failures/obtaining-lien-release", publisher: "Federal Deposit Insurance Corporation", accessed: "2026-11-26" },
    { n: 25, label: "Matthews Hotel Markets hotel loan rate sheet, October 2026 edition", url: "/rates", publisher: "Matthews Hotel Markets", accessed: "2026-11-26" }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/refinance",
      "/hotel-financing/hotel-lenders-by-type",
      "/hotel-financing/loan-workouts",
      "/hotel-financing/construction-loans",
      "/hotel-financing/pip-and-renovation-loans",
      "/hotel-financing/interest-rate-caps",
      "/hotel-financing/bank-cre-concentration-limits",
      "/hotel-financing/covenants-and-cash-management",
      "/hotel-financing/mechanics-liens"
    ],
    glossary: [
      "/glossary/sofr",
      "/glossary/non-recourse-carve-outs",
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
  brandSentence: "Matthews Hotel Markets arranges the replacement hotel debt a receiver tells a borrower to find, from $5 million, and sells hotels and notes where an owner decides a refinance is not the answer; it does not act as counsel and does not file receivership claims."
};

export default page;
