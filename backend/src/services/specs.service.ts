import { prisma } from "../lib/prisma";

type SpecsData = {
  engine?: string;
  electricMotor?: string;
  horsepower: number;
  combinedHorsepower?: number;
  batteryCapacity?: string;
  torque?: string;
  transmission?: string;
  drivetrain?: string;
  acceleration?: string;
  topSpeed?: string;
  consumption?: string;
};

export const createSpecs = async (carId: string, data: SpecsData) => {
  return prisma.specs.create({
    data: {
      ...data,
      carId,
    },
  });
};

export const getSpecsByCar = async (carId: string) => {
  return prisma.specs.findUnique({
    where: { carId },
  });
};

export const getCarWithSpecs = async (carId: string) => {
  return prisma.car.findUnique({
    where: { id: carId },
    include: {
      brand: true,
      specs: true,
    },
  });
};
