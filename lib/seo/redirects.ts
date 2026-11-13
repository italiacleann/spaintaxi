/**
 * Permanent (308) redirects for retired URLs, applied by proxy.ts in a
 * single hop: the proxy normalises the request (strips the "/en" prefix,
 * adds the trailing slash) and then looks it up here, so
 * "/en/blog/old-post", "/blog/old-post" and "/blog/old-post/" all go
 * straight to the destination.
 *
 * Keys and values are canonical paths with a trailing slash. Each
 * destination must be a live, indexable page (never another key here), so
 * redirects can't chain. Every entry needs the matching-language
 * destination: English sources go to English pages, Spanish to Spanish.
 */
export const PERMANENT_REDIRECTS: Record<string, string> = {
  // Blog consolidation (Nov 2026): "Private Transfer vs Taxi" and "Are
  // Private Airport Transfers Worth It?" merged into "Taxi vs Uber vs
  // Private Transfer". The merged rows are unpublished in Supabase by
  // scripts/seed-blog.mjs (status: "archived" in their batch file).
  "/blog/private-transfer-vs-taxi-spain/": "/blog/taxi-vs-uber-vs-private-transfer-spain/",
  "/es/blog/traslado-privado-vs-taxi-espana/": "/es/blog/taxi-vs-uber-vs-traslado-privado-espana/",
  "/blog/are-private-airport-transfers-worth-it/": "/blog/taxi-vs-uber-vs-private-transfer-spain/",
  "/es/blog/merece-la-pena-el-traslado-privado-al-aeropuerto/": "/es/blog/taxi-vs-uber-vs-traslado-privado-espana/",

  // Route consolidation (Nov 2026, approved): departure-direction routes
  // with no meaningful search visibility in either language, merged into
  // their reverse route after its page gained a "Returning to the airport"
  // section and departure FAQs (EN + ES). Both languages move together so
  // the destination pair keeps reciprocal hreflang.
  "/casa-batllo-to-barcelona-airport/": "/barcelona-airport-to-casa-batllo/",
  "/es/casa-batllo-al-aeropuerto-de-barcelona/": "/es/traslado-aeropuerto-barcelona-a-casa-batllo/",
  "/hotel-arts-barcelona-to-barcelona-airport/": "/barcelona-airport-to-hotel-arts-barcelona/",
  "/es/hotel-arts-barcelona-al-aeropuerto-de-barcelona/": "/es/traslado-aeropuerto-barcelona-a-hotel-arts-barcelona/",
  "/w-barcelona-to-barcelona-airport/": "/barcelona-airport-to-w-barcelona/",
  "/es/w-barcelona-al-aeropuerto-de-barcelona/": "/es/traslado-aeropuerto-barcelona-a-w-barcelona/",
  "/the-artist-grand-hotel-to-bilbao-airport/": "/bilbao-airport-to-the-artist-grand-hotel/",
  "/es/the-artist-grand-hotel-al-aeropuerto-de-bilbao/": "/es/traslado-aeropuerto-bilbao-a-the-artist-grand-hotel/",
  "/puerto-rico-to-gran-canaria-airport/": "/gran-canaria-airport-to-puerto-rico/",
  "/es/puerto-rico-al-aeropuerto-de-gran-canaria/": "/es/traslado-aeropuerto-gran-canaria-a-puerto-rico/",
  "/ibiza-town-to-ibiza-airport/": "/ibiza-airport-to-ibiza-town/",
  "/es/ibiza-ciudad-a-aeropuerto-ibiza/": "/es/aeropuerto-ibiza-a-ibiza-ciudad/",
  "/ilunion-malaga-to-malaga-airport/": "/malaga-airport-to-ilunion-malaga/",
  "/es/ilunion-malaga-al-aeropuerto-de-malaga/": "/es/traslado-aeropuerto-malaga-a-ilunion-malaga/",
  "/hondarribia-to-san-sebastian-airport/": "/san-sebastian-airport-to-hondarribia/",
  "/es/hondarribia-al-aeropuerto-de-san-sebastian/": "/es/traslado-aeropuerto-san-sebastian-a-hondarribia/",
  "/nh-collection-valencia-colon-to-valencia-airport/": "/valencia-airport-to-nh-collection-valencia-colon/",
  "/es/nh-collection-valencia-colon-al-aeropuerto-de-valencia/": "/es/traslado-aeropuerto-valencia-a-nh-collection-valencia-colon/",
};
