
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MotionDiv } from "@/components/blog/Motion";
import type { Metadata } from "next";
import { siteConfig } from "@/content/config";

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
    image: "https://placehold.co/600x400.png",
    hint: "abstract data visualization",
    url: "#",
  },
  {
    title: "Project Beta",
    description: "An e-commerce platform with a focus on user experience.",
    image: "https://placehold.co/600x400.png",
    hint: "modern online store",
    url: "#",
  },
  {
    title: "Project Gamma",
    description: "A mobile app designed for seamless social networking.",
    image: "https://placehold.co/600x400.png",
    hint: "social media app",
    url: "#",
  },
  {
    title: "Project Delta",
    description: "A corporate website with a clean and modern design.",
    image: "https://placehold.co/600x400.png",
    hint: "professional business website",
    url: "#",
  },
  {
    title: "Project Epsilon",
    description: "A portfolio website for a creative agency.",
    image: "https://placehold.co/600x400.png",
    hint: "creative agency portfolio",
    url: "#",
  },
  {
    title: "Project Zeta",
    description: "A blog platform with a focus on readability and speed.",
    image: "https://placehold.co/600x400.png",
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
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            My Showcase
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
              <MotionDiv
                whileHover={{ scale: 1.03, y: -8, z: 20, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/10">
                    <div className="relative aspect-video w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        data-ai-hint={item.hint}
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </MotionDiv>
            </MotionDiv>
          ))}
        </MotionDiv>
      </main>
    </div>
  );
}
