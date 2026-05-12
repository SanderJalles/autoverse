import { BrandCard } from "@/components/brands/BrandCard";
import { AppHeader } from "@/components/layout/AppHeader";
import { getBrands } from "@/lib/api";

export default async function Home() {
  const brands = await getBrands();

  return (
    <main className="min-h-screen">
      <AppHeader />

      <section className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
              AutoVerse
            </p>
            <h1 className="mt-2 text-3xl font-bold text-[var(--foreground)]">
              Escolha uma marca
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
              Explore fabricantes, entre no ambiente visual de cada marca e avance
              para os modelos com ficha tecnica completa.
            </p>
          </div>
          <div className="w-fit rounded-md border border-[var(--line)] px-3 py-2 text-sm text-[var(--muted)]">
            {brands.length} marcas
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </section>
    </main>
  );
}
