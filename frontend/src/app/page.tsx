import { BrandCard } from "@/components/brands/BrandCard";
import { AppHeader } from "@/components/layout/AppHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getBrands } from "@/lib/api";

export default async function Home() {
  const brands = await getBrands();

  return (
    <main className="min-h-screen">
      <AppHeader />

      <section className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="AutoVerse"
            title="Escolha uma marca"
            description="Explore fabricantes, modelos e fichas tecnicas em uma garagem digital organizada para descoberta."
          />
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
