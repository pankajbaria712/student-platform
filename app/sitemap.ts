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
      url: "https://gtustudenthub.vercel.app/semester/5",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: "https://gtustudenthub.vercel.app/pyq/software-engineering",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://gtustudenthub.vercel.app/pyq/python-for-data-science",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://gtustudenthub.vercel.app/pyq/professional-ethics",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://gtustudenthub.vercel.app/pyq/ipdc-1",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://gtustudenthub.vercel.app/pyq/computer-networks",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://gtustudenthub.vercel.app/pyq/analysis-and-design-of-algorithms",
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