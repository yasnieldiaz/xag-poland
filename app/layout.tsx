import type { Metadata, Viewport } from "next";
import { Exo, Lexend, Inter } from "next/font/google";
import "./globals.css";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://agro.esix.online";

export const viewport: Viewport = {
  themeColor: "#0b0e20",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Drony Rolnicze XAG | XAG IMEGA Polska - Precyzyjne Rolnictwo 4.0",
    template: "%s | XAG IMEGA Polska",
  },
  description:
    "XAG IMEGA Polska - oficjalny dystrybutor dronów rolniczych XAG. Opryski dronem, precyzyjne nawożenie, mapowanie pól. P150 Max, P100 Pro, R150. Szkolenia i serwis.",
  keywords: [
    "drony rolnicze",
    "XAG IMEGA",
    "opryski dronem",
    "precyzyjne rolnictwo",
    "rolnictwo 4.0",
    "drony do oprysków",
    "P150 Max",
    "P100 Pro",
    "R150",
    "dron rolniczy Polska",
    "nawożenie dronem",
    "mapowanie pól",
    "XAG Polska",
    "IMEGA Group",
    "drony agricolas",
    "agricultural drones Poland",
  ],
  authors: [{ name: "XAG IMEGA Polska", url: siteUrl }],
  creator: "XAG IMEGA Polska",
  publisher: "IMEGA Sp. z o.o.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    alternateLocale: ["es_ES", "en_US"],
    url: siteUrl,
    siteName: "XAG IMEGA Polska",
    title: "Drony Rolnicze XAG | XAG IMEGA Polska",
    description:
      "Oficjalny dystrybutor dronów rolniczych XAG w Polsce. Precyzyjne opryski, nawożenie i mapowanie pól. Szkolenia i serwis gwarancyjny.",
    images: [
      {
        url: "/images/hero/hero-p150-max.webp",
        width: 1920,
        height: 1080,
        alt: "Dron rolniczy XAG P150 Max w akcji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drony Rolnicze XAG | XAG IMEGA Polska",
    description:
      "Oficjalny dystrybutor dronów rolniczych XAG w Polsce. Precyzyjne opryski, nawożenie i mapowanie pól.",
    images: ["/images/hero/hero-p150-max.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "pl-PL": `${siteUrl}/pl`,
      "es-ES": `${siteUrl}/es`,
      "en-US": `${siteUrl}/en`,
    },
  },
  verification: {
    google: "verification_token",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${exo.variable} ${lexend.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
