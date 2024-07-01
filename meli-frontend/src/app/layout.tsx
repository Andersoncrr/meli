import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercado Libre Colombia - Envíos Gratis en el día",
  description:
    "Compre productos con Envío Gratis en el día en Mercado Libre Colombia. Encuentre miles de marcas y productos a precios increíbles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container">
          <div className="container__children">{children}</div>
        </main>
      </body>
    </html>
  );
}
