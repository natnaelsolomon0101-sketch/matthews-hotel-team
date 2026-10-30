/**
 * Should I convert my hotel to apartments instead of selling it?
 * Answer page: /hotel-valuation/hotel-to-apartment-conversion
 *
 * Written 2026-10-30 from the statute, the regulations and one state code
 * bulletin, all read in that run. Every figure in the worked example is
 * recomputed by scripts/check-conversion-math.mjs.
 *
 * The spine of the page: four separate rulebooks decide whether a building is
 * a hotel or apartments, and none of them applies the same test. Do not
 * flatten that into "converting switches you to a 27.5-year life"; the tax
 * test is annual and can switch back, the code test is a length of stay, the
 * SBA test is about the borrower rather than the building, and the fair
 * housing design test turns on a first occupancy that a standing hotel has
 * already had.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "hotel-to-apartment-conversion",
  cluster: "hotel-valuation",
  isHub: false,
  title: "Converting a Hotel to Apartments",
  h1: "Should I convert my hotel to apartments instead of selling it?",
  description: "Four rulebooks decide whether your building is a hotel or apartments, and none uses the same test. What converting does to depreciation, SBA and value.",
  lastUpdated: "2026-10-30",
  authorSlug: "miles-cortez",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Should I convert my hotel to apartments instead of selling it?",
    "Is my hotel worth more as apartments?",
    "What happens to depreciation when I convert a hotel to apartments?",
    "Can I keep my SBA loan if I turn my hotel into apartments?",
    "Do I have to bring a converted hotel up to accessibility standards?",
    "Is it better to sell my hotel and 1031 into apartments?",
    "How many days of stay makes my hotel an apartment building?",
    "Can I rent some rooms nightly and some monthly?"
  ],
  answer: "Convert only if the building is worth more as apartments than as a going concern. Four rulebooks decide whether you own a hotel or apartments and none uses the same test: tax law tests gross rental income every year and can flip you back, the building code tests a 30-day stay, SBA tests whether you still operate a business.[1][2][3][4] All read October 30, 2026.",
  takeaways: [
    "Four rulebooks decide whether the building is a hotel or apartments, and none uses the same test.[1][2][3][4][5]",
    "The switch from a 39-year to a 27.5-year depreciation life is tested every taxable year, so a half-converted hotel can land back on 39 years.[1][2]",
    "It is worth most early: in the example below, $68,205 a year more depreciation in year three and $2,284 a year less in year twelve.[1][2]",
    "SBA 7(a) and 504 leave the table, because a landlord who does not occupy the financed asset is an ineligible passive business.[4]",
    "Converting is not a sale and triggers no gain. Selling and exchanging into apartments under section 1031 is the alternative that does.[2][6]"
  ],
  sections: [
    {
      h2: "Is my hotel worth more as apartments than as a hotel?",
      lead: "That is the only question that decides it, and it takes two numbers: the hotel's value as a going concern today, and the residential value of the finished building less every dollar it takes to get there.",
      body: "A hotel is valued as a going concern, which means the income being capitalized belongs to an operating business and not to a lease. Apartments are valued on contract rent. Different buyers, different lenders, different cap rates, so a per-key number from one tells you very little about the other.\n\nThe honest version is subtraction. Price the hotel as it stands. Then price the finished apartment building and subtract hard cost, soft cost, carry through a vacant lease-up, the franchise exit, and whatever the building department requires at the change of use. Converting wins only when the second number clears the first by enough to pay for the risk of a project that takes years.\n\nThe item most often underestimated there is physical rather than legal. A limited-service guest room has no kitchen and no separate utility metering, and the plumbing stack serving a bathroom was not sized or located for a kitchen sink and a dishwasher. Whether kitchens can be added at all, and at what cost, is a question for an architect and a mechanical engineer on your building. No public source publishes a credible cost per key for that work, so this page does not print one.\n\nMatthews Hotel Markets does not develop, convert or appraise buildings and does not advise on construction cost. What the hotel is worth today is the half of this comparison the team can price, at no cost, before you spend anything on a conversion study."
    },
      {
      h2: "Which rulebook decides whether my building is a hotel or apartments?",
      lead: "Four do, through five separate tests, and they disagree, because each was written for a different purpose and applies its own test at its own moment.",
      body: "The table below sets the five tests side by side. Federal income tax contributes two of them, which is why four rulebooks produce five answers. Not one of the five measures the thing an owner thinks of as the conversion, which is the physical building.\n\nFederal income tax looks at money and unit counts, and looks again every year.[1] The depreciation change-of-use regulation compares primary use this year against primary use last year.[2] The building code looks at how long guests stay.[3] SBA looks at the borrower rather than the building, and asks whether someone still operates a business in it.[4] The Fair Housing Act's design rules look at one historical fact, whether the building had ever been used for anything before.[5]\n\nSo a building halfway through a conversion can be apartments under one of these and a hotel under another in the same year, with a cost attached to each answer. The sections below take the three that cost the most."
    },
    {
      h2: "What does converting do to my depreciation?",
      lead: "It can move the building from a 39-year recovery period to a 27.5-year one, but only if it meets a two-part test in 26 U.S.C. 168(e)(2)(A), and the benefit depends on how far into the 39-year schedule you are.",
      body: "Section 168(c) sets the two recovery periods: 27.5 years for residential rental property and 39 years for nonresidential real property.[1] A hotel is the second, an apartment building the first. Moving between them is worth real money, but the statute does not let you choose.\n\nSection 168(e)(2)(A)(i) defines residential rental property as any building or structure if 80 percent or more of the gross rental income from that building for the taxable year is rental income from dwelling units.[1] Clause (ii)(I) then defines a dwelling unit as a house or apartment used to provide living accommodations, and expressly excludes a unit in a hotel, motel, or other establishment more than one-half of the units in which are used on a transient basis.[1] Both parts have to be satisfied.\n\nWhen they are, 26 CFR 1.168(i)-4 governs the mechanics. Paragraph (d)(1)(ii) covers property reclassified under section 168(e) because its use changed, and (d)(2)(iii) deems the change to occur on the first day of the year of change.[2] Where the change produces a shorter recovery period, (d)(3)(i)(A) determines depreciation as though the property were placed in service that year, and (d)(3)(i)(B) computes it on the adjusted depreciable basis at the first day of the year, without the convention in the year of change.[2]\n\nSo you restart a full 27.5-year straight-line life on the basis you have left. That is generous early in a 39-year schedule and nearly meaningless late in one, because by year twelve the remaining 39-year life is already close to 27.5 years. The worked example below runs both points and the difference reverses sign."
    },
    {
      h2: "Can I be put back on a 39-year life the next year?",
      lead: "Yes. The section 168(e)(2)(A) test is applied for the taxable year, so it is re-run annually and it can go either way.",
      body: "This is the part that catches owners who convert in stages. Nothing in the statute makes the residential classification stick once you have claimed it.\n\nRead the two parts together. If more than one-half of the units are used on a transient basis in a given year, then under clause (ii)(I) no unit in that building is a dwelling unit at all.[1] If no unit is a dwelling unit, the gross rental income from dwelling units is zero, the 80 percent test cannot be met, and the building is nonresidential real property that year.\n\nA phased conversion that keeps half the rooms on the brand's reservation system to carry debt service while the other half is rebuilt is therefore the worst of both positions: the project costs are being spent and the depreciation benefit that justified them has not arrived. 26 CFR 1.168(i)-4(d)(2)(i) measures a change in use by comparing primary use in the taxable year against primary use in the immediately preceding year, and allows primary use to be determined in any reasonable manner that is consistently applied.[2] Year-by-year comparison is the design of the rule, not a gap in it.\n\nSo the unit mix and the room-night revenue on December 31 matter more than the construction schedule. Have your accountant run both tests on the forecast before the conversion is sequenced, not after."
    },
    {
      h2: "What happens to SBA financing when a hotel becomes apartments?",
      lead: "It goes away. 13 CFR 120.110(c) makes passive businesses owned by developers and landlords that do not actively use or occupy the assets improved with the loan proceeds ineligible for SBA business loans.[4]",
      body: "An operating hotel is one of the clearest active small businesses in commercial real estate: the owner runs a front desk, employs staff and sells a service nightly. That is why SBA 7(a) and 504 reach hotels at all. An apartment building is the textbook passive landlord. The regulation carves out only Eligible Passive Companies under 13 CFR 120.111, which lets an operating company's affiliate hold the real estate, and that is not a landlord renting to tenants.[4]\n\nThis matters in two directions. If an SBA loan is on the building today, converting changes the use of the collateral and the character of the borrower, and that is a conversation to have with the lender and the SBA before a permit is pulled. If there is no SBA loan today, converting removes the cheapest fixed-rate debt a hotel owner can reach and replaces it with conventional multifamily debt priced on a different basis.\n\nThe rest of the lending picture moves with it. A hotel lender underwrites an operating business with revenue per available room and a franchise agreement; an apartment lender underwrites a rent roll. The documents, reserves and guarantees differ accordingly. What any lender will actually quote on either is not published by anyone, and this page does not guess at it."
    },
    {
      h2: "Do fair housing accessibility rules apply to a converted hotel?",
      lead: "The design and construction requirements in 24 CFR 100.205 reach covered multifamily dwellings for first occupancy after March 13, 1991, and 24 CFR 100.201 defines first occupancy as a building that has never before been used for any purpose.[5]",
      body: "Read as written, those two provisions mean the adaptable-design features in 24 CFR 100.205(c), an accessible route into and through the unit, reinforced bathroom walls for later grab bars, and kitchens and bathrooms a wheelchair can turn in, attach at a building's first occupancy.[5] A standing hotel has been used before, so it has already had one.\n\nThat is a narrow reading of a narrow rule, and it is worth being precise about what it does not mean. The Fair Housing Act's prohibitions in 24 CFR 100.202 apply to any dwelling, however old, and so do the duties to permit reasonable modifications and make reasonable accommodations.[5] Many jurisdictions apply their own accessibility requirements at a change of occupancy that are stricter, and the building department, not this page, decides what your permit requires.\n\nAsk the building department in writing which accessibility standard applies at the change of occupancy. It is one of the few conversion costs that can be bounded before design begins."
    },
    {
      h2: "Should I sell and 1031 into apartments instead of converting?",
      lead: "It is the cleaner route to the same exposure, and 26 U.S.C. 1031(a)(1) defers the gain on the real property if the timing is met.[6]",
      body: "Section 1031(a)(1) says no gain or loss is recognized on the exchange of real property held for productive use in a trade or business or for investment if it is exchanged solely for real property of like kind held for the same purposes.[6] A hotel and an apartment building are both real property held for investment, so the swap is available. Section 1031(a)(3) sets the clock: identify replacement property within 45 days of transferring the relinquished property and complete the exchange within 180 days.[6]\n\nWeigh the two on what each hands you. Converting keeps the asset, triggers no tax, and makes you the developer of a multi-year project with lease-up risk and a capital stack to raise. Selling and exchanging triggers gain that section 1031 can defer, and hands you a built, leased building on day one. One is a development decision, the other an allocation decision.\n\nTwo cautions, both for your own advisers rather than a web page. A hotel sale is not purely real property: furniture, fixtures and equipment and any going-concern or goodwill value are not, so the part of the price allocated to them falls outside section 1031 as it has read since 2018. And 45 days is short for a buyer who has not started looking. Matthews Hotel Markets sells hotels and represents 1031 buyers, so the sale side of that route is work the team does."
    }
  ],
  table: {
    caption: "Four rulebooks, five tests for whether a building is a hotel or apartments, and no two alike",
    columns: [
      "Rulebook",
      "The test it applies",
      "When it is tested",
      "What turns on the answer"
    ],
    rows: [
      [
        "Federal income tax, 26 U.S.C. 168(e)(2)(A)",
        "80 percent or more of gross rental income from dwelling units, and a unit is not a dwelling unit if it sits in an establishment more than one-half of whose units are used on a transient basis",
        "Every taxable year, both parts",
        "A 27.5-year or a 39-year depreciation life[1]"
      ],
      [
        "Depreciation change of use, 26 CFR 1.168(i)-4(d)",
        "Primary use this taxable year against primary use in the immediately preceding year, determined in any reasonable manner applied consistently",
        "Year over year, deemed to occur on the first day of the year of change",
        "Whether the new life starts, and the basis it starts on[2]"
      ],
      [
        "Building code, Group R-1 against Group R-2",
        "Length of stay. Hotels and motels are R-1, transient, which New Jersey's adoption of the 2015 IBC states as occupancy for not more than 30 days; apartment houses are R-2, permanent",
        "Once, at the change of use, when the permit is issued",
        "Egress, separation, sprinklers and the certificate of occupancy[3]"
      ],
      [
        "SBA eligibility, 13 CFR 120.110(c)",
        "Whether the borrower actively uses or occupies the financed asset, or is a passive developer or landlord outside the Eligible Passive Company route in 120.111",
        "At application, and as a condition for the life of the loan",
        "Access to 7(a) and 504 at all[4]"
      ],
      [
        "Fair housing design rules, 24 CFR 100.201 and 100.205",
        "First occupancy, defined as a building that has never before been used for any purpose",
        "Once, at the building's first occupancy, which a standing hotel has already had",
        "Whether the adaptable-design features attach to the units[5]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' October 2026 rate sheet shows the 25-year SBA 504 debenture at 6.54% as of September 10, 2026, the cheapest fixed-rate money on the sheet, and 13 CFR 120.110(c) keeps it available to an owner who operates the hotel and away from a landlord who rents apartments.[7]",
  },
  workedExample: {
    label: "Hypothetical: the same depreciation switch in year three and in year twelve",
    body: "Hypothetical, and the arithmetic is the point rather than the building. A 112-key limited-service hotel is placed in service in March 2015 with $8,400,000 allocated to the building; the shorter-lived cost-segregation items are set aside so only the 39-year building is in view. The annual deduction is $8,400,000 divided by 39, or $215,384.62, and the mid-month convention gives 2015 nine and a half months of that, $170,512.82.\n\nConvert late. Accumulated depreciation through December 31, 2026 is $170,512.82 plus eleven full years of $215,384.62, which is $2,369,230.77, for a total of $2,539,743.59. The adjusted depreciable basis on January 1, 2027 is $8,400,000 less that, or $5,860,256.41. Under 26 CFR 1.168(i)-4(d)(3)(i) the building is treated as placed in service in 2027 on that basis over 27.5 years with no convention in the year of change, so the 2027 deduction is $5,860,256.41 divided by 27.5, or $213,100.23.[2] Staying a hotel would have deducted $215,384.62, so converting costs $2,284.38 of depreciation in the first year.\n\nConvert early. Run the same change of use on January 1, 2018. Accumulated depreciation is $170,512.82 plus two full years of $215,384.62, which is $430,769.23, for a total of $601,282.05, and the adjusted basis is $7,798,717.95. Over 27.5 years that is $283,589.74 a year against $215,384.62 as a hotel: $68,205.13 more, a 31.7 percent increase.\n\nThe sign flips because of the remaining life. By January 2027 the building has used about 11.79 of its 39 years, leaving about 27.21, already shorter than the 27.5 the switch hands back. Every figure here is recomputed by scripts/check-conversion-math.mjs."
  },
  faq: [
    {
      q: "Does converting my hotel to apartments trigger a tax bill?",
      a: "No. 26 CFR 1.168(i)-4(c) treats only a conversion to personal use as a disposition.[2] A change between two business uses is not a sale, so there is no gain and no recapture. You redetermine depreciation instead."
    },
    {
      q: "How long before my building counts as apartments for tax?",
      a: "There is no waiting period. 26 U.S.C. 168(e)(2)(A) is applied for the taxable year: 80 percent or more of gross rental income from dwelling units, in a building where not more than half the units are used transiently.[1] Meet both and the year qualifies."
    },
    {
      q: "Can I convert part of the hotel and keep renting the rest nightly?",
      a: "You can, but it costs you the tax switch. If more than one-half of the units are still used transiently, clause (ii)(I) means no unit in the building is a dwelling unit, so the 80 percent income test cannot be met that year.[1]"
    },
    {
      q: "Will my building code classification change?",
      a: "Yes, if the length of stay changes. New Jersey's bulletin on the 2015 IBC puts hotels in Group R-1 as transient, not more than 30 days, and apartment houses in Group R-2 as permanent.[3] Your own jurisdiction's adopted code governs."
    },
    {
      q: "Can I keep an SBA 7(a) or 504 loan on an apartment building?",
      a: "Ask your lender before you convert. 13 CFR 120.110(c) makes passive developer and landlord businesses that do not actively use or occupy the financed asset ineligible, outside the Eligible Passive Company route in 13 CFR 120.111.[4]"
    },
    {
      q: "Do I have to make converted hotel rooms wheelchair accessible?",
      a: "The design rules in 24 CFR 100.205 reach covered multifamily dwellings for first occupancy after March 13, 1991, and 24 CFR 100.201 defines first occupancy as a building never before used for any purpose.[5] Other law still applies."
    },
    {
      q: "Is selling and doing a 1031 exchange into apartments simpler?",
      a: "Often. 26 U.S.C. 1031(a)(1) defers gain on real property exchanged for like-kind real property, with 45 days to identify and 180 days to close.[6] You end up with a built, leased building rather than a construction project."
    },
    {
      q: "What is my hotel worth today, before I decide anything?",
      a: "Start there. Price the hotel as a going concern, then price the residential outcome and subtract the cost of getting to it. Converting pays only when the second number, net of that cost, clears the first by enough to cover the risk."
    }
  ],
  sources: [
    {
      n: 1,
      label: "26 U.S.C. 168, Accelerated cost recovery system: subsection (c) recovery periods, 27.5 years for residential rental property and 39 years for nonresidential real property, and subsection (e)(2)(A) defining residential rental property by the 80 percent gross-rental-income test and excluding from dwelling unit any unit in a hotel, motel, or other establishment more than one-half of the units in which are used on a transient basis",
      url: "https://www.law.cornell.edu/uscode/text/26/168",
      publisher: "United States Code, via Legal Information Institute, Cornell Law School",
      accessed: "2026-10-30"
    },
    {
      n: 2,
      label: "26 CFR 1.168(i)-4, Changes in use: paragraph (c) on conversion to personal use, and paragraph (d) on a change in use that results in a different recovery period, including (d)(1)(ii) reclassification under section 168(e), (d)(2)(i) the primary-use comparison, (d)(2)(iii) the first day of the year of change, and (d)(3)(i) the shorter-recovery-period computation without the applicable convention",
      url: "https://www.ecfr.gov/current/title-26/chapter-I/subchapter-A/part-1/section-1.168(i)-4",
      publisher: "Code of Federal Regulations, via eCFR, U.S. Government Publishing Office",
      accessed: "2026-10-30"
    },
    {
      n: 3,
      label: "Bulletin 15-3, Group designations for residential occupancies under the 2015 International Building Code: Group R-1 covers hotels, motels, bed and breakfast guesthouses and vacation timeshare properties with a transient length of stay, occupancy for not more than 30 days, and Group R-2 covers apartment houses, dormitories and rooming houses as permanent and nontransient",
      url: "https://www.nj.gov/dca/codes/publications/pdf_bulletins/b_15_3.pdf",
      publisher: "New Jersey Department of Community Affairs, Division of Codes and Standards",
      accessed: "2026-10-30"
    },
    {
      n: 4,
      label: "13 CFR 120.110, What businesses are ineligible for SBA business loans?, paragraph (c) on passive businesses owned by developers and landlords that do not actively use or occupy the assets acquired or improved with the loan proceeds, except Eligible Passive Companies under 13 CFR 120.111",
      url: "https://www.ecfr.gov/current/title-13/chapter-I/part-120/section-120.110",
      publisher: "Code of Federal Regulations, via eCFR, U.S. Government Publishing Office",
      accessed: "2026-10-30"
    },
    {
      n: 5,
      label: "24 CFR 100.201, Definitions, which defines first occupancy as a building that has never before been used for any purpose, and 24 CFR 100.205, Design and construction requirements, which applies to covered multifamily dwellings for first occupancy after March 13, 1991, together with the general prohibitions in 24 CFR 100.202",
      url: "https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/subchapter-A/part-100/section-100.201",
      publisher: "Code of Federal Regulations, via eCFR, U.S. Government Publishing Office",
      accessed: "2026-10-30"
    },
    {
      n: 6,
      label: "26 U.S.C. 1031, Exchange of real property held for productive use or investment: subsection (a)(1) on nonrecognition of gain, and (a)(3) on the 45-day identification period and the 180-day completion period",
      url: "https://www.law.cornell.edu/uscode/text/26/1031",
      publisher: "United States Code, via Legal Information Institute, Cornell Law School",
      accessed: "2026-10-30"
    },
    {
      n: 7,
      label: "Matthews Hotel Markets October 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-10-30"
    }
  ],
  related: {
    hub: "/hotel-valuation",
    siblings: [
      "/hotel-valuation/how-to-value-a-hotel",
      "/hotel-valuation/broker-opinion-of-value",
      "/hotel-valuation/select-service-vs-full-service",
      "/hotel-valuation/pip-and-hotel-value",
      "/hotel-financing/1031-exchange-hotels"
    ],
    glossary: [
      "/glossary/going-concern-value",
      "/glossary/cap-rate",
      "/glossary/noi",
      "/glossary/per-key"
    ],
    data: ["/rates"]
  },
  cta: {
    label: "Get a free broker opinion of value on the hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets is the hospitality investment sales and capital markets team of Matthews Real Estate Investment Services; the team sells hotels and represents 1031 buyers, and does not develop, convert or appraise buildings, so the half of this decision it can price is what the hotel is worth as it stands today."
};
