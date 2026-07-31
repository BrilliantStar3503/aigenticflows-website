-- Billing & Subscription Foundation (Phase 1) — self-serve provisioning.
--
-- The CRM repo's SubscriptionService (lib/billing/subscription-service.ts)
-- is the canonical activation path for everything triggered from inside the
-- CRM app (admin-provisioning, and every Super Admin Billing action). This
-- self-serve RPC lives in a different runtime — a Postgres function in this
-- repo — and can't call a TypeScript service directly, so it mirrors that
-- same shape here in SQL instead. Same tables (public.subscriptions /
-- public.subscription_events, created by the CRM repo's
-- 20260731000200_billing_subscriptions.sql migration against this same
-- shared Supabase project), same activation_method ('trial'), same event
-- ('trial_started').
--
-- Without this, self-serve workspaces would have trial_ends_at set on
-- agencies but no subscriptions row at all — a real violation of "every
-- active workspace must always have a valid subscription." See
-- docs/BILLING_SUBSCRIPTION_ARCHITECTURE.md (CRM repo) for the full design.

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
  v_trial_ends_at timestamptz := now() + interval '14 days';
  v_subscription_id uuid;
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
      insert into public.agencies (name, slug, industry, time_zone, currency, locale, branding, trial_ends_at)
      values (
        p_agency_name, v_slug, p_industry, p_time_zone, p_currency, p_locale,
        case when p_template is not null then jsonb_build_object('template', p_template) else '{}'::jsonb end,
        v_trial_ends_at
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

  -- Every workspace obtains access through a subscription — mirrors
  -- SubscriptionService.activateTrial() exactly (plan defaults to 'trial'
  -- at the column level, same as agencies.plan already does).
  insert into public.subscriptions (agency_id, plan, status, ends_at, activation_method, activated_by, notes)
  values (v_agency_id, 'trial', 'trial', v_trial_ends_at, 'trial', v_user_id, 'Self-serve signup.')
  returning id into v_subscription_id;

  insert into public.subscription_events (subscription_id, agency_id, event_type, actor_user_id, metadata)
  values (v_subscription_id, v_agency_id, 'trial_started', v_user_id, jsonb_build_object('source', 'self_serve'));

  return query select v_agency_id, v_unit_id;
end;
$$;

grant execute on function public.provision_trial_agency(text, text, text, text, text, text, text) to authenticated;
