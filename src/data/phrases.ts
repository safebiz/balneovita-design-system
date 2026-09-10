/* =========================================================================
   BalneoVita — fraze de brand și interdicții
   ========================================================================= */

/** Fraze-semnătură din pagina aprobată. Se reiau ca atare, nu se reformulează. */
export const signature_phrases = [
  'Unde se tratează ce aveți',
  'Informare publică · nu se vând servicii pe acest site',
  'Aceeași informație, fără hartă',
  'Fără afecțiuni publicate',
  'Factorii de cură, așa cum arată în realitate',
  'Drumul de la cabinetul medicului la stațiune',
]

/** Obligatoriu lângă ORICE listă de afecțiuni sau rezultat de căutare. */
export const required_disclaimer =
  'Informația despre afecțiuni are caracter informativ și nu înlocuiește consultul medical.'

/** Interzise. Domeniu medical: o promisiune greșită atinge un om bolnav. */
export const forbidden_phrases = [
  'vindecă',
  'garantat',
  'miraculos',
  'tratament sigur',
  'scapi de',
  'elimină durerea',
  'rezultate garantate',
  'ofertă',
  'rezervă acum',
  'comandă acum',
  'doar azi',
  'cel mai bun',
]

/**
 * Ce NU se inventează. Lista completă, cu motivele, e în
 * projects/balneovita/content/doNotFabricate.md și se atașează la orice brief.
 */
export const do_not_fabricate = [
  'afecțiuni tratate de o stațiune, în afara mapării din registrul clientului',
  'cifre de compoziție a apei — nu se rotunjesc și nu se armonizează',
  'prețuri de cazare, tratament sau bilete',
  'recenzii, testimoniale, nume de pacienți',
  'capacități hoteliere, număr de locuri sau de paturi',
  'date de contact ale stațiunilor',
  'distanțe și durate de călătorie neverificate',
  'ani de atestare documentară (registrul dă pentru Covasna și 1548, și 1567 — niciunul nu se publică)',
  'certificări, premii, clasificări hoteliere',
  'statistici de turism',
  'coordonate de hartă aproximate',
]
