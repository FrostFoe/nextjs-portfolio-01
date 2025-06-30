'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  User,
  Folder,
  Linkedin,
  Twitter,
  Facebook,
} from 'lucide-react';

import Header from '@/components/blog/Header';
import Sidebar from '@/components/blog/Sidebar';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MotionDiv } from '@/components/blog/Motion';

// Mock data for a single post
const post = {
  title: 'Human-Centered Design Principles',
  author: 'Liam Bennett',
  date: 'May 29, 2025',
  category: 'UX Strategy',
  imageUrl: 'https://placehold.co/800x450.png',
  imageHint: 'woman user experience design',
  comments: [
    {
      id: 1,
      author: 'Nina Patal',
      avatarUrl: 'https://placehold.co/40x40.png',
      date: 'May 30, 2025',
      text: 'This article made me rethink how I run user interviews. Thank you!',
      reply: {
        id: 2,
        author: 'Liam Bennett',
        isAuthor: true,
        avatarUrl: 'https://placehold.co/40x40.png',
        date: 'May 31, 2025',
        text: 'Glad to hear that, Nina! Listening deeply to users can transform your designs.',
      },
    },
  ],
};

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

const CommentsSection = ({ comments }: { comments: typeof post.comments }) => (
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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch post data based on the slug
  // const post = await getPostBySlug(params.slug);

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
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4" />
                    <span>{post.category}</span>
                  </div>
                </div>
              </header>

              <MotionDiv 
                className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  data-ai-hint={post.imageHint}
                  priority
                />
              </MotionDiv>

              <div className="space-y-6 text-base lg:text-lg text-muted-foreground">
                <p>
                  At the heart of every successful product lies a simple truth: users
                  matter. Human-centered design (HCD) puts users at the core of the
                  design process, ensuring that interfaces are intuitive, accessible,
                  and tailored to real-world needs.
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold !mt-10 !mb-4 text-foreground">
                  What is Human-Centered Design?
                </h2>
                <p>
                  HCD is an iterative framework that starts with understanding users’
                  pain points and ends with solutions that solve real problems. It’s
                  not a single step—it’s a mindset.
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold !mt-10 !mb-4 text-foreground">
                  The Three Pillars of HCD
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Empathy</strong>: Step into your users' shoes. Understand
                    their environment, tasks, and frustrations.
                  </li>
                  <li>
                    <strong>Ideation</strong>: Brainstorm freely, test often, and validate
                    ideas quickly.
                  </li>
                  <li>
                    <strong>Iteration</strong>: Feedback is gold. Revise your designs based
                    on real input.
                  </li>
                </ul>
                <p>
                  When applied effectively, HCD doesn’t just make interfaces
                  better—it makes them meaningful.
                </p>
                <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-foreground/80">
                  “Design is not just what it looks like. Design is how it
                  works—with empathy.” — Liam Bennett
                </blockquote>
                <h2 className="text-2xl lg:text-3xl font-bold !mt-10 !mb-4 text-foreground">
                  Tools & Techniques
                </h2>
                <p>
                  Wireframes, user journey maps, empathy maps, and personas are some
                  of the most common tools. But what matters most is the connection
                  between designer and user.
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold !mt-10 !mb-4 text-foreground">
                  HCD in Agile Environments
                </h2>
                <p>
                  In agile workflows, human-centered design aligns beautifully with
                  sprints. Rapid feedback loops and continuous learning fit perfectly
                  into design cycles.
                </p>
                <p>
                  Want to bring empathy into your next project? Reach out and let’s
                  build something users will love.
                </p>
                <p className="!mt-2">— Liam Bennett, UI/UX Strategist</p>
              </div>

              <Separator className="my-8" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h3 className="text-lg font-bold">Share this post</h3>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="#">
                      <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="#">
                      <Twitter className="h-4 w-4 mr-2" /> Twitter
                    </Link>
                  </Button>
                   <Button variant="ghost" size="sm" asChild>
                    <Link href="#">
                      <Facebook className="h-4 w-4 mr-2" /> Facebook
                    </Link>
                  </Button>
                </div>
              </div>

              <Separator className="my-8" />
              
              <CommentsSection comments={post.comments} />

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
