/**
 * Can my franchisor open another hotel of my brand nearby?
 * Answer page: /hotel-industry/franchise-territory-and-encroachment
 *
 * A total coverage gap before this file. "Restricted Area", "exclusive
 * territory", "protected area", "territorial", "area of protection" and
 * "Item 12" each appeared in zero files under src/lib/data/, and "impact
 * study" in two, both times as an aside. The site carried 26 brand pages on
 * what a franchise costs and nothing on the one franchise term that decides
 * whether a second hotel of the same badge can open across the street, which
 * is the question an owner asks the week the sign goes up.
 *
 * Every figure and clause here was read out of a primary source in the run
 * that wrote this file (2026-11-03):
 *
 *   - the 2026 US Hampton disclosure document, issued March 30, 2026, Item 12
 *     (the no-protected-area sentence, the Restricted Area Provision and its
 *     four numbered paragraphs, the six exclusions including the "four (4) or
 *     more hotels" portfolio carve-out, the Brand definition spanning Hampton,
 *     Hampton Inn and Hampton Inn & Suites while excluding every Hilton-named
 *     chain, the "we do not intend to do so in the future" sentence, the
 *     IMPORTANT NOTES block and the no-mechanism-for-resolving-conflicts
 *     sentence) and Item 20 Tables 1 and 5 for both Hampton outlet families;
 *   - the 2026 US Hilton Garden Inn and 2026 US Tru disclosure documents, both
 *     issued March 30, 2026, Item 12, which carry the same clauses. Home2
 *     Suites was read too and carries them as well; it is not cited only to
 *     keep the source list to the three the page quotes;
 *   - the Comfort disclosure document, issued April 1, 2026, as registered
 *     with the Minnesota Department of Commerce: Item 12, the franchise
 *     agreement's section 19(b) "Limited Rights" acknowledgment, Item 20
 *     Tables 1 and 5, and Exhibit L, the Incremental Impact Policy updated
 *     April 2025, for the Area of Enhanced Protection chart, the notice radii,
 *     the 5 and 3 percent tests, the objection clock, the second study, the
 *     declining-market right, the replacement-franchise right and the sentence
 *     that it is an internal policy rather than a contractual obligation;
 *   - 16 CFR 436.5(l), the FTC Franchise Rule's Item 12 disclosure duty,
 *     including the sentence at (l)(5)(i) that a franchisor granting no
 *     exclusive territory must print word for word, and (l)(6)(iii)(F), which
 *     requires only that conflict resolution be described. Read twice: once
 *     through the eCFR versioner API against the 2026-10-01 issue of title 16
 *     and once on Cornell LII, which is the URL cited because it answers a
 *     scripted reader. The two agreed word for word;
 *   - Iowa Code section 537A.10, read as the legislature's own chapter PDF
 *     (the Iowa Code 2026 edition, generated December 9, 2025), for the
 *     applicability cutover at subsection 2, the encroachment cause of action
 *     at subsection 6 with its unreasonable-proximity element, four defenses,
 *     six percent screen, compensable-sales formula, three-year cap and
 *     eighteen-month limitation, and subsections 4, 13 and 14 on void waivers,
 *     the private action with costs and fees, and void foreign choice of law;
 *   - Iowa Code chapter 523H, same source family, for section 523H.6, which
 *     still governs agreements entered before July 1, 2000 on a five percent
 *     screen and with a three-month tail rather than thirty days.
 *
 * The worked example was recomputed line by line with
 * scripts/check-franchise-territory-math.mjs before saving, 55 assertions,
 * which also re-checks the template's own limits. Do not hand-edit a number
 * without re-reading its source and bumping `lastUpdated`.
 *
 * The page runs 2,498 words by the template's own count, against the brief's
 * 2,500-word ceiling, after four trimming passes from 3,718. Nothing cut was a
 * citation, a figure or an internal link.
 *
 * Deliberately absent. Any claim that a franchisor "usually" grants a radius
 * of so many miles: Hilton's documents say the boundaries follow no standard
 * formula, so there is no published figure and the page prints none. Any
 * market-level figure for what an encroaching hotel does to RevPAR: STR and
 * CoStar hold that data behind a subscription, AGENTS.md rule 4 forbids
 * republishing it, and the worked example labels its own flow-through and cap
 * rate as assumptions. Any lender policy on same-brand impact risk: lenders do
 * not publish one, and the first-party data block says so. Any figure for what
 * a Choice impact study costs: the amount is on an approved-consultant list
 * attached to the policy and the list is not a published schedule. And no
 * ranking of franchisors: the page compares what four dated documents say and
 * stops there.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "franchise-territory-and-encroachment",
  cluster: "hotel-industry",
  isHub: false,
  title: "Hotel Franchise Territory Protection",
  description:
    "Hilton and Choice both say you get no exclusive territory. What a Restricted Area or a 5-mile impact radius gives you, and what Iowa law adds.",
  h1: "Can my franchisor open another hotel of my brand nearby?",
  lastUpdated: "2026-11-03",
  authorSlug: "miles-cortez",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "Can my franchisor open another hotel of the same brand near mine?",
    "Does a hotel franchise come with a protected territory?",
    "What is an area of protection in a hotel franchise agreement?",
    "What is a hotel impact study?",
    "Can I stop a new Hampton Inn from opening near my Hampton Inn?",
    "What is a Restricted Area Provision?",
    "Can I sue my franchisor for encroachment?"
  ],
  answer:
    "Usually yes. The 2026 Hampton, Hilton Garden Inn and Tru disclosure documents, all issued March 30, 2026, say the standard franchise agreement has no provision granting a protected area.[1][2][3] Choice's April 1, 2026 Comfort document says the same, then adds a revocable policy with protection radii of half a mile to 7 miles.[4] Iowa alone gives a statutory damages claim, screened at six percent.[5]",
  takeaways: [
    "The sentence \"You will not receive an exclusive territory\" is prescribed wording: 16 CFR 436.5(l)(5)(i) tells a franchisor that grants no territory to print it word for word.[6]",
    "Hilton will negotiate a Restricted Area Provision, normally for a period shorter than the franchise term, and the 2026 documents say it does not intend to extend that period for the full term in future.[1][2][3]",
    "Choice grants a protected radius of half a mile to 7 radial miles by market type, plus objection rights out to 15 miles, then calls it an internal policy it may revoke at any time.[4]",
    "The two Hampton systems held 2,390 franchised U.S. hotels and no company-owned ones at December 31, 2025, with 313 franchise agreements signed but not opened.[1]",
    "Iowa Code 537A.10(6) gives a damages claim where a same-brand opening in unreasonable proximity cuts gross sales by more than six percent, capped at three years of lost profits.[5]"
  ],
  sections: [
    {
      h2: "Does my franchise agreement give me a protected territory?",
      lead: "Almost certainly not, and the wording the 2026 documents use to say so is prescribed by federal rule.",
      body: "Start with the rule, not the brand. 16 CFR 436.5(l) sets what Item 12 of a disclosure document must cover, including whether an exclusive territory is granted at all.[6] If none is, subparagraph (l)(5)(i) prescribes the sentence word for word: \"You will not receive an exclusive territory. You may face competition from other franchisees, from outlets that we own, or from other channels of distribution or competitive brands that we control.\"[6] Reading that as an opening offer is the common mistake. It is the Commission's sentence, not the franchisor's.\n\nHilton goes past the minimum. The Hampton, Hilton Garden Inn and Tru documents, each issued March 30, 2026, say there are no provisions in the standard franchise agreement granting franchisees a protected area or territory, then reserve the right to own, operate or franchise any other business, under the brand or a competing brand, at any time and in any location.[1][2][3]\n\nChoice arrives at the same place by another route. The Comfort document, issued April 1, 2026, prints the prescribed sentence, then says Choice may grant an exclusive territory at its discretion and end it on a default.[4] Its franchise agreement is blunter. Section 19(b), headed Limited Rights, has the franchisee acknowledge that except as section 2 provides, the agreement does not grant any protected area, market or territorial rights.[4]\n\nThe stakes are arithmetic. At December 31, 2025 the two Hampton systems held 2,390 franchised U.S. hotels and no company-owned ones, with 313 franchise agreements signed but not opened and 46 more projected to open in the next fiscal year.[1] The three Comfort badges held 1,643 franchised outlets, down 20 over 2025, with 101 agreements signed but not opened and 33 projected.[4] A hotel's closest competitor in its [competitive set](/glossary/comp-set) is often the same badge under different ownership."
    },
    {
      h2: "What is a Restricted Area Provision, and what does it leave out?",
      lead: "A negotiated clause over the immediate competitive market, shorter than the franchise term, covering one badge, with six carve-outs on top.",
      body: "A Restricted Area Provision covers an area surrounding the hotel and encompassing its immediate competitive market, as agreed by the parties. The boundaries vary from hotel to hotel and follow no standard formula, though they may be drawn by city, county, street, highway or a radius from the front door.[1] No typical radius exists to print.\n\nThree limits sit inside the clause. Timing: Hilton will normally grant one on a new development or a conversion, and will not normally grant one on a change of ownership or re-licensing, which is the transaction a buyer of an existing hotel is doing.[1] Scope: for Hampton the protected Brand means Hampton, Hampton Inn and Hampton Inn & Suites, and excludes every chain with Hilton in the name, including Hilton Garden Inn, DoubleTree by Hilton and Homewood Suites by Hilton, so a Home2 Suites across the road is outside the clause by definition.[1] Duration: the restrictive period runs from approval of the franchise application and does not move if the hotel's sales or the area's population grow.[1] Then the sentence to read twice, carried by all three 2026 Hilton documents: \"Historically, we have extended the Restrictive Period for the full term of the Franchise Agreement; however, we do not intend to do so in the future.\"[1][2][3]\n\nThe exclusions are where the clause usually fails. It generally does not reach a hotel already open, under construction or approved at the effective date, or its replacement; hotels under another brand; gaming or timeshare properties under the brand; or any hotel arriving as part of a group of four or more hotels acquired in a single transaction or related transactions.[1] The last is the live risk: a portfolio trade is the commonest way a competing same-brand hotel appears inside a protected area.\n\nWhen two hotels of one badge do collide, the Hampton document says there is no mechanism for resolving conflicts between your hotel and network hotels, and leaves any resolution over location, customers or support to Hilton's business judgment.[1] That answers the rule, which requires a franchisor to describe how it resolves such conflicts, not to have a procedure.[6] The clause, where it exists, sits in an addendum to the [franchise agreement](/glossary/franchise-agreement), and on a [franchise transfer](/sell-a-hotel/franchise-transfer) it usually does not come across."
    },
    {
      h2: "What does Choice's impact policy actually give me?",
      lead: "A protected radius from half a mile to 7 miles, notice out to 15 miles, a five percent impact test, and a policy Choice may withdraw at any time.",
      body: "Exhibit L to the Comfort document is the Incremental Impact Policy, updated April 2025. Every covered hotel in good standing gets an Area of Enhanced Protection inside which Choice will not generally franchise a same-brand hotel. The radius is set by market category in radial miles: an urban hotel gets half a mile in a primary market, 1.5 miles in a secondary and 5 in a tertiary; airport and resort hotels get 1, 5 and 7; highway and small town metro hotels get 2, 5 and 7; suburban hotels get 2, 5 and 5.[4] The ceiling is 7 radial miles.\n\nProtection is not absolute inside that radius. If Choice decides the brand serves the market inadequately it will run an incremental impact study, but only where the franchisee formally objects, and it may grant the application if the study finds the new hotel will not cut the existing hotel's annual gross room revenues by more than 5 percent in any of the first three years of projections.[4] Outside the protected area the franchisee still gets notice and a right to object where its hotel sits within 7, 10 and 15 radial miles of the applicant, by the applicant's market tier.[4]\n\nThe clock is short. An objection must reach the ombudsperson within 15 calendar days of Choice's notice, and only a formal objection preserves the right to a study.[4] The study request follows within 5 business days, with the full fee.[4] Choice must deny the application if the study finds more than a 5 percent reduction, or more than 3 percent where the franchisee signed a new-construction agreement in the 18 months before the notice.[4]\n\nTwo further rights matter. A study concluding against the hotel can be rerun once, between 365 and 400 days after the new hotel opens, and a second study finding more than a 5 percent first-year reduction lets the franchisee terminate without paying liquidated damages.[4] A hotel below 52 percent annual occupancy in a declining market, at a [RevPAR](/glossary/revpar) yield of at least 95 percent of its competitive set, can block a same-brand application in its market tract outright.[4]\n\nThen the caution. The policy is an internal policy, not a contractual obligation, and may be changed or revoked at Choice's sole discretion on reasonable notice; and it covers the Clarion, Comfort, Quality, Sleep, Econo Lodge, Rodeway and MainStay brands only.[4]"
    },
    {
      h2: "Does state law give me anything the contract does not?",
      lead: "In Iowa, clearly. Iowa gives an adversely affected franchisee a damages claim when a same-brand opening in unreasonable proximity cuts its gross sales by more than six percent.",
      body: "Iowa Code section 537A.10(6) governs franchise agreements entered on or after July 1, 2000 for a franchise operated from premises physically in Iowa.[5] The claim has three elements: a new outlet selling essentially the same goods or services under the same mark, in unreasonable proximity to the existing one, with an adverse effect on the existing outlet's gross sales.[5]\n\nFour defenses cut it down. The franchisor first offered the site to the existing franchisee, who met its reasonable current qualifications; or the impact on annual gross sales, measured against the twelve months before the opening, was under six percent in the new hotel's first twelve months; or the franchisee did not meet the franchisor's then current reasonable eligibility criteria; or the franchisee already holds reasonable territorial rights the new outlet does not violate.[5] That last defense is where a Hilton Restricted Area Provision does real work, in the one state where the statute would otherwise bite.\n\nThe damages formula is narrow enough to run before anyone hires a lawyer. Compensable sales are the prior twelve months' gross sales, less six percent of that figure, less the following twelve months' actual gross sales.[5] The franchisee proves the lost profits attributable to those compensable sales, the award is capped at three years of proven lost profits, and the action must be filed within eighteen months of the opening.[5] Three subsections stop the contract swallowing it: 537A.10(4) voids a waiver, (14) voids a clause requiring another state's law, and (13) adds costs and reasonable attorneys' and experts' fees.[5] Iowa Code 523H.6 still governs agreements entered before July 1, 2000, on a five percent screen and without the unreasonable-proximity element.[7]\n\nOutside Iowa the contract governs, and Hilton's documents warn in capitals that some state laws make territorial and area restrictions void, voidable or superseded.[1]"
    },
    {
      h2: "What should a buyer, a seller or a lender ask?",
      lead: "Three documents, one pipeline query and one waiver question, all before price.",
      body: "Ask for the franchise agreement with every addendum and look for a restricted area addendum by name. Without one there is no protection.[1][4] It belongs in the data room with [the documents a hotel sale needs](/sell-a-hotel/documents-needed) and on the list in [buyer diligence](/buy-a-hotel/due-diligence-checklist). Read Item 12 of the current [disclosure document](/glossary/franchise-fdd) for the exact badge, because the badge is what the clause defines.\n\nThen read Item 20, Table 5, which publishes franchise agreements signed but not opened state by state as of December 31: 313 across the two Hampton families and 101 across the three Comfort badges.[1][4] It names no site, but a count in a small state is a signal. Ask one question the documents will not answer alone: were impact rights waived.[4]\n\nThe money question is value, not the claim. The worked example below sets a 54,720 dollar statutory award against a 1.28 million dollar value effect on the same facts. That is the arithmetic an appraiser runs through the income approach on a [branded select-service hotel](/hotel-valuation/branded-select-service-hotel-value). No lender publishes whether it underwrites same-brand impact risk, which is why the [loan requirements](/hotel-financing/loan-requirements) page prints no coverage floor."
    }
  ],
  table: {
    caption: "What the 2026 franchise documents and Iowa law say about hotel territory, read November 3, 2026",
    columns: ["Document", "Default territory", "Protection available", "Published numbers", "Can it be withdrawn?"],
    rows: [
      [
        "Hampton, 2026 US disclosure document, issued March 30, 2026",
        "None. No provision in the standard franchise agreement grants a protected area",
        "A negotiated Restricted Area Provision, normally on a new development or conversion, normally not on a change of ownership",
        "None. The document says the boundaries follow no standard formula",
        "The restrictive period is normally shorter than the franchise term, and Hilton says it does not intend to extend it for the full term in future"
      ],
      [
        "Hilton Garden Inn, 2026 US disclosure document, issued March 30, 2026",
        "None, for the hotel and separately for a restaurant brand outlet inside it",
        "The same Restricted Area Provision mechanic",
        "None",
        "Same as Hampton"
      ],
      [
        "Tru by Hilton, 2026 US disclosure document, issued March 30, 2026",
        "None",
        "The same Restricted Area Provision mechanic",
        "None",
        "Same as Hampton"
      ],
      [
        "Comfort, Choice disclosure document, issued April 1, 2026",
        "None, though Choice may grant an exclusive territory at its discretion and revoke it on a default",
        "The Incremental Impact Policy at Exhibit L, updated April 2025, covering Clarion, Comfort, Quality, Sleep, Econo Lodge, Rodeway and MainStay",
        "A protected radius of half a mile to 7 radial miles; notice radii of 7, 10 and 15 radial miles; a 5 percent impact test, or 3 percent on a new-construction agreement signed within 18 months",
        "Yes. Exhibit L calls it an internal policy, not a contractual obligation, changeable or revocable at Choice's sole discretion"
      ],
      [
        "FTC Franchise Rule, 16 CFR 436.5(l)",
        "Grants nothing. It is a disclosure duty",
        "None",
        "The exact sentence a franchisor must print when it grants no exclusive territory",
        "No. It requires conflict resolution to be described, not to exist"
      ],
      [
        "Iowa Code 537A.10(6), agreements entered on or after July 1, 2000",
        "A damages claim, not a territory",
        "A cause of action where a same-brand opening in unreasonable proximity cuts gross sales",
        "A six percent screen; damages capped at three years of proven lost profits; an eighteen-month filing window",
        "No. Subsection 4 voids a waiver and subsection 14 voids a foreign choice-of-law clause"
      ],
      [
        "Iowa Code 523H.6, agreements entered before July 1, 2000",
        "A damages claim, not a territory",
        "The same shape, without the unreasonable-proximity element",
        "A five percent screen; three years of lost profits; eighteen months, or three months after the franchisor's procedure",
        "No. Chapter 523H voids waivers of the rights it provides"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence:
      "Matthews Hotel Markets publishes the Matthews Hotel Index, and its Q1 2026 edition is what turns a revenue loss into a value loss: Austin select-service cap rates of 7.5% to 8.25%, full-service of 7.0% to 8.0%, and resort and lifestyle of 6.5% to 7.75%. Divide the lost net operating income by the cap rate and that is the damage. No lender publishes whether it underwrites a same-brand impact risk, and no franchisor publishes what it will approve."
  },
  workedExample: {
    label: "Hypothetical: a 95-key Comfort Inn and a same-brand application 6.2 miles away",
    body:
      "Hypothetical. The hotel, the revenue figures, the profit flow-through and the cap rate are assumptions. The policy and statutory tests are read from the sources.\n\nThe hotel is suburban in a secondary market, so Exhibit L gives it a protected radius of 5 radial miles.[4] A same-brand application lands 6.2 miles away: outside the protected area, so Choice may approve it, but inside the 10-mile secondary notice radius, so the owner gets written notice and a right to object.[4]\n\nAssume rooms revenue of $2,400,000 in the twelve months before the new hotel opens and $2,208,000 in the twelve months after. The decline is $192,000, which is 8.00 percent.\n\nRun the policy test. 5 percent of $2,400,000 is $120,000, and the $192,000 decline is above it, so a study projecting that result would require Choice to deny the application.[4] On a new-construction agreement signed within the prior 18 months the test tightens to 3 percent, which is $72,000.[4]\n\nNow put the hotel in Iowa under an agreement signed after July 1, 2000.[5] The six percent screen is $144,000, and the 8.00 percent decline clears it. Compensable sales are $2,400,000 less $144,000 less $2,208,000, which is $48,000.[5] At an assumed 38 percent profit flow-through that is $18,240 a year, and the three-year cap makes the award $54,720.[5]\n\nThen price the asset. At an assumed 55 percent flow-through, the $192,000 revenue decline is $105,600 of net operating income. Capitalized at 8.25 percent, the top of the Q1 2026 Matthews Hotel Index band for Austin select-service, that is $1,280,000 of value, or $13,474 a key across 95 keys.\n\nThe gap is the point. The value effect is 23.4 times the statutory cap on the same facts, and in 49 states there is no statutory cap to compare it with. The protection that matters is the clause in the agreement and the objection filed inside 15 days, not the lawsuit afterwards."
  },
  faq: [
    {
      q: "Does my hotel franchise come with a protected territory?",
      a: "Usually not. The 2026 Hampton, Hilton Garden Inn and Tru documents, issued March 30, 2026, say the standard franchise agreement grants no protected area, and Choice's Comfort document prints the same prescribed sentence.[1][2][3][4]"
    },
    {
      q: "Why do all the disclosure documents use identical wording?",
      a: "Because 16 CFR 436.5(l)(5)(i) prescribes it. A franchisor granting no exclusive territory must state that you will not receive one and may face competition from other franchisees, outlets it owns, or brands it controls.[6]"
    },
    {
      q: "How close can Choice approve a same-brand hotel?",
      a: "Outside your Area of Enhanced Protection, which the April 2025 policy sets at half a mile to 7 radial miles by market type. Inside it, Choice runs an impact study if you formally object.[4]"
    },
    {
      q: "What happens if an impact study goes against me and the hotel opens?",
      a: "Choice's policy lets you request a second study between 365 and 400 days after the opening. If it finds more than a 5 percent first-year reduction in gross room revenues, you may terminate without liquidated damages.[4]"
    },
    {
      q: "Does a Restricted Area Provision cover the franchisor's other brands?",
      a: "No. For Hampton the clause defines Brand as Hampton, Hampton Inn and Hampton Inn & Suites, and excludes every chain with Hilton in the name, such as Hilton Garden Inn and Homewood Suites by Hilton.[1]"
    },
    {
      q: "I am buying an existing Hampton. Do I inherit the seller's protected area?",
      a: "Treat it as no until an addendum proves otherwise. Hilton will not normally grant a Restricted Area Provision on a change of ownership or re-licensing.[1]"
    },
    {
      q: "Can I sue my franchisor for opening one next door?",
      a: "In Iowa, sometimes. Iowa Code 537A.10(6) gives a damages claim where a same-brand opening in unreasonable proximity cuts gross sales by more than six percent, capped at three years of proven lost profits.[5]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "2026 US Hampton Franchise Disclosure Document, issuance date March 30, 2026: Item 12 Territory (the no-protected-area sentence, the Restricted Area Provision and its four paragraphs, the six exclusions including the four-or-more-hotels carve-out, the Brand definition, the sentence on not extending the restrictive period, the IMPORTANT NOTES block and the absence of a conflict-resolution mechanism) and Item 20 Tables 1 and 5 for Hampton Inn and Hampton Inn & Suites",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-11-03"
    },
    {
      n: 2,
      label: "2026 US Hilton Garden Inn Franchise Disclosure Document, issuance date March 30, 2026: Item 12 Territory, including the separate non-exclusive grant for a restaurant brand outlet and the same Restricted Area Provision mechanic",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-HGI.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-11-03"
    },
    {
      n: 3,
      label: "2026 US Tru Franchise Disclosure Document, issuance date March 30, 2026: Item 12 Territory, carrying the same no-protected-area sentence and the same restrictive-period language",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2026/03/2026-US-FDD-Tru.pdf",
      publisher: "Hilton Franchise Holding LLC",
      accessed: "2026-11-03"
    },
    {
      n: 4,
      label: "Comfort Franchise Disclosure Document, issuance date April 1, 2026, as registered with the Minnesota Department of Commerce: Item 12 Territory, the franchise agreement's section 19(b) Limited Rights acknowledgment, Item 20 Tables 1 and 5, and Exhibit L, the Incremental Impact Policy updated April 2025 (Area of Enhanced Protection chart, notice radii, the 5 and 3 percent tests, the objection and study clock, the second study, the declining-market right, the covered brands, and the statement that it is an internal policy rather than a contractual obligation)",
      url: "https://cards.web.commerce.state.mn.us/documents/%7BB0A9219E-0000-C61B-8F69-FDCF9E1C6035%7D/download?documentClass=FRANCHISE_REGISTRATIONS&contentSequence=0",
      publisher: "Choice Hotels International, Inc., via the Minnesota Department of Commerce",
      accessed: "2026-11-03"
    },
    {
      n: 5,
      label: "Iowa Code section 537A.10, franchises: subsection 2 on agreements entered on or after July 1, 2000, subsection 6 on encroachment (the unreasonable-proximity element, the four defenses, the six percent screen, the compensable-sales formula, the three-year cap and the eighteen-month limitation), and subsections 4, 13 and 14 on void waivers, the private civil action with costs and fees, and void foreign choice of law",
      url: "https://www.legis.iowa.gov/docs/code/537A.pdf",
      publisher: "Iowa Legislature, Iowa Code 2026",
      accessed: "2026-11-03"
    },
    {
      n: 6,
      label: "16 CFR 436.5, FTC Franchise Rule disclosure items: paragraph (l), Item 12 Territory, including the sentence prescribed at (l)(5)(i) for a franchisor that grants no exclusive territory and the conflict-resolution description required at (l)(6)(iii)(F)",
      url: "https://www.law.cornell.edu/cfr/text/16/436.5",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-11-03"
    },
    {
      n: 7,
      label: "Iowa Code chapter 523H, franchises: section 523H.6 on encroachment, which governs agreements entered before July 1, 2000 on a five percent screen, and section 523H.2A on the July 1, 2000 cutover to section 537A.10",
      url: "https://www.legis.iowa.gov/docs/code/523H.pdf",
      publisher: "Iowa Legislature, Iowa Code 2026",
      accessed: "2026-11-03"
    }
  ],
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/owner-franchisor-management-company",
      "/hotel-industry/hotel-management-agreements",
      "/hotel-industry/chain-scales-and-classes",
      "/hotel-industry/revpar-adr-occupancy"
    ],
    glossary: [
      "/glossary/franchise-agreement",
      "/glossary/franchise-fdd",
      "/glossary/comp-set",
      "/glossary/revpar"
    ],
    data: ["/research/mhi/q1-2026", "/rates"]
  },
  cta: { label: "Talk to the hospitality team", href: "/contact" },
  brandSentence:
    "Matthews Hotel Markets reads the franchise agreement and any restricted area addendum before it prices a hotel, and gives a free broker opinion of value on hotels from $2 million."
};

export default page;
