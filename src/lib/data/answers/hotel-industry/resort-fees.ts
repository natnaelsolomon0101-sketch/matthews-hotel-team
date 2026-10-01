/**
 * Can my hotel still charge a resort fee?
 * Answer page: /hotel-industry/resort-fees
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-10-01): the full text of 16 CFR part 464 from the eCFR API
 * (title 16, issue of 2026-09-28); the FTC's final rule, 90 FR 2066, read as
 * the govinfo PDF of the January 10, 2025 Federal Register, which supplied the
 * May 12, 2025 effective date, the 2017 Bureau of Economics finding and the
 * lodging booking and time-savings estimates at p. 2148; 16 CFR 1.98(d) from
 * the eCFR API; the FTC's Civil Penalty Inflation Adjustments notice,
 * 91 FR 58446 (September 15, 2026), which holds the 2025 penalty levels for
 * 2026; 15 U.S.C. 45 on Cornell LII; and California Business and Professions
 * Code 17568.6 and Civil Code 1770(a)(29) on leginfo, with AB 537's operative
 * date taken from the chaptered bill.
 *
 * The worked example was recomputed line by line with
 * scripts/check-resort-fee-math.mjs before saving. Do not hand-edit a number
 * without re-reading its source and bumping `lastUpdated`.
 *
 * Deliberately absent: any figure for what hotels collect in mandatory fees
 * industry-wide, or what share of hotels charge one. No public source
 * publishes either. The page prints the FTC's own booking and time-savings
 * estimates instead, which are published, and says the rest is not.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "resort-fees",
  cluster: "hotel-industry",
  isHub: false,
  title: "Hotel Resort Fees and the FTC Fee Rule",
  description:
    "Why the FTC fee rule lets hotels charge resort fees but not hide them, what belongs in the advertised total price, and the per-violation ceiling.",
  h1: "Can my hotel still charge a resort fee?",
  lastUpdated: "2026-10-01",
  authorSlug: "miles-cortez",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Can my hotel still charge a resort fee?",
    "Are resort fees illegal now?",
    "What does the FTC fee rule require hotels to disclose?",
    "Do I have to include taxes in my advertised room rate?",
    "What is the penalty for a hidden resort fee?",
    "Does the FTC junk fee rule apply to hotels?",
    "Do resort fees count in ADR and RevPAR?"
  ],
  answer:
    "Yes. The Federal Trade Commission's fee rule, effective May 12, 2025, does not ban resort fees or cap them.[1][2] It requires that every price you advertise show the total price, including each mandatory fee, more prominently than any other figure.[1] Government taxes may sit outside that total, but you must disclose them before the guest consents.[1]",
  takeaways: [
    "The rule bans hiding a fee, not charging one. Nothing in 16 CFR part 464 caps a resort fee or forbids it; 464.2 governs how the price is shown.[1]",
    "Short-term lodging is one of only two things the rule covers, and it is named: a hotel, motel, inn, short-term rental or other place of lodging.[1]",
    "The test is whether the guest must pay it to stay. A mandatory ancillary charge belongs in the total price; a genuinely optional one may sit outside it.[1]",
    "The ceiling is $53,088 for each violation under 15 U.S.C. 45(m)(1)(A), and each day a failure continues is a separate violation.[4][5] The Commission confirmed on September 15, 2026 that the amount is unchanged for 2026.[6]",
    "State law is not displaced and can be stricter. California puts taxes inside the total before the guest reserves, and adds a $10,000 per-violation penalty.[1][3]"
  ],
  sections: [
    {
      h2: "Does the FTC fee rule apply to my hotel?",
      lead:
        "Yes. Short-term lodging is one of only two categories the rule reaches, and the rule names it.",
      body:
        "Part 464 applies to a \"covered good or service\", defined as live-event tickets or short-term lodging, \"including temporary sleeping accommodations at a hotel, motel, inn, short-term rental, vacation rental, or other place of lodging\".[1] There is no size threshold and no single-property carve-out.\n\nIt reaches every channel you sell through. A \"business\" under 464.1 is any entity offering goods or services, \"including, but not limited to, online, in mobile applications, and in physical locations\", and 464.2(a) attaches to any offer, display or advertisement of a price.[1] Your booking engine, your rates on travel sites, a printed rack rate and a phone quote are all offers of a price.[2]"
    },
    {
      h2: "Are resort fees still legal?",
      lead:
        "Yes. Part 464 is a disclosure rule, and it does not prohibit any particular fee or set its amount.",
      body:
        "The rule has two prohibitions and neither touches the fee itself. Section 464.2 makes it unfair and deceptive to advertise a price without clearly and conspicuously disclosing the total price, and requires that total to be the most prominent figure shown. Section 464.3 bars misrepresenting a fee, naming \"the nature, purpose, amount, or refundability\" of it.[1] A $35 mandatory amenity fee, accurately described and inside the advertised total, breaks neither.\n\nThe history explains the choice of disclosure over prohibition. After a 2012 workshop on drip pricing, FTC staff sent warning letters to hotels and online travel agents that were not adequately disclosing resort fees. The agency calls the practice partitioned pricing: hotels \"might separately list the room rate and 'resort fee' but never add them up and quote an all-inclusive total price\". In 2017 its Bureau of Economics concluded that \"[u]nless the total price is disclosed up front, separating resort fees from the room rate is unlikely to result in benefits that offset the likely harm to consumers\".[2]\n\nSo the fee survives. Quoting the room rate alone and adding the fee later does not."
    },
    {
      h2: "What exactly has to be in the price I advertise?",
      lead:
        "The total price, which the rule defines as the maximum total of everything a guest must pay, including any mandatory ancillary good or service.",
      body:
        "Section 464.1 defines total price as \"the maximum total of all fees or charges a consumer must pay for any good(s) or service(s) and any mandatory ancillary good or service\", then allows three exclusions: government charges, shipping charges, and fees for any optional ancillary good or service.[1] For a hotel, shipping is irrelevant; the live questions are the first and third.\n\nTwo display rules sit on top. Under 464.2(b) the total price must be more prominent than any other pricing information, except that the final amount of payment may be as prominent or more so. Under 464.2(c), before the guest consents, you must disclose the nature, purpose and amount of any charge left out of the total, what it pays for, and the final amount of payment.[1]\n\nA compliant display therefore has a shape. The all-in nightly figure including the mandatory fee is the headline, and the tax may sit outside it but cannot surprise anyone at checkout. The rule's \"clear and conspicuous\" definition is strict here: a disclosure in an interactive medium must be \"unavoidable\", and nothing else may contradict it.[1]"
    },
    {
      h2: "Which charges count as mandatory, and which are optional?",
      lead:
        "If the guest cannot stay without paying it, it is mandatory and belongs in the total price.",
      body:
        "The rule gives no list, so the test runs off its definitions. An ancillary good or service is any additional good or service offered in the same transaction, and only a mandatory one is pulled into total price.[1] A resort, amenity or destination fee, a mandatory housekeeping charge or a compulsory service charge is a condition of the stay, so it goes in. Parking the guest may decline, a pet fee, a spa treatment and paid early check-in may stay out of the headline.\n\nLabeling does not decide it. If every arriving guest is charged the fee, calling it optional in the terms will not make it optional under 464.1, and misdescribing its nature or purpose is a separate violation under 464.3. Refundability is named there too, so a fee presented as refundable that is not is actionable however the total is displayed.[1]"
    },
    {
      h2: "Do state laws add anything?",
      lead:
        "Yes, and part 464 expressly leaves the stricter ones standing.",
      body:
        "Section 464.4 says the rule does not supersede state law on unfair or deceptive fees except to the extent of an inconsistency, then defines away most of the conflict: a state rule is not inconsistent if it protects a consumer more than the federal rule does.[1] Part 464 is a floor, not a shield.\n\nCalifornia has two layers. Civil Code 1770(a)(29) makes it an unlawful deceptive practice to advertise a price that excludes any mandatory fee other than government taxes and fees on the transaction and shipping.[7] The lodging-specific layer, Business and Professions Code 17568.6, came from AB 537 and became operative on July 1, 2024. It goes past the federal rule where it counts: (a)(1) bars advertising a room rate that excludes any fee required to stay, and (a)(2) separately requires every government tax and fee on the stay to be in the total price \"before the consumer reserves the stay\".[3]\n\nThe details matter if you operate there. \"Short-term lodging\" covers any hotel, motel, bed and breakfast inn or other transient lodging, plus short-term rentals booked through a platform. Subdivision (c) treats state tourism and business improvement district assessments as government fees on the stay, which is not an obvious call. Subdivision (d) reaches advertising before the public in California or from it, and (e) sets a penalty of up to $10,000 per violation, enforceable by a city attorney, district attorney, county counsel or the Attorney General.[3]"
    },
    {
      h2: "What is the exposure if the disclosure is wrong?",
      lead:
        "Up to $53,088 for each violation, and a continuing failure is counted by the day.",
      body:
        "The authority is 15 U.S.C. 45(m)(1)(A), which lets the Commission seek a penalty from anyone who violates a rule with \"actual knowledge or knowledge fairly implied on the basis of objective circumstances\" that the act is unfair or deceptive and prohibited by the rule.[4] The statute names $10,000 per violation, but the figure is inflation-adjusted: 16 CFR 1.98(d) puts the maximum at $53,088.[5]\n\nThat figure is current, not stale. On September 15, 2026 the Commission published a notice stating that because the Office of Management and Budget could not produce the October 2025 cost-of-living multiplier, its penalty amounts stay unchanged during 2026 and the 2025 levels continue to apply.[6]\n\nWhat drives exposure is time. Under 45(m)(1)(C), each day of a continuing failure to comply with a rule is a separate violation.[4] A rate display left wrong for a month is not one violation. California's $10,000 sits on top, and 17568.6(f) says its duties are cumulative with other law.[3]\n\nNone of this predicts what an agency would seek. It is the published ceiling, the knowable part."
    },
    {
      h2: "Does a mandatory fee help or hurt what my hotel is worth?",
      lead:
        "The revenue counts, but it does not appear where buyers look first, and a non-compliant disclosure turns into a diligence item.",
      body:
        "Average daily rate and revenue per available room are rooms-only measures, so a mandatory fee lifts neither. It lands in total revenue and from there in net operating income, which is what a buyer capitalizes and a lender sizes debt against. Two hotels with the same RevPAR can carry different NOI if one charges a mandatory fee and the other does not.\n\nThat makes the fee an underwriting question, not a footnote. A buyer will ask whether it is collected on every occupied night or waived for loyalty members and negotiated accounts, whether it survives a brand conversion, and whether today's display would withstand a complaint. A fee a buyer or lender discounts is NOI they will not pay for.\n\nThe scale of the disclosure question is published even though the fee revenue is not. In the economic analysis supporting the rule, the Commission put U.S. and foreign lodging bookings at about 683.9 million a year and estimated the rule would save U.S. consumers 27.2 to 39.6 million hours a year, worth $702.1 million to $1.02 billion.[2] How much the industry collects in mandatory fees, and what share of hotels charge one, is published nowhere, so this page prints neither."
    }
  ],
  table: {
    caption:
      "What belongs in the advertised price: the federal fee rule and California compared, October 2026",
    columns: [
      "Charge",
      "In the federal total price?",
      "In California's advertised room rate?",
      "Source"
    ],
    rows: [
      [
        "Mandatory resort, amenity or destination fee",
        "Yes",
        "Yes",
        "16 CFR 464.1, 464.2(a); Bus. & Prof. Code 17568.6(a)(1)"
      ],
      [
        "Mandatory housekeeping or service charge",
        "Yes",
        "Yes",
        "16 CFR 464.1; Bus. & Prof. Code 17568.6(a)(1)"
      ],
      [
        "Occupancy or sales tax",
        "No, excluded as a government charge, but disclosed before the guest consents",
        "Yes, in the total price before the guest reserves",
        "16 CFR 464.1, 464.2(c); Bus. & Prof. Code 17568.6(a)(2)"
      ],
      [
        "State tourism or business improvement district assessment",
        "Not named in part 464",
        "Treated as a government fee on the stay",
        "Bus. & Prof. Code 17568.6(c)"
      ],
      [
        "Optional parking, pet or spa charge",
        "No, excluded as an optional ancillary service",
        "No, because it is not required to stay",
        "16 CFR 464.1"
      ],
      [
        "Mandatory fee on a group or event booking",
        "Yes; the FTC Act carries no limit on which consumers can be injured",
        "Yes, where the stay is advertised to the public",
        "90 FR 2066; Bus. & Prof. Code 17568.6(a)(1)"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet is where that fee revenue turns into borrowing capacity. As of September 30, 2026 it shows the 10-year Treasury at 5.29 percent and Prime at 7.00 percent, and marks the debt service coverage and loan-to-value cells as not yet published, because lenders do not publish them.[8] A fee a lender declines to underwrite buys no loan at any of those rates.",
  },
  workedExample: {
    label:
      "Hypothetical: a 140-key resort charging a $35 mandatory nightly fee",
    body:
      "This hotel does not exist. The 140 keys, the $249 room rate, the $35 fee, the 70 percent occupancy, the 15 percent occupancy tax and the 30-day window are assumptions. The rules applied to them are not, and every figure was recomputed before this page was saved.\n\nThe fee is a condition of the stay, so it is a mandatory ancillary charge and belongs in the total price: $249 + $35 = $284.[1] That $284 must appear more prominently than any other pricing information, the $249 included. The fee is 12.3 percent of it.\n\nA government charge may sit outside total price, so the federal headline stays $284, but the tax and the final amount of payment must be disclosed before the guest consents.[1] At an assumed 15 percent of $284 that is $42.60, and the final amount is $326.60. California differs here: 17568.6(a)(2) puts the taxes inside the total before the guest reserves, so the figure shown before booking is $326.60.[3]\n\nThe revenue is real. 140 keys at 70 percent occupancy over 365 nights is 35,770 occupied room nights, and at $35 each the fee produces $1,251,950 a year, landing in total revenue and NOI, not ADR or RevPAR.\n\nSet the exposure beside it. Suppose the display omits the fee for 30 days. Under 45(m)(1)(C) each day is a separate violation, so the published ceiling is 30 x $53,088 = $1,592,640.[4][5] That is $340,690 more than a full year of the fee revenue, and California's $10,000 per violation sits on top.[3] The ceiling forecasts no enforcement outcome, but it is larger than the line it threatens."
  },
  faq: [
    {
      q: "Are resort fees illegal now?",
      a: "No. 16 CFR part 464 governs how a price is displayed, not whether a fee may be charged. A mandatory fee is lawful if the advertised total includes it and that total is the most prominent figure shown.[1]"
    },
    {
      q: "Do I have to include taxes in my advertised room rate?",
      a: "Not under the federal rule, which excludes government charges from total price. You must still disclose their nature, purpose and amount, and the final amount of payment, before the guest consents.[1] California puts them inside the total before the guest reserves.[3]"
    },
    {
      q: "What is the penalty for a hidden resort fee?",
      a: "Up to $53,088 for each violation under 15 U.S.C. 45(m)(1)(A) as adjusted by 16 CFR 1.98(d), and each day a failure continues counts separately.[4][5] The Commission confirmed on September 15, 2026 that the figure is unchanged for 2026.[6]"
    },
    {
      q: "Does the rule cover third-party travel sites as well as my own site?",
      a: "Yes. Part 464 defines a business to include entities offering services online, in mobile applications and in physical locations, and 464.2(a) attaches to any offer, display or advertisement of a price.[1]"
    },
    {
      q: "Does the fee rule apply to group and event bookings?",
      a: "Nothing in part 464 carves them out. Answering a comment about franchised hotels advertising event spaces, the Commission said the FTC Act carries no limit on which consumers can be injured, and has long applied it where the harmed consumers are businesses.[2]"
    },
    {
      q: "Do resort fees show up in ADR and RevPAR?",
      a: "Generally no. Both are rooms-only metrics, so a mandatory fee lands in total revenue and net operating income instead. That is why two hotels with the same RevPAR can carry different NOI, and why buyers underwrite the fee separately."
    },
    {
      q: "Can Matthews Hotel Markets review my fee disclosures?",
      a: "No. We sell hotels and arrange the debt behind them. Fee-disclosure compliance is work for your counsel. What we do is value the fee revenue and flag the line when a buyer's diligence reaches it."
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "16 CFR part 464, Rule on Unfair or Deceptive Fees: the definitions of covered good or service, total price, ancillary good or service, government charges, business and clear and conspicuous in 464.1; hidden fees prohibited and the prominence and pre-consent disclosure rules in 464.2; misleading fees prohibited in 464.3; and the relation to state laws in 464.4 (title 16 issue of September 28, 2026)",
      url: "https://www.ecfr.gov/current/title-16/part-464",
      publisher: "Electronic Code of Federal Regulations, National Archives",
      accessed: "2026-10-01"
    },
    {
      n: 2,
      label:
        "Trade Regulation Rule on Unfair or Deceptive Fees, final rule, 90 FR 2066 (January 10, 2025), effective May 12, 2025: the 2012 warning letters to hotels and online travel agents and the partitioned-pricing description, the 2017 Bureau of Economics finding on separating resort fees from posted room rates, the Commission's response on business-to-business transactions and event space, and the lodging booking and time-savings estimates at p. 2148",
      url:
        "https://www.federalregister.gov/documents/2025/01/10/2024-30293/trade-regulation-rule-on-unfair-or-deceptive-fees",
      publisher: "Federal Trade Commission, via the Federal Register",
      accessed: "2026-10-01"
    },
    {
      n: 3,
      label:
        "California Business and Professions Code 17568.6, added by AB 537 (Berman, chaptered October 13, 2023) and operative July 1, 2024: the room-rate rule in (a)(1), the government taxes and fees in the total price before reservation in (a)(2), the definition of short-term lodging in (b), tourism and business improvement district assessments treated as government fees in (c), the reach of the section in (d), the $10,000 per-violation penalty and enforcing authorities in (e), and the cumulative-duties clause in (f)",
      url:
        "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=17568.6.",
      publisher: "California Legislative Information",
      accessed: "2026-10-01"
    },
    {
      n: 4,
      label:
        "15 U.S.C. 45(m)(1)(A) and (m)(1)(C): civil penalties for violating a rule with actual knowledge or knowledge fairly implied on the basis of objective circumstances, and the treatment of each day of a continuing failure to comply as a separate violation",
      url: "https://www.law.cornell.edu/uscode/text/15/45",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-01"
    },
    {
      n: 5,
      label:
        "16 CFR 1.98(d): the adjusted maximum civil penalty under section 5(m)(1)(A) of the FTC Act, $53,088, applying to penalties assessed after January 17, 2025 (title 16 issue of September 28, 2026)",
      url: "https://www.ecfr.gov/current/title-16/section-1.98",
      publisher: "Electronic Code of Federal Regulations, National Archives",
      accessed: "2026-10-01"
    },
    {
      n: 6,
      label:
        "Civil Penalty Inflation Adjustments, 91 FR 58446 (September 15, 2026): FTC civil penalty amounts remain unchanged during 2026 and the 2025 levels continue to apply, because OMB was unable to produce the October 2025 cost-of-living adjustment multiplier",
      url:
        "https://www.federalregister.gov/documents/2026/09/15/2026-18853/civil-penalty-inflation-adjustments",
      publisher: "Federal Trade Commission, via the Federal Register",
      accessed: "2026-10-01"
    },
    {
      n: 7,
      label:
        "California Civil Code 1770(a)(29): advertising, displaying or offering a price that does not include all mandatory fees or charges, other than government taxes and fees on the transaction and shipping, is an unlawful deceptive practice",
      url:
        "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1770.",
      publisher: "California Legislative Information",
      accessed: "2026-10-01"
    },
    {
      n: 8,
      label: "Hotel financing rate sheet, October 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-10-01"
    }
  ],
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/how-hotels-make-money",
      "/hotel-industry/revpar-adr-occupancy",
      "/hotel-industry/hotel-operating-costs",
      "/hotel-industry/ada-requirements"
    ],
    glossary: ["/glossary/adr", "/glossary/revpar", "/glossary/noi"],
    data: ["/rates"]
  },
  cta: {
    label: "Talk to the hospitality team about a valuation or a sale",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets sells hotels where a mandatory fee line is already sitting in a buyer's diligence file, and arranges the debt that line helps size. We do not advise on advertising or fee-disclosure compliance."
};
