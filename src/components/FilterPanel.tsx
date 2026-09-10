import { useState } from 'react'
import { categories, brand } from '../data/content'
import { Pill } from './Pill'

/** Pasul 1: alegerea afecțiunii.
 *  44 de afecțiuni nu încap într-o listă plată pe telefon → nouă categorii
 *  pliabile, fiecare cu numărul ei. Categoriile fără date PUBLICATE o declară
 *  explicit — golul se spune, nu se ascunde și nu se completează din intuiție. */
export function FilterPanel({
  selected,
  onSelect,
}: {
  selected: string
  onSelect: (id: string) => void
}) {
  const [openCat, setOpenCat] = useState('cardio')
  return (
    <div className="panel">
      <p className="panel__step">Pasul 1 — Ce afecțiune aveți?</p>
      <p className="panel__hint">
        44 de afecțiuni, în nouă categorii. Deschideți categoria sau căutați direct.
      </p>

      {categories.map((cat) => {
        const isOpen = openCat === cat.id
        const missing = cat.total - cat.afflictions.length
        return (
          <div key={cat.id} className="cat">
            <button
              className="cat__head"
              aria-expanded={isOpen}
              onClick={() => setOpenCat(isOpen ? '' : cat.id)}
            >
              <span className="cat__name">{cat.name}</span>
              <span className="cat__count">{cat.total} afecțiuni</span>
            </button>
            {isOpen && (
              <div className="cat__body">
                <div className="pills">
                  {cat.afflictions.map((a) => (
                    <Pill key={a.id} active={a.id === selected} onClick={() => onSelect(a.id)}>
                      {a.name}
                    </Pill>
                  ))}
                </div>
                {missing > 0 && (
                  <p className="cat__missing">
                    {missing} afecțiuni din această categorie nu sunt încă publicate.
                  </p>
                )}
              </div>
            )}
          </div>
        )
      })}

      <p className="disclaimer">{brand.disclaimer}</p>
    </div>
  )
}
