-- Client Project Portal — schema, RLS, storage policies, seed admin
-- Run this once in the Supabase SQL editor (Project → SQL Editor → New query).
-- Safe to re-run: tables/indexes use IF NOT EXISTS, policies are dropped and recreated.

create extension if not exists "pgcrypto";

-- ============================================================================
-- TABLES
-- ============================================================================

create table if not exists public.admins (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  added_by text,
  created_at timestamptz not null default now()
);

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  phone text,
  approved boolean not null default true,
  added_by text,
  created_at timestamptz not null default now()
);

do $$ begin
  create type project_status as enum ('planning', 'in_progress', 'completed');
exception
  when duplicate_object then null;
end $$;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  project_type text,
  status project_status not null default 'planning',
  created_by text,
  created_at timestamptz not null default now()
);

create table if not exists public.project_clients (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  client_email text not null references public.clients(email) on update cascade on delete cascade,
  created_at timestamptz not null default now(),
  unique (project_id, client_email)
);

create table if not exists public.project_images (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  storage_path text not null,
  category text,
  caption text,
  uploaded_by text,
  uploaded_at timestamptz not null default now()
);

create table if not exists public.project_updates (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  title text not null,
  description text,
  status text,
  update_date date not null default current_date,
  created_by text,
  created_at timestamptz not null default now()
);

create index if not exists idx_project_clients_project_id on public.project_clients(project_id);
create index if not exists idx_project_clients_client_email on public.project_clients(client_email);
create index if not exists idx_project_images_project_id on public.project_images(project_id);
create index if not exists idx_project_updates_project_id on public.project_updates(project_id);

-- ============================================================================
-- EMAIL NORMALIZATION
-- Supabase Auth lowercases emails on login, so allowlist rows must match —
-- otherwise a mixed-case email typed by an admin silently locks a client out.
-- ============================================================================

create or replace function public.normalize_email()
returns trigger
language plpgsql
as $$
begin
  new.email = lower(trim(new.email));
  return new;
end;
$$;

drop trigger if exists trg_admins_normalize_email on public.admins;
create trigger trg_admins_normalize_email
  before insert or update on public.admins
  for each row execute function public.normalize_email();

drop trigger if exists trg_clients_normalize_email on public.clients;
create trigger trg_clients_normalize_email
  before insert or update on public.clients
  for each row execute function public.normalize_email();

create or replace function public.normalize_client_email()
returns trigger
language plpgsql
as $$
begin
  new.client_email = lower(trim(new.client_email));
  return new;
end;
$$;

drop trigger if exists trg_project_clients_normalize_email on public.project_clients;
create trigger trg_project_clients_normalize_email
  before insert or update on public.project_clients
  for each row execute function public.normalize_client_email();

-- ============================================================================
-- HELPER FUNCTIONS (SECURITY DEFINER — bypass RLS on the allowlist tables
-- themselves so policies that call these don't recurse or deadlock)
-- ============================================================================

-- Used inside RLS policies for an authenticated admin session.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admins a
    where a.email = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

-- Used inside RLS policies for an authenticated client session.
create or replace function public.is_client_project(p_project_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.project_clients pc
    where pc.project_id = p_project_id
      and pc.client_email = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

-- Pre-login allowlist checks — callable by the anon key, before any OTP is
-- sent. Return only a boolean so the allowlist contents are never exposed.
create or replace function public.is_client_email_allowed(check_email text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.clients c
    where c.email = lower(trim(check_email))
      and c.approved = true
  );
$$;

create or replace function public.is_admin_email_allowed(check_email text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admins a
    where a.email = lower(trim(check_email))
  );
$$;

grant execute on function public.is_client_email_allowed(text) to anon, authenticated;
grant execute on function public.is_admin_email_allowed(text) to anon, authenticated;
grant execute on function public.is_admin() to authenticated;
grant execute on function public.is_client_project(uuid) to authenticated;

-- ============================================================================
-- ROW LEVEL SECURITY
-- ============================================================================

alter table public.admins enable row level security;
alter table public.clients enable row level security;
alter table public.projects enable row level security;
alter table public.project_clients enable row level security;
alter table public.project_images enable row level security;
alter table public.project_updates enable row level security;

-- admins: admin-only, no client access. Only an existing admin can add one,
-- so there is no self-service admin signup path.
drop policy if exists "admins_select_admin" on public.admins;
create policy "admins_select_admin" on public.admins for select using (public.is_admin());

drop policy if exists "admins_insert_admin" on public.admins;
create policy "admins_insert_admin" on public.admins for insert with check (public.is_admin());

drop policy if exists "admins_update_admin" on public.admins;
create policy "admins_update_admin" on public.admins for update using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admins_delete_admin" on public.admins;
create policy "admins_delete_admin" on public.admins for delete using (public.is_admin());

-- clients: admin full CRUD; a client may read their own allowlist row.
drop policy if exists "clients_select_admin" on public.clients;
create policy "clients_select_admin" on public.clients for select using (public.is_admin());

drop policy if exists "clients_select_self" on public.clients;
create policy "clients_select_self" on public.clients for select using (lower(coalesce(auth.jwt() ->> 'email', '')) = email);

drop policy if exists "clients_insert_admin" on public.clients;
create policy "clients_insert_admin" on public.clients for insert with check (public.is_admin());

drop policy if exists "clients_update_admin" on public.clients;
create policy "clients_update_admin" on public.clients for update using (public.is_admin()) with check (public.is_admin());

drop policy if exists "clients_delete_admin" on public.clients;
create policy "clients_delete_admin" on public.clients for delete using (public.is_admin());

-- projects: admin full CRUD; client read-only via project_clients.
drop policy if exists "projects_select_admin" on public.projects;
create policy "projects_select_admin" on public.projects for select using (public.is_admin());

drop policy if exists "projects_select_client" on public.projects;
create policy "projects_select_client" on public.projects for select using (public.is_client_project(id));

drop policy if exists "projects_insert_admin" on public.projects;
create policy "projects_insert_admin" on public.projects for insert with check (public.is_admin());

drop policy if exists "projects_update_admin" on public.projects;
create policy "projects_update_admin" on public.projects for update using (public.is_admin()) with check (public.is_admin());

drop policy if exists "projects_delete_admin" on public.projects;
create policy "projects_delete_admin" on public.projects for delete using (public.is_admin());

-- project_clients: admin full CRUD; client may see their own links.
drop policy if exists "project_clients_select_admin" on public.project_clients;
create policy "project_clients_select_admin" on public.project_clients for select using (public.is_admin());

drop policy if exists "project_clients_select_self" on public.project_clients;
create policy "project_clients_select_self" on public.project_clients for select using (lower(coalesce(auth.jwt() ->> 'email', '')) = client_email);

drop policy if exists "project_clients_insert_admin" on public.project_clients;
create policy "project_clients_insert_admin" on public.project_clients for insert with check (public.is_admin());

drop policy if exists "project_clients_update_admin" on public.project_clients;
create policy "project_clients_update_admin" on public.project_clients for update using (public.is_admin()) with check (public.is_admin());

drop policy if exists "project_clients_delete_admin" on public.project_clients;
create policy "project_clients_delete_admin" on public.project_clients for delete using (public.is_admin());

-- project_images: admin full CRUD; client read-only, scoped to their projects.
drop policy if exists "project_images_select_admin" on public.project_images;
create policy "project_images_select_admin" on public.project_images for select using (public.is_admin());

drop policy if exists "project_images_select_client" on public.project_images;
create policy "project_images_select_client" on public.project_images for select using (public.is_client_project(project_id));

drop policy if exists "project_images_insert_admin" on public.project_images;
create policy "project_images_insert_admin" on public.project_images for insert with check (public.is_admin());

drop policy if exists "project_images_update_admin" on public.project_images;
create policy "project_images_update_admin" on public.project_images for update using (public.is_admin()) with check (public.is_admin());

drop policy if exists "project_images_delete_admin" on public.project_images;
create policy "project_images_delete_admin" on public.project_images for delete using (public.is_admin());

-- project_updates: admin full CRUD; client read-only, scoped to their projects.
drop policy if exists "project_updates_select_admin" on public.project_updates;
create policy "project_updates_select_admin" on public.project_updates for select using (public.is_admin());

drop policy if exists "project_updates_select_client" on public.project_updates;
create policy "project_updates_select_client" on public.project_updates for select using (public.is_client_project(project_id));

drop policy if exists "project_updates_insert_admin" on public.project_updates;
create policy "project_updates_insert_admin" on public.project_updates for insert with check (public.is_admin());

drop policy if exists "project_updates_update_admin" on public.project_updates;
create policy "project_updates_update_admin" on public.project_updates for update using (public.is_admin()) with check (public.is_admin());

drop policy if exists "project_updates_delete_admin" on public.project_updates;
create policy "project_updates_delete_admin" on public.project_updates for delete using (public.is_admin());

-- ============================================================================
-- STORAGE — bucket + policies
-- Upload path convention (enforced by the app, not the DB): {project_id}/{uuid}-{filename}
-- ============================================================================

insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', false)
on conflict (id) do nothing;

drop policy if exists "project_images_storage_admin_select" on storage.objects;
create policy "project_images_storage_admin_select" on storage.objects
  for select using (bucket_id = 'project-images' and public.is_admin());

drop policy if exists "project_images_storage_admin_insert" on storage.objects;
create policy "project_images_storage_admin_insert" on storage.objects
  for insert with check (bucket_id = 'project-images' and public.is_admin());

drop policy if exists "project_images_storage_admin_update" on storage.objects;
create policy "project_images_storage_admin_update" on storage.objects
  for update using (bucket_id = 'project-images' and public.is_admin())
  with check (bucket_id = 'project-images' and public.is_admin());

drop policy if exists "project_images_storage_admin_delete" on storage.objects;
create policy "project_images_storage_admin_delete" on storage.objects
  for delete using (bucket_id = 'project-images' and public.is_admin());

drop policy if exists "project_images_storage_client_select" on storage.objects;
create policy "project_images_storage_client_select" on storage.objects
  for select using (
    bucket_id = 'project-images'
    and public.is_client_project(((storage.foldername(name))[1])::uuid)
  );

-- ============================================================================
-- SEED
-- ============================================================================

insert into public.admins (email, name, added_by)
values ('hello@nestiquestudio.in', 'Nestique Studio', 'migration_seed')
on conflict (email) do nothing;
