/**
 * What does it cost to operate a hotel?
 * /hotel-industry/hotel-operating-costs
 *
 * Written 2026-09-18. Extends /hotel-industry/how-hotels-make-money, which
 * already lists Apple Hospitality's expense lines one by one. This page covers
 * the cost side: which costs move with occupancy, labor and BLS wage data,
 * brand fees, and fixed charges. Shares of revenue are our arithmetic on
 * reported dollars and are labeled that way.
 */
import type { AnswerPage } from "../types";
import { cite } from "./sources";

export const page: AnswerPage = {
  slug: "hotel-operating-costs",
  cluster: "hotel-industry",
  isHub: false,
  title: "What Does It Cost to Operate a Hotel? Sourced Figures",
  h1: "What does it cost to operate a hotel?",
  description: "Hotel operating costs by USALI department, labor with BLS wage data, brand fees, property tax and insurance, using 2025 figures two public REITs reported.",
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon",
  targetPrompts: [
    "What does it cost to operate a hotel?",
    "What are the biggest expenses in running a hotel?",
    "How much of a hotel's revenue goes to labor?",
    "What are typical hotel operating expenses as a percentage of revenue?",
    "How much do hotel housekeepers and front desk staff get paid?",
    "Are hotel property taxes and insurance fixed costs?",
    "My hotel's expenses keep going up faster than my rates, is that normal?"
  ],
  answer: "Running a hotel took 66 to 71 cents of every revenue dollar at two public owners in 2025, before debt service, by our arithmetic. Apple Hospitality REIT reported hotel operating expense of 60.0 percent of revenue plus 6.4 percent for property taxes, insurance and other.[2] Host Hotels & Resorts' 10-K, filed February 25, 2026, says wages and benefits are about 58 percent of departmental and support expenses.[1]",
  takeaways: [
    "Labor is the largest cost. Host says wages and benefits were about 67 percent of its 2025 rooms expenses, 69 percent of food and beverage expenses and 42 percent of other departmental and support expenses.[1]",
    "Hotel pay, per the Bureau of Labor Statistics: average hourly earnings of $24.74 for all accommodation employees in July 2026, a preliminary figure, and a 2025 median of $16.78 an hour for maids and housekeeping cleaners.[3]",
    "Brand fees come off rooms revenue. Hilton's 2026 Hampton disclosure lists a 6 percent royalty and a 4 percent program fee. RLJ Lodging Trust reports royalties of 2 to 6 percent plus 1.0 to 4.3 percent for marketing and reservations.[6][7]",
    "Property taxes and insurance do not fall when occupancy falls. Apple Hospitality's line for them rose from 5.9 percent of revenue in 2024 to 6.4 percent in 2025.[2]",
    "Costs have outrun rates. AHLA reported on January 27, 2026 that the industry paid nearly $128 billion in wages and benefits in 2025 and that gross operating profit per available room was roughly 90 percent of its 2019 level.[4]"
  ],
  sections: [
    {
      h2: "What are the main categories of hotel operating costs?",
      lead: "Hotel operating costs fall into four groups under the Uniform System of Accounts for the Lodging Industry: departmental expenses, undistributed operating expenses, management fees, and non-operating expenses such as property taxes and insurance.",
      body: "Departmental expenses belong to a revenue department: rooms, food and beverage, and other operated departments. Undistributed operating expenses serve the whole building and sit on five schedules: administrative and general, information and telecommunications systems, sales and marketing, property operations and maintenance, and energy, water and waste. Management fees, base and incentive, have their own schedule. Rent, property and other taxes, and insurance are non-operating expenses. Operators often show a final line of EBITDA less a replacement reserve.[5]\n\nPublic owners compress those schedules into fewer lines. Host reports rooms, food and beverage, other departmental and support expenses, management fees and other property-level expenses.[1] Apple Hospitality reports operating, hotel administrative, sales and marketing, utilities, repair and maintenance, franchise fees and management fees, then property taxes, insurance and other.[2] The line-by-line Apple Hospitality table is at [How do hotels make money?](/hotel-industry/how-hotels-make-money). This page is about what drives the lines."
    },
    {
      h2: "Which hotel costs rise and fall with occupancy, and which do not?",
      lead: "Rooms and food and beverage costs move with occupancy and sales, while property taxes, insurance, much of the salaried payroll and debt service stay the same whether the hotel is full or empty.",
      body: "Host's 10-K lays out the split. Rooms expenses are affected mainly by occupancy, which drives housekeeping, reservation systems, room supplies, laundry and front desk costs. Food and beverage expenses correlate closely with food and beverage revenues. Other property-level expenses, which Host defines as primarily real and personal property taxes, ground rent, equipment rent and property insurance, are relatively inflexible and do not necessarily change with revenues.[1]\n\nBoth companies warn investors about what that means in a downturn. Host says debt-service payments, property taxes, insurance, utilities and employee wages and benefits are relatively inflexible, and that in a significant decrease in demand its managers may not be able to reduce the size of hotel work forces.[1] Apple Hospitality says certain personnel costs, interest expense, ground leases, property taxes, insurance and utilities are relatively fixed and generally do not decrease when hotel revenues decrease.[2] That is operating leverage in the plain sense: a 10 percent drop in revenue takes more than 10 percent out of profit. It is also why lenders stress-test a hotel's income, which you can do yourself with the [hotel DSCR calculator](/tools/dscr-calculator)."
    },
    {
      h2: "How much of a hotel's cost is labor?",
      lead: "Labor is the largest hotel operating cost, and Host Hotels & Resorts puts wages and benefits at approximately 58 percent of its rooms, food and beverage, and other departmental and support expenses.",
      body: "Host notes that wage and benefit costs are spread among several line items, which is why no single payroll line appears on its statement. By department, wages and benefits were approximately 67 percent of its 2025 rooms expenses, 69 percent of food and beverage expenses and 42 percent of other departmental and support expenses. Those expenses rose approximately 5 percent per available room in 2025, which Host attributes primarily to an overall increase in general wage rates and benefits.[1]\n\nApple Hospitality does not publish a labor percentage. It says its 2025 increase in hotel operating expense was primarily driven by increased labor costs, utility costs and repair and maintenance costs, that it continues to feel upward pressure on total payroll costs, that the rate of wage growth has slowed, and that its management companies have made progress in reducing their use of contract labor.[2]\n\nAt the industry level, AHLA's State of the Industry release of January 27, 2026 says hotels paid nearly $128 billion in wages and benefits in 2025 and projects the figure will approach $131 billion in 2026.[4] No public source we read gives a national labor cost per occupied room, so this page does not print one."
    },
    {
      h2: "What do hotel employees earn, according to the Bureau of Labor Statistics?",
      lead: "The Bureau of Labor Statistics reports average hourly earnings of $24.74 for all employees in accommodation, NAICS 721, for July 2026, a preliminary figure, and $21.94 for production and nonsupervisory employees.[3]",
      body: "The same page reports average weekly hours of 31.1 for all accommodation employees in July 2026, also preliminary. Accommodation covers hotels and motels plus RV parks, camps and rooming houses.[3]\n\nBy occupation, the 2025 Occupational Employment and Wage Statistics figures for the industry are in the table below. Maids and housekeeping cleaners are the largest occupation, with 420,800 jobs at a median of $16.78 an hour. Hotel, motel and resort desk clerks number 247,700 at a median of $16.82. Lodging managers number 38,100 at a median of $32.27 an hour, or $67,110 a year.[3]\n\nThese are wages, not the cost of an employee. Payroll taxes, workers' compensation, health coverage and paid time off sit on top, and the Bureau's industry page does not state that load for accommodation. National medians also hide the local market: a housekeeper's wage in a resort town and in a small interstate market are different numbers, and a buyer should underwrite the local one."
    },
    {
      h2: "How much do franchise and management fees add to operating costs?",
      lead: "Franchise fees are charged on rooms revenue and management fees mostly on total revenue, and together they took 7.6 to 7.7 percent of total revenue in 2025 at two REITs that report the two lines separately, by our arithmetic.",
      body: "Hilton's 2026 Hampton franchise disclosure document, issued March 30, 2026, lists a monthly royalty of 6 percent of gross rooms revenue and a monthly program fee of 4 percent.[6] RLJ Lodging Trust, which owns 93 hotels under many flags, reports a range: royalties between 2.0 and 6.0 percent of room revenue, plus 1.0 to 4.3 percent of room revenue for marketing, central reservation systems and other franchisor costs, and for certain hotels 1.5 to 3.0 percent of food and beverage revenue.[7]\n\nIn dollars, RLJ incurred $63.8 million of franchise fees and $39.0 million of management fees in 2025 against $1,349.9 million of total revenue, which is 4.7 percent and 2.9 percent by our arithmetic.[7] Apple Hospitality incurred $62.6 million of franchise royalty fees and $47.1 million of management fees against $1,412.4 million, which is 4.4 percent and 3.3 percent.[2] Brand charges such as loyalty program and reservation fees can also sit in other lines, so treat those shares as the size of the named line, not the full cost of a flag. Brand-by-brand schedules are at [How much does a hotel franchise cost?](/hotel-franchise-costs), and management contracts are at [How do hotel management agreements work, and what do they cost?](/hotel-industry/hotel-management-agreements)."
    },
    {
      h2: "Are property taxes and insurance fixed costs for a hotel?",
      lead: "Yes. Property taxes and insurance are fixed charges that are set by an assessor and an insurance market, not by how many rooms the hotel sold.",
      body: "Apple Hospitality's property taxes, insurance and other expense was $89.7 million in 2025, or 6.4 percent of total revenue, up from $84.4 million and 5.9 percent in 2024. The company attributes the increase primarily to higher property taxes in certain markets and higher liability insurance premiums, partially offset by lower property insurance premiums, and says it will continue to pursue tax assessment appeals in certain jurisdictions.[2] Host's other property-level expenses, which include property taxes, insurance, ground rent and equipment rent, were $426 million in 2025, about 7.1 percent of its hotel revenue by our arithmetic.[1]\n\nInsurance is the less predictable of the two. Host says certain costs, such as wages, benefits and insurance, may exceed the rate of inflation in any given period, and that its property policies carry per-occurrence limits and sub-limits that apply across every hotel hit by the same storm.[1] A sale can also prompt a reassessment, depending on the state, so a buyer should underwrite the taxes it expects to pay and not only the taxes the seller paid. How an assessment is challenged is explained at [How do I appeal my hotel's property tax assessment?](/hotel-valuation/property-tax-appeal)."
    },
    {
      h2: "What is left after operating costs, and what still has to come out of it?",
      lead: "About a third of revenue was left at the select-service REITs' hotels in 2025, and a replacement reserve, debt service and income taxes still come out of that third.",
      body: "Apple Hospitality's comparable hotels adjusted hotel EBITDA margin was 34.3 percent for 2025.[10] Summit Hotel Properties, another select-service owner, reported a pro forma hotel EBITDA margin of 33.4 percent for 2025, down from 35.7 percent in 2024.[8] Host, with large food and beverage operations, reported a comparable hotel EBITDA margin of 28.9 percent, down 40 basis points, and said operational improvements were offset by the increase in wages expense.[1]\n\nThe replacement reserve is the next deduction. Host says a specified percentage of gross revenues, typically 4 to 5 percent, is deposited into a reserve account for furniture, fixtures and equipment.[1] Apple Hospitality says its restricted cash includes reserves for furniture, fixtures and equipment of up to 5 percent of property revenue at certain hotels, as required by management or mortgage agreements.[2] See [FF&E reserve](/glossary/ffe-reserve).\n\nDebt service comes after that. As of September 17, 2026, the 10-year Treasury is 4.94 percent and the maximum SBA 7(a) rate is 10.00 percent, and lenders do not publish their spreads or coverage floors.[9] The income that remains is what a buyer capitalizes, which is covered at [What is my hotel worth, and who decides?](/hotel-valuation). Owners comparing a refinance with a sale can start at [How does hotel financing work, and what does it cost right now?](/hotel-financing) or [What is involved in selling a hotel?](/sell-a-hotel)."
    }
  ],
  table: {
    caption: "Two views of hotel operating cost. Top: Host Hotels & Resorts' 2025 property-level expenses, with the wage share Host disclosed and each line's share of hotel revenue (our arithmetic on $6,015 million of rooms, food and beverage and other revenue). Bottom: Bureau of Labor Statistics wages for accommodation, NAICS 721.",
    columns: [
      "Line or occupation",
      "Reported figure",
      "Second measure",
      "Source"
    ],
    rows: [
      ["Host: rooms expense", "$906 million", "15.1% of hotel revenue. Wages and benefits about 67% of the line", "Host 10-K, fiscal 2025[1]"],
      ["Host: food and beverage expense", "$1,224 million", "20.3% of hotel revenue. Wages and benefits about 69% of the line", "Host 10-K, fiscal 2025[1]"],
      ["Host: other departmental and support expenses", "$1,466 million", "24.4% of hotel revenue. Wages and benefits about 42% of the line", "Host 10-K, fiscal 2025[1]"],
      ["Host: management fees", "$262 million", "4.4% of hotel revenue", "Host 10-K, fiscal 2025[1]"],
      ["Host: other property-level expenses (property taxes, insurance, ground and equipment rent)", "$426 million", "7.1% of hotel revenue", "Host 10-K, fiscal 2025[1]"],
      ["Host: total of the five lines, before depreciation", "$4,284 million (our sum)", "71.2% of hotel revenue", "Host 10-K, fiscal 2025[1]"],
      ["Apple Hospitality: hotel operating expense", "$847.3 million", "60.0% of total revenue, as reported", "Apple Hospitality 10-K, fiscal 2025[2]"],
      ["Apple Hospitality: property taxes, insurance and other", "$89.7 million", "6.4% of total revenue, as reported", "Apple Hospitality 10-K, fiscal 2025[2]"],
      ["All accommodation employees", "$24.74 average hourly earnings, July 2026 (preliminary)", "31.1 average weekly hours", "BLS Current Employment Statistics[3]"],
      ["Production and nonsupervisory employees", "$21.94 average hourly earnings, July 2026 (preliminary)", "30.3 average weekly hours", "BLS Current Employment Statistics[3]"],
      ["Maids and housekeeping cleaners", "$16.78 median hourly wage, 2025", "420,800 jobs in accommodation", "BLS Occupational Employment and Wage Statistics[3]"],
      ["Hotel, motel and resort desk clerks", "$16.82 median hourly wage, 2025", "247,700 jobs in accommodation", "BLS Occupational Employment and Wage Statistics[3]"],
      ["Lodging managers", "$32.27 median hourly wage, 2025 ($67,110 a year)", "38,100 jobs in accommodation", "BLS Occupational Employment and Wage Statistics[3]"]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts the cost that comes after operating costs in context: the 10-year Treasury at 4.94% and the SBA 7(a) maximum at 10.00% on September 17, 2026, against a hotel-level margin of roughly a third of revenue at the select-service REITs.[9][10][8]"
  },
  workedExample: {
    label: "Hypothetical: what a one-dollar wage increase costs a 100-room hotel, using BLS hours and an assumed staffing level",
    body: "Hypothetical. The staffing level is our assumption for the arithmetic, not a published benchmark, and your hotel's will differ. The hours and wage are Bureau of Labor Statistics figures for accommodation.\n\nStaff: assume 25 hourly employees.\n\nHours: the Bureau reports average weekly hours of 31.1 for accommodation employees in July 2026, preliminary.[3] Twenty-five employees times 31.1 hours times 52 weeks is 40,430 paid hours a year.\n\nWage base: at the Bureau's $24.74 average hourly earnings for all accommodation employees,[3] those hours cost $1,000,238 a year before payroll taxes and benefits.\n\nA one-dollar raise: 40,430 hours times $1.00 is $40,430 a year, again before payroll taxes and benefits.\n\nWhat that does to value: a buyer who capitalizes income at 8 percent, a rate we chose for round arithmetic, would pay $505,375 less for the same hotel, because $40,430 divided by 0.08 is $505,375. You can change the rate at the [hotel cap rate calculator](/tools/cap-rate-calculator).\n\nWhat that does to debt: $40,430 less income is $40,430 less available for debt service every year. Lenders do not publish their coverage floors,[9] but whatever the floor is, the loan it supports shrinks with the income.\n\nThe point of the exercise is the multiplier. Host reported that its wage-driven expenses rose about 5 percent per available room in 2025.[1] A cost increase that small on the statement becomes a six-figure change in price."
  },
  faq: [
    {
      q: "What is the biggest expense in running a hotel?",
      a: "Labor. Host Hotels & Resorts says wages and benefits are approximately 58 percent of its rooms, food and beverage, and other departmental and support expenses, and about 67 percent of rooms expenses alone.[1]"
    },
    {
      q: "What percentage of hotel revenue goes to operating expenses?",
      a: "It varies by hotel type. For 2025, Apple Hospitality reported hotel operating expense of 60.0 percent of revenue plus 6.4 percent for property taxes, insurance and other.[2] Host's property-level expenses before depreciation were about 71 percent of hotel revenue by our arithmetic.[1]"
    },
    {
      q: "How much do hotel housekeepers make?",
      a: "The Bureau of Labor Statistics reports a 2025 median of $16.78 an hour, or $34,900 a year, for maids and housekeeping cleaners in accommodation, with 420,800 jobs in the industry.[3] Local wages differ widely from the national median."
    },
    {
      q: "What is the average hourly wage in the hotel industry?",
      a: "Average hourly earnings for all employees in accommodation were $24.74 in July 2026, a preliminary figure, and $21.94 for production and nonsupervisory employees, according to the Bureau of Labor Statistics.[3]"
    },
    {
      q: "Are hotel franchise fees an operating expense?",
      a: "Yes. They are paid monthly out of revenue. Hilton's 2026 Hampton disclosure lists a 6 percent royalty and a 4 percent program fee on gross rooms revenue.[6] RLJ Lodging Trust's franchise fees were $63.8 million in 2025, 4.7 percent of its total revenue by our arithmetic.[7]"
    },
    {
      q: "Why are my hotel's costs rising faster than my revenue?",
      a: "You are not alone. AHLA reported in January 2026 that rising operating expenses kept gross operating profit per available room at roughly 90 percent of 2019 levels.[4] Summit Hotel Properties' hotel EBITDA margin fell from 35.7 percent in 2024 to 33.4 percent in 2025.[8]"
    },
    {
      q: "How much should a hotel set aside for FF&E?",
      a: "Host says its management agreements typically require 4 to 5 percent of gross revenues to be deposited in a reserve for furniture, fixtures and equipment.[1] Apple Hospitality reports reserves of up to 5 percent of property revenue at certain hotels.[2]"
    },
    {
      q: "Do hotel operating costs include the mortgage?",
      a: "No. Operating costs stop above debt service. Interest and principal are paid from what is left after operating costs, fees, property taxes, insurance and a replacement reserve, which is why lenders test that remaining income against the loan payment.[5][9]"
    }
  ],
  sources: cite("hostK", "appleK", "bls", "ahla", "usaliGuide", "hampton26", "rljK", "summitPR", "rates", "apple"),
  related: {
    hub: "/hotel-industry",
    siblings: [
      "/hotel-industry/how-hotels-make-money",
      "/hotel-industry/hotel-management-agreements",
      "/hotel-industry/extended-stay-hotels",
      "/hotel-industry/how-hotel-reits-work"
    ],
    glossary: [
      "/glossary/gop",
      "/glossary/noi",
      "/glossary/ffe-reserve",
      "/glossary/dscr"
    ],
    data: [
      "/rates",
      "/tools/dscr-calculator",
      "/tools/cap-rate-calculator"
    ]
  },
  cta: {
    label: "Have us look at your hotel's income for a sale or a loan",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets sells and finances hotels, and every dollar of operating cost on this page shows up in the price a buyer pays or the loan a lender sizes."
};

export default page;
