// app/sitemap.ts
import { MetadataRoute } from "next";

// Replace with your website URL
const BASE_URL = "https://www.journiweb.co.za";

// Static pages of your site
const staticPages = [
  { path: "", priority: 1.0, changefreq: "daily" },
  { path: "about", priority: 0.8, changefreq: "monthly" },
  { path: "services", priority: 0.9, changefreq: "monthly" },
  { path: "pricing", priority: 0.9, changefreq: "monthly" },
  { path: "contact", priority: 0.8, changefreq: "monthly" },
  { path: "blog", priority: 0.7, changefreq: "weekly" },
];

// Example dynamic pages (replace with your blog CMS or DB fetch)
const dynamicPages = [
  { slug: "how-to-generate-leads", lastModified: "2026-02-18" },
  { slug: "smmes-business-support", lastModified: "2026-02-19" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.map((page) => ({
    url: `${BASE_URL}/${page.path}`,
    lastModified: new Date().toISOString(),
    changefreq: page.changefreq,
    priority: page.priority,
  }));

  const dynamicEntries = dynamicPages.map((page) => ({
    url: `${BASE_URL}/blog/${page.slug}`,
    lastModified: page.lastModified,
    changefreq: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...dynamicEntries];
}
