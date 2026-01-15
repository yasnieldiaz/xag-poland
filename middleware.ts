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

// Legacy WordPress URL redirects (301) and removals (410)
const legacyRedirects: Record<string, string> = {
  '/agritechnica': '/pl/field-operations',
  '/agritechnica/': '/pl/field-operations',
  '/xag-v40-dron-rolniczy': '/pl/products/p100-pro',
  '/xag-v40-dron-rolniczy/': '/pl/products/p100-pro',
  '/xag-p100': '/pl/products/p100-pro',
  '/xag-p100/': '/pl/products/p100-pro',
  '/xag-p150': '/pl/products/p150-max',
  '/xag-p150/': '/pl/products/p150-max',
  '/drony-rolnicze': '/pl/products',
  '/drony-rolnicze/': '/pl/products',
  '/roboty-polowe': '/pl/landborne',
  '/roboty-polowe/': '/pl/landborne',
  '/kontakt': '/pl/contact-us',
  '/kontakt/': '/pl/contact-us',
  '/o-nas': '/pl/about-us',
  '/o-nas/': '/pl/about-us',
  '/serwis': '/pl/xag-care-express',
  '/serwis/': '/pl/xag-care-express',
};

// WordPress paths that should return 410 Gone (permanently removed)
const wpRemovedPaths = [
  '/wp-admin',
  '/wp-content',
  '/wp-includes',
  '/wp-login',
  '/wp-json',
  '/xmlrpc.php',
  '/wp-cron.php',
  '/wp-config.php',
  '/wp-settings.php',
  '/wp-load.php',
  '/wp-blog-header.php',
];

// Security headers to add to all responses
const securityHeaders = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://api.resend.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
};

function addSecurityHeaders(response: NextResponse): NextResponse {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

export default function middleware(request: NextRequest) {
  const { pathname, host } = request.nextUrl;

  // 0. Handle legacy WordPress URLs
  // Check for 301 redirects (old content pages)
  const redirectTo = legacyRedirects[pathname.toLowerCase()];
  if (redirectTo) {
    const url = request.nextUrl.clone();
    url.pathname = redirectTo;
    const response = NextResponse.redirect(url, 301);
    return addSecurityHeaders(response);
  }

  // Check for WordPress paths that should return 410 Gone
  const isWpPath = wpRemovedPaths.some(wp => pathname.toLowerCase().startsWith(wp));
  if (isWpPath || pathname.match(/\/wp-.*\.php$/)) {
    const response = new NextResponse(null, {
      status: 410,
      statusText: 'Gone',
      headers: { 'X-Robots-Tag': 'noindex' }
    });
    return addSecurityHeaders(response);
  }

  // 1. Redirect www to non-www (canonical URL)
  if (host.startsWith('www.')) {
    const url = request.nextUrl.clone();
    url.host = host.replace('www.', '');
    const response = NextResponse.redirect(url, 301);
    return addSecurityHeaders(response);
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
      const response = intlMiddleware(request);
      return addSecurityHeaders(response);
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
      const response = NextResponse.redirect(url, 302);
      return addSecurityHeaders(response);
    }
  }

  // Get response from intlMiddleware and add security headers
  const response = intlMiddleware(request);
  return addSecurityHeaders(response);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
