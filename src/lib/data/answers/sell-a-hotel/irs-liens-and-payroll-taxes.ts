/**
 * Can I sell my hotel if I owe the IRS back payroll taxes?
 * Answer page: /sell-a-hotel/irs-liens-and-payroll-taxes
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-11-19): 26 U.S.C. 6321, 6322, 6323, 6325, 6502, 6656,
 * 6671, 6672, 7425, 7501 and 3505 on Cornell LII, plus 26 CFR 301.6672-1;
 * 11 U.S.C. 523(a)(1)(A) and 507(a)(8)(C) on Cornell LII; IRS Publication
 * 783 (Rev. 12-2022) and Form 14135 (Rev. 11-2024) for the discharge
 * application and the 45-day rule; IRS Publication 594 (Rev. 1-2026) for the
 * collection sequence and the trust fund definition; IRS Publication 15
 * (2026) for the 6.2 percent and 1.45 percent rates and the deposit
 * schedules; the IRS quarterly interest rates page (reviewed September 10,
 * 2026) for the 7 percent fourth-quarter 2026 underpayment rate compounded
 * daily; and the FY2025 IRS Data Book tables 4-1 and 4-2, downloaded as
 * XLSX and read cell by cell, for the lien, levy, seizure and deposit
 * penalty counts.
 *
 * The worked example was recomputed line by line with
 * scripts/check-payroll-lien-math.mjs before saving, 36 assertions. Do not
 * hand-edit a number without re-reading its source and bumping
 * `lastUpdated`.
 *
 * Deliberately absent: what a title company will or will not insure over,
 * what a buyer "typically" demands in escrow, how long an IRS Advisory group
 * really takes against the 45 days Publication 783 asks for, and any
 * effective tax rate on the recognized amounts. None of those is published.
 * The page prints the statutory mechanics and the IRS's own published
 * timing, and says plainly where the rest is negotiated or fact-specific.
 *
 * Two dates to re-verify. The underpayment interest rate is set quarterly,
 * so the 7 percent here is good only through December 31, 2026; the first
 * quarter of 2027 rate publishes in an Internal Revenue Bulletin in
 * December 2026. The FY2026 Data Book replaces tables 4-1 and 4-2 in
 * mid-2027.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "irs-liens-and-payroll-taxes",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Selling a Hotel With Unpaid Payroll Taxes",
  description:
    "A filed federal tax lien reaches the hotel and your buyer. How a section 6325 discharge works, the 45-day rule, and why the penalty follows you personally.",
  h1: "Can I sell my hotel if I owe the IRS back payroll taxes?",
  lastUpdated: "2026-11-19",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Can I sell my hotel if I owe the IRS back payroll taxes?",
    "Will an IRS tax lien stop my hotel sale from closing?",
    "How do I get a federal tax lien released so my hotel can close?",
    "What is the trust fund recovery penalty for a hotel owner?",
    "Am I personally liable for my hotel's unpaid payroll taxes?",
    "Does selling the hotel wipe out what I owe the IRS?",
    "What happens to the IRS lien if my lender forecloses on the hotel?",
    "Can my lender fund payroll while my hotel is in a workout?",
  ],
  answer:
    "Yes, but not quietly over a filed lien. A notice of federal tax lien makes the government's claim good against your buyer, and the IRS filed 214,099 of them in fiscal year 2025 while conducting 50 seizures.[1][2] Section 6325(b) lets the IRS discharge the hotel so the deed can convey, and Publication 783 asks for the application 45 days before closing.[3][4]",
  takeaways: [
    "The lien is automatic. It arises at assessment and reaches all property and rights to property you own, not just the hotel.[5][6]",
    "Filing is what hurts. Until the notice is filed the lien is not valid against a purchaser; once filed, your buyer takes the hotel subject to it.[1]",
    "The hotel's debt and your debt are two debts. Section 6672 assesses 100 percent of the withheld trust fund amount against whoever was responsible for paying it over, and bankruptcy does not discharge it.[7][8][9]",
    "A discharge is not forgiveness. Section 6325(b)(2)(A) frees the hotel when the IRS gets the value of its interest in it, at the fourth-quarter 2026 interest rate of 7 percent compounded daily.[3][10]",
  ],
  sections: [
    {
      h2: "Does an IRS lien attach to my hotel automatically?",
      lead: "Yes. The federal tax lien arises by operation of law when the tax is assessed and demand goes unpaid, with no filing and no court involved.",
      body: "Section 6321 is short and wide: if a person liable to pay any tax neglects or refuses to pay after demand, the amount, including interest, additions to tax and assessable penalties, is a lien in favor of the United States upon all property and rights to property belonging to that person.[5] Section 6322 fixes the timing at the date of assessment, running until the liability is satisfied or becomes unenforceable.[6] So the hotel is never clean and then encumbered. \"Rights to property\" takes in the receivables, the house banks and the contracts, which is the [going-concern value](/glossary/going-concern-value) a buyer is paying for, and the lien reaches the other hotel and the house too, because it follows the taxpayer rather than the asset.[11]"
    },
    {
      h2: "What changes when the IRS files the notice of lien?",
      lead: "Filing is the event that reaches your buyer, because section 6323(a) makes the lien invalid against a purchaser until notice of it has been filed.",
      body: "The statute is explicit: the lien is not valid against any purchaser, holder of a security interest, mechanic's lienor or judgment lien creditor until notice meeting the requirements of subsection (f) has been filed, in the one office a state designates for real property where the hotel sits.[1] Before filing, a buyer who pays value takes the hotel free of the lien even though the seller still owes every dollar. After filing, the buyer is on the statute's list. A closing stops not because the IRS appeared but because a document appeared in the chain of title. In fiscal year 2025 the IRS filed 214,099 of those notices, up 17,103 from 196,996, requested 339,137 levy notices and conducted 50 seizures: one for every 4,282 filings.[2] The risk is a recorded claim, not a padlock."
    },
    {
      h2: "Why does the IRS say I owe this personally when the hotel owes it?",
      lead: "Because the withheld part of payroll was never the hotel's money, and section 6672 assesses 100 percent of it against whoever was responsible for paying it over.",
      body: "Section 7501 says the amount a person must collect or withhold and pay over is held to be a special fund in trust for the United States, which Publication 594 identifies as the income tax, social security and Medicare withheld from wages.[12][11] Section 6672 attaches a penalty equal to the whole amount not accounted for and paid over, against any person required to collect and pay it who willfully fails to.[7] Section 6671 defines that person to include an officer or employee under a duty to perform the act and makes the penalty collectible in the same manner as a tax, which gives it its own 6321 lien on that person's property.[13] The regulation limits it to taxes imposed on someone else.[14] The employer's own half of FICA is not in it, because it was never withheld from anyone, and written notice must precede any demand by 60 days.[7]"
    },
    {
      h2: "Can the sale close with the lien still on record?",
      lead: "Yes, through a certificate issued under section 6325, and which one depends on the test you can meet.",
      body: "Section 6325(a) is the release, available when the liability is satisfied or legally unenforceable or a bond is accepted, with 30 days to issue.[3] Hotel sales rarely get there, so they use the discharge in subsection (b), which frees the property and leaves the debt. Form 14135 prints the five bases: remaining property worth double the liability plus senior encumbrances; payment of not less than the value of the government's interest; no value in that interest; proceeds held in escrow subject to the same liens and claims; or a deposit or bond.[4] The double test almost never works on a hotel, because the hotel is the asset; the escrow basis carries the sale that cannot wait for the review. Publication 783 sets the timing: apply to IRS Advisory Consolidated Receipts at least 45 days before the transaction date.[15] Section 6325(d) subordination puts a new lender ahead of the lien instead, which is the [refinance](/hotel-financing/refinance) route.[3]"
    },
    {
      h2: "How much has to come out of my proceeds?",
      lead: "The value of the government's interest in the hotel: the equity left after the senior mortgage and the costs of sale, capped at what you owe.",
      body: "Section 6325(b)(2)(A) requires payment of not less than the value of the interest of the United States in the part discharged, and says to value that interest with regard to the value of the part and the liens on it that have priority.[3] That sequence is the answer: the first mortgage recorded before the notice comes first, brokerage and closing costs come out, and what is left is the government's interest up to the balance owed. At zero or below, 6325(b)(2)(B) applies and the IRS can discharge for nothing.[3][4] What owners get wrong is what the certificate does. It does not reduce the assessment, release the lien on other property section 6321 reaches, or touch the 6672 penalty.[5][7] Section 6502 allows 10 years from assessment to collect, and 11 U.S.C. 523(a)(1)(A) with 507(a)(8)(C) keeps a withheld tax out of an individual discharge, with no lookback period.[16][8][9]"
    },
    {
      h2: "What are the penalties and interest adding each month?",
      lead: "A failure-to-deposit penalty of up to 15 percent of the amount not deposited, plus interest at 7 percent compounded daily for the fourth quarter of 2026.",
      body: "Section 6656 prices lateness in four tiers: 2 percent to 5 days, 5 percent to 15 days, 10 percent beyond 15 days, and 15 percent once the tax is still undeposited by the earlier of 10 days after the first delinquency notice or a demand for immediate payment.[17] Publication 594 says the same from the collection side, and adds that the IRS may file a lien, levy, or propose the trust fund recovery penalty against the responsible individuals.[11] Interest is quarterly at the federal short-term rate plus 3 points, compounded daily, which is 7 percent for the fourth quarter of 2026 under Internal Revenue Bulletin 2026-36, or 7.250 percent across a year.[10] Publication 15 for 2026 makes a Form 941 filer semiweekly above $50,000 of lookback taxes and requires a next-day deposit at $100,000 in one day, so a $420,000 quarterly payroll starts the clock within days of each payday.[18] One honest note: the IRS assessed 1,216,346 deposit penalties on employment taxes in fiscal 2025 and abated 99.4 percent of the dollars, reported without netting, so abatement is a question for a tax adviser.[21]"
    },
    {
      h2: "What happens to the lien if my lender forecloses instead?",
      lead: "It turns on whether the notice of lien was filed more than 30 days before the sale and whether the United States was given notice of the sale.",
      body: "Section 7425(b) governs a nonjudicial foreclosure. If notice of the federal lien was filed more than 30 days before the sale and the United States was not given notice of the sale in the prescribed manner, the sale is made subject to and without disturbing the federal lien; if the notice was not filed that early, or the United States was notified, local law decides the effect.[19] Then the piece that surprises a bidder: where the property is sold to satisfy a lien senior to the government's, section 7425(d) lets the Secretary redeem it within 120 days of the sale or the local redemption period, whichever is longer.[19] For 120 days after the gavel the winning bidder holds something the United States can take back, which is a reason to clear the lien before a [receivership or foreclosure sale](/sell-a-hotel/selling-a-distressed-hotel) rather than after."
    },
    {
      h2: "Can my lender fund payroll while the hotel is in a workout?",
      lead: "It can, and section 3505 is why a lender's counsel asks hard questions first, because funding wages can make the lender liable for the withholding.",
      body: "Section 3505(a) makes a lender, surety or other non-employer that pays wages directly to employees liable in its own person and estate for a sum equal to the taxes required to be withheld from those wages.[20] Subsection (b) covers the ordinary [workout](/hotel-financing/loan-workouts) case: a lender that supplies funds for the specific purpose of paying wages, with actual notice or knowledge that the employer does not intend to or will not be able to deposit the withheld tax on time, is liable for the tax not paid over, capped at 25 percent of the amount supplied, with anything it pays credited against the employer's liability.[20] So an owner who says honestly that payroll tax has been skipped hands the lender a 25 percent contingent exposure on every advance that funds wages. No lender publishes its terms for this; the statutory ceiling is the published part."
    },
    {
      h2: "What should I do before I list the hotel?",
      lead: "File every missing Form 941, get the exact payoff from the IRS rather than from a notice, and start the discharge application 45 days before the closing date you want.",
      body: "File first. Publication 594 tells a taxpayer to file all returns that are due whether or not payment can be made, and warns that the notice of lien shows only the assessed balance as of its date, not the payoff or the filing and release charges.[11] An unfiled quarter is a balance nobody can size, and a seller pricing off the recorded notice is working from a stale number in a quarter where interest compounds daily.[10] Then sequence the paperwork: the discharge wants 45 days, the 6325(b)(3) escrow basis exists for the sale that cannot wait, and the state clearance runs on its own clock at [do I need a tax clearance certificate to sell my hotel?](/sell-a-hotel/tax-clearance-and-withholding), with the staff question at [what happens to my employees when I sell?](/sell-a-hotel/employees-when-you-sell).[15][4]"
    },
  ],  table: {
    caption:
      "Certificates the IRS can issue under section 6325, and what each does to a hotel sale (statute and forms read November 19, 2026)",
    columns: [
      "Certificate",
      "Code section",
      "What it takes",
      "What it does for the closing",
    ],
    rows: [
      [
        "Release of lien",
        "6325(a)",
        "The liability is satisfied or legally unenforceable, or a bond is accepted; issued within 30 days[3]",
        "Clears the lien. Rarely available before a sale, because the sale produces the money",
      ],
      [
        "Discharge, double test",
        "6325(b)(1)",
        "Property left subject to the lien is worth double the liability plus senior liens[3][4]",
        "For an owner with other unencumbered real estate, not one whose hotel is the asset",
      ],
      [
        "Discharge, payment",
        "6325(b)(2)(A)",
        "The United States is paid the value of its interest, measured after liens with priority[3][4]",
        "The usual basis. The IRS is paid from the equity and the deed conveys clear",
      ],
      [
        "Discharge, no value",
        "6325(b)(2)(B)",
        "The IRS determines its interest in the property has no value[3][4]",
        "For an underwater hotel. The lien comes off for nothing",
      ],
      [
        "Discharge, escrow",
        "6325(b)(3)",
        "The proceeds are held by agreement, subject to the same liens and claims in the same priority[3][4]",
        "Closes before the amount is settled. The fight moves to escrow",
      ],
      [
        "Discharge, deposit or bond",
        "6325(b)(4)",
        "An owner who is not the taxpayer deposits money or a bond equal to the government's interest[3][4]",
        "For a co-owner. Carries a section 7426(a)(4) remedy the payment basis does not[3][4]",
      ],
      [
        "Subordination",
        "6325(d)",
        "An equal amount is paid over, or subordination will increase what the IRS collects[3]",
        "Not a sale tool. How a refinance gets a new lender ahead of the lien",
      ],
      [
        "Withdrawal of the notice",
        "Form 12277, Publication 594",
        "A payment plan, faster collection, an IRS error, a filing during a bankruptcy stay, or the best interest of both sides[11]",
        "Removes the notice from the public record and abandons priority. The lien and debt remain[11]",
      ],
    ],
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet shows Prime at 7.00 percent as of September 30, 2026.[22] The IRS underpayment rate for the fourth quarter of 2026 is the same 7 percent, with one difference that matters: the IRS compounds it daily, so a year of it is 7.250 percent.[10] Unpaid payroll tax is the only creditor that records against title without asking.",
  },
  workedExample: {
    label:
      "Hypothetical: a 96-key select-service hotel, four unpaid quarters, and two sale prices",
    body: "Hypothetical, not a transaction, and every payroll input is an assumption rather than a benchmark. A single-member LLC owns the hotel. Gross wages are $420,000 a quarter, federal income tax withheld is $50,400 of that, or 12.0 percent, and deposits stopped for four consecutive quarters.\n\nWhat was owed. Social security is 6.2 percent and Medicare 1.45 percent, each on the employee and the employer, so 7.65 percent a side.[18] The employee side is $420,000 times 0.0765, or $32,130, and the employer side is the same. Trust fund tax per quarter is the $50,400 withheld plus that $32,130, or $82,530, and total Form 941 liability is $114,660. Over four quarters: $1,680,000 of wages, $330,120 of trust fund tax, $128,520 of employer tax, $458,640 in all. The trust fund share is 72.0 percent.\n\nWhat it grew to. The failures ran past 15 days, so section 6656 takes 10 percent, which is $45,864; had they reached the final tier it would be 15 percent, or $68,796, another $22,932.[17] One year of interest on the $458,640 plus the $45,864, at the fourth-quarter 2026 rate of 7 percent compounded daily, is $36,577.[10] The balance a notice of lien would show is $541,081.\n\nThe first sale. The hotel sells for $9,400,000. The first mortgage, recorded years before the notice of lien, takes $7,900,000, and brokerage and closing costs at 5.0 percent take $470,000. That leaves $1,030,000, the value of the government's interest after liens with priority, so 6325(b)(2)(A) is satisfied by paying the full $541,081 and the owner keeps $488,919: the lien took 52.5 percent of the equity.[3] The double test would have needed $1,082,162 of other property left behind the lien.[3]\n\nThe same hotel $900,000 lower. Price $8,500,000, the same mortgage, costs of $425,000, so $175,000 is left. The IRS can be paid that, or discharge for nothing under 6325(b)(2)(B) if Advisory values its interest at zero.[3] Either way the owner nets $0 and still owes $366,081, and the $330,120 of trust fund tax inside it stays exposed to a 100 percent section 6672 penalty that bankruptcy would not discharge.[7][8][9]\n\nTwo timing costs. Forty-five days of carry on the $7,900,000 mortgage at the 7.00 percent Prime on the October 2026 rate sheet is $68,178, which is what it costs to learn the 45-day rule late rather than early.[22][15] And a lender asked to advance one quarter of payroll, $420,000, during a workout accepts a section 3505(b) ceiling of $105,000.[20]\n\nEvery figure above was recomputed by scripts/check-payroll-lien-math.mjs.",
  },
  faq: [
    {
      q: "Can I sell my hotel if I owe the IRS back payroll taxes?",
      a: "Yes. Section 6325(b) lets the IRS discharge the hotel so the deed conveys, usually for the value of its interest at closing.[3] Publication 783 asks for the application 45 days ahead.[15]",
    },
    {
      q: "Will a federal tax lien stop my closing?",
      a: "A filed notice makes the lien good against your buyer, who then takes the hotel subject to it.[1] Nothing in the statute stops the sale. What stops it is a buyer unwilling to take that claim without a certificate.",
    },
    {
      q: "Does selling the hotel wipe out what I owe?",
      a: "No. A discharge frees the hotel and leaves the assessment standing, with the lien still on your other property under section 6321.[3][5] The IRS has 10 years from assessment to collect.[16]",
    },
    {
      q: "Am I personally liable for my hotel's unpaid payroll taxes?",
      a: "For the withheld part, often yes. Section 6672 assesses 100 percent of the trust fund amount against a person under a duty to pay it over who willfully failed to.[7][13] The employer's own FICA share is not in it.",
    },
    {
      q: "Can bankruptcy clear the trust fund recovery penalty?",
      a: "Not for an individual debtor. 11 U.S.C. 523(a)(1)(A) excepts taxes of the kind in section 507(a)(8), which includes any tax required to be collected or withheld and owed in whatever capacity, with no lookback period.[8][9]",
    },
    {
      q: "How long does an IRS lien discharge take?",
      a: "Publication 783 asks for it at least 45 days before the transaction date, to allow review, determination and document delivery by closing.[15] The IRS publishes no average processing time, so treat 45 days as the floor.",
    },
    {
      q: "What if my lender forecloses before I can sell?",
      a: "If the notice was filed more than 30 days before the sale and the United States was not notified, the foreclosure leaves the federal lien undisturbed.[19] Where the lien is junior, the IRS can redeem within 120 days.[19]",
    },
    {
      q: "Can my lender just advance the money for payroll?",
      a: "It can, but section 3505(b) makes a lender that funds wages knowing the withholding will not be deposited liable for that tax, capped at 25 percent of the funds supplied.[20] Expect a direct-pay structure.",
    },
  ],
  sources: [
    {
      n: 1,
      label:
        "26 U.S.C. 6323(a), (f) and (g): the lien is not valid against a purchaser until notice is filed, where that notice is filed, and refiling",
      url: "https://www.law.cornell.edu/uscode/text/26/6323",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-19",
    },
    {
      n: 2,
      label:
        "IRS Data Book, fiscal year 2025, Table 4-1, Delinquent Collection Activities: 214,099 notices of federal tax lien filed, 339,137 levy notices requested and 50 seizures in FY2025, against 196,996 lien notices in FY2024",
      url: "https://www.irs.gov/pub/irs-soi/25db-4-01-co.xlsx",
      publisher: "Internal Revenue Service, Statistics of Income",
      accessed: "2026-11-19",
    },
    {
      n: 3,
      label:
        "26 U.S.C. 6325: release at (a), the five discharge bases at (b)(1) to (b)(4) including the valuation rule for the interest of the United States, and subordination at (d)",
      url: "https://www.law.cornell.edu/uscode/text/26/6325",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-19",
    },
    {
      n: 4,
      label:
        "Form 14135, Application for Certificate of Discharge of Property from Federal Tax Lien (Rev. 11-2024): the five bases as the form states them, the escrow agreement requirement under 6325(b)(3) and the waiver for third-party applications",
      url: "https://www.irs.gov/pub/irs-pdf/f14135.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-19",
    },
    {
      n: 5,
      label:
        "26 U.S.C. 6321, Lien for taxes: a lien upon all property and rights to property, whether real or personal, belonging to the person liable",
      url: "https://www.law.cornell.edu/uscode/text/26/6321",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-19",
    },
    {
      n: 6,
      label:
        "26 U.S.C. 6322, Period of lien: it arises at the time the assessment is made and continues until the liability is satisfied or becomes unenforceable",
      url: "https://www.law.cornell.edu/uscode/text/26/6322",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-19",
    },
    {
      n: 7,
      label:
        "26 U.S.C. 6672: a penalty equal to the total amount of the tax not accounted for and paid over, the 60-day preliminary notice at (b)(2), and the right of contribution at (d)",
      url: "https://www.law.cornell.edu/uscode/text/26/6672",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-19",
    },
    {
      n: 8,
      label:
        "11 U.S.C. 523(a)(1)(A): a discharge does not discharge an individual debtor from a tax of the kind specified in section 507(a)(8), whether or not a claim was filed or allowed",
      url: "https://www.law.cornell.edu/uscode/text/11/523",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-19",
    },
    {
      n: 9,
      label:
        "11 U.S.C. 507(a)(8)(C): a tax required to be collected or withheld and for which the debtor is liable in whatever capacity, stated without a lookback period",
      url: "https://www.law.cornell.edu/uscode/text/11/507",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-19",
    },
    {
      n: 10,
      label:
        "Quarterly interest rates: the fourth-quarter 2026 underpayment rate of 7 percent, set at the federal short-term rate plus 3 percentage points and compounded daily, published in Internal Revenue Bulletin 2026-36 (page last reviewed September 10, 2026)",
      url: "https://www.irs.gov/payments/quarterly-interest-rates",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-19",
    },
    {
      n: 11,
      label:
        "IRS Publication 594, The IRS Collection Process (Rev. 1-2026): the lien created by law, the public notice and its effect on creditors, release, withdrawal, discharge and subordination, the trust fund definition, and the failure-to-deposit penalty of up to 15 percent",
      url: "https://www.irs.gov/pub/irs-pdf/p594.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-19",
    },
    {
      n: 12,
      label:
        "26 U.S.C. 7501, Liability for taxes withheld or collected: the amount withheld is held to be a special fund in trust for the United States",
      url: "https://www.law.cornell.edu/uscode/text/26/7501",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-19",
    },
    {
      n: 13,
      label:
        "26 U.S.C. 6671: penalties are assessed and collected in the same manner as taxes at (a), and \"person\" includes an officer or employee of a corporation, or a member or employee of a partnership, under a duty to perform the act at (b)",
      url: "https://www.law.cornell.edu/uscode/text/26/6671",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-19",
    },
    {
      n: 14,
      label:
        "26 CFR 301.6672-1: the penalty applies only to the collection, accounting for or payment over of taxes imposed on a person other than the one required to collect them",
      url: "https://www.law.cornell.edu/cfr/text/26/301.6672-1",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-19",
    },
    {
      n: 15,
      label:
        "IRS Publication 783, How to Apply for a Certificate of Discharge From Federal Tax Lien (Rev. 12-2022): submit the application at least 45 days before the transaction date, and mail it to IRS Advisory Consolidated Receipts",
      url: "https://www.irs.gov/pub/irs-pdf/p783.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-19",
    },
    {
      n: 16,
      label:
        "26 U.S.C. 6502(a): collection by levy or court proceeding within 10 years after the assessment of the tax",
      url: "https://www.law.cornell.edu/uscode/text/26/6502",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-19",
    },
    {
      n: 17,
      label:
        "26 U.S.C. 6656(b): the failure-to-deposit tiers of 2 percent to 5 days, 5 percent to 15 days, 10 percent beyond 15 days, and 15 percent after a delinquency notice or a demand for immediate payment",
      url: "https://www.law.cornell.edu/uscode/text/26/6656",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-19",
    },
    {
      n: 18,
      label:
        "IRS Publication 15, Circular E, Employer's Tax Guide (2026): social security at 6.2 percent and Medicare at 1.45 percent each for employee and employer, the $50,000 lookback threshold between monthly and semiweekly deposit schedules, and the $100,000 next-day deposit rule",
      url: "https://www.irs.gov/pub/irs-pdf/p15.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-19",
    },
    {
      n: 19,
      label:
        "26 U.S.C. 7425(b) and (d): a nonjudicial sale is made subject to the federal lien where notice was filed more than 30 days before and the United States was not notified, and the 120-day right of redemption",
      url: "https://www.law.cornell.edu/uscode/text/26/7425",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-19",
    },
    {
      n: 20,
      label:
        "26 U.S.C. 3505(a) and (b): direct payment of wages by a lender, personal liability where funds are supplied for wages with notice that the withholding will not be deposited, limited to 25 percent of the amount supplied, and the credit against the employer's liability at (c)",
      url: "https://www.law.cornell.edu/uscode/text/26/3505",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-19",
    },
    {
      n: 21,
      label:
        "IRS Data Book, fiscal year 2025, Table 4-2, Civil Penalties Assessed and Abated: 1,216,346 federal tax deposit penalties on employment taxes, $117,895,214 thousand assessed and $117,210,987 thousand abated, reported without netting",
      url: "https://www.irs.gov/pub/irs-soi/25db-4-02-cp.xlsx",
      publisher: "Internal Revenue Service, Statistics of Income",
      accessed: "2026-11-19",
    },
    {
      n: 22,
      label: "Hotel debt rate sheet, October 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-11-19",
    },
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/tax-clearance-and-withholding",
      "/sell-a-hotel/selling-a-distressed-hotel",
      "/sell-a-hotel/employees-when-you-sell",
      "/sell-a-hotel/taxes-when-selling-a-hotel",
      "/sell-a-hotel/how-long-it-takes",
      "/sell-a-hotel/asset-sale-vs-entity-sale",
    ],
    glossary: [
      "/glossary/going-concern-value",
      "/glossary/noi",
      "/glossary/prime-rate",
    ],
    data: ["/rates"],
  },
  cta: {
    label: "Ask about selling your hotel",
    href: "/contact",
  },
  brandSentence:
    "Matthews Hotel Markets sells hotels from $2 million, including distressed, receivership and note sales, and does not handle tax representation: the discharge application belongs to your tax counsel, and its 45 days belong in the marketing calendar from week one.[15]",
};

export default page;
