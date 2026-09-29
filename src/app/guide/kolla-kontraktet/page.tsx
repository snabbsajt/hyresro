import type { Metadata } from "next";
import { Crumbs } from "@/components/Crumbs";
import { Faq } from "@/components/Faq";
import { GuideAnswerBox } from "@/components/GuideAnswerBox";
import { GuideNext } from "@/components/GuideNext";
import { getGuide } from "@/data/guides";

export const metadata: Metadata = {
  title: "Så läser ni hyreskontraktet innan ni sätter upp något",
  description:
    "Var reglerna står, vad som oftast gäller borr och fästen, när ni ska fråga värden. Inte juridisk rådgivning.",
  alternates: { canonical: "/guide/kolla-kontraktet" },
  openGraph: {
    url: "/guide/kolla-kontraktet",
  },
};

export default function KollaKontraktetPage() {
  const meta = getGuide("kolla-kontraktet")!;

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <Crumbs
          items={[
            { href: "/guide", label: "Guider" },
            { label: "Så läser ni kontraktet" },
          ]}
        />
        <h1 className="text-3xl font-semibold tracking-tight">Så läser ni kontraktet</h1>
        <p>
          Avtalet styr före generella tips. Hyreslagen är golvet. Ert kontrakt kan vara
          strängare.
        </p>
      </header>

      {meta.answer ? <GuideAnswerBox answer={meta.answer} /> : null}

      <section className="space-y-3">
        <p>
          Det ni letar efter heter sällan ordet borra. Det står ändringar, ingrepp, underhåll,
          skick vid avflytt eller särskilda villkor. Husordningen ligger ofta som bilaga — den
          räknas. En mening om tavlor på en branschwebb slår inte ert papper.
        </p>
        <p>
          Hittar ni inget om hål i vägg betyder det inte fritt fram. Det betyder att ni får
          gå på vårdplikt och sunt förnuft: små hål för tavlor är en sak, hål i kakel en annan.
          Vid tvekan: ett kort mejl till förvaltaren. Svaret är lättare att visa vid avflytt än
          ett samtal i trappan.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Var ni tittar</h2>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>Förstasidans särskilda villkor.</li>
          <li>Bilagor — husordning eller trivselregler.</li>
          <li>Rubriker om ändringar, ingrepp, underhåll, skick vid avflytt.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Vad lagen säger i korthet</h2>
        <p>
          Vårdplikt. Mindre hål för tavlor räknas oftast som normalt slitage. Större ingrepp
          kräver samtycke. Inte juridisk rådgivning. Läs hos{" "}
          <a
            href="https://www.hyresgastforeningen.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Hyresgästföreningen
          </a>
          .
        </p>
      </section>

      <Faq
        items={[
          {
            q: "Räcker det att läsa lagen?",
            a: "Nej. Kontraktet kan vara strängare. Börja där.",
          },
          {
            q: "Vem frågar man?",
            a: "Värden eller förvaltaren, skriftligt om det gäller ingrepp.",
          },
        ]}
      />

      <GuideNext slug="kolla-kontraktet" />
    </article>
  );
}
