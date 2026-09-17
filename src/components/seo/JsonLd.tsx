import * as React from "react";
import { baseGraph } from "@/lib/entity";

export interface JsonLdProps {
  /**
   * Page-specific nodes. The site-wide entity nodes (Organization, parent,
   * WebSite, Austin LocalBusiness, the three Person nodes, the Service nodes)
   * are merged in automatically, so a page only declares what is its own.
   *
   * Pass `base={false}` only for a route that must not claim the brand.
   */
  graph?: readonly unknown[];
  base?: boolean;
}

type Node = Record<string, unknown>;

/**
 * Emits exactly ONE <script type="application/ld+json"> per page, containing
 * one @context and one @graph. Nodes are de-duplicated by @id: a page node
 * that shares an @id with a site-wide node is shallow-merged over it, so a
 * page may add properties without dropping the entity facts.
 *
 * Every JSON-LD block on this site goes through here. Do not hand-write a
 * script tag in a page component, and do not re-type entity facts: they live
 * in src/lib/entity.ts.
 */
export function JsonLd({ graph = [], base = true }: JsonLdProps) {
  const nodes: Node[] = [];
  const byId = new Map<string, number>();

  const push = (raw: unknown) => {
    if (!raw || typeof raw !== "object") return;
    const node = raw as Node;
    const id = typeof node["@id"] === "string" ? (node["@id"] as string) : null;
    if (id && byId.has(id)) {
      const at = byId.get(id) as number;
      nodes[at] = { ...nodes[at], ...node };
      return;
    }
    if (id) byId.set(id, nodes.length);
    nodes.push(node);
  };

  if (base) baseGraph().forEach(push);
  graph.forEach(push);

  const payload = { "@context": "https://schema.org", "@graph": nodes };

  return (
    <script
      type="application/ld+json"
      // Server-rendered, built entirely from typed data in this repo. Escaping
      // "<" keeps a stray sequence in copy from closing the script tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default JsonLd;
