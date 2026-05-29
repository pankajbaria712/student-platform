import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gtustudenthub.vercel.app",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: "https://gtustudenthub.vercel.app/semester/6",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: "https://gtustudenthub.vercel.app/pyq/microprocessor-and-interfacing",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: "https://gtustudenthub.vercel.app/pyq/iot-and-applications",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: "https://gtustudenthub.vercel.app/pyq/advanced-java-programming",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: "https://gtustudenthub.vercel.app/pyq/data-visualization",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: "https://gtustudenthub.vercel.app/pyq/integrated-personality-development-course",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];
}