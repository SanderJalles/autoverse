import type { Specs } from "@/types/car";

type SpecsTableProps = {
  specs: Specs | null | undefined;
};

export function SpecsTable({ specs }: SpecsTableProps) {
  if (!specs) {
    return (
      <div className="rounded-md border border-[var(--line)] bg-white p-5 text-sm text-[var(--muted)]">
        Ficha tecnica ainda nao cadastrada.
      </div>
    );
  }

  const rows = [
    ["Motor", specs.engine],
    ["Motor eletrico", specs.electricMotor],
    ["Potencia", `${specs.horsepower} cv`],
    ["Potencia combinada", specs.combinedHorsepower ? `${specs.combinedHorsepower} cv` : null],
    ["Bateria", specs.batteryCapacity],
    ["Torque", specs.torque],
    ["Cambio", specs.transmission],
    ["Tracao", specs.drivetrain],
    ["0 a 100 km/h", specs.acceleration],
    ["Velocidade maxima", specs.topSpeed],
    ["Consumo", specs.consumption],
  ].filter(([, value]) => Boolean(value));

  return (
    <div className="overflow-hidden rounded-md border border-[var(--line)] bg-white">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className="grid grid-cols-[minmax(120px,0.9fr)_1.1fr] border-b border-[var(--line)] last:border-b-0"
        >
          <div className="bg-[#f6f9fc] px-4 py-3 text-sm font-semibold text-[var(--muted)]">
            {label}
          </div>
          <div className="px-4 py-3 text-sm font-semibold text-[var(--foreground)]">
            {value}
          </div>
        </div>
      ))}
    </div>
  );
}
