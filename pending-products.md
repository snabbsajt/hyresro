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
| D-C-FIX solskyddsfilm statisk inomhus, 90 cm x 2 m | Clas Ohlson | <https://www.clasohlson.com/se/D-C-FIX-solskyddsfilm-statisk-inomhus,-90-cm-x-2-m/p/41-8192-1> | 449 | `dcfix-solskyddsfilm-statisk-90x200` | väntar tracking | Annan än live `fonsterfilm-dcfix` (41-8176-1, självhäftande 92×200). |
| Brandfilt 120x120 cm — Nexa FBS-120 röd | Bauhaus | <https://www.bauhaus.se/brandfilt-nexa-fbs-120-120x120cm-rod> | 199 | `nexa-brandfilt-fbs-120-rod` | väntar tracking | — |

## Kö — väntar bra Ljusgrossisten-produkt

Merchant är registrerad. Behöver länk / namn / pris samt belagt fäste. Ingen Sylvania.

## Kö — Amazon.se substitutes (needs_manual_check)

Staging only. **Inte** tillagda i `src/data/products.ts`. Nätverk: Amazon Associates SE, tag `hyresro-21` (`wrapAmazon` i `networks.ts`). Alla `price_sek: null` — pris måste kollas manuellt innan publicering.

Omfång: 21 kandidater mot live otrackade produkter. Bland 22 otrackade som Claude mapade saknas Amazon-ersättning för **`fonsterfilm-dcfix`** (D-C-FIX självhäftande 92×200, Clas Ohlson) — ingen kandidat i listan.

### Mismatch-flaggor (verifiera innan live)

- **`amz-meisenberg-teleskopstang` → `golvlampa-didrik`**: live-slug `golvlampa-didrik` är **Golvlampa — Didrik** (kategori `belysning`, står på golvet). Kandidaten är en teleskop-/gardinstång (`solskydd`). Fel mapping — överväg t.ex. `gardinstang-spann` (GARDINIA spännstång) i stället, eller hitta rätt live-mål.
- **`amz-vagghylla-badcaddie-sjalvhaftande` → `plissegardin-hven`**: live-slug `plissegardin-hven` är **Plisségardin — Hven** (`solskydd`), inte hylla/badrumscaddie (`forvaring`). Fel mapping.
- **`amz-aroha-rok-co-larm-kombinerat` → `kolmonoxidlarm`**: kandidaten är **kombinerat rök+CO-larm, 3-pack** — inte rent kolmonoxidlarm. Ersätter inte 1:1; notera skillnad i produkttyp och packstorlek.

### Kandidater

| suggested_slug | name | category | mount | product_url | replaces | price_sek | status | notes |
|---|---|---|---|---|---|---:|---|---|
| `amz-command-tavelkrokar-transparenta` | Command tavelkrokar — transparenta | fasten | no-drill | https://www.amazon.se/dp/B0C64WVMPD | `command-tavel` | null | needs_manual_check | price_note: needs manual check. Ersätter live Tavelupphängning Command 5 kg. |
| `amz-virea-vaggkrokar-8kg-latt` | Virea väggkrokar 8 kg — lätt | fasten | no-drill | https://www.amazon.se/dp/B0845T2XHN | `tesa-skruv-latt` | null | needs_manual_check | price_note: needs manual check. |
| `amz-virea-vaggkrokar-8kg-tung` | Virea väggkrokar 8 kg — tung | fasten | no-drill | https://www.amazon.se/dp/B084655CX1 | `tesa-skruv-tung` | null | needs_manual_check | price_note: needs manual check. |
| `amz-weissenstein-badrumshylla` | Weissenstein badrumshylla | forvaring | no-drill | https://www.amazon.se/dp/B075F4PMPN | `toaletthylla-staende` | null | needs_manual_check | price_note: needs manual check. |
| `amz-xclou-blomladahallare` | Xclou blomlådehållare | ovrigt | no-drill | https://www.amazon.se/dp/B003D1NM5I | `blomlada-racke-co` | null | needs_manual_check | price_note: needs manual check. Live kategori `forvaring`; kandidat listad som `ovrigt`. |
| `amz-hit-ledslinga-96` | HIT LEDslinga 96 | belysning | no-drill | https://www.amazon.se/dp/B00OG8YRBA | `ljusslinga-sladd` | null | needs_manual_check | price_note: needs manual check. |
| `amz-meisenberg-teleskopstang` | Meisenberg teleskopstång | solskydd | no-drill | https://www.amazon.se/dp/B09D41HLJH | `golvlampa-didrik` | null | needs_manual_check | **MISMATCH:** live `golvlampa-didrik` = golvlampa (belysning), inte gardinstång. price_note: needs manual check. |
| `amz-grenuttag-kabelbox-5vag-usb` | Grenuttag kabelbox 5-väg USB | ovrigt | no-drill | https://www.amazon.se/dp/B09SG1FS8S | `grenuttag-5vag` | null | needs_manual_check | price_note: needs manual check. Live kategori `belysning`; kandidat `ovrigt`. |
| `amz-lifesystems-forsta-hjalpen-kit` | Lifesystems första hjälpen-kit | sakerhet | either | https://www.amazon.se/dp/B000T9LRUY | `forsta-hjalpen` | null | needs_manual_check | price_note: needs manual check. |
| `amz-gardinia-sjalvhaftande-gardinhallare` | Gardinia självhäftande gardinhållare | solskydd | no-drill | https://www.amazon.se/dp/B0989VT1D8 | `morklaggning-klam` | null | needs_manual_check | price_note: needs manual check. Live är Bolga rullgardin (JYSK); kandidat är självhäftande hållare — typ skiljer sig. |
| `amz-vagghylla-badcaddie-sjalvhaftande` | Vägghylla / badcaddie — självhäftande | forvaring | no-drill | https://www.amazon.se/dp/B08JQ9QW6X | `plissegardin-hven` | null | needs_manual_check | **MISMATCH:** live `plissegardin-hven` = plisségardin (solskydd), inte hylla. price_note: needs manual check. |
| `amz-vounot-duo-rullgardin-klamfaste` | Vounot duo-rullgardin med klämfäste | solskydd | no-drill | https://www.amazon.se/dp/B08VWKXDW2 | `rullgardin-klamfaste` | null | needs_manual_check | price_note: needs manual check. |
| `amz-comfour-blomladahallare-4pack` | Comfour blomlådehållare 4-pack | ovrigt | no-drill | https://www.amazon.se/dp/B07TF74WM1 | `blomlada-racke-cdon` | null | needs_manual_check | price_note: needs manual check. Live kategori `forvaring`; kandidat `ovrigt`. |
| `amz-wangel-sjalvhaftande-krok-10kg` | Wangel självhäftande krok 10 kg | fasten | no-drill | https://www.amazon.se/dp/B07BSZBVLH | `tesa-skruv-jula` | null | needs_manual_check | price_note: needs manual check. |
| `amz-housegard-brandfilt-120x180` | Housegard brandfilt 120×180 | sakerhet | either | https://www.amazon.se/dp/B08FY4FZDS | `brandfilt` | null | needs_manual_check | price_note: needs manual check. Storlek 120×180 vs live Jula-filt (ofta 120×120) — verifiera. |
| `amz-led-dimmer-sladd-1-60w` | LED-dimmer sladd 1–60 W | belysning | no-drill | https://www.amazon.se/dp/B07TYKST53 | `dimmer-sladd` | null | needs_manual_check | price_note: needs manual check. URL normaliserad från `arcus-www.amazon.se` → `www.amazon.se`. |
| `amz-heiman-brandvarnare-10ar` | Heiman brandvarnare 10 år | sakerhet | either | https://www.amazon.se/dp/B07NRZ3W44 | `brandvarnare-luma` | null | needs_manual_check | price_note: needs manual check. Live är Housegard Luma 2-pack. |
| `amz-aroha-rok-co-larm-kombinerat` | Aroha rök- + CO-larm kombinerat (3-pack) | sakerhet | either | https://www.amazon.se/dp/B0D933ZP3F | `kolmonoxidlarm` | null | needs_manual_check | **Ej rent CO:** kombinerat rök+CO, 3-pack — ersätter inte 1:1 rent kolmonoxidlarm. price_note: needs manual check. |
| `amz-klamlampa-skrivbord-led` | Klämlampa skrivbord LED | belysning | no-drill | https://www.amazon.se/dp/B07WPT6HYC | `klamlampa-flex` | null | needs_manual_check | price_note: needs manual check. |
| `amz-ricoo-badrumskrokar-sjalvhaftande` | Ricoo badrumskrokar — självhäftande | fasten | no-drill | https://www.amazon.se/dp/B0CC9W1ZRW | `tesa-krok-kakel` | null | needs_manual_check | price_note: needs manual check. |
| `amz-mdesign-disktork-rostfritt` | mDesign disktork — rostfritt | ovrigt | no-drill | https://www.amazon.se/dp/B01MTCU3AM | `diskstall-kvot` | null | needs_manual_check | price_note: needs manual check. Live kategori `forvaring`; kandidat `ovrigt`. |

### Saknad ersättning (bland 22 otrackade)

| live slug | name | notes |
|---|---|---|
| `fonsterfilm-dcfix` | D-C-FIX solskyddsfilm — självhäftande 92×200 cm | Ingen Amazon-substitut i Claudes lista. Behöver egen kandidat eller behåll Clas Ohlson. |
