-- save_pending_registration() compared p_email against auth.users.email with
-- case-sensitive equality. Supabase normalizes auth.users.email to lowercase
-- (and trims it) at signup, but p_email is whatever the client sent verbatim.
-- Any casing difference (e.g. mobile keyboards auto-capitalizing the first
-- letter of an email field) made the match fail and raised
-- 'User does not match email' even though the user_id was correct. Compare
-- case-insensitively and store the normalized value.

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
declare
  v_email text := lower(trim(p_email));
begin
  if not exists (
    select 1 from auth.users
    where id = p_user_id and lower(email) = v_email
  ) then
    raise exception 'User does not match email' using errcode = '42501';
  end if;

  insert into public.pending_registrations (
    user_id, email, company_name, workspace_name, industry, country,
    template, time_zone, currency, locale, onboarding_payload, status
  )
  values (
    p_user_id, v_email, p_company_name, p_workspace_name, p_industry, p_country,
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
