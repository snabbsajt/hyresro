import type { MountType, Product } from "./types";

export const products: Product[] = [
  {
    slug: "rullgardin-klamfaste",
    name: "Rullgardin med klämfäste",
    category: "solskydd",
    mountType: "no-drill",
    surfaces: ["fönsterbåge", "trä", "PVC"],
    priceFromSek: 149,
    merchants: [
      { name: "IKEA", url: "https://www.ikea.com/se/sv/cat/rullgardiner-10656/" },
      { name: "Jysk", url: "https://jysk.se/gardiner-solskydd/rullgardiner" },
    ],
    notes:
      "Klämfäste utan borr. Passar de flesta fönsterbågar. Mät bredd och höjd innan köp.",
  },
  {
    slug: "morklaggningsrullgardin",
    name: "Mörkläggningsrullgardin",
    category: "solskydd",
    mountType: "either",
    surfaces: ["fönsterbåge", "vägg"],
    priceFromSek: 199,
    merchants: [
      { name: "IKEA", url: "https://www.ikea.com/se/sv/cat/rullgardiner-10656/" },
      { name: "Amazon.se", url: "https://www.amazon.se/s?k=m%C3%B6rkl%C3%A4ggningsrullgardin" },
    ],
    notes:
      "Blockerar ljus. Finns med klämfäste eller skruv. Välj efter kontrakt och vägg.",
  },
  {
    slug: "tesa-skruv-latt",
    name: "Tesa Powerbond lätt",
    category: "fasten",
    mountType: "no-drill",
    surfaces: ["kakel", "glas", "metall", "målad vägg"],
    weightKg: 1,
    priceFromSek: 79,
    merchants: [
      {
        name: "Clas Ohlson",
        url: "https://www.clasohlson.com/se/search/?query=tesa+powerbond",
      },
      { name: "Biltema", url: "https://www.biltema.se/sok/?query=tesa" },
    ],
    notes:
      "Självhäftande skruv för lätta föremål. Ytan ska vara ren och torr. Följ maxvikten.",
  },
  {
    slug: "tesa-skruv-tung",
    name: "Tesa Powerbond tung",
    category: "fasten",
    mountType: "no-drill",
    surfaces: ["kakel", "glas", "metall", "målad vägg"],
    weightKg: 5,
    priceFromSek: 99,
    merchants: [
      {
        name: "Clas Ohlson",
        url: "https://www.clasohlson.com/se/search/?query=tesa+powerbond",
      },
      { name: "Amazon.se", url: "https://www.amazon.se/s?k=tesa+powerbond" },
    ],
    notes:
      "För tyngre grejer utan borr. Kontrollera underlaget. Ta bort enligt tillverkarens instruktion vid flytt.",
  },
  {
    slug: "hylla-no-drill",
    name: "Hylla utan borr",
    category: "forvaring",
    mountType: "no-drill",
    surfaces: ["kakel", "målad vägg"],
    weightKg: 3,
    priceFromSek: 179,
    merchants: [
      { name: "IKEA", url: "https://www.ikea.com/se/sv/cat/hyllor-10451/" },
      { name: "Jysk", url: "https://jysk.se/forvaring/hyllor" },
      {
        name: "Clas Ohlson",
        url: "https://www.clasohlson.com/se/search/?query=hylla+sj%C3%A4lvh%C3%A4ftande",
      },
    ],
    notes:
      "Självhäftande eller klämhylla. Bra i badrum och kök. Kolla maxvikt och yta.",
    noteKey: "kontrakt",
    legalNote: "Kolla ditt kontrakt innan ni sätter upp något på vägg.",
  },
  {
    slug: "ljusslinga-sladd",
    name: "Ljusslinga med sladd",
    category: "belysning",
    mountType: "no-drill",
    surfaces: ["vägg", "taklist", "möbler"],
    priceFromSek: 89,
    merchants: [
      { name: "IKEA", url: "https://www.ikea.com/se/sv/cat/belysning-li001/" },
      { name: "Amazon.se", url: "https://www.amazon.se/s?k=ljusslinga" },
      { name: "Jysk", url: "https://jysk.se/belysning" },
    ],
    notes:
      "Häng med krokar eller tejp — ingen elinstallation. Välj inomhusmodell med CE-märkning.",
  },
  {
    slug: "brandfilt",
    name: "Brandfilt",
    category: "sakerhet",
    mountType: "either",
    surfaces: ["vägg", "skåp"],
    priceFromSek: 129,
    merchants: [
      {
        name: "Clas Ohlson",
        url: "https://www.clasohlson.com/se/search/?query=brandfilt",
      },
      { name: "Biltema", url: "https://www.biltema.se/sok/?query=brandfilt" },
      { name: "IKEA", url: "https://www.ikea.com/se/sv/search/?q=brandfilt" },
    ],
    notes:
      "Bra att ha i kök. Kan hängas med självhäftande krok eller ligga i skåp. Kräver ingen borr.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByMount(mountType: MountType): Product[] {
  return products.filter(
    (p) => p.mountType === mountType || p.mountType === "either",
  );
}
