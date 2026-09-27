import type { Product } from "@/data/types";
import { products as fallbackProducts } from "@/data/products";

/** True when at least one merchant URL is a tracked affiliate hop we earn on. */
export function hasTrackedAffiliate(product: Product): boolean {
  return product.merchants.some((m) => {
    const u = m.url.toLowerCase();
    return (
      u.includes("addrevenue.io/t") ||
      u.includes("tc.tradetracker") ||
      u.includes("partner-ads.com") ||
      u.includes("tag=") && u.includes("amazon.")
    );
  });
}

function withTrackedFirst(list: Product[]): Product[] {
  return [...list].sort((a, b) => {
    const ta = hasTrackedAffiliate(a) ? 0 : 1;
    const tb = hasTrackedAffiliate(b) ? 0 : 1;
    if (ta !== tb) return ta - tb;
    return 0; // keep relative order otherwise
  });
}

/** Sheet avstängd: publicerad CSV är fortfarande gamla IKEA-kategorisök. */
export async function getCatalog(): Promise<Product[]> {
  return withTrackedFirst(fallbackProducts);
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return fallbackProducts.find((p) => p.slug === slug);
}

export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  return withTrackedFirst(fallbackProducts.filter((p) => p.category === category));
}
