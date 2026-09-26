import type { Metadata } from "next";
import Link from "next/link";
import { ContractNote } from "@/components/ContractNote";
import { ProductCard } from "@/components/ProductCard";
import { getCatalog } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";

export const metadata: Metadata = {
  title: "Får man borra i hyresrätt?",
  description:
    "Vad som oftast gäller. Kontraktet styr. Alternativ utan borr. Inte juridisk rådgivning.",
};

export default async function BorraIHyresrattPage() {
  const products = await getCatalog();
  const related = products.filter((p) =>
    ["tesa-skruv-latt", "tesa-skruv-tung", "hylla-no-drill"].includes(p.slug),
  );

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Crumbs items={[{ label: "Får man borra i hyresrätt?" }]} />
        <h1 className="text-3xl font-semibold tracking-tight">Får man borra i hyresrätt?</h1>
        <p className="text-lg text-stone-600">
          Små hål för tavlor räknas oftast som normalt slitage.{" "}
          <Link href="/guide/kolla-kontraktet" className="underline underline-offset-2">
            Kontraktet
          </Link>{" "}
          kan säga nej.
        </p>
        <ContractNote />
      </header>
      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold">Kort svar</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Vårdplikt. Lägenheten ska lämnas i skick, med normalt slitage.</li>
          <li>Avtalet kan vara strängare än lagen.</li>
          <li>Kakel, TV-fäste, el och balkong: fråga först.</li>
        </ul>
        <p>
          Inte jurist. Läs hos{" "}
          <a href="https://www.hyresgastforeningen.se/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
            Hyresgästföreningen
          </a>
          .
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Utan borr när det räcker</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </article>
  );
}
