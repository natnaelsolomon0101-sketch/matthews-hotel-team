/**
 * Do I have to bring my hotel up to ADA standards when I renovate it?
 * Answer page: /hotel-industry/ada-requirements
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-09-30): 42 U.S.C. 12181 and 12183 on Cornell LII; 28 CFR
 * 36.302, 36.304, 36.402, 36.403 and 36.406 on Cornell LII, cross-read
 * against the Department of Justice's own text of the title III regulation at
 * ada.gov; sections 224.1.1 through 224.5 of the 2010 ADA Standards for
 * Accessible Design at ada.gov, from which Table 224.2 and Table 224.4 are
 * transcribed; the current civil penalty table at 28 CFR 85.5 (eCFR, title 28
 * issue of September 28, 2026); 26 U.S.C. 44 and 190 on Cornell LII; and
 * California Civil Code 52 and 55.56 on leginfo.
 *
 * The worked example was recomputed line by line with
 * scripts/check-ada-math.mjs before saving, including both scoping tables.
 * Do not hand-edit a number without re-reading its source and bumping
 * `lastUpdated`.
 *
 * Deliberately absent: any per-key or per-room cost of an accessibility
 * retrofit. No public source publishes one. The page prints the statutory
 * cost ceiling (20 percent of the alteration) and the two published tax
 * offsets instead, and says plainly that the retrofit cost itself is not
 * published anywhere.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "ada-requirements",
  cluster: "hotel-industry",
  isHub: false,
  title: "Hotel ADA Requirements and Renovations",
  h1: "Do I have to bring my hotel up to ADA standards when I renovate it?",
  description:
    "Which hotel work counts as an ADA alteration, how many accessible rooms the 2010 Standards require, and the 20 percent cap on path-of-travel spending.",
  lastUpdated: "2026-10-01",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Do I have to bring my hotel up to ADA standards when I renovate it?",
    "How many ADA accessible rooms does my hotel need?",
    "Does a PIP trigger ADA upgrades?",
    "What is the 20 percent path of travel rule?",
    "Do older hotels have to comply with the 2010 ADA Standards?",
    "What are the ADA rules for hotel reservations?",
    "What ADA risk am I buying with a hotel?"
  ],
  answer:
    "For the parts you touch, yes. Any alteration begun after January 26, 1992 must leave the altered portions accessible to the maximum extent feasible, and altering an area that holds a primary function also obliges you to fix the path of travel to it, up to 20 percent of that alteration's cost.[1][2] Everything you do not touch runs on a separate readily achievable duty.[3]",
  takeaways: [
    "An inn, hotel or motel is a public accommodation by name in the statute. The only carve-out is a building with five or fewer rooms for rent that the proprietor lives in.[4]",
    "Not all construction is an alteration. Reroofing, painting, wallpapering, asbestos removal and mechanical changes are excluded unless they affect usability, so a soft-goods refresh usually sits outside the rule and moving a bathroom wall sits inside it.[1]",
    "Room counts scale with the work, not the hotel. Where guest rooms are altered, the scoping tables apply to the rooms being altered until the total reaches the new-construction minimum.[5]",
    "Elements you have not altered since March 15, 2012 that already met the 1991 Standards need not be rebuilt to the 2010 Standards. Pools, spas, saunas and exercise equipment are named exclusions from that safe harbor.[3]",
    "One duty is not construction at all. The reservations rule makes you describe accessible features, hold those rooms back, block a booked room out of the system and guarantee it, and the Department of Justice says it draws many complaints a year.[6]"
  ],
  sections: [
    {
      h2: "Does the ADA actually apply to my hotel?",
      lead: "Almost certainly, because title III names an inn, hotel or motel first among the private entities it calls public accommodations.",
      body: "42 U.S.C. 12181(7)(A) names \"an inn, hotel, motel, or other place of lodging\" as a public accommodation where the operations affect commerce, and the only exception is a building with no more than five rooms for rent that the proprietor occupies as a residence.[4]\n\nWhat coverage means turns on the age of the building and on what you are doing to it, because three duties run at once. New construction first occupied more than 30 months after July 26, 1990 had to be built accessible.[2] Alterations have to be made accessible as they are made.[1] And in an existing facility, barriers have to be removed where removal is readily achievable, which 28 CFR 36.304(a) defines as easily accomplishable and able to be carried out without much difficulty or expense.[3] The third duty is the one owners misread: it is continuing, and it does not lapse because the hotel was legal when it opened."
    },
    {
      h2: "Which renovations trigger ADA upgrades, and which do not?",
      lead: "Anything that affects or could affect the usability of the building, a test wider than a building permit and narrower than any spend.",
      body: "28 CFR 36.402(b) defines an alteration as a change that affects or could affect usability, and lists remodeling, renovation, rehabilitation, reconstruction, historic restoration, changes in structural parts, and changes in the plan configuration of walls and full-height partitions.[1] Then it excludes a set: normal maintenance, reroofing, painting or wallpapering, asbestos removal, and changes to mechanical and electrical systems are not alterations unless they affect usability.[1]\n\nRead against a brand's [property improvement plan](/glossary/pip), that line falls in a useful place. A soft-goods cycle replacing carpet, case goods, bedding, paint and wallcovering moves no wall and changes nothing a guest reaches, so it usually sits outside 36.402. A guest-bath reconfiguration, a lobby rebuild or a converted breakfast area sits inside it, and each altered element then has to comply.[1] So renovating does not oblige you to bring the whole hotel up to the 2010 Standards, only the part you touched, plus the path of travel below. Where the work is financed, that scope belongs in the loan budget from the start: see [PIP and renovation financing](/hotel-financing/pip-and-renovation-loans)."
    },
    {
      h2: "How many accessible rooms does my hotel need?",
      lead: "Table 224.2 of the 2010 Standards sets the mobility-feature count and Table 224.4 the communication-feature count, both stepped by the number of guest rooms.",
      body: "Section 224.2 requires guest rooms with mobility features complying with section 806.2 in the quantities in Table 224.2, and section 224.4 requires rooms with communication features complying with 806.3 in the quantities in Table 224.4.[5] Both are reproduced below. The mobility table splits its count between rooms with and without roll-in showers, and the first required roll-in shower appears in the 51-to-75 band.\n\nIn an alteration the count is not taken off the whole hotel. Section 224.1.1 applies section 224 only to the guest rooms being altered or added, until the number reaches the minimum new construction would require, so phase a renovation and the obligation phases with it.[5] Section 224.5 governs where the rooms go: dispersed among the classes of room, with comparable choices of type, bed count and amenities, at least one mobility room also carrying communication features, and no more than 10 percent of the required mobility rooms counting toward the communication minimum.[5] Separately, 28 CFR 36.406(c)(1) lets buildings on a common site under one permit application be combined for scoping where each has 50 or fewer rooms, and counted separately above 50.[7]"
    },
    {
      h2: "What is the 20 percent path-of-travel rule?",
      lead: "Alter an area holding a primary function and you must also make the route to it accessible, but only until that work passes 20 percent of the alteration itself.",
      body: "28 CFR 36.403(a)(1) attaches the duty to an alteration affecting the usability of or access to an area containing a primary function, and (f)(1) fixes the ceiling: the work is disproportionate once its cost exceeds 20 percent of the cost of the alteration to the primary function area.[2] The path of travel includes the route in, plus the restrooms, telephones and drinking fountains serving the altered area. A primary function is a major activity for which the facility is intended, and the definition expressly excludes mechanical and boiler rooms, storage, employee lounges, janitorial closets, entrances, corridors and restrooms.[2]\n\nWhen the cost is disproportionate you do not walk away. Under 36.403(g) you spend the 20 percent in a published priority order: accessible entrance, then the route to the altered area, then at least one accessible restroom for each sex or a single unisex restroom, then telephones, drinking fountains and parking.[2] Nor can the cap be gamed by slicing the job up: under 36.403(h) a series of smaller alterations that could have been one undertaking is treated as one, and alterations on the same path of travel in the preceding three years are aggregated when the proportion is recomputed.[2]"
    },
    {
      h2: "What about the parts of the hotel I am not touching?",
      lead: "They carry the readily achievable barrier-removal duty, which is lower than the alterations standard but never switched off, and one safe harbor limits how far back it reaches.",
      body: "28 CFR 36.304 gives 21 examples of readily achievable barrier removal, most of them cheap: ramps, curb cuts, flashing alarm lights, offset hinges, grab bars in toilet stalls, insulated lavatory pipes, removing high-pile low-density carpet. It also sets priorities: access from the sidewalk, parking or transit first, then the areas where goods and services are offered, then restrooms, then everything else.[3]\n\nThe safe harbor is the part a buyer needs. Under 36.304(d)(2)(i), elements not altered since March 15, 2012 that comply with the corresponding specifications in the 1991 Standards need not be modified to meet the 2010 Standards, so a 1998-vintage hotel built correctly to the 1991 Standards is not automatically non-compliant because a dimension later changed.[3] The exclusions matter as much as the rule: the safe harbor does not reach elements the 1991 Standards never specified, and the regulation names swimming pools, wading pools and spas, saunas and steam rooms, exercise machines and play areas among them.[3] On a hotel that is the pool, the spa and the fitness room, which have to be brought toward the 2010 Standards to the extent readily achievable whether or not you renovate."
    },
    {
      h2: "What does the ADA require of my reservations system?",
      lead: "Five specific things, none of them construction, and the Department of Justice says failed reservations draw many complaints a year.",
      body: "28 CFR 36.302(e)(1) applies to reservations made by any means, including by telephone, in person or through a third party, and requires all five of these: policies that let people with disabilities reserve accessible rooms in the same hours and manner as everyone else; accessible features described in enough detail for a guest to judge independently whether the room meets their needs; accessible rooms held back until all other rooms of that type are gone; on request, a specific accessible room reserved and blocked out of every reservation system; and a guarantee that the room reserved is held for that guest.[6]\n\nThe Department of Justice said in the preamble to the 2010 rule that it receives many complaints each year from people who reserved an accessible room and found on arrival that it was unavailable or not accessible.[6] None of this depends on the building: a hotel that satisfies every scoping table and then lets a channel manager resell its one roll-in-shower room is in the exact failure the rule addresses. The hold-back, block-out and guarantee duties do not apply to units the operator does not own or substantially control, which is the condominium-hotel case.[6]"
    },
    {
      h2: "What is the exposure, and what should a buyer check before closing?",
      lead: "Private plaintiffs get injunctions and fees, the Attorney General can seek six-figure penalties, and some states add per-visit damages.",
      body: "A private title III suit is for injunctive relief and attorney's fees, not damages. Civil penalties are available only in an action by the Attorney General, and the figures sit in the penalty table at 28 CFR 85.5: for penalties assessed after July 3, 2025, a maximum of $118,225 for a first violation and $236,451 for a subsequent one.[8] State law is where money is more often at stake. California Civil Code 52(a) sets statutory damages at no less than $4,000 per offense plus fees, and Civil Code 55.56 assesses them per occasion on which access was denied rather than per violation found, dropping to $1,000 per offense for a small business that corrects everything within 60 days and holds a CASp inspection report.[9][10]\n\nThe federal offsets are small and fixed. 26 U.S.C. 44 gives an eligible small business a credit of 50 percent of eligible access expenditures above $250 and up to $10,250, a maximum of $5,000, where gross receipts were $1,000,000 or less in the preceding year or there were 30 or fewer full-time employees.[11] 26 U.S.C. 190 caps the barrier-removal deduction at $15,000 a year.[12]\n\nFor a buyer the questions are documentary, and they belong in the [due diligence list](/buy-a-hotel/due-diligence-checklist): when was each element last altered, which decides whether the safe harbor applies; is there a CASp report, and what is open on it; what does the brand require at change of ownership; and who pays for the open items, which is a price conversation rather than a legal one. No public source publishes a per-key retrofit cost, so the only honest input is a priced scope on your building. The same is true of the other compliance scope a renovation can trigger, the energy and emissions one: [Does my hotel have to report energy use or cut its carbon emissions?](/hotel-industry/energy-benchmarking-and-emissions-limits)."
    }
  ],
  table: {
    caption:
      "Accessible guest rooms required by the 2010 ADA Standards for Accessible Design, from Table 224.2 and Table 224.4",
    columns: [
      "Total guest rooms",
      "Mobility rooms without roll-in showers",
      "Mobility rooms with roll-in showers",
      "Total mobility-feature rooms",
      "Communication-feature rooms"
    ],
    rows: [
      ["1 to 25", "1", "0", "1", "2 (from 2 rooms up)"],
      ["26 to 50", "2", "0", "2", "4"],
      ["51 to 75", "3", "1", "4", "7"],
      ["76 to 100", "4", "1", "5", "9"],
      ["101 to 150", "5", "2", "7", "12"],
      ["151 to 200", "6", "2", "8", "14"],
      ["201 to 300", "7", "3", "10", "17"],
      ["301 to 400", "8", "4", "12", "20"],
      ["401 to 500", "9", "4", "13", "22"],
      ["501 to 1,000", "2 percent of total", "1 percent of total", "3 percent of total", "5 percent of total"],
      [
        "1,001 and over",
        "20, plus 1 per 100 or fraction over 1,000",
        "10, plus 1 per 100 or fraction over 1,000",
        "30, plus 2 per 100 or fraction over 1,000",
        "50, plus 3 per 100 over 1,000"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet prices the money that pays for this work. As of September 30, 2026 it shows the 10-year Treasury at 5.29 percent and Prime at 7.00 percent, and marks the spread and maximum loan-to-value on the bridge and construction rows as not yet published, because lenders do not publish them.[13] An accessibility scope is renovation capital, competing with the rest of a PIP budget at those rates.",
  },
  workedExample: {
    label:
      "Hypothetical: a 96-key select-service hotel renovated in two phases, 14 months apart",
    body:
      "This hotel does not exist and the construction costs are assumptions. The scoping counts and the 20 percent arithmetic are not: they follow from the tables and from 28 CFR 36.403, and every figure was recomputed before this page was saved.\n\nPhase one renovates 40 of the 96 guest rooms, moving the bathroom walls, and rebuilds the lobby and breakfast area. Primary-function alteration cost: $1,200,000. Under 224.1.1 the scoping applies to the 40 rooms altered, so Table 224.2's 26-to-50 band governs: 2 mobility rooms, neither needing a roll-in shower, and the same band of Table 224.4 calls for 4 communication rooms.[5]\n\nThe path-of-travel cap is 20 percent of $1,200,000, which is $240,000.[2] Assume the accessible-route scope prices at $305,000: regrading the parking aisle, widening the entry vestibule, rebuilding the restrooms serving the breakfast area. That exceeds the cap, so it is disproportionate, and the owner spends $240,000 in the order 36.403(g)(2) sets.[2] The remaining $65,000 goes unfunded, lawfully.\n\nPhase two, 14 months later, renovates the other 56 rooms at a primary-function cost of $900,000. Cumulative rooms altered reach 96, so Table 224.2's 76-to-100 band governs and the hotel owes 5 mobility rooms, one with a roll-in shower; phase one delivered 2, so phase two delivers 3 more including that shower, the first the table requires at all. Communication rooms go from 4 to 9, so 5 more.[5] Dispersion check: 10 percent of 5 mobility rooms is half a room, so no whole mobility room counts toward the 9, while at least one must still carry communication features itself.[5]\n\nThe cap moves too. Phase two falls inside three years of phase one, so 36.403(h)(2)(i) aggregates: $1,200,000 + $900,000 = $2,100,000, and 20 percent of that is $420,000.[2] The owner has spent $240,000, leaving $180,000, so the $65,000 deferred from phase one now fits. Phasing deferred the obligation rather than shrinking it.\n\nSet the two federal offsets against that. On a $305,000 scope the section 44 credit is $5,000 at most and the section 190 deduction $15,000, so $20,000, or 6.6 percent of the spend.[11][12] Useful, not a funding plan."
  },
  faq: [
    {
      q: "Does a PIP trigger ADA upgrades?",
      a: "Only the parts of it that are alterations. 28 CFR 36.402(b) excludes painting, wallpapering and reroofing unless they affect usability, so a soft-goods refresh usually sits outside the rule while a bathroom reconfiguration sits inside it.[1]"
    },
    {
      q: "How many accessible rooms does a 100-room hotel need?",
      a: "Five with mobility features, one of which needs a roll-in shower, and nine with communication features. Both counts come from the 76-to-100 band of Table 224.2 and Table 224.4 of the 2010 Standards.[5]"
    },
    {
      q: "My hotel was built in 1998 and met the rules then. Am I compliant?",
      a: "For elements you have not altered since March 15, 2012 that met the 1991 Standards, yes, under the safe harbor in 28 CFR 36.304(d)(2)(i).[3] Pools, spas, saunas and exercise equipment are excluded from it."
    },
    {
      q: "Can a guest sue my hotel for money over an ADA problem?",
      a: "Under federal title III they get injunctive relief and attorney's fees, not damages. State law can differ: California Civil Code 52(a) sets a $4,000 minimum per offense, assessed per occasion under 55.56.[9][10]"
    },
    {
      q: "How much does a hotel ADA retrofit cost per room?",
      a: "No public source publishes a figure, and anyone quoting one without surveying your building is guessing. What is published is the ceiling: path-of-travel work stops at 20 percent of the alteration cost.[2]"
    },
    {
      q: "Can Matthews Hotel Markets survey my hotel for ADA compliance?",
      a: "No. We sell hotels and arrange the debt behind them. An accessibility survey is work for a licensed architect or a CASp inspector, and the legal call is your counsel's."
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "28 CFR 36.402: alterations after January 26, 1992, the definition of an alteration, and the maintenance, reroofing, painting, wallpapering, asbestos and mechanical or electrical exclusions",
      url: "https://www.law.cornell.edu/cfr/text/28/36.402",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-30"
    },
    {
      n: 2,
      label:
        "28 CFR 36.403: alterations and the path of travel, the definition of a primary function area, the 20 percent disproportionality test in (f)(1), the priority order in (g)(2), and the three-year aggregation in (h)",
      url: "https://www.law.cornell.edu/cfr/text/28/36.403",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-30"
    },
    {
      n: 3,
      label:
        "28 CFR 36.304: removal of barriers where readily achievable, the 21 examples and the priority order, the element-by-element safe harbor in (d)(2)(i), and the elements excluded from it including swimming pools, spas, saunas and exercise equipment",
      url: "https://www.law.cornell.edu/cfr/text/28/36.304",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-30"
    },
    {
      n: 4,
      label:
        "42 U.S.C. 12181(7)(A): an inn, hotel, motel or other place of lodging is a public accommodation, with the exception for a building of not more than five rooms for rent occupied by the proprietor as a residence",
      url: "https://www.law.cornell.edu/uscode/text/42/12181",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-30"
    },
    {
      n: 5,
      label:
        "2010 ADA Standards for Accessible Design, sections 224.1.1 (alterations), 224.2 and Table 224.2 (guest rooms with mobility features), 224.3 (beds), 224.4 and Table 224.4 (guest rooms with communication features) and 224.5 (dispersion)",
      url: "https://www.ada.gov/law-and-regs/design-standards/2010-stds/",
      publisher: "U.S. Department of Justice",
      accessed: "2026-09-30"
    },
    {
      n: 6,
      label:
        "28 CFR 36.302(e): reservations made by places of lodging, the five duties in (e)(1) and the exception in (e)(2); the Department of Justice's discussion of failed reservations in its title III regulation",
      url: "https://www.law.cornell.edu/cfr/text/28/36.302",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-30"
    },
    {
      n: 7,
      label:
        "28 CFR 36.406: standards for new construction and alterations, the compliance dates, and the places-of-lodging rule in (c)(1) on combining buildings of 50 or fewer guest rooms on a common site",
      url: "https://www.law.cornell.edu/cfr/text/28/36.406",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-30"
    },
    {
      n: 8,
      label:
        "28 CFR 85.5, table 1: Department of Justice civil monetary penalties for a violation of 42 U.S.C. 12188(b)(2)(C), as adjusted for penalties assessed after July 3, 2025 (title 28 issue of September 28, 2026)",
      url: "https://www.ecfr.gov/current/title-28/section-85.5",
      publisher: "Electronic Code of Federal Regulations, National Archives",
      accessed: "2026-09-30"
    },
    {
      n: 9,
      label:
        "California Civil Code 52(a): liability for each offense up to three times actual damages but in no case less than $4,000, plus attorney's fees",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=52.",
      publisher: "California Legislative Information",
      accessed: "2026-09-30"
    },
    {
      n: 10,
      label:
        "California Civil Code 55.56: statutory damages in a construction-related accessibility claim assessed per occasion of denied access under (f), and the reduction to a minimum of $1,000 per offense under (g)(1) for a defendant that corrects within 60 days and holds a CASp determination",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=55.56.",
      publisher: "California Legislative Information",
      accessed: "2026-09-30"
    },
    {
      n: 11,
      label:
        "26 U.S.C. 44: the disabled access credit, 50 percent of eligible access expenditures above $250 and not above $10,250, and the eligible small business test of $1,000,000 of gross receipts or 30 full-time employees",
      url: "https://www.law.cornell.edu/uscode/text/26/44",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-30"
    },
    {
      n: 12,
      label:
        "26 U.S.C. 190: election to treat qualified architectural and transportation barrier removal expenses as a deduction, limited by subsection (c) to $15,000 for any taxable year",
      url: "https://www.law.cornell.edu/uscode/text/26/190",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-09-30"
    },
    {
      n: 13,
      label: "Hotel financing rate sheet, September 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-09-30"
    }
  ],
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/hotel-operating-costs",
      "/hotel-industry/cost-to-build-a-hotel",
      "/hotel-industry/hotel-management-agreements",
      "/hotel-industry/owner-franchisor-management-company"
    ],
    glossary: ["/glossary/pip", "/glossary/ffe-reserve", "/glossary/franchise-agreement"],
    data: ["/rates"]
  },
  cta: {
    label: "Talk to the hospitality team about a renovation budget or a sale",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets arranges the renovation and PIP debt that pays for work like this, and sells hotels where an open accessibility scope is sitting in the buyer's diligence file. We do not survey buildings or give legal advice."
};
