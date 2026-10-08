import { BRAND, EMAIL, HQ_ADDRESS_LINE, PARENT, SITE_URL } from "@/lib/entity";
import { team } from "@/lib/data/team";

export const dynamic = "force-static";

// humans.txt (humanstxt.org): who is behind the site, in plain text.
// Generated from src/lib/data/team.ts and src/lib/entity.ts, the only places
// names, titles and contact details are defined, so it cannot drift from
// /team.
export async function GET() {
  const people = team.map((m) =>
    [
      `  Name: ${m.name}`,
      `  Title: ${m.title}`,
      `  Office: ${m.office}`,
      `  Contact: ${m.email}`,
      `  Profile: ${SITE_URL}/team/${m.slug}`,
    ].join("\n"),
  );

  const body =
    [
      "/* TEAM */",
      "",
      people.join("\n\n"),
      "",
      "/* ORGANIZATION */",
      "",
      `  ${BRAND}, part of ${PARENT}`,
      `  ${HQ_ADDRESS_LINE}`,
      `  Contact: ${EMAIL}`,
      `  Site: ${SITE_URL}`,
      "",
      "/* SITE */",
      "",
      "  Language: English",
      "  Components: Next.js, React, Tailwind CSS",
      "  Hosting: Vercel",
    ].join("\n") + "\n";

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
