import { prisma } from "../lib/prisma";

export const createBrand = async (data: {
  name: string;
  country?: string;
  logoUrl?: string;
}) => {
  return prisma.brand.create({
    data,
  });
};

export const getBrands = async () => {
  return prisma.brand.findMany();
};

export const getBrandById = async (id: string) => {
  return prisma.brand.findUnique({
    where: { id },
  });
};

export const deleteBrand = async (id: string) => {
  return prisma.brand.delete({
    where: { id },
  });
};