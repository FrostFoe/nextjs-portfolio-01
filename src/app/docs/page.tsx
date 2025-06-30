import { MotionDiv } from "@/components/blog/Motion";
import { siteConfig } from "@/content/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.docsPage.title,
  description: siteConfig.docsPage.description,
  openGraph: {
    title: siteConfig.docsPage.title,
    description: siteConfig.docsPage.description,
    url: `${siteConfig.url}/docs`,
  },
  twitter: {
    title: siteConfig.docsPage.title,
    description: siteConfig.docsPage.description,
  },
};

export default function DocsPage() {
  const { title, content } = siteConfig.docsPage;

  return (
    <main className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <article className="prose prose-invert mx-auto max-w-none">
          <h1>{title}</h1>
          {content.map((section, index) => (
            <section key={index}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </article>
      </MotionDiv>
    </main>
  );
}
