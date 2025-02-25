import createMiddleware from "next-intl/middleware";
import { routing } from "@/src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vi|en)/:path*"],
};

// import { match } from '@formatjs/intl-localematcher'
// import Negotiator from 'negotiator'
// import { NextRequest, NextResponse } from "next/server";

// export const locales = ['en-US', 'vi']
// const defaultLocale = 'en-US'

// export function getLocale(req: NextRequest) {
//   const negotiator = new Negotiator({ headers: Object.fromEntries(req.headers.entries()) })
//   const languages = negotiator.languages()
//   return match(languages, locales, defaultLocale)
// }

// export function middleware(request: NextRequest) {
//   // Check if there is any supported locale in the pathname
//   const { pathname } = request.nextUrl
//   const pathnameHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   )

//   if (pathnameHasLocale) return

//   // Redirect if there is no locale
//   const locale = getLocale(request)
//   request.nextUrl.pathname = `/${locale}${pathname}`
//   // e.g. incoming request is /products
//   // The new URL is now /en-US/products
//   return NextResponse.redirect(request.nextUrl)
// }

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     '/((?!_next).*)',
//     // Optional: only run on root (/) URL
//     // '/'
//   ],
// }
