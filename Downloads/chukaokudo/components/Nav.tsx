"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#audience", label: "Who I Help" },
  { href: "/#video", label: "Watch" },
  { href: "/#inside", label: "The Guide" },
  { href: "/blog", label: "Blog" },
  { href: "/#about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex h-[76px] max-w-[1160px] items-center justify-between px-7">
        <Link
          href="/"
          className="font-serif text-lg font-bold uppercase tracking-tight"
          onClick={() => setOpen(false)}
        >
          Chuka Okudo
        </Link>

        <ul className="hidden gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm uppercase tracking-wide text-inkSoft transition hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#cta"
          className="hidden rounded bg-sage px-5 py-[11px] text-sm font-bold uppercase tracking-wide text-paper transition hover:bg-sageDark hover:shadow-[0_0_0_3px_rgba(110,155,194,0.25)] md:inline-block"
        >
          Get the Guide
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-[2px] w-6 bg-ink transition ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <ul className="flex flex-col gap-1 px-7 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm uppercase tracking-wide text-inkSoft transition hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#cta"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded bg-sage px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-paper transition hover:bg-sageDark"
              >
                Get the Guide
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
