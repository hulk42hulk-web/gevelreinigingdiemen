import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companyData } from "@/lib/siteData";
import { getLocalBusinessSchema, getWebSiteSchema } from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://gevelreinigingdiemen.com"),
  title: {
    default: "Gevelreiniging Diemen | Professionele Gevelreiniging",
    template: "%s | Gevelreiniging Diemen",
  },
  description:
    "Professionele gevelreiniging in Diemen en omgeving. Gevel reinigen, stoomreiniging, graffiti verwijderen, algen- en mosverwijdering en gevel impregneren. Vraag vrijblijvend een offerte aan.",
  keywords: [
    "gevelreiniging Diemen",
    "gevel reinigen Diemen",
    "gevelreiniging Amsterdam",
    "gevelonderhoud Diemen",
    "graffiti verwijderen Diemen",
    "gevel impregneren Diemen",
    "stoomreiniging gevel Diemen",
    "algen verwijderen gevel Diemen",
    "mos verwijderen gevel Diemen",
    "zandstralen gevel Diemen",
    "nevelstralen Diemen",
    "voegwerk reinigen Diemen"
  ],
  authors: [{ name: companyData.name }],
  creator: companyData.name,
  publisher: companyData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://gevelreinigingdiemen.com",
  },
  openGraph: {
    title: "Gevelreiniging Diemen | Professionele Gevelreiniging",
    description:
      "Professionele gevelreiniging in Diemen en omgeving. Gevel reinigen, stoomreiniging, graffiti verwijderen, algen- en mosverwijdering en gevel impregneren. Vraag vrijblijvend een offerte aan.",
    url: "https://gevelreinigingdiemen.com",
    siteName: companyData.name,
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/images/hero-facade.jpg",
        width: 1200,
        height: 630,
        alt: "Gevelreiniging Diemen - Vakkundig gevelonderhoud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gevelreiniging Diemen | Professionele Gevelreiniging",
    description:
      "Vakkundige gevelreiniging en gevelonderhoud in Diemen en regio Amsterdam.",
    images: ["/images/hero-facade.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const localBusinessSchema = getLocalBusinessSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="nl" className={`${manrope.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#F4F8FB] text-[#102A43] antialiased overflow-x-hidden selection:bg-blue-100 selection:text-[#1677FF]">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
