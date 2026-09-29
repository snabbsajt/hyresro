export type GuideGroupId =
  | "regler"
  | "vagg"
  | "fonster"
  | "ute"
  | "flytt";

export type GuideAnswer = {
  tillatet: string[];
  fragaForst: string[];
  undvik: string[];
};

export type GuideMeta = {
  slug: string;
  href: string;
  title: string;
  blurb: string;
  group: GuideGroupId;
  /** Related product slugs (must exist in products.ts). */
  productSlugs: string[];
  /** Related guide slugs for "Läs härnäst" (3 preferred). */
  nextSlugs: string[];
  answer?: GuideAnswer;
};

export const guideGroups: { id: GuideGroupId; title: string; blurb: string }[] = [
  {
    id: "regler",
    title: "Regler & kontrakt",
    blurb: "Vad ni får ändra innan ni sätter upp något.",
  },
  {
    id: "vagg",
    title: "Vägg & förvaring",
    blurb: "Tavla, hylla och fästen utan onödiga hål.",
  },
  {
    id: "fonster",
    title: "Fönster & solskydd",
    blurb: "Rullgardin, plissé och film utan skruv i karm.",
  },
  {
    id: "ute",
    title: "Balkong",
    blurb: "Blomlåda och ljus utan skruv i räcke.",
  },
  {
    id: "flytt",
    title: "Flytt",
    blurb: "Dokumentera in och återställ ut.",
  },
];

export const guides: GuideMeta[] = [
  {
    slug: "kolla-kontraktet",
    href: "/guide/kolla-kontraktet",
    title: "Så läser ni kontraktet",
    blurb: "Var reglerna står och när ni ska fråga värden.",
    group: "regler",
    productSlugs: [],
    nextSlugs: ["borra-i-hyresratt", "tavla-pa-gips", "hylla-utan-borra"],
    answer: {
      tillatet: [
        "Läsa särskilda villkor och husordning innan ni fäster något.",
        "Mejla förvaltaren vid tvekan — skriftligt svar hjälper vid avflytt.",
      ],
      fragaForst: [
        "Allt som kan räknas som ingrepp: kakel, el, balkong, TV-fäste.",
      ],
      undvik: [
        "Att lita på grannens lösning eller en mening på nätet framför ert papper.",
      ],
    },
  },
  {
    slug: "borra-i-hyresratt",
    href: "/guide/borra-i-hyresratt",
    title: "Får man borra i hyresrätt?",
    blurb: "Små hål vs kontraktets nej. Alternativ utan borr.",
    group: "regler",
    productSlugs: [
      "amz-virea-vaggkrokar-8kg-latt",
      "hylla-no-drill",
      "amz-vounot-duo",
    ],
    nextSlugs: ["kolla-kontraktet", "tavla-pa-gips", "hylla-utan-borra"],
    answer: {
      tillatet: [
        "Små hål för tavlor räknas oftast som normalt slitage — om kontraktet inte säger nej.",
        "Borrfria krokar, hyllor och klämfästen när ytan och vikten räcker.",
      ],
      fragaForst: [
        "Kakel, bärande vägg, el, balkongräcke och TV-fäste.",
        "Om särskilda villkor eller husordning förbjuder hål.",
      ],
      undvik: [
        "Att borra i kakel eller räcke utan skriftligt ja.",
        "Att anta att lagen alltid slår ert kontrakt.",
      ],
    },
  },
  {
    slug: "tavla-pa-gips",
    href: "/guide/tavla-pa-gips",
    title: "Tavla på gips",
    blurb: "Tejp-krok på slät målad gips. Vikt, yta och avdrag.",
    group: "vagg",
    productSlugs: [
      "amz-virea-vaggkrokar-8kg-latt",
      "amz-virea-vaggkrokar-8kg-tung",
      "amz-ricoo",
    ],
    nextSlugs: ["hylla-utan-borra", "borra-i-hyresratt", "kolla-kontraktet"],
    answer: {
      tillatet: [
        "Tejp-krok / självhäftande krok på slät, torr, målad gips under maxvikt.",
        "Dra remsan längs väggen vid flytt enligt tillverkaren.",
      ],
      fragaForst: [
        "Spegel med tjockt glas, stor tavla eller något över soffan där vikten är osäker.",
      ],
      undvik: [
        "Tapet, färsk färg och kalkfärg — ytskiktet följer ofta med.",
        "TV och tung spegel på tejp.",
      ],
    },
  },
  {
    slug: "hylla-utan-borra",
    href: "/guide/hylla-utan-borra",
    title: "Hylla utan att borra",
    blurb: "Självhäftande hylla: yta, maxvikt och hur ni tar ner.",
    group: "vagg",
    productSlugs: [
      "hylla-no-drill",
      "base-kroklist-med-hylla-mattsvart",
      "amz-weissenstein-badrumshylla",
    ],
    nextSlugs: ["tavla-pa-gips", "borra-i-hyresratt", "balkong-utan-borra"],
    answer: {
      tillatet: [
        "Självhäftande hylla på slät målad vägg eller kakel under maxvikt.",
        "Vänta den tid tillverkaren anger innan ni lastar.",
      ],
      fragaForst: [
        "Tunga saker, böcker i rad och allt som närmar sig TV-fäste.",
      ],
      undvik: [
        "Papperstapet, strukturputs och fuktigt badrum där klistret släpper.",
        "Att slita loss hyllan rakt ut från väggen.",
      ],
    },
  },
  {
    slug: "rullgardin-utan-borra",
    href: "/guide/rullgardin-utan-borra",
    title: "Rullgardin utan att borra",
    blurb: "Klämfäste i bågen. Mått, trä/PVC och aluminium.",
    group: "fonster",
    productSlugs: [
      "amz-vounot-duo",
      "amz-gardinia",
      "gardinstang-spann",
    ],
    nextSlugs: ["plissegardin-utan-borra", "kolla-kontraktet", "tavla-pa-gips"],
    answer: {
      tillatet: [
        "Rullgardin med klämfäste i trä- eller PVC-båge.",
        "Ta ner gardinen vid flytt så karmen slipper märken.",
      ],
      fragaForst: [
        "Skruv i karm — läs kontraktet och fråga värden.",
      ],
      undvik: [
        "Aluminiumbåge där listen fjädrar och klämmorna slirar.",
        "Att dra åt så hårt att lacken skadas.",
      ],
    },
  },
  {
    slug: "plissegardin-utan-borra",
    href: "/guide/plissegardin-utan-borra",
    title: "Plisségardin utan att borra",
    blurb: "Klämplissé och film när ni vill ha ljus uppifrån.",
    group: "fonster",
    productSlugs: [
      "plisse-sonello-klam",
      "frostad-fonsterfilm-insynsskydd-utan-lim",
      "fonsterfilm-randigt-frostad-monster",
    ],
    nextSlugs: ["rullgardin-utan-borra", "kolla-kontraktet", "balkong-utan-borra"],
    answer: {
      tillatet: [
        "Plissé med uttryckligt klämfäste och tillräckligt karmdjup.",
        "Statisk fönsterfilm utan lim på glas.",
      ],
      fragaForst: [
        "Modeller som skruvas i karmen — det är ett ingrepp.",
      ],
      undvik: [
        "Att köpa plissé utan att läsa monteringen (många skruvas).",
        "Aluminiumbåge där kläm ofta slirar.",
      ],
    },
  },
  {
    slug: "balkong-utan-borra",
    href: "/guide/balkong-utan-borra",
    title: "Balkong utan att borra",
    blurb: "Blomlåda på räcke och ljusslinga i befintligt uttag.",
    group: "ute",
    productSlugs: [
      "amz-xclou-blomladahallare",
      "amz-comfour",
      "amz-hit-ledslinga-96",
    ],
    nextSlugs: ["kolla-kontraktet", "borra-i-hyresratt", "hylla-utan-borra"],
    answer: {
      tillatet: [
        "Blomlåda som kläms på räcket (rätt mått, ingen överlast).",
        "Krukor på golvet och ljusslinga i befintligt utomhusuttag.",
      ],
      fragaForst: [
        "Markis, fast insynsskydd, parabol och allt som skruvas i räcke eller bjälklag.",
      ],
      undvik: [
        "Skruv i räcke, golv eller fasad utan ja.",
        "Ny el på balkongen.",
      ],
    },
  },
  {
    slug: "checklista-flytta",
    href: "/checklista-flytta",
    title: "Checklista vid flytt",
    blurb: "Dokumentera in, ta ner fästen skonsamt, fota ut.",
    group: "flytt",
    productSlugs: [],
    nextSlugs: ["kolla-kontraktet", "tavla-pa-gips", "hylla-utan-borra"],
  },
];

export function getGuide(slug: string): GuideMeta | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getRelatedGuides(slug: string, limit = 3): GuideMeta[] {
  const g = getGuide(slug);
  if (!g) return [];
  return g.nextSlugs
    .map((s) => getGuide(s))
    .filter((x): x is GuideMeta => x != null)
    .slice(0, limit);
}

export function guidesByGroup(): {
  id: GuideGroupId;
  title: string;
  blurb: string;
  items: GuideMeta[];
}[] {
  return guideGroups
    .map((grp) => ({
      ...grp,
      items: guides.filter((g) => g.group === grp.id),
    }))
    .filter((g) => g.items.length > 0);
}
