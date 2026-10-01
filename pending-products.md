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
- `boelle` `a=988151` — live: Alva, Quito, Umeå golvlampa, Manaus hylla
- `solskyddsshoppen` `a=985467` — live: Plisségardin Flex, Flex Dubbel, insektsnät skjutdörr plissé, insektsnät fönster (c=3469712)
- `northmans` `a=984457` — live: Blomus dörrstopp, Beam×2, Spirit S, Light To Go, Arc solcell (c=3469712)


## Publicerat 2026-10-01 — Northmans (Addrevenue a=984457)

Live i `products.ts` (Jonathan bekräftade i lager; priser från pending). Tracking: Addrevenue `a=984457` `c=3469712`.

| slug | price_sek | mount | category | notes |
|---|---:|---|---|---|
| `dorrstopp-stop-blomus-stal-1-kg` | 749 | no-drill | ovrigt | fristående, 1 kg |
| `portabel-led-lampa-beam-svart-kreafunk` | 449 | no-drill | belysning | — |
| `portabel-led-lampa-beam-dusty-olive-kreafunk` | 449 | no-drill | belysning | — |
| `portabel-led-lampa-spirit-s-moonbeam-blomus` | 599 | no-drill | belysning | — |
| `portabel-bordslampa-light-to-go-vit-koziol` | 879 | no-drill | belysning | — |
| `portabel-led-lampa-arc-solcell-svart-kreafunk` | 999 | no-drill | belysning | solcell/USB-C |

Rejected / SKIP: Ponto krokar / UMAGE Lean On Me — `out_of_niche`, publicera inte.


## Publicerat 2026-09-29 — Solskyddsshoppen (Addrevenue a=985467)

Live i `products.ts` (no-drill / either med ärlig notering):

| slug | price_sek | mount | notes |
|---|---:|---|---|
| `plissegardin-flex` | 795 | no-drill | självhäftande fäste +199 kr; lim max ~2 m² |
| `plissegardin-flex-dubbel` | 995 | no-drill | samma lim-notering |
| `insektsnat-skjutdorr-plisse` | 4490 | either | limmad bottenprofil vs skruvad hög profil |
| `insektsnat-fonster` | 1785 | either | utvändigt; verktyg/skenor osäkra — ärlig copy |

### Drill-ok deferred (publicera inte)

Montage med skruv/borra — ligger kvar i kö tills vidare. Ignorera redan rejected markiser.

| suggested_slug | product_url | status | notes |
|---|---|---|---|
| `rullgardin-modern` | <https://solskyddsshoppen.se/rullgardin-modern/> | deferred drill-ok | — |
| `rullgardin-classic` | <https://solskyddsshoppen.se/rullgardin-classic/> | deferred drill-ok | — |
| `rullgardin-premium` | <https://solskyddsshoppen.se/rullgardin-premium/> | deferred drill-ok | — |
| `persienn-bambu-50mm` | <https://solskyddsshoppen.se/persienn-bambu-50mm/> | deferred drill-ok | — |

## Strukna / publicera inte

- **Sylvania Cabinet Sense Linear USB** (Ljusgrossisten): utgången, opålitligt pris, oklart fäste


## Publicerat 2026-09-28 (ej längre i kö)

- Kök&Bad Base (4): `base-enkelkrok-mattsvart`, `base-210-3-krok-borstad-rostfritt`, `base-kroklist-med-hylla-mattsvart`, `base-toalettpappershallare-med-hylla-borstad-rostfritt`
- Fönsterfilm.se (3): `frostad-fonsterfilm-insynsskydd-utan-lim`, `fonsterfilm-randigt-frostad-monster`, `fonsterfilm-vackert-blommigt-monster`
- Ljus-butiken (2): `flowerbud-portabel-bordslampa-gul`, `iron-portabel-bordslampa-krom` (ordinarie pris)
- Boelle.se (4): `boelle-alva-kladhangare-vitlaserad`, `boelle-quito-kladhangare-svart`, `boelle-umea-golvlampa-gra-linne`, `boelle-manaus-hylla-svart`

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
| D-C-FIX solskyddsfilm statisk inomhus, 90 cm x 2 m | Clas Ohlson | <https://www.clasohlson.com/se/D-C-FIX-solskyddsfilm-statisk-inomhus,-90-cm-x-2-m/p/41-8192-1> | 449 | `dcfix-solskyddsfilm-statisk-90x200` | väntar tracking | Live `fonsterfilm-dcfix` borttagen 2026-09-29 (ingen spårning). |
| Brandfilt 120x120 cm — Nexa FBS-120 röd | Bauhaus | <https://www.bauhaus.se/brandfilt-nexa-fbs-120-120x120cm-rod> | 199 | `nexa-brandfilt-fbs-120-rod` | väntar tracking | — |

## Kö — väntar bra Ljusgrossisten-produkt

Merchant är registrerad. Behöver länk / namn / pris samt belagt fäste. Ingen Sylvania.

## Kö — Amazon.se substitutes

Staginghistorik. Publicerade 2026-09-29 till `src/data/products.ts` med tag `hyresro-21` (`wrapAmazon`). Priser från Jonathan (heltal SEK).

### Publicerade (17)

| suggested_slug | ASIN | price_sek | replaces (borttagen live) | status | notes |
|---|---|---:|---|---|---|
| `amz-virea-vaggkrokar-8kg-latt` | B0845T2XHN | 154 | `tesa-skruv-latt` | published | 153,63 → 154 |
| `amz-virea-vaggkrokar-8kg-tung` | B084655CX1 | 153 | `tesa-skruv-tung` | published | 153,39 → 153 |
| `amz-weissenstein-badrumshylla` | B075F4PMPN | 318 | `toaletthylla-staende` | published | — |
| `amz-xclou-blomladahallare` | B003D1NM5I | 102 | `blomlada-racke-co` | published | — |
| `amz-hit-ledslinga-96` | B00OG8YRBA | 169 | `ljusslinga-sladd` | published | — |
| `amz-meisenberg-teleskopstang` | B09D41HLJH | 512 | `golvlampa-didrik` (borttagen, ej 1:1) | published | **Ny** solskydd/gardinprodukt — MEISENBERG teleskopstång. Didrik-golvlampa borttagen utan att hävda samma produkt. |
| `amz-grenuttag` | B09SG1FS8S | 500 | `grenuttag-5vag` | published | — |
| `amz-lifesystems-forsta-hjalpen-kit` | B0CJJW5MZ4 | 286 | `forsta-hjalpen` | published | ASIN bytt från B000T9LRUY → B0CJJW5MZ4 |
| `amz-gardinia` | B0989VT1D8 | 162 | `morklaggning-klam` | published | — |
| `amz-vounot-duo` | B08VWKXDW2 | 280 | `rullgardin-klamfaste` | published | — |
| `amz-comfour` | B07TF74WM1 | 250 | `blomlada-racke-cdon` | published | — |
| `amz-designfabrik-kokskrokar` | B08K7H23G9 | 292 | `tesa-skruv-jula` | published | Designfabrik Hamburg självhäftande kökskrokar (ersatte tidigare Wangel-kandidat) |
| `amz-led-dimmer-sladd` | B0FQBSY2FR | 178 | `dimmer-sladd` | published | ASIN bytt från B07TYKST53 → B0FQBSY2FR |
| `amz-aroha` | B0D933ZP3F | 960 | `kolmonoxidlarm` | published | Kombinerat rök+CO, 3-pack — namngivet tydligt |
| `amz-skyleo-skrivbordslampa-klam` | B0D1DMNXJD | 399 | `klamlampa-flex` | published | SKYLEO (ersatte tidigare B07WPT6HYC-kandidat) |
| `amz-ricoo` | B0CC9W1ZRW | 205 | `tesa-krok-kakel` | published | — |
| `amz-anhhow-diskstall` | B0CBPQF6SP | 190 | `diskstall-kvot` | published | Anhow (ersatte tidigare mDesign-kandidat) |

### Rejected / skipped (ej publicerade)

| suggested_slug / live | status | notes |
|---|---|---|
| `amz-command-tavelkrokar-transparenta` / `command-tavel` | rejected | 1 nej — ta bort live, lägg inte till Amazon |
| `amz-vagghylla-badcaddie-sjalvhaftande` / `plissegardin-hven` | skipped | hitta ej; mismatch (hylla vs plissé). Live Hven borttagen |
| `amz-housegard-brandfilt-120x180` / `brandfilt` | skipped | fanns ej; behöver no-screw. Live brandfilt borttagen. Ingen Amazon-brandfilt |
| `amz-heiman-brandvarnare-10ar` / `brandvarnare-luma` | skipped | ej tillgänglig + borr-osäkerhet. Live Luma borttagen. Ingen Amazon HEIMAN |
| `fonsterfilm-dcfix` | removed | Ingen Amazon-substitut. D-C-FIX borttagen helt |

### Ej längre saknad ersättning

Live D-C-FIX (`fonsterfilm-dcfix`) togs bort utan ersättning enligt Jonathan.
