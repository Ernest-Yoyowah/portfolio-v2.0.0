import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ui/ChatWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://ernestyoyowah.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Ernest Yoyowah — Software Engineer · Payments & Creative Technology",
    template: "%s · Ernest Yoyowah",
  },
  description:
    "Software Engineer at MTN Ghana building payment systems, mobile platforms, and backend infrastructure. Also building native macOS and cross-platform mobile music tools under Ernest Keyz Studios (Swift, CoreMIDI, AudioUnit v3).",
  keywords: [
    "Software Engineer Ghana",
    "Payment Systems Engineer",
    "Mobile Money Engineer",
    "MTN Ghana developer",
    "Ghana tech",
    "fintech Ghana",
    "PCI DSS engineer",
    "Mastercard checkout integration",
    "React TypeScript Node.js",
    "MIDI engineering",
    "Swift CoreMIDI developer",
    "Ernest Yoyowah",
    "Accra software engineer",
    "West Africa fintech",
  ],
  authors: [{ name: "Ernest Yoyowah", url: siteUrl }],
  creator: "Ernest Yoyowah",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ernest Yoyowah",
    title:
      "Ernest Yoyowah — Software Engineer · Payments & Creative Technology",
    description:
      "Software Engineer at MTN Ghana building secure payment systems and creative technology tools. Mobile Money, PCI DSS, Mastercard, MIDI engineering.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ernest Yoyowah — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ernest Yoyowah — Software Engineer · Payments & Creative Technology",
    description:
      "Software Engineer at MTN Ghana building secure payment systems and creative technology tools.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ernest Yoyowah",
  url: siteUrl,
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "MTN Ghana",
  },
  knowsAbout: [
    "Payment Systems",
    "Mobile Money",
    "PCI DSS",
    "React",
    "TypeScript",
    "Node.js",
    "Golang",
    "Swift",
    "MIDI Engineering",
    "Music Technology",
  ],
  sameAs: [
    "https://github.com/Ernest-Yoyowah",
    "https://linkedin.com/in/ernestyoyowah",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0a0a0a] text-foreground antialiased">
        <Navbar />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
