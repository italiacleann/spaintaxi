export type RouteKind = "hotel" | "cruise-port" | "train-station" | "attraction" | "day-trip" | "city";

/** Which direction the journey runs, driving which framing/copy pattern the page uses. */
export type RouteDirection = "from-airport" | "to-airport" | "from-city" | "to-city";

export interface RouteFaqItem {
  question: string;
  answer: string;
}

export interface RouteRecord {
  kind: RouteKind;
  direction: RouteDirection;

  /** Slugs of the parent city/airport this route belongs to (e.g. "barcelona"), used to group related routes and to light up the "Related Transfers" section on that city's/airport's own page. */
  originCitySlug: string;

  slugEn: string;
  slugEs: string;

  /** Human label for the origin point in this direction, e.g. "Barcelona Airport" or "W Barcelona". */
  originNameEn: string;
  originNameEs: string;

  /** Human label for the destination point in this direction. */
  destinationNameEn: string;
  destinationNameEs: string;

  /** Neighborhood/district of the non-airport, non-city endpoint, where relevant (hotels, attractions). */
  areaEn?: string;
  areaEs?: string;

  driveTime: string;
  distanceKm?: number;

  /** Natural-length H1 heading, distinct from the char-constrained SEO title. */
  titleEn: string;
  titleEs: string;

  seoTitleEn: string;
  seoTitleEs: string;
  metaDescriptionEn: string;
  metaDescriptionEs: string;

  /** Hand-written HTML: intro + "about the destination" sections. */
  contentEn: string;
  contentEs: string;

  faqEn: RouteFaqItem[];
  faqEs: RouteFaqItem[];

  imageUrl: string;
  imageAltEn: string;
  imageAltEs: string;
}
