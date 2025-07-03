"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/content/config";
import type { Post } from "@/lib/types";
import { format } from "date-fns";
import { slugify } from "@/lib/utils";
import { Linkedin, Palette, Twitter, Dribbble } from "lucide-react";
import { MotionDiv } from "@/components/blog/Motion";

const iconMap: { [key: string]: React.ElementType } = {
  Linkedin,
  Palette,
  Twitter,
  Dribbble,
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const AuthorWidget = React.memo(function AuthorWidget() {
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
          {author.social.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <Link
                key={social.name}
                href={social.url}
                className="hover:text-primary transition-colors"
              >
                <MotionDiv
                  whileHover={{ scale: 1.2, rotate: -8 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </MotionDiv>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
});

const CategoriesWidget = ({
  categories,
}: {
  categories: Record<string, number>;
}) => {
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

const TagsWidget = ({ tags }: { tags: string[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Tags</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <MotionDiv
              key={tag}
              whileHover={{ y: -2, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={`/tag/${slugify(tag)}`}>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-accent font-normal"
                >
                  {tag}
                </Badge>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const PopularPostsWidget = ({ popularPosts }: { popularPosts: Post[] }) => {
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

type SidebarUIProps = {
  categories: Record<string, number>;
  tags: string[];
  popularPosts: Post[];
};

export default function SidebarUI({
  categories,
  tags,
  popularPosts,
}: SidebarUIProps) {
  return (
    <MotionDiv
      className="space-y-8 sticky top-24"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <MotionDiv variants={itemVariant}>
        <AuthorWidget />
      </MotionDiv>
      <MotionDiv variants={itemVariant}>
        <CategoriesWidget categories={categories} />
      </MotionDiv>
      <MotionDiv variants={itemVariant}>
        <TagsWidget tags={tags} />
      </MotionDiv>
      <MotionDiv variants={itemVariant}>
        <PopularPostsWidget popularPosts={popularPosts} />
      </MotionDiv>
    </MotionDiv>
  );
}
