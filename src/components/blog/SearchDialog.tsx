"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import type { Post } from "@/lib/mdx";
import { format } from "date-fns";
import { MotionDiv } from "./Motion";

export default function SearchDialog({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Post[]>([]);

  useEffect(() => {
    if (query.length > 2) {
      const searchResults = posts.filter((post) => {
        const queryLower = query.toLowerCase();
        const titleMatch = post.frontmatter.title
          .toLowerCase()
          .includes(queryLower);
        const descriptionMatch = post.frontmatter.description
          .toLowerCase()
          .includes(queryLower);
        const contentMatch = post.content.toLowerCase().includes(queryLower);
        return titleMatch || descriptionMatch || contentMatch;
      });
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query, posts]);

  return (
    <>
      <DialogHeader>
        <DialogTitle>Search Blog Posts</DialogTitle>
        <DialogDescription>
          Find articles by title, description, or content.
        </DialogDescription>
      </DialogHeader>
      <div className="relative">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          search
        </span>
        <Input
          type="search"
          placeholder="Type to search..."
          className="w-full pl-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search posts"
        />
      </div>
      <ScrollArea className="h-[400px] mt-4">
        <div className="space-y-4 pr-4">
          {results.length > 0
            ? results.map((post, index) => (
                <DialogClose asChild key={post.slug}>
                  <Link href={`/blog/${post.slug}`}>
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="block p-4 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                    >
                      <h4 className="font-semibold">
                        {post.frontmatter.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {post.frontmatter.description}
                      </p>
                      <p className="text-xs text-muted-foreground/80 mt-2">
                        {format(
                          new Date(post.frontmatter.date),
                          "MMM dd, yyyy",
                        )}
                      </p>
                    </MotionDiv>
                  </Link>
                </DialogClose>
              ))
            : query.length > 2 && (
                <div className="text-center py-10 text-muted-foreground">
                  <p className="text-lg">No results found for "{query}"</p>
                  <p className="text-sm">Try searching for something else.</p>
                </div>
              )}
        </div>
      </ScrollArea>
    </>
  );
}
