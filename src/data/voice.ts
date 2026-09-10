/* =========================================================================
   BalneoVita — vocea
   Derivată din pagina principală aprobată la 2026-09-10.
   ========================================================================= */

export const voice = {
  summary:
    'Clar, respectuos, practic. Informează, nu vinde. Se adresează unui om bolnav care caută tratament, nu unui turist care caută vacanță.',

  /* 🔴 DECIZIE DESCHISĂ (2026-09-10)
     Pagina aprobată e la persoana a II-a PLURAL („aveți", „Alegeți",
     „Discutați cu medicul dumneavoastră"). Regula generală a agenției e
     persoana a II-a SINGULAR, informal.
     Argument pentru abatere: public de 50–75 de ani, contextul e medical,
     iar site-ul e al clientului.
     Ce se decide se aplică IDENTIC în RO, HU și EN — inconsecvența între
     limbi pe același produs se vede imediat. */
  address: 'persoana a II-a plural (de confirmat)',

  pillars: [
    'Spune ce e, inclusiv când nu ai date. „13 afecțiuni din această categorie nu sunt încă publicate" e o frază de brand, nu o scuză.',
    'Ordinea gândirii omului: ce am → unde se tratează → ce e acolo → cum ajung.',
    'Termenul balnear real (mofetă, nămol sapropelic, bioclimat) se folosește ca atare, urmat de o explicație scurtă, concretă.',
    'Nicio pagină nu contrazice prima linie a site-ului: nu se vând servicii aici.',
  ],

  audience: {
    primary: 'Om de 50–75 de ani cu o afecțiune cronică, de obicei după recomandarea medicului.',
    secondary: 'Copiii lui, care caută în locul părinților.',
    tertiary: 'Vorbitori de maghiară, din Transilvania și din Ungaria.',
    context: 'Seara, acasă, de pe telefon. Îngrijorat, grăbit să afle un răspuns concret.',
  },

  languages: ['ro', 'hu', 'en'],
}
