# AIGENTIC Flows

AI-powered multi-tenant CRM, automation, and business operations platform for service-based organizations.

**Status:** Commercial SaaS platform.

This repository is the public marketing site and authenticated onboarding flow. Authenticated sessions are handed off to the separate AIGENTIC Flows CRM application on sign-in.

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build     # production build
npm run start     # run a production build locally
```

Copy `.env.example` to `.env.local` and fill in the required values (Supabase project URL/anon key at minimum — see comments in the file for what's optional).

## Architecture

- **Framework:** Next.js (App Router), React, TypeScript
- **Auth & data:** Supabase (shared project across the public site and CRM)
- **Hosting:** Vercel
- **Multi-tenancy:** each customer is a tenant/agency; the current tenant is Brilliant Star Quartz

## Documentation

Full product documentation: [docs.aigenticflows.com](https://docs.aigenticflows.com) *(placeholder — to be published)*
