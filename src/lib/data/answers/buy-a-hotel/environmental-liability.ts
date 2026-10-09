/**
 * Am I liable for contamination on a hotel I buy?
 * Answer page: /buy-a-hotel/environmental-liability
 *
 * Every figure and rule here was read out of a primary source in the run that
 * wrote this file (2026-10-09):
 *   - 42 U.S.C. 9607, read on Cornell LII, for strict owner liability in
 *     subsection (a), the three defenses in (b), the contiguous property owner
 *     route in (q) and the bona fide prospective purchaser bar plus the
 *     windfall lien in (r);
 *   - 42 U.S.C. 9601, same source, for the eight bona fide prospective
 *     purchaser criteria in paragraph (40)(B), the petroleum and natural gas
 *     carve-out from "hazardous substance" in paragraph (14), and the lender
 *     exclusion in paragraph (20)(F);
 *   - 40 CFR 312.20, .21, .22, .26 and .10 and .11, same source, for the all
 *     appropriate inquiries process: the one-year and 180-day clocks, what the
 *     report must contain, the buyer's own four inquiries, the government
 *     record search distances, the four routes to qualifying as an
 *     environmental professional (carried in the FAQ rather than as its own
 *     section, to keep the page inside the length the page spec sets), and the
 *     ASTM standards the rule names;
 *   - the EPA Brownfields all appropriate inquiries page, for the three
 *     landowner protections and EPA's own statement that CERCLA liability can
 *     attach on ownership alone;
 *   - SBA SOP 50 10 8.1, effective October 1, 2026, downloaded from the SBA
 *     and read as the governing edition, for the environmental investigation
 *     ladder (Section A, Chapter 5, Paragraph E, page 105), the environmental
 *     definitions in Appendix 4 (page 288), the reliance letter in Appendix 5
 *     (page 295), the sensitive-industry NAICS list in Appendix 6 (page 299)
 *     and the indemnification agreement in Appendix 8 (page 305). The central
 *     finding: NAICS 721110, hotels and motels, is NOT on the Appendix 6 list,
 *     so an SBA hotel loan does not automatically start with a Phase I;
 *   - 40 CFR 280.10 and 280.12, for the tank rules a hotel's standby-generator
 *     fuel tank falls into and the heating-oil tank that is not a federal UST;
 *
 * The worked example was recomputed line by line with
 * scripts/check-env-liability-math.mjs before saving. Do not hand-edit a
 * number without re-reading its source and bumping `lastUpdated`.
 *
 * Kept off the page on purpose: the asbestos work-practice rules in 40 CFR 61
 * subpart M, which a property improvement plan can trigger. That is a Clean Air
 * Act notification duty rather than a contamination liability, it has no page of
 * its own yet, and it belongs on one.
 *
 * Deliberately absent: the cost of a Phase I, a Phase II or a remediation; the
 * share of hotels that carry a recognized environmental condition; any lender's
 * environmental policy outside SBA's published SOP; and any "typical" holdback
 * or indemnity cap. None of those is published, and the page says so.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "environmental-liability",
  cluster: "buy-a-hotel",
  isHub: false,
  title: "Hotel Environmental Liability for Buyers",
  description:
    "Who pays to clean up contamination at a hotel, the eight bona fide prospective purchaser criteria, and when an SBA lender orders a Phase I.",
  h1: "Am I liable for contamination on a hotel I buy?",
  lastUpdated: "2026-10-09",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Am I liable for contamination on a hotel I buy?",
    "Do I need a Phase I environmental report to buy a hotel?",
    "What is the bona fide prospective purchaser defense?",
    "Does an SBA loan on a hotel require a Phase I?",
    "How long is a Phase I environmental site assessment good for?",
    "Can I get a loan on a hotel that is being cleaned up?",
    "Who pays to clean up contamination at a hotel I bought?",
  ],
  answer:
    "Yes, by default. CERCLA makes the current owner liable for cleanup whoever caused it.[1] A buyer escapes that only as a bona fide prospective purchaser, which takes all eight criteria in section 101(40), including all appropriate inquiries finished within one year before closing.[2][3] SBA's SOP 50 10 8.1, effective October 1, 2026, sets what a hotel lender must order.[4]",
  takeaways: [
    "Liability follows ownership, not fault. EPA says liability for contamination may be assigned based solely on property ownership.[5]",
    "The defense is a list, not a report. All eight criteria in section 101(40)(B) have to be proved, and five describe what you do after closing.[2]",
    "A Phase I has two clocks: one year before the acquisition date for the whole inquiry, 180 days for the records review, interviews, lien search and site visit.[3]",
    "An SBA hotel loan does not start with a Phase I. NAICS 721110 is not on SBA's sensitive-industry list, so above $250,000 the work begins with a questionnaire and a records search.[4]",
    "Petroleum is outside CERCLA, so a leaking fuel tank is a state-law and tank-rule problem instead.[2]",
  ],
  sections: [
    {
      h2: "Who is liable for cleaning up contamination at a hotel?",
      lead: "The current owner is liable under CERCLA, whatever caused the contamination and whoever caused it.",
      body: "Section 107(a) of CERCLA makes the owner and operator of a facility liable for the government's removal and remedial costs, other necessary response costs and natural resource damages, subject only to the defenses in section 107(b).[1] EPA states the point without hedging: liability may be assigned based solely on property ownership.[5] The defenses are an act of God, an act of war, and an act or omission of an unrelated third party, and the third works only if the defendant proves it exercised due care and took precautions.[1] A buyer who did nothing wrong is still the owner.\n\nTwo limits matter to a hotel. The definition of hazardous substance excludes petroleum and natural gas,[2] so a leaking gasoline or diesel tank sits outside CERCLA and inside state law and the federal tank rules. And a lender is not an owner or operator while it holds a mortgage only to protect its security interest and does not participate in management,[2] which is why the lender puts the environmental work on the borrower rather than carrying the risk itself.",
    },
    {
      h2: "What does the bona fide prospective purchaser defense require?",
      lead: "All eight criteria in CERCLA section 101(40)(B), proved by a preponderance of the evidence, for a facility acquired after January 11, 2002.",
      body: "The eight, in the statute's order: all disposal happened before you acquired the facility; you made all appropriate inquiries into previous ownership and uses; you give every legally required notice about a discovery or release; you exercise appropriate care by taking reasonable steps to stop a continuing release, prevent a threatened one and limit exposure; you give full cooperation, assistance and access to people authorized to run a response action; you comply with land use restrictions and do not impede an institutional control; you comply with information requests and administrative subpoenas; and you are not affiliated with a potentially liable party through family, contract, corporate or financial ties beyond the ties the conveyance creates.[2]\n\nSection 107(r)(1) is what the criteria buy: a purchaser whose only exposure is being treated as the owner is not liable, so long as it does not impede a response action.[1] What the status does not buy: if the United States cleans the site and the work raises the hotel's fair market value, it takes a lien for its unrecovered costs, capped at that increase in value.[1]\n\nThe neighbouring routes turn on knowledge. An innocent landowner under section 101(35)(A) and a contiguous property owner under section 107(q) each have to show they had no reason to know about the contamination before buying, and section 107(q)(1)(C) sends a buyer who did know to this route instead.[1][5] A bona fide prospective purchaser may buy knowing exactly what is in the ground.[5]",
    },
    {
      h2: "What counts as all appropriate inquiries?",
      lead: "The process in 40 CFR part 312, which a Phase I environmental site assessment written to ASTM E1527-21 is designed to satisfy.",
      body: "All appropriate inquiries has three parts: an inquiry by an environmental professional, the buyer's own collection of information, and a search for recorded environmental cleanup liens, all conducted within one year before the date you take title.[3] Five components run on a tighter clock and must be conducted or updated within 180 days before that date: interviews with past and present owners, operators and occupants; the lien search; reviews of federal, tribal, state and local government records; visual inspections of the property and of adjoining properties; and the professional's declaration.[3] A report that satisfied the rule for a deal that slipped two quarters does not automatically satisfy the deal that closed.\n\n40 CFR 312.11 names ASTM E1527-21 for a Phase I, and E2247-23 for forestland and rural property, as standards that may be used to comply.[6] The report must carry an opinion on whether the inquiry found conditions indicative of releases or threatened releases, the data gaps and what they do to that opinion, and the professional's qualifications.[7] Records are searched within one mile for National Priorities List and RCRA corrective action sites, within half a mile for state cleanup and brownfields sites, leaking tanks and engineering control registries, and on adjoining properties for registered tanks and RCRA generators.[8]\n\nFour inquiries belong to the buyer, not the consultant: the lien search, specialized knowledge, whether the price reasonably reflects what the property would be worth uncontaminated, and commonly known local information.[9] A price well under what the asset would fetch clean is a fact the rule makes you confront.",
    },
    {
      h2: "Does my SBA lender have to order a Phase I on a hotel?",
      lead: "No. A hotel's NAICS code is not on SBA's sensitive-industry list, so above $250,000 the work begins with a questionnaire and a records search.",
      body: "SOP 50 10 8.1 took effect October 1, 2026 and is the governing edition. It requires an environmental investigation of every commercial property taken as security for a 7(a) loan or a 504 debenture, and sets minimums rather than a ceiling.[4] The lender first identifies, in good faith, the NAICS codes for the property's current and known prior uses and compares them with Appendix 6, which lists dry cleaning where it has ever been on site, automotive repair, chemical manufacturing, marinas and about fifty other industries. NAICS 721110, hotels and motels, is not on it.[4] Where nothing matches, the loan amount picks the starting point: up to $250,000 the work may begin with an environmental questionnaire, and above $250,000 it must begin with a questionnaire and a records search with risk assessment.[4]\n\nTwo footnotes do more work than the list. A Phase I should always be obtained where the business sells, supplies or dispenses fuel, gasoline or heating oil, whatever its NAICS code.[4] And where a prior use matches, the investigation must begin with a Phase I regardless of loan amount, so a hotel on a former gas station pad starts with one plus the Appendix 7 gas station requirements.[4]\n\nThe records search is no light document: the databases 40 CFR 312.26 lists for a compliant Phase I, plus historical sources back to the property's first developed use or to 1940, whichever is earlier, ending in a grade of low, elevated or high risk. Anything other than low risk means a Phase I, and the search must be dated within one year of the date the SBA loan number is issued, a different clock from the acquisition-date clock in 40 CFR 312.20.[3][4] One trap sits in the questionnaire: the current owner or operator has to sign it, and if the seller will not, the lender must obtain at least a Transaction Screen to ASTM E1528-22 instead.[4] [Documents needed to sell a hotel](/sell-a-hotel/documents-needed) is the list to hand over first.",
    },
    {
      h2: "What happens if the report finds contamination?",
      lead: "SBA will not lend on a contaminated property unless the risk is minimized to its satisfaction, and the cash route is a 150 percent escrow.",
      body: "The environmental professional first documents whether the contamination exceeds reportable or actionable levels, whether remediation is necessary, an estimate of the cost and the projected completion date, and the lender recommends a course of action covering the remediation plan, who is paying, and what any engineering or institutional control does to repayment ability, collateral value and marketability.[4]\n\nSBA weighs eight mitigating factors: a third party with the assets to honour it signs SBA's unmodifiable indemnification agreement, and that indemnitor cannot be the applicant or the operating company; remediation is complete in writing with a first year of monitoring results; there is a no further action or closure letter; contamination and cost are both de minimis and remediation will finish within a year; a cleanup fund has allocated enough; an escrow holds at least 150 percent of the estimate, controlled by the 7(a) lender or the 504 first mortgage holder as trustee, with no SBA loan proceeds in it; the contamination came from another site and someone else is remediating it; or extra collateral or equity covers the loss.[4] Two details get missed: SBA says more than 150 percent may be appropriate, so 150 percent is a floor, and nothing is released until the closure letter arrives or every monitoring well is decommissioned.[4] Outside the SBA programs no lender publishes an environmental policy, so what a bank or a debt fund will accept here is a question for that lender. [Hotel lenders by type](/hotel-financing/hotel-lenders-by-type) sets out who they are.",
    },
    {
      h2: "What do I still owe after closing?",
      lead: "Bona fide prospective purchaser status is a continuing duty, not a closing document.",
      body: "Five of the eight criteria describe conduct that starts the day you own the hotel: the notices, appropriate care to stop a continuing release and prevent a threatened one, cooperation and access for a response action, compliance with land use restrictions and institutional controls, and answers to information requests and subpoenas.[2] Stop satisfying one and the status goes, and the section 107(r)(1) liability bar with it.[1][2] The diligence that won the status is the cheap part.\n\nTanks come with the keys. Federal underground storage tank rules reach a tank storing fuel solely for an emergency power generator: one installed on or before October 13, 2015 had to meet the subpart D requirements by October 13, 2018, and one installed later had to meet every applicable requirement at installation.[11] A tank of 110 gallons or less is excluded, as is equipment such as a hydraulic lift tank.[11] A tank storing heating oil for consumptive use on the premises where it is stored is not a federal underground storage tank at all,[12] though a state may regulate it anyway. The owner is whoever owns a tank system used to store, use or dispense a regulated substance,[12] which becomes the buyer at closing.",
    },
  ],
  table: {
    caption:
      "Where an SBA environmental investigation on a hotel starts, and what escalates it (SOP 50 10 8.1, effective October 1, 2026)",
    columns: [
      "Situation at the hotel",
      "Where the investigation starts",
      "What escalates it",
    ],
    rows: [
      [
        "No sensitive prior use, loan of $250,000 or less",
        "Environmental questionnaire, signed by the current owner or operator[4]",
        "Any answer showing further investigation is warranted means at least a records search with risk assessment[4]",
      ],
      [
        "No sensitive prior use, loan above $250,000",
        "Environmental questionnaire plus a records search with risk assessment[4]",
        "A grade of anything other than low risk means a Phase I[4]",
      ],
      [
        "Current owner or operator will not sign the questionnaire",
        "Transaction Screen to ASTM E1528-22, with the site reconnaissance supervised by an environmental professional[4]",
        "A conclusion that further investigation is warranted means a Phase I[4]",
      ],
      [
        "A prior use matches Appendix 6, for example dry cleaning ever on site",
        "Phase I, regardless of the loan amount[4]",
        "A recommendation for further investigation means a Phase II, or an exception from SBA's Environmental Committee[4]",
      ],
      [
        "A gas station on the site now or in the past (NAICS beginning 457)",
        "Phase I plus the gas station requirements in Appendix 7[4]",
        "Same as above[4]",
      ],
      [
        "The business sells, supplies or dispenses fuel, gasoline or heating oil",
        "Phase I, whatever the NAICS code says[4]",
        "Same as above[4]",
      ],
      [
        "A Phase II confirms contamination",
        "No approval and no disbursement unless the risk is minimized to SBA's satisfaction[4]",
        "One of eight mitigating factors, including an escrow of at least 150 percent of the estimated remediation cost[4]",
      ],
    ],
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet records the rulebook this page runs on: SBA's SOP 50 10 8.1 took effect October 1, 2026. As of September 30, 2026 the sheet shows the 10-year Treasury at 5.29 percent and Prime at 7.00 percent, capping a variable-rate 7(a) loan above $350,000 at 10.00 percent.[13] None of that moves while an escrow holds the file.",
  },
  workedExample: {
    label:
      "Hypothetical: 92-key select-service hotel, $7,400,000, former dry cleaner next door, $5,000,000 SBA 7(a) loan",
    body: "Hypothetical figures, used to show the arithmetic. The price is $7,400,000 divided by 92 keys, or $80,435 a key. Closing is March 2, 2027.\n\nNAICS 721110 is not on the Appendix 6 list, so the investigation does not start with a Phase I. It starts with an environmental questionnaire plus a records search with risk assessment, because the loan is above $250,000.[4] The search finds a dry cleaner on the adjoining parcel from 1968 to 1994, so the professional grades the hotel elevated risk rather than low risk. A Phase I is now required, it identifies a recognized environmental condition, and the Phase II confirms contamination at an estimated $240,000 over 14 months.[4]\n\nBecause the work will not be finished at closing, SBA's escrow route needs at least 150 percent of the estimate: $240,000 times 1.50 is $360,000.[4] That is $120,000 more than the cleanup is expected to cost, it cannot be funded with SBA loan proceeds, and it equals 4.86 percent of the purchase price ($360,000 divided by $7,400,000). None of it comes back until the closure letter arrives or every monitoring well is decommissioned.[4]\n\nNow the clocks. The professional's inquiry has to fall within one year before the March 2, 2027 acquisition date, so no earlier than March 2, 2026, and the records review, interviews, lien search, inspections and declaration within 180 days, so no earlier than September 3, 2026.[3] A Phase I dated May 2026 satisfies the one-year clock and fails the 180-day one, and the fix is an update, not a new report.[3] Who funds the $360,000 is negotiated, and no public source publishes what hotel parties agree there, so this page prints no typical split.",
  },
  faq: [
    {
      q: "Do I need a Phase I to buy a hotel?",
      a: "Not in every case. A Phase I to ASTM E1527-21 is how a buyer satisfies all appropriate inquiries.[3][6] An SBA lender on a hotel may start with a questionnaire and a records search instead.[4]",
    },
    {
      q: "Am I liable if the previous owner caused the contamination?",
      a: "Yes, unless a defense applies. Section 107(a) reaches the current owner, and EPA says liability may attach on ownership alone.[1][5] Section 101(40)(B) is the way out.[2]",
    },
    {
      q: "How long is a Phase I good for?",
      a: "One year for the inquiry as a whole, counted back from the date you take title. Five components, including the records review and the site visit, must be updated within 180 days.[3]",
    },
    {
      q: "Does the defense cover a leaking fuel tank?",
      a: "Not under CERCLA. The definition of hazardous substance excludes petroleum and natural gas, so a gasoline or diesel release is a state-law and federal tank-rule question.[2][11]",
    },
    {
      q: "Can I get an SBA loan on a hotel being cleaned up?",
      a: "Only if the risk is minimized to SBA's satisfaction. The escrow route needs at least 150 percent of the remediation estimate, held by the lender as trustee, with no loan proceeds in it.[4]",
    },
    {
      q: "Does my hotel's generator tank make me a tank owner?",
      a: "If it is underground, yes. A tank storing fuel solely for an emergency generator is covered, and the owner is whoever owns a tank system used to store a regulated substance.[11][12]",
    },
    {
      q: "Who can sign a Phase I report?",
      a: "An environmental professional under 40 CFR 312.10: a Professional Engineer or Geologist licence plus three years, a licence to perform environmental inquiries plus three years, an engineering or science degree plus five years, or ten years of experience.[10]",
    },
    {
      q: "Can the seller's Phase I be used for my loan?",
      a: "Only with SBA's standard reliance letter, whose language may not be modified and which is required even if the report is addressed to the lender.[4] The professional must also be impartial and insured for one million dollars per claim.[4]",
    },
  ],
  sources: [
    {
      n: 1,
      label:
        "42 U.S.C. 9607 (CERCLA section 107): subsection (a) making the owner and operator liable for removal and remedial costs, other response costs, natural resource damages and health assessments; the three defenses in (b); the contiguous property owner conditions in (q), including (q)(1)(C) routing a buyer with knowledge to the bona fide prospective purchaser provisions; and (r)(1) barring liability for a bona fide prospective purchaser that does not impede a response action, with the windfall lien in (r)(2) to (r)(4) capped at the increase in fair market value",
      url: "https://www.law.cornell.edu/uscode/text/42/9607",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-09",
    },
    {
      n: 2,
      label:
        "42 U.S.C. 9601: paragraph (40) defining a bona fide prospective purchaser, including acquisition after January 11, 2002, the leasehold route and the eight criteria in (40)(B); paragraph (14) excluding petroleum, crude oil fractions not separately listed, natural gas and natural gas liquids from hazardous substance; paragraph (20)(F) excluding a lender holding indicia of ownership to protect a security interest without participating in management",
      url: "https://www.law.cornell.edu/uscode/text/42/9601",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-09",
    },
    {
      n: 3,
      label:
        "40 CFR 312.20: all appropriate inquiries must be conducted within one year before the date of acquisition and must include the environmental professional's inquiry, the buyer's collection of information and a cleanup lien search, with interviews, the lien search, the government records review, the visual inspections and the professional's declaration conducted or updated within 180 days before acquisition",
      url: "https://www.law.cornell.edu/cfr/text/40/312.20",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-09",
    },
    {
      n: 4,
      label:
        "SBA SOP 50 10 8.1, effective October 1, 2026: Environmental Policies and Procedures (Section A, Chapter 5, Paragraph E, page 105), covering the NAICS comparison against Appendix 6, the $250,000 line between an environmental questionnaire and a questionnaire plus records search with risk assessment, the gas station and fuel-dispensing Phase I triggers, the escalation to Phase I and Phase II, and the eight mitigating factors including the escrow of at least 150 percent of the estimated remediation cost; Appendix 4 environmental definitions (page 288) for Records Search with Risk Assessment, Transaction Screen (ASTM E1528-22), Phase I ESA (ASTM E1527-21), Environmental Questionnaire and Environmental Professional, including impartiality and one million dollars per claim in errors and omissions coverage; Appendix 5 Reliance Letter (page 295); Appendix 6 NAICS Codes of Environmentally Sensitive Industries (page 299), which does not list NAICS 721110; Appendix 7 gas station requirements (page 303); Appendix 8 SBA Environmental Indemnification Agreement (page 305)",
      url: "https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-10-09",
    },
    {
      n: 5,
      label:
        "Brownfields All Appropriate Inquiries: EPA's statement that strict liability under CERCLA means liability may be assigned based solely on property ownership, that ASTM E1527-21 and E2247-23 are consistent with the all appropriate inquiries final rule, and that the three landowner protections are the innocent landowner, the contiguous property owner and the bona fide prospective purchaser, who may buy with knowledge of the contamination",
      url: "https://www.epa.gov/brownfields/all-appropriate-inquiries",
      publisher: "U.S. Environmental Protection Agency",
      accessed: "2026-10-09",
    },
    {
      n: 6,
      label:
        "40 CFR 312.11: the industry standards that may be used to comply with 40 CFR 312.23 through 312.31, being ASTM E1527-21 for a Phase I environmental site assessment and ASTM E2247-23 for forestland and rural property",
      url: "https://www.law.cornell.edu/cfr/text/40/312.11",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-09",
    },
    {
      n: 7,
      label:
        "40 CFR 312.21: the environmental professional's inquiry and the three things the written report must contain at a minimum, being the opinion on conditions indicative of releases or threatened releases, the identification of data gaps with comment on their significance, and the professional's qualifications",
      url: "https://www.law.cornell.edu/cfr/text/40/312.21",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-09",
    },
    {
      n: 8,
      label:
        "40 CFR 312.26: the federal, tribal, state and local records to review and the search distances, being one mile for National Priorities List and RCRA corrective action sites, half a mile for state and tribal voluntary cleanup and brownfields sites, leaking underground storage tanks, delisted National Priorities List sites and engineering control registries, and adjoining properties for registered storage tanks and RCRA generators, with the distances modifiable on documented professional judgment",
      url: "https://www.law.cornell.edu/cfr/text/40/312.26",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-09",
    },
    {
      n: 9,
      label:
        "40 CFR 312.22: the four additional inquiries the prospective purchaser must conduct, being the environmental cleanup lien search, specialized knowledge or experience, the relationship of the purchase price to the fair market value of the property if it were not contaminated, and commonly known or reasonably ascertainable information",
      url: "https://www.law.cornell.edu/cfr/text/40/312.22",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-09",
    },
    {
      n: 10,
      label:
        "40 CFR 312.10: the definition of an environmental professional, with the four qualification routes (Professional Engineer or Professional Geologist licence plus three years, a licence or certification to perform environmental inquiries plus three years, a baccalaureate or higher degree in engineering or science plus five years, or ten years of full-time relevant experience), the supervision rule for someone who does not qualify, and the note that the definition does not preempt state licensing law",
      url: "https://www.law.cornell.edu/cfr/text/40/312.10",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-09",
    },
    {
      n: 11,
      label:
        "40 CFR 280.10: the underground storage tank requirements apply to all owners and operators of a UST system, with tanks storing fuel solely for emergency power generators required to meet subpart D by October 13, 2018 if installed on or before October 13, 2015 and all applicable requirements at installation if installed later, and exclusions for systems of 110 gallons or less and for equipment such as hydraulic lift tanks",
      url: "https://www.law.cornell.edu/cfr/text/40/280.10",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-09",
    },
    {
      n: 12,
      label:
        "40 CFR 280.12: the definition of an underground storage tank, which excludes a tank used for storing heating oil for consumptive use on the premises where stored, and the definition of owner as any person who owns a UST system used for storage, use or dispensing of regulated substances",
      url: "https://www.law.cornell.edu/cfr/text/40/280.12",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-09",
    },
    {
      n: 13,
      label:
        "Matthews Hotel Markets hotel debt rate sheet, October 2026 edition: the 10-year Treasury at 5.29% and Prime at 7.00% as of September 30, 2026, the 10.00% SBA 7(a) maximum on a variable-rate loan above $350,000, and the changelog note that SOP 50 10 8.1 took effect October 1, 2026",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-10-09",
    },
  ],
  related: {
    hub: "/buy-a-hotel",
    siblings: [
      "/buy-a-hotel/due-diligence-checklist",
      "/buy-a-hotel/how-to-make-an-offer",
      "/buy-a-hotel/how-to-underwrite-a-hotel-deal",
      "/buy-a-hotel/buying-a-hotel-from-receivership-or-foreclosure",
    ],
    glossary: ["/glossary/sba-7a", "/glossary/sba-504"],
    data: ["/rates"],
  },
  cta: {
    label: "Talk to the capital markets desk about your hotel purchase",
    href: "/contact",
  },
  brandSentence:
    "Matthews Hotel Markets arranges hotel debt from $5 million and sells hotels from $2 million, and an environmental report a lender cannot rely on stops either one, whatever the rate sheet says that week.",
};
