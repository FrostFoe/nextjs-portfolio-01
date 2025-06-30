import Header from '@/components/blog/Header';
import PostCard from '@/components/blog/PostCard';
import Sidebar from '@/components/blog/Sidebar';
import { MotionDiv } from '@/components/blog/Motion';
import { getPostsByTag, getTags } from '@/lib/mdx';
import { slugify } from '@/lib/utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const tags = await getTags();
  return tags.map(tag => ({
    tag: slugify(tag),
  }));
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const { tag } = params;
  const posts = await getPostsByTag(tag);
  const allTags = await getTags();
  const originalTag = allTags.find(t => slugify(t) === tag);

  if (!posts.length || !originalTag) {
    notFound();
  }

  return (
    <div className="bg-background font-sans text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight">Posts tagged: "{originalTag}"</h1>
          <p className="mb-12 text-muted-foreground">
            {posts.length} article{posts.length === 1 ? '' : 's'} found for this tag.
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
