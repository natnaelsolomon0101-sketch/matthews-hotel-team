/**
 * What taxes do I pay when I sell a hotel?
 * Answer page: /sell-a-hotel/taxes-when-selling-a-hotel
 *
 * Written 2026-09-18. IRS and state revenue department primary sources only.
 * Precision note: depreciation on a hotel BUILDING taken straight-line is
 * unrecaptured section 1250 gain (25 percent maximum), NOT ordinary income.
 * Ordinary-income recapture (section 1245) applies to FF&E and other personal
 * property. Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "taxes-when-selling-a-hotel",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Taxes When You Sell a Hotel: A 2026 Owner's Guide",
  h1: "What taxes do I pay when I sell a hotel?",
  description: "Capital gain, unrecaptured section 1250 gain at up to 25%, section 1245 recapture on FF&E, the 3.8% NIIT, state transfer tax and 1031 exchanges.",
  lastUpdated: "2026-09-23",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Do I need a 1031 exchange lined up before I sell my hotel?",
    "How much does it cost to sell a hotel through a broker?",
    "Should I sell my hotel now or wait until next year?",
    "Can I use a 1031 exchange to buy a hotel?",
    "What taxes do I pay when I sell a hotel?",
    "I've owned my hotel for 15 years and depreciated most of it. How much tax will I owe if I sell?",
    "Is depreciation recapture on a hotel taxed as ordinary income?"
  ],
  answer: "A hotel sale is taxed in layers. Per the IRS as of September 18, 2026: gain from building depreciation is unrecaptured section 1250 gain, taxed at a maximum 25 percent. Gain on furniture and equipment, up to the depreciation taken, is ordinary income. The rest is long-term capital gain at up to 20 percent.[1][2] A 3.8 percent net investment income tax and state taxes can apply on top.[3]",
  takeaways: [
    "Building depreciation is not taxed as ordinary income when the building was depreciated straight-line. It is unrecaptured section 1250 gain, capped at 25 percent for individuals.[1][2]",
    "FF&E is different. It is section 1245 property, and gain up to the depreciation taken is ordinary income.[2]",
    "The purchase price allocation among land, building, FF&E and goodwill decides how much gain lands in each layer. Buyer and seller both report it on Form 8594.[4]",
    "A 1031 exchange defers gain on real property only. Since the Tax Cuts and Jobs Act, the FF&E does not qualify.[5]",
    "State transfer taxes range widely. Florida charges 70 cents per $100, and Washington's top tier is 3 percent.[6][7]"
  ],
  sections: [
    {
      h2: "How is the gain on a hotel sale calculated?",
      lead: "Asset by asset. A hotel sale is a sale of land, a building, personal property and often goodwill, and each has its own basis and its own tax treatment.",
      body: "Gain is the amount realized for an asset minus its adjusted basis, which is what you paid plus improvements minus the depreciation allowed or allowable. Because a hotel is an operating business, the IRS treats its sale as the sale of a group of assets. When goodwill or going concern value could attach, both the seller and the buyer must file Form 8594 and allocate the price across asset classes. Furniture, fixtures, buildings, land and equipment are generally Class V, other section 197 intangibles are Class VI, and goodwill and going concern value are Class VII.[4]\n\nThe allocation is negotiated in the purchase agreement, and the two sides want different things. A buyer generally prefers more price on FF&E, which it can depreciate quickly. A seller generally prefers less, because FF&E gain is ordinary income. Settle the allocation with your CPA before you sign, not at closing."
    },
    {
      h2: "How is the building taxed?",
      lead: "The gain equal to the depreciation you took is unrecaptured section 1250 gain, taxed at a maximum of 25 percent. It is not ordinary income if the building was depreciated straight-line.",
      body: "This is the point owners, and a lot of web pages, get wrong. A hotel building is section 1250 property. IRS Publication 544 says gain on section 1250 property is ordinary income only to the extent of \"additional depreciation\", which for property held more than a year means depreciation taken in excess of straight-line.[2] Nonresidential real property is depreciated over 39 years under the general depreciation system, and a hotel is on that side of the line: Publication 946 excludes units in a hotel or motel from the definition of a dwelling unit, so a hotel is not residential rental property.[9] A building depreciated straight-line has no additional depreciation, so none of its gain is ordinary under section 1250.\n\nInstead, the part of the long-term gain that is due to depreciation is \"unrecaptured section 1250 gain\". The IRS taxes it at a maximum 25 percent rate. It cannot be more than your net section 1231 gain for the year.[1][2]\n\nTwo exceptions. A C corporation must treat an extra 20 percent of that depreciation-related gain as ordinary income.[2] And for a building held one year or less, all of the depreciation counts as additional depreciation, so it is recaptured as ordinary income.[2]"
    },
    {
      h2: "How are the land and the rest of the gain taxed?",
      lead: "As section 1231 gain, which is treated as long-term capital gain in a net gain year: 0, 15 or 20 percent for individuals, depending on taxable income.",
      body: "Real property used in a business and held longer than a year is section 1231 property. After the recapture amounts are carved out, the remaining gain on the building and all of the gain on the land is section 1231 gain. If your section 1231 transactions net to a gain for the year, it is treated as long-term capital gain.[2]\n\nThe IRS lists the long-term rates as 0, 15 and 20 percent. For tax years beginning in 2025, the 20 percent rate starts above $600,050 of taxable income for married couples filing jointly and above $533,400 for single filers.[1] A hotel sale usually pushes the owner's income past those lines in the year of sale, so plan on 20 percent for this layer.\n\nOne trap: if you deducted net section 1231 losses in the previous five years, an equal amount of this year's section 1231 gain is taxed as ordinary income first.[2] Most hotels are owned through LLCs and partnerships, so all of these layers pass through to the members' own returns."
    },
    {
      h2: "How is the FF&E taxed?",
      lead: "As ordinary income, up to the depreciation you took. Furniture, fixtures and equipment are section 1245 property.",
      body: "Publication 544 is direct: gain on the disposition of section 1245 property is treated as ordinary income to the extent of depreciation allowed or allowable, and only gain above that is section 1231 gain.[2] Section 1245 property includes depreciable personal property, which covers guest room furniture, televisions, kitchen and laundry equipment and vehicles. Hotel FF&E is usually depreciated fast and is often fully depreciated, so nearly every dollar of price allocated to it is ordinary income.\n\nThe same rule reaches anything else you depreciated as personal property. If a cost segregation study moved parts of the building into shorter-lived personal property classes, you took faster deductions then, and that depreciation comes back as ordinary income now. The other side of that trade, including how a purchase price splits among land, building and personal property, is at [hotel depreciation and cost segregation](/buy-a-hotel/depreciation-and-cost-segregation)."
    },
    {
      h2: "What other taxes apply on top?",
      lead: "Possibly the 3.8 percent net investment income tax, plus state income tax and a state or local transfer tax.",
      body: "The net investment income tax is 3.8 percent on the lesser of net investment income or the amount by which modified adjusted gross income exceeds $250,000 for joint filers or $200,000 for single filers. It reaches gain on property held in a trade or business that is a passive activity for the taxpayer. It does not apply to income from an active business.[3] For a hotel owner, the answer depends on whether that owner materially participates. That is a question of fact for your CPA.\n\nTransfer taxes are set by states and localities. Florida's documentary stamp tax on deeds is 70 cents per $100 of consideration, or 60 cents plus a 45 cent surtax in Miami-Dade County.[6] Georgia charges $1 for the first $1,000 and 10 cents for each additional $100.[10] Washington's real estate excise tax is graduated, from 1.1 percent on the first $525,000 to 3 percent on the portion of price above $3,025,000, before local tax.[7] Some states charge nothing. Who pays is set by local custom and the contract. The rest of the closing cost stack is at [How much does a hotel broker charge?](/sell-a-hotel/broker-fees)."
    },
    {
      h2: "Can a 1031 exchange or an installment sale defer the tax?",
      lead: "A 1031 exchange can defer the gain on the real property. It cannot defer the FF&E, and an installment sale cannot defer recapture.",
      body: "Section 1031 lets you defer gain when you exchange real property held for business or investment for like-kind real property. You have 45 days after the sale to identify replacement property and 180 days to close on it, or until the due date of your tax return, including extensions, if that comes first.[11] Since the Tax Cuts and Jobs Act, section 1031 applies only to real property, not personal or intangible property, and any money or other property you receive is taxable to that extent.[5] For a hotel, that means the price allocated to FF&E and goodwill is taxed even in a well-run exchange. The mechanics, including the hotel-specific problems, are at `/hotel-financing/1031-exchange-hotels`.\n\nSeller financing spreads capital gain over the years you collect payments. It does not spread recapture. Publication 537 requires depreciation recapture income to be reported in the year of sale, whether or not a payment was received that year.[12]"
    }
  ],
  table: {
    caption: "How each part of a hotel sale is taxed federally (individual and pass-through owners, assets held over one year)",
    columns: [
      "Part of the gain",
      "Tax treatment",
      "Maximum federal rate",
      "1031 eligible?"
    ],
    rows: [
      [
        "Land appreciation",
        "Section 1231 gain, long-term capital gain[2]",
        "20%[1]",
        "Yes[5]"
      ],
      [
        "Building: gain equal to straight-line depreciation",
        "Unrecaptured section 1250 gain[2]",
        "25%[1]",
        "Yes[5]"
      ],
      [
        "Building: gain above original cost",
        "Section 1231 gain, long-term capital gain[2]",
        "20%[1]",
        "Yes[5]"
      ],
      [
        "FF&E: gain up to depreciation taken",
        "Section 1245 recapture, ordinary income[2]",
        "Owner's ordinary rate",
        "No[5]"
      ],
      [
        "Goodwill and going concern value",
        "Class VII asset on Form 8594[4]",
        "Ask your CPA",
        "No[5]"
      ],
      [
        "Net investment income tax",
        "Applies if the hotel is a passive activity for the owner[3]",
        "3.8% on top",
        "Not applicable"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 gives the cap-rate band that sets the sale price, and the sale price is the starting number for every tax layer on this page.[8]"
  },
  workedExample: {
    label: "Hypothetical: the federal layers on a $12.0 million hotel sale",
    body: "Hypothetical, for an individual owner at the top rates, held more than one year. Sale price $12.0 million, allocated $2.0 million to land, $9.0 million to the building and $1.0 million to FF&E. Original cost: land $1.5 million, building $7.0 million, FF&E $1.2 million. Depreciation taken: $1.8 million on the building, straight-line, and the full $1.2 million on the FF&E.\n\nLand: $2.0 million minus $1.5 million is $500,000 of gain, at 20 percent, or $100,000. Building: adjusted basis is $7.0 million minus $1.8 million, or $5.2 million, so gain is $9.0 million minus $5.2 million, or $3.8 million. The first $1.8 million is unrecaptured section 1250 gain at a maximum 25 percent, or $450,000. The other $2.0 million is capital gain at 20 percent, or $400,000. FF&E: basis is zero, so all $1.0 million is gain, and all of it is within the $1.2 million of depreciation taken. It is ordinary income at the owner's own rate.\n\nTotal before the FF&E layer: $950,000 of federal tax on $4.3 million of real property gain. If the earlier, wrong reading were true and the $1.8 million of building depreciation were ordinary income, that slice alone would be taxed at the owner's top ordinary rate instead of 25 percent. Add the ordinary tax on $1.0 million of FF&E, possibly 3.8 percent NIIT, and state tax. If this hotel were in Florida outside Miami-Dade, documentary stamp tax at 70 cents per $100 on $11.0 million of real property consideration would be $77,000.[6]"
  },
  faq: [
    {
      q: "What taxes do I pay when I sell a hotel?",
      a: "Federal tax in layers: up to 20 percent on capital gain, up to 25 percent on gain from building depreciation, and ordinary rates on FF&E recapture.[1][2] Then possibly 3.8 percent NIIT, state income tax and a state transfer tax.[3]"
    },
    {
      q: "Is depreciation recapture on a hotel building taxed as ordinary income?",
      a: "Generally no. If the building was depreciated straight-line, there is no ordinary recapture under section 1250. The depreciation-related gain is unrecaptured section 1250 gain, taxed at a maximum 25 percent.[1][2] FF&E recapture is the part taxed as ordinary income."
    },
    {
      q: "I have depreciated my hotel for 15 years. How much tax will I owe?",
      a: "Add up the depreciation taken on the building and expect up to 25 percent on that amount, then up to 20 percent on gain above original cost.[1] FF&E gain is ordinary. Your CPA needs your depreciation schedules to compute it."
    },
    {
      q: "Can I avoid taxes on a hotel sale with a 1031 exchange?",
      a: "You can defer the gain on the real property if you identify replacement property within 45 days and close within 180.[11] The FF&E and goodwill do not qualify, so part of the price is taxed anyway.[5]"
    },
    {
      q: "Do I need the 1031 exchange set up before I close?",
      a: "Yes. The 45-day and 180-day clocks start when you transfer the hotel, so the exchange structure has to be in place before closing.[11] See /hotel-financing/1031-exchange-hotels for the steps."
    },
    {
      q: "Does seller financing spread out the tax?",
      a: "Only part of it. An installment sale spreads capital gain over the payment years, but IRS Publication 537 requires depreciation recapture income to be reported in the year of sale.[12]"
    },
    {
      q: "Is there a transfer tax when I sell a hotel?",
      a: "It depends on the state. Florida charges 70 cents per $100 of consideration.[6] Georgia charges $1 on the first $1,000 and 10 cents per additional $100.[10] Washington's top tier is 3 percent.[7] Some states have none."
    },
    {
      q: "Does the purchase price allocation really matter?",
      a: "Yes. Every dollar allocated to FF&E is likely ordinary income to the seller, while a dollar on land or building is taxed at 20 or 25 percent at most.[1][2] Both sides report the same allocation on Form 8594.[4]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "Topic no. 409, Capital gains and losses (2025 rate thresholds; 25% maximum on unrecaptured section 1250 gain; page last reviewed February 25, 2026)",
      url: "https://www.irs.gov/taxtopics/tc409",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Publication 544 (2025), Sales and Other Dispositions of Assets, chapter 3 (section 1231, section 1245 and section 1250 property) and chapter 4 (unrecaptured section 1250 gain)",
      url: "https://www.irs.gov/publications/p544",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Topic no. 559, Net investment income tax (page last reviewed April 2, 2026)",
      url: "https://www.irs.gov/taxtopics/tc559",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 4,
      label: "Instructions for Form 8594, Asset Acquisition Statement Under Section 1060",
      url: "https://www.irs.gov/instructions/i8594",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 5,
      label: "Like-kind exchanges: real estate tax tips (page last reviewed May 1, 2026)",
      url: "https://www.irs.gov/businesses/small-businesses-self-employed/like-kind-exchanges-real-estate-tax-tips",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 6,
      label: "Documentary Stamp Tax (deed rates, section 201.02, Florida Statutes)",
      url: "https://floridarevenue.com/taxes/taxesfees/Pages/doc_stamp.aspx",
      publisher: "Florida Department of Revenue",
      accessed: "2026-09-18"
    },
    {
      n: 7,
      label: "Real estate excise tax (graduated state rates effective January 1, 2023)",
      url: "https://dor.wa.gov/taxes-rates/other-taxes/real-estate-excise-tax",
      publisher: "Washington State Department of Revenue",
      accessed: "2026-09-18"
    },
    {
      n: 8,
      label: "Matthews Hotel Index, Q1 2026",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-18"
    },
    {
      n: 9,
      label: "Publication 946 (2025), How To Depreciate Property (nonresidential real property, 39-year recovery period; hotel and motel units are not dwelling units)",
      url: "https://www.irs.gov/publications/p946",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    },
    {
      n: 10,
      label: "Real Estate Transfer Tax",
      url: "https://dor.georgia.gov/real-estate-transfer-tax",
      publisher: "Georgia Department of Revenue",
      accessed: "2026-09-18"
    },
    {
      n: 11,
      label: "26 U.S. Code section 1031, Exchange of real property held for productive use or investment",
      url: "https://www.law.cornell.edu/uscode/text/26/1031",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-18"
    },
    {
      n: 12,
      label: "Publication 537 (2025), Installment Sales (depreciation recapture income)",
      url: "https://www.irs.gov/publications/p537",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/broker-fees",
      "/sell-a-hotel/how-to-sell-a-hotel",
      "/sell-a-hotel/documents-needed",
      "/sell-a-hotel/franchise-agreement-expiration",
      "/sell-a-hotel/faq"
    ],
    glossary: [
      "/glossary/noi",
      "/glossary/cap-rate",
      "/glossary/bov"
    ],
    data: [
      "/research/mhi/q1-2026"
    ]
  },
  cta: {
    label: "Get a net proceeds estimate for your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets is a brokerage, not a tax advisor: we model the sale price and the purchase price allocation, and your CPA computes the tax."
};

export default page;
