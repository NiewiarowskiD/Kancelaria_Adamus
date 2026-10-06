# Wdrożenie na własny serwer

## 1. Przed buildem
Utwórz plik `.env` w katalogu projektu (nie trafia do gita):

```
VITE_SUPABASE_URL=https://<projekt>.supabase.co
VITE_SUPABASE_ANON_KEY=<klucz anon z Supabase → Project Settings → API>
VITE_SITE_URL=https://radcaprawnylegnica.com.pl
```

- `VITE_SITE_URL` – docelowy adres strony (https, bez końcowego `/`); trafia do `canonical`,
  `sitemap.xml` i danych dla Google.
- Przy tym samym buildzie artykuły z bloga zostają zapisane w statycznym HTML.
- W `public/robots.txt` popraw adres w linii `Sitemap:`, jeśli domena jest inna.

## 2. Build
```
npm ci
npm run build
```
Wynik jest w katalogu `dist/`.

## 3. Wgraj na serwer
Wgraj **całą zawartość** katalogu `dist/` do katalogu głównego domeny (np. `public_html`),
razem z plikami ukrytymi (`.htaccess`). Nic więcej nie jest potrzebne (bez Node.js na serwerze).

## 4. Konfiguracja serwera
- **Apache:** wystarczy `.htaccess` z `dist/` (wymaga `mod_rewrite`; `mod_headers` jest opcjonalny).
- **nginx:**
  ```
  root /var/www/kancelaria;
  index index.html;
  error_page 404 /404.html;
  location / { try_files $uri $uri/index.html =404; }
  location ~ ^/(blog/.+|admin)$ { try_files $uri $uri/index.html /index.html; }
  location /assets/ { add_header Cache-Control "public, max-age=31536000, immutable"; }
  ```
- Włącz HTTPS (Let's Encrypt) i przekierowanie `http` → `https` oraz `www` → domena główna.

## 5. Supabase
- Wdróż funkcję formularza: `supabase functions deploy send-contact-email`.
- Sekrety funkcji: `RESEND_API_KEY`, oraz (po zweryfikowaniu domeny w Resend) `OWNER_EMAIL`
  i `FROM_EMAIL`.
- W Authentication → URL Configuration ustaw adres strony jako Site URL.
- Sprawdź zasady dostępu (RLS) tabel `blog_articles` i `contact_requests`.

## 6. Po uruchomieniu
- Sprawdź: `/`, `/kontakt`, `/blog`, `/robots.txt`, `/sitemap.xml`, formularz na `/porady-online`.
- Dodaj domenę w Google Search Console i wyślij `sitemap.xml`.
- Nowe artykuły dodane w panelu są widoczne od razu, a w statycznym HTML i `sitemap.xml` pojawiają
  się po kolejnym `npm run build` i wgraniu `dist/`.
