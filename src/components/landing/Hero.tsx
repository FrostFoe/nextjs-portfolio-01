import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              I'm Rayan Adlrdard, a <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Creative Designer</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              I am a passionate and innovative designer creating beautiful and functional user experiences. I thrive on turning complex problems into simple, elegant, and intuitive designs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="#about">
                  About Me <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="#portfolio">
                  Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex justify-center gap-4 md:justify-start">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="relative mx-auto h-80 w-80 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px]">
            <Image
              src="https://placehold.co/450x450.png"
              alt="Hero Image"
              fill
              className="rounded-full object-cover"
              priority
              data-ai-hint="professional portrait"
            />
             <div className="absolute inset-0 rounded-full border-4 border-primary/50" />
             <div className="absolute inset-2 rounded-full border-4 border-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
