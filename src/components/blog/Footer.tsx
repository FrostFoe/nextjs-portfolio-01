"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/blog/Motion";
import { AnimatedMaterialIcon } from "../ui/animated-icon";
import { siteConfig } from "@/content/config";

const Footer = () => {
  const { footer, author } = siteConfig;

  return (
    <footer className="hero-bg-pattern border-t border-border/50 pt-16 text-sm text-muted-foreground">
      <div className="container mx-auto px-4">
        <MotionDiv
          className="newsletter-bg-pattern relative mx-auto max-w-4xl rounded-2xl border border-border p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-foreground">
              {footer.newsletter.title}
            </h2>
            <p className="mt-2 max-w-lg mx-auto text-muted-foreground">
              {footer.newsletter.description}
            </p>
            <form className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:max-w-md sm:mx-auto">
              <Input
                type="email"
                placeholder="Your Email"
                className="w-full bg-background/50 border-border h-12 text-base"
                aria-label="Your Email"
              />
              <Button type="submit" size="lg" className="w-full sm:w-auto h-12">
                <AnimatedMaterialIcon iconName="mail" className="mr-2" />{" "}
                {footer.newsletter.buttonText}
              </Button>
            </form>
          </div>
        </MotionDiv>

        <div className="py-16 text-center">
          <h3 className="text-xl font-bold text-foreground">{author.name}</h3>
          <p className="mt-2 max-w-sm mx-auto">{author.bio}</p>
          <nav className="mt-8 flex justify-center gap-x-6 gap-y-2 flex-wrap">
            {footer.links.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
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
