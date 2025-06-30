'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-headline text-2xl font-bold text-white">
          Blackhole
        </Link>
        
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-gradient-to-r from-primary to-purple-700 font-bold text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/30">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden",
          isOpen ? "block" : "hidden",
          "border-t border-border/40 bg-background"
        )}
      >
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="w-full text-center text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="mt-4 w-full bg-gradient-to-r from-primary to-purple-700 font-bold text-primary-foreground">
            <Link href="#contact" onClick={() => setIsOpen(false)}>Contact Me</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
