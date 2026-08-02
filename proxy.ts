import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, locales } from "@/lib/i18n/config";

// Root-level file-convention routes (favicons, etc.) that Next.js serves at
// an extensionless path, so the matcher's dotted-file exclusion doesn't
// catch them and they'd otherwise get rewritten into the [locale] tree.
const excludedRootRoutes = ["/icon", "/apple-icon"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return NextResponse.next();
  }

  if (excludedRootRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
