import PostCard from "@/components/blog/PostCard";
import { MotionDiv } from "@/components/blog/Motion";
import { getPostsByTag, getTags } from "@/lib/mdx";
import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/content/config";
import { Suspense } from "react";
import Sidebar from "@/components/blog/Sidebar";
import { SidebarLoader } from "@/components/blog/SidebarLoader";

interface TagPageProps {
  params: {
    tag: string;
  };
}

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20, rotateX: -20, transformOrigin: "bottom" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export async function generateStaticParams() {
  const tags = await getTags();
  return tags.map((tag) => ({
    tag: slugify(tag),
  }));
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  const allTags = await getTags();
  const originalTag = allTags.find((t) => slugify(t) === tag);

  if (!originalTag) {
    return {};
  }

  const title = `Posts tagged: &quot;${originalTag}&quot;`;
  const description = `Explore all articles tagged with ${originalTag} on ${siteConfig.author.name}&apos;s blog.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/tag/${tag}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/tag/${tag}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const posts = await getPostsByTag(tag);
  const allTags = await getTags();
  const originalTag = allTags.find((t) => slugify(t) === tag);

  if (!posts.length || !originalTag) {
    notFound();
  }

  return (
    <div className="bg-background font-sans text-foreground">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight">
            Posts tagged: &quot;{originalTag}&quot;
          </h1>
          <p className="mb-12 text-muted-foreground">
            {posts.length} article{posts.length === 1 ? "" : "s"} found for this
            tag.
          </p>
        </MotionDiv>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MotionDiv
              className="grid grid-cols-1 gap-12"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              style={{ perspective: "1000px" }}
            >
              {posts.map((post) => (
                <MotionDiv key={post.slug} variants={itemVariant}>
                  <PostCard post={post} />
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
          <div className="lg:col-span-1">
            <Suspense fallback={<SidebarLoader />}>
              <Sidebar />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
