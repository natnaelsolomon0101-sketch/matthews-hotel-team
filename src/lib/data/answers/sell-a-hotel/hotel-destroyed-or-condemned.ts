/**
 * Do I owe tax if my hotel burns down or is condemned?
 * Answer page: /sell-a-hotel/hotel-destroyed-or-condemned
 *
 * Section 1033 involuntary conversions. Sources read 2026-11-06: 26 U.S.C.
 * 1033, 165, 1231 and 1245 on Cornell LII; 26 CFR 1.1033(a)-2, 1.1033(g)-1,
 * 1.165-7 and 1.165-11 through the eCFR versioner API against the 2026-11-03
 * issue of title 26; IRS Publication 544 (2025); and the OpenFEMA
 * DisasterDeclarationsSummaries endpoint.
 *
 * Every figure in the worked example is recomputed by
 * scripts/check-involuntary-conversion-math.mjs. Do not hand-edit a number
 * here without rerunning it, and do not hand-edit prose without bumping
 * `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "hotel-destroyed-or-condemned",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Hotel Destroyed or Condemned: Tax on Proceeds",
  description: "How section 1033 defers tax on a hotel insurance settlement or condemnation award, the two and three-year clocks, and the traps that cost the deferral.",
  h1: "Do I owe tax if my hotel burns down or is condemned?",
  lastUpdated: "2026-11-06",
  authorSlug: "nate-solomon",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "Do I owe tax if my hotel burns down?",
    "Is insurance money for a destroyed hotel taxable?",
    "How long do I have to replace a hotel destroyed by fire?",
    "What is a 1033 exchange for a hotel?",
    "Do I pay tax on a condemnation award for my hotel?",
    "Can I do a 1031 exchange with insurance proceeds?",
    "Is a business interruption payment taxable?",
    "What happens if my lender takes the insurance settlement?"
  ],
  answer: "Usually not right away. Section 1033 defers the gain if you reinvest the proceeds in replacement property within two years of the close of the tax year the gain is first realized, or three years for a condemnation.[1] FEMA declared 58 major disasters in 2026 through November 6, 2026.[2] Deferral is elective, and it is easy to lose.",
  takeaways: [
    "Two years for a fire, a storm or a flood. Three years for a condemnation, because section 1033(g) reaches seizure, requisition and condemnation but, in the regulation's words, not destruction.[1][3]",
    "The replacement standard differs too. A condemnation of business real property is tested for like kind; a casualty on whether the replacement functions the way the hotel did.[3][5]",
    "The business-interruption half of an insurance claim is not conversion proceeds. It is income in the same manner as the profits it stands in for.[4]",
    "Retiring the mortgage out of the settlement is not a replacement, and an award paid straight to the lender is still your amount realized in full.[4]",
    "Matthews Hotel Markets sells hotels from $2 million and gives a free broker opinion of value, the number an owner needs before choosing between rebuilding and selling the site."
  ],
  sections: [
    {
      h2: "Do I pay tax on the insurance money when a hotel is destroyed?",
      lead: "Only on the part you do not reinvest. Section 1033(a)(2) recognizes gain only to the extent the amount realized exceeds the cost of the replacement property.[1]",
      body: "Start with the gain, because the proceeds are not the gain. Amount realized less adjusted basis is the gain, and on a hotel held fifteen years it is larger than owners expect. Section 1033 does not erase it: section 1033(b)(2) moves it into the replacement, whose basis is its cost less the gain left unrecognized.[1]\n\nHow the deferral is claimed is unusual. The regulation makes the election by including the gain in income only to the extent section 1033 allows, then goes further: failing to include it in the regular manner is deemed to be the election, even where none of the details were reported.[4] It can be made by accident. If the replacement never happens, the tax for that year is recomputed on an amended return.[4]\n\nMatthews Hotel Markets is an investment sales and capital markets team, not a tax adviser. Take the election to your CPA."
    },
    {
      h2: "How is a condemnation different from a fire?",
      lead: "Two ways that matter: a three-year replacement period instead of two, and a like-kind standard instead of the functional-use test.[1][3]",
      body: "Section 1033(g)(1) says that where real property held for productive use in a trade or business or for investment is converted by seizure, requisition or condemnation, property of a like kind counts as similar or related in service or use, and section 1033(g)(4) substitutes three years for two.[1] The regulation defines the disposition it covers as the seizure, requisition or condemnation of the property, \"but not destruction\".[3]\n\nThose three words decide the shape of the problem. A hotel taken for a road widening gets the wider standard and the longer clock. A hotel lost to a hurricane gets neither, though both are conversions under the same section.\n\nThe clocks start differently too. A condemnation period runs from the disposition or the earliest date the threat became imminent, whichever is earlier, so an authority that writes in March and closes the taking two years later started the clock with the letter.[1][4] A casualty period starts at the destruction. Either way the deadline runs from the close of the tax year the gain is first realized, not from the loss, so an owner hit on December 20 has nearly a year less than one hit on January 10.[1]"
    },
    {
      h2: "What counts as a replacement hotel?",
      lead: "After a casualty, property that functions the way the hotel did. After a condemnation of business real property, anything of like kind.[3][5]",
      body: "The IRS splits the test by what the owner was doing. Publication 544 says that for an owner-user, similar or related in service or use means the replacement must function in the same way as the property it replaces. For an owner-investor it means the same relationship of services or uses to the taxpayer, judged on management activities, the services provided to tenants and the business risks involved.[5]\n\nAn owner who runs the hotel sits in the first and harder category; one who had it on a long lease to an operator looks more like the second. Settle that early, because it governs whether an apartment building or a net-leased box can absorb the proceeds, and for an operator after a casualty it usually cannot.\n\nOne branch widens it sharply. Section 1033(h)(2) provides that where business or investment property in a disaster area is converted as a result of a federally declared disaster, any tangible property of a type held for productive use in a trade or business counts as similar or related in service or use.[1] For a hurricane total loss that is the difference between having to buy another hotel and being able to buy almost any operating asset. The OpenFEMA file lists 58 of those declarations for 2026 through November 6.[2]\n\nTwo limits on the purchase itself: property taken by gift does not qualify, because the replacement must be bought at a cost under section 1012,[4] and section 1033(i) denies nonrecognition where it comes from a related person.[1]"
    },
    {
      h2: "What about the business-interruption part of the claim?",
      lead: "It is ordinary income, and no reinvestment defers it.[4]",
      body: "A major hotel claim has two halves: the property settlement for the building and the FF&E, and the business-interruption coverage that pays for income the hotel did not earn while it was closed. Only the first half is conversion proceeds.\n\nThe regulation says the proceeds of a use and occupancy contract which insured against actual loss sustained of net profits are not proceeds of an involuntary conversion, but are income in the same manner that the profits for which they are substituted would have been.[4] The money replaces [net operating income](/glossary/noi), so it is taxed like it, in the year received.\n\nSo two numbers have to be pinned down first, and neither arrives from the carrier: adjusted basis at the date of the loss, from the depreciation schedules, and the split of the settlement, from the adjuster's allocation.[4] Until both are fixed, a replacement target means nothing."
    },
    {
      h2: "My lender took the proceeds. Where does that leave me?",
      lead: "Worse off than it looks. Debt paydown is not a replacement, and an award routed to the lender is still your amount realized.[4]",
      body: "Most hotel loans give the lender control of casualty and condemnation proceeds. The tax law does not follow the loan documents.\n\nOn the replacement side, the regulation gives proceeds applied in reduction of indebtedness previously incurred in the purchase, or in a leasehold, as an example of there being no investment in similar property.[4] Retiring the mortgage is not reinvesting.\n\nOn the proceeds side it is firmer. Where a condemnation award is paid to the mortgagee to satisfy a mortgage, the regulation says that award is part of the amount realized whether or not the taxpayer was personally liable, and works it through: on a $100,000 property subject to a $50,000 mortgage, a $60,000 award to the owner plus a $50,000 award to the mortgagee is an amount realized of $110,000.[4]\n\nA leveraged owner therefore faces a gap, not a choice: gain and the replacement target are measured on the whole settlement, while the cash available is what the lender did not sweep."
    },
    {
      h2: "What if the hotel was worth less than my basis?",
      lead: "Then the event produces a deduction rather than a gain, and section 1033 is not the operative provision.[6]",
      body: "Section 165(a) allows a deduction for a loss not compensated for by insurance or otherwise, measured by the adjusted basis used for determining loss on a sale.[6] The casualty regulation takes the lesser of the decline in fair market value and the adjusted basis, with one exception that favours hotel owners: where business property is totally destroyed and its value immediately before the casualty was below its adjusted basis, the adjusted basis is the loss.[7]\n\nThe loss is computed property by property. The regulation measures a business casualty by reference to the single, identifiable property destroyed, so the building, the land improvements and the [FF&E](/glossary/ffe-reserve) are separate computations.[7]\n\nGain recognized here is section 1231 gain, except that section 1231(a)(4)(C) pulls casualty conversions out of the section entirely in any year in which recognized losses from them exceed recognized gains.[9]\n\nTiming is elective too. Section 165(i) lets a disaster loss be taken in the tax year before the disaster.[6] The deadline is six months after the due date of the disaster-year return, without regard to extensions, revocable for ninety days after that.[8] For a calendar-year partnership whose 2026 return is due March 15, 2027, that is September 15, 2027."
    },
    {
      h2: "Does the FF&E change the answer?",
      lead: "It can. A section 1033 deferral caps depreciation recapture on the personal property without switching it off.[10]",
      body: "A hotel is an unusually personal-property-heavy building. Soft goods, case goods, kitchen equipment and the technology stack are all section 1245 property, with years of accelerated depreciation behind them.\n\nSection 1245(b)(4) provides that where gain is not recognized in whole or in part under section 1031 or 1033, the gain taken into account as recapture shall not exceed the gain recognized on the disposition, determined without regard to section 1245, plus the fair market value of acquired property which is not section 1245 property.[10]\n\nThat second element is the trap. Replace a destroyed hotel with a working hotel and the replacement carries its own section 1245 property, so the cap stays near the recognized gain. Replace it with bare land, or a shell fitted out later, and the value of that non-section-1245 property enters the cap and can pull recapture into ordinary income even though every dollar was reinvested."
    }
  ],
  table: {
    caption: "Hotel lost to a casualty versus taken by condemnation, under section 1033",
    columns: [
      "Test",
      "Destroyed by fire, storm or flood",
      "Taken by condemnation, or under its threat",
      "Authority"
    ],
    rows: [
      [
        "Replacement standard",
        "Similar or related in service or use. For an owner-operator it must function the same way",
        "Like kind, the standard used for a 1031 exchange",
        "26 U.S.C. 1033(a), 1033(g)(1); Pub. 544[1][5]"
      ],
      [
        "Replacement period",
        "2 years after the close of the first tax year any gain is realized",
        "3 years after the close of that same year",
        "26 U.S.C. 1033(a)(2)(B)(i), 1033(g)(4)[1]"
      ],
      [
        "When the clock starts",
        "Date the property was destroyed",
        "Earlier of the disposition and the first date the threat became imminent",
        "26 U.S.C. 1033(a)(2)(B); 26 CFR 1.1033(a)-2(c)(3)[1][4]"
      ],
      [
        "Is deferral automatic",
        "No. Elective, and the election is made by leaving the gain out of income",
        "No. Same election",
        "26 CFR 1.1033(a)-2(c)(1), (c)(2)[4]"
      ],
      [
        "Carrier rebuilds in kind",
        "Nonrecognition is mandatory, not elective",
        "Same",
        "26 CFR 1.1033(a)-2(b)[4]"
      ],
      [
        "Federally declared disaster",
        "Any tangible property of a type held for productive use in a trade or business qualifies",
        "No separate branch. Like kind already governs",
        "26 U.S.C. 1033(h)(2)[1]"
      ],
      [
        "Settlement used to retire the mortgage",
        "Not a replacement",
        "An award paid to the lender is still amount realized in full",
        "26 CFR 1.1033(a)-2(c)(9)(ii), (c)(11)[4]"
      ],
      [
        "Replacement bought from a partner",
        "Denied once realized gain for the year exceeds $100,000",
        "Same",
        "26 U.S.C. 1033(i)[1]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' October 2026 rate sheet prices the money an owner has to raise to reach a replacement target: the 10-year Treasury was 5.29% on September 30, 2026 and Prime was 7.00%, and the sheet marks maximum loan-to-value and the coverage floor as not yet published for every lender type except SBA, because lenders do not publish them.[11] A statutory deadline does not move when the debt market does."
  },
  workedExample: {
    label: "Hypothetical: a 112-key select-service hotel lost to a fire",
    body: "Hypothetical. The hotel, the settlement and the basis are assumptions. The rules come from the sources, and every figure is recomputed by scripts/check-involuntary-conversion-math.mjs.\n\nA calendar-year partnership owns a 112-key select-service hotel. A fire on June 10, 2026 is a total loss. Adjusted basis is $6,200,000. The property settlement is $11,500,000, business-interruption coverage pays $1,800,000, and the lender sweeps $7,000,000 to retire the mortgage.\n\nAmount realized is $11,500,000; the $7,000,000 the lender took does not reduce it.[4] Gain realized is $11,500,000 less $6,200,000, or $5,300,000.\n\nThis is destruction, not a condemnation, so the period ends two years after the close of 2026, on December 31, 2028, and the replacement must function the way the hotel did.[1][3]\n\nThe partnership buys a replacement hotel for $10,200,000 in November 2028. Gain recognized is $11,500,000 less $10,200,000, or $1,300,000, exactly the cash kept out. Gain deferred is $4,000,000, and basis in the replacement is $10,200,000 less $4,000,000, or $6,200,000, the old basis again.[1]\n\nNow the funding gap. After the $7,000,000 payoff the settlement leaves $4,500,000, so reaching a $10,200,000 replacement needs $5,700,000 of new debt or equity, and retiring the old loan bought none of it.[4]\n\nThe $1,800,000 of business-interruption money sits outside all of this, taxed as the profits it stands in for.[4]"
  },
  faq: [
    {
      q: "Do I owe tax on insurance money if my hotel burns down?",
      a: "Only on what you do not reinvest. Section 1033 recognizes gain only to the extent the settlement exceeds the cost of replacement property bought inside the replacement period.[1] The election is made by leaving the gain out of income.[4]"
    },
    {
      q: "How long do I have to replace a destroyed hotel?",
      a: "Two years after the close of the first tax year any part of the gain is realized.[1] Three years if the loss was a condemnation.[3] The period can be extended on a written application showing reasonable cause.[4]"
    },
    {
      q: "Can I use a 1031 exchange for insurance proceeds?",
      a: "No. A 1031 exchange requires an exchange of property. A casualty or a condemnation is an involuntary conversion, and section 1033 is the provision that defers gain on one.[1]"
    },
    {
      q: "Is the business interruption payment taxable?",
      a: "Yes, as ordinary income. The regulation says use and occupancy proceeds insuring against actual loss of net profits are not involuntary-conversion proceeds, but income in the same manner as the profits they replace.[4]"
    },
    {
      q: "Does paying off my hotel loan with the settlement count as reinvesting?",
      a: "No. The regulation gives proceeds applied in reduction of indebtedness as an example of no investment in similar property, and an award paid to your lender still counts in full as your amount realized.[4]"
    },
    {
      q: "What if the hotel was worth less than my basis?",
      a: "Then it is a loss. Business property totally destroyed is deducted at adjusted basis where that exceeds the value just before the casualty.[7] A disaster loss may be elected into the prior tax year.[6][8]"
    },
    {
      q: "Does the FF&E get recaptured?",
      a: "It can. Where section 1033 defers the gain, recapture is capped at the recognized gain plus the value of acquired property that is not section 1245 property.[10] Replacing with bare real estate can trigger it."
    }
  ],
  sources: [
    {
      n: 1,
      label: "26 U.S.C. 1033, Involuntary conversions (subsections (a), (b), (g), (h), (i))",
      url: "https://www.law.cornell.edu/uscode/text/26/1033",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-06"
    },
    {
      n: 2,
      label: "OpenFEMA Disaster Declarations Summaries, major disaster (DR) declarations dated in 2026: 58 distinct disaster numbers, most recent DR-4955 declared October 27, 2026",
      url: "https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries",
      publisher: "Federal Emergency Management Agency",
      accessed: "2026-11-06"
    },
    {
      n: 3,
      label: "26 CFR 1.1033(g)-1, Condemnation of real property held for productive use in trade or business or for investment (title 26 issue of November 3, 2026)",
      url: "https://www.ecfr.gov/current/title-26/section-1.1033(g)-1",
      publisher: "National Archives and Records Administration, eCFR",
      accessed: "2026-11-06"
    },
    {
      n: 4,
      label: "26 CFR 1.1033(a)-2, Involuntary conversion into similar property, into money or into dissimilar property (title 26 issue of November 3, 2026)",
      url: "https://www.ecfr.gov/current/title-26/section-1.1033(a)-2",
      publisher: "National Archives and Records Administration, eCFR",
      accessed: "2026-11-06"
    },
    {
      n: 5,
      label: "Publication 544 (2025), Sales and Other Dispositions of Assets, \"Similar or related in service or use\": the owner-user and owner-investor tests",
      url: "https://www.irs.gov/pub/irs-pdf/p544.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-06"
    },
    {
      n: 6,
      label: "26 U.S.C. 165, Losses (subsections (a), (b), (c), (i))",
      url: "https://www.law.cornell.edu/uscode/text/26/165",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-06"
    },
    {
      n: 7,
      label: "26 CFR 1.165-7, Casualty losses (paragraphs (a)(1), (b)(1), (b)(2)) (title 26 issue of November 3, 2026)",
      url: "https://www.ecfr.gov/current/title-26/section-1.165-7",
      publisher: "National Archives and Records Administration, eCFR",
      accessed: "2026-11-06"
    },
    {
      n: 8,
      label: "26 CFR 1.165-11, Election to take disaster loss deduction for preceding year (paragraphs (c), (f), (g)) (title 26 issue of November 3, 2026)",
      url: "https://www.ecfr.gov/current/title-26/section-1.165-11",
      publisher: "National Archives and Records Administration, eCFR",
      accessed: "2026-11-06"
    },
    {
      n: 9,
      label: "26 U.S.C. 1231, Property used in the trade or business and involuntary conversions (subsections (a)(3), (a)(4))",
      url: "https://www.law.cornell.edu/uscode/text/26/1231",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-06"
    },
    {
      n: 10,
      label: "26 U.S.C. 1245, Gain from dispositions of certain depreciable property (subsection (b)(4))",
      url: "https://www.law.cornell.edu/uscode/text/26/1245",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-06"
    },
    {
      n: 11,
      label: "Hotel loan rate sheet, October 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-11-06"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/taxes-when-selling-a-hotel",
      "/sell-a-hotel/1031-without-buying-another-hotel",
      "/sell-a-hotel/selling-a-distressed-hotel",
      "/sell-a-hotel/estate-tax-and-basis-step-up"
    ],
    glossary: [
      "/glossary/noi",
      "/glossary/ffe-reserve",
      "/glossary/per-key"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Talk to the team about a damaged or condemned hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells hotels from $2 million and gives a free broker opinion of value, so an owner choosing between rebuilding and selling the site can price both before the replacement clock runs out."
};

export default page;
