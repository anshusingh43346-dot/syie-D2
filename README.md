# SYIE

SYIE is a creator-learner marketplace operated by Sdivynex. This repository contains the foundational Next.js App Router project before feature screens are added.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- Supabase JavaScript client with `@supabase/ssr`

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the example environment file and fill in your Supabase values:

   ```bash
   cp .env.example .env.local
   ```

   Required variables:

   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` — server-only; never expose this in client-side code.

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

- `npm run dev` — start the local development server.
- `npm run build` — create a production build.
- `npm run start` — start the production server.
- `npm run lint` — run ESLint.
- `npm run format` — format files with Prettier.
- `npm run format:check` — check formatting with Prettier.

## Project structure

```text
src/
  app/          App Router routes and layouts
  components/   Shared UI components
  lib/          Supabase clients and utilities
  styles/       Global styles and design tokens
stitch-screens/ Raw Stitch HTML exports for reference only
```

## Brand foundation

The default theme is dark charcoal with ivory text. Tailwind brand color tokens are defined for charcoal, gold, ivory, purple, and slate.
