"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
const MotionDiv = dynamic(
  () => import("@/components/blog/Motion").then((mod) => mod.MotionDiv),
  {
    ssr: false,
  },
);
const MotionLink = dynamic(
  () => import("@/components/blog/Motion").then((mod) => mod.MotionLink),
  {
    ssr: false,
  },
);
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/config";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import dynamic from "next/dynamic";

const SearchDialog = dynamic(() => import("./SearchDialog"), {
  loading: () => (
    <div className="h-[400px] w-full flex items-center justify-center">
      <p className="text-muted-foreground">Loading Search...</p>
    </div>
  ),
});

const Header = () => {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <MotionDiv
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <MotionLink
            href="/"
            className="text-2xl font-bold tracking-tighter"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {siteConfig.author.name}
          </MotionLink>

          <nav className="hidden items-center gap-1 md:flex">
            {siteConfig.navLinks.map((link) => (
              <MotionLink
                key={link.name}
                href={link.href}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {link.name}
              </MotionLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <MotionDiv
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5 text-muted-foreground" />
                    <span className="sr-only">Search</span>
                  </Button>
                </MotionDiv>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                {isSearchOpen && <SearchDialog />}
              </DialogContent>
            </Dialog>

            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="mt-8 flex flex-col gap-4">
                    {siteConfig.navLinks.map((link) => (
                      <SheetClose asChild key={link.name}>
                        <Link
                          href={link.href}
                          className={cn(
                            "rounded-md px-4 py-2 text-lg font-medium transition-colors hover:text-primary",
                            pathname === link.href
                              ? "text-primary"
                              : "text-muted-foreground",
                          )}
                          onClick={() => setIsSheetOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </MotionDiv>
  );
};

export default Header;
