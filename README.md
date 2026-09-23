# chukaokudo.com

Landing page + blog + shop section, built with Next.js 14 (App Router) and
Tailwind CSS. The PDF is sold on Selar — this site just showcases it and
links out to your Selar product page. No payment code runs on this site.

## Before you deploy

1. **Add your real Selar link.** Open `lib/product.ts` and replace
   `selarUrl` with your actual Selar product page URL.
2. **Add a cover image.** Drop your PDF's cover image into `public/`
   (e.g. `public/cover.png`), then set `coverImage: "/cover.png"` in
   `lib/product.ts`. Until you do, a placeholder cover renders instead.
3. **Set the real price.** Update `price` in `lib/product.ts` to match
   what's set on Selar.
4. **Swap the placeholder bio, blog posts, and "CO" avatar** in
   `app/page.tsx` and `lib/posts.ts` for your real content and photo.

## Run locally

```
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. Import the repo at vercel.com/new. No environment variables are
   needed since Selar handles payment.
3. Deploy — you'll get a `chukaokudo.vercel.app` URL immediately.
4. In Project Settings > Domains, add `chukaokudo.com`. Vercel will show
   1–2 DNS records to add in your Hostinger DNS panel. Once added, the
   custom domain goes live (usually within a few minutes to a few hours).
