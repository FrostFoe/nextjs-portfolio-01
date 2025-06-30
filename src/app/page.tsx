import Header from '@/components/blog/Header';
import PostCard from '@/components/blog/PostCard';
import Sidebar from '@/components/blog/Sidebar';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rss } from 'lucide-react';
import { MotionDiv } from '@/components/blog/Motion';

const posts = [
  {
    slug: 'human-centered-design-principles',
    title: 'Human-Centered Design Principles',
    date: 'May 29, 2025',
    description:
      'A deep dive into the core principles of HCD, exploring how empathy, ideation, and iteration lead to products people love.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'user experience design',
    category: 'UX Strategy',
  },
  {
    slug: 'ai-driven-ux',
    title: 'The Unseen Hand: How AI is Shaping the Future of UX',
    date: 'Jun 10, 2025',
    description:
      'AI is no longer just a buzzword; it’s the invisible force optimizing your digital experiences. Discover how it’s revolutionizing everything from personalization to accessibility.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'abstract AI brain',
    category: 'UX Trends',
  },
  {
    slug: 'design-storytelling',
    title: 'Storytelling in Design: Crafting Narratives That Convert',
    date: 'Jun 08, 2025',
    description:
      'Great design tells a story. Learn the art of visual narrative and how to weave compelling tales that guide users and drive engagement.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'storybook illustration',
    category: 'Design Theory',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <Header />
      <main className="flex-1">
        <section className="hero-bg-pattern border-b border-border/50">
          <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-32">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl">
                Code, Pixels, and a Dash of Magic.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Welcome to my digital playground. I'm Andrew, a designer and
                developer obsessed with building delightful, human-centered
                experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#">
                    My Work <ArrowRight className="ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline">
                  <Rss className="mr-2" /> Subscribe
                </Button>
              </div>
            </MotionDiv>
            <MotionDiv
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="group relative">
                <div className="absolute -inset-2 rounded-xl bg-primary/20 opacity-0 blur-xl transition duration-1000 group-hover:opacity-50 group-hover:duration-200" />
                <img
                  src="https://placehold.co/600x400.png"
                  alt="Hero Image"
                  data-ai-hint="abstract design illustration"
                  className="relative rounded-2xl"
                />
              </div>
            </MotionDiv>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 lg:py-24">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Latest Articles
            </h2>
            <p className="mb-12 text-muted-foreground">
              A collection of my latest thoughts on design, tech, and everything
              in between.
            </p>
          </MotionDiv>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-12">
                {posts.map((post, i) => (
                  <MotionDiv
                    key={post.slug}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <PostCard {...post} />
                  </MotionDiv>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
