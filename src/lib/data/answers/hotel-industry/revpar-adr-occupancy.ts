/**
 * What are RevPAR, ADR and occupancy, and what is a good number?
 * /hotel-industry/revpar-adr-occupancy
 *
 * Written 2026-09-18. Every figure was read in its source on that date. The
 * national figures are the ones CoStar put in public releases, read where a
 * trade publication carried them. No subscriber data appears here.
 */
import type { AnswerPage } from "../types";
import { cite } from "./sources";

export const page: AnswerPage = {
  slug: "revpar-adr-occupancy",
  cluster: "hotel-industry",
  isHub: false,
  title: "RevPAR, ADR and Occupancy: What Is a Good Number?",
  h1: "What are RevPAR, ADR and occupancy, and what is a good number?",
  description: "Plain definitions of occupancy, ADR and RevPAR, the latest public US figures with dates, and why a good number depends on your comp set.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  targetPrompts: [
    "What's the difference between a hotel's ADR, RevPAR, and occupancy?",
    "What is a good RevPAR for a hotel?",
    "What is a good occupancy rate for a hotel?",
    "What is the average hotel occupancy rate in the US right now?",
    "How do I calculate RevPAR?",
    "What's an MPI, ARI, and RGI, and why do they matter for a hotel deal?",
    "My hotel runs 68 percent occupancy, is that good?"
  ],
  answer: "Occupancy is rooms sold divided by rooms available. ADR is room revenue divided by rooms sold. RevPAR is room revenue divided by rooms available, which equals occupancy times ADR. For 2025, CoStar reported U.S. occupancy of 62.3 percent, ADR of $160.54 and RevPAR of $100.02, in figures published January 22, 2026.[1] A good number is one that beats your competitive set.",
  takeaways: [
    "RevPAR is occupancy times ADR. For 2025: 62.3 percent times $160.54 is $100.02.[1]",
    "The latest monthly figures we read are for July 2026: 69.7 percent occupancy, $171.74 ADR and $119.77 RevPAR, up 2.3, 5.7 and 8.2 percent on the year.[2]",
    "National averages mix every kind of hotel. In 2025 Choice Hotels' system reported RevPAR of $52.85 and Host Hotels & Resorts' comparable hotels reported $229.24.[4][5]",
    "Good means above your competitive set. An index of 100 is a fair share. Hilton reports that comparable Hampton hotels averaged a RevPAR index of 121.0 in 2024.[3]",
    "RevPAR is revenue, not profit. AHLA reported in January 2026 that gross operating profit per available room was roughly 90 percent of 2019 levels.[8]"
  ],
  sections: [
    {
      h2: "What is hotel occupancy?",
      lead: "Hotel occupancy is the number of rooms sold divided by the number of rooms available over the same period, written as a percentage.",
      body: "A 100-room hotel that sells 70 rooms tonight ran 70 percent occupancy. Over a year the same hotel has 36,500 room nights to sell. CoStar reported U.S. occupancy of 62.3 percent for 2025, down 1.2 percent from 2024, the first full-year decline since 2020.[1] The monthly figure swings with the season: for July 2026 CoStar reported 69.7 percent.[2] That swing is why a single month tells you little. Compare the same month a year earlier, or use a trailing twelve months."
    },
    {
      h2: "What is ADR?",
      lead: "ADR, the average daily rate, is room revenue divided by the number of rooms sold, so it is the average price actually paid for an occupied room.",
      body: "ADR counts only sold rooms. An empty room does not pull it down, which is why ADR on its own can flatter a hotel that prices itself out of demand. U.S. ADR was $160.54 for 2025, up 0.9 percent, and $171.74 for July 2026, up 5.7 percent on July 2025.[1][2] CoStar's July release put the largest rate gain among the top 25 markets in New York City, which hosted the World Cup final: ADR up 24.0 percent to $351.18.[2] The glossary entry is at [ADR](/glossary/adr)."
    },
    {
      h2: "What is RevPAR, and how do I calculate it?",
      lead: "RevPAR, revenue per available room, is room revenue divided by rooms available, and it gives the same answer as occupancy multiplied by ADR.",
      body: "Choice Hotels' fiscal 2025 10-K describes RevPAR as the key industry standard for measuring hotel operating performance and defines it as the percentage of occupied rooms multiplied by the average daily room rate realized.[4] Check it against the national figures: 0.623 times $160.54 is $100.02, the 2025 U.S. RevPAR CoStar reported, down 0.3 percent on 2024.[1] RevPAR is the most quoted of the three because it cannot be gamed from one side. Cutting rate to fill rooms raises occupancy and lowers ADR, and RevPAR shows whether the trade was worth it.\n\nRevPAR counts room revenue only. Hotels with restaurants and meeting space also report total RevPAR, which counts every department. Host Hotels & Resorts reported comparable hotel RevPAR of $229.24 and total RevPAR of $382.83 for 2025.[5] The glossary entry is at [RevPAR](/glossary/revpar)."
    },
    {
      h2: "What are the latest national occupancy, ADR and RevPAR figures?",
      lead: "The latest full year is 2025, at 62.3 percent, $160.54 and $100.02, and the latest month we read is July 2026, at 69.7 percent, $171.74 and $119.77.[1][2]",
      body: "Both sets are CoStar's, from its STR benchmarking business. We read the full-year figures in Hotel Dive's report of January 22, 2026 and the July figures in Hotel Online's report of August 26, 2026, not on CoStar's own site, and we cite what we read.[1][2] In July, 22 of the top 25 markets posted RevPAR growth.[2] For the year ahead, CoStar and Tourism Economics forecast occupancy of 63.1 percent for 2026 and 63.4 percent for 2027, as of August 7, 2026.[7] The competing forecasts are set side by side at [What is the outlook for hotels in 2026 and 2027?](/hotel-industry/outlook-2026-2027). These are the figures the firms made public. Market, submarket and comp-set data are sold by subscription and are not republished here."
    },
    {
      h2: "What is a good RevPAR or occupancy for a hotel?",
      lead: "A good RevPAR or occupancy is one that beats the hotels you compete with, because the absolute number is set mostly by segment and market and only partly by how well the hotel is run.",
      body: "Public filings show how wide the range is. For 2025, Choice Hotels reported system occupancy of 55.6 percent, ADR of $95.05 and RevPAR of $52.85 across its franchise system.[4] Apple Hospitality REIT reported 74.1 percent, $159.09 and $117.95 at its comparable select-service hotels.[6] Host Hotels & Resorts reported 70.0 percent, $327.54 and $229.24 at its comparable luxury and upper-upscale hotels.[5] None of those is good or bad. Each is a different business.\n\nThe spread inside one brand is just as wide. Hilton's 2025 Hampton disclosure reports average occupancy of 71.7 percent for comparable Hampton hotels in 2024, with individual hotels ranging from 30.5 percent to 96.6 percent, and average room rates for Hampton Inn hotels ranging from $77.60 to $315.97.[3] A Hampton at 65 percent can be the best hotel in its market and one at 75 percent can be the worst in its market. That is why the question a buyer or lender asks is how the hotel ranks against its [comp set](/glossary/comp-set)."
    },
    {
      h2: "What are MPI, ARI and RGI?",
      lead: "MPI, ARI and RGI are index numbers that divide a hotel's occupancy, ADR and RevPAR by the same figure for its competitive set and multiply by 100, so that 100 means a fair share.",
      body: "Hilton's Hampton disclosure writes the formula out: hotel RevPAR divided by comp set RevPAR, times 100, equals RevPAR index, and an index above 100 means the hotel is taking more than its fair share.[3] The market penetration index does the same with occupancy and the average rate index does the same with ADR. Hilton reports that comparable Hampton hotels averaged an occupancy index of 109.8 and a RevPAR index of 121.0 in 2024.[3] Read those as the brand's own averages for the hotels it counts as comparable. They are not a promise for any one property.\n\nIndex numbers are what make a hotel's performance portable. A RevPAR of $95 means nothing to a buyer who does not know the market. A RevPAR index of 110 tells that buyer the hotel outsells its neighbors by ten percent, and the first thing the buyer will check is which hotels are in the set. More at [MPI, ARI and RGI](/glossary/mpi-ari-rgi)."
    },
    {
      h2: "Why is RevPAR not the same as profit?",
      lead: "RevPAR is not profit because it measures room revenue before any cost, and costs have grown faster than room revenue since 2019.",
      body: "AHLA's 2026 State of the Industry release, dated January 27, 2026, says rising operating expenses kept gross operating profit per available room at roughly 90 percent of 2019 levels.[8] Two hotels with the same RevPAR can have very different income if one pays more for labor, carries a restaurant, or sits under a heavier property tax bill. How revenue becomes income is covered at [How do hotels make money?](/hotel-industry/how-hotels-make-money)."
    },
    {
      h2: "How do buyers and lenders use these numbers?",
      lead: "Buyers and lenders use RevPAR and index trends to judge whether a hotel's income will hold, and then they value and size the loan on the income itself.",
      body: "A rising RevPAR index supports the case that income is durable. A falling one raises the question of whether the hotel needs capital, a new manager or a different flag. The income is then capitalized to reach a value, which is covered at [What is my hotel worth, and who decides?](/hotel-valuation) and [Walk me through the math on valuing a select-service hotel](/hotel-valuation/how-to-value-a-hotel). On the debt side, the same income is tested against debt service at current rates, which starts at [What do lenders require for a hotel loan?](/hotel-financing/loan-requirements). Market-level ranges for the 14 markets we cover are in the Matthews Hotel Index.[9]"
    }
  ],
  table: {
    caption: "Occupancy, ADR and RevPAR from six public sources: the same three metrics describe very different hotels",
    columns: [
      "Who and what",
      "Occupancy",
      "ADR",
      "RevPAR",
      "Period"
    ],
    rows: [
      ["All U.S. hotels, per CoStar[1]", "62.3%", "$160.54", "$100.02", "Full year 2025"],
      ["All U.S. hotels, per CoStar[2]", "69.7%", "$171.74", "$119.77", "July 2026"],
      ["Choice Hotels system[4]", "55.6%", "$95.05", "$52.85", "Full year 2025"],
      ["Apple Hospitality REIT, comparable hotels[6]", "74.1%", "$159.09", "$117.95", "Full year 2025"],
      ["Host Hotels & Resorts, comparable hotels[5]", "70.0%", "$327.54", "$229.24", "Full year 2025"],
      ["Comparable Hampton hotels, per Hilton[3]", "71.7%", "$145.82 (Hampton Inn), $152.19 (Hampton Inn & Suites)", "Not stated. RevPAR index averaged 121.0", "Full year 2024"]
    ]
  },
  originalDataPoint: {
    source: "mhi",
    ref: "/research/mhi/q1-2026",
    sentence: "The Matthews Hotel Index for Q1 2026 shows how much the market sets the number: Dallas at about 68 percent occupancy with RevPAR of $90 to $130, and Charleston at about 73 percent with RevPAR of $125 to $220, depending on segment.[9]"
  },
  workedExample: {
    label: "Hypothetical: one month at an 80-room hotel, and its three index numbers",
    body: "Hypothetical. The hotel and its competitive set are made up to show the arithmetic.\n\nRooms available: 80 rooms times 30 nights is 2,400.\n\nRooms sold: 1,704. Occupancy is 1,704 divided by 2,400, or 71.0 percent.\n\nRoom revenue: $230,040. ADR is $230,040 divided by 1,704, or $135.00.\n\nRevPAR: $230,040 divided by 2,400 is $95.85. Check it the other way: 0.71 times $135.00 is $95.85.\n\nNow the competitive set, which ran 68.0 percent occupancy at a $128.00 ADR, for a RevPAR of $87.04.\n\nMPI is 71.0 divided by 68.0, times 100, or 104.4. ARI is $135.00 divided by $128.00, times 100, or 105.5. RGI is $95.85 divided by $87.04, times 100, or 110.1.\n\nThe hotel's $95.85 is below the 2025 national RevPAR of $100.02,[1] and it is still a strong hotel, because it takes 10 percent more than its fair share of the market it actually competes in."
  },
  faq: [
    {
      q: "What is a good occupancy rate for a hotel?",
      a: "One above your competitive set's. The U.S. average was 62.3 percent in 2025.[1] Comparable Hampton hotels averaged 71.7 percent in 2024, with individual hotels between 30.5 and 96.6 percent.[3]"
    },
    {
      q: "What is the average RevPAR in the United States?",
      a: "$100.02 for full-year 2025, down 0.3 percent, according to CoStar figures reported January 22, 2026.[1] For July 2026 it was $119.77, up 8.2 percent on July 2025.[2]"
    },
    {
      q: "How do you calculate RevPAR?",
      a: "Divide room revenue by rooms available, or multiply occupancy by ADR. A hotel at 71 percent occupancy and a $135 ADR has a RevPAR of $95.85."
    },
    {
      q: "Is a higher ADR always better?",
      a: "No. ADR counts only sold rooms, so a hotel can raise ADR by pricing away demand. RevPAR shows the net effect. A rate increase that costs more in occupancy than it earns in rate lowers RevPAR."
    },
    {
      q: "What is a good RevPAR index?",
      a: "Above 100, which means more than a fair share of your competitive set's RevPAR. Hilton reports an average of 121.0 for comparable Hampton hotels in 2024.[3] Always ask which hotels are in the set."
    },
    {
      q: "Where can I get RevPAR data for my market?",
      a: "Hotel-level and comp-set data come from a paid STR report. National figures appear in CoStar's public monthly releases.[2] Our Matthews Hotel Index publishes ranges for 14 markets.[9]"
    },
    {
      q: "Does RevPAR include food and beverage revenue?",
      a: "No. RevPAR is room revenue only. Total RevPAR counts all departments. Host Hotels & Resorts reported comparable RevPAR of $229.24 and total RevPAR of $382.83 for 2025.[5]"
    }
  ],
  sources: cite("fy2025", "july2026", "hampton", "choice", "host", "apple", "forecastAug", "ahla", "mhi"),
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/how-hotels-make-money",
      "/hotel-industry/chain-scales-and-classes",
      "/hotel-industry/outlook-2026-2027",
      "/hotel-industry/industry-size-2026"
    ],
    glossary: [
      "/glossary/revpar",
      "/glossary/adr",
      "/glossary/mpi-ari-rgi",
      "/glossary/comp-set"
    ],
    data: [
      "/research/mhi/q1-2026",
      "/data/hotel-financing-statistics",
      "/rates"
    ]
  },
  cta: {
    label: "Ask how your hotel ranks",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets publishes market-level ADR, RevPAR and occupancy ranges each quarter in the Matthews Hotel Index."
};

export default page;
