import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { CalendarDays } from 'lucide-react';
import { MotionDiv, MotionLink } from '@/components/blog/Motion';

type PostCardProps = {
  slug: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
};

const PostCard = ({
  slug,
  title,
  date,
  description,
  imageUrl,
  imageHint,
  category,
}: PostCardProps) => {
  return (
    <MotionLink
      href={`/blog/${slug}`}
      className="group block"
      whileHover="hover"
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
        <div className="relative h-56 w-full overflow-hidden rounded-xl md:col-span-1">
          <MotionDiv className="h-full w-full" variants={{ hover: { scale: 1.05 } }} transition={{ duration: 0.3 }}>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              data-ai-hint={imageHint}
            />
          </MotionDiv>
        </div>
        <div className="md:col-span-2">
          <Badge variant="outline" className="mb-2">
            {category}
          </Badge>
          <h3 className="mb-2 text-2xl font-bold leading-snug">
            <MotionDiv
              variants={{ hover: { x: 5 } }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {title}
            </MotionDiv>
          </h3>
          <div className="mb-4 flex items-center text-sm text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{date}</span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </MotionLink>
  );
};

export default PostCard;
