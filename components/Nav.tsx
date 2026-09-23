import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-[72px] max-w-[1080px] items-center justify-between px-7">
        <Link href="/" className="font-serif text-lg font-semibold">
          Chuka Okudo
        </Link>
        <ul className="hidden gap-8 md:flex">
          <li>
            <Link href="/#inside" className="text-inkSoft hover:text-ink">
              The Guide
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-inkSoft hover:text-ink">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/#about" className="text-inkSoft hover:text-ink">
              About
            </Link>
          </li>
        </ul>
        <Link
          href="/#cta"
          className="rounded bg-sage px-5 py-[11px] text-sm font-semibold text-white hover:bg-sageDark"
        >
          Get the guide
        </Link>
      </nav>
    </header>
  );
}
