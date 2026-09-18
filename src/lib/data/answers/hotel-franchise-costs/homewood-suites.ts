/**
 * How much does a Homewood Suites franchise cost in 2026?
 * /hotel-franchise-costs/homewood-suites
 *
 * Source: 2026 US Homewood FDD, issued March 30, 2026, read for Items 5, 6, 7,
 * 10, 17 and 19 on 2026-09-18. Page numbers are the FDD's printed page
 * numbers. Do not hand-edit figures without re-reading the FDD and bumping
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

const PATH = "/hotel-franchise-costs/homewood-suites";

const shared: HiltonShared = {
  short: "Homewood Suites",
  pages: {
    item10: "44",
    item17Term: "69",
    item17Transfer: "74",
    liquidatedDamages: "27",
    note8: "33",
    transferFees: "26",
    comfortLetter: "26",
  },
  termLead:
    "Hilton's 2026 Homewood Suites FDD sets the term at generally 22 years from the effective date for new construction and 10 to 20 years from opening for a conversion, with no right to renew.[1]",
  relicensingFee: "$100,000",
  changeOfOwnershipFee: "$200,000",
  preOpeningDamages: "the system's average monthly royalty fees multiplied by 60",
  earlyDamagesFloor: "the system's average monthly royalty fees multiplied by 60",
  usesSystemAverage: true,
  negotiatedSentence:
    "It agreed to modify the monthly royalty fee in 47 instances and the monthly program fee in 3 instances during 2025 (Item 6, p. 31), and in 2025 franchisees paid application fees from $0 to $100,000 for new construction or conversion, $20,000 to $200,000 for a change of ownership and $0 to $100,000 for re-licensing (Item 5, p. 17).[1]",
  forSaleSentence:
    "Hilton-family hotels on the market are listed at [Hilton hotels for sale](/hotels-for-sale/hilton).",
};

export const page: AnswerPage = {
  slug: "homewood-suites",
  cluster: "hotel-franchise-costs",
  isHub: false,
  title: "Homewood Suites Franchise Cost 2026: FDD Fees",
  h1: "How much does a Homewood Suites franchise cost in 2026?",
  description:
    "Homewood Suites franchise costs from the 2026 FDD: $100,000 application fee, a royalty that steps from 3.5% to 5.5%, 2.5% program fee, $23.8M to $34.7M.",
  lastUpdated: HILTON_LAST_UPDATED,
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How much does a Homewood Suites franchise cost?",
    "What are Homewood Suites franchise fees?",
    "What is the Homewood Suites royalty fee?",
    "What does Hilton charge when a Homewood Suites is sold?",
  ],
  answer:
    "Hilton's 2026 Homewood Suites Franchise Disclosure Document, issued March 30, 2026, estimates $23,757,245 to $34,728,465 to open a newly built 131-suite hotel, excluding real estate. The application fee is $100,000. The monthly royalty on a new build or conversion is 3.5 percent of gross rooms revenue in year one, 4.5 percent in year two and 5.5 percent after that, and the program fee is 2.5 percent.[1]",
  takeaways: [
    "Item 7 total: $23,757,245 to $34,728,465 for 131 suites, which is about $181,400 to $265,100 per suite by our arithmetic, before land.[1]",
    "The royalty steps up on a new development or conversion: 3.5 percent in year one, 4.5 percent in year two, 5.5 percent for the rest of the term. A change of ownership or re-licensing pays 5.5 percent from the start.[1]",
    "The monthly program fee is 2.5 percent of gross rooms revenue, and Hilton Honors is 1.7 percent of total eligible guest folio.[1]",
    "A buyer of an existing Homewood Suites pays a $200,000 change of ownership application fee and a $10,000 PIP fee.[1]",
    "The FDD is Hilton's document and its fees change every year. Get the current FDD from Hilton before relying on these figures.",
  ],
  sections: [
    {
      h2: "What does a Homewood Suites franchise cost up front?",
      lead: "A $100,000 franchise application fee for a new build or a conversion, plus $400 for each guest room or suite over 150, under Item 5 of the 2026 Homewood Suites FDD.[1]",
      body: "Item 5 (pp. 15-16) lists the other initial fees paid to Hilton or its affiliates. A change of ownership application is $200,000 and a re-licensing application is $100,000. The PIP fee, charged to prepare a property improvement plan for a conversion, change of ownership or re-licensing, is $10,000. The OnQ computer system costs $28,296 to $118,424 for hardware, software and installation, other start-up fees are $5,100, training program fees run $5,000 to $17,500, and the opening process services fee is $6,000.[1]\n\nThe application fee is refundable, less a $7,500 processing fee, if Hilton denies the application, if the applicant withdraws before approval, or if a change of ownership does not occur (Item 5, Note 1, p. 17).[1]",
    },
    {
      h2: "What are the Homewood Suites royalty and program fees?",
      lead: "On a new development or conversion the monthly royalty fee is 3.5 percent of gross rooms revenue in the first year of operation, 4.5 percent in the second year and 5.5 percent for the remainder of the term. On a change of ownership or re-licensing it is 5.5 percent.[1]",
      body: "Item 6 (p. 20) sets the monthly program fee at 2.5 percent of gross rooms revenue. Both fees use gross rooms revenue as defined under the Uniform System of Accounts for the Lodging Industry, including loyalty redemption revenue, mandatory guest fees and guaranteed no-show revenue (Note 1, p. 30).[1] Hilton may change the program fee at any time, but the rate will not exceed the current rate plus 1 percent of gross rooms revenue over the term of the agreement (Note 2, p. 31).[1]\n\nOther recurring charges sit on top. Hilton Honors is currently 1.7 percent of total eligible guest folio, waived for stays where the guest enrolls at the property (p. 24). The Hilton Advance fee is 1.35 percent of eligible digital direct revenue, capped at $30 per stay (p. 23).[1] OnQ connectivity is $400 to $600 per month and hardware and software maintenance is $1,321 to $2,714 per month (p. 20).[1] These charges apply to different bases, so they do not add into one percentage.",
    },
    {
      h2: "What does the Item 7 estimate cover, and what is it per suite?",
      lead: "Item 7 of the 2026 Homewood Suites FDD totals $23,757,245 to $34,728,465 for a newly built 131-suite hotel, excluding real estate.[1]",
      body: "Divided by 131 suites, that is about $181,400 to $265,100 per suite. The division is ours. The FDD does not print a per-suite figure.[1] Construction and leasehold improvements are the largest line at $16,900,000 to $24,500,000, and furniture, fixtures and equipment are $2,480,000 to $3,600,000 (pp. 34-36).[1] The cover page adds that up to $261,924 of the total is paid to Hilton or its affiliates.[1]\n\nRead the exclusions. Item 7 states in capitals that the figures do not include real estate costs, market studies, insurance or interest, and do not separately identify the cost of improvements under a conversion, re-licensing or change of ownership license (p. 36).[1] A buyer of an existing Homewood Suites should expect a PIP scope from Hilton, not an Item 7 number. Per-room pricing is defined at [price per key](/glossary/per-key).",
    },
    {
      h2: "What does Hilton report about Homewood Suites performance?",
      lead: "Item 19 of the 2026 Homewood Suites FDD reports a 2025 average room rate of $160.14, average occupancy of 78.9 percent and average RevPAR of $126.35 across 417 comparable U.S. hotels.[1]",
      body: "Comparable hotels are those open since January 1 of the previous year, excluding hotels that changed brand or ownership type, had large-scale capital projects, or lack comparable results. Of 538 U.S. Homewood Suites hotels at December 31, 2025, 417 were comparable, and 411 of those were franchisee-managed (p. 78).[1] Medians were a $150.02 room rate, 79.3 percent occupancy and $119.27 RevPAR. The ranges were $78.01 to $313.38 for room rate, 40.1 to 96.3 percent for occupancy and $40.53 to $298.02 for RevPAR. Of franchisee-managed hotels, 155, or 37.7 percent, met or exceeded the average RevPAR (pp. 78-79).[1]\n\nThe average RevPAR index was 123.8 and the median 124.1, with a range from 76.5 to 227.2, where 100 is a fair share of the competitive set. Hilton cites STR and Hilton as the source (p. 80).[1] Hilton Honors members accounted for an average 81.2 percent of occupied room nights, with a range from 39.2 to 97.7 percent (pp. 80-81).[1] For the 90 comparable hotels opened during or after 2018, the averages were a $166.83 room rate, 79.7 percent occupancy and $132.96 RevPAR (pp. 81-83).[1]\n\nItem 19 reports revenue measures only. It gives no expenses, no profit and no return on investment, and none can be derived from it. Hilton writes: \"Some hotels have achieved the results shown above. Your individual results may differ. There is no assurance that your Hotel will achieve the results shown above\" (p. 84).[1] The measures are defined at [RevPAR](/glossary/revpar) and [MPI, ARI and RGI](/glossary/mpi-ari-rgi).",
    },
    {
      h2: "What does the Homewood Suites FDD say about extended stays?",
      lead: "Item 19 defines an extended stay as a completed guest stay of 5 or more consecutive nights and reports that Homewood Suites had about 6.6 million extended stay nights in 2025, about 48 percent of all consumed room nights.[1]",
      body: "For comparable hotels in 2025, the average room rate on extended stays was $147.89 and the median was $142.47, with a range from $55 to $706 (p. 83).[1] Extended Stay Per Available Room, which Hilton abbreviates ESPAR, measures the percentage of available guest rooms occupied by extended stays. The average was 38.3 percent and the median 37.6 percent, with a range from 12 to 87 percent (p. 84).[1]\n\nThe average length of an extended stay was 13.1 nights and the median 11.7 nights. Extended stays ranged from 6 to 86 nights (p. 84).[1] The same caveat applies: these are results some hotels achieved, with no assurance for any other hotel.[1]",
    },
    ...sharedSections(shared),
  ],
  table: {
    caption:
      "Homewood Suites by Hilton franchise fees, 2026 FDD issued March 30, 2026 (Items 5, 6 and 7)",
    columns: ["Fee", "Amount", "Where in the FDD"],
    rows: [
      ["Application fee, new development or conversion", "$100,000 plus $400 per guest room or suite over 150[1]", "Item 5, p. 15"],
      ["Application fee, change of ownership", "$200,000[1]", "Item 5, p. 15"],
      ["Application fee, re-licensing", "$100,000[1]", "Item 5, p. 15"],
      ["PIP fee", "$10,000[1]", "Item 5, p. 15"],
      ["OnQ system: hardware, software, installation", "$28,296 to $118,424[1]", "Item 5, p. 16"],
      ["Monthly royalty fee, new development or conversion", "3.5% of gross rooms revenue in year 1, 4.5% in year 2, 5.5% after[1]", "Item 6, p. 20"],
      ["Monthly royalty fee, change of ownership or re-licensing", "5.5% of gross rooms revenue[1]", "Item 6, p. 20"],
      ["Monthly program fee", "2.5% of gross rooms revenue. May change, capped at the current rate plus 1%[1]", "Item 6, pp. 20 and 31"],
      ["Hilton Honors", "1.7% of total eligible guest folio[1]", "Item 6, p. 24"],
      ["Hilton Advance fee", "1.35% of eligible digital direct revenue, up to $30 per stay[1]", "Item 6, p. 23"],
      ["OnQ connectivity, and hardware and software maintenance", "$400 to $600 and $1,321 to $2,714 per month[1]", "Item 6, p. 20"],
      ["Permitted transfer processing fee", "$5,500[1]", "Item 6, p. 26"],
      ["Lender comfort letter", "$3,500, and $1,500 for an assignment[1]", "Item 6, p. 26"],
      ["Liquidated damages, after year 2", "Hotel's average monthly royalty fees x 60, or x months remaining in the final 60 months[1]", "Item 6, pp. 27-28"],
      ["Estimated initial investment, 131 suites", "$23,757,245 to $34,728,465, excluding real estate[1]", "Item 7, p. 36"],
    ],
  },
  originalDataPoint: HILTON_DATA_POINT,
  workedExample: {
    label: "Hypothetical: Homewood Suites brand fees on assumed rooms revenue, by year",
    body: "Hypothetical. Assume a Homewood Suites earns $3,000,000 of gross rooms revenue in each year, and that $1,200,000 of guest folios are eligible Hilton Honors folios. Both figures are assumptions chosen for round arithmetic. They are not forecasts and they are not from the FDD. A new hotel's revenue would not be flat, so read this as a rate illustration only.\n\nNew development or conversion, year one: royalty at 3.5 percent is $105,000 and program fee at 2.5 percent is $75,000, together $180,000.[1]\n\nYear two: royalty at 4.5 percent is $135,000, plus $75,000, together $210,000.[1]\n\nYear three onward, and any change of ownership or re-licensing: royalty at 5.5 percent is $165,000, plus $75,000, together $240,000.[1]\n\nHilton Honors at 1.7 percent of eligible folio adds $1,200,000 x 0.017 = $20,400, and OnQ connectivity plus hardware and software maintenance add $20,652 to $39,768 a year.[1] At the 5.5 percent royalty, these four lines total $281,052 to $300,168. Hilton Advance fees, reservation charges, commissions and training are extra. The example shows fees only. It says nothing about profit.",
  },
  faq: [
    {
      q: "What is the Homewood Suites royalty fee?",
      a: "Under the 2026 FDD, a new development or conversion pays 3.5 percent of gross rooms revenue in year one, 4.5 percent in year two and 5.5 percent after. A change of ownership or re-licensing pays 5.5 percent. The program fee is 2.5 percent.[1]",
    },
    {
      q: "How much does it cost to build a Homewood Suites?",
      a: "Hilton's 2026 FDD, issued March 30, 2026, estimates $23,757,245 to $34,728,465 for a newly built 131-suite hotel, excluding real estate, market studies, insurance and interest. Up to $261,924 of that is paid to Hilton or its affiliates.[1]",
    },
    {
      q: "I'm buying an existing Homewood Suites. Do I get the lower starting royalty?",
      a: "No. The stepped royalty applies to new development and conversion. Item 6 lists 5.5 percent for a change of ownership, plus a $200,000 application fee and a $10,000 PIP fee. In 2025 buyers paid application fees of $20,000 to $200,000.[1]",
    },
    {
      q: "How long does a Homewood Suites franchise last?",
      a: "Generally 22 years from the effective date for new construction and 10 to 20 years from opening for a conversion. A buyer generally takes the remaining term or another term Hilton approves. There is no right to renew.[1]",
    },
    {
      q: "How much does a Homewood Suites owner make?",
      a: "The FDD does not say. Item 19 reports room rate, occupancy, RevPAR, RevPAR index, Hilton Honors contribution and extended-stay measures for comparable hotels. It reports no expenses or profit, and Hilton states there is no assurance any hotel will achieve the results shown.[1]",
    },
    {
      q: "How much of Homewood Suites business is extended stay?",
      a: "Hilton reports about 6.6 million extended stay nights in 2025, about 48 percent of all consumed room nights, counting stays of 5 or more consecutive nights. The average extended stay at comparable hotels was 13.1 nights.[1]",
    },
    {
      q: "What does it cost to terminate a Homewood Suites franchise early?",
      a: "After the second anniversary of opening, liquidated damages are the hotel's average monthly royalty fees multiplied by 60, or by the months remaining in the final 60 months. Fee ramps are excluded when the average is calculated.[1]",
    },
  ],
  sources: hiltonSources(
    "2026 Homewood Suites by Hilton Franchise Disclosure Document (issued March 30, 2026): cover page; Item 5, pp. 15-19; Item 6, pp. 20-34; Item 7, pp. 34-38; Item 10, pp. 44-45; Item 17, pp. 68-77; Item 19, pp. 78-85",
    "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Homewood.pdf",
  ),
  related: {
    hub: "/hotel-franchise-costs",
    siblings: hiltonSiblings(PATH),
    glossary: HILTON_GLOSSARY,
    data: ["/rates"],
  },
  cta: { label: "Talk through a Homewood Suites purchase, sale or PIP", href: "/contact" },
  brandSentence: HILTON_BRAND_SENTENCE,
};

export default page;
