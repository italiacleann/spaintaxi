-- Run this in the Supabase SQL editor (Project -> SQL Editor -> New query).
-- Creates the table that stores "Get a Quote" form submissions and locks it
-- down so the public (anon) key used by the website can only INSERT rows,
-- never read, update, or delete them.

create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  locale text not null check (locale in ('en', 'es')),
  source_path text,

  pickup_location text not null,
  dropoff_location text not null,
  pickup_date date not null,
  pickup_time time not null,

  is_return_trip boolean not null default false,
  return_date date,
  return_time time,

  passengers text not null,
  suitcases text not null,
  vehicle_preference text not null,
  flight_number text,

  full_name text not null,
  email text not null,
  whatsapp_number text not null,
  country text not null,
  special_requests text,
  privacy_accepted boolean not null default false,

  status text not null default 'new' check (status in ('new', 'contacted', 'booked', 'closed'))
);

comment on table public.quote_requests is 'Leads submitted through the Get a Quote page and the short quote forms embedded across the site.';

-- Enable Row Level Security, then allow only anonymous INSERTs.
alter table public.quote_requests enable row level security;

drop policy if exists "Allow public inserts" on public.quote_requests;
create policy "Allow public inserts"
  on public.quote_requests
  for insert
  to anon
  with check (true);

-- No select/update/delete policy is created for `anon`, so submitted leads
-- cannot be read back from the browser. Read them from the Supabase
-- dashboard (Table Editor) or with the service_role key from a trusted
-- server context only.

create index if not exists quote_requests_created_at_idx on public.quote_requests (created_at desc);
create index if not exists quote_requests_status_idx on public.quote_requests (status);
