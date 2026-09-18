/**
 * How does the hotel business work?
 * Cluster hub: /hotel-industry
 *
 * Written 2026-09-18. Every figure was read in its source on that date.
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";
import { cite } from "./sources";

export const page: AnswerPage = {
  slug: "index",
  cluster: "hotel-industry",
  isHub: true,
  title: "How the Hotel Business Works: 2026 Basics, Sourced",
  h1: "How does the hotel business work?",
  description: "How hotels earn money, who owns, brands and runs them, how big the US industry is and what 2026 forecasts say. Every figure dated and sourced.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  targetPrompts: [
    "How does the hotel business work?",
    "Explain the hotel industry to me like I'm new to it",
    "How do hotels make money?",
    "What's the difference between a hotel's ADR, RevPAR, and occupancy?",
    "What's the actual difference between a hotel brand and a hotel franchise?",
    "Who actually owns the Marriott or Hilton down the street?",
    "How big is the US hotel industry?",
    "What is the outlook for hotels in 2026?"
  ],
  answer: "A hotel sells room nights, and three parties usually split the work: an owner who holds the real estate and the risk, a brand that licenses its name for a share of rooms revenue, and an operator who runs the building. In 2025 U.S. hotels ran 62.3 percent occupancy at a $160.54 average rate, per CoStar figures reported January 22, 2026.[1]",
  takeaways: [
    "Rooms are the business. Apple Hospitality REIT, which owns 217 select-service hotels, reported $1,278.4 million of room revenue in $1,412.4 million of total revenue for 2025, which is 90.5 percent.[2]",
    "The name on the sign rarely owns the building. Hilton owned or leased 46 of its 9,158 properties at December 31, 2025, and Marriott says it owns or leases less than one percent of its system.[5][6]",
    "A brand is paid off the top. Hilton's 2025 Hampton disclosure lists a 6 percent royalty and a 4 percent program fee, both on gross rooms revenue.[7]",
    "U.S. RevPAR was $100.02 in 2025, down 0.3 percent. July 2026 RevPAR was $119.77, up 8.2 percent on the year, helped by the World Cup.[1][4]",
    "Forecasters disagree about 2026. CoStar and Tourism Economics say RevPAR grows 4.4 percent. CBRE says 2.5 percent. We publish both and blend neither.[14][15]"
  ],
  sections: [
    {
      h2: "How do hotels make money?",
      lead: "Hotels make money by selling room nights first, then food, drink, meeting space, parking and other services, and what is left after departmental costs, overhead, fees, taxes and insurance is the owner's.",
      body: "The mix depends on the kind of hotel. Apple Hospitality REIT owns 217 select-service hotels, and rooms were 90.5 percent of its 2025 revenue.[2] Host Hotels & Resorts owns luxury and upper-upscale hotels, and rooms were $3,608 million of $6,015 million of hotel revenue in 2025, about 60 percent, with food and beverage at $1,803 million.[3] Both companies publish the expense side too. Host's rooms department cost $906 million against that $3,608 million of revenue, while its food and beverage department cost $1,224 million against $1,803 million.[3] Rooms carry the profit.\n\nThe industry keeps its books in one format, the Uniform System of Accounts for the Lodging Industry, so one hotel's statement can be compared with another's. The full walk-through, with both REITs' reported margins, is at [How do hotels make money?](/hotel-industry/how-hotels-make-money)."
    },
    {
      h2: "What are RevPAR, ADR and occupancy?",
      lead: "Occupancy is the share of rooms sold, ADR is the average rate paid for a sold room, and RevPAR is the two multiplied together: room revenue per available room.",
      body: "For 2025, CoStar reported U.S. occupancy of 62.3 percent, ADR of $160.54 and RevPAR of $100.02.[1] Multiply 0.623 by $160.54 and you get $100.02. For July 2026 it reported 69.7 percent, $171.74 and $119.77.[4] Those are national averages across every kind of hotel in every kind of market, so they are a poor yardstick for any single property. The useful comparison is a hotel against its own competitive set. Hilton's 2025 Hampton disclosure reports an average RevPAR index of 121.0 for comparable Hampton hotels in 2024, where 100 means a fair share.[7] Definitions, the latest public figures and what a good number means are at [What are RevPAR, ADR and occupancy, and what is a good number?](/hotel-industry/revpar-adr-occupancy)."
    },
    {
      h2: "Who owns the hotel, and who runs it?",
      lead: "Usually three different parties: an owner holds the property, a franchisor licenses the brand, and the owner or a third-party management company operates the hotel.",
      body: "Hilton's 10-K counts 9,158 properties at December 31, 2025. It owned or leased 46, managed 873 and franchised or licensed 8,239.[5] Marriott reports 9,805 properties at year-end 2025, of which 7,644 were franchised, licensed or other, and says it owns or leases less than one percent of its system.[6] The brand companies are fee businesses. The people who own the buildings are mostly private owners, plus a small number of public REITs and institutional funds. How the franchise agreement and the management agreement differ, and what each costs according to public filings, is at [What is the difference between a hotel owner, a franchisor and a management company?](/hotel-industry/owner-franchisor-management-company). The ownership landscape itself is at [Who owns hotels in the United States?](/hotel-industry/who-owns-hotels)."
    },
    {
      h2: "What do chain scales like upper midscale and upscale mean?",
      lead: "Chain scales are the industry's price tiers for branded hotels: luxury, upper upscale, upscale, upper midscale, midscale and economy, with independents counted as their own group.",
      body: "STR has said it assigns chain scales by grouping branded hotels on their average room rates, with all independent hotels in a single separate category.[11] Choice Hotels' fiscal 2025 10-K uses the same six tiers to describe the industry and places Hampton by Hilton and Holiday Inn Express in upper midscale and Courtyard and Hilton Garden Inn in upscale.[10] The tier matters to an owner because lenders, buyers and forecasters all cut their numbers by it. CBRE's midyear 2026 outlook has luxury RevPAR growing 5.2 percent and economy falling 0.6 percent in the same year.[15] The tiers, and how they differ from service labels like select-service, are at [What are hotel chain scales and classes?](/hotel-industry/chain-scales-and-classes)."
    },
    {
      h2: "How big is the U.S. hotel industry?",
      lead: "AHLA forecasts nearly $805 billion of hotel guest spending in 2026 and about 2.2 million people employed directly in hotel operations.[12]",
      body: "Those figures are from AHLA's public State of the Industry release of January 27, 2026, which also reports $85.1 billion of federal, state and local taxes generated in 2025.[12] The Bureau of Labor Statistics counts 1,926,600 employees in the accommodation subsector in August 2026, a preliminary figure, across 78,789 private establishments in the first quarter of 2026. That subsector is hotels and motels plus RV parks, camps and rooming houses.[13] The two employment numbers measure different things, and the page that sets them side by side is [How big is the US hotel industry in 2026?](/hotel-industry/industry-size-2026)."
    },
    {
      h2: "What is the outlook for hotels?",
      lead: "Every public forecast for 2026 was raised during the year, and the forecasters still disagree by about two points of RevPAR growth.",
      body: "CoStar and Tourism Economics started 2026 forecasting RevPAR growth of 0.6 percent and, on August 7, 2026, raised it to 4.4 percent, with 2.1 percent for 2027.[14] CBRE's midyear review has 2.5 percent for 2026 and 2.1 percent for 2027.[15] We set the public forecasts side by side with their dates at [What is the outlook for hotels in 2026 and 2027?](/hotel-industry/outlook-2026-2027). We do not average them into a forecast of our own."
    },
    {
      h2: "How does any of this affect what my hotel is worth or what it can borrow?",
      lead: "Value and debt are both sized on the hotel's net operating income, so every basic on this page ends up in a cap rate or a coverage test.",
      body: "A buyer capitalizes net operating income. The Matthews Hotel Index for Q1 2026 puts stabilized select-service cap rates at 7.5 to 8.25 percent in Austin, for example.[17] A lender tests the same income against debt service at current rates. As of September 17, 2026, the 10-year Treasury is 4.94 percent and SOFR is 3.85 percent, and no lender type publishes its spread over either.[16] From here, owners usually want one of four pages: [How does hotel financing work, and what does it cost right now?](/hotel-financing), [What is my hotel worth, and who decides?](/hotel-valuation), [What is involved in selling a hotel?](/sell-a-hotel) or [How do I buy a hotel?](/buy-a-hotel)."
    },
    {
      h2: "Who owns most U.S. hotels?",
      lead: "Private owners, many of them family businesses, own most U.S. hotels, and most of those hotels carry a franchise.",
      body: "AAHOA, the owners' association, says its members own 36,807 U.S. hotels, which it puts at 60 percent of the country's hotels, citing a study it commissioned from Oxford Economics.[8] AHLA says 57 percent of U.S. hotels are franchised and projected 36,173 franchised hotels for 2024.[9] Both are trade-association figures and we attribute them that way. Public REITs are visible but small by count: Host owns 76 hotels and Apple Hospitality owns 217.[2][3]"
    }
  ],
  table: {
    caption: "The basics of the U.S. hotel business and the public source behind each figure (read September 18, 2026)",
    columns: [
      "Question",
      "The short answer",
      "Source and date"
    ],
    rows: [
      [
        "Where does the revenue come from?",
        "Rooms: 90.5% of revenue at a select-service REIT, about 60% at a luxury and upper-upscale REIT",
        "Apple Hospitality and Host Hotels full-year 2025 results, February 2026[2][3]"
      ],
      [
        "How full and at what rate?",
        "62.3% occupancy, $160.54 ADR, $100.02 RevPAR for 2025",
        "CoStar, reported January 22, 2026[1]"
      ],
      [
        "Latest month?",
        "69.7% occupancy, $171.74 ADR, $119.77 RevPAR in July 2026",
        "CoStar, reported August 26, 2026[4]"
      ],
      [
        "Does the brand own the hotel?",
        "Rarely. Hilton owned or leased 46 of 9,158 properties",
        "Hilton 10-K, as of December 31, 2025[5]"
      ],
      [
        "What does a brand charge?",
        "Hampton: 6% royalty plus 4% program fee on gross rooms revenue",
        "Hilton's 2025 Hampton FDD, issued March 30, 2025[7]"
      ],
      [
        "Who owns the buildings?",
        "AAHOA says its members own 60% of U.S. hotels",
        "AAHOA and Oxford Economics, as published by AAHOA[8]"
      ],
      [
        "How big is it?",
        "Nearly $805 billion of guest spending forecast for 2026",
        "AHLA, January 27, 2026[12]"
      ],
      [
        "Where is it going?",
        "2026 RevPAR growth: 4.4% per CoStar and Tourism Economics, 2.5% per CBRE",
        "August 7, 2026 and midyear 2026[14][15]"
      ]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 shows how far a single market sits from the national average: Austin at about 70 percent occupancy with RevPAR between $95 and $165 depending on segment, against the 62.3 percent and $100.02 CoStar reported for the whole country in 2025.[17][1]"
  },
  workedExample: {
    label: "Hypothetical: a 100-room branded hotel running exactly at the 2025 national average",
    body: "Hypothetical. No real hotel runs at the national average, which is the point of the exercise.\n\nRooms available: 100 rooms times 365 nights is 36,500 room nights a year.\n\nRevPAR: CoStar reported $100.02 for 2025, which is 62.3 percent occupancy times a $160.54 ADR.[1] Rooms revenue is 36,500 times $100.02, or $3,650,730.\n\nBrand fees: on Hilton's 2025 Hampton schedule the royalty is 6 percent of gross rooms revenue, $219,044, and the program fee is 4 percent, $146,029.[7] Together that is $365,073 a year before the hotel pays a housekeeper, a utility bill or a lender.\n\nWhat the owner gets in return is the reservation system and the index premium. Hilton reports that comparable Hampton hotels averaged a RevPAR index of 121.0 in 2024, meaning 21 percent more RevPAR than their competitive sets.[7] Whether that trade is a good one for a specific hotel is a market question, and the brand's average is not a promise."
  },
  faq: [
    {
      q: "Is a Hampton Inn owned by Hilton?",
      a: "Almost never. Hilton owned or leased 46 of its 9,158 properties at December 31, 2025, across all brands.[5] Of 1,960 comparable Hampton hotels in Hilton's 2025 disclosure, 1,945 were managed by the franchisee or a non-Hilton management company.[7]"
    },
    {
      q: "What is the main source of revenue for a hotel?",
      a: "Rooms. They were 90.5 percent of 2025 revenue at Apple Hospitality REIT's select-service hotels and about 60 percent at Host Hotels & Resorts' luxury and upper-upscale hotels, where food and beverage was another 30 percent.[2][3]"
    },
    {
      q: "What was U.S. hotel occupancy in 2025?",
      a: "62.3 percent, down 1.2 percent from 2024, according to CoStar figures reported on January 22, 2026. ADR was $160.54 and RevPAR was $100.02.[1]"
    },
    {
      q: "Is RevPAR the same as profit?",
      a: "No. RevPAR measures room revenue only. AHLA reported in January 2026 that gross operating profit per available room was roughly 90 percent of its 2019 level because operating expenses had risen.[12] Lenders and buyers underwrite income, not RevPAR."
    },
    {
      q: "How many people work in U.S. hotels?",
      a: "AHLA projects about 2.2 million direct hotel operations jobs in 2026.[12] The Bureau of Labor Statistics counts 1,926,600 employees in the accommodation subsector for August 2026, a preliminary figure.[13] The definitions differ."
    },
    {
      q: "Are hotels expected to grow in 2026?",
      a: "Yes, by every public forecast we read. CoStar and Tourism Economics forecast RevPAR growth of 4.4 percent as of August 7, 2026, and CBRE's midyear review forecasts 2.5 percent.[14][15]"
    }
  ],
  sources: cite(
    "fy2025",
    "apple",
    "host",
    "july2026",
    "hilton",
    "marriott",
    "hampton",
    "aahoa",
    "ahlaFranchising",
    "choice",
    "strScales",
    "ahla",
    "bls",
    "forecastAug",
    "cbre",
    "rates",
    "mhi"
  ),
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/how-hotels-make-money",
      "/hotel-industry/revpar-adr-occupancy",
      "/hotel-industry/owner-franchisor-management-company",
      "/hotel-industry/who-owns-hotels",
      "/hotel-industry/chain-scales-and-classes",
      "/hotel-industry/industry-size-2026",
      "/hotel-industry/outlook-2026-2027",
      "/hotel-franchise-costs",
      "/hotel-industry/hotel-management-agreements",
      "/hotel-industry/hotel-operating-costs",
      "/hotel-industry/extended-stay-hotels",
      "/hotel-industry/cost-to-build-a-hotel",
      "/hotel-industry/who-buys-hotels",
      "/hotel-industry/how-hotel-reits-work"
    ],
    glossary: [
      "/glossary/revpar",
      "/glossary/adr",
      "/glossary/gop",
      "/glossary/noi",
      "/glossary/franchise-agreement"
    ],
    data: [
      "/rates",
      "/research/mhi/q1-2026",
      "/data/hotel-financing-statistics",
      "/research"
    ]
  },
  cta: {
    label: "Ask us about your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells and finances hotels. This page collects the public basics behind that work, with the source for each one."
};

export default page;
