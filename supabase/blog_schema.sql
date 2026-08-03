-- Run this in the Supabase SQL editor (Project -> SQL Editor -> New query).
--
-- Creates the "blog_posts" table that powers the /blog/ and /es/blog/ knowledge
-- hub, plus a minimal "blog_subscribers" table for the newsletter capture form.
--
-- There is no admin UI for the blog: content is written directly into
-- blog_posts (via the scripts/seed-blog.mjs script or the Supabase dashboard),
-- and the public site reads only published rows through RLS. Both languages
-- live on the same row (parallel *_en / *_es columns), so a post can also be
-- published in one language only by leaving the other language's columns null.

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz,
  is_featured boolean not null default false,

  category text not null,
  category_label_en text not null,
  category_label_es text,
  tags text[] not null default '{}',

  slug_en text unique,
  slug_es text unique,
  title_en text,
  title_es text,
  seo_title_en text,
  seo_title_es text,
  meta_description_en text,
  meta_description_es text,
  focus_keyword_en text,
  focus_keyword_es text,
  excerpt_en text,
  excerpt_es text,
  content_en text,
  content_es text,
  faq_en jsonb not null default '[]',
  faq_es jsonb not null default '[]',
  reading_time_minutes_en int,
  reading_time_minutes_es int,

  featured_image_url text,
  featured_image_alt_en text,
  featured_image_alt_es text,
  gallery_images jsonb not null default '[]',

  author_name text not null default 'Spain Private Transfers Editorial Team',
  author_avatar_url text,
  author_title_en text,
  author_title_es text,
  author_bio_en text,
  author_bio_es text,

  canonical_url_override text,
  og_image_url text,

  constraint blog_posts_has_a_slug check (slug_en is not null or slug_es is not null)
);

comment on table public.blog_posts is 'Knowledge-hub articles for /blog/ and /es/blog/. Both locales live on the same row; content is seeded directly (no admin UI).';

alter table public.blog_posts enable row level security;

-- Public website (anon + authenticated) can only read published, live posts.
drop policy if exists "Public can read published posts" on public.blog_posts;
create policy "Public can read published posts"
  on public.blog_posts
  for select
  to anon, authenticated
  using (status = 'published' and published_at <= now());

create or replace function public.set_blog_posts_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists blog_posts_set_updated_at on public.blog_posts;
create trigger blog_posts_set_updated_at
  before update on public.blog_posts
  for each row
  execute function public.set_blog_posts_updated_at();

create index if not exists blog_posts_status_published_idx on public.blog_posts (status, published_at desc);
create index if not exists blog_posts_category_idx on public.blog_posts (category);

-- ---------------------------------------------------------------------------

create table if not exists public.blog_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique,
  locale text not null default 'en' check (locale in ('en', 'es')),
  source_path text
);

comment on table public.blog_subscribers is 'Newsletter signups captured from the blog. No app role reads this back; query via the Supabase dashboard.';

alter table public.blog_subscribers enable row level security;

drop policy if exists "Allow public newsletter signups" on public.blog_subscribers;
create policy "Allow public newsletter signups"
  on public.blog_subscribers
  for insert
  to anon
  with check (true);
