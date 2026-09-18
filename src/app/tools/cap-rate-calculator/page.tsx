import * as React from "react";
import type { Metadata } from "next";
import AnswerPageView, { answerMetadata } from "@/components/answers/AnswerPageView";
import { page as tool } from "@/lib/data/tools/cap-rate-calculator";
import { page as paired } from "@/lib/data/answers/hotel-valuation/hotel-cap-rates";
import ToolIsland from "../ToolIsland";
import ToolExtras from "../ToolExtras";

export const metadata: Metadata = answerMetadata(tool, "/tools/cap-rate-calculator");

/**
 * Template D (geo/05-templates.md). Everything except <ToolIsland> is
 * server-rendered: the answer, the formula, the table, the worked example,
 * the FAQ and the sources are in the HTML without JavaScript.
 */
export default function Page() {
  return (
    <AnswerPageView
      page={tool}
      island={
        <>
          <ToolIsland kind="cap-rate-calculator" tool={tool.tool} />
          <ToolExtras
            page={tool}
            paired={{ href: "/hotel-valuation/hotel-cap-rates", label: paired.h1 }}
          />
        </>
      }
    />
  );
}
