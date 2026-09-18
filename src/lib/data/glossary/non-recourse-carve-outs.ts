/**
 * Non-Recourse Carve-Outs (Bad-Boy Guaranty)
 * Glossary term: /glossary/non-recourse-carve-outs
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "non-recourse-carve-outs",
  term: "Non-Recourse Carve-Outs (Bad-Boy Guaranty)",
  shortDef: "Non-recourse carve-outs are exceptions that make a guarantor personally liable on an otherwise non-recourse loan. They come in 2 kinds: liability for the lender's actual loss, and full recourse for the entire debt.",
  fullDef: "On a non-recourse loan the lender looks only to the hotel for repayment. The carve-out guaranty lists acts that bring the sponsor back in. A law firm summary dated August 18, 2023 groups them as bad-boy acts and insolvency actions.[1]",
  body: "Non-recourse is standard on CMBS, life company and many debt fund loans. The lender gives up the right to chase the sponsor for a shortfall, on the condition that the sponsor does not damage the collateral or obstruct the lender.\n\nArentFox Schiff describes two tiers. The first is an indemnity for losses the lender suffers from a breach. The second is full liability for the loan, including accrued and default interest, fees and expenses. Bad-boy acts listed include misapplying funds, permitting waste, failing to pay taxes or insurance, allowing mechanics' liens, unauthorized financing or transfers, fraud and hindering the lender's remedies. Insolvency triggers include a voluntary bankruptcy filing, colluding in an involuntary one, and violating separateness covenants.[1]\n\nThe list is negotiated. Which acts sit in the full-recourse tier matters more than the rate to a sponsor's net worth. By contrast, SBA loans are recourse by design: holders of at least 20 percent generally must guarantee.[2]",
  example: "Hypothetical. A $10,000,000 non-recourse hotel loan defaults and the hotel sells at foreclosure for $8,000,000. Shortfall: $10,000,000 - $8,000,000 = $2,000,000. Case 1, no carve-out triggered: the guarantor owes $0. Case 2, the borrower diverted $150,000 of hotel revenue after default, a loss carve-out: the guarantor owes the lender's loss, $150,000. Case 3, the borrower filed a voluntary bankruptcy, a full-recourse trigger: the guarantor owes the full $2,000,000 shortfall plus interest and costs.",
  misconceptions: [
    "Non-recourse does not mean no guaranty. Almost every non-recourse hotel loan has a carve-out guaranty signed by a person or entity with real net worth.",
    "Carve-outs are not only about fraud. Unpaid property taxes, lapsed insurance or an unapproved transfer can be on the list.[1]",
    "A full-recourse trigger is not limited to the damage caused. It makes the guarantor liable for the whole debt."
  ],
  faq: [
    {
      q: "What does a bad-boy guaranty mean on my term sheet?",
      a: "You stay free of personal liability unless you commit a listed act. Some acts make you liable for the lender's loss. Others make you liable for the entire loan.[1]"
    },
    {
      q: "Which carve-outs trigger full recourse?",
      a: "It is negotiated, but voluntary bankruptcy, collusive involuntary bankruptcy, unauthorized transfers or financing, and breaches of separateness covenants are commonly placed there.[1]"
    },
    {
      q: "Can I negotiate non-recourse carve-outs?",
      a: "Yes, before the term sheet is signed. Ask to move items like late taxes or mechanics' liens into the loss tier, add cure rights, and limit liability to periods when you control the hotel."
    },
    {
      q: "Are SBA hotel loans non-recourse?",
      a: "No. Holders of at least 20 percent of the business generally must guarantee an SBA loan.[2]"
    },
    {
      q: "Who has to sign the carve-out guaranty?",
      a: "A person or entity the lender accepts, often with minimum net worth and liquidity tests. Those tests are set by the lender. See /hotel-financing/loan-requirements."
    }
  ],
  sources: [
    {
      label: "Non-Recourse Carve-Outs: Borrower and Guarantor Considerations, August 18, 2023",
      url: "https://www.afslaw.com/perspectives/alerts/non-recourse-carve-outs-borrower-and-guarantor-considerations",
      publisher: "ArentFox Schiff LLP"
    },
    {
      label: "13 CFR 120.160, Loan conditions (guarantees)",
      url: "https://www.law.cornell.edu/cfr/text/13/120.160",
      publisher: "Legal Information Institute, Cornell Law School"
    }
  ],
  relatedTerms: [
    "defeasance",
    "mezzanine-debt",
    "dscr",
    "ltv"
  ],
  relatedAnswers: [
    "/hotel-financing/cmbs-loans",
    "/hotel-financing/loan-requirements",
    "/hotel-financing/loan-workouts"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson"
};

export default entry;
