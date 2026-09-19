import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";
import MetaPixel from "../components/MetaPixel";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klub HTD | Hiszpański Todos los Días z Agatą Piątek",
  description: "Codzienna porcja żywego i przydatnego hiszpańskiego prosto na Twój telefon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${montserrat.variable} ${lora.variable} font-sans antialiased`} suppressHydrationWarning>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
