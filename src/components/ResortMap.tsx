import { stations } from '../data/content'

/** Harta schematică a Transilvaniei, cu pini numerotați.
 *  Zona de atingere e 46px chiar dacă punctul arată 32px — pragul se respectă
 *  și când elementul e mic. Pinii inactivi rămân vizibili, dar mai mici.
 *  Harta NU e singura cale: lista completă oferă aceleași informații. */
export function ResortMap({
  matches,
  selected,
  onPick,
}: {
  matches: string[]
  selected?: string
  onPick?: (name: string) => void
}) {
  const order = new Map(matches.map((n, i) => [n, i + 1]))
  const pos = (lat: number, lon: number) => ({
    x: 6 + ((lon - 23.55) / (26.45 - 23.55)) * 88,
    y: 6 + (1 - (lat - 45.32) / (47.12 - 45.32)) * 88,
  })
  return (
    <div className="map">
      <div className="map__head">
        <span className="section-label">Harta stațiunilor</span>
        <span className="map__meta">27 de stațiuni · poziții aproximative</span>
      </div>
      <div className="map__canvas">
        <span className="map__north" aria-hidden="true">N ↑</span>
        {stations.map((s) => {
          const p = pos(s.lat, s.lon)
          const num = order.get(s.name)
          const isMatch = Boolean(num)
          const cls = ['pin', isMatch ? 'is-match' : 'is-idle', s.name === selected ? 'is-selected' : '']
          return (
            <button
              key={s.name}
              className={cls.join(' ').trim()}
              style={{ left: p.x + '%', top: p.y + '%' }}
              aria-label={s.name}
              onClick={() => onPick && onPick(s.name)}
            >
              <span className="pin__dot">{isMatch ? num : ''}</span>
            </button>
          )
        })}
        <span className="map__caption">Transilvania</span>
      </div>
      <p className="map__note">
        Numerele de pe hartă corespund listei de mai sus. Dacă nu puteți folosi harta,
        lista completă conține aceleași informații.
      </p>
      {/* Alternativa la hartă e o cale EGALĂ, nu o notă de subsol: ca link în frază
          avea 17px înălțime, sub pragul de atingere — exact pentru publicul care
          are cea mai mare nevoie de ea. Stă ca buton propriu. */}
      <a className="btn btn--ghost map__alt" href="#lista">
        Vezi lista completă a stațiunilor
      </a>
    </div>
  )
}
