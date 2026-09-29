import { companyData } from "./siteData";

export const siteUrl = "https://gevelreinigingdiemen.com";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: companyData.name,
    legalName: companyData.legalName,
    url: siteUrl,
    logo: `${siteUrl}/images/hero-facade.jpg`,
    image: `${siteUrl}/images/hero-facade.jpg`,
    description: "Professionele gevelreiniging en gevelonderhoud in Diemen en omgeving. Specialist in stoomreiniging, zand- en nevelstralen, voegwerk, graffiti verwijderen en gevel impregneren.",
    telephone: companyData.contact.phone,
    email: companyData.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.address.street,
      addressLocality: companyData.address.city,
      postalCode: companyData.address.postalCode,
      addressRegion: companyData.address.region,
      addressCountry: "NL"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.3392,
      longitude: 4.9627
    },
    areaServed: companyData.coverageArea.map((area) => ({
      "@type": "AdministrativeArea",
      name: area
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: companyData.rating.google.reviewsCount.toString(),
      reviewCount: companyData.rating.google.reviewsCount.toString()
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gevelonderhoud & Reinigingsdiensten",
      itemListElement: companyData.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
          url: `${siteUrl}/diensten/${service.slug}`
        },
        position: index + 1
      }))
    }
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: companyData.name,
    inLanguage: "nl-NL",
    description: "Vakkundige gevelreiniging en gevelonderhoud voor woningen en bedrijfspanden in Diemen en omstreken.",
    publisher: {
      "@id": `${siteUrl}/#localbusiness`
    }
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`
    }))
  };
}

export function getServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/diensten/${service.slug}#service`,
    name: service.title,
    serviceType: "Gevelreiniging en gevelonderhoud",
    provider: {
      "@id": `${siteUrl}/#localbusiness`
    },
    areaServed: {
      "@type": "City",
      name: "Diemen"
    },
    description: service.fullDescription,
    url: `${siteUrl}/diensten/${service.slug}`
  };
}

export function getFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };
}

export function constructMetadata({
  title,
  description,
  path = "",
  image = "/images/hero-facade.jpg"
}) {
  const url = `${siteUrl}${path}`;
  const fullTitle = title.includes("Gevelreiniging Diemen")
    ? title
    : `${title} | Gevelreiniging Diemen`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: companyData.name,
      locale: "nl_NL",
      type: "website",
      images: [
        {
          url: image.startsWith("http") ? image : `${siteUrl}${image}`,
          width: 1200,
          height: 630,
          alt: `${companyData.name} - Gevelonderhoud Diemen`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.startsWith("http") ? image : `${siteUrl}${image}`]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    }
  };
}
