import PostCard from "@/components/blog/PostCard";
import { MotionDiv } from "@/components/blog/Motion";
import { getAllPosts } from "@/lib/mdx";
import { Suspense } from "react";
import Sidebar from "@/components/blog/Sidebar";
import { SidebarLoader } from "@/components/blog/SidebarLoader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "A collection of articles on design, tech, and everything in between.",
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const postItemVariant = {
  hidden: { opacity: 0, y: 20, rotateX: -20, transformOrigin: "bottom" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

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
            From the Digital Frontier
          </h1>
          <p className="mb-12 text-muted-foreground">
            A collection of my thoughts on design, tech, and everything in
            between.
          </p>
        </MotionDiv>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MotionDiv
              className="grid grid-cols-1 gap-12"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              style={{ perspective: "1000px" }}
            >
              {posts.map((post) => (
                <MotionDiv key={post.slug} variants={postItemVariant}>
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
