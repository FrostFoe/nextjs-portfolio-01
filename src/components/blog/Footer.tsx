'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MotionDiv } from '@/components/blog/Motion';

const Footer = () => {
  return (
    <footer className="hero-bg-pattern border-t border-border/50 pt-16 text-sm text-muted-foreground">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <MotionDiv
          className="newsletter-bg-pattern relative mx-auto max-w-4xl rounded-2xl border border-border p-8 text-center md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-foreground">Join Newsletter</h2>
            <p className="mt-2 max-w-lg mx-auto text-muted-foreground">
              Get the latest design tips, tutorials, and insights delivered
              straight to your inbox every week.
            </p>
            <form className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:max-w-md sm:mx-auto">
              <Input
                type="email"
                placeholder="Your Email"
                className="w-full bg-background/50 border-border h-12 text-base"
                aria-label="Your Email"
              />
              <Button type="submit" size="lg" className="w-full sm:w-auto h-12">
                <Mail className="mr-2 h-5 w-5" /> Subscribe
              </Button>
            </form>
          </div>
        </MotionDiv>

        {/* Footer Content */}
        <div className="py-16 text-center">
          <h3 className="text-xl font-bold text-foreground">Andrew Mitchell</h3>
          <p className="mt-2 max-w-sm mx-auto">
            Specializing in user-centered design with 8+ years of expertise in creating intuitive interfaces.
          </p>
          <nav className="mt-8 flex justify-center gap-x-6 gap-y-2 flex-wrap">
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Docs</Link>
            <Link href="#" className="hover:text-primary transition-colors">404</Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 py-6 text-center text-xs">
          <p>© {new Date().getFullYear()} Andrew Mitchell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
