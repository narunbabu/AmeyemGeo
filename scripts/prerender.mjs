// scripts/prerender.mjs — build-time prerender of marketing routes + OG images.
//
// The site is a client-rendered SPA, so a raw fetch (LLM URL-readers, crawlers,
// social scrapers) of a route gets only the shell. This step loads each route in
// a headless browser AFTER `vite build`, lets React + react-helmet render, and
// writes the fully-rendered HTML to dist/public/<route>.html so nginx can serve
// real content at the exact URL (see the `$uri.html` try_files rule).
//
// FAIL-SOFT BY DESIGN: this is a separate `pnpm prerender` step, not part of
// `pnpm build`. If the browser is missing or a route errors, it logs and exits 0,
// leaving the Tier-1 SPA shell (which already carries llms.txt + JSON-LD + a
// <noscript> fallback). A prerender hiccup must never block a deploy.

import http from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist", "public");
const PORT = 41999;
const ORIGIN = `http://127.0.0.1:${PORT}`;

// Routes to prerender to <route>.html (served at the exact URL by nginx).
const ROUTES = ["/", "/products/seismind"];

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon",
  ".woff2": "font/woff2", ".txt": "text/plain", ".xml": "text/xml",
};

// Minimal static server with SPA fallback (serves index.html for unknown paths
// so the client router + helmet render the requested route).
function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer(async (req, res) => {
      const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
      let file = path.join(DIST, urlPath);
      try {
        const s = await stat(file);
        if (s.isDirectory()) file = path.join(file, "index.html");
      } catch {
        file = path.join(DIST, "index.html"); // SPA fallback
      }
      try {
        const body = await readFile(file);
        res.setHeader("Content-Type", MIME[path.extname(file)] || "application/octet-stream");
        res.end(body);
      } catch {
        res.statusCode = 404;
        res.end("not found");
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

const OG_TEMPLATE = (title, subtitle) => `<!doctype html><html><head><meta charset="utf-8">
<style>
  html,body{margin:0}
  .card{width:1200px;height:630px;display:flex;flex-direction:column;justify-content:center;
    padding:0 90px;box-sizing:border-box;font-family:Inter,Arial,sans-serif;color:#fff;
    background:linear-gradient(135deg,#0f172a 0%,#155e75 60%,#0e7490 100%)}
  .kicker{font-size:26px;letter-spacing:.18em;text-transform:uppercase;color:#67e8f9;font-weight:600}
  .title{font-size:84px;font-weight:800;line-height:1.05;margin:22px 0 18px}
  .sub{font-size:34px;color:#cbd5e1;max-width:980px;line-height:1.3}
  .brand{position:absolute;bottom:54px;right:90px;font-size:26px;color:#94a3b8}
</style></head>
<body><div class="card">
  <div class="kicker">Ameyem Geo Solutions</div>
  <div class="title">${title}</div>
  <div class="sub">${subtitle}</div>
  <div class="brand">ameyem.com</div>
</div></body></html>`;

async function run() {
  let chromium;
  try {
    ({ chromium } = await import("@playwright/test"));
  } catch (e) {
    console.warn("[prerender] Playwright not available — skipping (SPA shell kept).", e.message);
    return;
  }

  const server = await startServer();
  let browser;
  try {
    browser = await chromium.launch();
  } catch (e) {
    console.warn("[prerender] Could not launch a browser — skipping. Run `npx playwright install chromium`.");
    console.warn("[prerender] " + e.message.split("\n")[0]);
    server.close();
    return;
  }

  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });

  // --- Prerender routes ---
  for (const route of ROUTES) {
    try {
      await page.goto(ORIGIN + route, { waitUntil: "networkidle", timeout: 45000 });
      await page.waitForSelector("h1", { timeout: 15000 }).catch(() => {});
      const html = "<!DOCTYPE html>\n" + (await page.content()).replace(/^<!DOCTYPE html>/i, "").trimStart();
      const outFile =
        route === "/" ? path.join(DIST, "index.html") : path.join(DIST, route.replace(/^\//, "") + ".html");
      await mkdir(path.dirname(outFile), { recursive: true });
      await writeFile(outFile, html, "utf8");
      console.log(`[prerender] ${route} -> ${path.relative(DIST, outFile)} (${(html.length / 1024).toFixed(0)} KB)`);
    } catch (e) {
      console.warn(`[prerender] ${route} failed (kept shell): ${e.message.split("\n")[0]}`);
    }
  }

  // --- OG images ---
  const ogs = [
    ["og-default.png", "AI-native geoscience", "Seismic software, AI/ML services, and consulting for Oil & Gas."],
    ["og-seismind.png", "SeisMind", "AI-native seismic interpretation & ML reservoir characterization."],
  ];
  for (const [file, title, sub] of ogs) {
    try {
      await page.setViewportSize({ width: 1200, height: 630 });
      await page.setContent(OG_TEMPLATE(title, sub), { waitUntil: "networkidle" });
      await page.screenshot({ path: path.join(DIST, file) });
      console.log(`[prerender] og image -> ${file}`);
    } catch (e) {
      console.warn(`[prerender] og ${file} failed: ${e.message.split("\n")[0]}`);
    }
  }

  await browser.close();
  server.close();
  console.log("[prerender] done.");
}

run().catch((e) => {
  console.warn("[prerender] unexpected error (non-fatal): " + e.message);
  process.exit(0); // never fail the deploy
});
