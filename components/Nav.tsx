import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex h-[76px] max-w-[1160px] items-center justify-between px-7">
        <Link
          href="/"
          className="font-serif text-lg font-bold uppercase tracking-tight"
        >
          Chuka Okudo
        </Link>
        <ul className="hidden gap-9 md:flex">
          <li>
            <Link
              href="/#audience"
              className="text-sm uppercase tracking-wide text-inkSoft hover:text-ink"
            >
              Who I Help
            </Link>
          </li>
          <li>
            <Link
              href="/#inside"
              className="text-sm uppercase tracking-wide text-inkSoft hover:text-ink"
            >
              The Guide
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-sm uppercase tracking-wide text-inkSoft hover:text-ink"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="text-sm uppercase tracking-wide text-inkSoft hover:text-ink"
            >
              About
            </Link>
          </li>
        </ul>
        <Link
          href="/#cta"
          className="rounded bg-sage px-5 py-[11px] text-sm font-bold uppercase tracking-wide text-paper hover:bg-sageDark"
        >
          Get the Guide
        </Link>
      </nav>
    </header>
  );
}
