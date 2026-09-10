import { brand, nav } from '../data/content'

/** Subsol. Poartă DOUĂ obligații, nu una: mențiunea medicală și mențiunea
 *  de finanțare împreună cu sigla finanțatorului.
 *  🔴 Sigla Departamentului pentru Dezvoltare Durabilă lipsește încă din
 *  materialele primite — locul e rezervat, nu se improvizează. */
export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <img src="/logo/balneovita-logo.svg" alt={brand.name} className="footer__logo" />
          <span className="footer__name">{brand.name}</span>
          <span className="footer__entity">{brand.entity}</span>
        </div>
        <nav className="footer__nav" aria-label="Pagini">
          <p className="section-label">Pagini</p>
          {nav.map((i) => (
            <a key={i.href} href={i.href}>{i.label}</a>
          ))}
        </nav>
        <div className="footer__langs">
          <p className="section-label">Limba</p>
          <div className="langs">
            {brand.languages.map((l) => (
              <button key={l} className={l === 'RO' ? 'lang is-active' : 'lang'}>{l}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap footer__legal">
        <div className="footer__funder" aria-label="Loc rezervat pentru sigla finanțatorului">
          Loc rezervat — sigla Departamentului pentru Dezvoltare Durabilă
        </div>
        <p>{brand.disclaimer}</p>
        <p>{brand.funding}</p>
      </div>
    </footer>
  )
}
