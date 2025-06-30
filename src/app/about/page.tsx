"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { MotionDiv } from "@/components/blog/Motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AnimatedIconWrapper,
  AnimatedMaterialIcon,
} from "@/components/ui/animated-icon";
import { siteConfig } from "@/content/config";

export default function AboutPage() {
  const { author, about } = siteConfig;

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <main className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
        <MotionDiv
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Avatar className="mx-auto h-32 w-32 border-2 border-primary/20">
            <AvatarImage
              src={author.avatar}
              alt={author.name}
              data-ai-hint="man portrait"
            />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {author.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {about.intro}
          </p>
          <div className="mt-6 flex justify-center gap-6 text-muted-foreground">
            {author.social.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                className="transition-colors hover:text-primary"
              >
                <AnimatedIconWrapper>
                  <span className="material-symbols-outlined">
                    {social.icon}
                  </span>
                </AnimatedIconWrapper>
              </Link>
            ))}
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {about.aboutSection.title}
              </h2>
              {about.aboutSection.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground">
                  {p}
                </p>
              ))}
              <Button variant="outline" size="lg" className="mt-4">
                {about.aboutSection.buttonText}
              </Button>
            </div>
            <MotionDiv
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={about.aboutSection.image.src}
                alt={about.aboutSection.image.alt}
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
                data-ai-hint={about.aboutSection.image.hint}
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
            {about.servicesSection.title}
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {about.services.map((service, i) => (
              <MotionDiv
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full text-center hover:shadow-primary/20">
                  <CardContent className="p-8">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                      <AnimatedMaterialIcon
                        iconName={service.icon}
                        className="text-primary text-3xl"
                      />
                    </div>
                    <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-3 text-left">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="material-symbols-outlined mr-3 h-5 w-5 flex-shrink-0 text-primary">
                            check
                          </span>
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
                {about.faqSection.title}
              </h2>
              <p className="text-muted-foreground">
                {about.faqSection.description}
              </p>
              <Button variant="outline" className="!mt-6">
                {about.faqSection.buttonText}
              </Button>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {about.faqs.map((faq, index) => (
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
