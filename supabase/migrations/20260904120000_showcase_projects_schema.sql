-- "Spaces With A Story" — showcase image source
-- Stores which Storage object backs each homepage showcase card. The project
-- copy (title, concept, description, scope, …) stays in
-- src/components/selectedWorks.data.ts and is merged by `slug` at render time.
--
-- Run once in the Supabase SQL editor (Project → SQL Editor → New query).
-- Depends on public.is_admin() from 20260810120000_client_portal_schema.sql.
-- Safe to re-run.

create extension if not exists "pgcrypto";

-- ============================================================================
-- TABLE
-- ============================================================================

create table if not exists public.showcase_projects (
  slug        text primary key,
  image_path  text,                                   -- object path inside the 'showcase' bucket, e.g. 'amogham-telugu-kitchen.jpg'
  alt         text,                                   -- optional; overrides the alt text in selectedWorks.data.ts
  published   boolean     not null default true,
  sort_order  integer     not null default 0,
  updated_at  timestamptz not null default now()
);

comment on table public.showcase_projects is
  'Image source for the homepage "Spaces With A Story" section. Text lives in code; rows are matched to it by slug.';

-- keep updated_at fresh on edits
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_showcase_projects_updated_at on public.showcase_projects;
create trigger trg_showcase_projects_updated_at
  before update on public.showcase_projects
  for each row execute function public.set_updated_at();

-- ============================================================================
-- ROW LEVEL SECURITY
--   public: read published rows (the marketing homepage uses the anon key)
--   admin : full CRUD
-- ============================================================================

alter table public.showcase_projects enable row level security;

drop policy if exists "showcase_projects_select_public" on public.showcase_projects;
create policy "showcase_projects_select_public" on public.showcase_projects
  for select
  to anon, authenticated
  using (published = true);

drop policy if exists "showcase_projects_select_admin" on public.showcase_projects;
create policy "showcase_projects_select_admin" on public.showcase_projects
  for select to authenticated using (public.is_admin());

drop policy if exists "showcase_projects_insert_admin" on public.showcase_projects;
create policy "showcase_projects_insert_admin" on public.showcase_projects
  for insert to authenticated with check (public.is_admin());

drop policy if exists "showcase_projects_update_admin" on public.showcase_projects;
create policy "showcase_projects_update_admin" on public.showcase_projects
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "showcase_projects_delete_admin" on public.showcase_projects;
create policy "showcase_projects_delete_admin" on public.showcase_projects
  for delete to authenticated using (public.is_admin());

-- ============================================================================
-- STORAGE — public bucket for showcase photography
--   Upload path convention: {slug}.{ext}  (e.g. amogham-telugu-kitchen.jpg)
--   Bucket is public: objects are served from a permanent, CDN-cacheable URL.
-- ============================================================================

insert into storage.buckets (id, name, public)
values ('showcase', 'showcase', true)
on conflict (id) do update set public = true;

drop policy if exists "showcase_storage_public_select" on storage.objects;
create policy "showcase_storage_public_select" on storage.objects
  for select using (bucket_id = 'showcase');

drop policy if exists "showcase_storage_admin_insert" on storage.objects;
create policy "showcase_storage_admin_insert" on storage.objects
  for insert to authenticated with check (bucket_id = 'showcase' and public.is_admin());

drop policy if exists "showcase_storage_admin_update" on storage.objects;
create policy "showcase_storage_admin_update" on storage.objects
  for update to authenticated
  using (bucket_id = 'showcase' and public.is_admin())
  with check (bucket_id = 'showcase' and public.is_admin());

drop policy if exists "showcase_storage_admin_delete" on storage.objects;
create policy "showcase_storage_admin_delete" on storage.objects
  for delete to authenticated using (bucket_id = 'showcase' and public.is_admin());

-- ============================================================================
-- SEED — one row per card already in selectedWorks.data.ts.
-- image_path stays null until you upload a photo and paste its path here.
-- ============================================================================

insert into public.showcase_projects (slug, sort_order) values
  ('amogham-telugu-kitchen', 1),
  ('gismat-jail-mandi',      2),
  ('residential-collection', 3)
on conflict (slug) do nothing;
