export const contactInfo = {
  whatsapp: "923148932631",
  email: "spainprivatetransfer@gmail.com",
};

export type SocialIconKey = "facebook" | "instagram" | "twitter" | "linkedin";

/**
 * Real, verified social profile URLs only (e.g. https://www.facebook.com/<page>).
 * Left empty until the business supplies its actual profiles: generic
 * platform homepages were removed because they tell search engines and AI
 * systems the profiles don't exist. Used by the footer and the
 * Organization structured data (sameAs); both hide themselves when empty.
 */
export const socialLinks: { label: string; href: string; icon: SocialIconKey }[] = [];
