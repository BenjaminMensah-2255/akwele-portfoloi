import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { RouteTransition } from "@/components/motion/RouteTransition";
import { Navigation } from "@/components/layout/Navigation";
import { profile } from "@/data/profile";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.canonicalUrl),
  title: `${profile.name} - ${profile.role}`,
  description:
    "Digital marketer specializing in strategy, social media, paid advertising, content, analytics, and brand growth.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} - ${profile.role}`,
    description: profile.positioning,
    url: profile.canonicalUrl,
    siteName: profile.name,
    images: [
      {
        url: "/images/portrait.png",
        width: 1024,
        height: 1536,
        alt: `${profile.name} portrait`,
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.role}`,
    description: profile.positioning,
    images: ["/images/portrait.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "Ghana",
    },
    url: profile.canonicalUrl,
    sameAs: [profile.linkedin, profile.instagram],
    knowsAbout: profile.expertise.map((item) => item.title),
  };

  return (
    <html lang="en" className={`${geist.variable} scroll-smooth antialiased`}>
      <body>
        <Navigation />
        <RouteTransition>{children}</RouteTransition>
        <CustomCursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
