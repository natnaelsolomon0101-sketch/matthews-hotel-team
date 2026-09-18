/** Markdown building blocks shared by ./markdown.ts and ./static-pages.ts. */
import { BRAND, SITE_URL } from "../entity";

export function abs(path: string): string {
  return path.startsWith("/") ? `${SITE_URL}${path}` : path;
}

export function mdUrl(path: string): string {
  return `${SITE_URL}${path}.md`;
}

export function longDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/**
 * The content modules use four inline conventions (see
 * src/components/answers/Prose.tsx). Two of them need translating so the
 * twin stands alone: a backticked site path becomes a link, and a relative
 * link becomes absolute. Bold and [n] references are already Markdown.
 */
export function inline(text: string): string {
  return text
    .replace(/\[([^\]\n]+)\]\((\/[^)\s]*)\)/g, (_m, label: string, href: string) => `[${label}](${abs(href)})`)
    .replace(/`(\/[^`\n]+)`/g, (_m, p: string) => `[${p}](${abs(p)})`);
}

export function paragraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim().replace(/\s*\n\s*/g, " "))
    .filter(Boolean)
    .map(inline);
}

export function cell(text: string): string {
  return inline(text).replace(/\|/g, "\\|").replace(/\s*\n\s*/g, " ");
}

export function table(columns: string[], rows: string[][]): string[] {
  return [
    `| ${columns.map(cell).join(" | ")} |`,
    `| ${columns.map(() => "---").join(" | ")} |`,
    ...rows.map((r) => `| ${r.map(cell).join(" | ")} |`),
  ];
}

export function citeAsPage(title: string, path: string, lastUpdated: string, authorName?: string): string {
  const who = authorName ? `${authorName}, ${BRAND}` : BRAND;
  return `${who}. "${title}." ${SITE_URL}${path}. Last updated ${lastUpdated}.`;
}

/** The bibliographic block every twin opens with. */
export function header(opts: {
  h1: string;
  path: string;
  lastUpdated: string;
  author?: { name: string; slug: string; title: string };
  reviewer?: { name: string; slug: string; title: string };
  publisherOnly?: boolean;
}): string[] {
  const lines = [`# ${opts.h1}`, ""];
  lines.push(`- URL: ${SITE_URL}${opts.path}`);
  lines.push(`- Last updated: ${opts.lastUpdated}`);
  if (opts.author) {
    lines.push(
      `- Author: ${opts.author.name}, ${opts.author.title}, ${BRAND} (${SITE_URL}/team/${opts.author.slug})`,
    );
  } else {
    lines.push(`- Publisher: ${BRAND}`);
  }
  if (opts.reviewer) {
    lines.push(`- Reviewed by: ${opts.reviewer.name}, ${opts.reviewer.title} (${SITE_URL}/team/${opts.reviewer.slug})`);
  }
  lines.push(`- Format: Markdown copy of the HTML page at the URL above. Same content, same data source.`);
  lines.push("", "---", "");
  return lines;
}

export function footer(citeAs: string): string[] {
  return ["", "---", "", `Cite as: ${citeAs}`, ""];
}

