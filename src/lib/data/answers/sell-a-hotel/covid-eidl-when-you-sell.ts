/**
 * Can I sell my hotel if I still owe a COVID EIDL loan?
 * Answer page: /sell-a-hotel/covid-eidl-when-you-sell
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-11-23): SBA's own COVID-19 EIDL program pages on
 * legacy.sba.gov (the loan-terms table and the servicing page, the latter last
 * updated July 17, 2026); the four Office of COVID EIDL Services requirement
 * letters dated October 2026 for a change in ownership, an assumption, a
 * release of collateral and a subordination, read as PDFs; 13 CFR 123.11 and
 * 123.303 on Cornell LII; 15 U.S.C. 636 on Cornell LII; 31 U.S.C. 3716(c)(6)
 * and 31 CFR 285.13 on Cornell LII; SBA SOP 50 10 8.1, effective October 1,
 * 2026, read as the published .docx; and SBA's Disaster Assistance Update of
 * April 28, 2022 for the program totals.
 *
 * The worked example was recomputed line by line with
 * scripts/check-eidl-math.mjs before saving, 27 assertions. Do not hand-edit a
 * number without re-reading its source and bumping `lastUpdated`.
 *
 * Deliberately absent: how much consideration SBA asks for to release
 * collateral, how long a servicing request takes, how many hotels hold a COVID
 * EIDL, and what a buyer "typically" demands when one shows up in a UCC
 * search. None of those is published. SBA's program reports are state by state
 * and carry no industry breakdown, which the page says rather than estimating
 * one.
 *
 * Two things to re-verify before changing a number. SBA's servicing page is
 * dated and does move: the deferment language said 24 months from origination
 * on the program page and 30 months from disbursement on the servicing page
 * when this ran, and the servicing page is the newer of the two. And the
 * requirement letters are versioned by month, so a figure or a document list
 * has to be re-read in the current letter, not in this file.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "covid-eidl-when-you-sell",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Selling a Hotel With a COVID EIDL Loan",
  description:
    "SBA must consent before its lien comes off. The four servicing requests, what a release costs, and why consent does not release your guaranty.",
  h1: "Can I sell my hotel if I still owe a COVID EIDL loan?",
  lastUpdated: "2026-11-23",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Can I sell my hotel if I still owe a COVID EIDL loan?",
    "Does SBA have to approve the sale of a hotel with an EIDL loan?",
    "How do I get an SBA EIDL lien released so my hotel can close?",
    "Can my buyer assume my COVID EIDL loan?",
    "Am I still liable for the EIDL after I sell the hotel?",
    "Can I refinance my hotel without paying off the EIDL?",
    "What happens if I stop paying my COVID EIDL?",
    "Is a COVID EIDL loan forgivable?",
  ],
  answer:
    "Yes. A COVID EIDL does not block a hotel sale, but SBA has to consent first. Its October 2026 servicing letters make a change in ownership, an assumption, a release of collateral and a subordination four separate requests. Two of the four say plainly that approval does not release the original borrower or any guarantor, and a guaranty was required above $200,000.[1][3][4][5]",
  takeaways: [
    "The balance can be larger than what you borrowed. Payments begin 30 months after disbursement, interest accrues through the deferment, and SBA says the unpaid deferment balance becomes a balloon at maturity.[2]",
    "What SBA holds depends on the loan size. Collateral was required above $25,000 and a guaranty above $200,000, and the lien can be a security interest in business assets, a lien on real estate, or both.[1][6]",
    "A release of collateral is not free. SBA's October 2026 letter says it may require full monetary consideration under most circumstances, and that a paydown is not a regular payment.[3]",
    "Consent is not a release. The change in ownership and assumption letters both say approval does not release the original borrower or any guarantor, and a release of guarantor is its own request.[2][4][5]",
    "Falling behind closes other doors. A nontax federal debt over 120 days delinquent goes to Treasury, and a delinquent one makes an applicant or guarantor ineligible for a 7(a) or 504 loan.[7][8][9]",
  ],
  sections: [
    {
      h2: "Does a COVID EIDL put a lien on my hotel?",
      lead: "On the hotel's business assets in almost every case, and on the real estate only where the loan documents pledged it, because SBA required collateral on every COVID EIDL above $25,000.",
      body: "SBA's published terms set the thresholds. Collateral was required above $25,000 and a personal guaranty above $200,000, and the fee schedule names what SBA filed: a one-time $100 fee for a lien on business assets, plus the borrower's own recording costs where real estate was pledged, which SBA describes for loans above $500,000.[1] Behind that sits 13 CFR 123.11: no collateral generally on an economic injury disaster loan of $50,000 or less, and above that \"available collateral, as determined by SBA, such as a lien on the damaged or replacement property and/or a security interest in business assets\".[6]\n\nThat split matters at a closing. A UCC-1 on business assets is not in the land records, so a title search can come back clean while the FF&E, the operating accounts and the receivables a buyer is paying for are encumbered. Where SBA recorded a mortgage or a deed of trust, the lien sits in title and behaves like any other payoff item. Which one bites depends on how the deal is built, the question at [should I sell the hotel or the company that owns it?](/sell-a-hotel/asset-sale-vs-entity-sale)."
    },
    {
      h2: "What do I owe on it now, and why is the balance higher than I remember?",
      lead: "A COVID EIDL carries 3.75 percent fixed for 30 years with no prepayment penalty, and interest ran through a deferment that most owners never paid into.",
      body: "SBA's loan-terms table is short: a maximum of $2 million, a 30-year term, 3.75 percent fixed for a business, payments deferred with interest accruing, and no penalty for prepayment.[1] The dated servicing page carries the timing. The monthly payment begins 30 months from the disbursement date shown at the top of the front page of the original note, interest accrues throughout, and \"if you do not make voluntary payments during the deferment, a final balloon payment will be due on your loan at maturity\".[2]\n\nSo a payoff has two parts: amortizing principal, which a 30-year schedule barely touches early on, and the deferment interest, still outstanding and still growing into that balloon. Only SBA can state the number, and its servicing office is where the request goes.[2] SBA also publishes payment assistance, a 50 percent reduction for six months once every five years, open only to a loan less than 90 days past due at a business still operating. It waives no interest, so the balloon grows.[2]\n\nThe program was large: 3,923,374 COVID EIDLs approved for $378,410,624,804 as of April 27, 2022, an average near $96,450.[11] SBA's reports are state by state with no industry breakdown, so no published count of hotels holding one exists; the loan-level files with NAICS codes sit on data.sba.gov through December 2020 and on USAspending.gov after that.[14]"
    },
    {
      h2: "Which SBA request does my deal need, and what does consent cost?",
      lead: "SBA treats a sale, a loan takeover, a lien release and a refinance as four separate servicing requests, and its own letter says a release of collateral may cost full monetary consideration.",
      body: "The servicing page lists nine requirement letters and tells the borrower to email a complete package to the COVID EIDL servicing office.[2] Four of them decide hotel deals. An asset sale, where the hotel and its FF&E leave the borrower, runs on a release of collateral, full or partial.[3] An entity sale, where the buyer takes the borrower itself, runs on a change in ownership.[4] A buyer who wants the 3.75 percent debt rather than a payoff files an assumption.[5] An owner keeping the hotel and raising new senior debt files a subordination.[10]\n\nAll four letters open with the same warning: the letter is not a commitment, and approval \"may be conditioned on curing defaults, correcting any collateral deficiencies or issues with loan documents and/or payment of material monetary consideration\".[3][4][5][10] The release of collateral letter puts a price on that: \"under most circumstances, SBA may require full monetary consideration to approve a Release of Collateral request. A 'paydown' for consideration is not a regular payment and regular monthly payments are not automatically re-amortized; you must request and qualify for payment reduction.\"[3] So a loan that is behind has to be cured first, an owner who pays SBA down to clear the lien has not bought a smaller installment, and neither the consideration nor a processing time is published in advance. The document lists are in the table below, and most of what they ask for is already in the data room: see [what documents do I need to sell my hotel?](/sell-a-hotel/documents-needed).[3][4][5][10]"
    },
    {
      h2: "Does SBA's consent get me off the loan?",
      lead: "No. The October 2026 change in ownership and assumption letters both say approval does not release the original borrower or any guarantor from liability.",
      body: "The change in ownership letter states that \"any Consent to Change in Ownership will not release the Original Borrower(s) and/or any Guarantor(s) from liability\".[4] The assumption letter says the same of its own approval.[5] Read against the terms table, that is the sentence that costs a seller money: a personal guaranty was required on every COVID EIDL above $200,000, so on any balance that matters to a hotel the guaranty exists and it survives the deal.[1]\n\nSBA does publish a route off it, as a separate request with its own requirement letter: a release of guarantor.[2] Nothing makes it automatic. A payoff ends the debt; a transfer with SBA's consent moves the hotel and leaves the seller and every guarantor liable on a note that can run to 2051. That is the seller carrying the risk of a buyer who wants cheap SBA debt."
    },
    {
      h2: "Can I refinance instead and leave the EIDL in place?",
      lead: "Sometimes, through a subordination request, which is the only one of the four written for an owner who is keeping the hotel.",
      body: "The subordination letter asks for the use of the new funds in writing, a UCC lien search showing SBA's position and the new lender's commitment or term sheet, and where real property is the collateral it adds a title report dated within six months and a current valuation report, which the table below sets out in full.[10]\n\nThe arithmetic argues for keeping the loan where the structure allows it. A COVID EIDL is fixed at 3.75 percent for 30 years with no prepayment penalty, cheaper than anything a hotel can borrow today, and subordination leaves that rate in place while a new first lender takes priority.[1][10] A payoff turns cheap fixed debt into whatever the market is quoting, which is the comparison in the box above and the decision at [should I refinance the hotel or sell it?](/hotel-financing/refinance-or-sell). The new loan itself is at [how does a hotel refinance work?](/hotel-financing/refinance)."
    },
    {
      h2: "What happens if I am behind on the EIDL?",
      lead: "At 120 days delinquent the debt goes to Treasury, and a delinquent federal debt makes you or your entity ineligible for a 7(a) or 504 loan.",
      body: "SBA's servicing page states both referrals as required by law. An account may go to the Treasury Offset Program after reaching 120 days of delinquency, and loans meeting the delinquency rules also transfer to cross-servicing, after which, in SBA's words, the loans are no longer serviced by SBA and the borrower must contact Treasury directly.[2] The statute behind the first is 31 U.S.C. 3716(c)(6)(A): an agency owed a past due, legally enforceable nontax debt more than 120 days delinquent shall notify the Secretary of the Treasury for administrative offset.[7] A charged-off loan that has not reached cross-servicing has a way back: pay the overdue balance through the loan portal, then email the servicing office for reinstatement.[2]\n\nThe second consequence reaches the next deal. 31 CFR 285.13 bars a person who owes a nontax debt in delinquent status from federal financial assistance, applies the bar to guarantors and to a corporation controlled by someone who owes one, and defines delinquent status as unpaid 90 days after the due date; a written-off debt still counts.[8] SOP 50 10 8.1, effective October 1, 2026, carries that into SBA's own lending: no 7(a) or 504 loan where the applicant or any guarantor owes a delinquent federal debt, a mandatory Credit Alert Verification Reporting System check the lender must document, waivers that are not routine, and processing once the debt is satisfied or cured under an agreement being paid as agreed.[9] A seller's delinquency closes the refinance door and the next acquisition door together: see [SBA 7(a) or 504 for a hotel?](/hotel-financing/sba-7a-vs-504)."
    },
    {
      h2: "What should I do before I list the hotel?",
      lead: "Read the loan documents, pull a UCC search, get SBA's payoff in writing, and open the servicing request before the hotel goes to market.",
      body: "Start with the original note, because the disbursement date at the top of its front page sets the payment start date, and with the security agreement, because it says whether SBA holds business assets, real estate or both.[2][6] Pull the UCC search SBA will ask for anyway, so the lien position is known before a buyer's counsel finds it.[3] Get the payoff from the servicing office rather than from a statement balance, since the deferment interest is not in the installment.[2] Then open the matching request and tell the title company and the buyer's lender at once, because the financing contingency has to allow for a clock nobody controls. Timing is at [how long does it take to sell a hotel?](/sell-a-hotel/how-long-it-takes).\n\nTwo diligence points a buyer's counsel may raise, both from published law. 13 CFR 123.303 limits what the proceeds could be spent on: working capital and, for COVID EIDL, payments on business debt, with no prepayment of federal loans, no refinancing of pre-disaster debt, no physical repair and no disbursements to owners.[12] And 15 U.S.C. 636(b)(16) sets a 10-year limitations period for a fraud charge on a COVID-19 disaster loan, the same statute that caps such a loan at 4 percent and bars a term beyond 30 years.[13] An owner facing an unpaid mortgage lender too is at [how do I sell a distressed hotel?](/sell-a-hotel/selling-a-distressed-hotel), and the other federal lien that records against title without asking is at [can I sell my hotel if I owe the IRS back payroll taxes?](/sell-a-hotel/irs-liens-and-payroll-taxes)."
    },
  ],
  table: {
    caption:
      "The COVID EIDL servicing requests a hotel deal runs into, as SBA's requirement letters write them (letters dated October 2026, read November 23, 2026)",
    columns: [
      "Request",
      "The deal that needs it",
      "What SBA's letter asks for",
      "What it does not do",
    ],
    rows: [
      [
        "Release of collateral, full or partial",
        "An asset sale: the hotel and its FF&E leave the borrower",
        "Detailed letter, borrower authorization, the signed sale agreement, bill of sale or settlement statement, two years of business returns, a UCC search showing SBA's position, title report if applicable, senior payoff letters, dissolution papers if the business is closing, proof of insurance[3]",
        "Does not come free. SBA says it may require full monetary consideration under most circumstances, and a paydown is not a regular payment[3]",
      ],
      [
        "Change in ownership",
        "An entity sale, or new owners coming into the borrower",
        "Letter signed by all interested individuals, borrower authorization, a copy of the purchase or stock sale agreement, SBA Form 912 from the proposed owners, year-to-date profit and loss, two years of business returns, amended organizational documents, proof of insurance[4]",
        "Does not release the original borrower or any guarantor from liability[4]",
      ],
      [
        "Assumption",
        "A buyer taking the 3.75 percent loan over instead of paying it off",
        "Letter and statement of need, borrower authorization, Form 912 from the assuming party's principals, two years of its federal returns, its year-to-date profit and loss, organizational documents, certificate of good standing, affidavit of current officers, proof of insurance[5]",
        "Does not release the original borrower or any guarantor either[5]",
      ],
      [
        "Subordination",
        "A refinance that puts a new lender ahead of SBA",
        "Letter explaining the use of funds, borrower authorization, a UCC search showing SBA's position, proof of insurance, the lender's commitment or term sheet; for real estate also settlement statements, a title report dated within six months, a current valuation report, payoff statements and the lien instrument[10]",
        "Does not reduce the balance, change the 3.75 percent rate or move the maturity[1][10]",
      ],
      [
        "Release of guarantor",
        "A seller who wants off the personal guaranty",
        "Its own requirement letter, listed with the other servicing actions on SBA's servicing page[2]",
        "Is not produced by a sale, a consent to change in ownership or an assumption[2][4][5]",
      ],
    ],
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet puts the SBA 7(a) variable ceiling at 10.00 percent on a loan over $350,000 and the 25-year 504 debenture at 6.54 percent, against a COVID EIDL fixed at 3.75 percent for 30 years.[15][1] On the $2,092,913.85 payoff in the example below, that 6.25-point gap is $130,807.12 a year, which is what it costs to clear SBA's lien with new debt instead of with sale proceeds.",
  },
  workedExample: {
    label:
      "Hypothetical: a 112-key select-service hotel, a $2,000,000 COVID EIDL, and a payoff at closing",
    body: "Hypothetical, not a transaction, and every input is an assumption rather than a benchmark. A single-asset LLC holds one COVID EIDL of $2,000,000, the program maximum, disbursed December 1, 2021, after SBA began approving loans above $500,000 on October 8, 2021.[1] The rate is 3.75 percent fixed, the term 30 years, and payments began 30 months later, on June 1, 2024, with none made during the deferment.[1][2]\n\nThe deferment. Interest at 3.75 percent on $2,000,000 for 2.5 years is $187,500, taken here as simple interest on the full principal, this example's assumption rather than a figure SBA publishes per loan. SBA's own statement is that an unpaid deferment balance becomes a balloon at maturity.[2]\n\nWhere the balance sits. A 30-year level payment on $2,000,000 at 3.75 percent is $9,262.31 a month, arithmetic from the published rate and term rather than a figure SBA states per loan. Thirty of them, June 1, 2024 through November 1, 2026, come to $277,869.30: $183,283.15 interest and $94,586.15 principal, so 34.0 percent reached the balance. Principal stands at $1,905,413.85, and the $187,500 of deferment interest makes the payoff $2,092,913.85. Five years after borrowing $2,000,000 and paying in $277,869.30, the owner owes $92,913.85 more than they borrowed. That is not a penalty. It is a 30-year amortization with a 30-month deferment in front of it.[1][2] Nothing in the hotel's operating performance changed it.\n\nThe closing. At $100,000 a key, 112 keys is $11,200,000. The first mortgage takes $6,400,000 and brokerage plus closing costs at 4.5 percent take $504,000, leaving $4,296,000 before SBA. Paying the EIDL in full leaves $2,203,086.15, so SBA takes 48.7 percent of the equity on a hotel where it was never the senior lender.\n\nThe other paths. A release of collateral may still require full monetary consideration, which SBA does not price publicly.[3] A change in ownership or an assumption leaves this owner and every guarantor liable, because the loan exceeded $200,000.[1][4][5] A subordination keeps the 3.75 percent: carrying $2,092,913.85 at that rate costs $78,484.27 of interest a year, against $136,876.57 at the October 2026 504 debenture of 6.54 percent, $58,392.30 more.[15]\n\nEvery figure above was recomputed by scripts/check-eidl-math.mjs.",
  },
  faq: [
    {
      q: "Can I sell my hotel if I still owe a COVID EIDL loan?",
      a: "Yes. SBA treats it as a servicing request, not a veto. An asset sale uses a release of collateral and an entity sale a change in ownership, and both go to SBA's servicing office as a complete package.[2][3][4]",
    },
    {
      q: "Can my buyer assume my COVID EIDL?",
      a: "They can ask. SBA's assumption letter wants Form 912 from the assuming party's principals, two years of its federal returns, a year-to-date profit and loss, organizational documents, a certificate of good standing and proof of insurance.[5]",
    },
    {
      q: "Does an assumption release me from the loan?",
      a: "No. SBA's October 2026 assumption and change in ownership letters both say approval does not release the original borrower or any guarantor. A release of guarantor is a separate request.[2][4][5]",
    },
    {
      q: "What happens if I am 120 days behind on the EIDL?",
      a: "SBA says the account may be referred to the Treasury Offset Program, and loans meeting the delinquency rules transfer to cross-servicing, after which SBA no longer services them.[2] The statute requires referral above 120 days.[7]",
    },
    {
      q: "Will a delinquent EIDL stop my buyer's SBA loan?",
      a: "It stops a buyer who owes the delinquent debt. 31 CFR 285.13 bars an applicant or guarantor with a delinquent nontax federal debt, and SOP 50 10 8.1 makes lenders check CAIVRS.[8][9]",
    },
    {
      q: "Is a COVID EIDL forgivable?",
      a: "No. SBA's program page says these loans are not forgivable and must be repaid. Only the EIDL Advances, a separate product, did not have to be repaid.[1]",
    },
    {
      q: "How long does SBA take to approve a release or a subordination?",
      a: "SBA publishes no processing time for servicing requests, so no honest number exists. Its letters say a complete request helps avoid delays, and that nothing is a commitment until SBA puts it in writing.[3][10]",
    },
  ],
  sources: [
    {
      n: 1,
      label:
        "About COVID-19 EIDL: the loan-terms table ($2 million maximum, 30-year term, 3.75 percent fixed for businesses and 2.75 percent for private nonprofits, collateral required above $25,000, personal guaranty required above $200,000, no penalty for prepayment, the $100 lien filing fee and real estate recording costs), the September 8 and October 8, 2021 policy changes, and the January 1, 2022 close of new applications",
      url: "https://legacy.sba.gov/funding-programs/loans/covid-19-relief-options/covid-19-economic-injury-disaster-loan/about-covid-19-eidl",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-11-23",
    },
    {
      n: 2,
      label:
        "Manage your EIDL (last updated July 17, 2026): payments begin 30 months from the disbursement date on the original note, interest accrues through the deferment and an unpaid deferment balance becomes a balloon at maturity, the 50 percent payment reduction for six months once every five years and its five eligibility conditions, Treasury Offset Program referral after 120 days of delinquency, transfer to cross-servicing, the charged-off reinstatement route, and the list of nine servicing action requirement letters",
      url: "https://legacy.sba.gov/funding-programs/loans/covid-19-relief-options/covid-19-economic-injury-disaster-loan/manage-your-eidl",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-11-23",
    },
    {
      n: 3,
      label:
        "COVID EIDL Release of Collateral Request Requirements, October 2026 version: \"under most circumstances, SBA may require full monetary consideration\", a paydown for consideration is not a regular payment and payments are not automatically re-amortized, and the nine-item document list",
      url: "https://legacy.sba.gov/document/support-release-collateral-requirement-letter-0",
      publisher: "U.S. Small Business Administration, Office of COVID EIDL Services",
      accessed: "2026-11-23",
    },
    {
      n: 4,
      label:
        "COVID EIDL Change in Ownership Request Requirements, October 2026 version: \"any Consent to Change in Ownership will not release the Original Borrower(s) and/or any Guarantor(s) from liability\", approval may be conditioned on curing defaults or payment of material monetary consideration, and the eight-item document list including SBA Form 912",
      url: "https://legacy.sba.gov/document/support-change-ownership-requirement-letter",
      publisher: "U.S. Small Business Administration, Office of COVID EIDL Services",
      accessed: "2026-11-23",
    },
    {
      n: 5,
      label:
        "COVID EIDL Assumption Request Requirements, October 2026 version: approval of the assumption will not release the original borrower or any guarantor from liability, and the nine-item document list for the assuming party",
      url: "https://legacy.sba.gov/document/support-assumption-requirement-letter",
      publisher: "U.S. Small Business Administration, Office of COVID EIDL Services",
      accessed: "2026-11-23",
    },
    {
      n: 6,
      label:
        "13 CFR 123.11, Does SBA require collateral for any of its disaster loans: no collateral generally required on an economic injury disaster loan of $50,000 or less, and above that \"available collateral, as determined by SBA, such as a lien on the damaged or replacement property and/or a security interest in business assets\"",
      url: "https://www.law.cornell.edu/cfr/text/13/123.11",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-23",
    },
    {
      n: 7,
      label:
        "31 U.S.C. 3716(c)(6)(A): any federal agency owed a past due, legally enforceable nontax debt that is over 120 days delinquent shall notify the Secretary of the Treasury for administrative offset",
      url: "https://www.law.cornell.edu/uscode/text/31/3716",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-23",
    },
    {
      n: 8,
      label:
        "31 CFR 285.13: a person who owes an outstanding nontax debt in delinquent status is not eligible for federal financial assistance, the bar reaches guarantors and a corporation controlled by a person who owes such a debt, delinquent status means unpaid 90 days after the due date, and a written-off debt is still delinquent",
      url: "https://www.law.cornell.edu/cfr/text/31/285.13",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-23",
    },
    {
      n: 9,
      label:
        "SBA SOP 50 10 8.1, Lender and Development Company Loan Programs, effective October 1, 2026, eligibility paragraph 19, Delinquent Federal Debt: ineligibility for 7(a) and 504 where the applicant or any guarantor owes one, the four circumstances in which a debt is not delinquent, the mandatory CAIVRS check and its documentation, processing once the debt is fully satisfied, and the rarity of waivers under 31 CFR 285.13",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-11-23",
    },
    {
      n: 10,
      label:
        "COVID EIDL Subordination Request Requirements, October 2026 version: the five general requirements including the UCC lien search and the lender commitment or term sheet, and the six additional real estate requirements including a title report dated within six months and a current valuation report",
      url: "https://legacy.sba.gov/document/support-oces-subordination-requirement-letter",
      publisher: "U.S. Small Business Administration, Office of COVID EIDL Services",
      accessed: "2026-11-23",
    },
    {
      n: 11,
      label:
        "SBA Disaster Assistance Update, Nationwide COVID EIDL, Targeted EIDL Advances, Supplemental Targeted Advances, April 28, 2022: 3,923,374 EIDLs approved and $378,410,624,804 in EIDL dollars approved, figures as of April 27, 2022",
      url: "https://legacy.sba.gov/sites/default/files/2022-04/COVID-19%20EIDL%20TA%20STA_04282022_Public-508.pdf",
      publisher: "U.S. Small Business Administration, Office of Disaster Recovery",
      accessed: "2026-11-23",
    },
    {
      n: 12,
      label:
        "13 CFR 123.303, How can my business spend my economic injury disaster loan: working capital, the COVID EIDL permission to make debt payments and prepayments on business debt other than loans owned by a federal agency, and the prohibitions on refinancing pre-disaster debt, repairing physical damage and paying dividends or disbursements to owners",
      url: "https://www.law.cornell.edu/cfr/text/13/123.303",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-23",
    },
    {
      n: 13,
      label:
        "15 U.S.C. 636: the 10-year limitations period at (b)(16) for fraud charges on a disaster loan made in response to COVID-19, the 30-year ceiling on the period of a loan under subsection (b), and the 4 percent cap at (d)(5)(C) for a business unable to obtain credit elsewhere",
      url: "https://www.law.cornell.edu/uscode/text/15/636",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-23",
    },
    {
      n: 14,
      label:
        "EIDL data (last updated October 2, 2024): SBA's COVID EIDL program reports are state by state, the loan-level data on data.sba.gov runs through December 2020, and data from March 2020 to current is on USAspending.gov",
      url: "https://legacy.sba.gov/funding-programs/loans/covid-19-relief-options/eidl/eidl-data",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-11-23",
    },
    {
      n: 15,
      label: "Hotel debt rate sheet, October 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-11-23",
    },
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/asset-sale-vs-entity-sale",
      "/sell-a-hotel/irs-liens-and-payroll-taxes",
      "/sell-a-hotel/selling-a-distressed-hotel",
      "/sell-a-hotel/documents-needed",
      "/sell-a-hotel/how-long-it-takes",
      "/sell-a-hotel/tax-clearance-and-withholding",
    ],
    glossary: ["/glossary/sba-7a", "/glossary/sba-504", "/glossary/per-key"],
    data: ["/rates"],
  },
  cta: {
    label: "Ask about selling your hotel",
    href: "/contact",
  },
  brandSentence:
    "Matthews Hotel Markets sells hotels from $2 million and arranges hotel financing from $5 million, and does not negotiate SBA servicing actions: the release, the subordination and the payoff belong to your counsel and SBA's servicing office, and the time they take belongs in the marketing calendar from week one.[2]",
};

export default page;
