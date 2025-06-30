import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'Project One',
      category: 'Web Development',
      image: 'https://placehold.co/600x400.png',
      hint: 'website design',
    },
    {
      title: 'Project Two',
      category: 'UI/UX Design',
      image: 'https://placehold.co/600x400.png',
      hint: 'app interface',
    },
    {
      title: 'Project Three',
      category: 'App Development',
      image: 'https://placehold.co/600x400.png',
      hint: 'mobile application',
    },
    {
      title: 'Project Four',
      category: 'Branding',
      image: 'https://placehold.co/600x400.png',
      hint: 'logo design',
    },
    {
      title: 'Project Five',
      category: 'Web Design',
      image: 'https://placehold.co/600x400.png',
      hint: 'modern website',
    },
    {
      title: 'Project Six',
      category: 'UI/UX Design',
      image: 'https://placehold.co/600x400.png',
      hint: 'dashboard ui',
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-3xl font-bold md:text-5xl">
          My Portfolio
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Link href="#" key={index} className="group relative block overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={item.hint}
              />
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="font-headline text-2xl font-bold">{item.title}</h3>
                <p className="mt-1 text-sm">{item.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
