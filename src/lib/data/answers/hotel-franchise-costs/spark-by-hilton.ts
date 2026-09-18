/**
 * How much does a Spark by Hilton franchise cost in 2026?
 * /hotel-franchise-costs/spark-by-hilton
 *
 * Source: 2026 US Spark FDD, issued March 30, 2026, read for Items 1, 5, 6, 7,
 * 10, 11, 17 and 19 on 2026-09-18. Page numbers are the FDD's printed page
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

const PATH = "/hotel-franchise-costs/spark-by-hilton";

const shared: HiltonShared = {
  short: "Spark",
  pages: {
    item10: "45",
    item17Term: "71",
    item17Transfer: "77",
    liquidatedDamages: "27",
    note8: "32",
    transferFees: "26",
    comfortLetter: "26",
  },
  termLead:
    "Hilton's 2026 Spark FDD sets the term for a conversion at generally 10 to 15 years from the opening date, with no right to renew.[1]",
  relicensingFee: "$75,000",
  changeOfOwnershipFee: "$75,000",
  preOpeningDamages: "$10,000 multiplied by the number of approved guest rooms at the hotel",
  earlyDamagesFloor: "$10,000 multiplied by the number of approved guest rooms",
  usesSystemAverage: false,
  negotiatedSentence:
    "It agreed to modify the monthly royalty fee in 53 instances during 2025 (Item 6, p. 30), and in 2025 franchisees paid application fees from $0 to $75,000 for a conversion (Item 5, p. 17).[1]",
  forSaleSentence:
    "Hilton-family hotels on the market are listed at [Hilton hotels for sale](/hotels-for-sale/hilton).",
};

export const page: AnswerPage = {
  slug: "spark-by-hilton",
  cluster: "hotel-franchise-costs",
  isHub: false,
  title: "Spark by Hilton Conversion Cost 2026: FDD Fees",
  h1: "How much does a Spark by Hilton franchise cost in 2026?",
  description:
    "Spark by Hilton conversion costs from the 2026 FDD: $75,000 application fee, 5.5% royalty, 3.5% program fee, and $3.25M to $5.9M to convert 100 rooms.",
  lastUpdated: HILTON_LAST_UPDATED,
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What does it cost to convert to Spark by Hilton?",
    "How much does a Spark by Hilton franchise cost?",
    "What are Spark by Hilton franchise fees?",
    "I own an older economy hotel. What would it cost to convert it to Spark by Hilton?",
  ],
  answer:
    "Hilton's 2026 Spark by Hilton Franchise Disclosure Document, issued March 30, 2026, estimates $3,251,531 to $5,906,193 to convert a 100-room hotel, excluding real estate. Spark is offered for conversions only. The franchise application fee is $75,000, the monthly royalty is 5.5 percent of gross rooms revenue, the monthly program fee is 3.5 percent, and Hilton Honors is 2 percent of total eligible guest folio.[1]",
  takeaways: [
    "Item 7 total: $3,251,531 to $5,906,193 for a 100-room conversion, which is about $32,500 to $59,100 per room by our arithmetic. The estimate assumes a building in good condition and excludes systems, roof, windows and structure.[1]",
    "Spark is conversion-only. The FDD's fees and cost estimates do not cover new construction or adaptive reuse.[1]",
    "Ongoing: 5.5 percent royalty plus 3.5 percent program fee on gross rooms revenue, and Hilton Honors at 2 percent of total eligible guest folio.[1]",
    "Application fees are $75,000 for a conversion, a change of ownership or a re-licensing. The conversion term is generally 10 to 15 years.[1]",
    "The FDD is Hilton's document and its fees change every year. Get the current FDD from Hilton before relying on these figures.",
  ],
  sections: [
    {
      h2: "What does it cost to convert a hotel to Spark by Hilton?",
      lead: "Item 7 of the 2026 Spark FDD estimates $3,251,531 to $5,906,193 for the conversion of a 100-room hotel, excluding real estate.[1]",
      body: "Divided by 100 rooms, that is about $32,500 to $59,100 per room. The division is ours. The FDD does not print a per-room figure.[1] The largest lines are construction, renovation and leasehold improvements at $1,300,000 to $2,800,000 and furniture, fixtures and equipment at $900,000 to $1,200,000. Contingencies are $130,000 to $280,000 and additional funds are $300,000 to $500,000 (pp. 33-34).[1] The cover page adds that up to $203,800 of the total is paid to Hilton or its affiliates.[1]\n\nThe scope behind the number is narrow. Note 1 to Item 7 (pp. 34-35) describes a standard model: a four-floor, interior-corridor building of 55,000 to 63,000 square feet with 100 guest rooms, in good condition, built to code, with an occupancy permit. The prototype has no kitchens, restaurants or other food service, swimming pools, health facilities or dedicated meeting rooms. The estimate does not include repair or replacement of windows or exterior cladding other than repainting, any mechanical, electrical, lighting, roofing, drainage, HVAC, fire or safety systems, the parking lot, or structural elements.[1] A hotel that needs work on those systems carries costs outside the estimate. Item 7 also excludes real estate costs, market studies, insurance and interest (p. 34).[1] Per-room pricing is defined at [price per key](/glossary/per-key).",
    },
    {
      h2: "Can I build a new Spark by Hilton?",
      lead: "Not under the 2026 FDD. Item 1 states that Hilton currently offers Spark franchises for hotel conversion projects only.[1]",
      body: "Hilton defines a conversion as the renovation of an existing hotel building to bring it into compliance with brand standards, and says it does not include new construction or major remodeling. The fees and cost estimates in the FDD do not apply to new development or to adaptive reuse of a building that was not a hotel (Item 1, p. 6).[1] Item 11 says Hilton generally anticipates conversion projects to take about 6 to 18 months, depending on the condition of the existing hotel, with deadlines set project by project in the PIP (p. 60).[1]",
    },
    {
      h2: "What are the Spark by Hilton initial fees?",
      lead: "A $75,000 franchise application fee, whether the application is for a conversion, a change of ownership or a re-licensing, under Item 5 of the 2026 Spark FDD.[1]",
      body: "Item 5 (pp. 15-17) lists the other initial fees paid to Hilton or its affiliates. The PIP fee is $10,000. The OnQ computer system costs $33,500 to $87,800 for hardware, software and installation, other start-up fees are $5,100, training program fees run $5,000 to $15,000, and the opening process services fee is $6,000. Hilton's supply affiliate is the required procurement service provider for the Spark brand package, and Item 5 lists its fee at up to 6 percent of the cost of goods ordered.[1]\n\nThe application fee is refundable, less a $7,500 processing fee, if Hilton denies the application, if the applicant withdraws before approval, or if a change of ownership does not occur (Item 5, Note 1, p. 17).[1]",
    },
    {
      h2: "What are the Spark by Hilton royalty and program fees?",
      lead: "The monthly royalty fee is 5.5 percent of gross rooms revenue and the monthly program fee is 3.5 percent of gross rooms revenue, both due by the 15th of the following month.[1]",
      body: "Item 6 (p. 20) bases both fees on gross rooms revenue as defined under the Uniform System of Accounts for the Lodging Industry, including loyalty redemption revenue, mandatory guest fees and guaranteed no-show revenue (Note 1, p. 29).[1] Hilton may change the program fee at any time, but the rate will not exceed the current rate plus 1 percent of gross rooms revenue over the term of the agreement (Note 2, p. 30).[1]\n\nOther recurring charges sit on top. Hilton Honors is currently 2 percent of total eligible guest folio, waived for stays where the guest enrolls at the property (p. 24). The Hilton Advance fee is 1.35 percent of eligible digital direct revenue, capped at $30 per stay (p. 23).[1] OnQ connectivity is $400 to $600 per month and hardware and software maintenance is $1,042 to $2,335 per month (p. 21).[1] These charges apply to different bases, so they do not add into one percentage.",
    },
    {
      h2: "What does Hilton report about Spark hotel performance?",
      lead: "Item 19 of the 2026 Spark FDD reports one measure: a 2025 average RevPAR index of 113.8 and a median of 110.7 across 87 comparable U.S. hotels.[1]",
      body: "Of 208 U.S. Spark hotels at December 31, 2025, 87 were classified as comparable, and all 87 were franchisee-managed. Comparable hotels are those open since January 1 of the previous year, excluding hotels that changed brand or ownership type, had large-scale capital projects, or lack comparable results (pp. 80-81).[1] The RevPAR index compares a hotel's revenue per available room with its competitive set, and 100 is a fair share. The range ran from 52.9 to 302.2. Of the 87 hotels, 39, or 44.8 percent, met or exceeded the average. Hilton cites STR and Hilton as the source (pp. 81-82).[1]\n\nThe Spark Item 19 does not report room rate, occupancy or RevPAR in dollars, and it gives no expenses, no profit and no return on investment. None can be derived from an index. Hilton writes: \"Some hotels have achieved the results shown above. Your individual results may differ. There is no assurance that your Hotel will achieve the results shown above\" (p. 82).[1] The index is defined at [MPI, ARI and RGI](/glossary/mpi-ari-rgi).",
    },
    ...sharedSections(shared),
  ],
  table: {
    caption:
      "Spark by Hilton franchise fees, 2026 FDD issued March 30, 2026 (Items 5, 6 and 7)",
    columns: ["Fee", "Amount", "Where in the FDD"],
    rows: [
      ["Application fee, conversion", "$75,000[1]", "Item 5, p. 15"],
      ["Application fee, change of ownership", "$75,000[1]", "Item 5, p. 16"],
      ["Application fee, re-licensing", "$75,000[1]", "Item 5, p. 16"],
      ["PIP fee", "$10,000[1]", "Item 5, p. 16"],
      ["OnQ system: hardware, software, installation", "$33,500 to $87,800[1]", "Item 5, p. 16"],
      ["Brand package procurement services", "Up to 6% of the cost of goods ordered[1]", "Item 5, p. 17"],
      ["Monthly royalty fee", "5.5% of gross rooms revenue[1]", "Item 6, p. 20"],
      ["Monthly program fee", "3.5% of gross rooms revenue. May change, capped at the current rate plus 1%[1]", "Item 6, pp. 20 and 30"],
      ["Hilton Honors", "2% of total eligible guest folio[1]", "Item 6, p. 24"],
      ["Hilton Advance fee", "1.35% of eligible digital direct revenue, up to $30 per stay[1]", "Item 6, p. 23"],
      ["OnQ connectivity, and hardware and software maintenance", "$400 to $600 and $1,042 to $2,335 per month[1]", "Item 6, p. 21"],
      ["Permitted transfer processing fee", "$5,500[1]", "Item 6, p. 26"],
      ["Lender comfort letter", "$3,500, and $1,500 for an assignment[1]", "Item 6, p. 26"],
      ["Liquidated damages, before opening", "$10,000 x approved guest rooms[1]", "Item 6, p. 27"],
      ["Liquidated damages, after year 2", "Hotel's average monthly royalty fees x 60, or x months remaining in the final 60 months[1]", "Item 6, p. 27"],
      ["Estimated initial investment, 100-room conversion", "$3,251,531 to $5,906,193, excluding real estate[1]", "Item 7, p. 34"],
    ],
  },
  originalDataPoint: HILTON_DATA_POINT,
  workedExample: {
    label: "Hypothetical: one year of Spark by Hilton brand fees on assumed rooms revenue",
    body: "Hypothetical. Assume a Spark by Hilton earns $2,000,000 of gross rooms revenue in a year, and that $800,000 of guest folios are eligible Hilton Honors folios. Both figures are assumptions chosen for round arithmetic. They are not forecasts and they are not from the FDD.\n\nMonthly royalty fee at 5.5 percent: $2,000,000 x 0.055 = $110,000.[1]\n\nMonthly program fee at 3.5 percent: $2,000,000 x 0.035 = $70,000.[1]\n\nHilton Honors at 2 percent of eligible folio: $800,000 x 0.02 = $16,000.[1]\n\nOnQ connectivity plus hardware and software maintenance: $1,442 to $2,935 per month, or $17,304 to $35,220 a year.[1]\n\nTotal of these four lines: $213,304 to $231,220. Hilton Advance fees, third-party reservation charges, travel planner commissions, training and guest assistance charges are extra and depend on how guests book, so they are left out. The example shows fees only. It says nothing about profit.\n\nLiquidated damages before opening are simpler arithmetic. If Hilton terminated a 100-room Spark after renovation work began but before opening, Item 6 sets the amount at $10,000 x 100 = $1,000,000.[1]",
  },
  faq: [
    {
      q: "What does it cost to convert to Spark by Hilton?",
      a: "Hilton's 2026 FDD, issued March 30, 2026, estimates $3,251,531 to $5,906,193 for a 100-room conversion, excluding real estate. The estimate assumes a building in good condition and leaves out mechanical, electrical, roofing, HVAC, fire and life safety, window and structural work.[1]",
    },
    {
      q: "What are Spark by Hilton franchise fees?",
      a: "A $75,000 application fee, a 5.5 percent monthly royalty and a 3.5 percent monthly program fee on gross rooms revenue, Hilton Honors at 2 percent of total eligible guest folio, and a $10,000 PIP fee.[1]",
    },
    {
      q: "How long does a Spark conversion take?",
      a: "Item 11 of the 2026 FDD says Hilton generally anticipates conversion projects to take about 6 to 18 months, depending on the condition of the existing hotel. The franchise agreement and the PIP set the actual deadlines.[1]",
    },
    {
      q: "How long is a Spark by Hilton franchise agreement?",
      a: "Generally 10 to 15 years from the opening date for a conversion. A buyer of an existing Spark generally takes the remaining term or another term Hilton approves. There is no right to renew.[1]",
    },
    {
      q: "Does Hilton publish Spark RevPAR or occupancy?",
      a: "Not in the 2026 FDD. Item 19 reports only RevPAR index for 87 comparable hotels: an average of 113.8, a median of 110.7 and a range from 52.9 to 302.2. Hilton states there is no assurance any hotel will achieve those results.[1]",
    },
    {
      q: "What does it cost to leave Spark early?",
      a: "Before opening, $10,000 per approved guest room. In the first two years, the greater of that amount or 60 months of the hotel's average royalty. After that, 60 months of average royalty, or the months remaining in the final 60.[1]",
    },
    {
      q: "Can I build a new Spark by Hilton?",
      a: "No. Item 1 of the 2026 FDD says Hilton currently offers Spark franchises for conversion projects only, and that its fees and cost estimates do not apply to new development or adaptive reuse.[1]",
    },
  ],
  sources: hiltonSources(
    "2026 Spark by Hilton Franchise Disclosure Document (issued March 30, 2026): cover page; Item 1, p. 6; Item 5, pp. 15-19; Item 6, pp. 20-33; Item 7, pp. 33-37; Item 10, pp. 45-46; Item 11, p. 60; Item 17, pp. 71-80; Item 19, pp. 80-82",
    "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Spark.pdf",
  ),
  related: {
    hub: "/hotel-franchise-costs",
    siblings: hiltonSiblings(PATH),
    glossary: HILTON_GLOSSARY,
    data: ["/rates"],
  },
  cta: { label: "Talk through a Spark conversion", href: "/contact" },
  brandSentence: HILTON_BRAND_SENTENCE,
};

export default page;
