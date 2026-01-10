"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

const serviceKeys = ["priorityRepairs", "genuineParts", "expertTechnicians", "extendedWarranty"] as const;

const planKeys = ["basic", "plus", "premium"] as const;

const planFeatureKeys: Record<string, string[]> = {
  basic: ["priority", "discount", "support", "check"],
  plus: ["priority", "discount", "support", "check", "firmware", "loaner"],
  premium: ["priority", "discount", "support", "check", "firmware", "loaner", "onsite"],
};

export default function XAGCareExpressPage() {
  const t = useTranslations("xagCareExpress");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-navy flex items-center">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero/support-hero.webp"
            alt="XAG Care Express"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="container-main relative z-10 py-24">
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

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium mb-4">
              {t("services.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              {t("services.title")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceKeys.map((key) => (
              <div
                key={key}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ServiceIcon name={key} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {t(`services.${key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`services.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium mb-4">
              {t("plans.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              {t("plans.title")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {planKeys.map((key) => {
              const isPopular = key === "plus";
              return (
                <div
                  key={key}
                  className={`bg-white rounded-xl p-8 ${
                    isPopular
                      ? "ring-2 ring-brand-red relative"
                      : "border border-gray-200"
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-red text-white text-sm font-medium rounded-full">
                      {t("plans.mostPopular")}
                    </span>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-navy">
                      {t(`plans.${key}.name`)}
                    </h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-navy">
                        {t(`plans.${key}.price`)}
                      </span>
                      <span className="text-gray-600">{t("plans.perYear")}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {planFeatureKeys[key].map((featureKey) => (
                      <li key={featureKey} className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-brand-red flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600 text-sm">
                          {t(`plans.${key}.features.${featureKey}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact-us"
                    variant={isPopular ? "primary" : "outline"}
                    className="w-full"
                  >
                    {t("plans.getStarted")}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-red text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/request-repair-service" variant="outline-white" size="lg">
              {t("cta.requestRepair")}
            </Button>
            <Button href="/contact-us" variant="outline-white" size="lg">
              {t("cta.contactSupport")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactElement> = {
    priorityRepairs: (
      <svg
        className="w-8 h-8 text-brand-red"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    genuineParts: (
      <svg
        className="w-8 h-8 text-brand-red"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    expertTechnicians: (
      <svg
        className="w-8 h-8 text-brand-red"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    extendedWarranty: (
      <svg
        className="w-8 h-8 text-brand-red"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  };

  return icons[name] || null;
}
