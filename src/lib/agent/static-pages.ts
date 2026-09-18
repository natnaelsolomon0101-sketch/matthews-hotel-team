/**
 * Markdown twins for the four pages whose layout is hand-written JSX:
 * /rates, /rates/methodology, /data/hotel-financing-statistics and /about.
 *
 * Every number below comes from the same module the page reads
 * (src/lib/rates/*, src/lib/entity.ts, src/lib/data/*). The connecting prose
 * those pages hard-code in JSX is transcribed here word for word. That is a
 * second copy, so `scripts/agent-access-check.mjs` compares every line of
 * each twin with the rendered HTML in the ship gate. If someone edits the
 * page and not this file (or the reverse), the gate fails and names the line.
 * Fix it by copying the page's wording here. Never the other way round
 * without a source.
 */
import {
  BOILERPLATE,
  BRAND,
  EMAIL,
  HQ_ADDRESS_LINE,
  LINKEDIN,
  PARENT,
  PARENT_URL,
  SITE_URL,
  bioMembers,
} from "../entity";
import { services } from "../data/services";
import { offices } from "../data/offices";
import { team } from "../data/team";
import {
  BENCHMARKS,
  EDITIONS,
  MHDI_ABBR,
  MHDI_DEFINITION,
  MHDI_NAME,
  MHDI_RULES,
  cellCounts,
  citationString,
  citedSourceIds,
  latestEdition,
} from "../rates/sheet";
import { RATE_SOURCES } from "../rates/sources";
import { RATES_LICENSE } from "../rates/jsonld";
import { REMOVED_FIGURES, STATS, STAT_GROUPS, statsIn } from "../rates/statistics";
import type { Cell } from "../rates/types";
import { UPDATED as STATS_UPDATED } from "../../app/data/hotel-financing-statistics/updated";
import { citeAsPage, footer, header, longDate, table } from "./md";
import type { Twin } from "./markdown";

/* -------------------------------------------------------------------- rates */

function cellText(cell: Cell): string {
  if (cell.basis === "pending") return `Not yet published<br>${cell.awaits}`;
  if (cell.basis === "observed") {
    return (
      `${cell.value}<br>${BRAND} observation` +
      (cell.quoteCount ? `, from ${cell.quoteCount} quotes` : "") +
      (cell.note ? `. ${cell.note}` : "")
    );
  }
  return cell.note ? `${cell.value}<br>${cell.note}` : cell.value;
}

function sourceLine(s: { name: string; url: string; publisher: string; asOf: string; verified: string }, n: number) {
  return `${n}. [${s.name}](${s.url}) · ${s.publisher} · source date ${s.asOf} · last verified ${s.verified}`;
}

function people(slugs: string[]): string[] {
  const out: string[] = [];
  for (const m of bioMembers().filter((x) => slugs.includes(x.slug))) {
    out.push(`- [${m.name}](${SITE_URL}/team/${m.slug})`, `  ${m.title}, ${BRAND}`, `  ${m.phone} · ${m.email}`);
  }
  return out;
}

const RATES_H1_FOLLOW = "What the public benchmarks say, and what we have not published yet.";

function ratesMarkdown(): string {
  const e = latestEdition();
  const counts = cellCounts(e);
  const cited = citedSourceIds(e);
  const sources = RATE_SOURCES.filter((s) => cited.includes(s.id));
  const updated = e.modifiedAt ?? e.publishedAt;

  const out = header({
    h1: `Hotel Loan Rate Sheet, ${e.label}. ${RATES_H1_FOLLOW}`,
    path: "/rates",
    lastUpdated: updated,
  });

  out.push(
    `Published by ${BRAND} · Last updated: ${longDate(updated)} · Next edition: ${longDate(e.nextRefresh)}`,
    "",
  );

  for (const c of e.corrections ?? []) {
    out.push(
      `**Correction.** ${c.text} This edition was first published ${longDate(e.publishedAt)} and was corrected in place on ${longDate(c.date)}; the changelog below records the earlier values.`,
      "",
    );
    const srcs = c.sources
      .map((id) => RATE_SOURCES.find((r) => r.id === id))
      .filter((s): s is NonNullable<typeof s> => Boolean(s))
      .map((s) => `[${s.name}](${s.url}) (${s.publisher}, source date ${s.asOf})`);
    if (srcs.length) out.push(`Sources: ${srcs.join("; ")}.`, "");
  }

  out.push(e.directAnswer, "");

  out.push(
    `**What is and is not on this page.** Of ${counts.total} priced cells in the table below, ${counts.published} are public benchmarks or published program rules with a source link` +
      (counts.observed > 0 ? `, ${counts.observed} are this team's observations from live quotes,` : ",") +
      ` and ${counts.pending} say “not yet published”. Nobody publishes those, and we have not yet released our own figure for them. We would rather show you the gap than fill it with a number we made up. Every index value in the table is real, sourced and dated. [Methodology](${SITE_URL}/rates/methodology).`,
    "",
  );

  out.push("## The indexes every quote is struck against", "");
  out.push(
    "Each figure below comes straight from the institution that publishes it. The as-of date is the date of the observation, not the date we fetched it.",
    "",
  );
  out.push(
    ...table(
      ["Benchmark", "Value", "As of", "Source"],
      BENCHMARKS.map((b) => [b.label, `${b.value.toFixed(2)}%`, `As of ${longDate(b.asOf)}`, `[${b.sourceName}](${b.sourceUrl})`]),
    ),
    "",
  );

  out.push(`## ${e.label} terms by lender type`, "");
  out.push(
    ...table(
      [
        "Lender type",
        "Index",
        "Spread",
        "All-in coupon",
        "Max LTV / LTC",
        "DSCR floor",
        "Term / amortization",
        "Recourse",
        "Minimum loan",
      ],
      e.rows.map((row) => [
        `${row.lenderType}<br>${row.summary}`,
        `${row.indexLabel}<br>${row.index
          .map((k) => {
            const b = BENCHMARKS.find((x) => x.key === k);
            return b ? `${b.label} ${b.value.toFixed(2)}%` : k;
          })
          .join(" · ")}`,
        cellText(row.spread),
        cellText(row.allIn),
        cellText(row.maxLtv),
        cellText(row.dscrFloor),
        cellText(row.termAmort),
        cellText(row.recourse),
        cellText(row.minLoan),
      ]),
    ),
    "",
  );
  for (const row of e.rows) out.push(`- **${row.lenderType}:** ${row.notes}`);
  out.push("");

  out.push(`## ${MHDI_NAME} (${MHDI_ABBR})`, "");
  out.push(
    ...table(
      [`${e.label} reading`, "Quotes behind it", "Series start"],
      [
        [
          e.mhdi.value === null ? "Not yet published" : `${e.mhdi.value.toFixed(2)}%`,
          e.mhdi.quoteCount === null ? "None yet" : String(e.mhdi.quoteCount),
          EDITIONS[EDITIONS.length - 1].label,
        ],
      ],
    ),
    "",
  );
  out.push(`**Definition.** ${MHDI_DEFINITION}`, "");
  if (e.mhdi.note) out.push(e.mhdi.note, "");
  out.push("### The rules the index runs on", "");
  for (const r of MHDI_RULES) out.push(`- ${r}`);
  out.push("");
  out.push(
    `The MHDI is the debt-side companion to the [Matthews Hotel Index](${SITE_URL}/research/mhi), which publishes quarterly cap rates, ADR and RevPAR across 14 markets from public sources. Two different datasets: MHI measures what hotels trade at, MHDI measures what the debt costs. They are not combined, because they run on different cadences and different kinds of evidence.`,
    "",
  );

  out.push("## What moved", "");
  e.changelog.forEach((c, i) => out.push(`${i + 1}. ${c}`));
  out.push("");

  out.push("## Cite this", "");
  out.push(
    `Published under [CC BY 4.0](${RATES_LICENSE}). Reuse it anywhere, including in an AI assistant’s answer, with attribution. The archived edition URL never changes, so a citation to it stays true after the next refresh.`,
    "",
  );
  out.push("```", citationString(e, SITE_URL), "```", "");
  out.push(
    `Machine-readable: [/rates.json](${SITE_URL}/rates.json) and [/rates.csv](${SITE_URL}/rates.csv). Both carry the same basis label on every cell, so a pending cell cannot be read back as a number. Cross-origin requests are allowed.`,
    "",
  );
  out.push(`Archive: ${EDITIONS.map((x) => `[${x.label}](${SITE_URL}/rates/${x.slug})`).join(", ")}.`, "");

  out.push("## Sources", "");
  sources.forEach((s, i) => out.push(sourceLine(s, i + 1)));
  out.push("");

  out.push("## Who publishes this", "");
  out.push(...people(["luke-thompson", "nate-solomon"]), "");
  out.push(
    `Luke Thompson runs debt placement for ${BRAND} and owns the observed figures on this sheet. Nate Solomon compiles the public benchmarks and the monthly refresh.`,
    "",
  );
  out.push(
    "A rate sheet is a starting point. A quote on your hotel is the real answer.",
    "",
    `[Ask for a quote](${SITE_URL}/contact)`,
  );

  out.push(...footer(citationString(e, SITE_URL)));
  return out.join("\n");
}

export function ratesTwin(): Twin {
  const e = latestEdition();
  return {
    path: "/rates",
    kind: "data",
    title: `Hotel Loan Rate Sheet, ${e.label}`,
    h1: `Hotel Loan Rate Sheet, ${e.label}. ${RATES_H1_FOLLOW}`,
    lastUpdated: e.modifiedAt ?? e.publishedAt,
    summary: e.directAnswer,
    citeAs: citationString(e, SITE_URL),
    markdown: ratesMarkdown,
  };
}

/* -------------------------------------------------------------- methodology */

// Transcribed from src/app/rates/methodology/page.tsx. Keep in step.
const METHODOLOGY_H1 = "How the rate sheet is built. Sources, definitions, and what we refuse to publish.";
const METHODOLOGY_LEAD =
  "Every cell on the rate sheet is one of three things: a public benchmark with a link, a published program rule with a link, or an observation from term sheets this desk actually received. Anything that is none of those reads “not yet published” and carries no number.";

const METHODOLOGY_FAQS: { q: string; a: string }[] = [
  {
    q: "Where do the index rates come from?",
    a: "Treasury yields come from the U.S. Treasury's daily par yield curve. SOFR comes from the New York Fed, which administers it. Prime comes from the Federal Reserve's published series. When that series lags a rate change the banks have already announced, Prime comes from the banks' own dated announcements until the series catches up, and the sheet says which. No intermediaries.",
  },
  {
    q: "Why do some cells say not yet published?",
    a: "Because nobody publishes them. Spreads, coverage tests and working leverage ceilings exist only in live term sheets. We show that cell as empty rather than fill it with a guess.",
  },
  {
    q: "Are these rates a quote?",
    a: "No. The public benchmarks are facts. Everything else is indicative. A real quote depends on the asset, the brand, the market, the sponsor and the business plan, and only a lender can give you one.",
  },
  {
    q: "Do you name the lenders you quote?",
    a: "Never. No lender name, no client, no property, no transaction detail appears on this page or in the file behind it. The sheet reports the market, not a relationship.",
  },
  {
    q: "How often does the sheet update?",
    a: "Monthly. The public benchmarks refresh in the first few business days of the month from the same endpoints listed here. The archived edition for each month keeps its own URL and never changes.",
  },
  {
    q: "Will you backfill the debt index history?",
    a: "No. The Matthews Hotel Debt Index starts with its first published reading. Reconstructing a year of quotes from memory would produce a prettier chart and a worse number.",
  },
  {
    q: "Can I reuse the data?",
    a: "Yes, under CC BY 4.0, with attribution to Matthews Hotel Markets and a link. That includes reuse inside an AI assistant's answer. Machine-readable copies are at /rates.json and /rates.csv.",
  },
];

function methodologyMarkdown(): string {
  const e = latestEdition();
  const updated = e.modifiedAt ?? e.publishedAt;
  const prime = BENCHMARKS.find((b) => b.key === "prime")?.value.toFixed(2);
  const out = header({ h1: METHODOLOGY_H1, path: "/rates/methodology", lastUpdated: updated });

  out.push(METHODOLOGY_LEAD, "");

  out.push("## 1. The three bases, and how to tell them apart", "");
  out.push(
    ...table(
      ["Basis", "What it means", "How it looks on the page", "Can you check it?"],
      [
        [
          "Published",
          "A public benchmark or a written program rule.",
          "A number, plus a note naming the source and the date.",
          "Yes. Click the source in the numbered list.",
        ],
        [
          "Observed",
          "What lenders quoted this desk during the month.",
          `A number, labeled “${BRAND} observation” with the quote count.`,
          "No. You can check the count and the definition, not the underlying term sheets.",
        ],
        [
          "Not yet published",
          "We do not have it, or we have not released it.",
          "The words “not yet published” and the reason. Never a dash, never a zero.",
          "There is nothing to check, which is the point.",
        ],
      ],
    ),
    "",
  );

  out.push("## 2. The benchmark endpoints", "");
  out.push(
    `These are the exact publishers we read, in the order the sheet lists them. The as-of date on the sheet is the date of the observation, not the date we ran the script. A benchmark that has not printed since a policy move keeps its old date and the changelog says so. When the Federal Reserve’s Prime series lags a move the banks have already announced, as it did after the September 16, 2026 FOMC decision, the sheet uses the banks’ own dated announcements and names them, which is why September’s Prime reads ${prime}% as of September 17, 2026.`,
    "",
  );
  for (const b of BENCHMARKS) {
    out.push(`- **${b.label}** [${b.sourceName}](${b.sourceUrl})${b.seriesId ? ` (series ${b.seriesId})` : ""}`);
  }
  out.push("");
  out.push(
    "Nothing licensed is used anywhere on this sheet. No STR, CoStar or Trepp subscriber data is stored, republished, or handed out through the JSON and CSV endpoints. If a number cannot be redistributed, it does not belong on a page whose entire purpose is redistribution.",
    "",
  );

  out.push(`## 3. ${MHDI_NAME} (${MHDI_ABBR})`, "", MHDI_DEFINITION, "");
  for (const r of MHDI_RULES) out.push(`- ${r}`);
  out.push("");
  out.push(
    "A skeptic’s first question about any broker-published index is whether it is marketing. Three things are meant to answer that. The structure is fixed, so we cannot quietly swap in a lower-rate loan type on a month we want the number to fall. The minimum quote count is published, so a thin month shows as a gap instead of a reading built on one term sheet. And the history is never backfilled, so the series cannot start with a flattering shape.",
    "",
  );

  out.push("## 4. How it relates to the Matthews Hotel Index", "");
  out.push(
    `The [Matthews Hotel Index](${SITE_URL}/research/mhi) is quarterly, covers 14 markets, and measures cap rates, ADR, RevPAR and occupancy from public research. The MHDI is monthly, national, measures one number, and comes from quotes. They share a publisher and a naming family and they cross-link, but they are two datasets and they are never averaged together. Mixing a quarterly public-data series with a monthly observation series would make both of them worse.`,
    "",
  );

  out.push("## 5. Corrections", "");
  out.push(
    `If a published figure here is wrong, email [${EMAIL}](mailto:${EMAIL}) and it gets fixed in the current edition with a dated line in the changelog. Archived editions are never edited in place, because someone may have cited them. A correction to an archived edition is published as a correction on the current one.`,
    "",
  );

  out.push("## Questions", "");
  for (const f of METHODOLOGY_FAQS) out.push(`### ${f.q}`, "", f.a, "");

  out.push("## Every source the sheet can cite", "");
  RATE_SOURCES.forEach((s, i) => out.push(sourceLine(s, i + 1)));
  out.push("");
  out.push(`- [Back to the rate sheet](${SITE_URL}/rates)`, `- [Ask for a quote](${SITE_URL}/contact)`);

  out.push(...footer(citeAsPage("Rate Sheet Methodology", "/rates/methodology", updated)));
  return out.join("\n");
}

export function methodologyTwin(): Twin {
  const e = latestEdition();
  const updated = e.modifiedAt ?? e.publishedAt;
  return {
    path: "/rates/methodology",
    kind: "data",
    title: "Rate Sheet Methodology",
    h1: METHODOLOGY_H1,
    lastUpdated: updated,
    summary: METHODOLOGY_LEAD,
    citeAs: citeAsPage("Rate Sheet Methodology", "/rates/methodology", updated),
    markdown: methodologyMarkdown,
  };
}

/* --------------------------------------------------------------- statistics */

// Transcribed from src/app/data/hotel-financing-statistics/page.tsx. Keep in
// step: when the Rate Sheet agent edits the intro, the correction note or the
// takeaways on the page, the same edit goes here, and the gate checks it.
const STATS_H1 = "Hotel financing statistics. Every number with a source, a source date, and the date we last checked it.";
const STATS_CORRECTION =
  "**Correction, September 18, 2026.** Prime moved to 7.00% on September 17 after the Fed’s September 16 decision, so the SBA 7(a) maximum is 10.00%; SOFR printed 3.85% for September 17. The Prime, SOFR and SBA entries below were updated and each notes its earlier value.";
const statsLead = () =>
  `${STATS.length} statistics on hotel debt and hotel investment, as of September 17, 2026. The 10-year Treasury is 4.94%, SOFR is 3.85%, and SBA caps a variable-rate 7(a) hotel loan over $350,000 at Prime plus 3.00%, which is 10.00% with Prime at 7.00% since September 17. Each entry below links its publisher and carries two dates: the date on the source, and the date a person here last opened it.`;
const STATS_TAKEAWAYS = [
  "The 10-year Treasury was 4.94% and SOFR was 3.85% on September 17, 2026, the day after the Fed raised its target range 25 basis points. Fixed-rate and floating-rate debt both cost more than they did on August 31.",
  "SBA is the only lender type whose maximum rates and leverage are published in writing. A variable-rate 7(a) hotel loan over $350,000 is capped at Prime plus 3.00%, and SBA rules cap a hotel 504 structure at 85% of cost.",
  "Trepp counts $18.7 billion of hotel CMBS maturing in 2026 and nearly 70% of it floats, so SOFR decides whether those loans extend.",
  "CBRE and CoStar are about 190 basis points apart on 2026 RevPAR growth. Both forecasts are below, because underwriting to one of them without knowing about the other is the mistake.",
  "Three numbers that circulate in hotel finance commentary are deliberately not on this page. They are listed at the bottom with the reason, so you can see what was checked and rejected rather than only what survived.",
];

const statsCite = () =>
  `${BRAND}. "Hotel Financing Statistics, 2026." ${SITE_URL}/data/hotel-financing-statistics. Last updated ${STATS_UPDATED}.`;

function statisticsMarkdown(): string {
  const out = header({ h1: STATS_H1, path: "/data/hotel-financing-statistics", lastUpdated: STATS_UPDATED });

  out.push(`Compiled by ${BRAND} · Last updated: ${longDate(STATS_UPDATED)}`, "");
  out.push(STATS_CORRECTION, "", statsLead(), "");

  out.push("## Key takeaways", "");
  for (const t of STATS_TAKEAWAYS) out.push(`- ${t}`);
  out.push("");
  out.push(
    "**How to read the sourcing.** Where we read a number straight from the institution that publishes it, the publisher line names that institution. Where we read it from a trade publication quoting a research house, the publisher line says so, in the form “Hotel Dive, citing Trepp”. That distinction matters and hiding it would be the easy thing to do. No licensed subscriber data from STR, CoStar or Trepp is republished here: what appears is what those firms put in a free release or what a publication quoted from them.",
    "",
  );

  let n = 0;
  for (const g of STAT_GROUPS) {
    out.push(`## ${g.label}`, "", g.blurb, "");
    for (const s of statsIn(g.key)) {
      n += 1;
      out.push(`${n}. ${s.text}`);
      if (s.note) out.push(`   ${s.note}`);
      out.push(`   [${s.sourceName}](${s.url}) · ${s.publisher} · source date ${s.asOf} · last verified ${s.verified}`);
    }
    out.push("");
  }

  out.push("## Numbers we removed, and why", "");
  out.push(
    "These three figures circulate in hotel finance commentary and two of them appeared on this site before. We could not source them, so they are not on the page. Showing the rejects is the only way to make the accepted list mean anything.",
    "",
  );
  out.push(
    ...table(
      ["The claim", "Why it is not here", "What we publish instead"],
      REMOVED_FIGURES.map((r) => [r.claim, r.why, r.instead]),
    ),
    "",
  );

  out.push("## Cite this", "");
  out.push(
    `Published under [CC BY 4.0](${RATES_LICENSE}). Cite the original publisher for any individual statistic. Cite this page for the compilation.`,
    "",
  );
  out.push("```", statsCite(), "```", "");

  out.push("## Who maintains this", "");
  out.push(...people(["nate-solomon", "luke-thompson"]), "");
  out.push(
    `Found a number here that is wrong or out of date? Email [${EMAIL}](mailto:${EMAIL}) and it gets fixed with a new verification date, or removed.`,
    "",
  );
  out.push(
    "Statistics tell you the market. A quote tells you your deal.",
    "",
    `[Talk to the team](${SITE_URL}/contact)`,
  );

  out.push(...footer(statsCite()));
  return out.join("\n");
}

export function statisticsTwin(): Twin {
  return {
    path: "/data/hotel-financing-statistics",
    kind: "data",
    title: "Hotel Financing Statistics, 2026",
    h1: STATS_H1,
    lastUpdated: STATS_UPDATED,
    summary: statsLead(),
    citeAs: statsCite(),
    markdown: statisticsMarkdown,
  };
}

/* -------------------------------------------------------------------- about */

// Transcribed from src/app/about/page.tsx, which also hard-codes this date.
const ABOUT_UPDATED = "2026-09-17";
const ABOUT_H1 = "Who Matthews Hotel Markets is. What we do, where, and who to call.";

function aboutMarkdown(): string {
  const members = bioMembers();
  const austin = offices.find((o) => o.slug === "austin");
  const denver = offices.find((o) => o.slug === "denver");
  const out = header({ h1: ABOUT_H1, path: "/about", lastUpdated: ABOUT_UPDATED });

  out.push(BOILERPLATE, "");

  out.push("## What the team does", "");
  out.push(
    "Three service lines, all hospitality, all in the United States. Ranges below are the same ranges published on each service page.",
    "",
  );
  out.push(
    ...table(
      ["Service", "Range", "Who it is for"],
      services.map((s) => [`[${s.name}](${SITE_URL}/services/${s.slug})`, s.rangeValue, s.audience]),
    ),
    "",
  );

  out.push("## Where we work from", "");
  out.push(
    `The headquarters is ${HQ_ADDRESS_LINE}. Luke Thompson and Nate Solomon sit there. Miles Cortez III works out of Denver and covers the Mountain West; we do not publish a Denver street address, because there is not a confirmed one to publish. The wider Matthews hospitality bench sits in Phoenix, Orange County, Fort Lauderdale, Nashville, Dallas, Tampa, Cleveland, Kansas City, and Encino. Mandates run nationwide, with the most coverage in Texas and the Sun Belt.`,
    "",
  );
  if (austin) {
    out.push(
      `- [Austin headquarters](${SITE_URL}/offices/austin): ${austin.streetAddress}, ${austin.city}, ${austin.state} ${austin.zip}`,
    );
  }
  if (denver) out.push(`- [Denver](${SITE_URL}/offices/denver): ${denver.city}, ${denver.state}. Mountain West coverage.`);
  out.push("");

  out.push("## Since when", "");
  out.push(
    `We do not publish a founding year for the hospitality team, because we have not been able to source one we can stand behind. What is verifiable is on this site: the active mandates on [listings](${SITE_URL}/listings), the transaction record on [closed](${SITE_URL}/closed), and the individual track records on each [broker profile](${SITE_URL}/team). When the date is confirmed, it goes here first.`,
    "",
  );

  out.push("## How this works with the parent platform", "");
  out.push(
    `${BRAND} is a team inside ${PARENT}, not a separate company. The hospitality mandates, the underwriting, and the client relationships are ours. Compliance, back office, and the firm-wide investor database sit with the parent. Deals are signed under the ${PARENT} entity, and the firm's corporate site is [matthews.com](${PARENT_URL}).`,
    "",
  );

  out.push("## Who you talk to", "");
  out.push(
    `${team.length} people cover hospitality across the Matthews platform. ${members.length} of them publish a full profile on this site and carry the mandates behind the listings and closings here. The rest of the hospitality bench is listed on the [team page](${SITE_URL}/team) with office, email, and direct line. There is no call center and no junior handoff: the person named on the listing is the person who picks up.`,
    "",
  );
  for (const m of members) {
    out.push(`- [${m.name}](${SITE_URL}/team/${m.slug}), ${m.title}`, `  ${m.office} · ${m.phone} · ${m.email}`);
  }
  out.push("");

  out.push("## Reach the team", "");
  out.push(HQ_ADDRESS_LINE, "", EMAIL, "", `[LinkedIn](${LINKEDIN})`, "", `[Talk to the team](${SITE_URL}/contact)`);

  out.push(...footer(citeAsPage(`About ${BRAND}`, "/about", ABOUT_UPDATED)));
  return out.join("\n");
}

export function aboutTwin(): Twin {
  return {
    path: "/about",
    kind: "about",
    title: `About ${BRAND}`,
    h1: ABOUT_H1,
    lastUpdated: ABOUT_UPDATED,
    summary: BOILERPLATE,
    citeAs: citeAsPage(`About ${BRAND}`, "/about", ABOUT_UPDATED),
    markdown: aboutMarkdown,
  };
}
