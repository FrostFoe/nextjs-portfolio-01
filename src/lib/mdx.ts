import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { slugify } from "./utils";
import { cache } from "react";
import type { Post, PostFrontmatter } from "./types";

const postsDirectory = path.join(process.cwd(), "src", "content", "blog");

function getMdxFiles() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => path.extname(file) === ".mdx");
}

export const getPostBySlug = cache(
  async (slug: string): Promise<Post | null> => {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const stats = readingTime(content);

    return {
      slug,
      frontmatter: {
        ...(data as Omit<PostFrontmatter, "readingTime">),
        readingTime: stats.text,
      },
      content,
    };
  },
);

const _getAllPosts = async (): Promise<Post[]> => {
  const mdxFiles = getMdxFiles();

  const allPostsData = await Promise.all(
    mdxFiles.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const post = await getPostBySlug(slug);
      return post;
    }),
  );

  const validPosts = allPostsData.filter((post): post is Post => post !== null);

  return validPosts.sort(
    (postA, postB) =>
      new Date(postB.frontmatter.date).getTime() -
      new Date(postA.frontmatter.date).getTime(),
  );
};
export const getAllPosts = cache(_getAllPosts);

export async function getCategories(): Promise<Record<string, number>> {
  const posts = await getAllPosts();
  const categories: Record<string, number> = {};
  posts.forEach((post) => {
    const category = post.frontmatter.category;
    categories[category] = (categories[category] || 0) + 1;
  });
  return categories;
}

export async function getTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => {
    post.frontmatter.tags?.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet);
}

export async function getPostsByCategory(
  categorySlug: string,
): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(
    (post) => slugify(post.frontmatter.category) === categorySlug,
  );
}

export async function getPostsByTag(tagSlug: string): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) =>
    post.frontmatter.tags.some((tag) => slugify(tag) === tagSlug),
  );
}
