import { companyData } from "@/lib/siteData";

export default function sitemap() {
  const baseUrl = "https://gevelreinigingdiemen.com";
  const now = new Date().toISOString();

  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/diensten`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...companyData.services.map((service) => ({
      url: `${baseUrl}/diensten/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })),
    {
      url: `${baseUrl}/over-ons`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return routes;
}
