import * as React from "react";
import type { Metadata } from "next";
import AnswerPageView, { answerMetadata } from "@/components/answers/AnswerPageView";
import { page as tool } from "@/lib/data/tools/hotel-loan-sizing-calculator";
import { page as requirements } from "@/lib/data/answers/hotel-financing/loan-requirements";
import { page as loanRates } from "@/lib/data/answers/hotel-financing/hotel-loan-rates";
import { page as sba } from "@/lib/data/answers/hotel-financing/sba-7a-vs-504";
import LoanSizingIsland from "./LoanSizingIsland";
import ToolExtras from "../ToolExtras";

export const metadata: Metadata = answerMetadata(tool, "/tools/hotel-loan-sizing-calculator");

/**
 * Template D (geo/05-templates.md). Everything except the island is
 * server-rendered: the answer, the three tests, the rate table, the worked
 * example (including the SBA 504 split), the FAQ and the sources are in the
 * HTML without JavaScript.
 */
export default function Page() {
  return (
    <AnswerPageView
      page={tool}
      island={
        <>
          <LoanSizingIsland tool={tool.tool} />
          <ToolExtras
            page={tool}
            paired={[
              { href: "/hotel-financing/loan-requirements", label: requirements.h1 },
              { href: "/hotel-financing/hotel-loan-rates", label: loanRates.h1 },
              { href: "/hotel-financing/sba-7a-vs-504", label: sba.h1 },
            ]}
          />
        </>
      }
    />
  );
}
