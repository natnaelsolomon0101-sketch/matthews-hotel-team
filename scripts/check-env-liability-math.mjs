/**
 * Recomputes every number in /buy-a-hotel/environmental-liability and asserts
 * that the page prints what the arithmetic and the cited rules actually give.
 *
 *   node scripts/check-env-liability-math.mjs
 *
 * Two kinds of assertion:
 *   1. the hypothetical worked example (price per key, the 150 percent escrow,
 *      the share of the price it ties up, and the two all-appropriate-inquiries
 *      clocks counted back from the closing date);
 *   2. the thresholds and dates quoted from the sources, checked as literal
 *      strings that must appear in the page module.
 *
 * Exits non-zero on the first mismatch.
 */
import { readFileSync } from "node:fs";

const SRC = "src/lib/data/answers/buy-a-hotel/environmental-liability.ts";
const text = readFileSync(SRC, "utf8");

let checks = 0;
let failures = 0;

function eq(label, got, want) {
  checks++;
  const ok = got === want;
  if (!ok) {
    failures++;
    console.log(`FAIL ${label}: got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`);
  }
}

/** The page must literally contain the string, so no figure drifts silently. */
function prints(label, needle) {
  checks++;
  if (!text.includes(needle)) {
    failures++;
    console.log(`FAIL ${label}: page does not contain ${JSON.stringify(needle)}`);
  }
}

const usd = (n) => `$${n.toLocaleString("en-US")}`;

/* ---------------------------------------------- the hypothetical, recomputed */

const KEYS = 92;
const PRICE = 7_400_000;
const LOAN = 5_000_000;
const REMEDIATION_ESTIMATE = 240_000;
const SBA_ESCROW_MULTIPLE = 1.5; // SOP 50 10 8.1: at least 150 percent

const perKey = Math.round(PRICE / KEYS);
eq("price per key", perKey, 80435);
prints("price per key printed", `$80,435 a key`);
prints("price printed", usd(PRICE));
prints("keys printed", `${KEYS}-key`);

const escrow = REMEDIATION_ESTIMATE * SBA_ESCROW_MULTIPLE;
eq("escrow at 150 percent", escrow, 360_000);
prints("escrow arithmetic printed", `$240,000 times 1.50 is $360,000`);

const deadCash = escrow - REMEDIATION_ESTIMATE;
eq("escrow above the estimate", deadCash, 120_000);
prints("dead cash printed", `$120,000 more than the cleanup is expected to cost`);

const shareOfPrice = Number(((escrow / PRICE) * 100).toFixed(2));
eq("escrow as a share of price", shareOfPrice, 4.86);
prints("share printed", `4.86 percent of the purchase price`);
prints("share arithmetic printed", `($360,000 divided by $7,400,000)`);

// The loan is above the $250,000 line that picks the starting investigation.
eq("loan is above the SBA questionnaire line", LOAN > 250_000, true);
prints("loan printed", `${usd(LOAN)} SBA 7(a) loan`);
prints("250,000 line printed", `above $250,000`);

/* --------------------------------------------------- the two AAI clocks */

const DAY = 86_400_000;
const closing = Date.UTC(2027, 2, 2); // March 2, 2027
const iso = (ms) => new Date(ms).toISOString().slice(0, 10);

eq("closing date", iso(closing), "2027-03-02");

// 40 CFR 312.20(a): the whole inquiry, within one year before acquisition.
const oneYearBefore = Date.UTC(2026, 2, 2);
eq("one year before closing", iso(oneYearBefore), "2026-03-02");
prints("one-year date printed", "no earlier than March 2, 2026");

// 40 CFR 312.20(b): five components, within 180 days before acquisition.
const oneEightyBefore = closing - 180 * DAY;
eq("180 days before closing", iso(oneEightyBefore), "2026-09-03");
eq("180 days is 180 days", (closing - oneEightyBefore) / DAY, 180);
prints("180-day date printed", "no earlier than September 3, 2026");

// A report dated May 2026 clears the one-year clock and misses the 180-day one.
const mayReport = Date.UTC(2026, 4, 15);
eq("May 2026 report clears one year", mayReport >= oneYearBefore, true);
eq("May 2026 report misses 180 days", mayReport < oneEightyBefore, true);
prints("the trap is stated", "satisfies the one-year clock and fails the 180-day one");

/* ------------------------------------- thresholds quoted from the sources */

// 40 CFR 312.26: the published search distances.
prints("one-mile distance", "within one mile");
prints("half-mile distance", "within half a mile");

// 40 CFR 280.10: the generator-tank dates and the small-tank exclusion.
prints("generator tank install date", "installed on or before October 13, 2015");
prints("generator tank compliance date", "by October 13, 2018");
prints("110 gallon exclusion", "110 gallons or less");

// 42 U.S.C. 9601(40)(A): the acquisition date the status runs from.
prints("BFPP acquisition date", "after January 11, 2002");

// 40 CFR 312.10, quoted in the FAQ: three of the four qualification routes.
prints("EP route one", "licence plus three years");
prints("EP route three", "degree plus five years");
prints("EP route four", "ten years of experience");

// SOP 50 10 8.1: the governing edition, the escrow floor and the E&O floor.
prints("SOP effective date", "took effect October 1, 2026");
prints("E&O floor", "one million dollars per claim");
prints("escrow floor is a floor", "150 percent is a floor");
prints("hotel NAICS is not listed", "NAICS 721110, hotels and motels, is not on it");

// 40 CFR 312.20 vs the SOP: the page must say the clocks are different.
prints("two clocks are distinguished", "a different clock from the acquisition-date clock");

/* ------------------------------------------------------------ page shape */

const words = (s) => s.trim().split(/\s+/).filter(Boolean).length;

const answer = /answer:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(text)?.[1] ?? "";
const answerWords = words(answer.replace(/\[\d+\]/g, ""));
checks++;
if (answerWords < 40 || answerWords > 70) {
  failures++;
  console.log(`FAIL answer length: ${answerWords} words, want 40 to 70`);
}

for (const [i, a] of [...text.matchAll(/\n      a:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)].entries()) {
  const n = words(a[1].replace(/\[\d+\]/g, ""));
  checks++;
  if (n > 50) {
    failures++;
    console.log(`FAIL faq ${i + 1} answer: ${n} words, want 50 or fewer`);
  }
}

console.log(
  failures
    ? `\n${failures} of ${checks} assertions failed`
    : `env-liability math OK: ${checks} assertions`,
);
if (failures) process.exitCode = 1;
