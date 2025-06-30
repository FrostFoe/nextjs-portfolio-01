import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import PostCard from '@/components/blog/PostCard'; 
import Sidebar from '@/components/blog/Sidebar'; 
import Pagination from '@/components/blog/Pagination';

const posts = [
  {
    slug: 'human-centered-design',
    title: 'Human-Centered Design Principles',
    date: 'May 29, 2025',
    description: 'Understand the core values of human-centered design and how they influence modern UI/UX workflows and tools.',
    imageUrl: 'https://placehold.co/600x401.png',
    imageHint: 'design process chart',
  },
  {
    slug: 'microinteractions-feedback',
    title: 'Microinteractions and User Feedback',
    date: 'May 27, 2025',
    description: 'Microinteractions enhance user delight and clarity. Explore how small design choices create big user impact.',
    imageUrl: 'https://placehold.co/600x401.png',
    imageHint: 'abstract brain illustration',
  },
  {
    slug: 'evolution-of-ui-ux',
    title: 'The Evolution of UI/UX Design in the Future',
    date: 'May 31, 2025',
    description: 'Explore how UI/UX design has evolved from early web interfaces to today’s user-centered design philosophies.',
    imageUrl: 'https://placehold.co/600x401.png',
    imageHint: 'website wireframe lightbulb',
  },
  {
    slug: 'inclusive-design',
    title: 'Inclusive Design for Global Audiences',
    date: 'May 28, 2025',
    description: 'Designing for global users means more than translation—learn how to respect cultural, visual, and technical diversity.',
    imageUrl: 'https://placehold.co/600x401.png',
    imageHint: 'developer computer screen',
  },
  {
    slug: 'dark-mode-ui',
    title: 'Dark Mode UI: Best Practices for Designers',
    date: 'May 28, 2025',
    description: 'Dark mode is more than a trend—it’s a usability feature. Learn the visual and accessibility principles behind it.',
    imageUrl: 'https://placehold.co/600x401.png',
    imageHint: 'dark mode interface',
  },
  {
    slug: 'microinteractions-delight',
    title: 'Microinteractions that Delight Users',
    date: 'May 12, 2025',
    description: 'Explore how small, purposeful animations and feedback loops can significantly enhance user satisfaction and engagement.',
    imageUrl: 'https://placehold.co/600x401.png',
    imageHint: 'mobile app mockup',
  },
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <Hero />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-12">
            <div className="lg:col-span-2">
              <h2 className="mb-8 text-3xl font-bold tracking-tight">Latest Posts</h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {posts.map((post) => (
                  <PostCard key={post.slug} {...post} />
                ))}
              </div>
              <Pagination />
            </div>
            <div className="lg:col-span-1 lg:pt-[76px]">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Andrew M. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
