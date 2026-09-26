import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";

export const metadata: Metadata = {
  title: "Solskydd utan att borra",
  description: "Solskydd utan borr i hyresrätt. Klämfästen, mätning och mörkläggning.",
};

export default async function SolskyddPage() {
  const items = await getProductsByCategory("solskydd");
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Crumbs items={[{ href: "/produkter", label: "Alla produkter" }, { label: "Solskydd" }]} />
        <h1 className="text-3xl font-semibold tracking-tight">Solskydd utan att borra</h1>
      </header>
      <section className="space-y-3 leading-relaxed text-stone-700">
        <ul className="list-disc space-y-2 pl-5">
          <li>Klämfästen på fönsterbågen utan verktyg.</li>
          <li>Mät bredd innan köp.</li>
          <li>Skruvhål i karm räknas ofta som onormalt slitage.</li>
        </ul>
        <p>
          Guide:{" "}
          <Link href="/guide/rullgardin-utan-borra" className="underline underline-offset-2">
            Rullgardin utan att borra
          </Link>
        </p>
      </section>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
