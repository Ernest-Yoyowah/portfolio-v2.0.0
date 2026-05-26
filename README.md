# Ernest Yoyowah — Portfolio v2

Personal portfolio site for Ernest Yoyowah, Software Engineer at MTN Ghana.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Routes

| Route | Description |
|---|---|
| `/` | Landing page with all sections |
| `/work` | Full engineering experience & tech stack |
| `/projects` | All projects listing |
| `/projects/[slug]` | Individual project case studies |
| `/music` | Music technology & creative engineering |
| `/writing` | Engineering articles |
| `/writing/[slug]` | Individual article pages |
| `/uses` | Tools, hardware, and software setup |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | SEO robots config |

## Tech Stack

- **Framework**: Next.js 16.2.6 — App Router, static export, Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 — `@theme inline`, oklch color space
- **Animation**: Framer Motion 12
- **UI**: shadcn/ui + Radix UI primitives
- **Fonts**: Geist Sans + Geist Mono (next/font/google)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploy

Optimized for [Vercel](https://vercel.com). Push to `main` to deploy.

```bash
vercel --prod
```

## Structure

```
src/
  app/
    layout.tsx         # Root layout, SEO metadata, JSON-LD
    page.tsx           # Home page
    work/              # Work & experience page
    projects/          # Projects listing + [slug] case studies
    music/             # Music technology page
    writing/           # Articles + [slug] article pages
    uses/              # Tools & setup page
    robots.ts          # SEO robots
    sitemap.ts         # Auto-generated sitemap
  components/
    layout/            # Navbar, Footer, PageShell
    sections/          # Home page sections (Hero, Experience, etc.)
    pages/             # Full page components (WorkPage, ProjectsPage, etc.)
    ui/                # Reusable UI components
  lib/
    data.ts            # All portfolio content (single source of truth)
    utils.ts           # Utility functions
```
