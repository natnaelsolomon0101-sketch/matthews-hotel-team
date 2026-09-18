/**
 * How much does a Tapestry Collection franchise cost in 2026?
 * /hotel-franchise-costs/tapestry-collection
 *
 * Source: 2026 US Tapestry FDD, issued March 30, 2026, read for Items 5, 6, 7,
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

const PATH = "/hotel-franchise-costs/tapestry-collection";

const shared: HiltonShared = {
  short: "Tapestry",
  pages: {
    item10: "50",
    item17Term: "78",
    item17Transfer: "86",
    liquidatedDamages: "29",
    note8: "35",
    transferFees: "28",
    comfortLetter: "29",
  },
  termLead:
    "Hilton's 2026 Tapestry FDD sets the term at generally 23 years from the effective date for new construction and 10 to 20 years from opening for a conversion, with no right to renew.[1]",
  relicensingFee: "$100,000",
  changeOfOwnershipFee: "$150,000",
  preOpeningDamages: "the system's average monthly royalty fees multiplied by 60",
  earlyDamagesFloor: "the system's average monthly royalty fees multiplied by 60",
  usesSystemAverage: true,
  negotiatedSentence:
    "It agreed to modify the monthly royalty fee in 28 instances during 2025 (Item 6, p. 33), and in 2025 franchisees paid application fees from $0 to $100,000 for new development or conversion and $75,000 to $150,000 for a change of ownership (Item 5, p. 19).[1]",
  forSaleSentence:
    "Hilton-family hotels on the market are listed at [Hilton hotels for sale](/hotels-for-sale/hilton).",
};

export const page: AnswerPage = {
  slug: "tapestry-collection",
  cluster: "hotel-franchise-costs",
  isHub: false,
  title: "Tapestry Collection Franchise Cost 2026: FDD Fees",
  h1: "How much does a Tapestry Collection franchise cost in 2026?",
  description:
    "Tapestry Collection by Hilton franchise costs from the 2026 FDD: $100,000 application fee, 5% royalty, 4% program fee, and a $2.9M to $70.3M Item 7 range.",
  lastUpdated: HILTON_LAST_UPDATED,
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How much does a Tapestry Collection by Hilton franchise cost?",
    "What are Tapestry Collection franchise fees?",
    "What does it cost to convert an independent hotel to Tapestry Collection by Hilton?",
    "I own an independent boutique hotel. What would a Hilton soft brand charge me?",
  ],
  answer:
    "Hilton's 2026 Tapestry Collection Franchise Disclosure Document, issued March 30, 2026, estimates $2,861,047 to $70,253,147 to open a typical 125-room hotel, excluding real estate. The width of that range comes from construction, which runs from $0 to $45,954,000. The application fee is $100,000, the monthly royalty is 5 percent of gross rooms revenue and the monthly program fee is 4 percent.[1]",
  takeaways: [
    "Item 7 total: $2,861,047 to $70,253,147 for 125 rooms, which is about $22,900 to $562,000 per room by our arithmetic. The low end carries $0 for construction, design, furniture and contingencies.[1]",
    "Ongoing: 5 percent royalty plus 4 percent program fee on gross rooms revenue, Hilton Honors at 4 percent of total eligible guest folio, and a 2 percent spa royalty only if the hotel adds an eforea spa.[1]",
    "A buyer of an existing Tapestry pays a $150,000 change of ownership application fee and a $10,000 PIP fee.[1]",
    "The Tapestry FDD makes no financial performance representation. Item 19 contains no room rate, occupancy or RevPAR figures.[1]",
    "The FDD is Hilton's document and its fees change every year. Get the current FDD from Hilton before relying on these figures.",
  ],
  sections: [
    {
      h2: "What does a Tapestry Collection franchise cost up front?",
      lead: "A $100,000 franchise application fee for a new build or a conversion, plus $400 for each guest room or suite over 250, under Item 5 of the 2026 Tapestry FDD.[1]",
      body: "Item 5 (pp. 17-18) lists the other initial fees paid to Hilton or its affiliates. A change of ownership application is $150,000 and a re-licensing application is $100,000. The PIP fee, charged to prepare a property improvement plan for a conversion, change of ownership or re-licensing, is $10,000. The OnQ computer system costs $51,750 to $136,750 for hardware, software and installation, other start-up fees are $6,500, training program fees run $5,000 to $15,000, and the opening process services fee is $20,000. Pre-opening revenue management support, which Hilton may require when a hotel opens on an expedited schedule of 150 days or less, is $4,059 to $8,880.[1]\n\nTwo optional programs carry their own initial fees: $25,000 when the owner signs an eforea spa amendment, and a $75,000 development services fee for each Hilton restaurant brand selected.[1] The application fee is refundable, less a $7,500 processing fee, if Hilton denies the application, if the applicant withdraws before approval, or if a change of ownership does not occur (Item 5, Note 1, p. 19).[1]",
    },
    {
      h2: "What are the Tapestry Collection royalty and program fees?",
      lead: "The monthly royalty fee is 5 percent of gross rooms revenue and the monthly program fee is 4 percent of gross rooms revenue, both due by the 15th of the following month.[1]",
      body: "Item 6 (p. 22) bases both fees on gross rooms revenue as defined under the Uniform System of Accounts for the Lodging Industry, including loyalty redemption revenue, mandatory guest fees such as resort fees, and guaranteed no-show revenue (Note 1, p. 33).[1] A monthly spa royalty of 2 percent of gross spa revenue is payable only if an eforea spa amendment is in effect. The Item 6 table lists no royalty on food and beverage revenue.[1] Hilton may change the program fee at any time, but the rate will not exceed the current rate plus 1 percent of gross rooms revenue over the term of the agreement (Note 2, p. 33).[1]\n\nOther recurring charges sit on top. Hilton Honors is currently 4 percent of total eligible guest folio, waived for stays where the guest enrolls at the property. The Hilton Advance fee is 1.35 percent of eligible digital direct revenue, capped at $30 per stay (p. 26).[1] OnQ connectivity is $400 to $600 per month and hardware and software maintenance is $2,105 to $6,499 per month (p. 23).[1] These charges apply to different bases, so they do not add into one percentage.",
    },
    {
      h2: "Why is the Tapestry Item 7 range so wide?",
      lead: "Because the 2026 Tapestry FDD puts construction and leasehold improvements at $0 to $45,954,000 for a 125-room hotel, so the total runs from $2,861,047 to $70,253,147.[1]",
      body: "Item 7 (pp. 36-38) shows $0 at the low end for four lines: construction and leasehold improvements ($0 to $45,954,000), design and engineering fees ($0 to $1,838,160), furniture, fixtures and equipment ($0 to $7,115,625) and contingencies ($0 to $4,595,400). Additional funds are $1,000,000 to $1,400,000, and an eforea spa adds $0 to $4,950,000.[1] Divided by 125 rooms, the total is about $22,900 to $562,000 per room. The division is ours. The FDD does not print a per-room figure.[1] The cover page adds that up to $400,630 of the total is paid to Hilton or its affiliates.[1]\n\nThe notes to Item 7 say conversion costs vary with the age of the building, code compliance, fire and life safety requirements, the condition of the structure and the state of the furniture and finishes against brand standards, and that a converting owner's furniture costs will most likely be lower than a new hotel's (Notes 6 and 7, pp. 38-39).[1] Item 7 also states in capitals that the figures do not include real estate costs, market studies, insurance or interest, and do not separately identify the cost of improvements under a conversion, re-licensing or change of ownership license (p. 38).[1] An owner converting an independent hotel gets the real number from Hilton's PIP, not from Item 7. Per-room pricing is defined at [price per key](/glossary/per-key).",
    },
    {
      h2: "What does Hilton report about Tapestry hotel performance?",
      lead: "Nothing. Item 19 of the 2026 Tapestry FDD makes no financial performance representation.[1]",
      body: "Hilton writes: \"We do not make any representations about a franchisee's future financial performance or the past financial performance of company-owned or franchised outlets\" (Item 19, p. 92).[1] That differs from Hilton's 2026 FDDs for brands such as [Hampton](/hotel-franchise-costs/hampton-inn) and [DoubleTree](/hotel-franchise-costs/doubletree), which report room rate, occupancy, RevPAR and RevPAR index for comparable hotels.\n\nHilton adds that it does not authorize its employees or representatives to make such representations orally or in writing, and that a buyer of an existing hotel may be given that hotel's actual records.[1] An owner weighing a Tapestry conversion has to build the revenue case from the hotel's own history and a market study, not from the FDD. Item 7 notes that Hilton may encourage a converting owner to commission a market study, and that accepting one is not a performance representation by Hilton.[1]",
    },
    ...sharedSections(shared),
  ],
  table: {
    caption:
      "Tapestry Collection by Hilton franchise fees, 2026 FDD issued March 30, 2026 (Items 5, 6 and 7)",
    columns: ["Fee", "Amount", "Where in the FDD"],
    rows: [
      ["Application fee, new development or conversion", "$100,000 plus $400 per guest room or suite over 250[1]", "Item 5, p. 17"],
      ["Application fee, change of ownership", "$150,000[1]", "Item 5, p. 17"],
      ["Application fee, re-licensing", "$100,000[1]", "Item 5, p. 17"],
      ["PIP fee", "$10,000[1]", "Item 5, p. 17"],
      ["OnQ system: hardware, software, installation", "$51,750 to $136,750[1]", "Item 5, p. 17"],
      ["Opening process services fee", "$20,000[1]", "Item 5, p. 18"],
      ["eforea spa initial fee (optional)", "$25,000[1]", "Item 5, p. 17"],
      ["Monthly royalty fee", "5% of gross rooms revenue[1]", "Item 6, p. 22"],
      ["Monthly spa royalty fee (only with an eforea spa)", "2% of gross spa revenue[1]", "Item 6, p. 22"],
      ["Monthly program fee", "4% of gross rooms revenue. May change, capped at the current rate plus 1%[1]", "Item 6, pp. 22 and 33"],
      ["Hilton Honors", "4% of total eligible guest folio[1]", "Item 6, p. 26"],
      ["Hilton Advance fee", "1.35% of eligible digital direct revenue, up to $30 per stay[1]", "Item 6, p. 26"],
      ["OnQ connectivity, and hardware and software maintenance", "$400 to $600 and $2,105 to $6,499 per month[1]", "Item 6, p. 23"],
      ["Permitted transfer processing fee", "$5,500[1]", "Item 6, p. 28"],
      ["Lender comfort letter", "$3,500, and $1,500 for an assignment[1]", "Item 6, p. 29"],
      ["Liquidated damages, after year 2", "Hotel's average monthly royalty fees x 60, or x months remaining in the final 60 months[1]", "Item 6, p. 30"],
      ["Estimated initial investment, 125 rooms", "$2,861,047 to $70,253,147, excluding real estate[1]", "Item 7, p. 38"],
    ],
  },
  originalDataPoint: HILTON_DATA_POINT,
  workedExample: {
    label: "Hypothetical: one year of Tapestry Collection brand fees on assumed rooms revenue",
    body: "Hypothetical. Assume a Tapestry Collection hotel earns $8,000,000 of gross rooms revenue in a year, has no eforea spa, and that $3,200,000 of guest folios are eligible Hilton Honors folios. These figures are assumptions chosen for round arithmetic. They are not forecasts and they are not from the FDD, which reports no performance figures for Tapestry.\n\nMonthly royalty fee at 5 percent: $8,000,000 x 0.05 = $400,000.[1]\n\nMonthly program fee at 4 percent: $8,000,000 x 0.04 = $320,000.[1]\n\nHilton Honors at 4 percent of eligible folio: $3,200,000 x 0.04 = $128,000.[1]\n\nOnQ connectivity plus hardware and software maintenance: $2,505 to $7,099 per month, or $30,060 to $85,188 a year.[1]\n\nTotal of these four lines: $878,060 to $933,188. Hilton Advance fees, third-party reservation charges, travel planner commissions, training and guest assistance charges are extra and depend on how guests book, so they are left out. The example shows fees only. It says nothing about profit.",
  },
  faq: [
    {
      q: "What does it cost to convert an independent hotel to Tapestry Collection?",
      a: "The 2026 FDD lists a $100,000 application fee and a $10,000 PIP fee. Its Item 7 range for a 125-room hotel starts at $2,861,047 with $0 of construction, but the FDD does not price conversions separately. Hilton's PIP sets the actual scope.[1]",
    },
    {
      q: "What are Tapestry Collection franchise fees?",
      a: "Under Hilton's 2026 FDD, issued March 30, 2026: a 5 percent monthly royalty and a 4 percent monthly program fee on gross rooms revenue, Hilton Honors at 4 percent of total eligible guest folio, and a 2 percent spa royalty only with an eforea spa.[1]",
    },
    {
      q: "Does Hilton publish Tapestry Collection RevPAR or occupancy?",
      a: "No. Item 19 of the 2026 Tapestry FDD states that Hilton does not make any representations about a franchisee's future financial performance or the past financial performance of company-owned or franchised outlets.[1]",
    },
    {
      q: "How long is a Tapestry Collection franchise agreement?",
      a: "Generally 23 years from the effective date for new construction and 10 to 20 years from opening for a conversion. A buyer generally takes the remaining term or another term Hilton approves. There is no right to renew.[1]",
    },
    {
      q: "I'm buying an existing Tapestry Collection hotel. What will Hilton charge me?",
      a: "A $150,000 change of ownership application fee and a $10,000 PIP fee, under the 2026 FDD. You sign Hilton's then-current franchise agreement and agree to its requested upgrades. In 2025, buyers paid $75,000 to $150,000.[1]",
    },
    {
      q: "Does Tapestry charge a royalty on restaurant revenue?",
      a: "The Item 6 table in the 2026 FDD charges the 5 percent royalty and 4 percent program fee on gross rooms revenue and lists no royalty on food and beverage revenue. A 2 percent spa royalty applies only under an eforea spa amendment.[1]",
    },
    {
      q: "What does it cost to leave Tapestry Collection early?",
      a: "After the second anniversary of opening, liquidated damages are the hotel's average monthly royalty fees multiplied by 60, or by the months remaining in the final 60 months of the term.[1]",
    },
  ],
  sources: hiltonSources(
    "2026 Tapestry Collection by Hilton Franchise Disclosure Document (issued March 30, 2026): cover page; Item 5, pp. 17-21; Item 6, pp. 22-36; Item 7, pp. 36-41; Item 10, pp. 50-51; Item 17, pp. 78-91; Item 19, pp. 91-92",
    "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Tapestry.pdf",
  ),
  related: {
    hub: "/hotel-franchise-costs",
    siblings: hiltonSiblings(PATH),
    glossary: HILTON_GLOSSARY,
    data: ["/rates"],
  },
  cta: { label: "Talk through a Tapestry conversion or sale", href: "/contact" },
  brandSentence: HILTON_BRAND_SENTENCE,
};

export default page;
