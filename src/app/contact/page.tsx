"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MotionDiv } from "@/components/blog/Motion";
import { siteConfig } from "@/content/config";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Linkedin, Palette, Twitter, Dribbble } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20, rotateX: -20, transformOrigin: "bottom" },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, type: "spring", damping: 15 },
  },
};

const iconMap: { [key: string]: React.ElementType } = {
  Linkedin,
  Palette,
  Twitter,
  Dribbble,
};

export default function ContactPage() {
  const { contact: contactConfig, author } = siteConfig;
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent! ✨",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="bg-background text-foreground">
      <main className="hero-bg-pattern">
        <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
          <MotionDiv
            className="text-center"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {contactConfig.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {contactConfig.description}
            </p>
          </MotionDiv>

          <MotionDiv
            className="mx-auto mt-16 max-w-2xl rounded-xl border border-border/50 bg-card p-8 shadow-lg"
            variants={itemVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5, z: 15, rotateX: 3, rotateY: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <MotionDiv
                  className="space-y-8"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  style={{ perspective: "1000px" }}
                >
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <MotionDiv variants={itemVariant}>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your Name"
                                {...field}
                                className="bg-background/50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </MotionDiv>
                    <MotionDiv variants={itemVariant}>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your Email"
                                {...field}
                                className="bg-background/50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </MotionDiv>
                  </div>
                  <MotionDiv variants={itemVariant}>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Subject"
                              {...field}
                              className="bg-background/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </MotionDiv>
                  <MotionDiv variants={itemVariant}>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your Message"
                              className="min-h-[150px] bg-background/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </MotionDiv>
                  <MotionDiv variants={itemVariant} className="text-center">
                    <MotionDiv
                      whileHover={{
                        scale: 1.05,
                        y: -4,
                        z: 10,
                        rotateX: -15,
                        rotateY: 5,
                      }}
                      whileTap={{ scale: 0.95, z: 5, rotateX: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      className="inline-block"
                      style={{
                        perspective: "800px",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <Button type="submit" size="lg">
                        <Send className="mr-2 h-4 w-4" />
                        {contactConfig.form.buttonText}
                      </Button>
                    </MotionDiv>
                  </MotionDiv>
                </MotionDiv>
              </form>
            </Form>
          </MotionDiv>

          <MotionDiv
            className="mt-16 text-center text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p>{contactConfig.followUpText}</p>
            <div className="mt-6 flex justify-center gap-6">
              <Link
                href={`mailto:${author.email}`}
                className="transition-colors hover:text-primary"
              >
                <MotionDiv
                  whileHover={{ scale: 1.2, y: -2, rotate: 5, z: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail />
                </MotionDiv>
              </Link>
              {author.social.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="transition-colors hover:text-primary"
                  >
                    <MotionDiv
                      whileHover={{ scale: 1.2, rotate: -8, z: 10 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {Icon && <Icon className="h-6 w-6" />}
                    </MotionDiv>
                  </Link>
                );
              })}
            </div>
          </MotionDiv>
        </div>
      </main>
    </div>
  );
}
