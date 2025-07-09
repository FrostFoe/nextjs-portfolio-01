import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const MotionDiv = dynamic(
  () => import("@/components/blog/Motion").then((mod) => mod.MotionDiv),
  {
    ssr: false,
  },
);

const contentBlockVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.5,
    },
  },
};

const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
  <MotionDiv
    variants={contentBlockVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </MotionDiv>
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <MotionWrapper>
        <h1 className="text-4xl font-extrabold my-4">{children}</h1>
      </MotionWrapper>
    ),
    h2: ({ children }) => (
      <MotionWrapper>
        <h2 className="text-3xl font-bold my-6">{children}</h2>
      </MotionWrapper>
    ),
    h3: ({ children }) => (
      <MotionWrapper>
        <h3 className="text-2xl font-bold my-4">{children}</h3>
      </MotionWrapper>
    ),
    p: ({ children }) => (
      <MotionWrapper>
        <p className="my-4 leading-relaxed">{children}</p>
      </MotionWrapper>
    ),
    a: ({ href, children }) => (
      <Link href={href!} className="text-primary underline">
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <MotionWrapper>
        <ul className="my-4 list-disc list-inside">{children}</ul>
      </MotionWrapper>
    ),
    ol: ({ children }) => (
      <MotionWrapper>
        <ol className="my-4 list-decimal list-inside">{children}</ol>
      </MotionWrapper>
    ),
    li: ({ children }) => <li className="my-2">{children}</li>,
    blockquote: ({ children }) => (
      <MotionWrapper>
        <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-foreground/80">
          {children}
        </blockquote>
      </MotionWrapper>
    ),
    img: (props) => (
      <MotionDiv
        className="relative w-full aspect-video rounded-xl overflow-hidden my-8 shadow-lg"
        variants={contentBlockVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={props.src!}
          alt={props.alt!}
          fill
          className="object-cover"
        />
      </MotionDiv>
    ),
    ...components,
  };
}
