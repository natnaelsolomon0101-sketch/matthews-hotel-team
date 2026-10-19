/**
 * Do asbestos rules apply to my hotel renovation?
 * Answer page: /hotel-industry/asbestos-renovation-rules
 *
 * The page the 2026-10-09 environmental-liability run said belonged on the
 * site: the Clean Air Act work-practice and notification rules a property
 * improvement plan can trigger. Before this file, "asbestos" appeared in two
 * files under src/lib/data/, both times as one clause inside a page about
 * something else, and "NESHAP" in none.
 *
 * Every figure and rule here was read out of a primary source in the run that
 * wrote this file (2026-10-19). Each CFR section was read twice: once on
 * Cornell LII, which is the URL cited because it answers a scripted reader,
 * and once through the eCFR versioner API against the 2026-10-01 issue of
 * titles 29 and 40, to confirm Cornell's mirror is current. The two agreed on
 * every threshold, deadline and dollar figure below.
 *
 *   - 40 CFR 61.145, for the unconditional pre-work inspection in (a), the
 *     260 linear foot / 160 square foot / 35 cubic foot thresholds in (a)(1),
 *     (a)(2) and (a)(4), the calendar-year aggregation in (a)(4)(iii), the
 *     emergency estimate in (a)(4)(iv), the 10 working days' notice and the
 *     20 percent update rule in (b), and the remove-first and adequately-wet
 *     duties in (c) with the trained on-site representative in (c)(8);
 *   - 40 CFR 61.141, for "facility" (which reaches every hotel and excludes
 *     only residential buildings of four or fewer dwelling units),
 *     "demolition" (any load-supporting structural member), "renovation",
 *     RACM, Category I and Category II nonfriable ACM, "resilient floor
 *     covering", and the definition of "working day" that makes holidays
 *     count;
 *   - 40 CFR 61.04, for where the notice goes: the EPA Regional Office in
 *     duplicate under (a), and also the State agency where the standard is
 *     delegated under (b);
 *   - 40 CFR 61.148 and 61.146, for the two narrow product bans, which are
 *     why a 1990s hotel can still hold asbestos-containing material;
 *   - 40 CFR 61.150, for the waste duties: disposal at a 61.154 site, the
 *     waste shipment record, the 35-day inquiry, the 45-day written report
 *     and the 2-year retention;
 *   - 29 CFR 1926.1101, for the PELs in (c), Class I through IV in (b), PACM
 *     and the 1980 construction date, the building owner's duties in (k)(2),
 *     the mechanical-room signs in (k)(6), the 10-day close-out notice in
 *     (k)(3)(iii), the 24-hour discovery notice in (k)(4), the rebuttal
 *     route in (k)(5)(ii), the 25 linear / 10 square foot containment line in
 *     (g)(4)(ii), the general contractor's supervisory duty in (d)(5), and
 *     the records that pass to successive owners in (n)(6);
 *   - 15 U.S.C. 2646(a) and 15 U.S.C. 2642(10), for the accreditation bar and
 *     the definition that makes a hotel a public and commercial building;
 *   - 40 CFR 19.4 Table 1 and 29 CFR 1903.15(d), for the current penalty
 *     figures;
 *   - 8 CCR 341.6, for California's 100 square foot registration trigger and
 *     its 1/10th of 1 percent definition.
 *
 * Trimmed from eight sections to six and from 3,474 words to fit the page
 * spec's 2,500-word ceiling. Nothing cut was a citation, a figure or an
 * internal link; the accreditation section was folded into the OSHA section
 * and the state section into the penalties section.
 *
 * The worked example was recomputed line by line with
 * scripts/check-asbestos-math.mjs before saving. Do not hand-edit a number
 * without re-reading its source and bumping `lastUpdated`.
 *
 * Deliberately absent: what a survey, an abatement project or a clearance
 * test costs; how long a delegated agency takes to process a notice; what
 * share of hotels of a given vintage hold asbestos-containing material; and
 * any lender's requirement that a survey be in file before a renovation
 * draw. None of those is published, and the page says so. The page also does
 * not say the 10-working-day count excludes the postmark day: the rule says
 * "at least 10 working days before" and the agencies differ, so the example
 * budgets the conservative count and says why.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "asbestos-renovation-rules",
  cluster: "hotel-industry",
  isHub: false,
  title: "Asbestos Rules for a Hotel Renovation",
  description:
    "The pre-work inspection has no size threshold, the 10 working days' notice starts at 260 linear or 160 square feet, and the records follow the hotel.",
  h1: "Do asbestos rules apply to my hotel renovation?",
  lastUpdated: "2026-10-19",
  authorSlug: "miles-cortez",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Do I need an asbestos survey before a hotel renovation?",
    "What is the 10 day asbestos notification rule?",
    "How much asbestos triggers the NESHAP notification?",
    "Does a hotel PIP require asbestos abatement?",
    "My hotel was built in 1974, do I have to test before renovating?",
    "Who is responsible for asbestos, the hotel owner or the contractor?",
    "What are the penalties for not notifying before asbestos removal?"
  ],
  answer:
    "Yes, and the first duty has no size threshold. 40 CFR 61.145(a) requires a thorough inspection of the work area before any hotel renovation begins, whatever the hotel's age.[1] Written notice and the federal work practices start once regulated material reaches 260 linear feet on pipes or 160 square feet elsewhere.[1] On October 19, 2026 the Clean Air Act maximum is $124,426 a day.[2]",
  takeaways: [
    "The inspection in 40 CFR 61.145(a) carries no minimum quantity and no construction-date cutoff. The thresholds decide whether you file a notice, not whether you look.[1]",
    "Three numbers set the notice: 260 linear feet of regulated material on pipes, 160 square feet on other components, or 35 cubic feet where the area could not be measured first.[1]",
    "Taking out a load-supporting member makes the job a demolition, and a demolition below the thresholds still owes a notice 10 working days out.[1][3]",
    "OSHA puts the determination on the building owner, not the contractor, and presumes pipe and surfacing material in buildings built no later than 1980 to be asbestos-containing until tested.[4]"
  ],
  sections: [
    {
      h2: "What does the federal rule make me do before work starts?",
      lead: "Inspect the affected area for asbestos, including the nonfriable kinds, before the renovation begins.",
      body: "40 CFR 61.145(a) opens with a duty that sits in front of every threshold in the section: prior to the commencement of the demolition or renovation, thoroughly inspect the affected facility, or the part of it where the work will occur, for the presence of asbestos, including Category I and Category II nonfriable asbestos-containing material.[1] There is no square-footage floor on that sentence and no construction-date cutoff. The quantities that follow decide which duties attach, not whether the inspection happens.\n\nA hotel is always inside the rule. 40 CFR 61.141 defines a facility as any institutional, commercial, public, industrial or residential structure, installation or building, and the only carve-out is a residential building with four or fewer dwelling units.[3]\n\nThe duty is narrower than asbestos in general. The section regulates RACM, which 61.141 defines as friable asbestos material, Category I nonfriable material that has become friable or that will be sanded, ground, cut or abraded, and Category II nonfriable material with a high probability of being crumbled, pulverized or reduced to powder.[3] Category I is a short list by name: packings, gaskets, resilient floor covering and asphalt roofing products, each above 1 percent asbestos.[3]"
    },
    {
      h2: "At what point do I have to file the 10 working days' notice?",
      lead: "Once the combined RACM reaches 260 linear feet on pipes, 160 square feet on other facility components, or 35 cubic feet off components.",
      body: "Those three figures appear twice in 61.145, once for a demolition and once for a renovation; the metric originals are 80 linear meters, 15 square meters and 1 cubic meter.[1] Reach any one and the full set of notification duties and work practices applies. The notice is written, goes out at least 10 working days before stripping, removal or any other activity that would disturb the material, and is updated whenever the affected amount changes by at least 20 percent.[1]\n\nTwo mechanics catch owners who assume a small job is a small job. For planned renovations made up of individual nonscheduled operations, which is what a maintenance program on failing pipe insulation is, 61.145(a)(4)(iii) says to predict the combined additive amount for the calendar year from January 1 through December 31, so twenty small repairs can cross 260 linear feet when no single one comes close. For an emergency, the amount is estimated from the sudden unexpected event that made the work necessary.[1]\n\nThe notice goes to the Administrator, which means two addresses. 40 CFR 61.04(a) sends part 61 submissions in duplicate to the EPA Regional Office, and (b) says that where the standard has been delegated the same information also goes to the State agency, unless the Administrator permits the State filing alone.[5] Most states hold the delegation, so start with the state or local air district, which may run its own form, fee and threshold."
    },
    {
      h2: "Is a PIP a renovation or a demolition?",
      lead: "It is a renovation until somebody takes out a load-supporting member, and then it is a demolition with a notice of its own.",
      body: "40 CFR 61.141 draws the line at structure. Renovation means altering a facility or one or more facility components in any way, including stripping RACM from a component, and operations in which load-supporting structural members are wrecked or taken out are demolitions.[3] A soft-goods cycle and a bathroom gut are renovations. Opening a corridor by removing a bearing wall is a demolition.\n\nThe difference shows up below the thresholds. A renovation under 260 linear feet and 160 square feet owes no notice and no work practices, only the inspection. A demolition under the same thresholds still owes one: 61.145(a)(2) requires the filing 10 working days before demolition begins, even where the answer is that there is no asbestos at all.[1] So the one hotel job that always produces a filing is the one with no asbestos and a wall coming out.\n\nWhere the thresholds are met, the sequence is fixed. Remove all RACM before any activity begins that would break it up, dislodge it, or cut off access to it for later removal.[1] Four exceptions are listed, and the useful one for a hotel is Category I nonfriable material that is not friable and not in poor condition, which the rule defines as a binding losing integrity through peeling, cracking or crumbling.[1][3] Material that does come out has to be adequately wet and kept wet until it is contained, and at least one trained on-site representative has to be present whenever it is handled, with refresher training every two years.[1] Paying for the scope is a separate question, covered at [PIP and renovation financing](/hotel-financing/pip-and-renovation-loans)."
    },
    {
      h2: "What does OSHA require of me as the building owner?",
      lead: "Determine what is there before work begins, tell everyone who will be exposed, and use an accredited inspector if you want to rebut the presumption.",
      body: "29 CFR 1926.1101 is the worker-protection half, and it does not treat the owner as a bystander. Paragraph (k)(1)(i) says employers and building owners shall identify thermal system insulation and sprayed or troweled-on surfacing materials as asbestos-containing unless a rebuttal says otherwise, and that asphalt and vinyl flooring installed no later than 1980 must be treated the same way until verified.[4] The presumption has a name, PACM: insulation and surfacing material in buildings constructed no later than 1980.[4] Paragraph (k)(2) puts the duty plainly. Before work begins the owner determines the presence, location and quantity of asbestos-containing material or PACM, and notifies the employers bidding the work, their own employees, other employers on site and tenants.[4]\n\nThe standard sorts the work into four classes, from Class I removal of insulation and surfacing material down to Class IV cleanup, and Class I crosses into full containment well below the Clean Air Act threshold: more than 25 linear or 10 square feet brings critical barriers or a verified equivalent, supervised by a competent person.[4] The limits are 0.1 fiber per cubic centimeter as an eight-hour average and 1.0 over 30 minutes.[4] Two duties run back to the owner: within 10 days of finishing, the contractor reports what material is left and the monitoring results, and anyone who finds material mid-job has 24 hours to say so.[4]\n\nRebutting the presumption takes a credential, not an opinion. 15 U.S.C. 2646(a) bars anyone from inspecting a public or commercial building for asbestos-containing material unless accredited, and 15 U.S.C. 2642(10) defines that term as any building that is not a school, excluding apartment buildings under 10 units, which puts every hotel inside it.[6][7] The rebuttal needs an inspection meeting the schools rule, or bulk samples taken by an accredited inspector or a certified industrial hygienist and analyzed by a laboratory in a recognized proficiency program.[4] No agency publishes what a survey, an abatement project or a clearance test costs, or how long an air district takes to process a notice. Get both in writing before the schedule is set."
    },
    {
      h2: "What happens to the waste, and what do I have to keep?",
      lead: "The hotel is the waste generator, so the shipment records and the two follow-up clocks belong to the owner.",
      body: "40 CFR 61.150 requires asbestos-containing waste material to go, as soon as practical, to a disposal site run under 61.154 or to an EPA-approved conversion site, with the exception of Category I nonfriable material that is not RACM.[8] The generator keeps a waste shipment record naming the administering agency, the quantity in cubic yards, the disposal site, the date, the transporter and a shipping certification.[8]\n\nTwo clocks then run, and both are the generator's. If the signed copy has not come back from the disposal site within 35 days of the date the initial transporter took the waste, contact the transporter or the site. If it still has not come back at 45 days, report that in writing to the local, State or EPA Regional office, with a copy of the record and a cover letter explaining what you did to find the shipment. Every record is kept at least two years.[8]\n\nOSHA's records follow the building. 29 CFR 1926.1101(n)(6) says the written records of the notifications about the identification, location and quantity of asbestos-containing material and PACM shall be maintained by the building owner for the duration of ownership and shall be transferred to successive owners.[4] That turns a survey into a transaction document: a buyer's counsel asking for the asbestos file is asking for something the seller is required to have, and the absence of it is a finding. It belongs beside the reports in [the due diligence checklist](/buy-a-hotel/due-diligence-checklist) and the environmental work in [contamination liability](/buy-a-hotel/environmental-liability)."
    },
    {
      h2: "What does getting this wrong cost, and does my state add more?",
      lead: "Up to $124,426 a day under the Clean Air Act, $16,550 per serious job-safety violation, and in California a registration that starts at 100 square feet.",
      body: "40 CFR 19.4 Table 1 carries EPA's inflation-adjusted figures. For Clean Air Act section 113(b) the maximum is $124,426 a day, in the latest column of the table as it reads on October 19, 2026. The administrative route at 113(d)(1) runs $59,114 with a $472,901 ceiling and field citations under 113(d)(3) reach $11,823, all last adjusted at 90 FR 1377 on January 8, 2025.[2] On the labor side, 29 CFR 1903.15(d) sets the maximums for penalties proposed after January 15, 2025: $16,550 for a serious or other-than-serious violation, $16,550 a day for a failure to correct, and not less than $11,823 and not more than $165,514 for a willful or repeated one, last adjusted at 90 FR 1861 on January 10, 2025.[9] The general contractor does not absorb this: it is deemed to exercise general supervisory authority over asbestos work and must ascertain whether the asbestos contractor is complying.[4]\n\nBecause the standard is delegated, the state program is the one that reviews the notice, and it may be stricter.[5] California is the clearest example. Title 8 of the California Code of Regulations, section 341.6, requires an employer to register with the Division of Occupational Safety and Health before beginning asbestos-related work involving 100 square feet or more of surface area of asbestos-containing material, computed across all areas at one worksite, for a term of one year.[10] Two differences matter. The quantity is 100 square feet against the federal 160, and the material is any manufactured construction material above 1/10th of 1 percent asbestos by weight, ten times stricter than the federal more-than-1-percent test.[10][3] Material that is not asbestos-containing for the Clean Air Act can be in California, so check the state and the air district before pricing an abatement scope."
    }
  ],
  table: {
    caption: "Federal and California asbestos triggers on a hotel renovation, read October 19, 2026",
    columns: ["Trigger", "Threshold", "What it sets off", "Source"],
    rows: [
      [
        "Pre-work inspection",
        "None. Any demolition or renovation, any hotel age",
        "Thorough inspection of the affected area for asbestos, including Category I and II nonfriable material",
        "40 CFR 61.145(a)"
      ],
      [
        "Clean Air Act notice and work practices, renovation",
        "260 linear feet of RACM on pipes, or 160 square feet on other components, or 35 cubic feet off components",
        "Written notice at least 10 working days out, plus the remove-first, wetting and trained-representative duties",
        "40 CFR 61.145(a)(4), (b), (c)"
      ],
      [
        "Clean Air Act notice, demolition below the thresholds",
        "Any demolition, including one with no asbestos",
        "Notice 10 working days before demolition begins, under a reduced list of contents",
        "40 CFR 61.145(a)(2)"
      ],
      [
        "Notice update",
        "Affected asbestos amount changes by at least 20 percent",
        "Revised notice to the same agencies",
        "40 CFR 61.145(b)(2)"
      ],
      [
        "Calendar-year aggregation",
        "Combined additive total of nonscheduled operations, January 1 to December 31",
        "A year of small pipe repairs counted as one job against the thresholds",
        "40 CFR 61.145(a)(4)(iii)"
      ],
      [
        "OSHA presumption",
        "Buildings constructed no later than 1980",
        "Pipe insulation and surfacing material treated as asbestos-containing until rebutted by an accredited inspector or CIH",
        "29 CFR 1926.1101(k)(1)(i), (k)(5)(ii)"
      ],
      [
        "OSHA Class I containment",
        "More than 25 linear or 10 square feet of insulation or surfacing material",
        "Critical barriers or a verified equivalent, supervised by a competent person",
        "29 CFR 1926.1101(g)(4)"
      ],
      [
        "Waste shipment follow-up",
        "35 days to inquire, 45 days to report in writing, 2 years to retain",
        "Generator duties that stay with the hotel after the contractor leaves",
        "40 CFR 61.150(d)"
      ],
      [
        "California registration",
        "100 square feet or more of material above 1/10th of 1 percent asbestos",
        "Cal/OSHA registration before work starts, valid one year",
        "8 CCR 341.6"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "A survey finding moves a renovation budget, and the budget is debt. Matthews Hotel Markets' October 2026 rate sheet shows the 10-year Treasury at 5.29 percent and Prime at 7.00 percent as of September 30, 2026, and marks every spread, debt service coverage floor and loan-to-value cell as not yet published, because no lender publishes them. There is also no published lender rule requiring an asbestos survey in file before a renovation draw, so ask yours."
  },
  workedExample: {
    label: "Hypothetical: a 110-key, 1974 hotel taking a full-service PIP",
    body:
      "Hypothetical. The per-key budget, the occupancy and the average daily rate are assumptions, not published figures.\n\nThe survey finds two things. Guest bathrooms hold resilient floor tile: 45 square feet a bath across 110 keys is 4,950 square feet, 30.9 times the 160 square foot threshold. But resilient floor covering is Category I nonfriable material, and Category I is RACM only once it has become friable or is sanded, ground, cut or abraded.[3] Lifted intact and kept wet it does not count; specify a chipping hammer and all 4,950 square feet do. The corridor and riser chases hold 290 linear feet of friable pipe insulation, 30 feet past the 260 linear foot line, so the full notification and work-practice set applies.[1]\n\nThe notice drives the schedule. Postmark Friday, October 16, 2026 and the ten working days are October 19 to 23 and October 26 to 30, so stripping starts Monday, November 2, 2026, 17 calendar days after the postmark. Counting the postmark day itself would make it 14; 17 is the number to budget. Mid-job, another 70 linear feet turns up behind a riser panel, a 24.1 percent increase on 290 feet, so the notice is revised and the total becomes 360 linear feet.[1]\n\nNow price the two outcomes. At an assumed $26,000 a key the work is $2,860,000. Learning the duty after the contractor mobilizes, with 24 rooms already out of service, costs 408 room nights over the 17 days; at an assumed 71 percent occupancy and an assumed $142 average daily rate that is $41,135 of displaced rooms revenue, plus $7,047 of carry for 17 days at the 5.29 percent 10-year Treasury the October 2026 rate sheet prints, so $48,182, or $438 a key. Stripping six working days with no notice on file instead exposes the owner to $124,426 a day, $746,556, which is 26.1 percent of the budget and 15.5 times the cost of filing on time.[2] The ten working days are the cheap path."
  },
  faq: [
    {
      q: "My hotel was built in 1998. Do I still have to inspect?",
      a: "Yes. 40 CFR 61.145(a) sets no construction-date cutoff.[1] The only asbestos product bans in the rule cover friable insulating materials and spray-on application, so gaskets, mastics, roofing and resilient flooring were never banned.[11][12]"
    },
    {
      q: "We are only replacing carpet, paint and case goods. Does the rule reach that?",
      a: "The inspection duty does, because it attaches to any renovation.[1] If nothing regulated is disturbed, no notice is owed. Pulling carpet that sits on 1970s mastic or tile is a different job, and that is what the inspection is for."
    },
    {
      q: "Who files the notice, me or my contractor?",
      a: "Either can. 40 CFR 61.141 defines the owner or operator to include anyone who owns, leases, operates, controls or supervises the facility or the operation.[3] The duty is joint, so confirm in writing who filed and keep the copy."
    },
    {
      q: "Do the 10 working days include weekends and holidays?",
      a: "Weekends do not count. Holidays do, if they fall Monday through Friday, under the definition of working day in 40 CFR 61.141.[3] Ten working days is 14 calendar days at the fastest, and longer if the agency counts only full days after the postmark."
    },
    {
      q: "What if we find asbestos after the job starts?",
      a: "Whoever finds it has 24 hours to tell the building owner and the other employers on site.[4] If the amount changes by 20 percent or more, the Clean Air Act notice is revised.[1]"
    },
    {
      q: "Does the survey transfer when I sell the hotel?",
      a: "Yes. 29 CFR 1926.1101(n)(6) requires the owner's records of asbestos and PACM notifications to be kept for the duration of ownership and transferred to successive owners.[4] A buyer asking for the file is asking for a required document."
    }
  ],
  sources: [
    {
      n: 1,
      label: "40 CFR 61.145, standard for demolition and renovation: the pre-work inspection, the 260 linear foot, 160 square foot and 35 cubic foot thresholds, the 10 working days' notice, the 20 percent update rule and the work practices",
      url: "https://www.law.cornell.edu/cfr/text/40/61.145",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-19"
    },
    {
      n: 2,
      label: "40 CFR 19.4, Table 1: civil monetary penalty inflation adjustments, including Clean Air Act sections 113(b), 113(d)(1) and 113(d)(3)",
      url: "https://www.law.cornell.edu/cfr/text/40/19.4",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-19"
    },
    {
      n: 3,
      label: "40 CFR 61.141, definitions: facility, demolition, renovation, RACM, Category I and Category II nonfriable ACM, resilient floor covering, in poor condition, owner or operator, and working day",
      url: "https://www.law.cornell.edu/cfr/text/40/61.141",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-19"
    },
    {
      n: 4,
      label: "29 CFR 1926.1101, asbestos in construction: exposure limits, work classes, PACM and the 1980 date, the building owner's determination and notification duties, Class I containment, and the records that transfer to successive owners",
      url: "https://www.law.cornell.edu/cfr/text/29/1926.1101",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-19"
    },
    {
      n: 5,
      label: "40 CFR 61.04, address: submissions in duplicate to the EPA Regional Office, and also to the State agency where the standard is delegated",
      url: "https://www.law.cornell.edu/cfr/text/40/61.04",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-19"
    },
    {
      n: 6,
      label: "15 U.S.C. 2646, asbestos contractor and inspector accreditation, including the 1990 extension to public and commercial buildings",
      url: "https://www.law.cornell.edu/uscode/text/15/2646",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-19"
    },
    {
      n: 7,
      label: "15 U.S.C. 2642(10), definition of a public and commercial building",
      url: "https://www.law.cornell.edu/uscode/text/15/2642",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-19"
    },
    {
      n: 8,
      label: "40 CFR 61.150, standard for waste disposal: the disposal site, the waste shipment record, and the 35-day, 45-day and 2-year duties",
      url: "https://www.law.cornell.edu/cfr/text/40/61.150",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-19"
    },
    {
      n: 9,
      label: "29 CFR 1903.15(d), adjusted civil monetary penalties for penalties proposed after January 15, 2025",
      url: "https://www.law.cornell.edu/cfr/text/29/1903.15",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-19"
    },
    {
      n: 10,
      label: "8 CCR 341.6, registration for asbestos-related work: the 100 square foot trigger, the 1/10th of 1 percent definition and the one-year term",
      url: "https://www.dir.ca.gov/title8/341_6.html",
      publisher: "California Department of Industrial Relations",
      accessed: "2026-10-19"
    },
    {
      n: 11,
      label: "40 CFR 61.148, standard for insulating materials",
      url: "https://www.law.cornell.edu/cfr/text/40/61.148",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-19"
    },
    {
      n: 12,
      label: "40 CFR 61.146, standard for spraying",
      url: "https://www.law.cornell.edu/cfr/text/40/61.146",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-19"
    }
  ],
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/ada-requirements",
      "/hotel-industry/energy-benchmarking-and-emissions-limits",
      "/hotel-industry/fire-safety-and-federal-travel",
      "/hotel-industry/hotel-operating-costs",
      "/hotel-industry/owner-franchisor-management-company"
    ],
    glossary: ["/glossary/pip", "/glossary/ffe-reserve", "/glossary/noi"],
    data: ["/rates"]
  },
  cta: {
    label: "Talk to the hospitality team about a renovation budget or a sale",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets arranges the PIP and renovation debt that pays for abatement work, and sells hotels where an open survey is sitting in the buyer's diligence file. We do not inspect buildings, survey for asbestos or give environmental or safety advice, and a hotel owner planning this work needs an accredited inspector and the state air district before anything else."
};

export default page;
