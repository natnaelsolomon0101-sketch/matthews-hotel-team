/**
 * Do I need a tax clearance certificate to sell my hotel?
 * Answer page: /sell-a-hotel/tax-clearance-and-withholding
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-10-05): Cal. Rev. & Tax. Code 6811, 6812, 6006.5 and 18662
 * on California Legislative Information; 18 CCR 1702 (Successor's Liability)
 * and 18 CCR 1595 (Occasional Sales, Sale of a Business) from the CDTFA law
 * guide, which is where the hotel example comes from; CDTFA Publication 74,
 * revision April 2026; Fla. Stat. 213.758 and 212.03 from the Florida
 * Senate's 2026 statutes; New York Tax Bulletin ST-70, updated June 17, 2025;
 * the Texas Comptroller's "Buying an Existing Business", which states the
 * Tax Code 111.020 rule and the Certificate of No Tax Due timing, plus the
 * Comptroller's hotel occupancy tax page for the 6 percent state rate;
 * 26 U.S.C. 1445 on Cornell LII with three IRS FIRPTA pages for the
 * mechanics; and RCW 82.45.010 and 82.45.033 with the Washington Department
 * of Revenue's real estate excise tax page for the controlling-interest rule.
 *
 * The worked example was recomputed line by line with
 * scripts/check-tax-clearance-math.mjs before saving. Do not hand-edit a
 * number without re-reading its source and bumping `lastUpdated`.
 *
 * Deliberately absent: what a hotel buyer "typically" holds back, and any
 * national rule on sales tax over hotel furniture. No public source
 * publishes either. The holdback is a negotiated number capped by statute at
 * the purchase price, and the furniture answer is state by state. The page
 * says so rather than guessing.
 *
 * Two dates to re-verify. Washington's REET thresholds move to $551,000,
 * $1,551,000 and $3,051,000 on January 1, 2027, so the bracket figures here
 * are current only through December 31, 2026. The Texas Certificate of No Tax
 * Due form changed twice by statute (S.B. 873 in 2021 and S.B. 3 in 2023),
 * so re-read the Comptroller page before naming Form 86-114 again.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "tax-clearance-and-withholding",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Tax Clearance When You Sell a Hotel",
  description:
    "Why a hotel buyer holds back part of your price for unpaid sales and occupancy tax, what a state clearance takes, and the 15 percent FIRPTA rule.",
  h1: "Do I need a tax clearance certificate to sell my hotel?",
  lastUpdated: "2026-10-05",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Do I need a tax clearance certificate to sell my hotel?",
    "Why is the buyer holding back part of my hotel sale price?",
    "How long does a state tax clearance take on a business sale?",
    "Am I liable for sales tax after I sell my hotel?",
    "Does the buyer pay sales tax on my hotel's furniture and equipment?",
    "How much is withheld from a hotel sale if the seller is a foreign person?",
    "Does selling the LLC instead of the hotel avoid state tax clearance?",
    "What taxes come out of my hotel sale proceeds at closing?",
  ],
  answer:
    "Usually yes. In California, Texas, Florida and New York the buyer holds back part of your price until the state clears you, because a hotel collects state sales or occupancy tax on rooms and unremitted tax follows the business to the buyer.[1][2][3][4] New York answers a purchaser's notice in five business days, under a bulletin updated June 17, 2025.[4]",
  takeaways: [
    "This is not your income tax. It is the sales or occupancy tax your hotel collected from guests for the state, and the buyer can be made to pay it.[1][3]",
    "The statutory cap is the price, not the tax. Florida caps a transferee at the greater of fair market value or the purchase price, and Texas at the purchase price including assumed debt.[2][3]",
    "Two of these clocks start when your records are available for audit, not when someone asks, so a messy set of books is the delay.[3][7]",
    "A foreign seller faces 15 percent withholding on the amount realized on the real property, whatever the gain was.[11] Form 8288-B can reduce it, and the IRS generally takes 90 days.[13]",
    "Clearing the buyer does not clear you. Texas and New York both say the seller stays liable for what accrued before the sale.[2][4]",
  ],
  sections: [
    {
      h2: "Why does the buyer care about my sales tax?",
      lead: "Because your hotel collects tax from guests on the state's behalf, and the unremitted balance follows the business to the buyer.",
      body: "A hotel is unusual among commercial properties: its main revenue line carries a tax it collects and holds for someone else. Florida levies 6 percent of the total rental charged for living quarters in a hotel.[5] Texas sets its state hotel occupancy tax at 6 percent of the cost of a room.[6] That money was never the owner's, and an owner who spent a slow quarter's collections on payroll still has the balance sitting there at closing.\n\nSo the buyer's lawyer asks. California requires a successor who buys the business of a person liable under the Sales and Use Tax Law to withhold enough of the purchase price to cover the amount, until the former owner produces a receipt showing it was paid or a certificate stating that nothing is due.[1] Texas does the same under Tax Code section 111.020, and the Comptroller states the result: close escrow without a Certificate of No Tax Due and the purchaser is liable for the unpaid taxes up to the purchase price, including any assumption of indebtedness.[2] Florida makes a transferee of more than 50 percent of a business jointly and severally liable with the seller.[3] New York calls it a bulk sale and runs it through its own notice procedure.[4]\n\nThe tax on your gain is a different question, answered at [what taxes do I pay when I sell a hotel?](/sell-a-hotel/taxes-when-selling-a-hotel).",
    },
    {
      h2: "What is a tax clearance certificate, and how long does it take?",
      lead: "It is the state's written statement that your account is clean, and the wait runs from five business days in New York to 90 days wherever an audit opens.",
      body: "One document, four names. California issues a tax clearance certificate through the CDTFA.[7][8] Texas issues a Certificate of No Tax Due.[2] Florida calls it a receipt or a certificate of compliance.[3] New York issues Form AU-197.1, a purchaser's release.[4]\n\nNew York is the fastest. The purchaser files Form AU-196.10 at least 10 days before paying for or taking possession of any business assets, whichever comes first. Within five business days the department sends either the release or Form AU-196.2, a notice of claim, and after a claim it tells both sides the amount due within 90 days of the original filing.[4] Texas requires a joint request from seller and purchaser on Form 86-114, signed by both. With no audit it usually issues in 10 business days; with one it can take 90.[2]\n\nCalifornia runs a release clock instead. The purchaser is freed from the duty to withhold if the CDTFA neither issues the certificate nor mails notice of the amount due within 60 days after the latest of three dates: the written request, the sale, and the date the former owner's records are made available for audit.[7][8] Florida's audit route has to finish within 90 days after the records are made available.[3] The pattern in those two is worth reading twice. The clock starts when your records are ready, not when a buyer asks, which makes a messy set of books the delay. Those records are the first item on the list at [what documents do I need to sell my hotel?](/sell-a-hotel/documents-needed).",
    },
    {
      h2: "How much of my price can the buyer hold back?",
      lead: "More than the tax. Every statute here caps the buyer's exposure at the price, so a careful buyer holds a multiple of its estimate rather than the estimate.",
      body: "California makes a purchaser who fails to withhold personally liable for the amount, to the extent of the purchase price valued in money, enforceable for three years after the state is notified of the purchase.[7] The regulation adds that the liability reaches taxes, interest and penalties incurred by the predecessor or any former owner, including penalties for negligence or fraud, even if not yet determined against the seller.[8] Florida caps a transferee at the fair market value of what was transferred or the total purchase price, whichever is greater.[3] New York lets the purchaser pay the state out of escrow up to the purchase price or the fair market value of the assets, whichever is greater.[4] Texas sets the ceiling at the purchase price including assumed debt.[2]\n\nNotice what none of those sentences does. None caps the buyer at the tax. A buyer's counsel sizing an escrow works against the statutory ceiling rather than against your estimate of the arrears, and no public source publishes what hotel buyers actually hold back. It is negotiated, and the only reliable way to make it small is to arrive with a clean account.\n\nTwo mechanics matter before you sign. In Florida a transferee that withholds has to pay the state within 30 days after the transfer, and if it withheld less than the liability you remain liable for the difference.[3] In New York a purchaser that receives a notice of claim is told to place the full purchase price in escrow until the review ends.[4] That is the sentence that surprises sellers, and it is the reason to file the notice early.",
    },
    {
      h2: "Is the furniture and equipment in my hotel sale taxable?",
      lead: "Part of it can be. The answer is state by state, and in California it turns on which pieces of the hotel were used in an activity that needed a seller's permit.",
      body: "California's regulation on the sale of a business names hotels directly. Operators of service enterprises such as hospitals, hotels, theaters and schools may make sales incidental to their primary service business, and the regulation's own example is that a hotel may operate a restaurant and a bar. Then the operative line: if any of these businesses were sold, tax would apply only to the gross receipts from the tangible personal property held or used in the selling activity.[10] On that reading the restaurant and bar equipment sits inside the taxable measure and the guest room furniture used in the lodging service does not, unless the seller made enough other sales to require a permit for them. The regulation's general rule is three sales for substantial amounts in 12 months.[10]\n\nNew York draws the line by asset class instead. A purchaser in a bulk sale owes the sales tax due on tangible personal property it acquires, and the bulletin says plainly that the tax is not imposed on inventory acquired for resale, on real property, or on intangible assets such as goodwill.[4]\n\nNo public source publishes a national rule, because there is not one. What both states share is that the number comes from the allocation in your purchase agreement, drafted long before anyone computes a tax on it. How that allocation is made is at [how do I make an offer on a hotel?](/buy-a-hotel/how-to-make-an-offer).",
    },
    {
      h2: "What else comes out of my proceeds at closing?",
      lead: "Withholding on the sale itself: 15 percent of the amount realized if you are a foreign person, and 3 1/3 percent of the price on a California property.",
      body: "Section 1445 requires the transferee to deduct and withhold a tax equal to 15 percent of the amount realized on a disposition of a United States real property interest by a foreign person.[11] The IRS states the same rate and notes it was 10 percent before February 17, 2016.[12] Read it twice: the computation runs on the amount realized, not on the gain, so on a long-held hotel the withholding can exceed the tax by a wide margin.\n\nThere are two ways out. A domestic seller gives the buyer an affidavit stating under penalty of perjury that the transferor is not a foreign person, with a United States taxpayer identification number.[11] A foreign seller applies for a withholding certificate on Form 8288-B, which the IRS issues where the amount otherwise withheld exceeds the transferor's maximum tax liability, generally acting within 90 days of a complete application; a seller who applies must tell the buyer in writing on the day of or the day before the transfer.[13] Without a certificate the transferee files Form 8288 with the tax by the 20th day after the disposition.[14]\n\nCalifornia withholds from sellers it can reach, not only foreign ones. The transferee of a California real property interest withholds 3 1/3 percent of the sales price unless the seller elects in writing to certify a gain-based amount. Nothing is withheld below a $100,000 sales price, and a seller can certify out for a principal residence or for a like-kind exchange to the extent gain is not recognized under section 1031.[15] That route is at [can I do a 1031 exchange without buying another hotel?](/sell-a-hotel/1031-without-buying-another-hotel). One mercy in the same statute: an escrow company may not charge more than $45 for handling it.[15]",
    },
    {
      h2: "Does selling the LLC instead of the hotel avoid this?",
      lead: "Sometimes for the sales tax, often not for the transfer tax, and in Washington the entity route is exactly what the statute was written to catch.",
      body: "New York's answer is the cleanest. Its bulletin's own example says a purchase of all the issued and outstanding stock of a company required to collect sales tax, where both companies continue to exist as separate legal entities, is not a bulk sale, because the business assets were never transferred.[4] Florida reaches further: a business is considered transferred when more than 50 percent of the business, its assets or its stock of goods changes hands, so an equity deal can still be a transfer.[3]\n\nWashington is the warning. There, a sale includes the transfer or acquisition within any 36-month period of a controlling interest in an entity with an interest in real property in the state, and acquisitions by persons acting in concert are aggregated.[16] A controlling interest is 50 percent or more of a corporation's voting power, or 50 percent or more of the capital, profits or beneficial interest in any other entity.[17] The Department of Revenue requires a controlling interest transfer return within five days of the completed transfer, with penalties and interest if the return and tax are not in within one month.[18] The state rate reaches 3.0 percent on the portion of the selling price above $3,025,000, and those brackets step up to $551,000, $1,551,000 and $3,051,000 for sales beginning January 1, 2027.[18]\n\nSo an entity sale changes which statute applies, not whether one does, and the test is run where the hotel sits.",
    },
    {
      h2: "What should I do before I list?",
      lead: "Close the gap on your own account first. File what is missing, and know your balance before a buyer's counsel finds it.",
      body: "The CDTFA tells a seller to close out its permits and accounts when it sells the business, file final returns, report sales of fixtures, equipment and retained inventory, and keep records for four years after closure. It also warns that a predecessor who does not notify the agency can be held liable for amounts a successor incurs.[9] Florida requires a final return and full payment within 15 days after the date of transfer.[3] New York gives a seller that stops operating 20 days after operations end.[4]\n\nThen the part sellers get wrong. Clearing the buyer does not clear you. Texas says only the purchaser is protected by a Certificate of No Tax Due, and the seller remains responsible for all tax, penalty and interest from before the date of sale.[2] New York says the seller stays liable whether or not the purchaser was relieved.[4]\n\nOne thing you cannot do alone: Texas requires a joint request, so the certificate cannot be ordered before there is a buyer.[2] That splits the work. The account cleanup belongs in the months before you list, with the rest of the preparation at [how do I sell a hotel?](/sell-a-hotel/how-to-sell-a-hotel). The certificate belongs inside the contract period, where it competes with everything else on the clock at [how long does it take to sell a hotel?](/sell-a-hotel/how-long-it-takes).",
    },
  ],
  table: {
    caption:
      "What a hotel buyer must do before closing, by jurisdiction (statute or agency guidance read October 5, 2026)",
    columns: [
      "Jurisdiction",
      "What the buyer must do",
      "What clears it, and how fast",
      "Buyer's exposure if nobody clears it",
    ],
    rows: [
      [
        "California",
        "Withhold enough of the purchase price to cover the seller's sales and use tax until the seller produces a receipt or a certificate that nothing is due[1]",
        "A CDTFA tax clearance certificate. The agency has 60 days after the latest of the request, the sale, or the date the seller's records are available for audit[7][8]",
        "Personal liability to the extent of the purchase price, enforceable for three years after the state is notified of the purchase[7]",
      ],
      [
        "Texas",
        "Withhold enough of the purchase price unless the seller produces a receipt or the buyer obtains a Certificate of No Tax Due[2]",
        "A joint request from both sides on Form 86-114. Usually 10 business days, up to 90 days if the state audits the seller's records[2]",
        "Liability for the unpaid tax up to the purchase price, including any assumption of indebtedness[2]",
      ],
      [
        "Florida",
        "Withholding is optional, but what the buyer withholds must be paid to the state within 30 days after the transfer[3]",
        "A receipt or certificate of compliance with no insiders in common, or a state audit completed within 90 days after the records are available[3]",
        "Joint and several liability with the seller, capped at the greater of fair market value or the total purchase price[3]",
      ],
      [
        "New York",
        "File Form AU-196.10 at least 10 days before paying for or taking possession of the assets[4]",
        "The state answers in five business days with a release or a notice of claim, then states the amount due within 90 days[4]",
        "Liability up to the purchase price or the fair market value of the assets, whichever is greater[4]",
      ],
      [
        "Federal, foreign seller",
        "Withhold 15 percent of the amount realized on the United States real property interest[11]",
        "A non-foreign affidavit with a taxpayer identification number, or a withholding certificate on Form 8288-B, generally acted on within 90 days[11][13]",
        "The buyer is liable for the tax it failed to withhold, and files Form 8288 by the 20th day after the disposition[12][14]",
      ],
    ],
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet shows Prime at 7.00 percent and the 10-year Treasury at 5.29 percent as of September 30, 2026.[19] Those are the rates a delay is priced at. Proceeds parked in escrow for a 90-day clearance earn the seller nothing while every other cost keeps running.",
  },
  workedExample: {
    label:
      "Hypothetical: a 118-key Florida hotel at $15,400,000, and what the state can reach",
    body: "Hypothetical, not a transaction. Price $15,400,000, allocated $14,700,000 to the real property and $700,000 to furniture, fixtures and equipment, of which $120,000 is restaurant and bar equipment. The seller fell five months behind on the state transient rentals tax, on $1,540,000 of room revenue in those months.\n\nThe arrears. Florida's rate is 6 percent of the total rental charged, so $1,540,000 times 0.06 is $92,400 of state tax, before penalty and interest.[5]\n\nThe exposure. Florida caps the transferee's maximum liability at the greater of fair market value or the total purchase price.[3] Assume those are the same here, $15,400,000. That ceiling is about 167 times the $92,400 actually owed, which is why a buyer's counsel sizes escrow off the statute rather than off the seller's estimate. A holdback negotiated at 125 percent of the estimate is $115,500, and the buyer has to pay what it withholds to the state within 30 days of the transfer.[3]\n\nThe withholding, if the seller is a foreign person. Section 1445 takes 15 percent of the amount realized on the real property interest: $14,700,000 times 0.15 is $2,205,000.[11] On an adjusted basis of $11,900,000 the gain is $2,800,000, so the withholding is 78.75 percent of the whole gain. A Form 8288-B certificate can cut it to the maximum tax liability, and the IRS generally acts within 90 days.[13] Ninety days of waiting on $2,205,000, costed at the 7.00 percent Prime rate on the October 2026 rate sheet, is $2,205,000 times 0.07 times 90 divided by 365, or $38,059.[19]\n\nThe same hotel in California. Withholding would be 3 1/3 percent of $14,700,000, or $490,000, unless the seller certifies a gain-based amount.[15] Sales tax on the personal property would reach the $120,000 of restaurant and bar equipment, not the $580,000 of guest room furniture used in the lodging service.[10]\n\nEvery figure above was recomputed by scripts/check-tax-clearance-math.mjs.",
  },
  faq: [
    {
      q: "Do I need a tax clearance certificate to sell my hotel?",
      a: "In California, Texas, Florida and New York the buyer needs one, or a state release, to avoid inheriting your unpaid sales and occupancy tax.[1][2][3][4] You are the one who produces it, and the buyer holds part of the price until you do.",
    },
    {
      q: "How long does a tax clearance take?",
      a: "New York answers a purchaser's notice in five business days.[4] Texas usually issues in 10 business days, or up to 90 if it audits you.[2] California has 60 days from the latest of the request, the sale, or your records being available.[7]",
    },
    {
      q: "Can the buyer hold back more than the tax I owe?",
      a: "Yes. Florida caps a transferee at the greater of fair market value or the purchase price, and Texas at the purchase price including assumed debt.[2][3] The cap is the price, so the holdback is negotiated rather than formulaic.",
    },
    {
      q: "Does the buyer owe sales tax on my hotel's furniture?",
      a: "It depends on the state and on the allocation. California taxes only property held or used in the selling activity, which on a hotel means the restaurant and bar side.[10] New York taxes tangible personal property but not real property or goodwill.[4]",
    },
    {
      q: "Is 15 percent of my hotel's price really withheld if I am a foreign seller?",
      a: "Fifteen percent of the amount realized on the real property interest, regardless of gain.[11] A withholding certificate on Form 8288-B can reduce it to your maximum tax liability, and the IRS generally acts within 90 days.[13]",
    },
    {
      q: "Does selling the LLC instead of the hotel avoid the clearance?",
      a: "Sometimes. A New York stock purchase where both companies survive is not a bulk sale.[4] Washington treats the transfer of a 50 percent interest within 36 months as a taxable sale of the real property.[16][17]",
    },
    {
      q: "Am I off the hook once the buyer has its certificate?",
      a: "No. Texas says only the purchaser is protected, and the seller remains responsible for all tax, penalty and interest from before the sale.[2] New York says the seller stays liable whether or not the purchaser was relieved.[4]",
    },
    {
      q: "Does a foreclosure or receivership sale need a clearance?",
      a: "California's regulation says the duty to withhold does not arise in assignments for the benefit of creditors, mortgage foreclosures or sales by a trustee in bankruptcy.[8] Other states differ, so check the statute where the hotel sits.",
    },
  ],
  sources: [
    {
      n: 1,
      label: "Cal. Rev. & Tax. Code 6811, successor's duty to withhold the purchase price",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=6811",
      publisher: "California Legislative Information",
      accessed: "2026-10-05",
    },
    {
      n: 2,
      label: "Buying an Existing Business, including Tax Code section 111.020 and the Certificate of No Tax Due",
      url: "https://comptroller.texas.gov/taxes/publications/98-117.php",
      publisher: "Texas Comptroller of Public Accounts",
      accessed: "2026-10-05",
    },
    {
      n: 3,
      label: "Fla. Stat. 213.758, liability for tax when a business is transferred",
      url: "https://www.flsenate.gov/Laws/Statutes/2026/213.758",
      publisher: "The Florida Senate, 2026 Florida Statutes",
      accessed: "2026-10-05",
    },
    {
      n: 4,
      label: "Tax Bulletin ST-70, Bulk Sales (updated June 17, 2025)",
      url: "https://www.tax.ny.gov/pubs_and_bulls/tg_bulletins/st/bulk_sales.htm",
      publisher: "New York State Department of Taxation and Finance",
      accessed: "2026-10-05",
    },
    {
      n: 5,
      label: "Fla. Stat. 212.03, transient rentals tax at 6 percent of the total rental charged",
      url: "https://www.flsenate.gov/Laws/Statutes/2026/212.03",
      publisher: "The Florida Senate, 2026 Florida Statutes",
      accessed: "2026-10-05",
    },
    {
      n: 6,
      label: "Hotel Occupancy Tax, state rate of 6 percent of the cost of a room",
      url: "https://comptroller.texas.gov/taxes/hotel/",
      publisher: "Texas Comptroller of Public Accounts",
      accessed: "2026-10-05",
    },
    {
      n: 7,
      label: "Cal. Rev. & Tax. Code 6812, purchaser's liability and the 60-day certificate clock",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=6812",
      publisher: "California Legislative Information",
      accessed: "2026-10-05",
    },
    {
      n: 8,
      label: "Regulation 1702, Successor's Liability (18 CCR 1702)",
      url: "https://www.cdtfa.ca.gov/lawguides/vol1/sutr/1702.html",
      publisher: "California Department of Tax and Fee Administration",
      accessed: "2026-10-05",
    },
    {
      n: 9,
      label: "Publication 74, Closing Out Your Account (revision April 2026)",
      url: "https://cdtfa.ca.gov/formspubs/pub74/",
      publisher: "California Department of Tax and Fee Administration",
      accessed: "2026-10-05",
    },
    {
      n: 10,
      label: "Regulation 1595, Occasional Sales, Sale of a Business, Business Reorganization (18 CCR 1595)",
      url: "https://www.cdtfa.ca.gov/lawguides/vol1/sutr/1595.html",
      publisher: "California Department of Tax and Fee Administration",
      accessed: "2026-10-05",
    },
    {
      n: 11,
      label: "26 U.S.C. 1445, withholding of tax on dispositions of United States real property interests",
      url: "https://www.law.cornell.edu/uscode/text/26/1445",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-05",
    },
    {
      n: 12,
      label: "FIRPTA withholding (page last reviewed July 21, 2026)",
      url: "https://www.irs.gov/individuals/international-taxpayers/firpta-withholding",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-05",
    },
    {
      n: 13,
      label: "Withholding certificates for United States real property interests",
      url: "https://www.irs.gov/individuals/international-taxpayers/withholding-certificates",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-05",
    },
    {
      n: 14,
      label: "Reporting and paying tax on U.S. real property interests (page last reviewed July 23, 2026)",
      url: "https://www.irs.gov/individuals/international-taxpayers/reporting-and-paying-tax-on-us-real-property-interests",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-05",
    },
    {
      n: 15,
      label: "Cal. Rev. & Tax. Code 18662, real estate withholding at 3 1/3 percent of the sales price",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=18662",
      publisher: "California Legislative Information",
      accessed: "2026-10-05",
    },
    {
      n: 16,
      label: "RCW 82.45.010, a controlling-interest transfer within 36 months is a sale",
      url: "https://app.leg.wa.gov/RCW/default.aspx?cite=82.45.010",
      publisher: "Washington State Legislature",
      accessed: "2026-10-05",
    },
    {
      n: 17,
      label: "RCW 82.45.033, controlling interest defined as 50 percent or more",
      url: "https://app.leg.wa.gov/RCW/default.aspx?cite=82.45.033",
      publisher: "Washington State Legislature",
      accessed: "2026-10-05",
    },
    {
      n: 18,
      label: "Real estate excise tax, rates, thresholds and the controlling interest transfer return",
      url: "https://dor.wa.gov/taxes-rates/other-taxes/real-estate-excise-tax",
      publisher: "Washington State Department of Revenue",
      accessed: "2026-10-05",
    },
    {
      n: 19,
      label: "Hotel debt rate sheet, October 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-10-05",
    },
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/taxes-when-selling-a-hotel",
      "/sell-a-hotel/documents-needed",
      "/sell-a-hotel/how-to-sell-a-hotel",
      "/sell-a-hotel/how-long-it-takes",
      "/sell-a-hotel/1031-without-buying-another-hotel",
    ],
    glossary: [
      "/glossary/going-concern-value",
      "/glossary/ffe-reserve",
      "/glossary/prime-rate",
    ],
    data: ["/rates"],
  },
  cta: {
    label: "Ask about selling your hotel",
    href: "/contact",
  },
  brandSentence:
    "Matthews Hotel Markets sells hotels from $2 million, and the state tax account is worth checking early, because a clearance request nobody started is a closing date nobody keeps.",
};

export default page;
