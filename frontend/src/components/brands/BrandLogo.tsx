"use client";

import { useState } from "react";
import type { Brand } from "@/types/brand";

type BrandLogoProps = {
  brand: Brand;
  dark?: boolean;
  size?: "card" | "hero" | "display";
};

export function BrandLogo({ brand, dark = false, size = "card" }: BrandLogoProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const showImage = Boolean(brand.logoUrl && !hasImageError);
  const boxSize =
    size === "display" ? "h-28 w-28" : size === "hero" ? "h-20 w-20" : "h-12 w-12";
  const letterSize =
    size === "display" ? "text-4xl" : size === "hero" ? "text-3xl" : "text-lg";

  return (
    <div
      className={`flex ${boxSize} shrink-0 items-center justify-center rounded-md border ${
        dark
          ? "border-white/15 bg-white/10"
          : "border-[#cfe5e1] bg-[#e7f3f1]"
      }`}
    >
      {showImage ? (
        <img
          src={brand.logoUrl ?? ""}
          alt={brand.name}
          className="h-4/5 w-4/5 object-contain"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <span
          className={`${letterSize} font-bold ${
            dark ? "text-white" : "text-[var(--accent-strong)]"
          }`}
        >
          {brand.name.slice(0, 1)}
        </span>
      )}
    </div>
  );
}
