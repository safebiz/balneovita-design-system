import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

/** Înălțime minimă 44px, întotdeauna — publicul are 50–75 de ani și e pe telefon.
 *  `primary` = verdele de acțiune. Unul singur pe ecran. */
export function Button({
  children,
  variant = 'primary',
  href = '#',
}: {
  children: ReactNode
  variant?: Variant
  href?: string
}) {
  return (
    <a className={'btn btn--' + variant} href={href}>
      {children}
    </a>
  )
}
