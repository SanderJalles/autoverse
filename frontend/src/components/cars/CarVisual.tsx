"use client";

import { useState } from "react";

type CarVisualProps = {
  name: string;
  imageUrl: string | null;
  size?: "card" | "hero";
  dark?: boolean;
};

export function CarVisual({
  name,
  imageUrl,
  size = "card",
  dark = false,
}: CarVisualProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const showImage = Boolean(imageUrl && !hasImageError);
  const letterSize = size === "hero" ? "text-7xl" : "text-4xl";

  return (
    <div
      className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden ${
        dark ? "bg-black/30" : "bg-[#dfe8f2]"
      }`}
    >
      {showImage ? (
        <img
          src={imageUrl ?? ""}
          alt={name}
          className="h-full w-full object-cover"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#dfe8f2]">
          <span className={`${letterSize} font-bold text-[#8293a8]`}>
            {name.slice(0, 1)}
          </span>
        </div>
      )}
    </div>
  );
}
