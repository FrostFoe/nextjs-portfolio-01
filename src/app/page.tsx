import PostCard from "@/components/blog/PostCard";
import Sidebar from "@/components/blog/Sidebar";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/blog/Motion";
import { AnimatedMaterialIcon } from "@/components/ui/animated-icon";
import { siteConfig } from "@/content/config";
import { getAllPosts } from "@/lib/mdx";
import Image from "next/image";

export default async function Home() {
  const posts = await getAllPosts();
  const { home: homeConfig } = siteConfig;

  return (
    <div className="bg-background font-sans text-foreground">
      <section className="hero-bg-pattern border-b border-border/50">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-32">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tighter md:text-6xl">
              {homeConfig.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              {homeConfig.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <MotionDiv
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button size="lg" asChild>
                  <a href={homeConfig.hero.buttons.primary.url}>
                    {homeConfig.hero.buttons.primary.text}{" "}
                    <AnimatedMaterialIcon
                      iconName="arrow_forward"
                      className="ml-2"
                    />
                  </a>
                </Button>
              </MotionDiv>
              <MotionDiv
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button size="lg" variant="outline">
                  <AnimatedMaterialIcon iconName="rss_feed" className="mr-2" />{" "}
                  {homeConfig.hero.buttons.secondary.text}
                </Button>
              </MotionDiv>
            </div>
          </MotionDiv>
          <MotionDiv
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="group relative">
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
            </div>
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
            <div className="grid grid-cols-1 gap-12">
              {posts.map((post, i) => (
                <MotionDiv
                  key={post.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <PostCard post={post} />
                </MotionDiv>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
