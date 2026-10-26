/**
 * Can I sell my hotel to a foreign buyer?
 * Answer page: /sell-a-hotel/selling-to-a-foreign-buyer
 *
 * Written 2026-10-26 from a gap scan: "CFIUS", "national security" and
 * "Treasury review" appeared in zero files under src/lib/data/. FIRPTA covers
 * the foreign *seller* on /sell-a-hotel/tax-clearance-and-withholding; nothing
 * covered the foreign *buyer*.
 *
 * Every figure in the worked example and the body arithmetic is recomputed by
 * scripts/check-foreign-buyer-math.mjs. Run it before changing a number here.
 *
 * Three dates to re-verify. (1) The periodic review of the appendix A site list
 * that Pub. L. 119-60 section 8102 added as 50 U.S.C. 4565(a)(4)(C)(iii) is due
 * no later than December 18, 2026, so the list and the distances can move.
 * (2) The CY 2026 CFIUS Annual Report to Congress, expected mid-2027, replaces
 * every count and average cited to source [1]. (3) Washington is absent from
 * the state table on purpose; only Florida and Texas were read this run.
 *
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "selling-to-a-foreign-buyer",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Selling a Hotel to a Foreign Buyer",
  h1: "Can I sell my hotel to a foreign buyer?",
  description:
    "No federal law bars it. CFIUS can review a hotel sale if the hotel sits in a covered port or within one mile of a listed military installation.",
  lastUpdated: "2026-10-26",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Can I sell my hotel to a foreign buyer?",
    "Does a foreign buyer need government approval to buy a US hotel?",
    "What is CFIUS and does it apply to a hotel sale?",
    "Can a Chinese company buy a hotel in the United States?",
    "Is my hotel near a military base a problem for a foreign buyer?",
    "How long does a CFIUS review add to a hotel closing?",
    "Which states ban foreign ownership of commercial real estate?",
    "Do I have to tell the government if I sell my hotel to a foreign company?"
  ],
  answer:
    "No federal statute bars a foreign buyer from owning a U.S. hotel. CFIUS reviews, it does not license. Of the 347 covered transactions CFIUS assessed or reviewed in 2025, 14 were real estate filings under 31 CFR part 802.[1] A hotel is reached only if it sits in a covered port or within one mile of a listed military installation.[2][3]",
  takeaways: [
    "CFIUS reviews a sale and can order divestment. It does not issue permits, and there is no approval to apply for.",
    "Most hotels are outside part 802. Covered real estate in an urbanized area is an excepted real estate transaction unless it is in a covered port or within one mile of a part 1 or part 2 installation.[4]",
    "Filing is voluntary either way. Part 802 has no mandatory declaration, and the price of not filing is that an agency notice can arrive up to three years after the closing.[5][6]",
    "A notice on a $24,000,000 sale costs $7,500, which is 0.03 percent of the price.[7]",
    "State law can be stricter. Florida bars a foreign principal from seven named countries from buying real property within 10 miles of a military installation or a fenced airport, seaport or power plant.[8][9]"
  ],
  sections: [
    {
      h2: "Is it legal to sell a U.S. hotel to a foreign buyer?",
      lead: "Yes. No federal statute prohibits foreign ownership of a U.S. hotel, and section 721 of the Defense Production Act gives the government a review power rather than a licensing power.[10]",
      body: "Section 721 lets the President act on a covered transaction that threatens to impair national security, and it sets up the Committee on Foreign Investment in the United States to run the review.[10] Nothing in it asks a seller for permission first.\n\nThe scale confirms it. CFIUS assessed or reviewed 347 covered transactions in 2025, of which 14 were real estate filings under 31 CFR part 802: seven declarations out of 140, and seven notices out of 207.[1] Fourteen filings in a year, nationwide, across every asset class part 802 reaches."
    },
    {
      h2: "Which rule reaches a hotel sale, part 800 or part 802?",
      lead: "Part 800 reaches the purchase of a hotel business. Part 802 reaches the purchase of hotel real estate. A sale is one or the other, never both.[4]",
      body: "A covered transaction under part 800 that includes the purchase of covered real estate is an excepted real estate transaction, so part 802 drops away.[4] The line is whether a business changes hands, and part 802's own examples make it concrete: buying an empty warehouse near a listed installation is a covered real estate transaction, while buying the same warehouse plus its personnel, customer list, equipment and inventory software is a part 800 covered transaction, because that package is a business.[4]\n\nA hotel sale sits closer to the second example than owners expect. A going hotel sold with its staff, bookings, brand licence and operating accounts is a U.S. business. A hotel sold as a shell, or ground leased, or sold after the operating company has been stripped out, is a part 802 question."
    },
    {
      h2: "Is my hotel covered real estate?",
      lead: "Only if it is in, within or functioning as part of a covered port, or within one mile of a listed military installation, or inside the 99-mile extended range of a few of them.[2][3][12]",
      body: "Covered real estate is defined by location, not by use. It is real estate that is, is located within, or will function as part of, a covered port; or sits within close proximity of a military installation or other U.S. Government property named in part 1 or part 2 of appendix A; or within the extended range of certain part 2 installations, a county named in part 3, or an offshore range named in part 4.[2]\n\nTwo distances do the work. Close proximity extends one mile outward from the installation's boundary.[3] Extended range runs 99 miles outward from the outer edge of close proximity, putting the far boundary 100 miles out, and it reaches only combat training centers, test ranges and joint forces training centers.[12]\n\nCovered port is the test that catches hotels. It takes in any large hub airport on the Federal Aviation Administration's annual final enplanement data, any airport with annual all-cargo landed weight above 1.24 billion pounds, any FAA joint use airport, any commercial strategic seaport in the National Port Readiness Network, and any top 25 tonnage, container or dry bulk port.[11] A large hub is a commercial service airport with at least 1.0 percent of national passenger boardings, so a hotel on airport land at one is covered real estate on the face of the rule.[13]\n\nAppendix A runs in four parts and names the sites individually, down to the city, so look up your own address against it.[14] The list moves: Pub. L. 119-60, enacted December 18, 2025, requires each Committee member to review its own entries and report recommended revisions, including what distance should apply, no later than one year after that date.[10]"
    },
    {
      h2: "Does the urbanized-area exception cover my hotel?",
      lead: "Usually yes, and that is the most useful fact on this page, but the exception has a hole exactly where hotels cluster.[4]",
      body: "An excepted real estate transaction includes the purchase of covered real estate within an urbanized area or urban cluster, as the Census Bureau defines those terms.[4] Most U.S. hotels are in one, which is why part 802 produces fourteen filings a year rather than thousands.[1]\n\nThe hole is in the same sentence. That exception does not reach real estate subject to paragraph (a) of the covered real estate definition, the covered port leg, or paragraph (b)(1), the one-mile close proximity leg.[4] A downtown hotel 40 miles from a test range is excepted. The same hotel 0.25 miles from a part 1 installation is not, and part 802's own examples say so in those words.[4]\n\nOne more test applies on top. The foreign person must be afforded at least three of four property rights: to access the real estate, to exclude others from it, to improve or develop it, and to attach fixed structures to it.[15] A fee purchase gives all four, so this screens out nothing on an ordinary sale; it decides the answer on a long ground lease or a minority joint venture with no development right. Note 1 to section 802.212 adds that a transaction arising from a bankruptcy or other default on debt is a covered real estate transaction, so foreclosing on a foreign borrower is inside the rule.[16]"
    },
    {
      h2: "Do we have to file, and what does it cost?",
      lead: "No. Part 802 has no mandatory declaration: subpart D provides for a voluntary declaration and subpart E for a voluntary notice.[5][6]",
      body: "The statute's mandatory declaration applies only to a covered transaction in a U.S. business that owns critical infrastructure, produces critical technology or holds sensitive personal data, where a foreign government has a substantial interest in the buyer.[10] A hotel is none of those three, and part 802 carries no equivalent provision: section 802.401(a) says a party may submit a voluntary declaration.[5]\n\nSo the choice is between the three routes in the table above. A declaration is free. A notice carries a fee set by transaction value, from nothing below $500,000 to $300,000 above $750,000,000, with $7,500 the band running from $5,000,000 to under $50,000,000.[7] On a lease the value is the sum of the payments over the term rather than the appraised value of the land, so a long ground lease can land in a higher band than its rent suggests.[18]\n\nWhat a notice buys is finality: written notification that the Committee has concluded all action is what lets a buyer and its lender stop pricing the risk. A declaration can produce that same notification, or a request to file a notice, or a statement that the Committee cannot conclude action on the declaration.[19]\n\nMatthews Hotel Markets does not file CFIUS declarations or advise on them; that is work for the buyer's own national security counsel. The seller's job is to put the question in the purchase agreement: who files, who pays, and what happens if the Committee asks for a notice."
    },
    {
      h2: "How many days does a CFIUS filing add to the closing?",
      lead: "Thirty-seven days on the 2025 average for a declaration, 45 days for a notice that closes in review, and 83 days for one that goes to investigation.[1]",
      body: "The rules set the ceilings. A declaration gets a 30-day assessment period that starts when the Committee receives it from the Staff Chairperson.[20] A notice gets a 45-day review period that starts the business day after the notice is accepted and the fee confirmed received.[21] An investigation must finish within 45 days of commencing, the Chairperson may extend it once by 15 days in extraordinary circumstances, and a matter that reaches the President is decided within 15 days of the investigation completing.[10] That is 105 days of statutory clock, or 120 with the President's window.\n\nThe published averages are kinder. In 2025, 6.87 calendar days elapsed on average between a declaration being submitted and accepted, and assessment then averaged 30.1 days. Notices closing in review averaged 45.4 days and notices closing in investigation averaged 82.8 days, and CFIUS opened an investigation on 114 of the 207 notices accepted that year, or 55.07 percent.[1] All of that is economy-wide; CFIUS publishes no hotel breakdown.\n\nA declaration is about the length of a due diligence period, so it costs nothing if it starts at signing. A notice that goes to investigation is longer than the whole back half of a sale. The variable a seller controls is when the clock starts, not how fast it runs, the same lesson as [how long does it take to sell a hotel through a broker?](/sell-a-hotel/how-long-it-takes)"
    },
    {
      h2: "What happens if nobody files?",
      lead: "The sale closes and the risk stays open. An agency notice can be filed up to three years after the completion date, and the Chairperson can go past that.[6]",
      body: "Any Committee member at or above Under Secretary level may file an agency notice on a transaction it believes is a covered real estate transaction raising national security considerations, and the Staff Chairperson may request information on a transaction nobody notified and then ask the parties to file.[6] No agency notice under section 802.501(c)(1) may be made more than three years after the completion date, unless the Chairperson files it in consultation with the other members.[6] An unfiled hotel sale therefore carries an open question for three years, and longer in the Chairperson's hands.\n\nThe penalties are not for failing to file, because nothing required a filing. They are for what gets said in one: a material misstatement or omission in a declaration or notice, or a false certification, can draw a civil penalty up to $5,000,000 per violation.[22] That bears on representations. A seller asked to certify that the hotel is not covered real estate is being asked to certify a fact about appendix A, and that one belongs with whoever looked it up."
    },
    {
      h2: "Which states restrict foreign ownership of a hotel?",
      lead: "Florida and Texas both do, and both go further than the federal rule, because they ban rather than review.[8][23]",
      body: "Florida reaches hotels through distance. A foreign principal may not own, have a controlling interest in, or acquire real property on or within 10 miles of any military installation or critical infrastructure facility in the state.[8] Critical infrastructure facility covers an airport, a listed seaport, a power plant, a water or wastewater treatment plant, a refinery, a chemical or gas processing plant, a liquid natural gas terminal and a telecommunications central switching office, in each case where the facility is fenced or guarded against unauthorized persons. The seven countries are China, Russia, Iran, North Korea, Cuba, the Venezuelan regime of Nicolas Maduro and Syria, and foreign principal reaches their governments and political parties, entities organized or headquartered there, and people domiciled there who are not U.S. citizens or lawful permanent residents.[9] Interests held before July 1, 2023 may be kept but not added to, late registration costs $1,000 a day, and a violation is a second-degree misdemeanor with forfeiture available to the state.[8] Ten miles from a fenced airport is most of urban Florida, and a separate section bars a Chinese foreign principal from Florida real property generally.[24]\n\nTexas reaches hotels directly, with no distance test and no military nexus. Subchapter H of chapter 5 of the Property Code, added by Senate Bill 17 of the 89th Legislature and effective September 1, 2025, says the listed persons and entities may not acquire an interest in real property in the state, and real property is defined to include commercial property. Designated country means one the Director of National Intelligence named a national security risk in any of the three most recent Annual Threat Assessments, plus any the governor designates. A violating purchase is not void, but the attorney general may ask a court to order divestment through a receiver, and the civil penalty is the greater of $250,000 or 50 percent of the interest's market value.[23]\n\nOther states have passed similar laws and this run read only these two. Check the statute in the hotel's own state before a cross-border bid is accepted."
    },
    {
      h2: "What else does a foreign buyer have to clear?",
      lead: "Three gates that have nothing to do with CFIUS and stop more hotel deals than it does: the brand, the liquor license and the withholding rules.",
      body: "The franchisor's consent is the usual binding constraint, and a first-time franchisee based abroad is a harder application than a buyer that already runs the flag: [what happens to my franchise agreement when I sell my hotel?](/sell-a-hotel/franchise-transfer) The liquor license is next, because it does not convey with the deed and several states treat an equity change of 50 percent as a transfer in its own right: [how does a liquor license transfer when a hotel sells?](/sell-a-hotel/liquor-license-transfer) The third runs the other way: withholding under section 1445 is about a foreign seller, not a foreign buyer, and it makes the buyer the withholding agent on 15 percent of the amount realized, at [what gets held back from my sale price for taxes?](/sell-a-hotel/tax-clearance-and-withholding)"
    }
  ],
  table: {
    caption: "CFIUS filing routes on a hotel sale to a foreign buyer, October 2026",
    columns: [
      "Route",
      "Fee at a $24,000,000 price",
      "Clock in the rules",
      "CY 2025 average",
      "What it gets you"
    ],
    rows: [
      [
        "Voluntary declaration, 31 CFR 802.401",
        "No fee",
        "30-day assessment",
        "6.87 days to acceptance, then 30.1 days",
        "Clearance, a request to file a notice, or no conclusion"
      ],
      [
        "Voluntary notice closing in review, 31 CFR 802.501",
        "$7,500",
        "45-day review",
        "45.4 days, median 45.0",
        "Written notice that all action is concluded"
      ],
      [
        "Notice that goes to investigation",
        "$7,500",
        "45 more days, plus one 15-day extension",
        "82.8 days, median 91.0",
        "The same finality, or mitigation terms"
      ],
      [
        "File nothing",
        "No fee",
        "No clock, and nothing required one",
        "14 of 347 filings in 2025 were real estate",
        "An agency notice can come up to 3 years after closing"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet puts Prime at 7.00% and the 10-year Treasury at 5.29% as of September 30, 2026, and carries no row for a national security review, because the cost of one is the cost of the days it takes rather than a rate anybody quotes.[25]"
  },
  workedExample: {
    label:
      "Worked example (hypothetical): 118-key airport hotel, $24,000,000, buyer outside the four excepted states",
    body: "Hypothetical, not a transaction, and every input is labeled as an assumption rather than a market rate. A 118-key select-service hotel sits on ground inside the boundary of a large hub airport. Price $24,000,000, or $203,390 a key. The buyer is a foreign person whose home state is not one of the four excepted ones.[17] The hotel is sold as real estate, with the operating company retained by the seller, so this is a part 802 question.[4]\n\nCoverage. The hotel is located within a covered port, paragraph (a) of the covered real estate definition.[2][11] The urbanized-area exception does not reach it, because that exception carves out paragraph (a).[4] A fee purchase affords all four property rights where the test is three.[15] So this is a covered real estate transaction under section 802.212(a), in a major metro.[16]\n\nThe fee. $24,000,000 is at or above $5,000,000 and below $50,000,000, so a notice costs $7,500.[7] As a share of price, 7,500 divided by 24,000,000 is 0.0003125, or 0.03 percent. A declaration is free.[5]\n\nThe days. On the 2025 averages, the declaration route runs 6.87 days to acceptance plus 30.1 days of assessment, or 36.97 days. A notice closing in review averaged 45.4 days, and one going to investigation averaged 82.8 days.[1] The gap between the slowest average path and the declaration path is 82.8 minus 36.97, or 45.83 days.\n\nWhat those days cost. Carried on the whole $24,000,000 at the 7.00 percent Prime rate on the October 2026 rate sheet: 24,000,000 times 0.07 is $1,680,000 a year, divided by 365 is $4,602.74 a day, times 45.83 days is $210,944.[25] That is 28 times the $7,500 notice fee. The filing fee is not the cost of CFIUS. The calendar is.\n\nEvery figure above was recomputed by scripts/check-foreign-buyer-math.mjs."
  },
  faq: [
    {
      q: "Does a foreign buyer need government approval to buy my hotel?",
      a: "No. There is no approval to apply for. CFIUS reviews a covered transaction and can recommend action to the President, but part 802 provides only for a voluntary declaration or notice.[5][6]"
    },
    {
      q: "Can a Chinese company buy a hotel in the United States?",
      a: "Federally, yes, subject to CFIUS review. State law is the harder test: Florida bars a foreign principal of the People's Republic of China from Florida real property, and Texas bars designated-country entities from commercial real property.[23][24]"
    },
    {
      q: "My hotel is next to an Air Force base. Is that a problem?",
      a: "Possibly. Covered real estate includes land within one mile of an installation named in part 1 or part 2 of appendix A, and the urbanized-area exception does not reach that leg.[2][3][4] Check the address against the list."
    },
    {
      q: "Does an airport hotel count as a covered port?",
      a: "If the hotel is in, within, or functions as part of a large hub airport, a high-volume cargo airport, an FAA joint use airport, a strategic seaport or a top 25 tonnage, container or dry bulk port, then yes.[2][11]"
    },
    {
      q: "How much does a CFIUS notice cost?",
      a: "The fee runs on transaction value: nothing below $500,000, $750 to under $5,000,000, $7,500 to under $50,000,000, $75,000 to under $250,000,000, $150,000 to under $750,000,000, and $300,000 above that.[7] A declaration is free."
    },
    {
      q: "Is a Canadian buyer treated differently?",
      a: "Yes, if it qualifies as an excepted real estate investor. Treasury names Australia, Canada, New Zealand and the United Kingdom as excepted real estate foreign states, the UK entry excluding its overseas territories and Crown dependencies.[17]"
    },
    {
      q: "What if we just close and file nothing?",
      a: "Permitted, since nothing required a filing. But an agency notice can be filed up to three years after the completion date, and longer if the Committee's Chairperson files it, so the question stays open.[6]"
    },
    {
      q: "Does CFIUS apply when a foreign lender forecloses on a hotel?",
      a: "It can. Note 1 to section 802.212 says a transaction arising from a bankruptcy or other default on debt is a covered real estate transaction.[16] Lending transactions get their own treatment in section 802.303."
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "Annual Report to Congress, CY 2025: 347 covered transactions assessed or reviewed; 140 declarations submitted, 7 of them covered real estate transactions under 31 CFR part 802; 207 notices accepted, 7 of them real estate notices; investigations on 114 of the 207; 8 notices extended; 6.87 average days to accept a declaration; Table I-4 (30.1 average, 30.0 median days to complete a declaration assessment); Table I-6 (45.4 average and 45.0 median days closing in review, 82.8 average and 91.0 median closing in investigation), all net of days tolled during the appropriations lapses",
      url: "https://www.cfius.gov/files/2025-cfius-annual-report.pdf",
      publisher:
        "Committee on Foreign Investment in the United States, U.S. Department of the Treasury",
      accessed: "2026-10-26"
    },
    {
      n: 2,
      label: "31 CFR 802.211, covered real estate",
      url: "https://www.law.cornell.edu/cfr/text/31/802.211",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 3,
      label:
        "31 CFR 802.203, close proximity, the area extending one mile outward from the boundary",
      url: "https://www.law.cornell.edu/cfr/text/31/802.203",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 4,
      label:
        "31 CFR 802.216, excepted real estate transaction, including the urbanized area and urban cluster exception at (c), the single housing unit at (d), the foreign air carrier and retail concession at (e), the 10 percent commercial space test at (f), and examples 1, 3, 4, 6 and 8",
      url: "https://www.law.cornell.edu/cfr/text/31/802.216",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 5,
      label: "31 CFR 802.401, procedures for declarations: a party \"may submit a voluntary declaration\"",
      url: "https://www.law.cornell.edu/cfr/text/31/802.401",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 6,
      label:
        "31 CFR 802.501, procedures for notices: voluntary notice at (a), the Staff Chairperson's information request at (b), agency notice at (c), and the three-year limit on an agency notice at (d)",
      url: "https://www.law.cornell.edu/cfr/text/31/802.501",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 7,
      label: "31 CFR 802.1101, amount of fee, the six transaction-value bands effective May 1, 2020",
      url: "https://www.law.cornell.edu/cfr/text/31/802.1101",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 8,
      label:
        "Section 692.203, Florida Statutes (2025): purchase of real property on or within 10 miles of any military installation or critical infrastructure facility by foreign principals, the July 1, 2023 grandfathering, the registration duty and the $1,000 per day late penalty",
      url:
        "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0692/Sections/0692.203.html",
      publisher: "Florida Legislature",
      accessed: "2026-10-26"
    },
    {
      n: 9,
      label:
        "Section 692.201, Florida Statutes (2025): definitions of foreign country of concern, foreign principal and critical infrastructure facility",
      url:
        "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0692/Sections/0692.201.html",
      publisher: "Florida Legislature",
      accessed: "2026-10-26"
    },
    {
      n: 10,
      label:
        "50 U.S.C. 4565 (section 721 of the Defense Production Act of 1950): covered transaction and real estate coverage at (a)(4)(B)(ii), the periodic review of the site list at (a)(4)(C)(iii) added by Pub. L. 119-60 section 8102, December 18, 2025, mandatory declarations at (b)(1)(C)(v)(IV), the 45-day investigation and one 15-day extension at (b)(2)(C), and the President's 15-day announcement at (d)(2)",
      url: "https://www.law.cornell.edu/uscode/text/50/4565",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 11,
      label: "31 CFR 802.210, covered port, the five Department of Transportation lists",
      url: "https://www.law.cornell.edu/cfr/text/31/802.210",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 12,
      label:
        "31 CFR 802.217, extended range, the area extending 99 miles outward from the outer boundary of close proximity",
      url: "https://www.law.cornell.edu/cfr/text/31/802.217",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 13,
      label:
        "49 U.S.C. 40102: large hub airport means a commercial service airport that has at least 1.0 percent of the passenger boardings",
      url: "https://www.law.cornell.edu/uscode/text/49/40102",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 14,
      label:
        "Appendix A to 31 CFR part 802, list of military installations and other U.S. Government sites, in four parts",
      url: "https://www.law.cornell.edu/cfr/text/31/appendix-A_to_part_802",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 15,
      label: "31 CFR 802.233, property right, the four rights and the whether-or-not-exercised rule",
      url: "https://www.law.cornell.edu/cfr/text/31/802.233",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 16,
      label:
        "31 CFR 802.212, covered real estate transaction, the three-property-right test at (a), the subsequent change at (b), and note 1 on bankruptcy and default",
      url: "https://www.law.cornell.edu/cfr/text/31/802.212",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 17,
      label:
        "Excepted foreign states and excepted real estate foreign states: Australia, Canada and the United Kingdom of Great Britain and Northern Ireland from February 13, 2020, New Zealand from January 5, 2022, the UK entry excluding the British Overseas Territories and Crown Dependencies",
      url: "https://www.cfius.gov/resources/excepted-foreign-states/",
      publisher:
        "Committee on Foreign Investment in the United States, U.S. Department of the Treasury",
      accessed: "2026-10-26"
    },
    {
      n: 18,
      label:
        "31 CFR 802.1103, valuation, including the sum-of-payments rule for a lease at (b) and the $40,000,000 purchase example at (i)(1)",
      url: "https://www.law.cornell.edu/cfr/text/31/802.1103",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 19,
      label: "31 CFR 802.405, the four actions the Committee may take on a declaration",
      url: "https://www.law.cornell.edu/cfr/text/31/802.405",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 20,
      label: "31 CFR 802.403, beginning of the 30-day assessment period",
      url: "https://www.law.cornell.edu/cfr/text/31/802.403",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 21,
      label: "31 CFR 802.503, beginning of the 45-day review period and the three acceptance conditions",
      url: "https://www.law.cornell.edu/cfr/text/31/802.503",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 22,
      label:
        "31 CFR 802.901, penalties and damages: up to $5,000,000 per violation for a material misstatement, omission or false certification, and the greatest-of measure for breach of a mitigation agreement entered into on or after December 26, 2024",
      url: "https://www.law.cornell.edu/cfr/text/31/802.901",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-26"
    },
    {
      n: 23,
      label:
        "Senate Bill 17, 89th Texas Legislature, Regular Session, enrolled: Subchapter H, chapter 5, Property Code, sections 5.251 to 5.259, effective September 1, 2025",
      url: "https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00017F.htm",
      publisher: "Texas Legislature Online",
      accessed: "2026-10-26"
    },
    {
      n: 24,
      label:
        "Section 692.204, Florida Statutes (2025): purchase of real property by foreign principals of the People's Republic of China",
      url:
        "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0692/Sections/0692.204.html",
      publisher: "Florida Legislature",
      accessed: "2026-10-26"
    },
    {
      n: 25,
      label: "Matthews Hotel Markets October 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-10-26"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/how-long-it-takes",
      "/sell-a-hotel/tax-clearance-and-withholding",
      "/sell-a-hotel/franchise-transfer",
      "/sell-a-hotel/liquor-license-transfer",
      "/sell-a-hotel/what-buyers-look-for"
    ],
    glossary: ["/glossary/going-concern-value", "/glossary/ground-lease"],
    data: ["/rates"]
  },
  cta: { label: "Talk to the hotel sales desk", href: "/contact" },
  brandSentence:
    "Matthews Hotel Markets sells hotels and represents buyers, and on a cross-border bid the question to settle before the purchase agreement is signed is who the buyer is and where the hotel sits, not whether a foreign buyer is allowed at all."
};
