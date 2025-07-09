import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv, MotionLink } from "@/components/blog/Motion";
import type { Metadata } from "next";
import { siteConfig } from "@/content/config";
import { ArrowUpRight, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Showcase",
  description: "A showcase of projects by FrostFoe.",
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

const showcaseItems = [
  {
    title: "Project Alpha",
    description: "A cutting-edge web application for data visualization.",
    image:
      "https://www.shutterstock.com/image-photo/human-brain-character-adorned-stylish-600nw-2317787017.jpg",
    hint: "abstract data visualization",
    url: "#",
  },
  {
    title: "Project Beta",
    description: "An e-commerce platform with a focus on user experience.",
    image:
      "https://www.shutterstock.com/image-photo/human-brain-character-adorned-stylish-600nw-2317787017.jpg",
    hint: "modern online store",
    url: "#",
  },
  {
    title: "Project Gamma",
    description: "A mobile app designed for seamless social networking.",
    image:
      "https://www.shutterstock.com/image-photo/human-brain-character-adorned-stylish-600nw-2317787017.jpg",
    hint: "social media app",
    url: "#",
  },
  {
    title: "Project Delta",
    description: "A corporate website with a clean and modern design.",
    image:
      "https://www.shutterstock.com/image-photo/human-brain-character-adorned-stylish-600nw-2317787017.jpg",
    hint: "professional business website",
    url: "#",
  },
  {
    title: "Project Epsilon",
    description: "A portfolio website for a creative agency.",
    image:
      "https://www.shutterstock.com/image-photo/human-brain-character-adorned-stylish-600nw-2317787017.jpg",
    hint: "creative agency portfolio",
    url: "#",
  },
  {
    title: "Project Zeta",
    description: "A blog platform with a focus on readability and speed.",
    image:
      "https://www.shutterstock.com/image-photo/human-brain-character-adorned-stylish-600nw-2317787017.jpg",
    hint: "minimalist blog design",
    url: "#",
  },
];

export default function ShowcasePage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <MotionDiv
          className="text-center"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <h1 className="inline-flex items-center gap-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            My Showcase <Rocket className="h-10 w-10" />
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A selection of projects that I'm proud of. Each one represents a
            unique challenge and a story of creative problem-solving.
          </p>
        </MotionDiv>

        <MotionDiv
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ perspective: "1200px" }}
        >
          {showcaseItems.map((item, index) => (
            <MotionDiv key={index} variants={itemVariant}>
              <MotionLink
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                whileHover={{ scale: 1.03, y: -8, rotateY: 5, rotateX: -3 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="h-full overflow-hidden transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10">
                  <MotionDiv
                    className="relative aspect-video w-full"
                    whileHover={{ z: 20 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      data-ai-hint={item.hint}
                    />
                  </MotionDiv>
                  <CardContent className="p-6">
                    <MotionDiv
                      whileHover={{ z: 15 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <h3 className="flex items-center justify-between text-xl font-bold">
                        {item.title}
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {item.description}
                      </p>
                    </MotionDiv>
                  </CardContent>
                </Card>
              </MotionLink>
            </MotionDiv>
          ))}
        </MotionDiv>
      </main>
    </div>
  );
}
