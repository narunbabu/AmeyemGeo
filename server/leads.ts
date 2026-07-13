// server/leads.ts - durable capture + notification for sales leads.
//
// The site previously LOST every lead: mailto-only CTAs (dropped when the
// visitor has no mail client) and an /api/contact that only console.log'd into
// in-memory storage wiped on restart. This module guarantees two things for
// every lead/contact:
//
//   1. PERSISTENCE - appended to data/leads.jsonl (survives restarts), so a
//      lead is never lost even before any delivery channel is configured.
//   2. NOTIFICATION - best-effort delivery to the team via, in priority order,
//      a webhook (LEAD_WEBHOOK_URL: Slack/Discord/Formspree/Zapier - zero deps,
//      uses Node's global fetch) or SMTP (SMTP_* via nodemailer if installed).
//
// Notification never throws; a delivery failure still leaves the lead persisted.

import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.resolve(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.jsonl");

export type LeadRecord = {
  kind: "lead" | "contact";
  type?: string; // download | purchase | demo | pricing | academic | contact
  edition?: string;
  email?: string;
  name?: string;
  company?: string;
  message?: string;
  source?: string;
  receivedAt: string;
  ip?: string;
};

/** Append a lead to data/leads.jsonl (creates the dir on first write). */
export async function persistLead(record: LeadRecord): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.appendFile(LEADS_FILE, JSON.stringify(record) + "\n", "utf8");
  } catch (err) {
    // Persistence must not break the request, but this is serious - log loudly.
    console.error("[leads] FAILED to persist lead:", err, record);
  }
}

function summarize(record: LeadRecord): string {
  const who = record.name || record.email || "anonymous";
  const bits = [
    `${record.kind.toUpperCase()}: ${record.type || "contact"}`,
    record.edition && `edition=${record.edition}`,
    `from=${who}`,
    record.email && record.email !== who && `email=${record.email}`,
    record.company && `company=${record.company}`,
    record.source && `source=${record.source}`,
  ].filter(Boolean);
  let line = bits.join(" | ");
  if (record.message) line += `\nmessage: ${record.message}`;
  return line;
}

async function notifyViaWebhook(url: string, record: LeadRecord): Promise<boolean> {
  try {
    const text = `🔔 New SeisMind ${record.kind} — ${summarize(record)}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // `text`/`content` satisfy Slack/Discord; the full record rides along for
      // Formspree/Zapier/custom endpoints.
      body: JSON.stringify({ text, content: text, ...record }),
    });
    if (!res.ok) {
      console.error(`[leads] webhook responded ${res.status}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[leads] webhook delivery failed:", err);
    return false;
  }
}

async function notifyViaSmtp(record: LeadRecord): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  if (!host) return false;
  try {
    // Dynamic import via a NON-literal specifier so `tsc` doesn't try to resolve
    // the (optional) module at type-check time, and the app runs without it.
    const mod = "nodemailer";
    const nodemailer: any = await import(mod).catch(() => null);
    if (!nodemailer) {
      console.warn("[leads] SMTP_HOST set but 'nodemailer' is not installed; run `pnpm add nodemailer`.");
      return false;
    }
    const transport = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "").toLowerCase() === "true",
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });
    await transport.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER || "no-reply@ameyem.com",
      to: process.env.LEAD_TO || "sales@ameyem.com",
      subject: `SeisMind ${record.kind}: ${record.type || "contact"}${record.edition ? " (" + record.edition + ")" : ""}`,
      text: summarize(record) + `\n\nreceivedAt: ${record.receivedAt}`,
      replyTo: record.email || undefined,
    });
    return true;
  } catch (err) {
    console.error("[leads] SMTP delivery failed:", err);
    return false;
  }
}

/** Best-effort notify the team. Never throws. Returns whether any channel accepted it. */
export async function notifyLead(record: LeadRecord): Promise<boolean> {
  const webhook = process.env.LEAD_WEBHOOK_URL;
  let delivered = false;
  if (webhook) delivered = (await notifyViaWebhook(webhook, record)) || delivered;
  delivered = (await notifyViaSmtp(record)) || delivered;
  if (!delivered) {
    // No channel configured/working — the lead is still persisted to JSONL.
    console.warn(
      "[leads] no delivery channel accepted this lead (set LEAD_WEBHOOK_URL or SMTP_*). " +
        "Lead is saved in data/leads.jsonl:\n" + summarize(record),
    );
  }
  return delivered;
}

/** Persist + notify in one call. Notification is best-effort; persistence is awaited. */
export async function captureLead(record: LeadRecord): Promise<void> {
  await persistLead(record);
  // Fire notification but don't let a slow webhook delay the HTTP response much.
  void notifyLead(record);
}
