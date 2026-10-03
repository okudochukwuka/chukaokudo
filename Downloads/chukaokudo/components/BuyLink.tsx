import { product } from "@/lib/product";

export default function BuyLink({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <a
      href={product.selarUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "inline-block rounded bg-sage px-6 py-[11px] text-sm font-bold uppercase tracking-wide text-paper transition hover:bg-sageDark hover:shadow-[0_0_0_3px_rgba(110,155,194,0.25)]"
      }
    >
      {label}
    </a>
  );
}
