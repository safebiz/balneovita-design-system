import { useState } from 'react'
import { brand, nav } from '../data/content'

/** Antet: siglă + entitate, navigație, selector de limbă.
 *  Sub ~900px navigația devine buton „Meniu" — la lățimea aia nu mai încape
 *  pe un rând, iar ruperea în două rânduri pierde reperul „unde sunt". */
export function Header({ activeLang = 'RO' }: { activeLang?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__brand" href="#top">
          <img src="/logo/balneovita-logo.svg" alt={brand.name} className="header__logo" />
          <span className="header__names">
            <span className="header__name">{brand.name}</span>
            <span className="header__entity">{brand.entity}</span>
          </span>
        </a>

        <button
          className="header__toggle"
          aria-expanded={open}
          aria-controls="nav-main"
          onClick={() => setOpen(!open)}
        >
          Meniu
        </button>

        <nav id="nav-main" className={open ? 'header__nav is-open' : 'header__nav'}>
          {nav.map((item) => (
            <a key={item.href} className="header__link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="langs" role="group" aria-label="Limba">
          {brand.languages.map((l) => (
            <button key={l} className={l === activeLang ? 'lang is-active' : 'lang'}>
              {l}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
