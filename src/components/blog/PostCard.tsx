
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MotionDiv, MotionLink } from "@/components/blog/Motion";
import type { Post } from "@/lib/mdx";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const { slug, frontmatter } = post;
  return (
    <MotionLink
      href={`/blog/${slug}`}
      className="group block"
      style={{ perspective: "1000px" }}
    >
      <MotionDiv
        className="grid grid-cols-1 items-center gap-8 rounded-lg border border-border bg-card p-6 shadow-md transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10 md:grid-cols-3"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02, rotateY: 3 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <MotionDiv
          className="relative h-56 w-full overflow-hidden rounded-xl md:col-span-1"
          style={{ transformStyle: "preserve-3d" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          whileHover={{ z: 30, scale: 1.05 }}
        >
          <Image
            src={frontmatter.imageUrl}
            alt={frontmatter.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={frontmatter.imageHint}
          />
        </MotionDiv>
        <MotionDiv
          className="md:col-span-2"
          whileHover={{ z: 20 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <Badge variant="outline" className="mb-2">
            {frontmatter.category}
          </Badge>
          <h3 className="mb-2 text-2xl font-bold leading-snug relative pt-1 pb-2">
            {frontmatter.title}
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-1/3"></span>
          </h3>
          <div className="mb-4 flex items-center text-sm text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{format(new Date(frontmatter.date), "MMM dd, yyyy")}</span>
          </div>
          <p className="text-muted-foreground">{frontmatter.description}</p>
        </MotionDiv>
      </MotionDiv>
    </MotionLink>
  );
};

export default PostCard;
