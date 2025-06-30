import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Dribbble, Twitter } from 'lucide-react';

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M7.95 16.95H0V7.05h7.95v9.9zm.6-5.1c0-2.001 1.35-3.6 3.9-3.6s4.05 1.65 4.05 3.6c0 2.1-1.649 3.6-4.05 3.6s-3.9-1.5-3.9-3.6zm15.45-4.85h-6.15V9h4.8c.6 0 1.05-.45 1.05-1.05S23.45 7 22.85 7h-3.8V4.8h3.8c.6 0 1.05-.45 1.05-1.05S23.45 2.7 22.85 2.7h-4.8V0h6.15v7zm-5.55 12h-4.2c0 1.65 1.05 2.25 2.1 2.25s2.1-.6 2.1-2.25zm5.55-2.25c0 3.3-2.4 4.35-4.35 4.35s-4.35-1.05-4.35-4.35V7.05h8.7v9.6z" />
    </svg>
);


const AuthorWidget = () => (
  <Card>
    <CardContent className="p-6 text-center">
      <Avatar className="mx-auto h-24 w-24 border-2 border-primary/20">
        <AvatarImage
          src="https://placehold.co/100x100.png"
          alt="Andrew Mitchell"
          data-ai-hint="man portrait"
        />
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
      <h3 className="mt-4 text-xl font-bold">Andrew Mitchell</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        UI/UX designer with 8+ years of experience, passionate about creating user-centered designs and sharing insights.
      </p>
      <div className="mt-4 flex justify-center gap-4 text-muted-foreground">
        <Link href="#" className="hover:text-primary transition-colors"><Dribbble className="h-5 w-5" /></Link>
        <Link href="#" className="hover:text-primary transition-colors"><BehanceIcon className="h-5 w-5" /></Link>
        <Link href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
      </div>
    </CardContent>
  </Card>
);

const categories = [
  { name: 'UX Strategy', count: 2 },
  { name: 'Design Insights', count: 2 },
  { name: 'Accessibility', count: 1 },
  { name: 'Design Systems', count: 2 },
  { name: 'UX Research', count: 1 },
];

const CategoriesWidget = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg">Categories</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm">
        {categories.map(category => (
          <li key={category.name} className="flex justify-between">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">{category.name}</Link>
            <span className="text-muted-foreground">{category.count}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const tags = [
  'Accessibility', 'Design Systems', 'Scalability', 'Microinteractions', 'Dark Mode', 'Global UX', 'HCD', 'Design Thinking', 'Animation', 'Motion Design', 'User Research'
];

const TagsWidget = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg">Tags</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-accent font-normal">
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const PopularPostsWidget = () => {
  const posts = [
    {
      title: 'Human-Centered Design Principles',
      image: 'https://placehold.co/80x80.png',
      hint: 'abstract design',
      date: 'May 29, 2025',
    },
    {
      title: 'Microinteractions and User Feedback',
      image: 'https://placehold.co/80x80.png',
      hint: 'ui elements',
      date: 'May 27, 2025',
    },
    {
      title: 'The Evolution of UI/UX Design in the Future',
      image: 'https://placehold.co/80x80.png',
      hint: 'funny error message',
      date: 'May 31, 2025',
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Popular Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.title} className="flex items-center gap-4">
              <Image
                src={post.image}
                alt={post.title}
                width={64}
                height={64}
                className="rounded-md object-cover flex-shrink-0"
                data-ai-hint={post.hint}
              />
              <div>
                <Link
                  href="#"
                  className="font-semibold leading-tight hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
                <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Sidebar = () => {
  return (
    <aside className="space-y-8 sticky top-24">
      <AuthorWidget />
      <CategoriesWidget />
      <TagsWidget />
      <PopularPostsWidget />
    </aside>
  );
};

export default Sidebar;
