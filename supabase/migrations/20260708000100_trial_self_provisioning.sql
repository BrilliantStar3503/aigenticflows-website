-- Trial self-provisioning
--
-- Adds MVP-required organization settings columns to agencies, and a
-- SECURITY DEFINER bootstrap function so a brand-new authenticated user
-- with no existing membership can create their own agency, a default
-- unit, and become its owner in one atomic transaction.
--
-- Existing RLS on agencies/units/memberships only allows inserts from
-- super-admins or users who already hold an owner/manager membership in
-- the target agency, which makes self-serve trial signup impossible
-- without this function. It mirrors the SECURITY DEFINER + validation
-- style already used by public.create_membership().

alter table public.agencies
  add column if not exists industry text,
  add column if not exists time_zone text,
  add column if not exists currency text,
  add column if not exists locale text;

create or replace function public.provision_trial_agency(
  p_agency_name text,
  p_industry text,
  p_time_zone text,
  p_currency text,
  p_locale text,
  p_unit_name text,
  p_template text default null
)
returns table (agency_id uuid, unit_id uuid)
language plpgsql
security definer
set search_path to ''
as $$
declare
  v_user_id  uuid := (select auth.uid());
  v_slug     text;
  v_agency_id uuid;
  v_unit_id  uuid;
  v_attempt  int := 0;
begin
  if v_user_id is null then
    raise exception 'Not authenticated' using errcode = '42501';
  end if;

  if exists (
    select 1 from public.memberships
    where user_id = v_user_id and status = 'active'
  ) then
    raise exception 'You already belong to an agency' using errcode = 'P0001';
  end if;

  v_slug := left(regexp_replace(lower(trim(p_agency_name)), '[^a-z0-9]+', '-', 'g'), 40);
  v_slug := trim(both '-' from v_slug);
  if v_slug is null or length(v_slug) < 2 then
    v_slug := 'agency';
  end if;

  loop
    v_attempt := v_attempt + 1;
    begin
      insert into public.agencies (name, slug, industry, time_zone, currency, locale, branding)
      values (
        p_agency_name, v_slug, p_industry, p_time_zone, p_currency, p_locale,
        case when p_template is not null then jsonb_build_object('template', p_template) else '{}'::jsonb end
      )
      returning id into v_agency_id;
      exit;
    exception when unique_violation or check_violation then
      if v_attempt >= 5 then
        raise exception 'Could not generate a unique workspace slug' using errcode = 'P0001';
      end if;
      v_slug := left(v_slug, 33) || '-' || substr(md5(random()::text), 1, 6);
    end;
  end loop;

  insert into public.units (agency_id, name)
  values (v_agency_id, p_unit_name)
  returning id into v_unit_id;

  insert into public.memberships (agency_id, user_id, role, unit_id, status)
  values (v_agency_id, v_user_id, 'owner', null, 'active');

  return query select v_agency_id, v_unit_id;
end;
$$;

grant execute on function public.provision_trial_agency(text, text, text, text, text, text, text) to authenticated;
