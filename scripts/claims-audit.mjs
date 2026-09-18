#!/usr/bin/env node
/**
 * Claims audit: extracts every user-facing sentence that makes a first-person
 * or brand claim (we, our, us, the team, Matthews ...) and writes
 * geo/17-claims-audit.csv with file, line, classification, sentence.
 *
 * Classification: every sentence was read by the claims-audit agent on
 * 2026-09-18; the rules below encode that review so the CSV regenerates.
 * Sentences already fixed are appended from geo/17-claims-fixes.json with
 * their old and new wording. Any row that prints OVERREACH/unfixed is a
 * regression. Run:
 *   node scripts/claims-audit.mjs
 */
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const ROOT = process.cwd();
const SCOPE = [
  "src/lib/data",
  "src/lib/agent",
  "src/lib/seo",
  "src/lib/sba",
  "src/lib/rates",
  "src/lib/entity.ts",
  "src/lib/llms-content.ts",
  "src/lib/track-record.ts",
  "src/app",
  "src/components",
  "public/llms.txt",
];
const CLAIM = /\b(we|We|WE|we're|We're|we've|We've|we'll|We'll|our|Our|ours|the team|The team|our team|Matthews)\b|\bus\b/;

function walk(p, out = []) {
  const abs = path.join(ROOT, p);
  if (!fs.existsSync(abs)) return out;
  const st = fs.statSync(abs);
  if (st.isDirectory()) {
    for (const f of fs.readdirSync(abs)) walk(path.join(p, f), out);
  } else if (/\.(tsx?|txt)$/.test(p) && !/\.test\./.test(p)) out.push(p);
  return out;
}

function flattenJsx(node, sf) {
  let s = "";
  const visit = (n) => {
    if (ts.isJsxText(n)) s += n.getText(sf).replace(/\s+/g, " ");
    else if (ts.isJsxExpression(n)) {
      if (
        n.expression &&
        (ts.isStringLiteral(n.expression) ||
          ts.isNoSubstitutionTemplateLiteral(n.expression))
      )
        s += n.expression.text;
      else if (n.expression) s += " {..} ";
    } else if (ts.isJsxElement(n)) n.children.forEach(visit);
  };
  node.children.forEach(visit);
  return s.replace(/\s+/g, " ").trim();
}

function extract(file) {
  const src = fs.readFileSync(path.join(ROOT, file), "utf8");
  const items = [];
  if (!/\.tsx?$/.test(file)) {
    src.split("\n").forEach((l, i) => items.push({ line: i + 1, text: l }));
    return items;
  }
  const sf = ts.createSourceFile(
    file,
    src,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  const lineOf = (n) =>
    sf.getLineAndCharacterOfPosition(n.getStart(sf)).line + 1;
  const visit = (n) => {
    if (ts.isImportDeclaration(n) || ts.isTypeNode(n)) return;
    if (ts.isJsxElement(n)) {
      const hasText = n.children.some(
        (c) => ts.isJsxText(c) && c.getText(sf).trim(),
      );
      if (hasText) {
        items.push({ line: lineOf(n), text: flattenJsx(n, sf) });
        n.openingElement.attributes.forEachChild(visit);
        return;
      }
    }
    if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) {
      items.push({ line: lineOf(n), text: n.text });
      return;
    }
    if (ts.isTemplateExpression(n)) {
      let t = n.head.text;
      for (const sp of n.templateSpans) t += "{..}" + sp.literal.text;
      items.push({ line: lineOf(n), text: t });
      n.templateSpans.forEach((sp) => visit(sp.expression));
      return;
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
  return items;
}

function sentences(text) {
  const t = text.replace(/\s+/g, " ").trim();
  if (!t.includes(" ")) return [];
  return t
    .split(/(?<=[.!?])\s+(?=[A-Z"'\[(])/)
    .map((s) => s.trim())
    .filter(Boolean);
}

// Sentences with no pronoun that still brag (track record, volume, speed).
const BRAG =
  /hundreds of (closings|closed|completed|transactions|deals)|track records?|(buyer|lender|investor|client|direct) relationships|proprietary|experience up to|within (24|48|72) hours|proven (path|at every)|representative slice/i;

// Topics the team does NOT offer (geo/AGENTS.md service-claims rule).
const UNCONFIRMED =
  /\b(EB-5|USDA|B&I|historic (rehabilitation )?tax credits?|opportunity zones?|property tax appeals?|tax appeals?)\b/i;
const DISCLAIMS = /\b(does not|do not|is not|not an?)\b/i;

// OVERREACH: must be fixed. Anything matching here after a fix run is a regression.
const OVER = [
  /\bwe (closed|have closed|are advising|are seeing|have advised)\b/i,
  /\b(sellers|clients|sponsors|owners) we have advised\b/i,
  /\bour (lenders?|lender (relationships|network|panel|list)|track record|trailing-twelve-month transaction performance)\b/i,
  /\blender relationships\b|\b(relationships? with|network of|database of) (\d|[a-z ]*)(lenders)\b/i,
  /\b(leading|premier|top-ranked|best-in-class|unmatched|unrivaled|number one|#1|award-winning|decades of)\b.*\b(Matthews|we|our)\b/i,
  /hundreds of (closings|closed|completed|transactions|deals)/i,
  /\b(frequently|often|routinely) brought in\b/i,
  /\bmaintains active\b/i,
  /\bproprietary transaction data\b|experience up to/i,
];

// CHECK: plausible, but only the owner can confirm it is true.
const CHECKP = [
  [/\bin our (experience|practice)\b|the order we see lenders/i, "experience claim, no number: confirm the team actually observes this"],
  [/internal (transaction )?(database|data|underwriting|benchmarking)|transaction file|underwriting screen|active mandates?|Matthews-executed|capital markets (dialogue|practice)|Matthews analysis|STR feeds/i, "cites a first-party dataset: confirm it exists and supports the figure, else remove"],
  [/\bwe (expect|are forecasting|measure|have measured|are measuring|assembled|then benchmarked|are hearing|are in market|are watching)\b|\bour base case\b|Investor Outlook/i, "first-party forecast, research or survey claim: confirm"],
  [/\((Luke Thompson|Miles Cortez|Nate Solomon)[^)]*\)\s*$|^"[A-Z]/, "attributed quote: confirm the person said or approved it"],
  [/respond(s)? within|one business day|24 hours/i, "response-time promise: confirm (site shows both 24 hours and one business day)"],
  [/(buyer|investor|client|direct) relationships|curated buyer pool|first look/i, "buyer-relationship claim: confirm"],
  [/names the analyst|answers all nine|on our deals|proven (path|at every)|representative slice|has executed across/i, "process or track-record phrasing: confirm"],
];

function classify(s, file) {
  if (OVER.some((r) => r.test(s))) return ["OVERREACH", "unfixed"];
  if (
    UNCONFIRMED.test(s) &&
    /Matthews Hotel Markets (prices|quotes|arranges|sizes|places|files|values)/.test(s) &&
    !DISCLAIMS.test(s)
  )
    return ["OVERREACH", "claims an unconfirmed service"];
  if (/src\/lib\/data\/team\.ts$/.test(file))
    return ["CHECK", "personal bio: confirm against the broker's own record"];
  for (const [r, why] of CHECKP) if (r.test(s)) return ["CHECK", why];
  // "track record" is a claim only in site chrome; in answer copy it describes a sponsor.
  if (/^src\/(components|app)\//.test(file) && /track record/i.test(s))
    return ["CHECK", "process or track-record phrasing: confirm"];
  return ["OK", ""];
}

const fixesPath = path.join(ROOT, "geo/17-claims-fixes.json");
const fixes = fs.existsSync(fixesPath)
  ? JSON.parse(fs.readFileSync(fixesPath, "utf8"))
  : [];

const files = SCOPE.flatMap((p) => walk(p));
const rows = [];
const seen = new Set();
for (const f of files) {
  for (const it of extract(f)) {
    for (const s of sentences(it.text)) {
      if (!CLAIM.test(s) && !BRAG.test(s)) continue;
      if (/^(@\/|\.\/|https?:)/.test(s)) continue;
      const key = f + "|" + s;
      if (seen.has(key)) continue;
      seen.add(key);
      const [classification, note] = classify(s, f);
      rows.push({ file: f, line: it.line, classification, note, sentence: s, replacement: "" });
    }
  }
}
for (const fx of fixes)
  rows.push({
    file: fx.file,
    line: "",
    classification: "OVERREACH",
    note: "fixed 2026-09-18",
    sentence: fx.old,
    replacement: fx.new,
  });
const esc = (v) => '"' + String(v).replace(/"/g, '""') + '"';
const csv =
  [
    "file,line,classification,note,sentence,replacement",
    ...rows.map((r) =>
      [r.file, r.line, r.classification, r.note, r.sentence, r.replacement]
        .map(esc)
        .join(","),
    ),
  ].join("\n") + "\n";
fs.writeFileSync(path.join(ROOT, "geo/17-claims-audit.csv"), csv);
const counts = {};
rows.forEach(
  (r) => (counts[r.classification] = (counts[r.classification] || 0) + 1),
);
console.log(rows.length, "sentences from", files.length, "files", counts);
const j = process.argv.indexOf("--json");
if (j > -1) fs.writeFileSync(process.argv[j + 1], JSON.stringify(rows, null, 1));
