import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://gtustudenthub.vercel.app");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/semester/5`,
      lastModified,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/semester/6`,
      lastModified,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/semester/7`,
      lastModified,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/subject/software-engineering`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/subject/compiler-design`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/subject/artificial-intelligence`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pyq/software-engineering`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pyq/compiler-design`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pyq/theory-of-computation`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/notes/software-engineering`,
      lastModified,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/notes/web-programming`,
      lastModified,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/login`,
      lastModified,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/register`,
      lastModified,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/refund-policy`,
      lastModified,
      priority: 0.5,
    },
  ];
}