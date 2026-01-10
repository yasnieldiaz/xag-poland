import { MetadataRoute } from "next";

const siteUrl = "https://agro.esix.online";

const locales = ["es", "en", "pl"];

const staticPages = [
  "",
  "/products",
  "/products/p150-max",
  "/products/p100-pro",
  "/products/r150-2022",
  "/products/r100",
  "/products/r200",
  "/products/apc2",
  "/about-us",
  "/contact-us",
  "/videos-tutorials",
  "/download-center",
  "/xag-care-express",
  "/field-operations",
  "/request-repair-service",
  "/request-warranty-service",
  "/privacy-policy",
  "/terms-of-use",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Add each page for each locale
  for (const page of staticPages) {
    for (const locale of locales) {
      const url = locale === "es" ? `${siteUrl}${page}` : `${siteUrl}/${locale}${page}`;

      routes.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : page.includes("/products/") ? 0.9 : 0.7,
        alternates: {
          languages: {
            es: `${siteUrl}${page}`,
            en: `${siteUrl}/en${page}`,
            pl: `${siteUrl}/pl${page}`,
          },
        },
      });
    }
  }

  return routes;
}
