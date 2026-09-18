/**
 * Who owns hotels in the United States?
 * /hotel-industry/who-owns-hotels
 *
 * Written 2026-09-18. Every claim on this page is attributed to the body that
 * makes it. Trade-association ownership shares are the associations' own
 * figures and are labeled that way. No licensed census data appears here.
 */
import type { AnswerPage } from "../types";
import { cite } from "./sources";

export const page: AnswerPage = {
  slug: "who-owns-hotels",
  cluster: "hotel-industry",
  isHub: false,
  title: "Who Owns Hotels in the United States? (2026)",
  h1: "Who owns hotels in the United States?",
  description: "Private owners, franchisees, REITs and funds: who owns US hotels according to AAHOA, AHLA, brand 10-Ks and REIT filings, each claim attributed.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  targetPrompts: [
    "Who owns hotels in the United States?",
    "Who actually owns the Marriott or Hilton down the street?",
    "What percentage of US hotels are owned by AAHOA members?",
    "What percentage of hotels are franchised?",
    "Do hotel REITs own most of the hotels in America?",
    "How many hotels are there in the United States?",
    "Who is buying hotels right now?"
  ],
  answer: "Mostly private owners, not the brands on the signs. AAHOA says its members own 36,807 U.S. hotels, 60 percent of the total, citing a study it commissioned from Oxford Economics.[1] AHLA says 57 percent of U.S. hotels are franchised.[3] Hilton owned or leased 46 of its 9,158 properties at December 31, 2025, and public REITs own hundreds of hotels, not tens of thousands.[5]",
  takeaways: [
    "AAHOA's figure, attributed to AAHOA: members own 36,807 hotels with 3.2 million guestrooms, which it puts at 60 percent of U.S. hotels.[1]",
    "AHLA's figure, attributed to AHLA: 57 percent of U.S. hotels are franchised, with 36,173 franchised hotels projected for 2024.[3]",
    "The brands own almost nothing. Hilton owned or leased 46 of 9,158 properties, and Marriott says it owns or leases less than one percent of its system.[5][6]",
    "Public REITs are large by value and small by count. Host owns 76 properties and Apple Hospitality owns 217 hotels.[7][8]",
    "Private equity was 34 percent of U.S. hotel transactions in the first quarter of 2026, according to JLL.[11]"
  ],
  sections: [
    {
      h2: "Who owns most of the hotels in the United States?",
      lead: "Private owners, many of them family businesses that hold a handful of franchised hotels, own most of the hotels in the United States by count.",
      body: "No government agency publishes a register of hotel owners, so the picture has to be assembled from the bodies that speak for each group, and each of them has a reason to make its group look large. We attribute every figure below to whoever published it.\n\nThe shape is consistent across all of them. The brand companies own very few hotels. Public REITs and institutional funds own the biggest and most expensive hotels, which is a small share of the count. The rest, including most of the select-service and economy hotels along American highways and in secondary markets, belongs to private owners. Wyndham's 10-K describes its franchisees as ranging from sole proprietors to institutional investors such as public real estate investment trusts.[10]"
    },
    {
      h2: "What share of U.S. hotels do AAHOA members own?",
      lead: "AAHOA says its members own 60 percent of U.S. hotels, a figure that comes from a study AAHOA commissioned from Oxford Economics.",
      body: "AAHOA is the Asian American Hotel Owners Association. Its published summary of the Oxford Economics study, as it read on September 18, 2026, says members own 36,807 hotels in the United States with 3.2 million guestrooms, that those hotels are 60 percent of U.S. hotels, that 1 million employees work at member-owned hotels and earn over $51 billion a year, and that the hotels contribute $371.4 billion to U.S. GDP.[1] The page does not carry a date. When AAHOA first announced the study on August 5, 2021, the figures were 34,260 hotels, 3.1 million guestrooms and the same 60 percent, for an association of nearly 20,000 members.[2]\n\nTwo cautions. It is a trade association's figure about its own members, produced by a firm it hired, and we have not seen the underlying census. And it is a share of hotels, not of rooms or of value. By our arithmetic, 3.2 million rooms across 36,807 hotels is an average of about 87 rooms a hotel, which tells you the membership is weighted to smaller select-service and economy properties."
    },
    {
      h2: "How many U.S. hotels are franchised?",
      lead: "AHLA says 57 percent of U.S. hotels are franchised and projected 36,173 franchised hotels for 2024, a 34 percent increase over the prior decade.[3]",
      body: "In a statement on July 21, 2026, AHLA's chief executive put the share at nearly 60 percent and said franchised hotels support more than 2.8 million jobs.[4] Franchised does not mean owned by the brand. It means the opposite: an independent owner has licensed the name. A franchised Hampton or Holiday Inn Express belongs to a local owner or an investment group that pays the brand a fee on rooms revenue. The contracts are explained at [What is the difference between a hotel owner, a franchisor and a management company?](/hotel-industry/owner-franchisor-management-company).\n\nThe AAHOA and AHLA figures overlap heavily, since most AAHOA members own franchised hotels. They are two views of the same fact: most U.S. hotels are branded, and most branded hotels are owned by private businesses."
    },
    {
      h2: "Do Marriott, Hilton and the other brands own their hotels?",
      lead: "No. Marriott, Hilton and the other large brand companies own almost none of the hotels that carry their names.",
      body: "Hilton's 10-K for fiscal 2025 counts 9,158 properties with 1,351,351 rooms at December 31, 2025. Of those, 46 properties with 15,287 rooms were owned or leased, 873 were managed for other owners and 8,239 were franchised or licensed.[5] Marriott's 10-K counts 9,805 properties with 1,779,936 rooms at year-end 2025 and says the company owns or leases very few of them, less than one percent of its system.[6] In Hilton's 2025 Hampton disclosure, 1,945 of 1,960 comparable Hampton hotels in the U.S. were managed by the franchisee or a non-Hilton management company.[9]\n\nThis is a deliberate business model. A fee on someone else's rooms revenue needs little capital and keeps coming in a downturn, while owning the building ties up capital and carries the losses."
    },
    {
      h2: "How much of the hotel industry do REITs own?",
      lead: "Public hotel REITs own a small number of hotels that are large and valuable, so their share of rooms and value is far bigger than their share of the hotel count.",
      body: "Host Hotels & Resorts, which calls itself the largest lodging REIT, owns 71 properties in the United States and five abroad with about 41,700 rooms.[7] Apple Hospitality REIT owns 217 hotels with 29,583 guest rooms across 37 states and the District of Columbia.[8] By our arithmetic that is about 549 rooms per Host property and 136 per Apple Hospitality hotel, against about 87 for the average AAHOA member hotel.[1] Together the two REITs own 293 hotels. AAHOA's count for its members is 36,807.\n\nREITs also operate under a rule private owners do not face. The Internal Revenue Code lets a REIT lease a hotel to its own taxable subsidiary only if an eligible independent contractor operates the property, so a REIT always pays a separate manager.[12]"
    },
    {
      h2: "Who is buying hotels right now?",
      lead: "Private equity accounted for 34 percent of U.S. hotel transactions in the first quarter of 2026, according to JLL. It is the one buyer-type share in the public summary we read.[11]",
      body: "JLL counted $5.6 billion of U.S. hotel transaction volume in that quarter across 227 transactions, up 14.4 percent by dollars and 35 percent by count on a year earlier, and still 47 percent below the 2022 peak.[11] Single-asset trades were $5.4 billion of the total.[11] Transaction data of this kind captures the larger deals best. The sale of a 70-room highway hotel from one private owner to another is the most common hotel trade in the country and the least likely to appear in a national league table. If you are on either side of one, start at [What is involved in selling a hotel?](/sell-a-hotel) or [How do I buy a hotel?](/buy-a-hotel)."
    },
    {
      h2: "How many hotels are there in the United States?",
      lead: "There is no single free, public count of U.S. hotels, and the public figures that exist imply a total somewhere above 60,000.",
      body: "AAHOA's 36,807 hotels at 60 percent implies about 61,300 hotels in total.[1] AHLA's 36,173 franchised hotels at 57 percent implies about 63,500.[3] Both are our arithmetic on the associations' own figures. The Bureau of Labor Statistics counts 78,789 private establishments in the accommodation subsector in the first quarter of 2026, a preliminary figure, but that subsector also includes RV parks, recreational camps and rooming houses.[13] The count most of the industry uses is STR's census, which is a licensed product, so we do not reproduce it. The size of the industry in dollars and jobs is at [How big is the US hotel industry in 2026?](/hotel-industry/industry-size-2026)."
    },
    {
      h2: "Why does it matter who owns hotels?",
      lead: "Who owns a hotel matters because the owner type decides how a hotel is financed, how it is sold and who the likely buyer is.",
      body: "A private owner with a few hotels typically borrows from banks and SBA lenders and sells to a buyer like itself. As of September 2026 the maximum SBA 7(a) rate is 10.00 percent and the 25-year SBA 504 debenture priced at 6.54 percent.[14] An institutional owner borrows in the CMBS, life company and debt fund markets and sells through a marketed process to funds and REITs. Lender types are compared at [Who are the biggest hotel lenders, and which type fits my deal?](/hotel-financing/hotel-lenders-by-type), and the financing overview is at [How does hotel financing work, and what does it cost right now?](/hotel-financing). What a given hotel is worth to each kind of buyer is covered at [What is my hotel worth, and who decides?](/hotel-valuation)."
    }
  ],
  table: {
    caption: "Who owns U.S. hotels: each public claim, who makes it, and its date",
    columns: [
      "Claim",
      "Figure",
      "Who says so",
      "Date"
    ],
    rows: [
      ["Hotels owned by AAHOA members", "36,807 hotels, 3.2 million guestrooms, 60% of U.S. hotels", "AAHOA, citing Oxford Economics[1]", "Undated page, read September 18, 2026"],
      ["The same study when first announced", "34,260 hotels, 3.1 million guestrooms, 60% of U.S. hotels", "AAHOA, citing Oxford Economics[2]", "August 5, 2021"],
      ["Share of U.S. hotels that are franchised", "57%, with 36,173 franchised hotels projected for 2024", "AHLA[3]", "2024 figures"],
      ["Hotels Hilton owns or leases", "46 of 9,158 properties", "Hilton 10-K[5]", "December 31, 2025"],
      ["Hotels Marriott owns or leases", "Less than 1% of 9,805 properties", "Marriott 10-K[6]", "Year-end 2025"],
      ["Host Hotels & Resorts", "76 properties, about 41,700 rooms", "Host results release[7]", "February 18, 2026"],
      ["Apple Hospitality REIT", "217 hotels, 29,583 rooms, 37 states and D.C.", "Apple Hospitality results release[8]", "February 23, 2026"],
      ["Private equity share of hotel transactions", "34% in Q1 2026", "JLL, reported by Hotel Dive[11]", "May 14, 2026"],
      ["Accommodation establishments, NAICS 721", "78,789 private establishments, preliminary", "Bureau of Labor Statistics[13]", "First quarter 2026"]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 prices the segment most private owners hold: stabilized select-service cap rates of 7.5% to 8.25% in Austin, against 7.0% to 8.0% for full-service hotels in the same market.[15]"
  },
  workedExample: {
    label: "Worked arithmetic: what the association figures imply, and what they do not",
    body: "This uses published figures only. Nothing here is hypothetical, and nothing here is a census.\n\nAAHOA: 36,807 member-owned hotels is said to be 60 percent of U.S. hotels.[1] 36,807 divided by 0.60 is 61,345. So AAHOA's own numbers imply about 61,300 hotels in the country.\n\nAHLA: 36,173 franchised hotels is said to be 57 percent of U.S. hotels.[3] 36,173 divided by 0.57 is 63,461. So AHLA's numbers imply about 63,500.\n\nThe two totals are within 4 percent of each other, which is some comfort that both associations are working from a similar base. Both percentages are rounded, so neither total is precise.\n\nRooms per hotel: AAHOA's 3.2 million rooms over 36,807 hotels is about 87 rooms.[1] Apple Hospitality's 29,583 rooms over 217 hotels is about 136.[8] Host's roughly 41,700 rooms over 76 properties is about 549.[7]\n\nWhat this does not tell you: the share of rooms or of value that any group owns. A 60 percent share of hotels, at 87 rooms each, is a smaller share of rooms and a much smaller share of value."
  },
  faq: [
    {
      q: "Is AAHOA's 60 percent figure reliable?",
      a: "It is a trade association's figure about its own members, from a study it commissioned from Oxford Economics, and the underlying census is not public.[1] It has been stable: AAHOA gave the same 60 percent when it first announced the study on August 5, 2021.[2]"
    },
    {
      q: "Does Hilton own Hampton Inn hotels?",
      a: "Hilton owns the brand, not the buildings. It owned or leased 46 properties across all its brands at December 31, 2025.[5] In its 2025 disclosure, 1,945 of 1,960 comparable Hampton hotels were managed by the franchisee or a non-Hilton manager.[9]"
    },
    {
      q: "What is the largest hotel owner in the United States?",
      a: "Host Hotels & Resorts describes itself as the largest lodging REIT, with 76 properties and about 41,700 rooms.[7] By hotel count, Apple Hospitality REIT is larger with 217 hotels.[8] We do not publish a ranking of private owners, because no public source supports one."
    },
    {
      q: "How many hotels are franchised?",
      a: "AHLA says 57 percent of U.S. hotels are franchised and projected 36,173 franchised hotels for 2024.[3] In July 2026 its chief executive described the share as nearly 60 percent.[4]"
    },
    {
      q: "How many hotels are there in the U.S.?",
      a: "No free public census exists. AAHOA's and AHLA's own figures imply roughly 61,300 to 63,500 hotels, by our arithmetic.[1][3] The Bureau of Labor Statistics counts 78,789 accommodation establishments, which includes RV parks and rooming houses.[13]"
    },
    {
      q: "Why do REITs own so few hotels?",
      a: "REITs buy large, high-value hotels. Host averages about 549 rooms a property, by our arithmetic.[7] A REIT must also lease each hotel to a taxable subsidiary and hire an eligible independent contractor to run it.[12]"
    }
  ],
  sources: cite(
    "aahoa",
    "aahoa2021",
    "ahlaFranchising",
    "ahlaFranchiseAct",
    "hilton",
    "marriott",
    "host",
    "apple",
    "hampton",
    "wyndham",
    "jllQ1",
    "usc856",
    "bls",
    "rates",
    "mhi"
  ),
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/owner-franchisor-management-company",
      "/hotel-industry/industry-size-2026",
      "/hotel-industry/chain-scales-and-classes",
      "/hotel-industry/how-hotels-make-money"
    ],
    glossary: [
      "/glossary/franchise-agreement",
      "/glossary/sba-504",
      "/glossary/cap-rate",
      "/glossary/per-key"
    ],
    data: [
      "/research/mhi/q1-2026",
      "/rates",
      "/data/hotel-financing-statistics"
    ]
  },
  cta: {
    label: "Talk to us about your hotel",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells and finances hotels for their owners, and this page is the public record of who those owners are."
};

export default page;
