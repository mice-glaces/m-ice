import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { LocationProvider } from "@/context/LocationContext";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LocationModal } from "@/components/features/LocationModal";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "M'Ice | Glacier Artisan Saint-Jean-Saint-Nicolas",
  description: "Glaces artisanales & desserts glacés à Saint-Jean-Saint-Nicolas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <LocationProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <LocationModal />
        </LocationProvider>
      </body>
    </html>
  );
}
