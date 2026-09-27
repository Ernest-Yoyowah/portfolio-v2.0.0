# ernestyoyowah.vercel.app

Personal site of Ernest Yoyowah, software engineer at MTN Ghana.

Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Every page is statically generated.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Structure

```
src/
  app/                 Routes, metadata, sitemap, robots, OG image
  components/          Layout and presentational components
    article/           Components used inside long-form articles
  content/             All site content as typed modules
    projects/          Project index and case study bodies
    writing/           Article index and article bodies
  lib/                 Site config, date formatting, class helpers
```

Content lives in `src/content` and is kept separate from presentation. To add or change something:

- **Experience, skills, certifications:** edit `content/experience.ts`. Dates are `YYYY-MM` strings.
- **Projects:** add an entry to `content/projects/index.ts`. It gets a page at `/projects/[slug]` automatically. For a longer case study, write the body as a component in `content/projects/` and register it in `app/projects/[slug]/page.tsx`.
- **Articles:** add an entry to `content/writing/index.ts`, write the body as a component in `content/writing/`, and register it in `app/writing/[slug]/page.tsx`. Entries without a `published` date are listed as drafts and don't get a page.

## Notes

- Only the navigation, theme toggle and article checklist are client components. Everything else renders on the server.
- Theming uses `next-themes` with a class on `<html>`. Colour tokens are defined once in `app/globals.css`.
- Long-form article styling is the `.prose` layer in `globals.css`, not a plugin.
- Deployed on Vercel from `main`.
