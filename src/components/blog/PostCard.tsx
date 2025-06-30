import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MotionDiv, MotionLink } from "@/components/blog/Motion";
import type { Post } from "@/lib/mdx";
import { format } from "date-fns";

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const { slug, frontmatter } = post;
  return (
    <MotionLink
      href={`/blog/${slug}`}
      className="group block"
      whileHover="hover"
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
        <div className="relative h-56 w-full overflow-hidden rounded-xl md:col-span-1">
          <MotionDiv
            className="h-full w-full"
            variants={{ hover: { scale: 1.05 } }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={frontmatter.imageUrl}
              alt={frontmatter.title}
              fill
              className="object-cover"
              data-ai-hint={frontmatter.imageHint}
            />
          </MotionDiv>
        </div>
        <div className="md:col-span-2">
          <Badge variant="outline" className="mb-2">
            {frontmatter.category}
          </Badge>
          <h3 className="mb-2 text-2xl font-bold leading-snug">
            <MotionDiv
              variants={{ hover: { x: 5 } }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {frontmatter.title}
            </MotionDiv>
          </h3>
          <div className="mb-4 flex items-center text-sm text-muted-foreground">
            <span className="material-symbols-outlined mr-2 text-base">
              calendar_month
            </span>
            <span>{format(new Date(frontmatter.date), "MMM dd, yyyy")}</span>
          </div>
          <p className="text-muted-foreground">{frontmatter.description}</p>
        </div>
      </div>
    </MotionLink>
  );
};

export default PostCard;
