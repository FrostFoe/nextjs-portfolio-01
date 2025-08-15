import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "../../../mdx-components";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

interface MdxContentProps {
  content: string;
}

export function MdxContent({ content }: MdxContentProps) {
  const components = useMDXComponents({});

  return (
    <div className="prose prose-invert max-w-none text-base lg:text-lg text-muted-foreground">
      <MDXRemote
        source={content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
              [rehypePrettyCode, { theme: "one-dark-pro" }],
            ],
          },
        }}
      />
    </div>
  );
}
