import { brand } from '../data/content'
import { SectionLabel } from './SectionLabel'

/** Deschiderea paginii. Titlul e ÎNTREBAREA omului, nu un slogan.
 *  Fără imagine de fundal: prima secțiune trebuie să ajungă imediat la filtru. */
export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <SectionLabel>Stațiunile balneare din Transilvania</SectionLabel>
        <h1 className="hero__title">{brand.claim}</h1>
        <p className="hero__lead">{brand.lead}</p>
      </div>
    </section>
  )
}
