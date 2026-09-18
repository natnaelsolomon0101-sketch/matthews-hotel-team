/**
 * Markdown twins of the HTML pages.
 *
 * THE RULE: a twin carries the same facts as its HTML page, because it is
 * built from the same typed data module the page renders. Nothing is added
 * for machines and nothing is withheld from them. The only lines a twin has
 * that its page does not are bibliographic: the URL, the link back to the HTML
 * page, and the "Cite as" string. `scripts/agent-access-check.mjs` enforces
 * this in the ship gate by checking every body line of every twin against the
 * rendered HTML of the page it mirrors.
 *
 * Four pages (/rates/methodology, /about, and the intro blocks of /rates and
 * /data/hotel-financing-statistics) are hand-written JSX, not data. Their
 * prose is transcribed in ./static-pages.ts and the same gate check fails the
 * build when the page and the transcription drift apart.
 */
import { BRAND, SITE_URL } from "../entity";
import { team } from "../data/team";
import { glossary, type GlossaryEntry } from "../data/glossary";
import { answerPages, answerPath, clusters, type AnswerPage } from "../data/answers";
import type { ToolPage } from "../data/answers/types";
import { tools } from "../data/tools/dscr-calculator";
import { markets } from "../data/markets";
import { brands } from "../data/brands";
import { insights } from "../data/insights";
import { abs, mdUrl, longDate, inline, paragraphs, table, citeAsPage, header, footer } from "./md";
import { aboutTwin, methodologyTwin, ratesTwin, sbaHotelLendingTwin, sbaStateTwins, statisticsTwin } from "./static-pages";
import { KNOWN_PATH_LABELS } from "../data/answers/path-labels";

export type Twin = {
  /** HTML path, e.g. "/hotel-financing/sba-7a-vs-504". */
  path: string;
  kind: "answer" | "tool" | "glossary" | "data" | "about";
  title: string;
  /** The page's visible H1, exactly. */
  h1: string;
  /** ISO date, the same value the page shows as "Last updated". */
  lastUpdated: string;
  /** The 40 to 70 word direct answer, or the page's lead paragraph. */
  summary: string;
  author?: string;
  citeAs: string;
  markdown: () => string;
};

export { abs, mdUrl, longDate, inline, table, citeAsPage, header, footer };

function labelForPath(path: string): string {
  for (const c of clusters) {
    if (path === `/${c.cluster}`) return c.hub.h1;
    const spoke = c.spokes.find((s) => `/${c.cluster}/${s.slug}` === path);
    if (spoke) return spoke.h1;
  }
  const term = glossary.find((g) => `/glossary/${g.slug}` === path);
  if (term) return term.term;
  // Same fallbacks as AnswerPageView's labelForPath, so link text matches.
  return KNOWN_PATH_LABELS[path] ?? path;
}

function link(path: string): string {
  return `[${labelForPath(path)}](${abs(path)})`;
}

/* ------------------------------------------------------------ answer + tool */

export function answerMarkdown(page: AnswerPage | ToolPage): string {
  const isTool = page.cluster === "tools";
  const path = isTool ? `/tools/${page.slug}` : answerPath(page as AnswerPage);
  const isHub = !isTool && (page as AnswerPage).isHub;
  const author = team.find((m) => m.slug === page.authorSlug);
  const reviewer = page.reviewerSlug ? team.find((m) => m.slug === page.reviewerSlug) : undefined;

  const out: string[] = header({ h1: page.h1, path, lastUpdated: page.lastUpdated, author, reviewer });

  out.push(inline(page.answer), "");

  out.push("## Key takeaways", "");
  for (const t of page.takeaways) out.push(`- ${inline(t)}`);
  out.push("");

  out.push(
    page.originalDataPoint.source === "rates" ? "## From our rate sheet" : "## From the Matthews Hotel Index",
    "",
    inline(page.originalDataPoint.sentence),
    "",
    link(page.originalDataPoint.ref),
    "",
  );

  if (isTool) {
    const t = (page as ToolPage).tool;
    out.push("## The formula, written out", "", "```", t.formula, "```", "", t.disclaimer, "");
  }

  for (const s of page.sections) {
    out.push(`## ${s.h2}`, "", inline(s.lead), "", ...paragraphs(s.body).flatMap((p) => [p, ""]));
  }

  out.push(`## ${page.table.caption}`, "", ...table(page.table.columns, page.table.rows), "");

  if (isHub) {
    const c = clusters.find((x) => x.hub === page);
    if (c && c.spokes.length) {
      out.push("## Every question in this guide", "");
      for (const s of c.spokes) {
        out.push(`- [${s.h1}](${abs(answerPath(s))})`, `  ${s.description}`);
      }
      out.push("");
    }
  }

  out.push("## Worked example", "", `**${page.workedExample.label}**`, "");
  out.push(...paragraphs(page.workedExample.body).flatMap((p) => [p, ""]));

  out.push("## Frequently asked", "");
  for (const f of page.faq) out.push(`### ${f.q}`, "", inline(f.a), "");

  if (author) {
    out.push("## Who wrote this", "");
    out.push(`[${author.name}](${SITE_URL}/team/${author.slug})`, "");
    out.push(`${author.title}, ${BRAND}`, "");
    out.push(
      `${author.phone} · ${author.email}` + (author.linkedin ? ` · [LinkedIn](${author.linkedin})` : ""),
      "",
    );
    if (reviewer) {
      out.push(`Reviewed by [${reviewer.name}](${SITE_URL}/team/${reviewer.slug}), ${reviewer.title}.`, "");
    }
  }

  out.push("## Sources", "");
  for (const s of page.sources) {
    out.push(`${s.n}. [${s.label}](${abs(s.url)}) · ${s.publisher} · accessed ${longDate(s.accessed)}`);
  }
  out.push("");

  out.push("## Related", "");
  if (!isHub) out.push("### Guide", "", `- ${link(page.related.hub)}`, "");
  if (page.related.siblings.length) {
    out.push(isHub ? "### More in this guide" : "### Other questions in this guide", "");
    for (const s of page.related.siblings) out.push(`- ${link(s)}`);
    out.push("");
  }
  if (page.related.glossary.length) {
    out.push(`### Terms defined in the [glossary](${SITE_URL}/glossary)`, "");
    for (const g of page.related.glossary) out.push(`- ${link(g)}`);
    out.push("");
  }
  if (page.related.data.length) {
    out.push("### Our own data", "");
    for (const d of page.related.data) out.push(`- ${link(d)}`);
    out.push("");
  }

  out.push(page.brandSentence, "", `[${page.cta.label}](${abs(page.cta.href)})`);

  out.push(...footer(citeAsPage(page.h1, path, page.lastUpdated, author?.name)));
  return out.join("\n");
}

/* ---------------------------------------------------------------- glossary */

export function glossaryMarkdown(entry: GlossaryEntry): string {
  const path = `/glossary/${entry.slug}`;
  const author = entry.authorSlug ? team.find((t) => t.slug === entry.authorSlug) : undefined;
  const out: string[] = header({ h1: entry.term, path, lastUpdated: entry.lastUpdated, author });

  out.push(inline(entry.shortDef), "");
  out.push("## Quick definition", "", inline(entry.fullDef), "");

  for (const p of entry.body.split(/\n\n+/).map((x) => x.trim()).filter(Boolean)) {
    out.push(p.startsWith("## ") ? p : inline(p.replace(/\s*\n\s*/g, " ")), "");
  }

  out.push("## Worked example", "", inline(entry.example), "");

  if (entry.misconceptions.length) {
    out.push("## Common misconceptions", "");
    for (const m of entry.misconceptions) out.push(`- ${inline(m)}`);
    out.push("");
  }

  out.push("## Frequently asked", "");
  for (const f of entry.faq) out.push(`### ${f.q}`, "", inline(f.a), "");

  out.push("## Sources", "");
  entry.sources.forEach((s, i) => {
    out.push(`${i + 1}. [${s.label}](${abs(s.url)})${s.publisher ? ` · ${s.publisher}` : ""}`);
  });
  out.push("");

  const related: string[] = [];
  for (const slug of entry.relatedTerms) {
    const g = glossary.find((x) => x.slug === slug);
    if (g) related.push(`- [${g.term}](${SITE_URL}/glossary/${g.slug})`);
  }
  for (const slug of entry.relatedMarkets ?? []) {
    const m = markets.find((x) => x.slug === slug);
    if (m) related.push(`- [${m.city}, ${m.state}](${SITE_URL}/markets/${m.slug})`);
  }
  for (const slug of entry.relatedBrands ?? []) {
    const b = brands.find((x) => x.slug === slug);
    if (b) related.push(`- [${b.name}](${SITE_URL}/hotels-for-sale/${b.slug})`);
  }
  for (const slug of entry.relatedInsights ?? []) {
    const i = insights.find((x) => x.slug === slug);
    if (i) related.push(`- [${i.title}](${SITE_URL}/insights/${i.slug})`);
  }
  if (related.length) out.push("## Related", "", ...related, "");

  out.push(
    `Want a confidential walk-through of ${entry.term} on a specific asset?`,
    "",
    `[Talk to us](${SITE_URL}/contact)`,
  );
  out.push(...footer(citeAsPage(`${entry.term}: definition`, path, entry.lastUpdated, author?.name)));
  return out.join("\n");
}

/* ---------------------------------------------------------------- registry */

function stripRefs(t: string): string {
  return t.replace(/\s*\[\d+\]/g, "");
}

let cache: Twin[] | null = null;

export function twins(): Twin[] {
  if (cache) return cache;
  const out: Twin[] = [];

  for (const p of answerPages) {
    const author = team.find((m) => m.slug === p.authorSlug);
    out.push({
      path: answerPath(p),
      kind: "answer",
      title: p.title,
      h1: p.h1,
      lastUpdated: p.lastUpdated,
      summary: stripRefs(p.answer),
      author: author?.name,
      citeAs: citeAsPage(p.h1, answerPath(p), p.lastUpdated, author?.name),
      markdown: () => answerMarkdown(p),
    });
  }
  for (const t of tools) {
    const author = team.find((m) => m.slug === t.authorSlug);
    out.push({
      path: `/tools/${t.slug}`,
      kind: "tool",
      title: t.title,
      h1: t.h1,
      lastUpdated: t.lastUpdated,
      summary: stripRefs(t.answer),
      author: author?.name,
      citeAs: citeAsPage(t.h1, `/tools/${t.slug}`, t.lastUpdated, author?.name),
      markdown: () => answerMarkdown(t),
    });
  }
  for (const g of glossary) {
    const author = g.authorSlug ? team.find((m) => m.slug === g.authorSlug) : undefined;
    out.push({
      path: `/glossary/${g.slug}`,
      kind: "glossary",
      title: g.term,
      h1: g.term,
      lastUpdated: g.lastUpdated,
      summary: stripRefs(g.shortDef),
      author: author?.name,
      citeAs: citeAsPage(`${g.term}: definition`, `/glossary/${g.slug}`, g.lastUpdated, author?.name),
      markdown: () => glossaryMarkdown(g),
    });
  }
  out.push(ratesTwin(), methodologyTwin(), statisticsTwin(), sbaHotelLendingTwin(), ...sbaStateTwins(), aboutTwin());

  cache = out;
  return out;
}

export function getTwin(path: string): Twin | undefined {
  const clean = path.replace(/\/+$/, "") || "/";
  return twins().find((t) => t.path === clean);
}
