/** Problem-first solution hubs («Vad vill du göra?»). Product slugs must exist in products.ts. */

export type SolutionCompare = {
  title: string;
  blurb: string;
};

export type SolutionGuideLink = {
  href: string;
  label: string;
};

export type SolutionMeta = {
  slug: string;
  href: `/${string}`;
  /** Homepage card title */
  cardTitle: string;
  /** Homepage card blurb */
  cardBlurb: string;
  /** Page H1 */
  title: string;
  /** Meta description */
  description: string;
  /** Short problem explanation */
  intro: string;
  /** «Vad passar dig» compare rows */
  compare: SolutionCompare[];
  /** Curated affiliate products (multi-hub OK) */
  productSlugs: string[];
  /** Existing guides that go deeper */
  guideLinks: SolutionGuideLink[];
};

export const solutions: SolutionMeta[] = [
  {
    slug: "hanga-upp",
    href: "/losning/hanga-upp",
    cardTitle: "Hänga upp saker",
    cardBlurb: "Tavlor, speglar, dekoration — krokar utan hål.",
    title: "Hänga upp saker utan att borra",
    description:
      "Tavlor, speglar och dekoration i hyresrätt: tejp-krokar, självhäftande fästen och fristående hängare.",
    intro:
      "Ni vill ha tavlor, speglar eller dekoration på väggen utan onödiga hål. På slät målad vägg eller kakel räcker ofta tejp-krok om ni håller maxvikten. Tungt gods och TV är en annan fråga — då gäller kontrakt och värdens ja.",
    compare: [
      {
        title: "Tejp-krok / Command-krok",
        blurb: "Lätt till måttlig vikt på slät yta. Bäst för tavlor och små speglar. Följ avdragningen vid flytt.",
      },
      {
        title: "Självhäftande kroklist",
        blurb: "Flera krokar på rad. Bra i hall och kök om underlaget är torrt och slätt.",
      },
      {
        title: "Fristående klädhängare",
        blurb: "Inget på väggen alls. Tar golvyta men flyttar med er.",
      },
    ],
    productSlugs: [
      "amz-virea-vaggkrokar-8kg-latt",
      "amz-virea-vaggkrokar-8kg-tung",
      "amz-designfabrik-kokskrokar",
      "amz-ricoo",
      "base-enkelkrok-mattsvart",
      "base-210-3-krok-borstad-rostfritt",
      "base-kroklist-med-hylla-mattsvart",
      "boelle-alva-kladhangare-vitlaserad",
      "boelle-quito-kladhangare-svart",
    ],
    guideLinks: [
      { href: "/guide/tavla-pa-gips", label: "Tavla på gips" },
      { href: "/guide/borra-i-hyresratt", label: "Får man borra?" },
      { href: "/fasten", label: "Alla fästen" },
    ],
  },
  {
    slug: "gardiner",
    href: "/losning/gardiner",
    cardTitle: "Sätta upp gardiner",
    cardBlurb: "Gardiner, rullgardiner och plissé utan skruv.",
    title: "Sätta upp gardiner utan att borra",
    description:
      "Rullgardin med kläm, plissé och spännstång — gardiner i hyresrätt utan skruv i karm.",
    intro:
      "Ni vill ha gardin eller solskydd i fönstret utan skruvhål i karmen. Klämfäste, spännstång och limfäste (där det passar) är de vanliga vägarna. Mät bredd och djup innan ni köper.",
    compare: [
      {
        title: "Rullgardin med kläm",
        blurb: "Sitter i bågen. Snabb montering. Bra när karmdjupet räcker.",
      },
      {
        title: "Plisségardin",
        blurb: "Tunnare profil, ofta mer ljusfilter. Finns med kläm eller limfäste.",
      },
      {
        title: "Spännstång / teleskopstång",
        blurb: "För tyg-gardin mellan väggar eller i nisch. Ingen skruv i karm.",
      },
    ],
    productSlugs: [
      "amz-vounot-duo",
      "amz-gardinia",
      "amz-meisenberg-teleskopstang",
      "gardinstang-spann",
      "plisse-sonello-klam",
      "plissegardin-flex",
      "plissegardin-flex-dubbel",
    ],
    guideLinks: [
      { href: "/guide/rullgardin-utan-borra", label: "Rullgardin utan borr" },
      { href: "/guide/plissegardin-utan-borra", label: "Plisségardin utan borr" },
      { href: "/solskydd", label: "Alla solskydd" },
    ],
  },
  {
    slug: "morklagga",
    href: "/losning/morklagga",
    cardTitle: "Mörklägga",
    cardBlurb: "Sovrum och fönster mörkare — utan att borra.",
    title: "Mörklägga utan att borra",
    description:
      "Mörkare sovrum utan skruv i karm: duo-rullgardin, plissé och honeycomb som filtrerar ljus.",
    intro:
      "Ni vill sova mörkare eller dämpa starkt dagsljus. «Mörkläggning» i hyresrätt handlar oftast om tyg och lager — inte om att borra. Duo-rullgardin och dubbel plissé (honeycomb) ger starkare ljussignal än tunn film. Film mörklägger inte — den tar insyn.",
    compare: [
      {
        title: "Duo-rullgardin",
        blurb: "Två tyglager: mer ljus på dagen, mörkare på natten. Kräver kläm/karmdjup.",
      },
      {
        title: "Plissé / honeycomb",
        blurb: "Flera lager tyg. Dubbel plissé isolerar och mörklägger oftast bättre än enkel.",
      },
      {
        title: "Lager på lager",
        blurb: "Tunn plissé + mörkare tyg på spännstång. Flexibelt om en produkt inte räcker.",
      },
    ],
    productSlugs: [
      "amz-vounot-duo",
      "plisse-sonello-klam",
      "plissegardin-flex",
      "plissegardin-flex-dubbel",
    ],
    guideLinks: [
      { href: "/guide/rullgardin-utan-borra", label: "Rullgardin utan borr" },
      { href: "/guide/plissegardin-utan-borra", label: "Plisségardin utan borr" },
      { href: "/losning/insynsskydd", label: "Insynsskydd (film)" },
    ],
  },
  {
    slug: "insynsskydd",
    href: "/losning/insynsskydd",
    cardTitle: "Få mer insynsskydd",
    cardBlurb: "Film, plissé och mer — utan limkaos i karm.",
    title: "Få mer insynsskydd utan att borra",
    description:
      "Frostad fönsterfilm och ljusfiltrerande plissé — insynsskydd i hyresrätt utan skruv.",
    intro:
      "Ni vill slippa insyn från gatan eller grannen utan att borra. Frostad eller mönstrad fönsterfilm tar sikten men släpper fortfarande in ljus. Plissé och duo filtrerar mer och kan kombineras. Film är inte mörkläggning.",
    compare: [
      {
        title: "Frostad / mönstrad film",
        blurb: "Statisk eller limfri film. Bra för badrum och gatufönster där ni vill ha dagsljus.",
      },
      {
        title: "Ljusfiltrerande plissé",
        blurb: "Mjukare ljus + mer integritet. Kan monteras med kläm.",
      },
      {
        title: "Duo-rullgardin",
        blurb: "Justerbart: mer öppet eller mer stängt beroende på tid på dygnet.",
      },
    ],
    productSlugs: [
      "frostad-fonsterfilm-insynsskydd-utan-lim",
      "fonsterfilm-randigt-frostad-monster",
      "fonsterfilm-vackert-blommigt-monster",
      "plisse-sonello-klam",
      "amz-vounot-duo",
      "plissegardin-flex",
      "plissegardin-flex-dubbel",
    ],
    guideLinks: [
      { href: "/guide/plissegardin-utan-borra", label: "Plisségardin utan borr" },
      { href: "/losning/morklagga", label: "Mörklägga" },
      { href: "/solskydd", label: "Alla solskydd" },
    ],
  },
  {
    slug: "forvaring",
    href: "/losning/forvaring",
    cardTitle: "Få mer förvaring",
    cardBlurb: "Hyllor, krokar och nisch — utan hål i väggen.",
    title: "Få mer förvaring utan att borra",
    description:
      "Självhäftande hylla, spännstång i nisch och fristående förvaring för hyresrätt.",
    intro:
      "Ni behöver mer plats för prylar utan att borra. Tejphylla fungerar på slät torr yta under maxvikt. Spännstång tar nisch och dörröppning. Fristående hyllor och klädhängare kräver ingen vägg alls.",
    compare: [
      {
        title: "Självhäftande hylla / kroklist",
        blurb: "Snabb väggplats. Kräver slät yta och ärlig maxvikt (hylla + innehåll).",
      },
      {
        title: "Spännstång i nisch",
        blurb: "Inget lim. Bra mellan skåp, i dörrpost eller smal alcove.",
      },
      {
        title: "Fristående möbel",
        blurb: "Hylla på hjul eller klädställ. Flyttar med er vid avflytt.",
      },
    ],
    productSlugs: [
      "hylla-no-drill",
      "spannstang-dorr",
      "amz-weissenstein-badrumshylla",
      "base-kroklist-med-hylla-mattsvart",
      "amz-anhhow-diskstall",
      "boelle-alva-kladhangare-vitlaserad",
      "boelle-quito-kladhangare-svart",
      "boelle-manaus-hylla-svart",
    ],
    guideLinks: [
      { href: "/guide/hylla-utan-borra", label: "Hylla utan borr" },
      { href: "/guide/balkong-utan-borra", label: "Balkong utan borr" },
      { href: "/forvaring", label: "Alla förvaring" },
    ],
  },
  {
    slug: "badrum",
    href: "/losning/badrum",
    cardTitle: "Fixa badrummet",
    cardBlurb: "Förvaring och krokar på kakel — utan borra.",
    title: "Fixa badrummet utan att borra",
    description:
      "Badrumskrokar, hylla och toalettpappershållare på kakel utan borr i hyresrätt.",
    intro:
      "Ni vill ha krokar och hyllor i badrummet utan att borra i kakel. Självhäftande fästen fungerar på slät kakelplatta om ytan är torr och ni håller maxvikten — men imma och fogar släpper klistret över tid. Fråga värden innan ni gör något som kan skada kakel.",
    compare: [
      {
        title: "Självhäftande badrumskrok",
        blurb: "Handduk och skrubb på kakel. Rengör ytan; vänta innan last.",
      },
      {
        title: "Badrumshylla / kroklist",
        blurb: "Mer yta för schampo och prylar. Maxvikten gäller innehåll + hylla.",
      },
      {
        title: "Toalettpapper med hylla",
        blurb: "Kombinerad hållare. Bra när ni vill undvika skruv i kakel.",
      },
    ],
    productSlugs: [
      "amz-ricoo",
      "amz-weissenstein-badrumshylla",
      "base-toalettpappershallare-med-hylla-borstad-rostfritt",
      "base-kroklist-med-hylla-mattsvart",
      "base-enkelkrok-mattsvart",
      "base-210-3-krok-borstad-rostfritt",
    ],
    guideLinks: [
      { href: "/guide/hylla-utan-borra", label: "Hylla utan borr" },
      { href: "/guide/tavla-pa-gips", label: "Tavla / krok på vägg" },
      { href: "/guide/borra-i-hyresratt", label: "Får man borra?" },
    ],
  },
];

export function getSolution(slug: string): SolutionMeta | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((s) => s.slug);
}
