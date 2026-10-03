# chukaokudo.com

Landing page + blog + shop section, built with Next.js 14 (App Router) and
Tailwind CSS. The PDF is sold on Selar — this site showcases it and links
out to the Selar product page. No payment code runs on this site.

## What's included

- Dark theme with a steel-blue accent
- Hero, "Who I Help" audience section, video section, jargon-translation
  section, about, guide contents, shop (Selar), and blog teaser
- A floating WhatsApp button (bottom-right) linking to your group
- "Book a Consultation" links (mailto) in the hero and audience section
- A blog with placeholder posts (`lib/posts.ts`)
- A favicon (currently your portrait photo)

## Before you deploy

1. **Video file size.** `public/cybersecurity.mp4` is ~6MB. That's fine to
   commit to GitHub, but consider compressing it (e.g. with HandBrake or
   an online compressor) if you want faster load times — video autoplays
   when scrolled into view, so a smaller file means it starts sooner on
   slow connections.
2. **Update the real Selar link and price** if either changes — both live
   in `lib/product.ts`.
3. **Update the consultation contact method** in `lib/links.ts` if you'd
   rather use a booking tool (Calendly, etc.) instead of email.
4. **Swap placeholder blog posts** in `lib/posts.ts` for real content.
5. **Favicon** — currently reuses your portrait photo
   (`public/favicon.jpg`). Replace that file with a dedicated square
   image any time for a cleaner tab icon.

## Run locally

```
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. Import the repo at vercel.com/new.
3. **Framework Preset must be set to Next.js** (Project Settings > Build
   and Deployment) — if it's left on "Other," the build silently produces
   no output.
4. Deploy — you'll get a `chukaokudo.vercel.app` URL immediately.
5. In Project Settings > Domains, add `chukaokudo.com` and add the DNS
   records Vercel shows you at your domain registrar.
