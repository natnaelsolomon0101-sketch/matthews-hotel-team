/**
 * Franchise Disclosure Document (FDD)
 * Glossary term: /glossary/franchise-fdd
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "franchise-fdd",
  term: "Franchise Disclosure Document (FDD)",
  shortDef: "A Franchise Disclosure Document is the 23-item disclosure a franchisor must give a prospective franchisee at least 14 calendar days before signing or paying. For a hotel it is the public source for brand fees, terms and build costs.",
  fullDef: "The FTC's Franchise Rule requires every franchisor to hand over a current FDD at least 14 calendar days before the prospect signs a binding agreement or pays.[1] The document has 23 numbered items.[2] A hotel buyer reads Items 5, 6, 7, 17 and 19 first: fees, investment, term and transfer rules, and performance data.",
  body: "The format is fixed by federal rule. Item 5 is initial fees, Item 6 other fees, Item 7 the estimated initial investment, Item 10 financing, Item 17 renewal, termination and transfer, Item 19 financial performance representations, Item 20 outlet counts, Item 21 financial statements and Item 22 the contracts themselves.[2] If the franchisor changes the agreement on its own, the prospect gets the revised version at least seven calendar days before signing.[1]\n\nFor hotel owners the FDD is the one place brand economics are public. Hilton's 2025 Hampton document, issued March 30, 2025, lists a monthly royalty of 6 percent and a program fee of 4 percent of gross rooms revenue, a $200,000 change of ownership application fee, and the lender comfort letter forms as an exhibit.[3]\n\nSeveral states require registration and post FDDs in public databases. A buyer of an existing flagged hotel receives the current FDD with the change of ownership application. See [Franchise Agreement](/glossary/franchise-agreement) and [Key Money](/glossary/key-money).",
  example: "Hypothetical fee check from a published Item 6. A hotel with $4,000,000 of gross rooms revenue under Hilton's 2025 Hampton terms pays a 6% royalty, 0.06 x $4,000,000 = $240,000, plus a 4% program fee, 0.04 x $4,000,000 = $160,000. Total $400,000 a year, or 10% of rooms revenue, before loyalty, reservation and technology charges listed elsewhere in Item 6.[3] Compare that with the franchise line on the seller's P&L before you trust the NOI.",
  misconceptions: [
    "An FDD is a disclosure, not an endorsement of the brand. The federal rule sets the format and the timing.[1][2] Read it with a franchise attorney.",
    "Item 19 is not a projection for your hotel. Hilton's own document says individual results may differ.[3]",
    "The FDD is not the contract. The franchise agreement attached under Item 22 is, and negotiated addenda change it."
  ],
  faq: [
    {
      q: "What is an FDD and why does my lender want it?",
      a: "It is the franchisor's federally required disclosure document, 23 items long.[2] Lenders use it to confirm fees, remaining term, transfer rules and the comfort letter form."
    },
    {
      q: "How long do I have to review a hotel FDD before signing?",
      a: "At least 14 calendar days between receiving the current FDD and signing a binding agreement or paying the franchisor.[1]"
    },
    {
      q: "Where can I find a hotel brand's FDD?",
      a: "Ask the brand's development team, or search the public franchise registration databases that some states run. We link Hilton's 2025 Hampton document in the sources below.[3]"
    },
    {
      q: "What are typical hotel franchise fees?",
      a: "They vary by brand, so read the brand's own Item 6. Hilton's 2025 Hampton document lists a 6 percent royalty and a 4 percent program fee on gross rooms revenue.[3]"
    },
    {
      q: "I am buying an existing Hampton Inn. Do I get a new FDD?",
      a: "Yes. A change of ownership is a new franchise application, and the brand delivers its current FDD. Hilton's 2025 document lists a $200,000 change of ownership application fee.[3] See /sell-a-hotel/documents-needed."
    }
  ],
  sources: [
    {
      label: "16 CFR 436.2, Obligation to furnish documents",
      url: "https://www.law.cornell.edu/cfr/text/16/436.2",
      publisher: "Legal Information Institute, Cornell Law School"
    },
    {
      label: "16 CFR 436.5, Disclosure items",
      url: "https://www.law.cornell.edu/cfr/text/16/436.5",
      publisher: "Legal Information Institute, Cornell Law School"
    },
    {
      label: "2025 Hampton Inn and Hampton Inn & Suites Franchise Disclosure Document, issued March 30, 2025",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC"
    }
  ],
  relatedTerms: [
    "franchise-agreement",
    "key-money",
    "comfort-letter",
    "pip"
  ],
  relatedAnswers: [
    "/sell-a-hotel/documents-needed",
    "/sell-a-hotel/franchise-transfer",
    "/hotel-financing/pip-and-renovation-loans",
    "/sell-a-hotel/how-to-sell-a-hotel"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon"
};

export default entry;
