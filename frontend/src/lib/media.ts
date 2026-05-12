import type { Brand } from "@/types/brand";

const brandIntroVideos: Record<string, string> = {
  Honda: "",
  Toyota: "",
  BMW: "",
  Ford: "",
  Porsche: "",
};

export function getBrandIntroVideo(brand: Brand) {
  return brand.introVideoUrl ?? brandIntroVideos[brand.name] ?? "";
}

export function formatCurrency(value: number | null) {
  if (value === null) {
    return "Preco sob consulta";
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}
