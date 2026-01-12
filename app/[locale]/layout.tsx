import type { Metadata, Viewport } from "next";
import { Exo, Lexend, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { StructuredData } from "@/components/seo";
import "../globals.css";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const siteUrl = "https://droneagri.pl";

// Map locale to OpenGraph locale format
const localeToOG: Record<Locale, string> = {
  es: "es_ES",
  en: "en_US",
  pl: "pl_PL",
  de: "de_DE",
  cs: "cs_CZ",
  nl: "nl_NL",
};

// Map locale to HTML lang format
const localeToLang: Record<Locale, string> = {
  es: "es",
  en: "en",
  pl: "pl",
  de: "de",
  cs: "cs",
  nl: "nl",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = locale as Locale;

  const currentUrl = validLocale === "es" ? siteUrl : `${siteUrl}/${validLocale}`;

  return {
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
      locale: localeToOG[validLocale],
      alternateLocale: Object.values(localeToOG).filter((l) => l !== localeToOG[validLocale]),
      url: currentUrl,
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
      canonical: currentUrl,
      languages: {
        "es": siteUrl,
        "en": `${siteUrl}/en`,
        "pl": `${siteUrl}/pl`,
        "de": `${siteUrl}/de`,
        "cs": `${siteUrl}/cs`,
        "nl": `${siteUrl}/nl`,
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
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [
        { url: "/favicon-32x32.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
    other: {
      "msapplication-TileColor": "#0b0e20",
      "msapplication-config": "/browserconfig.xml",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0b0e20",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={localeToLang[locale as Locale]} className={`${exo.variable} ${lexend.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <StructuredData />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
