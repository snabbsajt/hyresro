import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Faq } from "@/components/Faq";
import { getProduct } from "@/lib/catalog";
import { Crumbs } from "@/components/Crumbs";
import { GuideAnswerBox } from "@/components/GuideAnswerBox";
import { ContractBox } from "@/components/ContractBox";
import { GuideNext } from "@/components/GuideNext";
import { getGuide } from "@/data/guides";

export const metadata: Metadata = {
  title: "Rullgardin utan att borra i hyresrätt — klämfäste",
  description:
    "Sätt upp rullgardin med klämfäste i hyresrätt: mått, trä/PVC, aluminium och när skruv i karm kräver värdens ja.",
  alternates: { canonical: "/guide/rullgardin-utan-borra" },
  openGraph: {
    url: "/guide/rullgardin-utan-borra",
  },
};

export default async function RullgardinUtanBorraPage() {
  const meta = getGuide("rullgardin-utan-borra")!;
  const products = (
    await Promise.all(meta.productSlugs.map((s) => getProduct(s)))
  ).filter(Boolean);

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Crumbs
          items={[
            { href: "/guide", label: "Guider" },
            { href: "/losning/gardiner", label: "Gardiner" },
            { label: "Rullgardin utan att borra" },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">
          Rullgardin utan att borra i hyresrätt
        </h1>
        <p className="max-w-2xl text-lg">
          Ja — om ni köper modell med klämfäste och bågen tål trycket. Ingen skruv i karm,
          inga hål i vägg. Mät först; aluminiumbåge är den vanligaste fallgropen.
        </p>
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-stone-500">
          <Link href="/losning/gardiner" className="underline underline-offset-2 hover:text-white">
            Alla gardinlösningar
          </Link>
          <Link href="/losning/morklagga" className="underline underline-offset-2 hover:text-white">
            Mörklägga utan borr
          </Link>
          <Link href="/solskydd" className="underline underline-offset-2 hover:text-white">
            Alla solskydd
          </Link>
        </p>
      </header>

      {meta.answer ? <GuideAnswerBox answer={meta.answer} /> : null}
      <ContractBox />

      <section className="space-y-3">
        <p>
          Klämfästet trycks fast mellan bågens överkant och listen. Trä och PVC brukar ge bra
          grepp. Aluminium är ofta slät och fjädrar — klämmorna slirar eller ni drar åt så hårt
          att lacken skadas. Testa med handen först: ger listen efter är kläm en dålig idé.
        </p>
        <p>
          Märken på karmen kommer nästan alltid från för hårt drag eller från att klemman sitter
          kvar år efter år. Lägg en tunn filtbit eller den skyddstejp som följer med, och ta ner
          gardinen när ni flyttar — låt den inte sitta som en fast installation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Mät innan ni köper</h2>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>Läs produktens måttanvisning. Butikerna mäter olika.</li>
          <li>Bredd: glaset eller bågens insida — inte hela karmen på gissning.</li>
          <li>Höjd: från klämmorna ner till där tyget ska sluta.</li>
          <li>Karmdjup: klämmorna behöver något att greppa i.</li>
        </ol>
        <p>
          Vill ni kunna släppa in ljus upptill och täcka nertill är{" "}
          <Link href="/guide/plissegardin-utan-borra" className="underline underline-offset-2">
            plissé med upp/ner
          </Link>{" "}
          oftast enklare än rullgardin. Behöver ni mörkare sovrum: se{" "}
          <Link href="/losning/morklagga" className="underline underline-offset-2">
            mörklägga utan borr
          </Link>
          .
        </p>
      </section>

      <Faq
        items={[
          {
            q: "Går det att sätta rullgardin utan att borra?",
            a: "Ja, om ni köper modell med klämfäste och bågen tål trycket. Inte alla storlekar har kläm — läs produkttexten, inte bara bilden.",
          },
          {
            q: "Hur mäter man för klämfäste?",
            a: "Följ butikens anvisning. Mät oftast glasets bredd eller bågens insida, plus karmdjup så klämmorna får grepp.",
          },
          {
            q: "Får man skruva i karmen i hyresrätt?",
            a: "Det är oftast ett ingrepp. Läs kontraktet och fråga värden innan.",
          },
          {
            q: "Fungerar kläm på aluminiumfönster?",
            a: "Ofta dåligt. Ytan är slät och bågen fjädrar. Testa greppet — annars spännstång eller fråga om annan lösning.",
          },
        ]}
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Rullgardin och stång — utan skruv i karm</h2>
        <p className="max-w-2xl text-sm text-stone-400">
          Duo-rullgardin med kläm plus spännstång/teleskop när ni vill ha tyg-gardin mellan
          väggar. Alla från katalogen — inga påhittade produkter.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p!.slug} product={p!} />
          ))}
        </div>
      </section>

      <GuideNext
        slug="rullgardin-utan-borra"
        tips={[
          "Mät bågens insida och karmdjup innan köp — butikerna mäter olika.",
          "Testa greppet på aluminium innan ni beställer.",
          "Ta ner klämgardinen vid flytt så lacken slipper märken.",
        ]}
      />
    </article>
  );
}
