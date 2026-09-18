/**
 * Defeasance
 * Glossary term: /glossary/defeasance
 *
 * Sources fetched and read 2026-09-18. Worked example arithmetic checked by script.
 */
import type { GlossaryEntry } from "./types";

export const entry: GlossaryEntry = {
  slug: "defeasance",
  term: "Defeasance",
  shortDef: "Defeasance releases a hotel from a CMBS mortgage by replacing the property with government securities that make the remaining loan payments. Tax rules bar it within 2 years of the securitization's startup day.",
  fullDef: "In a defeasance the loan is not paid off. The borrower buys a portfolio of government securities that produces every remaining payment, pledges it to the trust, and the lien on the hotel is released. Treasury regulations let a securitized mortgage keep its tax status through this swap if four conditions are met.[1]",
  body: "CMBS loans are held in REMIC trusts, and bondholders bought a fixed stream of payments. Prepaying would break that stream, so most CMBS notes prohibit prepayment and allow defeasance instead.\n\nThe rule is in 26 CFR 1.860G-2(a)(8). A defeased mortgage stays a qualified mortgage if the substitute collateral consists solely of government securities, the mortgage documents allow the substitution, the lien is released to facilitate a disposition of the property or another customary commercial transaction, and the release is not within 2 years of the startup day.[1] That last condition is why a CMBS note has a lockout at the start.\n\nCost depends on rates. When Treasury yields are below the note rate, the securities cost more than the loan balance, and the difference is the borrower's cost. When yields are above the note rate, the securities can cost less than the balance. The 10-year Treasury was 4.94 percent on September 17, 2026.[2] The borrower also pays the servicer, a securities intermediary, accountants and counsel. Compare with [Yield Maintenance](/glossary/yield-maintenance).",
  example: "Hypothetical. Loan balance $9,200,000, note rate 5.25%, four years to maturity. A defeasance consultant prices the Treasury portfolio that replicates the remaining payments at $9,350,000. Securities cost over balance: $9,350,000 - $9,200,000 = $150,000. Add an assumed $85,000 of servicer, legal and accounting fees: total cost $235,000, or $235,000 / $9,200,000 = 2.6% of the balance. If yields rise, the portfolio gets cheaper. All prices here are assumptions. Get a live quote.",
  misconceptions: [
    "Defeasance is not a prepayment. The loan stays outstanding and keeps paying bondholders from the securities. Only the hotel is released.",
    "It is not always expensive. When Treasury yields exceed the note rate, the securities can cost less than the loan balance.",
    "It is not instant. The process involves the servicer, a securities intermediary, accountants and counsel, so start weeks before a sale closing."
  ],
  faq: [
    {
      q: "What does defeasance mean on my CMBS hotel loan?",
      a: "You can release the hotel from the mortgage by pledging government securities that make every remaining payment. The loan stays in the trust.[1]"
    },
    {
      q: "How much does it cost to defease a hotel loan?",
      a: "The cost of the securities above your loan balance, plus third-party fees. It falls as Treasury yields rise toward or above your note rate. Get a quote from a defeasance consultant for your payment schedule."
    },
    {
      q: "When can I defease my loan?",
      a: "Not within 2 years of the securitization's startup day under the REMIC rules,[1] and only as your loan documents allow. Most notes state a specific lockout end date."
    },
    {
      q: "Is defeasance or yield maintenance cheaper?",
      a: "They are built on similar math, so costs are often close. Yield maintenance usually has a minimum fee. Defeasance has higher transaction costs but no floor. Your note says which applies."
    },
    {
      q: "I want to sell my hotel but have a CMBS loan. What are my options?",
      a: "Defease, or have the buyer assume the loan if the documents allow. See /hotel-financing/cmbs-loans and /hotel-financing/refinance-or-sell."
    }
  ],
  sources: [
    {
      label: "26 CFR 1.860G-2, Other rules (qualified mortgages; defeasance at paragraph (a)(8))",
      url: "https://www.law.cornell.edu/cfr/text/26/1.860G-2",
      publisher: "Legal Information Institute, Cornell Law School"
    },
    {
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets (first-party)"
    }
  ],
  relatedTerms: [
    "yield-maintenance",
    "non-recourse-carve-outs",
    "debt-yield"
  ],
  relatedAnswers: [
    "/hotel-financing/cmbs-loans",
    "/hotel-financing/refinance-or-sell",
    "/hotel-financing/refinance"
  ],
  lastUpdated: "2026-09-18",
  authorSlug: "luke-thompson"
};

export default entry;
