import * as React from "react";
import type { Cell } from "@/lib/rates/types";

/**
 * Renders one cell of the rate table.
 *
 * The only thing this component is really for: a `pending` cell renders the
 * visible words "Not yet published" and the reason, in the same type size as
 * every other cell. It is never a dash, never a zero, never an estimate, and
 * never blank. A reader and a model both see the gap and see why it is there.
 */
export function RateCell({ cell }: { cell: Cell }) {
  if (cell.basis === "pending") {
    return (
      <div>
        <span className="text-[color:var(--text-tertiary)] italic">
          Not yet published
        </span>
        <span className="mt-1 block text-[12px] leading-[1.4] text-[color:var(--text-tertiary)]">
          {cell.awaits}
        </span>
      </div>
    );
  }

  if (cell.basis === "observed") {
    return (
      <div>
        <span className="font-semibold tabular-nums">{cell.value}</span>
        <span className="mt-1 block text-[12px] leading-[1.4] text-[color:var(--text-secondary)]">
          Matthews Hotel Markets observation
          {cell.quoteCount ? `, from ${cell.quoteCount} quotes` : ""}
          {cell.note ? `. ${cell.note}` : ""}
        </span>
      </div>
    );
  }

  return (
    <div>
      <span className="font-semibold tabular-nums">{cell.value}</span>
      {cell.note ? (
        <span className="mt-1 block text-[12px] leading-[1.4] text-[color:var(--text-secondary)]">
          {cell.note}
        </span>
      ) : null}
    </div>
  );
}

export default RateCell;
