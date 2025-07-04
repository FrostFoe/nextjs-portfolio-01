"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/blog/Motion";
import { siteConfig } from "@/content/config";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import React from "react";
import { useNotFound } from "@/lib/not-found-context";

const Footer = () => {
  const { footer, author } = siteConfig;
  const { toast } = useToast();
  const { isNotFoundPage } = useNotFound();

  if (isNotFoundPage) {
    return null; // Don't render footer on 404 page
  }

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    if (email) {
      toast({
        title: "Subscribed! 🎉",
        description: "Thanks for joining the cosmos. Welcome aboard!",
      });
      e.currentTarget.reset();
    } else {
      toast({
        title: "Oops!",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="hero-bg-pattern border-t border-border/50 pt-16 text-sm text-muted-foreground">
      <div className="container mx-auto px-4">
        <MotionDiv
          id="newsletter"
          className="newsletter-bg-pattern relative mx-auto max-w-4xl rounded-2xl border border-border p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-foreground">
              {footer.newsletter.title}
            </h2>
            <p className="mt-2 max-w-lg mx-auto text-muted-foreground">
              {footer.newsletter.description}
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:max-w-md sm:mx-auto"
            >
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-background/50 border-border h-12 text-base"
                aria-label="Your Email"
              />
              <MotionDiv
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto h-12"
                >
                  <Mail className="mr-2 h-4 w-4" />{" "}
                  {footer.newsletter.buttonText}
                </Button>
              </MotionDiv>
            </form>
          </div>
        </MotionDiv>

        <div className="py-16 text-center">
          <h3 className="text-xl font-bold text-foreground">{author.name}</h3>
          <p className="mt-2 max-w-sm mx-auto">{author.bio}</p>
          <nav className="mt-8 flex justify-center gap-x-6 gap-y-2 flex-wrap">
            {footer.links.map((link) => (
              <MotionDiv
                key={link.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={link.url}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </MotionDiv>
            ))}
          </nav>
        </div>

        <div className="border-t border-border/50 py-6 text-center text-xs">
          <p>
            {footer.copyright.replace(
              "{year}",
              new Date().getFullYear().toString(),
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
