/**
 * How much does a DoubleTree by Hilton franchise cost in 2026?
 * /hotel-franchise-costs/doubletree
 *
 * Source: 2026 US DoubleTree FDD, issued March 30, 2026, read for Items 5, 6,
 * 7, 10, 17 and 19 on 2026-09-18. Page numbers are the FDD's printed page
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

const PATH = "/hotel-franchise-costs/doubletree";

const shared: HiltonShared = {
  short: "DoubleTree",
  pages: {
    item10: "51",
    item17Term: "79",
    item17Transfer: "88",
    liquidatedDamages: "29",
    note8: "35",
    transferFees: "28",
    comfortLetter: "28",
  },
  termLead:
    "Hilton's 2026 DoubleTree FDD sets the term at generally 23 years from the effective date for new construction and 10 to 20 years from opening for a conversion, with no right to renew.[1]",
  relicensingFee: "$85,000",
  changeOfOwnershipFee: "$175,000",
  preOpeningDamages: "the system's average monthly royalty fees multiplied by 60",
  earlyDamagesFloor: "the system's average monthly royalty fees multiplied by 60",
  usesSystemAverage: true,
  negotiatedSentence:
    "It agreed to modify the monthly royalty fee in 24 instances during 2025 (Item 6, p. 33), and in 2025 franchisees paid application fees from $42,500 to $100,000 for new development or conversion, $0 to $175,000 for a change of ownership and $0 to $100,000 for re-licensing (Item 5, p. 20).[1]",
  forSaleSentence:
    "Hilton-family hotels on the market are listed at [Hilton hotels for sale](/hotels-for-sale/hilton).",
};

export const page: AnswerPage = {
  slug: "doubletree",
  cluster: "hotel-franchise-costs",
  isHub: false,
  title: "DoubleTree by Hilton Franchise Cost 2026: FDD Fees",
  h1: "How much does a DoubleTree franchise cost in 2026?",
  description:
    "DoubleTree by Hilton franchise costs from the 2026 FDD: $85,000 application fee, 5% royalty, 4% program fee, and $31.5M to $108.7M for 225 rooms.",
  lastUpdated: HILTON_LAST_UPDATED,
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How much does a DoubleTree by Hilton franchise cost?",
    "What are DoubleTree franchise fees?",
    "What does it cost to convert a full-service hotel to DoubleTree?",
    "What does Hilton charge when a DoubleTree is sold?",
  ],
  answer:
    "Hilton's 2026 DoubleTree Franchise Disclosure Document, issued March 30, 2026, estimates $31,454,554 to $108,661,784 to open a newly built 225-room DoubleTree and $33,007,054 to $126,260,147 for a 225-room DoubleTree Suites, both excluding real estate. The application fee is $85,000, the monthly royalty is 5 percent of gross rooms revenue and the monthly program fee is 4 percent.[1]",
  takeaways: [
    "Item 7 total: $31,454,554 to $108,661,784 for a 225-room DoubleTree, which is about $139,800 to $482,900 per room by our arithmetic, before land.[1]",
    "Ongoing: 5 percent royalty plus 4 percent program fee on gross rooms revenue, Hilton Honors at 4 percent of total eligible guest folio, and a 2 percent spa royalty only if the hotel adds an eforea spa.[1]",
    "A buyer of an existing DoubleTree pays a $175,000 change of ownership application fee and a $10,000 PIP fee. In 2025 buyers paid $0 to $175,000.[1]",
    "The term is generally 23 years for new construction and 10 to 20 years for a conversion. There is no right to renew.[1]",
    "The FDD is Hilton's document and its fees change every year. Get the current FDD from Hilton before relying on these figures.",
  ],
  sections: [
    {
      h2: "What does a DoubleTree franchise cost up front?",
      lead: "An $85,000 franchise application fee for a new build or a conversion, plus $400 for each guest room or suite over 250, under Item 5 of the 2026 DoubleTree FDD.[1]",
      body: "Item 5 (pp. 17-19) lists the other initial fees paid to Hilton or its affiliates. A change of ownership application is $175,000 and a re-licensing application is $85,000. The PIP fee, charged to prepare a property improvement plan for a conversion, change of ownership or re-licensing, is $10,000. The OnQ computer system costs $93,150 to $246,150 for hardware, software and installation, other start-up fees are $6,500, training program fees run $5,000 to $20,000, and the opening process services fee is $20,000. Pre-opening revenue management support, which Hilton may require when a hotel opens on an expedited schedule of 150 days or less, is $4,059 to $8,880.[1]\n\nTwo optional programs carry their own initial fees: $25,000 when the owner signs an eforea spa amendment, and a $75,000 development services fee for each Hilton restaurant brand selected.[1] The application fee is refundable, less a $7,500 processing fee, if Hilton denies the application, if the applicant withdraws before approval, or if a change of ownership does not occur (Item 5, Note 1, p. 19).[1]",
    },
    {
      h2: "What are the DoubleTree royalty and program fees?",
      lead: "The monthly royalty fee is 5 percent of gross rooms revenue and the monthly program fee is 4 percent of gross rooms revenue, both due by the 15th of the following month.[1]",
      body: "Item 6 (p. 23) bases both fees on gross rooms revenue as defined under the Uniform System of Accounts for the Lodging Industry, including loyalty redemption revenue, mandatory guest fees such as resort fees, and guaranteed no-show revenue (Note 1, p. 32).[1] A monthly spa royalty of 2 percent of gross spa revenue is payable only if an eforea spa amendment is in effect. The Item 6 table lists no royalty on food and beverage revenue.[1] Hilton may change the program fee at any time, but the rate will not exceed the current rate plus 1 percent of gross rooms revenue over the term of the agreement (Note 2, p. 33).[1]\n\nOther recurring charges sit on top. Hilton Honors is currently 4 percent of total eligible guest folio, waived for stays where the guest enrolls at the property. The Hilton Advance fee is 1.35 percent of eligible digital direct revenue, capped at $30 per stay (p. 26).[1] OnQ connectivity is $400 to $600 per month and hardware and software maintenance is $2,359 to $6,752 per month (p. 23).[1] These charges apply to different bases, so they do not add into one percentage.",
    },
    {
      h2: "What does the Item 7 estimate cover, and what is it per room?",
      lead: "Item 7 of the 2026 DoubleTree FDD totals $31,454,554 to $108,661,784 for a 225-room DoubleTree and $33,007,054 to $126,260,147 for a 225-room DoubleTree Suites, excluding real estate.[1]",
      body: "Divided by 225 rooms, that is about $139,800 to $482,900 per room for the DoubleTree and about $146,700 to $561,200 per room for the DoubleTree Suites. The division is ours. The FDD does not print a per-room figure.[1] Construction and leasehold improvements drive the spread: $18,216,000 to $74,675,250 for the DoubleTree and $18,216,000 to $87,561,000 for the Suites. Furniture, fixtures and equipment are $7,245,000 to $10,867,500 for the DoubleTree, and an eforea spa adds $0 to $4,950,000 (pp. 36-39).[1] The cover page adds that up to $500,030 of the total is paid to Hilton or its affiliates.[1]\n\nRead the exclusions. Item 7 states in capitals that the figures do not include real estate costs, market studies, insurance or interest, and do not separately identify the cost of improvements under a conversion, re-licensing or change of ownership license (p. 37).[1] For an owner converting an existing hotel, or a buyer of an existing DoubleTree, the number that matters is the PIP scope from Hilton, not an Item 7 total. Per-room pricing is defined at [price per key](/glossary/per-key).",
    },
    {
      h2: "What does Hilton report about DoubleTree hotel performance?",
      lead: "Item 19 of the 2026 DoubleTree FDD reports a 2025 average room rate of $159.90, average occupancy of 68.4 percent and average RevPAR of $109.35 across 294 comparable U.S. DoubleTree and DoubleTree Suites hotels.[1]",
      body: "Comparable hotels are those open since January 1 of the previous year, excluding hotels that changed brand or ownership type, had large-scale capital projects, or lack comparable results. Of 415 U.S. DoubleTree and DoubleTree Suites hotels at December 31, 2025, 294 were comparable: 24 company-managed and 270 franchisee-managed (p. 93).[1] Medians were a $150.96 room rate, 68.2 percent occupancy and $104.11 RevPAR. The ranges were $95.40 to $318.84 for room rate, 30.4 to 98.5 percent for occupancy and $39.96 to $310.94 for RevPAR. Of franchisee-managed hotels, 101, or 37.4 percent, met or exceeded the average RevPAR (pp. 94-95).[1]\n\nThe average RevPAR index was 105.2 and the median 106.5, with a range from 48.8 to 248.7, where 100 is a fair share of the competitive set. Hilton cites STR and Hilton as the source and excludes 1 hotel with insufficient data (pp. 95-96).[1] Hilton Honors members accounted for an average 68.5 percent of occupied room nights, with a range from 22.7 to 94.2 percent (pp. 96-97).[1]\n\nItem 19 reports rooms revenue measures only. It gives no food and beverage or banquet results, no expenses, no profit and no return on investment, and none can be derived from it. Hilton writes: \"Some hotels have achieved the results shown above. Your individual results may differ. There is no assurance that your Hotel will achieve the results shown above\" (p. 97).[1] The measures are defined at [RevPAR](/glossary/revpar) and [MPI, ARI and RGI](/glossary/mpi-ari-rgi).",
    },
    ...sharedSections(shared),
  ],
  table: {
    caption:
      "DoubleTree by Hilton franchise fees, 2026 FDD issued March 30, 2026 (Items 5, 6 and 7)",
    columns: ["Fee", "Amount", "Where in the FDD"],
    rows: [
      ["Application fee, new development or conversion", "$85,000 plus $400 per guest room or suite over 250[1]", "Item 5, p. 17"],
      ["Application fee, change of ownership", "$175,000[1]", "Item 5, p. 17"],
      ["Application fee, re-licensing", "$85,000[1]", "Item 5, p. 18"],
      ["PIP fee", "$10,000[1]", "Item 5, p. 18"],
      ["OnQ system: hardware, software, installation", "$93,150 to $246,150[1]", "Item 5, p. 18"],
      ["Opening process services fee", "$20,000[1]", "Item 5, p. 19"],
      ["eforea spa initial fee (optional)", "$25,000[1]", "Item 5, p. 18"],
      ["Monthly royalty fee", "5% of gross rooms revenue[1]", "Item 6, p. 23"],
      ["Monthly spa royalty fee (only with an eforea spa)", "2% of gross spa revenue[1]", "Item 6, p. 23"],
      ["Monthly program fee", "4% of gross rooms revenue. May change, capped at the current rate plus 1%[1]", "Item 6, pp. 23 and 33"],
      ["Hilton Honors", "4% of total eligible guest folio[1]", "Item 6, p. 26"],
      ["Hilton Advance fee", "1.35% of eligible digital direct revenue, up to $30 per stay[1]", "Item 6, p. 26"],
      ["OnQ connectivity, and hardware and software maintenance", "$400 to $600 and $2,359 to $6,752 per month[1]", "Item 6, p. 23"],
      ["Permitted transfer processing fee", "$5,500[1]", "Item 6, p. 28"],
      ["Lender comfort letter", "$3,500, and $1,500 for an assignment[1]", "Item 6, p. 28"],
      ["Liquidated damages, after year 2", "Hotel's average monthly royalty fees x 60, or x months remaining in the final 60 months[1]", "Item 6, p. 30"],
      ["Estimated initial investment, 225-room DoubleTree", "$31,454,554 to $108,661,784, excluding real estate[1]", "Item 7, p. 37"],
      ["Estimated initial investment, 225-room DoubleTree Suites", "$33,007,054 to $126,260,147, excluding real estate[1]", "Item 7, p. 39"],
    ],
  },
  originalDataPoint: HILTON_DATA_POINT,
  workedExample: {
    label: "Hypothetical: one year of DoubleTree brand fees on assumed rooms revenue",
    body: "Hypothetical. Assume a DoubleTree earns $8,000,000 of gross rooms revenue in a year, has no eforea spa, and that $3,200,000 of guest folios are eligible Hilton Honors folios. These figures are assumptions chosen for round arithmetic. They are not forecasts and they are not from the FDD.\n\nMonthly royalty fee at 5 percent: $8,000,000 x 0.05 = $400,000.[1]\n\nMonthly program fee at 4 percent: $8,000,000 x 0.04 = $320,000.[1]\n\nHilton Honors at 4 percent of eligible folio: $3,200,000 x 0.04 = $128,000.[1]\n\nOnQ connectivity plus hardware and software maintenance: $2,759 to $7,352 per month, or $33,108 to $88,224 a year.[1]\n\nTotal of these four lines: $881,108 to $936,224. Food and beverage revenue carries no royalty in the Item 6 table, so it does not enter this arithmetic. Hilton Advance fees, third-party reservation charges, group and travel planner commissions, training and guest assistance charges are extra and depend on how guests book, so they are left out. The example shows fees only. It says nothing about profit.",
  },
  faq: [
    {
      q: "How much does it cost to open a DoubleTree by Hilton?",
      a: "Hilton's 2026 FDD, issued March 30, 2026, estimates $31,454,554 to $108,661,784 for a newly built 225-room DoubleTree, excluding real estate, market studies, insurance and interest. Up to $500,030 of that is paid to Hilton or its affiliates.[1]",
    },
    {
      q: "What is the DoubleTree royalty fee?",
      a: "5 percent of gross rooms revenue, paid monthly, plus a 4 percent monthly program fee. Hilton reports it agreed to modify the royalty in 24 instances during 2025, so the rate is sometimes negotiated.[1]",
    },
    {
      q: "What does it cost to convert a hotel to DoubleTree?",
      a: "The 2026 FDD lists an $85,000 application fee and a $10,000 PIP fee. Item 7 does not separately identify conversion costs, so Hilton's property improvement plan for the specific building sets the renovation scope.[1]",
    },
    {
      q: "I'm buying an existing DoubleTree. What will Hilton charge me?",
      a: "A $175,000 change of ownership application fee and a $10,000 PIP fee, under the 2026 FDD. You sign Hilton's then-current franchise agreement and agree to its requested upgrades. In 2025, buyers paid from $0 to $175,000.[1]",
    },
    {
      q: "How long does a DoubleTree franchise last?",
      a: "Generally 23 years from the effective date for new construction and 10 to 20 years from opening for a conversion. A buyer generally takes the remaining term or another term Hilton approves. There is no right to renew.[1]",
    },
    {
      q: "How much does a DoubleTree owner make?",
      a: "The FDD does not say. Item 19 reports room rate, occupancy, RevPAR, RevPAR index and Hilton Honors contribution for comparable hotels. It reports no expenses or profit, and Hilton states there is no assurance any hotel will achieve the results shown.[1]",
    },
    {
      q: "What does it cost to terminate a DoubleTree franchise early?",
      a: "After the second anniversary of opening, liquidated damages are the hotel's average monthly royalty fees multiplied by 60, or by the months remaining in the final 60 months of the term.[1]",
    },
  ],
  sources: hiltonSources(
    "2026 DoubleTree by Hilton Franchise Disclosure Document (issued March 30, 2026): cover page; Item 5, pp. 17-22; Item 6, pp. 23-36; Item 7, pp. 36-42; Item 10, pp. 51-52; Item 17, pp. 79-93; Item 19, pp. 93-98",
    "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-DoubleTree.pdf",
  ),
  related: {
    hub: "/hotel-franchise-costs",
    siblings: hiltonSiblings(PATH),
    glossary: HILTON_GLOSSARY,
    data: ["/rates"],
  },
  cta: { label: "Talk through a DoubleTree purchase, sale or conversion", href: "/contact" },
  brandSentence: HILTON_BRAND_SENTENCE,
};

export default page;
