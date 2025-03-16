import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jaimin.pro",
      lastModified: new Date(),
    },
    {
      url: "https://jaimin.pro/projects",
      lastModified: new Date(),
    },
  ];
}
