type Brand = {
  id: string;
  name: string;
  country: string | null;
  logoUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3333";

async function getBrands(): Promise<Brand[]> {
  const response = await fetch(`${apiUrl}/brands`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Nao foi possivel carregar as marcas.");
  }

  return response.json();
}

export default async function Home() {
  const brands = await getBrands();

  return (
    <main className="min-h-screen">
      <section className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
              AutoVerse
            </p>
            <h1 className="mt-1 text-2xl font-bold text-[var(--foreground)]">
              Catalogo de marcas
            </h1>
          </div>
          <div className="rounded-md border border-[var(--line)] px-3 py-2 text-sm text-[var(--muted)]">
            {brands.length} marcas
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <article
              key={brand.id}
              className="rounded-md border border-[var(--line)] bg-[var(--surface)] p-5 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#e7f3f1] text-lg font-bold text-[var(--accent-strong)]">
                  {brand.name.slice(0, 1)}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[var(--foreground)]">
                    {brand.name}
                  </h2>
                  <p className="text-sm text-[var(--muted)]">
                    {brand.country ?? "Origem nao informada"}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
