/**
 * Key Money
 * Glossary term: /glossary/key-money
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "key-money",
  term: "Key Money",
  shortDef: "Key money is a cash payment a hotel brand makes to an owner for signing or converting to its flag. It is usually forgiven in equal parts over the franchise term, such as 1/20th a year over 20 years.",
  fullDef: "Brands call it a development incentive. Hilton's 2025 Hampton disclosure document says the incentive is not a loan but a contingent liability: it bears no interest and need not be repaid unless the franchise ends early or the hotel is transferred. The repayable balance falls by an equal share each year.[1]",
  body: "Key money is how a brand competes for a hotel it wants. It is negotiated deal by deal, and brands do not publish the amounts. What is public is the mechanism. Franchisors must disclose financing arrangements in Item 10 of the FDD.[2]\n\nHilton's 2025 Hampton document describes its version. The owner and its principals sign a development incentive note when they sign the franchise agreement. The money is paid within 30 days after the hotel opens, provided the PIP is complete and the application fee is paid. For each year the hotel is open, the repayable amount drops by an equal fraction of the term: 1/10th a year on a 10-year term, 1/20th on a 20-year term. If the franchise terminates early, or the hotel is transferred and the buyer does not assume the note, the unamortized balance is due. Unpaid amounts accrue interest at 1.5 percent a month.[1]\n\nFor a seller, that balance is a closing cost. For a buyer, assuming it is a liability. See [Franchise Agreement](/glossary/franchise-agreement).",
  example: "Hypothetical, using Hilton's published mechanics.[1] A brand pays $500,000 of key money on a 20-year franchise. Each year open forgives $500,000 / 20 = $25,000. The owner sells after 6 full years. Forgiven: 6 x $25,000 = $150,000. Repayable: $500,000 - $150,000 = $350,000. Either the seller pays $350,000 at closing, or the brand lets the buyer assume the note and the buyer prices that in. The $500,000 is an assumption. Brands do not publish amounts.",
  misconceptions: [
    "Key money is not free. It is a note that is forgiven over time, and the unforgiven part comes due on an early exit or a sale.[1]",
    "It is not a loan in the brand's own words, and it carries no interest unless it becomes repayable and goes unpaid.[1]",
    "It does not reduce your franchise fees. Royalty and program fees run on the normal schedule."
  ],
  faq: [
    {
      q: "What is key money in a hotel franchise deal?",
      a: "A cash incentive from the brand for choosing its flag, documented as a note and forgiven in equal yearly parts over the franchise term.[1]"
    },
    {
      q: "Do I have to pay key money back if I sell my hotel?",
      a: "Under Hilton's 2025 Hampton terms, yes, the then-current repayable amount is due on a transfer unless the brand lets the buyer assume the note.[1] Check your own note."
    },
    {
      q: "How much key money can I get for converting my hotel?",
      a: "Brands do not publish amounts. Hilton's document says incentives are offered at its sole discretion when business circumstances warrant.[1] Size, market and how much the brand wants the location drive the offer."
    },
    {
      q: "When is key money actually paid?",
      a: "Under Hilton's 2025 Hampton terms, within 30 days after the hotel opens under the brand, if the PIP is complete and the application fee is paid.[1] It does not fund the renovation itself."
    },
    {
      q: "Will my lender count key money as equity?",
      a: "That is set by the lender. Because the money arrives after opening, it usually cannot fund the PIP draw schedule. See /hotel-financing/pip-and-renovation-loans."
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
    "franchise-agreement",
    "franchise-fdd",
    "pip"
  ],
  relatedAnswers: [
    "/hotel-financing/pip-and-renovation-loans",
    "/sell-a-hotel/how-to-sell-a-hotel",
    "/sell-a-hotel/documents-needed"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon"
};

export default entry;
