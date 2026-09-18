/**
 * How do hotels make money?
 * /hotel-industry/how-hotels-make-money
 *
 * Written 2026-09-18. Every figure was read in its source on that date. The
 * percentages of revenue are our arithmetic on the dollar figures each company
 * reports, and the page says so wherever one appears.
 */
import type { AnswerPage } from "../types";
import { cite } from "./sources";

export const page: AnswerPage = {
  slug: "how-hotels-make-money",
  cluster: "hotel-industry",
  isHub: false,
  title: "How Do Hotels Make Money? Revenue, Costs and Margins",
  h1: "How do hotels make money?",
  description: "Where hotel revenue comes from, how the USALI statement is laid out, and the hotel-level margins two public REITs reported for 2025.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  targetPrompts: [
    "How do hotels make money?",
    "What is the profit margin on a hotel?",
    "Where does most of a hotel's revenue come from?",
    "Do hotels make money on food and beverage or is it all rooms?",
    "What does a hotel P&L look like?",
    "What is USALI and why does my lender want my financials in that format?",
    "How much of a hotel's revenue goes to the brand and the management company?"
  ],
  answer: "Hotels make money mostly by selling rooms. Apple Hospitality REIT reported on February 23, 2026 that rooms were $1,278.4 million of its $1,412.4 million of 2025 revenue, and that its comparable hotels kept 34.3 percent of revenue as hotel-level EBITDA.[1] Host Hotels & Resorts, with large food and beverage operations, reported a 28.9 percent comparable hotel EBITDA margin.[2]",
  takeaways: [
    "Rooms were 90.5 percent of 2025 revenue at Apple Hospitality's 217 select-service hotels and about 60 percent at Host's luxury and upper-upscale hotels. The percentages are our arithmetic on their reported dollars.[1][2]",
    "Rooms carry the profit. Host's rooms department cost $906 million against $3,608 million of revenue. Its food and beverage department cost $1,224 million against $1,803 million.[2]",
    "Hotel statements follow one format, the Uniform System of Accounts for the Lodging Industry. Its 12th Revised Edition took effect January 1, 2026.[3]",
    "Brand and management fees are visible in public filings: Apple Hospitality paid $62.6 million of franchise fees and $47.1 million of management fees in 2025.[1]",
    "Revenue recovered faster than profit. AHLA reported in January 2026 that gross operating profit per available room was roughly 90 percent of its 2019 level.[6]"
  ],
  sections: [
    {
      h2: "Where does a hotel's revenue come from?",
      lead: "A hotel's revenue comes from rooms first, then food and beverage, then everything else a guest can be charged for, and the split depends on how much of a building the hotel has besides bedrooms.",
      body: "Two public companies show the two ends of the range. Apple Hospitality REIT owns 217 hotels with 29,583 guest rooms, nearly all of them Hilton and Marriott select-service brands such as Hampton, Hilton Garden Inn, Courtyard and Residence Inn. For 2025 it reported room revenue of $1,278.4 million, food and beverage revenue of $65.7 million and other revenue of $68.3 million, for a total of $1,412.4 million.[1] By our arithmetic that is 90.5 percent rooms, 4.7 percent food and beverage and 4.8 percent other.\n\nHost Hotels & Resorts describes itself as one of the largest owners of luxury and upper-upscale hotels, with 76 properties and roughly 41,700 rooms. For 2025 it reported rooms revenue of $3,608 million, food and beverage revenue of $1,803 million and other revenue of $604 million, plus $99 million of condominium sales that have nothing to do with running a hotel.[2] Leaving the condominiums out, rooms were 60.0 percent of hotel revenue, food and beverage 30.0 percent and other 10.0 percent. Host also reports the same idea per room: comparable hotel RevPAR of $229.24 against total RevPAR of $382.83, so each available room produced about $153 a night of revenue that was not room rent.[2]"
    },
    {
      h2: "Which hotel departments actually make the profit?",
      lead: "The rooms department makes most of a hotel's profit, because a sold room costs little to service compared with a meal, which needs a kitchen, a staff and food.",
      body: "Host's 2025 statement of operations puts numbers on it. The rooms department's expenses were $906 million against $3,608 million of rooms revenue, so the department kept about 74.9 percent of its revenue. Food and beverage expenses were $1,224 million against $1,803 million of revenue, so that department kept about 32.1 percent.[2] Those two percentages are our arithmetic on Host's reported figures, and they are departmental margins, before any of the hotel's overhead.\n\nThis is why select-service hotels exist. A hotel with a breakfast bar and no restaurant gives up a low-margin revenue line and the staff that goes with it. It is also why a full-service hotel is harder to finance on a thin year: a larger share of its revenue comes from departments that keep a third of each dollar. The investment comparison is at [What is the difference between select-service and full-service hotel investment?](/hotel-valuation/select-service-vs-full-service)."
    },
    {
      h2: "How is a hotel profit and loss statement laid out?",
      lead: "A hotel profit and loss statement follows the Uniform System of Accounts for the Lodging Industry, or USALI, which sorts revenue and expense the same way at every hotel so that statements can be compared.",
      body: "USALI is published by Hospitality Financial and Technology Professionals. AHLA's release on the current edition calls it the authoritative standard for lodging financial and operating reporting, and the 12th Revised Edition was released July 11, 2024 with an adoption date of January 1, 2026.[3] The changes in that edition include an Energy, Water and Waste schedule in place of the old Utilities schedule, a section for all-inclusive hotels, new lines for guest loyalty program costs, and new schedules for payroll full-time equivalents and for annual mandatory brand and operator costs.[3]\n\nThe summary operating statement runs in a fixed order. Operating revenue comes in four categories: rooms, food and beverage, other operated departments, and miscellaneous income. Each department's direct expenses come off to give total departmental income. Then come five undistributed operating expense schedules: administrative and general, information and telecommunications systems, sales and marketing, property operations and maintenance, and energy, water and waste. What remains is gross operating profit. Management fees come next, then non-operating income and expenses such as property taxes, insurance and rent, which leaves EBITDA. An operator's version usually ends at EBITDA less a replacement reserve. An owner's version carries on through interest, depreciation and taxes to net income.[4]\n\nA lender or buyer will ask for statements in this format because it lets them compare your hotel's cost lines with others'. The terms are defined at [gross operating profit](/glossary/gop), [NOI](/glossary/noi) and [FF&E reserve](/glossary/ffe-reserve)."
    },
    {
      h2: "What does a select-service hotel's cost structure look like in a real filing?",
      lead: "Apple Hospitality REIT's 2025 results list its hotel expenses line by line, and together they took about two thirds of revenue.",
      body: "Against $1,412.4 million of total revenue, Apple Hospitality reported operating expense of $362.0 million, hotel administrative expense of $125.9 million, sales and marketing of $127.0 million, utilities of $51.4 million, repair and maintenance of $71.3 million, franchise fees of $62.6 million and management fees of $47.1 million. Property taxes, insurance and other came to $89.7 million.[1] The table below shows each as a share of revenue, which is our arithmetic.\n\nTwo lines deserve a second look. Franchise fees of $62.6 million are 4.9 percent of Apple Hospitality's room revenue. That is lower than a single brand's headline schedule, such as the 6 percent royalty and 4 percent program fee in Hilton's 2025 Hampton disclosure,[5] but the two are not the same measurement. We cannot tell from the release which brand charges sit in the franchise fee line and which sit in other lines, so read 4.9 percent as the size of that line and not as the full cost of the flags. Management fees of $47.1 million are 3.3 percent of total revenue. Host reported management fees of $262 million, about 4.4 percent of its hotel revenue.[2] How those two contracts work is at [What is the difference between a hotel owner, a franchisor and a management company?](/hotel-industry/owner-franchisor-management-company)."
    },
    {
      h2: "What profit margin do hotel owners actually report?",
      lead: "For 2025, Apple Hospitality reported a comparable hotels adjusted hotel EBITDA margin of 34.3 percent and Host reported a comparable hotel EBITDA margin of 28.9 percent.[1][2]",
      body: "Both are hotel-level measures. Apple Hospitality says its adjusted hotel EBITDA leaves out corporate general and administrative expense in order to isolate property-level performance.[1] Each company defines its own measure, so the two margins are close cousins, not the same calculation.\n\nNeither margin is what the owner takes home. Both are before interest and principal on the mortgage, before the capital an owner has to keep putting back into rooms and public space, and before income taxes. A select-service hotel that keeps a third of its revenue at the hotel level still has to cover a replacement reserve and debt service out of that third. That is the number a lender tests, and you can run your own at the [hotel DSCR calculator](/tools/dscr-calculator)."
    },
    {
      h2: "Why has hotel profit lagged hotel revenue?",
      lead: "Hotel profit has lagged revenue because operating expenses, labor above all, rose faster than room rates.",
      body: "AHLA's 2026 State of the Industry release, dated January 27, 2026, says rising operating expenses kept gross operating profit per available room at roughly 90 percent of 2019 levels, and that the industry paid nearly $128 billion in wages and benefits in 2025.[6] The REITs show the same pressure in their own words. Apple Hospitality's 34.3 percent margin for 2025 was down 190 basis points from 2024, and Host's 28.9 percent was down 40 basis points.[1][2] A hotel can post record revenue and still be worth less than it was if the cost of producing that revenue grew faster."
    },
    {
      h2: "How does hotel income turn into value and loan proceeds?",
      lead: "Buyers divide a hotel's net operating income by a cap rate to get value, and lenders divide the same income by debt service to decide how much they will lend.",
      body: "That is why the statement format matters so much: a missing management fee or reserve overstates income, and the buyer or lender will put it back. As of September 17, 2026, the 10-year Treasury is 4.94 percent and the maximum SBA 7(a) rate is 10.00 percent, and lenders do not publish the spreads or coverage floors they apply on top.[7] The method for turning income into a price is at [Walk me through the math on valuing a select-service hotel](/hotel-valuation/how-to-value-a-hotel). The financing side starts at [How does hotel financing work, and what does it cost right now?](/hotel-financing), and owners weighing a sale can start at [What is involved in selling a hotel?](/sell-a-hotel)."
    }
  ],
  table: {
    caption: "Apple Hospitality REIT, full-year 2025: hotel revenue and expense lines as reported, with each line's share of total revenue (our arithmetic)",
    columns: [
      "Line, as the company labels it",
      "2025, $ millions",
      "Share of total revenue"
    ],
    rows: [
      ["Room revenue", "1,278.4[1]", "90.5%"],
      ["Food and beverage revenue", "65.7[1]", "4.7%"],
      ["Other revenue", "68.3[1]", "4.8%"],
      ["Total revenue", "1,412.4[1]", "100.0%"],
      ["Operating expense", "362.0[1]", "25.6%"],
      ["Hotel administrative expense", "125.9[1]", "8.9%"],
      ["Sales and marketing expense", "127.0[1]", "9.0%"],
      ["Utilities expense", "51.4[1]", "3.6%"],
      ["Repair and maintenance expense", "71.3[1]", "5.0%"],
      ["Franchise fees", "62.6[1]", "4.4%"],
      ["Management fees", "47.1[1]", "3.3%"],
      ["Property taxes, insurance and other", "89.7[1]", "6.4%"],
      ["Comparable hotels adjusted hotel EBITDA margin, as reported", "n/a", "34.3%[1]"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet shows what hotel income has to cover: with the 10-year Treasury at 4.94% on September 17, 2026 and the SBA 7(a) maximum at 10.00%, debt service takes a large share of the third of revenue a select-service hotel keeps at the property level.[7]"
  },
  workedExample: {
    label: "Hypothetical: scaling a 100-room select-service hotel from one REIT's reported ratios",
    body: "Hypothetical. The ratios are Apple Hospitality's reported 2025 results, which describe 217 hotels it chose to own, and your hotel will differ.\n\nStart with rooms revenue. At the 2025 national RevPAR of $100.02, a 100-room hotel has 36,500 available room nights and rooms revenue of $3,650,730. We use that RevPAR only to have a starting number.\n\nGross up to total revenue. If rooms are 90.5 percent of revenue, as they were for Apple Hospitality,[1] total revenue is $3,650,730 divided by 0.905, or $4,033,956. Food, beverage and other income are the remaining $383,226.\n\nApply the reported margin. At Apple Hospitality's 34.3 percent comparable hotels margin,[1] hotel-level EBITDA is $1,383,647. About $2.65 million went to running the hotel, paying the brand and the manager, and paying property taxes and insurance.\n\nWhat is still to come out of the $1,383,647: a replacement reserve for furniture and equipment, interest and principal on the loan, and income taxes. The first two are what a lender looks at when it sizes a loan."
  },
  faq: [
    {
      q: "What is a typical hotel profit margin?",
      a: "There is no single figure. For 2025, Apple Hospitality REIT reported a 34.3 percent comparable hotels adjusted hotel EBITDA margin on select-service hotels, and Host Hotels & Resorts reported 28.9 percent on luxury and upper-upscale hotels.[1][2] Both are before debt service and capital spending."
    },
    {
      q: "Do hotels make money on food and beverage?",
      a: "Less than on rooms. Host's 2025 food and beverage department had $1,224 million of expenses against $1,803 million of revenue, keeping about 32 percent. Its rooms department kept about 75 percent.[2] Both percentages are our arithmetic on Host's figures."
    },
    {
      q: "What is USALI?",
      a: "The Uniform System of Accounts for the Lodging Industry, the standard format for hotel financial statements. It is published by Hospitality Financial and Technology Professionals, and the 12th Revised Edition has an adoption date of January 1, 2026.[3]"
    },
    {
      q: "What is the difference between GOP and NOI?",
      a: "Gross operating profit is revenue less departmental and undistributed operating expenses. Management fees, property taxes, insurance and a replacement reserve still come out below it before you reach the net operating income a buyer or lender underwrites.[4]"
    },
    {
      q: "How much of a hotel's revenue goes to the brand?",
      a: "It depends on the brand and what you count. Hilton's 2025 Hampton disclosure lists a 6 percent royalty and a 4 percent program fee on gross rooms revenue.[5] Apple Hospitality's franchise fee line for 2025 was $62.6 million, 4.9 percent of its room revenue.[1]"
    },
    {
      q: "Why do lenders want hotel financials in USALI format?",
      a: "Because every line means the same thing at every hotel, so a lender can compare your costs with other hotels' and see whether a management fee or reserve is missing. The 12th edition added a schedule for mandatory brand and operator costs for the same reason.[3]"
    }
  ],
  sources: cite("apple", "host", "usali", "usaliGuide", "hampton", "ahla", "rates"),
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/revpar-adr-occupancy",
      "/hotel-industry/owner-franchisor-management-company",
      "/hotel-industry/chain-scales-and-classes",
      "/hotel-industry/industry-size-2026"
    ],
    glossary: [
      "/glossary/gop",
      "/glossary/noi",
      "/glossary/ffe-reserve",
      "/glossary/revpar"
    ],
    data: [
      "/rates",
      "/tools/dscr-calculator",
      "/data/hotel-financing-statistics"
    ]
  },
  cta: {
    label: "Have us look at your hotel's statement",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells and finances hotels, and the statement format on this page is the one buyers and lenders underwrite."
};

export default page;
