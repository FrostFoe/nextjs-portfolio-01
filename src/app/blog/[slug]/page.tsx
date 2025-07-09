import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/blog/Motion";
import Link from "next/link";
import { siteConfig } from "@/content/config";
import { format } from "date-fns";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { useMDXComponents } from "../../../../mdx-components";
import { slugify } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import type { Metadata } from "next";
import { type Comment } from "@/lib/types";
import {
  CalendarDays,
  User,
  Folder,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { Suspense } from "react";
import Sidebar from "@/components/blog/Sidebar";
import { SidebarLoader } from "@/components/blog/SidebarLoader";

const iconMap: { [key: string]: React.ElementType } = {
  Linkedin,
  Twitter,
  Facebook,
};

const CommentFormLoader = () => (
  <div className="mt-12">
    <Skeleton className="h-7 w-48 mb-6" />
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-12 w-36" />
    </div>
  </div>
);

const CommentsSectionLoader = () => (
  <div className="mt-12">
    <Skeleton className="h-7 w-40 mb-6" />
    <div className="space-y-8">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-start gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-20" />
            </div>
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CommentForm = dynamic(() => import("@/components/blog/CommentForm"), {
  loading: () => <CommentFormLoader />,
});

import CommentsSection from "@/components/blog/CommentsSection";

const MOCK_COMMENTS: Comment[] = [
  {
    id: "1",
    author: "Jane Doe",
    avatarUrl: "https://placehold.co/40x40.png",
    date: "2 days ago",
    text: "This was an amazing read! I learned so much about Framer Motion. The 3D effects are especially cool. Can't wait to try them out on my own projects.",
    reply: {
      id: "r1",
      author: "FrostFoe",
      avatarUrl:
        "https://raw.githubusercontent.com/FrostFoe/localhost/refs/heads/main/images/logo.png",
      date: "1 day ago",
      text: "Thanks, Jane! I'm so glad you found it helpful. Let me know if you have any questions when you start implementing them. Happy coding!",
    },
  },
  {
    id: "2",
    author: "John Smith",
    avatarUrl: "https://placehold.co/40x40.png",
    date: "4 days ago",
    text: "Incredible insights into modern web development. The combination of Next.js and Tailwind is powerful, and your explanations are crystal clear.",
  },
];

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {};
  }

  const { frontmatter } = post;
  const postUrl = `${siteConfig.url}/blog/${params.slug}`;
  const imageUrl = frontmatter.imageUrl.startsWith("http")
    ? frontmatter.imageUrl
    : `${siteConfig.url}${frontmatter.imageUrl}`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.tags,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: postUrl,
      type: "article",
      publishedTime: new Date(frontmatter.date).toISOString(),
      authors: [siteConfig.author.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  const components = useMDXComponents({});

  if (!post) {
    notFound();
  }

  const { frontmatter, content, slug } = post;
  const { blog: blogConfig } = siteConfig;
  const postUrl = `${siteConfig.url}/blog/${slug}`;

  const getShareUrl = (platform: string) => {
    const encodedUrl = encodeURIComponent(postUrl);
    const encodedTitle = encodeURIComponent(frontmatter.title);
    const encodedDescription = encodeURIComponent(frontmatter.description);

    switch (platform.toLowerCase()) {
      case "linkedin":
        return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      default:
        return "#";
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    datePublished: new Date(frontmatter.date).toISOString(),
    dateModified: new Date(frontmatter.date).toISOString(),
    description: frontmatter.description,
    image: frontmatter.imageUrl.startsWith("http")
      ? frontmatter.imageUrl
      : `${siteConfig.url}${frontmatter.imageUrl}`,
    url: postUrl,
    author: {
      "@type": "Person",
      name: frontmatter.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.author.name.split(" ")[0],
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <MotionDiv
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <article>
              <header>
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                  {frontmatter.title}
                </h1>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>
                      {format(new Date(frontmatter.date), "MMM dd, yyyy")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{frontmatter.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4" />
                    <Link
                      href={`/category/${slugify(frontmatter.category)}`}
                      className="hover:text-primary transition-colors"
                    >
                      {frontmatter.category}
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{frontmatter.readingTime}</span>
                  </div>
                </div>
              </header>

              <MotionDiv
                className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={frontmatter.imageUrl}
                  alt={frontmatter.title}
                  fill
                  className="object-cover"
                  data-ai-hint={frontmatter.imageHint}
                  priority
                />
              </MotionDiv>

              <div className="prose prose-invert max-w-none text-base lg:text-lg text-muted-foreground">
                <MDXRemote
                  source={content}
                  components={components}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [
                        rehypeSlug,
                        [rehypeAutolinkHeadings, { behavior: "wrap" }],
                        [rehypePrettyCode, { theme: "one-dark-pro" }],
                      ],
                    },
                  }}
                />
              </div>

              <Separator className="my-8" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h3 className="text-lg font-bold">
                  {blogConfig.sharePostText}
                </h3>
                <div className="flex items-center gap-1">
                  {blogConfig.shareLinks.map((link) => {
                    const Icon = iconMap[link.icon];
                    const shareUrl = getShareUrl(link.name);
                    return (
                      <MotionDiv
                        key={link.name}
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button variant="ghost" size="sm" asChild>
                          <Link
                            href={shareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            {Icon && <Icon className="h-4 w-4" />}
                            {link.name}
                          </Link>
                        </Button>
                      </MotionDiv>
                    );
                  })}
                </div>
              </div>

              {frontmatter.comments !== false && (
                <>
                  <Separator className="my-8" />
                  <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <CommentsSection comments={MOCK_COMMENTS} />
                  </MotionDiv>
                  <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <CommentForm />
                  </MotionDiv>
                </>
              )}
            </article>
          </MotionDiv>

          <MotionDiv
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Suspense fallback={<SidebarLoader />}>
              <Sidebar />
            </Suspense>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
