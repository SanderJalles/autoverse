import type { Brand } from "./brand";

export type Specs = {
  id: string;
  engine: string | null;
  electricMotor: string | null;
  horsepower: number;
  combinedHorsepower: number | null;
  batteryCapacity: string | null;
  torque: string | null;
  transmission: string | null;
  drivetrain: string | null;
  acceleration: string | null;
  topSpeed: string | null;
  consumption: string | null;
  carId: string;
  createdAt: string;
  updatedAt: string;
};

export type Car = {
  id: string;
  name: string;
  year: number;
  category: string;
  imageUrl: string | null;
  videoUrl: string | null;
  history: string;
  averagePrice: number | null;
  brandId: string;
  brand?: Brand;
  specs?: Specs | null;
  createdAt: string;
  updatedAt: string;
};
