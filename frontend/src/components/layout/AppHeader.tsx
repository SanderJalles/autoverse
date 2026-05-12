import Link from "next/link";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#101827]/90 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold">
          AutoVerse
        </Link>
        <nav className="flex items-center gap-5 text-sm text-white/75">
          <Link href="/" className="transition hover:text-white">
            Marcas
          </Link>
        </nav>
      </div>
    </header>
  );
}
