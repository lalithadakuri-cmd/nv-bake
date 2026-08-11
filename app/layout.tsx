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
  icons: {
    icon: "/images/Logo.png",
  },

  openGraph: {
    title: "NV Bake | Premium Biscuits",
    description:
      "Premium biscuits & cookies, baked with love. Turns into your favorite in the very first bite. We bet!",
    images: [
      {
        url: "/images/Logo.png",
        width: 1200,
        height: 1200,
        alt: "NV Bake - Premium Biscuits & Cookies",
      },
    ],
  },
  };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
