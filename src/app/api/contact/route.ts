import { NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Receives the contact form submission, validates it, and forwards it to
 * HubSpot Forms API as an inbound lead. Always returns JSON so the client
 * can render success / failure inline.
 *
 * ENV (set in Vercel → Project → Settings → Environment Variables):
 *   HUBSPOT_PORTAL_ID  — your HubSpot account / portal ID (the "hubid")
 *   HUBSPOT_FORM_GUID  — the form GUID for the inbound-lead form created in HubSpot
 *
 * If neither env is set, the route returns a "configure HubSpot" payload
 * so the client can fall back to mailto. This makes local dev painless.
 */

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
  /** Optional context — set by the client on submit. */
  pageUri?: string;
  pageName?: string;
};

const HUBSPOT_FORMS_ENDPOINT =
  "https://api.hsforms.com/submissions/v3/integration/submit";

const LEAD_SOURCE_DETAIL = "Website — Matthews Hotel Team";

function bad(status: number, error: string) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(req: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await req.json();
  } catch {
    return bad(400, "Invalid JSON body.");
  }

  const { firstName, lastName, email, phone, topic, message, pageUri, pageName } =
    (body ?? {}) as Partial<ContactPayload>;

  // Required-field guard. Mirrors the form's `required` attributes.
  if (!firstName || !lastName || !email || !topic || !message) {
    return bad(400, "Missing required fields.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return bad(400, "Invalid email address.");
  }

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;

  // Local dev / unconfigured environment: tell the client so it can fall
  // back to mailto. Don't 500 — the form should still feel functional.
  if (!portalId || !formGuid) {
    return NextResponse.json(
      {
        ok: false,
        error: "HubSpot is not configured on this deployment.",
        code: "HUBSPOT_NOT_CONFIGURED",
      },
      { status: 503 },
    );
  }

  const payload = {
    submittedAt: Date.now(),
    fields: [
      { objectTypeId: "0-1", name: "firstname", value: firstName },
      { objectTypeId: "0-1", name: "lastname", value: lastName },
      { objectTypeId: "0-1", name: "email", value: email },
      ...(phone
        ? [{ objectTypeId: "0-1", name: "phone", value: phone }]
        : []),
      // Custom HubSpot property — make sure this exists on Contact (Settings →
      // Properties → Contact → "What can we help with?" or similar enum).
      { objectTypeId: "0-1", name: "topic_of_interest", value: topic },
      { objectTypeId: "0-1", name: "message", value: message },
      // Lead source attribution. Most HubSpot accounts have a custom
      // `lead_source_detail` text property. If yours doesn't, create it
      // (Settings → Properties → Contact → Create property).
      {
        objectTypeId: "0-1",
        name: "lead_source_detail",
        value: LEAD_SOURCE_DETAIL,
      },
    ],
    context: {
      pageUri: pageUri ?? "https://matthews-hotel-team.vercel.app/contact",
      pageName: pageName ?? "Matthews Hotel Team — Contact",
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: "I agree to allow Matthews to store and process my personal data.",
        communications: [
          {
            value: true,
            subscriptionTypeId: 999, // generic; HubSpot ignores if it doesn't exist
            text: "I agree to receive communications from Matthews Hotel Team.",
          },
        ],
      },
    },
  };

  const url = `${HUBSPOT_FORMS_ENDPOINT}/${portalId}/${formGuid}`;

  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("[contact] HubSpot fetch failed", err);
    return bad(502, "Could not reach HubSpot.");
  }

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("[contact] HubSpot rejected the submission", res.status, text);
    return NextResponse.json(
      { ok: false, error: `HubSpot returned ${res.status}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
