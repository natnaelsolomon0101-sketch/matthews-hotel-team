/**
 * Can I sell my hotel as condominium units?
 * Answer page: /sell-a-hotel/condo-hotel-conversion
 *
 * Written 2026-11-12 from primary sources read that day: Securities Act
 * Release No. 33-5347 (38 FR 1735), the Fannie Mae Selling Guide topic
 * B4-2.1-03 as updated 11/04/2026, 24 CFR 234.26, 13 CFR 120.110, the 2026
 * Florida Statutes 509.242 and 718.117, SEC v. W. J. Howey Co. and
 * 26 U.S.C. 280A. Every figure in the worked example is recomputed by
 * scripts/check-condo-hotel-math.mjs.
 *
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "condo-hotel-conversion",
  cluster: "sell-a-hotel",
  isHub: false,
  title: "Can I Sell My Hotel as Condominium Units?",
  description:
    "What happens when a hotel is split into condo units: the securities trigger, the financing wall, the licence change, and why reassembly is hard.",
  h1: "Can I sell my hotel as condominium units?",
  lastUpdated: "2026-11-12",
  authorSlug: "nate-solomon",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Can I sell my hotel as condominium units?",
    "Should I convert my hotel to a condo hotel and sell the rooms?",
    "Is selling condo hotel units a securities offering?",
    "Can a buyer get a mortgage on a condo hotel unit?",
    "Why won't lenders finance condotel units?",
    "What is a condo hotel and how is it different from a hotel?",
    "Can I put a condo hotel back together and sell it as one hotel?",
    "How is condo hotel rental income taxed?",
  ],
  answer:
    "Yes. State condominium law allows it, but three regimes attach at once. Securities Act Release 33-5347, of January 18, 1973, treats a rental pool or a required rental agent as an investment contract.[1] Fannie Mae's guide, updated November 4, 2026, will not buy a loan on a unit in a project run as a hotel.[2] FHA needs 51 percent owner occupancy.[3]",
  takeaways: [
    "What makes the units sell is what makes them securities: a rental pool, a required rental agent, or a pitch built on the manager's efforts.[1]",
    "The same features make the units unfinanceable. Fannie Mae's November 4, 2026 guide rules out mandatory rental pooling, profit sharing with a manager, and restrictions on the owner's occupancy.[2]",
    "FHA needs at least 51 percent of all units owner-occupied as a principal or secondary residence, which a hotel does not have.[3]",
    "Reassembly is the part owners underestimate. In Florida, ending the condominium takes 80 percent of the voting interests, and 5 percent voting no stops it for 24 months.[8] Treat it as one-way.",
    "No public source prices condo-hotel units, so this page prints what the retail route must beat instead.",
  ],
  sections: [
    {
      h2: "Can I split my hotel into condominium units and sell them one at a time?",
      lead:
        "Legally yes, under the condominium act of the state the hotel sits in, and the hotel keeps operating while you do it. Three bodies of law attach the moment you start selling.",
      body:
        "The mechanics are ordinary real estate work: a surveyed plat, a declaration of condominium recorded against the land, a unit boundary separating each guest room from the common elements, and an owners' association. What makes a hotel different is that the rooms have to keep earning. A hotel converter sells to someone who wants the room rented to strangers 300 nights a year, and that is what pulls in the securities laws, the mortgage agencies and the lodging regulator at once. Three of the four answers below cut against it.",
    },
    {
      h2: "Does selling hotel units make the sale a securities offering?",
      lead:
        "It does if the unit comes with a rental pool, a required rental agent, or a pitch built on what the manager will earn for the buyer. The Securities and Exchange Commission said so in 1973, in a release still codified.[1][4]",
      body:
        "Securities Act Release No. 33-5347, at 38 FR 1735 on January 18, 1973, opens with the distinction that matters: \"The offer of real estate as such, without any collateral arrangements with the seller or others, does not involve the offer of a security. When the real estate is offered in conjunction with certain services, a security, in the form of an investment contract, may be present.\" Resort condominiums are named as one of the more common cases.[1]\n\nThe release lists three arrangements by name. An offering is a securities offering if the units come with any rental arrangement and are sold **with emphasis on the economic benefits** the buyer will get from the managerial efforts of the promoter or a manager the promoter designates; if the buyer is offered **participation in a rental pool**; or if the buyer **must hold the unit available for rental for any part of the year, must use an exclusive rental agent, or is otherwise materially restricted** in occupying or renting the unit.[1] A rental pool pays each owner a share of the combined rents \"regardless of whether his individual unit was actually rented\", which is what lets a converter promise a yield.[1]\n\nThe reasoning runs through [SEC v. W. J. Howey Co.](https://www.law.cornell.edu/supremecourt/text/328/293), 328 U.S. 293 (1946), quoted in the release, where an investment contract reaches a common enterprise \"evidenced by formal certificates or by nominal interests in the physical assets employed in the enterprise\".[5] A recorded deed to room 412 is a nominal interest in the physical assets, not a defence.\n\nThere is one marked path out, and it is narrow. After buying, an owner may enter a **non-pooled** rental arrangement with an agent not designated or required as a condition of the purchase, affiliated or not, without making the unit a security.[1] The restriction is on what is promised at the sale, so a converter selling on a projected yield cannot use it. The answer \"necessarily depends on the facts and circumstances of each particular case\",[1] which makes it counsel's call on a specific offering document.",
    },
    {
      h2: "Can a buyer get a mortgage on a condo-hotel unit?",
      lead:
        "Not a conventional one. Fannie Mae's Selling Guide topic B4-2.1-03, updated November 4, 2026, makes a project managed or operated as a hotel ineligible.[2]",
      body:
        "Fannie Mae will not buy or securitize a loan secured by a unit in a project \"managed and operated as a hotel or motel, even though the units are individually owned\".[2] Four tests follow, any one of which is enough: the association is licensed as a hotel, motel, resort or hospitality entity; the documents restrict an owner's occupancy during any part of the year; they require owners to make the unit available for rental pooling; or they require owners to share rental profits with the association, the manager or a hotel rental company.[2]\n\nRead those four against the three securities triggers above: they are the same features. What makes the unit a security is what makes it unfinanceable.\n\nThe guide reaches further. A project is also ineligible if it is primarily transient; if it offers hotel-type services such as registration, daily rentals, daily cleaning or central key systems; if it is a hotel conversion, unless a gut rehabilitation left units without the characteristics of transient housing; if it is subject to **voluntary** rental pooling or revenue sharing with the association or manager; if its name contains hotel or resort other than historically; or if it carries a hotel rating from a booking site.[2]\n\nFHA is no better. 24 CFR 234.26(e)(3) makes a project acceptable only if at least 51 percent of all units, including those with no FHA loan, are occupied by owners as a principal or secondary residence, and (e)(2) blocks an application that would push FHA-insured units below 80 percent on the same test.[3] An SBA loan does not fill the gap: 13 CFR 120.110(c) makes passive businesses owned by landlords that do not actively use or occupy the financed asset ineligible, outside the Eligible Passive Company structure in 120.111.[6] A buyer of one room, run for them by someone else, is the passive case, so what is left is cash and private debt: a far smaller pool than a hotel at [/hotel-financing](/hotel-financing) rates reaches.",
    },
    {
      h2: "What does the condominium structure do to the hotel's licence?",
      lead:
        "It can change the licence class. Florida licenses transiently rented condominium units as vacation rentals, not as a hotel.[7]",
      body:
        "Under the 2026 Florida Statutes, section 509.242(1)(a) defines a hotel as a public lodging establishment with sleeping accommodation for 25 or more guests that is recognised as a hotel in its community or by the industry. Section 509.242(1)(c) defines a vacation rental as \"any unit or group of units in a condominium or cooperative\" that is also a transient public lodging establishment and is not a timeshare project.[7]\n\nSubsection (2) is the trap. If 25 percent or more of the units fall within a different classification, the establishment must obtain a separate licence for that class, and subsection (3) limits it to advertising the classification it holds.[7] A 200-room hotel that sells 50 units and keeps renting them transiently has crossed that line exactly.\n\nEvery state writes these statutes differently, so check both. The general point travels: splitting the title changes what the regulator thinks the building is, and the franchise agreement, the liquor licence at [/sell-a-hotel/liquor-license-transfer](/sell-a-hotel/liquor-license-transfer) and the occupancy tax registration are all written against the old answer.",
    },
    {
      h2: "Can I put the hotel back together if the plan stalls?",
      lead:
        "Rarely, and never cheaply. Ending a Florida condominium by the optional route needs 80 percent of the total voting interests, and 5 percent voting against stops it for two years.[8]",
      body:
        "Section 718.117(3) allows the condominium form of ownership to be terminated for all or part of the property under a plan approved by the state division, but a residential association must first get at least 80 percent of the total voting interests to approve it. If 5 percent or more reject the plan by negative vote or written objection, it may not proceed, and under 718.117(3)(a)2 no further plan may be considered for 24 months.[8]\n\nSection 718.117(2)(a) opens a second route on the lower vote needed to amend the declaration, where the cost of the repairs needed to restore the improvements or bring them into compliance with law exceeds the combined fair market value of the units afterward.[8] That door opens only for a building already in trouble.\n\nThe consequence is in the worked example. A hotel is worth what it is worth as one going concern, because that is what a hotel buyer can underwrite and finance. Once enough units sit with third parties, that bid is gone and cannot be bought back at a price any buyer would pay, because the holdouts know what their consent is worth.",
    },
    {
      h2: "How is a unit buyer taxed on the rental income?",
      lead:
        "Under 26 U.S.C. 280A, and the nights the owner stays decide it. Personal use above the greater of 14 days or 10 percent of the fair-rental days makes the unit a residence and caps the deductions.[9]",
      body:
        "Section 280A(d)(1) treats a unit as used as a residence for the year if personal use exceeds the greater of 14 days or 10 percent of the days it is rented at a fair rental.[9] Once that line is crossed, 280A(c)(5) limits the deductions allocable to the rental use to the gross income from that use, less the deductions allowed whether or not the unit was rented, and carries the rest forward.[9] A unit running at a loss cannot shelter the owner's other income.\n\nA de minimis rule runs the other way. Under 280A(g), if the unit is used as a residence and is actually rented for fewer than 15 days in the year, no rental deductions are allowed and the rental income is left out of gross income altogether.[9] Irrelevant to a unit rented year round, and very relevant to the owner who imagined using it most of the time.\n\nThe gap between what a unit buyer is sold and what their accountant says in April is one reason resale demand is thin. How a whole hotel is depreciated instead: [/buy-a-hotel/depreciation-and-cost-segregation](/buy-a-hotel/depreciation-and-cost-segregation).",
    },
    {
      h2: "What price does the retail route have to beat?",
      lead:
        "The whole-asset price, grossed up for the cost of selling 200 units instead of one building: about $69,100,000 of gross unit sales to match a $65,000,000 single sale.",
      body:
        "One figure this page will not print is what a condo-hotel unit sells for, because no public source publishes it. Prices are set deal by deal and the publications that track them hold the data behind a subscription, so get that number in writing from a residential brokerage in the submarket.\n\nWhat can be computed is the bar: going-concern value at a sourced cap rate, grossed up for the cost of a retail sell-out. Then weigh what the arithmetic leaves out, all of it pointing one way. The sell-out takes years rather than one closing, each buyer arrives without agency financing, and [going-concern value](/glossary/going-concern-value) stops being realisable once the single-asset bid disappears. Against that, retail can clear more gross where residential prices per square foot sit well above hotel value per key, which is why the structure exists.",
    },
  ],
  table: {
    caption:
      "The same four features, read by the SEC and by Fannie Mae (sources read November 12, 2026)",
    columns: [
      "Feature of the offering",
      "Securities Act Release 33-5347 (1973)",
      "Fannie Mae Selling Guide B4-2.1-03 (November 4, 2026)",
    ],
    rows: [
      [
        "Units come with a rental pool",
        "An offering of investment contracts, which must be registered unless exempt[1]",
        "Mandatory rental pooling makes the project ineligible[2]",
      ],
      [
        "Owner must use an exclusive rental agent, or hold the unit available for rent",
        "An offering of investment contracts[1]",
        "A document that restricts the owner's ability to occupy the unit makes the project ineligible[2]",
      ],
      [
        "Owner shares rental profits with the association or manager",
        "Participation in a profit-sharing arrangement[1]",
        "Required profit sharing with the association, management company or hotel rental company makes the project ineligible[2]",
      ],
      [
        "Units sold on the economic benefits of the manager's efforts",
        "An offering of investment contracts[1]",
        "Marketing the project as a hotel, resort or investment opportunity makes it ineligible[2]",
      ],
      [
        "Voluntary, non-pooled rental through an agent the buyer picks after closing",
        "Not a security, if the agent was not designated or required as a condition of purchase[1]",
        "Still ineligible where the arrangement involves the association or management company, or carries blackout dates or occupancy limits[2]",
      ],
      [
        "Building was a hotel before the conversion",
        "Not addressed; the release turns on the offering, not the building[1]",
        "Ineligible unless the conversion was a gut rehabilitation and the units no longer have the characteristics of transient housing[2]",
      ],
    ],
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence:
      "The Matthews Hotel Index for Q1 2026, published April 15, 2026, puts resort and lifestyle cap rates in Orlando at 6.50% to 7.50%. On that band a resort-area hotel earning $4,225,000 of net operating income is worth $65,000,000 whole, or $325,000 a key, and Matthews Hotel Markets publishes the band so an owner can price a retail unit plan against it.",
  },
  workedExample: {
    label:
      "Hypothetical: a 200-key resort-area hotel near Orlando, whole sale against a unit sell-out",
    body:
      "Hypothetical, for arithmetic only. Not a valuation. The cap-rate band and the two Florida voting thresholds are sourced; the key count, the net operating income, the selling cost and the day counts are assumptions.\n\n**The whole-asset number.** Assume net operating income of $4,225,000. At 6.50%, the low end of the Matthews Hotel Index Q1 2026 resort and lifestyle band for Orlando, the hotel is worth $4,225,000 / 0.065 = **$65,000,000**, which on 200 keys is **$325,000 a key**.[10] At the 7.50% high end it is $4,225,000 / 0.075 = $56,333,333, or $281,667 a key: the 100 basis points across the band is worth $8,666,667 here.\n\n**What the units have to gross.** Assume retail selling costs of 6 percent of each unit's price, all in. To net the same $65,000,000, the 200 units must gross $65,000,000 / 0.94 = **$69,148,936**, or **$345,745 a unit**. The selling cost on that gross is $4,148,936, so retail has to find 6.38 percent more gross to arrive at the same place, before any conversion cost, carry over a multi-year sell-out, or legal cost on the offering.\n\n**The 5 percent that closes the exit.** Assume the sponsor keeps 120 of the 200 units and sells 80. Ending the condominium by the optional route in Florida needs 80 percent of 200 voting interests, which is **160 units**.[8] The sponsor's 120 leaves it needing 40 of the 80 units in third-party hands, and selling one more than 40 leaves it with 159, short of the vote. Separately, 5 percent of 200 is **10 units**: ten owners voting no or objecting in writing stop the plan outright, and a rejected plan waits 24 months.[8] Ten units out of 200 is the whole of the route back to a single-asset sale.\n\n**What the unit buyer finds in April.** Assume a unit rented at a fair rental for 180 days, with 20 nights of the owner's own use. Ten percent of 180 is 18, the greater of 14 and 18 is 18, and 20 exceeds 18, so section 280A(d)(1) makes the unit a residence and 280A(c)(5) caps the rental deductions at the gross rental income.[9] Four nights fewer and the test is not met.",
  },
  faq: [
    {
      q: "Is selling condo-hotel units a securities offering?",
      a: "It is if the unit comes with a rental pool, a required rental agent, a restriction on the owner's occupancy, or a pitch built on the manager's efforts. Release 33-5347 names all four.[1] Ask securities counsel about your own offering document.",
    },
    {
      q: "Why will no bank finance a condotel unit?",
      a: "Fannie Mae's guide, updated November 4, 2026, makes a project run as a hotel ineligible, so a lender cannot sell the loan on.[2] FHA needs 51 percent owner occupancy.[3] That leaves cash and portfolio debt.",
    },
    {
      q: "Can an SBA loan buy a condo-hotel unit?",
      a: "Not as a passive holding. 13 CFR 120.110(c) makes passive businesses owned by landlords that do not actively use or occupy the financed asset ineligible, outside the Eligible Passive Company structure in 120.111.[6]",
    },
    {
      q: "Can I undo a condo-hotel and sell the building as one hotel?",
      a: "In Florida the optional route needs 80 percent of the total voting interests, and 5 percent voting no or objecting in writing stops it for 24 months.[8] Assume the decision is one-way unless you keep the units.",
    },
    {
      q: "How is condo-hotel rental income taxed?",
      a: "Under 26 U.S.C. 280A. Personal use above the greater of 14 days or 10 percent of the fair-rental days makes the unit a residence, which caps the deductions at the gross rental income.[9] Ask your own accountant on your facts.",
    },
    {
      q: "What does a condo-hotel unit sell for?",
      a: "No public source publishes it, so this page prints no figure. Get the retail price per unit in writing from a residential brokerage, then compare it against the whole-asset value per key.",
    },
    {
      q: "Does Matthews Hotel Markets do condominium conversions?",
      a: "No. We sell hotels whole, from $2 million, and arrange hotel financing from $5 million. We do not convert hotels to condominiums, run securities offerings or sell residential units.",
    },
  ],
  sources: [
    {
      n: 1,
      label:
        "Securities Act Release No. 33-5347, Offers and Sales of Condominiums or Units in a Real Estate Development, 38 FR 1735 (January 18, 1973), at pages 1735 to 1736",
      url: "https://www.govinfo.gov/content/pkg/FR-1973-01-18/pdf/FR-1973-01-18.pdf",
      publisher: "U.S. Securities and Exchange Commission, via govinfo",
      accessed: "2026-11-12",
    },
    {
      n: 2,
      label:
        "Selling Guide B4-2.1-03, Ineligible Projects (11/04/2026), list of ineligible project characteristics, Projects that Operate as Hotels or Motels, and Projects Subject to Split Ownership Arrangements",
      url: "https://selling-guide.fanniemae.com/sel/b4-2.1-03/ineligible-projects",
      publisher: "Fannie Mae",
      accessed: "2026-11-12",
    },
    {
      n: 3,
      label: "24 CFR 234.26, Project requirements, paragraphs (e)(2) and (e)(3)",
      url: "https://www.law.cornell.edu/cfr/text/24/234.26",
      publisher: "U.S. Department of Housing and Urban Development, via Cornell LII",
      accessed: "2026-11-12",
    },
    {
      n: 4,
      label:
        "17 CFR part 231, Interpretative Releases Relating to the Securities Act of 1933, listing Release 5347 of January 18, 1973 at 38 FR 1735",
      url: "https://www.ecfr.gov/api/versioner/v1/full/2026-10-01/title-17.xml?part=231",
      publisher: "U.S. Securities and Exchange Commission, via the eCFR versioner API",
      accessed: "2026-11-12",
    },
    {
      n: 5,
      label: "SEC v. W. J. Howey Co., 328 U.S. 293 (1946), at page 298",
      url: "https://www.law.cornell.edu/supremecourt/text/328/293",
      publisher: "Supreme Court of the United States, via Cornell LII",
      accessed: "2026-11-12",
    },
    {
      n: 6,
      label:
        "13 CFR 120.110, What businesses are ineligible for SBA business loans, paragraph (c), and 13 CFR 120.111 on Eligible Passive Companies",
      url: "https://www.law.cornell.edu/cfr/text/13/120.110",
      publisher: "U.S. Small Business Administration, via Cornell LII",
      accessed: "2026-11-12",
    },
    {
      n: 7,
      label:
        "2026 Florida Statutes section 509.242, Public lodging establishments; classifications, subsections (1)(a), (1)(c), (2) and (3)",
      url: "https://leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0509/Sections/0509.242.html",
      publisher: "The Florida Legislature",
      accessed: "2026-11-12",
    },
    {
      n: 8,
      label:
        "2026 Florida Statutes section 718.117, Termination of condominium, subsections (2)(a) and (3)",
      url: "https://leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0718/Sections/0718.117.html",
      publisher: "The Florida Legislature",
      accessed: "2026-11-12",
    },
    {
      n: 9,
      label:
        "26 U.S.C. 280A, Disallowance of certain expenses in connection with business use of home, rental of vacation homes, etc., subsections (c)(5), (d)(1) and (g)",
      url: "https://www.law.cornell.edu/uscode/text/26/280A",
      publisher: "Office of the Law Revision Counsel, via Cornell LII",
      accessed: "2026-11-12",
    },
    {
      n: 10,
      label: "Matthews Hotel Index, Q1 2026, Orlando resort and lifestyle cap-rate band",
      url: "/research/mhi/q1-2026",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-11-12",
    },
  ],
  related: {
    hub: "/sell-a-hotel",
    siblings: [
      "/sell-a-hotel/asset-sale-vs-entity-sale",
      "/sell-a-hotel/how-to-sell-a-hotel",
      "/sell-a-hotel/liquor-license-transfer",
      "/sell-a-hotel/selling-a-hotel-on-a-ground-lease",
      "/sell-a-hotel/taxes-when-selling-a-hotel",
    ],
    glossary: [
      "/glossary/going-concern-value",
      "/glossary/per-key",
      "/glossary/cap-rate",
      "/glossary/noi",
    ],
    data: ["/research/mhi/q1-2026"],
  },
  cta: {
    label: "Get a free opinion of value on the hotel as one asset",
    href: "/contact",
  },
  brandSentence:
    "Matthews Hotel Markets sells hotels whole, from $2 million, and does not convert hotels to condominiums or sell residential units, so the one number we can put in an owner's hands is what the hotel is worth as a single going concern.",
};

export default page;
