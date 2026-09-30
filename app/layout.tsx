import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallBar } from "@/components/MobileCallBar";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Enclosed Cargo Trailers — Douglas, GA`,
    template: `%s | ${site.name}`,
  },
  description: `Browse enclosed cargo trailer styles and current inventory from ${site.name} in Douglas, GA. Habla Español. Text ${site.phone} about any unit.`,
  applicationName: site.shortName,
  appleWebApp: {
    capable: true,
    title: site.shortName,
    statusBarStyle: "default",
  },
  openGraph: {
    title: `${site.name} — Enclosed Cargo Trailers`,
    description: `Douglas, GA cargo trailer catalog. Text ${site.phone} for details. Habla Español.`,
    type: "website",
    locale: "en_US",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1f3a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-navy">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-electric focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
