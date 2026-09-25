/**
 * Gross Operating Profit (GOP)
 * Glossary term: /glossary/gop
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "gop",
  term: "Gross Operating Profit (GOP)",
  shortDef: "Gross operating profit is hotel revenue minus departmental and undistributed operating expenses. It comes before management fees, property taxes, insurance and the FF&E reserve, so it is always higher than NOI. In the example below it is 49.0 percent of revenue.",
  fullDef: "GOP measures what the on-site operation earns before ownership costs. It follows the Uniform System of Accounts for the Lodging Industry, whose 12th Revised Edition took effect January 1, 2026.[1] Management fees and non-operating items such as property taxes, insurance and rent come after GOP.[2]",
  body: "The USALI summary statement runs in a fixed order. Operating revenue comes first: rooms, food and beverage, other operated departments and miscellaneous income. Subtract departmental expenses to get total departmental profit. Subtract undistributed operating expenses, which are administrative and general, information and telecommunications, sales and marketing, property operations and maintenance, and utilities. The result is GOP. Management fees follow on their own line, then non-operating income and expenses, which leads to EBITDA. Operators often also show EBITDA less replacement reserve.[2]\n\nGOP is the line a manager controls, which is why management agreements often tie incentive fees to it. It is not the line a buyer capitalizes. A value comes from [NOI](/glossary/noi), after management fee, taxes, insurance and the [FF&E reserve](/glossary/ffe-reserve).\n\nUSALI is published by HFTP with AHLA. AHLA announced the 12th Revised Edition on July 11, 2024.[1] Statements that follow it can be compared across hotels, which is what a lender or buyer needs.",
  example: "Hypothetical. 96 keys. Total revenue $3,903,000. Departmental expenses $1,093,000, so departmental profit is $3,903,000 - $1,093,000 = $2,810,000. Undistributed expenses $898,000, so GOP = $2,810,000 - $898,000 = $1,912,000, a 49.0% GOP margin. GOP per available room: 96 x 365 = 35,040 room nights, $1,912,000 / 35,040 = $54.57. After franchise fees, management fee, taxes, insurance and reserve in the same hypothetical, NOI is $949,000. All inputs are assumptions.",
  misconceptions: [
    "GOP is not NOI. Management fees, property taxes, insurance and the FF&E reserve all come after GOP.",
    "A strong GOP margin does not prove a strong investment. Fixed charges such as property taxes or a ground rent can absorb it.",
    "GOP is not comparable across hotels unless both statements follow USALI. Where franchise fees or credit card commissions are booked can move it by several points."
  ],
  faq: [
    {
      q: "What does GOP mean on my hotel P&L?",
      a: "Gross operating profit: revenue less departmental and undistributed operating expenses, before management fees and ownership costs such as taxes, insurance and reserves.[2]"
    },
    {
      q: "What is the difference between GOP and NOI?",
      a: "NOI is lower. From GOP, subtract the management fee, property taxes, insurance, rent and an FF&E reserve. Buyers and lenders value the hotel on NOI. See /hotel-valuation/how-to-value-a-hotel."
    },
    {
      q: "What is GOPPAR?",
      a: "GOP per available room: GOP divided by rooms times days in the period. In the example here, $1,912,000 over 35,040 available room nights is $54.57."
    },
    {
      q: "What is a good GOP margin for a hotel?",
      a: "It depends on service level. Select-service hotels run higher margins than full-service hotels because they carry little food and beverage. We do not publish a benchmark we cannot source. See /hotel-valuation/select-service-vs-full-service."
    },
    {
      q: "Does my P&L need to follow USALI to sell my hotel?",
      a: "It is not required, but buyers and lenders will recast it that way. The 12th Revised Edition took effect January 1, 2026.[1] See /sell-a-hotel/documents-needed."
    }
  ],
  sources: [
    {
      label: "HFTP, AHLA and GFC unveil the 12th Revised Edition of the Uniform System of Accounts for the Lodging Industry, July 11, 2024",
      url: "https://www.ahla.com/news/hftp-ahla-and-gfc-unveil-groundbreaking-12th-revised-edition-uniform-system-accounts-lodging",
      publisher: "American Hotel & Lodging Association"
    },
    {
      label: "USALI P&L structure (Summary Operating Statement): a practical guide, February 23, 2026",
      url: "https://hospitalityfinancenetwork.com/usali-pl-structure-summary-operating-statement-a-practical-guide/",
      publisher: "Hospitality Finance Network"
    }
  ],
  relatedTerms: [
    "noi",
    "ffe-reserve",
    "revpar",
    "cap-rate"
  ],
  relatedAnswers: [
    "/hotel-valuation/how-to-value-a-hotel",
    "/hotel-valuation/select-service-vs-full-service",
    "/sell-a-hotel/documents-needed",
    "/sell-a-hotel/employees-when-you-sell"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon"
};

export default entry;
