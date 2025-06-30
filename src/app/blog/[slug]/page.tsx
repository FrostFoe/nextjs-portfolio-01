import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Header from '@/components/blog/Header';
import Sidebar from '@/components/blog/Sidebar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { MotionDiv } from '@/components/blog/Motion';
import { AnimatedIconWrapper } from '@/components/ui/animated-icon';
import Link from 'next/link';
import { siteConfig } from '@/content/config';
import { format } from 'date-fns';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import { useMDXComponents } from '../../../../mdx-components';
import { slugify } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import type { Metadata } from 'next';

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

const CommentForm = dynamic(() => import('@/components/blog/CommentForm'), {
  loading: () => <CommentFormLoader />,
});

const CommentsSection = dynamic(() => import('@/components/blog/CommentsSection'), {
  loading: () => <CommentsSectionLoader />,
});

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {};
  }

  const { frontmatter } = post;
  const postUrl = `${siteConfig.url}/blog/${params.slug}`;
  const imageUrl = frontmatter.imageUrl.startsWith('http') ? frontmatter.imageUrl : `${siteConfig.url}${frontmatter.imageUrl}`;

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
      type: 'article',
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
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const components = useMDXComponents({});

  if (!post) {
    notFound();
  }
  
  const { frontmatter, content, slug } = post;
  const { author, blog: blogConfig } = siteConfig;

  // Mock comments for now
  const comments = [
    {
      id: 1,
      author: 'Nina Patal',
      avatarUrl: 'https://placehold.co/40x40.png',
      date: 'May 30, 2025',
      text: 'This article made me rethink how I run user interviews. Thank you!',
      reply: {
        id: 2,
        author: author.name,
        isAuthor: true,
        avatarUrl: author.avatar,
        date: 'May 31, 2025',
        text: 'Glad to hear that, Nina! Listening deeply to users can transform your designs.',
      },
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontmatter.title,
    datePublished: new Date(frontmatter.date).toISOString(),
    dateModified: new Date(frontmatter.date).toISOString(),
    description: frontmatter.description,
    image: frontmatter.imageUrl.startsWith('http') ? frontmatter.imageUrl : `${siteConfig.url}${frontmatter.imageUrl}`,
    url: `${siteConfig.url}/blog/${slug}`,
    author: {
      '@type': 'Person',
      name: frontmatter.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.author.name.split(' ')[0],
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`, // You should create a logo.png
      },
    },
  };

  return (
    <div className="bg-background text-foreground">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content */}
          <MotionDiv 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <article>
              <header>
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                  {frontmatter.title}
                </h1>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">calendar_month</span>
                    <span>{format(new Date(frontmatter.date), 'MMM dd, yyyy')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">person</span>
                    <span>{frontmatter.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">folder</span>
                    <Link href={`/category/${slugify(frontmatter.category)}`} className="hover:text-primary transition-colors">
                      {frontmatter.category}
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">schedule</span>
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
                                [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                                [rehypePrettyCode, { theme: 'one-dark-pro' }]
                            ],
                        },
                    }}
                />
              </div>

              <Separator className="my-8" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h3 className="text-lg font-bold">{blogConfig.sharePostText}</h3>
                <div className="flex items-center gap-1">
                  {blogConfig.shareLinks.map(link => (
                    <Button key={link.name} variant="ghost" size="sm" asChild>
                      <Link href={link.url} className="flex items-center gap-2">
                        <AnimatedIconWrapper><span className="material-symbols-outlined !w-4 !h-4">{link.icon}</span></AnimatedIconWrapper> {link.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>

              <Separator className="my-8" />
              
              <CommentsSection comments={comments} />

              <CommentForm />
            </article>
          </MotionDiv>

          {/* Sidebar */}
          <MotionDiv 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sidebar />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
