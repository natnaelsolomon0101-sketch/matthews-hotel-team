/**
 * Ground Lease
 * Glossary term: /glossary/ground-lease
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "ground-lease",
  term: "Ground Lease",
  shortDef: "A ground lease is a long-term lease of the land under a hotel. The hotel owner owns the building and pays ground rent. For an SBA 504 loan, the lease must run at least as long as the debenture, up to 25 years.",
  fullDef: "Under a ground lease the owner holds a leasehold, not fee simple title. Ground rent is paid before debt service and lowers NOI, and the building reverts to the landowner when the lease ends. Lenders and brands both test the remaining term. SBA requires it to equal or exceed the 504 debenture term.[1]",
  body: "Ground leases are common at airports, on university or municipal land, and in urban cores. They lower the price of entry, because the buyer does not buy the land, and they add three risks.\n\nFirst, rent. Ground rent is an operating cost ahead of the mortgage. Escalations tied to inflation or revenue can grow faster than the hotel's income. Second, term. A leasehold loses value as the lease runs down. For an SBA 504 loan, the remaining term including renewal options exercisable only by the lessee must equal or exceed the term of the debenture, the borrower must assign its interest in the lease to the CDC, and the loan must be secured by a recorded lien on the leasehold.[1] Other lenders set their own minimum remaining term. Third, the brand. Hilton's 2025 Hampton franchise agreement requires the franchisee to own fee simple title or a long-term ground leasehold for a term equal to the franchise term.[2]\n\nLenders also want the landowner to give them notice and cure rights. See [NOI](/glossary/noi).",
  example: "Hypothetical. A hotel earns $1,069,000 before ground rent of $120,000, so NOI is $1,069,000 - $120,000 = $949,000. At an assumed 8.25% cap rate, the rent alone removes $120,000 / 0.0825 = $1,454,545 of value compared with owning the land. Term test for a 25-year SBA 504 debenture:[1] 18 years remaining plus two 5-year options the lessee controls = 28 years, which passes. With only one option, 18 + 5 = 23 years, which fails.",
  misconceptions: [
    "A ground lease hotel is not unfinanceable. It needs enough remaining term and a lease with lender protections.",
    "Leasehold and fee simple cap rates are not interchangeable. Buyers pay less for leasehold income because the asset reverts at the end of the term.",
    "Renewal options only count if the tenant controls them. SBA counts options exercisable only by the lessee.[1]"
  ],
  faq: [
    {
      q: "What does it mean if a hotel is on a ground lease?",
      a: "The seller owns the building and the right to use the land for the lease term, not the land itself. You take over the lease, pay ground rent, and the improvements go to the landowner at expiration."
    },
    {
      q: "Can I get a loan on a hotel with a ground lease?",
      a: "Yes, if the remaining term is long enough. For SBA 504 the lease, with options you control, must run at least as long as the debenture.[1] Other lenders set their own minimum."
    },
    {
      q: "How does ground rent affect my hotel's value?",
      a: "It reduces NOI dollar for dollar. At an assumed 8.25 percent cap rate, $120,000 of rent is about $1.45 million of value."
    },
    {
      q: "Will the brand approve a hotel on leased land?",
      a: "Hilton's 2025 Hampton agreement accepts a long-term ground leasehold with a term equal to the franchise term.[2] Other brands have their own rules."
    },
    {
      q: "What should I check in a ground lease before buying?",
      a: "Remaining term and who controls the options, rent escalations, leasehold mortgage rights, lender notice and cure rights, and what happens to the building at expiration. Use a real estate attorney. See /sell-a-hotel/documents-needed."
    }
  ],
  sources: [
    {
      label: "13 CFR 120.870, Leasing Project Property",
      url: "https://www.law.cornell.edu/cfr/text/13/120.870",
      publisher: "Legal Information Institute, Cornell Law School"
    },
    {
      label: "2025 Hampton Inn and Hampton Inn & Suites Franchise Disclosure Document, issued March 30, 2025",
      url: "https://hmd-wp.go-vip.net/wp-content/uploads/2025/03/2025-US-FDD-Hampton.pdf",
      publisher: "Hilton Franchise Holding LLC"
    }
  ],
  relatedTerms: [
    "noi",
    "cap-rate",
    "sba-504",
    "franchise-agreement"
  ],
  relatedAnswers: [
    "/hotel-valuation/how-to-value-a-hotel",
    "/sell-a-hotel/documents-needed",
    "/hotel-financing/loan-requirements"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "nate-solomon"
};

export default entry;
