import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-5xl">Contact</h2>
          <p className="mt-4 font-headline text-4xl font-semibold text-primary md:text-6xl">
            Let's Talk
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-muted-foreground">rayan@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-muted-foreground">123 Creative Lane, Suite 100<br />San Francisco, CA 94103</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <Input type="text" placeholder="Your Name" className="h-12 text-base" />
            <Input type="email" placeholder="Your Email" className="h-12 text-base" />
            <Textarea placeholder="Your Message" className="min-h-[150px] text-base" />
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-purple-700 text-lg font-bold text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/30"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
