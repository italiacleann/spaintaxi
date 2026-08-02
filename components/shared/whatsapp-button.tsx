import { contactInfo } from "@/lib/data";
import { WhatsAppGlyph } from "@/components/shared/social-icons";

export function WhatsAppButton({ label }: { label: string }) {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed right-4 bottom-20 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6"
    >
      <WhatsAppGlyph className="size-7" />
    </a>
  );
}
