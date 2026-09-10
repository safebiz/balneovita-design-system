import { useState } from 'react'
import { brand, categories, factors, steps, stations, cluster, news } from './data/content'
import { InfoBar } from './components/InfoBar'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SectionLabel } from './components/SectionLabel'
import { FilterPanel } from './components/FilterPanel'
import { ResultRow } from './components/ResultRow'
import { ResortMap } from './components/ResortMap'
import { StationCard } from './components/StationCard'
import { FactorCard } from './components/FactorCard'
import { StepCard } from './components/StepCard'
import { Button } from './components/Button'
import { Footer } from './components/Footer'

/** Pagina principală aprobată la 2026-09-10, recompusă din componente.
 *  Ordinea secțiunilor ESTE ordinea gândirii omului:
 *  ce am → unde se tratează → ce e acolo → cum ajung. */
export default function App() {
  const [affId, setAffId] = useState('cardio-gen')
  const [station, setStation] = useState('')
  const [query, setQuery] = useState('')

  const all = categories.flatMap((c) => c.afflictions)
  const aff = all.find((a) => a.id === affId) || all[0]
  const matches = aff ? aff.stations : []

  const norm = (s: string) =>
    s.toLowerCase().normalize('NFD').replace(/[̀-̦ͯ]/g, '')

  const listed = stations
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, 'ro'))
    .filter((s) => !query || norm(s.name).includes(norm(query)))

  const treatsOf = (name: string) =>
    all.filter((a) => a.stations.includes(name)).map((a) => a.short)

  return (
    <>
      <InfoBar />
      <Header />
      <Hero />

      <section className="wrap section" id="harta">
        <div className="split">
          <div>
            <FilterPanel selected={affId} onSelect={setAffId} />

            <SectionLabel>Pasul 2 — Unde se tratează</SectionLabel>
            <h2 className="h2">
              {matches.length} stațiuni pentru: {aff ? aff.name.toLowerCase() : ''}
            </h2>
            <p className="muted">Atingeți o stațiune pentru fișa ei. Aceleași numere apar pe hartă.</p>

            <div className="rows">
              {matches.map((name, i) => (
                <ResultRow
                  key={name}
                  num={i + 1}
                  name={name}
                  selected={station === name}
                  onClick={() => setStation(station === name ? '' : name)}
                />
              ))}
            </div>

            {station && <StationCard name={station} treats={treatsOf(station)} />}
          </div>

          <ResortMap matches={matches} selected={station} onPick={setStation} />
        </div>
      </section>

      <section className="wrap section" id="lista">
        <h2 className="h2">Toate cele {stations.length} de stațiuni</h2>
        <p className="muted">
          Aceeași informație, fără hartă. Căutați după numele stațiunii sau parcurgeți lista.
        </p>
        <label className="search">
          <span className="section-label">Caută stațiunea</span>
          <input
            type="search"
            placeholder="ex. Sovata"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <div className="grid grid--3">
          {listed.map((s) => {
            const t = treatsOf(s.name)
            return (
              <button key={s.name} className="tile" onClick={() => setStation(s.name)}>
                <span className="tile__name">{s.name}</span>
                <span className={t.length ? 'tile__treats' : 'tile__treats is-empty'}>
                  {t.length ? t.join(' · ') : 'Fără afecțiuni publicate'}
                </span>
              </button>
            )
          })}
        </div>
        <p className="disclaimer">{brand.disclaimer}</p>
      </section>

      {/* MOTIV 4 din manual: banda închisă. BUGET — o singură dată pe pagină. */}
      <section className="band">
        <div className="wrap">
          <SectionLabel>Pasul 3 — Ce e acolo</SectionLabel>
          <h2 className="h2 h2--on-dark">Factorii de cură, așa cum arată în realitate</h2>
          <p className="muted muted--on-dark">
            Bioclimatul montan — muntele, bradul, ceața, aerul rece — este el însuși parte din
            tratament, nu decor.
          </p>
          <div className="grid grid--3">
            {factors.map((f) => (
              <FactorCard key={f.name} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section">
        <SectionLabel>Pasul 4 — Cum ajung</SectionLabel>
        <h2 className="h2">Drumul de la cabinetul medicului la stațiune</h2>
        <div className="grid grid--3">
          {steps.map((s) => (
            <StepCard key={s.n} {...s} />
          ))}
        </div>
      </section>

      <section className="wrap section split" id="cluster">
        <div>
          <SectionLabel>Cluster</SectionLabel>
          <h2 className="h2">{cluster.title}</h2>
          <p>{cluster.text}</p>
          <Button variant="secondary">{cluster.cta}</Button>
        </div>
        <div id="noutati">
          <SectionLabel>Noutăți</SectionLabel>
          <h2 className="h2">{news.title}</h2>
          <p className="empty-state">{news.empty}</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
