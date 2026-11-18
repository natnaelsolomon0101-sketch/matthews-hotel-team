/**
 * Can I contribute my hotel to a REIT instead of selling it?
 * Answer page: /sell-a-hotel/contribute-hotel-to-a-reit
 *
 * Written 2026-11-18 from 26 U.S.C. 721, 722, 731, 737, 752, 856 and 1031 and
 * 26 CFR 1.707-3 and 1.752-1 on Cornell LII, plus the fiscal 2025 Form 10-K of
 * Host Hotels & Resorts (an umbrella partnership) and of Apple Hospitality REIT
 * (not one), both on SEC EDGAR. Every figure in the worked example is recomputed
 * by scripts/check-reit-contribution-math.mjs.
 *
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "contribute-hotel-to-a-reit",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Contributing a Hotel to a REIT for OP Units",
  h1: "Can I contribute my hotel to a REIT instead of selling it?",
  description: "How a section 721 contribution of a hotel for REIT operating partnership units works, what the mortgage does to it, and what the owner gives up.",
  lastUpdated: "2026-11-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Can I contribute my hotel to a REIT instead of selling it?",
    "What is a 721 exchange for a hotel?",
    "Can I roll my hotel into a REIT and defer the tax?",
    "What are OP units and how are they taxed?",
    "Is an UPREIT contribution a 1031 exchange?",
    "Can I keep managing my hotel if a REIT owns it?",
    "What happens to my mortgage if I contribute my hotel to a REIT?",
    "When do I pay tax on REIT operating partnership units?"
  ],
  answer: "Yes, if the REIT has an operating partnership. Section 721(a) recognizes no gain when you contribute the hotel for units.[1] Two catches decide whether it works: the mortgage the partnership takes on is treated as cash paid to you, which can trigger tax on day one,[2] and you stop running the hotel.[3] Host Hotels held 99 percent of its own units on December 31, 2025.[4]",
  takeaways: [
    "Section 721(a) is not section 1031. A 1031 exchange has needed like-kind real property since December 22, 2017, and a partnership unit is not real property.[5]",
    "The deferral is real but partial. A mortgage the partnership takes on is a deemed cash distribution to you under section 752(b), and gain is recognized to the extent it exceeds your basis.[2][9]",
    "You cannot keep operating the hotel. A REIT may not manage a lodging facility, so a third-party manager runs it.[3][4]",
    "Cash alongside the units within two years is presumed to be a sale of the hotel, not a contribution.[10]",
    "Redeeming the units later is a taxable sale, and the REIT's own filings warn the tax can exceed what the holder receives.[4]"
  ],
  sections: [
    {
      h2: "What is a section 721 contribution, and how is it different from a 1031 exchange?",
      lead: "A section 721 contribution hands the hotel to a REIT's operating partnership in exchange for partnership units, and section 721(a) recognizes no gain on the exchange itself.[1]",
      body: "Section 721(a) is one sentence: no gain or loss is recognized to a partnership or to its partners when property is contributed to the partnership in exchange for an interest in it.[1] There is no 45-day identification period, no 180-day deadline and no qualified intermediary, because none of the section 1031 machinery applies.\n\nThat is also why the two cannot be combined in one step. Section 1031(a)(1) has limited nonrecognition to real property exchanged for like-kind real property since Pub. L. 115-97 section 13303 substituted \"real property\" for \"property\" on December 22, 2017, and before that amendment section 1031(a)(2)(D) excluded interests in a partnership by name.[5] A unit in a REIT's operating partnership is a partnership interest. It is not like-kind replacement property, and a sale followed by a purchase of units is not an exchange. The deferral route that does run through section 1031 is a fractional interest in real property, covered at [Can I do a 1031 exchange without buying another hotel?](/sell-a-hotel/1031-without-buying-another-hotel)\n\nSection 721(b) withholds that treatment from a transfer to a partnership that would be an investment company if it were incorporated, which a hotel partnership is not.[1]"
    },
    {
      h2: "Which hotel REITs can even accept my hotel?",
      lead: "Only a REIT built as an umbrella partnership, because the units have to be issued by an operating partnership that holds the real estate.[4]",
      body: "Host Hotels & Resorts describes the structure in its own words in the Form 10-K it filed on February 25, 2026: Host Inc. \"operates through an umbrella partnership structure in which substantially all its assets are owned by Host L.P.\", of which it is sole general partner and held approximately 99 percent of the units as of December 31, 2025.[4] The other 1 percent is the part that matters to a private owner. Unaffiliated limited partners held 9.4 million units at that date, convertible into 9.6 million common shares at a conversion factor of 1.021494, and the partnership had 972 limited partners besides Host Inc. as of February 20, 2026.[4] Host also states that acquisitions may be funded by issuances of units by the partnership.[4]\n\nPlenty of hotel REITs are not built this way, and they have nothing to contribute into. Apple Hospitality REIT owns its hotels through subsidiaries and leases all of them to a wholly owned taxable REIT subsidiary; the word \"partnership\" does not appear anywhere in the Form 10-K it filed on February 23, 2026.[6] An owner who wants units rather than cash has to start by asking which structure the buyer actually has, because the answer is public and it decides whether the conversation is possible at all. How to read those filings is at [How do hotel REITs work?](/hotel-industry/how-hotel-reits-work)"
    },
    {
      h2: "What does my mortgage do to the tax result?",
      lead: "It is the single most common reason a contribution an owner was told would be tax-free is not, because debt the partnership takes on counts as cash in your pocket.[2]",
      body: "Section 752(b) treats a decrease in a partner's individual liabilities, when the partnership assumes them, as a distribution of money to that partner.[2] Section 752(a) treats an increase in a partner's share of partnership liabilities as a contribution of money, and 26 CFR 1.752-1(f) nets the two inside one transaction, so only the net decrease is a distribution.[2][7] Example 1 in 26 CFR 1.752-1(g) works the clean case, where the two cancel and nothing is taxed.[7]\n\nOn a hotel contributed to a large operating partnership they do not cancel. The partnership takes on the whole mortgage, and the contributor's share of partnership liabilities afterwards is a sliver of a much larger balance sheet, so most of the mortgage is a net decrease and therefore a deemed cash distribution.\n\nThe basis that distribution is measured against is low, by design. Under section 722 the basis of the partnership interest is the adjusted basis of the contributed property, with no step up to value.[8] Section 731(a)(1) then recognizes gain to the extent money distributed exceeds that basis immediately before the distribution, and treats it as gain from the sale or exchange of the partnership interest.[9] A hotel held twenty years and refinanced once is the textbook case: the mortgage is larger than the remaining basis, and the gap is taxed in the year of the contribution even though no cash changed hands. Depreciation recapture is covered separately at [What taxes do I pay when I sell a hotel?](/sell-a-hotel/taxes-when-selling-a-hotel)\n\nThe fix, where one is available, is to keep enough of the partnership's debt allocated to you that the net decrease stays inside your basis. How much is allocated is governed by the section 752 regulations, not by agreement.[7] The worked example below prices the gap on an $18,000,000 hotel."
    },
    {
      h2: "Will I still run the hotel after the contribution?",
      lead: "No. A REIT is not permitted to operate or manage a lodging facility, so the hotel passes to a third-party manager at closing.[3][4]",
      body: "The REIT rules reach this result in three steps. Rent based on the income or profits of a tenant is not rents from real property under section 856(d)(2)(A), and rent from a person the REIT owns 10 percent or more of is excluded under section 856(d)(2)(B).[3] Section 856(d)(8)(B) restores the exclusion for a qualified lodging facility leased to a taxable REIT subsidiary, but only if the property is operated on behalf of that subsidiary by an eligible independent contractor.[3] Section 856(d)(9)(E) then says that operating a property includes managing it.[3] Section 856(d)(9)(D)(ii) defines a lodging facility as a hotel, a motel, or another establishment more than half of whose dwelling units are used on a transient basis.[3]\n\nHost states the consequence plainly for its own investors: \"To maintain our status as a REIT, we are not permitted to operate or manage any of our hotels\", and so it is \"unable to directly implement strategic business decisions with respect to the daily operation and marketing of our hotels, such as decisions with respect to the setting of room rates, food and beverage pricing and certain similar matters.\"[4]\n\nAn owner whose management company already runs hotels for unrelated owners is not automatically excluded. Section 856(d)(9)(A) requires the contractor, when it signs the management agreement, to be actively engaged in operating qualified lodging facilities for a person unrelated to the REIT or its subsidiary, and section 856(d)(3) caps it at 35 percent ownership of the REIT.[3] An owner who manages only their own hotel fails the first test on its face. What a management agreement does and does not control is at [Hotel management agreements](/hotel-industry/hotel-management-agreements)."
    },
    {
      h2: "Can I take cash out at the same time as the units?",
      lead: "Some, but cash moving within two years of the contribution is presumed to be a sale of the hotel rather than a contribution.[10]",
      body: "26 CFR 1.707-3(c)(1) sets the presumption: if within a two-year period a partner transfers property to a partnership and the partnership transfers money or other consideration to the partner, in either order, the transfers are presumed to be a sale unless the facts and circumstances clearly establish otherwise.[10] Paragraph (d) runs the presumption the other way once the two transfers are more than two years apart.[10] Treating a within-two-years transfer as something other than a sale also has to be disclosed to the IRS under 26 CFR 1.707-8.[10]\n\nThe regulation's own examples show how much turns on risk rather than labels. In Example 5 a payment made 25 months later was not a sale, because at the time of the contribution the money depended on whether the partnership could lease the building; in Example 6, on the same facts but with the loan committed regardless of performance, the same payment was part of a sale.[10] A partial cash, partial units deal is normal and is not the problem. Pricing it as a contribution when it is substantially a sale is."
    },
    {
      h2: "What happens if the REIT sells my hotel later?",
      lead: "The built-in gain you brought in comes back to you, not to the other partners, under section 704(c)(1)(A).[11]",
      body: "Section 704(c)(1)(A) requires income, gain, loss and deduction on contributed property to be shared so as to take account of the difference between the partnership's basis in the property and its value when it was contributed.[11] In practice the gain that accrued on your hotel over your hold stays charged to you. Nothing about the units changes that, and a REIT that sells the hotel three years later can hand you a tax bill in a year you had no say over the decision.\n\nTwo seven-year rules sit alongside it. Section 704(c)(1)(B) treats the contributing partner as recognizing that gain if the contributed property is distributed to another partner within seven years of being contributed.[11] Section 737 reaches the mirror case: if the partnership distributes other property to you within seven years, you recognize gain up to the lesser of the value of that property over your basis in the interest, or your net precontribution gain.[12] Both are worth checking against the partnership agreement's hold and disposition terms before signing, because they convert someone else's transaction into your tax year."
    },
    {
      h2: "When does the deferred tax actually come due?",
      lead: "When the units are redeemed or sold, which the REIT's own filings describe as a taxable sale of the units.[4]",
      body: "Host's Form 10-K states it as a risk factor: a limited partner who elects to redeem units \"will be treated for federal and state income tax purposes as having sold the OP units, resulting in a taxable event\", measured against a basis that includes the partnership liabilities allocated to the redeemed units.[4] The same paragraph carries the warning an owner should read twice: \"It is possible that the amount of gain and/or the tax liability related thereto that the limited partner recognizes and pays could exceed the value of the common stock or cash received from the redemption of its OP units.\"[4] Units are also not freely transferable: Host says transfers of its common units are restricted by the partnership agreement and that no established public trading market exists for them.[4]\n\nSo section 721 defers the tax, it does not forgive it, and the holder is left with an illiquid position whose eventual bill can outrun its value. The exit that ends the deferral without a sale is death, because the basis of the units is reset under section 1014, which is why these contributions are usually estate planning rather than portfolio management. That route, and the 2026 exclusion amount it depends on, is at [Estate tax and basis step-up on a hotel](/sell-a-hotel/estate-tax-and-basis-step-up)."
    }
  ],
  table: {
    caption: "Three exits for an appreciated hotel, compared on what the statute does, November 2026",
    columns: [
      "Question",
      "Taxable sale",
      "Section 1031 exchange",
      "Section 721 contribution"
    ],
    rows: [
      [
        "Gain recognized at closing",
        "All of it",
        "None, if the exchange is completed[5]",
        "None on the exchange itself, but debt relief is a deemed distribution[1][2]"
      ],
      [
        "What you hold afterwards",
        "Cash",
        "Like-kind real property[5]",
        "Partnership units in the REIT's operating partnership[4]"
      ],
      [
        "Who runs the hotel",
        "The buyer decides",
        "You, if you buy another hotel",
        "A third-party manager. A REIT may not manage it[3][4]"
      ],
      [
        "Deadlines in the statute",
        "None",
        "45 days to identify, 180 days to close[5]",
        "None, but cash within two years is presumed a sale[10]"
      ],
      [
        "Basis you start with",
        "Not applicable",
        "Carryover basis in the replacement property[5]",
        "Adjusted basis of the hotel, under section 722[8]"
      ],
      [
        "Who owes the tax if it is sold later",
        "Not applicable",
        "You, on your own sale",
        "You, on the built-in gain, whenever the REIT sells[11]"
      ],
      [
        "When the deferred tax comes due",
        "Now",
        "On a sale with no further exchange",
        "On redemption or sale of the units[4]"
      ],
      [
        "Liquidity of what you hold",
        "Immediate",
        "A hotel you can sell",
        "Restricted units with no public market[4]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' October 2026 rate sheet puts the 10-year Treasury at 5.29% as of September 30, 2026, which is the number the alternative is priced off: an owner who refinances instead of contributing keeps the hotel and the operating decisions, and pays a spread over that index that no lender publishes.[13]"
  },
  workedExample: {
    label: "Worked example (hypothetical): 124-key select-service hotel, $18,000,000, contributed for units",
    body: "Hypothetical, to show the arithmetic. A hotel is worth $18,000,000 and carries a $7,500,000 mortgage. The owner bought it 22 years ago and the adjusted basis is now $4,200,000. A REIT's operating partnership takes the hotel subject to the mortgage and issues units for the equity: $18,000,000 less $7,500,000 is $10,500,000 of equity, and at a unit value of $17.50 that is 600,000 units.\n\nStep 1, the liability shift. The partnership takes on $7,500,000 of the owner's debt, and the owner's share of the partnership's liabilities afterwards is $150,000. Under 26 CFR 1.752-1(f) only the net figure counts, so $7,500,000 less $150,000 is a $7,350,000 net decrease, treated as a distribution of money by section 752(b).[2][7]\n\nStep 2, the basis. Under section 722 the basis of the units is the adjusted basis of the hotel, $4,200,000, with no step up to the $18,000,000 value.[8]\n\nStep 3, the gain. Section 731(a)(1) recognizes gain to the extent the money distributed exceeds that basis: $7,350,000 less $4,200,000 is $3,150,000 of gain, in the year of the contribution.[9] No cash was received, so the tax on it has to be funded from somewhere else. That gain is 30.0 percent of the $10,500,000 of equity the owner took in units.\n\nStep 4, what was actually deferred. An outright sale at $18,000,000 would have produced $18,000,000 less $4,200,000, or $13,800,000 of gain. The contribution recognized $3,150,000 of that and deferred $10,650,000, so 77.2 percent of the gain was deferred, not all of it.\n\nStep 5, the figure to negotiate. For the deemed distribution to stay inside the $4,200,000 basis, the owner's allocated share of partnership liabilities has to be at least $7,500,000 less $4,200,000, or $3,300,000. At exactly $3,300,000 the net decrease is $4,200,000 and the recognized gain is zero. Whether that allocation is available is a question of the section 752 regulations and the partnership's debt, not of what the term sheet says.[7]"
  },
  faq: [
    {
      q: "Is a 721 contribution a 1031 exchange?",
      a: "No. Section 1031 has required like-kind real property since December 22, 2017, and a partnership unit is not real property. Before that amendment, section 1031(a)(2)(D) excluded partnership interests by name.[5]"
    },
    {
      q: "Can I contribute my hotel to any REIT?",
      a: "Only to one with an operating partnership that can issue units. Apple Hospitality REIT's Form 10-K filed February 23, 2026 does not use the word partnership at all.[6]"
    },
    {
      q: "Will contributing my hotel to a REIT be tax-free?",
      a: "Rarely all of it. Section 721(a) covers the exchange, but a mortgage the partnership takes on is a deemed cash distribution under section 752(b), and gain is recognized above your basis.[1][2][9]"
    },
    {
      q: "Can I keep managing my hotel after the contribution?",
      a: "Not unless your management company already operates hotels for unrelated owners. Section 856(d)(9)(A) requires that, section 856(d)(9)(E) counts managing as operating, and section 856(d)(3) caps the manager at 35 percent of the REIT.[3]"
    },
    {
      q: "Can I take some cash as well as units?",
      a: "Yes, but 26 CFR 1.707-3(c)(1) presumes that cash moving within two years of the contribution, in either direction, is a sale of the hotel instead of a contribution.[10]"
    },
    {
      q: "What if the REIT sells my hotel a year later?",
      a: "The built-in gain from your hold is allocated back to you under section 704(c)(1)(A), in a year you did not choose.[11] Check the partnership agreement's disposition terms first."
    },
    {
      q: "Can I sell the units when I want cash?",
      a: "Not freely. Host Hotels states that transfers of its units are restricted by the partnership agreement and that no public trading market exists, and that redemption is a taxable sale.[4]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "26 U.S.C. 721, nonrecognition of gain or loss on contribution, subsections (a) and (b)",
      url: "https://www.law.cornell.edu/uscode/text/26/721",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-18"
    },
    {
      n: 2,
      label: "26 U.S.C. 752, treatment of certain liabilities, subsections (a), (b) and (c)",
      url: "https://www.law.cornell.edu/uscode/text/26/752",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-18"
    },
    {
      n: 3,
      label: "26 U.S.C. 856(d)(2), (d)(3), (d)(8)(B) and (d)(9)(A), (D), (E) and (F), rents from real property and eligible independent contractors",
      url: "https://www.law.cornell.edu/uscode/text/26/856",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-18"
    },
    {
      n: 4,
      label: "Host Hotels & Resorts, Inc. and Host Hotels & Resorts, L.P., Form 10-K for the fiscal year ended December 31, 2025, filed February 25, 2026",
      url: "https://www.sec.gov/Archives/edgar/data/1070750/000107075026000054/hst-20251231.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-11-18"
    },
    {
      n: 5,
      label: "26 U.S.C. 1031, exchange of real property held for productive use or investment, subsection (a) and the 2017 amendment notes to Pub. L. 115-97 section 13303",
      url: "https://www.law.cornell.edu/uscode/text/26/1031",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-18"
    },
    {
      n: 6,
      label: "Apple Hospitality REIT, Inc., Form 10-K for the fiscal year ended December 31, 2025, filed February 23, 2026",
      url: "https://www.sec.gov/Archives/edgar/data/1418121/000119312526064008/aple-20251231.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-11-18"
    },
    {
      n: 7,
      label: "26 CFR 1.752-1, treatment of partnership liabilities, paragraphs (f) and (g) Example 1",
      url: "https://www.law.cornell.edu/cfr/text/26/1.752-1",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-18"
    },
    {
      n: 8,
      label: "26 U.S.C. 722, basis of contributing partner's interest",
      url: "https://www.law.cornell.edu/uscode/text/26/722",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-18"
    },
    {
      n: 9,
      label: "26 U.S.C. 731, extent of recognition of gain or loss on distribution, subsection (a)",
      url: "https://www.law.cornell.edu/uscode/text/26/731",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-18"
    },
    {
      n: 10,
      label: "26 CFR 1.707-3, disguised sales of property to a partnership, paragraphs (c), (d) and (f) Examples 5 and 6",
      url: "https://www.law.cornell.edu/cfr/text/26/1.707-3",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-18"
    },
    {
      n: 11,
      label: "26 U.S.C. 704(c), contributed property, paragraphs (1)(A) and (1)(B)",
      url: "https://www.law.cornell.edu/uscode/text/26/704",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-18"
    },
    {
      n: 12,
      label: "26 U.S.C. 737, recognition of precontribution gain in case of certain distributions, subsections (a) and (b)",
      url: "https://www.law.cornell.edu/uscode/text/26/737",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-18"
    },
    {
      n: 13,
      label: "Hotel loan rate sheet, October 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-11-18"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/1031-without-buying-another-hotel",
      "/sell-a-hotel/taxes-when-selling-a-hotel",
      "/sell-a-hotel/estate-tax-and-basis-step-up",
      "/sell-a-hotel/asset-sale-vs-entity-sale",
      "/sell-a-hotel/how-to-sell-a-hotel"
    ],
    glossary: [
      "/glossary/going-concern-value",
      "/glossary/cap-rate",
      "/glossary/noi"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Get a broker opinion of value",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets does not arrange contributions to REIT partnerships, and says so rather than pitching one: what the team does is sell hotels and give a free broker opinion of value, which is the number a unit offer should be measured against."
};

export default page;
