import * as React from "react";
import Link from "next/link";
import type { ToolPage } from "@/lib/data/answers/types";
import { tools, toolsHub } from "@/lib/data/tools";

const EYEBROW =
  "text-[12px] uppercase tracking-[0.18em] font-medium text-[#86868b]";
const LINK =
  "text-[#1a3a6b] hover:underline underline-offset-[3px] decoration-[#1a3a6b]/40";

/**
 * Server-rendered blocks that sit directly under a calculator island:
 * the formula written out (so the page explains itself with JavaScript
 * disabled), the answer page the tool pairs with, and the other calculators,
 * each anchored on its own H1.
 */
export default function ToolExtras({
  page,
  paired,
}: {
  page: ToolPage;
  /** The answer page this calculator is the arithmetic for. */
  paired?: { href: string; label: string };
}) {
  const others = tools.filter((t) => t.slug !== page.slug);
  return (
    <>
      <section aria-labelledby="formula" className="mt-8">
        <h2 id="formula" className={EYEBROW}>
          The formula, written out
        </h2>
        <pre className="mt-4 -mx-6 overflow-x-auto px-6 sm:mx-0 sm:rounded-[14px] sm:bg-[#f5f5f7] sm:px-5 sm:py-4">
          <code className="block whitespace-pre text-[13px] leading-[1.7] text-[#1d1d1f]">
            {page.tool.formula}
          </code>
        </pre>
      </section>

      {paired && (
        <p className="mt-8 text-[15px] leading-[1.5] tracking-[-0.014em] text-[#424245]">
          The reasoning behind this calculator:{" "}
          <Link href={paired.href} className={LINK}>
            {paired.label}
          </Link>
        </p>
      )}

      <section aria-labelledby="more-calculators" className="mt-8">
        <h2 id="more-calculators" className={EYEBROW}>
          More calculators
        </h2>
        <ul className="mt-4 space-y-2">
          {others.map((t) => (
            <li key={t.slug}>
              <Link href={`/tools/${t.slug}`} className={`${LINK} text-[15px]`}>
                {t.h1}
              </Link>
            </li>
          ))}
          <li>
            <Link href={toolsHub.path} className={`${LINK} text-[15px]`}>
              {toolsHub.h1}
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
