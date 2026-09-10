import type { ReactNode } from 'react'

/** Etichetă de filtru. Cu bifă = activ; apăsată din nou, se scoate.
 *  Colț de 3px ca tot restul sistemului — pastila complet rotundă ar rupe familia. */
export function Pill({
  children,
  active = false,
  onClick,
}: {
  children: ReactNode
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button className={active ? 'pill is-active' : 'pill'} aria-pressed={active} onClick={onClick}>
      <span className="pill__mark" aria-hidden="true">{active ? '✓' : '+'}</span>
      {children}
    </button>
  )
}
