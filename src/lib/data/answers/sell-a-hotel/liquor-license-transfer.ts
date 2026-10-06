/**
 * What happens to the liquor license when I sell my hotel?
 * Answer page: /sell-a-hotel/liquor-license-transfer
 *
 * Written 2026-10-06 from primary sources: the California Department of
 * Alcoholic Beverage Control's own 2026 edition of the ABC Act, the Florida
 * Statutes on flsenate.gov, New York's ABC Law on nysenate.gov, the Texas
 * Alcoholic Beverage Commission's change-reporting page, and 27 CFR part 31
 * on eCFR. Arithmetic in the worked example is recomputed by
 * scripts/check-liquor-license-math.mjs.
 *
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "liquor-license-transfer",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Hotel Liquor License Transfer When You Sell",
  description:
    "The liquor license does not pass with the deed. What the buyer has to apply for, who gets the money for the license, and the entity-sale trap.",
  h1: "What happens to the liquor license when I sell my hotel?",
  lastUpdated: "2026-10-06",
  authorSlug: "miles-cortez",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "What happens to the liquor license when I sell my hotel?",
    "Does a liquor license transfer with the sale of a hotel?",
    "How long does a hotel liquor license transfer take?",
    "Can the hotel bar stay open while the buyer's license application is pending?",
    "Can I sell the LLC and keep the liquor license in place?",
    "How much does it cost to transfer a hotel liquor license?",
    "Who gets paid out of the liquor license escrow when I sell?"
  ],
  answer:
    "No. The liquor license does not pass with the deed. It is a state privilege tied to a named licensee and a specific address, and it moves only when the regulator approves the buyer. Under California law as it stands in October 2026, a $100 temporary permit lets the buyer keep pouring for four calendar months while the transfer application is pending.[1]",
  takeaways: [
    "The buyer is a new applicant, not an assignee. Florida approves a transfer only after the purchaser clears the same sections that govern a brand-new license.[4][6]",
    "California makes the seller's creditors first in line for the money allocated to the license, through a recorded notice and a statutory escrow with eight payment tiers.[1]",
    "Selling the entity rarely preserves the license. A 50 percent ownership change is itself a licensing event in California, and voids a Florida quota license inside three years of issuance.[1][4]",
    "A hotel license may not permit what the buyer plans. California's Type 70 serves overnight guests and their invitees only.[3]",
    "No public source publishes how long approval takes. The only published outer bound is four months plus one four-month extension.[1]"
  ],
  sections: [
    {
      h2: "Does the liquor license transfer with the hotel?",
      lead:
        "No. It is a separate privilege, and in California, Florida and New York it moves only when the state approves the buyer.[1][4][7]",
      body:
        "California's act says each license \"is separate and distinct and is transferable upon approval by the department from the licensee to another person and from one premises to another premises\" (Bus. & Prof. Code 24070).[1] New York is blunter. A license \"shall not be transferable to any other person or to any other premises\" except in the discretion of the State Liquor Authority, and \"shall be available only to the person therein specified, and only for the premises licensed\" (ABC Law 111).[7]\n\nFlorida permits a transfer when the licensee \"has made a bona fide sale of the business which he or she is so licensed to conduct\", but only if the purchaser's application is approved under the same sections that govern a new applicant (Fla. Stat. 561.32(1)(a), applying 561.17, 561.18, 561.19 and 561.65).[4] The buyer is a new applicant standing at the seller's address, not an assignee of the seller's paper. Qualification, fingerprinting where the division requires it, and disclosure of every person holding a direct or indirect interest in the business all run the way they would on a first application, and the division must deny the application if any of those people is not qualified (561.17(1)).[6]\n\nSo the license application belongs on the franchise-approval clock, not the title clock. It starts at contract signing."
    },
    {
      h2: "Can the hotel keep serving between closing and approval?",
      lead:
        "In California, yes, on a temporary permit: $100, up to four calendar months, extendable once for another four months and another $100 (Bus. & Prof. Code 24045.5).[1]",
      body:
        "The permit has conditions. The premises must have been operated under a license within 30 days of the application, the existing license must be surrendered under the department's rules, and the buyer must already have filed the transfer application for those premises.[1] The permit authorizes the same sales the pending license would.\n\nOne operating detail catches first-time buyers. A temporary permit holder has to buy beer, wine and distilled spirits on cash terms, paying before or at delivery in currency or by check, unless it already holds one or more retail licenses and is not delinquent on them.[1] A buyer with no other California license therefore loses its distributor credit lines for the length of the permit. The department also will not approve the underlying transfer until the permit holder files a statement under penalty of perjury that all current obligations are discharged and that every outstanding check written for alcoholic beverages will be honored on presentation.[1]\n\nNo public source publishes how long a person-to-person transfer takes to approve. Four months plus one four-month extension is the only published outer bound, and a deal needing more than eight months of it has a problem the permit will not fix."
    },
    {
      h2: "What does the state charge to transfer it?",
      lead:
        "California charges $1,250 to move an on-sale general license from one person to another, plus an annual fee for each license in the application (Bus. & Prof. Code 24072).[1]",
      body:
        "California's schedule is published in the act: $1,250 for an on-sale or off-sale general license moved from a licensee to another person, or to another person and premises; $335 for all other licenses person to person; $780 premises to premises; and $6,000 to move a general license from one county to another.[1] Where one application covers several licenses at the same premises, the fee is charged once at the highest applicable rate and the rest transfer free, though the annual fee is still payable for each.[1]\n\nFlorida charges 10 percent of the annual license tax. The exception is the quota license under 561.20(1), where the fee is assessed on the average annual value of gross sales of alcoholic beverages for the three years immediately preceding the transfer, levied at 4 mills and capped at $5,000; in place of the 4-mill assessment the transferor may elect to pay $5,000.[4] The cap binds on any hotel with meaningful bar revenue, which the worked example below shows. Records establishing the value of those sales have to accompany the transfer application.[4]\n\nThose are the state's fees. What a license sells for on the open market is a private price, and no public source publishes it by county, so a seller allocating part of the price to the license is negotiating rather than consulting a table."
    },
    {
      h2: "Why does California put the license money in escrow?",
      lead:
        "Because Bus. & Prof. Code 24073 and 24074 put the seller's creditors in front of the seller for that money.[1]",
      body:
        "Before the transfer application is filed, the licensee or the intended buyer has to record a notice of intended transfer with the county recorder of each county where the premises sit. The notice names both parties, the kinds of license, the premises, and the escrow holder, describes the entire consideration broken out into cash, checks, promissory notes and tangible and intangible property, and carries an agreement between the parties that the consideration is paid only after the department approves the transfer (24073). A copy certified by the recorder goes to the department with the application.[1]\n\nThe parties then open an escrow with a person or entity that is not a party to the transfer, and the buyer deposits the full amount of the purchase price with the escrow holder (24074).[1] Creditors of the seller who file claims before the department notifies the escrow holder of its approval are paid out of that money in a fixed order: first the United States, for income and withholding taxes; second wages, salaries and fringe benefits of the seller's employees earned or accruing before the sale; third secured creditors, to the extent of the proceeds arising from the sale of the security; fourth mechanics' liens; fifth escrow fees, prevailing brokerage fees and reasonable attorney's fees; sixth goods sold and delivered to the seller for resale at the licensed premises, services supplied to the licensed business, and a landlord's claim for past due rent; seventh claims reduced to court-ordered judgments; eighth all other claims, pro rata if the money runs out.[1] A claim the seller disputes is held by the escrow holder for 25 days and, if not attached, paid to the seller.[1]\n\nTwo things follow for a seller. Money allocated to the license is not sale proceeds until the claims ahead of it are satisfied, and a broker's fee sits in the fifth tier, ahead of the beverage distributor and the landlord. Clearing trade payables and the wage accrual before escrow opens is the only reliable way to keep that money."
    },
    {
      h2: "Can I sell the entity and keep the license in place?",
      lead:
        "Federal registration survives a stock sale, but California, Florida and Texas each treat a change of control as a licensing event, so usually no.[11][1][4][9]",
      body:
        "The federal rule is the permissive one. A TTB dealer registration is personal to whoever registered and is not transferable, and where the proprietorship of the business changes the successor must register as a new business (27 CFR 31.121).[10] But the sale or transfer of all or a controlling interest in a corporation's capital stock does not require registration as a new business. It requires an amended registration, and only if the sale alters the list of stockholders owning 10 percent or more of the stock, filed on or before the next July 1 (27 CFR 31.135).[11]\n\nState law does not follow. In California, when 50 percent or more of a corporation's shares are acquired by people who did not hold 50 percent on the date the license was issued, the license \"shall be transferred to the corporation as newly constituted\". The new owners must hold every qualification required of a licensee, the department investigates first, and the recorded notice applies just as on a person-to-person sale. The fee is $800 for an on-sale general license. The same rule reaches a new general partner or 50 percent of a limited partnership's capital or profits, and limited liability companies have their own section (Bus. & Prof. Code 24071.1 and 24071.2).[1] The department lists a 50 percent stock transfer as its own application type.[2]\n\nFlorida is harsher on a quota license. A license issued under 561.20(1) is not transferable \"in any manner, either directly or indirectly, including by any change in stock, partnership shares, or other form of ownership\" for three years from original issuance, except through probate or guardianship. An attempted transfer in that window is void, and the license is deemed abandoned and reverts to the state to be reissued as a new license.[4] A transfer that is permitted inside the window costs 15 times the annual license fee.[4]\n\nTexas requires notice within 30 days of adding or removing any principal party, including officers and stockholders, under Alcoholic Beverage Code sections 28.04 and 11.42. A change of corporate control has to be reported before the change, and a Mixed Beverage Permit held by a corporation may not be renewed if the agency finds that ownership of more than 50 percent of the stock has changed since the original permit was issued.[9] An entity sale structured to dodge a transfer can therefore cost the buyer the permit at renewal instead."
    },
    {
      h2: "Does the license allow what the buyer plans to do?",
      lead:
        "Not always. A hotel license is often restricted to hotel guests, or conditioned on a working restaurant and a minimum room count.",
      body:
        "California's Type 70, On-Sale General Restrictive Service, authorizes the sale or furnishing of beer, wine and distilled spirits for consumption on the premises \"to the establishment's overnight transient occupancy guests or their invitees\". The department says it is normally issued to suite-type hotels and motels that exercise the privilege for the guests' complimentary happy hour.[3] A buyer who intends to open that bar to the public is applying for a different license, not transferring this one.\n\nNew York grants an on-premises liquor license only for premises \"being conducted as a bona fide hotel provided that a restaurant is operated in such premises\", along with the other premises types the section lists (ABC Law 64(5)).[8] Close the restaurant and the basis for the license closes with it.[8]\n\nFlorida's route around the county quota is a room count. The special license under 561.20(2)(a)1 requires not fewer than 80 guest rooms in a county of fewer than 50,000 residents, and not fewer than 100 guest rooms in a county of 50,000 residents or more, with narrower paths for hotels in historic structures. The quota itself is one license per 7,500 county residents.[5] A special license is restricted as well: it allows sale and consumption only on the licensed premises of the hotel.[5] A buyer converting guest rooms, or a seller who has already taken rooms out of service, should check the count before signing."
    },
    {
      h2: "What about a restaurant or bar run by someone else?",
      lead:
        "A concessionaire holds its own federal registration, and usually its own state license, and neither comes with the hotel.[12]",
      body:
        "Federal law is generous to the hotel on its own account. A hotel proprietor who conducts the sale of liquor throughout the hotel premises registers for one place only, and the different areas the proprietor operates, \"such as banquet rooms, meeting rooms, and guest rooms, collectively constitute a single place of business\" (27 CFR 31.82).[12] Where a concessionaire conducts sales in two or more areas of the hotel, those areas are also a single place of business, and the concessionaire registers once, for itself.[12]\n\nRegistration is on TTB Form 5630.5d, due before engaging in business and on or before July 1 of each year after that, with no further filing needed while nothing on the form has changed (27 CFR 31.111).[13] A dealer going out of business has to register that event within 30 days (27 CFR 31.138).[14] On a sale, that pairs with the successor's duty to register as a new business.[10]\n\nSo a hotel with a leased restaurant has two sets of paper, and only one set is the seller's to deal with. Confirm which entity holds which privilege before the purchase agreement allocates anything to a license."
    }
  ],
  table: {
    caption:
      "Who approves a hotel liquor license transfer, and what the state charges, as published October 2026",
    columns: [
      "Jurisdiction",
      "Is the license transferable?",
      "Interim permit while the application is pending",
      "What the state charges to transfer",
      "Is an entity sale a licensing event?"
    ],
    rows: [
      [
        "California",
        "Yes, on the department's approval. Each license is separate and distinct (B&P 24070).[1]",
        "Temporary permit, $100, up to four calendar months, one four-month extension for $100 (B&P 24045.5).[1]",
        "$1,250 person to person for an on-sale general license, $6,000 county to county, plus the annual fee per license (B&P 24072).[1]",
        "Yes. 50 percent or more of the shares transfers the license to the entity as newly constituted, $800 for an on-sale general license (B&P 24071.1).[1]"
      ],
      [
        "Florida",
        "Only on a bona fide sale of the business, and the buyer is approved as a new applicant (561.32(1)(a)).[4]",
        "Not published in the transfer statute.[4]",
        "10 percent of the annual license tax. On a quota license, 4 mills on the 3-year average alcohol sales, capped at $5,000 (561.32(3)(a)).[4]",
        "Yes. A quota license transferred indirectly within 3 years of issuance is void and reverts to the state (561.32(4)).[4]"
      ],
      [
        "New York",
        "Not transferable to another person or premises except in the authority's discretion (ABC 111).[7]",
        "Not published in section 111.[7]",
        "Not published in section 111.[7]",
        "Not addressed in section 111.[7]"
      ],
      [
        "Texas",
        "Notice to the commission is required on a change of ownership (Alco. Bev. Code 28.04 and 11.42).[9]",
        "Not published on the commission's change page.[9]",
        "Not published on the commission's change page.[9]",
        "Yes. Report a change of corporate control before the change; a Mixed Beverage Permit may not renew if over 50 percent of the stock changed.[9]"
      ],
      [
        "Federal (TTB)",
        "No. Registration is personal and not transferable, and the successor registers as a new business (27 CFR 31.121).[10]",
        "None. Register before engaging in business (27 CFR 31.111).[13]",
        "No fee stated in 27 CFR part 31.[13]",
        "No. A controlling-interest stock sale needs only an amended registration, and only if the 10 percent holders change (27 CFR 31.135).[11]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet shows Prime at 7.00 percent and the 10-year Treasury at 5.29 percent as of September 30, 2026.[15] That is the rate a license delay is priced at. Money allocated to the license and parked in a statutory escrow earns the seller nothing while the loan, the franchise fee and the payroll keep running.",
  },
  workedExample: {
    label:
      "Hypothetical: a 112-key California hotel at $19,800,000, and where the license money goes",
    body:
      "Hypothetical, not a transaction. Price $19,800,000, of which the parties allocate $250,000 to the on-sale general license. The buyer deposits the full $250,000 with the escrow holder, as Bus. & Prof. Code 24074 requires.[1]\n\nThe claims. Creditors file $291,000 of claims before the department notifies the escrow holder of approval: $38,000 of federal income and withholding taxes, $96,000 of wages and fringe benefits accrued before the sale, no secured claim paid out of this escrow, a $41,000 mechanics' lien from the lobby work, $52,000 of escrow, brokerage and attorney's fees, $34,000 owed to the beverage distributor and the landlord, no court-ordered judgments, and $30,000 of other claims. The sum is $38,000 plus $96,000 plus $41,000 plus $52,000 plus $34,000 plus $30,000, or $291,000.\n\nThe waterfall. The statute pays in order. Tier one takes $38,000, leaving $212,000. Tier two takes $96,000, leaving $116,000. Tier four takes $41,000, leaving $75,000. Tier five takes $52,000, leaving $23,000. Tier six claims $34,000 and reaches only the $23,000 left, a shortfall of $11,000. Tiers seven and eight receive nothing, so $30,000 of other claims goes unpaid. Unpaid claims total $291,000 less $250,000, or $41,000.\n\nWhat the seller receives from this escrow. Nothing. The $250,000 went to the seller's own creditors in the order the statute sets, and the brokerage fee was paid ahead of the distributor and the landlord.[1]\n\nThe fees and the wait. The transfer application on an on-sale general license is $1,250.[1] A temporary permit is $100 for four calendar months, and $100 more for the one extension, so $200 buys at most eight calendar months of trading.[1] Costing the $250,000 held through a single four-month permit at the 7.00 percent Prime rate on the October 2026 rate sheet: $250,000 times 0.07 times 122 divided by 365 is $5,849.[15]\n\nThe same hotel in Florida. On a quota license with three-year average alcoholic beverage sales of $1,400,000, the transfer fee is 4 mills on that average, so $1,400,000 times 0.004 is $5,600, which exceeds the statutory ceiling and is therefore capped at $5,000.[4]\n\nEvery figure above was recomputed by scripts/check-liquor-license-math.mjs.",
  },
  faq: [
    {
      q: "Does my liquor license convey with the hotel at closing?",
      a: "No. It is a state privilege tied to a named licensee and a specific address. California calls each license separate and distinct and transferable only on the department's approval.[1] The buyer applies for it. The deed does not carry it."
    },
    {
      q: "Can the bar stay open while the buyer's application is pending?",
      a: "In California, yes. A $100 temporary permit runs up to four calendar months and can be extended once for four more months and another $100, provided the license was surrendered and the transfer application is already filed.[1]"
    },
    {
      q: "Who gets the money allocated to the license?",
      a: "The seller's creditors first. California requires an escrow holding the full price, paid out in eight statutory tiers: federal taxes, employee wages, secured creditors, mechanics' liens, escrow and brokerage and attorney fees, trade and landlord claims, judgments, then everyone else pro rata.[1]"
    },
    {
      q: "Can I sell the LLC instead and keep the license in place?",
      a: "Usually not. California treats a 50 percent ownership change as a transfer of the license to the entity as newly constituted.[1] Florida voids an indirect transfer of a quota license within three years of issuance.[4] Federal registration is the lenient exception.[11]"
    },
    {
      q: "Does a hotel license let the buyer open the bar to the public?",
      a: "Not a California Type 70. It authorizes service only to the hotel's overnight transient occupancy guests or their invitees, and is normally issued to suite-type hotels for the complimentary reception.[3] A public bar is a different license."
    },
    {
      q: "How long does approval take?",
      a: "No public source publishes it. The only published outer bound is California's temporary permit: four calendar months plus one four-month extension.[1] File the transfer application at contract signing rather than after due diligence clears."
    },
    {
      q: "Does the restaurant tenant's license come with the hotel?",
      a: "No. A concessionaire registers with TTB separately for itself, even though the hotel's own banquet rooms, meeting rooms and guest rooms count as a single place of business.[12] The tenant's state license stays the tenant's."
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "California Alcoholic Beverage Control Act, 2026 edition (Bus. & Prof. Code 24070, 24071.1, 24071.2, 24072, 24073, 24074 and 24045.5)",
      url: "https://www.abc.ca.gov/wp-content/uploads/2026/03/2026-ca-abc-act.pdf",
      publisher: "California Department of Alcoholic Beverage Control",
      accessed: "2026-10-06",
    },
    {
      n: 2,
      label: "Transfer or Change a License: person to person, stock transfer, premises to premises",
      url: "https://www.abc.ca.gov/licensing/transfer-or-change-a-license/",
      publisher: "California Department of Alcoholic Beverage Control",
      accessed: "2026-10-06",
    },
    {
      n: 3,
      label: "License Types, type 70 On-Sale General Restrictive Service",
      url: "https://www.abc.ca.gov/licensing/license-types/",
      publisher: "California Department of Alcoholic Beverage Control",
      accessed: "2026-10-06",
    },
    {
      n: 4,
      label:
        "Fla. Stat. 561.32, transfer of licenses, change of officers or directors, transfer of interest",
      url: "https://www.flsenate.gov/Laws/Statutes/2025/561.32",
      publisher: "The Florida Senate",
      accessed: "2026-10-06",
    },
    {
      n: 5,
      label:
        "Fla. Stat. 561.20, limitation upon number of licenses issued, and the hotel special license",
      url: "https://www.flsenate.gov/Laws/Statutes/2025/561.20",
      publisher: "The Florida Senate",
      accessed: "2026-10-06",
    },
    {
      n: 6,
      label: "Fla. Stat. 561.17, license and registration applications, approved person",
      url: "https://www.flsenate.gov/Laws/Statutes/2025/561.17",
      publisher: "The Florida Senate",
      accessed: "2026-10-06",
    },
    {
      n: 7,
      label: "N.Y. Alcoholic Beverage Control Law 111, license to be confined to premises licensed",
      url: "https://www.nysenate.gov/legislation/laws/ABC/111",
      publisher: "New York State Senate",
      accessed: "2026-10-06",
    },
    {
      n: 8,
      label:
        "N.Y. Alcoholic Beverage Control Law 64, license to sell liquor at retail for consumption on the premises",
      url: "https://www.nysenate.gov/legislation/laws/ABC/64",
      publisher: "New York State Senate",
      accessed: "2026-10-06",
    },
    {
      n: 9,
      label:
        "Manage and Report Changes to an Existing License: change of ownership, change of corporate control",
      url: "https://www.tabc.texas.gov/services/tabc-licenses-permits/manage-report-changes-to-an-existing-license",
      publisher: "Texas Alcoholic Beverage Commission",
      accessed: "2026-10-06",
    },
    {
      n: 10,
      label: "27 CFR 31.121, sale of business",
      url: "https://www.ecfr.gov/current/title-27/section-31.121",
      publisher: "Electronic Code of Federal Regulations",
      accessed: "2026-10-06",
    },
    {
      n: 11,
      label: "27 CFR 31.135, change in ownership of capital stock",
      url: "https://www.ecfr.gov/current/title-27/section-31.135",
      publisher: "Electronic Code of Federal Regulations",
      accessed: "2026-10-06",
    },
    {
      n: 12,
      label: "27 CFR 31.82, hotels",
      url: "https://www.ecfr.gov/current/title-27/section-31.82",
      publisher: "Electronic Code of Federal Regulations",
      accessed: "2026-10-06",
    },
    {
      n: 13,
      label: "27 CFR 31.111, date registration form is due",
      url: "https://www.ecfr.gov/current/title-27/section-31.111",
      publisher: "Electronic Code of Federal Regulations",
      accessed: "2026-10-06",
    },
    {
      n: 14,
      label: "27 CFR 31.138, discontinuance of business",
      url: "https://www.ecfr.gov/current/title-27/section-31.138",
      publisher: "Electronic Code of Federal Regulations",
      accessed: "2026-10-06",
    },
    {
      n: 15,
      label: "Hotel debt rate sheet, October 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-10-06",
    },
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/documents-needed",
      "/sell-a-hotel/franchise-transfer",
      "/sell-a-hotel/employees-when-you-sell",
      "/sell-a-hotel/tax-clearance-and-withholding",
      "/sell-a-hotel/how-long-it-takes",
    ],
    glossary: [
      "/glossary/going-concern-value",
      "/glossary/franchise-agreement",
      "/glossary/noi",
    ],
    data: ["/rates"],
  },
  cta: {
    label: "Ask about selling your hotel",
    href: "/contact",
  },
  brandSentence:
    "Matthews Hotel Markets sells hotels from $2 million and does not file liquor license applications, so we raise the license at engagement and let your beverage counsel use the eight months the statute allows rather than the three weeks before closing.",
};

export default page;
