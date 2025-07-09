import { MetadataRoute } from "next";
import { siteConfig } from "@/content/config";
import { getAllPosts, getCategories, getTags } from "@/lib/mdx";
import { slugify } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const categories = await getCategories();
  const tags = await getTags();
  const siteUrl = siteConfig.url;

  const postUrls = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categoryUrls = Object.keys(categories).map((category) => ({
    url: `${siteUrl}/category/${slugify(category)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const tagUrls = tags.map((tag) => ({
    url: `${siteUrl}/tag/${slugify(tag)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const staticUrls = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  return [...staticUrls, ...postUrls, ...categoryUrls, ...tagUrls];
}
