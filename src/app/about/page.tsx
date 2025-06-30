'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Header from '@/components/blog/Header';
import { Separator } from '@/components/ui/separator';
import { MotionDiv } from '@/components/blog/Motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimatedIconWrapper, AnimatedMaterialIcon } from '@/components/ui/animated-icon';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
);

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M7.95 16.95H0V7.05h7.95v9.9zm.6-5.1c0-2.001 1.35-3.6 3.9-3.6s4.05 1.65 4.05 3.6c0 2.1-1.649 3.6-4.05 3.6s-3.9-1.5-3.9-3.6zm15.45-4.85h-6.15V9h4.8c.6 0 1.05-.45 1.05-1.05S23.45 7 22.85 7h-3.8V4.8h3.8c.6 0 1.05-.45 1.05-1.05S23.45 2.7 22.85 2.7h-4.8V0h6.15v7zm-5.55 12h-4.2c0 1.65 1.05 2.25 2.1 2.25s2.1-.6 2.1-2.25zm5.55-2.25c0 3.3-2.4 4.35-4.35 4.35s-4.35-1.05-4.35-4.35V7.05h8.7v9.6z" />
  </svg>
);

const services = [
  {
    icon: 'devices',
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces and seamless user experiences that convert visitors into loyal customers.',
    items: ['User Research & Analysis', 'Wireframing & Prototyping', 'Visual Design & Branding'],
  },
  {
    icon: 'smartphone',
    title: 'Mobile App Design',
    description: 'Designing native and cross-platform mobile applications that provide exceptional user experiences.',
    items: ['iOS & Android Design', 'Interactive Prototypes', 'App Store Optimization'],
  },
  {
    icon: 'palette',
    title: 'Brand Identity',
    description: 'Developing cohesive brand identities that resonate with your target audience and stand out in the market.',
    items: ['Logo & Brand Design', 'Brand Guidelines', 'Marketing Materials'],
  },
];

const faqs = [
  {
    question: "What's your design process like?",
    answer: "My process is collaborative and iterative, centered around the user. It starts with discovery and research, moves to ideation and wireframing, then prototyping and user testing, and finally, high-fidelity design and handoff. I ensure feedback is incorporated at every stage.",
  },
  {
    question: 'How long does a typical project take?',
    answer: "Project timelines vary greatly depending on the scope and complexity. A small project might take a few weeks, while a full app design from scratch could take several months. After our initial discussion, I can provide a more accurate estimate.",
  },
  {
    question: 'Do you work with development teams?',
    answer: "Absolutely. I have extensive experience collaborating with developers. I provide detailed design specifications, assets, and prototypes to ensure a smooth handoff. I'm also available for support throughout the development phase to ensure pixel-perfect implementation.",
  },
  {
    question: 'What tools do you use?',
    answer: "I'm proficient in a wide range of design tools. My primary tools are Figma for UI/UX design and prototyping, Adobe Illustrator for vector graphics, and Protopie for advanced animations. I'm also adaptable and can work with your team's preferred tools.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
        <MotionDiv 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Avatar className="mx-auto h-32 w-32 border-2 border-primary/20">
            <AvatarImage
              src="https://placehold.co/128x128.png"
              alt="Andrew Mitchell"
              data-ai-hint="man portrait"
            />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Andrew Mitchell
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Crafting digital experiences that transform businesses and delight
            users. Specializing in user-centered design with 8+ years of
            expertise in creating intuitive interfaces.
          </p>
          <div className="mt-6 flex justify-center gap-6 text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-primary"><AnimatedIconWrapper><LinkedinIcon className="h-6 w-6" /></AnimatedIconWrapper></Link>
            <Link href="#" className="transition-colors hover:text-primary"><AnimatedIconWrapper><BehanceIcon className="h-6 w-6" /></AnimatedIconWrapper></Link>
            <Link href="#" className="transition-colors hover:text-primary"><AnimatedIconWrapper><TwitterIcon className="h-6 w-6" /></AnimatedIconWrapper></Link>
          </div>
        </MotionDiv>

        <Separator className="my-16 lg:my-24" />

        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
              <p className="text-muted-foreground">
                I'm a passionate UI/UX designer dedicated to creating meaningful
                digital experiences. With expertise in user research,
                wireframing, prototyping, and visual design, I help businesses
                solve complex problems through thoughtful design solutions.
              </p>
              <p className="text-muted-foreground">
                My approach combines data-driven insights with creative
                innovation to deliver products that not only look beautiful but
                also drive business results and user satisfaction.
              </p>
              <Button variant="outline" size="lg" className="mt-4">
                Start Collaborating!
              </Button>
            </div>
            <MotionDiv
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://placehold.co/600x400.png"
                alt="Cute robot mascot"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
                data-ai-hint="cute robot street"
              />
            </MotionDiv>
          </div>
        </MotionDiv>

        <Separator className="my-16 lg:my-24" />

        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            How I Can Help
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <MotionDiv
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                      <AnimatedMaterialIcon iconName={service.icon} className="text-primary text-3xl" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                    <ul className="mt-6 space-y-3 text-left">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="material-symbols-outlined mr-3 h-5 w-5 flex-shrink-0 text-primary">check</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
        
        <Separator className="my-16 lg:my-24" />

        <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to common questions about my design process,
                timeline, and collaboration approach.
              </p>
              <Button variant="outline" className="!mt-6">Ask a Question</Button>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </MotionDiv>
      </main>
    </div>
  );
}
