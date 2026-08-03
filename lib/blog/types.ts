export interface BlogFaqItem {
  question: string;
  answer: string;
}

export interface BlogGalleryImage {
  url: string;
  altEn?: string;
  altEs?: string;
  captionEn?: string;
  captionEs?: string;
}

export type BlogPostStatus = "draft" | "published" | "archived";

/** One row from blog_posts, camelCased. Both locales live on the same row. */
export interface BlogPost {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: BlogPostStatus;
  publishedAt: string | null;
  isFeatured: boolean;

  category: string;
  categoryLabelEn: string;
  categoryLabelEs: string | null;
  tags: string[];

  slugEn: string | null;
  slugEs: string | null;
  titleEn: string | null;
  titleEs: string | null;
  seoTitleEn: string | null;
  seoTitleEs: string | null;
  metaDescriptionEn: string | null;
  metaDescriptionEs: string | null;
  focusKeywordEn: string | null;
  focusKeywordEs: string | null;
  excerptEn: string | null;
  excerptEs: string | null;
  contentEn: string | null;
  contentEs: string | null;
  faqEn: BlogFaqItem[];
  faqEs: BlogFaqItem[];
  readingTimeMinutesEn: number | null;
  readingTimeMinutesEs: number | null;

  featuredImageUrl: string | null;
  featuredImageAltEn: string | null;
  featuredImageAltEs: string | null;
  galleryImages: BlogGalleryImage[];

  authorName: string;
  authorAvatarUrl: string | null;
  authorTitleEn: string | null;
  authorTitleEs: string | null;
  authorBioEn: string | null;
  authorBioEs: string | null;

  canonicalUrlOverride: string | null;
  ogImageUrl: string | null;
}

/** Locale-resolved view of a BlogPost used throughout the rendering layer. */
export interface LocalizedBlogPost {
  id: string;
  publishedAt: string | null;
  isFeatured: boolean;
  category: string;
  categoryLabel: string;
  tags: string[];
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  excerpt: string;
  contentHtml: string;
  faq: BlogFaqItem[];
  readingTimeMinutes: number;
  featuredImageUrl: string | null;
  featuredImageAlt: string;
  galleryImages: BlogGalleryImage[];
  authorName: string;
  authorAvatarUrl: string | null;
  authorTitle: string | null;
  authorBio: string | null;
  canonicalUrlOverride: string | null;
  ogImageUrl: string | null;
}
