import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Crumbs } from "@/components/Crumbs";
import { ContractNote } from "@/components/ContractNote";
import type { SolutionMeta } from "@/data/solutions";
import { getProduct } from "@/lib/catalog";

type Props = {
  solution: SolutionMeta;
};

export async function SolutionLanding({ solution }: Props) {
  const products = (
    await Promise.all(solution.productSlugs.map((s) => getProduct(s)))
  ).filter((p): p is NonNullable<typeof p> => p != null);

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Crumbs
          items={[
            { href: "/", label: "Start" },
            { label: solution.cardTitle },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">{solution.title}</h1>
        <p className="max-w-2xl">{solution.intro}</p>
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-stone-500">
          {solution.guideLinks.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="underline underline-offset-2 hover:text-white"
            >
              {g.label}
            </Link>
          ))}
          <ContractNote />
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Vad passar dig?</h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {solution.compare.map((row) => (
            <li
              key={row.title}
              className="glass-panel space-y-2 px-4 py-4"
            >
              <p className="font-sans text-base font-semibold text-stone-100">
                {row.title}
              </p>
              <p className="text-sm leading-snug text-stone-400">{row.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Utvalda produkter</h2>
        <p className="max-w-2xl text-sm text-stone-400">
          Endast produkter från katalogen som passar den här situationen. Samma
          produkt kan dyka upp under flera lösningar.
        </p>
        <div id="produkter" className="grid scroll-mt-24 gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </article>
  );
}
