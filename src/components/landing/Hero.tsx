import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-bg-pattern relative border-b border-border/40 py-20 text-center md:py-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Crafting the Future of UI/UX Design
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Hi, I'm Andrew Mitchell, a UI/UX designer sharing insights, tutorials, and stories about creating user-centered digital experiences.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#">
              <Briefcase className="mr-2 h-5 w-5" />
              Hire Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
