/**
 * FF&E Reserve
 * Glossary term: /glossary/ffe-reserve
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "ffe-reserve",
  term: "FF&E Reserve",
  shortDef: "An FF&E reserve is money set aside each year, usually quoted as a percentage of total revenue, to replace a hotel's furniture, fixtures and equipment. HVS called 4 percent of revenues typical in 2014.",
  fullDef: "The FF&E reserve, also called the reserve for replacement, funds the periodic replacement of beds, case goods, carpet, televisions and equipment. Buyers, appraisers and lenders deduct it before NOI whether or not the owner funds it. HVS described a typical reserve as 4 percent of revenues in January 2014; your lender or franchisor sets the actual figure.[1]",
  body: "Hotel interiors wear out on a cycle of years, not decades. The reserve turns that lumpy future cost into a level annual charge, so the income a buyer capitalizes is income the hotel can sustain. The Uniform System of Accounts for the Lodging Industry, now in its 12th Revised Edition and effective January 1, 2026, is the reporting standard most hotel statements follow.[2]\n\nTwo cautions. First, the reserve is an underwriting line, not always a bank account. Many owner-operated hotels fund nothing and pay for replacements as they come. A buyer still deducts the reserve. Second, the reserve rarely covers everything. HVS found that 71 to 82 percent of hotels it appraised at sale in 2013 expected capital spending above the reserve, averaging 12 to 15 percent of the purchase price.[1] Brands also require renovations on their own schedule. Hilton's 2025 Hampton disclosure document lets the franchisor require upgrades during the term.[3] See [PIP](/glossary/pip) and [NOI](/glossary/noi).",
  example: "Hypothetical. 96 keys, total revenue $3,903,000. At an assumed 4% reserve, the annual deduction is 0.04 x $3,903,000 = $156,120, or $1,626 per key per year. Over five years that is $780,600. An owner's statement that omits the line shows NOI $156,120 higher. At an assumed 8.25% cap rate, that one line is $156,120 / 0.0825 = $1.89 million of claimed value a buyer will not pay for. The 4% and 8.25% are assumptions for the arithmetic.",
  misconceptions: [
    "The reserve is not optional in a valuation just because the owner does not fund it. Buyers and lenders deduct it regardless.",
    "The reserve does not cover a PIP. HVS's 2013 appraisal review found most sold hotels needed capital above the reserve, averaging 12 to 15 percent of price.[1]",
    "The reserve is not depreciation. Depreciation is a tax and accounting charge on past spending. The reserve is a cash allowance for future spending."
  ],
  faq: [
    {
      q: "What is an FF&E reserve on a hotel P&L?",
      a: "A yearly allowance, stated as a percentage of total revenue, for replacing furniture, fixtures and equipment. It sits below operating profit and above NOI in a buyer's or lender's underwriting."
    },
    {
      q: "What percentage should my hotel's FF&E reserve be?",
      a: "HVS called 4 percent of revenues typical in January 2014.[1] Your actual figure is set by your lender, franchise agreement or management agreement. Read those documents before assuming a number."
    },
    {
      q: "My broker added an FF&E reserve I do not actually pay. Why?",
      a: "Because every buyer and lender will. A value built on NOI without the reserve does not survive underwriting, so the honest number is the one with the reserve in it. See /hotel-valuation/how-to-value-a-hotel."
    },
    {
      q: "Does my lender hold the FF&E reserve in escrow?",
      a: "Often, yes, on CMBS and many bank loans, with monthly deposits and draws against invoices. The amount and the release terms are set by the lender in the loan agreement."
    },
    {
      q: "Can I use the FF&E reserve to pay for a PIP?",
      a: "Usually you can draw it toward eligible items, but it is rarely enough. Plan the PIP as its own capital need. See /hotel-financing/pip-and-renovation-loans."
    }
  ],
  sources: [
    {
      label: "Hotel Capitalization Rates and the Impact of Cap Ex, Suzanne R. Mellen, January 2014",
      url: "https://www.hvs.com/Jump/?f=3501.pdf&c=6766&rt=2",
      publisher: "HVS"
    },
    {
      label: "HFTP, AHLA and GFC unveil the 12th Revised Edition of the Uniform System of Accounts for the Lodging Industry, July 11, 2024",
      url: "https://www.ahla.com/news/hftp-ahla-and-gfc-unveil-groundbreaking-12th-revised-edition-uniform-system-accounts-lodging",
      publisher: "American Hotel & Lodging Association"
    },
    {
      label: "2025 Hampton Inn and Hampton Inn & Suites Franchise Disclosure Document, issued March 30, 2025",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC"
    }
  ],
  relatedTerms: [
    "noi",
    "pip",
    "gop",
    "cap-rate"
  ],
  relatedAnswers: [
    "/hotel-valuation/how-to-value-a-hotel",
    "/hotel-financing/pip-and-renovation-loans",
    "/sell-a-hotel/documents-needed"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon"
};

export default entry;
