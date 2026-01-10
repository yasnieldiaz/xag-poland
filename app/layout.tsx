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

const siteUrl = "https://droneagri.pl";

export const viewport: Viewport = {
  themeColor: "#0b0e20",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Drony Rolnicze XAG Polska | DroneAgri.pl - Precyzyjne Rolnictwo 4.0",
    template: "%s | DroneAgri.pl - XAG IMEGA Polska",
  },
  description:
    "DroneAgri.pl - oficjalny dystrybutor dronów rolniczych XAG w Polsce. Profesjonalne opryski dronem, nawożenie, siew i mapowanie pól. P150 Max, P100 Pro, R150, R100, R200. Certyfikowane szkolenia operatorów i autoryzowany serwis.",
  keywords: [
    "drony rolnicze",
    "drony rolnicze XAG",
    "opryski dronem",
    "dron do oprysków",
    "precyzyjne rolnictwo",
    "rolnictwo 4.0",
    "smart farming Polska",
    "XAG P150 Max",
    "XAG P100 Pro",
    "XAG R150",
    "XAG R100",
    "XAG R200",
    "robot polowy XAG",
    "dron rolniczy cena",
    "opryskiwacz dronowy",
    "nawożenie dronem",
    "siew dronem",
    "mapowanie pól dronem",
    "XAG Polska",
    "XAG IMEGA",
    "IMEGA Group",
    "drony agricolas",
    "agricultural drones Poland",
    "drone spraying",
    "precision agriculture",
    "autopilot rolniczy APC2",
    "szkolenie operator drona rolniczego",
    "serwis dronów rolniczych",
  ],
  authors: [{ name: "XAG IMEGA Polska", url: siteUrl }],
  creator: "DroneAgri.pl - XAG IMEGA Polska",
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
    siteName: "DroneAgri.pl - XAG IMEGA Polska",
    title: "Drony Rolnicze XAG Polska | DroneAgri.pl",
    description:
      "Oficjalny dystrybutor dronów rolniczych XAG w Polsce. Profesjonalne opryski, nawożenie, siew i mapowanie pól. Certyfikowane szkolenia i autoryzowany serwis gwarancyjny.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DroneAgri.pl - Drony Rolnicze XAG P150 Max w akcji nad polem uprawnym",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@droneagri_pl",
    creator: "@xag_imega",
    title: "Drony Rolnicze XAG Polska | DroneAgri.pl",
    description:
      "Oficjalny dystrybutor dronów rolniczych XAG w Polsce. Profesjonalne opryski, nawożenie i mapowanie pól dronem.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "pl-PL": siteUrl,
      "es-ES": `${siteUrl}/es`,
      "en-US": `${siteUrl}/en`,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "technology",
  classification: "Agricultural Technology",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#df1b23" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#0b0e20",
    "msapplication-config": "/browserconfig.xml",
  },
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
