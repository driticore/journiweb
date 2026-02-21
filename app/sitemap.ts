// app/sitemap.ts
import { MetadataRoute } from "next";

const BASE_URL = "https://www.journiweb.co.za";

const anchors = [
  { path: "", priority: 1.0, changefreq: "daily" }, // homepage
  { path: "#services", priority: 0.9, changefreq: "monthly" },
  { path: "#how-it-works", priority: 0.9, changefreq: "monthly" },
  { path: "#pricing", priority: 0.9, changefreq: "monthly" },
  { path: "#contact", priority: 0.8, changefreq: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return anchors.map((anchor) => ({
    url: `${BASE_URL}/${anchor.path}`,
    lastModified: new Date().toISOString(),
    changefreq: anchor.changefreq,
    priority: anchor.priority,
  }));
}
