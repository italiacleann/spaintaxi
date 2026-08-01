import { ImageResponse } from "next/og";

import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const brand = locale === "es" ? "TRASLADOS PRIVADOS EN ESPAÑA" : "SPAIN PRIVATE TRANSFERS";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #0B4F6C 0%, #0A3E56 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#F97316",
            }}
          />
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: 1 }}>
            {brand}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 60, fontWeight: 800, maxWidth: 950, lineHeight: 1.15 }}>
          {dict.hero.title}
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 28, color: "#CBD9E0" }}>
          {dict.hero.ratingSuffix}
        </div>
      </div>
    ),
    { ...size }
  );
}
