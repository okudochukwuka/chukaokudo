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
        "inline-block rounded bg-sage px-6 py-[11px] text-sm font-semibold text-paper hover:bg-sageDark"
      }
    >
      {label}
    </a>
  );
}
