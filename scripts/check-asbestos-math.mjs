#!/usr/bin/env node
/**
 * Recomputes every number on /hotel-industry/asbestos-renovation-rules and
 * re-checks the template's own limits (geo/05-templates.md §1.1).
 *
 *   node scripts/check-asbestos-math.mjs
 *
 * Nothing here is fetched. The statutory figures are the ones read out of
 * Cornell LII and cross-checked against the eCFR 2026-10-01 issue on
 * 2026-10-19, and they are hard-coded so a hand-edit to the page that moves a
 * number fails this script instead of shipping quietly. Exits non-zero on any
 * mismatch.
 */
import { readFileSync } from "node:fs";

const src = readFileSync(
  new URL("../src/lib/data/answers/hotel-industry/asbestos-renovation-rules.ts", import.meta.url),
  "utf8",
);

let fails = 0;
const eq = (label, got, want) => {
  const ok = got === want;
  if (!ok) fails++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}: ${got}${ok ? "" : ` (expected ${want})`}`);
};
const has = (label, needle) => {
  const ok = src.includes(needle);
  if (!ok) fails++;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}`);
};
const money = (n) => `$${Math.round(n).toLocaleString("en-US")}`;

/* ------------------------------------------------- statutory figures */

const THRESH_PIPE_FT = 260;       // 40 CFR 61.145(a)(1)(i), (a)(4)(i)
const THRESH_AREA_SF = 160;       // same
const THRESH_OFF_CF = 35;         // 40 CFR 61.145(a)(1)(ii), (a)(4)(ii)
const UPDATE_PCT = 20;            // 40 CFR 61.145(b)(2)
const NOTICE_WORKING_DAYS = 10;   // 40 CFR 61.145(b)(3)(i)
const OSHA_CLASS1_FT = 25;        // 29 CFR 1926.1101(g)(4)(ii)
const OSHA_CLASS1_SF = 10;        // same
const PEL_TWA = 0.1;              // 29 CFR 1926.1101(c)(1)
const PEL_EXCURSION = 1.0;        // 29 CFR 1926.1101(c)(2)
const PACM_YEAR = 1980;           // 29 CFR 1926.1101(b)
const WASTE_INQUIRE_DAYS = 35;    // 40 CFR 61.150(d)(3)
const WASTE_REPORT_DAYS = 45;     // 40 CFR 61.150(d)(4)
const WASTE_RETAIN_YEARS = 2;     // 40 CFR 61.150(d)(5)
const CAA_113B = 124426;          // 40 CFR 19.4 Table 1, assessed on or after 2025-01-08
const CAA_113D1 = 59114;
const CAA_113D1_CAP = 472901;
const CAA_113D3 = 11823;
const OSHA_SERIOUS = 16550;       // 29 CFR 1903.15(d), proposed after 2025-01-15
const OSHA_WILLFUL_MIN = 11823;
const OSHA_WILLFUL_MAX = 165514;
const CA_TRIGGER_SF = 100;        // 8 CCR 341.6(a)
const FED_ACM_PCT = 1;            // 40 CFR 61.141
const UST10 = 5.29;               // /rates, October 2026 edition, as of 2026-09-30
const PRIME = 7.0;                // same

/* each statutory figure must actually appear on the page */
for (const [label, n] of [
  ["260 linear feet", THRESH_PIPE_FT], ["160 square feet", THRESH_AREA_SF],
  ["35 cubic feet", THRESH_OFF_CF], ["20 percent update", UPDATE_PCT],
  ["10 working days", NOTICE_WORKING_DAYS], ["25 linear feet", OSHA_CLASS1_FT],
  ["10 square feet", OSHA_CLASS1_SF], ["PACM year", PACM_YEAR],
  ["35-day inquiry", WASTE_INQUIRE_DAYS], ["45-day report", WASTE_REPORT_DAYS],
  ["2-year retention", WASTE_RETAIN_YEARS], ["CAA 113(b)", CAA_113B],
  ["CAA 113(d)(1)", CAA_113D1], ["CAA 113(d)(1) cap", CAA_113D1_CAP],
  ["CAA 113(d)(3)", CAA_113D3], ["OSHA serious", OSHA_SERIOUS],
  ["OSHA willful min", OSHA_WILLFUL_MIN], ["OSHA willful max", OSHA_WILLFUL_MAX],
  ["California 100 sf", CA_TRIGGER_SF], ["federal 1 percent", FED_ACM_PCT],
]) {
  /* a year is printed without a thousands separator */
  has(`page prints ${label}`, n === PACM_YEAR ? String(n) : n.toLocaleString("en-US"));
}
has("page prints the 0.1 f/cc TWA", String(PEL_TWA));
has("page prints the 1.0 f/cc excursion limit", PEL_EXCURSION.toFixed(1));
has("page prints the October 2026 10-year Treasury", UST10.toFixed(2));
has("page prints Prime", PRIME.toFixed(2));
has("page prints the 1/10th of 1 percent California definition", "1/10th of 1 percent");
has("page dates the EPA adjustment", "90 FR 1377");
has("page dates the OSHA adjustment", "90 FR 1861");

/* ------------------------------------------------- worked example */

const KEYS = 110;
const BATH_SF = 45;
const tileSf = KEYS * BATH_SF;
eq("tile area, 110 keys x 45 sf", tileSf, 4950);
eq("tile area as a multiple of the 160 sf threshold", +(tileSf / THRESH_AREA_SF).toFixed(1), 30.9);

const TSI_FT = 290;
eq("surveyed pipe insulation over the 260 ft line", TSI_FT - THRESH_PIPE_FT, 30);

const EXTRA_FT = 70;
eq("extra footage as a percent of the surveyed amount", +((EXTRA_FT / TSI_FT) * 100).toFixed(1), 24.1);
eq("the increase clears the 20 percent update line", (EXTRA_FT / TSI_FT) * 100 > UPDATE_PCT, true);
eq("revised total", TSI_FT + EXTRA_FT, 360);

/* the 10 working days, counted as full working days after the postmark */
const isWorkingDay = (d) => d.getUTCDay() >= 1 && d.getUTCDay() <= 5;
const postmark = new Date(Date.UTC(2026, 9, 16)); // Friday, October 16, 2026
eq("postmark is a Friday", postmark.getUTCDay(), 5);
let d = new Date(postmark), counted = 0;
while (counted < NOTICE_WORKING_DAYS) {
  d = new Date(d.getTime() + 86400000);
  if (isWorkingDay(d)) counted++;
}
// d is now the 10th working day after the postmark; work starts the next working day
let start = new Date(d.getTime() + 86400000);
while (!isWorkingDay(start)) start = new Date(start.getTime() + 86400000);
eq("tenth working day after the postmark", d.toISOString().slice(0, 10), "2026-10-30");
eq("earliest start", start.toISOString().slice(0, 10), "2026-11-02");
eq("earliest start is a Monday", start.getUTCDay(), 1);
const calendarDays = Math.round((start - postmark) / 86400000);
eq("calendar days from postmark to start, conservative count", calendarDays, 17);
/* the inclusive count, which the page names as the 14-day alternative */
let d2 = new Date(Date.UTC(2026, 10, 2)), c2 = 0;
while (c2 < NOTICE_WORKING_DAYS) {
  d2 = new Date(d2.getTime() - 86400000);
  if (isWorkingDay(d2)) c2++;
}
eq("inclusive count puts the postmark at October 19, 2026", d2.toISOString().slice(0, 10), "2026-10-19");
eq("inclusive count spans 14 calendar days", Math.round((Date.UTC(2026, 10, 2) - d2) / 86400000), 14);

/* the two costs */
const PER_KEY = 26000;            // assumption, labelled on the page
const budget = KEYS * PER_KEY;
eq("PIP budget, 110 keys x $26,000", money(budget), "$2,860,000");

const ROOMS_OOS = 24;
const roomNights = ROOMS_OOS * calendarDays;
eq("room nights lost over 17 days", roomNights, 408);
const OCC = 0.71, ADR = 142;      // assumptions, labelled on the page
const displaced = roomNights * OCC * ADR;
eq("displaced rooms revenue", money(displaced), "$41,135");

const carry = budget * (UST10 / 100) * (calendarDays / 365);
eq("carry on the budget for 17 days at 5.29 percent", money(carry), "$7,047");

const delayCost = Math.round(displaced) + Math.round(carry);
eq("total cost of the unplanned delay", money(delayCost), "$48,182");
eq("cost per key", money(delayCost / KEYS), "$438");

const STRIP_DAYS = 6;
const exposure = CAA_113B * STRIP_DAYS;
eq("six days of maximum Clean Air Act exposure", money(exposure), "$746,556");
eq("exposure as a percent of the budget", +((exposure / budget) * 100).toFixed(1), 26.1);
eq("exposure as a multiple of the delay cost", +(exposure / delayCost).toFixed(1), 15.5);

/* every computed figure must appear on the page */
for (const s of ["4,950", "30.9", "290", "24.1", "360", "17 calendar days", "14",
                 "$2,860,000", "408", "71 percent", "$142", "$41,135", "$7,047",
                 "$48,182", "$438", "$746,556", "26.1", "15.5",
                 "October 16, 2026", "November 2, 2026"]) {
  has(`page prints "${s}"`, s);
}

/* ------------------------------------------------- template limits */

const field = (name) => {
  const m = new RegExp(`\\n  ${name}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`).exec(src);
  return m ? m[1] : "";
};
const words = (s) => s.replace(/\\n/g, " ").split(/\s+/).filter(Boolean).length;

eq("title length <= 60", field("title").length <= 60, true);
eq("description length <= 155", field("description").length <= 155, true);
const answerWords = words(field("answer"));
eq("answer is 40 to 70 words", answerWords >= 40 && answerWords <= 70, true);
console.log(`     answer words: ${answerWords}`);
eq("answer carries a digit", /\d/.test(field("answer")), true);
eq("answer carries a date", /October 19, 2026/.test(field("answer")), true);

const block = (name) => {
  const i = src.search(new RegExp(`\\n\\s*${name}: \\[`));
  if (i < 0) return "";
  let depth = 0, j = src.indexOf("[", i);
  for (let k = j; k < src.length; k++) {
    if (src[k] === "[") depth++;
    else if (src[k] === "]") { depth--; if (!depth) return src.slice(j, k + 1); }
  }
  return "";
};
const strings = (s) => [...s.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);

const takeaways = strings(block("takeaways"));
eq("takeaways count 3 to 5", takeaways.length >= 3 && takeaways.length <= 5, true);
console.log(`     takeaways: ${takeaways.length}`);

const faqBlock = block("faq");
const faqs = [...faqBlock.matchAll(/q:\s*\n?\s*"((?:[^"\\]|\\.)*)",\s*\n?\s*a:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)];
eq("faq count 5 to 8", faqs.length >= 5 && faqs.length <= 8, true);
const longFaq = faqs.filter(([, , a]) => words(a) > 50);
eq("every faq answer <= 50 words", longFaq.length, 0);
for (const [, q, a] of faqs) console.log(`     faq ${words(a)}w: ${q.slice(0, 54)}`);

const sectionBlock = block("sections");
const h2s = [...sectionBlock.matchAll(/h2:\s*"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
eq("every h2 is phrased as a question", h2s.every((h) => h.endsWith("?")), true);
console.log(`     sections: ${h2s.length}`);

/* the same count AnswerPageView.tsx renders: answer + takeaways + section
   leads and bodies + the worked example + the FAQ. The page spec caps an
   answer page at 2,500 words. */
const exampleBody = /workedExample: \{[\s\S]*?body:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(src)?.[1] ?? "";
const bodyWords =
  answerWords +
  words(takeaways.join(" ")) +
  words([...sectionBlock.matchAll(/(?:lead|body):\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]).join(" ")) +
  words(exampleBody) +
  words(faqs.map(([, q, a]) => `${q} ${a}`).join(" "));
console.log(`     body words (answer + takeaways + sections + example + faq): ${bodyWords}`);
eq("body is 1,200 to 2,500 words", bodyWords >= 1200 && bodyWords <= 2500, true);

const srcs = [...src.matchAll(/\n      n: (\d+),/g)].map((m) => Number(m[1]));
eq("sources numbered 1..n with no gaps", srcs.join(","), srcs.map((_, i) => i + 1).join(","));
const refs = [...src.matchAll(/\[(\d+)\]/g)].map((m) => Number(m[1]));
eq("every source is cited", srcs.every((n) => refs.includes(n)), true);
eq("no citation points past the source list", refs.every((n) => srcs.includes(n)), true);

/* first reference order: source n must first appear before source n+1 */
const firstAt = (n) => src.indexOf(`[${n}]`);
const order = srcs.map(firstAt);
eq("sources are numbered in order of first reference",
   order.every((v, i) => i === 0 || v > order[i - 1]), true);

eq("siblings >= 3", strings(block("siblings")).length >= 3, true);
eq("author is a known slug", /authorSlug: "(luke-thompson|miles-cortez|nate-solomon)"/.test(src), true);
eq("reviewer is a known slug", /reviewerSlug: "(luke-thompson|miles-cortez|nate-solomon)"/.test(src), true);
eq("exactly one cta, to /contact", (src.match(/href: "\/contact"/g) || []).length, 1);
eq("no em-dash", src.includes("\u2014"), false);
eq("no banned filler", /\b(unlock|navigate|seamless|robust|delve|in today's)\b/i.test(src), false);

console.log(fails ? `\n${fails} check(s) FAILED` : "\nall asbestos-page checks pass");
process.exitCode = fails ? 1 : 0;
