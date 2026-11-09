/**
 * When does a hotel guest become a tenant?
 * Answer page: /hotel-industry/when-a-guest-becomes-a-tenant
 *
 * A coverage gap before this file. "Innkeeper", "eviction", "guest becomes a
 * tenant", "lockout" as a guest-removal mechanic and "transient occupancy" as
 * a legal test each appeared in zero or one file under src/lib/data/, and
 * "tenancy" in one, inside a 1031 page about Delaware statutory trusts. The
 * site carried two pages on extended-stay hotels and said nothing about the
 * day count that decides whether the people in those rooms can be asked to
 * leave, whether their rent is taxable, or whether the hotel can still borrow
 * from an SBA lender.
 *
 * Every figure and test here was read out of a primary source in the run that
 * wrote this file (2026-11-09):
 *
 *   - New York Real Property Actions and Proceedings Law 711, for the sentence
 *     that a tenant includes a resident, not including a transient occupant, of
 *     one or more rooms in a hotel who has been in possession for thirty
 *     consecutive days or longer, and for the bar on removing any tenant or
 *     lawful occupant except in a special proceeding;
 *   - Florida Statutes chapter 83 part II, for the exclusion of transient
 *     occupancy in a hotel at 83.42(3) and, decisively, the definition at
 *     83.43(18) that transient occupancy means occupancy when it is the
 *     intention of the parties that the occupancy will be temporary. There is
 *     no day count in that definition and the page says so;
 *   - Florida Statutes chapter 509, for the transient and nontransient public
 *     lodging establishment definitions at 509.013(4)(a)1 and 2, which split at
 *     30 consecutive days; the hotel classification at 509.242(1)(a) at 25 or
 *     more sleeping rooms; the ejection procedure and its written-notice
 *     requirement at 509.141; the lockout right at 509.401; and the right to
 *     recover premises at 509.402;
 *   - RCW 59.18.040, for the exemption of residence in a hotel, motel or other
 *     transient lodging from the Residential Landlord-Tenant Act and for the
 *     anti-avoidance clause in the lead-in, and RCW 19.48.010 for the hotel
 *     definition the exemption points at;
 *   - SBA SOP 50 10 8.1, effective October 1, 2026, Section A, Chapter 1,
 *     Paragraph E.3, read as the Word document SBA itself publishes: E.3.j.i
 *     for the more-than-50-percent transient revenue test with its 30-day stay
 *     length and its zoning condition, and E.3.g for apartment buildings and
 *     mobile home parks being ineligible. Cited by section, chapter and
 *     paragraph rather than by page: the published file is a .docx, and a local
 *     render's page numbers are the renderer's, not SBA's;
 *   - 13 CFR 120.110(c) on Cornell LII, the regulation the SOP paragraph
 *     implements;
 *   - New York Multiple Dwelling Law 4(8)(a) for the 30-consecutive-day
 *     definition of permanent residence purposes and 4(9) for the class B
 *     definition that puts hotels in the transient class;
 *   - New York Tax Law 1101(c)(5) for the 90-consecutive-day permanent
 *     resident definition and 1105(e)(1) for the sentence that the tax is not
 *     imposed upon a permanent resident;
 *   - Florida Statutes 212.03, for the 6 percent transient rentals tax at
 *     (1)(a), the hotel exemption routes at (4), and the facility declaration
 *     at (7)(c);
 *   - RCW 82.04.050(2)(f), for the presumption that lodging furnished for a
 *     continuous period of one month or more is a rental or lease of real
 *     property rather than a taxable licence to use.
 *
 * The worked example was recomputed line by line with
 * scripts/check-guest-tenant-math.mjs before saving, 39 assertions, which also
 * re-asserts every statutory threshold the page prints. Do not hand-edit a
 * number without re-reading its source and bumping `lastUpdated`.
 *
 * The page runs 2,505 words by the template's own count, against the brief's
 * 2,500-word ceiling, after five trimming passes from 3,238. Nothing cut was a
 * citation, a figure or an internal link.
 *
 * Deliberately absent. California. Civil Code 1940(b) is the best known rule
 * on this subject and leginfo.legislature.ca.gov answers 403 to a scripted
 * reader and to WebFetch, which is the same blocker recorded in
 * geo/content-queue.md on 2026-10-06, so no California line is printed. Texas,
 * for the same family of reasons: statutes.capitol.texas.gov serves a
 * JavaScript shell and the Comptroller's hotel tax landing page does not carry
 * the permanent-resident rule. Any lender policy on long-stay revenue: no bank,
 * CMBS lender or debt fund publishes one, and the first-party data block says
 * so. Any share of hotel room nights sold on stays over 30 days: STR and CoStar
 * hold that behind a subscription and AGENTS.md rule 4 forbids republishing it.
 * And no legal advice: the page says which statute asks which question and
 * sends the reader to counsel in the state that governs.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "when-a-guest-becomes-a-tenant",
  cluster: "hotel-industry",
  isHub: false,
  title: "When a Hotel Guest Becomes a Tenant",
  description:
    "New York says 30 consecutive days. Florida asks what the parties intended. SBA wants more than 50% of revenue from stays of 30 days or less.",
  h1: "When does a hotel guest become a tenant?",
  lastUpdated: "2026-11-09",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "When does a hotel guest become a tenant?",
    "Can I evict a long-term guest from my hotel?",
    "My guest has stayed 45 days and will not leave, what can I do?",
    "How long can someone stay in a hotel before they have tenant rights?",
    "Do long-term stays affect hotel occupancy tax?",
    "Can a hotel with long-stay guests still get an SBA loan?",
    "What is the 30-day rule for hotels?"
  ],
  answer:
    "It depends on which law is asking. New York makes a hotel occupant a tenant after 30 consecutive days in possession.[1] Florida's landlord-tenant exclusion turns on intent, not a day count.[2] Washington's act exempts hotel residence outright.[3] SBA's SOP 50 10 8.1, effective October 1, 2026, wants more than 50 percent of revenue from stays of 30 days or less.[4]",
  takeaways: [
    "New York counts days. RPAPL 711 makes a hotel resident in possession thirty consecutive days or longer a tenant, removable only in a special proceeding.[1]",
    "Florida runs two lines. Section 83.43(18) defines transient occupancy by the parties' intention that it be temporary, with no day count; 509.013(4)(a) splits a transient from a nontransient lodging establishment at 30 consecutive days.[2][5]",
    "Washington sets no day count. Its act exempts residence in a hotel outright, unless the arrangement was established primarily to avoid the act.[3]",
    "The tax lines come later and differ again: 90 consecutive days in New York, one month in Washington, six months in Florida.[9][11][12]",
    "The financing line is the strictest. SOP 50 10 8.1 makes a hotel eligible only if more than 50 percent of prior-year revenue came from transients staying 30 days or less.[4]"
  ],
  sections: [
    {
      h2: "What is the difference between a hotel guest and a tenant?",
      lead: "A guest holds a licence to use a room, a tenant holds possession of it, and only a court can end the second.",
      body: "The difference is who decides when the occupancy ends. A hotel guest can be asked to leave and, in Florida, removed under a procedure the operator runs itself.[5] A tenant comes out through a court: no tenant or lawful occupant of a dwelling or housing accommodation shall be removed from possession except in a special proceeding.[1]\n\nWashington draws the same line in its tax code. RCW 82.04.050(2)(f) covers lodging furnished by a hotel and \"the granting of any similar license to use real property, as distinguished from the renting or leasing of real property\".[12] A licence to use is what a hotel sells. A lease is what a landlord sells. Everything below follows from which one a long stay has quietly become.\n\nNo federal statute sets the day a guest becomes a tenant, and the three states read here agree on neither the test nor the number. Both hotel definitions turn on the same unquantified word: Washington's covers sleeping accommodations furnished for hire to transient guests in three or more rooms,[6] Florida's a hotel with 25 or more sleeping rooms.[5] What the federal government does set is a financing consequence."
    },
    {
      h2: "Does 30 days turn my guest into a tenant?",
      lead: "In New York yes, by statute. In Florida the landlord-tenant test is intent, and 30 days decides something else. In Washington there is no day count.",
      body: "New York counts days. RPAPL 711 defines a tenant to include \"a resident, not including a transient occupant, of one or more rooms in a hotel who has been in possession for thirty consecutive days or longer\".[1] The count is consecutive, and possession is the operative word. Removal then runs through Article 7, which for non-payment needs a written rent demand with at least fourteen days' notice first.[1]\n\nFlorida comes at it from the other end. Chapter 83 part II does not apply to \"transient occupancy in a hotel, condominium, motel, roominghouse, or similar public lodging\", and 83.43(18) defines transient occupancy as \"occupancy when it is the intention of the parties that the occupancy will be temporary\".[2] That is an intent test, not a calendar. A 45-night stay by a traveller whose project ran long is still transient. A month-to-month arrangement with a local resident who has nowhere else to go may not be, on night 10.\n\nFlorida's 30-day line governs something else: a transient public lodging establishment is rented more than three times a year for periods of less than 30 consecutive days, a nontransient one for periods of at least 30.[5] Those are licence classes under chapter 509, not tenancy tests.\n\nWashington exempts the category. Item (4) of RCW 59.18.040 is residence in a hotel, motel or other transient lodging as defined in RCW 19.48.010, with no day count in it.[3][6] The catch is the lead-in: such arrangements sit outside the act \"unless established primarily to avoid its application, in which event the provisions of this chapter shall control\".[3] An operator papering residential occupancy as hotel stays is what it was written for."
    },
    {
      h2: "Can I lock out or eject a guest who will not leave?",
      lead: "Florida gives an operator three statutory self-help tools against a guest, and none reaches someone who has stopped being one.",
      body: "Section 509.141 lets the operator remove a guest who, among other grounds, fails to pay rent at the agreed-upon rate by the written checkout time, or fails to check out by that time without an agreed extension.[5] A request to depart on either of those grounds has to be in writing by email, text message or printed paper, and no removal decision may rest on race, creed, colour, sex, physical disability or national origin.[5]\n\nTwo more sit in part IV. Section 509.401 lets an operator who reasonably determines that a guest has a large outstanding account lock the guest out, to make the guest arrange payment in writing, and requires access back once that is done, with property essential to health reachable throughout.[5] Section 509.402 lets the operator recover the premises where a guest vacates without notice and the account looks unpayable, on an itemised inventory taken with one person who is not its agent.[5]\n\nAll three are addressed to a guest, which the chapter defines as any patron, customer, tenant, lodger, boarder or occupant of a public lodging establishment, so the label follows the establishment rather than the stay.[5] The risk is the other statute: if the occupancy was never transient within 83.43(18), chapter 83 part II applies and a lockout is the wrong instrument.[2] In New York the tools are gone by day 30, and changing the locks on night 31 is not enforcing a checkout time.[1] Keep stay lengths and contract terms where the revenue is recorded: the paperwork is the evidence of intent."
    },
    {
      h2: "When does a long stay stop being taxable?",
      lead: "Later than the tenancy line, and at a different number in each state: 90 consecutive days in New York, one month in Washington, six months in Florida.",
      body: "New York sets 90 days. Tax Law 1101(c)(5) makes any occupant of a hotel room for at least ninety consecutive days a permanent resident with regard to the period of such occupancy, and 1105(e)(1), which imposes the tax on the rent for every occupancy, says the tax shall not be imposed upon a permanent resident.[9][10] The occupant becomes a tenant 60 days before the rent stops being taxable.\n\nWashington sets one month, by presumption rather than exemption. RCW 82.04.050(2)(f) presumes occupancy for a continuous period of one month or more to be a rental or lease of real property rather than a mere licence to use, and lodging offered regularly for periods of less than a month to be a taxable licence.[12]\n\nFlorida is the outlier, and the trap is the order of the sentences. Section 212.03(1)(a) levies the 6 percent transient rentals tax on living quarters in a hotel and eight other property types, and the sentence after it exempts a person holding a bona fide written agreement for continuous residence longer than 6 months at a list of properties that leaves hotels out.[11] The hotel route is subsection (4): no tax on a person with a bona fide written lease longer than 6 months for continuous residence at any one hotel, or who resides continuously longer than 6 months at one hotel and has paid the tax for 6 months of residence.[11] Subsection (7)(c) adds a facility-level route, on a verified declaration covering more than half the available units at a continuous residence over 3 months.[11]\n\nThree clocks run at once, and none of them stops on the same night as the tenancy line."
    },
    {
      h2: "Can long stays cost me my SBA financing?",
      lead: "Yes, and this is the hardest line here: more than 50 percent of the hotel's prior-year revenue has to come from transients staying 30 days or less.",
      body: "SBA starts from 13 CFR 120.110(c), which makes businesses owned by developers and landlords that do not actively use or occupy the assets acquired or improved with the loan proceeds ineligible, except Eligible Passive Companies under 13 CFR 120.111.[8] SOP 50 10 8.1, effective October 1, 2026, implements that at Section A, Chapter 1, Paragraph E.3.[4]\n\nParagraph E.3.g is the warning: apartment buildings and mobile home parks are not eligible.[4] Paragraph E.3.j.i is the carve-out: hotels, motels, recreational vehicle parks, marinas, campgrounds or similar businesses are eligible if more than 50 percent of the business's revenue for the prior year is derived from transients who stay for 30 days or less at a time, and the business complies with all zoning and other legal requirements.[4] A start-up applicant's projections have to show the same thing.[4]\n\nThree features matter. It is a revenue test, not a room-night test, so a discounted long-stay rate counts for less against the hotel than its room nights suggest. It looks at the prior year, so a block signed in January is still being measured the following January. And the zoning condition sits inside the test rather than beside it.\n\nFail it and a [7(a) loan](/glossary/sba-7a) and a [504 loan](/glossary/sba-504) go together, because both run through that paragraph. The program terms, and the length-of-stay revenue split a lender will ask for, are at [How is extended-stay hotel financing different?](/hotel-financing/extended-stay-financing). No bank, CMBS lender, life company or debt fund publishes a long-stay policy of its own."
    },
    {
      h2: "Does a long stay break the building's occupancy class?",
      lead: "In New York it can, because the Multiple Dwelling Law splits buildings by how long people stay rather than by what the sign says.",
      body: "A class B multiple dwelling is one occupied, as a rule transiently, as the more or less temporary abode of individuals or families lodged with or without meals, and the class expressly includes hotels, lodging houses and rooming houses.[7] A class A multiple dwelling is for permanent residence purposes, which the statute defines as occupancy by the same natural person or family for thirty consecutive days or more, and may only be used for that.[7]\n\nThat is the same 30-day number as the tenancy rule doing a different job. The class belongs to the building and its certificate of occupancy, not to one guest's stay, so a hotel converting a floor to long-stay use moves toward a class the building may not be certified for.\n\nSBA ties the two together: eligibility needs compliance with all zoning and other legal requirements, in the same clause as the 50 percent test.[4] A long-stay programme that fails the local occupancy class fails a condition of eligibility without any finding about revenue.\n\nFor a buyer this is a diligence item with a paper trail: the certificate of occupancy, the licence class, the rooms-revenue split by stay length and the contracts behind the block either agree with one another or explain the discount in the price."
    }
  ],
  table: {
    caption: "What a long stay changes, rule by rule",
    columns: ["Rule", "What it decides", "The line", "Source"],
    rows: [
      [
        "NY RPAPL 711",
        "Whether removal needs a court proceeding",
        "30 consecutive days in possession",
        "[1]"
      ],
      [
        "NY Multiple Dwelling Law 4(8)(a) and 4(9)",
        "Which occupancy class the building is in",
        "30 consecutive days by the same person or family",
        "[7]"
      ],
      [
        "NY Tax Law 1101(c)(5) and 1105(e)(1)",
        "Whether the rent is taxable",
        "At least 90 consecutive days",
        "[9][10]"
      ],
      [
        "Fla. Stat. 83.42(3) and 83.43(18)",
        "Whether the residential landlord-tenant act applies",
        "The parties' intention that occupancy be temporary. No day count",
        "[2]"
      ],
      [
        "Fla. Stat. 509.013(4)(a)",
        "Transient or nontransient licence class",
        "Fewer than 30 consecutive days, against at least 30",
        "[5]"
      ],
      [
        "Fla. Stat. 509.141, 509.401, 509.402",
        "Whether the operator can eject, lock out or recover the room itself",
        "The occupant has to still be a guest of the establishment",
        "[5]"
      ],
      [
        "Fla. Stat. 212.03(4)",
        "The 6 percent transient rentals tax",
        "A bona fide written lease longer than 6 months, or 6 months of residence with the tax paid",
        "[11]"
      ],
      [
        "RCW 59.18.040(4)",
        "Whether the residential landlord-tenant act applies",
        "No day count. Hotel residence is exempt unless established primarily to avoid the act",
        "[3][6]"
      ],
      [
        "RCW 82.04.050(2)(f)",
        "Taxable licence to use, or untaxed lease",
        "One month or more is presumed a lease",
        "[12]"
      ],
      [
        "SBA SOP 50 10 8.1, Para. E.3.j.i",
        "Whether the hotel can borrow 7(a) or 504 at all",
        "More than 50 percent of prior-year revenue from transients staying 30 days or less",
        "[4][8]"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets publishes a monthly hotel loan rate sheet, and its October 2026 edition, published October 1, 2026, is what a failed transient revenue test takes off the table: an SBA 7(a) variable ceiling of 10.00%, which is Prime at 7.00% plus the 3.00% maximum spread, and a 25-year SBA 504 debenture priced at 6.54% on September 10, 2026. No lender on that sheet publishes a long-stay policy, and 40 lender-set cells on it stay marked not yet published for the same reason."
  },
  workedExample: {
    label: "Hypothetical: a 118-key Florida hotel signs a 30-room, 274-night housing contract",
    body:
      "Hypothetical. The hotel, the rate, the room count and the trailing revenue are assumptions. The statutory tests are read from the sources.\n\nTrailing twelve-month rooms revenue is $4,200,000 across 118 keys. The hotel signs a contract for 30 rooms at $89 a night for 274 consecutive nights.\n\nStep 1. $89 times 274 nights is $24,386 a room, and 30 rooms is $731,580. That leaves $3,468,420 from stays of 30 days or less, which is 82.58 percent of $4,200,000. SBA wants more than 50 percent, so the hotel passes.[4]\n\nStep 2. Half of $4,200,000 is $2,100,000, so long-stay revenue has to stay under it. Subtract $731,580 and $1,368,420 is left, which at $24,386 a room is 56 more rooms. At 86 of the 118 keys, long-stay revenue is $2,097,196 and transient revenue is 50.07 percent, which still passes. The 87th room takes long-stay revenue to $2,121,582 and transient revenue to 49.49 percent, which fails.[4] Thirty-two keys have to stay genuinely transient.\n\nStep 3. At 6 percent, the whole $731,580 carries $43,894.80 of Florida transient rentals tax.[11] Take the subsection (4) route and assume the sixth month of residence ends on night 183: the first 183 nights are $488,610 of revenue and $29,316.60 of tax, and the remaining 91 nights are $242,970 and $14,578.20 not owed once the tax has been paid for six months of residence.[11] The two parts rebuild the $43,894.80, and the saving depends on the occupancy being by a person residing continuously at one hotel.\n\nStep 4. Put the same contract in New York. On night 30 each occupant is a tenant under RPAPL 711, with 244 nights still to run, and the only route to a vacant room is a special proceeding.[1] On night 90 each occupant is a permanent resident and the rent stops being taxable.[9][10] Sixty nights separate the two lines."
  },
  faq: [
    {
      q: "How long can a guest stay before they get tenant rights?",
      a: "It depends on the state. New York sets 30 consecutive days in possession.[1] Florida asks whether the parties intended the occupancy to be temporary, with no day count.[2] Washington exempts hotel residence from its act.[3]"
    },
    {
      q: "Is there a federal 30-day rule for hotel guests?",
      a: "Not for tenancy. The only federal 30-day line here is SBA's: more than 50 percent of prior-year revenue must come from transients staying 30 days or less.[4]"
    },
    {
      q: "Can I lock a guest out of the room for not paying?",
      a: "In Florida, section 509.401 permits a lockout where the operator reasonably determines a guest has a large outstanding account, to make the guest arrange payment in writing. Property essential to health stays reachable.[5]"
    },
    {
      q: "What if my long-stay occupant is not a transient?",
      a: "In Florida the chapter 83 part II exclusion stops applying, so removal becomes an eviction rather than an ejection under 509.141.[2][5] In New York, removal after 30 consecutive days must be a special proceeding.[1]"
    },
    {
      q: "Do long stays stop my occupancy tax?",
      a: "Eventually, at a different number from the tenancy line. New York stops at 90 consecutive days.[9][10] Washington presumes a lease at one month or more.[12] Florida's hotel route needs more than 6 months.[11]"
    },
    {
      q: "Will long-stay contracts hurt the value of my hotel?",
      a: "They change what a buyer can finance. A hotel below SBA's more-than-50-percent transient revenue test cannot use 7(a) or 504, which narrows the buyer pool.[4] No lender publishes a conventional equivalent."
    },
    {
      q: "Does a long-stay floor affect my certificate of occupancy?",
      a: "In New York it can. Permanent residence purposes means occupancy by the same person or family for 30 consecutive days or more, and only a class A multiple dwelling may be used for that. Hotels are class B.[7]"
    },
    {
      q: "What should I keep on file for a long-stay block?",
      a: "The written contract, the stay lengths, the rooms-revenue split by stay length, the licence class and the certificate of occupancy. Florida's test turns on the intention of the parties, and the contract is the evidence.[2]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "New York Real Property Actions and Proceedings Law 711, grounds where a landlord-tenant relationship exists: the definition of tenant that includes a resident, not including a transient occupant, of one or more rooms in a hotel in possession for thirty consecutive days or longer; the bar on removing a tenant or lawful occupant except in a special proceeding; and the fourteen-day written rent demand in subdivision 2",
      url: "https://www.nysenate.gov/legislation/laws/RPA/711",
      publisher: "New York State Senate, NYS Open Legislation",
      accessed: "2026-11-09"
    },
    {
      n: 2,
      label: "Florida Statutes chapter 83, Landlord and Tenant: section 83.42(3), excluding transient occupancy in a hotel, condominium, motel, roominghouse or similar public lodging from part II, and section 83.43(18), defining transient occupancy as occupancy when it is the intention of the parties that the occupancy will be temporary",
      url: "https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0083/0083.html",
      publisher: "Florida Legislature, Online Sunshine",
      accessed: "2026-11-09"
    },
    {
      n: 3,
      label: "RCW 59.18.040, living arrangements exempted from the Residential Landlord-Tenant Act: the lead-in excluding arrangements established primarily to avoid the act's application, and item (4), residence in a hotel, motel or other transient lodging whose operation is defined in RCW 19.48.010",
      url: "https://app.leg.wa.gov/rcw/default.aspx?cite=59.18.040",
      publisher: "Washington State Legislature",
      accessed: "2026-11-09"
    },
    {
      n: 4,
      label: "SBA SOP 50 10 8.1, Lender and Development Company Loan Programs, effective October 1, 2026, Section A, Chapter 1, Paragraph E.3, Passive Businesses: subparagraph j.i, under which hotels, motels, recreational vehicle parks, marinas, campgrounds or similar businesses are eligible if more than 50 percent of the business's revenue for the prior year is derived from transients who stay for 30 days or less at a time and the business complies with all zoning and other legal requirements, with the same test applied to a start-up applicant's projections; and subparagraph g, under which apartment buildings and mobile home parks are not eligible",
      url: "https://legacy.sba.gov/sites/default/files/2026-10/SOP%2050%2010%208.1%20Technical%20Policy%20Updates%20effective%20%2010.1.2026.docx",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-11-09"
    },
    {
      n: 5,
      label: "Florida Statutes chapter 509, Lodging and Food Service Establishments: section 509.013(2), (3) and (4)(a), defining operator, guest, and the transient and nontransient public lodging establishment split at 30 consecutive days; section 509.242(1)(a), classifying a hotel at 25 or more sleeping rooms; section 509.141, on refusal of admission and ejection of undesirable guests, its grounds and its written-notice requirement; section 509.401, the operator's right to lockout; and section 509.402, the operator's right to recover premises",
      url: "https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0509/0509.html",
      publisher: "Florida Legislature, Online Sunshine",
      accessed: "2026-11-09"
    },
    {
      n: 6,
      label: "RCW 19.48.010, definitions: a building held out to the public as an inn, hotel or public lodging house where sleeping accommodations are furnished for hire to transient guests, in which three or more rooms are used for the accommodation of such guests, is a hotel for the purposes of the chapter",
      url: "https://app.leg.wa.gov/rcw/default.aspx?cite=19.48.010",
      publisher: "Washington State Legislature",
      accessed: "2026-11-09"
    },
    {
      n: 7,
      label: "New York Multiple Dwelling Law 4, definitions: subdivision 8(a), defining a class A multiple dwelling, restricting it to permanent residence purposes and defining permanent residence purposes as occupancy by the same natural person or family for thirty consecutive days or more; and subdivision 9, defining a class B multiple dwelling as one occupied, as a rule transiently, and including hotels, lodging houses, rooming houses and boarding houses in that class",
      url: "https://www.nysenate.gov/legislation/laws/MDW/4",
      publisher: "New York State Senate, NYS Open Legislation",
      accessed: "2026-11-09"
    },
    {
      n: 8,
      label: "13 CFR 120.110, what businesses are ineligible for SBA business loans: paragraph (c), passive businesses owned by developers and landlords that do not actively use or occupy the assets acquired or improved with the loan proceeds, except Eligible Passive Companies under 13 CFR 120.111",
      url: "https://www.law.cornell.edu/cfr/text/13/120.110",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-09"
    },
    {
      n: 9,
      label: "New York Tax Law 1101(c)(5), definitions for the tax on hotel occupancy: any occupant of any room or rooms in a hotel or short term rental unit for at least ninety consecutive days is a permanent resident with regard to the period of such occupancy",
      url: "https://www.nysenate.gov/legislation/laws/TAX/1101",
      publisher: "New York State Senate, NYS Open Legislation",
      accessed: "2026-11-09"
    },
    {
      n: 10,
      label: "New York Tax Law 1105(e)(1), imposition of sales tax: the rent for every occupancy of a room or rooms in a hotel or short term rental unit in the state, except that the tax shall not be imposed upon a permanent resident or where the rent is not more than two dollars per day",
      url: "https://www.nysenate.gov/legislation/laws/TAX/1105",
      publisher: "New York State Senate, NYS Open Legislation",
      accessed: "2026-11-09"
    },
    {
      n: 11,
      label: "Florida Statutes 212.03, transient rentals tax: subsection (1)(a), levying 6 percent on living quarters in a hotel and the other listed property types, with the following sentence's longer-than-6-months written-agreement exclusion that omits hotels; subsection (4), the hotel exemption for a bona fide written lease longer than 6 months for continuous residence at any one hotel or for residence continuously longer than 6 months with the tax paid for 6 months; and subsection (7)(c), the facility-level route on a verified declaration that more than half of the total rental units available are occupied by tenants with a continuous residence in excess of 3 months",
      url: "https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0200-0299/0212/Sections/0212.03.html",
      publisher: "Florida Legislature, Online Sunshine",
      accessed: "2026-11-09"
    },
    {
      n: 12,
      label: "RCW 82.04.050(2)(f), sale at retail and retail sale: the furnishing of lodging by a hotel and the granting of any similar license to use real property, as distinguished from the renting or leasing of real property, with the presumption that occupancy for a continuous period of one month or more is a rental or lease and that lodging offered regularly for periods of less than a month is a licence subject to sales and use tax",
      url: "https://app.leg.wa.gov/rcw/default.aspx?cite=82.04.050",
      publisher: "Washington State Legislature",
      accessed: "2026-11-09"
    }
  ],
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/extended-stay-hotels",
      "/hotel-industry/how-hotels-make-money",
      "/hotel-industry/revpar-adr-occupancy",
      "/hotel-industry/hotel-management-agreements"
    ],
    glossary: [
      "/glossary/sba-7a",
      "/glossary/sba-504",
      "/glossary/revpar",
      "/glossary/noi"
    ],
    data: ["/rates"]
  },
  cta: { label: "Talk to the hospitality team", href: "/contact" },
  brandSentence:
    "Matthews Hotel Markets reads the long-stay contracts and the rooms-revenue split by stay length before it prices a hotel, and arranges SBA 7(a) and 504 financing on hotels from $5 million."
};

export default page;
