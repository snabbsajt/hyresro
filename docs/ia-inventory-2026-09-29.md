# IA-inventering Hyresro — 2026-09-29

**Scope:** Endast inventering och IA-förslag. Ingen UI-ändring, inget git-commit.  
**Källa:** `src/data/products.ts` (live), `src/data/guides.ts`, `src/components/nav.ts`, startsidans `problemCards`.  
**Princip:** Problem-first, inte produktkategori-first. Produkter får tillhöra flera problem.

---

## Sammanfattning för Jonathan (svenska)

- **40 live-produkter** i katalogen idag. Nuvarande kategorier: solskydd 10, förvaring 11, belysning 9, fästen 6, säkerhet 2, övrigt 2 (insektsnät).
- **8 guider** live. «Får jag borra?» / `borra-i-hyresratt` ska **inte** vara en hero-kort — den hör hemma under Guider (tillsammans med kontrakt + flyttchecklista).
- Föreslagna hero-kort («Vad vill du göra?»): **Hänga upp saker · Sätta upp gardiner · Mörklägga · Få mer insynsskydd · Få mer förvaring · Fixa badrummet** — ersätter dagens blandning (tavla/hylla/TV/gardiner/badrum/borra).
- Produkter får **flera problem-taggar**. Exempel: plissé/duo-rullgardin → både gardiner + mörklägga + insynsskydd; badrumskrok → hänga upp + badrum.
- **Rekommenderad nav: Option A** — *Fästa & hänga | Fönster & ljus | Förvaring | Kök & badrum | Alla produkter | Guider*. Skäl: behåller «Alla produkter» för belysning/säkerhet/övrigt som inte passar hero-korten; tydligare spegling av katalogen än Option B.
- **Svag passform** (grenuttag, första hjälpen, rök/CO, insektsnät, blomlådehållare, dimmer-tillbehör): behåll under *Kök & säkerhet* / *Fönster & ljus* / katalog — **nedtona** på startsidan, inte tvinga in i de sex problemkorten.
- **Guidluckor:** saknas dedikerade landningssidor för *Mörklägga*, *Insynsskydd*, *Fixa badrummet* och *Mer ljus utan takdosa*. Befintliga guider täcker bra: hänga (tavla), gardiner (rullgardin/plissé), förvaring (hylla), regler (borra/kontrakt), balkong.
- **Gammal → ny mappning:** fästen → Hänga upp; solskydd → Gardiner / Mörklägga / Insynsskydd (split); förvaring → Förvaring (+ Badrum där relevant); belysning → Fönster & ljus (nav), ej hero; säkerhet → Kök & säkerhet (nav); övrigt insektsnät → katalog / nedtona.
- Inga nya produkter inventeras här — bara det som redan finns i `products.ts`.

---

## 1. Summary counts

| Entity | Count |
|---|---:|
| Live products (`products.ts`) | **40** |
| Guides (`guides.ts`) | **8** |
| Guide groups | 5 (regler, vägg, fönster, ute, flytt) |
| Current product categories | 6 |
| Current top-nav groups | 6 |
| Current hero «Vad vill du göra?» cards | 6 (mixed problem + guide) |
| Proposed problem hero cards | 6 (problem-only) |
| Proposed nav Option A items | 6 |
| Proposed nav Option B items | 5 |

### Current category distribution

| Current category | Count | Route today |
|---|---:|---|
| `solskydd` | 10 | `/solskydd` |
| `forvaring` | 11 | `/forvaring` |
| `belysning` | 9 | `/belysning` |
| `fasten` | 6 | `/fasten` |
| `sakerhet` | 2 | `/sakerhet` |
| `ovrigt` | 2 | *(no dedicated category page in `CATEGORY_HREFS`)* |

### Current nav (`nav.ts`)

| Nav group | Links today |
|---|---|
| Ljus & el | Belysning & sladd |
| Fästa & förvara | Fästen, Förvaring + 3 guider |
| Kök & säkerhet | Säkerhet |
| Sol & fönster | Solskydd + 2 guider |
| Alla produkter | Hela katalogen |
| Guider | Alla guider + 8 guide-länkar |

### Current hero cards → proposed

| Current card | Target | Action |
|---|---|---|
| Hänga tavla → `tavla-pa-gips` | **Hänga upp saker** | Broaden beyond tavla; hub + guide |
| Sätta hylla → `hylla-utan-borra` | **Få mer förvaring** | Keep guide as supporting |
| TV eller tungt → `borra-i-hyresratt` | *(remove from hero)* | Guider only |
| Gardiner → `rullgardin-utan-borra` | **Sätta upp gardiner** (+ split mörklägga/insyn) | Split problem |
| Badrum → `/forvaring` | **Fixa badrummet** | Own hub (not raw category) |
| Får jag borra? → `borra-i-hyresratt` | **OUT of hero** | Guider only |

### Old category → new problem mapping

| Old category | Maps primarily to problem(s) | Also appears in |
|---|---|---|
| `fasten` | Hänga upp saker | Fixa badrummet (kakelkrokar), Kök |
| `solskydd` | Sätta upp gardiner / Mörklägga / Insynsskydd | *(split by intent — do not keep one bucket)* |
| `forvaring` | Få mer förvaring | Fixa badrummet; balkong-nischer |
| `belysning` | *(no hero problem)* | Nav: Fönster & ljus; Alla produkter |
| `sakerhet` | *(no hero problem)* | Nav: Kök & badrum / Kök & säkerhet |
| `ovrigt` | *(poor fit)* | Alla produkter; de-emphasize |

---

## 2. Product inventory table

Problem tag keys (multi allowed):

- `hanga-upp` — Hänga upp saker  
- `gardiner` — Sätta upp gardiner  
- `morklagga` — Mörklägga  
- `insynsskydd` — Få mer insynsskydd  
- `forvaring` — Få mer förvaring  
- `badrum` — Fixa badrummet  
- `belysning` — Ljus/sladd (nav, not hero)  
- `sakerhet` — Säkerhet (nav, not hero)  
- `balkong` — Balkong-nischer  
- `kok` — Kök-nischer  
- `poor-fit` — Recommend de-emphasize / non-hero

| slug | name | current category | merchant | price (SEK) | suggested problem tags (multi) | suggested primary problem | notes / gaps |
|---|---|---|---|---:|---|---|---|
| amz-vounot-duo | Vounot duo-rullgardin med klämfäste | solskydd | Amazon.se | 280 | gardiner, morklagga, insynsskydd | gardiner | Duo = typiskt ljus + mörkare tyg; guide: `rullgardin-utan-borra` |
| amz-gardinia | Gardinia självhäftande gardinhållare | solskydd | Amazon.se | 162 | gardiner | gardiner | Hållare, inte tyg — tillbehör under gardiner |
| amz-meisenberg-teleskopstang | MEISENBERG teleskopstång | solskydd | Amazon.se | 512 | gardiner | gardiner | Spänns mellan väggar; ingen dedikerad guide (delvis täckt av rullgardin-guide) |
| plisse-sonello-klam | Plisségardin — Sonello med klämfäste | solskydd | Amazon.se | 362 | gardiner, morklagga, insynsskydd | gardiner | Guide: `plissegardin-utan-borra` |
| frostad-fonsterfilm-insynsskydd-utan-lim | Frostad fönsterfilm – insynsskydd utan lim | solskydd | Fönsterfilm.se | 279 | insynsskydd | insynsskydd | Film ≠ mörkläggning; guide idag via plissé-guiden — **behöver egen hub** |
| fonsterfilm-randigt-frostad-monster | Fönsterfilm med randigt frostat mönster | solskydd | Fönsterfilm.se | 249 | insynsskydd | insynsskydd | Samma som ovan |
| fonsterfilm-vackert-blommigt-monster | Fönsterfilm med vackert blommönster | solskydd | Fönsterfilm.se | 269 | insynsskydd | insynsskydd | Dekorativ; samma hub |
| gardinstang-spann | Gardinstång — GARDINIA spännstång | solskydd | Amazon.se | 167 | gardiner | gardiner | Guide: `rullgardin-utan-borra` (listad) |
| plissegardin-flex | Plisségardin Flex — Solskyddsshoppen | solskydd | Solskyddsshoppen | 795 | gardiner, morklagga, insynsskydd | gardiner | Limfäste tillval; max ~2 m² — notera i hub |
| plissegardin-flex-dubbel | Plisségardin Flex Dubbel — Solskyddsshoppen | solskydd | Solskyddsshoppen | 995 | gardiner, morklagga, insynsskydd | morklagga | Honeycomb → starkare mörkläggnings-/isoleringssignal |
| insektsnat-skjutdorr-plisse | Insektsnät skjutdörr plissé — Solskyddsshoppen | ovrigt | Solskyddsshoppen | 4490 | poor-fit | *(none)* | Either-mount; högt pris; ingen problem-hub — katalog / nedtona |
| insektsnat-fonster | Insektsnät fönster — Solskyddsshoppen | ovrigt | Solskyddsshoppen | 1785 | poor-fit | *(none)* | Osäkert no-drill; fråga värden — katalog / nedtona |
| amz-virea-vaggkrokar-8kg-latt | Virea väggkrokar 8 kg — lätt | fasten | Amazon.se | 154 | hanga-upp | hanga-upp | Guide: `tavla-pa-gips`, `borra-i-hyresratt` |
| amz-virea-vaggkrokar-8kg-tung | Virea väggkrokar 8 kg — tung | fasten | Amazon.se | 153 | hanga-upp | hanga-upp | Guide: `tavla-pa-gips` |
| amz-designfabrik-kokskrokar | Designfabrik Hamburg — självhäftande kökskrokar | fasten | Amazon.se | 292 | hanga-upp, kok | hanga-upp | Kök-nisch under Kök & badrum-nav |
| amz-ricoo | Ricoo badrumskrokar — självhäftande | fasten | Amazon.se | 205 | hanga-upp, badrum | badrum | Kakel; hub badrum **needs landing** |
| base-enkelkrok-mattsvart | Base - Enkelkrok - Mattsvart | fasten | Kök&Bad | 73 | hanga-upp, badrum, kok | hanga-upp | Multi-rum |
| base-210-3-krok-borstad-rostfritt | Base 210 - 3 Krok - Borstad rostfritt | fasten | Kök&Bad | 221 | hanga-upp, badrum, kok | hanga-upp | Multi-rum |
| hylla-no-drill | Vägghylla — Toski självhäftande | forvaring | Amazon.se | 299 | forvaring, hanga-upp | forvaring | Guide: `hylla-utan-borra` |
| spannstang-dorr | Spännstång — dörr/nisch | forvaring | Amazon.se | 322 | forvaring | forvaring | Ingen dedikerad guide |
| amz-weissenstein-badrumshylla | Weissenstein badrumshylla | forvaring | Amazon.se | 318 | forvaring, badrum | badrum | Guide: `hylla-utan-borra` (listad) + badrum-hub |
| amz-xclou-blomladahallare | Xclou blomlådehållare | forvaring | Amazon.se | 102 | balkong, forvaring | balkong | Guide: `balkong-utan-borra`; **inte** hero-problem |
| amz-comfour | Comfour blomlådehållare — 4-pack | forvaring | Amazon.se | 250 | balkong, forvaring | balkong | Samma |
| amz-anhhow-diskstall | Anhow diskställ | forvaring | Amazon.se | 190 | forvaring, kok | forvaring | Fristående bänk — Kök & badrum-nav |
| base-kroklist-med-hylla-mattsvart | Base - Kroklist med hylla - Mattsvart | forvaring | Kök&Bad | 524 | forvaring, hanga-upp, badrum | forvaring | Guide: `hylla-utan-borra` |
| base-toalettpappershallare-med-hylla-borstad-rostfritt | Base - Toalettpappershållare med hylla - Borstad rostfritt | forvaring | Kök&Bad | 450 | badrum, forvaring | badrum | Hub badrum |
| boelle-alva-kladhangare-vitlaserad | Alva Klädhängare — Vitlaserad/Stål | forvaring | Boelle.se | 1499 | forvaring, hanga-upp | forvaring | Fristående — förvaring-hub |
| boelle-quito-kladhangare-svart | Quito Klädhängare — Svart/Svart | forvaring | Boelle.se | 1750 | forvaring, hanga-upp | forvaring | Fristående |
| boelle-manaus-hylla-svart | Manaus hylla — Svart | forvaring | Boelle.se | 616 | forvaring | forvaring | Fristående med lådor/hjul |
| amz-hit-ledslinga-96 | HIT LEDslinga 96 | belysning | Amazon.se | 169 | belysning, balkong | belysning | Guide: `balkong-utan-borra`; ej hero |
| amz-grenuttag | Grenuttag kabelbox 5-väg USB | belysning | Amazon.se | 500 | belysning, poor-fit | *(none)* | **Svag passform** — el-tillbehör, inte ljus; de-emphasize |
| amz-led-dimmer-sladd | LED-dimmer sladd | belysning | Amazon.se | 178 | belysning, poor-fit | belysning | Tillbehör; de-emphasize på startsida |
| amz-skyleo-skrivbordslampa-klam | SKYLEO skrivbordslampa med kläm | belysning | Amazon.se | 399 | belysning | belysning | Kläm = bra hyresvänligt; nav Fönster & ljus |
| boelle-umea-golvlampa-gra-linne | Umeå golvlampa — grå linne | belysning | Boelle.se | 1899 | belysning | belysning | Fristående |
| ljus-butiken-oslo-portabel-bordslampa-vit | Oslo portabel bordslampa — vit 38 cm | belysning | Ljus-butiken.se | 890 | belysning | belysning | Portabel |
| ljus-butiken-porto-portabel-bordslampa-gron | Porto portabel bordslampa — grön 24 cm | belysning | Ljus-butiken.se | 720 | belysning | belysning | Portabel |
| flowerbud-portabel-bordslampa-gul | Flowerbud portabel bordslampa Gul 30 cm | belysning | Ljus-butiken.se | 795 | belysning | belysning | Portabel |
| iron-portabel-bordslampa-krom | Iron portabel bordslampa Krom 28 cm | belysning | Ljus-butiken.se | 570 | belysning | belysning | Portabel |
| amz-lifesystems-forsta-hjalpen-kit | Lifesystems första hjälpen-kit | sakerhet | Amazon.se | 286 | sakerhet, poor-fit | sakerhet | **Svag passform** för problem-IA — Kök & säkerhet |
| amz-aroha | Aroha kombinerat rök- + CO-larm — 3-pack | sakerhet | Amazon.se | 960 | sakerhet, poor-fit | sakerhet | Montage-osäkerhet (värdens krav); Kök & säkerhet |

**Total rows: 40.** No products invented.

---

## 3. Per problem hub — products + guide fit

### 3.1 Hänga upp saker

**Existing guide fit:** `tavla-pa-gips` (core). Supporting: `borra-i-hyresratt`, `hylla-utan-borra` (overlap).  
**Hub status:** Can land on/extend `tavla-pa-gips` **or** needs broader landing «hänga upp» (tavla + krokar + klädhängare) — recommend **new/lighter hub page** that lists products + links to existing guides.

| Product | Why |
|---|---|
| amz-virea-vaggkrokar-8kg-latt | Core krok |
| amz-virea-vaggkrokar-8kg-tung | Core krok |
| amz-designfabrik-kokskrokar | Kökskrok |
| amz-ricoo | Badrumskrok (also badrum) |
| base-enkelkrok-mattsvart | Enkelkrok |
| base-210-3-krok-borstad-rostfritt | Trekrok |
| base-kroklist-med-hylla-mattsvart | Kroklist (also forvaring) |
| hylla-no-drill | Secondary — hylla is also «hänga» |
| boelle-alva-kladhangare-vitlaserad | Fristående hänga kläder |
| boelle-quito-kladhangare-svart | Fristående |

### 3.2 Sätta upp gardiner

**Existing guide fit:** `rullgardin-utan-borra`, `plissegardin-utan-borra`.  
**Hub status:** Strong — use both guides; optional shared «Gardiner» landing that routes by typ.

| Product | Why |
|---|---|
| amz-vounot-duo | Kläm-rullgardin |
| amz-gardinia | Gardinhållare |
| amz-meisenberg-teleskopstang | Teleskopstång |
| gardinstang-spann | Spännstång |
| plisse-sonello-klam | Kläm-plissé |
| plissegardin-flex | Plissé Flex |
| plissegardin-flex-dubbel | Also mörklägga |

### 3.3 Mörklägga

**Existing guide fit:** Partial — `rullgardin-utan-borra` / `plissegardin-utan-borra` mention darkening indirectly.  
**Hub status:** **Needs new landing** (filter/intent: mörklagt tyg, duo, honeycomb). Do not invent products; curate from existing.

| Product | Why |
|---|---|
| amz-vounot-duo | Duo ofta mörkare tyg |
| plisse-sonello-klam | Plissé kan mörklägga |
| plissegardin-flex | Solskydd |
| plissegardin-flex-dubbel | Honeycomb — strongest signal |

*Gap:* No dedicated blackout-only SKU labeled as such in catalog notes — hub copy should set expectations (measure, fabric, clamp vs screw).

### 3.4 Få mer insynsskydd

**Existing guide fit:** Partial — film products listed under `plissegardin-utan-borra`.  
**Hub status:** **Needs new landing** focused on film + light-filtering plissé (not blackout).

| Product | Why |
|---|---|
| frostad-fonsterfilm-insynsskydd-utan-lim | Core film |
| fonsterfilm-randigt-frostad-monster | Film |
| fonsterfilm-vackert-blommigt-monster | Film |
| plisse-sonello-klam | Secondary |
| amz-vounot-duo | Secondary |
| plissegardin-flex | Secondary |
| plissegardin-flex-dubbel | Secondary |

### 3.5 Få mer förvaring

**Existing guide fit:** `hylla-utan-borra`. Supporting: `balkong-utan-borra` for blomlåda.  
**Hub status:** Strong with existing guide; expand product list beyond adhesive shelves.

| Product | Why |
|---|---|
| hylla-no-drill | Core |
| spannstang-dorr | Nisch |
| amz-weissenstein-badrumshylla | Also badrum |
| base-kroklist-med-hylla-mattsvart | Kroklist+hylla |
| base-toalettpappershallare-med-hylla-borstad-rostfritt | Also badrum |
| amz-anhhow-diskstall | Kök bänk |
| boelle-alva-kladhangare-vitlaserad | Fristående |
| boelle-quito-kladhangare-svart | Fristående |
| boelle-manaus-hylla-svart | Fristående |
| amz-xclou-blomladahallare | Balkong (secondary) |
| amz-comfour | Balkong (secondary) |

### 3.6 Fixa badrummet

**Existing guide fit:** None dedicated. Partial: `hylla-utan-borra` (lists Weissenstein), `tavla-pa-gips` (Ricoo listed).  
**Hub status:** **Needs new landing**.

| Product | Why |
|---|---|
| amz-ricoo | Badrumskrokar kakel |
| amz-weissenstein-badrumshylla | Badrumshylla |
| base-toalettpappershallare-med-hylla-borstad-rostfritt | Toalettpapper+hylla |
| base-kroklist-med-hylla-mattsvart | Multi |
| base-enkelkrok-mattsvart | Multi |
| base-210-3-krok-borstad-rostfritt | Multi |

### 3.7 Non-hero areas (nav / catalog only)

**Belysning / Fönster & ljus** — products: LED-slinga, klämampa, golvlampa, 4× portabla bordslampor (+ dimmer/grenuttag as accessories, de-emphasized).  
Guide fit: `balkong-utan-borra` (slinga only). **Needs new landing** if «mer ljus utan takdosa» becomes a problem later — not in the six hero cards.

**Säkerhet / Kök & säkerhet** — första hjälpen, rök/CO. No guide. Keep under nav, not hero.

**Balkong** — blomlådehållare + LED-slinga. Guide: `balkong-utan-borra` (good). Not a hero card in the proposed set.

**Övrigt** — två insektsnät. No guide. Catalog only.

---

## 4. Products that fit poorly — recommendation

| slug | Issue | Recommendation |
|---|---|---|
| amz-grenuttag | El-/USB-box, inte «belysning» eller något av de 6 problemen | Keep under **Kök & säkerhet** or Ljus-tillbehör; **de-emphasize** on home; do not put on problem cards |
| amz-led-dimmer-sladd | Tillbehör till LED, smal intent | Keep under belysning/nav; de-emphasize |
| amz-lifesystems-forsta-hjalpen-kit | Safety-only, no mount story | **Kök & säkerhet**; not hero |
| amz-aroha | Safety; mount may need landlord | **Kök & säkerhet**; not hero; note contract |
| insektsnat-skjutdorr-plisse | High price, either-mount, niche | Alla produkter / sol-adjacent; **de-emphasize** |
| insektsnat-fonster | Uncertain no-drill, exterior | Same; honest copy already in notes |
| amz-xclou-blomladahallare | Balkong, not the 6 problems | Keep via guide `balkong-utan-borra`; optional under Förvaring secondary |
| amz-comfour | Same | Same |

Do **not** force these into «Vad vill du göra?» cards.

---

## 5. Recommended nav + hero card set

### Hero («Vad vill du göra?») — final set

1. Hänga upp saker  
2. Sätta upp gardiner  
3. Mörklägga  
4. Få mer insynsskydd  
5. Få mer förvaring  
6. Fixa badrummet  

**Out of hero (Guider only):** Får jag borra? / TV eller tungt → `borra-i-hyresratt` (+ `kolla-kontraktet`, flyttchecklista).

### Nav — **pick Option A**

| Item | Reason vs catalog |
|---|---|
| **Fästa & hänga** | Covers `fasten` + hang-related forvaring; matches problem «Hänga upp» |
| **Fönster & ljus** | Merges `solskydd` + `belysning` without forcing belysning into hero problems |
| **Förvaring** | Large catalog slice (11); clear noun; matches problem «Få mer förvaring» |
| **Kök & badrum** | Pulls badrum hub + kökskrokar/diskställ + can host **säkerhet** as subsection (today’s «Kök & säkerhet») |
| **Alla produkter** | Escape hatch for ovrigt, poor-fits, full list |
| **Guider** | Regler (borra/kontrakt), vägg, fönster, balkong, flytt |

### Why A over B

- **Option B** drops «Alla produkter» and shortens labels (`Hänga upp`, `Förvara`). Belysning (9), säkerhet (2) and ovrigt (2) then lack a clear non-problem home in nav.  
- **Option A** keeps catalog breadth visible while hero stays problem-first.  
- «Fästa & hänga» reads as product-family + problem; «Hänga upp» alone risks feeling identical to one hero card and weaker for hyllor/krokar mix.  
- Multi-tag products still work: nav = browse buckets; hero = intent.

*Optional later tweak (not required now):* rename A’s «Kök & badrum» → «Kök, bad & säkerhet» if säkerhet must stay visible in the label.

---

## 6. Gaps — missing guides / landings for hubs

| Hub / need | Existing guide? | Gap |
|---|---|---|
| Hänga upp saker | `tavla-pa-gips` (narrow) | Broader hub beyond «tavla»; include krokar + fristående hängare |
| Sätta upp gardiner | `rullgardin-utan-borra`, `plissegardin-utan-borra` | OK — maybe one umbrella landing |
| Mörklägga | Partial only | **Needs new landing** (intent filter + measure tips) |
| Få mer insynsskydd | Film buried in plissé-guide | **Needs new landing** (film-first) |
| Få mer förvaring | `hylla-utan-borra` | OK — extend to fristående + nisch |
| Fixa badrummet | None | **Needs new landing** (kakel, fukt, maxvikt) |
| Får jag borra? | `borra-i-hyresratt` | Keep in Guider — not a gap |
| Kontrakt | `kolla-kontraktet` | OK |
| Balkong | `balkong-utan-borra` | OK (not in hero set) |
| Flytt | `checklista-flytta` | OK |
| Mer ljus utan takdosa | None (slinga only in balkong) | Optional future; not in proposed 6 cards |
| Säkerhet i hyresrätt | None | Optional; keep products under nav |

---

## 7. Guide inventory + product mapping

| Guide slug | Title | Group | Linked productSlugs (today) | Maps to proposed problem(s) |
|---|---|---|---|---|
| kolla-kontraktet | Så läser ni kontraktet | regler | *(none)* | Guider only |
| borra-i-hyresratt | Får man borra i hyresrätt? | regler | amz-virea-vaggkrokar-8kg-latt, hylla-no-drill, amz-vounot-duo | Guider only (was hero — remove) |
| tavla-pa-gips | Tavla på gips | vagg | amz-virea-vaggkrokar-8kg-latt, amz-virea-vaggkrokar-8kg-tung, amz-ricoo | Hänga upp saker (+ badrum secondary) |
| hylla-utan-borra | Hylla utan att borra | vagg | hylla-no-drill, base-kroklist-med-hylla-mattsvart, amz-weissenstein-badrumshylla | Få mer förvaring (+ badrum) |
| rullgardin-utan-borra | Rullgardin utan att borra | fonster | amz-vounot-duo, amz-gardinia, gardinstang-spann | Sätta upp gardiner (+ mörklägga) |
| plissegardin-utan-borra | Plisségardin utan att borra | fonster | plisse-sonello-klam, frostad-fonsterfilm-insynsskydd-utan-lim, fonsterfilm-randigt-frostad-monster | Gardiner / Insynsskydd / Mörklägga |
| balkong-utan-borra | Balkong utan att borra | ute | amz-xclou-blomladahallare, amz-comfour, amz-hit-ledslinga-96 | Guider / Förvaring secondary (not hero) |
| checklista-flytta | Checklista vid flytt | flytt | *(none)* | Guider only |

**Products in catalog but not linked from any guide** (candidates to attach when hubs are built — not invented):

- amz-meisenberg-teleskopstang  
- fonsterfilm-vackert-blommigt-monster  
- plissegardin-flex, plissegardin-flex-dubbel  
- insektsnat-*  
- amz-designfabrik-kokskrokar, base-enkelkrok-*, base-210-*  
- spannstang-dorr, amz-anhhow-diskstall  
- base-toalettpappershallare-*  
- boelle-alva, boelle-quito, boelle-manaus  
- Most belysning except LED-slinga  
- Both sakerhet products  

---

## 8. Constraints respected

- READ-ONLY for site UI; this file only.  
- No git commit / push.  
- No product invention — inventory from `products.ts` only.  
- Multi-category membership allowed.  
- «Får jag borra?» out of hero cards → Guider.

---

*Generated 2026-09-29 (Europe/Stockholm) from live `src/data/*` and current nav/hero.*


---

## Implementation note (same day)

Jonathan directed: implement recommended IA; pick **Option B** nav unless catalog forces A. Implemented Option B (`Hänga upp | Fönster & ljus | Förvara | Kök & badrum | Guider`) with **Alla produkter** in footer. Six `/losning/*` hubs from §3 product maps. Hero glass kept. Tag `pre-claude-seo-2026-09-29` untouched.
