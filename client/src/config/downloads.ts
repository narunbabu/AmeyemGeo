// Central download, purchase, and lead-capture config for SeisMind.
// Edit URLs in ONE place; the product page imports from here.

// Public Free installer (GitHub Releases). Keep the tag + filename in sync
// with the release created by `gh release create seismind-v3.1.0`.
export const downloads = {
  free: "https://github.com/narunbabu/geoagent/releases/download/seismind-v3.1.0/SeisMind-Free-Setup-3.1.0.exe",
} as const;

// Paid tiers are delivered post-purchase (licensed installer), never linked
// publicly. Each CTA opens a pre-addressed sales email; the click is also
// recorded server-side via captureLead so no lead depends on the mail client.
export const purchase = {
  go: "mailto:sales@ameyem.com?subject=SeisMind%20Go%20(%241%2C000%2Fyr)",
  plus: "mailto:sales@ameyem.com?subject=SeisMind%20Plus%20(%245%2C000%2Fyr)",
  pro: "mailto:sales@ameyem.com?subject=SeisMind%20Pro%20(%2410%2C000%2Fyr)",
  enterprise: "mailto:sales@ameyem.com?subject=SeisMind%20Enterprise",
} as const;

export const contact = {
  demo: "mailto:sales@ameyem.com?subject=SeisMind%20Demo%20Request",
  team: "mailto:sales@ameyem.com?subject=SeisMind%20Team%20Pricing",
  academic: "mailto:academic@ameyem.com?subject=SeisMind%20Academic%20License",
} as const;

// Lead-capture endpoint shared by the download email-gate (DownloadGate) and
// the CTA pings (lib/lead.ts). Served by our own Express backend
// (server/leads.ts): persists every lead to data/leads.jsonl and notifies the
// team via LEAD_WEBHOOK_URL (Slack/Discord/Formspree) or SMTP_* when set.
// Same-origin on both Replit and the VPS - no PHP required.
export const leadEndpoint = "/api/lead" as string;
