import { MetadataRoute } from "next";

const BASE_URL = "https://gtustudenthub.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    // Semester Pages
    {
      url: `${BASE_URL}/semester/5`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/semester/6`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/semester/7`,
      lastModified: new Date(),
      priority: 0.9,
    },

    // Subject Pages
    {
      url: `${BASE_URL}/subject/software-engineering`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/subject/compiler-design`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/subject/artificial-intelligence`,
      lastModified: new Date(),
      priority: 0.8,
    },

    // PYQ Pages
    {
      url: `${BASE_URL}/pyq/software-engineering`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pyq/compiler-design`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pyq/theory-of-computation`,
      lastModified: new Date(),
      priority: 0.8,
    },

    // Viva Pages
    {
      url: `${BASE_URL}/semester/5/software-engineering/viva`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/semester/5/computer-networks/viva`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/semester/6/web-programming/viva`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/semester/7/compiler-design/viva`,
      lastModified: new Date(),
      priority: 0.8,
    },

    // Notes
    {
      url: `${BASE_URL}/notes/software-engineering`,
      lastModified: new Date(),
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/notes/web-programming`,
      lastModified: new Date(),
      priority: 0.75,
    },

    // Static Pages
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/refund-policy`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}