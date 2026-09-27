import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { getPublishedArticles } from "@/content/writing";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/work", "/projects", "/writing", "/uses"].map((path) => ({
    url: `${site.url}${path}`,
  }));

  const projectPages = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
  }));

  const articlePages = getPublishedArticles().map((article) => ({
    url: `${site.url}/writing/${article.slug}`,
    lastModified: `${article.published}-01`,
  }));

  return [...pages, ...projectPages, ...articlePages];
}
