import Image from "next/image";
import Link from "next/link";
import BuyLink from "@/components/BuyLink";
import { posts } from "@/lib/posts";
import { product } from "@/lib/product";
import { links } from "@/lib/links";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="py-24">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-16 px-7 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-sage">
              AI &middot; IT &middot; Cybersecurity
            </p>
            <h1 className="mb-6 max-w-[13ch] font-serif text-5xl font-bold uppercase leading-[1.05] md:text-6xl">
              Learn it.{" "}
              <span className="text-sage">Master it.</span>
              <br />
              Hire someone who has.
            </h1>
            <p className="mb-9 max-w-[46ch] text-lg text-inkSoft">
              10+ years in IT, AI and cybersecurity — now translated into
              plain English for beginners, sharpened into playbooks for
              practitioners, and available for teams who need the real
              thing done.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <BuyLink label={`Get the Guide — ${product.price}`} />
              <a
                href={links.consultationUrl}
                className="rounded border border-line px-6 py-[11px] text-sm font-bold uppercase tracking-wide text-ink hover:border-sage"
              >
                Book a Consultation
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 right-4 z-10 flex items-center gap-2 rounded-full bg-band px-4 py-2 text-xs font-semibold uppercase tracking-wide text-sage">
              <span className="h-2 w-2 rounded-full bg-sage" />
              10+ Years Experience
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-line">
              <Image
                src="/chuka-portrait.jpg"
                alt="Chuka Okudo speaking on stage"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-md border border-line bg-paper p-5 shadow-lg md:left-6 md:right-auto md:w-[280px]">
              <p className="font-serif text-base font-bold">Chuka Okudo</p>
              <p className="mt-1 text-sm text-inkSoft">
                IT, AI &amp; cybersecurity engineer and content creator.
                Teaching what I know, building what teams need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section id="audience" className="bg-band py-24 pt-16 md:pt-24">
        <div className="mx-auto max-w-[1160px] px-7">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sage">
            Who I Help
          </p>
          <h2 className="mb-14 max-w-[20ch] font-serif text-3xl font-bold uppercase">
            Wherever you are with AI, IT or cybersecurity
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-md border border-line p-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage">
                Just starting out
              </p>
              <h3 className="mb-3 font-serif text-xl font-bold">
                Getting into the field
              </h3>
              <p className="mb-6 text-sm text-inkSoft">
                Plain-English guides and blog posts that turn intimidating
                jargon into things you can actually use — no prior
                background required.
              </p>
              <Link
                href="#inside"
                className="text-sm font-bold uppercase tracking-wide text-sage"
              >
                Start with the guide &#8594;
              </Link>
            </div>
            <div className="rounded-md border border-line p-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage">
                Already working in it
              </p>
              <h3 className="mb-3 font-serif text-xl font-bold">
                Sharpening your edge
              </h3>
              <p className="mb-6 text-sm text-inkSoft">
                Deeper breakdowns, certification notes, and field-tested
                playbooks for IT, AI and cybersecurity practitioners
                levelling up.
              </p>
              <Link
                href="/blog"
                className="text-sm font-bold uppercase tracking-wide text-sage"
              >
                Read the blog &#8594;
              </Link>
            </div>
            <div className="rounded-md border border-line p-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage">
                Hiring or outsourcing
              </p>
              <h3 className="mb-3 font-serif text-xl font-bold">
                Need it done right
              </h3>
              <p className="mb-6 text-sm text-inkSoft">
                10+ years across IT, AI and cybersecurity work. Available
                for consulting, audits, and project-based engagements.
              </p>
              <a
                href={links.consultationUrl}
                className="text-sm font-bold uppercase tracking-wide text-sage"
              >
                Book a consultation &#8594;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSLATE */}
      <section className="py-20">
        <div className="mx-auto max-w-[1160px] px-7">
          <h2 className="mb-3 max-w-[16ch] font-serif text-3xl font-bold uppercase">
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
                <div className="mb-2 font-serif text-xl font-bold">{t.word}</div>
                <p className="text-[0.97rem] text-inkSoft">{t.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-9 px-7 md:grid-cols-[140px_1fr]">
          <div className="relative h-[140px] w-[140px] overflow-hidden rounded-full border-2 border-sage">
            <Image
              src="/chuka-portrait.jpg"
              alt="Chuka Okudo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-4 font-serif text-2xl font-bold uppercase">
              10+ years in, still teaching from the ground up
            </h2>
            <p className="mb-3 max-w-[60ch] text-inkSoft">
              Chuka has spent over a decade working across IT, AI and
              cybersecurity — and is formalizing that experience through the
              CompTIA certification path (Network+ and Security+ next),
              because the field never stops moving.
            </p>
            <p className="max-w-[60ch] text-inkSoft">
              Everything here is written the way it should&apos;ve been
              explained the first time: no jargon for jargon&apos;s sake.
              Beginners get a clear entry point, practitioners get real
              depth, and teams looking to hire get someone who&apos;s
              actually done the work.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section id="inside" className="bg-band py-24">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-14 px-7 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="mb-4 max-w-[14ch] font-serif text-3xl font-bold uppercase">
              What&apos;s inside
            </h2>
            <p className="mb-7 text-inkSoft">
              A short guide, built to be finished in one sitting — and
              referenced again whenever you need it.
            </p>
            <Link
              href="#cta"
              className="inline-block rounded border border-ink px-6 py-[11px] text-sm font-bold uppercase tracking-wide text-ink hover:border-sage"
            >
              Get the Guide
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
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-14 px-7 md:grid-cols-[0.8fr_1.2fr]">
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
            <h2 className="mb-4 max-w-[20ch] font-serif text-4xl font-bold uppercase">
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
      <section className="py-24">
        <div className="mx-auto max-w-[1160px] px-7">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="font-serif text-3xl font-bold uppercase">From the blog</h2>
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
