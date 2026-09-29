import type { Product } from "./types";
import { wrapAddrevenue, wrapAmazon } from "./networks";

export const products: Product[] = [
  {
    slug: "amz-vounot-duo",
    name: "Vounot duo-rullgardin med klämfäste",
    category: "solskydd",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 280,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B08VWKXDW2") }],
    notes: "Klämfäste utan borr. Mät bågens bredd innan köp.",
    noteKey: "rullgardin",
    imageUrl: "/products/amz-vounot-duo.jpg",
  },

  {
    slug: "amz-gardinia",
    name: "Gardinia självhäftande gardinhållare",
    category: "solskydd",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 162,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B0989VT1D8") }],
    notes: "Självhäftande hållare för gardin — ingen skruv i karm.",
    noteKey: "rullgardin",
    imageUrl: "/products/amz-gardinia.jpg",
  },

  {
    slug: "amz-meisenberg-teleskopstang",
    name: "MEISENBERG teleskopstång",
    category: "solskydd",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 512,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B09D41HLJH") }],
    notes: "Utdragbar teleskopstång för gardin. Trycks mellan väggar — ingen skruv.",
    imageUrl: "/products/amz-meisenberg-teleskopstang.jpg",
  },

  {
    slug: "plisse-sonello-klam",
    name: "Plisségardin — Sonello med klämfäste",
    category: "solskydd",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 362,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/Sonello-Pliss%C3%A9gardin-rullgardiner-kl%C3%A4mf%C3%A4sten-insynsskydd/dp/B0816LHM7X") }],
    notes: "Uttryckligt klämfäste. Mät karmdjup.",
    noteKey: "rullgardin",
    imageUrl: "/products/plisse-sonello-klam.jpg",
  },

  {
    slug: "frostad-fonsterfilm-insynsskydd-utan-lim",
    name: "Frostad fönsterfilm – insynsskydd utan lim",
    category: "solskydd",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 279,
    merchants: [
      {
        name: "Fönsterfilm.se",
        url: wrapAddrevenue(
          "fonsterfilm",
          "https://xn--fnsterfilm-ecb.se/products/fonsterfilm-frostad-enkel-insynsskydd",
        ),
      },
    ],
    notes:
      "Statisk film utan lim — insynsskydd som släpper igenom dagsljus. Enkel att sätta upp och ta bort.",
    imageUrl: "/products/frostad-fonsterfilm-insynsskydd-utan-lim.jpg",
  },

  {
    slug: "fonsterfilm-randigt-frostad-monster",
    name: "Fönsterfilm med randigt frostat mönster",
    category: "solskydd",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 249,
    merchants: [
      {
        name: "Fönsterfilm.se",
        url: wrapAddrevenue(
          "fonsterfilm",
          "https://xn--fnsterfilm-ecb.se/products/fonsterfilm-randig-frostad-design",
        ),
      },
    ],
    notes:
      "Frostad film med randigt mönster. Ingen lim — fästs på glas utan borr eller skruv.",
    imageUrl: "/products/fonsterfilm-randigt-frostad-monster.jpg",
  },

  {
    slug: "fonsterfilm-vackert-blommigt-monster",
    name: "Fönsterfilm med vackert blommönster",
    category: "solskydd",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 269,
    merchants: [
      {
        name: "Fönsterfilm.se",
        url: wrapAddrevenue(
          "fonsterfilm",
          "https://xn--fnsterfilm-ecb.se/products/fonsterfilm-vackert-blommigt-monster",
        ),
      },
    ],
    notes:
      "Dekorativ frostad film med blommönster. Ingen lim — fästs på glas utan borr.",
    imageUrl: "/products/fonsterfilm-vackert-blommigt-monster.jpg",
  },

  {
    slug: "gardinstang-spann",
    name: "Gardinstång — GARDINIA spännstång",
    category: "solskydd",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 167,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/GARDINIA-sp%C3%A4nnst%C3%A5ng-Utdragbar-Montering-Mattsvart/dp/B07X5M5RLQ") }],
    notes: "Trycks mellan väggar. Ingen skruv i karm.",
    imageUrl: "/products/gardinstang-spann.jpg",
  },

  {
    slug: "plissegardin-flex",
    name: "Plisségardin Flex — Solskyddsshoppen",
    category: "solskydd",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 795,
    merchants: [
      {
        name: "Solskyddsshoppen",
        url: wrapAddrevenue(
          "solskyddsshoppen",
          "https://solskyddsshoppen.se/plissegardin-flex/",
        ),
      },
    ],
    notes:
      "Självhäftande fäste tillval (+199 kr). Butiken rekommenderar limfäste bara till fönster upp till ca 2 m² — större fönster kräver skruv. Måttanpassad up-and-down plissé.",
    noteKey: "rullgardin",
    imageUrl: "/products/plissegardin-flex.jpg",
  },

  {
    slug: "plissegardin-flex-dubbel",
    name: "Plisségardin Flex Dubbel — Solskyddsshoppen",
    category: "solskydd",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 995,
    merchants: [
      {
        name: "Solskyddsshoppen",
        url: wrapAddrevenue(
          "solskyddsshoppen",
          "https://solskyddsshoppen.se/plissegardin-flex-dubbel/",
        ),
      },
    ],
    notes:
      "Dubbeltyg (honeycomb). Självhäftande fäste tillval (+199 kr); limfäste rekommenderas bara upp till ca 2 m². Annars skruvmontage.",
    noteKey: "rullgardin",
    imageUrl: "/products/plissegardin-flex-dubbel.jpg",
  },

  {
    slug: "insektsnat-skjutdorr-plisse",
    name: "Insektsnät skjutdörr plissé — Solskyddsshoppen",
    category: "ovrigt",
    mountType: "either",
    surfaces: [],
    priceFromSek: 4490,
    merchants: [
      {
        name: "Solskyddsshoppen",
        url: wrapAddrevenue(
          "solskyddsshoppen",
          "https://solskyddsshoppen.se/insektsnat-skjutdorr-plisse/",
        ),
      },
    ],
    notes:
      "Låg bottenprofil limmas (6 mm, ingen skruv i golv); hög bottenprofil är den som skruvas. Välj limmad profil för hyresvänligt montage. Högt från-pris.",
    imageUrl: "/products/insektsnat-skjutdorr-plisse.jpg",
  },

  {
    slug: "insektsnat-fonster",
    name: "Insektsnät fönster — Solskyddsshoppen",
    category: "ovrigt",
    mountType: "either",
    surfaces: [],
    priceFromSek: 1785,
    merchants: [
      {
        name: "Solskyddsshoppen",
        url: wrapAddrevenue(
          "solskyddsshoppen",
          "https://solskyddsshoppen.se/insektsnat-fonster/",
        ),
      },
    ],
    notes:
      "Monteras utvändigt; fästen ingår. Butiken skriver att krångliga verktyg inte behövs, men montering i karm/foder med skenor är vanligt — osäkert som rent no-drill. Kolla med värden innan.",
    imageUrl: "/products/insektsnat-fonster.jpg",
  },

  {
    slug: "amz-virea-vaggkrokar-8kg-latt",
    name: "Virea väggkrokar 8 kg — lätt",
    category: "fasten",
    mountType: "no-drill",
    surfaces: [],
    weightKg: 8,
    priceFromSek: 154,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B0845T2XHN") }],
    notes: "Självhäftande väggkrokar utan borr. Ren och torr yta. Följ maxvikt.",
    noteKey: "kontrakt",
    imageUrl: "/products/amz-virea-vaggkrokar-8kg-latt.jpg",
  },

  {
    slug: "amz-virea-vaggkrokar-8kg-tung",
    name: "Virea väggkrokar 8 kg — tung",
    category: "fasten",
    mountType: "no-drill",
    surfaces: [],
    weightKg: 8,
    priceFromSek: 153,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B084655CX1") }],
    notes: "För tyngre saker utan borr. Ta bort enligt tillverkaren vid flytt.",
    noteKey: "kontrakt",
    imageUrl: "/products/amz-virea-vaggkrokar-8kg-tung.jpg",
  },

  {
    slug: "amz-designfabrik-kokskrokar",
    name: "Designfabrik Hamburg — självhäftande kökskrokar",
    category: "fasten",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 292,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B08K7H23G9") }],
    notes: "Självhäftande krokar för kök och släta ytor. Ingen borr.",
    noteKey: "kontrakt",
    imageUrl: "/products/amz-designfabrik-kokskrokar.jpg",
  },

  {
    slug: "amz-ricoo",
    name: "Ricoo badrumskrokar — självhäftande",
    category: "fasten",
    mountType: "no-drill",
    surfaces: ["kakel", "släta ytor"],
    priceFromSek: 205,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B0CC9W1ZRW") }],
    notes: "Självhäftande krokar för kakel och släta ytor. Ingen borr.",
    noteKey: "kontrakt",
    imageUrl: "/products/amz-ricoo.jpg",
  },

  {
    slug: "base-enkelkrok-mattsvart",
    name: "Base - Enkelkrok - Mattsvart",
    category: "fasten",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 73,
    merchants: [
      {
        name: "Kök&Bad",
        url: wrapAddrevenue(
          "kokochbad",
          "https://kokochbad.se/produkt/base-enkelkrok-mattsvart",
        ),
      },
    ],
    notes: "Självhäftande enkelkrok utan borrning. Ren och torr yta.",
    noteKey: "kontrakt",
    imageUrl: "/products/base-enkelkrok-mattsvart.jpg",
  },

  {
    slug: "base-210-3-krok-borstad-rostfritt",
    name: "Base 210 - 3 Krok - Borstad rostfritt",
    category: "fasten",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 221,
    merchants: [
      {
        name: "Kök&Bad",
        url: wrapAddrevenue(
          "kokochbad",
          "https://kokochbad.se/produkt/base-210-3-krok-borstad-rostfritt",
        ),
      },
    ],
    notes: "Självhäftande trekrok utan borrning. Följ maxvikt.",
    noteKey: "kontrakt",
    imageUrl: "/products/base-210-3-krok-borstad-rostfritt.jpg",
  },

  {
    slug: "hylla-no-drill",
    name: "Vägghylla — Toski självhäftande",
    category: "forvaring",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 299,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/Toski-V%C3%A4gghylla-upps%C3%A4ttning-sj%C3%A4lvh%C3%A4ftande-vardagsrum/dp/B0BYJZPSYK") }],
    notes: "Självhäftande hylla. Kolla maxvikt och yta.",
    noteKey: "hylla",
    imageUrl: "/products/hylla-no-drill.jpg",
  },

  {
    slug: "spannstang-dorr",
    name: "Spännstång — dörr/nisch",
    category: "forvaring",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 322,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B0F2MQF6QN") }],
    notes: "Trycks i nisch eller dörröppning.",
    noteKey: "hylla",
    imageUrl: "/products/spannstang-dorr.jpg",
  },

  {
    slug: "amz-weissenstein-badrumshylla",
    name: "Weissenstein badrumshylla",
    category: "forvaring",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 318,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B075F4PMPN") }],
    notes: "Badrumshylla utan borr. Kolla maxvikt och yta.",
    noteKey: "hylla",
    imageUrl: "/products/amz-weissenstein-badrumshylla.jpg",
  },

  {
    slug: "amz-xclou-blomladahallare",
    name: "Xclou blomlådehållare",
    category: "forvaring",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 102,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B003D1NM5I") }],
    notes: "Kläms på balkongräcke. Ingen skruv i räcket.",
    noteKey: "kontrakt",
    imageUrl: "/products/amz-xclou-blomladahallare.jpg",
  },

  {
    slug: "amz-comfour",
    name: "Comfour blomlådehållare — 4-pack",
    category: "forvaring",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 250,
    priceNote: "4-pack",
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B07TF74WM1") }],
    notes: "Hållare för blomlåda på räcke. Kolla räckets tjocklek.",
    noteKey: "kontrakt",
    imageUrl: "/products/amz-comfour.jpg",
  },

  {
    slug: "amz-anhhow-diskstall",
    name: "Anhow diskställ",
    category: "forvaring",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 190,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B0CBPQF6SP") }],
    notes: "Står på bänken. Ingen montering.",
    imageUrl: "/products/amz-anhhow-diskstall.jpg",
  },

  {
    slug: "base-kroklist-med-hylla-mattsvart",
    name: "Base - Kroklist med hylla - Mattsvart",
    category: "forvaring",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 524,
    merchants: [
      {
        name: "Kök&Bad",
        url: wrapAddrevenue(
          "kokochbad",
          "https://kokochbad.se/produkt/base-kroklist-med-hylla-mattsvart",
        ),
      },
    ],
    notes: "Självhäftande kroklist med hylla. Ingen borr — kolla maxvikt och yta.",
    noteKey: "hylla",
    imageUrl: "/products/base-kroklist-med-hylla-mattsvart.jpg",
  },

  {
    slug: "base-toalettpappershallare-med-hylla-borstad-rostfritt",
    name: "Base - Toalettpappershållare med hylla - Borstad rostfritt",
    category: "forvaring",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 450,
    merchants: [
      {
        name: "Kök&Bad",
        url: wrapAddrevenue(
          "kokochbad",
          "https://kokochbad.se/produkt/base-toalettpappershallare-med-hylla-borstad-rostfritt",
        ),
      },
    ],
    notes: "Självhäftande toalettpappershållare med hylla. Ingen borr.",
    noteKey: "hylla",
    imageUrl: "/products/base-toalettpappershallare-med-hylla-borstad-rostfritt.jpg",
  },

  {
    slug: "boelle-alva-kladhangare-vitlaserad",
    name: "Alva Klädhängare — Vitlaserad/Stål",
    category: "forvaring",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 1499,
    merchants: [
      {
        name: "Boelle.se",
        url: wrapAddrevenue(
          "boelle",
          "https://boelle.se/products/venture-home-alva-clothing-hanger-whitewash-steel",
        ),
      },
    ],
    notes: "Fristående klädhängare, golvplacerad, ingen väggmontage.",
    noteKey: "hylla",
    imageUrl: "/products/boelle-alva-kladhangare-vitlaserad.jpg",
  },

  {
    slug: "boelle-quito-kladhangare-svart",
    name: "Quito Klädhängare — Svart/Svart",
    category: "forvaring",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 1750,
    merchants: [
      {
        name: "Boelle.se",
        url: wrapAddrevenue(
          "boelle",
          "https://boelle.se/products/venture-home-quito-clothing-hanger-black-black",
        ),
      },
    ],
    notes: "Fristående med låda/fack, ingen väggmontage.",
    noteKey: "hylla",
    imageUrl: "/products/boelle-quito-kladhangare-svart.jpg",
  },

  {
    slug: "boelle-manaus-hylla-svart",
    name: "Manaus hylla — Svart",
    category: "forvaring",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 616,
    merchants: [
      {
        name: "Boelle.se",
        url: wrapAddrevenue(
          "boelle",
          "https://boelle.se/products/venture-home-manaus-drawer-black",
        ),
      },
    ],
    notes: "Fristående förvaringshylla med lådor och hjul. Ingen väggmontage.",
    noteKey: "hylla",
    imageUrl: "/products/boelle-manaus-hylla-svart.jpg",
  },

  {
    slug: "amz-hit-ledslinga-96",
    name: "HIT LEDslinga 96",
    category: "belysning",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 169,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B00OG8YRBA") }],
    notes: "LED-slinga på sladd. Ingen elinstallation.",
    imageUrl: "/products/amz-hit-ledslinga-96.jpg",
  },

  {
    slug: "amz-grenuttag",
    name: "Grenuttag kabelbox 5-väg USB",
    category: "belysning",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 500,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B09SG1FS8S") }],
    notes: "Grenuttag med USB. Summera watt. Ingen ny elpunkt.",
    imageUrl: "/products/amz-grenuttag.jpg",
  },

  {
    slug: "amz-led-dimmer-sladd",
    name: "LED-dimmer sladd",
    category: "belysning",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 178,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B0FQBSY2FR") }],
    notes: "Dimmer i sladden. Inte i väggdosan.",
    imageUrl: "/products/amz-led-dimmer-sladd.jpg",
  },

  {
    slug: "amz-skyleo-skrivbordslampa-klam",
    name: "SKYLEO skrivbordslampa med kläm",
    category: "belysning",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 399,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B0D1DMNXJD") }],
    notes: "Kläms på hyll- eller bordskant. Ingen borr.",
    imageUrl: "/products/amz-skyleo-skrivbordslampa-klam.jpg",
  },

  {
    slug: "boelle-umea-golvlampa-gra-linne",
    name: "Umeå golvlampa — grå linne",
    category: "belysning",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 1899,
    merchants: [
      {
        name: "Boelle.se",
        url: wrapAddrevenue(
          "boelle",
          "https://boelle.se/products/vind-umea-x-josefin-lustig-floor-lamp-grey-grey-linen-fabric",
        ),
      },
    ],
    notes: "Fristående golvlampa. Står på golvet — ingen takdosa eller väggmontage.",
    imageUrl: "/products/boelle-umea-golvlampa-gra-linne.jpg",
  },

  {
    slug: "ljus-butiken-oslo-portabel-bordslampa-vit",
    name: "Oslo portabel bordslampa — vit 38 cm",
    category: "belysning",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 890,
    merchants: [
      {
        name: "Ljus-butiken.se",
        url: wrapAddrevenue(
          "ljusButiken",
          "https://ljus-butiken.se/products/portabel-bordslampa-oslo-vit",
        ),
      },
    ],
    notes:
      "Uppladdningsbar bordslampa (USB-C), touchdimmer, 6–10 timmars batteritid. IP20 — inomhus eller skyddad utomhus. Ingen montering.",
    imageUrl: "/products/ljus-butiken-oslo-portabel-bordslampa-vit.jpg",
  },

  {
    slug: "ljus-butiken-porto-portabel-bordslampa-gron",
    name: "Porto portabel bordslampa — grön 24 cm",
    category: "belysning",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 720,
    merchants: [
      {
        name: "Ljus-butiken.se",
        url: wrapAddrevenue(
          "ljusButiken",
          "https://ljus-butiken.se/products/portabel-bordslampa-porto-gron",
        ),
      },
    ],
    notes:
      "Dimbar batteridriven lampa med handtag och USB-C, 6–10 timmars batteritid. IP20. Ställs på bord — ingen montering.",
    imageUrl: "/products/ljus-butiken-porto-portabel-bordslampa-gron.jpg",
  },

  {
    slug: "flowerbud-portabel-bordslampa-gul",
    name: "Flowerbud portabel bordslampa Gul 30 cm",
    category: "belysning",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 795,
    compareAtPriceSek: 1295,
    merchants: [
      {
        name: "Ljus-butiken.se",
        url: wrapAddrevenue(
          "ljusButiken",
          "https://ljus-butiken.se/products/portabel-bordslampa-flowerbud-gul",
        ),
      },
    ],
    notes:
      "Uppladdningsbar bordslampa (USB) med dimbart ljus, ca 30 cm. Ställs på bord — ingen montering.",
    imageUrl: "/products/flowerbud-portabel-bordslampa-gul.jpg",
  },

  {
    slug: "iron-portabel-bordslampa-krom",
    name: "Iron portabel bordslampa Krom 28 cm",
    category: "belysning",
    mountType: "no-drill",
    surfaces: [],
    priceFromSek: 570,
    compareAtPriceSek: 720,
    merchants: [
      {
        name: "Ljus-butiken.se",
        url: wrapAddrevenue(
          "ljusButiken",
          "https://ljus-butiken.se/products/portabel-bordslampa-iron-krom",
        ),
      },
    ],
    notes:
      "Uppladdningsbar bordslampa i krom med dimbart ljus, ca 28 cm. Ställs på bord — ingen montering.",
    imageUrl: "/products/iron-portabel-bordslampa-krom.jpg",
  },

  {
    slug: "amz-lifesystems-forsta-hjalpen-kit",
    name: "Lifesystems första hjälpen-kit",
    category: "sakerhet",
    mountType: "either",
    surfaces: [],
    priceFromSek: 286,
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B0CJJW5MZ4") }],
    notes: "Ingen montering.",
    imageUrl: "/products/amz-lifesystems-forsta-hjalpen-kit.jpg",
  },

  {
    slug: "amz-aroha",
    name: "Aroha kombinerat rök- + CO-larm — 3-pack",
    category: "sakerhet",
    mountType: "either",
    surfaces: [],
    priceFromSek: 960,
    priceNote: "3-pack",
    merchants: [{ name: "Amazon.se", url: wrapAmazon("https://www.amazon.se/dp/B0D933ZP3F") }],
    notes: "Kombinerat rök- och kolmonoxidlarm, 3-pack. Batteri. Kolla om värden kräver fast montage.",
    noteKey: "kontrakt",
    imageUrl: "/products/amz-aroha.jpg",
  },
];
