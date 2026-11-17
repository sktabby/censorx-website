// Prerender: saves what each public page already renders into plain HTML so
// search engines and link previews see the content without running JavaScript.
//
//   vite build  ->  node scripts/prerender.mjs
//
// It starts a local server on dist/, opens each route in headless Chrome or
// Edge (playwright-core, no browser download), waits for the page to settle,
// and writes the result next to the build. React still boots normally in the
// browser: main.jsx uses createRoot (not hydrateRoot), so it replaces the saved
// markup with a fresh render and there is nothing to mismatch.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const PUBLIC = path.join(ROOT, "public");

// Prerendered pages. The 404 page and the three static legal pages are NOT here.
const ROUTES = [
  "/",
  "/features",
  "/roles",
  "/download",
  "/user-guide",
  "/roadmap",
  "/use-cases",
  "/why-it-matters",
  "/faq",
  "/contact",
  "/career",
  "/team",
  "/about",
  "/schools",
  "/legal/disclaimer",
];

// These folders are served as they are and must never be touched.
const PROTECTED = ["privacy", "terms", "delete-account"];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".pdf": "application/pdf",
  ".txt": "text/plain",
  ".xml": "application/xml",
};

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out.sort();
}

function hashTree(base) {
  const map = {};
  for (const name of PROTECTED) {
    for (const f of walk(path.join(base, name))) {
      map[path.relative(base, f).replace(/\\/g, "/")] = crypto
        .createHash("sha256")
        .update(fs.readFileSync(f))
        .digest("hex");
    }
  }
  return map;
}

function sameTree(a, b) {
  const ka = Object.keys(a);
  return ka.length === Object.keys(b).length && ka.every((k) => a[k] === b[k]);
}

function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter(Boolean);
  return candidates.find((p) => fs.existsSync(p));
}

function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    let file = path.resolve(path.join(DIST, urlPath));
    const inside = file === DIST || file.startsWith(DIST + path.sep);
    const isFile = inside && fs.existsSync(file) && fs.statSync(file).isFile();
    if (!isFile) {
      // Single-page-app fallback, only so routes load while prerendering.
      file = path.join(DIST, "404.html");
    }
    res.setHeader("content-type", MIME[path.extname(file)] || "application/octet-stream");
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

function outFile(route) {
  if (route === "/") return path.join(DIST, "index.html");
  return path.join(DIST, route.slice(1) + ".html");
}

async function settle(page) {
  // Scroll the whole page so scroll-triggered reveals run, then return to top.
  await page.evaluate(async () => {
    const step = Math.max(300, Math.floor(window.innerHeight * 0.6));
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    let y = 0;
    while (y < document.documentElement.scrollHeight) {
      window.scrollTo(0, y);
      y += step;
      await sleep(140);
    }
    window.scrollTo(0, document.documentElement.scrollHeight);
    await sleep(300);
    // Let any finite CSS animation or transition finish.
    const finite = document
      .getAnimations()
      .filter((a) => a.effect && a.effect.getComputedTiming().iterations !== Infinity);
    await Promise.all(finite.map((a) => a.finished.catch(() => {})));
    await sleep(500);
    window.scrollTo(0, 0);
    await sleep(300);
  });
}

async function main() {
  if (!fs.existsSync(path.join(DIST, "index.html"))) {
    throw new Error("dist/index.html not found. Run `vite build` first.");
  }
  const shell = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
  if (!/<div id="root"><\/div>/.test(shell)) {
    throw new Error("dist/index.html is already prerendered. Run `vite build` again.");
  }

  const exe = findBrowser();
  if (!exe) {
    throw new Error(
      "No Chrome or Edge found. Install one, or set CHROME_PATH to its executable."
    );
  }

  // Protected folders: record hashes before we do anything.
  const publicHashes = hashTree(PUBLIC);
  const before = hashTree(DIST);
  if (!sameTree(publicHashes, before)) {
    throw new Error("dist legal folders differ from public/ before prerendering.");
  }

  // Keep the empty app shell as the 404 body so unknown URLs never show Home.
  fs.writeFileSync(path.join(DIST, "404.html"), shell);

  const server = await startServer();
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: exe, headless: true });
  const report = [];
  let failed = false;

  try {
    for (const route of ROUTES) {
      const dest = outFile(route);
      const rel = path.relative(DIST, dest).replace(/\\/g, "/");
      if (PROTECTED.some((p) => rel === p || rel.startsWith(p + "/"))) {
        throw new Error(`Refusing to write protected path: ${rel}`);
      }

      const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
      const errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      await page.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: "networkidle" });
      await page.waitForSelector("main h1", { timeout: 15000 });
      await settle(page);

      // Anything still faded out would be saved half-visible: report it.
      const faded = await page.evaluate(() =>
        [...document.querySelectorAll("main *")]
          .filter((el) => {
            if (!el.childNodes.length) return false;
            const hasText = [...el.childNodes].some(
              (n) => n.nodeType === 3 && n.textContent.trim()
            );
            if (!hasText) return false;
            const r = el.getBoundingClientRect();
            if (!r.width || !r.height) return false;
            return parseFloat(getComputedStyle(el).opacity) < 0.99;
          })
          .slice(0, 5)
          .map((el) => el.tagName + "." + el.className + ": " + el.textContent.trim().slice(0, 40))
      );

      const html = await page.content();
      await page.close();

      const h1s = (html.match(/<h1[\s>]/g) || []).length;
      const hasTitle = /<title>[^<]+<\/title>/.test(html);
      const hasDesc = /<meta[^>]+name="description"[^>]+content="[^"]+"/.test(html);
      const hasCanon = /<link[^>]+rel="canonical"[^>]+href="[^"]+"/.test(html);
      const ok = h1s === 1 && hasTitle && hasDesc && hasCanon;
      if (!ok || errors.length) failed = failed || !ok;

      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, html, "utf8");
      report.push({ route, rel, h1s, hasTitle, hasDesc, hasCanon, faded, errors });
      console.log(
        `${ok ? "ok  " : "FAIL"} ${route.padEnd(18)} -> ${rel.padEnd(24)} h1:${h1s}` +
          (faded.length ? `  faded:${faded.length}` : "") +
          (errors.length ? `  errors:${errors.length}` : "")
      );
    }
  } finally {
    await browser.close();
    server.close();
  }

  // Protected folders must be byte-for-byte the same as before and as public/.
  const after = hashTree(DIST);
  if (!sameTree(before, after) || !sameTree(publicHashes, after)) {
    throw new Error("A protected legal folder changed. Aborting.");
  }
  console.log(
    `\nProtected folders unchanged (${Object.keys(after).length} files): ${PROTECTED.join(", ")}`
  );

  for (const r of report) {
    if (r.faded.length) console.log(`note ${r.route}: partly faded -> ${r.faded.join(" | ")}`);
    if (r.errors.length) console.log(`note ${r.route}: page errors -> ${r.errors.join(" | ")}`);
  }
  if (failed) throw new Error("Some pages failed the checks above.");
  console.log(`\nPrerendered ${report.length} pages. 404.html kept as the empty app shell.`);
}

main().catch((e) => {
  console.error("\nPrerender failed:", e.message);
  process.exit(1);
});
