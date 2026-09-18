/**
 * Can I use historic tax credits to renovate a hotel?
 * Answer page: /hotel-financing/historic-tax-credits
 *
 * Written 2026-09-18 from the IRS rehabilitation credit page (last reviewed
 * July 23, 2026), National Park Service program pages, 26 U.S.C. 47 and 50,
 * 36 CFR 67.7 and the Texas Historical Commission's state credit pages, all
 * read that day. Not tax advice.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "historic-tax-credits",
  cluster: "hotel-financing",
  isHub: false,
  title: "Historic Tax Credits for Hotel Renovations",
  h1: "Can I use historic tax credits to renovate a hotel?",
  description: "The 20% federal historic tax credit on a hotel: which buildings qualify, the substantial rehabilitation test, the 5-year claim, recapture, state credits.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Can I use historic tax credits to renovate a hotel?",
    "I am buying a 1920s downtown hotel. How does the 20 percent historic tax credit work?",
    "What renovation costs count toward the historic tax credit on a hotel?",
    "What happens to historic tax credits if I sell the hotel within five years?",
    "Do I have to follow the Secretary of the Interior's Standards to get the historic credit?",
    "Can I combine state and federal historic tax credits on a hotel?",
    "Does converting an old office building into a hotel qualify for historic tax credits?"
  ],
  answer: "Yes. A hotel is an income-producing use, so a certified historic building renovated as a hotel can earn a federal credit equal to 20 percent of qualified rehabilitation costs, claimed in equal parts over 5 years.[1][2] The work must meet the Secretary of the Interior's Standards, and selling within 5 years triggers recapture.[1][3] The IRS last updated its guidance page on July 23, 2026.[1]",
  takeaways: [
    "The federal credit is 20 percent of qualified rehabilitation expenditures, taken ratably over 5 years starting when the building is placed in service.[1]",
    "The building must be a certified historic structure: listed in the National Register of Historic Places or certified as contributing to a registered historic district.[2]",
    "The rehabilitation must be substantial. Within a 24-month period, or 60 months for a phased project, qualified costs must exceed the greater of $5,000 or the building's adjusted basis.[1][4]",
    "Purchase price, enlargements and furniture do not count. Qualified costs are capital costs of depreciable real property.[2][4]",
    "Recapture runs 5 years after the hotel is placed in service: 100 percent in the first year, stepping down 20 points a year.[6]"
  ],
  sections: [
    {
      h2: "Does a hotel qualify for the federal historic tax credit?",
      lead: "Yes. The federal credit is for historic buildings in a business, commercial or other income-producing use, and a hotel is one.",
      body: "The National Park Service says the building must be depreciable, such as in a business, commercial or other income-producing use, and that owner-occupied residential property does not qualify.[3] The credit is only for buildings, not for other structures, and the building has to keep enough historic material to be worth preserving.[2]\n\nThe building has to be a certified historic structure. That means it is listed individually in the National Register of Historic Places, or it sits in a registered historic district and the Park Service certifies that it contributes to the district's significance. Not every building in a district contributes, and the owner asks for the certification by filing Part 1 of the Historic Preservation Certification Application.[2]\n\nTwo kinds of hotel projects use the credit. One is renovating a historic hotel that is already operating. The other is converting a historic office, bank or warehouse building into a hotel. The Standards allow a new use that requires minimal change to the building's defining characteristics.[7] The Park Service says its program approves about 1,200 projects a year.[3]"
    },
    {
      h2: "How much is the credit, and when do I get it?",
      lead: "The credit is 20 percent of qualified rehabilitation expenditures, and since 2018 it is claimed in five equal annual parts starting the year the building is placed in service.",
      body: "The IRS states the rule this way: the credit is 20 percent of qualified expenses, allocated ratably over a 5-year period on the federal return. The older rule that allowed the whole credit in the placed-in-service year survives only under a transition rule from the 2017 tax law.[1] The 10 percent credit for older non-historic buildings was repealed by the same law, Public Law 115-97.[3]\n\nThe credit also lowers the building's tax basis. Section 50(c) reduces the basis of the property by the amount of the credit, which means less depreciation later and a larger taxable gain on sale.[6]\n\nA tax credit is only worth its face value to someone who owes that much federal income tax and is not blocked by the passive activity limits, which the IRS flags on its credit page.[1] That is why a historic hotel project may bring in a tax credit investor through a partnership or a lease structure. The IRS recognizes claims by partners and shareholders of pass-through entities and, in certain cases, by lessees when the owner elects to pass the credit through.[1] The terms of those investments are private and we do not publish a price for them."
    },
    {
      h2: "Which renovation costs count?",
      lead: "Costs count when they are capital costs for depreciable real property, which covers most of the building work and none of the purchase price, additions or furniture.",
      body: "Section 47 defines a qualified rehabilitation expenditure as an amount properly chargeable to capital account for nonresidential real property, residential rental property, other long-lived real property, or an addition or improvement to them. It excludes the cost of acquiring the building, any expenditure attributable to enlarging the building, and any rehabilitation of a certified historic structure that is not a certified rehabilitation. The owner must use straight-line depreciation on the costs.[4] The IRS adds that rehabilitation includes renovation, restoration and reconstruction but not an enlargement or new construction.[1]\n\nFor a hotel, that splits a renovation budget in a useful way. Structural work, mechanical, electrical and plumbing systems, roofing, windows, elevators and interior construction are building costs. Case goods, soft goods, televisions and other furniture, fixtures and equipment are personal property, not real property, so they fall outside the definition.[4] A new wing or a rooftop addition is an enlargement. The Park Service gives its own examples of costs that may not qualify: a new rear addition, new kitchen appliances and landscaping.[2]\n\nThe line between building and equipment is a cost segregation question with real money on it. Settle it with the project's tax advisor before the budget is final. A brand's renovation scope usually mixes both kinds of cost: see [How do I finance a hotel PIP or renovation?](/hotel-financing/pip-and-renovation-loans)"
    },
    {
      h2: "What is the substantial rehabilitation test?",
      lead: "Qualified costs during a 24-month period the owner selects must exceed the greater of $5,000 or the adjusted basis of the building, with a 60-month period available for phased projects.",
      body: "The adjusted basis is measured at the start of the 24-month period or of the owner's holding period, whichever is later.[4] The Park Service gives the working formula: purchase price, minus the cost of the land, minus depreciation taken, plus prior capital improvements.[2] The 60-month alternative applies when the project is reasonably expected to be completed in phases set out in architectural plans and specifications finished before the work begins.[4]\n\nThis test matters most to a buyer. A long-time owner who has depreciated the building may have a low basis and clear the test easily. A buyer's basis is what it just paid for the building, so a buyer who pays $5,000,000 for the building, land excluded, has to spend more than $5,000,000 on qualified work inside the measuring period. A light renovation of an expensive historic hotel will not qualify. A heavy renovation or a conversion of a cheap building usually will."
    },
    {
      h2: "What are the Secretary's Standards, and who reviews the work?",
      lead: "The Secretary of the Interior's Standards for Rehabilitation are ten principles in 36 CFR 67.7, and the State Historic Preservation Office and the National Park Service review the project against them.",
      body: "The Park Service describes the Standards as regulatory for the tax incentive program and as covering the exterior and the interior of the building, its site, and attached or adjacent new construction.[5] Among them: keep the property's historic character and avoid removing historic materials; repair deteriorated historic features instead of replacing them; do not use treatments such as sandblasting that damage historic materials; and design additions so they are compatible, distinguishable from the old work, and removable without harming the building. The regulation says the Standards are applied in a reasonable manner, taking into consideration economic and technical feasibility.[7] Every element of the project must meet them. Portions that do not conform cannot be carved out.[7]\n\nThe application has three parts on Form 10-168. Part 1 establishes that the building is a certified historic structure. Part 2 describes the proposed work. Part 3 certifies the completed work, and the IRS asks for the date the Park Service signed Part 3 on Form 3468.[1] The IRS says to file Part 1 before starting the work, and it describes relief procedures for an owner who did not file before the building was placed in service.[1]\n\nFor a hotel, look hardest at windows, the historic lobby and corridors, and exterior signage, because the Standards protect distinctive features, finishes and spaces.[7] A franchisor's design standards and the Secretary's Standards can pull in different directions. Get the brand's written sign-off on the historic scope before you file Part 2."
    },
    {
      h2: "What is recapture, and what does it mean if I sell?",
      lead: "If the hotel is sold or stops being investment credit property within five years of being placed in service, part of the credit is added back to the owner's tax.",
      body: "Section 50(a) sets the schedule: 100 percent if the event happens within one full year after the property is placed in service, then 80, 60, 40 and 20 percent for each following year.[6] The IRS lists the common triggers: disposing of your interest in the property, or the property no longer qualifying, within the 5-year period. A casualty that destroys the building inside the period can also trigger it, and so can donating a facade easement within five years.[1]\n\nFor a hotel owner this turns the credit into a five-year hold requirement. A sale in year three gives back 60 percent of the credit.[6] A foreclosure is a disposition too, so the senior loan's default terms matter to anyone relying on the credit. If your plan is to renovate and sell quickly, model the project without the credit. Exit timing is covered in [Should I refinance my hotel or sell it instead?](/hotel-financing/refinance-or-sell) and [What taxes do I pay when I sell a hotel?](/sell-a-hotel/taxes-when-selling-a-hotel)"
    },
    {
      h2: "Can I add a state historic tax credit?",
      lead: "Often, yes. Many states run their own credit, each with its own rate and rules, and a project can qualify for both.",
      body: "We cite only a state agency for a state credit, so here is one worked from its own source. Texas offers a 25 percent credit for the certified rehabilitation of historic buildings in income-producing or nonprofit use, and the Texas Historical Commission's eligibility page names a hotel as an example of a qualifying use.[8][9] Texas has no state income tax, so the credit applies against the state franchise tax or insurance premium tax. The certificate is freely transferable, and the Commission says most applicants benefit by selling it. The program took effect January 1, 2015. Its minimum is $5,000 of qualified costs, with no substantial rehabilitation test, and it excludes property acquisition, new additions, furniture, parking lots, sidewalks and landscaping. The work must meet the same Secretary's Standards.[9]\n\nOther states differ on rate, caps, transferability and whether funds are limited each year. Read the state historic preservation office's page for the state the hotel is in, and apply before the work is finished. Both programs require the application to be submitted before the project is completed.[9]"
    },
    {
      h2: "How do historic credits fit with the hotel's loan?",
      lead: "The credit is equity that arrives after the work is done, so the construction period still has to be financed with debt and cash.",
      body: "The federal credit starts when the building is placed in service and then arrives over five tax years.[1] A project that counts on it needs either a tax credit investor who pays in during or after construction, or a bridge against the future credits. Neither is a published market, and terms are private.\n\nThe senior loan is sized the way any hotel renovation or construction loan is sized: see [How do I finance hotel construction in 2026?](/hotel-financing/construction-loans). Where the state allows it, the energy-related part of a historic renovation can also be financed with a property assessment: see [Can I use C-PACE financing on a hotel?](/hotel-financing/c-pace-financing) One limit from the IRS: generally you cannot claim the energy credit on the same property for which you claimed the rehabilitation credit.[1]\n\nThis page explains the rules. It is not tax advice, and a historic credit project needs a tax advisor and a preservation consultant from the first budget."
    }
  ],
  table: {
    caption: "Federal historic tax credit and the Texas state credit, side by side",
    columns: [
      "Feature",
      "Federal credit (IRC section 47)",
      "Texas state credit"
    ],
    rows: [
      [
        "Rate",
        "20% of qualified rehabilitation expenditures[1]",
        "25%[8]"
      ],
      [
        "Eligible building",
        "Certified historic structure in an income-producing use[2][3]",
        "National Register, Recorded Texas Historic Landmark or State Antiquities Landmark; income-producing or nonprofit use[9]"
      ],
      [
        "Minimum spend",
        "More than the greater of $5,000 or the building's adjusted basis, in 24 or 60 months[4]",
        "$5,000 of qualified costs[9]"
      ],
      [
        "Design standard",
        "Secretary of the Interior's Standards for Rehabilitation[7]",
        "The same Standards[9]"
      ],
      [
        "When it is claimed",
        "Ratably over 5 years from placed in service[1]",
        "Generally the year placed in service; franchise tax credit carries forward 5 years[9]"
      ],
      [
        "Transferable",
        "Claimed by owners, by partners and shareholders of pass-through owners, and by certain lessees[1]",
        "Yes, the certificate is freely transferable[9]"
      ],
      [
        "Not eligible",
        "Acquisition cost, enlargements, non-certified work[4]",
        "Acquisition, new additions, furniture, parking lots, sidewalks, landscaping[9]"
      ],
      [
        "Recapture",
        "5 years: 100%, 80%, 60%, 40%, 20%[6]",
        "See the Texas Historical Commission's program rules[9]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet shows Prime at 7.00% and SOFR at 3.85% as of September 17, 2026, the two indexes a construction or renovation loan floats over, and marks the construction spread as not yet published. A historic credit lowers the equity a project needs. It does not change what the senior loan costs.[10]"
  },
  workedExample: {
    label: "Hypothetical: a $9.0M renovation of a 1920s downtown hotel",
    body: "Hypothetical. A buyer pays $6,000,000 for a 1920s hotel listed in the National Register. $1,000,000 of the price is land, so the building's adjusted basis is $5,000,000. The renovation budget is $9,000,000: $7,500,000 of building work that qualifies, $1,000,000 of furniture, fixtures and equipment, and $500,000 for a new rooftop addition. The split is an assumption for the arithmetic. A tax advisor sets the real one.\n\nSubstantial rehabilitation test. $7,500,000 of qualified costs exceeds the $5,000,000 adjusted basis, so the project passes, provided the costs fall inside the 24-month period or the project was planned in phases for the 60-month period.[4] The $1,500,000 of furniture and addition costs do not count.[4]\n\nFederal credit. 20 percent of $7,500,000 equals $1,500,000, claimed at $300,000 a year for 5 years from the year the hotel is placed in service.[1]\n\nBasis. The building's depreciable basis is reduced by the $1,500,000 credit.[6]\n\nRecapture. If the owner sells between two and three full years after the hotel is placed in service, the recapture percentage is 60 percent. 60 percent of $1,500,000 is $900,000 of credit at stake.[6] How that interacts with credits not yet claimed is a calculation for the tax advisor.\n\nState credit. If the hotel were in Texas and the same $7,500,000 qualified under the state's rules, the state credit would be 25 percent, or $1,875,000, as a transferable certificate.[8][9]\n\nFederal and state credits together come to $3,375,000 against a total project cost of $15,000,000. None of it arrives before the hotel reopens."
  },
  faq: [
    {
      q: "How much is the federal historic tax credit for a hotel?",
      a: "20 percent of qualified rehabilitation expenditures, claimed in equal parts over 5 years beginning when the building is placed in service. The building must be a certified historic structure and the work must be certified by the National Park Service."
    },
    {
      q: "Does my hotel have to be on the National Register?",
      a: "It must be listed individually in the National Register of Historic Places, or be certified by the National Park Service as contributing to a registered historic district. You request that certification with Part 1 of the application."
    },
    {
      q: "Does hotel furniture count toward the historic tax credit?",
      a: "No. Qualified costs are capital costs of depreciable real property, so building work counts and furniture, fixtures and equipment do not. The purchase price and any enlargement of the building are excluded too."
    },
    {
      q: "What if I sell the hotel within five years?",
      a: "Part of the credit is recaptured: 100 percent if the sale is within the first year after the hotel is placed in service, then 80, 60, 40 and 20 percent in the following years. After five years there is no recapture."
    },
    {
      q: "Can I start construction before the Park Service approves my application?",
      a: "You can, at your own risk. The work is judged against the Standards whether or not it was approved in advance, and non-conforming work can cost the whole credit. The IRS says to apply with Part 1 before starting the work."
    },
    {
      q: "Can I convert an old office building into a hotel and claim the credit?",
      a: "Yes, if the building is a certified historic structure and the conversion meets the Standards, which allow a new use that requires minimal change to the building's defining characteristics. The substantial rehabilitation test still applies."
    },
    {
      q: "Is there still a 10 percent credit for old buildings that are not historic?",
      a: "No. Public Law 115-97, enacted December 22, 2017, repealed the 10 percent credit for non-historic buildings, subject to transition rules. Only the 20 percent credit for certified historic structures remains."
    },
    {
      q: "Can I use historic credits and C-PACE on the same hotel?",
      a: "They are separate programs, and the Texas PACE program says its financing complements historic incentives.[11] The IRS notes you generally cannot claim the federal energy credit on the same property as the rehabilitation credit. Have the tax advisor check the combination."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Rehabilitation credit (page last reviewed July 23, 2026): 20 percent credit, 5-year ratable claim, measuring periods, Form 3468, recapture, easements, energy credit",
      url: "https://www.irs.gov/businesses/small-businesses-self-employed/rehabilitation-credit",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Historic Preservation Tax Incentives: Eligibility Requirements",
      url: "https://www.nps.gov/subjects/taxincentives/eligibility-requirements.htm",
      publisher: "National Park Service, Technical Preservation Services",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Historic Preservation Tax Incentives: About the incentives",
      url: "https://www.nps.gov/subjects/taxincentives/about.htm",
      publisher: "National Park Service, Technical Preservation Services",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "26 U.S.C. 47, Rehabilitation credit: qualified rehabilitated building, substantial rehabilitation, qualified rehabilitation expenditures",
      url: "https://www.law.cornell.edu/uscode/text/26/47",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "The Secretary of the Interior's Standards for Rehabilitation",
      url: "https://www.nps.gov/subjects/taxincentives/secretarys-standards-rehabilitation.htm",
      publisher: "National Park Service, Technical Preservation Services",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "26 U.S.C. 50, Other special rules: recapture percentages at (a)(1)(B), basis adjustment at (c)",
      url: "https://www.law.cornell.edu/uscode/text/26/50",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "36 CFR 67.7, Standards for Rehabilitation, with 36 CFR 67.6(b) on certification of the whole project",
      url: "https://www.law.cornell.edu/cfr/text/36/67.7",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "Historic Preservation Tax Credits: federal 20 percent and Texas 25 percent programs",
      url: "https://thc.texas.gov/preserve/grants-tax-credits-and-funding/historic-preservation-tax-credits",
      publisher: "Texas Historical Commission",
      accessed: "2026-09-18"
    },
    {
      n: 9,
      label: "Texas Historic Preservation Tax Credit Program: eligibility, eligible and ineligible costs, transferability, application parts",
      url: "https://thc.texas.gov/preserve/grants-tax-credits-and-funding/historic-preservation-tax-credits/texas-historic",
      publisher: "Texas Historical Commission",
      accessed: "2026-09-18"
    },
    {
      n: 10,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 11,
      label: "Property Owner FAQ: TX-PACE complements historic grants and tax incentives",
      url: "https://www.texaspaceauthority.org/home/resources/faqs/property-owner-faq/",
      publisher: "Texas PACE Authority",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/pip-and-renovation-loans",
      "/hotel-financing/c-pace-financing",
      "/hotel-financing/opportunity-zones",
      "/hotel-financing/construction-loans",
      "/hotel-financing/brand-conversion-financing"
    ],
    glossary: [
      "/glossary/pip",
      "/glossary/ffe-reserve",
      "/glossary/franchise-agreement"
    ],
    data: [
      "/rates",
      "/tools/refinance-vs-sell",
      "/tools/hotel-loan-sizing-calculator"
    ]
  },
  cta: {
    label: "Talk through financing a historic hotel renovation",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sizes the senior loan on historic hotel projects around the fact that credit equity arrives after the hotel reopens, not before."
};

export default page;
