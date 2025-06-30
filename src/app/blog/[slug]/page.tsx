import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Header from '@/components/blog/Header';
import Sidebar from '@/components/blog/Sidebar';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {};
  }
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

const CommentForm = () => (
  <div className="mt-12">
    <h3 className="text-xl font-bold mb-6">Leave a Comment</h3>
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          placeholder="Your Name"
          className="bg-transparent border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary transition"
        />
        <Input
          type="email"
          placeholder="Your Email"
          className="bg-transparent border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary transition"
        />
      </div>
      <Textarea
        placeholder="Your Comment"
        className="bg-transparent border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary transition min-h-[120px]"
      />
      <Button type="submit">Post Comment</Button>
    </form>
  </div>
);

const CommentsSection = ({ comments }: { comments: any[] }) => (
    <div className="mt-12">
      <h3 className="text-xl font-bold mb-6">Comments ({comments.length})</h3>
      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id}>
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={comment.avatarUrl} alt={comment.author} data-ai-hint="woman portrait" />
                <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{comment.author}</span>
                  <span className="text-xs text-muted-foreground">{comment.date}</span>
                </div>
                <p className="text-muted-foreground mt-1">{comment.text}</p>
              </div>
            </div>
            {comment.reply && (
              <div className="ml-10 mt-6 flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={comment.reply.avatarUrl} alt={comment.reply.author} data-ai-hint="man portrait" />
                  <AvatarFallback>{comment.reply.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{comment.reply.author} <span className="text-xs font-normal text-muted-foreground">(Author)</span></span>
                    <span className="text-xs text-muted-foreground">{comment.reply.date}</span>
                  </div>
                  <p className="text-muted-foreground mt-1">{comment.reply.text}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const components = useMDXComponents({});

  if (!post) {
    notFound();
  }
  
  const { frontmatter, content } = post;
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

  return (
    <div className="bg-background text-foreground">
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
                    <span>{frontmatter.category}</span>
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
