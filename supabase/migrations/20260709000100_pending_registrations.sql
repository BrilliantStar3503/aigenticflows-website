-- Server-side pending registration
--
-- Replaces browser localStorage as the bridge between "Start Free Trial"
-- signup and post-email-confirmation provisioning, so the flow works
-- across devices (e.g. sign up on phone, confirm on laptop).
--
-- Immediately after signUp() there is no session yet (this project
-- requires email confirmation), so the initial write cannot go through a
-- normal RLS-gated authenticated insert. save_pending_registration() is
-- SECURITY DEFINER and instead verifies the caller supplied both the
-- correct user_id and the matching auth.users.email before writing.
-- Reads/deletes happen later, once the user has a real session, and use
-- ordinary RLS.
--
-- Does not modify public.provision_trial_agency().

create table if not exists public.pending_registrations (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid not null unique references auth.users(id) on delete cascade,
  email              text not null,
  company_name       text not null,
  workspace_name     text not null,
  industry           text not null,
  country            text not null,
  template           text,
  time_zone          text not null,
  currency           text not null,
  locale             text not null,
  onboarding_payload jsonb not null default '{}'::jsonb,
  status             text not null default 'pending',
  last_error         text,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

create index if not exists pending_registrations_email_idx on public.pending_registrations (email);
create index if not exists pending_registrations_status_idx on public.pending_registrations (status);

alter table public.pending_registrations enable row level security;

create policy "pending_registrations_select_own" on public.pending_registrations
  for select to authenticated
  using (user_id = auth.uid());

create policy "pending_registrations_delete_own" on public.pending_registrations
  for delete to authenticated
  using (user_id = auth.uid());

-- No insert/update policy for authenticated/anon: all writes go through
-- save_pending_registration(), which runs as SECURITY DEFINER.

create trigger set_updated_at
  before update on public.pending_registrations
  for each row execute function private.set_updated_at();

create or replace function public.save_pending_registration(
  p_user_id uuid,
  p_email text,
  p_company_name text,
  p_workspace_name text,
  p_industry text,
  p_country text,
  p_industry_template text,
  p_time_zone text,
  p_currency text,
  p_locale text
)
returns void
language plpgsql
security definer
set search_path to ''
as $$
begin
  if not exists (
    select 1 from auth.users
    where id = p_user_id and email = p_email
  ) then
    raise exception 'User does not match email' using errcode = '42501';
  end if;

  insert into public.pending_registrations (
    user_id, email, company_name, workspace_name, industry, country,
    template, time_zone, currency, locale, onboarding_payload, status
  )
  values (
    p_user_id, p_email, p_company_name, p_workspace_name, p_industry, p_country,
    p_industry_template, p_time_zone, p_currency, p_locale,
    jsonb_build_object(
      'companyName', p_company_name,
      'workspaceName', p_workspace_name,
      'industry', p_industry,
      'country', p_country,
      'industryTemplate', p_industry_template
    ),
    'pending'
  )
  on conflict (user_id) do update set
    email = excluded.email,
    company_name = excluded.company_name,
    workspace_name = excluded.workspace_name,
    industry = excluded.industry,
    country = excluded.country,
    template = excluded.template,
    time_zone = excluded.time_zone,
    currency = excluded.currency,
    locale = excluded.locale,
    onboarding_payload = excluded.onboarding_payload,
    status = 'pending',
    last_error = null,
    updated_at = now();
end;
$$;

grant execute on function public.save_pending_registration(uuid, text, text, text, text, text, text, text, text, text)
  to anon, authenticated;
