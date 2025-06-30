'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Categories', href: '#' },
    { name: 'Gallery', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Andrew M.
        </Link>
        
        <nav className="hidden items-center gap-8 md:flex">
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

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-muted-foreground" />
            <span className="sr-only">Search</span>
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-muted-foreground" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden",
          isOpen ? "block" : "hidden",
          "absolute w-full border-t border-border/40 bg-background"
        )}
      >
        <div className="container mx-auto flex flex-col items-start gap-4 px-4 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="w-full rounded-md px-4 py-2 text-lg font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
