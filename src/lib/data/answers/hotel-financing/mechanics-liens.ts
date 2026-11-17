/**
 * What happens if a contractor files a lien on my hotel?
 * Answer page: /hotel-financing/mechanics-liens
 *
 * Written 2026-11-17 from the current statutes of Minnesota, Washington and
 * Florida, 11 U.S.C. 362 and 546, and the Florida CFO's September 4, 2026
 * judgment-interest memo. Every figure in the worked example is recomputed by
 * scripts/check-mechanics-lien-math.mjs.
 *
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "mechanics-liens",
  cluster: "hotel-financing",
  isHub: false,
  title: "Mechanic's Lien on a Hotel: What Happens",
  description: "A contractor's lien on a hotel: when it attaches, the recording deadline in three states, whether it outranks your mortgage, and what clearing it costs.",
  h1: "What happens if a contractor files a lien on my hotel?",
  lastUpdated: "2026-11-17",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "What happens if a contractor files a lien on my hotel?",
    "How long does a contractor have to file a mechanic's lien on a hotel?",
    "Can a mechanic's lien beat my hotel mortgage?",
    "How do I get a lien removed from my hotel so I can sell it?",
    "Can a subcontractor lien my hotel if I already paid the general contractor?",
    "Does a contractor lien stop a hotel refinance from closing?",
    "What does it cost to bond around a mechanic's lien?"
  ],
  answer: "A recorded mechanic's lien clouds a hotel's title until it is paid, bonded over or it expires. Minnesota gives a claimant 120 days from its last work to record; Washington and Florida give 90, in statutes read on November 17, 2026.[1][2][3] In Minnesota and Washington the lien can outrank a mortgage recorded after work began.[4][5] In Washington, clearing it takes a bond of 1.5 times the claim.[6]",
  takeaways: [
    "The lien attaches to the hotel, not to you. It covers alteration, repair and fixtures, which is exactly what a brand property improvement plan is.[7]",
    "Starting work before the loan records is the costly mistake. Minnesota and Washington relate the lien back to the start of work, so it sits ahead of a later mortgage.[4][5] Florida runs priority off the notice of commencement instead.[8]",
    "Paying the general contractor in full does not stop a subcontractor's lien. The owner's protection is withholding and signed waivers, not the check.[9]",
    "The clock is short. 120 days in Minnesota, 90 in Washington and Florida, measured from the claimant's own last day of work, not from the project's.[1][2][3]",
    "No lender, title underwriter or surety publishes what it charges to insure or bond over a recorded lien, so no such number appears here."
  ],
  sections: [
    {
      h2: "What is a mechanic's lien, and what does it do to a hotel?",
      lead: "It is a statutory claim against the hotel itself, recorded by someone who worked on it and was not paid, and it clouds title until it is paid, bonded over or expires.",
      body: "Minnesota's lien statute reaches anyone who contributes to an improvement by performing labor or furnishing skill, material or machinery, and it names the alteration or repair of a building or fixture.[7] A brand [PIP](/glossary/pip) is both, and much of a hotel renovation becomes a fixture once installed.\n\nThe bite is not the lawsuit. The lien runs with the land, so it does not care whether you paid your general contractor, and a buyer's title company and a refinancing lender both have to clear it before anyone funds. That is why a lien recorded in month eight of a renovation surfaces as a closing problem on the [refinance](/hotel-financing/refinance), not a construction problem."
    },
    {
      h2: "When does the lien attach, and can it outrank my lender?",
      lead: "In Minnesota and Washington it can, because both relate the lien back to when work started rather than to when it was recorded; Florida measures priority from the recorded notice of commencement.",
      body: "Minnesota says a lien attaches from the time the first item of material or labor is furnished for the beginning of the improvement, and is preferred to any mortgage not then of record.[4] Against a mortgagee without notice it attaches no earlier than the actual and visible beginning of the improvement on the ground, and staking, engineering, surveying and soil testing do not count as that beginning.[4] A site survey does not start the clock; the first day of demolition does.\n\nWashington is blunter and runs per claimant: a lien is prior to any mortgage or deed of trust that attached after that claimant commenced labor or first delivered materials.[5] Florida inverts it. Liens take priority as of recordation of the notice of commencement, and anything recorded before that, with its proceeds whenever disbursed, keeps priority.[8] A Florida construction lender that records first is protected on every later draw; a Washington one is not.\n\nA franchise deadline is what does the damage. A PIP completion date pushes an owner to start work before the loan documents are signed, and in a relation-back state that one decision puts every lien from the job ahead of the lender. Hence the lender's affidavit that no work has commenced. A leasehold hotel carries the risk in reverse: Florida protects the fee owner only where the lease expressly prohibits liability for the tenant's improvements and was recorded before the notice of commencement, and a lienor that demands a verified copy of that clause and does not get it within 30 days can lien the fee.[10] On a [ground-leased hotel](/sell-a-hotel/selling-a-hotel-on-a-ground-lease) that clause matters more than the rent."
    },
    {
      h2: "How long does a contractor have to record one?",
      lead: "120 days after its last work in Minnesota, 90 days in Washington and Florida, and in every case measured from that claimant's own last item, not from the end of the job.",
      body: "Minnesota's lien ceases 120 days after the last item furnished unless, inside that period, a statement of claim is recorded and a copy served on the owner, giving the dates of the claimant's first and last contributions.[1] Washington requires recording not later than 90 days after the claimant ceased to furnish labor, services, materials or equipment.[2] Florida allows recording any time during the work but not later than 90 days after that lienor's final furnishing.[3]\n\nThe per-claimant measurement is the trap for a hotel. A renovation runs in phases so the hotel can keep selling rooms, so a flooring subcontractor finishes floors two and three in August while the project runs to February. The August subcontractor's window closed in the autumn; a January supplier's is still open. There is no one deadline to diary.\n\nEnforcement is a second, longer clock. Minnesota gives one year from the last item in the recorded statement.[11] Washington gives eight calendar months from recording, tolled by a bankruptcy petition from an owner.[12] Florida gives a year, but an owner can record a notice of contest that cuts the lienor's time to sue to 60 days from service, after which the lien is extinguished automatically: 305 fewer days of clouded title, for the cost of a recording.[13]"
    },
    {
      h2: "Will I get any warning before a lien is recorded?",
      lead: "In Minnesota and Florida, yes, and the warning is a statutory prerequisite to the lien; in Washington the subcontractors most likely to lien a hotel do not have to warn you at all.",
      body: "Minnesota requires the contractor to put a notice in the written contract, or deliver it within ten days of agreeing the work, telling the owner that suppliers can lien the property and that the owner may pay them directly and deduct it from the contract price. A contractor that fails to give it has no lien at all.[9] Anyone not in direct contract with the owner must give its own notice within 45 days of first furnishing, naming itself, the contractor, the work and its estimated charges.[9] Florida requires the same of all lienors except laborers.[14]\n\nWashington is the outlier. Its notice may be given at any time but protects only what was supplied after a date 60 days before it is given, and it is not required at all of subcontractors who contract directly with the prime contractor.[15] On a hotel PIP that is the whole first tier, so a Washington owner can be served with a recorded lien having had no notice at all. Where notices do arrive, keep them: in Minnesota and Florida they are a roster, with dollar estimates, of everyone who can lien the hotel."
    },
    {
      h2: "What does it cost to clear one so a deal can close?",
      lead: "In Washington, a bond of 1.5 times the claim; in Florida, the claim plus three years of statutory interest plus the greater of $5,000 or 25 percent; in Minnesota, chapter 514 provides no release bond at all.",
      body: "Washington lets an owner record a surety bond that releases the property, for the greater of $5,000 or twice a claim of $10,000 or less, and at least one and a half times a claim above that.[6] Florida lets any interested party transfer the lien to a deposit or bond equal to the amount demanded, plus interest at the legal rate for three years, plus the greater of $5,000 or 25 percent for fees and costs.[16] That rate is set quarterly by the Chief Financial Officer,[17] and was 7.87 percent per annum for the quarter beginning October 1, 2026.[18] On a $385,000 claim the two statutes land within one percent of each other.\n\nMinnesota has no equivalent. Read end to end, chapter 514 contains no section that releases a recorded lien against a bond.[19] What it gives the owner instead is leverage before the lien exists: the owner may withhold from the contractor as much of the contract price as the other claimants demand, may pay and discharge those liens and deduct the cost, and need not pay the contractor at all until 120 days after completion except to the extent it hands over signed waivers.[20] That is free, and the only one of these tools that works before a lien reaches the title.\n\nWhat a surety charges for the bond, what a title company charges to insure over a lien, and what a lender will accept instead of a release are privately negotiated and unpublished, so no figure for them appears here."
    },
    {
      h2: "Can an unpaid subcontractor reach my construction lender?",
      lead: "In Washington it can, and getting it wrong subordinates the lender's own deed of trust to the lien.",
      body: "Where a construction lender has no payment bond of at least 50 percent of the financing, a claimant five days late being paid may, within 35 days of the due date, serve notice on the lender, the owner and the prime contractor stating the sum due and requiring the lender to withhold it from future draws.[21] The lender must then withhold that amount from the next and later draws while undisbursed funds remain, or obtain a payment bond for the claimant instead, and may not release the money without a court order or the written agreement of the claimant, the owner and the prime contractor.[21]\n\nIf the lender disburses anyway, its mortgage or deed of trust is subordinated to that claimant's lien to the extent wrongfully disbursed, capped at the amount stated in the notice plus costs and fees.[21] An administrative slip at a bank becomes a priority loss, so copy the lender on every notice received, and ask about the rule before signing a construction or [PIP loan](/hotel-financing/pip-and-renovation-loans)."
    },
    {
      h2: "What happens to the liens if the hotel files chapter 11?",
      lead: "They survive, and a claimant can still perfect one after the filing, because the automatic stay carries an express exception for exactly this.",
      body: "Filing does not freeze a half-perfected lien into harmlessness. The automatic stay does not apply to any act to perfect an interest in property to the extent the trustee's rights are subject to that perfection under section 546(b).[22] Section 546(b) in turn defers to any generally applicable law that lets perfection be effective against someone who acquired rights earlier, and where that law requires an action to be commenced, perfection is accomplished by giving notice within the time the law fixes.[23] A relation-back lien statute is that kind of law, so a petition does not clear the title. It does stop one clock in Washington: the eight months to foreclose is tolled by a petition from an owner.[12] Price these liens as what they are, secured claims dated before the loan, which [chapter 11 for a hotel](/hotel-financing/chapter-11-bankruptcy) and a [loan workout](/hotel-financing/loan-workouts) cover further."
    },
    {
      h2: "A lien is on my hotel and I need to close. What now?",
      lead: "Date the claim, check whether it was recorded and served in time, use the statutory levers, and price bonding against delay.",
      body: "Pull the claim and read the first and last furnishing dates on its face: a claim recorded outside the 120 or 90 day window, or not served on the owner where the statute requires service, is vulnerable on its own terms.[1][2][3] Check what you still hold, because an unpaid contract balance is the cheapest currency there is and in Minnesota the 120-day withholding right is statutory.[20] In Florida, record a notice of contest and start the 60-day clock.[13] Then choose between bonding over the lien and holding the closing open.\n\nThat decision is arithmetic. Bonding ties up cash for the life of the dispute; delay costs interest on whatever loan the hotel sits on while the permanent money waits. A [broker opinion of value](/hotel-valuation/broker-opinion-of-value) and a current debt quote give you both halves, and [closing costs](/hotel-financing/closing-costs) lists the other items that clear title the same day. None of this is legal advice: a recorded lien is work for the hotel's own construction counsel."
    }
  ],
  table: {
    caption: "Mechanic's lien rules for a hotel renovation, three states, statutes read November 17, 2026",
    columns: [
      "Test",
      "Minnesota",
      "Washington",
      "Florida"
    ],
    rows: [
      [
        "When the lien attaches",
        "First item of labor or material for the beginning of the improvement; against a mortgagee without notice, the actual and visible beginning on the ground[4]",
        "That claimant's commencement of labor or first delivery of materials[5]",
        "Recordation of the notice of commencement; if none was recorded, recordation of the claim of lien[8]"
      ],
      [
        "Priority against a mortgage",
        "Preferred to any mortgage not of record when the lien attached[4]",
        "Prior to any mortgage or deed of trust attaching after commencement[5]",
        "Anything recorded before the lien attached keeps priority, and so do its proceeds whenever disbursed[8]"
      ],
      [
        "Deadline to record",
        "120 days after the claimant's last item, and the statement must also be served on the owner[1]",
        "90 days after the claimant ceased to furnish[2]",
        "90 days after that lienor's final furnishing[3]"
      ],
      [
        "Advance notice to the owner",
        "Required of anyone not in direct contract with the owner within 45 days, with estimated charges; no notice from the contractor, no lien[9]",
        "Not required of subcontractors in direct contract with the prime contractor; otherwise protects only the last 60 days[15]",
        "Required of all lienors except laborers, before commencing or within 45 days[14]"
      ],
      [
        "Deadline to enforce",
        "One year from the last item in the recorded statement[11]",
        "Eight calendar months from recording, tolled by an owner's bankruptcy petition[12]",
        "One year from recording, or 60 days from service of an owner's notice of contest[13]"
      ],
      [
        "Releasing the lien against security",
        "Chapter 514 provides none; the levers are withholding and an action to remove[19][20]",
        "Bond of 1.5 times a claim above $10,000; the greater of $5,000 or 2 times at or below[6]",
        "The claim, plus 3 years of interest at the statutory rate, plus the greater of $5,000 or 25 percent[16]"
      ],
      [
        "Reaching the construction lender",
        "No statutory notice to the lender",
        "Notice requires the lender to withhold; failure subordinates its deed of trust up to the notice amount[21]",
        "No statutory notice to the lender"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' October 2026 rate sheet puts SOFR at 3.90% as of September 30, 2026, which is the index half of the floating-rate loan a hotel keeps paying while a lien holds up its permanent financing; the spread on top is lender-set and the sheet marks it not yet published, as it does every lender-set term.[24]"
  },
  workedExample: {
    label: "Hypothetical: 118-key hotel, brand PIP, Washington state",
    body: "Hypothetical, with labeled assumptions. A 118-key select-service hotel runs a brand PIP on a $4,720,000 contract, $40,000 a key. There is no payment bond, and half of the $3,800,000 construction loan would be $1,900,000, so Washington's notice-to-lender rule applies.[21]\n\nDemolition on floors two and three starts March 2, 2026. The deed of trust records March 16, 2026, fourteen days later. Under RCW 60.04.061 every claimant who had commenced by March 16 ranks ahead of the lender.[5]\n\nA flooring subcontractor is left $385,000 short, which is $3,262.71 a key and 8.16 percent of the contract. Its last day on site is August 14, 2026, and it records a claim of lien on October 30, 2026, day 77 of the 90 allowed, with 13 days to spare; the window would have closed November 12.[2] In Minnesota it would have had 120 days.[1]\n\nTo close the refinance the owner records a release bond: 1.5 times $385,000, so $577,500, tying up $192,500 above the claim and $4,894.07 a key.[6] The identical claim in Florida transfers to security for $385,000, plus $90,898.50 of interest (three years at 7.87 percent), plus $96,250 (the greater of $5,000 or 25 percent), so $572,148.50, or 1.49 times the claim.[16][18] Two statutes, $5,351.50 apart in practice.\n\nThe subcontractor had also served a notice to the lender on September 1, 2026, when $900,000 of the construction loan was undisbursed. The lender paid out $640,000 after that. Under RCW 60.04.221(7) the deed of trust is subordinated to the extent wrongfully disbursed, capped at the $385,000 in the notice, so $385,000 of a first lien moves behind a flooring subcontractor and the cap spares $255,000 of the disbursement.[21]\n\nCost of waiting instead: on a $9,000,000 refinance, 30 days of the index alone at 3.90 percent is $29,250, or $247.88 a key, before any lender spread. Every figure here is recomputed by scripts/check-mechanics-lien-math.mjs."
  },
  faq: [
    {
      q: "Can a subcontractor lien my hotel if I already paid the general contractor?",
      a: "Yes. The lien belongs to the unpaid party, not to your payment record. Minnesota lets an owner pay claimants directly, deduct it from the contract price, and withhold from the contractor until 120 days after completion absent signed waivers.[20]"
    },
    {
      q: "How long does a contractor have to file a lien on a hotel?",
      a: "120 days after its last work in Minnesota, 90 days in Washington and Florida.[1][2][3] Each window runs from that claimant's own last day, so a phased hotel renovation has many deadlines, not one."
    },
    {
      q: "Can a mechanic's lien outrank my hotel mortgage?",
      a: "In Minnesota and Washington, yes, if work began before the mortgage recorded.[4][5] In Florida a mortgage recorded before the notice of commencement keeps priority, including on later draws.[8]"
    },
    {
      q: "Will a lien stop my hotel refinance or sale from closing?",
      a: "Usually. It clouds title, so the title company and the lender need it paid, released, bonded over or transferred to security before funding. Washington's release bond is 1.5 times the claim.[6]"
    },
    {
      q: "How do I get a lien off my hotel quickly?",
      a: "Pay it, bond over it where the state allows, or force the deadline. A Florida owner can record a notice of contest, which cuts the lienor's time to sue to 60 days and then extinguishes the lien automatically.[13]"
    },
    {
      q: "Does filing chapter 11 wipe out construction liens on a hotel?",
      a: "No. The automatic stay expressly excepts acts to perfect an interest the trustee's powers are subject to under section 546(b), and that section defers to relation-back lien statutes.[22][23]"
    }
  ],
  sources: [
    { n: 1, label: "Minn. Stat. 514.08, Statement; notice; necessity for recording; contents (120 days, subd. 1)", url: "https://www.revisor.mn.gov/statutes/cite/514.08", publisher: "Office of the Revisor of Statutes, State of Minnesota", accessed: "2026-11-17" },
    { n: 2, label: "RCW 60.04.091, Claim of lien, recording (90 days)", url: "https://app.leg.wa.gov/RCW/default.aspx?cite=60.04.091", publisher: "Washington State Legislature", accessed: "2026-11-17" },
    { n: 3, label: "Fla. Stat. 713.08, Claim of lien (90 days after final furnishing, subs. (5))", url: "https://www.flsenate.gov/Laws/Statutes/2026/713.08", publisher: "The Florida Senate", accessed: "2026-11-17" },
    { n: 4, label: "Minn. Stat. 514.05, When lien attaches; notice (relation back, and the staking exception in subd. 2)", url: "https://www.revisor.mn.gov/statutes/cite/514.05", publisher: "Office of the Revisor of Statutes, State of Minnesota", accessed: "2026-11-17" },
    { n: 5, label: "RCW 60.04.061, Priority of lien", url: "https://app.leg.wa.gov/RCW/default.aspx?cite=60.04.061", publisher: "Washington State Legislature", accessed: "2026-11-17" },
    { n: 6, label: "RCW 60.04.161, Bond in lieu of claim", url: "https://app.leg.wa.gov/RCW/default.aspx?cite=60.04.161", publisher: "Washington State Legislature", accessed: "2026-11-17" },
    { n: 7, label: "Minn. Stat. 514.01, Mechanics, laborers and material suppliers", url: "https://www.revisor.mn.gov/statutes/cite/514.01", publisher: "Office of the Revisor of Statutes, State of Minnesota", accessed: "2026-11-17" },
    { n: 8, label: "Fla. Stat. 713.07, Priority of liens", url: "https://www.flsenate.gov/Laws/Statutes/2026/713.07", publisher: "The Florida Senate", accessed: "2026-11-17" },
    { n: 9, label: "Minn. Stat. 514.011, Notice (contractor's notice in subd. 1; the 45-day subcontractor notice in subd. 2)", url: "https://www.revisor.mn.gov/statutes/cite/514.011", publisher: "Office of the Revisor of Statutes, State of Minnesota", accessed: "2026-11-17" },
    { n: 10, label: "Fla. Stat. 713.10, Extent of liens (the lessor's interest, and the 30-day verified-copy demand)", url: "https://www.flsenate.gov/Laws/Statutes/2026/713.10", publisher: "The Florida Senate", accessed: "2026-11-17" },
    { n: 11, label: "Minn. Stat. 514.12, Notice of lis pendens (the one-year limitation in subd. 3)", url: "https://www.revisor.mn.gov/statutes/cite/514.12", publisher: "Office of the Revisor of Statutes, State of Minnesota", accessed: "2026-11-17" },
    { n: 12, label: "RCW 60.04.141, Lien, duration, procedure to enforce (eight calendar months; tolled by a title 11 petition)", url: "https://app.leg.wa.gov/RCW/default.aspx?cite=60.04.141", publisher: "Washington State Legislature", accessed: "2026-11-17" },
    { n: 13, label: "Fla. Stat. 713.22, Duration of lien (the notice of contest and its 60 days, subs. (2))", url: "https://www.flsenate.gov/Laws/Statutes/2026/713.22", publisher: "The Florida Senate", accessed: "2026-11-17" },
    { n: 14, label: "Fla. Stat. 713.06, Laborers' and materialmen's liens (the notice to owner, subs. (2)(a))", url: "https://www.flsenate.gov/Laws/Statutes/2026/713.06", publisher: "The Florida Senate", accessed: "2026-11-17" },
    { n: 15, label: "RCW 60.04.031, Notice of right to claim lien (the 60-day lookback, and the subcontractor exemption in subs. (2)(c))", url: "https://app.leg.wa.gov/RCW/default.aspx?cite=60.04.031", publisher: "Washington State Legislature", accessed: "2026-11-17" },
    { n: 16, label: "Fla. Stat. 713.24, Transfer of liens to security", url: "https://www.flsenate.gov/Laws/Statutes/2026/713.24", publisher: "The Florida Senate", accessed: "2026-11-17" },
    { n: 17, label: "Fla. Stat. 55.03, Judgments; rate of interest, generally (the quarterly rate, subs. (1))", url: "https://www.flsenate.gov/Laws/Statutes/2026/55.03", publisher: "The Florida Senate", accessed: "2026-11-17" },
    { n: 18, label: "Judgment interest rate for the quarter beginning October 1, 2026: 7.87 percent per annum (Agency Addressed memo No. 7, 2026-2027, September 4, 2026)", url: "https://myfloridacfo.com/docs-sf/accounting-and-auditing-libraries/state-agencies/agency-memos/aam07---26-27.pdf", publisher: "Florida Department of Financial Services, Division of Accounting and Auditing", accessed: "2026-11-17" },
    { n: 19, label: "Minnesota Statutes chapter 514, Liens against property, full chapter text (read end to end; no section releases a recorded mechanic's lien against a bond)", url: "https://www.revisor.mn.gov/statutes/cite/514/full", publisher: "Office of the Revisor of Statutes, State of Minnesota", accessed: "2026-11-17" },
    { n: 20, label: "Minn. Stat. 514.07, Payments withheld; lien waivers", url: "https://www.revisor.mn.gov/statutes/cite/514.07", publisher: "Office of the Revisor of Statutes, State of Minnesota", accessed: "2026-11-17" },
    { n: 21, label: "RCW 60.04.221, Notice to lender (the duty to withhold in subs. (5), and subordination for failure in subs. (7))", url: "https://app.leg.wa.gov/RCW/default.aspx?cite=60.04.221", publisher: "Washington State Legislature", accessed: "2026-11-17" },
    { n: 22, label: "11 U.S.C. 362, Automatic stay (the perfection exception, subs. (b)(3))", url: "https://www.law.cornell.edu/uscode/text/11/362", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-17" },
    { n: 23, label: "11 U.S.C. 546, Limitations on avoiding powers (subs. (b))", url: "https://www.law.cornell.edu/uscode/text/11/546", publisher: "United States Code, via Legal Information Institute", accessed: "2026-11-17" },
    { n: 24, label: "Matthews Hotel Markets hotel loan rate sheet, October 2026 edition", url: "/rates", publisher: "Matthews Hotel Markets", accessed: "2026-11-17" }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/construction-loans",
      "/hotel-financing/pip-and-renovation-loans",
      "/hotel-financing/closing-costs",
      "/hotel-financing/refinance",
      "/hotel-financing/chapter-11-bankruptcy",
      "/hotel-financing/loan-workouts",
      "/hotel-financing/brand-conversion-financing"
    ],
    glossary: [
      "/glossary/pip",
      "/glossary/ground-lease",
      "/glossary/noi"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Talk to the capital markets desk",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets arranges the construction and PIP debt that pays these contractors, and sells hotels when an owner decides the renovation is someone else's project; clearing a recorded lien is work for the hotel's construction counsel, not for a brokerage."
};

export default page;
