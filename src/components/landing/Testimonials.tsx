import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Rayan was an absolute pleasure. Their creativity and attention to detail are second to none. The final product exceeded all our expectations!",
      name: 'Jane Doe',
      title: 'CEO, TechCorp',
      avatar: 'https://placehold.co/100x100.png',
      hint: "woman portrait"
    },
    {
      quote: "The best designer I've ever worked with. Rayan is a true professional who delivers outstanding results on time, every time. Highly recommended!",
      name: 'John Smith',
      title: 'Founder, Innovate LLC',
      avatar: 'https://placehold.co/100x100.png',
      hint: "man portrait"
    },
    {
      quote: "Rayan's design transformed our app, leading to a 50% increase in user engagement. Their insights into user experience are invaluable.",
      name: 'Emily Johnson',
      title: 'Product Manager, Appify',
      avatar: 'https://placehold.co/100x100.png',
      hint: "professional person"
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-3xl font-bold md:text-5xl">
          Testimonials
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
              </CardContent>
              <div className="flex items-center p-6 pt-0">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
