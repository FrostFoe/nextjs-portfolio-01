import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

type PostCardProps = {
  slug: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const PostCard = ({ slug, title, date, description, imageUrl, imageHint }: PostCardProps) => {
  return (
    (<Link href={`/blog/${slug}`} className="group block">
      <Card className="h-full overflow-hidden border-border bg-card transition-all group-hover:border-primary/50 group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="relative h-56 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageHint}
          />
        </div>
        <CardContent className="p-6">
          <h3 className="mb-2 text-xl font-bold leading-snug">{title}</h3>
          <div className="mb-4 flex items-center text-sm text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{date}</span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>)
  );
};

export default PostCard;
