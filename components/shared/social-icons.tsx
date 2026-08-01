import type { SVGProps } from "react";

export function FacebookGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.9h2.65l.4-3.08H13.5V8.06c0-.89.25-1.5 1.52-1.5h1.63V3.8A22 22 0 0 0 14.3 3.7c-2.15 0-3.63 1.31-3.63 3.72v2.6H8v3.08h2.67V21z" />
    </svg>
  );
}

export function InstagramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4 3.5h4.1l4.05 5.53 4.66-5.53h1.9l-5.66 6.7 6.3 8.8h-4.1l-4.4-6.05-5.06 6.05H3.9l6.05-7.22z" />
    </svg>
  );
}

export function LinkedInGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.5H3.9V20h3.04zM5.42 3.4a1.77 1.77 0 1 0 0 3.53 1.77 1.77 0 0 0 0-3.53M20.1 20h-3.03v-5.9c0-1.41-.03-3.22-1.96-3.22-1.97 0-2.27 1.54-2.27 3.12V20H9.8V8.5h2.91v1.57h.04c.4-.77 1.4-1.58 2.88-1.58 3.08 0 3.65 2.03 3.65 4.67z" />
    </svg>
  );
}
