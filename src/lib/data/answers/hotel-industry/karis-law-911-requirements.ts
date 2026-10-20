/**
 * Does Kari's Law apply to my hotel's phone system?
 * Answer page: /hotel-industry/karis-law-911-requirements
 *
 * A total coverage gap before this file. "Kari's Law", "RAY BAUM",
 * "multi-line telephone", "MLTS", "dispatchable location" and "PSAP" each
 * appeared in zero files under src/lib/data/, and "911" in two, both times as
 * a phone number in a contact block rather than as a duty. Every hotel that
 * replaces a phone system walks into this rule, and the rule turns on one
 * date that an owner can check from an invoice.
 *
 * Every figure and rule here was read out of a primary source in the run that
 * wrote this file (2026-10-20). Each CFR section was read twice: once through
 * the eCFR versioner API against the 2026-10-01 issue of title 47, and once
 * on Cornell LII, which is the URL cited because it answers a scripted
 * reader. The two agreed on every date, threshold and dollar figure below.
 *
 *   - 47 CFR 9.15, for the three covered classes of person in (a) and (b) and
 *     the five triggering events plus the February 16, 2020 line in (c);
 *   - 47 CFR 9.16, for the direct-dialing rule in (a)(1) and (b)(1) including
 *     the trunk-access clause, the notification duty and its three timing and
 *     placement tests in (b)(2), and the dispatchable-location deadlines in
 *     (b)(3)(i) through (iii): January 6, 2021 for on-premises fixed
 *     telephones and January 6, 2022 for on-premises non-fixed and
 *     off-premises devices;
 *   - 47 CFR 9.17, for the title V enforcement route in (a)(1), the
 *     presumption against the MLTS manager in (a)(2), the complaint route in
 *     (a)(3), the February 16, 2020 compliance date in (b) and the
 *     preservation of state authority in (c);
 *   - 47 CFR 9.3, for "multi-line telephone system", "dispatchable location",
 *     "MLTS notification" and its three content items, "on-premises", and the
 *     three definitions of a person engaged in the business of installing,
 *     managing and operating an MLTS;
 *   - 47 CFR 1.80, for the catch-all forfeiture ceiling in (b)(10), the
 *     matching 47 U.S.C. 503(b)(2)(D) line in the inflation table at
 *     (b)(12)(ii), the base amounts and adjustment criteria in Tables 1 to 3
 *     to (b)(11), the one-year limitation in (c)(5) and the citation-first
 *     rule for non-licensees in (d);
 *   - 47 U.S.C. 623, for the statute itself and its two-year effective-date
 *     provision, and 47 U.S.C. 1471 for the MLTS definition it borrows;
 *   - the FCC's Report and Order at 84 FR 66716 (December 5, 2019), for the
 *     hotel-specific holdings: paragraph 90 on a passive owner and the AHLA
 *     request the Commission declined, paragraph 93 on contracts being
 *     relevant but not determinative, paragraph 95 on the owner's own tasks,
 *     paragraph 291 on retaining an existing system to end of life, and the
 *     front-desk callback number and room-occupancy notification examples.
 *
 * The worked example was recomputed line by line with
 * scripts/check-karis-law-math.mjs before saving, which also re-checks the
 * template's own limits. Do not hand-edit a number without re-reading its
 * source and bumping `lastUpdated`.
 *
 * The page runs 2,482 words against the spec's 2,500-word ceiling, after
 * three trimming passes from 2,761. Nothing cut was a citation, a figure or
 * an internal link.
 *
 * Deliberately absent. What a phone system or its notification software costs
 * on a hotel: no vendor, agency or standards body publishes it, and the
 * worked example labels its per-station and per-key figures as assumptions.
 * What the FCC would actually assess against a hotel: Tables 1 and 2 to
 * 47 CFR 1.80(b)(11) carry no base amount for a 911 or MLTS violation, so the
 * published numbers are a ceiling and a list of adjustment criteria, nothing
 * more. Whether any franchisor requires a particular telephone specification:
 * that is a brand standard in a franchise agreement, and no franchisor
 * publishes it. Whether a lender conditions a renovation draw on a 911
 * configuration test: that is a lender term, and the rate-sheet block says so.
 * And what a 911 call that failed to connect costs in a lawsuit: that is
 * state tort law, the FCC does not set it, and this page does not price it.
 *
 * The page also does not retell how the statute got its name. The Report and
 * Order does not recount it, no other primary source read this run does
 * either, and AGENTS.md rule 1 is the reason the page says only that the
 * statute is the Kari's Law Act of 2017.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "karis-law-911-requirements",
  cluster: "hotel-industry",
  isHub: false,
  title: "Kari's Law and Hotel Phone Systems",
  description:
    "Kari's Law reaches a hotel phone system installed after February 16, 2020. Direct 911 dialing, a notification someone sees, and the room number.",
  h1: "Does Kari's Law apply to my hotel's phone system?",
  lastUpdated: "2026-10-20",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Does Kari's Law apply to hotels?",
    "Do hotel phones have to dial 911 directly?",
    "What is Kari's Law for a multi-line telephone system?",
    "Does my old hotel PBX have to be replaced for 911?",
    "Who is liable under Kari's Law, the hotel owner or the phone vendor?",
    "What is dispatchable location in a hotel?",
    "What is the fine for a Kari's Law violation?"
  ],
  answer:
    "Only if the system was installed after February 16, 2020. 47 CFR 9.15(c) limits the rule to a multi-line telephone system manufactured, imported, first sold or leased, or installed after that date.[1] An older system may run to the end of its useful life.[2] Replace it and three duties attach: direct 911 dialing, on-site notification, and dispatchable location.[3]",
  takeaways: [
    "The install date decides it. An existing system may run to end of life, and the FCC declined to require any disclosure about its limits.[1][2]",
    "Replacing the phone system is what brings a hotel inside the rule, so the cost belongs in the renovation budget.[2]",
    "A guest-room handset is an on-premises fixed telephone, so it has owed the street address plus the room number since January 6, 2021.[3][4]",
    "47 CFR 9.17(a)(2) presumes the manager responsible, and the FCC said a passive owner who writes compliance into the vendor agreement should not face liability.[5][2]",
    "The ceiling is $25,132 a day and $188,491 for one failure to act, and a hotel gets a citation and usually 30 days first.[6]"
  ],
  sections: [
    {
      h2: "Which hotel phone systems does the rule actually reach?",
      lead: "Only one manufactured, imported, offered for first sale or lease, first sold or leased, or installed after February 16, 2020.",
      body: "The Kari's Law Act of 2017 became law as Public Law 115-127 on February 16, 2018 and is codified at 47 U.S.C. 623.[7] Its effective-date provision applies it to a multi-line telephone system manufactured, imported, offered for first sale or lease, first sold or leased, or installed after the date two years after enactment, which is February 16, 2020.[7] The FCC wrote that date into its rules twice. 47 CFR 9.15 applies subpart F to anyone in the business of manufacturing, importing, selling or leasing these systems, anyone in the business of installing, managing or operating one, and any system crossing one of those five events after February 16, 2020.[1] 47 CFR 9.17(b) names the same compliance date for the whole subpart.[5]\n\nThe covered term is wide. 47 CFR 9.3 defines a multi-line telephone system as common control units, telephone sets, control hardware and software and adjunct systems, including network and premises based systems such as Centrex and VoIP, as well as PBX, hybrid and key telephone systems.[4] 47 U.S.C. 1471, the definition the statute borrows, says the same.[8] A cloud-hosted service counts, and so does the switch in the back office.\n\nThat makes the install date the whole question, and the answer favours an older hotel. The FCC said enterprises have the flexibility to retain an existing system until the end of its useful life should they choose to do so, and it declined to require operators of legacy systems to disclose what those systems cannot do.[2] A 2016 switch that still routes 911 through a trunk-access 9 is not a violation. Replacing it is what starts the clock, which is why this belongs in a [property improvement plan budget](/hotel-financing/pip-and-renovation-loans) rather than arriving as a surprise."
    },
    {
      h2: "What does the rule require once it applies?",
      lead: "Direct 911 dialing, a notification somebody will actually see, and a location precise enough to find the room.",
      body: "Direct dialing comes first. 47 CFR 9.16(b)(1) bars installing, managing or operating one of these systems unless a user may directly initiate a call to 911 from any station equipped with dialing facilities, without dialing any additional digit, code, prefix, or post-fix, including a trunk-access code such as the digit 9, whether or not that digit is required for other calls.[3] The same duty binds manufacturers, importers, sellers and lessors at 9.16(a)(1).[3] Requiring a 9 for an outside line stays legal for every call that is not 911.\n\nNotification comes second, and it is conditional. 9.16(b)(2) requires the system to be configured to notify a central location at the facility or another person or organization regardless of location, if the system can do that without an improvement to its hardware or software.[3] Three tests follow: contemporaneous with the call where technically feasible, no delay to the call, and sent somewhere a person is likely to see or hear it.[3] 47 CFR 9.3 sets the content at three items, the fact that a 911 call has been made, a valid callback number, and the location the system sends to the answering point, with the last two excused only where providing them is technically infeasible.[4] The FCC addressed the hotel case directly: a hotel that does not give each guest room a direct inward dial line may put the number of a central location, such as the front desk, in the notification, and may add more, for example the room's occupancy status.[2]\n\nLocation comes third, on its own timetable, and it traces to section 506 of RAY BAUM's Act rather than to Kari's Law.[2] 9.3 defines dispatchable location as the validated street address plus additional information such as suite, apartment or similar information necessary to identify the caller.[4] 9.16(b)(3) sets three deadlines, all of them past: an on-premises fixed telephone owes automated dispatchable location no later than January 6, 2021, and on-premises non-fixed devices and off-premises devices owe it by January 6, 2022 where technically feasible, and otherwise a manual update or, respectively, alternative or enhanced location information.[3] A guest-room handset sits within the property under one administrative authority, which is what 9.3 means by on-premises, so on a system installed after February 16, 2020 the room number has been owed since January 6, 2021.[3][4]"
    },
    {
      h2: "Who carries the liability, the owner, the management company or the phone vendor?",
      lead: "The rule presumes the person who manages the system, and a hotel that genuinely hands that job to a vendor and writes compliance into the contract is not that person.",
      body: "47 CFR 9.17(a)(2) is short: where a system does not comply with 9.16(b), the person engaged in the business of managing it is presumed responsible for the noncompliance.[5] 47 CFR 9.3 says who that is. Managing means controlling and overseeing implementation of the system after installation, including how lines are distributed, assigning and reassigning telephone numbers, and ongoing network configuration. Installing means configuring the system or getting it ready to operate, which expressly includes establishing the dialing pattern for emergency calls. Operating means day-to-day operations.[4] The duty follows whoever touches the dial plan.\n\nThe hotel question was argued in the docket and answered. The American Hotel and Lodging Association asked the FCC to find that a hotel is not an installer, manager or operator absent compelling evidence to the contrary. The FCC declined, then said something more useful: an enterprise owner has an obligation to hold third-party service providers responsible for complying, and a passive owner generally should not face liability if the owner contracts with a responsible third party and includes compliance requirements in its agreement with that provider.[2] The protection is the clause, not the job title, which puts it in the same drafting conversation as the rest of a [hotel management agreement](/hotel-industry/hotel-management-agreements).\n\nTwo limits sit on top of that. The FCC said the question turns on a party's conduct, and that contractual arrangements may be relevant but are not determinative: an entity that performs a manager's functions in breach of a contract saying it will not can still be a person engaged in the business of managing the system.[2] And where a violation results from the owner's own failure to perform its tasks, which the FCC described as updating end-user location information and selecting the notification destination, the owner is responsible.[2]"
    },
    {
      h2: "What does getting it wrong cost?",
      lead: "Up to $25,132 a day with a $188,491 ceiling on a single failure to act, and for a hotel only after a citation.",
      body: "47 U.S.C. 623(e) and 47 CFR 9.17(a)(1) route enforcement through title V of the Communications Act, with section 501 applying only so far as it provides for a fine.[7][5] A hotel is not a broadcast licensee, a common carrier or a covered manufacturer, so the figure comes from the catch-all. 47 CFR 1.80(b)(10) caps a forfeiture at $25,132 for each violation or each day of a continuing violation, and at $188,491 for any single act or failure to act; the inflation table at 1.80(b)(12)(ii) prints the same two figures against 47 U.S.C. 503(b)(2)(D), the maxima after the 2025 annual adjustment.[6] They move yearly: 1.80(b)(12) ties them to the October consumer price index, with the Office of Management and Budget issuing guidance no later than December 15.[6]\n\nA ceiling is not a price list. Tables 1 and 2 to 1.80(b)(11) publish base amounts for named violations, from emergency alert equipment that is not operational to a failure to maintain required records, and neither carries a line for a 911 or multi-line telephone system violation.[6] What is published instead is Table 3's adjustment criteria: an intentional violation, substantial harm and a repeated or continuous violation push the number up, while a minor violation, good faith or voluntary disclosure and a history of overall compliance push it down.[6] Nothing published says what the FCC would assess against a hotel.\n\nTiming helps an owner twice. 1.80(d) says no forfeiture may be imposed on a person who holds no Commission license, permit, certificate or other authorization until that person is sent a citation reciting the violation charged, is given a reasonable opportunity, usually 30 days, to request a personal interview, and then engages in conduct of the type described in the citation.[6] A hotel is that person. 1.80(c)(5) bars a penalty where the violation occurred more than one year before the notice.[6] Anyone may still complain about a 9.16 violation under 47 CFR 1.711 through 1.737.[5] None of this touches what a 911 call that did not connect costs in a lawsuit, which is state law the FCC does not set."
    },
    {
      h2: "What should a buyer, a seller or a lender ask?",
      lead: "One question, in two parts: when was the phone system installed, and what happens when somebody dials 911 from a guest room?",
      body: "The first part is documentary and cheap. The install date lives on a vendor invoice, in the last renovation scope, or on the furniture, fixtures and equipment schedule, and it is dispositive: before February 16, 2020 the system is outside subpart F, after it the system is inside.[1] Put the invoice in the data room with [the documents a hotel sale needs](/sell-a-hotel/documents-needed), and ask for it alongside the other service contracts in [diligence](/buy-a-hotel/due-diligence-checklist).\n\nThe second part takes a test call, arranged with the local answering point rather than dialed cold. Confirm it connects without a 9, watch the notification arrive where somebody is sitting, and confirm what the answering point received. A system that dials through but delivers only the main trunk number is compliant on 9.16(b)(1) and short on 9.16(b)(3).[3]\n\nThe money side is ordinary capital expenditure. A phone system is furniture, fixtures and equipment, so it is funded from the reserve or inside renovation debt, not from an operating line, and a brand standard may call for a newer system than the rule does. That is a franchise agreement question, and no franchisor publishes its telephone specification. State law can add to the federal floor: 9.17(c) preserves the authority of state commissions and other state or local agencies over emergency communications so long as it is not inconsistent with subpart F, and the FCC noted that the direct-dialing statute enacted in Texas requires a sticker on or next to a non-compliant device explaining how to reach 911.[5][2] Check the state before assuming the federal answer is the whole answer."
    }
  ],
  table: {
    caption: "Kari's Law and dispatchable-location duties on a hotel phone system, read October 20, 2026",
    columns: ["Duty", "What it requires", "When it applies", "Source"],
    rows: [
      [
        "Coverage",
        "A multi-line telephone system manufactured, imported, offered for first sale or lease, first sold or leased, or installed after February 16, 2020",
        "February 16, 2020. An earlier system may run to end of life",
        "47 CFR 9.15(c), 9.17(b)"
      ],
      [
        "Direct 911 dialing",
        "A call to 911 from any station with dialing facilities, with no additional digit, code, prefix or post-fix, including a trunk-access 9",
        "On any covered system",
        "47 CFR 9.16(a)(1), (b)(1)"
      ],
      [
        "On-site notification",
        "Notice to a central location at the hotel or to another person or organization, where the system can do it without a hardware or software improvement",
        "On any covered system",
        "47 CFR 9.16(b)(2)"
      ],
      [
        "Notification content",
        "The fact a 911 call was made, a valid callback number, and the location sent to the answering point. A hotel without direct inward dial per room may give the front desk number",
        "On any covered system",
        "47 CFR 9.3"
      ],
      [
        "Notification timing and placement",
        "Contemporaneous with the call where technically feasible, no delay to the call, and sent where someone is likely to see or hear it",
        "On any covered system",
        "47 CFR 9.16(b)(2)(i) to (iii)"
      ],
      [
        "Dispatchable location, guest-room and other fixed phones",
        "Automated dispatchable location: the validated street address plus the room or suite",
        "No later than January 6, 2021",
        "47 CFR 9.16(b)(3)(i)"
      ],
      [
        "Dispatchable location, on-premises non-fixed devices",
        "Automated where technically feasible, otherwise end-user manual update or alternative location information",
        "No later than January 6, 2022",
        "47 CFR 9.16(b)(3)(ii)"
      ],
      [
        "Dispatchable location, off-premises devices",
        "Automatic where technically feasible, otherwise manual update or enhanced location information, which may be coordinate-based",
        "No later than January 6, 2022",
        "47 CFR 9.16(b)(3)(iii)"
      ],
      [
        "Who is presumed liable",
        "The person engaged in the business of managing the system, rebuttable by showing compliance",
        "On any failure of 9.16(b)",
        "47 CFR 9.17(a)(2)"
      ],
      [
        "Maximum forfeiture",
        "$25,132 per violation or per day of a continuing violation, and $188,491 for a single act or failure to act",
        "Amounts after the 2025 annual inflation adjustment",
        "47 CFR 1.80(b)(10), (b)(12)(ii)"
      ],
      [
        "Citation first",
        "No forfeiture on a person holding no FCC authorization until a citation issues, usually 30 days pass, and the conduct continues",
        "Always, for a hotel",
        "47 CFR 1.80(d)"
      ],
      [
        "Limitation period",
        "No penalty where the violation occurred more than one year before the notice",
        "Always, outside the listed exceptions",
        "47 CFR 1.80(c)(5)"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet prices the debt a renovation runs on: as of September 30, 2026 the 10-year Treasury is 5.29 percent and Prime is 7.00 percent, and every spread, coverage floor and loan-to-value cell is marked not yet published, because no lender publishes them. No lender publishes a telephone condition either, so ask yours whether a 911 configuration test is a draw condition."
  },
  workedExample: {
    label: "Hypothetical: a 120-key select-service hotel replacing a 2016 phone system in a renovation",
    body:
      "Hypothetical. The per-station price, the software cost and the per-key renovation budget are assumptions, not published figures. No vendor publishes them.\n\nThe switch went in during March 2016, so it sits outside subpart F, and the FCC said such a system may run to the end of its useful life.[1][2] The brand's renovation scope replaces it, and the day the new system is installed all three duties attach.[1]\n\nSize the work. 120 guest rooms plus 14 back-of-house stations is 134 stations. At an assumed $310 a station, hardware and configuration is $41,540. Add an assumed $9,000 for the notification and location software and the line is $50,540, which is $421 a key across 120 keys. Against an assumed $18,000 a key renovation, $2,160,000 in total, the 911 work is 2.3 percent of the budget.\n\nNow price the alternative. Suppose the new system goes in configured the old way, with a 9 in front of 911, and nobody tests it. 47 CFR 1.80(b)(10) caps the forfeiture at $25,132 for each day of a continuing violation and at $188,491 for a single failure to act.[6] Seven days reaches $175,924 and an eighth would reach $201,056, so the ceiling binds on day eight. $188,491 is 3.7 times the $50,540 the work would have cost, 8.7 percent of the whole renovation budget, and $1,571 a key.\n\nThat figure is unlikely, and that is no reason to skip the test: 1.80(d) requires a citation and usually 30 days before any forfeiture of a non-licensee, and 1.80(c)(5) bars a penalty for a violation more than a year old.[6] The exposure nobody publishes is the one that is not capped: what a 911 call that failed to connect costs in a lawsuit."
  },
  faq: [
    {
      q: "Our phone system is from 2015. Do we have to replace it?",
      a: "No. 47 CFR 9.15(c) reaches systems installed after February 16, 2020, and the FCC said an enterprise may keep an existing system until the end of its useful life.[1][2] Replacing it brings the new system inside the rule."
    },
    {
      q: "Does the 911 notification have to go to the front desk?",
      a: "Not specifically. 47 CFR 9.16(b)(2) requires notice to a central location at the facility or to another person or organization regardless of location, sent where someone is likely to see or hear it.[3] A front desk or security office is the usual choice."
    },
    {
      q: "Our guest rooms have no direct dial numbers. What callback number goes in the notification?",
      a: "The FCC said a hotel that does not give each room a direct inward dial line may use the number of a central location, such as the front desk.[2] 47 CFR 9.3 excuses the callback number only where providing one is technically infeasible.[4]"
    },
    {
      q: "A vendor runs our phone system. Are we still exposed?",
      a: "47 CFR 9.17(a)(2) presumes the manager responsible.[5] The FCC said a passive owner who contracts with a responsible third party and puts compliance requirements in the agreement should not face liability, but it refused to exempt hotels as a class.[2]"
    },
    {
      q: "What counts as dispatchable location in a hotel?",
      a: "The validated street address plus the information needed to find the caller, such as a room number.[4] A guest-room handset is an on-premises fixed telephone, which has owed automated dispatchable location since January 6, 2021.[3]"
    },
    {
      q: "Can the FCC fine us without warning?",
      a: "Not on a first look. A hotel holds no FCC authorization, so 47 CFR 1.80(d) requires a citation and usually 30 days to request an interview before any forfeiture, and then only if the conduct continues.[6]"
    },
    {
      q: "Does state law add anything?",
      a: "It can. 47 CFR 9.17(c) preserves state and local authority over emergency communications.[5] The FCC noted that the Texas statute requires a sticker on or next to a non-compliant device explaining how to reach 911.[2]"
    }
  ],
  sources: [
    {
      n: 1,
      label: "47 CFR 9.15, applicability of subpart F: the three covered classes of person and any system manufactured, imported, offered for first sale or lease, first sold or leased, or installed after February 16, 2020",
      url: "https://www.law.cornell.edu/cfr/text/47/9.15",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-20"
    },
    {
      n: 2,
      label: "Implementing Kari's Law and RAY BAUM'S Act, Report and Order, 84 FR 66716: paragraph 90 on a passive owner and the hotel association's request, paragraph 93 on contracts, paragraph 95 on the owner's own tasks, paragraph 291 on retaining a system to end of life, and the front-desk callback number example",
      url: "https://www.govinfo.gov/content/pkg/FR-2019-12-05/html/2019-20137.htm",
      publisher: "Federal Communications Commission, via the U.S. Government Publishing Office",
      accessed: "2026-10-20"
    },
    {
      n: 3,
      label: "47 CFR 9.16, direct 911 dialing, notification, and dispatchable location: the trunk-access clause, the three notification tests, and the January 6, 2021 and January 6, 2022 location deadlines",
      url: "https://www.law.cornell.edu/cfr/text/47/9.16",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-20"
    },
    {
      n: 4,
      label: "47 CFR 9.3, definitions: multi-line telephone system, dispatchable location, MLTS notification and its three content items, on-premises, and the persons engaged in installing, managing and operating an MLTS",
      url: "https://www.law.cornell.edu/cfr/text/47/9.3",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-20"
    },
    {
      n: 5,
      label: "47 CFR 9.17, enforcement, compliance date and state law: the title V route, the presumption against the system's manager, the complaint procedure, and the February 16, 2020 compliance date",
      url: "https://www.law.cornell.edu/cfr/text/47/9.17",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-20"
    },
    {
      n: 6,
      label: "47 CFR 1.80, forfeiture proceedings: the catch-all ceiling in (b)(10), the 47 U.S.C. 503(b)(2)(D) line in the inflation table, the base amounts and adjustment criteria in Tables 1 to 3, the one-year limitation, and the citation-first rule for non-licensees",
      url: "https://www.law.cornell.edu/cfr/text/47/1.80",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-20"
    },
    {
      n: 7,
      label: "47 U.S.C. 623, configuration of multi-line telephone systems for direct dialing of 911: the Kari's Law Act of 2017, Public Law 115-127, and its two-year effective-date provision",
      url: "https://www.law.cornell.edu/uscode/text/47/623",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-20"
    },
    {
      n: 8,
      label: "47 U.S.C. 1471, definitions, including the multi-line telephone system definition the statute borrows",
      url: "https://www.law.cornell.edu/uscode/text/47/1471",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-20"
    }
  ],
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/fire-safety-and-federal-travel",
      "/hotel-industry/ada-requirements",
      "/hotel-industry/hotel-management-agreements",
      "/hotel-industry/hotel-operating-costs"
    ],
    glossary: ["/glossary/pip", "/glossary/ffe-reserve", "/glossary/franchise-agreement"],
    data: ["/rates"]
  },
  cta: { label: "Talk to the capital markets desk", href: "/contact" },
  brandSentence:
    "Matthews Hotel Markets arranges the renovation debt a phone-system replacement sits inside, from $5 million, and reads the service contracts in the data room when it sells a hotel."
};

export default page;
