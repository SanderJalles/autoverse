import Link from "next/link";
import { CarVisual } from "@/components/cars/CarVisual";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/media";
import type { Car } from "@/types/car";

type CarCardProps = {
  car: Car;
  dark?: boolean;
};

export function CarCard({ car, dark = false }: CarCardProps) {
  const isHybrid = Boolean(car.specs?.electricMotor && car.specs?.engine);
  const isElectric = Boolean(car.specs?.electricMotor && !car.specs?.engine);

  return (
    <Link
      href={`/cars/${car.id}`}
      className={`group block overflow-hidden rounded-md border transition hover:-translate-y-0.5 ${
        dark
          ? "border-white/15 bg-white/12 text-white shadow-lg backdrop-blur-md hover:bg-white/18"
          : "border-[var(--line)] bg-white text-[var(--foreground)] shadow-sm hover:shadow-md"
      }`}
    >
      <CarVisual name={car.name} imageUrl={car.imageUrl} dark={dark} />
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          <Badge tone={dark ? "dark" : "accent"}>{car.category}</Badge>
          {isHybrid ? <Badge tone={dark ? "dark" : "accent"}>Hibrido</Badge> : null}
          {isElectric ? <Badge tone={dark ? "dark" : "accent"}>Eletrico</Badge> : null}
        </div>
        <h3 className="mt-4 text-lg font-bold">{car.name}</h3>
        <p className={`mt-1 text-sm ${dark ? "text-white/70" : "text-[var(--muted)]"}`}>
          {car.year} - {formatCurrency(car.averagePrice)}
        </p>
      </div>
    </Link>
  );
}
