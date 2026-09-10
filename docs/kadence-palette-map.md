# BalneoVita → paleta globală Kadence

Paleta se scrie în temă **înainte de prima pagină construită**. Harta din pluginul
`balneovita-statiuni` își ia culorile automat din paleta globală — verificat pe prototip.

| Poziția | Culoare | Rol |
|---|---|---|
| 1 | `#066A98` | accent — culoarea siglei |
| 2 | `#044D6F` | accent închis — subsol |
| 3 | `#457024` | verde de acțiune — butoane |
| 4 | `#69A940` | verde decorativ — din siglă |
| 5 | `#10222B` | text principal / fundal închis |
| 6 | `#2B4450` | text tare |
| 7 | `#4F6B78` | text secundar |
| 8 | `#C3D2D8` | chenare |
| 9 | `#F2F5F6` | fundal gri |

`#D6E0E4`, `#E7ECEE`, `#E8F1F6`, `#7C939D`, `#9FC6DA` și albul se setează acolo unde Kadence
le cere separat. **Nu se lasă pe valorile din fabrică** — altfel majoritatea suprafeței
site-ului nu e a clientului, iar o schimbare de brand n-o atinge.

Verificare după instalare:

```bash
node wat/tools/kadence-palette-audit.js --site <url>
```
