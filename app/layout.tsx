import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NV Bake | Premium Biscuits",
  description:
    "NV Bake — Premium butter biscuits and cookies, baked with love. Discover our delicious collection and order directly on WhatsApp.",
  
  // 🟢 Tells Next.js how to build the absolute URLs for your share images
  metadataBase: new URL("https://vercel.app"),
  
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/Logo.png",
  },
  openGraph: {
    title: "NV Bake | Premium Biscuits",
    description:
      "Premium biscuits & cookies, baked with love. Turns into your favorite in the very first bite. We bet!",
    url: "https://vercel.app",
    siteName: "NV Bake",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "NV Bake - Premium Biscuits",
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
