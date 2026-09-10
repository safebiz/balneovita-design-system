/** MOTIV 1 din manual: numărul care leagă harta de listă.
 *  Aceeași cifră apare pe pin și aici. BUGET: doar pentru relația hartă ↔ listă. */
export function ResultRow({
  num,
  name,
  selected = false,
  onClick,
}: {
  num: number
  name: string
  selected?: boolean
  onClick?: () => void
}) {
  return (
    <button className={selected ? 'row is-selected' : 'row'} onClick={onClick}>
      <span className="row__num">{num}</span>
      <span className="row__name">{name}</span>
      <span className="row__cta">{selected ? 'Fișa deschisă' : 'Vezi fișa'}</span>
    </button>
  )
}
