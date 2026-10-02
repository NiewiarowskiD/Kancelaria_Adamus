export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://radcaprawnylegnica.com.pl';
export const SITE_NAME = 'Kancelaria Radcy Prawnego Katarzyna Adamus-Mielniczuk';
export const PHONE = '+48 505 810 279';
export const PHONE_HREF = 'tel:+48505810279';
export const EMAIL = 'kancelaria@radcaprawnylegnica.com.pl';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const CITIES = [
  'Legnica', 'Wrocław', 'Wałbrzych', 'Jelenia Góra', 'Lubin', 'Głogów',
  'Świdnica', 'Bolesławiec', 'Złotoryja', 'Jawor', 'Chojnów', 'Polkowice',
];
