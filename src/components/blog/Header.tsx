
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { MotionDiv, MotionLink } from '@/components/blog/Motion';
import { cn } from '@/lib/utils';
import { AnimatedMaterialIcon } from '../ui/animated-icon';
import { siteConfig } from '@/content/config';

const Header = () => {
  const pathname = usePathname();

  return (
    <MotionDiv
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <MotionLink
            href="/"
            className="text-2xl font-bold tracking-tighter"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {siteConfig.author.name.split(' ')[0]} M.
          </MotionLink>

          <nav className="hidden items-center gap-1 md:flex">
            {siteConfig.navLinks.map((link) => (
              <MotionLink
                key={link.name}
                href={link.href}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
              >
                {link.name}
              </MotionLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
                <AnimatedMaterialIcon iconName="search" className="text-muted-foreground" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </header>
    </MotionDiv>
  );
};

export default Header;
