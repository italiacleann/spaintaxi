/**
 * Optional hand-written copy that replaces the template-generated SEO title,
 * meta description and hero text on a single airport or city page. Every
 * record without it keeps the generated copy exactly as before.
 */
export interface LocalizedPageCopy {
  seoTitle?: string;
  metaDescription?: string;
  heroTitle?: string;
  heroDescription?: string;
}

export interface PageFaqItem {
  question: string;
  answer: string;
}

/** Fields shared by airport and city records for page-specific content. */
export interface PageContentOverrides {
  copyEn?: LocalizedPageCopy;
  copyEs?: LocalizedPageCopy;
  /** Hand-written section rendered after "Why choose us" (HTML, same pipeline as route content). */
  richContentTitleEn?: string;
  richContentTitleEs?: string;
  richContentEn?: string;
  richContentEs?: string;
  /** Replaces the generated FAQ when present. */
  customFaqEn?: PageFaqItem[];
  customFaqEs?: PageFaqItem[];
}
