import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { GuideCard } from "@/components/GuideCard";
import { SearchForm } from "@/components/SearchForm";
import { Crumbs } from "@/components/Crumbs";
import { searchSite } from "@/lib/search";

export const metadata: Metadata = {
  title: "Sök",
  description: "Sök bland produkter och guider för hyresrätt utan borr.",
  alternates: { canonical: "/sok" },
  openGraph: {
    url: "/sok",
  },
  robots: { index: false, follow: true },
};

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SokPage({ searchParams }: Props) {
  const { q: raw = "" } = await searchParams;
  const q = (raw ?? "").trim();
  const { products, guides } = searchSite(q);
  const total = products.length + guides.length;

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <Crumbs items={[{ label: "Sök" }]} />
        <h1 className="text-3xl font-semibold tracking-tight">Sök</h1>
        <p className="max-w-xl text-stone-400">
          Hitta produkter och guider efter namn, kategori eller problem — till exempel
          &ldquo;rullgardin&rdquo;, &ldquo;gips&rdquo; eller &ldquo;balkong&rdquo;.
        </p>
        <SearchForm initialQuery={q} variant="page" autoFocus={!q} />
      </header>

      {!q ? (
        <p className="text-sm text-stone-500">Skriv något ovan för att söka.</p>
      ) : total === 0 ? (
        <p className="text-stone-400">
          Inga träffar för &ldquo;{q}&rdquo;. Prova ett kortare ord eller{" "}
          <Link href="/produkter" className="underline underline-offset-2 hover:text-white">
            bläddra bland produkter
          </Link>
          .
        </p>
      ) : (
        <p className="text-sm text-stone-500">
          {total} träff{total === 1 ? "" : "ar"} för &ldquo;{q}&rdquo;
        </p>
      )}

      {guides.length > 0 ? (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Guider</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <GuideCard key={g.slug} href={g.href} title={g.title} blurb={g.blurb} />
            ))}
          </div>
        </section>
      ) : null}

      {products.length > 0 ? (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Produkter</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
