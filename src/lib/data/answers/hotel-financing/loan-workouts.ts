/**
 * What is a loan workout and how does it work for a distressed hotel?
 * Answer page: /hotel-financing/loan-workouts
 *
 * Converted from geo/06-pages/financing/hotel-financing__loan-workouts.md (Wave 1 draft).
 * Do not hand-edit prose here without bumping `lastUpdated`.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "loan-workouts",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Loan Workouts and Special Servicing",
  h1: "What is a loan workout and how does it work for a distressed hotel?",
  description: "What happens when a hotel loan goes to special servicing, what a workout can and cannot fix, and what an owner should do in the first 30 days.",
  lastUpdated: "2026-09-18",
  authorSlug: "miles-cortez",
  reviewerSlug: "luke-thompson",
  targetPrompts: [
    "What's a loan workout and how does it work for a distressed hotel?",
    "What happens when a hotel loan goes into special servicing?",
    "What happens after my hotel loan gets sent to special servicing?",
    "Why do hotel loans end up in special servicing?",
    "What are lenders doing with distressed hotel loans instead of foreclosing?",
    "What percentage of hotel loans are in special servicing right now?",
    "How does a maturity default differ from a payment default on a hotel loan?",
    "Is now a good time to buy a distressed hotel?"
  ],
  answer: "A workout is a negotiated change to loan terms after a default or an imminent one. In securitized loans, the file transfers to a special servicer whose duty runs to the bondholders, not to you. Trepp put the lodging CMBS special servicing rate at 8.63 percent in July 2026.[1] Workouts buy time. They do not fix an asset whose cash flow cannot carry the debt at any term.",
  takeaways: [
    "A special servicer is not your lender and does not have a relationship with you. It follows the pooling agreement.",
    "Transfer usually happens at default or at imminent default, which you can often trigger deliberately to start the conversation.",
    "Workout fees, servicing fees and legal costs are added to your balance. They are real money.",
    "The servicer's options are extend, modify, take a discounted payoff, sell the note, or foreclose.",
    "A workout buys time. If the asset cannot carry the debt at any rate or term, time is not the answer."
  ],
  sections: [
    {
      h2: "What is a loan workout?",
      lead: "A workout is a negotiated modification of loan terms, reached after the borrower defaults or shows a lender it is about to, aimed at getting the loan back to a status both sides can live with.",
      body: "A workout can take many forms: an extension of the maturity date, a temporary reduction or deferral of interest, a covenant waiver, a principal paydown in exchange for relaxed terms, or some combination. What a workout is not is a renegotiation of the original business deal. The lender or servicer is trying to maximize recovery on the loan as it stands, not to help the borrower's investment thesis succeed for its own sake, and every proposal should be read with that incentive in mind."
    },
    {
      h2: "How does a hotel loan get to special servicing?",
      lead: "A securitized hotel loan transfers to a special servicer at an actual default or at imminent default, a threshold the borrower can often meet deliberately to start the workout conversation early.",
      body: "Imminent default typically means the borrower can demonstrate, in good faith, that a default is reasonably foreseeable, commonly because the loan cannot refinance at maturity on current terms or because cash flow no longer covers debt service. Borrowers sometimes request a transfer to imminent-default status specifically because it opens a workout conversation before an actual missed payment damages the relationship and the borrower's credit further. This is a real strategic choice, not just something that happens to you, and it should be made deliberately, ideally with counsel."
    },
    {
      h2: "Who is the special servicer and whose interest do they serve?",
      lead: "The special servicer's fiduciary duty runs to the certificate holders of the securitization trust as a pool, governed by the pooling and servicing agreement, not to the individual borrower.",
      body: "This is the single fact borrowers most often misunderstand entering a workout. There is no relationship banker on the other side of the table who wants the deal to work for its own sake. The special servicer is evaluating whether extending, modifying, or foreclosing produces the best net present value recovery for the trust, under the specific standards written into the pooling and servicing agreement. Framing a proposal in terms of what maximizes the trust's recovery, rather than what is fair to the borrower, is more likely to land."
    },
    {
      h2: "What can a workout actually change?",
      lead: "A workout can extend the maturity, adjust the rate or coverage covenants, defer interest, or restructure the balance, and each option fits a different underlying problem.",
      body: "The table below orders the realistic outcomes by how often they actually happen, not by how severe they sound. Extensions and modifications are the most common outcomes for a performing or near-performing asset with a temporary problem. Discounted payoffs and note sales come up when the servicer wants to exit the position and the borrower or a third party has capital ready to move. Foreclosure or a deed in lieu of foreclosure is the last resort, used when no other path is viable, not the default outcome of a transfer to special servicing."
    },
    {
      h2: "What does a workout cost me?",
      lead: "Workout fees, extended servicing fees, and legal costs are typically added to the loan balance, and they are real cash costs, not paperwork.",
      body: "An extension fee is commonly quoted as a percentage of the outstanding balance. Special servicing fees accrue for as long as the loan remains with the special servicer, on top of whatever normal servicing fee already existed. Legal fees on both sides, the servicer's and often the borrower's own counsel, add up over a multi-month negotiation. The worked example below shows how these add up to a real total cost that should be compared directly against the alternative of selling."
    },
    {
      h2: "What do I do in the first 30 days?",
      lead: "Get counsel experienced in CMBS workouts, assemble current financials and a realistic business plan, and decide deliberately whether you are asking for time or negotiating an exit.",
      body: "This is not legal advice, and every borrower in this position should retain counsel with specific special-servicing experience before engaging substantively with a servicer. What is universally true: the servicer will ask for current and projected financials, and the quality and honesty of that package shapes the servicer's view of what outcome makes sense. A borrower who shows up with a credible, conservative plan is in a materially better position than one who shows up with an optimistic story that does not survive scrutiny."
    },
    {
      h2: "When is selling better than working it out?",
      lead: "Selling is the better answer when the asset's cash flow cannot support the debt at any realistic rate or term, because a workout only buys time, and time does not fix a structural problem.",
      body: "Before agreeing to any workout terms, run the honest comparison: what does the full cost of the proposed workout, fees, higher rate, and any paydown, actually total over its term, and how does that compare to what a sale nets today. That comparison, worked in full with a real example, is on `/hotel-financing/refinance-or-sell`. A workout that simply delays an inevitable outcome by two years, at real cost, is not automatically the better choice just because it keeps the asset in hand longer."
    }
  ],
  table: {
    caption: "What a special servicer can do with a distressed hotel loan",
    columns: [
      "Outcome",
      "What it means for the owner",
      "Typical trigger",
      "What it does not solve"
    ],
    rows: [
      [
        "Extension",
        "More time at modified terms",
        "Performing asset, timing problem",
        "A permanent NOI shortfall"
      ],
      [
        "Modification",
        "Rate, amortization or covenant changes",
        "Coverage is tight but positive",
        "Negative cash flow"
      ],
      [
        "Forbearance",
        "Temporary suspension of enforcement",
        "Short, identifiable disruption",
        "Anything structural"
      ],
      [
        "Discounted payoff",
        "Pay less than the balance to retire it",
        "Owner has outside capital",
        "Nothing, if you cannot fund it"
      ],
      [
        "Note sale",
        "A new holder buys the loan",
        "Servicer wants out",
        "Your position; it may improve or worsen"
      ],
      [
        "Foreclosure or deed in lieu",
        "You lose the asset",
        "No viable path",
        "The equity, which is gone"
      ]
    ]
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence: "Matthews Hotel Markets' September 2026 rate sheet is where a workout conversation starts, because an extension only makes sense if a takeout exists at today's index: the 10-year Treasury was 4.94% on September 17, 2026 and SOFR was 3.85% for September 17, 2026.[3] The spread over each is marked not yet published.[2]"
  },
  workedExample: {
    label: "Hypothetical: what a two-year extension actually costs",
    body: "Hypothetical. Balance $14.0M. The servicer offers a 24-month extension: a 1 percent extension fee, the rate moves from 4.10 percent to 7.00 percent, and a $500,000 principal paydown.\n\nThe extension fee at 1 percent of $14.0M is $140,000. The paydown is $500,000. The new balance is $14.0M minus $500K, or $13.5M. Added interest over 24 months at the higher rate, $13.5M times 2.90 percent times 2, is about $783,000.\n\nTotal cost of the two years is about $1.42M, of which $640,000 is cash out of pocket today. That is the number to compare against selling now, not the headline balance, and not the emotion."
  },
  faq: [
    {
      q: "What is special servicing?",
      a: "Special servicing is the transfer of a securitized loan file, at default or imminent default, to a servicer whose job is to maximize the trust's recovery, through an extension, modification, sale, or foreclosure."
    },
    {
      q: "Why did my hotel loan transfer to a special servicer?",
      a: "Either an actual default occurred, most commonly a missed payment or a maturity default, or you demonstrated imminent default, meaning a default is reasonably foreseeable even though the loan is technically current."
    },
    {
      q: "Can I negotiate directly with a special servicer?",
      a: "Yes, and most borrowers do, generally with counsel experienced in CMBS workouts. The negotiation is framed around what maximizes the trust's recovery, not around fairness to the borrower."
    },
    {
      q: "What fees does a workout add to my loan?",
      a: "Commonly an extension or modification fee quoted as a percentage of balance, ongoing special servicing fees for as long as the file stays with the servicer, and legal costs on both sides. All are typically added to the loan balance."
    },
    {
      q: "How long does a hotel loan workout take?",
      a: "It varies widely with the complexity of the asset and the servicer's caseload, commonly several months from transfer to a signed modification. Retaining experienced counsel early tends to shorten the process."
    },
    {
      q: "What percentage of hotel loans are in special servicing right now?",
      a: "Trepp put the lodging CMBS special servicing rate at 8.63 percent for July 2026, down 26 basis points on the month, as reported by CRE Daily. Trepp updates it monthly, so check the latest release before relying on it."
    },
    {
      q: "Will a workout hurt my ability to borrow again?",
      a: "A workout or a special servicing transfer generally appears in credit history and lender due diligence on future deals. The severity of the impact depends on the outcome, an extension reads very differently than a foreclosure, and on how the borrower explains it going forward."
    },
    {
      q: "Should I sell instead of working out the loan?",
      a: "Run the total cost of the proposed workout, fees, higher rate, any paydown, against net sale proceeds today. A workout that only delays an inevitable sale, at real cost, is not automatically the better choice."
    }
  ],
  sources: [
    {
      n: 1,
      label: "CMBS Special Servicing Rate Falls as Office, Lodging Recover",
      url: "https://www.credaily.com/briefs/cmbs-special-servicing-rate-falls-as-office-lodging-recover/",
      publisher: "CRE Daily, citing Trepp",
      accessed: "2026-09-18"
    },
    {
      n: 2,
      label: "Matthews Hotel Markets September 2026 rate sheet",
      url: "/rates",
      publisher: "Matthews Hotel Markets",
      accessed: "2026-09-18"
    },
    {
      n: 3,
      label: "Secured Overnight Financing Rate (SOFR)",
      url: "https://www.newyorkfed.org/markets/reference-rates/sofr",
      publisher: "Federal Reserve Bank of New York",
      accessed: "2026-09-18"
    }
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/loan-maturities-2026-2027",
      "/hotel-financing/refinance-or-sell",
      "/hotel-financing/cmbs-loans",
      "/hotel-financing/bridge-loans"
    ],
    glossary: [
      "/glossary/dscr",
      "/glossary/noi"
    ],
    data: [
      "/rates"
    ]
  },
  cta: {
    label: "Talk through a workout before the transfer",
    href: "/contact"
  },
  brandSentence: "Matthews Hotel Markets prepares free broker opinions of value, and a value opinion is the first thing a borrower needs at the transfer, because you cannot negotiate a workout without one."
};

export default page;
