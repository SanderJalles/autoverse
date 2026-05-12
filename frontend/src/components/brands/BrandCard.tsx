import Link from "next/link";
import type { Brand } from "@/types/brand";

type BrandCardProps = {
  brand: Brand;
};

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link
      href={`/brands/${brand.id}`}
      className="group block rounded-md border border-[var(--line)] bg-[var(--surface)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#9ccdc6] hover:shadow-md"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#e7f3f1] text-lg font-bold text-[var(--accent-strong)]">
          {brand.name.slice(0, 1)}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[var(--foreground)]">
            {brand.name}
          </h2>
          <p className="text-sm text-[var(--muted)]">
            {brand.country ?? "Origem nao informada"}
          </p>
        </div>
      </div>
      <p className="mt-5 text-sm font-semibold text-[var(--accent)]">
        Ver modelos
      </p>
    </Link>
  );
}
