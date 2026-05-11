import { prisma } from "../lib/prisma";

type CarData = {
  name: string;
  year: number;
  category: string;
  imageUrl?: string;
  videoUrl?: string;
  history: string;
  averagePrice?: number;
  brandId: string;
};

type UpdateCarData = Partial<CarData>;

export const createCar = async (data: CarData) => {
  return prisma.car.create({
    data,
    include: {
      brand: true,
    },
  });
};

export const getCars = async () => {
  return prisma.car.findMany({
    include: {
      brand: true,
    },
  });
};

export const getCarById = async (id: string) => {
  return prisma.car.findUnique({
    where: { id },
    include: {
      brand: true,
      specs: true,
    },
  });
};

export const getCarsByBrand = async (brandId: string) => {
  return prisma.car.findMany({
    where: { brandId },
    include: {
      brand: true,
    },
  });
};

export const updateCar = async (id: string, data: UpdateCarData) => {
  return prisma.car.update({
    where: { id },
    data,
    include: {
      brand: true,
    },
  });
};

export const deleteCar = async (id: string) => {
  return prisma.car.delete({
    where: { id },
  });
};
