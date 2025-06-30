import { MotionDiv } from "@/components/blog/Motion";
import { siteConfig } from "@/content/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.termsPage.title,
  description: siteConfig.termsPage.description,
  openGraph: {
    title: siteConfig.termsPage.title,
    description: siteConfig.termsPage.description,
    url: `${siteConfig.url}/terms`,
  },
  twitter: {
    title: siteConfig.termsPage.title,
    description: siteConfig.termsPage.description,
  },
};

export default function TermsPage() {
  const { title, content } = siteConfig.termsPage;

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
