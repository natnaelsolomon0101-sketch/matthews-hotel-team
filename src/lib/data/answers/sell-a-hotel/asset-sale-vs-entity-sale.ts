/**
 * Should I sell my hotel as an asset sale or sell the LLC?
 * Answer page: /sell-a-hotel/asset-sale-vs-entity-sale
 *
 * Written 2026-11-10 from statute, regulation and agency documents read that
 * day. Coverage gap this fills: "equity sale", "successor liability",
 * "Form 8308" and section 751 / 743 / 754 / 1446(f) appeared in zero or near
 * zero files under src/lib/data/ before this page.
 *
 * TWO PRECISION POINTS. Do not let a later edit smooth either one over.
 *
 * 1. Selling the entity does NOT convert depreciation into capital gain, and
 *    it takes two separate rules to say so. Section 751(c) treats section
 *    1245 recapture as an unrealized receivable, which is ordinary income
 *    under 751(a). Unrecaptured section 1250 gain is NOT a 751 hot asset on a
 *    straight-line-depreciated building, because the section 1250(a)
 *    recapture amount is zero; it reaches the selling partner through the
 *    look-through rule in 26 CFR 1.1(h)-1(b)(3) instead, at the 25 percent
 *    maximum rate. Two mechanisms, same destination.
 * 2. The federal bill is identical in the worked example BECAUSE the asset
 *    sale allocation was set equal to fair market value. Section 1060 lets
 *    the parties bind themselves to a written allocation; section 751 and
 *    1.1(h)-1 run off a deemed sale at fair market value and ignore what the
 *    parties agreed. That is where the two structures actually diverge for
 *    the seller, and the page says so.
 *
 * Every figure recomputed by scripts/check-entity-sale-math.mjs (38
 * assertions). Re-run it after touching any number here.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "asset-sale-vs-entity-sale",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Asset Sale vs Entity Sale for a Hotel",
  h1: "Should I sell my hotel as an asset sale or sell the LLC?",
  description: "Selling the LLC does not turn depreciation into capital gain. Section 751 and 26 CFR 1.1(h)-1 follow you. What changes is the buyer's basis.",
  lastUpdated: "2026-11-12",
  authorSlug: "miles-cortez",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Should I sell my hotel as an asset sale or sell the LLC?",
    "Is it better to sell the hotel or sell the entity that owns it?",
    "Does selling my LLC instead of the hotel avoid depreciation recapture?",
    "Can I do a 1031 exchange if I sell my LLC membership interests?",
    "What is a section 754 election and why does my buyer want it?",
    "Will selling the entity avoid the transfer tax and the property tax reassessment?",
    "What taxes do I pay when I sell a hotel?",
    "What documents do I need to sell my hotel?"
  ],
  answer: "Less than owners expect. Section 741 calls gain on a sale of LLC interests capital gain, then section 751(a) and 26 CFR 1.1(h)-1 pull the depreciation back out. On the same $18,000,000 price and the same allocation the federal bill is identical. The 25 percent cap on the depreciation layer held as of November 9, 2026.[1][2][3][4]",
  takeaways: [
    "Section 741 makes gain on a sale of a partnership interest capital gain, except as section 751 provides. Section 751(c) counts section 1245 recapture as an unrealized receivable, so the FF&E layer is ordinary income either way.[1][2][5]",
    "The 25 percent layer follows you through a different door: 26 CFR 1.1(h)-1(b)(3) hands the selling partner the share of section 1250 capital gain a deemed cash sale of the buildings would produce.[3][4]",
    "The mortgage does not shrink the gain. Section 752(d) and IRS Publication 544 put liabilities the buyer takes on into the amount realized.[10][11]",
    "The real difference is on the buyer's side. Without a section 754 election the partnership's basis in the hotel does not move, and in the example below a $9,700,000 step-up never happens.[8][9]",
    "An entity sale cannot be a 1031 exchange. 26 CFR 1.1031(a)-3(a)(5)(i)(C) excludes interests in a partnership unless a valid section 761(a) election is in effect.[12][13]"
  ],
  sections: [
    {
      h2: "What is the difference between an asset sale and an entity sale?",
      lead: "In an asset sale the hotel changes hands. In an entity sale the owner of the hotel changes hands, and the hotel never moves.",
      body: "An asset sale conveys the land and building by deed and the furniture, fixtures, equipment and goodwill by bill of sale. Federal tax law calls that an applicable asset acquisition: a transfer of assets making up a trade or business where the buyer's basis is set entirely by what it paid. The price is allocated the way section 338(b)(5) allocates it, and that allocation controls both the buyer's basis and the seller's gain. A written agreement on the allocation, or on an asset's fair market value, binds both sides unless the Secretary finds it inappropriate.[6]\n\nBoth sides then file Form 8594. The IRS instructions put buildings, land, furniture and equipment in Class V, section 197 intangibles other than goodwill in Class VI, and goodwill and going concern value in Class VII, and they exclude transfers of partnership interests from the form unless the transfer is treated as a purchase of the partnership's assets.[7] That last clause is the structural difference in miniature.\n\nAn entity sale is an assignment of membership interests or stock. Nothing is deeded. The company keeps its taxpayer identification number, its contracts, its permits and every liability on and off its balance sheet. Owners reach for it to keep a franchise approval they would rather not restart, to keep a loan they would rather not pay off, and to shrink a tax bill. The first two reasons are often real. The third usually is not.\n\nThere is a third structure owners ask about, and it is not a variant of these two: recording a declaration of condominium and selling the rooms one at a time. That changes what is being sold rather than how, and it brings the securities laws and the mortgage agencies with it: [can I sell my hotel as condominium units?](/sell-a-hotel/condo-hotel-conversion)"
    },
    {
      h2: "Does selling the LLC turn my depreciation into capital gain?",
      lead: "No. Two separate rules reach inside the partnership and pull the depreciation back out, and they work in different ways.",
      body: "Section 741 says the selling partner recognizes gain or loss on a sale of an interest, and that it is capital, except as section 751 provides.[1] Everything turns on that exception.\n\nSection 751(a) treats the amount received for the part of the interest attributable to unrealized receivables or inventory items as realized from the sale of property other than a capital asset, which is ordinary income.[2] The term sounds like it is about accounts receivable. The flush language of section 751(c) stretches it: the term reaches section 1245(a)(3) and section 1250(c) property to the extent of the ordinary income a deemed sale at fair market value would produce.[2] Section 1245(a)(1) sets that amount as the excess of the lower of recomputed basis or the amount realized over adjusted basis, recomputed basis being adjusted basis plus the depreciation allowed or allowable.[5] Hotel furniture and kitchen equipment are depreciated hard and often fully, so nearly all of their value is ordinary income to a selling member.\n\nThe building layer arrives by another route, and this is the part most summaries get wrong. On a building depreciated straight-line there is no section 1250 recapture to carve out, so the 25 percent layer is not a section 751 hot asset. It reaches the seller through 26 CFR 1.1(h)-1 instead. Paragraph (b)(3) defines a partner's share of section 1250 capital gain as the amount that would be allocated to that partner if the partnership sold all of its section 1250 property for cash at fair market value immediately before the transfer, and paragraph (a) subtracts the look-through amounts from the section 741 gain to leave residual capital gain.[3] The IRS caps that layer at 25 percent, and the same regulation adds that the share is not section 1231 gain.[3][4] The layers themselves are at [what taxes do I pay when I sell a hotel?](/sell-a-hotel/taxes-when-selling-a-hotel)."
    },
    {
      h2: "What does the buyer lose in an entity sale?",
      lead: "The step-up. Buying interests does not move the partnership's basis in the hotel unless the partnership elects to move it.",
      body: "Section 743(a) is blunt: the basis of partnership property is not adjusted as the result of a transfer of an interest unless a section 754 election is in effect, or the partnership has a substantial built-in loss immediately after the transfer.[8] That backstop is no help to a buyer paying a gain price, since it needs basis to exceed fair market value by more than $250,000, or the transferee to be allocated more than $250,000 of loss on a deemed cash sale.[8]\n\nWith the election in place, section 743(b)(1) increases the partnership's basis in its property by the excess of the transferee's basis in the interest over that partner's share of the adjusted basis of the property.[8] Section 754 governs it, and the election covers every distribution and every transfer in the year it is filed and in all later years, revocable only as the regulations allow.[9]\n\nSo the election belongs to the partnership, not the buyer, and it is close to permanent, which gives a seller keeping a minority stake a reason to resist it. A buyer without it pays asset-sale money for carryover-basis depreciation: in the example below, a $9,700,000 adjustment forgone and $179,487.18 of depreciation lost a year. In an asset sale the step-up is automatic, because the buyer's basis is what it paid.[6] What it is worth class by class is at [hotel depreciation and cost segregation](/buy-a-hotel/depreciation-and-cost-segregation). Settle it in the letter of intent: [how to make an offer on a hotel](/buy-a-hotel/how-to-make-an-offer)."
    },
    {
      h2: "Does an entity sale avoid the transfer tax and the property tax reset?",
      lead: "Not in the states that wrote rules about it, and two large hotel states did.",
      body: "Washington taxes the entity sale directly. A taxable sale includes the transfer or acquisition of a controlling interest in an entity holding Washington real property within any 36-month period, and acquisitions by persons acting in concert are aggregated, so selling 49 percent now and 2 percent eighteen months later does not beat the clock.[18] A controlling interest is 50 percent or more of the capital, profits or beneficial interest, with a voting-power test for corporations.[19] The Department of Revenue treats the transfer as a taxable sale of the real property at its true and fair value, and local tax is added to the graduated state rate: 1.1 percent on the price up to $525,000, 1.28 percent to $1,525,000, 2.75 percent to $3,025,000 and 3 percent above that, with the next four-year adjustment effective January 1, 2027 at $551,000, $1,551,000 and $3,051,000.[20]\n\nCalifornia starts from the opposite rule and lands close by. Property Tax Rule 462.180(c) states that a transfer of corporate stock or partnership interests is not a change in ownership of the entity's real property, under section 64(a) of the Revenue and Taxation Code. Paragraph (d)(1) takes it back: when anyone obtains direct or indirect control of more than 50 percent of a corporation's voting stock, or of more than 50 percent of both the capital interest and the profits interest in a partnership or limited liability company, all property owned directly or indirectly by that entity is deemed to have changed ownership. Paragraph (d)(2) adds the original co-owner rule, cumulating later transfers where the property went in under a section 62(a)(2) exclusion.[21] The acquirer then has 90 days to file form BOE-100-B, and the section 482 penalty for missing it is 10 percent of the taxes applicable to the new base year value.[22] Appealing a reset value is at [how do I appeal my hotel property tax assessment?](/hotel-valuation/property-tax-appeal)."
    },
    {
      h2: "Can I still do a 1031 exchange if I sell the entity?",
      lead: "Not on the interests themselves. A partnership interest is not real property, and section 1031 reaches real property only.",
      body: "Section 1031(a)(1) defers gain on an exchange of real property held for productive use in a trade or business or for investment, solely for like-kind real property, and paragraph (a)(2) carries the statute's only exception, for property held primarily for sale.[13] The regulation does the defining. 26 CFR 1.1031(a)-3(a)(1) says real property means land and improvements to land, unsevered natural products of land, and water and air space superjacent to land, and its list of inherently permanent structures names hotels.[12]\n\nThe exclusion is explicit. Paragraph (a)(5)(i)(C) lists interests in a partnership among the intangible assets that are not real property, other than an interest in a partnership with a valid section 761(a) election in effect, and it says so regardless of how state law classifies the interest.[12] None of this is new: before 2018 the statute itself listed partnership interests in its exclusions, and Public Law 115-97 rewrote that paragraph for exchanges completed after December 31, 2017.[13]\n\nSo this is a sequencing problem, not a paperwork problem. An owner who wants an exchange needs the partnership to sell the hotel and handle the proceeds, or to distribute real property interests well ahead of a sale; restructuring a few weeks before closing is the version that fails. The mechanics are at [how does a 1031 exchange work on a hotel?](/hotel-financing/1031-exchange-hotels), and the no-replacement-hotel options at [can I do a 1031 exchange without buying another hotel?](/sell-a-hotel/1031-without-buying-another-hotel)."
    },
    {
      h2: "What else changes with the structure?",
      lead: "Liabilities, the withholding rate on a foreign seller, the forms that get filed, and whether a C corporation is in the way.",
      body: "Section 752(d) treats liabilities on a sale of a partnership interest the way they are treated outside a partnership, and Publication 544 puts liabilities the buyer assumes into the amount realized, so a mortgage that stays with the entity does not reduce the gain.[10][11] The other way round, an entity buyer inherits everything the entity owes, including unpaid sales and occupancy tax: [tax clearance and withholding when you sell a hotel](/sell-a-hotel/tax-clearance-and-withholding).\n\nA foreign seller is withheld on either way, at different rates. On an asset sale the transferee of a United States real property interest withholds 15 percent of the amount realized, raised from 10 percent for dispositions more than 60 days after December 18, 2015.[14] On a sale of interests, section 1446(f)(1) makes the transferee withhold 10 percent where any part of the gain would be effectively connected income under section 864(c)(8), subject to a sworn non-foreign affidavit, a reduced-amount procedure, and a backstop that makes the partnership withhold from the buyer's own distributions if the buyer fails to.[15] Section 864(c)(8) reaches dispositions on or after November 27, 2017, section 1446(f) those after December 31, 2017.[16] Buyer-side screening is at [can I sell my hotel to a foreign buyer?](/sell-a-hotel/selling-to-a-foreign-buyer).\n\nThe forms differ too. Section 6050K makes the partnership file a return for any year in which a section 751(a) exchange occurs, and makes the transferor notify it promptly.[25] That return is Form 8308, filed with Form 1065, with Parts I through III furnished to each transferor and transferee by January 31 or within 30 days of notice, whichever is later.[17] Two last checks. If the hotel sits in a C corporation, section 336(a) treats property distributed in a complete liquidation as sold at fair market value, so an asset sale is taxed at the corporation before the shareholders see anything.[23] And no lender and no franchisor publishes whether it will consent to a change of control, or what it charges, so ask in writing before the structure is set: [how does a hotel franchise transfer work?](/sell-a-hotel/franchise-transfer) and [what happens to my hotel loan when I sell?](/hotel-financing/loan-assumption)."
    }
  ],
  table: {
    caption: "Asset sale compared with entity sale, hotel held in an LLC taxed as a partnership",
    columns: [
      "What is at stake",
      "Asset sale",
      "Entity sale (membership interests)"
    ],
    rows: [
      [
        "What transfers",
        "Land and building by deed, FF&E and goodwill by bill of sale[6]",
        "The ownership interests; the LLC keeps the hotel"
      ],
      [
        "Seller's ordinary income layer",
        "Section 1245 recapture on the FF&E[5]",
        "The same, through sections 751(a) and 751(c)[2]"
      ],
      [
        "Seller's 25 percent layer",
        "Unrecaptured section 1250 gain[4]",
        "The same, through 26 CFR 1.1(h)-1(b)(3)[3]"
      ],
      [
        "Price allocation",
        "Binding on both sides if agreed in writing[6]",
        "Runs off a deemed sale at fair market value, not agreement[2][3]"
      ],
      [
        "Buyer's basis in the hotel",
        "Reset to what the buyer paid[6]",
        "Unchanged unless a section 754 election is in effect[8][9]"
      ],
      [
        "Section 1031 exchange",
        "Available on the real property[13]",
        "Not available: a partnership interest is not real property[12]"
      ],
      [
        "Liabilities",
        "Only the ones the buyer agrees to assume",
        "Everything the entity owes, listed or not[10][11]"
      ],
      [
        "Washington excise tax",
        "Due on the selling price[20]",
        "Due anyway on a controlling interest of 50 percent or more[18][19][20]"
      ],
      [
        "California base year value",
        "Reset: the property changed hands",
        "Reset anyway on a change in control above 50 percent[21][22]"
      ],
      [
        "Withholding, foreign seller",
        "15 percent of the amount realized[14]",
        "10 percent of the amount realized[15][16]"
      ],
      [
        "Reporting",
        "Form 8594 from both sides[7]",
        "Form 8308 from the partnership on a 751(a) exchange[17][25]"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "Matthews Hotel Markets publishes the Matthews Hotel Index, and its Q1 2026 edition puts Atlanta select-service cap rates at 8.00% to 8.75%. Take the low end: $1,440,000 of net operating income divided by 8.00% is the $18,000,000 price that every figure in the worked example below runs on.[24]"
  },
  workedExample: {
    label: "Hypothetical: the same $18,000,000 hotel sold both ways",
    body: "Hypothetical, not a transaction. A 110-key select-service hotel in a Matthews Hotel Index market, held in an LLC taxed as a partnership. Net operating income of $1,440,000 at the 8.00% low end of the Q1 2026 Atlanta select-service band is $18,000,000.[24] Mortgage $9,600,000. Original cost: land $1,800,000, building $9,000,000, FF&E $2,200,000. Depreciation taken: $2,500,000 on the building, straight-line, and all $2,200,000 of the FF&E. The owners are individuals at 20, 25 and 37 percent on the three layers.[4]\n\nAsset sale. Allocation: land $2,700,000, building $13,500,000, FF&E $1,500,000, goodwill $300,000, summing to $18,000,000. Land gain of $900,000 at 20 percent is $180,000. The building's basis is $6,500,000, so gain is $7,000,000: $2,500,000 at 25 percent is $625,000, the other $4,500,000 at 20 percent is $900,000. FF&E basis is zero, so all $1,500,000 is gain, inside the $2,200,000 of depreciation taken, and ordinary under section 1245(a)(1): $555,000.[5] Goodwill adds $60,000. Total $2,320,000 on $9,700,000 of gain.\n\nEntity sale. Cash at closing is $8,400,000 after the $9,600,000 loan, and section 752(d) puts the loan back, so the amount realized is $18,000,000.[10][11] Outside basis equals inside basis here, $1,800,000 plus $6,500,000, or $8,300,000, so gain is $9,700,000, the same total. Sections 751(a) and 751(c) make $1,500,000 of it ordinary: $555,000.[2][5] 26 CFR 1.1(h)-1(b)(3) assigns $2,500,000 of section 1250 capital gain: $625,000.[3] The residual $5,700,000 at 20 percent is $1,140,000. Total $2,320,000, so the difference between the two structures is zero. It came out even because the allocation was set equal to fair market value, the measure sections 751 and 1.1(h)-1 use; move $400,000 of price from FF&E to goodwill and the asset-sale seller saves $68,000, being the 17-point gap between 37 and 20 percent, while the entity-sale seller saves nothing.[6]\n\nThe buyer's side. Asset sale: building basis $13,500,000, or $346,153.85 a year over 39 years. Entity sale with no section 754 election: inside basis stays $6,500,000, or $166,666.67 a year, and FF&E basis stays at zero. That is $179,487.18 of depreciation lost a year, worth $66,410.26 at 37 percent, and a section 743(b) adjustment of $9,700,000 forgone.[8][9]\n\nThe same hotel in Washington. State excise tax on $18,000,000 is $5,775 plus $12,800 plus $41,250 plus $449,250, or $509,075, before local tax, and selling the controlling interest does not avoid it.[18][19][20] Closing in January 2027 gives $508,581, a saving of $494.[20]\n\nThe same hotel in California. On a $7,200,000 base year value, a change in control above 50 percent resets it to $18,000,000, adding $10,800,000 of assessed value whichever way the deal was papered, and the BOE-100-B is due within 90 days.[21][22]\n\nEvery figure above was recomputed by scripts/check-entity-sale-math.mjs."
  },
  faq: [
    {
      q: "Does selling my LLC instead of the hotel avoid depreciation recapture?",
      a: "No. Section 751(c) treats section 1245 recapture as an unrealized receivable, ordinary income under 751(a), and 26 CFR 1.1(h)-1(b)(3) hands you the section 1250 layer at up to 25 percent.[2][3][4]"
    },
    {
      q: "Is the seller's tax lower in an asset sale or an entity sale?",
      a: "On the same price and allocation, the same. They diverge when the parties allocate away from fair market value: section 1060 lets a written allocation bind them, and the entity-sale rules ignore it.[2][3][6]"
    },
    {
      q: "What is a section 754 election and why does my buyer want it?",
      a: "The partnership's election to adjust the basis of its property on a transfer of an interest. Without it, section 743(a) leaves the hotel's basis alone and the buyer depreciates the seller's old basis.[8][9]"
    },
    {
      q: "Can I do a 1031 exchange on LLC membership interests?",
      a: "No. 26 CFR 1.1031(a)-3(a)(5)(i)(C) says interests in a partnership are not real property, unless a valid section 761(a) election is in effect, regardless of state law.[12]"
    },
    {
      q: "Does the mortgage reduce my gain if the entity keeps the loan?",
      a: "No. Section 752(d) treats liabilities on a sale of a partnership interest as they are treated outside a partnership, and Publication 544 puts liabilities the buyer assumes into the amount realized.[10][11]"
    },
    {
      q: "Does an entity sale avoid the real estate transfer tax?",
      a: "Not in Washington. A controlling interest of 50 percent or more, counted over any 36-month period, is a taxable sale of the real property at its true and fair value.[18][19][20]"
    },
    {
      q: "Will an entity sale keep my California property tax basis?",
      a: "No, not above 50 percent. Rule 462.180(d)(1) deems all the entity's property to have changed ownership on a change in control, and BOE-100-B is due within 90 days.[21][22]"
    },
    {
      q: "What gets filed after an entity sale?",
      a: "Form 8308. Section 6050K makes the partnership report a section 751(a) exchange, and the transferor must notify it. Parts I through III go to both parties by January 31.[17][25]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "26 U.S. Code section 741, Recognition and character of gain or loss on sale or exchange",
      url: "https://www.law.cornell.edu/uscode/text/26/741",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-10"
    },
    {
      n: 2,
      label: "26 U.S. Code section 751, Unrealized receivables and inventory items (subsections (a), (c) and (d))",
      url: "https://www.law.cornell.edu/uscode/text/26/751",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-10"
    },
    {
      n: 3,
      label: "26 CFR 1.1(h)-1, Capital gains look-through rule for sales or exchanges of interests in a partnership, S corporation, or trust, read through the eCFR versioner API for the 2026-10-01 issue of title 26",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-26.xml?section=1.1(h)-1",
      publisher: "Office of the Federal Register / Government Publishing Office",
      accessed: "2026-11-10"
    },
    {
      n: 4,
      label: "Topic no. 409, Capital gains and losses (long-term rates for taxable years beginning in 2025; 25% maximum on unrecaptured section 1250 gain; page last reviewed November 9, 2026)",
      url: "https://www.irs.gov/taxtopics/tc409",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-10"
    },
    {
      n: 5,
      label: "26 U.S. Code section 1245, Gain from dispositions of certain depreciable property (subsections (a)(1) and (a)(3))",
      url: "https://www.law.cornell.edu/uscode/text/26/1245",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-10"
    },
    {
      n: 6,
      label: "26 U.S. Code section 1060, Special allocation rules for certain asset acquisitions",
      url: "https://www.law.cornell.edu/uscode/text/26/1060",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-10"
    },
    {
      n: 7,
      label: "Instructions for Form 8594, Asset Acquisition Statement Under Section 1060 (Rev. November 2021; page last reviewed April 30, 2026)",
      url: "https://www.irs.gov/instructions/i8594",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-10"
    },
    {
      n: 8,
      label: "26 U.S. Code section 743, Special rules where section 754 election or substantial built-in loss (subsections (a), (b) and (d))",
      url: "https://www.law.cornell.edu/uscode/text/26/743",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-10"
    },
    {
      n: 9,
      label: "26 U.S. Code section 754, Manner of electing optional adjustment to basis of partnership property",
      url: "https://www.law.cornell.edu/uscode/text/26/754",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-10"
    },
    {
      n: 10,
      label: "26 U.S. Code section 752, Treatment of certain liabilities (subsection (d))",
      url: "https://www.law.cornell.edu/uscode/text/26/752",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-10"
    },
    {
      n: 11,
      label: "Publication 544 (2025), Sales and Other Dispositions of Assets (amount realized includes liabilities assumed by the buyer)",
      url: "https://www.irs.gov/publications/p544",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-10"
    },
    {
      n: 12,
      label: "26 CFR 1.1031(a)-3, Definition of real property (paragraphs (a)(1), (a)(2) and (a)(5)(i)(C)), read through the eCFR versioner API for the 2026-10-01 issue of title 26",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-26.xml?section=1.1031(a)-3",
      publisher: "Office of the Federal Register / Government Publishing Office",
      accessed: "2026-11-10"
    },
    {
      n: 13,
      label: "26 U.S. Code section 1031, Exchange of real property held for productive use or investment (subsection (a) and the Public Law 115-97 section 13303 amendment note)",
      url: "https://www.law.cornell.edu/uscode/text/26/1031",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-10"
    },
    {
      n: 14,
      label: "26 U.S. Code section 1445, Withholding of tax on dispositions of United States real property interests (subsection (a) and the Public Law 114-113 rate change)",
      url: "https://www.law.cornell.edu/uscode/text/26/1445",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-10"
    },
    {
      n: 15,
      label: "26 U.S. Code section 1446, Withholding of tax on foreign partners' share of effectively connected income (subsection (f))",
      url: "https://www.law.cornell.edu/uscode/text/26/1446",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-10"
    },
    {
      n: 16,
      label: "26 U.S. Code section 864, Definitions and special rules (subsection (c)(8) and its Public Law 115-97 section 13501 effective date)",
      url: "https://www.law.cornell.edu/uscode/text/26/864",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-10"
    },
    {
      n: 17,
      label: "Instructions for Form 8308, Report of a Sale or Exchange of Certain Partnership Interests (Rev. November 2025; page last reviewed April 30, 2026)",
      url: "https://www.irs.gov/instructions/i8308",
      publisher: "Internal Revenue Service",
      accessed: "2026-11-10"
    },
    {
      n: 18,
      label: "RCW 82.45.010, Sale defined (subsection (2): controlling interest transfers within any 36-month period, and persons acting in concert)",
      url: "https://app.leg.wa.gov/RCW/default.aspx?cite=82.45.010",
      publisher: "Washington State Legislature",
      accessed: "2026-11-10"
    },
    {
      n: 19,
      label: "RCW 82.45.033, Controlling interest defined",
      url: "https://app.leg.wa.gov/RCW/default.aspx?cite=82.45.033",
      publisher: "Washington State Legislature",
      accessed: "2026-11-10"
    },
    {
      n: 20,
      label: "Real estate excise tax (graduated state rates, the thresholds in force and the set effective January 1, 2027, controlling interest transfers taxed at true and fair value, local rate added)",
      url: "https://dor.wa.gov/taxes-rates/other-taxes/real-estate-excise-tax",
      publisher: "Washington State Department of Revenue",
      accessed: "2026-11-10"
    },
    {
      n: 21,
      label: "Property Tax Rule 462.180, Change in Ownership - Legal Entities (paragraphs (c), (d)(1) and (d)(2)), 18 CCR 462.180",
      url: "https://www.boe.ca.gov/proptaxes/pdf/ptr462-180.pdf",
      publisher: "California State Board of Equalization",
      accessed: "2026-11-10"
    },
    {
      n: 22,
      label: "Instructions for Completing BOE-100-B, Statement of Change in Control and Ownership of Legal Entities, BOE-100-B-INST REV. 6 (5-22) (90-day filing requirement; 10 percent penalty under R&TC section 482)",
      url: "https://boe.ca.gov/proptaxes/pdf/boe100b-inst.pdf",
      publisher: "California State Board of Equalization",
      accessed: "2026-11-10"
    },
    {
      n: 23,
      label: "26 U.S. Code section 336, Gain or loss recognized on property distributed in complete liquidation (subsection (a))",
      url: "https://www.law.cornell.edu/uscode/text/26/336",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-10"
    },
    {
      n: 24,
      label: "Matthews Hotel Index, Q1 2026 (Atlanta select-service cap rate band)",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-11-10"
    },
    {
      n: 25,
      label: "26 U.S. Code section 6050K, Returns relating to exchanges of certain partnership interests",
      url: "https://www.law.cornell.edu/uscode/text/26/6050K",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-10"
    }
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/taxes-when-selling-a-hotel",
      "/sell-a-hotel/tax-clearance-and-withholding",
      "/sell-a-hotel/1031-without-buying-another-hotel",
      "/sell-a-hotel/franchise-transfer",
      "/sell-a-hotel/liquor-license-transfer",
      "/sell-a-hotel/selling-to-a-foreign-buyer",
      "/sell-a-hotel/how-to-sell-a-hotel"
    ],
    glossary: [
      "/glossary/going-concern-value",
      "/glossary/noi",
      "/glossary/cap-rate"
    ],
    data: [
      "/research/mhi/q1-2026",
      "/rates"
    ]
  },
  cta: {
    label: "Get a net proceeds estimate on both structures",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets runs the disposition and models the net proceeds either way; the structure itself is a question for your tax counsel, and it belongs in the letter of intent rather than in the closing documents."
};

export default page;
