#!/usr/bin/env node
/**
 * Fails the build if a server secret ends up in anything the browser can load:
 * client JavaScript (.next/static) or prerendered pages (.next/server/app/*.html,
 * *.rsc, *.body). Runs automatically after `npm run build`.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");

// Load .env.local / .env for local builds (Vercel injects env vars directly).
for (const file of [".env.local", ".env"]) {
  const p = path.join(root, file);
  if (!fs.existsSync(p)) continue;
  for (const line of fs.readFileSync(p, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const SECRET_VARS = ["ANTHROPIC_API_KEY", "GEMINI_API_KEY", "UPSTASH_REDIS_REST_TOKEN", "TURNSTILE_SECRET_KEY"];
const needles = SECRET_VARS.map((name) => [name, process.env[name]]).filter(([, v]) => v && v.length >= 8);
const PATTERNS = [/sk-ant-[A-Za-z0-9_-]{8,}/, /AIza[0-9A-Za-z_-]{35}/];

const targets = [
  { dir: path.join(root, ".next", "static"), exts: null },
  { dir: path.join(root, ".next", "server", "app"), exts: [".html", ".rsc", ".body", ".meta"] },
];

function* walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

if (!fs.existsSync(path.join(root, ".next"))) {
  console.error("check-secrets: no .next folder. Run `npm run build` first.");
  process.exit(1);
}

const findings = [];
let scanned = 0;
for (const { dir, exts } of targets) {
  for (const file of walk(dir)) {
    if (exts && !exts.includes(path.extname(file))) continue;
    const content = fs.readFileSync(file, "utf8");
    scanned++;
    for (const [name, value] of needles) if (content.includes(value)) findings.push(`${name} found in ${path.relative(root, file)}`);
    for (const re of PATTERNS) if (re.test(content)) findings.push(`API-key-like string ${re} in ${path.relative(root, file)}`);
  }
}

if (findings.length) {
  console.error("\n✖ SECRET LEAK: server secrets were found in browser-facing build output:");
  for (const f of findings) console.error("  - " + f);
  console.error("\nNever prefix secrets with NEXT_PUBLIC_ and never import server files into client components.\n");
  process.exit(1);
}
console.log(
  `✓ check-secrets: scanned ${scanned} browser-facing files; no secrets found` +
    (needles.length ? ` (checked ${needles.map(([n]) => n).join(", ")})` : " (no secret values set in this environment; checked key patterns only)"),
);
