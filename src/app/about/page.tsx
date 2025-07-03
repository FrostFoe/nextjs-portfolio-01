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
import { siteConfig } from "@/content/config";
import {
  Check,
  HelpCircle,
  Laptop,
  Linkedin,
  Palette,
  Rocket,
  Smartphone,
  Twitter,
  Dribbble,
} from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  Linkedin,
  Palette,
  Twitter,
  Dribbble,
};

const serviceIconMap: { [key: string]: React.ElementType } = {
  Laptop,
  Smartphone,
  Palette,
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20, rotateX: -20, transformOrigin: "bottom" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function AboutPage() {
  const { author, about } = siteConfig;

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <main className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
        <MotionDiv
          className="text-center"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
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
            {author.social.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  className="transition-colors hover:text-primary"
                >
                  <MotionDiv
                    whileHover={{ scale: 1.2, rotate: -8, z: 10 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {Icon && <Icon className="h-6 w-6" />}
                  </MotionDiv>
                </Link>
              );
            })}
          </div>
        </MotionDiv>

        <Separator className="my-16 lg:my-24" />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionDiv
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
            style={{ perspective: "1000px" }}
          >
            <MotionDiv variants={itemVariant}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {about.aboutSection.title}
              </h2>
            </MotionDiv>
            {about.aboutSection.paragraphs.map((p, i) => (
              <MotionDiv key={i} variants={itemVariant}>
                <p className="text-muted-foreground">{p}</p>
              </MotionDiv>
            ))}
            <MotionDiv variants={itemVariant}>
              <MotionDiv
                whileHover={{ y: -4, scale: 1.05, rotateX: -10, rotateY: 5 }}
                whileTap={{ scale: 0.95, rotateX: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-block"
                style={{ perspective: "800px", transformStyle: "preserve-3d" }}
              >
                <Button variant="outline" size="lg" className="mt-4" asChild>
                  <Link href="/contact">
                    <Rocket className="mr-2 h-5 w-5" />
                    {about.aboutSection.buttonText}
                  </Link>
                </Button>
              </MotionDiv>
            </MotionDiv>
          </MotionDiv>
          <MotionDiv
            whileHover={{ scale: 1.03, y: -5, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            initial={{ opacity: 0, x: 50, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ perspective: "1000px" }}
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
          <MotionDiv
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ perspective: "1000px" }}
          >
            {about.services.map((service) => {
              const ServiceIcon = serviceIconMap[service.icon];
              return (
                <MotionDiv
                  key={service.title}
                  variants={itemVariant}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    rotateY: 5,
                    rotateX: -5,
                    z: 30,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="h-full text-center transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                        {ServiceIcon && (
                          <ServiceIcon className="text-primary h-7 w-7" />
                        )}
                      </div>
                      <h3 className="mt-6 text-xl font-bold">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {service.description}
                      </p>
                      <ul className="mt-6 space-y-3 text-left">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start">
                            <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </MotionDiv>
              );
            })}
          </MotionDiv>
        </MotionDiv>

        <Separator className="my-16 lg:my-24" />

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionDiv
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
            style={{ perspective: "1000px" }}
          >
            <MotionDiv variants={itemVariant}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {about.faqSection.title}
              </h2>
            </MotionDiv>
            <MotionDiv variants={itemVariant}>
              <p className="text-muted-foreground">
                {about.faqSection.description}
              </p>
            </MotionDiv>
            <MotionDiv variants={itemVariant}>
              <MotionDiv
                whileHover={{ y: -4, scale: 1.05, rotateX: -10, rotateY: 5 }}
                whileTap={{ scale: 0.95, rotateX: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="inline-block"
                style={{ perspective: "800px", transformStyle: "preserve-3d" }}
              >
                <Button variant="outline" className="!mt-6" asChild>
                  <Link href="/contact">
                    <HelpCircle className="mr-2 h-5 w-5" />
                    {about.faqSection.buttonText}
                  </Link>
                </Button>
              </MotionDiv>
            </MotionDiv>
          </MotionDiv>
          <MotionDiv
            className="w-full"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ perspective: "1000px" }}
          >
            <Accordion type="single" collapsible className="w-full">
              {about.faqs.map((faq, index) => (
                <MotionDiv
                  key={index}
                  variants={itemVariant}
                  whileHover={{ z: 15, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <AccordionItem value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </MotionDiv>
              ))}
            </Accordion>
          </MotionDiv>
        </div>
      </main>
    </div>
  );
}
