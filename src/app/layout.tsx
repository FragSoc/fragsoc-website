import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://fragsoc.co.uk'),
  title: {
    default: "FragSoc - University of York's Gaming and Esports Society",
    template: "%s | FragSoc - University of York"
  },
  description: "FragSoc is the University of York's Video Gaming and LAN society. We run LAN parties, participate in esports tournaments, and host weekly social events for gamers of all skill levels.",
  keywords: [
    "FragSoc", 
    "University of York", 
    "Gaming Society", 
    "Esports", 
    "LAN Party", 
    "Gaming", 
    "Video Games", 
    "Student Society", 
    "York Gaming", 
    "NUEL", 
    "University Gaming",
    "Gaming Events",
    "Twitch Streaming"
  ],
  authors: [{ name: "FragSoc Committee" }],
  creator: "FragSoc - University of York",
  publisher: "FragSoc",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    title: "FragSoc - University of York's Gaming and Esports Society",
    description: "FragSoc is the University of York's Video Gaming and LAN society. Join us for LAN parties, esports tournaments, and weekly social gaming events.",
    siteName: 'FragSoc',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'FragSoc - University of York Gaming Society',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FragSoc - University of York's Gaming and Esports Society",
    description: "FragSoc is the University of York's Video Gaming and LAN society. Join us for LAN parties, esports tournaments, and weekly social gaming events.",
    images: ['/logo.png'],
    creator: '@FragSocYork',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
