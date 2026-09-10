import { brand } from '../data/content'

/** Prima linie a site-ului. Declară natura lui: informare, nu comerț.
 *  Apare pe FIECARE pagină, o singură dată, sus de tot. */
export function InfoBar() {
  return <div className="infobar">{brand.infoBar}</div>
}
