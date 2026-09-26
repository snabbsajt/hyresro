import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { CompareTable } from "@/components/CompareTable";
import { getProductsByCategory } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";
import { ContractNote } from "@/components/ContractNote";

export const metadata: Metadata = {
  title: "Fästen utan att borra",
  description: "Jämför Tesa, Command och krok — vikt och underlag.",
};

export default async function FastenPage() {
  const items = await getProductsByCategory("fasten");
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Crumbs items={[{ href: "/produkter", label: "Alla produkter" }, { label: "Fästen" }]} />
        <h1 className="text-3xl font-semibold tracking-tight">Fästen utan att borra</h1>
        <ContractNote />
      </header>
      <CompareTable
        caption="Vilket fäste ska ni välja"
        rows={[
          {
            name: "Självhäftande skruv — Tesa lätt",
            bestFor: "Krokar, ljus ram, slät yta",
            watch: "Maxvikt på förpackningen. Ren, torr vägg.",
            fromSek: 70,
          },
          {
            name: "Självhäftande skruv — Tesa tung",
            bestFor: "Tyngre grejer på kakel, glas, målad slät vägg",
            watch: "Tapet och strukturputt släpper ofta. Ta bort enligt Tesa.",
            fromSek: 70,
          },
          {
            name: "Tavelupphängning — Command 5 kg",
            bestFor: "Tavlor upp till angiven vikt",
            watch: "Dra av remsan vid flytt. Inte på fuktig fog.",
            fromSek: 50,
          },
          {
            name: "Krok — Tesa kakel",
            bestFor: "Handduk och lätta grejer i badrum",
            watch: "Kakelplattan, inte fogen.",
            fromSek: 137,
          },
        ]}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
