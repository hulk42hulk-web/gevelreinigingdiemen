export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://gevelreinigingdiemen.com/sitemap.xml",
  };
}
