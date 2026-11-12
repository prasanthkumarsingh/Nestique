-- Run in the Supabase SQL editor or apply with Supabase migrations.
-- Submissions are written only by server-side API routes using service_role.
begin;

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  city text,
  subject text,
  message text not null
);

create table if not exists public.consultation_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  city text,
  project_type text,
  timeline text,
  land text,
  message text
);

create table if not exists public.career_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  city text,
  position text not null,
  experience text,
  portfolio text,
  message text
);

alter table public.contact_submissions enable row level security;
alter table public.consultation_submissions enable row level security;
alter table public.career_applications enable row level security;

revoke all on public.contact_submissions, public.consultation_submissions,
  public.career_applications from anon, authenticated;
grant all on public.contact_submissions, public.consultation_submissions,
  public.career_applications to service_role;

notify pgrst, 'reload schema';
commit;
