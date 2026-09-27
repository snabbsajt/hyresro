#!/usr/bin/env node
/**
 * Print a wrapped affiliate URL and a products.ts stub.
 *
 * Usage:
 *   node scripts/catalog-add.mjs --network addrevenue --merchant Sortix \
 *     --url "https://..." --price 239 --name "..." --slug "..." --category fasten
 */
import { NETWORKS, wrapAddrevenue } from "./networks.mjs";

function parseArgs(argv) {
  /** @type {Record<string, string>} */
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const val = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : "true";
      out[key] = val;
    }
  }
  return out;
}

function usage() {
  console.error(`Usage:
  node scripts/catalog-add.mjs --network addrevenue --merchant Sortix \\
    --url "https://merchant.example/product" --price 239 \\
    --name "Product name" --slug "product-slug" --category fasten

Optional: --notes "..." --mount no-drill

Known Addrevenue merchants: ${Object.keys(NETWORKS.addrevenue.merchants).join(", ")}
`);
}

const args = parseArgs(process.argv.slice(2));
const required = ["network", "merchant", "url", "price", "name", "slug", "category"];
const missing = required.filter((k) => !args[k]);
if (missing.length) {
  usage();
  console.error(`Missing: ${missing.map((m) => "--" + m).join(", ")}`);
  process.exit(1);
}

if (args.network !== "addrevenue") {
  console.error(`Unsupported network "${args.network}". Only addrevenue is configured.`);
  process.exit(1);
}

let wrapped;
try {
  wrapped = wrapAddrevenue(args.merchant, args.url);
} catch (e) {
  console.error(String(e.message || e));
  process.exit(1);
}

const notes = args.notes || "TODO: notes";
const mount = args.mount || "no-drill";
const price = Number(args.price);
if (Number.isNaN(price)) {
  console.error("--price must be a number");
  process.exit(1);
}

const stub = `  {
    slug: "${args.slug}",
    name: ${JSON.stringify(args.name)},
    category: "${args.category}",
    mountType: "${mount}",
    surfaces: [],
    priceFromSek: ${price},
    merchants: [{ name: ${JSON.stringify(args.merchant)}, url: ${JSON.stringify(wrapped)} }],
    notes: ${JSON.stringify(notes)},
    imageUrl: "/products/${args.slug}.jpg",
  },`;

console.log("Wrapped URL:");
console.log(wrapped);
console.log("");
console.log("products.ts stub:");
console.log(stub);
