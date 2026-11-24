/**
 * Can I do a sale-leaseback on my hotel to raise cash?
 * Answer page: /hotel-financing/sale-leaseback
 *
 * Written 2026-11-24 from 26 U.S.C. 467, Rev. Rul. 2026-24 (December 2026
 * applicable federal rates), Frank Lyon Co. v. United States, 435 U.S. 561
 * (1978), and 13 CFR 120.110, 120.111 and 120.131, each fetched and read that
 * day. Every figure in the worked example is recomputed by
 * scripts/check-sale-leaseback-math.mjs.
 *
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "sale-leaseback",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Sale-Leaseback: Can You Do One?",
  description: "What a hotel sale-leaseback does to your rent coverage, your taxes under section 467, your franchise and your SBA loan, and what rent a hotel can carry.",
  h1: "Can I do a sale-leaseback on my hotel to raise cash?",
  lastUpdated: "2026-11-24",
  authorSlug: "nate-solomon",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "Can I do a sale-leaseback on my hotel to raise cash?",
    "What is a hotel sale-leaseback?",
    "Should I do a sale-leaseback or refinance my hotel?",
    "Can I sell my hotel and keep operating it?",
    "Can I sell the land under my hotel and lease it back?",
    "How is rent taxed in a sale-leaseback?",
    "Can I do a sale-leaseback with an SBA loan?"
  ],
  answer: "Yes, though the rent a hotel can carry is well below its cap rate, so a leaseback monetizes less than full value: the example below supports 80.0 percent. Escalating rent makes the lease a section 467 rental agreement, and a hotel leaseback meets that section's two-year test on its face.[1] December 2026's 110 percent long-term AFR is 5.82 percent.[2]",
  takeaways: [
    "Rent is senior, fixed and owed in a bad quarter, so the price a leaseback supports is set by the rent the hotel can cover, not by what the building is worth.",
    "Any rent increase makes the lease a section 467 rental agreement, and a leaseback is one where the lessee held an interest in the property within the previous 2 years.[1]",
    "19 years is the statutory recovery period for real property under section 467, so a lease longer than 14.25 years is a long-term agreement as well as a leaseback.[1]",
    "A third-party sale pays off an SBA loan at closing, and in a related-party structure SBA caps the rent at the loan payment plus direct holding costs.[3]",
    "No public source publishes a hotel net-lease rate and no lender publishes its LTV ceiling, so neither is on this page."
  ],
  sections: [
    {
      h2: "What is a hotel sale-leaseback?",
      lead: "A sale-leaseback sells the real estate to an investor and leases it straight back, so the operator keeps running the hotel and pays rent instead of debt service.",
      body: "Two versions come up: sell the whole asset and lease it back on a long lease, or sell only the land and lease that back as a ground lease, keeping the building and the operation.\n\nThe buyer is the part owners get wrong. A real estate investment trust cannot take rent that depends on an operator's profits, which is why hotel REITs lease to their own taxable subsidiaries and hire outside managers instead of leasing back to a seller: [How do hotel REITs work?](/hotel-industry/how-hotel-reits-work), and [can I contribute my hotel to a REIT instead of selling it?](/sell-a-hotel/contribute-hotel-to-a-reit). The realistic buyers are private capital and net-lease funds, and none publishes a lease rate.\n\nThe structure turns an equity position into cash plus a liability. The cash is certain at closing; the liability runs for the whole term."
    },
    {
      h2: "What rent can a hotel actually carry?",
      lead: "Less than the hotel's cap rate implies, because rent has to be covered out of an income stream that moves with room revenue.",
      body: "Set the rent at the same rate as the cap rate used to value the hotel and the arithmetic is immediate: every dollar of net operating income goes to rent and the operator keeps nothing. The example below solves instead for the rent that leaves a cushion, and the price it supports is 80.0 percent of value.\n\nThe cushion matters more for a hotel than for a drugstore. A hotel reprices every night, so a downturn reaches rent coverage in one quarter. Debt service can sometimes be restructured with a lender who would rather modify than foreclose: [what happens if I default on my hotel loan?](/hotel-financing/loan-workouts). Rent is a different obligation, and a landlord already paid for the building has less reason to bend.\n\nThe escalator compounds that. Rent that rises 2 percent a year rises whether or not average daily rate does, and the example shows coverage below 1.00 within five years on flat income. Underwrite against a trough year, not a trailing twelve months."
    },
    {
      h2: "Is it a sale for tax purposes, or is it really a loan?",
      lead: "It is a sale when the buyer takes on genuine ownership, and the Supreme Court has held that a sale-leaseback by itself does not cost a taxpayer its deductions.",
      body: "Frank Lyon Co. v. United States is the case. The Court held that where there is a genuine multiple-party transaction with economic substance, compelled or encouraged by business or regulatory realities, imbued with tax-independent considerations and not shaped solely by tax-avoidance features with meaningless labels attached, the government should honor the allocation of rights and duties the parties made: so long as the lessor retains significant and genuine attributes of traditional lessor status, the form the parties adopted governs for tax purposes.[4] A sale-and-leaseback, in and of itself, does not necessarily operate to deny a taxpayer's claim for deductions.[4]\n\nThe reason to care is what happens if the form is not honored. A transaction recharacterized as a financing is not a sale: no gain to report, no basis step-up for the buyer, and the payments are not rent. Repurchase options, rents that look like debt service and a buyer with no real upside or downside invite that argument. The tax of an actual sale is at [what taxes do I pay when I sell my hotel?](/sell-a-hotel/taxes-when-selling-a-hotel)."
    },
    {
      h2: "How is the rent taxed if it escalates?",
      lead: "Rent that increases makes the lease a section 467 rental agreement, and a leaseback can be made to accrue a level amount rather than the amount in the lease.[1]",
      body: "Section 467 reaches any rental agreement for tangible property where an amount allocable to one calendar year is paid after the close of the following calendar year, or where there are increases in the rent. It does not apply where total consideration is $250,000 or less, a floor a hotel lease clears in its first year.[1]\n\nTwo tests then run. A transaction is a leaseback where the property is leased back to anyone who held an interest in it within 2 years before the leaseback, or to a related person, so a sale-leaseback meets this one by definition.[1] An agreement is long-term if its term exceeds 75 percent of the statutory recovery period, which section 467 sets at 19 years for residential rental and nonresidential real property, so the line falls at 14.25 years and a 15-year or 20-year lease is past it.[1]\n\nMeeting either test is not enough on its own. An agreement is disqualified only if it also has, as a principal purpose for providing increasing rents, the avoidance of federal income tax.[1] Where it is, the rent that accrues each year is the constant rental amount: the level payment whose present value equals the present value of the rent the lease calls for, discounted at 110 percent of the applicable federal rate for a debt instrument of the same maturity, compounded semiannually.[1] For an agreement entered into in December 2026 that rate is 5.82 percent.[2] Section 467 also directs regulations to name circumstances that keep an agreement off the disqualified list: price-index adjustments, rents based on a fixed percentage of lessee receipts, reasonable rent holidays and changes in amounts paid to unrelated third parties.[1] Two mechanics to know before signing: an extension exercisable solely by the lessee is not counted in the term, and a lessor who sells mid-lease can be taxed on prior understated inclusions as ordinary income.[1] Get a CPA on the rent schedule before the lease is drafted."
    },
    {
      h2: "What happens to my franchise agreement and my mortgage?",
      lead: "Both are triggered by the sale, because a sale-leaseback is a transfer of the real estate even though the operator does not change.",
      body: "The franchise agreement is the first call. Transfer provisions turn on a change in ownership of the hotel, so the brand's consent, application and upgrade rights do not switch off because the same people are at the front desk: [how does a hotel franchise transfer work?](/sell-a-hotel/franchise-transfer).\n\nThe mortgage is paid off at closing out of the proceeds, so the prepayment terms decide how much cash the owner keeps. A fixed-rate loan can carry yield maintenance or defeasance, priced off Treasuries rather than a flat fee: [what are hotel loan prepayment penalties?](/hotel-financing/prepayment-penalties). On the land-only version the lender must also accept the hotel's new leasehold position, and none publishes what it will accept.\n\nOperating licenses mostly follow the operator, which is the one piece a leaseback simplifies. The liquor license is the exception, because premises ownership appears in many states' applications: [how does a liquor license transfer when I sell a hotel?](/sell-a-hotel/liquor-license-transfer)"
    },
    {
      h2: "Can I do a sale-leaseback while I have an SBA loan?",
      lead: "Not with a third-party buyer and the loan intact, because selling the collateral repays the loan, and SBA's own related-party structure caps the rent.[3][5]",
      body: "SBA tests the borrower, not just the building. Passive businesses owned by developers and landlords that do not actively use or occupy the assets acquired or improved with the loan proceeds are ineligible, outside the Eligible Passive Company route.[6] On an existing building an SBA borrower must permanently occupy and use no less than 51 percent of the rentable property and may permanently lease out up to 49 percent.[5] A hotel sold to an unrelated investor sits with a landlord who occupies none of it, so the loan goes with the sale.\n\nSBA does allow the related-party version, on published conditions: an Eligible Passive Company holds the real estate and leases 100 percent of it to the Operating Company that runs the hotel. The lease must be written and subordinate to SBA's lien, all rents are assigned as collateral, and the rent cannot exceed the amount necessary to make the loan payment to the lender plus direct expenses of holding the property, such as maintenance, insurance and property taxes.[3] The lease must run at least as long as the loan, and every holder of 20 percent or more of either company guarantees it.[3]\n\nThat rent cap is the point: the related-party structure manages liability rather than extracting a market rent. Which program fits which purchase is at [SBA 7(a) vs 504 for a hotel](/hotel-financing/sba-7a-vs-504)."
    },
    {
      h2: "What if I only want to sell the land?",
      lead: "Selling the land and leasing it back raises less cash than a whole-asset sale and leaves the hotel with a leasehold, which is weaker collateral than a fee interest.",
      body: "A ground lease severance keeps the building and the operating upside and sells the part that produces no income by itself. The trade is that the hotel now sits on leased land, so the term, the rent reset, the leasehold mortgagee protections and what happens at expiration become financing terms: [can I sell a hotel on a ground lease?](/sell-a-hotel/selling-a-hotel-on-a-ground-lease) and [ground lease](/glossary/ground-lease).\n\nTwo cautions. A ground rent that resets to a share of appraised land value moves the land's appreciation and its volatility onto the hotel's income statement, the opposite of what an owner seeking stability wants. And a leasehold with fewer years left than a lender's loan term is not financeable, so set the term with the next refinancing in mind."
    },
    {
      h2: "Is a sale-leaseback better than a refinance or an outright sale?",
      lead: "It is the only one of the three that raises cash, keeps the owner running the hotel, and leaves a fixed senior claim ahead of the owner for the whole lease term.",
      body: "Compare the three on four questions: how much cash comes out, what the ongoing claim on net operating income is, who can modify that claim later, and what the owner still owns. A refinancing keeps the real estate and the upside, and debt service can sometimes be restructured: [cash-out refinancing a hotel](/hotel-financing/cash-out-refinance). A sale ends the obligation and is modeled against a refinancing at [should I refinance or sell my hotel?](/hotel-financing/refinance-or-sell) and in [the refinance versus sell calculator](/tools/refinance-vs-sell).\n\nFor an owner who wants cash without giving up the operation, the honest comparison is against mezzanine debt or preferred equity, because all three sit on top of a first mortgage and cost more than it does: [mezzanine debt and preferred equity for hotels](/hotel-financing/mezzanine-debt-and-preferred-equity) and [how the hotel capital stack works](/hotel-financing/capital-stack)."
    }
  ],
  table: {
    caption: "A hotel sale-leaseback: what changes, and where the rule is written",
    columns: [
      "What changes",
      "Owning the hotel",
      "After a sale-leaseback",
      "Where it is written"
    ],
    rows: [
      [
        "The senior claim on net operating income",
        "Debt service, which a lender can agree to modify",
        "Rent, fixed by the lease for its term",
        "The lease itself"
      ],
      [
        "Is the lease a section 467 rental agreement",
        "Not applicable",
        "Yes, once rent increases and total consideration passes $250,000",
        "26 U.S.C. 467(d)(1)(B), (d)(2)[1]"
      ],
      [
        "The leaseback test",
        "Not applicable",
        "Met on its face: the lessee held an interest within the previous 2 years",
        "26 U.S.C. 467(e)(2)[1]"
      ],
      [
        "The long-term test",
        "Not applicable",
        "Met above 14.25 years, being 75 percent of a 19-year recovery period",
        "26 U.S.C. 467(b)(4)(A), (e)(3)(A)[1]"
      ],
      [
        "When rent accrues as written",
        "Not applicable",
        "Unless a principal purpose of the increases is tax avoidance",
        "26 U.S.C. 467(b)(1), (b)(4)(B)[1]"
      ],
      [
        "Discount rate for the constant rental amount",
        "Not applicable",
        "5.82 percent for December 2026, semiannual compounding",
        "26 U.S.C. 467(e)(4); Rev. Rul. 2026-24, Table 1[1][2]"
      ],
      [
        "Whether the form is honored",
        "Not applicable",
        "Yes while the lessor keeps genuine attributes of lessor status",
        "Frank Lyon Co. v. United States, 435 U.S. 561, 583 to 584[4]"
      ],
      [
        "SBA rent in a related-party structure",
        "Not applicable",
        "Capped at the loan payment plus direct holding costs",
        "13 CFR 120.111(a)(3)[3]"
      ],
      [
        "SBA occupancy on an existing building",
        "The borrower occupies and uses all of it",
        "A third-party buyer occupies none, so the loan is repaid at closing",
        "13 CFR 120.110(c), 120.131(b)[6][5]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' October 2026 rate sheet puts the 10-year Treasury at 5.29 percent as of September 30, 2026, which is the published benchmark any lease rate has to be judged against; what a net-lease buyer actually requires over it is not published by anyone, so no lease rate is printed on this page.[7]"
  },
  workedExample: {
    label: "Worked example (hypothetical): the rent a 120-key hotel can carry, and what section 467 does to it",
    body: "Hypothetical. A 120-key limited-service hotel in Houston, assumed net operating income $960,000. The Matthews Hotel Index for Q1 2026 puts Houston select-service cap rates at 7.75 to 8.75 percent, so value it at 8.00 percent: $960,000 / 0.08 = $12,000,000, or $100,000 a key.[8]\n\nStep one, rent at full value. A buyer paying $12,000,000 and setting rent at the same 8.00 percent wants $960,000 a year. Coverage is $960,000 / $960,000 = 1.00, so all the income is rent and the operator keeps nothing. Add the 2 percent escalator and the fifth year's rent is $960,000 x 1.02 to the fourth power = $1,039,134.87, so on flat income coverage falls to 0.92.\n\nStep two, rent the hotel can cover. Hold back a 1.25 cushion: $960,000 / 1.25 = $768,000. At the same 8.00 percent that supports $768,000 / 0.08 = $9,600,000, which is 80.0 percent of the $12,000,000 value and $80,000 a key against $100,000. The lease rate is an assumption, not a quote: it sits 271 basis points above the 10-year Treasury on our October 2026 rate sheet, and nobody publishes what a net-lease buyer charges a hotel.[7]\n\nStep three, section 467. Take the $768,000 on a 20-year lease rising 2 percent a year. Total rent over the term is $18,660,380.01, far above the $250,000 floor, and the twentieth year's rent is $1,118,830.98.[1] The lease is a leaseback under the two-year test and its term is past the 14.25-year line, so everything turns on whether a principal purpose of the increases is tax avoidance.[1] If it is, the accrual is the constant rental amount. At 5.82 percent compounded semiannually, an annual effective 5.904681 percent, the present value of the 20 rents is $10,390,238.75 against a 20-year annuity factor of 11.559206, so the constant rental amount is $898,871.30.[1][2]\n\nThe cash does not move; the accrual does. In year one the deduction and the landlord's income are $898,871.30 rather than the $768,000 paid, $130,871.30 or 17.0 percent more, and in year twenty $898,871.30 rather than $1,118,830.98, which is $219,959.68 less. The stated rent first passes the constant amount in year nine, at $899,834.40. Every figure is recomputed by scripts/check-sale-leaseback-math.mjs. This illustrates the mechanics; it is not tax advice and not a quote."
  },
  faq: [
    {
      q: "Can I sell my hotel and keep running it?",
      a: "Yes, that is what a sale-leaseback does: the investor buys the real estate and leases it back, and the operating company keeps the franchise, the staff and the licenses. The rent replaces debt service as the senior claim on income."
    },
    {
      q: "How much cash does a hotel sale-leaseback raise?",
      a: "As much as the rent the hotel can cover supports. In the example above a 1.25 cushion caps the price at 80.0 percent of value. No public source publishes hotel net-lease rates, so the real answer comes from bids."
    },
    {
      q: "What is a section 467 rental agreement?",
      a: "Any rental agreement for tangible property with deferred amounts or rent increases, above $250,000 of total consideration.[1] Almost every sale-leaseback with an escalator is one, which is why the rent schedule is a tax question as well as a credit question."
    },
    {
      q: "Does section 467 change the rent I actually pay?",
      a: "No. It changes when rent is treated as accruing. A disqualified leaseback accrues the constant rental amount instead, which for a December 2026 agreement is discounted at 5.82 percent compounded semiannually.[1][2]"
    },
    {
      q: "Can I do a sale-leaseback with an SBA 7(a) or 504 loan on the hotel?",
      a: "Not to an outside buyer with the loan in place: selling the collateral repays it, and a landlord who occupies none of the building is not an eligible borrower.[5][6] SBA's related-party structure caps the rent at debt service plus holding costs.[3]"
    },
    {
      q: "Will my franchisor approve a sale-leaseback?",
      a: "Ask before you sign. Transfer provisions turn on a change in ownership of the hotel, not on who manages it, so the brand's consent, application and upgrade rights apply even though the operator is unchanged."
    }
  ],
  sources: [
    {
      n: 1,
      label: "26 U.S.C. 467, certain payments for the use of property or services: subsections (a), (b)(1) to (b)(5), (c)(1), (d)(1), (d)(2), (e)(1) to (e)(4) and (e)(6)",
      url: "https://www.law.cornell.edu/uscode/text/26/467",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-24"
    },
    {
      n: 2,
      label: "Rev. Rul. 2026-24, applicable federal rates for December 2026, Table 1 (long-term 110 percent AFR, semiannual compounding)",
      url: "https://www.irs.gov/pub/irs-drop/rr-26-24.pdf",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-24"
    },
    {
      n: 3,
      label: "13 CFR 120.111, what conditions must an Eligible Passive Company satisfy, paragraphs (a)(3), (a)(4) and (a)(6)",
      url: "https://www.ecfr.gov/current/title-13/chapter-I/part-120/section-120.111",
      publisher: "Electronic Code of Federal Regulations",
      accessed: "2026-11-24"
    },
    {
      n: 4,
      label: "Frank Lyon Co. v. United States, 435 U.S. 561 (1978), at 583 to 584",
      url: "https://www.law.cornell.edu/supremecourt/text/435/561",
      publisher: "Supreme Court of the United States, via Cornell Law School",
      accessed: "2026-11-24"
    },
    {
      n: 5,
      label: "13 CFR 120.131, leasing part of new construction or existing building to another business, paragraph (b)",
      url: "https://www.ecfr.gov/current/title-13/chapter-I/part-120/section-120.131",
      publisher: "Electronic Code of Federal Regulations",
      accessed: "2026-11-24"
    },
    {
      n: 6,
      label: "13 CFR 120.110, what businesses are ineligible for SBA business loans, paragraph (c)",
      url: "https://www.ecfr.gov/current/title-13/chapter-I/part-120/section-120.110",
      publisher: "Electronic Code of Federal Regulations",
      accessed: "2026-11-24"
    },
    {
      n: 7,
      label: "Matthews Hotel Markets hotel loan rate sheet, October 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-11-24"
    },
    {
      n: 8,
      label: "Matthews Hotel Index, Q1 2026, Houston select-service cap rate band",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-11-24"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/capital-stack",
      "/hotel-financing/cash-out-refinance",
      "/hotel-financing/refinance-or-sell",
      "/hotel-financing/mezzanine-debt-and-preferred-equity",
      "/sell-a-hotel/selling-a-hotel-on-a-ground-lease"
    ],
    glossary: [
      "/glossary/ground-lease",
      "/glossary/cap-rate",
      "/glossary/noi",
      "/glossary/dscr"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Price a recapitalization against a sale",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets arranges hotel recapitalizations from $5 million and sells hotels from $2 million, so an owner can see both numbers before signing a 20-year lease; we are not a lessor and we do not give tax advice."
};

export default page;
