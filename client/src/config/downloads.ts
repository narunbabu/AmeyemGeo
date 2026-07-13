// Central download, purchase, and lead-capture config for SeisMind.
// Edit URLs in ONE place; the product page imports from here.

// Public Free installer (GitHub Releases). Keep the tag + filename in sync
// with the release created by `gh release create seismind-v3.1.0`.
export const downloads = {
  free: "https://github.com/narunbabu/geoagent/releases/download/seismind-v3.1.0/SeisMind-Free-Setup-3.1.0.exe",
} as const;

// Pro is delivered post-purchase, never linked publicly.
export const purchase = {
  professional: "mailto:sales@ameyem.com?subject=SeisMind%20Professional",
  enterprise: "mailto:sales@ameyem.com?subject=SeisMind%20Enterprise",
} as const;

export const contact = {
  demo: "mailto:sales@ameyem.com?subject=SeisMind%20Demo%20Request",
  team: "mailto:sales@ameyem.com?subject=SeisMind%20Team%20Pricing",
  academic: "mailto:academic@ameyem.com?subject=SeisMind%20Academic%20License",
} as const;

// Lead-capture endpoint. Wired to the built-in backend route (server/leads.ts),
// which persists every lead to data/leads.jsonl AND notifies the team via
// LEAD_WEBHOOK_URL (Slack/Discord/Formspree) or SMTP_* when configured. Use the
// captureLead() helper in client/src/lib/lead.ts to post to it. This replaces the
// old mailto-only flow that silently dropped leads when a visitor had no mail client.
export const leadEndpoint = "/api/lead" as string;
