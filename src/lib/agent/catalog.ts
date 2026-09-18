/**
 * The catalogue of twinned pages, plus the keyword search the MCP server
 * uses. Everything here reads the same data modules the HTML pages render.
 */
import { BRAND, SITE_URL } from "../entity";
import { getTwin, mdUrl, twins, type Twin } from "./markdown";

export type CatalogEntry = {
  title: string;
  kind: Twin["kind"];
  url: string;
  markdownUrl: string;
  lastUpdated: string;
  directAnswer: string;
  author: string | null;
  citeAs: string;
};

export function toEntry(t: Twin): CatalogEntry {
  return {
    title: t.h1,
    kind: t.kind,
    url: `${SITE_URL}${t.path}`,
    markdownUrl: mdUrl(t.path),
    lastUpdated: t.lastUpdated,
    directAnswer: t.summary,
    author: t.author ?? null,
    citeAs: t.citeAs,
  };
}

export function agentIndex() {
  return {
    publisher: BRAND,
    site: SITE_URL,
    description:
      "Pages on this site that have a Markdown copy. Each Markdown copy is generated from the same data as its HTML page. The HTML URL is the canonical URL to cite.",
    documentation: `${SITE_URL}/developers`,
    pages: twins().map(toEntry),
  };
}

const STOP = new Set(
  "a an and are as at be but by can do does for from how i if in into is it my of on or our so that the their them then there this to was we what when where which who why will with you your me have has had get need".split(
    " ",
  ),
);

/** Crude suffix stripping so "matures", "maturing" and "maturity" meet. */
function stem(w: string): string {
  if (w.length <= 4 || /\d/.test(w)) return w;
  return w.replace(/(?:ities|ity|ies|ing|ed|es|s)$/, "");
}

function tokens(text: string): string[] {
  return (text.toLowerCase().match(/[a-z0-9]+(?:\([a-z]\))?/g) ?? [])
    .filter((w) => w.length > 1 && !STOP.has(w))
    .map(stem);
}

/**
 * Plain keyword scoring over answer pages, the tool page and the glossary.
 * Title and H1 matches count most, then the direct answer, then the body.
 * No embeddings and no network calls, so it behaves the same on every
 * serverless instance.
 */
export function searchPages(query: string, limit = 5): (CatalogEntry & { score: number })[] {
  const q = [...new Set(tokens(query))];
  if (q.length === 0) return [];
  const docs = twins()
    .filter((t) => t.kind !== "about")
    .map((t) => ({
      t,
      head: new Set(tokens(`${t.title} ${t.h1}`)),
      summary: new Set(tokens(t.summary)),
      body: new Set(tokens(t.markdown())),
    }));
  // Rare words count for more than words every page uses ("hotel", "loan").
  const weight = (w: string) => {
    const df = docs.filter((d) => d.body.has(w)).length;
    return df === 0 ? 0 : Math.log(1 + docs.length / df);
  };
  const scored: { t: Twin; score: number }[] = [];
  for (const d of docs) {
    let score = 0;
    for (const w of q) {
      const k = weight(w);
      if (d.head.has(w)) score += 5 * k;
      if (d.summary.has(w)) score += 2 * k;
      if (d.body.has(w)) score += k;
    }
    if (score > 0) scored.push({ t: d.t, score: Math.round(score * 100) / 100 });
  }
  scored.sort((a, b) => b.score - a.score || a.t.path.localeCompare(b.t.path));
  return scored.slice(0, Math.max(1, Math.min(limit, 20))).map(({ t, score }) => ({ ...toEntry(t), score }));
}

/** Accepts a full URL, a path, a `.md` URL, or a bare slug. */
export function resolveTwin(ref: string): Twin | undefined {
  let p = ref.trim();
  if (!p) return undefined;
  p = p.replace(/^https?:\/\/(www\.)?matthewshotelmarkets\.com/i, "");
  p = p.split(/[?#]/)[0].replace(/\.md$/i, "").replace(/\/+$/, "");
  if (!p.startsWith("/")) {
    const bySlug = twins().filter((t) => t.path.split("/").pop() === p);
    if (bySlug.length === 1) return bySlug[0];
    p = `/${p}`;
  }
  return getTwin(p);
}
