# BalneoVita → paleta globală Kadence

Paleta se scrie în temă **înainte de prima pagină construită**. Harta din pluginul
`balneovita-statiuni` își ia culorile automat din paleta globală — verificat pe prototip.

| Poziția | Rol impus de temă | Culoare | De ce acolo |
|---|---|---|---|
| 1 | accent | `#066A98` | albastrul siglei |
| 2 | accent alternativ | `#044D6F` | hover, subsol |
| 3 | text: cel mai puternic | `#10222B` | text principal |
| 4 | text: puternic | `#2B4450` | titluri |
| 5 | text: mediu | `#4F6B78` | corpul textului |
| 6 | text: subtil | `#7C939D` | etichete |
| 7 | fundal subtil | `#D6E0E4` | **și culoarea liniilor** — Kadence nu are slot separat pentru ele |
| 8 | fundal deschis | `#F2F5F6` | fundal de secțiune |
| 9 | alb | `#FFFFFF` | |
| 10 | accent complementar | `#69A940` | verdele frunzei din siglă |
| 11 | succes | `#457024` | **verdele de acțiune — butonul principal** |
| 12 | info | `#0782BA` | |
| 13 | avertizare | `#B26A00` | |
| 14 | eroare | `#B3261E` | |
| 15 | rating | `#E0A500` | |

> 🔴 **Sloturile au roluri FIXE, nu sunt 15 culori libere** — tema le aplică singură după index.
> Maparea pe 9 poziții din prima versiune a acestui document era greșită: punea verdele pe slotul 3,
> care e „textul cel mai puternic", și textul secundar pe slotul 7, care e fundal. Aplicată ca atare,
> ar fi făcut textele verzi și fundalurile gri-albăstrui.
>
> 🔴 **Linia se desenează în `palette7`, pe fundal `palette9` (alb).** O linie `palette7` pe fundal
> `palette8` e invizibilă — înainte să declari că lipsește o culoare, verifică fundalul.
>
> Verificare după instalare: `node wat/tools/kadence-palette-audit.js --site <url>` (cere sfb-toolkit
> pe site); altfel se citesc direct variabilele `--global-palette*` din pagina live.

`#D6E0E4`, `#E7ECEE`, `#E8F1F6`, `#7C939D`, `#9FC6DA` și albul se setează acolo unde Kadence
le cere separat. **Nu se lasă pe valorile din fabrică** — altfel majoritatea suprafeței
site-ului nu e a clientului, iar o schimbare de brand n-o atinge.

Verificare după instalare:

```bash
node wat/tools/kadence-palette-audit.js --site <url>
```
