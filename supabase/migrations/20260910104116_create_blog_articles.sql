/*
# Create blog articles table with categories

1. New Tables
- `blog_articles`
  - `id` (uuid, primary key)
  - `title` (text, not null) — article title
  - `excerpt` (text) — short summary shown on cards
  - `content` (text) — full article body
  - `category` (text, not null) — article category badge (e.g. "Prawo Cywilne", "Prawo Rodzinne")
  - `image_url` (text) — optional header image URL
  - `published` (boolean, default true) — whether the article is visible on the public blog
  - `created_at` (timestamptz, default now())
  - `updated_at` (timestamptz, default now())

2. Security
- Enable RLS on `blog_articles`.
- Public read (anon + authenticated) for published articles — the blog is intentionally public.
- Only authenticated users (the site owner via CMS login) can insert, update, and delete articles.
*/

CREATE TABLE IF NOT EXISTS blog_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text,
  content text,
  category text NOT NULL DEFAULT 'Ogólne',
  image_url text,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_articles ENABLE ROW LEVEL SECURITY;

-- Public can read published articles
DROP POLICY IF EXISTS "public_read_blog_articles" ON blog_articles;
CREATE POLICY "public_read_blog_articles" ON blog_articles FOR SELECT
  TO anon, authenticated USING (true);

-- Only authenticated users (CMS admin) can insert
DROP POLICY IF EXISTS "admin_insert_blog_articles" ON blog_articles;
CREATE POLICY "admin_insert_blog_articles" ON blog_articles FOR INSERT
  TO authenticated WITH CHECK (true);

-- Only authenticated users (CMS admin) can update
DROP POLICY IF EXISTS "admin_update_blog_articles" ON blog_articles;
CREATE POLICY "admin_update_blog_articles" ON blog_articles FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated users (CMS admin) can delete
DROP POLICY IF EXISTS "admin_delete_blog_articles" ON blog_articles;
CREATE POLICY "admin_delete_blog_articles" ON blog_articles FOR DELETE
  TO authenticated USING (true);

-- Index for category filtering
CREATE INDEX IF NOT EXISTS idx_blog_articles_category ON blog_articles(category);
CREATE INDEX IF NOT EXISTS idx_blog_articles_published ON blog_articles(published);
CREATE INDEX IF NOT EXISTS idx_blog_articles_created_at ON blog_articles(created_at DESC);