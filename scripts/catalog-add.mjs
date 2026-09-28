#!/usr/bin/env node
/**
 * Print a wrapped affiliate URL and a products.ts stub.
 *
 * Usage:
 *   node scripts/catalog-add.mjs --network addrevenue --merchant MERCHANT_NAME \
 *     --url "https://..." --price 239 --name "..." --slug "..." --category fasten
 */
import { NETWORKS, wrapAddrevenue, wrapAmazon } from "./networks.mjs";

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
  node scripts/catalog-add.mjs --network addrevenue --merchant MERCHANT_NAME \\
    --url "https://merchant.example/product" --price 239 \\
    --name "Product name" --slug "product-slug" --category fasten

Optional: --notes "..." --mount no-drill

Networks: addrevenue, amazon
Known Addrevenue merchants: ${Object.keys(NETWORKS.addrevenue.merchants).join(", ")}
Amazon: uses tag ${NETWORKS.amazon.tag} (no --merchant needed; pass any label)
`);
}

const args = parseArgs(process.argv.slice(2));
const required = ["network", "url", "price", "name", "slug", "category"];
if (args.network === "addrevenue") required.push("merchant");
const missing = required.filter((k) => !args[k]);
if (missing.length) {
  usage();
  console.error(`Missing: ${missing.map((m) => "--" + m).join(", ")}`);
  process.exit(1);
}
if (args.network === "amazon" && !args.merchant) {
  args.merchant = "Amazon.se";
}

let wrapped;
try {
  if (args.network === "addrevenue") {
    wrapped = wrapAddrevenue(args.merchant, args.url);
  } else if (args.network === "amazon") {
    wrapped = wrapAmazon(args.url);
  } else {
    console.error(`Unsupported network "${args.network}". Use addrevenue or amazon.`);
    process.exit(1);
  }
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
