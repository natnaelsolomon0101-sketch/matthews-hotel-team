/**
 * How much does a Hilton Garden Inn franchise cost in 2026?
 * /hotel-franchise-costs/hilton-garden-inn
 *
 * Source: 2026 US Hilton Garden Inn FDD, issued March 30, 2026, read for Items
 * 5, 6, 7, 10, 17 and 19 on 2026-09-18. Page numbers are the FDD's printed
 * page numbers. Do not hand-edit figures without re-reading the FDD and
 * bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";
import {
  HILTON_BRAND_SENTENCE,
  HILTON_DATA_POINT,
  HILTON_GLOSSARY,
  HILTON_LAST_UPDATED,
  hiltonSiblings,
  hiltonSources,
  sharedSections,
  type HiltonShared,
} from "./hilton-shared";

const PATH = "/hotel-franchise-costs/hilton-garden-inn";

const shared: HiltonShared = {
  short: "Hilton Garden Inn",
  pages: {
    item10: "46",
    item17Term: "72",
    item17Transfer: "79",
    liquidatedDamages: "28",
    note8: "34",
    transferFees: "27",
    comfortLetter: "27",
  },
  termLead:
    "Hilton's 2026 Hilton Garden Inn FDD sets the term at generally 22 years from the effective date for new construction and 10 to 20 years from opening for a conversion, with no right to renew.[1]",
  relicensingFee: "$100,000",
  changeOfOwnershipFee: "$200,000",
  preOpeningDamages: "the system's average monthly royalty fees multiplied by 60",
  earlyDamagesFloor: "the system's average monthly royalty fees multiplied by 60",
  usesSystemAverage: true,
  negotiatedSentence:
    "It agreed to modify the monthly royalty fee in 24 instances during 2025 (Item 6, p. 32), and in 2025 franchisees paid application fees from $50,000 to $100,000 for new development or conversion, $0 to $200,000 for a change of ownership and $0 to $100,000 for re-licensing (Item 5, p. 19).[1]",
  forSaleSentence:
    "Hilton-family hotels on the market are listed at [Hilton hotels for sale](/hotels-for-sale/hilton).",
};

export const page: AnswerPage = {
  slug: "hilton-garden-inn",
  cluster: "hotel-franchise-costs",
  isHub: false,
  title: "Hilton Garden Inn Franchise Cost 2026: FDD Fees",
  h1: "How much does a Hilton Garden Inn franchise cost in 2026?",
  description:
    "Hilton Garden Inn franchise costs from the 2026 FDD: $100,000 application fee, 5.5% royalty, 4% program fee, and $25.5M to $37.4M for 134 rooms.",
  lastUpdated: HILTON_LAST_UPDATED,
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How much does a Hilton Garden Inn franchise cost?",
    "What are Hilton Garden Inn franchise fees?",
    "What is the Hilton Garden Inn royalty percentage?",
    "What does Hilton charge when a Hilton Garden Inn is sold?",
  ],
  answer:
    "Hilton's 2026 Hilton Garden Inn Franchise Disclosure Document, issued March 30, 2026, estimates $25,499,320 to $37,352,033 to open a typical 134-room hotel, excluding real estate. The franchise application fee is $100,000, the monthly royalty is 5.5 percent of gross rooms revenue, the monthly program fee is 4 percent, and Hilton Honors is 3.3 percent of total eligible guest folio.[1]",
  takeaways: [
    "Item 7 total: $25,499,320 to $37,352,033 for 134 rooms, which is about $190,300 to $278,700 per room by our arithmetic, before land.[1]",
    "Ongoing: 5.5 percent royalty plus 4 percent program fee on gross rooms revenue, and a Hilton Honors charge of 3.3 percent of total eligible guest folio.[1]",
    "A buyer of an existing Hilton Garden Inn pays a $200,000 change of ownership application fee and a $10,000 PIP fee, then funds the PIP itself.[1]",
    "An optional Hilton restaurant brand carries a $75,000 development services fee per restaurant brand.[1]",
    "The FDD is Hilton's document and its fees change every year. Get the current FDD from Hilton before relying on these figures.",
  ],
  sections: [
    {
      h2: "What does a Hilton Garden Inn franchise cost up front?",
      lead: "A $100,000 franchise application fee for a new build or a conversion, plus $400 for each guest room or suite over 150, under Item 5 of the 2026 Hilton Garden Inn FDD.[1]",
      body: "Item 5 (pp. 17-18) lists the other initial fees paid to Hilton or its affiliates. A change of ownership application is $200,000 and a re-licensing application is $100,000. The PIP fee, charged to prepare a property improvement plan for a conversion, change of ownership or re-licensing, is $10,000. The OnQ computer system costs $30,016 to $118,322 for hardware, software and installation, other start-up fees are $5,100, training program fees run $5,000 to $20,000, and the opening process services fee is $6,000. Restaurant brands are optional, and each one selected carries a $75,000 development services fee, half at signing and half when the restaurant opens.[1]\n\nThe application fee is refundable, less a $7,500 processing fee, if Hilton denies the application, if the applicant withdraws before approval, or if a change of ownership does not occur (Item 5, Note 1, p. 18).[1]",
    },
    {
      h2: "What are the Hilton Garden Inn royalty and program fees?",
      lead: "The monthly royalty fee is 5.5 percent of gross rooms revenue and the monthly program fee is 4 percent of gross rooms revenue, both due by the 15th of the following month.[1]",
      body: "Item 6 (p. 21) bases both fees on gross rooms revenue as defined under the Uniform System of Accounts for the Lodging Industry, including loyalty redemption revenue, mandatory guest fees and guaranteed no-show revenue (Note 1, p. 32).[1] Hilton may change the program fee at any time, but the rate will not exceed the current rate plus 1 percent of gross rooms revenue over the term of the agreement (Note 2, p. 32).[1] The Item 6 table lists no royalty on food and beverage revenue.[1]\n\nOther recurring charges sit on top. Hilton Honors is currently 3.3 percent of total eligible guest folio, waived for stays where the guest enrolls at the property. The Hilton Advance fee is 1.35 percent of eligible digital direct revenue, capped at $30 per stay (p. 25).[1] OnQ connectivity is $400 to $600 per month and hardware and software maintenance is $1,148 to $2,922 per month (p. 22).[1] These charges apply to different bases, so they do not add into one percentage.",
    },
    {
      h2: "What does the Item 7 estimate cover, and what is it per room?",
      lead: "Item 7 of the 2026 Hilton Garden Inn FDD totals $25,499,320 to $37,352,033 for a 134-room hotel, excluding real estate.[1]",
      body: "Divided by 134 rooms, that is about $190,300 to $278,700 per room. The division is ours. The FDD does not print a per-room figure.[1] Construction and leasehold improvements are the largest line at $18,354,015 to $26,654,355, and furniture, fixtures and equipment are $2,366,737 to $3,484,640 (pp. 35-37).[1] The cover page adds that up to $339,322 of the total is paid to Hilton or its affiliates.[1]\n\nRead the exclusions. Item 7 states in capitals that the figures do not include real estate costs, market studies, insurance or interest, and do not separately identify the cost of improvements under a conversion, re-licensing or change of ownership license (p. 37).[1] A buyer of an existing Hilton Garden Inn should expect a PIP scope from Hilton, not an Item 7 number. Per-room pricing is defined at [price per key](/glossary/per-key).",
    },
    {
      h2: "What does Hilton report about Hilton Garden Inn performance?",
      lead: "Item 19 of the 2026 Hilton Garden Inn FDD reports a 2025 average room rate of $160.66, average occupancy of 71.4 percent and average RevPAR of $114.75 across 617 comparable U.S. hotels.[1]",
      body: "Comparable hotels are those open since January 1 of the previous year, excluding hotels that changed brand or ownership type, had large-scale capital projects, or lack comparable results. Of 762 U.S. Hilton Garden Inn hotels at December 31, 2025, 617 were comparable, and 614 of those were franchisee-managed (p. 84).[1] Medians were a $148.48 room rate, 70.7 percent occupancy and $105.35 RevPAR. The ranges were $91.21 to $335.82 for room rate, 38.6 to 98.1 percent for occupancy and $46.72 to $326.13 for RevPAR. Of franchisee-managed hotels, 209, or 34.0 percent, met or exceeded the average RevPAR (pp. 84-85).[1]\n\nThe average RevPAR index was 113.2 and the median 114.5, with a range from 65.8 to 262.2, where 100 is a fair share of the competitive set. Hilton cites STR and Hilton as the source and excludes 4 hotels with insufficient data (p. 86).[1] Hilton Honors members accounted for an average 78.2 percent of occupied room nights, with a range from 39.6 to 95.6 percent (pp. 86-87).[1] For the 110 comparable hotels opened during or after 2018, the averages were a $169.73 room rate, 72.8 percent occupancy, $123.57 RevPAR and a 118.4 RevPAR index (pp. 87-90).[1]\n\nItem 19 reports revenue measures only. It gives no expenses, no food and beverage results, no profit and no return on investment, and none can be derived from it. Hilton writes: \"Some hotels have achieved the results shown above. Your individual results may differ. There is no assurance that your Hotel will achieve the results shown above\" (p. 90).[1] The measures are defined at [RevPAR](/glossary/revpar) and [MPI, ARI and RGI](/glossary/mpi-ari-rgi).",
    },
    ...sharedSections(shared),
  ],
  table: {
    caption:
      "Hilton Garden Inn franchise fees, 2026 FDD issued March 30, 2026 (Items 5, 6 and 7)",
    columns: ["Fee", "Amount", "Where in the FDD"],
    rows: [
      ["Application fee, new development or conversion", "$100,000 plus $400 per guest room or suite over 150[1]", "Item 5, p. 17"],
      ["Application fee, change of ownership", "$200,000[1]", "Item 5, p. 17"],
      ["Application fee, re-licensing", "$100,000[1]", "Item 5, p. 17"],
      ["PIP fee", "$10,000[1]", "Item 5, p. 17"],
      ["OnQ system: hardware, software, installation", "$30,016 to $118,322[1]", "Item 5, p. 17"],
      ["Restaurant brand development services fee (optional)", "$75,000 per restaurant brand[1]", "Item 5, p. 17"],
      ["Monthly royalty fee", "5.5% of gross rooms revenue[1]", "Item 6, p. 21"],
      ["Monthly program fee", "4% of gross rooms revenue. May change, capped at the current rate plus 1%[1]", "Item 6, pp. 21 and 32"],
      ["Hilton Honors", "3.3% of total eligible guest folio[1]", "Item 6, p. 25"],
      ["Hilton Advance fee", "1.35% of eligible digital direct revenue, up to $30 per stay[1]", "Item 6, p. 25"],
      ["OnQ connectivity, and hardware and software maintenance", "$400 to $600 and $1,148 to $2,922 per month[1]", "Item 6, p. 22"],
      ["Room addition fee", "$400 per added guest room or suite[1]", "Item 6, p. 22"],
      ["Permitted transfer processing fee", "$5,500[1]", "Item 6, p. 27"],
      ["Lender comfort letter", "$3,500, and $1,500 for an assignment[1]", "Item 6, p. 27"],
      ["Liquidated damages, after year 2", "Hotel's average monthly royalty fees x 60, or x months remaining in the final 60 months[1]", "Item 6, pp. 28-29"],
      ["Estimated initial investment, 134 rooms", "$25,499,320 to $37,352,033, excluding real estate[1]", "Item 7, p. 37"],
    ],
  },
  originalDataPoint: HILTON_DATA_POINT,
  workedExample: {
    label: "Hypothetical: one year of Hilton Garden Inn brand fees on assumed rooms revenue",
    body: "Hypothetical. Assume a Hilton Garden Inn earns $3,000,000 of gross rooms revenue in a year, and that $1,200,000 of guest folios are eligible Hilton Honors folios. Both figures are assumptions chosen for round arithmetic. They are not forecasts and they are not from the FDD.\n\nMonthly royalty fee at 5.5 percent: $3,000,000 x 0.055 = $165,000.[1]\n\nMonthly program fee at 4 percent: $3,000,000 x 0.04 = $120,000.[1]\n\nHilton Honors at 3.3 percent of eligible folio: $1,200,000 x 0.033 = $39,600.[1]\n\nOnQ connectivity plus hardware and software maintenance: $1,548 to $3,522 per month, or $18,576 to $42,264 a year.[1]\n\nTotal of these four lines: $343,176 to $366,864. Hilton Advance fees, third-party reservation charges, travel planner commissions, training and guest assistance charges are extra and depend on how guests book, so they are left out. The example shows fees only. It says nothing about profit.",
  },
  faq: [
    {
      q: "How much does it cost to open a Hilton Garden Inn?",
      a: "Hilton's 2026 FDD, issued March 30, 2026, estimates $25,499,320 to $37,352,033 for a typical 134-room Hilton Garden Inn, excluding real estate, market studies, insurance and interest. Up to $339,322 of that is paid to Hilton or its affiliates.[1]",
    },
    {
      q: "What is the Hilton Garden Inn royalty fee?",
      a: "5.5 percent of gross rooms revenue, paid monthly, plus a 4 percent monthly program fee. Hilton reports it agreed to modify the royalty in 24 instances during 2025, so the rate is sometimes negotiated.[1]",
    },
    {
      q: "I'm buying an existing Hilton Garden Inn. What will Hilton charge me?",
      a: "A $200,000 change of ownership application fee and a $10,000 PIP fee, under the 2026 FDD. You sign Hilton's then-current franchise agreement and agree to its requested upgrades. In 2025, buyers paid from $0 to $200,000.[1]",
    },
    {
      q: "How long does a Hilton Garden Inn franchise last?",
      a: "Generally 22 years from the effective date for new construction and 10 to 20 years from opening for a conversion. A buyer generally takes the remaining term or another term Hilton approves. There is no right to renew.[1]",
    },
    {
      q: "How much does a Hilton Garden Inn owner make?",
      a: "The FDD does not say. Item 19 reports room rate, occupancy, RevPAR, RevPAR index and Hilton Honors contribution for comparable hotels. It reports no expenses or profit, and Hilton states there is no assurance any hotel will achieve the results shown.[1]",
    },
    {
      q: "Does Hilton charge a royalty on Hilton Garden Inn restaurant revenue?",
      a: "Item 6 of the 2026 FDD charges the 5.5 percent royalty and the 4 percent program fee on gross rooms revenue. An optional Hilton restaurant brand is covered by a separate amendment with a $75,000 development services fee.[1]",
    },
    {
      q: "What does it cost to terminate a Hilton Garden Inn franchise early?",
      a: "After the second anniversary of opening, liquidated damages are the hotel's average monthly royalty fees multiplied by 60, or by the months remaining in the final 60 months of the term.[1]",
    },
  ],
  sources: hiltonSources(
    "2026 Hilton Garden Inn Franchise Disclosure Document (issued March 30, 2026): cover page; Item 5, pp. 16-20; Item 6, pp. 21-35; Item 7, pp. 35-39; Item 10, pp. 46-47; Item 17, pp. 71-83; Item 19, pp. 83-90",
    "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-HGI.pdf",
  ),
  related: {
    hub: "/hotel-franchise-costs",
    siblings: hiltonSiblings(PATH),
    glossary: HILTON_GLOSSARY,
    data: ["/rates"],
  },
  cta: { label: "Talk through a Hilton Garden Inn purchase, sale or PIP", href: "/contact" },
  brandSentence: HILTON_BRAND_SENTENCE,
};

export default page;
