import { getYouTubeEmbedUrl } from "@/lib/media";

type BrandIntroMediaProps = {
  brandName: string;
  introVideoUrl: string;
};

export function BrandIntroMedia({
  brandName,
  introVideoUrl,
}: BrandIntroMediaProps) {
  const embedUrl = getYouTubeEmbedUrl(introVideoUrl, { ambient: true });

  if (embedUrl) {
    return (
      <iframe
        className="aspect-video w-full"
        src={embedUrl}
        title={`Video introdutorio ${brandName}`}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <video
      className="aspect-video w-full object-cover"
      src={introVideoUrl}
      autoPlay
      muted
      loop
      playsInline
    />
  );
}
