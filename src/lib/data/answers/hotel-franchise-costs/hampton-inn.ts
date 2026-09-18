/**
 * How much does a Hampton Inn franchise cost in 2026?
 * /hotel-franchise-costs/hampton-inn
 *
 * Source: 2026 US Hampton FDD, issued March 30, 2026, read in full for Items
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

const PATH = "/hotel-franchise-costs/hampton-inn";

const shared: HiltonShared = {
  short: "Hampton",
  pages: {
    item10: "45",
    item17Term: "69",
    item17Transfer: "74",
    liquidatedDamages: "27",
    note8: "32",
    transferFees: "25",
    comfortLetter: "26",
  },
  termLead:
    "Hilton's 2026 Hampton FDD sets the term at generally 22 years from the effective date for new construction and 10 to 20 years from opening for a conversion, with no right to renew.[1]",
  relicensingFee: "$100,000",
  changeOfOwnershipFee: "$200,000",
  preOpeningDamages: "the system's average monthly royalty fees multiplied by 60",
  earlyDamagesFloor: "the system's average monthly royalty fees multiplied by 60",
  usesSystemAverage: true,
  negotiatedSentence:
    "It agreed to modify the monthly royalty fee in 75 instances during 2025 (Item 6, p. 30), and in 2025 franchisees paid application fees from $0 to $100,000 for new development or conversion, $25,000 to $200,000 for a change of ownership and $50,000 to $100,000 for re-licensing (Item 5, p. 17).[1]",
  forSaleSentence:
    "Hamptons on the market are listed at [Hampton Inn hotels for sale](/hotels-for-sale/hampton-inn) and [Hilton hotels for sale](/hotels-for-sale/hilton).",
};

export const page: AnswerPage = {
  slug: "hampton-inn",
  cluster: "hotel-franchise-costs",
  isHub: false,
  title: "Hampton Inn Franchise Cost 2026: Fees From the FDD",
  h1: "How much does a Hampton Inn franchise cost in 2026?",
  description:
    "Hampton by Hilton franchise costs from the 2026 FDD: $100,000 application fee, 6% royalty, 4% program fee, and $17.0M to $24.7M to build 89 rooms.",
  lastUpdated: HILTON_LAST_UPDATED,
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How much does a Hampton Inn franchise cost?",
    "What are the Hampton Inn franchise fees and royalty?",
    "What does Hilton charge a buyer when a Hampton Inn changes ownership?",
    "How long is a Hampton Inn franchise agreement?",
    "I'm buying a Hampton Inn. Do I take over the seller's franchise?",
  ],
  answer:
    "Hilton's 2026 Hampton Franchise Disclosure Document, issued March 30, 2026, estimates $17,043,739 to $24,732,532 to open a newly built 89-room Hampton Inn and $19,964,850 to $29,121,080 for a 113-room Hampton Inn & Suites, both excluding real estate. The application fee is $100,000, the monthly royalty is 6 percent of gross rooms revenue and the monthly program fee is 4 percent.[1]",
  takeaways: [
    "Item 7 total: $17,043,739 to $24,732,532 for an 89-room Hampton Inn, which is about $191,500 to $277,900 per room by our arithmetic, before land.[1]",
    "Ongoing: 6 percent royalty plus 4 percent program fee on gross rooms revenue, and a Hilton Honors charge of 4.6 percent of total eligible guest folio.[1]",
    "A buyer of an existing Hampton pays a $200,000 change of ownership application fee and a $10,000 PIP fee, then funds the PIP itself.[1]",
    "The term is generally 22 years for new construction and 10 to 20 years for a conversion. There is no right to renew.[1]",
    "The FDD is Hilton's document and its fees change every year. Get the current FDD from Hilton before relying on these figures.",
  ],
  sections: [
    {
      h2: "What does a Hampton Inn franchise cost up front?",
      lead: "A $100,000 franchise application fee for a new build or a conversion, plus $400 for each guest room over 150, under Item 5 of the 2026 Hampton FDD.[1]",
      body: "Item 5 (pp. 15-16) lists the other initial fees paid to Hilton or its affiliates. A change of ownership application is $200,000 and a re-licensing application is $100,000. The PIP fee, charged to prepare a property improvement plan for a conversion, change of ownership or re-licensing, is $10,000. The OnQ computer system costs $27,590 to $83,959 for hardware, software and installation, other start-up fees are $5,100, training program fees run $5,000 to $17,500, and the opening process services fee is $6,000. If Hilton's supply affiliate furnishes the hotel, its procurement fee is 4 to 10 percent of project cost.[1]\n\nThe application fee is refundable, less a $7,500 processing fee, if Hilton denies the application, if the applicant withdraws before approval, or if a change of ownership does not occur. Once Hilton approves the application, the fee is non-refundable (Item 5, Note 1, p. 17).[1]",
    },
    {
      h2: "What are the Hampton Inn royalty and program fees?",
      lead: "The monthly royalty fee is 6 percent of gross rooms revenue and the monthly program fee is 4 percent of gross rooms revenue, both due by the 15th of the following month.[1]",
      body: "Item 6 (p. 20) defines gross rooms revenue under the Uniform System of Accounts for the Lodging Industry. It includes revenue from loyalty point redemptions, breakfast included in the room rate, mandatory guest fees, late cancellation fees and guaranteed no-show revenue, whether or not collected (Note 1, p. 30).[1] Hilton may change the program fee at any time, but the rate will not exceed the current rate plus 1 percent of gross rooms revenue over the term of the agreement (Note 2, p. 30).[1]\n\nOther recurring charges sit on top. Hilton Honors is currently 4.6 percent of total eligible guest folio, waived for stays where the guest enrolls at the property. The Hilton Advance fee is 1.35 percent of eligible digital direct revenue, capped at $30 per stay (p. 23).[1] OnQ connectivity is $400 to $600 per month, hardware and software maintenance is $1,114 to $2,568 per month, and the brand conference is $2,500 per attendee (pp. 20-22).[1] These charges apply to different bases, so they do not add into one percentage.",
    },
    {
      h2: "What does the Item 7 estimate cover, and what is it per room?",
      lead: "Item 7 of the 2026 Hampton FDD totals $17,043,739 to $24,732,532 for an 89-room Hampton Inn and $19,964,850 to $29,121,080 for a 113-room Hampton Inn & Suites with 81 rooms and 32 studio suites.[1]",
      body: "Divided by the room counts Hilton uses, that is about $191,500 to $277,900 per room for the Hampton Inn and about $176,700 to $257,700 per room for the Hampton Inn & Suites. The division is ours. The FDD does not print a per-room figure.[1] Construction and leasehold improvements are the largest line at $12,478,374 to $18,024,318 for the 89-room hotel, and furniture, fixtures and equipment are $1,254,480 to $1,782,681 (pp. 33-35).[1] The cover page adds that up to $225,380 of the Hampton Inn total is paid to Hilton or its affiliates.[1]\n\nRead the exclusions. Item 7 states in capitals that the figures do not include real estate costs, market studies, insurance or interest, and do not separately identify the cost of improvements under a conversion, re-licensing or change of ownership license (p. 35).[1] A buyer of an existing Hampton should expect a PIP scope from Hilton, not an Item 7 number. Per-room pricing is defined at [price per key](/glossary/per-key).",
    },
    {
      h2: "What does Hilton report about Hampton hotel performance?",
      lead: "Item 19 of the 2026 Hampton FDD reports a 2025 average room rate of $149.08, average occupancy of 71.0 percent and average RevPAR of $105.90 across 1,893 comparable Hampton hotels in the United States.[1]",
      body: "Comparable hotels are those open since January 1 of the previous year, excluding hotels that changed brand or ownership type, had large-scale capital projects, or lack comparable results. Of 2,410 U.S. Hampton hotels at December 31, 2025, 1,893 were comparable, and 1,878 of those were franchisee-managed (pp. 77-78).[1] Medians were a $140.32 room rate, 71.1 percent occupancy and $100.01 RevPAR. The ranges were $83.46 to $318.92 for room rate, 30.7 to 98.2 percent for occupancy and $34.81 to $300.28 for RevPAR. Of franchisee-managed hotels, 757, or 40.3 percent, met or exceeded the average RevPAR (pp. 78-79).[1]\n\nThe average RevPAR index was 120.8 and the median 122.5, with a range from 58.9 to 361.6, where 100 is a fair share of the competitive set. Hilton cites STR and Hilton as the source and excludes 13 hotels with insufficient data (p. 80).[1] Hilton Honors members accounted for an average 77.8 percent of occupied room nights, with a range from 29.4 to 97.4 percent (p. 80).[1] For the 294 comparable hotels opened during or after 2018, the averages were a $158.11 room rate, 72.3 percent occupancy, $114.33 RevPAR and a 125.4 RevPAR index (pp. 81-83).[1]\n\nItem 19 reports revenue measures only. It gives no expenses, no profit and no return on investment, and none can be derived from it. Hilton writes: \"Some hotels have achieved the results shown above. Your individual results may differ. There is no assurance that your Hotel will achieve the results shown above\" (p. 84).[1] The measures are defined at [RevPAR](/glossary/revpar) and [MPI, ARI and RGI](/glossary/mpi-ari-rgi).",
    },
    ...sharedSections(shared),
  ],
  table: {
    caption:
      "Hampton by Hilton franchise fees, 2026 FDD issued March 30, 2026 (Items 5, 6 and 7)",
    columns: ["Fee", "Amount", "Where in the FDD"],
    rows: [
      ["Application fee, new development or conversion", "$100,000 plus $400 per guest room over 150[1]", "Item 5, p. 15"],
      ["Application fee, change of ownership", "$200,000[1]", "Item 5, p. 16"],
      ["Application fee, re-licensing", "$100,000[1]", "Item 5, p. 16"],
      ["PIP fee", "$10,000[1]", "Item 5, p. 16"],
      ["OnQ system: hardware, software, installation", "$27,590 to $83,959[1]", "Item 5, p. 16"],
      ["Monthly royalty fee", "6% of gross rooms revenue[1]", "Item 6, p. 20"],
      ["Monthly program fee", "4% of gross rooms revenue. May change, capped at the current rate plus 1%[1]", "Item 6, pp. 20 and 30"],
      ["Hilton Honors", "4.6% of total eligible guest folio[1]", "Item 6, p. 23"],
      ["Hilton Advance fee", "1.35% of eligible digital direct revenue, up to $30 per stay[1]", "Item 6, p. 23"],
      ["OnQ connectivity, and hardware and software maintenance", "$400 to $600 and $1,114 to $2,568 per month[1]", "Item 6, p. 20"],
      ["Room addition fee", "$400 per added guest room[1]", "Item 6, p. 20"],
      ["Permitted transfer processing fee", "$5,500[1]", "Item 6, p. 25"],
      ["Lender comfort letter", "$3,500, and $1,500 for an assignment[1]", "Item 6, p. 26"],
      ["Liquidated damages, after year 2", "Hotel's average monthly royalty fees x 60, or x months remaining in the final 60 months[1]", "Item 6, p. 27"],
      ["Estimated initial investment, 89-room Hampton Inn", "$17,043,739 to $24,732,532, excluding real estate[1]", "Item 7, p. 35"],
      ["Estimated initial investment, 113-room Hampton Inn & Suites", "$19,964,850 to $29,121,080, excluding real estate[1]", "Item 7, p. 36"],
    ],
  },
  originalDataPoint: HILTON_DATA_POINT,
  workedExample: {
    label: "Hypothetical: one year of Hampton brand fees on assumed rooms revenue",
    body: "Hypothetical. Assume a Hampton Inn earns $3,000,000 of gross rooms revenue in a year, and that $1,200,000 of guest folios are eligible Hilton Honors folios. Both figures are assumptions chosen for round arithmetic. They are not forecasts and they are not from the FDD.\n\nMonthly royalty fee at 6 percent: $3,000,000 x 0.06 = $180,000.[1]\n\nMonthly program fee at 4 percent: $3,000,000 x 0.04 = $120,000.[1]\n\nHilton Honors at 4.6 percent of eligible folio: $1,200,000 x 0.046 = $55,200.[1]\n\nOnQ connectivity plus hardware and software maintenance: $1,514 to $3,168 per month, or $18,168 to $38,016 a year.[1]\n\nTotal of these four lines: $373,368 to $393,216. Hilton Advance fees, third-party reservation charges, travel planner commissions, training, the brand conference and guest assistance charges are extra and depend on how guests book, so they are left out. The example shows fees only. It says nothing about profit.",
  },
  faq: [
    {
      q: "How much does it cost to open a Hampton Inn?",
      a: "Hilton's 2026 FDD, issued March 30, 2026, estimates $17,043,739 to $24,732,532 for a newly built 89-room Hampton Inn, excluding real estate, market studies, insurance and interest. Up to $225,380 of that is paid to Hilton or its affiliates.[1]",
    },
    {
      q: "What is the Hampton Inn royalty fee?",
      a: "6 percent of gross rooms revenue, paid monthly, plus a 4 percent monthly program fee. Hilton reports it agreed to modify the royalty in 75 instances during 2025, so the rate is sometimes negotiated.[1]",
    },
    {
      q: "I'm buying an existing Hampton Inn. What will Hilton charge me?",
      a: "A $200,000 change of ownership application fee and a $10,000 PIP fee, under the 2026 FDD. You sign Hilton's then-current franchise agreement and agree to its requested upgrades. The fee is refunded less $7,500 if the sale does not close.[1]",
    },
    {
      q: "How long does a Hampton Inn franchise last?",
      a: "Generally 22 years from the effective date for new construction and 10 to 20 years from opening for a conversion. A buyer generally takes the remaining term or another term Hilton approves. There is no right to renew.[1]",
    },
    {
      q: "How much does a Hampton Inn franchise owner make?",
      a: "The FDD does not say. Item 19 reports room rate, occupancy, RevPAR, RevPAR index and Hilton Honors contribution for comparable hotels. It reports no expenses or profit, and Hilton states there is no assurance any hotel will achieve the results shown.[1]",
    },
    {
      q: "What does it cost to terminate a Hampton Inn franchise early?",
      a: "After the second anniversary of opening, liquidated damages are the hotel's average monthly royalty fees multiplied by 60, or by the months remaining in the final 60 months of the term.[1]",
    },
    {
      q: "Does Hilton finance a Hampton Inn?",
      a: "Generally no. Item 10 says Hilton may, in its sole discretion, offer a development incentive that is repayable on a declining basis if the franchise ends early or the hotel transfers. Amounts are not published.[1]",
    },
  ],
  sources: hiltonSources(
    "2026 Hampton Franchise Disclosure Document (issued March 30, 2026): cover page; Item 5, pp. 15-20; Item 6, pp. 20-33; Item 7, pp. 33-39; Item 10, pp. 44-46; Item 17, pp. 69-77; Item 19, pp. 77-84",
    "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Hampton.pdf",
  ),
  related: {
    hub: "/hotel-franchise-costs",
    siblings: hiltonSiblings(PATH),
    glossary: HILTON_GLOSSARY,
    data: ["/rates"],
  },
  cta: { label: "Talk through a Hampton purchase, sale or PIP", href: "/contact" },
  brandSentence: HILTON_BRAND_SENTENCE,
};

export default page;
