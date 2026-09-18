/**
 * Net Operating Income (NOI)
 * Glossary term: /glossary/noi
 *
 * Converted from geo/07-pages/glossary__noi.md (Wave 1 draft).
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "noi",
  term: "Net Operating Income (NOI)",
  shortDef: "Hotel net operating income is total revenue minus operating expenses, including franchise fees, management fee, taxes, insurance and an FF&E reserve. It excludes debt service, depreciation and income taxes.",
  fullDef: "NOI is the annual cash a hotel produces from operations, before financing and taxes. It includes a management fee and an FF&E reserve whether or not the owner pays them. It is the numerator in a cap rate and in every lender sizing test, the most consequential number in a hotel deal.",
  body: "The build runs from total revenue down. Start with rooms revenue, occupancy times ADR times keys times days in the year, add other revenue such as food and beverage, meeting space and parking, and that is total revenue. From there, subtract every operating expense to reach NOI.\n\nWhat is in: departmental expenses (rooms, food and beverage, and other operated departments), undistributed expenses (administrative and general, sales and marketing, utilities, maintenance), franchise and brand fees under the Uniform System of Accounts for the Lodging Industry,[1] a management fee, property taxes, insurance, and an FF&E reserve. What is out: debt service, depreciation, amortization, income taxes, and capital expenditures. Those excluded items sit below NOI in the capital structure and tax treatment, not in the operating performance NOI is meant to isolate. For scale on franchise fees, Hilton's 2025 Hampton disclosure document lists a 6% royalty and a 4% program fee on gross rooms revenue.[2]\n\nThe two lines owners most often leave out are the management fee on a self-managed hotel and the FF&E reserve. An owner running the property personally, with no third-party management contract, often reports a P&L with no management fee at all, which overstates NOI relative to how the asset would perform under new ownership. The FF&E reserve gets skipped for a similar reason: an owner who has been deferring reserve funding shows a higher trailing NOI than the asset can sustain once a buyer, or the franchise agreement, requires the reserve to be funded. Buyers restore both lines during underwriting regardless of how the seller's books are kept.\n\nProperty tax reassessment at sale is the line that surprises sellers most. In many jurisdictions, a sale price becomes the new assessed value, producing a higher property tax bill than the seller has been paying. California, for example, requires the assessor to reassess to current market value when ownership changes.[3] A buyer underwrites the reassessed number, not the current one, which means the seller's trailing NOI can overstate what the buyer will actually realize going forward, independent of any operational change.\n\nLenders and buyers do not always use the same NOI. A bridge lender financing a transitional asset often sizes to a pro forma, stabilized NOI that assumes a completed business plan; a permanent lender or a buyer valuing a stabilized asset more often uses trailing twelve months, sometimes adjusted for a documented one-time event. Normalizations, adding back a genuine one-time legal settlement or an insurance recovery, are legitimate when documented. Undocumented add-backs, personal expenses run through the business, related-party arrangements without support, do not survive a buyer's audit and are the most common source of a re-trade in due diligence.\n\nNOI, not RevPAR, is the value driver, even though RevPAR is the number everyone quotes first. RevPAR measures revenue per available room; a cap rate is applied to NOI, the profit remaining after the full expense stack. Two hotels with identical RevPAR can have very different values if their expense structures differ, which is why a serious valuation conversation moves past RevPAR quickly and into the NOI build shown in the example below.",
  example: "Hypothetical. 96 keys, 71% occupancy, $148 ADR. Rooms revenue = 0.71 x $148 x 96 x 365 = $3,682,000. Other revenue = $221,000. Total revenue = $3,903,000. Less departmental $1,093,000, undistributed $898,000, franchise and brand $405,000, management fee $117,000, taxes and insurance $285,000, FF&E reserve $156,000. NOI = $949,000. Remove the management fee and the FF&E reserve, as owner-prepared statements often do, and NOI reads $1,222,000. At an 8.25% cap that is a $3.3M difference in value from two line items. Every percentage above is an assumption for this hypothetical, not a benchmark.",
  misconceptions: [
    "NOI is not cash flow. It is before debt service and before capital expenditures, so a hotel with positive NOI can still consume cash.",
    "NOI is not EBITDA as a hotel operator uses the term. The FF&E reserve and the management fee are the usual differences, and they are exactly the lines a buyer will restore."
  ],
  faq: [
    {
      q: "How do I calculate hotel NOI?",
      a: "Total revenue minus departmental expenses, undistributed expenses, franchise and brand fees, a management fee, property taxes, insurance and an FF&E reserve. See the line-by-line build at /hotel-valuation/how-to-value-a-hotel."
    },
    {
      q: "Does NOI include an FF&E reserve?",
      a: "Yes, at the percentage of revenue the franchise, management agreement or lender requires. Owner-prepared statements often omit it, and buyers add it back."
    },
    {
      q: "Should I include a management fee if I self-manage?",
      a: "Yes. Buyers underwrite a market management fee regardless of how the current owner operates, since the buyer may bring in a different operator."
    },
    {
      q: "What is the difference between NOI and cash flow?",
      a: "NOI excludes debt service, depreciation and capital expenditures. A hotel can show healthy NOI and still have negative cash flow after loan payments and a major renovation."
    },
    {
      q: "Do property taxes get reassessed when a hotel sells?",
      a: "Often, yes, in many jurisdictions, including California, based on the sale price rather than the prior assessment.[3] Buyers underwrite the reassessed figure, not the seller's current tax bill."
    }
  ],
  sources: [
    {
      label: "HFTP, AHLA and GFC unveil the 12th Revised Edition of the Uniform System of Accounts for the Lodging Industry (adopted January 1, 2026)",
      url: "https://www.ahla.com/news/hftp-ahla-and-gfc-unveil-groundbreaking-12th-revised-edition-uniform-system-accounts-lodging",
      publisher: "American Hotel & Lodging Association"
    },
    {
      label: "2025 Hampton Franchise Disclosure Document (issued March 30, 2025), Items 5, 6 and 17 and Franchise Agreement section 12.2.2",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC"
    },
    {
      label: "Change in ownership, frequently asked questions (Proposition 13 reassessment)",
      url: "https://www.boe.ca.gov/proptaxes/faqs/changeinownership.htm",
      publisher: "California State Board of Equalization"
    }
  ],
  relatedTerms: [
    "cap-rate",
    "revpar",
    "adr"
  ],
  relatedAnswers: [
    "/hotel-valuation/how-to-value-a-hotel",
    "/hotel-valuation/hotel-cap-rates",
    "/hotel-financing/loan-requirements"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon"
};

export default entry;
