import { stationCards, brand } from '../data/content'

/** Fișa stațiunii. Câmpurile fără date SE ASCUND, iar lipsa se declară —
 *  24 din 27 de stațiuni n-au încă factori publicați. Un câmp gol afișat
 *  arată a defect; un câmp lipsă declarat arată a onestitate. */
export function StationCard({ name, treats = [] }: { name: string; treats?: string[] }) {
  const data = stationCards[name]
  return (
    <article className="station">
      <h3 className="station__name">{name}</h3>
      {treats.length > 0 && (
        <p className="station__treats">{treats.join(' · ')}</p>
      )}
      {data ? (
        <>
          <dl className="field">
            <dt>Factori naturali terapeutici</dt>
            <dd>{data.factors}</dd>
          </dl>
          {data.hosting && (
            <dl className="field">
              <dt>Structuri de primire</dt>
              <dd>{data.hosting}</dd>
            </dl>
          )}
        </>
      ) : (
        <p className="station__missing">Factorii de cură pentru această stațiune nu sunt încă publicați.</p>
      )}
      <p className="disclaimer">{brand.disclaimer}</p>
    </article>
  )
}
