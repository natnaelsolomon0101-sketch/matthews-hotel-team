import * as React from "react";
import Link from "next/link";

/**
 * The tiny inline formatter the answer modules are authored against.
 *
 * The Wave 1 drafts were written in Markdown, so their prose carries four
 * inline conventions and nothing else. This renders exactly those four and
 * escapes everything else, which keeps the content modules plain data:
 *
 *   `/some/path`       -> an internal <Link>. This is how rules R5/R7/R12 in
 *                         geo/05-architecture.md actually become <a> elements
 *                         that scripts/internal-links-audit.ts can see.
 *   [text](/path)      -> an internal <Link>; absolute URLs get rel="noopener
 *                         external".
 *   **bold**           -> <strong>
 *   [1]                -> a superscript reference to the Sources list.
 *
 * No dangerouslySetInnerHTML anywhere: everything below is React elements.
 */

const TOKEN =
  /(\[[^\]\n]+\]\([^)\s]+\))|(`[^`\n]+`)|(\*\*[^*\n]+\*\*)|(\[\d+\](?:\[\d+\])*)/g;

const LINK_CLASS =
  "text-[#1a3a6b] hover:underline underline-offset-[3px] decoration-[#1a3a6b]/40";

function refLinks(token: string, keyBase: string): React.ReactNode[] {
  // "[1][2]" -> two separate superscript anchors.
  const nums = token.match(/\d+/g) ?? [];
  return nums.map((n, i) => (
    <sup key={`${keyBase}-ref-${i}`} className="ml-[1px]">
      <a
        href={`#source-${n}`}
        className={LINK_CLASS}
        aria-label={`Source ${n}`}
      >
        [{n}]
      </a>
    </sup>
  ));
}

export function Inline({ text }: { text: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(TOKEN);
  let i = 0;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) out.push(text.slice(last, match.index));
    const [full, mdLink, code, bold, refs] = match;
    const key = `t${i++}`;

    if (mdLink) {
      const m = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(mdLink);
      if (m) {
        const [, label, href] = m;
        out.push(
          href.startsWith("/") ? (
            <Link key={key} href={href} className={LINK_CLASS}>
              {label}
            </Link>
          ) : (
            <a
              key={key}
              href={href}
              rel="noopener external"
              className={LINK_CLASS}
            >
              {label}
            </a>
          ),
        );
      } else {
        out.push(full);
      }
    } else if (code) {
      const inner = code.slice(1, -1);
      out.push(
        inner.startsWith("/") ? (
          <Link key={key} href={inner} className={LINK_CLASS}>
            {inner}
          </Link>
        ) : (
          <code
            key={key}
            className="rounded bg-[#f5f5f7] px-1 py-0.5 text-[0.92em]"
          >
            {inner}
          </code>
        ),
      );
    } else if (bold) {
      out.push(<strong key={key}>{bold.slice(2, -2)}</strong>);
    } else if (refs) {
      out.push(...refLinks(refs, key));
    }
    last = match.index + full.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/** A block of prose. Paragraphs are separated by a blank line. */
export function Prose({
  text,
  className = "",
  paragraphClass = "text-[17px] leading-[1.47] tracking-[-0.022em] text-[#1d1d1f] mt-5 first:mt-0",
}: {
  text: string;
  className?: string;
  paragraphClass?: string;
}) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  return (
    <div className={className}>
      {paragraphs.map((p, i) => (
        <p key={i} className={paragraphClass}>
          <Inline text={p} />
        </p>
      ))}
    </div>
  );
}

export default Prose;
