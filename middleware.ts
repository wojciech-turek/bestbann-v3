import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

const defaultLocale = "en";
const locales = ["en", "nl", "fr"];

const getLocale = (request: NextRequest) => {
  const negotiatorHeaders: Record<string, string> = {};

  console.log(request.headers);
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  console.log(languages);

  try {
    return match(languages, locales, defaultLocale);
  } catch {
    console.warn(
      `Failed to match locale for languages "${languages.join(
        ", "
      )}". Defaulting to "${defaultLocale}".`
    );
    return defaultLocale;
  }
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(pathname);
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  console.log(pathnameHasLocale);

  // if users try to enter an invalid locale, we redirect to the home page

  if (pathnameHasLocale) return;
  // Redirect if there is no locale
  const locale = getLocale(request);
  console.log("locale", locale);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Only run on page routes, exclude static assets
    "/((?!_next|imgs|videos|deco|favicon\\.ico).*)",
  ],
};
