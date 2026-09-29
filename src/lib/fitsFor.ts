import type { Product } from "@/data/types";

const MAX_CHARS = 42;

function truncate(s: string, max = MAX_CHARS): string {
  const t = s.trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const sp = cut.lastIndexOf(" ");
  return `${(sp > 12 ? cut.slice(0, sp) : cut).trimEnd()}…`;
}

/** Short "Passar för" line — always capped, never a sentence. */
export function getFitsFor(product: Product): string {
  const override = product.fitsFor?.trim();
  if (override) return truncate(override);

  if (product.surfaces.length > 0) {
    return truncate(product.surfaces.slice(0, 2).join(", "));
  }

  return truncate(deriveFitsFor(product));
}

function deriveFitsFor(p: Product): string {
  const hay = `${p.slug} ${p.name} ${p.notes}`.toLowerCase();

  if (/fonsterfilm|fönsterfilm|frostad film|statisk film/.test(hay)) return "glas";
  if (/teleskop|spännstång|spannstang|gardinstång|gardinstang/.test(hay))
    return "mellan väggar";
  if (/klämfäste|klamfaste|med kläm|klämmor/.test(hay) && p.category === "solskydd")
    return "fönsterkarm";
  if (/självhäftande.*gardin|gardinhållare|gardinhallare/.test(hay))
    return "fönsterkarm";
  if (/balkong|räcke|racke|blomlåda|blomlada/.test(hay)) return "balkongräcke";
  if (/diskställ|diskstall/.test(hay)) return "bänk";
  if (/dörr\/nisch|dorr\/nisch|dörröppning|spannstang-dorr/.test(hay))
    return "dörr, nisch";
  if (/portabel|bordslampa/.test(hay)) return "bord";
  if (/golvlampa|fristående|fristaende|golvplacerad|står på golvet/.test(hay))
    return "golv";
  if (/skrivbordslampa|lampa med kläm|kläms på/.test(hay)) return "hyllkant";
  if (/led.?slinga|ljusslinga|slinga/.test(hay)) return "sladd";
  if (/dimmer|grenuttag/.test(hay)) return "befintlig sladd";
  if (/insektsnät|insektsnat/.test(hay)) return "fönster, dörr";
  if (/rök|co-larm|första hjälpen|forsta hjalpen/.test(hay)) return "hyresrätt";
  if (/badrum/.test(hay) && /kakel|hylla|krok/.test(hay)) return "kakel";
  if (/kökskrok|kokskrok|kök/.test(hay)) return "kök, släta ytor";
  if (/väggkrok|vaggkrok|tavla|tejp/.test(hay)) return "gips";
  if (/självhäftande hylla|vägghylla|vagghylla|kroklist/.test(hay))
    return "släta väggar";
  if (/självhäftande|sjalvhäftande/.test(hay)) return "släta ytor";

  switch (p.category) {
    case "solskydd":
      return "fönster";
    case "fasten":
      return "gips, kakel";
    case "forvaring":
      return p.mountType === "no-drill" ? "hyresrätt" : "förvaring";
    case "belysning":
      return "utan ny el";
    case "sakerhet":
      return "hyresrätt";
    default:
      return "hyresrätt";
  }
}
