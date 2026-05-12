import type { Brand } from "@/types/brand";
import type { Car } from "@/types/car";

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3333";

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${apiUrl}${path}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Falha ao carregar ${path}`);
  }

  return response.json();
}

export function getBrands() {
  return request<Brand[]>("/brands");
}

export function getBrand(id: string) {
  return request<Brand>(`/brands/${id}`);
}

export function getCarsByBrand(brandId: string) {
  return request<Car[]>(`/brands/${brandId}/cars`);
}

export function getCarDetails(id: string) {
  return request<Car>(`/cars/${id}/details`);
}
