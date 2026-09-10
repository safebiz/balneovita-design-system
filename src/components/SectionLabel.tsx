import type { ReactNode } from 'react'

/** MOTIV 2 din manual: eticheta cu linie scurtă înaintea titlului.
 *  BUGET: una singură per secțiune, și numai când chiar spune unde ești în
 *  parcurs („Pasul 2 — Unde se tratează"). Nu ca ornament peste orice titlu. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="section-label">
      <span className="section-label__rule" aria-hidden="true" />
      {children}
    </p>
  )
}
