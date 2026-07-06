import { MetadataRoute } from "next";

import { articles } from "@/lib/articles-config";
import { locationEntries, services } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.djomermizrahi.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locationEntries.map(
    (location) => ({
      url: `${baseUrl}/locations/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const serviceLocationRoutes: MetadataRoute.Sitemap = services.flatMap(
    (service) =>
      locationEntries.map((location) => ({
        url: `${baseUrl}/services/${service.slug}/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      })),
  );

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...serviceLocationRoutes,
    ...articleRoutes,
  ];
}
