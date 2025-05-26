import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu/menu";

export const metadata: Metadata = {
  title: {
    default: "Krunal's Academy | Professional Beauty Courses in Pune",
    template: "%s | Krunal's Beauty Academy"
  },
  description: "Certified training in Hair Cutting, Skin Care, Makeup Artistry, Nail Art, Barbering & Eyebrow Design. Hands-on courses with industry experts in Pune.",
  keywords: [
    "beauty courses in Pune",
    "hair cutting training",
    "professional makeup course",
    "skin care certification",
    "nail art classes",
    "barbering school Pune",
    "eyebrow shaping course",
    "best beauty academy",
    "Krunal's beauty institute",
    "cosmetology training center"
  ],
  icons: {
    icon: [
      { url: "/1000134308-removebg-preview.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }, // Fallback for older browsers
    ],
    apple: [
      { url: "/apple-touch-icon.png" } // 180x180px for iOS devices
    ]
  },
  openGraph: {
    title: "Krunal's Beauty Academy | Transform Your Passion into Profession",
    description: "Get industry-recognized certification in hair, skin, makeup and beauty therapies from Pune's leading training institute.",
    url: "https://krunalsacademy.com",
    siteName: "Krunal's Academy",
    images: [
      {
        url: "/og-image.jpg", // 1200x630px
        width: 1200,
        height: 630,
        alt: "Krunal's Academy - Students learning beauty techniques",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krunal's Academy | Beauty & Wellness Courses",
    description: "Professional training in hair, makeup, skin care and beauty therapies with placement assistance.",
    creator: "@krunalsacademy",
    images: ["/twitter-card.jpg"], // 1200x628px
  },
  alternates: {
    canonical: "https://krunalsacademy.com",
  },
  metadataBase: new URL("https://krunalsacademy.com"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your_google_verification_code_here",
    yandex: "your_yandex_verification_code_here",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Menu />
        {children}
      </body>
    </html>
  );
}