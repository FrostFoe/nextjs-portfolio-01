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
import type { Post } from "@/lib/types";
import { format } from "date-fns";
import { MotionDiv } from "@/components/blog/Motion";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const SearchLoader = () => (
  <div className="space-y-4">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="flex flex-col space-y-2 rounded-lg p-4">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-1/4 mt-1" />
      </div>
    ))}
  </div>
);

export default function SearchDialog() {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/search");
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "An unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const results = posts.filter((post) => {
    if (!query.trim()) {
      return false;
    }

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

  return (
    <>
      <DialogHeader>
        <DialogTitle>Search Blog Posts</DialogTitle>
        <DialogDescription>
          Find articles by title, description, or content.
        </DialogDescription>
      </DialogHeader>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Type to search..."
          className="w-full pl-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search posts"
          disabled={isLoading || !!error}
        />
      </div>
      <ScrollArea className="h-[400px] mt-4">
        <div className="space-y-4 pr-4">
          {isLoading ? (
            <SearchLoader />
          ) : error ? (
            <div className="text-center py-10 text-destructive">
              <p className="text-lg">Error loading posts</p>
              <p className="text-sm">{error}</p>
            </div>
          ) : query.trim().length > 0 ? (
            results.length > 0 ? (
              results.map((post, index) => (
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
            ) : (
              <div className="text-center py-10 text-muted-foreground">
                <p className="text-lg">No results found for &quot;{query}&quot;</p>
                <p className="text-sm">Try searching for something else.</p>
              </div>
            )
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              <p>Start typing to search for posts.</p>
            </div>
          )}
        </div>
      </ScrollArea>
    </>
  );
}
