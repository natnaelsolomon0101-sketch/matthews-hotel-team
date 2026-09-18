/**
 * How do I finance a hotel PIP or renovation?
 * Answer page: /hotel-financing/pip-and-renovation-loans
 *
 * Converted from geo/06-pages/financing/hotel-financing__pip-and-renovation-loans.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "pip-and-renovation-loans",
  cluster: "hotel-financing",
  isHub: false,
  title: "Financing a Hotel PIP or Renovation in 2026",
  h1: "How do I finance a hotel PIP or renovation?",
  description: "What a hotel PIP costs per room, how long you get to complete it, and the four ways owners fund one in 2026.",
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson",
  reviewerSlug: "nate-solomon",
  targetPrompts: [
    "How much does a PIP typically cost per room?",
    "How long do I have to complete a PIP once I get the notice?",
    "Can I get a bridge loan for a hotel PIP?",
    "Will a PIP deadline affect my ability to refinance my hotel?",
    "How do I finance a hotel renovation?",
    "Who pays for a PIP, the buyer or the seller?",
    "What happens if I miss my PIP deadline?"
  ],
  answer: "A PIP is funded four ways: cash from reserves, a future-funding facility inside a bridge loan, a capex holdback in a refinance, or a price reduction when you sell. The brand sets the scope and the deadline. A future-funding facility floats over SOFR, which was 3.85 percent for September 17, 2026.[1] Get the scope in writing before you price any of the four.",
  takeaways: [
    "The PIP scope letter is the document. Everything downstream is priced off it, so get it first.",
    "Per-room cost varies by brand, scope and market. Cite the brand's own published requirement or a public benchmark, never a remembered figure.",
    "A bridge loan with future funding is a common financing route for a large PIP.",
    "A permanent lender will usually reserve for a PIP rather than fund it.",
    "Missing a PIP deadline puts the franchise agreement at risk, which puts the loan at risk."
  ],
  sections: [
    {
      h2: "What exactly is a PIP and who decides the scope?",
      lead: "A Property Improvement Plan is the franchisor's written requirement for renovation and brand-standard upgrades, and the brand alone sets its scope and deadline.",
      body: "A PIP is issued at brand conversion, at a change of ownership, or periodically during the franchise term as the brand updates its standards. The scope letter itemizes required work, room by room and area by area, from soft goods and case goods to structural and systems upgrades, and it is the single document that everything else in this page depends on. Full definitional detail on PIP scope and typical categories is on `/glossary/pip`; this page focuses specifically on how the cost gets paid for."
    },
    {
      h2: "How long do I have to finish it?",
      lead: "The PIP completion window is set by the specific brand in the PIP notice, based on the scope of work, not by a single industry-wide rule.",
      body: "The exact deadline depends on the brand, the scope of work, and sometimes negotiated extensions tied to permitting or supply timelines. Because this figure varies by brand and by deal, cite the specific brand's own Franchise Disclosure Document for the deadline that applies to a specific property, rather than treating any single number as universal."
    },
    {
      h2: "What does a PIP cost per room?",
      lead: "Per-room PIP cost varies by brand, scope, and market, and any specific figure needs to come from the brand's own published requirement or a public industry benchmark, with a date attached.",
      body: "A light refresh, soft goods only, costs meaningfully less per key than a full renovation that includes case goods, bathrooms, and public space. A brand conversion PIP, moving a property to a new flag entirely, typically costs more than a standard-cycle PIP on an existing flag. The worked example on this page uses a hypothetical $25,000-per-key figure purely to illustrate the financing arithmetic; it is explicitly not a market benchmark, and a real PIP estimate should come from the brand's own FDD or a published industry study, dated and cited."
    },
    {
      h2: "How do I pay for it?",
      lead: "Four financing routes exist, and the right one depends on how much cash is on hand, how large the scope is, and whether a refinance or sale is already happening for other reasons.",
      body: "Cash from an accumulated FF&E reserve is the lowest-cost, fastest option when the reserve is large enough to cover the scope. A bridge loan with a future-funding facility, which draws capital as the work progresses, is a common route for a large PIP that exceeds available reserves; full detail on bridge structures is on `/hotel-financing/bridge-loans`. A capex holdback inside a refinance works when the owner is refinancing anyway and the scope is moderate. A price reduction at sale shifts the cost to the buyer's side of the ledger entirely, covered in the next section."
    },
    {
      h2: "Will my PIP block a refinance?",
      lead: "Not by itself. A lender expects PIPs on branded hotels and has standard structures to handle them; what blocks a refinance is a PIP with no funding plan attached.",
      body: "A permanent lender will typically reserve for a known, scoped PIP rather than fund the renovation itself, which is a structural reason bridge debt, not permanent debt, is the more common financing vehicle for a large PIP in progress. The interaction between refinance timing and PIP status, including what to do when both are happening at once, is covered on `/hotel-financing/refinance`."
    },
    {
      h2: "Who pays for the PIP in a sale, the buyer or the seller?",
      lead: "In practice, the buyer prices the PIP into the offer, which functions as the seller paying for it through a reduced sale price rather than through direct capital outlay.",
      body: "A buyer underwriting an acquisition with a known, open PIP will typically reduce the offer price by roughly the estimated cost of the work, sometimes with an additional discount for the disruption and execution risk of completing it post-closing. Some transactions instead require the seller to complete or fully escrow the PIP before closing, which shifts execution risk back to the seller but preserves headline price. Either structure is common; which one applies is a negotiated deal term, not a fixed rule."
    },
    {
      h2: "What happens if I miss the deadline?",
      lead: "Missing a PIP deadline puts the franchise agreement at risk of termination, which in turn puts any loan tied to that franchise agreement at risk, because most branded hotel loans require the flag to remain in place.",
      body: "Franchise agreements typically give the franchisor the right to terminate for an uncured PIP default, and a terminated franchise agreement is very often an event of default under the loan documents as well, because the lender underwrote the property as a branded asset with a specific demand-generation system attached. An owner who sees a deadline is genuinely at risk should contact the brand proactively about an extension request well before the deadline, not after it has passed."
    }
  ],
  table: {
    caption: "Four ways to fund a hotel PIP",
    columns: [
      "Method",
      "Cost",
      "Speed",
      "Best fit"
    ],
    rows: [
      [
        "FF&E reserve and cash",
        "Lowest",
        "Immediate",
        "Small scope, funded reserve"
      ],
      [
        "Bridge loan with future funding",
        "Highest ongoing",
        "Weeks to a few months to close",
        "Large scope, transitional asset"
      ],
      [
        "Capex holdback in a refinance",
        "Moderate",
        "The refinance timeline",
        "Refinancing anyway, moderate scope"
      ],
      [
        "Price reduction at sale",
        "Paid out of proceeds",
        "Sale timeline",
        "Owner is exiting and does not want the project"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet puts SOFR, the index a future-funding PIP facility floats over, at 3.85% for September 17, 2026, and marks the spread and the cost of the capex facility as not yet published.[1][2] Get both in writing from the lender before you sign the PIP scope letter."
  },
  workedExample: {
    label: "Hypothetical: funding a $2.6M PIP on 104 keys",
    body: "Hypothetical. 104 keys, a $2.6M PIP, which works out to $25,000 per key in this hypothetical, not a market figure. Twenty months to complete. NOI today $1.35M.\n\nFF&E reserve on hand, assumed at 4 percent of $4.6M revenue accrued over 3 years, is about $552,000. The remaining need is $2.6M minus $552K, or $2.05M.\n\nOn the bridge path, a future-funding facility draws the $2.05M as the work progresses. At an 8.75 percent all-in floating rate, with average outstanding of roughly half the facility over 20 months, the carry is about $2.05M times 0.5 times 8.75 percent times (20/12), or $149,000.\n\nOn the sale path, a buyer discounts the price by the full $2.6M, and usually a bit more for the disruption. So funding it yourself costs about $149,000 of carry. Handing it to a buyer costs $2.6M or more of price. That spread is why owners with the liquidity usually do the work."
  },
  faq: [
    {
      q: "What is a hotel PIP?",
      a: "A Property Improvement Plan is a franchisor's written renovation requirement, issued at conversion, sale, or periodically during the franchise term, itemizing the work required to bring the property to current brand standards."
    },
    {
      q: "How much does a hotel PIP cost per room?",
      a: "It varies by brand, scope and market. Get the specific figure from the brand's own scope letter and FDD, or a dated public industry benchmark. A hypothetical figure used for financing math is not a market estimate."
    },
    {
      q: "How long do I have to complete a PIP?",
      a: "The brand sets it in the PIP notice, based on the scope of work. There is no single industry-wide deadline. Confirm the exact date in your scope letter and franchise agreement."
    },
    {
      q: "Can I finance a PIP with a bridge loan?",
      a: "Yes. A bridge loan with a future-funding facility, drawing capital as the work progresses, is a common financing route for a PIP that exceeds available reserves."
    },
    {
      q: "Does an open PIP stop a refinance?",
      a: "Not by itself. Lenders expect PIPs and typically reserve for them. What stalls a refinance is a PIP with no funding plan or completion timeline attached."
    },
    {
      q: "Who pays for the PIP when a hotel sells?",
      a: "In practice, the buyer, through a reduced offer price that accounts for the estimated PIP cost, or the seller directly, if the deal requires completion or escrow before closing. Both structures are common."
    },
    {
      q: "What happens if I miss the PIP deadline?",
      a: "The franchisor can move to terminate the franchise agreement, which very often triggers a default under the loan documents as well. Contact the brand about an extension before the deadline, not after."
    }
  ],
  sources: [
    {
      n: 1,
      label: "Secured Overnight Financing Rate (SOFR)",
      url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
      publisher: "Federal Reserve Bank of New York",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/bridge-loans",
      "/hotel-financing/refinance",
      "/hotel-financing/refinance-or-sell",
      "/hotel-financing/loan-requirements"
    ],
    glossary: [
      "/glossary/pip",
      "/glossary/noi"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Price the PIP financing before you commit",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets prices the PIP financing and the as-is sale side by side, because owners deciding between them need one number, not two conversations."
};

export default page;
