/*
# Create contact_requests table

1. New Tables
- `contact_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — imię i nazwisko nadawcy
  - `email` (text, not null) — adres e-mail nadawcy
  - `phone` (text) — numer telefonu (opcjonalny)
  - `message` (text, not null) — treść zapytania
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_requests`.
- Public insert (anon + authenticated) — każdy może wysłać zapytanie przez formularz.
- Brak SELECT/UPDATE/DELETE dla anon — tylko administrator może odczytać logi bezpośrednio w bazie.
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_requests" ON contact_requests;
CREATE POLICY "anon_insert_contact_requests" ON contact_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);
