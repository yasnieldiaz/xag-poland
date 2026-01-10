"use client";

import { useTranslations } from "next-intl";

const downloadItems = [
  {
    id: "p100proSpecs",
    href: "/pdfs/p100-pro-specs.pdf",
  },
  {
    id: "r150Specs",
    href: "/pdfs/r150-specs.pdf",
  },
  {
    id: "v40Specs",
    href: "/pdfs/v40-specs.pdf",
  },
];

export default function DownloadCenterPage() {
  const t = useTranslations("downloadCenter");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-24">
        <div className="container-main">
          <span className="inline-block px-4 py-1 bg-brand-red rounded-full text-white text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Downloads List */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <div className="space-y-4">
            {downloadItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-red"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">{t(`downloads.${item.id}.title`)}</h3>
                    <p className="text-sm text-gray-600">{t(`downloads.${item.id}.description`)}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {t(`downloads.${item.id}.type`)}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {t(`downloads.${item.id}.product`)}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {t(`downloads.${item.id}.format`)}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {t(`downloads.${item.id}.fileSize`)}
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href={item.href}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-brand-red text-white rounded-lg hover:bg-brand-red-hover transition-colors whitespace-nowrap"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  {t("download")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
