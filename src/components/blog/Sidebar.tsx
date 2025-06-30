import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Rss } from 'lucide-react';
import { MotionDiv } from './Motion';

const AboutWidget = () => (
  <Card>
    <CardContent className="p-6 text-center">
      <MotionDiv
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Avatar className="mx-auto h-24 w-24 border-2 border-primary/20">
          <AvatarImage
            src="https://placehold.co/100x100.png"
            alt="Andrew Mitchell"
            data-ai-hint="man portrait"
          />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
      </MotionDiv>
      <h3 className="mt-4 text-xl font-bold">Andrew Mitchell</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        UI/UX designer crafting digital magic. Also, a big fan of pizza.
      </p>
    </CardContent>
  </Card>
);

const NewsletterWidget = () => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-lg">
        <Rss />
        Stay Updated
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="mb-4 text-sm text-muted-foreground">
        Get the latest articles, projects, and pizza topping recommendations
        delivered to your inbox.
      </p>
      <form className="flex gap-2">
        <Input type="email" placeholder="you@domain.com" className="flex-1" />
        <Button type="submit">Subscribe</Button>
      </form>
    </CardContent>
  </Card>
);

const PopularPostsWidget = () => {
  const posts = [
    {
      title: 'The Unseen Hand: How AI is Shaping the Future of UX',
      image: 'https://placehold.co/80x80.png',
      hint: 'abstract design',
    },
    {
      title: 'Storytelling in Design: Crafting Narratives That Convert',
      image: 'https://placehold.co/80x80.png',
      hint: 'ui elements',
    },
    {
      title: '10 Hilarious Moments in Bad UX Design',
      image: 'https://placehold.co/80x80.png',
      hint: 'funny error message',
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Trending Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {posts.map((post) => (
            <MotionDiv
              key={post.title}
              whileHover={{
                scale: 1.03,
                backgroundColor: 'hsla(var(--accent))',
              }}
              className="rounded-lg p-2 -m-2"
              transition={{ duration: 0.2 }}
            >
              <li className="flex items-center gap-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={64}
                  height={64}
                  className="rounded-md object-cover"
                  data-ai-hint={post.hint}
                />
                <div>
                  <Link
                    href="#"
                    className="font-semibold leading-tight hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </div>
              </li>
            </MotionDiv>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Sidebar = () => {
  return (
    <MotionDiv
      className="space-y-8"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <AboutWidget />
      <NewsletterWidget />
      <PopularPostsWidget />
    </MotionDiv>
  );
};

export default Sidebar;
