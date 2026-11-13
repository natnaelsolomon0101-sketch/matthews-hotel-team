/**
 * What happens if I default on an SBA loan on my hotel?
 * Answer page: /hotel-financing/sba-loan-default
 *
 * Written 2026-11-13 from 13 CFR part 120 subpart E, SBA SOP 50 57 4
 * (effective November 1, 2025), the Federal Claims Collection Standards at
 * 31 CFR part 902, and the Treasury offset rules at 31 U.S.C. 3711, 3716 and
 * 3717 and 31 CFR 285.4 and 285.12.
 *
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "sba-loan-default",
  cluster: "hotel-financing",
  isHub: false,
  title: "SBA Hotel Loan Default: What Happens",
  h1: "What happens if I default on an SBA loan on my hotel?",
  description: "What happens after an SBA 7(a) hotel loan goes unpaid: site visit, guaranty purchase, foreclosure credit bid, deficiency, compromise, Treasury.",
  lastUpdated: "2026-11-13",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "What happens if I default on an SBA loan on my hotel?",
    "Does the SBA guarantee mean I do not owe the money?",
    "Can the SBA come after me personally after a hotel foreclosure?",
    "What is an SBA offer in compromise on a hotel loan?",
    "What is an SBA deficiency balance after foreclosure?",
    "Can the government take my Social Security for an SBA loan?",
    "How long does the SBA have to collect a defaulted hotel loan?"
  ],
  answer: "The lender may demand SBA honor its guaranty once you are more than 60 calendar days past due on a payment.[1] SBA paying the bank does not reduce what you owe. The balance follows your personal guaranty to Treasury, and SBA's own manual, effective November 1, 2025, gives you 60 days of notice before that referral.[2]",
  takeaways: [
    "SBA's guaranty protects your bank, not you. It covers up to 75 percent of a loan over $150,000,[3] and SBA buying that piece leaves your balance where it was.[2]",
    "If you own 20 percent or more of the borrower you almost certainly signed an unlimited guaranty, so the shortfall after the hotel sells is yours.[4]",
    "SBA's manual tells the lender not to bid the whole loan balance at the foreclosure sale when that would wipe out a collectible deficiency.[2]",
    "A hotel deficiency is nearly always over $100,000, and above $100,000 of principal the authority to accept a settlement sits with the Department of Justice, not SBA.[5]",
    "There is no deadline on federal administrative offset,[6] so an unsettled balance can follow a guarantor into retirement at the lesser of 15 percent of a monthly benefit or the part above $750.[7]"
  ],
  sections: [
    {
      h2: "When does a missed payment become a default the lender has to act on?",
      lead: "Two clocks start at once: the lender must visit the hotel within 60 calendar days of an uncured payment default, and it cannot ask SBA to honor the guaranty until you are more than 60 calendar days past due.[2][1]",
      body: "SOP 50 57 4, the servicing and liquidation manual in effect since November 1, 2025, requires a site visit within 60 calendar days of an uncured payment default, and within 15 calendar days of a non-payment event that puts the loan in liquidation status. The only exemption is collateral worth under $10,000, which no hotel is.[2]\n\nThe second clock is regulatory. 13 CFR 120.520(a)(1) lets a lender demand purchase once a borrower has been in default on an installment for more than 60 calendar days without curing it, and only after the business personal property securing the loan has been liquidated.[1] A lender may not request purchase on a non-payment default alone, such as late financial statements.[2] Cure before the request goes in and the right to request purchase on that default lapses.[1]\n\nBetween those points the lender accelerates the note, demands payment from every obligor, classifies the loan in liquidation and repurchases the guaranteed portion from the secondary market or asks SBA to.[2] A workout is still possible here, and the mechanics are at [What is a loan workout and how does it work for a distressed hotel?](/hotel-financing/loan-workouts)."
    },
    {
      h2: "Does SBA paying the bank reduce what I owe?",
      lead: "No. The guaranty pays the lender; your note is untouched.",
      body: "SBA guarantees up to 85 percent of a loan of $150,000 or less and up to 75 percent above that.[3] A hotel loan is above that line, so honoring the guaranty makes the bank whole on three quarters of its exposure and puts SBA in the file. None of that is a credit against your balance. SBA's manual says so about the later step: a status change to SBA Uncollectible or charge off \"has no impact on an Obligor's liability for the Loan balance\".[2]\n\nTwo details decide what the balance grows to. Under 13 CFR 120.521, on a variable-rate loan the rate you owe after purchase is the rate in effect at the earliest uncured payment default, not one SBA sets later.[8] And under 13 CFR 120.522(b)(1), SBA pays the lender a maximum of 120 days of accrued interest at purchase.[9] That cap sets how much of the delay the lender absorbs, not what accrues against you.\n\n13 CFR 120.524 lists ten events that release SBA from liability to the lender, including a failure to liquidate prudently.[10] Those are SBA's defenses against the bank, not yours."
    },
    {
      h2: "What happens to the hotel, and who decides what it sells for?",
      lead: "The lender liquidates in a commercially reasonable manner and bids at the foreclosure sale, and SBA's manual tells it what not to bid.[11][2]",
      body: "13 CFR 120.535(b) requires lenders to liquidate no less diligently than a loan without a government guaranty, promptly and in a commercially reasonable manner.[11] SOP 50 57 4 then says lenders should enter a credit bid at every real property foreclosure sale and should base it on the collateral's recoverable value. It adds two limits at once: the credit bid should not exceed the loan balance, and lenders \"should not bid the entire 7(a) Loan balance if doing so would eliminate an otherwise collectible deficiency\".[2]\n\nRead that sentence twice before assuming the foreclosure ends the matter. The bid at a hotel foreclosure sale is a number the lender picks inside a published instruction to preserve a claim against the guarantors, and it sets the size of that claim. No public source publishes what hotels fetch at foreclosure sales, so nobody can tell you the gap in advance.\n\nThe furniture, fixtures and equipment go separately. Lenders must liquidate personal property with a recoverable value of $10,000 or more, and may abandon real property only below $10,000 per parcel.[2] A hotel clears both thresholds, so both recoveries are netted against your balance."
    },
    {
      h2: "Am I personally liable after the hotel is gone?",
      lead: "If you hold 20 percent or more of the borrower, almost certainly, and the liability is joint and several with every other guarantor.[4]",
      body: "13 CFR 120.160(a) says holders of at least a 20 percent ownership interest generally must guarantee the loan, and lets SBA or a delegated lender require guarantees from others regardless of ownership.[4] That guaranty survives the sale of the hotel.\n\nThe collection standards make joint and several liability concrete. 31 CFR 902.4(a) tells agencies to pursue all debtors and not to allocate payment between them; 902.4(b) says a compromise with one debtor must not release the claim against the rest, and is not a precedent for the others.[12] SBA's manual repeats both points.[2] A partner who settles has solved a personal problem, not the partnership's.\n\nAn SBA hotel loan is recourse debt by program design, the opposite of the structure at [Can I get a non-recourse loan on a hotel?](/hotel-financing/non-recourse-loans)."
    },
    {
      h2: "Can I settle the deficiency, and who decides?",
      lead: "You can offer, but on a hotel-sized balance SBA cannot accept it alone: above $100,000 of principal the authority belongs to the Department of Justice.[5]",
      body: "31 CFR 902.1(a) lets an agency compromise a debt when the amount then due, excluding interest, penalties and administrative costs, does not exceed $100,000. Paragraph (b) puts everything above that with the Department of Justice: the agency evaluates the offer and, if it wants to accept, refers the debt to the Civil Division on a Claims Collection Litigation Report.[5] Justice approval is not needed to reject an offer. The median 7(a) hotel loan approved in fiscal 2025 was $2,681,500,[13] so most hotel deficiencies sit well above that line.\n\nTiming matters as much as size. SBA's Chapter 21 says compromise is appropriate after the business has closed and all the collateral has been liquidated. Compromising with a going concern is appropriate only when the viability of the business is at stake and the compromise is part of a restructuring plan signed by all the borrower's creditors.[2] A hotel merely short of cash this quarter is a workout, not a compromise.\n\nThe package is specified: a signed offer referring to the false statement penalties in 18 U.S.C. 1001, such as SBA Form 1150,[14] a financial statement signed under penalty of perjury such as SBA Form 770, and two years of personal returns with an executed IRS Form 4506-C or 8821.[2] The bases SBA weighs are at 31 CFR 902.2: inability to pay in a reasonable time, inability to collect by enforced proceedings, cost of collection, or doubt about proving the case in court.[15]\n\nTwo warnings sit in SBA's own text. Obligors have no right to compromise, and SBA says it will refer them to Treasury rather than take a nominal amount.[2] Acceptance is recorded as a loss to the federal government, which SBA tells lenders may affect the obligor's ability to get future federal financing, with tax consequences on top.[2]"
    },
    {
      h2: "What does the government do if nothing is settled?",
      lead: "The file is wrapped up, the status changes, and the balance goes to Treasury, where offset runs with no deadline.[6]",
      body: "The lender submits a wrap-up report within 30 calendar days of completing prudent liquidation, and no later than 24 months after SBA's guaranty purchase unless SBA extends that in writing.[2] SBA then reclassifies the loan as SBA Uncollectible and refers the balance and the remaining obligors to Treasury.[2] Before the referral SBA sends an automated due diligence notice giving 60 calendar days to pay in full or negotiate a plan.[2] That notice is the last point at which the file is still SBA's.\n\nThe deadlines on the government's side are statutory. 31 U.S.C. 3711(g)(1) requires an agency to transfer a non-tax debt delinquent 180 days to Treasury,[16] and 31 CFR 285.12(c)(2) requires transfer to cross-servicing by 120 days delinquent where the agency relies on that program for centralized offset.[17] Treasury's collection fees may be added to the debt as an administrative cost.[17] After referral, SBA's manual says no one other than Treasury may act on the loan, which excludes SBA and the lender both.[2]\n\nWhat Treasury can reach is broad and does not expire. 31 U.S.C. 3716(e)(1) says no limitation on the period within which an offset may be taken is effective.[6] Tax refunds, contractor payments, federal salaries and federal retirement all run through the Treasury Offset Program.[2] Social Security and similar benefits are reduced by the lesser of 15 percent of the monthly payment or the amount above $750, so a $650 benefit is untouched and an $850 benefit gives up $100.[7] Separately, 31 U.S.C. 3717(e)(2) allows a penalty of up to 6 percent a year on a debt more than 90 days past due, while 3717(g)(1) switches the section off where a loan agreement explicitly fixes the interest or charges.[18] Ask which applies to your note in writing.\n\nTwo lasting marks follow. SBA reports the combined balance to credit agencies and to federal delinquent debtor databases including CAIVRS, which lenders check before approving a federally assisted loan from SBA, USDA, HUD, VA or the Department of Education.[2] And SBA files IRS Form 1099-C for principal of $600 or more once the loan is charged off, in the borrower's name only and not the guarantors', in the calendar year after the balance became uncollectible.[2] What that cancelled debt costs in tax is at [How is a short sale, deed in lieu or foreclosure taxed?](/sell-a-hotel/selling-a-distressed-hotel)."
    },
    {
      h2: "Is selling the hotel better than handing it back?",
      lead: "Usually, and the reason is arithmetic: a sale you run sets the price, and a foreclosure sale sets it against a bid chosen to preserve a deficiency.",
      body: "The worked example below runs one hypothetical hotel both ways. The sale route leaves a shortfall the owner can plausibly settle. The foreclosure route adds 14 months of interest, the liquidation costs and a credit bid set below the balance, and leaves a deficiency about four times larger, in a band where the Department of Justice, not SBA, decides whether any settlement is acceptable.[5]\n\nThe caveat is that a sale needs a buyer and time, and a hotel that cannot cover its debt service may have neither. What keeps the option open is a written value on the hotel before the second missed payment, not after the site visit. [How do I sell a hotel that is losing money or in default?](/sell-a-hotel/selling-a-distressed-hotel) covers the sale mechanics, and [What happens to my hotel if I file Chapter 11?](/hotel-financing/chapter-11-bankruptcy) covers the route that stops a sale rather than pricing into it."
    }
  ],
  table: {
    caption: "Published deadlines after an SBA 7(a) hotel loan stops paying",
    columns: ["Step", "What starts it", "Published deadline", "Source"],
    rows: [
      ["Lender site visit", "An uncured payment default", "Within 60 calendar days", "SOP 50 57 4, Ch. 16[2]"],
      ["Site visit after a non-payment default", "An adverse event that puts the loan in liquidation", "Within 15 calendar days", "SOP 50 57 4, Ch. 16[2]"],
      ["Lender may demand guaranty purchase", "Default on an installment, uncured, business personal property liquidated", "More than 60 calendar days past due", "13 CFR 120.520(a)(1)[1]"],
      ["Interest SBA pays the lender at purchase", "SBA honors the guaranty", "Maximum 120 days of accrued interest", "13 CFR 120.522(b)(1)[9]"],
      ["Rate the borrower owes after purchase", "SBA honors the guaranty", "The rate in effect at the earliest uncured payment default", "13 CFR 120.521[8]"],
      ["Lender wrap-up report", "Prudent liquidation completed", "Within 30 calendar days, and no later than 24 months after guaranty purchase", "SOP 50 57 4, Ch. 27[2]"],
      ["SBA notice before Treasury referral", "Status change to SBA Uncollectible", "60 calendar days to pay or arrange a plan", "SOP 50 57 4, Ch. 27[2]"],
      ["Transfer of the debt to Treasury", "Delinquency", "180 days delinquent, or 120 days for cross-servicing where the agency relies on it for offset", "31 U.S.C. 3711(g)(1)[16]; 31 CFR 285.12(c)(2)[17]"],
      ["Administrative offset", "Referral to Treasury", "No limitation period is effective", "31 U.S.C. 3716(e)(1)[6]"],
      ["IRS Form 1099-C from SBA", "Charge off, principal of $600 or more", "The calendar year after the balance became uncollectible", "SOP 50 57 4, Ch. 27[2]"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' October 2026 rate sheet puts the SBA 7(a) maximum allowable rate on a variable-rate loan over $350,000 at 10.00%, which is the 7.00% Prime in effect since September 17, 2026 plus SBA's 3.00% spread cap, and that is the kind of rate that keeps running against a defaulted balance under 13 CFR 120.521.[19] Our own extract of SBA's loan-level file, at /data/sba-hotel-lending, puts the median 7(a) hotel loan approved in fiscal 2025 at $2,681,500 and shows 125 of the 3,945 7(a) hotel loans approved in fiscal years 2010 through 2015, 3.2 percent, carrying SBA's charged-off status as of June 30, 2026.[13]"
  },
  workedExample: {
    label: "Hypothetical: 74-key limited-service hotel, $4.2M SBA 7(a) loan",
    body: "Hypothetical, for arithmetic only. A 74-key limited-service hotel in a secondary market, bought with a $4,200,000 SBA 7(a) loan on a variable rate sitting at SBA's maximum allowable 10.00% for a loan over $350,000, which is what the October 2026 rate sheet prints.[19] The balance at the earliest uncured payment default is $3,850,000, and the foreclosure sale happens 14 months later.\n\nInterest, simple, for illustration: $3,850,000 x 10.00% x 14/12 = $449,167. Balance at the sale: $3,850,000 + $449,167 = $4,299,167.\n\nRecovery. The lender's appraisal puts recoverable value at $3,100,000 and it credit bids $2,900,000, below the balance, as SOP 50 57 4 tells it to where bidding the balance would eliminate a collectible deficiency.[2] The FF&E auction nets $95,000. Liquidation costs, legal fees and property taxes come to $185,000. Net recovery: $2,900,000 + $95,000 - $185,000 = $2,810,000.\n\nDeficiency: $4,299,167 - $2,810,000 = $1,489,167. That is what the guarantors owe, jointly and severally.[12] It is above $100,000, so any settlement SBA wants to accept goes to the Department of Justice.[5]\n\nThe sale alternative, same hotel, same balance. A sale at $3,600,000 with 3.5% of total sale costs nets $3,600,000 - $126,000 = $3,474,000 against the $3,850,000 balance, a shortfall of $376,000. The difference between the two routes is $1,489,167 - $376,000 = $1,113,167.\n\nWhat offset does to the remainder. A guarantor drawing $3,200 a month in Social Security is offset by the lesser of 15% of $3,200, which is $480, and the amount above $750, which is $2,450, so $480 a month, or $5,760 a year.[7] Against $1,489,167 that is 258.5 years, and 31 U.S.C. 3716(e)(1) puts no deadline on it.[6] Offset is not a repayment plan. It is a permanent deduction."
  },
  faq: [
    {
      q: "Does the SBA guarantee mean I do not owe the money?",
      a: "No. The guaranty pays your lender up to 75 percent on a loan over $150,000. SBA honoring it leaves your balance unchanged, and SBA's manual says a later charge off has no effect on your liability."
    },
    {
      q: "How far behind do I have to be before the lender can call the loan?",
      a: "A lender may demand SBA purchase its guaranty once a payment default has run more than 60 calendar days without a cure and the business personal property has been liquidated. A non-payment default alone, such as late financials, is not enough."
    },
    {
      q: "Will the bank bid the full loan balance at the foreclosure sale?",
      a: "SBA's manual tells lenders to base the credit bid on the collateral's recoverable value, not to exceed the loan balance, and not to bid the entire balance where that would eliminate an otherwise collectible deficiency."
    },
    {
      q: "Can SBA settle my deficiency balance?",
      a: "Only up to $100,000 of principal. Above that, 31 CFR 902.1(b) puts the authority to accept a compromise with the Department of Justice, reached through a Claims Collection Litigation Report. SBA can still reject an offer on its own."
    },
    {
      q: "Can the government take my Social Security for an SBA hotel loan?",
      a: "Yes, within limits. A monthly benefit is reduced by the lesser of 15 percent or the amount above $750, so a $650 benefit is untouched. There is no deadline on federal administrative offset."
    },
    {
      q: "Does a defaulted SBA loan stop me borrowing again?",
      a: "SBA reports the balance to credit agencies and to CAIVRS, the federal delinquent debtor database lenders check before approving a loan backed by SBA, USDA, HUD, VA or the Department of Education."
    },
    {
      q: "Who gets the 1099-C, me or my guarantors?",
      a: "SBA files IRS Form 1099-C in the name of the borrower only, not the guarantors, for principal of $600 or more, in the calendar year after the year the balance became uncollectible."
    }
  ],
  sources: [
    {
      n: 1,
      label: "13 CFR 120.520, Purchase of 7(a) loan guarantees",
      url: "https://www.law.cornell.edu/cfr/text/13/120.520",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 2,
      label: "SOP 50 57 4, 7(a) Loan Servicing and Liquidation, effective November 1, 2025: Ch. 15 (classifying loans in liquidation), Ch. 16 (site visits), Ch. 18 (credit bids and abandonment), Ch. 19 (personal property liquidation), Ch. 21 (offer in compromise) and Ch. 27 (wrap-up, status change, Treasury referral, credit reporting and Form 1099-C)",
      url: "https://www.sba.gov/document/sop-50-57-7a-loan-servicing-liquidation",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-11-13"
    },
    {
      n: 3,
      label: "13 CFR 120.210, What percentage of a loan may SBA guarantee?",
      url: "https://www.law.cornell.edu/cfr/text/13/120.210",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 4,
      label: "13 CFR 120.160, Loan conditions (personal guarantees)",
      url: "https://www.law.cornell.edu/cfr/text/13/120.160",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 5,
      label: "31 CFR 902.1, Scope and application (Federal Claims Collection Standards)",
      url: "https://www.law.cornell.edu/cfr/text/31/902.1",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 6,
      label: "31 U.S.C. 3716, Administrative offset",
      url: "https://www.law.cornell.edu/uscode/text/31/3716",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 7,
      label: "31 CFR 285.4, Offset of Federal benefit payments to collect past-due, legally enforceable nontax debt",
      url: "https://www.law.cornell.edu/cfr/text/31/285.4",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 8,
      label: "13 CFR 120.521, What interest rate applies after SBA purchases its guaranteed portion?",
      url: "https://www.law.cornell.edu/cfr/text/13/120.521",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 9,
      label: "13 CFR 120.522, Payment of accrued interest to the Lender or Registered Holder when SBA purchases the guaranteed portion",
      url: "https://www.law.cornell.edu/cfr/text/13/120.522",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 10,
      label: "13 CFR 120.524, When is SBA released from liability on its guarantee?",
      url: "https://www.law.cornell.edu/cfr/text/13/120.524",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 11,
      label: "13 CFR 120.535, Standards for Lender and CDC loan servicing, loan liquidation and debt collection litigation",
      url: "https://www.law.cornell.edu/cfr/text/13/120.535",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 12,
      label: "31 CFR 902.4, Joint and several liability",
      url: "https://www.law.cornell.edu/cfr/text/31/902.4",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 13,
      label: "SBA loans to hotels: who lends, how much, and where (Matthews Hotel Markets extract of SBA's 7(a) and 504 FOIA files, SBA data as of June 30, 2026)",
      url: "/data/sba-hotel-lending",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-11-13"
    },
    {
      n: 14,
      label: "SBA Form 1150, Offer in Compromise",
      url: "https://www.sba.gov/document/sba-form-1150-offer-compromise",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-11-13"
    },
    {
      n: 15,
      label: "31 CFR 902.2, Bases for compromise",
      url: "https://www.law.cornell.edu/cfr/text/31/902.2",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 16,
      label: "31 U.S.C. 3711, Collection and compromise",
      url: "https://www.law.cornell.edu/uscode/text/31/3711",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 17,
      label: "31 CFR 285.12, Transfer of debts to Fiscal Service for collection",
      url: "https://www.law.cornell.edu/cfr/text/31/285.12",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 18,
      label: "31 U.S.C. 3717, Interest and penalty on claims",
      url: "https://www.law.cornell.edu/uscode/text/31/3717",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-11-13"
    },
    {
      n: 19,
      label: "Matthews Hotel Markets October 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-11-13"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/loan-workouts",
      "/hotel-financing/non-recourse-loans",
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/chapter-11-bankruptcy",
      "/sell-a-hotel/selling-a-distressed-hotel"
    ],
    glossary: ["/glossary/sba-7a", "/glossary/sba-504", "/glossary/non-recourse-carve-outs", "/glossary/prime-rate"],
    data: ["/rates", "/data/sba-hotel-lending"]
  },
  cta: { label: "Talk to the capital markets desk", href: "/contact" },
  brandSentence: "Matthews Hotel Markets sells hotels from $2 million, including distressed, receivership and note sales, and will give you a free written opinion of value on the hotel while a sale is still your decision rather than the lender's."
};
