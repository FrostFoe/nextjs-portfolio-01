import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, Palette, Smartphone, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <CodeXml className="h-10 w-10 text-primary" />,
      title: 'Web Development',
      description: 'Creating responsive and high-performance websites with modern technologies.',
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces for a seamless user experience.',
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: 'App Design & Develop',
      description: 'Building native and cross-platform mobile applications for iOS and Android.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-3xl font-bold md:text-5xl">
          What I Do
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-purple-600 opacity-0 blur transition duration-500 group-hover:opacity-75"></div>
              <Card className="relative h-full transform transition-transform duration-300 group-hover:-translate-y-2">
                <CardHeader className="items-center text-center">
                  {service.icon}
                  <CardTitle className="pt-4 font-headline text-2xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{service.description}</p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center font-semibold text-primary"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
