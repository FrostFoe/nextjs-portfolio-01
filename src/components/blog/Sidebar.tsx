import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Twitter, Dribbble, Rss } from 'lucide-react';

const AboutWidget = () => (
  <Card>
    <CardContent className="p-6 text-center">
      <Avatar className="mx-auto h-24 w-24 border-2 border-primary/20">
        <AvatarImage src="https://placehold.co/100x100.png" alt="Andrew Mitchell" data-ai-hint="man portrait"/>
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
      <h3 className="mt-4 text-xl font-bold">Andrew Mitchell</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        UI/UX designer with 8+ years of experience, passionate about creating user-centered designs and sharing insights.
      </p>
      <div className="mt-4 flex justify-center gap-4">
        <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={18} /></Link>
        <Link href="#" className="text-muted-foreground hover:text-primary"><Dribbble size={18} /></Link>
        <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter size={18} /></Link>
        <Link href="#" className="text-muted-foreground hover:text-primary"><Rss size={18} /></Link>
      </div>
    </CardContent>
  </Card>
);

const CategoriesWidget = () => {
    const categories = [
        { name: 'UX Strategy', count: 2 },
        { name: 'Design Insights', count: 2 },
        { name: 'Accessibility', count: 1 },
        { name: 'Design Systems', count: 2 },
        { name: 'UX Research', count: 1 },
    ];
    return (
        <Card>
            <CardHeader><CardTitle className="text-lg">Categories</CardTitle></CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {categories.map(cat => (
                        <li key={cat.name} className="flex justify-between text-sm">
                            <Link href="#" className="text-muted-foreground hover:text-primary">{cat.name}</Link>
                            <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">{cat.count}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

const TagsWidget = () => {
    const tags = ['Accessibility', 'Design Systems', 'Scalability', 'Microinteractions', 'Dark Mode', 'Global UX', 'HCD', 'Design Thinking', 'Animation', 'Motion Design', 'User Research'];
    return (
        <Card>
            <CardHeader><CardTitle className="text-lg">Tags</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <Badge key={tag} variant="outline" className="cursor-pointer border-border hover:bg-accent text-muted-foreground hover:text-foreground">{tag}</Badge>
                ))}
            </CardContent>
        </Card>
    );
}

const PopularPostsWidget = () => {
    const posts = [
        { title: 'Human-Centered Design Principles', date: 'May 29, 2025', image: 'https://placehold.co/80x80.png', hint: 'abstract design' },
        { title: 'Microinteractions and User Feedback', date: 'May 27, 2025', image: 'https://placehold.co/80x80.png', hint: 'ui elements' },
        { title: 'The Evolution of UI/UX Design in the Future', date: 'May 31, 2025', image: 'https://placehold.co/80x80.png', hint: 'futuristic interface' },
    ];
    return (
        <Card>
            <CardHeader><CardTitle className="text-lg">Popular Posts</CardTitle></CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {posts.map(post => (
                        <li key={post.title} className="flex items-center gap-4">
                            <Image src={post.image} alt={post.title} width={64} height={64} className="rounded-md object-cover" data-ai-hint={post.hint}/>
                            <div>
                                <Link href="#" className="text-sm font-semibold leading-tight hover:text-primary">{post.title}</Link>
                                <p className="mt-1 text-xs text-muted-foreground">{post.date}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

const Sidebar = () => {
  return (
    <aside className="space-y-8">
      <AboutWidget />
      <CategoriesWidget />
      <TagsWidget />
      <PopularPostsWidget />
    </aside>
  );
};

export default Sidebar;
