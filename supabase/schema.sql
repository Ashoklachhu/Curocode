-- ============================================================
-- Omni Growth — Supabase Schema
-- Run this in: supabase.com → your project → SQL Editor
-- ============================================================

-- ── LEADS TABLE ──────────────────────────────────────────────
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  phone       text not null,
  service     text not null,
  status      text not null default 'new',   -- new | contacted | converted | lost
  source      text not null default 'hero_form',
  notes       text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Auto-update updated_at on row change
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists leads_updated_at on public.leads;
create trigger leads_updated_at
  before update on public.leads
  for each row execute function public.handle_updated_at();

-- ── ROW LEVEL SECURITY ───────────────────────────────────────
alter table public.leads enable row level security;

-- Allow anonymous users to INSERT (needed when using publishable key from API route)
-- Reads/updates are still fully locked — only service_role can do those
create policy "Anyone can submit a lead"
  on public.leads
  for insert
  to anon
  with check (true);

-- Service role bypass (automatic — no policy needed for service_role)

-- ── INDEXES ─────────────────────────────────────────────────
create index if not exists leads_email_idx     on public.leads (email);
create index if not exists leads_status_idx    on public.leads (status);
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- ── VERIFY ──────────────────────────────────────────────────
-- Run this after to confirm everything is set up:
-- select * from public.leads order by created_at desc limit 10;
