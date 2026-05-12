import Link from "next/link";
import { ReviewVideo } from "@/components/cars/ReviewVideo";
import { SpecsTable } from "@/components/cars/SpecsTable";
import { AppHeader } from "@/components/layout/AppHeader";
import { Badge } from "@/components/ui/Badge";
import { getCarDetails } from "@/lib/api";
import { formatCurrency } from "@/lib/media";

type CarPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CarPage({ params }: CarPageProps) {
  const { id } = await params;
  const car = await getCarDetails(id);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <AppHeader />

      <section className="border-b border-[var(--line)] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <Link
            href={car.brand ? `/brands/${car.brand.id}` : "/"}
            className="text-sm font-semibold text-[var(--accent)]"
          >
            Voltar para {car.brand?.name ?? "marcas"}
          </Link>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge tone="accent">{car.brand?.name ?? "Marca"}</Badge>
                <Badge>{car.category}</Badge>
                <Badge>{car.year}</Badge>
              </div>
              <h1 className="mt-4 text-4xl font-bold text-[var(--foreground)]">
                {car.name}
              </h1>
              <p className="mt-3 text-sm text-[var(--muted)]">
                {formatCurrency(car.averagePrice)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="flex aspect-[16/9] items-center justify-center rounded-md border border-[var(--line)] bg-[#dfe8f2]">
            <span className="text-6xl font-bold text-[#8293a8]">
              {car.name.slice(0, 1)}
            </span>
          </div>

          <section className="rounded-md border border-[var(--line)] bg-white p-5">
            <h2 className="text-xl font-bold text-[var(--foreground)]">
              Historia do modelo
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {car.history}
            </p>
          </section>
        </div>

        <aside className="space-y-6">
          <section>
            <h2 className="mb-3 text-xl font-bold text-[var(--foreground)]">
              Ficha tecnica
            </h2>
            <SpecsTable specs={car.specs} />
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-[var(--foreground)]">
              Review em video
            </h2>
            <ReviewVideo videoUrl={car.videoUrl} />
          </section>
        </aside>
      </section>
    </main>
  );
}
