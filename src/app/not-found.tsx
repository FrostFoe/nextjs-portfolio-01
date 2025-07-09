"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/blog/Motion";
import { siteConfig } from "@/content/config";
import { Compass, Home } from "lucide-react";
import { useNotFound } from "@/lib/not-found-context";
import { useEffect } from "react";

export default function NotFound() {
  const { notFoundPage } = siteConfig;
  const { setIsNotFoundPage } = useNotFound();

  useEffect(() => {
    setIsNotFoundPage(true);
    return () => setIsNotFoundPage(false);
  }, [setIsNotFoundPage]);

  return (
    <div className="h-full w-full flex items-center justify-center text-center hero-bg-pattern">
      <MotionDiv
        className="px-4"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Compass className="!text-8xl text-primary/50 mx-auto mb-6 !w-20 !h-20" />
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
          {notFoundPage.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          {notFoundPage.description}
        </p>
        <Button size="lg" asChild className="mt-8">
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            {notFoundPage.buttonText}
          </Link>
        </Button>
      </MotionDiv>
    </div>
  );
}
