import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AnimatedIconWrapper } from "../ui/animated-icon";
import { siteConfig } from "@/content/config";
import { getAllPosts, getCategories, getTags } from "@/lib/mdx";
import { format } from "date-fns";
import { slugify } from "@/lib/utils";

const AuthorWidget = () => {
  const { author } = siteConfig;
  return (
    <Card>
      <CardContent className="p-6 text-center">
        <Avatar className="mx-auto h-24 w-24 border-2 border-primary/20">
          <AvatarImage
            src={author.avatar}
            alt={author.name}
            data-ai-hint="man portrait"
          />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h3 className="mt-4 text-xl font-bold">{author.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{author.bio}</p>
        <div className="mt-4 flex justify-center gap-4 text-muted-foreground">
          {author.social.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              className="hover:text-primary transition-colors"
            >
              <AnimatedIconWrapper>
                <span className="material-symbols-outlined !w-5 !h-5">
                  {social.icon}
                </span>
              </AnimatedIconWrapper>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const CategoriesWidget = async () => {
  const categories = await getCategories();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {Object.entries(categories).map(([name, count]) => (
            <li key={name} className="flex justify-between">
              <Link
                href={`/category/${slugify(name)}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {name}
              </Link>
              <span className="text-muted-foreground">{count}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const TagsWidget = async () => {
  const tags = await getTags();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Tags</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link key={tag} href={`/tag/${slugify(tag)}`}>
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-accent font-normal"
              >
                {tag}
              </Badge>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const PopularPostsWidget = async () => {
  const allPosts = await getAllPosts();
  const popularPosts = allPosts.slice(0, 3);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Popular Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {popularPosts.map((post) => (
            <li key={post.slug} className="flex items-center gap-4">
              <Image
                src={post.frontmatter.imageUrl}
                alt={post.frontmatter.title}
                width={64}
                height={64}
                className="rounded-md object-cover flex-shrink-0"
                data-ai-hint={post.frontmatter.imageHint}
              />
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold leading-tight hover:text-primary transition-colors"
                >
                  {post.frontmatter.title}
                </Link>
                <p className="text-xs text-muted-foreground mt-1">
                  {format(new Date(post.frontmatter.date), "MMM dd, yyyy")}
                </p>
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
