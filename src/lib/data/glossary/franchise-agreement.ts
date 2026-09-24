/**
 * Hotel Franchise Agreement
 * Glossary term: /glossary/franchise-agreement
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "franchise-agreement",
  term: "Hotel Franchise Agreement",
  shortDef: "A hotel franchise agreement is the long-term license that lets an owner operate under a brand in exchange for fees. Hilton's 2025 Hampton terms run 22 years for new construction, with a 6 percent royalty on rooms revenue.",
  fullDef: "The agreement grants the flag, the reservation system and the standards, and it binds the owner to fees, renovations and transfer rules. It does not pass to a buyer automatically. Hilton's 2025 Hampton disclosure document lists a $200,000 change of ownership application fee and liquidated damages of up to 60 months of royalties.[1]",
  body: "Four clauses drive value in a sale or a loan. Hilton's 2025 Hampton Franchise Disclosure Document shows how one major brand writes them.[1]\n\nTerm. New construction generally expires 22 years after the effective date, and a conversion 10 to 20 years after opening. Fees. The monthly royalty is 6 percent and the program fee 4 percent of gross rooms revenue. Transfer. A sale that is not a permitted transfer needs the brand's consent, a new application and a $200,000 change of ownership fee, and usually comes with a PIP. Termination. If the brand terminates after the second anniversary of opening and before the last 60 months of the term, liquidated damages are the hotel's average monthly royalty fees multiplied by 60.\n\nThe agreement itself is attached to the FDD under Item 22, and the renewal, termination and transfer summary is Item 17.[2] Lenders want the term to outlast the loan, and they ask for a [Comfort Letter](/glossary/comfort-letter). See [PIP](/glossary/pip) and [FDD](/glossary/franchise-fdd).",
  example: "Hypothetical, using Hilton's published 2025 Hampton terms.[1] Gross rooms revenue $3,682,000. Annual royalty at 6%: 0.06 x $3,682,000 = $220,920, or $18,410 a month. If the brand terminates in year 8 of a 20-year term, liquidated damages are the average monthly royalty times 60: $18,410 x 60 = $1,104,600. A buyer planning to change flags prices that in. Annual program fee at 4%: 0.04 x $3,682,000 = $147,280.",
  misconceptions: [
    "The franchise does not transfer with the deed. The buyer applies for its own agreement and the brand can say no.",
    "Leaving a brand early is not free. Liquidated damages under Hilton's 2025 Hampton terms can equal 60 months of royalties.[1]",
    "A franchise agreement is not a management agreement. The franchisor licenses the brand. It does not run the hotel."
  ],
  faq: [
    {
      q: "Does the franchise transfer when I sell my hotel?",
      a: "No. The buyer applies to the brand for a new or assigned agreement. Hilton's 2025 Hampton document lists a $200,000 change of ownership application fee.[1] See /sell-a-hotel/how-to-sell-a-hotel."
    },
    {
      q: "How long does a hotel franchise agreement last?",
      a: "It depends on the brand and the deal. Hilton's 2025 Hampton terms are generally 22 years for new construction and 10 to 20 years for a conversion.[1]"
    },
    {
      q: "What does it cost to leave my hotel brand early?",
      a: "Read the liquidated damages clause. Under Hilton's 2025 Hampton terms, termination after year two and before the final 60 months costs the hotel's average monthly royalty times 60.[1]"
    },
    {
      q: "My franchise expires in four years. Can I still refinance?",
      a: "Lenders want the flag in place for the loan term. Whether a short remaining term is acceptable is set by the lender. Talk to the brand about an extension before you go to market. See /hotel-financing/refinance."
    },
    {
      q: "Will the brand require a PIP when I sell?",
      a: "Usually. A change of ownership is the brand's chance to bring the hotel to current standards. See /hotel-financing/pip-and-renovation-loans."
    }
  ],
  sources: [
    {
      label: "2025 Hampton Inn and Hampton Inn & Suites Franchise Disclosure Document, issued March 30, 2025",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC"
    },
    {
      label: "16 CFR 436.5, Disclosure items",
      url: "https://www.law.cornell.edu/cfr/text/16/436.5",
      publisher: "Legal Information Institute, Cornell Law School"
    }
  ],
  relatedTerms: [
    "franchise-fdd",
    "comfort-letter",
    "key-money",
    "pip"
  ],
  relatedAnswers: [
    "/sell-a-hotel/how-to-sell-a-hotel",
    "/sell-a-hotel/franchise-transfer",
    "/hotel-financing/pip-and-renovation-loans",
    "/sell-a-hotel/documents-needed",
    "/buy-a-hotel/how-to-make-an-offer"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon"
};

export default entry;
