import { guides, type GuideMeta } from "@/data/guides";
import { products } from "@/data/products";
import type { Product } from "@/data/types";
import { getCategoryLabel } from "@/lib/categories";
import { getFitsFor } from "@/lib/fitsFor";

export type SearchHit =
  | { kind: "product"; item: Product }
  | { kind: "guide"; item: GuideMeta };

function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(q: string): string[] {
  return norm(q)
    .split(" ")
    .filter((t) => t.length >= 2);
}

function haystackProduct(p: Product): string {
  return norm(
    [
      p.name,
      p.slug,
      p.category,
      getCategoryLabel(p.category),
      getFitsFor(p),
      p.surfaces.join(" "),
      p.notes,
      p.mountType,
    ].join(" "),
  );
}

function haystackGuide(g: GuideMeta): string {
  return norm([g.title, g.slug, g.blurb, g.group].join(" "));
}

function score(hay: string, toks: string[]): number {
  if (toks.length === 0) return 0;
  let s = 0;
  for (const t of toks) {
    if (!hay.includes(t)) return 0;
    s += hay.startsWith(t) ? 3 : hay.includes(` ${t}`) ? 2 : 1;
  }
  return s;
}

/** Filter products + guides by name/slug/category/problem. No deps. */
export function searchSite(query: string): {
  products: Product[];
  guides: GuideMeta[];
} {
  const toks = tokens(query);
  if (toks.length === 0) return { products: [], guides: [] };

  const productHits = products
    .map((p) => ({ p, s: score(haystackProduct(p), toks) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.p.name.localeCompare(b.p.name, "sv"))
    .map((x) => x.p);

  const guideHits = guides
    .map((g) => ({ g, s: score(haystackGuide(g), toks) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.g.title.localeCompare(b.g.title, "sv"))
    .map((x) => x.g);

  return { products: productHits, guides: guideHits };
}
