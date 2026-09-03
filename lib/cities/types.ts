import type { NearbyPlace } from "@/lib/airports/types";

export interface CityFaqItem {
  question: string;
  answer: string;
}

export interface CityRecord {
  slugEn: string;
  slugEs: string;
  nameEn: string;
  nameEs: string;
  regionEn: string;
  regionEs: string;
  isFeatured: boolean;
  hasCruisePort: boolean;
  mainAirportIata: string;
  airportDriveTime: string;
  destinations: NearbyPlace[];
  imageSeed: number;
  blurbEn?: string;
  blurbEs?: string;
  /**
   * Optional hand-written HTML (same tag whitelist/pipeline as route
   * content) covering city-specific sections — attractions, train station,
   * business travel, nearby destinations, hotel areas, etc. — rendered
   * on the city page when present. Every city without it (the vast
   * majority) keeps rendering the fully generic templated page exactly as
   * before; this is additive, not a replacement of the shared template.
   */
  richContentTitleEn?: string;
  richContentTitleEs?: string;
  richContentEn?: string;
  richContentEs?: string;
  /** Optional override for the generic auto-generated FAQ (composeCityEn/Es' buildFaq()). */
  customFaqEn?: CityFaqItem[];
  customFaqEs?: CityFaqItem[];
}
