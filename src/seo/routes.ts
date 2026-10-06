export const PATHS = {
  home: '/',
  about: '/o-kancelarii',
  specializations: '/specjalizacje',
  price: '/cennik',
  online: '/porady-online',
  blog: '/blog',
  rodo: '/polityka-prywatnosci',
  notaPrawna: '/nota-prawna',
  regulamin: '/regulamin',
  admin: '/admin',
} as const;

export type PageKey = keyof typeof PATHS;

export const SPECIALIZATION_LABELS = [
  'Prawo cywilne',
  'Prawo karne',
  'Prawo rodzinne',
  'Prawo spadkowe',
  'Prawo gospodarcze',
  'Prawo pracy',
  'Upadłość konsumencka',
];

export const specializationHash = (index: number) => `#spec-${index}`;

export const blogPath = (slug: string) => `${PATHS.blog}/${slug}`;

const PL: Record<string, string> = {
  ą: 'a',
  ć: 'c',
  ę: 'e',
  ł: 'l',
  ń: 'n',
  ó: 'o',
  ś: 's',
  ź: 'z',
  ż: 'z',
};

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
  '/nota-prawna': {
    title: 'Nota prawna | Kancelaria Adamus-Mielniczuk',
    description:
      'Nota prawna serwisu: dane usługodawcy, informacje o wykonywanym zawodzie radcy prawnego, tajemnica zawodowa, prawa autorskie i charakter treści.',
  },
  '/regulamin': {
    title: 'Regulamin serwisu i e-porad | Kancelaria Adamus-Mielniczuk',
    description:
      'Regulamin serwisu i świadczenia porad prawnych online (e-porad): zawarcie umowy, cena 300 zł, odstąpienie od umowy, reklamacje, wzór formularza.',
  },
  '/polityka-prywatnosci': {
    title: 'Polityka prywatności i cookies | Kancelaria Adamus-Mielniczuk',
    description:
      'Polityka prywatności i plików cookies: administrator danych, cele i podstawy przetwarzania, okres przechowywania, prawa osób, pliki cookies.',
  },
};

export const STATIC_PATHS = Object.keys(PAGE_META);
