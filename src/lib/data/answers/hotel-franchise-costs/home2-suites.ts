/**
 * How much does a Home2 Suites franchise cost in 2026?
 * /hotel-franchise-costs/home2-suites
 *
 * Source: 2026 US Home2 FDD, issued March 30, 2026, read for Items 5, 6, 7,
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

const PATH = "/hotel-franchise-costs/home2-suites";

const shared: HiltonShared = {
  short: "Home2 Suites",
  pages: {
    item10: "47",
    item17Term: "72",
    item17Transfer: "78",
    liquidatedDamages: "28",
    note8: "34",
    transferFees: "27",
    comfortLetter: "27",
  },
  termLead:
    "Hilton's 2026 Home2 Suites FDD sets the term at generally 22 years from the effective date for new construction and 10 to 20 years from opening for a conversion, with no right to renew.[1]",
  relicensingFee: "$100,000",
  changeOfOwnershipFee: "$200,000",
  preOpeningDamages: "the system's average monthly royalty fees multiplied by 60",
  earlyDamagesFloor: "the system's average monthly royalty fees multiplied by 60",
  usesSystemAverage: true,
  negotiatedSentence:
    "It agreed to modify the monthly royalty fee in 32 instances during 2025 (Item 6, p. 32), and in 2025 franchisees paid application fees from $0 to $100,000 for new development or conversion and $100,000 to $200,000 for a change of ownership (Item 5, p. 18).[1]",
  forSaleSentence:
    "Hilton-family hotels on the market are listed at [Hilton hotels for sale](/hotels-for-sale/hilton).",
};

export const page: AnswerPage = {
  slug: "home2-suites",
  cluster: "hotel-franchise-costs",
  isHub: false,
  title: "Home2 Suites Franchise Cost 2026: Fees From the FDD",
  h1: "How much does a Home2 Suites franchise cost in 2026?",
  description:
    "Home2 Suites by Hilton franchise costs from the 2026 FDD: $100,000 application fee, 6% royalty, 3.5% program fee, and $18.1M to $26.6M for 107 suites.",
  lastUpdated: HILTON_LAST_UPDATED,
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What are Home2 Suites franchise fees?",
    "How much does a Home2 Suites franchise cost?",
    "How much does it cost to build a Home2 Suites?",
    "What is the Home2 Suites royalty fee?",
  ],
  answer:
    "Hilton's 2026 Home2 Suites Franchise Disclosure Document, issued March 30, 2026, estimates $18,075,688 to $26,550,592 to open a newly built 107-suite hotel, excluding real estate. The franchise application fee is $100,000, the monthly royalty is 6 percent of gross rooms revenue, the monthly program fee is 3.5 percent, and Hilton Honors is 2.0 percent of total eligible guest folio.[1]",
  takeaways: [
    "Item 7 total: $18,075,688 to $26,550,592 for 107 suites, which is about $168,900 to $248,100 per suite by our arithmetic, before land.[1]",
    "Ongoing: 6 percent royalty plus 3.5 percent program fee on gross rooms revenue, and a Hilton Honors charge of 2.0 percent of total eligible guest folio.[1]",
    "A buyer of an existing Home2 Suites pays a $200,000 change of ownership application fee and a $10,000 PIP fee. In 2025 buyers paid $100,000 to $200,000.[1]",
    "Item 19 adds extended-stay measures: stays of 5 or more nights were about 42 percent of the brand's consumed room nights in 2025.[1]",
    "The FDD is Hilton's document and its fees change every year. Get the current FDD from Hilton before relying on these figures.",
  ],
  sections: [
    {
      h2: "What does a Home2 Suites franchise cost up front?",
      lead: "A $100,000 franchise application fee for a new build or a conversion, under Item 5 of the 2026 Home2 Suites FDD.[1]",
      body: "Item 5 (pp. 16-17) lists the other initial fees paid to Hilton or its affiliates. A change of ownership application is $200,000 and a re-licensing application is $100,000. The PIP fee, charged to prepare a property improvement plan for a conversion, change of ownership or re-licensing, is $10,000. The OnQ computer system costs $27,606 to $101,971 for hardware, software and installation, other start-up fees are $5,100, training program fees run $5,000 to $17,500, and the opening process services fee is $6,000. If Hilton's supply affiliate furnishes the hotel, its procurement fee is 4 to 10 percent of project cost.[1]\n\nThe application fee is refundable, less a $7,500 processing fee, if Hilton denies the application, if the applicant withdraws before approval, or if a change of ownership does not occur (Item 5, Note 1, p. 18).[1]",
    },
    {
      h2: "What are the Home2 Suites royalty and program fees?",
      lead: "The monthly royalty fee is 6 percent of gross rooms revenue and the monthly program fee is 3.5 percent of gross rooms revenue, both due by the 15th of the following month.[1]",
      body: "Item 6 (p. 21) bases both fees on gross rooms revenue as defined under the Uniform System of Accounts for the Lodging Industry, including loyalty redemption revenue, mandatory guest fees and guaranteed no-show revenue (Note 1, p. 32).[1] Hilton may change the program fee at any time, but the rate will not exceed the current rate plus 1 percent of gross rooms revenue over the term of the agreement (Note 2, p. 32).[1]\n\nOther recurring charges sit on top. Hilton Honors is currently 2.0 percent of total eligible guest folio, waived for stays where the guest enrolls at the property (p. 25). The Hilton Advance fee is 1.35 percent of eligible digital direct revenue, capped at $30 per stay (p. 24).[1] OnQ connectivity is $400 to $600 per month and hardware and software maintenance is $1,060 to $2,553 per month (p. 21).[1] These charges apply to different bases, so they do not add into one percentage.",
    },
    {
      h2: "What does the Item 7 estimate cover, and what is it per suite?",
      lead: "Item 7 of the 2026 Home2 Suites FDD totals $18,075,688 to $26,550,592 for a newly built 107-suite hotel, excluding real estate.[1]",
      body: "Divided by 107 suites, that is about $168,900 to $248,100 per suite. The division is ours. The FDD does not print a per-suite figure.[1] Construction and leasehold improvements are the largest line at $12,800,000 to $18,555,000, and furniture, fixtures and equipment are $1,910,000 to $2,770,000 (pp. 36-37).[1] The cover page adds that up to $245,471 of the total is paid to Hilton or its affiliates.[1]\n\nRead the exclusions. Item 7 states in capitals that the figures do not include real estate costs, market studies, insurance or interest, and do not separately identify the cost of improvements under a conversion, re-licensing or change of ownership license (p. 37).[1] A buyer of an existing Home2 Suites should expect a PIP scope from Hilton, not an Item 7 number. Per-room pricing is defined at [price per key](/glossary/per-key).",
    },
    {
      h2: "What does Hilton report about Home2 Suites performance?",
      lead: "Item 19 of the 2026 Home2 Suites FDD reports a 2025 average room rate of $144.47, average occupancy of 78.0 percent and average RevPAR of $112.63 across 561 comparable U.S. hotels.[1]",
      body: "Comparable hotels are those open since January 1 of the previous year, excluding hotels that changed brand or ownership type, had large-scale capital projects, or lack comparable results. Of 731 U.S. Home2 Suites hotels at December 31, 2025, 561 were comparable, and 559 of those were franchisee-managed (p. 82).[1] Medians were a $140.77 room rate, 79.1 percent occupancy and $110.67 RevPAR. The ranges were $80.04 to $263.67 for room rate, 46.0 to 97.0 percent for occupancy and $54.43 to $249.29 for RevPAR. Of franchisee-managed hotels, 250, or 44.7 percent, met or exceeded the average RevPAR (pp. 82-83).[1]\n\nThe average RevPAR index was 125.1 and the median 127.0, with a range from 69.5 to 243.0, where 100 is a fair share of the competitive set. Hilton cites STR and Hilton as the source and excludes 4 hotels with insufficient data (p. 84).[1] Hilton Honors members accounted for an average 80.4 percent of occupied room nights, with a range from 11.8 to 97.3 percent (pp. 84-85).[1]\n\nItem 19 reports revenue measures only. It gives no expenses, no profit and no return on investment, and none can be derived from it. Hilton writes: \"Some hotels have achieved the results shown above. Your individual results may differ. There is no assurance that your Hotel will achieve the results shown above\" (p. 87).[1] The measures are defined at [RevPAR](/glossary/revpar) and [MPI, ARI and RGI](/glossary/mpi-ari-rgi).",
    },
    {
      h2: "What does the Home2 Suites FDD say about extended stays?",
      lead: "Item 19 defines an extended stay as a completed guest stay of 5 or more consecutive nights and reports that Home2 Suites had about 7.1 million extended stay nights in 2025, about 42 percent of all consumed room nights.[1]",
      body: "For comparable hotels in 2025, the average room rate on extended stays was $135.52 and the median was $132.28, with a range from $73 to $275 (pp. 85-86).[1] Extended Stay Per Available Room, which Hilton abbreviates ESPAR, measures the percentage of available guest rooms occupied by extended stays. The average was 33.3 percent and the median 32.0 percent, with a range from 7 to 87 percent. Of franchisee-managed comparable hotels, 249, or 44.5 percent, met or exceeded the average (p. 86).[1]\n\nThe average length of an extended stay was 11.9 nights and the median 11.0 nights, calculated as total extended stay room nights divided by total extended stays. Extended stays ranged from 6 to 124 nights (pp. 86-87).[1] The same caveat applies: these are results some hotels achieved, with no assurance for any other hotel.[1]",
    },
    ...sharedSections(shared),
  ],
  table: {
    caption:
      "Home2 Suites by Hilton franchise fees, 2026 FDD issued March 30, 2026 (Items 5, 6 and 7)",
    columns: ["Fee", "Amount", "Where in the FDD"],
    rows: [
      ["Application fee, new development or conversion", "$100,000[1]", "Item 5, p. 16"],
      ["Application fee, change of ownership", "$200,000[1]", "Item 5, p. 16"],
      ["Application fee, re-licensing", "$100,000[1]", "Item 5, p. 16"],
      ["PIP fee", "$10,000[1]", "Item 5, p. 16"],
      ["OnQ system: hardware, software, installation", "$27,606 to $101,971[1]", "Item 5, p. 17"],
      ["Monthly royalty fee", "6% of gross rooms revenue[1]", "Item 6, p. 21"],
      ["Monthly program fee", "3.5% of gross rooms revenue. May change, capped at the current rate plus 1%[1]", "Item 6, pp. 21 and 32"],
      ["Hilton Honors", "2.0% of total eligible guest folio[1]", "Item 6, p. 25"],
      ["Hilton Advance fee", "1.35% of eligible digital direct revenue, up to $30 per stay[1]", "Item 6, p. 24"],
      ["OnQ connectivity, and hardware and software maintenance", "$400 to $600 and $1,060 to $2,553 per month[1]", "Item 6, p. 21"],
      ["Room addition fee", "$400 per added guest room or suite[1]", "Item 6, p. 21"],
      ["Permitted transfer processing fee", "$5,500[1]", "Item 6, p. 27"],
      ["Lender comfort letter", "$3,500, and $1,500 for an assignment[1]", "Item 6, p. 27"],
      ["Liquidated damages, after year 2", "Hotel's average monthly royalty fees x 60, or x months remaining in the final 60 months[1]", "Item 6, pp. 28-29"],
      ["Estimated initial investment, 107 suites", "$18,075,688 to $26,550,592, excluding real estate[1]", "Item 7, p. 37"],
    ],
  },
  originalDataPoint: HILTON_DATA_POINT,
  workedExample: {
    label: "Hypothetical: one year of Home2 Suites brand fees on assumed rooms revenue",
    body: "Hypothetical. Assume a Home2 Suites earns $3,000,000 of gross rooms revenue in a year, and that $1,200,000 of guest folios are eligible Hilton Honors folios. Both figures are assumptions chosen for round arithmetic. They are not forecasts and they are not from the FDD.\n\nMonthly royalty fee at 6 percent: $3,000,000 x 0.06 = $180,000.[1]\n\nMonthly program fee at 3.5 percent: $3,000,000 x 0.035 = $105,000.[1]\n\nHilton Honors at 2.0 percent of eligible folio: $1,200,000 x 0.02 = $24,000.[1]\n\nOnQ connectivity plus hardware and software maintenance: $1,460 to $3,153 per month, or $17,520 to $37,836 a year.[1]\n\nTotal of these four lines: $326,520 to $346,836. Hilton Advance fees, third-party reservation charges, travel planner commissions, training and guest assistance charges are extra and depend on how guests book, so they are left out. The example shows fees only. It says nothing about profit.",
  },
  faq: [
    {
      q: "What are Home2 Suites franchise fees?",
      a: "Under Hilton's 2026 FDD, issued March 30, 2026: a $100,000 application fee, a 6 percent monthly royalty and a 3.5 percent monthly program fee on gross rooms revenue, and Hilton Honors at 2.0 percent of total eligible guest folio.[1]",
    },
    {
      q: "How much does it cost to build a Home2 Suites?",
      a: "Hilton estimates $18,075,688 to $26,550,592 for a newly built 107-suite hotel, excluding real estate, market studies, insurance and interest. Up to $245,471 of that is paid to Hilton or its affiliates.[1]",
    },
    {
      q: "I'm buying an existing Home2 Suites. What will Hilton charge me?",
      a: "A $200,000 change of ownership application fee and a $10,000 PIP fee, under the 2026 FDD. You sign Hilton's then-current franchise agreement and agree to its requested upgrades. In 2025, buyers paid $100,000 to $200,000.[1]",
    },
    {
      q: "How long does a Home2 Suites franchise last?",
      a: "Generally 22 years from the effective date for new construction and 10 to 20 years from opening for a conversion. A buyer generally takes the remaining term or another term Hilton approves. There is no right to renew.[1]",
    },
    {
      q: "How much does a Home2 Suites owner make?",
      a: "The FDD does not say. Item 19 reports room rate, occupancy, RevPAR, RevPAR index, Hilton Honors contribution and extended-stay measures for comparable hotels. It reports no expenses or profit, and Hilton states there is no assurance any hotel will achieve the results shown.[1]",
    },
    {
      q: "How much of Home2 Suites business is extended stay?",
      a: "Hilton reports about 7.1 million extended stay nights in 2025, about 42 percent of all consumed room nights, counting stays of 5 or more consecutive nights. The average extended stay at comparable hotels was 11.9 nights.[1]",
    },
    {
      q: "What does it cost to terminate a Home2 Suites franchise early?",
      a: "After the second anniversary of opening, liquidated damages are the hotel's average monthly royalty fees multiplied by 60, or by the months remaining in the final 60 months of the term.[1]",
    },
  ],
  sources: hiltonSources(
    "2026 Home2 Suites by Hilton Franchise Disclosure Document (issued March 30, 2026): cover page; Item 5, pp. 16-20; Item 6, pp. 21-36; Item 7, pp. 36-40; Item 10, pp. 46-47; Item 17, pp. 72-81; Item 19, pp. 81-88",
    "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Home2.pdf",
  ),
  related: {
    hub: "/hotel-franchise-costs",
    siblings: hiltonSiblings(PATH),
    glossary: HILTON_GLOSSARY,
    data: ["/rates"],
  },
  cta: { label: "Talk through a Home2 Suites purchase, sale or PIP", href: "/contact" },
  brandSentence: HILTON_BRAND_SENTENCE,
};

export default page;
