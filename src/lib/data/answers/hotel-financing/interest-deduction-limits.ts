/**
 * Can I deduct all the interest on my hotel loan?
 * Answer page: /hotel-financing/interest-deduction-limits
 *
 * Written 2026-10-28 from 26 U.S.C. 163(j), 448, 461, 469, 1256 and 168 on
 * Cornell LII, 26 CFR 1.163(j)-1, 1.163(j)-2, 1.163(j)-9, 1.469-9 and
 * 1.1256(e)-2, Rev. Proc. 2025-32 and the IRS About Form 8990 page.
 * Arithmetic is asserted in scripts/check-163j-math.mjs.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "interest-deduction-limits",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Loan Interest Deduction Limits",
  h1: "Can I deduct all the interest on my hotel loan?",
  description: "Section 163(j) and a hotel loan: the 30 percent cap, the $32,000,000 exemption for 2026, the syndicate trap, and what electing out costs.",
  lastUpdated: "2026-10-28",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Can I deduct all the interest on my hotel loan?",
    "Does the business interest limitation apply to a hotel?",
    "What is the section 163(j) limit for a hotel owner?",
    "Is a hotel a real property trade or business for section 163(j)?",
    "What is the gross receipts test for the business interest limitation in 2026?",
    "Should a hotel elect out of the section 163(j) interest limitation?",
    "What happens to hotel mortgage interest I cannot deduct this year?"
  ],
  answer: "Usually yes. Section 163(j) caps the deduction at business interest income plus 30 percent of adjusted taxable income, and a July 4, 2025 amendment added depreciation back into that income figure for tax years beginning after December 31, 2024.[1] A hotel owner averaging $32,000,000 or less of gross receipts is exempt for 2026 anyway.[1][2]",
  takeaways: [
    "Most single-hotel owners never reach the cap. For a tax year beginning in 2026 the exemption runs to average annual gross receipts of $32,000,000 or less over the three prior years, and related entities under common control are counted as one.[2][3]",
    "A hotel partnership that allocates more than 35 percent of its losses to partners who do not participate is a syndicate, and a syndicate is denied the small business exemption at any size.[4][5][6]",
    "A hotel can elect out of the limit entirely. A regulation example holds that a hotel offering full amenities is a real property trade or business, so the election under section 163(j)(7)(B) is available.[8][9][10]",
    "That election is irrevocable and it reprices depreciation: the building moves to a 40-year alternative depreciation system life and loses bonus depreciation, while furniture, fixtures and equipment are untouched.[11][12]"
  ],
  sections: [
    {
      h2: "What does section 163(j) actually limit?",
      lead: "It caps the business interest deduction at business interest income plus 30 percent of adjusted taxable income plus floor plan financing interest, which for a hotel is zero.",
      body: "Section 163(j)(1) sets that cap and says the 30 percent piece is never less than zero.[1] Business interest is any interest on debt properly allocable to a trade or business, which is what a hotel mortgage is.[1] Floor plan financing is not a hotel item: section 163(j)(9) limits it to debt financing motor vehicles, boats or farm machinery held for sale or lease and secured by that inventory.[1]\n\nSection 163(j)(8) defines adjusted taxable income as taxable income computed without regard to items not allocable to a trade or business, business interest and business interest income, the net operating loss and section 199A deductions, depreciation, amortization and depletion, and certain foreign inclusions.[1] For a single-asset hotel that collapses to something an owner already knows: revenue less operating expenses. The cap is 30 percent of that number."
    },
    {
      h2: "Is my hotel small enough to be exempt?",
      lead: "For a tax year beginning in 2026 the line is $32,000,000 of average annual gross receipts over the three prior tax years, and the count aggregates entities under common control.",
      body: "Section 163(j)(3) switches the limitation off for any taxpayer that meets the gross receipts test of section 448(c), other than a tax shelter barred from the cash method.[1] Section 448(c)(1) sets that test at average annual gross receipts for the three tax years ending with the year before the current one, and section 448(c)(4) indexes the statutory $25,000,000 for inflation in $1,000,000 steps.[3] Revenue Procedure 2025-32, section 4.30, puts that figure for tax years beginning in 2026 at $32,000,000.[2]\n\nTwo traps sit inside that sentence. The first is aggregation: section 448(c)(2) treats all persons treated as a single employer under section 52(a) or (b) or section 414(m) or (o) as one person.[3] One 120-key hotel will not come close. Nine under common ownership, each running $3,600,000 of revenue, add to $32,400,000 and put the group over the line.\n\nThe second is that the measure is gross receipts, not profit, reduced only by returns and allowances, so a hotel with a thin year still counts every dollar it collected.[3] 26 CFR 1.163(j)-2(d) applies the same test to taxpayers that are neither a corporation nor a partnership, and gives the sharing rules for pass-through gross receipts.[4] For the depreciation side of the same return, see [How does depreciation work on a hotel I buy?](/buy-a-hotel/depreciation-and-cost-segregation)."
    },
    {
      h2: "Why do syndicated hotel deals lose the exemption?",
      lead: "Because a partnership that allocates more than 35 percent of its losses to partners who do not manage it is a syndicate, and the small business exemption does not reach a syndicate at any size.",
      body: "Section 163(j)(3) carves out a tax shelter, section 448(d)(3) borrows the definition in section 461(i)(3), and section 461(i)(3)(B) points at any syndicate within the meaning of section 1256(e)(3)(B).[1][3][5] That provision defines a syndicate as any partnership or other entity, other than a C corporation, if more than 35 percent of the losses of the entity during the tax year are allocable to limited partners or limited entrepreneurs.[6]\n\nThis is the most common way a small hotel deal ends up inside the limitation. 26 CFR 1.1256(e)-2 works the fact pattern: an S corporation with $5,000,000 of gross receipts, $4,500,000 of non-interest expenses and $600,000 of interest expense has a net loss of $100,000, half of it allocated to the owner who supplied the capital and does not participate, which makes the entity a syndicate for that year.[7] That regulation computes the loss without regard to section 163(j) itself, so the interest counts in full in testing whether there is a loss to allocate.[4][7]\n\nThe test runs year by year on losses, so it turns on whether the entity has a loss at all. And section 1256(e)(3)(C) removes from the limited-partner count any interest held by an individual who actively participates at all times in managing the entity, by that individual's close family, or by someone who actively participated for at least five years.[6] An owner-operator with a working partner stands differently from a deal funded by passive capital."
    },
    {
      h2: "What changed for tax years beginning in 2025 and 2026?",
      lead: "Two amendments signed on July 4, 2025: depreciation is added back to adjusted taxable income from tax years beginning after December 31, 2024, and from tax years beginning after December 31, 2025 the limit reaches interest a hotel would capitalize.",
      body: "The first change matters most to a hotel, because hotels are depreciation-heavy. Section 163(j)(8)(A)(v) always excluded depreciation, amortization and depletion from adjusted taxable income, but between 2022 and 2024 that exclusion was switched off, so those deductions cut the cap. Public Law 119-21, section 70303(a), struck the words \"in the case of taxable years beginning before January 1, 2022\" from the clause, and section 70303(c)(1) applies the change to tax years beginning after December 31, 2024.[1] The cap is now 30 percent of a number close to operating profit, with no sunset in the codified text.\n\nThe second change is newer and narrower. Section 70341 added section 163(j)(10), which applies the limitation to business interest whether the taxpayer would deduct it or capitalize it under an interest capitalization provision, applies the allowed amount first to the interest that would otherwise be capitalized, and bars any carried-forward amount from being treated as capitalizable interest later.[1] Section 70341(b) also pulled interest capitalized under section 263(g) or 263A(f) out of the definition of business interest, all of it effective for tax years beginning after December 31, 2025.[1] A hotel under construction is the case to watch, because construction-period interest is the interest most often charged to capital account. See [How do I finance hotel construction in 2026?](/hotel-financing/construction-loans)."
    },
    {
      h2: "Can a hotel elect out of the limit altogether?",
      lead: "Yes. A hotel is a real property trade or business under the governing regulation, so an election under section 163(j)(7)(B) is available, and the regulation says so with a hotel example.",
      body: "Section 163(j)(7)(A)(ii) takes an electing real property trade or business out of the definition of trade or business here, and section 163(j)(7)(B) defines that as any business described in section 469(c)(7)(C) that elects.[1] 26 CFR 1.163(j)-1(b)(14)(i) points at the same place: section 469(c)(7)(C) and 26 CFR 1.469-9(b)(2).[8]\n\nSection 469(c)(7)(C) lists development, redevelopment, construction, acquisition, conversion, rental, operation, management, leasing and brokerage of real property.[9] Whether operating a hotel counts is a real question, because 26 CFR 1.469-9(b)(2)(ii)(H) requires that payments from customers be principally for the use of the real property and not for other significant or extraordinary personal services.[10] A hotel sells housekeeping, food and beverage and front desk service alongside the room.\n\nThe regulation answers it directly. Example 5 at 26 CFR 1.469-9(b)(2)(iii)(E) describes a limited partnership that owns and operates a luxury hotel offering in-room food and beverage, maid and linen service, valet parking, concierge, front desk and bellhop service and dry cleaning. It concludes that even though those personal services are significant, the principal purpose of the hotel's operations is providing the use of its rooms and suites, so the partnership is engaged in a real property trade or business.[10] The same example holds that the outside contractor supplying the maid service is not, which matters when operations sit in a separate entity.[10]\n\nThe election is open even to a hotel that already qualifies for the small business exemption, and the activity need not be a section 162 trade or business.[11] It is made by attaching a statement titled \"Section 1.163(j)-9 Election\" to a timely filed original return, including extensions, naming the taxpayer and the business, the principal business activity code and the election itself.[11]"
    },
    {
      h2: "What does electing out cost?",
      lead: "The election is irrevocable, it moves the building and any qualified improvement property to the alternative depreciation system, and it bars bonus depreciation on those assets.",
      body: "26 CFR 1.163(j)-9(c)(2) makes the election irrevocable and (c)(1) applies it to every later year.[11] It terminates when the taxpayer stops conducting that business, which includes selling substantially all of its assets to an unrelated buyer in a taxable asset transfer.[11]\n\nThe depreciation consequence is statutory. Section 163(j)(13)(A) cross-references section 168(g)(1)(F), which puts property described in section 168(g)(8) on the alternative depreciation system: nonresidential real property, residential rental property and qualified improvement property held by an electing real property trade or business.[1][12] A hotel building is nonresidential real property, which runs 39 years under section 168(c) and 40 years under the alternative system in section 168(g)(2)(C)(iv), both straight line.[12] 26 CFR 1.163(j)-9(c)(3) adds that an electing taxpayer cannot claim the first-year bonus deduction under section 168(k) on those types.[11]\n\nThe election does not touch most of what a cost segregation study reaches. Section 168(g)(8) names only those three categories, so furniture, fixtures, equipment and land improvements keep their shorter lives and stay eligible for bonus depreciation.[12] On a hotel that is a large share of basis, which is why electing out costs less here than on an office building.\n\nNo lender publishes how it underwrites any of this. Whether a credit committee sizes a loan off pre-election or post-election taxable income, and what it does with a disallowed interest carryforward in a covenant test, are credit policy questions no bank, life company, debt fund or CMBS lender discloses. Ask in writing."
    },
    {
      h2: "What happens to interest I cannot deduct this year?",
      lead: "It carries forward indefinitely as business interest of the next tax year, on a harsher mechanic inside a partnership.",
      body: "Section 163(j)(2) treats any disallowed business interest as business interest paid or accrued in the succeeding tax year, with no expiry, so at the entity level it is a timing cost rather than a permanent loss.[1] Partnerships work differently. Section 163(j)(4)(A)(i) applies the limitation at the partnership level, and section 163(j)(4)(B)(i) says the partnership does not carry the disallowed amount forward. It becomes excess business interest allocated to the partners, and under section 163(j)(4)(B)(ii) a partner can deduct it later only against excess taxable income from the same partnership.[1] Section 163(j)(4)(B)(iii) reduces the partner's basis in the partnership interest by that amount, restoring it on a later disposition for any part never deducted.[1] A partner can therefore sit on suspended interest that only the same hotel's future income releases.\n\nIt is all computed on Form 8990, which the IRS describes as the form used to calculate the business interest expense you can deduct and the amount to carry forward.[13] One warning: that page's \"Recent developments\" note still prints the $29,000,000 threshold for 2023, so take the figure from Revenue Procedure 2025-32 instead.[2][13]"
    }
  ],
  table: {
    caption: "Where a hotel owner can sit under section 163(j), tax year beginning in 2026",
    columns: [
      "Position",
      "How a hotel gets there",
      "Business interest deduction",
      "Depreciation consequence"
    ],
    rows: [
      [
        "Exempt small business",
        "Average annual gross receipts of $32,000,000 or less for the three prior tax years, aggregating entities under common control, and not a tax shelter[1][2][3][4]",
        "No limit",
        "None"
      ],
      [
        "Subject to the limitation",
        "Over the gross receipts line, or a syndicate at any size[1][5][6][7]",
        "Business interest income plus 30 percent of adjusted taxable income[1]",
        "None, and depreciation is added back to adjusted taxable income for tax years beginning after December 31, 2024[1]"
      ],
      [
        "Electing real property trade or business",
        "An irrevocable election statement attached to a timely filed original return, available because a hotel is a real property trade or business[8][9][10][11]",
        "No limit",
        "Building and qualified improvement property move to the alternative depreciation system, 40 years for the building, and lose bonus depreciation; furniture, fixtures and equipment are untouched[11][12]"
      ],
      [
        "Floor plan financing relief",
        "Not available to a hotel: the definition covers motor vehicles, boats and farm machinery held for sale or lease[1]",
        "Not applicable",
        "Not applicable"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' October 2026 rate sheet puts the 10-year Treasury at 5.29% on September 30, 2026, up 54 basis points over that calendar month, which is why the interest side of this calculation is larger than it was two years ago; the sheet's observed spread and coupon cells are marked not yet published, so the 7.25% coupon in the example below is an assumption and not a quote.[14]"
  },
  workedExample: {
    label: "Hypothetical: 120-key select-service hotel in a syndicated partnership, tax year beginning January 1, 2026",
    body: "Hypothetical. A 120-key select-service hotel in an LLC taxed as a partnership. Revenue $6,400,000, operating expenses $4,600,000, so operating profit is $1,800,000. Debt is $14,000,000 at an assumed 7.25 percent interest-only coupon, which is $1,015,000 of interest. Depreciation is $900,000. Sixty percent of the losses go to two partners who supplied capital and do not manage.\n\nStep one, the exemption. Gross receipts of $6,400,000 sit far below the $32,000,000 line for 2026. But 60 percent is more than 35 percent, so the partnership is a syndicate under section 1256(e)(3)(B), and a syndicate gets no exemption at any size.\n\nStep two, adjusted taxable income. Taxable income before the limitation is $1,800,000 less $1,015,000 less $900,000, or negative $115,000. Adding back the interest and the depreciation gives $1,800,000, the operating profit. That is the point of the 2025 amendment.\n\nStep three, the cap. Business interest income is zero and 30 percent of $1,800,000 is $540,000. So $540,000 of the $1,015,000 is deductible and $475,000 becomes excess business interest allocated to the partners. Under the 2022 to 2024 rule, with no depreciation add-back, adjusted taxable income would have been $900,000, the cap $270,000 and the disallowed amount $745,000. The amendment moved $270,000 forward.\n\nStep four, price the election. Assume a $15,500,000 purchase allocated $2,000,000 to land, $10,000,000 to the building and $3,500,000 to furniture, fixtures, equipment and land improvements. Electing out deducts all $1,015,000, an extra $475,000 this year. The cost: the building moves from a 39-year life, $10,000,000 divided by 39, or $256,410 a year, to a 40-year alternative system life, $10,000,000 divided by 40, or $250,000 a year. That is $6,410 a year for as long as you own it, plus no bonus depreciation on future qualified improvement property, irrevocably. The $3,500,000 of shorter-life property is unaffected.\n\nStep five, the trap this hotel escapes. Nine hotels at $3,600,000 of revenue each total $32,400,000, $400,000 over the 2026 line, so that owner is inside the limitation on gross receipts alone.\n\nEvery figure is arithmetic on assumed inputs, not an observed market rate, and the election is a CPA decision."
  },
  faq: [
    {
      q: "Does section 163(j) apply to a single hotel I own?",
      a: "Usually no. For a tax year beginning in 2026 the exemption covers average annual gross receipts of $32,000,000 or less over the three prior years. One hotel rarely reaches that, unless it is a syndicate or part of a commonly controlled group."
    },
    {
      q: "Is a hotel a real property trade or business?",
      a: "Yes, for this election. Example 5 in 26 CFR 1.469-9(b)(2)(iii) holds that a partnership owning and operating a full-service hotel is a real property trade or business, because its principal purpose is providing the use of its rooms."
    },
    {
      q: "Should I elect out of the interest limitation?",
      a: "Only with your CPA. It is irrevocable, moves the building to a 40-year alternative depreciation system life and bars bonus depreciation on it and on qualified improvement property. It does not touch furniture, fixtures and equipment."
    },
    {
      q: "Does depreciation reduce the interest cap?",
      a: "Not for tax years beginning after December 31, 2024. Public Law 119-21 restored the add-back in section 163(j)(8)(A)(v), so depreciation, amortization and depletion leave adjusted taxable income again, which raises the cap for a hotel."
    },
    {
      q: "What happens to interest I cannot deduct?",
      a: "It carries forward with no expiry. A partnership does not carry it forward itself: the amount becomes excess business interest allocated to partners, deductible only against later excess taxable income from that partnership, and it cuts partner basis."
    },
    {
      q: "Does the limit apply to construction interest I capitalize?",
      a: "For tax years beginning after December 31, 2025, yes. New section 163(j)(10) applies the limitation whether the interest would be deducted or capitalized, and applies the allowed amount first to what would otherwise be capitalized."
    },
    {
      q: "Which form reports this?",
      a: "Form 8990. The election out is a separate statement attached to the return."
    }
  ],
  sources: [
    {
      n: 1,
      label: "26 U.S.C. 163(j), Limitation on business interest, including (j)(1) the 30 percent cap, (j)(2) carryforward, (j)(3) small business exemption, (j)(4) partnership rules, (j)(5) business interest, (j)(7) electing real property trade or business, (j)(8) adjusted taxable income, (j)(9) floor plan financing, (j)(10) interest capitalization, (j)(13) cross reference to 168(g)(1)(F), and the amendment and effective-date notes for Pub. L. 119-21 sections 70303, 70341 and 70342 of July 4, 2025",
      url: "https://www.law.cornell.edu/uscode/text/26/163",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-28"
    },
    {
      n: 2,
      label: "Revenue Procedure 2025-32, section 4.30, Limitation on Use of Cash Method of Accounting ($32,000,000 for tax years beginning in 2026), and section 4.31, Threshold for Excess Business Loss ($256,000, or $512,000 for joint returns)",
      url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-28"
    },
    {
      n: 3,
      label: "26 U.S.C. 448, Limitation on use of cash method of accounting, including (a)(3) tax shelters, (c)(1) the three-year average gross receipts test, (c)(2) aggregation under sections 52 and 414, (c)(3) special rules and (c)(4) inflation adjustment, and (d)(3) the tax shelter definition",
      url: "https://www.law.cornell.edu/uscode/text/26/448",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-28"
    },
    {
      n: 4,
      label: "26 CFR 1.163(j)-2(d), Small business exemption, including (d)(2) application of the gross receipts test to individuals, partners and S corporation shareholders and (d)(3) determining a syndicate's loss amount without regard to section 163(j)",
      url: "https://www.law.cornell.edu/cfr/text/26/1.163(j)-2",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-28"
    },
    {
      n: 5,
      label: "26 U.S.C. 461, including (i)(3) the tax shelter definition and (l) the limitation on excess business losses of noncorporate taxpayers, with the $250,000 base amount in (l)(3)(A)(ii)(II), the inflation adjustment in (l)(3)(C) and the tax years covered in (l)(1)(B)",
      url: "https://www.law.cornell.edu/uscode/text/26/461",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-28"
    },
    {
      n: 6,
      label: "26 U.S.C. 1256(e)(3), Special rule for syndicates, including (e)(3)(B) the more-than-35-percent definition and (e)(3)(C) the active management exclusions",
      url: "https://www.law.cornell.edu/uscode/text/26/1256",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-28"
    },
    {
      n: 7,
      label: "26 CFR 1.1256(e)-2, Special rules for syndicates, including (b) the loss calculation without regard to section 163(j) and the (c) example on a passive capital owner",
      url: "https://www.law.cornell.edu/cfr/text/26/1.1256(e)-2",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-28"
    },
    {
      n: 8,
      label: "26 CFR 1.163(j)-1(b)(14), definition of electing real property trade or business, pointing to section 469(c)(7)(C) and 26 CFR 1.469-9(b)(2)",
      url: "https://www.law.cornell.edu/cfr/text/26/1.163(j)-1",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-28"
    },
    {
      n: 9,
      label: "26 U.S.C. 469(c)(7)(C), definition of a real property trade or business",
      url: "https://www.law.cornell.edu/uscode/text/26/469",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-28"
    },
    {
      n: 10,
      label: "26 CFR 1.469-9(b)(2), real property trade or business definitions, including (b)(2)(ii)(H) real property operation and Example 5 at (b)(2)(iii)(E) holding that a partnership owning and operating a luxury hotel is engaged in a real property trade or business",
      url: "https://www.law.cornell.edu/cfr/text/26/1.469-9",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-28"
    },
    {
      n: 11,
      label: "26 CFR 1.163(j)-9, Elections for excepted trades or businesses, including (b)(2) availability to exempt small businesses, (c)(2) irrevocability, (c)(3) the alternative depreciation system and loss of section 168(k), (d)(2) the election statement contents and (e) termination and the 60-month anti-abuse rule",
      url: "https://www.law.cornell.edu/cfr/text/26/1.163(j)-9",
      publisher: "Code of Federal Regulations, via Legal Information Institute",
      accessed: "2026-10-28"
    },
    {
      n: 12,
      label: "26 U.S.C. 168, including (c) the 39-year recovery period for nonresidential real property, (g)(1)(F) and (g)(8) the property an electing real property trade or business must depreciate under the alternative system, and (g)(2)(C)(iv) the 40-year alternative recovery period",
      url: "https://www.law.cornell.edu/uscode/text/26/168",
      publisher: "United States Code, via Legal Information Institute",
      accessed: "2026-10-28"
    },
    {
      n: 13,
      label: "About Form 8990, Limitation on Business Interest Expense Under Section 163(j), page last reviewed or updated March 31, 2026",
      url: "https://www.irs.gov/forms-pubs/about-form-8990",
      publisher: "Internal Revenue Service",
      accessed: "2026-10-28"
    },
    {
      n: 14,
      label: "Matthews Hotel Markets hotel financing rate sheet, October 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-10-28"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/construction-loans",
      "/hotel-financing/capital-stack",
      "/hotel-financing/interest-only-loans",
      "/hotel-financing/mezzanine-debt-and-preferred-equity",
      "/hotel-financing/refinance",
      "/hotel-financing/loan-requirements",
      "/hotel-financing/opportunity-zones",
      "/hotel-financing/hotel-loan-rates"
    ],
    glossary: [
      "/glossary/noi",
      "/glossary/dscr",
      "/glossary/mezzanine-debt"
    ],
    data: [
      "/rates",
      "/tools/hotel-loan-sizing-calculator"
    ]
  },
  cta: {
    label: "Talk to the capital markets desk about the debt",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets arranges hotel debt from $5 million and sells hotels from $2 million. We do not give tax advice: whether to make the section 163(j)(7)(B) election is a decision for your CPA, because it is irrevocable and it reprices your depreciation for as long as you own the hotel."
};

export default page;
