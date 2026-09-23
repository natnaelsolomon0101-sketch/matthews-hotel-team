/**
 * How does depreciation work when I buy a hotel?
 * Answer page: /buy-a-hotel/depreciation-and-cost-segregation
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-09-23): 26 U.S.C. 168, 469, 1060, 1245 and 461(l) on
 * Cornell LII, 26 CFR 1.469-1T, IRS Publication 946 (2025), the 2025
 * Instructions for Form 4562, IRS news release IR-2026-06 announcing Notice
 * 2026-11, and the IRS bonus depreciation FAQ. The worked example was
 * recomputed line by line before saving. Do not hand-edit a number without
 * re-reading its source and bumping `lastUpdated`.
 *
 * Deliberately absent: any "typical" share of a hotel's price that a cost
 * segregation study reclassifies. No public source publishes one, and the
 * page says so rather than printing a range.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "depreciation-and-cost-segregation",
  cluster: "buy-a-hotel",
  isHub: false,
  title: "Hotel Depreciation and Cost Segregation",
  h1: "How does depreciation work when I buy a hotel?",
  description:
    "How a hotel purchase price splits into land, building, improvements and FF&E, what bonus depreciation reaches in 2026, and when you can use the deduction.",
  lastUpdated: "2026-09-23",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "How does depreciation work when I buy a hotel?",
    "Does cost segregation work on a hotel?",
    "Is bonus depreciation still 100 percent for a hotel purchase?",
    "How much of a hotel purchase price can I depreciate in year one?",
    "Can I depreciate the land under my hotel?",
    "Is owning a hotel a passive activity for tax purposes?",
    "What happens to hotel depreciation when I sell?"
  ],
  answer:
    "Split the price first. Land does not depreciate, the building and its structural components run 39 years, and the furniture, fixtures and equipment run 5 or 7 years.[1][2] Since IRS Notice 2026-11, issued January 14, 2026, qualified property acquired after January 19, 2025 carries a permanent 100 percent first-year deduction, so the split is worth more than it used to be.[3]",
  takeaways: [
    "A hotel purchase is one price paid for several kinds of asset. Section 1060 makes buyer and seller allocate it among them by the residual method, and that allocation is what your depreciation schedule is built on.[4]",
    "Bonus depreciation reaches anything with a recovery period of 20 years or less, so it covers the 5-year, 7-year and 15-year buckets and never the 39-year building.[5]",
    "Used property counts. A hotel someone else built qualifies if you never used it before and did not buy it from a related party.[6]",
    "A deduction you cannot use is not a benefit. Section 469 suspends losses from an activity you do not materially participate in, though a hotel is usually not a rental activity because the average period of customer use is seven days or less.[7][8]",
    "None of this changes NOI, the cap rate, or what a lender will lend. It changes your after-tax return, and the furniture returns as ordinary income when you sell.[9]"
  ],
  sections: [
    {
      h2: "What part of a hotel purchase can I actually depreciate?",
      lead: "Everything except the land, and only after the price has been split among the assets you bought, because each bucket runs on its own clock.",
      body: "A hotel does not trade as a building. It trades as a going concern: dirt, a structure, thousands of items of furniture and equipment, and in most deals some intangibles. The code treats that as an applicable asset acquisition, and section 1060 requires the consideration to be allocated among the assets the same way it is allocated under section 338(b)(5), which is the residual method, and a written allocation agreed between buyer and seller binds both of them unless the Secretary finds it inappropriate.[4]\n\nThat last clause is the part buyers skip. The allocation is negotiated once and lived with for years, and the two sides want different answers: the seller wants more of the price on the building, the buyer wants more on the short-lived assets. Put it in the purchase agreement.\n\nOnce the price is split, the clocks differ sharply. Land is not depreciable at all: Publication 946 says plainly that you cannot depreciate the cost of land because land does not wear out, become obsolete, or get used up.[2] The building and its structural components are nonresidential real property, which section 168(c) puts on a 39-year recovery period, straight line with a mid-month convention.[1][5] Furniture, fixtures and equipment sit in the 5-year and 7-year classes: Form 4562's instructions put office furniture and equipment in the 7-year class, along with property not otherwise classified.[5]\n\nOne bucket sits between them. Qualified improvement property is any improvement a taxpayer makes to the interior of a nonresidential building after the building was first placed in service, excluding enlargements, elevators and escalators, and the internal structural framework.[1] Section 168(e)(3)(E)(vii) makes it 15-year property.[1] A guest-room renovation after you take ownership qualifies. What you bought on day one does not, because the improvement has to be made by the taxpayer claiming it."
    },
    {
      h2: "What is a cost segregation study, and does it work on a hotel?",
      lead: "It is an engineering-based analysis of what you actually bought, separating the parts of a building that are really personal property or land improvements so they depreciate over 5, 7 or 15 years instead of 39.",
      body: "The line it draws is the one between section 1245 property and section 1250 property. Section 1245(a)(3) defines section 1245 property as depreciable property that is personal property, plus a short list of other categories.[9] Whatever is left that is a building or a structural component is section 1250 property and runs 39 years.[1]\n\nHotels are unusually dense in the first category, which is why the studies are common in this asset class. A 110-key select-service hotel carries case goods and soft goods in every room, a commercial kitchen and laundry, decorative lighting, signage, pool and fitness equipment, and specialty electrical and plumbing serving equipment rather than the building. None of that is a structural component. An apartment building of the same price carries a fraction of it.\n\nWhat a study cannot do is promise a number in advance. No public source publishes a typical share of a hotel's purchase price that reclassifies, and a percentage quoted before anyone has walked the property is a sales pitch rather than a finding. The result depends on the building, its age, what the last owner renovated and what the engineer can document. Ask a preparer what the study will contain and who signs it, not what percentage they expect to hit.\n\nA purchase is the moment to commission one, because the section 1060 allocation is being struck anyway and one piece of work feeds both schedules. See [what a buyer has to verify](/buy-a-hotel/due-diligence-checklist) for where this sits in the wider diligence list."
    },
    {
      h2: "How much is bonus depreciation worth on a hotel bought in 2026?",
      lead: "One hundred percent of the qualifying buckets in the first year, because the One, Big, Beautiful Bill made the deduction permanent for qualified property acquired after January 19, 2025.",
      body: "Treasury and the IRS announced the rules in news release IR-2026-06 on January 14, 2026, issuing Notice 2026-11. The release states that the legislation provides a permanent 100 percent additional first year depreciation deduction for qualified property acquired, or specified plants that are planted or grafted, after January 19, 2025.[3] Publication 946 carries the same 100 percent figure.[2]\n\nThe reach of that deduction is what matters for a hotel. Form 4562's instructions define qualified property as tangible property depreciated under MACRS with a recovery period of 20 years or less, plus a short list of other categories.[5] The 5-year and 7-year furniture and equipment qualify, and so does 15-year qualified improvement property. The 39-year building never does, however the deal is structured, which is the whole reason the allocation carries weight.\n\nUsed property qualifies too, and buyers of existing hotels often assume otherwise. The IRS bonus depreciation FAQ sets out the conditions: the property was not used by the taxpayer or a predecessor at any time prior to the acquisition, it was not acquired from a related party or a component member of a controlled group, and the taxpayer's basis is not determined in whole or in part by the seller's adjusted basis.[6] A hotel bought at arm's length from an unrelated seller clears all three. That FAQ carries its own disclaimer that it may not be relied upon as legal authority.[6]\n\nThere is also an election to take less: 40 percent, or 60 percent for certain property with longer production periods and certain aircraft, for qualified property placed in service during the first tax year ending after January 19, 2025.[3] Electing a smaller deduction sounds odd until you reach the next question."
    },
    {
      h2: "Can I actually use the deduction in the year I take it?",
      lead: "Only if you materially participate in the hotel, because section 469 disallows a passive activity loss no matter how large the depreciation behind it is.",
      body: "Section 469(a)(1) is blunt: neither the passive activity loss nor the passive activity credit for the taxable year shall be allowed.[7] Section 469(c)(1) defines a passive activity as any activity involving the conduct of a trade or business in which the taxpayer does not materially participate, and section 469(c)(2) sweeps in any rental activity too.[7]\n\nHotels get out of the second half of that, and most owners do not know it. Under 26 CFR 1.469-1T(e)(3)(ii)(A), an activity is not a rental activity if the average period of customer use for the property is seven days or less.[8] A transient hotel is the textbook case. A second exception at (e)(3)(ii)(B) covers an average period of customer use of 30 days or less where significant personal services are provided by or on behalf of the owner, which is where some extended-stay properties land.[8] Either way, the automatic rental label does not attach.\n\nSo the question becomes material participation, and section 469(h)(1) sets the standard: the taxpayer must be involved in the operations of the activity on a basis which is regular, continuous, and substantial.[7] An owner-operator usually clears that. An owner who hires a management company and reads a monthly report has a real fight on their hands.\n\nOne more cap sits above all of it. Section 461(l) disallows an excess business loss for a noncorporate taxpayer, defined as aggregate business deductions over aggregate business gross income plus a threshold of $250,000, or 200 percent of that amount on a joint return, indexed for taxable years beginning after December 31, 2025.[10] A large first-year deduction can hit that ceiling even when section 469 is satisfied. Put the sequence to your CPA before you sign rather than in April: allocate, test section 469, test section 461(l), then decide whether to elect out of the full 100 percent."
    },
    {
      h2: "What does the depreciation cost me when I sell the hotel?",
      lead: "The furniture and equipment come back as ordinary income, which makes the fast deduction a timing shift rather than free money.",
      body: "Section 1245(a)(1) provides that on a disposition of section 1245 property, the amount by which the lower of the recomputed basis or the amount realized exceeds the adjusted basis is treated as ordinary income.[9] Recomputed basis is the adjusted basis plus all adjustments reflecting depreciation or amortization allowed or allowable.[9] In plain terms: every dollar you wrote off on the personal property is pulled back into ordinary income on the way out, to the extent there is gain to pull it from.\n\nThe building follows a different path as section 1250 property, and the full picture on the sale side, including the rate that applies and how a 1031 exchange changes it, is set out at [what taxes you pay when you sell a hotel](/sell-a-hotel/taxes-when-selling-a-hotel).\n\nSo the exercise is a deferral with a rate arbitrage attached. Whether it is a good trade turns on your rate now, your rate then, your hold period and whether you exchange rather than sell: facts about you rather than about the hotel."
    },
    {
      h2: "Does any of this change what the hotel is worth or what I should pay?",
      lead: "No. Depreciation is not a cash expense, it is not in NOI, and no lender sizes a loan on it.",
      body: "Net operating income is struck before depreciation, interest and taxes. The cap rate is applied to that NOI. A lender's coverage and debt yield tests run off the same number. Change the allocation on your closing statement and not one of those figures moves. See [how to value a hotel](/hotel-valuation/how-to-value-a-hotel) and [NOI](/glossary/noi).\n\nWhere it does show up is the after-tax equity return in the early years. Model that on its own line rather than buried in the operating pro forma, so you can see the deal with and without it. Build the underwriting first at [how to underwrite a hotel acquisition](/buy-a-hotel/how-to-underwrite-a-hotel-deal), then layer this on.\n\nAnd keep the sequence straight. A large first-year deduction cannot justify a price, because the deduction is a function of the price you pay, so paying more generates more of it. A hotel that only works after the tax benefit is a hotel that does not work."
    }
  ],
  table: {
    caption:
      "How a hotel purchase price splits for depreciation, under the rules in force on September 23, 2026",
    columns: [
      "What the dollars bought",
      "Recovery period",
      "Eligible for the 100 percent first-year deduction?",
      "What it is when you sell"
    ],
    rows: [
      [
        "Land",
        "Not depreciable[2]",
        "No: nothing to depreciate",
        "Never depreciated, so nothing to recapture"
      ],
      [
        "Building and its structural components",
        "39 years, straight line, mid-month convention[1][5]",
        "No: the recovery period is longer than 20 years[5]",
        "Section 1250 property"
      ],
      [
        "Qualified improvement property: an interior improvement you make after the building was first placed in service, excluding enlargements, elevators, escalators and the internal structural framework[1]",
        "15 years[1]",
        "Yes[5]",
        "Section 1250 property"
      ],
      [
        "Furniture, fixtures and equipment, and other personal property",
        "5 or 7 years, by class[5]",
        "Yes[5]",
        "Section 1245 property: depreciation returns as ordinary income[9]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' September 2026 rate sheet prices the debt on a hotel and says nothing about depreciation, which is the point. As of September 17, 2026 it shows the 10-year Treasury at 4.94 percent and Prime at 7.00 percent, and it marks maximum loan-to-value and the coverage floor as not yet published for every lender type except SBA, because lenders do not publish them.[11] A lender sizes your loan on NOI, which is struck before any of this."
  },
  workedExample: {
    label:
      "Hypothetical: a 110-key select-service hotel bought for $14,000,000, placed in service June 15, 2026",
    body:
      "This hotel does not exist and the allocation percentages are assumptions rather than a benchmark. The point is the shape of the arithmetic.\n\nThe price is $14,000,000, or $127,273 per key. Assume an engineering study splits it three ways: land $1,750,000 (12.5 percent), furniture, fixtures, equipment and other section 1245 personal property $1,680,000 (12.0 percent), and the building with its structural components $10,570,000 (75.5 percent). Those three add to $14,000,000. Assume separately that the buyer completes a $700,000 interior renovation after closing, in the same tax year. That spend is qualified improvement property, because the improvement is made by the taxpayer claiming it, the test the purchase price itself cannot meet.[1]\n\nNow the first year. The $1,680,000 of personal property runs 5 or 7 years and the $700,000 renovation runs 15 years, so both sit inside the 20-year limit and both take the full 100 percent deduction.[5][3] That is $2,380,000. The building runs 39 years straight line on a mid-month convention, and June gives 6.5 months: $10,570,000 divided by 39 is $271,026 a year, and 6.5 twelfths of that is $146,806.[1][5] First-year depreciation is $1,680,000 + $700,000 + $146,806 = $2,526,806.\n\nCompare that with no study. The renovation is still qualified improvement property, because that status comes from what the work is rather than from any study, so it still deducts in full. But the whole $12,250,000 of purchase price above the land now sits on the 39-year schedule: divided by 39 that is $314,103 a year, and 6.5 twelfths is $170,139. First-year depreciation would be $700,000 + $170,139 = $870,139. So the study is worth $2,526,806 - $870,139 = $1,656,667 in year one. Check it the other way: it moved $1,680,000 off a 39-year clock that would have produced only $23,333 this year, and $1,680,000 - $23,333 is the same $1,656,667. At an assumed 37 percent marginal rate that is $612,967 of tax deferred.\n\nThree checks before anyone celebrates it. First, section 469: if a third-party manager runs the hotel and the owner is not involved on a regular, continuous and substantial basis, the loss is suspended rather than used.[7] Assume the hotel produces $1,050,000 of NOI in a full year: first-year depreciation is 2.4 times that, so this is a loss year on paper by a wide margin, and whether the loss is usable turns on participation alone. Second, section 461(l) caps an excess business loss above a threshold of $250,000, or $500,000 on a joint return, indexed for years beginning after 2025.[10] Third, the exit: the $1,680,000 written off on personal property returns as ordinary income under section 1245 on a sale, which at the same assumed 37 percent rate is $621,600 owed later.[9] The benefit is the use of that money in the meantime, not its permanent removal."
  },
  faq: [
    {
      q: "Can I depreciate the land under my hotel?",
      a: "No. Publication 946 states that you cannot depreciate the cost of land because land does not wear out, become obsolete, or get used up.[2] Only the building, the improvements and the personal property depreciate."
    },
    {
      q: "Is bonus depreciation still 100 percent for a hotel bought in 2026?",
      a: "Yes. IRS news release IR-2026-06, issued January 14, 2026 with Notice 2026-11, describes a permanent 100 percent additional first year depreciation deduction for qualified property acquired after January 19, 2025.[3]"
    },
    {
      q: "Does a hotel someone else built qualify for bonus depreciation?",
      a: "Yes, if it meets the used-property conditions: you and any predecessor never used it before, you did not acquire it from a related party, and your basis is not carried over from the seller.[6]"
    },
    {
      q: "How much of a hotel's price does a cost segregation study reclassify?",
      a: "No public source publishes a typical figure, and anyone quoting one before walking the property is guessing. It depends on the building, its age and what the engineer can document."
    },
    {
      q: "Is owning a hotel a passive activity?",
      a: "Not automatically. An activity is not a rental activity where the average period of customer use is seven days or less, which covers most transient hotels.[8] It then turns on material participation.[7]"
    },
    {
      q: "Do I pay the depreciation back when I sell the hotel?",
      a: "On the personal property, yes. Section 1245 treats gain up to the depreciation allowed or allowable as ordinary income.[9] The building follows the section 1250 rules covered on the selling-taxes page."
    },
    {
      q: "Does depreciation change what my hotel is worth?",
      a: "No. NOI is struck before depreciation, the cap rate is applied to NOI, and lenders test coverage off NOI. Depreciation changes your after-tax return, not the asset's value."
    },
    {
      q: "Can Matthews Hotel Markets set up my cost segregation study?",
      a: "No. We sell hotels and arrange the debt behind them, and we do not give tax advice. Allocation, cost segregation and the elections above are work for your CPA and an engineering firm."
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "26 U.S.C. 168: applicable recovery periods in subsection (c), 15-year property in subsection (e)(3)(E)(vii), and the definition of qualified improvement property in subsection (e)(6)",
      url: "https://www.law.cornell.edu/uscode/text/26/168",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-23"
    },
    {
      n: 2,
      label:
        "Publication 946 (2025), How To Depreciate Property: land is not depreciable, the 39-year period for nonresidential real property, and the 100 percent special depreciation allowance",
      url: "https://www.irs.gov/publications/p946",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-23"
    },
    {
      n: 3,
      label:
        "IR-2026-06, Treasury and IRS issue guidance on the additional first year depreciation deduction amended as part of the One, Big, Beautiful Bill, announcing Notice 2026-11, January 14, 2026",
      url: "https://www.irs.gov/newsroom/treasury-irs-issue-guidance-on-the-additional-first-year-depreciation-deduction-amended-as-part-of-the-one-big-beautiful-bill",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-23"
    },
    {
      n: 4,
      label:
        "26 U.S.C. 1060: special allocation rules for certain asset acquisitions, including the residual method and binding written allocation agreements",
      url: "https://www.law.cornell.edu/uscode/text/26/1060",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-23"
    },
    {
      n: 5,
      label:
        "2025 Instructions for Form 4562: MACRS property classes, the 39-year period for nonresidential real property, and qualified property for the special depreciation allowance (recovery period of 20 years or less)",
      url: "https://www.irs.gov/instructions/i4562",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-23"
    },
    {
      n: 6,
      label:
        "Additional First Year Depreciation Deduction (Bonus) FAQ: the requirements for used depreciable property under section 168(k)(2)(E)(ii)",
      url: "https://www.irs.gov/newsroom/additional-first-year-depreciation-deduction-bonus-faq",
      publisher: "Internal Revenue Service",
      accessed: "2026-09-23"
    },
    {
      n: 7,
      label:
        "26 U.S.C. 469: disallowance of the passive activity loss, the definition of a passive activity, and the material participation standard in subsection (h)(1)",
      url: "https://www.law.cornell.edu/uscode/text/26/469",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-23"
    },
    {
      n: 8,
      label:
        "26 CFR 1.469-1T(e)(3)(ii): the exceptions to the definition of a rental activity, including the seven-day average period of customer use",
      url: "https://www.law.cornell.edu/cfr/text/26/1.469-1T",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-23"
    },
    {
      n: 9,
      label:
        "26 U.S.C. 1245: gain from the disposition of certain depreciable property treated as ordinary income, and the definition of section 1245 property",
      url: "https://www.law.cornell.edu/uscode/text/26/1245",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-23"
    },
    {
      n: 10,
      label:
        "26 U.S.C. 461(l): limitation on excess business losses of noncorporate taxpayers, the threshold amount and its cost-of-living adjustment",
      url: "https://www.law.cornell.edu/uscode/text/26/461",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-23"
    },
    {
      n: 11,
      label: "Hotel financing rate sheet, September 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-23"
    }
  ],
  related: {
    hub: "/buy-a-hotel",
    siblings: [
      "/buy-a-hotel/how-to-underwrite-a-hotel-deal",
      "/buy-a-hotel/how-much-money-do-you-need",
      "/buy-a-hotel/due-diligence-checklist",
      "/buy-a-hotel/seller-financing"
    ],
    glossary: ["/glossary/noi", "/glossary/cap-rate", "/glossary/ffe-reserve", "/glossary/per-key"],
    data: ["/rates"]
  },
  cta: {
    label: "Talk to the hospitality team about a hotel you are buying",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets represents hotel buyers and arranges the debt behind an acquisition. We do not give tax advice: the allocation on your closing statement is your CPA's call, not ours."
};

export default page;
