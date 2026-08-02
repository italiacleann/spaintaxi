import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admin | Spain Private Transfers",
  robots: { index: false, follow: false },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-muted/30 text-foreground">{children}</body>
    </html>
  );
}
