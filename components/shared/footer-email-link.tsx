"use client";

import { useEffect, useState } from "react";

/**
 * Renders plain text on the server and only attaches the mailto: href after
 * mount. The server-rendered HTML never contains a "mailto:" string, so
 * Cloudflare's Email Address Obfuscation has nothing to rewrite into a
 * /cdn-cgi/l/email-protection link — the exact pattern that was showing up
 * as a 404 with hundreds of inlinks in Ahrefs (present in the footer on
 * nearly every page).
 */
export function FooterEmailLink({ email, className }: { email: string; className?: string }) {
  const [href, setHref] = useState<string | undefined>(undefined);

  useEffect(() => {
    setHref(`mailto:${email}`);
  }, [email]);

  return (
    <a href={href} className={className}>
      {email}
    </a>
  );
}
