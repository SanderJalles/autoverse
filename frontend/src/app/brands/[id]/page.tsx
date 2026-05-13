import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandIntroMedia } from "@/components/brands/BrandIntroMedia";
import { BrandLogo } from "@/components/brands/BrandLogo";
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

  if (!brand) {
    notFound();
  }

  const introVideoUrl = getBrandIntroVideo(brand);

  return (
    <main className="min-h-screen bg-[#070b12] text-white">
      <AppHeader />

      <section className="border-b border-white/10 bg-[#080c13]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Link href="/" className="text-sm font-semibold text-white/65 hover:text-white">
            Voltar para marcas
          </Link>

          <div className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <BrandLogo brand={brand} dark size="display" />
              <div className="mt-7 flex flex-wrap gap-3">
                <Badge tone="dark">{brand.country ?? "Origem nao informada"}</Badge>
                <Badge tone="dark">{cars.length} modelos</Badge>
              </div>
              <h1 className="mt-5 text-6xl font-bold tracking-normal lg:text-7xl">
                {brand.name}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/65">
                Modelos, ficha tecnica e historia reunidos em uma experiencia de
                catalogo com atmosfera de garagem premium.
              </p>
            </div>
            <div className="hidden max-w-xs border-l border-white/12 pl-6 text-sm leading-6 text-white/55 lg:block">
              Selecione um modelo para abrir a pagina tecnica com historia, specs
              completas e review em video.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto mb-7 flex max-w-6xl items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#7dd3c7]">
              Universo da marca
            </p>
            <h2 className="mt-2 text-3xl font-bold">Introducao visual</h2>
          </div>
        </div>

        <div className="overflow-hidden rounded-md border border-white/12 bg-[#111827] shadow-2xl shadow-black/40">
          {introVideoUrl ? (
            <BrandIntroMedia brandName={brand.name} introVideoUrl={introVideoUrl} />
          ) : (
            <div className="flex aspect-video items-center justify-center bg-[#101827] px-6">
              <div className="max-w-md text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#7dd3c7]">
                  {brand.name}
                </p>
                <p className="mt-3 text-2xl font-bold">Video introdutorio</p>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Cadastre `introVideoUrl` no seed para exibir um video MP4 ou
                  YouTube embedado nesta area.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#7dd3c7]">
              Garagem
            </p>
            <h2 className="mt-2 text-2xl font-bold">Modelos</h2>
          </div>
        </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} dark />
            ))}
          </div>
      </section>
    </main>
  );
}
