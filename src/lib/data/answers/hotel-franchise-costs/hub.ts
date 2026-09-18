/**
 * How much does a hotel franchise cost?
 * Cluster hub: /hotel-franchise-costs
 *
 * Written 2026-09-18. Every figure was read in its source on that date: the
 * eight 2026 Hilton-family FDDs (issued March 30, 2026) and 16 CFR 436.5.
 * The comparison table lists one row per brand guide in this cluster. When a
 * brand guide is added, add its row and its source here.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "index",
  cluster: "hotel-franchise-costs",
  isHub: true,
  title: "How Much Does a Hotel Franchise Cost? (2026 FDDs)",
  h1: "How much does a hotel franchise cost?",
  description:
    "What a hotel franchise costs in 2026, read from the brands' public Franchise Disclosure Documents: application fees, royalties, program fees and Item 7.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How much does a hotel franchise cost?",
    "How much does a Hampton Inn franchise cost?",
    "What are hotel franchise fees as a percent of revenue?",
    "What is in a hotel Franchise Disclosure Document?",
    "How do I read Item 7 and Item 19 of a hotel FDD?",
    "I'm buying a franchised hotel. What will the brand charge me at closing?",
  ],
  answer:
    "A hotel franchise costs an application fee up front, a percentage of rooms revenue every month, and the cost of building or renovating to the brand's standard. Hilton's Hampton disclosure document issued March 30, 2026 lists a $100,000 application fee, a 6 percent royalty, a 4 percent program fee, and an estimated initial investment of $17,043,739 to $24,732,532 for an 89-room hotel, before land.[1]",
  takeaways: [
    "The numbers live in each brand's Franchise Disclosure Document (FDD). Items 5 and 6 list fees, Item 7 estimates the initial investment, Item 17 covers term and transfer, and Item 19 holds any performance figures.[1]",
    "Across the eight Hilton brands covered here, Item 7 estimates run from $3,251,531 for a 100-room Spark conversion[2] to $126,260,147 for a 225-room DoubleTree Suites,[3] all excluding real estate.",
    "Monthly royalties in those eight FDDs run from 5 to 6 percent of gross rooms revenue, with Homewood Suites starting new hotels at 3.5 percent, and program fees run from 2.5 to 4 percent.[1][3][4]",
    "A buyer of an existing franchised hotel applies for a new franchise. Hampton's change of ownership application fee is $200,000, plus a $10,000 PIP fee, before the cost of the PIP itself.[1]",
    "The FDD is the franchisor's document and fees change every year. Get the current FDD from the franchisor before you rely on any figure here.",
  ],
  sections: [
    {
      h2: "Where do hotel franchise costs come from?",
      lead: "From the Franchise Disclosure Document, which federal rules require a franchisor to give a prospective franchisee before a sale.",
      body: "The Federal Trade Commission's Franchise Rule sets the contents of the FDD item by item at 16 CFR 436.5.[5] Hilton's own guide at the front of the 2026 Hampton FDD points a reader to the items that carry the money: Items 5 and 6 list the fees paid to the franchisor or at its direction, Item 7 lists the initial investment to open, and Item 19 may give information about sales, costs, profits or losses. The cover page says a prospective franchisee must receive the document at least 14 calendar days before signing a binding agreement or paying anything.[1] The term is defined at [franchise disclosure document](/glossary/franchise-fdd).\n\nThe FDD is written by the franchisor. It is a disclosure, not an offer, and it is reissued every year. Every figure in this cluster is quoted from the document named in the sources, with the item and the printed page. These are neutral fee guides. They do not rank brands or recommend one. Ask the franchisor for the current FDD before you sign anything.",
    },
    {
      h2: "What does Item 5 of a hotel FDD cover?",
      lead: "Item 5 lists the initial fees paid to the franchisor before the hotel opens, and the conditions under which they are refundable.[5]",
      body: "In a hotel FDD the main Item 5 fee is the franchise application fee, and it depends on the kind of deal. Hampton's 2026 FDD charges $100,000 plus $400 per guest room over 150 for a new development or conversion, $200,000 for a change of ownership and $100,000 for re-licensing an existing franchisee. A $10,000 fee pays for Hilton to prepare the property improvement plan, or [PIP](/glossary/pip), on a conversion, change of ownership or re-licensing.[1] Item 5 also holds the brand's computer system, training and opening charges.\n\nThe rule requires a franchisor whose initial fees are not uniform to disclose the range or formula for fees paid in the prior fiscal year.[5] That sentence is worth finding. Hampton's says franchisees paid application fees from $0 to $100,000 for new development or conversion and $25,000 to $200,000 for a change of ownership in 2025, which tells you the printed fee is sometimes negotiated.[1]",
    },
    {
      h2: "What does Item 6 cover?",
      lead: "Item 6 is the table of every other fee paid to the franchisor or its affiliates, including the formula used to compute each one.[5]",
      body: "For a hotel, the two large lines are the royalty and the program or marketing fee, both charged as a percentage of gross rooms revenue. In Hilton's 2026 FDDs the monthly royalty is 6 percent for Hampton and Home2 Suites, 5.5 percent for Hilton Garden Inn, Tru and Spark, and 5 percent for Tapestry Collection and DoubleTree.[1][2][3][6][7][8][9] Homewood Suites steps a new hotel's royalty from 3.5 percent in year one to 4.5 percent in year two and 5.5 percent after that.[4] Program fees run from 2.5 percent at Homewood Suites to 4 percent at Hampton.[1][4]\n\nItem 6 also carries the loyalty program charge, which Hilton bills on total eligible guest folio, not on rooms revenue: 4.6 percent at Hampton and 1.7 percent at Homewood Suites, for example.[1][4] Because the bases differ, the percentages cannot be added into one rate. Technology fees, transfer and lender comfort letter fees, and the liquidated damages formula for early termination are in the same table. Hampton's formula after the second year is the hotel's average monthly royalty fees multiplied by 60.[1]",
    },
    {
      h2: "What does Item 7 cover, and what does it leave out?",
      lead: "Item 7 is the franchisor's low-to-high estimate of the initial investment to open, laid out in a required table that includes a line for additional funds during the initial period.[5]",
      body: "Hotel Item 7 tables are built around a prototype of a stated size, which lets a reader divide by rooms. Hampton's 2026 estimate is $17,043,739 to $24,732,532 for an 89-room hotel, about $191,500 to $277,900 per room by our arithmetic.[1] Three cautions apply. First, Hilton's Item 7 totals exclude real estate, market studies, insurance and interest. Second, they do not separately identify the cost of improvements under a conversion, re-licensing or change of ownership, so a buyer of an existing hotel cannot use them to price a PIP.[1] Third, ranges can be very wide: the Tapestry Collection estimate for 125 rooms runs from $2,861,047 to $70,253,147 because construction is shown as $0 to $45,954,000.[9]\n\nSpark by Hilton is the exception on conversions. It is offered for conversions only, and its Item 7 prices a standard 100-room conversion at $3,251,531 to $5,906,193, with mechanical, electrical, roofing, HVAC, life safety and structural work outside the estimate.[2] Per-room pricing is defined at [price per key](/glossary/per-key).",
    },
    {
      h2: "What does Item 17 tell a buyer or a seller?",
      lead: "Item 17 is the table of renewal, termination, transfer and dispute resolution terms, cross-referenced to the franchise agreement.[5]",
      body: "Three rows matter most in a hotel deal. The term: Hampton's is generally 22 years from the effective date for new construction and 10 to 20 years from opening for a conversion, and Spark's conversion term is generally 10 to 15 years.[1][2] Renewal: Hilton's franchisees do not have the right to renew or extend, and a re-licensing is at Hilton's discretion on the then-current contract.[1] Transfer: a sale that changes control requires 60 days' written notice, and the buyer must qualify as a new franchisee, pay the application fee, sign the then-current [franchise agreement](/glossary/franchise-agreement) and agree to the brand's requested upgrades.[1]\n\nThat last row is why a franchised hotel sale runs on the brand's calendar as well as the lender's. The seller's side is at [What is involved in selling a hotel?](/sell-a-hotel), and the buyer's side is at [How do I buy a hotel?](/buy-a-hotel).",
    },
    {
      h2: "What can Item 19 tell me, and what can it not?",
      lead: "Item 19 holds any financial performance representation the franchisor chooses to make, and a franchisor that makes one must have a reasonable basis and written substantiation for it.[5]",
      body: "Seven of the eight Hilton FDDs covered here make a representation. Hampton's reports a 2025 average room rate of $149.08, average occupancy of 71.0 percent, average RevPAR of $105.90 and an average RevPAR index of 120.8 for 1,893 comparable U.S. hotels, with the median, the range and the share of hotels that met each average.[1] Spark's reports only a RevPAR index.[2] Tapestry Collection makes no representation at all and carries the statement the rule requires in that case: \"We do not make any representations about a franchisee's future financial performance or the past financial performance of company-owned or franchised outlets.\"[5][9]\n\nRead what is absent. Hilton's Item 19 tables are rooms revenue measures. They contain no expenses, no profit and no return on investment, and none can be derived from them. Each one ends with Hilton's statement that individual results may differ and that there is no assurance a hotel will achieve the results shown.[1] The measures are defined at [RevPAR](/glossary/revpar).",
    },
    {
      h2: "Is key money in the FDD?",
      lead: "The possibility is, in Item 10. The amount is not.",
      body: "Item 10 discloses financing the franchisor offers.[5] Hilton's 2026 Hampton FDD says Hilton generally does not offer financing but may, in its sole discretion, offer a development incentive on a new hotel. The incentive is documented by a note, bears no interest, and does not have to be repaid unless the franchise terminates before the end of the term or the hotel is transferred. The repayable amount falls by an equal share each year, and on a sale the seller repays the balance unless Hilton lets the buyer assume the note.[1] The term is defined at [key money](/glossary/key-money).",
    },
    {
      h2: "How do I pay for franchise fees, a PIP or a conversion?",
      lead: "With equity and a loan sized to the hotel's income. The franchise costs sit inside the project budget your lender underwrites.",
      body: "As of September 17, 2026, Prime is 7.00 percent, SOFR is 3.85 percent and the SBA 7(a) maximum allowable rate is 10.00 percent.[10] Lenders do not publish their spreads or leverage limits, so the only real quote is a written one. The loan structures are at [How do I finance converting my hotel to a new brand?](/hotel-financing/brand-conversion-financing) and [How do I finance a hotel PIP or renovation?](/hotel-financing/pip-and-renovation-loans). The trade between a flag and independence is at [Should I buy a branded or independent hotel?](/buy-a-hotel/branded-vs-independent). Flagged hotels on the market are listed at [Hampton Inn hotels for sale](/hotels-for-sale/hampton-inn) and [Hilton hotels for sale](/hotels-for-sale/hilton).",
    },
  ],
  table: {
    caption:
      "Hotel franchise costs by brand, from each brand's 2026 FDD. Hilton-family FDDs were issued March 30, 2026; the other issue dates are in the sources. Item 7 estimates cover the hotel type and room count shown, and the Hilton and Hyatt figures exclude real estate. Columns read across franchisors that define fees differently, so compare within the FDDs before relying on a row.",
    columns: [
      "Brand guide",
      "Application fee: new or conversion / change of ownership",
      "Monthly royalty",
      "Monthly program fee",
      "Loyalty charge",
      "Item 7 estimate",
    ],
    rows: [
      [
        "[Hampton Inn](/hotel-franchise-costs/hampton-inn)",
        "$100,000 / $200,000[1]",
        "6% of gross rooms revenue[1]",
        "4%[1]",
        "4.6% of eligible folio[1]",
        "$17,043,739 to $24,732,532, 89 rooms[1]",
      ],
      [
        "[Hilton Garden Inn](/hotel-franchise-costs/hilton-garden-inn)",
        "$100,000 / $200,000[6]",
        "5.5%[6]",
        "4%[6]",
        "3.3% of eligible folio[6]",
        "$25,499,320 to $37,352,033, 134 rooms[6]",
      ],
      [
        "[Home2 Suites](/hotel-franchise-costs/home2-suites)",
        "$100,000 / $200,000[7]",
        "6%[7]",
        "3.5%[7]",
        "2.0% of eligible folio[7]",
        "$18,075,688 to $26,550,592, 107 suites[7]",
      ],
      [
        "[Homewood Suites](/hotel-franchise-costs/homewood-suites)",
        "$100,000 / $200,000[4]",
        "3.5% year 1, 4.5% year 2, then 5.5%. 5.5% on a change of ownership[4]",
        "2.5%[4]",
        "1.7% of eligible folio[4]",
        "$23,757,245 to $34,728,465, 131 suites[4]",
      ],
      [
        "[Tru by Hilton](/hotel-franchise-costs/tru-by-hilton)",
        "$100,000 / $150,000[8]",
        "5.5%[8]",
        "4%[8]",
        "2% of eligible folio[8]",
        "$14,258,164 to $20,659,558, 98 rooms[8]",
      ],
      [
        "[Spark by Hilton](/hotel-franchise-costs/spark-by-hilton)",
        "$75,000 conversion / $75,000[2]",
        "5.5%[2]",
        "3.5%[2]",
        "2% of eligible folio[2]",
        "$3,251,531 to $5,906,193, 100-room conversion[2]",
      ],
      [
        "[Tapestry Collection](/hotel-franchise-costs/tapestry-collection)",
        "$100,000 / $150,000[9]",
        "5%[9]",
        "4%[9]",
        "4% of eligible folio[9]",
        "$2,861,047 to $70,253,147, 125 rooms[9]",
      ],
      [
        "[DoubleTree](/hotel-franchise-costs/doubletree)",
        "$85,000 / $175,000[3]",
        "5%[3]",
        "4%[3]",
        "4% of eligible folio[3]",
        "$31,454,554 to $108,661,784, 225 rooms[3]",
      ],
      [
        "[Hyatt Place](/hotel-franchise-costs/hyatt-place)",
        "$75,000 plus $500 per room over 150 / $150,000[11]",
        "5%[11]",
        "3.5% commercial services fee[11]",
        "World of Hyatt, 4% of eligible member revenue[11]",
        "$23,431,820 to $29,885,898, 127 rooms, excluding real estate[11]",
      ],
      [
        "[Comfort Inn and Comfort Suites](/hotel-franchise-costs/comfort-inn)",
        "$500 per room, $50,000 minimum / $750 per room, $65,000 minimum[12]",
        "6%[12]",
        "3.5% marketing and reservation fee[12]",
        "Choice Privileges, 4.5% to 5.5% of member room revenue[12]",
        "$822,951 to $3,335,295, 80-room conversion[12]",
      ],
      [
        "[Days Inn](/hotel-franchise-costs/days-inn)",
        "Greater of $35,000 or $350 per room[13]",
        "5.5%[13]",
        "3.8% system assessment[13]",
        "Wyndham Rewards, 4.25% to 5.5%[13]",
        "$248,324 to $3,627,625, 100-room conversion[13]",
      ],
      [
        "[Super 8](/hotel-franchise-costs/super-8)",
        "Greater of $25,000 or $250 per room[14]",
        "5.5%[14]",
        "3% system assessment[14]",
        "Wyndham Rewards, 4.25% to 5.5%[14]",
        "$285,156 to $2,626,641, 100-room conversion[14]",
      ],
      [
        "[La Quinta](/hotel-franchise-costs/la-quinta)",
        "Greater of $55,000 or $550 per room[15]",
        "5.5% for 24 months, then 6%[15]",
        "3.5% system assessment[15]",
        "Wyndham Rewards, 4.25% to 5.5%[15]",
        "$1,670,705 to $7,399,531, 100-room conversion[15]",
      ],
      [
        "[Best Western](/hotel-franchise-costs/best-western)",
        "$4,000 evaluation fee plus $45,000 and $200 per room over 50 (membership entrance fee)[16]",
        "5% of property room revenue (monthly fees)[16]",
        "2.10% marketing and technology fees, plus per-room advertising and annual dues[16]",
        "Best Western Rewards, 5.5% on point-earning stays[16]",
        "$581,925 to $2,557,075, 75-room conversion[16]",
      ],
    ],
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' September 2026 rate sheet records Prime at 7.00% effective September 17, 2026 and the SBA 7(a) maximum allowable rate at 10.00%, the indexes a loan for a franchise fee, a PIP or a conversion is priced against.[10]",
  },
  workedExample: {
    label: "Hypothetical: what a buyer of an existing Hampton Inn pays the brand in year one",
    body: "Hypothetical. A buyer closes on an existing Hampton Inn that then earns $3,000,000 of gross rooms revenue in its first year under the new franchise agreement. The revenue figure is an assumption for arithmetic, not a forecast and not a figure from the FDD.\n\nAt application: a $200,000 change of ownership application fee and a $10,000 PIP fee, together $210,000.[1] If the sale does not close, Hilton refunds the application fee less a $7,500 processing fee.[1]\n\nDuring the year: a royalty at 6 percent, $3,000,000 x 0.06 = $180,000, and a program fee at 4 percent, $3,000,000 x 0.04 = $120,000, together $300,000.[1]\n\nYear-one total of those lines: $510,000. The PIP itself, Hilton Honors charges, technology fees, distribution charges and training come on top. The PIP is set by Hilton's inspection of the building and is not estimated in the FDD, so it is not estimated here.",
  },
  faq: [
    {
      q: "How much does a Hampton Inn franchise cost?",
      a: "Hilton's 2026 Hampton FDD, issued March 30, 2026, lists a $100,000 application fee, a 6 percent royalty, a 4 percent program fee, and an estimated initial investment of $17,043,739 to $24,732,532 for an 89-room hotel, excluding real estate.[1]",
    },
    {
      q: "What percent of revenue goes to the brand?",
      a: "In Hilton's 2026 FDDs, royalty plus program fee runs from 8 percent of gross rooms revenue at Homewood Suites after year two to 10 percent at Hampton. Loyalty, technology and distribution charges are billed on other bases on top.[1][4]",
    },
    {
      q: "Does the Item 7 figure include the land?",
      a: "No. Hilton's 2026 Item 7 totals state that they do not include real estate costs, market studies, insurance or interest.[1]",
    },
    {
      q: "Does a buyer pay a franchise fee when buying an existing branded hotel?",
      a: "Yes. The buyer applies for a new franchise. Hampton's 2026 FDD lists a $200,000 change of ownership application fee and a $10,000 PIP fee, and the buyer agrees to the brand's requested upgrades.[1]",
    },
    {
      q: "Does the FDD tell me how much profit a hotel makes?",
      a: "No. Hilton's Item 19 tables report room rate, occupancy, RevPAR and RevPAR index for comparable hotels. They report no expenses or profit, and the Tapestry Collection FDD makes no performance representation at all.[1][9]",
    },
    {
      q: "Do franchise fees change?",
      a: "Yes. The FDD is reissued every year. Hilton's 2026 documents say the program fee may change at any time, up to the current rate plus 1 percent of gross rooms revenue over the term. Get the current FDD from the franchisor.[1]",
    },
    {
      q: "Can I renew a hotel franchise agreement?",
      a: "Not as of right under Hilton's 2026 FDDs. Item 17 says the franchisee has no right to renew or extend. Hilton may agree to re-license the hotel, on a contract that may differ materially and with PIP conditions.[1]",
    },
  ],
  sources: [
    {
      n: 1,
      label:
        "2026 Hampton Franchise Disclosure Document (issued March 30, 2026): cover page and How to Use This FDD; Item 5, pp. 15-17; Item 6, pp. 20-32; Item 7, pp. 33-36; Item 10, pp. 44-45; Item 17, pp. 69-74; Item 19, pp. 77-84",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18",
    },
    {
      n: 2,
      label:
        "2026 Spark by Hilton Franchise Disclosure Document (issued March 30, 2026): Item 1, p. 6; Item 5, pp. 15-16; Item 6, pp. 20-24; Item 7, pp. 33-35; Item 17, p. 71; Item 19, pp. 80-82",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Spark.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18",
    },
    {
      n: 3,
      label:
        "2026 DoubleTree by Hilton Franchise Disclosure Document (issued March 30, 2026): Item 5, p. 17; Item 6, pp. 23-26; Item 7, pp. 36-39",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-DoubleTree.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18",
    },
    {
      n: 4,
      label:
        "2026 Homewood Suites by Hilton Franchise Disclosure Document (issued March 30, 2026): Item 5, p. 15; Item 6, pp. 20-24; Item 7, pp. 34-36",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Homewood.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18",
    },
    {
      n: 5,
      label: "16 CFR 436.5, Disclosure items (FTC Franchise Rule): Items 5, 6, 7, 10, 17 and 19",
      url: "https://www.law.cornell.edu/cfr/text/16/436.5",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18",
    },
    {
      n: 6,
      label:
        "2026 Hilton Garden Inn Franchise Disclosure Document (issued March 30, 2026): Item 5, p. 17; Item 6, pp. 21-25; Item 7, pp. 35-37",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-HGI.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18",
    },
    {
      n: 7,
      label:
        "2026 Home2 Suites by Hilton Franchise Disclosure Document (issued March 30, 2026): Item 5, p. 16; Item 6, pp. 21-25; Item 7, pp. 36-37",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Home2.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18",
    },
    {
      n: 8,
      label:
        "2026 Tru by Hilton Franchise Disclosure Document (issued March 30, 2026): Item 5, p. 15; Item 6, pp. 20-23; Item 7, pp. 33-34",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Tru.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18",
    },
    {
      n: 9,
      label:
        "2026 Tapestry Collection by Hilton Franchise Disclosure Document (issued March 30, 2026): Item 5, p. 17; Item 6, pp. 22-26; Item 7, pp. 36-38; Item 19, pp. 91-92",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Tapestry.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-09-18",
    },
    {
      n: 10,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18",
    },
    {
      n: 11,
      label: "Hyatt Place Franchise Disclosure Document, issued March 27, 2026, amended August 5, 2026",
      url: "https://apps.dfi.wi.gov/apps/FranchiseSearch/details.aspx?id=640505&hash=1054368882&search=external&type=GENERAL",
      publisher: "Hyatt Franchising, L.L.C., via Wisconsin DFI (file 640505)",
      accessed: "2026-09-18",
    },
    {
      n: 12,
      label: "Comfort Franchise Disclosure Document, issued April 1, 2026",
      url: "https://www.cards.commerce.state.mn.us/documents/%7BB0A9219E-0000-C61B-8F69-FDCF9E1C6035%7D/download?documentClass=FRANCHISE_REGISTRATIONS&contentSequence=0",
      publisher: "Choice Hotels International, via Minnesota Commerce CARDS (document 35771-202604-09)",
      accessed: "2026-09-18",
    },
    {
      n: 13,
      label: "Days Inn Franchise Disclosure Document, issued March 31, 2026",
      url: "https://apps.dfi.wi.gov/apps/FranchiseSearch/details.aspx?id=640621&hash=1766667238&search=external&type=GENERAL",
      publisher: "Days Inns Worldwide, Inc., via Wisconsin DFI (file 640621)",
      accessed: "2026-09-18",
    },
    {
      n: 14,
      label: "Super 8 Franchise Disclosure Document, issued March 31, 2026",
      url: "https://apps.dfi.wi.gov/apps/FranchiseSearch/details.aspx?id=640628&hash=1250533202&search=external&type=GENERAL",
      publisher: "Super 8 Worldwide, Inc., via Wisconsin DFI (file 640628)",
      accessed: "2026-09-18",
    },
    {
      n: 15,
      label: "La Quinta Franchise Disclosure Document, issued March 31, 2026",
      url: "https://apps.dfi.wi.gov/apps/FranchiseSearch/details.aspx?id=640629&hash=1899216290&search=external&type=GENERAL",
      publisher: "La Quinta Franchising LLC, via Wisconsin DFI (file 640629)",
      accessed: "2026-09-18",
    },
    {
      n: 16,
      label: "Best Western 2026 Membership Disclosure Document, issued February 27, 2026",
      url: "https://apps.dfi.wi.gov/apps/FranchiseSearch/details.aspx?id=640279&hash=1862337841&search=external&type=GENERAL",
      publisher: "Best Western International, Inc., via Wisconsin DFI (file 640279)",
      accessed: "2026-09-18",
    },
  ],
  related: {
    hub: "/hotel-franchise-costs",
    siblings: [
      "/hotel-franchise-costs/hampton-inn",
      "/hotel-franchise-costs/hilton-garden-inn",
      "/hotel-franchise-costs/home2-suites",
      "/hotel-franchise-costs/homewood-suites",
      "/hotel-franchise-costs/tru-by-hilton",
      "/hotel-franchise-costs/spark-by-hilton",
      "/hotel-franchise-costs/tapestry-collection",
      "/hotel-franchise-costs/doubletree",
      "/hotel-franchise-costs/hyatt-place",
      "/hotel-franchise-costs/comfort-inn",
      "/hotel-franchise-costs/days-inn",
      "/hotel-franchise-costs/super-8",
      "/hotel-franchise-costs/la-quinta",
      "/hotel-franchise-costs/best-western",
      "/hotel-financing/brand-conversion-financing",
      "/hotel-financing/pip-and-renovation-loans",
      "/buy-a-hotel/branded-vs-independent",
    ],
    glossary: [
      "/glossary/franchise-fdd",
      "/glossary/key-money",
      "/glossary/pip",
      "/glossary/franchise-agreement",
    ],
    data: ["/rates"],
  },
  cta: {
    label: "Talk through a flag change or a branded purchase",
    href: "/contact",
  },
  brandSentence:
    "Matthews Hotel Markets sells and finances franchised hotels, so we read these disclosure documents alongside owners and buyers.",
};

export default page;
