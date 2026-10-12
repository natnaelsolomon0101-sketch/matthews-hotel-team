/**
 * What will it cost to pay off my hotel loan early?
 * Answer page: /hotel-financing/prepayment-penalties
 *
 * Every figure here was read out of a primary source in the run that wrote
 * this file (2026-10-12):
 *   - 13 CFR 120.223 on Cornell LII, for the three conditions on the SBA
 *     subsidy recoupment fee and the 5 / 3 / 1 percent schedule;
 *   - 13 CFR 120.940, also on Cornell LII, for prepayment of a 504 loan;
 *   - SBA SOP 50 10 8.1, effective October 1, 2026, read as the .docx on
 *     legacy.sba.gov, for the subsidy recoupment fee restatement, the
 *     maturity-extension trap, the death exception, the bar on a 7(a) lender
 *     charging a prepayment fee, the 20 percent and 21-day note language, and
 *     the 504 debenture repurchase price;
 *   - SBA Form 1504 (4-18), the Development Company 504 Debenture, read as
 *     SBA's own PDF on caweb.sba.gov, for RP = D x (I x P) and both factor
 *     tables;
 *   - 26 CFR 1.860G-2(a)(8) on Cornell LII, for the four conditions a REMIC
 *     defeasance has to meet;
 *   - the BANK 2026-BNK52 prospectus (SEC Form 424B2, filed June 16, 2026),
 *     for the L / D / O prepayment codes, the codes on the two hospitality
 *     loans in that pool, the 67.0 percent defeasance share, the two-year
 *     lock-out, the defeasance deposit mechanics, the yield maintenance and
 *     discount rate definitions, and the state-law enforceability language;
 *   - Federal Reserve statistical release H.15, release date October 9, 2026,
 *     for the Treasury constant maturities the discount rate interpolates
 *     between, and for Prime at 7.00 percent.
 *
 * The worked example was recomputed line by line with
 * scripts/check-prepayment-math.mjs before saving: 42 assertions covering the
 * subsidy recoupment fee and its 25 percent test, both Form 1504 factor
 * tables, the prepayment code arithmetic, the interpolated discount rate, the
 * defeasance deposit at three discount rates and the effect on net sale
 * proceeds. Do not hand-edit a number without re-reading its source and
 * bumping `lastUpdated`.
 *
 * Deliberately absent: any bank, credit union, life company or debt fund
 * prepayment schedule, any defeasance consultant or accommodator fee, and any
 * share of hotel loans that get defeased rather than assumed. No public
 * source publishes them. The page says so rather than guessing.
 *
 * Two things to re-read before changing a number. SBA Form 1504 is on its
 * 4-18 edition; a new edition could change the factor tables. And the
 * subsidy recoupment fee moves with the SOP, which reissues roughly annually.
 */
import type { AnswerPage } from "../types";

export const page: AnswerPage = {
  slug: "prepayment-penalties",
  cluster: "hotel-financing",
  isHub: false,
  title: "Hotel Loan Prepayment Penalties",
  description:
    "What it costs to pay off a hotel loan early: SBA's 5, 3 and 1 percent fee, the 504 formula, CMBS lockout, defeasance and yield maintenance.",
  h1: "What will it cost to pay off my hotel loan early?",
  lastUpdated: "2026-10-12",
  authorSlug: "luke-thompson",
  reviewerSlug: "miles-cortez",
  targetPrompts: [
    "What will it cost to pay off my hotel loan early?",
    "Is there a prepayment penalty on an SBA 7(a) hotel loan?",
    "How much is the SBA 504 prepayment penalty?",
    "What is defeasance on a hotel CMBS loan and what does it cost?",
    "Can I prepay a CMBS hotel loan?",
    "How is a yield maintenance charge calculated?",
    "Should I pay the prepayment penalty or wait to sell my hotel?",
    "Does my bank publish its hotel loan prepayment schedule?",
  ],
  answer:
    "It depends on who your lender is, and the range is wide. An SBA 7(a) loan costs 5, 3 or 1 percent of the amount prepaid, and only in the first three years.[1] A CMBS loan usually cannot be prepaid at all: 21 of the loans in one conduit priced on June 16, 2026, 67.0 percent of that pool, could only be defeased.[6]",
  takeaways: [
    "On an SBA 7(a) loan the fee is SBA's, not the lender's. A 7(a) lender may not charge a prepayment fee at all, and the agency's fee applies only when the maturity is 15 years or more, the prepayment falls in one of the first three 12-month periods, and it exceeds 25 percent of the highest balance in that period.[1][2]",
    "The SBA 504 premium is a published formula, not a negotiation: RP = D x (I x P), where the factor P falls from 1.00 in year 1 to 0.10 in year 10 on a 20- or 25-year debenture and is zero from year 11.[3]",
    "A CMBS loan is not prepayable during its lockout. Both hospitality loans in BANK 2026-BNK52 are locked for 27 and 28 months, then defeasance only for 86 and 85, then open for the last 7.[6]",
    "Defeasance is a purchase, not a penalty. You buy government securities that pay every remaining payment plus the balloon, so the cost moves with Treasury yields: on October 8, 2026 the 5-year constant maturity was 4.99 percent and the 7-year 5.11 percent.[7]",
    "No bank, credit union, life company or debt fund publishes its prepayment schedule. The only place to read yours is your note.",
  ],
  sections: [
    {
      h2: "Can I prepay my hotel loan at all?",
      lead:
        "On an SBA loan, yes, at any time. On a CMBS loan, usually not for the first two to three years, and after that only by substituting collateral.",
      body:
        "Both SBA programs allow a full payoff whenever the borrower wants one. The 7(a) note SBA requires says so in terms: notwithstanding any provision to the contrary, the borrower may prepay, and may prepay 20 percent or less of the unpaid principal balance at any time without notice.[2] On the 504 side, 13 CFR 120.940 lets the borrower prepay on paying the entire principal balance, unpaid interest, any unpaid fees and any prepayment premium established in the note.[4]\n\nCMBS is the opposite, and the reason is tax law rather than lender preference. A securitized loan sits in a real estate mortgage investment conduit, and 26 CFR 1.860G-2(a)(8) says that when the REMIC releases its lien the loan stops being a qualified mortgage unless the release is a non-significant modification or the loan is defeased in a specific way, which may not happen within two years of the trust's startup day.[5] The lockout is not a bargaining position; it is the condition on which the trust keeps its tax treatment.\n\nThe prospectus for BANK 2026-BNK52, a conduit priced on June 16, 2026, writes each loan's rules as a code: L is locked against both prepayment and defeasance, D allows defeasance only, YM allows prepayment with a yield maintenance charge, and O is the open period, where prepayment is free.[6] That pool's select-service hotel loan, on a Courtyard by Marriott in Bellevue, Washington, reads L(27), D(86), O(7); its full-service loan, on a Marriott in Anchorage, reads L(28), D(85), O(7).[6] Twenty-one of the loans in the deal, 67.0 percent of the pool, permit defeasance, and for all of them the lock-out ends at least two years after closing.[6]"
    },
    {
      h2: "What does the SBA charge to pay off a 7(a) loan early?",
      lead:
        "Five, three or one percent of the amount prepaid, and only when three conditions are all true, which on most payoffs they are not.",
      body:
        "The fee is a subsidy recoupment fee, payable to SBA rather than to your bank, and 13 CFR 120.223 sets three conditions that must all hold. The loan has a maturity of 15 years or more. The borrower makes a voluntary prepayment, meaning principal in excess of the amortization schedule, in one of the first three successive 12-month periods after first disbursement. And prepayments in that period exceed 25 percent of the highest outstanding principal balance of the loan in that same period.[1] When all three hold, the charge is 5 percent of the total prepayments made in the first period, 3 percent in the second and 1 percent in the third.[1]\n\nThe 25 percent test is where owners both lose money and miss savings, because the fee attaches to the prepayments in that period rather than to the whole balance. A prepayment inside the line costs nothing, so an owner with spare cash can pay down a quarter of the balance in each of the first three years and never pay the fee. SOP 50 10 8.1, effective October 1, 2026, adds three things the regulation does not say: a loan originally written under 15 years picks up the fee if its maturity is extended to 15 years or more in the first 36 months, and earlier prepayments are caught too; a prepayment caused by a death is not voluntary; and a lender that thinks a prepayment is otherwise involuntary asks the Commercial Loan Servicing Center for a determination.[2]\n\nThe more useful fact is what your lender may not charge. The same SOP lists prepayment fees among the fees prohibited by 13 CFR 120.221, alongside points, add-on interest, commitment fees and origination fees.[2] So on a 7(a) loan under 15 years, or past the third year, a payoff should cost nothing but principal and accrued interest. One exception: on a loan sold into the secondary market, prepaying more than 20 percent requires written notice and 21 days of interest if the money arrives inside 21 days.[2]"
    },
    {
      h2: "What does it cost to prepay an SBA 504 loan?",
      lead:
        "A published formula: the remaining debenture balance times the rate on the face of the debenture times a factor that falls to zero after year 10.",
      body:
        "The 504 structure is a bank first lien plus a CDC second lien funded by selling a debenture into a monthly pool, so prepaying the loan means repurchasing the debenture. SOP 50 10 8.1 puts the repurchase price at the outstanding principal balance of the debenture, plus interest accrued and unpaid to the repurchase date, plus a repurchase premium.[2] SBA Form 1504, the debenture itself, gives the premium as an equation:[3]\n\nRP = D x (I x P), where D is the remaining principal balance of the debenture, I is the interest rate stated on the face of the debenture expressed in decimals, and P is a factor set by the year of the repurchase.\n\nOn a 20- or 25-year debenture, P runs 1.00 in year 1, then 0.90, 0.80, 0.70, 0.60, 0.50, 0.40, 0.30, 0.20 and 0.10 in year 10, and is zero from year 11.[3] On a 10-year debenture it runs 1.00, 0.80, 0.60, 0.40, 0.20 and is zero from year 6.[3] The worst case is roughly one year of interest, and the premium disappears after the first half of the term. The same document requires the debenture to be repurchased as a whole and not in part, on a payment date, after at least 30 days' written notice to SBA.[3]\n\nTwo gaps. The published 504 debenture rate is an all-in effective rate including the CDC, SBA and central servicing agent fees, while the formula uses the rate on the face of the debenture, so ask the CDC for that figure. And the bank first lien has its own prepayment terms, which no bank publishes."
    },
    {
      h2: "Why does a CMBS loan have to be defeased instead of prepaid?",
      lead:
        "Because the trust that owns the loan needs the payment stream to continue, so you buy Treasuries that make the payments and the lien moves onto them.",
      body:
        "26 CFR 1.860G-2(a)(8)(ii) sets four conditions. The borrower pledges substitute collateral consisting solely of government securities within the meaning of section 2(a)(16) of the Investment Company Act of 1940. The mortgage documents allow the substitution. The lien is released to facilitate a disposition of the property or another customary commercial transaction. And the release is not within two years of the startup day.[5]\n\nThe loan documents add the machinery. In BANK 2026-BNK52 the borrower gives at least 30 days' written notice of the release date, pays accrued and unpaid interest to that date and all other sums due, and funds a defeasance deposit sufficient to buy non-callable United States government securities that pay on or before each remaining scheduled due date, in the amounts due, including the balloon. It also delivers a security agreement granting the trust a first priority lien on the deposit, and an opinion of counsel.[6]\n\nSo defeasance is a purchase, not a penalty, and its cost is a market price rather than a schedule. When the coupon sits above Treasury yields for the remaining term, a portfolio that makes the loan's payments costs more than the balance, and the gap is what you pay; when Treasury yields rise above the coupon, it costs less. The Federal Reserve's H.15 release of October 9, 2026 put the 5-year Treasury constant maturity at 4.99 percent and the 7-year at 5.11 percent for October 8.[7] Against a loan written at 6.45 percent, that gap is the whole bill. What nobody publishes is the rest: the consultant's fee, the accommodator's fee, the servicer and rating agency fees and the legal cost."
    },
    {
      h2: "How is a yield maintenance charge calculated, and when is it cheap?",
      lead:
        "It is the lender's lost interest, discounted at an interpolated Treasury yield, and it collapses to a stated floor when Treasury yields are above your coupon.",
      body:
        "The BANK 2026-BNK52 prospectus defines a yield maintenance charge as any premium, fee or other amount paid in connection with a prepayment, calculated in whole or in part under a yield maintenance formula or another formula reflecting the lost interest, including any specified minimum amount.[6] The formula itself lives in each note. The discount rate does not: where a note does not specify one, the trust uses the yield from linear interpolation of the Treasury constant maturities one longer and one shorter than the loan's remaining term, as reported in H.15 for the week before the prepayment, converted to a monthly equivalent yield.[6][7]\n\nThe direction of rates decides everything, because the charge compensates a lender for interest it loses by being repaid early and having to reinvest lower. If the reinvestment rate is above your coupon, the lender loses nothing and the figure goes to zero. That is why the notation is a greater-of: YM@(#) means prepayment is permitted on payment of the greater of a yield maintenance charge and a premium equal to a stated percentage of the amount prepaid.[6] The floor is what you pay in a rising-rate year.\n\nOn a hotel this matters less than it sounds, because conduit hotel loans tend to be defeasance-only. Both hospitality loans in BANK 2026-BNK52 carry D codes with no yield maintenance alternative, while that pool's yield maintenance loans are self storage, retail and residential cooperative credits.[6] One deal is not a market, but check your own documents: if your loan says D, a yield maintenance quote is not available at any price."
    },
    {
      h2: "What do banks, bridge lenders and life companies charge?",
      lead:
        "Nobody knows from the outside, because no bank, credit union, life company or debt fund publishes its prepayment terms.",
      body:
        "This page can tell you what SBA charges because SBA writes it into a regulation and a form, and what a conduit charges because the prospectus is filed with the SEC. Balance-sheet lenders file nothing. A bank note might carry a step-down premium, a fixed percentage, a yield maintenance clause of its own design, a minimum interest or exit fee, a make-whole on the swap behind a fixed rate, or nothing at all. A bridge or debt fund loan commonly carries a minimum interest period instead of a percentage, which does not shrink as the date approaches; it simply has to be paid. Any page printing a typical range for these is guessing.\n\nSo read the note before you need it, and ask for a dated payoff quote in writing with the premium broken out. On a fixed-rate bank loan the clause is often tied to the lender's swap rather than to a Treasury, which makes that quote matter more.\n\nOne caveat cuts the other way. The same prospectus warns that provisions requiring yield maintenance charges, prepayment premiums or lockout periods may not be enforceable in some states or under federal bankruptcy law, that they may be read as the collection of interest for usury purposes, that certain states limit what a lender may collect on a prepayment, and that enforceability on an involuntary prepayment is unclear in many states.[6] That is a question for counsel in your state, not a reason to assume the clause is void."
    },
    {
      h2: "How should the payoff cost change a refinance or sale decision?",
      lead:
        "Treat it as a line in the net proceeds, not as a reason to do nothing, and price the alternative of leaving the loan in place.",
      body:
        "The payoff cost is the one number that makes the refinance-or-sell question concrete, because it is the same number on both sides. Refinancing pays it. Selling free and clear pays it. Only two routes avoid it: waiting for the open period, and selling subject to the existing loan through an assumption.\n\nWaiting usually loses. A defeasance premium is a one-time cost against a sale at today's price, while waiting means carrying the asset at today's rate and taking whatever the market pays later. The hypothetical below puts the premium at 7.6 percent of the loan balance and 14.4 percent of the seller's net proceeds, with 72 months to run before the open period.\n\nAssumption is the real alternative, and on a low-coupon CMBS loan with years left it can be worth more than the premium it avoids, because the buyer gets debt it cannot replace. It needs servicer approval and carries its own fees, and this site covers it at the loan assumption page. Run the decision in this order: get the written payoff quote, then price the assumption, then set the asking price."
    }
  ],
  table: {
    caption: "What an early payoff costs on a hotel loan, by lender, October 2026",
    columns: ["Loan type", "What an early payoff costs", "Where the term is set"],
    rows: [
      [
        "SBA 7(a), maturity 15 years or more",
        "5, 3 or 1 percent of the amount prepaid in the first, second or third 12-month period, and only if prepayments in that period exceed 25 percent of the highest balance in it",
        "13 CFR 120.223; SOP 50 10 8.1",
      ],
      [
        "SBA 7(a), maturity under 15 years, or after year 3",
        "Nothing to SBA, and the lender may not charge a prepayment fee",
        "13 CFR 120.221 and 120.223; SOP 50 10 8.1, Section A, Chapter 4",
      ],
      [
        "SBA 7(a) sold on the secondary market",
        "Written notice above 20 percent, plus 21 days' interest if the money arrives inside 21 days",
        "SOP 50 10 8.1, required 7(a) note language",
      ],
      [
        "SBA 504 debenture, 20 or 25 years",
        "RP = D x (I x P), with P falling from 1.00 in year 1 to 0.10 in year 10 and zero from year 11",
        "SBA Form 1504; 13 CFR 120.940",
      ],
      [
        "SBA 504 debenture, 10 years",
        "The same formula, with P running 1.00, 0.80, 0.60, 0.40, 0.20 and zero from year 6",
        "SBA Form 1504",
      ],
      [
        "CMBS, lockout period",
        "No voluntary prepayment and no defeasance at any price. 27 and 28 months on the two hospitality loans in BANK 2026-BNK52",
        "BANK 2026-BNK52 prospectus, Annex A-1",
      ],
      [
        "CMBS, defeasance window",
        "Government securities that pay every remaining payment and the balloon, plus 30 days' notice, a security agreement, an opinion of counsel and unpublished fees",
        "26 CFR 1.860G-2(a)(8)(ii); BANK 2026-BNK52",
      ],
      [
        "CMBS, yield maintenance window",
        "The greater of a lost-interest formula discounted at the interpolated H.15 Treasury constant maturity and a stated percentage of the amount prepaid",
        "BANK 2026-BNK52 prospectus",
      ],
      [
        "CMBS, open period",
        "Nothing. 7 months on both hospitality loans in that deal",
        "BANK 2026-BNK52 prospectus, Annex A-1",
      ],
      [
        "Bank, credit union, life company, bridge or debt fund",
        "Not published by any lender. The schedule is in your note, and the payoff quote is the only reliable number",
        "No public source",
      ],
    ],
  },
  originalDataPoint: {
    source: "rates",
    ref: "/rates",
    sentence:
      "Matthews Hotel Markets' October 2026 rate sheet is the other half of this question. It shows the 10-year Treasury at 5.29 percent as of September 30, 2026, Prime at 7.00 percent, and the 25-year SBA 504 debenture at 6.54 percent all in from the September 10, 2026 sale; the CMBS row carries the note that defeasance or yield maintenance applies on prepayment, and the debt service coverage and loan-to-value cells are marked not yet published, because lenders do not publish them.[8] A payoff cost only makes sense next to the rate you would be refinancing into.",
  },
  workedExample: {
    label: "Hypothetical: one 118-key hotel, three payoff bills",
    body:
      "This hotel does not exist. The 118 keys, the $4,800,000 7(a) loan, the $1,780,000 remaining debenture balance, its 6.00 percent face rate, the $12,400,000 CMBS loan at 6.45 percent, the $19,500,000 sale price and the 3.0 percent of brokerage and closing costs are assumptions. The rules applied to them are not, and every figure was recomputed with scripts/check-prepayment-math.mjs.\n\nThe 7(a) loan runs 25 years, so it clears the 15-year test. The owner pays it off in the second 12-month period, with a balance of $4,655,000 against a highest balance of $4,690,000 in that period. The 25 percent line is $1,172,500 and the payoff is four times that, so the fee applies at the second-period rate: 3 percent of $4,655,000, or $139,650.[1] In the first period it would have been $232,750 and in the third $46,550, and a $1,000,000 partial prepayment, 21.3 percent of the highest balance, would have cost nothing.[1] The 504 second lien is a 25-year debenture in its second year, so RP = $1,780,000 x (0.06 x 0.90), or $96,120, 5.4 percent of that balance.[3] The two SBA bills come to $235,770.\n\nThe CMBS loan is the expensive one. It is a 120-month interest-only loan carrying L(27), D(86), O(7), so the open period starts at month 114. The owner sells in month 42: past lockout, 72 months short of open, defeasance only.[5][6] The payment on a 30/360 basis is $12,400,000 x 0.0645 / 12, or $66,650, and 78 payments remain, months 43 through 120, the last carrying the $12,400,000 balloon. Seventy-eight months is 6.5 years, so the discount rate interpolates between the 4.99 percent 5-year and the 5.11 percent 7-year constant maturities for October 8, 2026: 4.99 plus 0.75 times 0.12, or 5.08 percent.[6][7]\n\nDiscounted at 5.08 percent that stream costs $13,338,751, which is $938,751 above the balance: 7.6 percent of it, or $7,956 per key. Real collateral is priced security by security off the actual curve rather than at one blended rate, and the consultant, accommodator and legal fees sit on top, so this is the shape of the bill and not the bill. Run the same payments at a 7.00 percent discount rate and the stream costs $12,044,666, below the balance, which is why the yield maintenance notation is a greater-of; a 1 percent floor here would be $124,000.[6]\n\nAt a $19,500,000 price, 3.0 percent of costs takes $585,000 and the loan takes $12,400,000, leaving $6,515,000 before the premium. The $938,751 takes 14.4 percent of that, and the seller nets $5,576,249."
  },
  faq: [
    {
      q: "Is there a prepayment penalty on an SBA 7(a) hotel loan?",
      a: "Only SBA's subsidy recoupment fee, and only if the maturity is 15 years or more, the prepayment falls in one of the first three 12-month periods, and prepayments in that period exceed 25 percent of the highest balance in it.[1]",
    },
    {
      q: "Can my bank charge me a prepayment fee on a 7(a) loan?",
      a: "No. SOP 50 10 8.1 lists prepayment fees among the fees prohibited by 13 CFR 120.221, alongside points, add-on interest, commitment fees and origination fees.[2] The subsidy recoupment fee is payable to SBA, not to the lender.",
    },
    {
      q: "How much is the SBA 504 prepayment penalty?",
      a: "SBA Form 1504 sets it as RP = D x (I x P): the remaining debenture balance times the face rate times a factor that starts at 1.00 and falls 0.10 a year, reaching zero in year 11 on a 20- or 25-year debenture.[3]",
    },
    {
      q: "Can I prepay a CMBS hotel loan?",
      a: "Usually not. Both hospitality loans in BANK 2026-BNK52 prohibit voluntary prepayment for 27 and 28 months and then permit defeasance only.[6] 26 CFR 1.860G-2(a)(8) bars a defeasance within two years of the trust's startup day.[5]",
    },
    {
      q: "What is defeasance and what does it cost?",
      a: "You buy US government securities that make every remaining payment plus the balloon, and the lien moves to them.[5][6] The cost is the market price of that portfolio against your loan balance, so it rises as Treasury yields fall below your coupon.",
    },
    {
      q: "Does a defeasance get cheaper if rates go up?",
      a: "Yes. The portfolio is priced off Treasury yields, so when those yields rise toward or above your coupon the premium shrinks and can disappear. On October 8, 2026 the 5-year constant maturity was 4.99 percent and the 7-year 5.11 percent.[7]",
    },
    {
      q: "Is a prepayment premium always enforceable?",
      a: "Not necessarily. The BANK 2026-BNK52 prospectus says such provisions may be unenforceable in some states or under federal bankruptcy law, may be read as interest for usury purposes, and are of unclear effect on an involuntary prepayment in many states.[6]",
    },
    {
      q: "Is it cheaper to let a buyer assume my loan?",
      a: "Often, on a low-coupon CMBS loan with years left, because the buyer gets debt it cannot replace and nobody pays a premium. It needs servicer approval and carries its own fees, which no public source publishes.",
    },
  ],
  sources: [
    {
      n: 1,
      label:
        "13 CFR 120.223, Subsidy recoupment fee payable to SBA by Borrower: the three conditions in (a), being a maturity of 15 years or more, a voluntary prepayment in one of the first three successive 12-month periods after first disbursement, and prepayments exceeding 25 percent of the highest outstanding principal balance in that period; and the 5, 3 and 1 percent schedule in (b), each applied to the total prepayments made in that period",
      url: "https://www.law.cornell.edu/cfr/text/13/120.223",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-12",
    },
    {
      n: 2,
      label:
        "SBA SOP 50 10 8.1, Lender and Development Company Loan Programs, effective October 1, 2026: the subsidy recoupment fee with the maturity-extension trap and the death exception, and the prohibited-fee list including prepayment fees under 13 CFR 120.221 (Section A, Chapter 4, Ethics, Fees, and Agents); the required 7(a) note language permitting prepayment of 20 percent or less without notice and setting the 21-day notice and interest rule for a larger prepayment on a secondary-market loan (Section B, Chapter 6); and the 504 debenture repurchase price of outstanding principal plus accrued interest plus a repurchase premium (Section C, Chapter 2)",
      url: "https://www.sba.gov/document/sop-50-10-lender-development-company-loan-programs",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-10-12",
    },
    {
      n: 3,
      label:
        "SBA Form 1504 (4-18), Development Company 504 Debenture: the repurchase premium RP = D x (I x P), with D the remaining principal balance, I the interest rate stated on the face of the debenture in decimals and P the year factor; the factors 1.00, .90, .80, .70, .60, .50, .40, .30, .20, .10 and zero from year 11 for a 20- or 25-year debenture, and 1.00, .80, .60, .40, .20 and zero from year 6 for a 10-year debenture; and the requirements that the debenture be repurchased as a whole and not in part, on a payment date, after at least 30 days' written notice to SBA",
      url: "https://caweb.sba.gov/library/pdf/Form_1504.pdf",
      publisher: "U.S. Small Business Administration",
      accessed: "2026-10-12",
    },
    {
      n: 4,
      label:
        "13 CFR 120.940, Prepayment of the 504 loan or Debenture: the borrower may prepay on paying the entire principal balance, unpaid interest, any unpaid fees and any prepayment premium established in the note, and the CDC must then prepay the corresponding debenture with interest and premium",
      url: "https://www.law.cornell.edu/cfr/text/13/120.940",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-12",
    },
    {
      n: 5,
      label:
        "26 CFR 1.860G-2(a)(8), Release of a lien on an interest in real property securing a qualified mortgage; defeasance: the four conditions in (ii), being substitute collateral consisting solely of government securities as defined in section 2(a)(16) of the Investment Company Act of 1940, mortgage documents that allow the substitution, a release to facilitate a disposition of the property or another customary commercial transaction, and a release not within two years of the startup day",
      url: "https://www.law.cornell.edu/cfr/text/26/1.860G-2",
      publisher: "Legal Information Institute, Cornell Law School",
      accessed: "2026-10-12",
    },
    {
      n: 6,
      label:
        "BANK 2026-BNK52 prospectus, SEC Form 424B2 filed June 16, 2026 by Morgan Stanley Capital I Inc.: the prepayment provision symbols L, D, O, YM and DorYM; Annex A-1, showing L(27), D(86), O(7) on the Courtyard by Marriott Seattle Bellevue Downtown loan and L(28), D(85), O(7) on the Marriott Anchorage Downtown loan; the statement that 21 of the mortgage loans, 67.0 percent of the pool, are defeasance loans whose lock-out period ends at least two years after the closing date; the defeasance conditions including 30 days' notice, the defeasance deposit, the security agreement and the opinion of counsel; the definitions of Yield Maintenance Charge, Prepayment Premium and Discount Rate, the last interpolated from Treasury constant maturities in Federal Reserve statistical release H.15; the property type table showing hospitality at 13.8 percent of the pool; and the risk and legal discussion of enforceability, usury and limits certain states place on charges collected on prepayment",
      url: "https://www.sec.gov/Archives/edgar/data/1547361/000153949726001769/n5947_x17-424b2.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
      accessed: "2026-10-12",
    },
    {
      n: 7,
      label:
        "Federal Reserve statistical release H.15, Selected Interest Rates, release date October 9, 2026: Treasury constant maturities for October 8, 2026 of 4.99 percent at 5 years, 5.11 percent at 7 years and 5.22 percent at 10 years, and the bank prime loan rate at 7.00 percent",
      url: "https://www.federalreserve.gov/releases/h15/",
      publisher: "Board of Governors of the Federal Reserve System",
      accessed: "2026-10-12",
    },
    {
      n: 8,
      label:
        "Daily Treasury Par Yield Curve Rates: the October 9, 2026 curve, with the 5-year at 5.02 percent, the 7-year at 5.13 percent and the 10-year at 5.24 percent, the series behind the Treasury benchmarks on the Matthews Hotel Markets rate sheet",
      url: "https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve",
      publisher: "U.S. Department of the Treasury",
      accessed: "2026-10-12",
    },
  ],
  related: {
    hub: "/hotel-financing",
    siblings: [
      "/hotel-financing/cmbs-loans",
      "/hotel-financing/refinance-or-sell",
      "/hotel-financing/sba-7a-vs-504",
      "/hotel-financing/loan-assumption",
      "/hotel-financing/refinance",
    ],
    glossary: [
      "/glossary/defeasance",
      "/glossary/yield-maintenance",
      "/glossary/sba-7a",
      "/glossary/sba-504",
    ],
    data: ["/rates"],
  },
  cta: { label: "Talk to the capital markets desk", href: "/contact" },
  brandSentence:
    "Matthews Hotel Markets reads the payoff and assumption language in a seller's loan documents before a hotel goes to market, because on a CMBS or SBA loan the clause decides which buyers can transact and what a seller actually nets.",
};
