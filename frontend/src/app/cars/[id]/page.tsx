import Link from "next/link";
import { notFound } from "next/navigation";
import { CarVisual } from "@/components/cars/CarVisual";
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

  if (!car) {
    notFound();
  }

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
            {car.specs ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-md border border-[var(--line)] px-4 py-3">
                  <p className="text-xs font-semibold text-[var(--muted)]">Potencia</p>
                  <p className="mt-1 text-lg font-bold">
                    {car.specs.combinedHorsepower ?? car.specs.horsepower} cv
                  </p>
                </div>
                <div className="rounded-md border border-[var(--line)] px-4 py-3">
                  <p className="text-xs font-semibold text-[var(--muted)]">Tracao</p>
                  <p className="mt-1 text-lg font-bold">
                    {car.specs.drivetrain ?? "-"}
                  </p>
                </div>
                <div className="rounded-md border border-[var(--line)] px-4 py-3">
                  <p className="text-xs font-semibold text-[var(--muted)]">Cambio</p>
                  <p className="mt-1 text-lg font-bold">
                    {car.specs.transmission ?? "-"}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-md border border-[var(--line)]">
            <CarVisual name={car.name} imageUrl={car.imageUrl} size="hero" />
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
