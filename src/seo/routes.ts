export const PATHS = {
  home: '/',
  about: '/o-kancelarii',
  specializations: '/specjalizacje',
  price: '/cennik',
  online: '/porady-online',
  blog: '/blog',
  rodo: '/polityka-prywatnosci',
  admin: '/admin',
} as const;

export type PageKey = keyof typeof PATHS;

export const SPECIALIZATION_SLUGS = [
  'prawo-cywilne',
  'prawo-karne',
  'prawo-rodzinne',
  'prawo-spadkowe',
  'prawo-gospodarcze',
  'prawo-pracy',
  'upadlosc-konsumencka',
] as const;

export const SPECIALIZATION_LABELS = [
  'Prawo cywilne',
  'Prawo karne',
  'Prawo rodzinne',
  'Prawo spadkowe',
  'Prawo gospodarcze',
  'Prawo pracy',
  'Upadłość konsumencka',
];

export const specializationPath = (slug: string) => `${PATHS.specializations}/${slug}`;

export const blogPath = (slug: string) => `${PATHS.blog}/${slug}`;

const PL: Record<string, string> = { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' };

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (c) => PL[c])
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

/** Unikalne slugi artykułów (przy powtórzeniu tytułu dopisujemy numer). */
export function articleSlugs(articles: { id: string; title: string }[]): Map<string, string> {
  const used = new Set<string>();
  const map = new Map<string, string>();
  for (const a of articles) {
    const base = slugify(a.title) || 'artykul';
    let slug = base;
    let i = 2;
    while (used.has(slug)) slug = `${base}-${i++}`;
    used.add(slug);
    map.set(a.id, slug);
  }
  return map;
}

export interface PageMeta {
  title: string;
  description: string;
}

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'Radca prawny Legnica i Dolny Śląsk – Kancelaria Katarzyna Adamus-Mielniczuk',
    description:
      'Kancelaria Radcy Prawnego w Legnicy: prawo karne, cywilne, rodzinne, spadkowe, gospodarcze, pracy i upadłość konsumencka. Pomoc prawna w całym województwie dolnośląskim oraz e-porady online.',
  },
  '/o-kancelarii': {
    title: 'O Kancelarii – radca prawny Katarzyna Adamus-Mielniczuk, Legnica',
    description:
      'Radca prawny Katarzyna Adamus-Mielniczuk – wykształcenie, doświadczenie, zakres pomocy prawnej i zasady współpracy. Konsultacje w Legnicy oraz online dla Klientów z całego Dolnego Śląska.',
  },
  '/specjalizacje': {
    title: 'Specjalizacje – obszary praktyki kancelarii radcy prawnego w Legnicy',
    description:
      'Prawo cywilne, karne, rodzinne, spadkowe, gospodarcze, pracy oraz upadłość konsumencka. Sprawdź zakres pomocy prawnej Kancelarii Radcy Prawnego w Legnicy.',
  },
  '/specjalizacje/prawo-cywilne': {
    title: 'Prawo cywilne – radca prawny Legnica | Kancelaria Adamus-Mielniczuk',
    description:
      'Umowy, odszkodowania, rękojmia, dobra osobiste, nieruchomości, najem, spory budowlane i egzekucja. Radca prawny w Legnicy – prawo cywilne dla Klientów z Dolnego Śląska.',
  },
  '/specjalizacje/prawo-karne': {
    title: 'Prawo karne – radca prawny Legnica | obrona i pokrzywdzeni',
    description:
      'Obrona w sprawach karnych i reprezentacja pokrzywdzonych: przestępstwa narkotykowe, oszustwa, wypadki drogowe, przemoc domowa, przestępstwa gospodarcze. Radca prawny w Legnicy.',
  },
  '/specjalizacje/prawo-rodzinne': {
    title: 'Prawo rodzinne – rozwód, alimenty, kontakty z dzieckiem | Legnica',
    description:
      'Rozwód i separacja, alimenty, podział majątku, władza rodzicielska, kontakty z dzieckiem, ustalenie ojcostwa. Radca prawny w Legnicy – sprawy rodzinne na Dolnym Śląsku.',
  },
  '/specjalizacje/prawo-spadkowe': {
    title: 'Prawo spadkowe – stwierdzenie nabycia spadku, zachowek | Legnica',
    description:
      'Stwierdzenie nabycia spadku, dział spadku, zachowek, testamenty, wydziedziczenie i długi spadkowe. Radca prawny w Legnicy – sprawy spadkowe na Dolnym Śląsku.',
  },
  '/specjalizacje/prawo-gospodarcze': {
    title: 'Prawo gospodarcze – obsługa prawna firm, umowy, windykacja | Legnica',
    description:
      'Bieżąca obsługa prawna przedsiębiorców, umowy handlowe, windykacja należności, spory z kontrahentami i postępowania przed sądami gospodarczymi. Radca prawny w Legnicy.',
  },
  '/specjalizacje/prawo-pracy': {
    title: 'Prawo pracy – radca prawny dla pracowników i pracodawców | Legnica',
    description:
      'Zwolnienia, odwołania od wypowiedzenia, mobbing, zaległe wynagrodzenie, wypadki przy pracy. Radca prawny w Legnicy – prawo pracy dla pracowników i pracodawców.',
  },
  '/specjalizacje/upadlosc-konsumencka': {
    title: 'Upadłość konsumencka – oddłużenie osób fizycznych | Legnica',
    description:
      'Wniosek o ogłoszenie upadłości konsumenckiej, plan spłaty wierzycieli, reprezentacja przed sądem i syndykiem. Radca prawny w Legnicy – pomoc w oddłużeniu.',
  },
  '/cennik': {
    title: 'Cennik – porada prawna 300 zł, honorarium ustalane indywidualnie',
    description:
      'Koszt pierwszej porady prawnej wynosi 300 zł (online lub w Legnicy) i jest zaliczany na poczet honorarium. Dowiedz się, jak ustalamy wynagrodzenie za prowadzenie sprawy.',
  },
  '/porady-online': {
    title: 'Porady prawne online (e-porada) – radca prawny Legnica',
    description:
      'E-porada: konsultacja wideo, telefoniczna lub pisemna z radcą prawnym dla Klientów z całej Polski. Wypełnij formularz – odpowiemy w ciągu 24 godzin.',
  },
  '/blog': {
    title: 'Blog – artykuły i porady prawne | Kancelaria Adamus-Mielniczuk',
    description:
      'Artykuły i porady prawne radcy prawnego z Legnicy: prawo karne, cywilne, rodzinne, spadkowe, gospodarcze i pracy.',
  },
  '/polityka-prywatnosci': {
    title: 'Regulamin i polityka prywatności | Kancelaria Adamus-Mielniczuk',
    description:
      'Regulamin serwisu, zasady korzystania z formularza kontaktowego oraz informacje o przetwarzaniu danych osobowych (RODO).',
  },
};

export const STATIC_PATHS = Object.keys(PAGE_META);
