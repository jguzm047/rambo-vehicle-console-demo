import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SITE = path.join(ROOT, "site");
const failures = [];

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const item = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(item));
    else if (entry.isFile()) files.push(item);
  }
  return files;
}

const blockedNames = [".env", "tokens.json", "telemetry-latest.json", "garage-latest.json", "health-history.ndjson"];
for (const file of await walk(ROOT)) {
  const relative = path.relative(ROOT, file);
  if (blockedNames.includes(path.basename(file)) || relative.startsWith("private/") || relative.startsWith("data/")) failures.push(`${relative}: private filename`);
}

for (const file of await walk(SITE)) {
  if (!(await stat(file)).isFile()) continue;
  const relative = path.relative(ROOT, file);
  const body = await readFile(file, "utf8");
  const rules = [
    ["private key", /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
    ["OAuth token", /\beyJ[A-Za-z0-9_-]{40,}\.[A-Za-z0-9_-]{20,}/],
    ["coordinate field", /["'](?:lat|lon|latitude|longitude)["']\s*:/i],
    ["VIN-shaped value", /\b[A-HJ-NPR-Z0-9]{17}\b/],
    ["production credential name", /FORD_CLIENT_(?:ID|SECRET)/]
  ];
  for (const [label, pattern] of rules) if (pattern.test(body)) failures.push(`${relative}: ${label}`);
}

const data = await readFile(path.join(SITE, "demo-data.js"), "utf8");
if (!/synthetic:\s*true/.test(data)) failures.push("site/demo-data.js: synthetic marker missing");

if (failures.length) {
  console.error("Public-boundary verification failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log("Public-boundary verification passed: static synthetic demo only.");
