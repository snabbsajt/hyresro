import type { Product } from "@/data/types";
import { products as fallbackProducts } from "@/data/products";

/** Sheet avstängd: publicerad CSV är fortfarande gamla IKEA-kategorisök. */
export async function getCatalog(): Promise<Product[]> {
  return fallbackProducts;
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return fallbackProducts.find((p) => p.slug === slug);
}

export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  return fallbackProducts.filter((p) => p.category === category);
}
