-- Self-contained for enquiry tables; does not require the unrelated career migration.
-- Existing rows remain valid. Unique request keys deduplicate retries across Workers.
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
alter table public.contact_submissions enable row level security;
alter table public.consultation_submissions enable row level security;
revoke all on public.contact_submissions, public.consultation_submissions from anon, authenticated;
grant all on public.contact_submissions, public.consultation_submissions to service_role;
alter table public.contact_submissions
  add column if not exists request_key uuid,
  add column if not exists request_hash text,
  add column if not exists notification_status text not null default 'legacy',
  add column if not exists notification_id text;
alter table public.consultation_submissions
  add column if not exists request_key uuid,
  add column if not exists request_hash text,
  add column if not exists notification_status text not null default 'legacy',
  add column if not exists notification_id text;
alter table public.contact_submissions alter column notification_status set default 'pending';
alter table public.consultation_submissions alter column notification_status set default 'pending';
create unique index if not exists contact_submissions_request_key_idx on public.contact_submissions (request_key);
create unique index if not exists consultation_submissions_request_key_idx on public.consultation_submissions (request_key);
notify pgrst, 'reload schema';
commit;
