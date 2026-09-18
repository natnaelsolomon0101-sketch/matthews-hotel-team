/**
 * What is an extended-stay hotel, and why do investors like them?
 * /hotel-industry/extended-stay-hotels
 *
 * Written 2026-09-18. Performance figures are the brands' own disclosures
 * (Hilton 2026 FDDs, Item 19; Choice, Hilton, Marriott, Wyndham and Hyatt
 * fiscal 2025 10-Ks). No public source we read states extended-stay operating
 * margins or staffing counts by brand, so the page prints none. The WoodSpring
 * Suites FDD is not cited: the /hotel-franchise-costs/woodspring-suites page
 * was not on main when this was written and the document was not read in
 * this run. The financing angle lives at /hotel-financing/extended-stay-financing.
 */
import type { AnswerPage } from "../types";
import { cite } from "./sources";

export const page: AnswerPage = {
  slug: "extended-stay-hotels",
  cluster: "hotel-industry",
  isHub: false,
  title: "What Is an Extended-Stay Hotel? Brands and Numbers",
  h1: "What is an extended-stay hotel, and why do investors like them?",
  description: "What makes a hotel extended-stay, the brands in each price tier, and the occupancy, rate and build-cost figures the brands and HVS have published.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  targetPrompts: [
    "What is an extended-stay hotel?",
    "Why do investors like extended-stay hotels?",
    "Are extended stay hotels a good investment?",
    "What is the difference between Home2 Suites and Homewood Suites?",
    "What are the extended stay hotel brands?",
    "Do extended-stay hotels have higher occupancy than regular hotels?",
    "I'm thinking about building a WoodSpring or a Home2, how do they compare?"
  ],
  answer: "An extended-stay hotel is built for guests who stay a week or more: every room has a kitchen, and housekeeping is weekly, not daily. Hilton counts a stay of 5 or more consecutive nights as extended. Its Home2 Suites disclosure, issued March 30, 2026, reports 78.0 percent occupancy for 2025, against 71.0 percent for Hampton.[1][3]",
  takeaways: [
    "Hilton defines an extended-stay traveler as a guest who stays 5 or more consecutive nights. Those stays were about 42 percent of Home2 Suites room nights and about 48 percent of Homewood Suites room nights in 2025.[1][2]",
    "Occupancy is the headline. Comparable hotels averaged 78.0 percent at Home2 Suites and 78.9 percent at Homewood Suites in 2025, against 71.0 percent at Hampton.[1][2][3]",
    "High occupancy does not mean high RevPAR. Choice Hotels' extended-stay brands ran 69.1 percent occupancy in 2025 at a $66.10 average rate, for RevPAR of $45.67, below the $54.50 of its midscale and upper midscale brands.[4]",
    "Developers are building them. HVS said on July 13, 2026 that extended-stay products were the most represented category in its development cost survey, led by Home2 Suites.[9]",
    "HVS put the median cost to build limited-service and midscale extended-stay hotels at $170,000 to $197,000 per room, and upscale extended-stay at around $265,000.[9]"
  ],
  sections: [
    {
      h2: "What makes a hotel an extended-stay hotel?",
      lead: "An extended-stay hotel is designed around guests who stay for many nights in a row, so every room has a kitchen, the building has guest laundry, and services such as housekeeping run on a weekly cycle.",
      body: "Hilton's 2026 Home2 Suites franchise disclosure document defines the customer: an extended-stay traveler is a guest who stays 5 or more consecutive nights in the same hotel, and the hotels offer studio rooms and one-bedroom suites, each with kitchen facilities.[1] Choice Hotels' fiscal 2025 10-K describes the same product at lower price points. Every WoodSpring Suites room includes a kitchen, with 24/7 laundry facilities and bi-weekly housekeeping. Everhome Suites and MainStay Suites offer fully equipped kitchens and weekly housekeeping.[4] Marriott groups its versions as longer stay brands, which it says offer amenities suggestive of the comforts of home.[6]\n\nAn extended-stay hotel is still a hotel. It rents by the night, takes reservations through a brand's system and sells to one-night guests when it has rooms. That distinction matters for financing, because the Small Business Administration and local tax authorities both draw lines by length of stay. Those rules are covered at [How is extended-stay hotel financing different?](/hotel-financing/extended-stay-financing)."
    },
    {
      h2: "What are the extended-stay hotel brands, and how do the tiers differ?",
      lead: "Extended-stay brands run from economy to upscale, and the large brand companies each field one in nearly every tier.",
      body: "At the higher-priced end, Hilton's 10-K counts 559 Homewood Suites properties with 64,243 rooms at December 31, 2025, and names Residence Inn, Hyatt House, Staybridge Suites and Element as its competitors. Home2 Suites, which carries a lower average rate, had 865 properties with 95,347 rooms and competes with TownePlace Suites, Hyatt Studios and Candlewood Suites. Hilton's newest entry, LivSmart Studios, had 2 properties open.[5] Marriott reported 937 Residence Inn properties, 571 TownePlace Suites, 122 Element hotels and 4 StudioRes properties at year-end 2025.[6] Hyatt describes Hyatt House as apartment-style suites with fully equipped kitchens and Hyatt Studios as an upper-midscale extended-stay brand.[8]\n\nIn the economy and midscale tiers, Choice Hotels had 284 WoodSpring Suites, 143 MainStay Suites, 115 Suburban Studios and 25 Everhome Suites in its U.S. system at December 31, 2025. WoodSpring grew by 28 hotels in the year and Everhome by 18. Choice lists Extended Stay America, MyPlace, Studio 6, ECHO Suites and LivAway as WoodSpring's principal competitors.[4] Wyndham's 10-K counts 18 ECHO Suites, 107 Hawthorn and 11 WaterWalk properties, and says 17 percent of its development pipeline is in the extended-stay segment.[7]\n\nThe tiers differ in rate far more than in occupancy. Hilton's Homewood Suites averaged a $160.14 room rate in 2025.[2] Choice's four extended-stay brands together averaged $66.10.[4]"
    },
    {
      h2: "Do extended-stay hotels run higher occupancy than other hotels?",
      lead: "Yes, in every brand disclosure we read: Hilton's two extended-stay brands ran about seven to eight points above Hampton in 2025, and Choice's extended-stay brands ran 14 points above its midscale brands.",
      body: "Hilton's 2026 franchise disclosure documents, all issued March 30, 2026, report 2025 results for comparable U.S. hotels. Home2 Suites averaged 78.0 percent occupancy across 561 comparable hotels and Homewood Suites averaged 78.9 percent across 417. Hampton averaged 71.0 percent across 1,893.[1][2][3] The extended-stay guest explains the gap. Home2 Suites had about 7.1 million extended-stay nights in 2025, about 42 percent of all consumed room nights, with an average extended stay of 11.9 nights. Homewood Suites had about 6.6 million, about 48 percent, with an average of 13.1 nights.[1][2] A guest who books 12 nights fills weekends and shoulder nights that a business-transient hotel has to resell every day.\n\nChoice reports the same pattern in a lower tier. Its extended-stay brands ran 69.1 percent occupancy in 2025, against 54.9 percent for its midscale and upper midscale brands and 46.7 percent for economy.[4]\n\nThese are brand averages of hotels that met each franchisor's definition of comparable. Hilton reports that Home2 Suites' share of rooms occupied by extended stays ranged from 7 percent to 87 percent across its comparable hotels,[1] so an individual hotel can look nothing like the average. RevPAR, ADR and occupancy are defined at [What are RevPAR, ADR and occupancy, and what is a good number?](/hotel-industry/revpar-adr-occupancy)."
    },
    {
      h2: "Does higher occupancy mean an extended-stay hotel earns more?",
      lead: "Not necessarily, because extended-stay hotels trade rate for occupancy, and in the economy tier the rate discount is larger than the occupancy gain.",
      body: "Choice's 2025 figures show it. Its extended-stay brands produced RevPAR of $45.67 on 69.1 percent occupancy and a $66.10 average rate. Its midscale and upper midscale brands produced $54.50 on 54.9 percent occupancy and a $99.21 rate.[4] The extended-stay hotels were fuller and still took in less room revenue per available room.\n\nIn Hilton's system the comparison runs the other way. Multiplying the disclosed average rate by the disclosed average occupancy, which is our arithmetic and only an approximation of RevPAR, gives about $113 for Home2 Suites and about $126 for Homewood Suites, against about $106 for Hampton.[1][2][3]\n\nWhat matters to an owner is profit, not RevPAR, and this is where the public record stops. The argument for extended-stay is that a room cleaned weekly costs less to service than a room cleaned daily, and the brands do disclose the housekeeping schedules.[4] No franchise disclosure document or 10-K we read states an operating margin, a labor cost per room or a staffing count for an extended-stay brand, so this page does not publish one. Ask a seller for the trailing twelve-month statement and compare the rooms department's cost per occupied room with a transient hotel's. The cost lines are explained at [What does it cost to operate a hotel?](/hotel-industry/hotel-operating-costs)."
    },
    {
      h2: "Why are developers and investors building extended-stay hotels?",
      lead: "Developers are building extended-stay hotels because the brands disclose high occupancy, the buildings are comparatively cheap per room, and the brand companies are all pushing new prototypes.",
      body: "HVS's U.S. Hotel Development Cost Survey 2026, published July 13, 2026, says extended-stay products were again the most represented of all categories in its sample of construction budgets, led by Home2 Suites, with TownePlace Suites, Residence Inn and WoodSpring Suites among the most active brands and a meaningful number of Hyatt Studios and Hyatt House projects. Limited-service and extended-stay projects together were more than half of the sample.[9]\n\nCost is part of it. HVS reports median development costs of $170,000 to $197,000 per room for limited-service and midscale extended-stay hotels, around $200,000 for select-service and around $265,000 for upscale extended-stay, against $467,000 for full-service.[9] Hilton's 2026 disclosure for LivSmart Studios estimates $16,299,093 to $24,047,210 for a 121-room hotel, excluding real estate, which is about $134,700 to $198,700 per room by our arithmetic.[10] Home2 Suites' estimate is $18,075,688 to $26,550,592 for 107 suites, about $168,900 to $248,100 per suite.[1] More brands and budgets are at [How much does it cost to build a hotel in 2026?](/hotel-industry/cost-to-build-a-hotel).\n\nBuyers of existing hotels are looking too. JLL's first-quarter 2026 report, as Hotel Dive summarized it on May 14, 2026, says investors are zeroing in on luxury assets as well as premium select-service and extended-stay hotels.[11]"
    },
    {
      h2: "What do extended-stay brands charge in franchise fees?",
      lead: "Extended-stay franchise fees are a percentage of gross rooms revenue, like any hotel franchise, and Hilton's two brands price them differently.",
      body: "Hilton's 2026 Home2 Suites disclosure lists a monthly royalty of 6 percent of gross rooms revenue and a monthly program fee of 3.5 percent.[1] Its Homewood Suites disclosure lists a royalty for new development or conversion of 3.5 percent in the first year of operation, 4.5 percent in the second and 5.5 percent for the rest of the term, a flat 5.5 percent on a change of ownership, and a program fee of 2.5 percent.[2] Hampton, for comparison, is 6 percent plus 4 percent.[3] Hilton says it may change the program fee, within limits the documents describe.\n\nA buyer of an existing extended-stay hotel pays the change-of-ownership schedule, not the new-development ramp. Full brand pages with application fees and improvement plan fees are at [How much does a Home2 Suites franchise cost in 2026?](/hotel-franchise-costs/home2-suites) and [How much does a Homewood Suites franchise cost in 2026?](/hotel-franchise-costs/homewood-suites)."
    },
    {
      h2: "What are the risks specific to extended-stay hotels?",
      lead: "The risks specific to extended-stay hotels are new supply, dependence on a few local demand sources, and rules that treat long stays differently from hotel stays.",
      body: "Supply comes first. The same cost advantage that attracts you attracts the developer across the street, and HVS's sample shows where new projects are concentrated.[9] Choice added 28 WoodSpring Suites and 18 Everhome Suites in a single year.[4] Before buying, check what is under construction in the submarket.\n\nDemand is the second. Long stays come from a short list of sources. Hilton's LivSmart Studios disclosure says franchisees typically solicit travel planners for those who need lodging for extended stays, such as relocation consultants and corporate and government project planners.[10] A hotel whose extended-stay share is 87 percent, the top of Home2 Suites' disclosed range, lives and dies by those accounts. One at 7 percent is an ordinary transient hotel with kitchens.[1]\n\nThe third is regulatory. A stay long enough can change how occupancy tax applies and whether the property still qualifies for an SBA loan, both covered at [How is extended-stay hotel financing different?](/hotel-financing/extended-stay-financing). Tax and landlord-tenant questions are for your attorney and accountant.\n\nFinancing follows the same tests as any hotel. As of September 17, 2026, the 10-year Treasury is 4.94 percent and the maximum SBA 7(a) rate is 10.00 percent, and lenders do not publish coverage floors or spreads.[12] Buyers can start at [How do I buy a hotel?](/buy-a-hotel), owners weighing a sale at [What is involved in selling a hotel?](/sell-a-hotel), and anyone pricing one at [What is my hotel worth, and who decides?](/hotel-valuation)."
    }
  ],
  table: {
    caption: "Extended-stay brands against a transient benchmark: 2025 results as each franchisor disclosed them. Hilton figures are averages for comparable U.S. hotels from franchise disclosure documents issued March 30, 2026. Choice figures are for its U.S. franchised hotels from its fiscal 2025 10-K. Per-room build cost is our arithmetic on the Item 7 total.",
    columns: [
      "Brand or group",
      "Tier or competitors, as disclosed",
      "2025 occupancy",
      "2025 average rate",
      "Extended stays (5+ nights) as a share of room nights",
      "Royalty and program fee",
      "Item 7 estimate to build, excluding real estate"
    ],
    rows: [
      ["Homewood Suites by Hilton", "Competes with Residence Inn, Hyatt House and Staybridge Suites[5]", "78.9%[2]", "$160.14[2]", "About 48%, average stay 13.1 nights[2]", "3.5% rising to 5.5%, plus 2.5%[2]", "$23,757,245 to $34,728,465 for 131 suites, about $181,400 to $265,100 per suite[2]"],
      ["Home2 Suites by Hilton", "Competes with TownePlace Suites, Hyatt Studios and Candlewood Suites[5]", "78.0%[1]", "$144.47[1]", "About 42%, average stay 11.9 nights[1]", "6% plus 3.5%[1]", "$18,075,688 to $26,550,592 for 107 suites, about $168,900 to $248,100 per suite[1]"],
      ["LivSmart Studios by Hilton", "Midscale extended-stay[10]", "Not reported here: 2 hotels open at year-end[5]", "Not reported here", "Not reported here", "See the disclosure document[10]", "$16,299,093 to $24,047,210 for 121 rooms, about $134,700 to $198,700 per room[10]"],
      ["Hampton by Hilton (transient benchmark)", "Competes with Courtyard, Fairfield and Holiday Inn Express[5]", "71.0%[3]", "$149.08[3]", "Not an extended-stay brand", "6% plus 4%[3]", "$17,043,739 to $24,732,532 for 89 rooms, about $191,500 to $277,900 per room[3]"],
      ["Choice extended-stay brands (WoodSpring, MainStay, Suburban, Everhome)", "Economy and midscale extended-stay[4]", "69.1%[4]", "$66.10[4]", "Not disclosed", "Not read in this run", "Not read in this run"],
      ["Choice midscale and upper midscale brands (transient benchmark)", "Midscale and upper midscale[4]", "54.9%[4]", "$99.21[4]", "Not extended-stay brands", "Not read in this run", "Not read in this run"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet shows the debt cost an extended-stay project has to clear: the SBA 7(a) maximum at 10.00% and the 504 debenture rate at 6.54%, with the 10-year Treasury at 4.94% on September 17, 2026, and no lender type publishing its coverage floor.[12]"
  },
  workedExample: {
    label: "How to read Item 19 of an extended-stay franchise disclosure document, using Hilton's 2026 Home2 Suites filing",
    body: "This is a reading guide with real figures, not a projection for any hotel.\n\nStep 1, find the sample. Item 19 of the Home2 Suites document says 731 Home2 Suites hotels were operating in the U.S. at December 31, 2025, and 561 were comparable hotels, meaning open at least a full calendar year without a change of ownership, a large capital project or a business interruption. Of the 561, 559 were managed by the franchisee or its management company.[1] The averages describe those 561, not the newest 170.\n\nStep 2, read rate and occupancy together. The average room rate was $144.47 and the median $140.77, with a range from $80.04 to $263.67. Average occupancy was 78.0 percent and the median 79.1 percent.[1] A median close to the average tells you the average is not being pulled by a few outliers.\n\nStep 3, check how many hotels beat the average. Only 226 of 559 franchisee-managed hotels, 40.4 percent, met or exceeded the average room rate, while 315, or 56.4 percent, met or exceeded average occupancy.[1] More than half of owners get the occupancy. Fewer get the rate.\n\nStep 4, read the extended-stay tables, which transient brands do not have. Extended stays were about 42 percent of consumed room nights. The average share of available rooms occupied by extended stays was 33.3 percent, with a range of 7 to 87 percent, and the average extended stay lasted 11.9 nights.[1]\n\nStep 5, read the index. The average RevPAR index was 125.1, meaning comparable Home2 Suites hotels earned about 25 percent more RevPAR than the competitive sets they chose.[1] Hampton's was 120.8.[3]\n\nStep 6, note what is missing. Item 19 reports revenue measures only. It says nothing about expenses, profit or what an owner earned, so the occupancy advantage is a starting point for underwriting and not a conclusion."
  },
  faq: [
    {
      q: "How long is an extended stay at a hotel?",
      a: "Hilton counts a completed stay of 5 or more consecutive nights as an extended stay. By that measure the average extended stay in 2025 was 11.9 nights at Home2 Suites and 13.1 nights at Homewood Suites.[1][2]"
    },
    {
      q: "What is the difference between Home2 Suites and Homewood Suites?",
      a: "Both are Hilton extended-stay brands with kitchens in every suite. Homewood is the higher-priced one: a $160.14 average rate in 2025 against $144.47 at Home2, and Hilton's build estimate is $23.8 to $34.7 million for 131 suites against $18.1 to $26.6 million for 107.[1][2]"
    },
    {
      q: "Are extended-stay hotels a good investment?",
      a: "The brands disclose higher occupancy: 78.0 percent at Home2 Suites against 71.0 percent at Hampton in 2025.[1][3] They do not disclose profit. Choice's extended-stay brands had lower RevPAR than its midscale brands, so the answer depends on the tier, the market and the price.[4]"
    },
    {
      q: "Which extended-stay brands are economy priced?",
      a: "Choice Hotels places WoodSpring Suites and Suburban Studios in the economy extended-stay category and lists Extended Stay America, MyPlace, Studio 6, ECHO Suites, LivAway and InTown Suites among their competitors.[4] ECHO Suites is Wyndham's brand, with 18 open at year-end 2025.[7]"
    },
    {
      q: "How much does it cost to build an extended-stay hotel?",
      a: "HVS's 2026 survey, published July 13, 2026, reports a median of $170,000 to $197,000 per room for limited-service and midscale extended-stay hotels and around $265,000 for upscale extended-stay.[9] Hilton estimates $18.1 to $26.6 million for a 107-suite Home2 Suites, excluding land.[1]"
    },
    {
      q: "Do extended-stay hotels clean rooms every day?",
      a: "Usually not. Choice Hotels' 10-K describes bi-weekly housekeeping at WoodSpring Suites and Suburban Studios and weekly housekeeping at Everhome Suites and MainStay Suites.[4] Less frequent cleaning is the core of the lower-cost operating model."
    },
    {
      q: "How many Home2 Suites and Residence Inn hotels are there?",
      a: "Hilton counted 865 Home2 Suites properties with 95,347 rooms at December 31, 2025.[5] Marriott counted 937 Residence Inn properties with 115,333 rooms at year-end 2025, 889 of them in the U.S. and Canada.[6]"
    },
    {
      q: "Can I get an SBA loan for an extended-stay hotel?",
      a: "It can qualify, subject to SBA's test of how much revenue comes from short stays. The rule, its source and how lenders apply it are on our extended-stay financing page. The current SBA 7(a) maximum rate is 10.00 percent as of September 17, 2026.[12]"
    }
  ],
  sources: cite("home226", "homewood26", "hampton26", "choice", "hilton", "marriott", "wyndham", "hyattK", "hvsCost", "livsmart26", "jllQ1", "rates"),
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/chain-scales-and-classes",
      "/hotel-industry/cost-to-build-a-hotel",
      "/hotel-industry/hotel-operating-costs",
      "/hotel-industry/revpar-adr-occupancy"
    ],
    glossary: [
      "/glossary/revpar",
      "/glossary/adr",
      "/glossary/franchise-fdd",
      "/glossary/mpi-ari-rgi"
    ],
    data: [
      "/rates",
      "/data/sba-hotel-lending",
      "/tools/hotel-loan-sizing-calculator"
    ]
  },
  cta: {
    label: "Talk through buying, selling or financing an extended-stay hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells and finances hotels, including extended-stay properties, and represents buyers looking for them."
};

export default page;
