import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { BackLink } from "@/components/BackLink";

export const metadata: Metadata = {
  title: "Solskydd utan att borra",
  description:
    "Solskydd utan borr i hyresrätt. Klämfästen, mätning och mörkläggning — plus produkter.",
};

export default function SolskyddPage() {
  const items = getProductsByCategory("solskydd");

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
          Solskydd utan att borra
        </h1>
        <BackLink />
      </header>

      <section className="space-y-3 leading-relaxed text-stone-700">
        <h2 className="text-xl font-semibold text-stone-800">Kort svar</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Klämfästen monteras direkt på fönsterbågen utan verktyg.</li>
          <li>
            Mät fönstret noggrant för att välja rätt bredd på mörkläggningen.
          </li>
          <li>
            Mörkläggande tyg stänger ute både ljus och värme effektivt.
          </li>
          <li>
            Skruvhål i fönsterkarmar räknas ofta som onormalt slitage.
          </li>
        </ul>
        <p>
          Läs vår fullständiga guide för steg för steg-instruktioner om
          rullgardiner utan borrhål:{" "}
          <Link
            href="/guide/rullgardin-utan-borra"
            className="text-sage-800 underline underline-offset-2"
          >
            Rullgardin utan att borra
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">Produkter</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
