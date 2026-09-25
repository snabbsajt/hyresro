import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure } from "@/components/Disclosure";
import { ProductCard } from "@/components/ProductCard";
import { getProduct } from "@/data/products";

export const metadata: Metadata = {
  title: "Checklista inför flytt från hyresrätt",
  description:
    "Kort checklista inför flytt: ta bort fästen, laga småskador och lämna lägenheten i gott skick.",
};

const steps = [
  "Gå igenom kontraktet och eventuell besiktningslista.",
  "Ta bort självhäftande fästen enligt tillverkarens instruktion.",
  "Kontrollera väggar, golv och fönster efter märken.",
  "Laga små hål med spackel om det ingår i överenskommelsen.",
  "Rengör kök, badrum och förvaring.",
  "Dokumentera skicket med foton innan ni lämnar nycklarna.",
  "Lämna tillbaka alla nycklar och brickor.",
];

export default function ChecklistaFlyttaPage() {
  const brandfilt = getProduct("brandfilt");

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900">
          Checklista inför flytt
        </h1>
        <p className="max-w-xl leading-relaxed text-stone-700">
          En enkel lista inför återlämning. Syftet: lägenheten i skick,
          depositionen i fred.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-stone-800">Att göra</h2>
        <ul className="space-y-2">
          {steps.map((step) => (
            <li
              key={step}
              className="flex gap-3 rounded-md border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-700"
            >
              <span className="mt-0.5 h-4 w-4 shrink-0 rounded border border-stone-300" aria-hidden />
              {step}
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed text-stone-600">
          Tvister om skick och deposition hanteras bäst via er hyresvärd och
          eventuellt{" "}
          <a
            href="https://www.hyresgastforeningen.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage-800 underline underline-offset-2"
          >
            Hyresgästföreningen
          </a>
          . Kolla ditt kontrakt.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-stone-800">Relaterat</h2>
        <p className="text-sm text-stone-600">
          <Link
            href="/guide/borra-i-hyresratt"
            className="text-sage-800 underline underline-offset-2"
          >
            Guide: borra i hyresrätt
          </Link>
        </p>
        {brandfilt && <ProductCard product={brandfilt} />}
      </section>

      <Disclosure compact />
    </div>
  );
}
