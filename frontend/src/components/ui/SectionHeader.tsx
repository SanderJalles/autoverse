type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-2 text-3xl font-bold text-[var(--foreground)]">{title}</h1>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
