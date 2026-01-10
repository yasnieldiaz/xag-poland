"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export default function ContactUsPage() {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");

  const contactInfo = [
    {
      titleKey: "address",
      content: t("addressValue"),
      icon: "location",
    },
    {
      titleKey: "email",
      content: "biuro@imegagroup.pl",
      icon: "email",
    },
    {
      title: "Lukasz Szczygieł",
      subtitleKey: "salesSpecialist",
      content: "+48 518 416 466",
      icon: "user",
    },
    {
      title: "Yasniel Díaz",
      subtitleKey: "ceo",
      content: "+48 696 350 197",
      icon: "user",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t("successMessage"));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-24">
        <div className="container-main">
          <span className="inline-block px-4 py-1 bg-brand-red rounded-full text-white text-sm font-medium mb-4">
            {t("title")}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            {t("heroDescription")}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-navy mb-8">
                {t("infoTitle")}
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ContactIcon name={info.icon} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">
                        {info.title || tCommon(info.titleKey as "address" | "email")}
                      </h3>
                      {info.subtitleKey && (
                        <p className="text-sm text-brand-red">{t(info.subtitleKey)}</p>
                      )}
                      <p className="text-gray-600 whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps */}
              <div className="mt-8 aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.8547619066254!2d18.5401!3d50.1022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711311f1a57e2a3%3A0x5b2b3b3b3b3b3b3b!2sul.%20Smolna%2014%2C%2044-200%20Rybnik%2C%20Poland!5e0!3m2!1sen!2spl!4v1704900000000!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="XAG IMEGA Poland Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">
                  {t("formTitle")}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t("fullName")} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                        placeholder={t("fullNamePlaceholder")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t("emailAddress")} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                        placeholder={t("emailPlaceholder")}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t("phoneNumber")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                        placeholder={t("phonePlaceholder")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t("companyName")}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                        placeholder={t("companyPlaceholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("subject")} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    >
                      <option value="">{t("subjectPlaceholder")}</option>
                      <option value="product-inquiry">{t("subjectOptions.productInquiry")}</option>
                      <option value="quote-request">{t("subjectOptions.quoteRequest")}</option>
                      <option value="training">{t("subjectOptions.training")}</option>
                      <option value="support">{t("subjectOptions.support")}</option>
                      <option value="partnership">{t("subjectOptions.partnership")}</option>
                      <option value="other">{t("subjectOptions.other")}</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("message")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent resize-none"
                      placeholder={t("messagePlaceholder")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-red text-white py-4 px-8 rounded-lg font-semibold hover:bg-brand-red-hover transition-colors"
                  >
                    {t("sendMessage")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactElement> = {
    location: (
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
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    phone: (
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
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    email: (
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
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    clock: (
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    user: (
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  };

  return icons[name] || null;
}
