import PostCard from '@/components/blog/PostCard';
import Sidebar from '@/components/blog/Sidebar';
import { MotionDiv } from '@/components/blog/Motion';
import { getCategories, getPostsByCategory } from '@/lib/mdx';
import { slugify } from '@/lib/utils';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { siteConfig } from '@/content/config';

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export async function generateStaticParams() {
  const categories = await getCategories();
  return Object.keys(categories).map(category => ({
    category: slugify(category),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = params;
  const allCategories = await getCategories();
  const originalCategory = Object.keys(allCategories).find(c => slugify(c) === category);

  if (!originalCategory) {
    return {};
  }

  const title = `Posts in category: "${originalCategory}"`;
  const description = `Browse all articles filed under the category ${originalCategory} on ${siteConfig.author.name}'s blog.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/category/${category}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/category/${category}`,
    },
    twitter: {
      title,
      description,
    },
  };
}


export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const posts = await getPostsByCategory(category);
  const allCategories = await getCategories();
  const originalCategory = Object.keys(allCategories).find(c => slugify(c) === category);

  if (!posts.length || !originalCategory) {
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
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight">Posts in category: "{originalCategory}"</h1>
          <p className="mb-12 text-muted-foreground">
            {posts.length} article{posts.length === 1 ? '' : 's'} found in this category.
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
                  <PostCard post={post} />
                </MotionDiv>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
