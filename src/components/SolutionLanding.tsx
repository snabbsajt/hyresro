import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Crumbs } from "@/components/Crumbs";
import { ContractNote } from "@/components/ContractNote";
import type { SolutionMeta } from "@/data/solutions";
import { solutions } from "@/data/solutions";
import { getProduct } from "@/lib/catalog";

type Props = {
  solution: SolutionMeta;
};

export async function SolutionLanding({ solution }: Props) {
  const products = (
    await Promise.all(solution.productSlugs.map((s) => getProduct(s)))
  ).filter((p): p is NonNullable<typeof p> => p != null);

  const otherSolutions = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <Crumbs
          items={[
            { href: "/", label: "Start" },
            { label: solution.cardTitle },
          ]}
        />
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-stone-500">
          Lösning
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {solution.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed">{solution.intro}</p>
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-stone-500">
          <ContractNote />
        </p>
      </header>

      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Vad passar dig?</h2>
          <p className="max-w-2xl text-sm text-stone-400">
            Tre vägar till samma mål. Välj efter yta, vikt och hur mycket ni vill fästa i
            väggen.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-3">
          {solution.compare.map((row, i) => (
            <li
              key={row.title}
              className="glass-panel flex flex-col gap-2 px-4 py-4"
            >
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-stone-500">
                Alternativ {i + 1}
              </span>
              <p className="font-sans text-base font-semibold text-stone-100">
                {row.title}
              </p>
              <p className="text-sm leading-snug text-stone-400">{row.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      {solution.guideLinks.length > 0 ? (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Läs guiden först</h2>
          <ul className="grid gap-3 sm:grid-cols-3">
            {solution.guideLinks.map((g) => (
              <li key={g.href}>
                <Link
                  href={g.href}
                  className="glass-panel group flex h-full flex-col gap-1.5 px-4 py-4 transition-colors hover:border-white/30"
                >
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-stone-500">
                    Guide
                  </span>
                  <span className="font-medium leading-snug text-stone-100 group-hover:text-white">
                    {g.label}
                  </span>
                  <span className="mt-auto pt-1 text-sm font-medium text-stone-300 underline underline-offset-2 group-hover:text-white">
                    Läs guide
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Utvalda produkter</h2>
          <p className="max-w-2xl text-sm text-stone-400">
            Från katalogen — samma produkt kan dyka upp under flera lösningar. Namnet och
            knappen går till handlaren.
          </p>
        </div>
        {products.length > 0 ? (
          <div id="produkter" className="grid scroll-mt-24 gap-4 sm:grid-cols-2">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <p className="glass-panel px-4 py-5 text-sm text-stone-400">
            Inga produkter kopplade till den här lösningen just nu.{" "}
            <Link href="/produkter" className="underline underline-offset-2 hover:text-white">
              Se alla produkter
            </Link>
            .
          </p>
        )}
      </section>

      {otherSolutions.length > 0 ? (
        <section className="space-y-3 border-t border-white/10 pt-8">
          <h2 className="text-xl font-semibold">Andra lösningar</h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-stone-400">
            {otherSolutions.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="underline underline-offset-2 hover:text-white"
                >
                  {s.cardTitle}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/" className="underline underline-offset-2 hover:text-white">
                Alla på startsidan
              </Link>
            </li>
          </ul>
        </section>
      ) : null}
    </article>
  );
}
