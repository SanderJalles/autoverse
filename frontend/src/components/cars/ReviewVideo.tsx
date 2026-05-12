type ReviewVideoProps = {
  videoUrl: string | null;
};

export function ReviewVideo({ videoUrl }: ReviewVideoProps) {
  if (!videoUrl) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-md border border-[var(--line)] bg-white text-sm text-[var(--muted)]">
        Review em video ainda nao cadastrada.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md border border-[var(--line)] bg-black">
      <iframe
        className="aspect-video w-full"
        src={videoUrl}
        title="Review do carro"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
