#!/usr/bin/env node
/**
 * Catalog integrity checks against src/data/products.ts (text/regex).
 * Exit 1 on hard failures (tracked homepage destinations, missing price on tracked).
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ADDREVENUE } from "./networks.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const productsPath = join(__dirname, "..", "src", "data", "products.ts");
const text = readFileSync(productsPath, "utf8");

const TRACKED_HOSTS = new Set(["addrevenue.io"]);

/** @returns {{ slug: string, priceFromSek: number|null, merchants: {name:string,url:string}[] }[]} */
function parseProducts(src) {
  const products = [];
  // Split on product object starts that include slug
  const blocks = src.split(/\n\s*\{\s*\n\s*slug:/);
  for (let i = 1; i < blocks.length; i++) {
    const block = "slug:" + blocks[i];
    const slugM = block.match(/slug:\s*"([^"]+)"/);
    if (!slugM) continue;
    const slug = slugM[1];
    const priceM = block.match(/priceFromSek:\s*(\d+)/);
    const priceFromSek = priceM ? Number(priceM[1]) : null;

    const merchants = [];
    const merchSection = block.match(/merchants:\s*\[([\s\S]*?)\]/);
    if (merchSection) {
      const re = /\{\s*name:\s*"([^"]*)"\s*,\s*url:\s*"([^"]*)"\s*\}/g;
      let m;
      while ((m = re.exec(merchSection[1]))) {
        merchants.push({ name: m[1], url: m[2] });
      }
    }
    products.push({ slug, priceFromSek, merchants });
  }
  return products;
}

function isTrackedUrl(url) {
  try {
    const u = new URL(url);
    return TRACKED_HOSTS.has(u.hostname);
  } catch {
    return false;
  }
}

function destinationFromAddrevenue(url) {
  const u = new URL(url);
  const dest = u.searchParams.get("u");
  if (!dest) return null;
  try {
    return new URL(decodeURIComponent(dest));
  } catch {
    try {
      return new URL(dest);
    } catch {
      return null;
    }
  }
}

/** Pathname is bare homepage if / or empty (ignore trailing slash). */
function isHomepagePath(pathname) {
  const p = (pathname || "/").replace(/\/+$/, "") || "/";
  return p === "/";
}

const products = parseProducts(text);
const errors = [];
const warnings = [];

if (products.length === 0) {
  errors.push("No products parsed from products.ts — regex may be broken");
}

for (const p of products) {
  for (const m of p.merchants) {
    let url;
    try {
      url = new URL(m.url);
    } catch {
      errors.push(`${p.slug}: invalid merchant url for ${m.name}: ${m.url}`);
      continue;
    }

    const tracked = isTrackedUrl(m.url);

    if (tracked && url.hostname === "addrevenue.io") {
      const dest = destinationFromAddrevenue(m.url);
      if (!dest) {
        errors.push(
          `${p.slug}: addrevenue link missing/undecodable u= (${m.name})`,
        );
      } else if (isHomepagePath(dest.pathname)) {
        errors.push(
          `${p.slug}: tracked homepage destination — ${m.name} u= points to ${dest.origin}${dest.pathname} (need product deep link)`,
        );
      }

      // Soft: merchant id should be known if name matches registry
      const knownId = ADDREVENUE.merchants[m.name];
      const aParam = url.searchParams.get("a");
      if (knownId && aParam && aParam !== knownId) {
        warnings.push(
          `${p.slug}: Addrevenue a=${aParam} for "${m.name}" differs from registry ${knownId}`,
        );
      }
    }

    if (tracked && (p.priceFromSek == null || Number.isNaN(p.priceFromSek))) {
      errors.push(
        `${p.slug}: has tracked affiliate URL but priceFromSek is missing`,
      );
    }
  }
}

for (const w of warnings) {
  console.warn(`WARN: ${w}`);
}
for (const e of errors) {
  console.error(`FAIL: ${e}`);
}

if (errors.length) {
  console.error(
    `\ncatalog-check: ${errors.length} error(s), ${warnings.length} warning(s)`,
  );
  process.exit(1);
}

console.log(
  `catalog-check: OK (${products.length} products, ${warnings.length} warning(s))`,
);
process.exit(0);
