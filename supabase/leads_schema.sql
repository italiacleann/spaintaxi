-- Run this in the Supabase SQL editor (Project -> SQL Editor -> New query).
--
-- Supersedes quote_requests.sql: creates the "leads" table used by both the
-- public "Get a Quote" form and the admin dashboard, with the 6-stage status
-- workflow and row-level security scoped so:
--   - the public (anon) key can INSERT rows but never read/edit/delete them
--   - only signed-in Supabase Auth users (the admin) can SELECT/UPDATE/DELETE
--
-- If you already ran quote_requests.sql and have real rows in that table,
-- migrate them first (see the commented block at the bottom) instead of
-- just dropping it.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  locale text not null default 'en' check (locale in ('en', 'es')),
  source_path text,

  customer_name text not null,
  email text not null,
  phone text not null,
  country text not null,

  pickup_location text not null,
  dropoff_location text not null,
  pickup_date date not null,
  pickup_time time not null,
  is_return_trip boolean not null default false,
  return_date date,
  return_time time,

  passengers text not null,
  luggage text not null,
  vehicle_type text not null,
  flight_number text,
  notes text,
  privacy_accepted boolean not null default false,

  status text not null default 'new_request' check (
    status in ('new_request', 'contacted', 'quoted', 'confirmed', 'completed', 'cancelled')
  )
);

comment on table public.leads is 'Leads submitted through the Get a Quote page and the short quote forms embedded across the site.';

alter table public.leads enable row level security;

-- Public website (anon key) can create leads, nothing else.
drop policy if exists "Allow public inserts" on public.leads;
create policy "Allow public inserts"
  on public.leads
  for insert
  to anon
  with check (true);

-- Signed-in admins (Supabase Auth users) can fully manage leads.
-- There is no public sign-up flow, so any authenticated user is trusted
-- as an admin; only create Supabase Auth users you intend to give access.
drop policy if exists "Admins can read leads" on public.leads;
create policy "Admins can read leads"
  on public.leads
  for select
  to authenticated
  using (true);

drop policy if exists "Admins can update leads" on public.leads;
create policy "Admins can update leads"
  on public.leads
  for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Admins can delete leads" on public.leads;
create policy "Admins can delete leads"
  on public.leads
  for delete
  to authenticated
  using (true);

-- Keep updated_at current on every change.
create or replace function public.set_leads_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
  before update on public.leads
  for each row
  execute function public.set_leads_updated_at();

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

-- ---------------------------------------------------------------------------
-- Optional: if you already ran quote_requests.sql and it has real rows,
-- run this instead of "create table if not exists" above to migrate them:
--
-- alter table public.quote_requests rename to leads;
-- alter table public.leads rename column full_name to customer_name;
-- alter table public.leads rename column whatsapp_number to phone;
-- alter table public.leads rename column suitcases to luggage;
-- alter table public.leads rename column vehicle_preference to vehicle_type;
-- alter table public.leads rename column special_requests to notes;
-- alter table public.leads add column if not exists updated_at timestamptz not null default now();
-- alter table public.leads alter column status set default 'new_request';
-- alter table public.leads drop constraint if exists quote_requests_status_check;
-- alter table public.leads add constraint leads_status_check
--   check (status in ('new_request','contacted','quoted','confirmed','completed','cancelled'));
-- update public.leads set status = 'new_request' where status = 'new';
-- update public.leads set status = 'completed' where status = 'booked';
-- update public.leads set status = 'cancelled' where status = 'closed';
-- (then re-run the RLS policies and trigger sections above)
-- ---------------------------------------------------------------------------
