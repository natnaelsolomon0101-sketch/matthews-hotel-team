#!/usr/bin/env node
/**
 * Recomputes every number on /hotel-industry/karis-law-911-requirements and
 * re-checks the template's own limits (geo/05-templates.md §1.1).
 *
 *   node scripts/check-karis-law-math.mjs
 *
 * Nothing here is fetched. The regulatory figures are the ones read out of the
 * eCFR versioner API against the 2026-10-01 issue of title 47 and re-read on
 * Cornell LII on 2026-10-20, and they are hard-coded so a hand-edit to the
 * page that moves a number fails this script instead of shipping quietly.
 * Exits non-zero on any mismatch.
 */
import { readFileSync } from "node:fs";

const src = readFileSync(
  new URL("../src/lib/data/answers/hotel-industry/karis-law-911-requirements.ts", import.meta.url),
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

/* ------------------------------------------------- regulatory figures */

const KARIS_LAW_PL = "115-127";       // Pub. L. 115-127, February 16, 2018
const FORFEIT_PER_DAY = 25132;        // 47 CFR 1.80(b)(10), 503(b)(2)(D)
const FORFEIT_SINGLE_ACT = 188491;    // same
const CITATION_DAYS = 30;             // 47 CFR 1.80(d)(2), "usually 30 days"
const LIMITATION_YEARS = 1;           // 47 CFR 1.80(c)(5)
const UST10 = 5.29;                   // /rates, October 2026 edition, as of 2026-09-30
const PRIME = 7.0;                    // same

/* every statutory or regulatory figure must actually appear on the page */
has("page prints the Kari's Law public law number", `Public Law ${KARIS_LAW_PL}`);
has("page prints the per-day forfeiture ceiling", `$${FORFEIT_PER_DAY.toLocaleString("en-US")}`);
has("page prints the single-act ceiling", `$${FORFEIT_SINGLE_ACT.toLocaleString("en-US")}`);
has("page prints the usual citation interview window", `usually ${CITATION_DAYS} days`);
has("page prints the one-year limitation", `more than ${LIMITATION_YEARS === 1 ? "one" : LIMITATION_YEARS} year`);
has("page prints the October 2026 10-year Treasury", UST10.toFixed(2));
has("page prints Prime", PRIME.toFixed(2));

/* the five dates the rule turns on */
for (const d of [
  "February 16, 2018",   // enactment, Pub. L. 115-127
  "February 16, 2020",   // 47 CFR 9.15(c), 9.17(b)
  "January 6, 2021",     // 47 CFR 9.16(b)(3)(i)
  "January 6, 2022",     // 47 CFR 9.16(b)(3)(ii), (iii)
  "December 15",         // 47 CFR 1.80(b)(12)(i), OMB guidance
]) {
  has(`page prints ${d}`, d);
}
/* two years after enactment is the applicability date in the statute */
const enacted = new Date(Date.UTC(2018, 1, 16));
const twoYears = new Date(Date.UTC(enacted.getUTCFullYear() + 2, enacted.getUTCMonth(), enacted.getUTCDate()));
eq("two years after enactment is February 16, 2020", twoYears.toISOString().slice(0, 10), "2020-02-16");

/* every CFR section the page relies on must be cited by number on the page */
for (const s of [
  "9.15(c)", "9.16(a)(1)", "9.16(b)(1)", "9.16(b)(2)", "9.16(b)(3)(i)",
  "9.16(b)(3)(ii)", "9.16(b)(3)(iii)", "9.17(a)(1)", "9.17(a)(2)", "9.17(b)",
  "9.17(c)", "1.80(b)(10)", "1.80(b)(11)", "1.80(b)(12)", "1.80(c)(5)", "1.80(d)",
  "47 CFR 9.3", "47 U.S.C. 623", "47 U.S.C. 1471", "47 U.S.C. 503(b)(2)(D)",
  "1.711 through 1.737",
]) {
  has(`page cites ${s}`, s);
}

/* ------------------------------------------------- worked example */

const KEYS = 120;
const BOH_STATIONS = 14;
const stations = KEYS + BOH_STATIONS;
eq("stations, 120 keys plus 14 back of house", stations, 134);

const PER_STATION = 310;            // assumption, labelled on the page
const hardware = stations * PER_STATION;
eq("hardware and configuration, 134 x $310", money(hardware), "$41,540");

const SOFTWARE = 9000;              // assumption, labelled on the page
const phoneLine = hardware + SOFTWARE;
eq("phone line total", money(phoneLine), "$50,540");
eq("phone line per key", money(phoneLine / KEYS), "$421");

const PER_KEY_PIP = 18000;          // assumption, labelled on the page
const pipBudget = KEYS * PER_KEY_PIP;
eq("renovation budget, 120 keys x $18,000", money(pipBudget), "$2,160,000");
eq("phone line as a percent of the renovation", +((phoneLine / pipBudget) * 100).toFixed(1), 2.3);

/* the day the single-act ceiling binds */
const day7 = FORFEIT_PER_DAY * 7;
const day8 = FORFEIT_PER_DAY * 8;
eq("seven days of maximum exposure", money(day7), "$175,924");
eq("eight days of maximum exposure", money(day8), "$201,056");
eq("day seven is under the single-act ceiling", day7 < FORFEIT_SINGLE_ACT, true);
eq("day eight would exceed the single-act ceiling", day8 > FORFEIT_SINGLE_ACT, true);
const bindsOnDay = Math.ceil(FORFEIT_SINGLE_ACT / FORFEIT_PER_DAY);
eq("the ceiling binds on day eight", bindsOnDay, 8);

eq("ceiling as a multiple of the phone line", +(FORFEIT_SINGLE_ACT / phoneLine).toFixed(1), 3.7);
eq("ceiling as a percent of the renovation", +((FORFEIT_SINGLE_ACT / pipBudget) * 100).toFixed(1), 8.7);
eq("ceiling per key", money(FORFEIT_SINGLE_ACT / KEYS), "$1,571");

/* every computed figure must appear on the page */
for (const s of ["134 stations", "$310", "$41,540", "$9,000", "$50,540", "$421 a key",
                 "$18,000", "$2,160,000", "2.3 percent", "$175,924", "$201,056",
                 "day eight", "3.7 times", "8.7 percent", "$1,571 a key", "March 2016"]) {
  has(`page prints "${s}"`, s);
}

/* ------------------------------------------------- template limits */

const field = (name) => {
  const m = new RegExp(`\\n  ${name}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`).exec(src);
  return m ? m[1] : "";
};
const words = (s) => s.replace(/\\n/g, " ").split(/\s+/).filter(Boolean).length;

eq("title length <= 60", field("title").length <= 60, true);
console.log(`     title: ${field("title").length} chars`);
eq("description length <= 155", field("description").length <= 155, true);
console.log(`     description: ${field("description").length} chars`);
const answerWords = words(field("answer"));
eq("answer is 40 to 70 words", answerWords >= 40 && answerWords <= 70, true);
console.log(`     answer words: ${answerWords}`);
eq("answer carries a digit", /\d/.test(field("answer")), true);
eq("answer carries a date", /February 16, 2020/.test(field("answer")), true);

const block = (name) => {
  const i = src.search(new RegExp(`\\n\\s*${name}: \\[`));
  if (i < 0) return "";
  let depth = 0;
  const j = src.indexOf("[", i);
  for (let k = j; k < src.length; k++) {
    if (src[k] === "[") depth++;
    else if (src[k] === "]") { depth--; if (!depth) return src.slice(j, k + 1); }
  }
  return "";
};
const strings = (s) => [...s.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);

const takeaways = strings(block("takeaways"));
eq("takeaways 3 to 5", takeaways.length >= 3 && takeaways.length <= 5, true);

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

/* the same count AnswerPageView.tsx renders */
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
eq("sources >= 4", srcs.length >= 4, true);
const refs = [...src.matchAll(/\[(\d+)\]/g)].map((m) => Number(m[1]));
eq("every source is cited", srcs.every((n) => refs.includes(n)), true);
eq("no citation points past the source list", refs.every((n) => srcs.includes(n)), true);

/* first reference order: source n must first appear before source n+1 */
const firstAt = (n) => src.indexOf(`[${n}]`);
const order = srcs.map(firstAt);
eq("sources are numbered in order of first reference",
   order.every((v, i) => i === 0 || v > order[i - 1]), true);

eq("siblings >= 3", strings(block("siblings")).length >= 3, true);
eq("every sibling is in this cluster",
   strings(block("siblings")).every((s) => s.startsWith("/hotel-industry/")), true);
eq("author is a known slug", /authorSlug: "(luke-thompson|miles-cortez|nate-solomon)"/.test(src), true);
eq("reviewer is a known slug", /reviewerSlug: "(luke-thompson|miles-cortez|nate-solomon)"/.test(src), true);
eq("exactly one cta, to /contact", (src.match(/href: "\/contact"/g) || []).length, 1);
eq("no em-dash", src.includes("\u2014"), false);
eq("no banned filler", /\b(unlock|navigate|seamless|robust|delve|in today's)\b/i.test(src), false);
eq("the brand sentence names the brand", /brandSentence:[\s\S]*?Matthews Hotel Markets/.test(src), true);

console.log(fails ? `\n${fails} check(s) FAILED` : "\nall Kari's Law page checks pass");
process.exitCode = fails ? 1 : 0;
