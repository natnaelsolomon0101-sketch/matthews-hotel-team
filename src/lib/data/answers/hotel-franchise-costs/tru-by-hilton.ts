/**
 * How much does a Tru by Hilton franchise cost in 2026?
 * /hotel-franchise-costs/tru-by-hilton
 *
 * Source: 2026 US Tru FDD, issued March 30, 2026, read for Items 5, 6, 7, 10,
 * 17 and 19 on 2026-09-18. Page numbers are the FDD's printed page numbers.
 * Do not hand-edit figures without re-reading the FDD and bumping
 * `lastUpdated`.
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

const PATH = "/hotel-franchise-costs/tru-by-hilton";

const shared: HiltonShared = {
  short: "Tru",
  pages: {
    item10: "44",
    item17Term: "70",
    item17Transfer: "75",
    liquidatedDamages: "26",
    note8: "32",
    transferFees: "25",
    comfortLetter: "26",
  },
  termLead:
    "Hilton's 2026 Tru FDD sets the term at generally 22 years from the effective date for new construction and 10 to 20 years from opening for a conversion, with no right to renew.[1]",
  relicensingFee: "$100,000",
  changeOfOwnershipFee: "$150,000",
  preOpeningDamages: "the system's average monthly royalty fees multiplied by 60",
  earlyDamagesFloor: "the system's average monthly royalty fees multiplied by 60",
  usesSystemAverage: true,
  negotiatedSentence:
    "It agreed to modify the monthly royalty fee in 18 instances in 2025 (Item 6, p. 30), and in 2025 franchisees paid application fees from $0 to $100,000 for new development or conversion and $75,000 to $150,000 for a change of ownership (Item 5, p. 17).[1]",
  forSaleSentence:
    "Hilton-family hotels on the market are listed at [Hilton hotels for sale](/hotels-for-sale/hilton).",
};

export const page: AnswerPage = {
  slug: "tru-by-hilton",
  cluster: "hotel-franchise-costs",
  isHub: false,
  title: "Tru by Hilton Franchise Cost 2026: Fees From the FDD",
  h1: "How much does a Tru by Hilton franchise cost in 2026?",
  description:
    "Tru by Hilton franchise costs from the 2026 FDD: $100,000 application fee, 5.5% royalty, 4% program fee, and $14.3M to $20.7M to build 98 rooms.",
  lastUpdated: HILTON_LAST_UPDATED,
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How much does a Tru by Hilton franchise cost?",
    "What are Tru by Hilton franchise fees?",
    "How much does it cost to build a Tru by Hilton?",
    "What does Hilton charge when a Tru hotel is sold?",
  ],
  answer:
    "Hilton's 2026 Tru by Hilton Franchise Disclosure Document, issued March 30, 2026, estimates $14,258,164 to $20,659,558 to open a newly built 98-room hotel, excluding real estate. The franchise application fee is $100,000, the monthly royalty is 5.5 percent of gross rooms revenue, the monthly program fee is 4 percent, and Hilton Honors is 2 percent of total eligible guest folio.[1]",
  takeaways: [
    "Item 7 total: $14,258,164 to $20,659,558 for 98 rooms, which is about $145,500 to $210,800 per room by our arithmetic, before land.[1]",
    "Ongoing: 5.5 percent royalty plus 4 percent program fee on gross rooms revenue, and a Hilton Honors charge of 2 percent of total eligible guest folio.[1]",
    "A buyer of an existing Tru pays a $150,000 change of ownership application fee and a $10,000 PIP fee. In 2025 buyers paid $75,000 to $150,000.[1]",
    "Item 19 covers 243 comparable Tru hotels, all franchisee-managed, out of 311 open in the United States at December 31, 2025.[1]",
    "The FDD is Hilton's document and its fees change every year. Get the current FDD from Hilton before relying on these figures.",
  ],
  sections: [
    {
      h2: "What does a Tru by Hilton franchise cost up front?",
      lead: "A $100,000 franchise application fee for a new build or a conversion, under Item 5 of the 2026 Tru FDD.[1]",
      body: "Item 5 (pp. 15-16) lists the other initial fees paid to Hilton or its affiliates. A change of ownership application is $150,000 and a re-licensing application is $100,000. The PIP fee, charged to prepare a property improvement plan for a conversion, change of ownership or re-licensing, is $10,000. The OnQ computer system costs $36,652 to $90,846 for hardware, software and installation, other start-up fees are $5,100, training program fees run $5,000 to $17,500, and the opening process services fee is $6,000. If Hilton's supply affiliate furnishes the hotel, its procurement fee is 4 to 10 percent of project cost.[1]\n\nThe application fee is refundable, less a $7,500 processing fee, if Hilton denies the application, if the applicant withdraws before approval, or if a change of ownership does not occur (Item 5, Note 1, p. 17).[1]",
    },
    {
      h2: "What are the Tru by Hilton royalty and program fees?",
      lead: "The monthly royalty fee is 5.5 percent of gross rooms revenue and the monthly program fee is 4 percent of gross rooms revenue, both due by the 15th of the following month.[1]",
      body: "Item 6 (p. 20) bases both fees on gross rooms revenue as defined under the Uniform System of Accounts for the Lodging Industry, including loyalty redemption revenue, mandatory guest fees and guaranteed no-show revenue (Note 1, p. 29).[1] Hilton may change the program fee at any time, but the rate will not exceed the current rate plus 1 percent of gross rooms revenue over the term of the agreement (Note 2, p. 30).[1]\n\nOther recurring charges sit on top. Hilton Honors is currently 2 percent of total eligible guest folio, waived for stays where the guest enrolls at the property. The Hilton Advance fee is 1.35 percent of eligible digital direct revenue, capped at $30 per stay (p. 23).[1] OnQ connectivity is $400 to $600 per month and hardware and software maintenance is $1,037 to $2,330 per month (p. 20).[1] These charges apply to different bases, so they do not add into one percentage.",
    },
    {
      h2: "What does the Item 7 estimate cover, and what is it per room?",
      lead: "Item 7 of the 2026 Tru FDD totals $14,258,164 to $20,659,558 for a newly built 98-room hotel, excluding real estate.[1]",
      body: "Divided by 98 rooms, that is about $145,500 to $210,800 per room. The division is ours. The FDD does not print a per-room figure.[1] Construction and leasehold improvements are the largest line at $10,237,185 to $14,787,045, and furniture, fixtures and equipment are $1,246,474 to $1,771,305 (pp. 33-34).[1] The cover page adds that up to $234,346 of the total is paid to Hilton or its affiliates.[1]\n\nRead the exclusions. Item 7 states in capitals that the figures do not include real estate costs, market studies, insurance or interest, and do not separately identify the cost of improvements under a conversion, re-licensing or change of ownership license (p. 34).[1] A buyer of an existing Tru should expect a PIP scope from Hilton, not an Item 7 number. Per-room pricing is defined at [price per key](/glossary/per-key).",
    },
    {
      h2: "What does Hilton report about Tru hotel performance?",
      lead: "Item 19 of the 2026 Tru FDD reports a 2025 average room rate of $128.20, average occupancy of 71.2 percent and average RevPAR of $91.27 across 243 comparable U.S. hotels.[1]",
      body: "Comparable hotels are those open since January 1 of the previous year, excluding hotels that changed brand or ownership type, had large-scale capital projects, or lack comparable results. Of 311 U.S. Tru hotels at December 31, 2025, 243 were comparable, and all 243 were franchisee-managed (p. 79).[1] Medians were a $125.35 room rate, 71.8 percent occupancy and $89.63 RevPAR. The ranges were $82.68 to $230.46 for room rate, 45.2 to 98.4 percent for occupancy and $42.23 to $164.34 for RevPAR. Of the franchisee-managed hotels, 113, or 46.5 percent, met or exceeded the average RevPAR (pp. 79-80).[1]\n\nThe average RevPAR index was 135.0 and the median 133.5, with a range from 80.1 to 256.6, where 100 is a fair share of the competitive set. Hilton cites STR and Hilton as the source and excludes 1 hotel with insufficient data (pp. 80-81).[1] Hilton Honors members accounted for an average 76.3 percent of occupied room nights, with a range from 29.2 to 94.0 percent (p. 81).[1]\n\nItem 19 reports revenue measures only. It gives no expenses, no profit and no return on investment, and none can be derived from it. Hilton writes: \"Some hotels have achieved the results shown above. Your individual results may differ. There is no assurance that your Hotel will achieve the results shown above\" (p. 82).[1] The measures are defined at [RevPAR](/glossary/revpar) and [MPI, ARI and RGI](/glossary/mpi-ari-rgi).",
    },
    ...sharedSections(shared),
  ],
  table: {
    caption:
      "Tru by Hilton franchise fees, 2026 FDD issued March 30, 2026 (Items 5, 6 and 7)",
    columns: ["Fee", "Amount", "Where in the FDD"],
    rows: [
      ["Application fee, new development or conversion", "$100,000[1]", "Item 5, p. 15"],
      ["Application fee, change of ownership", "$150,000[1]", "Item 5, p. 15"],
      ["Application fee, re-licensing", "$100,000[1]", "Item 5, p. 15"],
      ["PIP fee", "$10,000[1]", "Item 5, p. 15"],
      ["OnQ system: hardware, software, installation", "$36,652 to $90,846[1]", "Item 5, p. 16"],
      ["Monthly royalty fee", "5.5% of gross rooms revenue[1]", "Item 6, p. 20"],
      ["Monthly program fee", "4% of gross rooms revenue. May change, capped at the current rate plus 1%[1]", "Item 6, pp. 20 and 30"],
      ["Hilton Honors", "2% of total eligible guest folio[1]", "Item 6, p. 23"],
      ["Hilton Advance fee", "1.35% of eligible digital direct revenue, up to $30 per stay[1]", "Item 6, p. 23"],
      ["OnQ connectivity, and hardware and software maintenance", "$400 to $600 and $1,037 to $2,330 per month[1]", "Item 6, p. 20"],
      ["Room addition fee", "$400 per added guest room[1]", "Item 6, p. 20"],
      ["Permitted transfer processing fee", "$5,500[1]", "Item 6, p. 25"],
      ["Lender comfort letter", "$3,500, and $1,500 for an assignment[1]", "Item 6, p. 26"],
      ["Liquidated damages, after year 2", "Hotel's average monthly royalty fees x 60, or x months remaining in the final 60 months[1]", "Item 6, pp. 26-27"],
      ["Estimated initial investment, 98 rooms", "$14,258,164 to $20,659,558, excluding real estate[1]", "Item 7, p. 34"],
    ],
  },
  originalDataPoint: HILTON_DATA_POINT,
  workedExample: {
    label: "Hypothetical: one year of Tru by Hilton brand fees on assumed rooms revenue",
    body: "Hypothetical. Assume a Tru by Hilton earns $3,000,000 of gross rooms revenue in a year, and that $1,200,000 of guest folios are eligible Hilton Honors folios. Both figures are assumptions chosen for round arithmetic. They are not forecasts and they are not from the FDD.\n\nMonthly royalty fee at 5.5 percent: $3,000,000 x 0.055 = $165,000.[1]\n\nMonthly program fee at 4 percent: $3,000,000 x 0.04 = $120,000.[1]\n\nHilton Honors at 2 percent of eligible folio: $1,200,000 x 0.02 = $24,000.[1]\n\nOnQ connectivity plus hardware and software maintenance: $1,437 to $2,930 per month, or $17,244 to $35,160 a year.[1]\n\nTotal of these four lines: $326,244 to $344,160. Hilton Advance fees, third-party reservation charges, travel planner commissions, training and guest assistance charges are extra and depend on how guests book, so they are left out. The example shows fees only. It says nothing about profit.",
  },
  faq: [
    {
      q: "How much does it cost to build a Tru by Hilton?",
      a: "Hilton's 2026 FDD, issued March 30, 2026, estimates $14,258,164 to $20,659,558 for a newly built 98-room Tru, excluding real estate, market studies, insurance and interest. Up to $234,346 of that is paid to Hilton or its affiliates.[1]",
    },
    {
      q: "What is the Tru by Hilton royalty fee?",
      a: "5.5 percent of gross rooms revenue, paid monthly, plus a 4 percent monthly program fee. Hilton reports it agreed to modify the royalty in 18 instances in 2025, so the rate is sometimes negotiated.[1]",
    },
    {
      q: "I'm buying an existing Tru by Hilton. What will Hilton charge me?",
      a: "A $150,000 change of ownership application fee and a $10,000 PIP fee, under the 2026 FDD. You sign Hilton's then-current franchise agreement and agree to its requested upgrades. In 2025, buyers paid $75,000 to $150,000.[1]",
    },
    {
      q: "How long does a Tru by Hilton franchise last?",
      a: "Generally 22 years from the effective date for new construction and 10 to 20 years from opening for a conversion. A buyer generally takes the remaining term or another term Hilton approves. There is no right to renew.[1]",
    },
    {
      q: "How much does a Tru by Hilton owner make?",
      a: "The FDD does not say. Item 19 reports room rate, occupancy, RevPAR, RevPAR index and Hilton Honors contribution for comparable hotels. It reports no expenses or profit, and Hilton states there is no assurance any hotel will achieve the results shown.[1]",
    },
    {
      q: "What does it cost to terminate a Tru by Hilton franchise early?",
      a: "After the second anniversary of opening, liquidated damages are the hotel's average monthly royalty fees multiplied by 60, or by the months remaining in the final 60 months of the term.[1]",
    },
  ],
  sources: hiltonSources(
    "2026 Tru by Hilton Franchise Disclosure Document (issued March 30, 2026): cover page; Item 5, pp. 15-19; Item 6, pp. 20-33; Item 7, pp. 33-37; Item 10, pp. 44-45; Item 17, pp. 70-78; Item 19, pp. 78-83",
    "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Tru.pdf",
  ),
  related: {
    hub: "/hotel-franchise-costs",
    siblings: hiltonSiblings(PATH),
    glossary: HILTON_GLOSSARY,
    data: ["/rates"],
  },
  cta: { label: "Talk through a Tru by Hilton purchase, sale or PIP", href: "/contact" },
  brandSentence: HILTON_BRAND_SENTENCE,
};

export default page;
