import type { Brand } from "@/types/brand";

export function getBrandIntroVideo(brand: Brand) {
  return brand.introVideoUrl ?? "";
}

export function getYouTubeId(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtube.com")) {
      if (parsedUrl.pathname.startsWith("/embed/")) {
        return parsedUrl.pathname.split("/embed/")[1]?.split("/")[0] ?? "";
      }

      return parsedUrl.searchParams.get("v") ?? "";
    }

    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.replace("/", "");
    }
  } catch {
    return "";
  }

  return "";
}

export function getYouTubeEmbedUrl(url: string, options?: { ambient?: boolean }) {
  const youtubeId = getYouTubeId(url);

  if (!youtubeId) {
    return "";
  }

  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });

  if (options?.ambient) {
    params.set("autoplay", "1");
    params.set("mute", "1");
    params.set("loop", "1");
    params.set("playlist", youtubeId);
    params.set("controls", "0");
  }

  return `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;
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
