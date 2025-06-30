import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Figma'];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-3xl font-bold md:text-5xl">
          About Me
        </h2>
        <div className="mt-12 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative h-96 w-full">
            <Image
              src="https://placehold.co/600x600.png"
              alt="About Me Image"
              fill
              className="rounded-lg object-cover"
              data-ai-hint="portrait professional"
            />
          </div>
          <div>
            <h3 className="font-headline text-2xl font-semibold text-primary">
              Who am I?
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              I am a passionate web developer and UI/UX designer with a knack for creating beautiful, functional, and user-centered digital experiences. With over 5 years of experience in the field, I am always looking for new and creative ways to bring my clients' visions to life.
            </p>
            <div className="mt-8">
              <h4 className="font-headline text-xl font-semibold">My Skills</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-base">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
