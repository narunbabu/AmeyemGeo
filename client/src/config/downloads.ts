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

// Lead-capture endpoint shared by the download email-gate and (later) the
// in-app prompts. TODO(ameyem): point this at your form service (Formspree /
// Tally) or a small VPS endpoint. Until set, the gate lets the download through
// but does not record the lead (see DownloadGate).
export const leadEndpoint = "" as string; // e.g. "https://formspree.io/f/xxxx…"
