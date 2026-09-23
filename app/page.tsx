import Image from "next/image";
import Link from "next/link";
import BuyLink from "@/components/BuyLink";
import { posts } from "@/lib/posts";
import { product } from "@/lib/product";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-16 px-7 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <div className="mb-7 flex flex-wrap items-baseline gap-3 text-inkSoft">
              <span className="text-[#D9695E] line-through decoration-2">
                Phishing
              </span>
              <span>&#8594;</span>
              <span className="font-semibold text-sage">
                someone tricking you into clicking a fake link
              </span>
            </div>
            <h1 className="mb-6 max-w-[11ch] font-serif text-4xl font-medium leading-[1.15] md:text-5xl">
              Cybersecurity, explained like a person, not a manual.
            </h1>
            <p className="mb-9 max-w-[42ch] text-lg text-inkSoft">
              A short, plain-English guide that turns the scary jargon into
              things you can actually use — no prior IT background needed.
            </p>
            <div className="flex items-center gap-5">
              <BuyLink label={`Get the PDF — ${product.price}`} />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 rounded-lg border border-sage/40" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-line">
              <Image
                src="/chuka-portrait.jpg"
                alt="Chuka Okudo speaking on stage"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-paper via-paper/70 to-transparent p-6 pt-14">
                <p className="font-serif text-lg text-ink">Chuka Okudo</p>
                <p className="text-sm text-inkSoft">
                  IT &amp; cybersecurity, explained simply
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSLATE */}
      <section className="bg-band py-20">
        <div className="mx-auto max-w-[1080px] px-7">
          <h2 className="mb-3 max-w-[16ch] font-serif text-3xl font-medium">
            The words that keep people out
          </h2>
          <p className="mb-12 max-w-[56ch] text-inkSoft">
            Most cybersecurity content is written by people trying to sound
            smart. This isn&apos;t that. Here&apos;s a sample of what gets
            translated inside.
          </p>
          <div className="grid grid-cols-1 border-t border-line md:grid-cols-3">
            {[
              {
                word: "Firewall",
                def: "A gatekeeper on your network that decides what's allowed in and out — like a bouncer checking IDs.",
              },
              {
                word: "Two-factor authentication",
                def: "A second lock on your account, usually a code sent to your phone, so a stolen password alone isn't enough.",
              },
              {
                word: "VPN",
                def: "A private tunnel for your internet traffic, so what you do online is harder for others to see or intercept.",
              },
            ].map((t, i) => (
              <div
                key={t.word}
                className={`border-b border-line p-7 md:border-r ${
                  i === 2 ? "md:border-r-0" : ""
                }`}
              >
                <div className="mb-2 font-serif text-xl">{t.word}</div>
                <p className="text-[0.97rem] text-inkSoft">{t.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-9 px-7 md:grid-cols-[140px_1fr]">
          <div className="relative h-[140px] w-[140px] overflow-hidden rounded-full border-2 border-sage">
            <Image
              src="/chuka-portrait.jpg"
              alt="Chuka Okudo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 font-serif text-2xl font-medium">
              Written by someone still learning it too
            </h2>
            <p className="mb-3 max-w-[60ch] text-inkSoft">
              Chuka is an IT professional working through the CompTIA
              certification path — Network+ and Security+ next — and writing
              down what he learns in plain language along the way.
            </p>
            <p className="max-w-[60ch] text-inkSoft">
              This guide isn&apos;t written from a place of &quot;I know
              everything.&quot; It&apos;s written from the place most
              beginners actually start: confused by the jargon, and looking
              for someone to explain it straight.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section id="inside" className="bg-band py-24">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-14 px-7 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="mb-4 max-w-[14ch] font-serif text-3xl font-medium">
              What&apos;s inside
            </h2>
            <p className="mb-7 text-inkSoft">
              A short guide, built to be finished in one sitting — and
              referenced again whenever you need it.
            </p>
            <Link
              href="#cta"
              className="inline-block rounded border border-ink px-6 py-[11px] text-sm font-semibold text-ink"
            >
              Get the guide
            </Link>
          </div>
          <ul>
            {[
              ["Why you're a target, even with \"nothing to hide\"", "01"],
              ["Passwords that actually hold up", "02"],
              ["Spotting a phishing attempt in ten seconds", "03"],
              ["Locking down your phone and home Wi-Fi", "04"],
              [
                "What to do in the first hour after you've been hacked",
                "05",
              ],
            ].map(([title, page]) => (
              <li
                key={page}
                className="flex justify-between gap-4 border-b border-line py-4 first:border-t"
              >
                <span>{title}</span>
                <span className="tabular-nums text-inkSoft">{page}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SHOP */}
      <section id="cta" className="py-24">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-14 px-7 md:grid-cols-[0.8fr_1.2fr]">
          <div className="overflow-hidden rounded-md border border-line bg-band">
            {product.coverImage ? (
              <Image
                src={product.coverImage}
                alt={`${product.title} cover`}
                width={480}
                height={640}
                className="h-auto w-full object-cover"
              />
            ) : (
              // Placeholder until a real cover image is added in lib/product.ts
              <div className="flex aspect-[3/4] flex-col justify-between bg-band p-7 text-ink">
                <span className="text-sm text-inkSoft">The Guide</span>
                <h3 className="max-w-[14ch] font-serif text-2xl text-sage">
                  {product.title}
                </h3>
                <span className="text-sm text-inkSoft">by Chuka Okudo</span>
              </div>
            )}
          </div>
          <div>
            <h2 className="mb-4 max-w-[20ch] font-serif text-4xl font-medium">
              Understand the basics in one sitting
            </h2>
            <p className="mb-3 text-inkSoft">
              One PDF, plain English, yours to keep.
            </p>
            <p className="mb-9 font-serif text-2xl">{product.price}</p>
            <BuyLink label="Buy on Selar" />
            <p className="mt-3 text-sm text-inkSoft">
              You&apos;ll be redirected to Selar to complete your purchase
              securely.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="bg-band py-24">
        <div className="mx-auto max-w-[1080px] px-7">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="font-serif text-3xl font-medium">From the blog</h2>
            <Link href="/blog" className="text-sm font-semibold text-sageDark">
              All posts
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded border border-line bg-band p-7 transition hover:border-sage/50"
              >
                <div className="mb-3 text-sm font-semibold text-sageDark">
                  {post.tag}
                </div>
                <h3 className="mb-2 font-serif text-lg">{post.title}</h3>
                <p className="text-sm text-inkSoft">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
