// client/src/lib/lead.ts - fire-and-forget sales-lead capture.
//
// Records download / purchase / demo / pricing intents server-side so the team
// is notified even when the visitor has no configured mail client (the old
// mailto-only CTAs silently dropped those). Never throws and never blocks the
// UI action it accompanies - call it, then proceed with the download / mailto.

export type LeadType =
  | "download"
  | "purchase"
  | "demo"
  | "pricing"
  | "academic"
  | "contact";

export interface LeadPayload {
  type: LeadType;
  edition?: string; // free | go | plus | pro | enterprise
  email?: string;
  name?: string;
  company?: string;
  message?: string;
  source?: string; // defaults to the current path
}

/** POST a lead to /api/lead. Best-effort: resolves even on network failure. */
export async function captureLead(payload: LeadPayload): Promise<void> {
  try {
    const body = JSON.stringify({
      ...payload,
      source: payload.source ?? (typeof window !== "undefined" ? window.location.pathname : undefined),
    });
    // keepalive lets the request survive a navigation (e.g. the download starting).
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });
  } catch {
    /* swallow - a dropped analytics ping must never break the CTA */
  }
}
