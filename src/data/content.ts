/* =========================================================================
   BalneoVita — conținut REAL
   Sursa: registrul clientului (Registru site web.xlsx, 2026-09-10).
   Textele stațiunilor sunt VERBATIM. Nu se rescriu, nu se rotunjesc cifrele.
   Ce lipsește rămâne lipsă — vezi README, secțiunea „Ce nu se inventează".
   ========================================================================= */

export const brand = {
  name: 'BalneoVita',
  entity: 'Cluster Balneoturistic Transylvania',
  claim: 'Unde se tratează ce aveți',
  lead: 'Alegeți afecțiunea. Vă arătăm stațiunile din Transilvania unde se face cură pentru ea, ce se găsește acolo și cum se ajunge.',
  infoBar: 'Informare publică · nu se vând servicii pe acest site',
  funding:
    'Site web finanțat cu sprijinul Secretariatului General al Guvernului prin Departamentul pentru Dezvoltare Durabilă',
  disclaimer:
    'Informația despre afecțiuni are caracter informativ și nu înlocuiește consultul medical.',
  languages: ['RO', 'HU', 'EN'] as const,
}

export const nav = [
  { label: 'Acasă', href: '#top' },
  { label: 'Sănătate balneară', href: '#harta' },
  { label: 'Cluster', href: '#cluster' },
  { label: 'Concept de dezvoltare', href: '#concept' },
  { label: 'Noutăți', href: '#noutati' },
  { label: 'Contact', href: '#contact' },
]

/* ---- Cele 27 de stațiuni, cu coordonate reale --------------------------- */
export type Station = { name: string; lat: number; lon: number }

export const stations: Station[] = [
  { name: 'Sovata', lat: 46.6, lon: 25.07 },
  { name: 'Covasna', lat: 45.85, lon: 26.18 },
  { name: 'Băile Tușnad', lat: 46.15, lon: 25.85 },
  { name: 'Borsec', lat: 46.94, lon: 25.56 },
  { name: 'Praid', lat: 46.55, lon: 25.13 },
  { name: 'Bazna', lat: 46.2, lon: 24.28 },
  { name: 'Ocna Sibiului', lat: 45.88, lon: 24.05 },
  { name: 'Bálványos', lat: 46.1, lon: 26.05 },
  { name: 'Sângeorgiu de Mureș', lat: 46.57, lon: 24.62 },
  { name: 'Malnaș-Băi', lat: 45.97, lon: 25.8 },
  { name: 'Vâlcele', lat: 45.9, lon: 25.83 },
  { name: 'Ocna Mureș', lat: 46.39, lon: 23.85 },
  { name: 'Sugaș Băi', lat: 45.83, lon: 25.85 },
  { name: 'Lacul Roșu', lat: 46.79, lon: 25.79 },
  { name: 'Păltiniș', lat: 45.66, lon: 23.93 },
  { name: 'Pârâul Rece', lat: 45.5, lon: 25.5 },
  { name: 'Poiana Brașov', lat: 45.59, lon: 25.55 },
  { name: 'Predeal', lat: 45.5, lon: 25.57 },
  { name: 'Băile Homorod', lat: 46.32, lon: 25.5 },
  { name: 'Corund', lat: 46.49, lon: 25.18 },
  { name: 'Cristuru Secuiesc', lat: 46.29, lon: 25.03 },
  { name: 'Jigodin-Băi', lat: 46.34, lon: 25.81 },
  { name: 'Miercurea Sibiului', lat: 45.88, lon: 23.8 },
  { name: 'Odorheiu Secuiesc', lat: 46.3, lon: 25.29 },
  { name: 'Ozunca-Băi', lat: 46.02, lon: 25.92 },
  { name: 'Remetea', lat: 46.79, lon: 25.51 },
  { name: 'Biborțeni', lat: 46.13, lon: 25.63 },
]

/* ---- Fișe de stațiune — DOAR cele cu date reale în registru ------------- */
export type StationCardData = { factors: string; hosting?: string }

export const stationCards: Record<string, StationCardData> = {
  Borsec: {
    factors:
      'ape minerale carbogazoase, bicarbonatate, calcice, magneziene cu o mineralizare cuprinsă între 2.3-7.1 g/l, nămol de turbă, bioclimat montan',
    hosting: 'Fontana SPA & Balneo',
  },
  Covasna: {
    factors:
      'ape minerale cu mare varietate a compoziției fizico-chimice; ape minerale carbogazoase, bicarbonatate, clorurosodice, iodobromurate, feruginoase, arsenicale sau ușor sulfuroase cu o mineralizare de 3.2-22.5 g/l, apă minerală bogată în acid carbonic de origine vulcanică, mofete',
    hosting:
      'Hotel Căprioara, Hotel Cerbul, Hotel Covasna, Hotel Montana, Spitalul de Recuperare Cardio-Vasculară',
  },
  Sovata: {
    factors:
      'apă minerală clorurată, sodică a lacurilor helioterme de mare concentrație, nămol sapropelic din lacuri și bioclimat de cruțare',
    hosting: 'Baza de tratament Ensana, Baza de tratament Aluniș',
  },
}

/* ---- Categoriile de afecțiuni ------------------------------------------
   Cele 44 de afecțiuni din registru, grupate în nouă categorii.
   🔴 Gruparea e PROPUNEREA NOASTRĂ, de confirmat medical cu clientul.
   `published` = afecțiunile pentru care avem maparea completă pe stațiuni.
   Restul se declară onest ca nepublicate — nu se completează din intuiție. */
export type Affliction = { id: string; name: string; short: string; stations: string[] }
export type Category = { id: string; name: string; total: number; afflictions: Affliction[] }

export const categories: Category[] = [
  {
    id: 'reuma',
    name: 'Reumatologice și aparat locomotor',
    total: 7,
    afflictions: [],
  },
  {
    id: 'cardio',
    name: 'Cardiovasculare',
    total: 15,
    afflictions: [
      {
        id: 'cardio-gen',
        name: 'Afecțiuni cardiovasculare',
        short: 'Cardiovasculare',
        stations: [
          'Covasna', 'Corund', 'Jigodin-Băi', 'Odorheiu Secuiesc',
          'Ozunca-Băi', 'Remetea', 'Sugaș Băi', 'Vâlcele',
        ],
      },
      {
        id: 'arterio',
        name: 'Arteriopatii',
        short: 'Arteriopatii',
        stations: ['Bálványos', 'Băile Tușnad', 'Covasna', 'Malnaș-Băi', 'Borsec'],
      },
    ],
  },
  { id: 'endo', name: 'Endocrine și metabolice', total: 7, afflictions: [] },
  { id: 'neuro', name: 'Neurologice și psihice', total: 4, afflictions: [] },
  { id: 'resp', name: 'Respiratorii și ORL', total: 3, afflictions: [] },
  { id: 'dig', name: 'Digestive și hepato-biliare', total: 3, afflictions: [] },
  { id: 'renal', name: 'Renale și urinare', total: 2, afflictions: [] },
  {
    id: 'recup',
    name: 'Recuperare și convalescență',
    total: 2,
    afflictions: [
      {
        id: 'surmenaj',
        name: 'Stări de șurmenaj fizic și intelectual',
        short: 'Șurmenaj',
        stations: ['Lacul Roșu', 'Păltiniș', 'Pârâul Rece', 'Poiana Brașov', 'Predeal'],
      },
    ],
  },
  {
    id: 'gineco',
    name: 'Ginecologice',
    total: 1,
    afflictions: [
      {
        id: 'gineco-gen',
        name: 'Afecțiuni ginecologice',
        short: 'Ginecologice',
        stations: [
          'Sovata', 'Ocna Sibiului', 'Bazna', 'Ocna Mureș', 'Sângeorgiu de Mureș',
        ],
      },
    ],
  },
]

/* ---- Factorii de cură — vocabularul fizic al nișei ---------------------- */
export const factors = [
  { name: 'Mofeta', text: 'Grota de gaz uscat vulcanic în care se stă până la brâu.' },
  { name: 'Izvorul captat', text: 'Apă care miroase a fier și a sulf, băută din cana cu cioc, plimbându-te.' },
  { name: 'Nămolul sapropelic', text: 'Nămol negru scos de pe fundul lacului.' },
  { name: 'Lacul heliotermic', text: 'La Sovata: cald la suprafață, rece dedesubt, din cauza sării.' },
  { name: 'Galeria de salină', text: 'Pereți albi, scaune pliante, aer de sare.' },
  { name: 'Bazinul de apă sărată', text: 'Aburește iarna, sub pavilionul alb de cură cu coloane din secolul XIX.' },
]

/* ---- Drumul către cură -------------------------------------------------- */
export const steps = [
  {
    n: '1',
    title: 'Consultul medical',
    text: 'Discutați cu medicul dumneavoastră. Indicația de cură și biletul de trimitere vin de la el.',
  },
  {
    n: '2',
    title: 'Alegerea stațiunii',
    text: 'Alegeți din stațiunile în care se tratează afecțiunea, în funcție de distanță și de sezon.',
  },
  {
    n: '3',
    title: 'Contactul cu structura de primire',
    text: 'Rezervarea și programarea procedurilor se fac direct la structura de primire din stațiune.',
  },
]

export const cluster = {
  title: 'Clusterul Balneoturistic Transylvania',
  text: 'BalneoVita adună la un loc informația despre stațiunile balneare din Transilvania și o organizează după afecțiune, nu după destinație. Site-ul nu vinde nimic: nu are coș, prețuri sau rezervări.',
  cta: 'Despre cluster',
}

export const news = {
  title: 'Anunțuri',
  empty: 'Secțiunea de noutăți nu are încă articole publicate.',
}
