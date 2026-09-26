import type { MountType, Product } from "@/data/types";
import { products as fallbackProducts } from "@/data/products";
import { parseCsv, rowsToObjects } from "./csv";

const PRODUCTS_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTlPOkd6VIPOeamyrkiHTCGRZaBBFum0DbpfDGieZIhnrYchgV2E6pLmcELRgQYGLO6csrHrk8zw2DD/pub?gid=1365648499&single=true&output=csv";

const MOUNTS = new Set<MountType>(["no-drill", "drill-ok", "either"]);

function parseMount(raw: string): MountType | null {
  const v = raw.trim() as MountType;
  return MOUNTS.has(v) ? v : null;
}

function parseCatalog(csv: string): Product[] {
  const rows = rowsToObjects(parseCsv(csv));
  const bySlug = new Map<string, Product>();

  for (const row of rows) {
    const active = (row.active ?? "").trim().toLowerCase();
    if (active !== "ja") continue;

    const slug = (row.slug ?? "").trim();
    const name = (row.name ?? "").trim();
    if (!slug || !name) continue;

    const mountType = parseMount(row.mountType ?? "");
    if (!mountType) continue;

    const merchant = (row.merchant ?? "").trim();
    const tracking = (row.tracking_url ?? "").trim();
    const url = (row.url ?? "").trim();
    const href = tracking || url;
    if (!merchant || !href) continue;

    const priceRaw = (row.priceFromSek ?? "").trim();
    const priceFromSek = priceRaw ? Number(priceRaw) : undefined;
    const imageUrl = (row.imageUrl ?? "").trim() || undefined;
    const notes = (row.notes ?? "").trim();
    const noteKey = (row.noteKey ?? "").trim() || undefined;
    const legalNote = (row.legalNote ?? "").trim() || undefined;
    const category = (row.category ?? "").trim() || "ovrigt";

    const existing = bySlug.get(slug);
    if (existing) {
      if (!existing.merchants.some((m) => m.name === merchant)) {
        existing.merchants.push({ name: merchant, url: href });
      }
      continue;
    }

    bySlug.set(slug, {
      slug,
      name,
      category,
      mountType,
      surfaces: [],
      priceFromSek:
        priceFromSek != null && !Number.isNaN(priceFromSek)
          ? priceFromSek
          : undefined,
      merchants: [{ name: merchant, url: href }],
      notes,
      noteKey,
      legalNote,
      imageUrl,
    });
  }

  return Array.from(bySlug.values());
}

export async function getCatalog(): Promise<Product[]> {
  try {
    const res = await fetch(PRODUCTS_CSV, { next: { revalidate: 900 } });
    if (!res.ok) return fallbackProducts;
    const text = await res.text();
    if (!text.trim()) return fallbackProducts;
    const items = parseCatalog(text);
    return items.length > 0 ? items : fallbackProducts;
  } catch {
    return fallbackProducts;
  }
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  const all = await getCatalog();
  return all.find((p) => p.slug === slug);
}

export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  const all = await getCatalog();
  return all.filter((p) => p.category === category);
}
