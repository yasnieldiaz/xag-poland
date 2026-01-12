import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

// Map countries to locales
const countryToLocale: Record<string, string> = {
  // Poland -> Polish
  'PL': 'pl',
  // Spain and Latin America -> Spanish
  'ES': 'es',
  'MX': 'es',
  'AR': 'es',
  'CO': 'es',
  'CL': 'es',
  'PE': 'es',
  'VE': 'es',
  'EC': 'es',
  'GT': 'es',
  'CU': 'es',
  'BO': 'es',
  'DO': 'es',
  'HN': 'es',
  'PY': 'es',
  'SV': 'es',
  'NI': 'es',
  'CR': 'es',
  'PA': 'es',
  'UY': 'es',
  // Germany, Austria, Switzerland -> German
  'DE': 'de',
  'AT': 'de',
  'CH': 'de',
  'LI': 'de',
  // Czech Republic -> Czech
  'CZ': 'cs',
  // Netherlands, Belgium (Dutch speaking) -> Dutch
  'NL': 'nl',
  'BE': 'nl',
  // Rest of the world -> English (default)
};

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if path already has a locale prefix
  const hasLocalePrefix = /^\/(pl|es|en|de|cs|nl)(\/|$)/.test(pathname);

  // Check if user has a locale cookie (they manually selected a language)
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;

  // If no locale in URL and no manual selection, detect by country
  if (!hasLocalePrefix && !localeCookie && pathname === '/') {
    // Get country from Cloudflare header (CF-IPCountry)
    const country = request.headers.get('cf-ipcountry') ||
                   request.headers.get('x-vercel-ip-country') ||
                   '';

    const detectedLocale = countryToLocale[country] || 'en';

    // Redirect to detected locale
    if (detectedLocale !== 'es') { // 'es' is default, no redirect needed
      const url = request.nextUrl.clone();
      url.pathname = `/${detectedLocale}`;
      return NextResponse.redirect(url);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
