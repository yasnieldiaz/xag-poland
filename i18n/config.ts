export const locales = ['es', 'en', 'pl', 'de', 'cs', 'nl'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  pl: 'Polski',
  de: 'Deutsch',
  cs: 'Čeština',
  nl: 'Nederlands',
};

export const localeFlags: Record<Locale, string> = {
  es: '🇪🇸',
  en: '🇬🇧',
  pl: '🇵🇱',
  de: '🇩🇪',
  cs: '🇨🇿',
  nl: '🇳🇱',
};
