/**
 * Can I deduct my hotel renovation or do I have to capitalize it?
 * Answer page: /hotel-financing/deduct-or-capitalize-a-renovation
 *
 * Written 2026-11-20 from 26 CFR 1.263(a)-3 and 1.263(a)-1 read in full on
 * Cornell LII, 26 CFR 1.168(i)-8, 26 U.S.C. 162, 168, 179, 179D and 263,
 * Rev. Proc. 2025-32, and the two IRS pages for the tangible property
 * regulations and the section 179D deduction.
 *
 * Every figure in the worked example and the answer block is recomputed by
 * scripts/check-renovation-capitalization-math.mjs. Do not hand-edit a number
 * here without re-running it, and do not hand-edit prose without bumping
 * `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "deduct-or-capitalize-a-renovation",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Renovation: Deduct or Capitalize?",
  description:
    "Why most hotel PIP spending capitalizes under 26 CFR 1.263(a)-3, which safe harbors reach a hotel, and what section 179 still expenses in 2026.",
  h1: "Can I deduct my hotel renovation or do I have to capitalize it?",
  lastUpdated: "2026-11-20",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "Can I deduct my hotel renovation or do I have to capitalize it?",
    "Is a hotel PIP a repair or a capital improvement for taxes?",
    "Can I write off a new roof on my hotel?",
    "Is replacing hotel HVAC tax deductible?",
    "How do I deduct a hotel renovation this year?",
    "What is the de minimis safe harbor for a hotel renovation?",
    "Can I still claim 179D on a hotel renovation?",
  ],
  answer:
    "Mostly capitalize. Treasury regulation 1.263(a)-3, in force for tax years beginning on or after January 1, 2014, splits a hotel into the building structure plus nine building systems and tests every replacement against its own system, so most PIP spend is an improvement.[1] The regulation's own hotel example capitalizes a guest-room bathroom replacement.[1] Section 179 can still expense up to $2,560,000 in 2026.[2][3]",
  takeaways: [
    "The question is not whether the work was necessary. It is which unit of property the work is tested against, and the regulation gives a hotel ten of them: the building structure plus nine systems.[1]",
    "Three tests force capitalization: betterment, restoration, and adaptation to a new use.[1] Replacing a major component of any one system is a restoration.[1]",
    "Phasing a PIP across tax years does not help. Amounts paid over more than one year count as the same improvement.[1]",
    "Capitalizing is not the end. Section 179 reaches roofs, HVAC, fire protection and security systems, up to $2,560,000 in 2026, limited by taxable income.[2][3]",
    "Section 179D is gone for any renovation whose construction begins after June 30, 2026.[3][8]",
  ],
  sections: [
    {
      h2: "Why does the IRS treat one hotel as ten separate properties?",
      lead: "Because 26 CFR 1.263(a)-3(e)(2) defines the unit of property for a building as the building structure plus nine named building systems, and makes each system its own test.[1]",
      body: "Section 162(a) deducts ordinary and necessary business expenses and section 263(a) denies a deduction for permanent improvements, so every renovation dollar lands on one side of that line.[9][10] The regulation decides which side by asking what the work improved. For a building it names nine systems that sit outside the building structure and are tested separately: HVAC, plumbing, electrical, all escalators, all elevators, fire protection and alarm, security, gas distribution, and anything later designated in published guidance.[1]\n\nThat division is why hotel renovations capitalize so often. Replacing the guest-room air handlers in a 118-key hotel is a small fraction of the hotel, which sounds like a repair. Measured against the HVAC system alone, it is most of what is being tested.",
    },
    {
      h2: "What are the three tests that turn PIP spending into a capital improvement?",
      lead: "Betterment, restoration, and adaptation to a new or different use. Any one of them applied to the building structure or to a single building system means the amount is capitalized.[1]",
      body: "A betterment corrects a material condition or defect that predates the owner's acquisition, makes a material addition, or is reasonably expected to materially increase the capacity, productivity, efficiency, strength, quality or output of the unit of property.[1] A restoration covers six situations, and the sixth is the one a PIP keeps hitting: replacing a part or combination of parts that comprise a major component or a substantial structural part.[1] A major component performs a discrete and critical function in the unit of property; a substantial structural part comprises a large portion of its physical structure.[1] An adaptation puts the structure or a system to a use not consistent with the owner's ordinary use when the hotel was placed in service.[1]\n\nNote what is absent from all three tests: whether anyone required the work. The regulation says a Federal, state or local regulator's requirement to perform repairs or maintenance to keep operating is not relevant to whether the amount improves the property.[1] No published authority gives a franchisor's PIP mandate better treatment than a government mandate.",
    },
    {
      h2: "Is replacing all the guest-room bathrooms a repair or an improvement?",
      lead: "An improvement. The regulation answers this exact question with a hotel, and the answer is capitalize.[1]",
      body: "Example 24 under paragraph (k) is a hotel owner who updates guest rooms to stay competitive, replacing the bathtubs, toilets and sinks and then repairing, repainting and retiling the bathroom walls and floors because the new plumbing made that necessary. The replacements are in a different style but similar in function and quality.[1]\n\nThe regulation holds that all the bathtubs together, all the toilets together and all the sinks together perform discrete and critical functions in the plumbing system and comprise a large portion of its physical structure. They are therefore major components and substantial structural parts of that system, and the amounts are a restoration of the building.[1] The tile and paint go with them: paragraph (g)(1)(i) capitalizes otherwise deductible repair costs that directly benefit or are incurred by reason of an improvement.[1] The guest-room furniture, carpet, drapes and lamps are section 1245 property and capitalize separately as their own assets.[1]",
    },
    {
      h2: "Where is the line between a repair and an improvement in a hotel?",
      lead: "The regulation draws it twice in the same hotel, using floor area: a lobby floor under 10 percent of the hotel is a repair, and all the public-area floors at about 40 percent are an improvement.[1]",
      body: "In Example 28 a hotel owner replaces the lobby wood flooring with new flooring of similar quality and nothing else. The lobby is less than 10 percent of the hotel's square footage. All the floors in the hotel are a major component of the building structure, but the lobby floors are neither a significant portion of that major component nor a substantial structural part, so no restoration is required.[1]\n\nExample 29 changes one fact. The same owner refreshes all the public areas, replacing the floors in the lobby, hallways, meeting rooms, ballrooms and other public rooms, approximately 40 percent of the hotel's square footage. That is a significant portion of a major component, so the amount is a restoration and capitalizes.[1] The window examples bracket the same line: 100 of 300 windows is not a major component and 200 of 300 is.[1] Those percentages are the regulation's own examples, not a safe harbor, and it decides each case on all the facts and circumstances.[1]",
    },
    {
      h2: "Does phasing the renovation over three tax years make it deductible?",
      lead: "No. Paragraph (g)(3) counts amounts paid over a period of more than one taxable year as part of the same improvement.[1]",
      body: "This is the most expensive misunderstanding in a brand-mandated renovation, because PIPs are almost always phased: two floors at a time, rooms out of service in the shoulder season, the public areas next year. Example 24 is phased exactly that way, four of twenty floors in year one and the rest over two more years, and the regulation capitalizes all three years of cost because they are related amounts paid to improve the same building.[1]\n\nWhether amounts are related to the same improvement depends on the facts and circumstances of the activities performed.[1] Scope documents work against the owner here. A franchisor's PIP letter, a single general contract and one lender draw schedule all describe one project carried out in stages, so breaking that scope into annual pieces to clear a dollar threshold is not a technique the regulation supports.",
    },
    {
      h2: "Which safe harbors can a hotel actually use?",
      lead: "Routine maintenance works on a hotel, the de minimis election helps at the invoice level, and the small-taxpayer safe harbor almost never reaches a hotel at all.[1][4]",
      body: "The routine maintenance safe harbor deems an amount not to improve the property when it is for recurring activities the owner expects to perform to keep the structure or a system in ordinarily efficient operating condition: inspection, cleaning, testing and replacing worn parts with comparable commercially available parts. For a building the activities are routine only if the owner reasonably expects to perform them more than once in the 10-year period beginning when that structure or system was placed in service.[1] Service-contract work on the HVAC qualifies. A once-in-25-years replacement does not.\n\nThe de minimis election is a per-invoice or per-item ceiling, not a project ceiling: $5,000 with an applicable financial statement and $2,500 without, which the IRS raised from the $500 printed in the regulation through Notice 2015-82.[4][5] The small-taxpayer safe harbor is the one that sounds useful and is not. It reaches only a building whose unadjusted basis is $1,000,000 or less, caps annual spend on it at the lesser of 2 percent of that basis or $10,000, and requires average annual gross receipts of $10,000,000 or less.[1] A hotel's basis clears $1,000,000 long before the first PIP.",
    },
    {
      h2: "If I have to capitalize the PIP, what can I still deduct this year?",
      lead: "Section 179 expenses up to $2,560,000 of qualifying cost in 2026, and it reaches four of the nine building systems a PIP touches.[2][3]",
      body: "Section 179(e) defines qualified real property to include qualified improvement property plus four named improvements to nonresidential real property placed in service after the building itself was: roofs, heating, ventilation and air-conditioning property, fire protection and alarm systems, and security systems.[2] A hotel PIP tends to spend heavily in exactly those four. For taxable years beginning in 2026 the aggregate section 179 deduction cannot exceed $2,560,000, reduced dollar for dollar once the cost of section 179 property placed in service that year exceeds $4,090,000.[3]\n\nTwo limits bite before the dollar cap does. Section 179(b)(3) caps the deduction at taxable income from the active conduct of the business, computed without the deduction, and carries the excess forward.[2] And qualified improvement property means improvements to an interior portion of the building, excluding any enlargement, any elevator or escalator, and the internal structural framework, so an elevator modernization gets neither route.[7] None of this changes what a lender sees: [debt service coverage](/glossary/dscr) is computed on net operating income, not on taxable income, so the election moves the owner's cash and not the coverage ratio.",
    },
    {
      h2: "Can I write off the old roof I just tore off?",
      lead: "Yes, by electing a partial disposition under 26 CFR 1.168(i)-8(d)(2), which also stops the tear-off cost from being capitalized. It can convert a repair into an improvement, so the election is not automatically the right answer.[6]",
      body: "Without the election, the retirement of a replaced component is not a disposition: depreciation keeps running on the cost of the component that is no longer there, and no loss is recognized.[6] With it, the retirement is a disposition, depreciation on the retired portion stops, and the owner recognizes a loss equal to the remaining basis.[6] The election is made by reporting that loss on a timely filed original return, including extensions, for the year of the disposition.[6] Paragraph (g)(2)(i) then stops requiring capitalization of the removal cost, regardless of its relation to the improvement.[1]\n\nThere is a trap in the other direction. Examples 3 and 4 under paragraph (g)(2) put comparable replacement shingles that merely stop leaks on the deductible side, then make the identical work a restoration once the owner elects partial disposition and deducts the old component's basis, because paragraph (k)(1)(i) treats the replacement of a component for which a loss was deducted as a restoration.[1] One safety net exists: if the owner deducted the work as a repair, made no election, and the IRS disallows the deduction on examination, the election may be made then.[6]",
    },
    {
      h2: "Is there still an energy deduction for the HVAC and lighting work?",
      lead: "Not for a renovation starting now. Section 179D is terminated for property whose construction begins after June 30, 2026.[3][8]",
      body: "Section 179D allowed a deduction equal to the cost of energy efficient commercial building property placed in service, capped per square foot.[12] For taxable years beginning in 2026 that cap starts at $0.59 per square foot at 25 percent energy savings and rises by $0.02 for each percentage point above 25, to a maximum of $1.19. Where the prevailing wage and apprenticeship requirements are met it starts at $2.97 and rises by $0.12 per point to $5.94.[3][8] Eligible property is interior lighting, the heating, cooling, ventilation and hot water systems, or the building envelope, certified under ASHRAE Standard 90.1.[8]\n\nSection 70507 of the One Big Beautiful Bill Act terminated the deduction for property whose construction begins after June 30, 2026.[3] For a hotel breaking ground on a PIP in late 2026, the lighting and HVAC work earns nothing here, and a renovation budget built on a 179D line from an older write-up is overstated.",
    },
  ],
  table: {
    caption:
      "Hotel renovation line items, the unit of property each is tested against, and whether section 179 reaches it",
    columns: [
      "What the renovation touches",
      "Tested against",
      "Treatment under 1.263(a)-3",
      "Section 179 eligible?",
    ],
    rows: [
      [
        "All guest-bath tubs, toilets and sinks",
        "Plumbing system[1]",
        "Restoration, capitalize. The regulation's own hotel example[1]",
        "No",
      ],
      [
        "Lobby floor only, under 10% of floor area",
        "Building structure[1]",
        "Not a major component, deductible repair[1]",
        "Not applicable",
      ],
      [
        "All public-area floors, about 40% of floor area",
        "Building structure[1]",
        "Restoration, capitalize[1]",
        "No",
      ],
      [
        "Full roof replacement",
        "Building structure[1]",
        "Replacement of a major component, capitalize[1]",
        "Yes, roofs are named[2]",
      ],
      [
        "PTAC units in every guest room",
        "HVAC system, all units together[1]",
        "Tested against the HVAC system, not the hotel[1]",
        "Yes, HVAC is named[2]",
      ],
      [
        "Alarm panel and sprinkler heads",
        "Fire protection and alarm system[1]",
        "Tested against that system alone[1]",
        "Yes, named[2]",
      ],
      [
        "Guest-room locks and lobby cameras",
        "Security system[1]",
        "Tested against that system alone[1]",
        "Yes, named[2]",
      ],
      [
        "Elevator modernization",
        "All elevators, one system[1]",
        "Tested against all elevators together[1]",
        "No. Elevators are excluded from qualified improvement property[7]",
      ],
      [
        "Space converted to a use the hotel was not placed in service for",
        "Building structure and systems[1]",
        "Adaptation test: capitalize if the new use is not consistent with the original use[1]",
        "No",
      ],
      [
        "Twice-yearly PTAC coil cleaning and filters",
        "HVAC system[1]",
        "Routine maintenance safe harbor, deduct[1]",
        "Not applicable",
      ],
    ],
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet puts SOFR, the index a future-funding PIP facility floats over, at 3.90% for September 30, 2026, and marks the spread as not yet published, as it does every lender-set term.[11] The renovation is financed in cash and deducted on a schedule, and the two do not line up: on the hypothetical below, 75.0 percent of the spend buys no first-year deduction at all.",
  },
  workedExample: {
    label: "Hypothetical: $3,540,000 PIP on a 118-key select-service hotel",
    body: 'Hypothetical, and every line is an assumption rather than a market rate. A 118-key select-service hotel runs a brand-mandated PIP of $3,540,000, which is $30,000 per key. Construction begins in September 2026, so section 179D is unavailable.[3][8]\n\nThe eight line items, each tested as the table above tests it: guest-bath tubs, toilets and sinks hotel-wide, $620,000, capitalize. All public-area flooring, $410,000, capitalize. PTAC units in all 118 rooms, $708,000, capitalize. Full roof replacement, $520,000, of which $38,000 is tear-off and disposal, capitalize. Guest-room locks and lobby cameras, $118,000, capitalize. Alarm panel and sprinkler heads, $84,000, capitalize. Guest-room soft goods and case goods, $1,034,000, section 1245 property capitalized as its own assets. Twice-yearly PTAC coil cleaning and filter changes under the service contract, $46,000, deduct under the routine maintenance safe harbor.[1]\n\nWith no elections made, the first-year deduction is the $46,000 of service-contract work, or 1.3 percent of the PIP. Now make the elections. The roof torn off was allocated $300,000 of basis when the hotel was placed in service and had taken 14 full years of straight-line depreciation on a 39-year life: $107,692 accumulated, $192,308 remaining. Electing a partial disposition under 1.168(i)-8(d)(2) recognizes that $192,308 as a loss and stops the $38,000 tear-off from being capitalized, leaving $482,000 of roof cost capitalized.[1][6]\n\nSection 179 then reaches four capitalized lines: roof $482,000, HVAC $708,000, security $118,000 and fire protection $84,000, or $1,392,000 of qualified real property, plus the $1,034,000 of FF&E.[2] That is $2,426,000 of section 179 property placed in service, under the $4,090,000 phaseout threshold and $134,000 inside the $2,560,000 cap, so neither dollar limit binds.[3] Taxable income is the limit that does. Assume $610,000 computed without the deduction: section 179 is allowed to $610,000 and $1,816,000 carries forward.[2]\n\nFirst-year deductions with the elections: $46,000 routine maintenance, $38,000 removal, $192,308 partial disposition loss and $610,000 of section 179, a total of $886,308, or 25.0 percent of the PIP. The same renovation, the same invoices, 19.3 times the first-year deduction. The remaining 75.0 percent depreciates over 39 years or its own class life. Confirm each election with your CPA before filing.',
  },
  faq: [
    {
      q: "Can I deduct a PIP because the franchisor required it?",
      a: "No published authority says so. The regulation states that a Federal, state or local regulator's requirement to perform repairs to keep operating is not relevant to whether the amount improves the property, and it gives a franchisor's mandate no better treatment.[1]",
    },
    {
      q: "Is a hotel roof replacement a repair?",
      a: "A full replacement is the replacement of a major component of the building structure, which the regulation treats as a restoration to capitalize.[1] Section 179 may still expense it, because roofs are named qualified real property.[2]",
    },
    {
      q: "How much can section 179 expense in 2026?",
      a: "Up to $2,560,000, reduced once the cost of section 179 property placed in service that year exceeds $4,090,000, and capped by taxable income from the active conduct of the business, with the excess carried forward.[2][3]",
    },
    {
      q: "Does the small-taxpayer safe harbor help a hotel?",
      a: "Rarely. It reaches only a building with an unadjusted basis of $1,000,000 or less, caps annual spend at the lesser of 2 percent of that basis or $10,000, and requires average annual gross receipts of $10,000,000 or less.[1]",
    },
    {
      q: "Can I still claim 179D on a renovation starting now?",
      a: "No. Section 70507 of the One Big Beautiful Bill Act terminated the deduction for property whose construction begins after June 30, 2026, and the IRS states the old rules apply only on or before that date.[3][8]",
    },
    {
      q: "Does splitting the renovation across tax years make it deductible?",
      a: "No. Amounts paid over more than one taxable year count as the same improvement, and the regulation's hotel example capitalizes three years of phased guest-room work.[1]",
    },
  ],
  sources: [
    {
      n: 1,
      label:
        "26 CFR 1.263(a)-3, Amounts paid to improve tangible property: the nine building systems in (e)(2)(ii)(B), related amounts over more than one year in (g)(3), the regulator-requirement rule in (g)(4), removal costs in (g)(2)(i), the small-taxpayer safe harbor in (h), routine maintenance in (i), betterments in (j), restorations and major components in (k), adaptation in (l), and hotel Examples 24, 28 and 29",
      url: "https://www.law.cornell.edu/cfr/text/26/1.263(a)-3",
      publisher:
        "Code of Federal Regulations, via Legal Information Institute, Cornell Law School",
      accessed: "2026-11-20",
    },
    {
      n: 2,
      label:
        "26 U.S.C. 179, Election to expense certain depreciable business assets: the taxable-income limitation and carryforward in (b)(3) and qualified real property in (e), naming roofs, HVAC, fire protection and alarm systems and security systems",
      url: "https://www.law.cornell.edu/uscode/text/26/179",
      publisher: "U.S. Code, via Legal Information Institute, Cornell Law School",
      accessed: "2026-11-20",
    },
    {
      n: 3,
      label:
        "Rev. Proc. 2025-32, inflation-adjusted items for 2026: section 4.24 (the $2,560,000 section 179 limit and the $4,090,000 phaseout threshold), section 4.25 (the $0.59 to $1.19 and $2.97 to $5.94 per square foot section 179D values) and section 2.11 (OBBBA section 70507 terminated section 179D for property whose construction begins after June 30, 2026)",
      url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-20",
    },
    {
      n: 4,
      label:
        "26 CFR 1.263(a)-1(f), De minimis safe harbor election, including the $5,000 per invoice or per item ceiling for a taxpayer with an applicable financial statement",
      url: "https://www.law.cornell.edu/cfr/text/26/1.263(a)-1",
      publisher:
        "Code of Federal Regulations, via Legal Information Institute, Cornell Law School",
      accessed: "2026-11-20",
    },
    {
      n: 5,
      label:
        "Tangible property final regulations, stating that Notice 2015-82 raised the de minimis safe harbor threshold from $500 to $2,500 per invoice or item for taxpayers without an applicable financial statement, effective for taxable years beginning on or after January 1, 2016",
      url: "https://www.irs.gov/businesses/small-businesses-self-employed/tangible-property-final-regulations",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-20",
    },
    {
      n: 6,
      label:
        "26 CFR 1.168(i)-8, Dispositions of MACRS property: the partial disposition election in (d)(2), its time and manner in (d)(2)(ii), the examples contrasting an elevator replacement with and without the election, and the special rule in (d)(2)(iii) for an IRS examination adjustment",
      url: "https://www.law.cornell.edu/cfr/text/26/1.168(i)-8",
      publisher:
        "Code of Federal Regulations, via Legal Information Institute, Cornell Law School",
      accessed: "2026-11-20",
    },
    {
      n: 7,
      label:
        "26 U.S.C. 168(e)(6), Qualified improvement property, excluding expenditures attributable to the enlargement of the building, any elevator or escalator, and the internal structural framework",
      url: "https://www.law.cornell.edu/uscode/text/26/168",
      publisher: "U.S. Code, via Legal Information Institute, Cornell Law School",
      accessed: "2026-11-20",
    },
    {
      n: 8,
      label:
        "Energy efficient commercial buildings deduction, stating the June 30, 2026 construction-start termination, who is eligible, the lesser-of calculation, the qualifying lighting, HVAC and envelope property, the ASHRAE Standard 90.1 certification, and the 2026 per square foot values (page last reviewed October 27, 2026)",
      url: "https://www.irs.gov/credits-deductions/energy-efficient-commercial-buildings-deduction",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-20",
    },
    {
      n: 9,
      label: "26 U.S.C. 263, Capital expenditures",
      url: "https://www.law.cornell.edu/uscode/text/26/263",
      publisher: "U.S. Code, via Legal Information Institute, Cornell Law School",
      accessed: "2026-11-20",
    },
    {
      n: 10,
      label: "26 U.S.C. 162, Trade or business expenses",
      url: "https://www.law.cornell.edu/uscode/text/26/162",
      publisher: "U.S. Code, via Legal Information Institute, Cornell Law School",
      accessed: "2026-11-20",
    },
    {
      n: 11,
      label: "Matthews Hotel Markets October 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-11-20",
    },
    {
      n: 12,
      label:
        "26 U.S.C. 179D, Energy efficient commercial buildings deduction, allowing a deduction equal to the cost of energy efficient commercial building property placed in service during the taxable year",
      url: "https://www.law.cornell.edu/uscode/text/26/179D",
      publisher: "U.S. Code, via Legal Information Institute, Cornell Law School",
      accessed: "2026-11-20",
    },
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/pip-and-renovation-loans",
      "/hotel-financing/interest-deduction-limits",
      "/hotel-financing/brand-conversion-financing",
      "/hotel-financing/c-pace-financing",
      "/hotel-financing/historic-tax-credits",
      "/hotel-financing/mechanics-liens",
      "/buy-a-hotel/depreciation-and-cost-segregation",
      "/hotel-valuation/pip-and-hotel-value",
    ],
    glossary: ["/glossary/pip", "/glossary/ffe-reserve", "/glossary/noi"],
    data: ["/rates"],
  },
  cta: {
    label: "Talk through how to fund the PIP",
    href: "/contact",
  },
  brandSentence:
    "Matthews Hotel Markets arranges PIP and renovation capital from $5 million and does not give tax advice, so take the capitalization question to your CPA and the funding question to the capital markets desk.",
};

export default page;
