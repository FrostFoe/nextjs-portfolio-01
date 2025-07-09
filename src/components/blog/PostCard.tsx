import * as React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MotionDiv, MotionLink } from "@/components/blog/Motion";
import type { Post } from "@/lib/types";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const { slug, frontmatter } = post;
  return (
    <MotionLink href={`/blog/${slug}`} className="group block">
      <MotionDiv
        className="grid grid-cols-1 items-center gap-8 rounded-lg border border-border bg-card p-6 shadow-md transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10 md:grid-cols-3"
        whileHover={{ y: -5, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="relative h-56 w-full overflow-hidden rounded-xl md:col-span-1">
          <Image
            src={frontmatter.imageUrl}
            alt={frontmatter.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={frontmatter.imageHint}
          />
        </div>
        <div className="md:col-span-2">
          <Badge variant="outline" className="mb-2">
            {frontmatter.category}
          </Badge>
          <h3 className="relative mb-2 pt-1 pb-2 text-2xl font-bold leading-snug">
            {frontmatter.title}
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-1/3"></span>
          </h3>
          <div className="mb-4 flex items-center text-sm text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{format(new Date(frontmatter.date), "MMM dd, yyyy")}</span>
          </div>
          <p className="text-muted-foreground">{frontmatter.description}</p>
        </div>
      </MotionDiv>
    </MotionLink>
  );
};

export default React.memo(PostCard);
