# TokenVue Website

TokenVue is a TanStack Start landing page for an AI gateway and control plane. The site is built with React, TanStack Router, Vite, Tailwind CSS, Radix UI components, Framer Motion, and a small Node production server.

## Features

- Production AI gateway landing page with sections for routing, guardrails, analytics, pricing, testimonials, and CTA.
- Server-rendered metadata through TanStack Router document head management.
- SEO support with canonical tags, Open Graph/Twitter metadata, JSON-LD, `robots.txt`, `sitemap.xml`, and a web manifest.
- Google Analytics configured through `GOOGLE_ANALYTICS_ID` in `src/lib/site.ts`.
- Docker support for local production-style runs.

## Requirements

- Node.js 22 or newer
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the built app with the Node server:

```bash
npm run start
```

By default, the production server uses `PORT=3000` and `HOST=0.0.0.0`.

## Scripts

- `npm run dev` - start the Vite development server.
- `npm run build` - create client and server production builds.
- `npm run build:dev` - build using development mode.
- `npm run preview` - preview the Vite build.
- `npm run start` - run `server.mjs` against the built output.
- `npm run lint` - run ESLint.
- `npm run format` - format the project with Prettier.

## Project Structure

```text
src/
  components/landing/  Landing page sections
  components/ui/       Shared UI primitives
  lib/site.ts          Site URLs, SEO copy, and Google Analytics ID
  routes/__root.tsx    Root layout, global head tags, analytics script
  routes/index.tsx     Home page route and page-specific SEO
public/
  favicon.ico
  robots.txt
  sitemap.xml
  site.webmanifest
server.mjs             Node static/SSR server
vite.config.ts         TanStack/Vite configuration
wrangler.jsonc         Cloudflare worker configuration
```

## SEO And Analytics

Site-wide metadata is defined in `src/lib/site.ts` and rendered in `src/routes/__root.tsx`. The home page adds route-specific title, description, canonical link, and software application JSON-LD in `src/routes/index.tsx`.

Google Analytics uses measurement ID `G-MF22XS2ZGF`. To change it, update:

```ts
export const GOOGLE_ANALYTICS_ID = "G-MF22XS2ZGF";
```

in `src/lib/site.ts`.

## Docker

Build and run with Docker Compose:

```bash
docker compose up --build
```

The container exposes the app on port `3000`.

## Deployment Notes

Before deploying, run:

```bash
npm run build
```

After deployment, submit this sitemap in Google Search Console:

```text
https://tokenvue.in/sitemap.xml
```
