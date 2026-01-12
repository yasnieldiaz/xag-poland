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

// Search engine crawlers - don't redirect them, let them see canonical content
const crawlerPatterns = [
  'googlebot',
  'bingbot',
  'yandex',
  'duckduckbot',
  'slurp',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest',
  'applebot',
  'semrushbot',
  'ahrefsbot',
];

function isCrawler(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return crawlerPatterns.some(pattern => ua.includes(pattern));
}

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname, host } = request.nextUrl;

  // 1. Redirect www to non-www (canonical URL)
  if (host.startsWith('www.')) {
    const url = request.nextUrl.clone();
    url.host = host.replace('www.', '');
    return NextResponse.redirect(url, 301);
  }

  // 2. Check if path already has a locale prefix
  const hasLocalePrefix = /^\/(pl|es|en|de|cs|nl)(\/|$)/.test(pathname);

  // 3. Check if user has a locale cookie (they manually selected a language)
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;

  // 4. Get user agent to detect crawlers
  const userAgent = request.headers.get('user-agent') || '';

  // 5. If no locale in URL and no manual selection, detect by country
  // BUT: Don't redirect search engine crawlers - let them see canonical content
  if (!hasLocalePrefix && !localeCookie && pathname === '/') {
    // Skip geo-redirect for search engine crawlers
    if (isCrawler(userAgent)) {
      return intlMiddleware(request);
    }

    // Get country from Cloudflare header (CF-IPCountry)
    const country = request.headers.get('cf-ipcountry') ||
                   request.headers.get('x-vercel-ip-country') ||
                   '';

    const detectedLocale = countryToLocale[country] || 'en';

    // Redirect to detected locale (use 302 for geo-redirects, not 301)
    if (detectedLocale !== 'es') { // 'es' is default, no redirect needed
      const url = request.nextUrl.clone();
      url.pathname = `/${detectedLocale}`;
      return NextResponse.redirect(url, 302);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
