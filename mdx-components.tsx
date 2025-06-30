import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';
import { MotionDiv } from '@/components/blog/Motion';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use them
// in your MDX files just like regular React components.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-4xl font-extrabold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
    p: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
    a: ({ href, children }) => <Link href={href!} className="text-primary underline">{children}</Link>,
    ul: ({ children }) => <ul className="my-4 list-disc list-inside">{children}</ul>,
    ol: ({ children }) => <ol className="my-4 list-decimal list-inside">{children}</ol>,
    li: ({ children }) => <li className="my-2">{children}</li>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-foreground/80">{children}</blockquote>,
    img: (props) => (
      <MotionDiv
        className="relative w-full aspect-video rounded-xl overflow-hidden my-8 shadow-lg"
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
