import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoVerse",
  description: "Catalogo interativo de carros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
