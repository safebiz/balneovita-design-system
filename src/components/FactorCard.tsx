/** Cartonaș de factor de cură, pe banda închisă.
 *  Numele termenului balnear real + o frază concretă, din lumea fizică. */
export function FactorCard({ name, text }: { name: string; text: string }) {
  return (
    <article className="factor">
      <h3 className="factor__name">{name}</h3>
      <p className="factor__text">{text}</p>
    </article>
  )
}
