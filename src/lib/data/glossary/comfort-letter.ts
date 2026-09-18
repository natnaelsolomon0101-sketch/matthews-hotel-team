/**
 * Franchise Comfort Letter
 * Glossary term: /glossary/comfort-letter
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "comfort-letter",
  term: "Franchise Comfort Letter",
  shortDef: "A comfort letter is a three-party agreement among a hotel franchisor, the owner and the lender. It gives the lender notice of franchise defaults and time to cure them. Hilton's 2025 Hampton document lists a $3,500 processing fee.",
  fullDef: "A franchise agreement is personal to the owner, so a lender that forecloses does not automatically keep the flag. The comfort letter fixes that. In Hilton's 2025 form, the lender gets copies of default notices, 15 extra days to cure, and up to 180 more days to complete a foreclosure.[1]",
  body: "The flag is a large part of a branded hotel's value, and the lender's mortgage does not reach it. Without a comfort letter, a franchisor could terminate during a foreclosure and leave the lender holding an unbranded building. That is why nearly every lender on a franchised hotel makes the letter a closing condition.\n\nHilton's 2025 Hampton Franchise Disclosure Document publishes its form. The franchisor agrees to send the lender a copy of any default notice. The lender may cure within 15 calendar days beyond the franchisee's cure period. If the default can only be cured by taking possession, the lender may get an additional 180 calendar days to complete a foreclosure, if it pays the fees due in the meantime. A lender's acquisition is not treated as a prohibited transfer. The franchisor keeps the right to terminate if a default damages the brand. The processing fee is currently $3,500, and $1,500 for an assignment. There is a separate mezzanine lender form.[1]",
  example: "Hypothetical timeline using Hilton's published form.[1] The franchisor sends a default notice with a 30-day cure period (the 30 days is an assumption). The lender's own cure window runs 15 days past that, to day 45. If the lender must foreclose to cure, the additional period adds up to 180 days, to day 225, and the lender pays the monthly franchise fees during it. Lender's maximum extra time under the form: 15 + 180 = 195 days. Cost to issue: $3,500.",
  misconceptions: [
    "A comfort letter is not a guarantee by the franchisor. It promises notice and time. It does not promise payment or that the flag stays.",
    "It does not transfer with the loan automatically. Hilton's schedule lists a separate $1,500 fee for a comfort letter assignment.[1]",
    "It is not the same as franchisor approval of a buyer. A purchaser still needs its own franchise application. See [Franchise Agreement](/glossary/franchise-agreement)."
  ],
  faq: [
    {
      q: "My lender is asking for a comfort letter from the brand. What is that?",
      a: "A short agreement among the franchisor, you and the lender. It gives the lender notice of franchise defaults, extra time to cure, and a path to keep the flag through a foreclosure.[1]"
    },
    {
      q: "How much does a franchise comfort letter cost?",
      a: "It is set by each brand. Hilton's 2025 Hampton disclosure document lists $3,500 for a lender comfort letter and $1,500 for an assignment.[1] Your lender's counsel will also bill time to negotiate it."
    },
    {
      q: "How long does it take to get a comfort letter?",
      a: "Brands do not publish a turnaround time. Request it as soon as the lender is chosen, because it needs the lender's legal name and notice address and is often one of the last closing items."
    },
    {
      q: "Can the brand still terminate my franchise if there is a comfort letter?",
      a: "Yes. In Hilton's form the franchisor may still terminate if a default damages its reputation, if a court requires it, or if the lender's additional period expires with no arrangement in place.[1]"
    },
    {
      q: "Do SBA and bank loans need a comfort letter too?",
      a: "Most lenders on a franchised hotel ask for one, whatever the loan program. Whether it is required is set by the lender. See /hotel-financing/loan-requirements."
    }
  ],
  sources: [
    {
      label: "2025 Hampton Inn and Hampton Inn & Suites Franchise Disclosure Document, issued March 30, 2025",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC"
    }
  ],
  relatedTerms: [
    "franchise-agreement",
    "franchise-fdd",
    "mezzanine-debt",
    "pip"
  ],
  relatedAnswers: [
    "/hotel-financing/loan-requirements",
    "/hotel-financing/faq",
    "/hotel-financing/how-debt-placement-works"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson"
};

export default entry;
