/** Pas numerotat din drumul către cură. Cercul e singurul loc, alături de
 *  pinii de hartă, unde sistemul folosește colț complet rotund. */
export function StepCard({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <article className="step">
      <span className="step__num" aria-hidden="true">{n}</span>
      <h3 className="step__title">{title}</h3>
      <p className="step__text">{text}</p>
    </article>
  )
}
