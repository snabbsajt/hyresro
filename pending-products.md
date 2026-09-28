# Produktkö (ej live)

Denna fil är staging. Den deployas inte till sajten. Flytta till `src/data/products.ts` först när checklistan är grön.

## Publiceringschecklista

En produkt behöver följande innan den går live:

- Verifierad deeplink (produkt-URL)
- Namn
- Pris vi litar på (inte utgången kampanj som fast; hellre utelämna än gissa)
- Mount (no-drill / either / drill-ok) belagt i produkttext
- För Utvalda: spårad affiliatelänk (Addrevenue wrap med merchant-ID i `networks.ts`)

**Intakeformat Jonathan använder:** länk / namn / pris

## Registrerade merchants (Addrevenue)

- channel `c=3469712` (Hyresro)
- `ljusButiken` `a=986383` — live: Oslo, Porto, Flowerbud, Iron i `products.ts`
- `ljusgrossisten` `a=986665` — ingen produkt än (Sylvania struken)
- `kokochbad` `a=987907` — live: Base enkelkrok, Base 210, kroklist, toalettpappershållare
- `fonsterfilm` `a=986347` — live: frostad, randig, blommig fönsterfilm
- `boelle` `a=988151` — live: Alva klädhängare, Quito klädhängare

## Strukna / publicera inte

- **Sylvania Cabinet Sense Linear USB** (Ljusgrossisten): utgången, opålitligt pris, oklart fäste


## Publicerat 2026-09-28 (ej längre i kö)

- Kök&Bad Base (4): `base-enkelkrok-mattsvart`, `base-210-3-krok-borstad-rostfritt`, `base-kroklist-med-hylla-mattsvart`, `base-toalettpappershallare-med-hylla-borstad-rostfritt`
- Fönsterfilm.se (3): `frostad-fonsterfilm-insynsskydd-utan-lim`, `fonsterfilm-randigt-frostad-monster`, `fonsterfilm-vackert-blommigt-monster`
- Ljus-butiken (2): `flowerbud-portabel-bordslampa-gul`, `iron-portabel-bordslampa-krom` (ordinarie pris)
- Boelle.se (2): `boelle-alva-kladhangare-vitlaserad`, `boelle-quito-kladhangare-svart`

## Kö — väntar tracking

Alla produkter nedan kommer från Jonathans research och har `network: none`.

| Namn | Merchant | `product_url` | `price_sek` | `suggested_slug` | Status | Kort notering |
|---|---|---|---:|---|---|---|
| Magnetfäste för brandvarnare — Nexa MF-571 | Bauhaus | <https://www.bauhaus.se/magnetfaste-nexa> | 47 | `nexa-magnetfaste-brandvarnare` | väntar tracking | — |
| Filttassar självhäftande — Suki natur Ø35 mm (4 st) | Bauhaus | <https://www.bauhaus.se/filttassar-suki-sjalvhaftande-natur-o35> | 39.95 | `suki-filttassar-sjalvhaftande-o35` | väntar tracking | — |
| Dörrhängare för dörrblad upp till 43 mm — grå/trä | Clas Ohlson | <https://www.clasohlson.com/se/Dorrhangare-for-dorrblad-upp-till-43-mm%2C-gra-tra/p/40-8547-4> | 109.9 | `clas-ohlson-dorrhangare-gra-tra` | väntar tracking | Kampanjnotering i research — omverifiera pris innan live. |
| Klädkrok för dörrblad 4 krokar — Millers krom | Bauhaus | <https://www.bauhaus.se/kladkrok-millers-4-krokar-for-dorrblad-krom> | 249 | `millers-kladkrok-dorr-4-krokar-krom` | väntar tracking | — |
| Command självhäftande dubbelkrok large — svart | Clas Ohlson | <https://www.clasohlson.com/se/Command-sjalvhaftande-krok-dubbel%2C-large/p/41-4258> | 129 | `command-dubbelkrok-large-svart` | väntar tracking | — |
| Command självhäftande krokar small, 4-pack | Clas Ohlson | <https://www.clasohlson.com/se/p/41-4275> | 99.9 | `command-krokar-small-4-pack` | väntar tracking | — |
| Command självhäftande krok badrum large | Clas Ohlson | <https://www.clasohlson.com/se/Command-sjalvhaftande-krok-badrum,-large/p/36-9539> | 169.9 | `command-krok-badrum-large` | väntar tracking | — |
| D-C-FIX solskyddsfilm statisk inomhus, 90 cm x 2 m | Clas Ohlson | <https://www.clasohlson.com/se/D-C-FIX-solskyddsfilm-statisk-inomhus,-90-cm-x-2-m/p/41-8192-1> | 449 | `dcfix-solskyddsfilm-statisk-90x200` | väntar tracking | Annan än live `fonsterfilm-dcfix` (41-8176-1, självhäftande 92×200). |
| Brandfilt 120x120 cm — Nexa FBS-120 röd | Bauhaus | <https://www.bauhaus.se/brandfilt-nexa-fbs-120-120x120cm-rod> | 199 | `nexa-brandfilt-fbs-120-rod` | väntar tracking | — |

## Kö — väntar bra Ljusgrossisten-produkt

Merchant är registrerad. Behöver länk / namn / pris samt belagt fäste. Ingen Sylvania.
