/**
 * Does my hotel need sprinklers to take federal government business?
 * Answer page: /hotel-industry/fire-safety-and-federal-travel
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-10-15): 15 U.S.C. 2224, 2225 and 2225a and 5 U.S.C. 5707a on
 * Cornell LII; 41 CFR 301-11.6 from the eCFR full-text API for title 41 part
 * 301-11 (source note: FTR Case 2025-05, 90 FR 56893, December 8, 2025); GSA
 * Per Diem Bulletin FTR 27-01 and GSA's own "fire safe hotels" page; and the
 * Hotel-Motel National Master List itself, downloaded as the 8,454,269-byte
 * CSV that FEMA's U.S. Fire Administration publishes at
 * apps.usfa.fema.gov/hotel/api/properties/searchExport.
 *
 * Every count in the table and in the body was derived from that file twice,
 * by two independently written parsers that agree on all 16 figures, and the
 * worked example was recomputed line by line, in
 * scripts/check-fire-safety-math.mjs. The file is not clean: 27 rows carry a
 * newline inside a quoted field and at least one carries an unescaped quote,
 * so a strict CSV reader disagrees with a lenient one by a handful of rows.
 * Re-run the script against a fresh download before changing a count.
 *
 * Deliberately absent, because no public source publishes them: how many
 * federal room nights land in a given market or at a given hotel (GSA
 * publishes the rate caps, not the volumes); how long USFA takes to process a
 * registration or a correction; and what a sprinkler retrofit costs per room.
 * The page says so in each place rather than guessing.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "fire-safety-and-federal-travel",
  cluster: "hotel-industry",
  isHub: false,
  title: "Hotel Sprinkler Rules and Federal Travel Business",
  description:
    "What the Hotel and Motel Fire Safety Act requires, what being off FEMA's national master list costs a hotel, and what the published list shows.",
  h1: "Does my hotel need sprinklers to take federal government business?",
  lastUpdated: "2026-10-19",
  authorSlug: "miles-cortez",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "Does my hotel need sprinklers to take federal government business?",
    "What is the Hotel and Motel Fire Safety Act of 1990?",
    "How do I get my hotel on the FEMA approved list?",
    "Can federal employees stay at a hotel without sprinklers?",
    "Why is my hotel not eligible for government per diem rates?",
    "Do hotels have to have sprinklers in every room?",
    "How many hotels are on the national master list?"
  ],
  answer:
    "Only if it is four stories or more. The Hotel and Motel Fire Safety Act of 1990 requires hard-wired smoke alarms in every guest room and sprinklers in every guest room above three stories.[1] Properties that meet it register on FEMA's national master list, which held 55,428 hotels and motels when read on October 15, 2026.[2]",
  takeaways: [
    "Two requirements, not one: a hard-wired smoke alarm in every guest room at any height, and sprinklers in every guest room once the building is four stories or more.[1]",
    "Each federal agency must book at least 90 percent of its commercial-lodging room nights in listed properties, so an unlisted hotel competes for a 10 percent remainder.[3]",
    "GSA's per diem lodging studies are limited to listed properties, so an unlisted hotel's rates never enter the survey that sets its market's cap.[3]",
    "Listing is voluntary and no fee is published. An owner applies online and USFA assigns a FEMA ID that does not expire.[4]",
    "Of 21,678 listed hotels at four stories or more, 21,593 record a sprinkler system, 99.6 percent. Of the 33,750 at three stories or lower, where no sprinkler is required, 16,368 record one anyway.[2]"
  ],
  sections: [
    {
      h2: "What does the Hotel and Motel Fire Safety Act require?",
      lead:
        "Two things: a hard-wired, single-station smoke detector in each guest room, and an automatic sprinkler system in each guest room in any property more than three stories tall.[1]",
      body:
        "15 U.S.C. 2225(a)(1) ties the smoke detector to National Fire Protection Association Standard 74 or any successor, at any height. Paragraph (a)(2) ties the sprinkler system to NFPA Standard 13 or 13-R, whichever is appropriate, and exempts places three stories or lower.[1]\n\nSubsection (b) carries exactly two exceptions, both narrower than they look. A system installed before October 25, 1992 is accepted if it complied with the standard the authority having jurisdiction had in effect at the time and that standard required a sprinkler head in each guest sleeping area. Where another standard prevents compliance with NFPA 13 or 13-R, the property is exempt from that specific provision only, not the rest.[1]"
    },
    {
      h2: "What happens if my hotel is not on the list?",
      lead:
        "Three things, and only the first is obvious: agencies must put at least 90 percent of their room nights elsewhere, the property is left out of the survey that sets its market's per diem cap, and no federally funded meeting can be held there.[3][5]",
      body:
        "5 U.S.C. 5707a(a)(1) requires each agency to ensure that not less than 90 percent of the commercial-lodging room nights for its employees in a state, for a fiscal year, are booked in approved places of public accommodation. Paragraph (a)(2) makes each agency write explicit procedures to hit that percentage, and (a)(3) treats an agency as compliant where its travel runs through travel management processes designed to find approved lodging.[3]\n\nThe second consequence is the one owners miss. Subsection (b) limits the studies conducted to set lodging per diem rates to approved places, and subsection (c) bars GSA from listing a non-approved property in any lodging directory.[3] GSA says the same in its own words: in setting federal lodging per diem rates it is required by law to use only properties certified as fire safe.[6] An unlisted hotel does not merely lose bookings. Its rates never enter the survey that sets the market ceiling.\n\nThe instruction reaches the traveler through the Federal Travel Regulation: 41 CFR 301-11.6(b) says employees should always stay in a fire safe facility, meaning one that meets the Act, and paragraph (c) gives first consideration to government lodging agreement programs such as FedRooms. That text is current, from FTR Case 2025-05, published December 8, 2025.[7]\n\nThird, 15 U.S.C. 2225a bars federal funds from sponsoring or funding a meeting, convention, conference or training seminar conducted in a property that does not meet the guidelines, or that otherwise uses its rooms, facilities or services. The sponsoring agency head may waive that only on a determination that it is necessary in the public interest for that event.[5]"
    },
    {
      h2: "How much is the federal lodging business worth?",
      lead:
        "The rate is published and the volume is not: for travel on or after October 1, 2026 the standard CONUS lodging cap is $113 a night, with 295 locations priced separately.[8]",
      body:
        "GSA Per Diem Bulletin FTR 27-01, dated August 18, 2026, sets the rates for travel on or after October 1, 2026 through September 30, 2027. The standard lodging rate rose from $110 to $113, the standard meals and incidental expenses rate stayed at $68, and 295 locations receive non-standard rates.[8] The lodging figure caps reimbursement rather than setting a price, so a listed hotel in a standard CONUS market competes at or below $113 a night.\n\nWhat no public source publishes is volume. GSA publishes the caps, not how many federal room nights land in a market or at a property. An owner sizing this has to ask the agencies, bases and installations that drive the demand what they book, then run the arithmetic below on that number. Why a concentrated demand segment is underwritten more carefully than a diffuse one is covered at [what buyers look for](/sell-a-hotel/what-buyers-look-for)."
    },
    {
      h2: "How many hotels are on the list, and how many have sprinklers?",
      lead:
        "On October 15, 2026 the published file carried 57,822 properties, of which 55,428 were coded as hotels or motels.[2]",
      body:
        "FEMA's U.S. Fire Administration publishes the whole list as a downloadable file, which is how the table above was built: 8,454,269 bytes on October 15, 2026, one row per property, carrying the FEMA ID, address, story count, property type and any recorded sprinkler system. The 55,428 hotels and motels sit alongside 1,771 apartment or condominium properties, 307 bed and breakfasts, 263 short-term rentals, 27 campus properties and 25 military ones, across 57 states and territories. Texas leads with 5,325 hotels and motels, then California with 4,643, Florida with 4,011, Georgia with 2,334 and New York with 2,149.[2]\n\nThe sprinkler column tracks the statute closely, which is the useful part. Of the 21,678 listed hotels at four stories or more, 21,593 record a sprinkler system, 99.6 percent, which is what a requirement that bites at that height should look like. Of the 33,750 at three stories or lower, where the Act requires none, 16,368 record one anyway, 48.5 percent. The 85 high-rise rows with no system recorded are 0.39 percent of that group, and the file does not explain them: the statute's two exceptions are a pre-1992 system and a standards conflict,[1] and the data does not say which, if either, applies.\n\nRead the file as a registration record, not an inspection database. Four hotel rows report zero stories and the highest story count is 240, a typing error rather than a building. A blank sprinkler field means the list records no system, not that a building has none. How many US hotels are left off is harder to say than it looks: there is no free public census, and the public figures point to a little over 60,000, worked through at [how big the US hotel industry is](/hotel-industry/industry-size-2026)."
    },
    {
      h2: "How do I get my hotel on the list?",
      lead:
        "Registration is voluntary: an owner completes the online application, verifies by email, and USFA assigns a FEMA ID that does not expire.[4]",
      body:
        "The sequence USFA publishes is short. Complete the online application, then follow the instructions in the verification email. Expect that you may have to grant access to a fire inspector or provide a copy of the certificate of occupancy. Once the property is determined to meet the requirements, USFA assigns a FEMA ID and adds it to the list, and that ID does not expire. Only properties in the United States or its territories qualify.[4]\n\nThe state is in the loop by statute, which is why a correction usually runs through a state office rather than a federal one. 15 U.S.C. 2224(a) makes each state, through its governor or the governor's designee, responsible for submitting and periodically updating its list of complying properties, and subsection (b) makes FEMA responsible for compiling the national master list, publishing it in the Federal Register and distributing it to every federal agency.[9] USFA publishes the state contacts alongside the list.[4]\n\nWhat USFA does not publish is how long this takes. No document on the site states a turnaround for a registration or a correction, so this page does not put a number on one."
    },
    {
      h2: "Does being on the federal list mean my hotel meets local fire code?",
      lead:
        "No. The Act is a floor for federal travel eligibility, and its own text says it does not limit any state or local fire rule.[1]",
      body:
        "15 U.S.C. 2225(c) provides that the section shall not be construed to limit the power of any state or political subdivision to implement or enforce any law, rule, regulation or standard concerning fire prevention and control. The Act defines the governmental authority having jurisdiction as the entity with authority to approve fire safety systems in a specified locality, and leaves the substance to it rather than setting a national retrofit rule.[1]\n\nIn practice the federal requirement is the easier of the two tests in many places. A local code or a state retrofit ordinance can require sprinklers in a three-story hotel the Act exempts, or a standpipe, an alarm upgrade or central-station monitoring the Act never mentions. The two questions are separate: a hotel can sit on the list and still be out of compliance locally, and it can be compliant locally and still be off the list because nobody registered it. None of this is legal or engineering advice: read your jurisdiction's adopted code with a licensed fire protection engineer."
    },
    {
      h2: "What does this mean when I sell or finance the hotel?",
      lead:
        "It is a check anyone can run in under a minute, so it belongs in the seller's file before a buyer finds it.",
      body:
        "The list is public, searchable by name and address, and downloadable in one click, so a buyer, lender or franchisor can confirm a property's status without asking. Two things follow.\n\nFirst, if a hotel is marketed on a story that includes government, contractor or military demand, the listing is part of the evidence for it. An unlisted property with a federal demand narrative is a gap a buyer will price, and the fix costs an application rather than a renovation. The documents a buyer asks for are collected at [what documents I need to sell a hotel](/sell-a-hotel/documents-needed), and the sequence at [the hotel due diligence checklist](/buy-a-hotel/due-diligence-checklist).\n\nSecond, if the property is four stories or more with no sprinkler system, that is capital expenditure competing with the rest of a renovation budget, and no public source publishes what a sprinkler retrofit costs per room on an occupied hotel. The number has to come from a contractor's bid on that building, financed as covered at [PIP and renovation loans](/hotel-financing/pip-and-renovation-loans)."
    }
  ],
  table: {
    caption:
      "The Hotel-Motel National Master List, read October 15, 2026. Sprinklers are required only above three stories, so a blank low-rise row is expected.",
    columns: ["Group on the list", "Properties", "Record a sprinkler system", "Share"],
    rows: [
      ["All property types", "57,822", "39,126", "67.7%"],
      ["Hotels and motels", "55,428", "37,961", "68.5%"],
      ["Hotels and motels, 4 stories or more", "21,678", "21,593", "99.6%"],
      ["Hotels and motels, 3 stories or lower", "33,750", "16,368", "48.5%"],
      ["Apartment, bed and breakfast, short-term rental, campus, military", "2,394", "1,165", "48.7%"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet is where a sprinkler scope becomes a financing question. As of September 30, 2026 it shows the 10-year Treasury at 5.29 percent and Prime at 7.00 percent, and marks every coverage and loan-to-value cell as not yet published, because lenders do not publish them.[10]"
  },
  workedExample: {
    label: "Hypothetical: what the listing is worth on a 120-key, 5-story hotel",
    body:
      "Hypothetical, and the volume is an assumption rather than a published figure. A 120-key hotel, five stories, in a standard CONUS market, so the FY2027 lodging cap is $113 a night.[8] At 120 keys it sells 43,800 room nights a year and fills 30,660 at an assumed 70 percent occupancy. Assume federal travelers take 3,000 of those nights, 9.8 percent of the occupied nights. At the $113 cap they bill $339,000 of rooms revenue.\n\nNow apply the rule. Each agency must book at least 90 percent of its commercial-lodging room nights in listed properties,[3] so at most 10 percent can go to an unlisted hotel. Unlisted, the planning number is not $339,000 but a ceiling of $33,900, and only if an agency spends its whole 10 percent allowance here. The difference, $305,100 of rooms revenue a year, is what the listing is worth at this assumed volume, against an online application with no published fee.[4]\n\nTwo effects sit outside that $305,100. Per diem lodging studies are limited to listed properties, so this hotel's rates never enter the survey that sets its market's cap, and GSA may not list it in any lodging directory.[3] And a federally funded meeting or training seminar cannot be held there unless an agency head waives the prohibition as necessary in the public interest.[5] At five stories, sprinklers in each guest room are required of it, not optional.[1]"
  },
  faq: [
    {
      q: "Does my hotel need sprinklers?",
      a: "Under the federal Act, only if it is four stories or more: it requires a sprinkler system in each guest room except in properties three stories or lower.[1] Your local fire code is a separate test and can be stricter.[1]"
    },
    {
      q: "What is the Hotel and Motel Fire Safety Act of 1990?",
      a: "A federal law setting two guidelines, hard-wired smoke alarms in every guest room and sprinklers above three stories, and tying federal travel and conference spending to a FEMA list of the properties that meet them.[1][3][5]"
    },
    {
      q: "How do I get my hotel on the FEMA list?",
      a: "Complete USFA's online application and verify by email. You may have to grant a fire inspector access or provide a certificate of occupancy. USFA then assigns a FEMA ID, which does not expire. No fee is published.[4]"
    },
    {
      q: "Can federal employees stay at a hotel that is not on the list?",
      a: "Rarely. Each agency must book at least 90 percent of its commercial-lodging room nights in listed properties,[3] and the Federal Travel Regulation tells employees to stay in a fire safe facility.[7]"
    },
    {
      q: "How many hotels are on the national master list?",
      a: "55,428 hotels and motels on October 15, 2026, inside 57,822 properties of every type, read out of the file USFA publishes.[2] Texas leads with 5,325 and California follows with 4,643."
    },
    {
      q: "Can a federally funded conference be held at an unlisted hotel?",
      a: "No federal funds may sponsor or fund a meeting, convention, conference or training seminar at a property that does not meet the guidelines, unless the head of the funding agency waives it as necessary in the public interest.[5]"
    },
    {
      q: "Do short-term rentals and bed and breakfasts qualify?",
      a: "Yes. The published file carries 263 short-term rentals and 307 bed and breakfasts alongside the hotels, plus apartment, campus and military properties.[2] The Travel Regulation treats short-term rentals as nonconventional lodging.[7]"
    }
  ],
  sources: [
    {
      n: 1,
      label:
        "15 U.S.C. 2225: the smoke detector requirement in (a)(1) and the sprinkler requirement in (a)(2) with its three-stories-or-lower exemption, the two exceptions in (b) including the October 25, 1992 date, the savings clause for state and local law in (c), and the definitions in (d)",
      url: "https://www.law.cornell.edu/uscode/text/15/2225",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-15"
    },
    {
      n: 2,
      label:
        "Hotel-Motel National Master List, complete listings export (CSV, 8,454,269 bytes as downloaded): row counts by property type, story count and recorded sprinkler system",
      url: "https://apps.usfa.fema.gov/hotel/",
      publisher: "U.S. Fire Administration, Federal Emergency Management Agency",
      accessed: "2026-10-15"
    },
    {
      n: 3,
      label:
        "5 U.S.C. 5707a: the 90 percent agency booking requirement in (a)(1), the agency procedures in (a)(2) and (a)(3), the limit of per diem lodging studies to approved places in (b), the bar on listing non-approved properties in any GSA directory in (c), and the definition of an approved place of public accommodation in (f)(2)",
      url: "https://www.law.cornell.edu/uscode/text/5/5707a",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-15"
    },
    {
      n: 4,
      label:
        "Hotel-Motel National Master List: what the list is, the registration sequence, the fire inspection or certificate of occupancy, the FEMA ID that does not expire, the United States and territories eligibility limit, and the state contacts",
      url: "https://apps.usfa.fema.gov/hotel/faq",
      publisher: "U.S. Fire Administration, Federal Emergency Management Agency",
      accessed: "2026-10-15"
    },
    {
      n: 5,
      label:
        "15 U.S.C. 2225a: the bar on federal funding of a meeting, convention, conference or training seminar at a non-certified place of public accommodation, the agency-head waiver in (b), and the notice requirements in (c)",
      url: "https://www.law.cornell.edu/uscode/text/15/2225a",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-15"
    },
    {
      n: 6,
      label:
        "Fire safe hotels: GSA is required by law to use only properties certified as fire safe in setting federal lodging per diem rates (page last updated July 22, 2024)",
      url: "https://www.gsa.gov/travel/plan-a-trip/per-diem-rates/fire-safe-hotels",
      publisher: "U.S. General Services Administration",
      accessed: "2026-10-19"
    },
    {
      n: 7,
      label:
        "41 CFR 301-11.6: lodging selection, the fire safe facility instruction in (b) with its cross-reference to 5 U.S.C. 5707a, and the FedRooms first-consideration rule in (c); plus 301-11.7(a)(4) on nonconventional lodging. Part source note: FTR Case 2025-05, 90 FR 56893, December 8, 2025",
      url: "https://www.ecfr.gov/current/title-41/subtitle-F/chapter-301/subchapter-B/part-301-11/subpart-A/section-301-11.6",
      publisher: "Electronic Code of Federal Regulations, National Archives",
      accessed: "2026-10-15"
    },
    {
      n: 8,
      label:
        "GSA Per Diem Bulletin FTR 27-01 (dated August 18, 2026): the FY2027 standard CONUS lodging rate of $113, up from $110, the standard M&IE rate of $68, and the 295 non-standard locations, for travel on or after October 1, 2026 through September 30, 2027",
      url: "https://www.gsa.gov/policy-regulations/regulations/federal-travel-regulation/ftr-and-related-files/gsa-per-diem-bulletin-ftr-2701",
      publisher: "U.S. General Services Administration",
      accessed: "2026-10-15"
    },
    {
      n: 9,
      label:
        "15 U.S.C. 2224: each state submits and periodically updates its list of complying properties through the governor or the governor's designee, and FEMA compiles, publishes, distributes and updates the national master list",
      url: "https://www.law.cornell.edu/uscode/text/15/2224",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-15"
    },
    {
      n: 10,
      label: "Matthews Hotel Markets rate sheet, October 2026 edition",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)",
      accessed: "2026-10-15"
    }
  ],
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/ada-requirements",
      "/hotel-industry/hotel-operating-costs",
      "/hotel-industry/cost-to-build-a-hotel",
      "/hotel-industry/energy-benchmarking-and-emissions-limits",
      "/hotel-industry/industry-size-2026"
    ],
    glossary: ["/glossary/pip", "/glossary/adr", "/glossary/ffe-reserve"],
    data: ["/rates"]
  },
  cta: {
    label: "Talk to the hospitality team about a renovation budget or a sale",
    href: "/contact"
  },
  brandSentence:
    "Matthews Hotel Markets arranges the renovation and PIP debt that pays for work like a sprinkler retrofit, and sells hotels where a buyer is checking the public record before making an offer. We do not inspect buildings or give fire code advice."
};

export default page;
