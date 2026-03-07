# MusicMetrics

MusicMetrics is a production-oriented, global English-language music performance intelligence platform built on Next.js App Router and TypeScript.

## Architecture overview

- **Public surface:** SEO-first chart, artist, track, country, insight, and trust pages.
- **Admin surface:** authenticated operational control center for content, mappings, sync jobs, SEO overrides, redirects, and settings.
- **Data foundation:** Prisma schema designed for Supabase Postgres with sync-ready entities.
- **Integration readiness:** Spotify and YouTube service scaffolds + protected internal sync endpoints.

## Route map

### Public
- `/`
- `/charts`, `/charts/[slug]`
- `/artists`, `/artists/[slug]`
- `/tracks`, `/tracks/[slug]`
- `/countries`, `/countries/[slug]`
- `/insights`, `/insights/[slug]`
- `/search`
- `/compare`
- `/methodology`
- `/data-sources`
- `/about`
- `/contact`
- `/privacy`
- `/terms`

### Admin
- `/admin/login`
- `/admin/dashboard`
- `/admin/artists`, `/admin/artists/[id]`
- `/admin/tracks`, `/admin/tracks/[id]`
- `/admin/charts`, `/admin/charts/[id]`
- `/admin/countries`, `/admin/countries/[id]`
- `/admin/insights`, `/admin/insights/new`, `/admin/insights/[id]`
- `/admin/sync-jobs`
- `/admin/source-mapping`
- `/admin/seo`
- `/admin/redirects`
- `/admin/settings`

## Database summary

`prisma/schema.prisma` defines core entities:

- admins
- artists
- artist platform mappings
- tracks + track_artists
- albums
- countries
- charts + snapshots + entries
- daily metrics tables
- insights
- sync_jobs + sync_job_logs
- source_mappings
- redirects
- seo_overrides
- site_settings

## Environment variables

See `.env.example`.

Required for full setup:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `DATABASE_URL`
- `DIRECT_URL`
- `SPOTIFY_CLIENT_ID`
- `SPOTIFY_CLIENT_SECRET`
- `YOUTUBE_API_KEY`
- `CRON_SECRET`
- `SENTRY_DSN`
- `ADMIN_SEED_EMAIL`
- `ADMIN_SEED_PASSWORD`

## Local setup

```bash
npm install
cp .env.example .env.local
npm run prisma:generate
npm run dev
```

## Quality commands

```bash
npm run lint
npm run typecheck
npm run build
```

## Scheduled sync jobs

GitHub Actions workflows:

- `.github/workflows/sync-spotify.yml`
- `.github/workflows/sync-youtube.yml`

Each workflow calls protected internal endpoints with `x-cron-secret`.

## Deployment notes

- Preferred hosting: **Vercel**
- Database: **Supabase Postgres**
- Add environment variables in Vercel project settings.
- Configure repository secrets for GitHub Actions (`SITE_URL`, `CRON_SECRET`).

## Phase 2 priorities

- Replace seed/scaffold sync routes with full ingestion pipelines.
- Add authenticated Supabase session checks and admin role table enforcement.
- Implement full admin CRUD forms with React Hook Form + Zod.
- Add derived metrics aggregation jobs and richer compare analytics.
