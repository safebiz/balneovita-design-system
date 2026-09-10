# BalneoVita — sistem de design

Tokeni și componente React pentru **BalneoVita**, site public al Clusterului Balneoturistic
Transylvania: harta stațiunilor balneare din Transilvania, căutabile **după afecțiune**.

Sistemul e **extras din pagina principală aprobată la 2026-09-10**, nu scris înaintea ei.
Descrie ce a ieșit; nu dictează ce va ieși.

---

## Punctul fix

Sigla și cele două culori măsurate în ea. **Nu se redesenează, nu se armonizează.**

| | |
|---|---|
| Siglă | `public/logo/balneovita-logo.svg` — nufăr albastru cu pavilion de cură, frunză, valuri |
| Albastru BalneoVita | `#066A98` |
| Verde frunză | `#69A940` |

🔴 **`#69A940` nu poate purta text alb** — contrast 2,86 față de pragul de 4,5. Rămâne culoare
decorativă. Pentru orice element pe care scrie ceva se folosește verdele de acțiune `#457024`.

🔴 **Patru variante de siglă lipsesc** și trebuie produse: monocromă albă, orizontală, favicon
32×32, doar-floare.

Fonturi: **Source Serif 4** (titluri și text curent) + **Public Sans** (interfață).
Toate randează corect `ș ț Ș Ț` cu virgulă și `ő ű Ő Ű` — verificat, nu presupus.

---

## Cui se adresează

Un om de 50–75 de ani cu o afecțiune cronică, de obicei după recomandarea medicului. Al doilea
public: copiii lui. Al treilea: vorbitori de maghiară. Deschide pagina seara, de pe telefon,
îngrijorat și grăbit să afle un răspuns concret.

**Consecințe care nu se negociază:** text curent de minimum 17px · ținta de atingere de 44px,
inclusiv când elementul arată mai mic · culoarea nu e niciodată singurul semn al unei stări ·
harta nu e niciodată singura cale către informație.

---

## Motivele, cu bugetul lor

Un motiv folosit peste tot încetează să fie semnătură.

| Motiv | Buget |
|---|---|
| **Numărul care leagă harta de listă** | doar relația hartă ↔ listă de rezultate |
| **Colț de 3px, fără umbră** — separarea se face prin linie și fundal | absolut; nicio componentă nouă nu primește colț mare sau umbră de card |
| **Eticheta cu linie scurtă** înaintea titlului | una per secțiune, doar când spune unde ești în parcurs |
| **Banda închisă `#10222B`** | o singură dată pe pagină |

Sistemul nu animă nimic: pagina aprobată are zero tranziții.

---

## Ce NU se inventează

Domeniu medical — o afirmație greșită atinge un om bolnav, nu doar o campanie.

- **afecțiuni tratate** de o stațiune, în afara mapării din registrul clientului
- **cifre de compoziție a apei** — nu se rotunjesc, nu se armonizează
- prețuri · recenzii sau testimoniale · capacități hoteliere · date de contact ale stațiunilor
- distanțe și durate neverificate · certificări, premii, clasificări · statistici de turism
- **ani de atestare documentară** — registrul dă pentru Covasna și 1548, și 1567; niciunul nu se publică
- coordonate de hartă aproximate
- **promisiuni de vindecare**: „vindecă", „garantat", „tratament sigur", „scapi de"

Obligatoriu lângă orice listă de afecțiuni:
> Informația despre afecțiuni are caracter informativ și nu înlocuiește consultul medical.

Obligatoriu în subsol:
> Site web finanțat cu sprijinul Secretariatului General al Guvernului prin Departamentul pentru
> Dezvoltare Durabilă

Lista completă, cu motivele: `projects/balneovita/content/doNotFabricate.md`.

---

## Structura

```
src/
├── styles/tokens.css      # sursa unică — culori, tipografie, spațiu, formă, mișcare
├── styles/app.css         # clase de componentă; nicio valoare scrisă de mână
├── data/content.ts        # conținut REAL, verbatim din registrul clientului
├── data/voice.ts          # ton, public, piloni
├── data/phrases.ts        # fraze-semnătură, interzise, „nu se inventează"
└── components/            # 13 componente derivate din pagină + USAGE.md cu regulile lor
```

## Rulare

```bash
npm install
npm run build
npm run preview
```

## Punerea în WordPress

Paleta se scrie în cele nouă poziții ale temei Kadence **înainte de prima pagină construită** —
vezi `docs/kadence-palette-map.md`. Nicio culoare nu ajunge direct în CSS sau în codul pluginului.

---

## Stare

| | |
|---|---|
| Pagina principală | aprobată 2026-09-10 |
| Manual de brand | `projects/balneovita/branding/brand-guidelines.md` |
| 🔴 Sigla finanțatorului | **lipsește** — locul e rezervat în subsol, nu se improvizează |
| 🔴 Adresarea | pagina e la persoana a II-a plural; regula generală e singular — **de decis**, apoi identic în RO/HU/EN |
| 🔴 Datele | 4 afecțiuni din 44 și 3 fișe din 27 au date reale. Restul se declară onest ca nepublicate |
