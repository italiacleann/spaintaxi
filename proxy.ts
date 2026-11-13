import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, locales } from "@/lib/i18n/config";
import { PERMANENT_REDIRECTS } from "@/lib/seo/redirects";

// Root-level file-convention routes (favicons, etc.) that Next.js serves at
// an extensionless path, so the matcher's dotted-file exclusion doesn't
// catch them and they'd otherwise get rewritten into the [locale] tree.
const excludedRootRoutes = ["/icon/", "/apple-icon/"];

/**
 * The single canonical form of a requested path:
 *   1. "/en/..." → "/..." (English pages live at unprefixed URLs; the /en
 *      tree is only an internal rewrite target). Generated metadata images
 *      under /en/ are real resources referenced by og:image and keep it.
 *   2. Trailing slash added (the site uses trailingSlash: true; Next's own
 *      slash redirect is disabled via skipTrailingSlashRedirect so this
 *      proxy can do everything in one hop).
 *   3. Retired URLs mapped to their replacement (lib/seo/redirects.ts).
 */
function canonicalPath(pathname: string): string {
  let path = pathname;
  const isEnPrefixed = path === `/${defaultLocale}` || path.startsWith(`/${defaultLocale}/`);
  const isMetadataImage = /\/(opengraph-image|twitter-image)(\/|$)/.test(path);
  if (isEnPrefixed && !isMetadataImage) path = path.slice(defaultLocale.length + 1) || "/";
  if (!path.endsWith("/")) path = `${path}/`;
  return PERMANENT_REDIRECTS[path] ?? path;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Every redirect happens here, in one hop, before any rewrite.
  const target = canonicalPath(pathname);
  if (target !== pathname) {
    // A plain URL, not request.nextUrl.clone(): NextURL remembers whether the
    // incoming path had a trailing slash and would strip the one added here,
    // turning "/bilbao" -> "/bilbao/" into a redirect loop.
    const url = new URL(request.url);
    url.pathname = target;
    return NextResponse.redirect(url, 308);
  }

  if (pathname.startsWith("/admin/")) {
    return NextResponse.next();
  }

  if (excludedRootRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}/` || pathname.startsWith(`/${locale}/`)
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
