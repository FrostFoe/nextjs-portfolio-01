import PostCard from "@/components/blog/PostCard";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/blog/Motion";
import { siteConfig } from "@/content/config";
import { getAllPosts } from "@/lib/mdx";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import { AnimatedTitle } from "@/components/ui/animated-title";
import { SidebarLoader } from "@/components/blog/SidebarLoader";
import { Suspense } from "react";
import Sidebar from "@/components/blog/Sidebar";

const ParticlesContainer = dynamic(
  () =>
    import("@/components/ui/particles-container").then(
      (m) => m.ParticlesContainer,
    ),
  { ssr: false },
);

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const heroItemVariant = {
  hidden: { opacity: 0, y: 20, rotateX: -20, transformOrigin: "bottom" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const postItemVariant = {
  hidden: { opacity: 0, y: 20, rotateX: -20, transformOrigin: "bottom" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default async function Home() {
  const posts = await getAllPosts();
  const { home: homeConfig } = siteConfig;

  return (
    <div className="bg-background font-sans text-foreground">
      <section className="relative hero-bg-pattern border-b border-border/50">
        <ParticlesContainer />
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-32">
          <MotionDiv
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            style={{ perspective: "1000px" }}
          >
            <MotionDiv variants={heroItemVariant}>
              <AnimatedTitle text={homeConfig.hero.title} />
            </MotionDiv>
            <MotionDiv variants={heroItemVariant}>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                {homeConfig.hero.description}
              </p>
            </MotionDiv>
            <MotionDiv
              variants={heroItemVariant}
              className="mt-8 flex flex-wrap gap-4"
            >
              <MotionDiv
                whileHover={{
                  y: -4,
                  scale: 1.05,
                  rotateX: -10,
                  rotateY: 5,
                  z: 20,
                }}
                whileTap={{ scale: 0.95, rotateX: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                style={{ perspective: "800px", transformStyle: "preserve-3d" }}
              >
                <Button size="lg" asChild>
                  <a href={homeConfig.hero.buttons.primary.url}>
                    {homeConfig.hero.buttons.primary.text}{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </MotionDiv>
              <MotionDiv
                whileHover={{
                  y: -4,
                  scale: 1.05,
                  rotateX: -10,
                  rotateY: -5,
                  z: 20,
                }}
                whileTap={{ scale: 0.95, rotateX: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                style={{ perspective: "800px", transformStyle: "preserve-3d" }}
              >
                <Button size="lg" variant="outline" asChild>
                  <a href={homeConfig.hero.buttons.secondary.url}>
                    <Mail className="mr-2 h-5 w-5" />{" "}
                    {homeConfig.hero.buttons.secondary.text}
                  </a>
                </Button>
              </MotionDiv>
            </MotionDiv>
          </MotionDiv>
          <MotionDiv
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            style={{ perspective: "1000px" }}
          >
            <MotionDiv
              className="group relative"
              whileHover={{ scale: 1.03, rotateY: 5, z: 30 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -inset-2 rounded-xl bg-primary/20 opacity-0 blur-xl transition duration-1000 group-hover:opacity-50 group-hover:duration-200" />
              <Image
                src={homeConfig.hero.image.src}
                alt={homeConfig.hero.image.alt}
                width={600}
                height={400}
                data-ai-hint={homeConfig.hero.image.hint}
                className="relative rounded-2xl"
                priority
              />
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            {homeConfig.latestArticles.title}
          </h2>
          <p className="mb-12 text-muted-foreground">
            {homeConfig.latestArticles.description}
          </p>
        </MotionDiv>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MotionDiv
              className="grid grid-cols-1 gap-12"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              style={{ perspective: "1000px" }}
            >
              {posts.map((post) => (
                <MotionDiv key={post.slug} variants={postItemVariant}>
                  <PostCard post={post} />
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
          <div className="lg:col-span-1">
            <Suspense fallback={<SidebarLoader />}>
              <Sidebar />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
