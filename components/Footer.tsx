export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-4 px-7">
        <span className="text-sm text-inkSoft">
          &copy; {new Date().getFullYear()} Chuka Okudo
        </span>
        <ul className="flex gap-6">
          <li>
            <a href="mailto:hello@chukaokudo.com" className="text-sm text-inkSoft">
              Contact
            </a>
          </li>
          <li>
            <a href="/privacy" className="text-sm text-inkSoft">
              Privacy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-sm text-inkSoft">
              Terms
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
