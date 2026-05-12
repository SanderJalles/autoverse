import Link from "next/link";
import { CarCard } from "@/components/cars/CarCard";
import { AppHeader } from "@/components/layout/AppHeader";
import { Badge } from "@/components/ui/Badge";
import { getBrand, getCarsByBrand } from "@/lib/api";
import { getBrandIntroVideo } from "@/lib/media";

type BrandPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BrandPage({ params }: BrandPageProps) {
  const { id } = await params;
  const [brand, cars] = await Promise.all([getBrand(id), getCarsByBrand(id)]);
  const introVideoUrl = getBrandIntroVideo(brand);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#101827] text-white">
      {introVideoUrl ? (
        <video
          className="fixed inset-0 h-full w-full object-cover"
          src={introVideoUrl}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div className="fixed inset-0 bg-[#101827]" />
      )}
      <div className="fixed inset-0 bg-black/60" />

      <div className="relative z-10">
        <AppHeader />

        <section className="mx-auto max-w-6xl px-6 py-12">
          <Link href="/" className="text-sm font-semibold text-white/70 hover:text-white">
            Voltar para marcas
          </Link>

          <div className="mt-10 max-w-3xl">
            <Badge tone="dark">{brand.country ?? "Origem nao informada"}</Badge>
            <h1 className="mt-5 text-5xl font-bold tracking-normal">{brand.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
              Um ambiente dedicado para explorar os modelos da marca. O video de
              fundo funciona como atmosfera; os carros continuam sendo o centro da
              navegacao.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge tone="dark">{cars.length} modelos</Badge>
              {introVideoUrl ? <Badge tone="dark">Video ambiente ativo</Badge> : null}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} dark />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
