"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  comment: z.string().min(10, "Comment must be at least 10 characters."),
});

const CommentForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      comment: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Comment Submitted", values);
    toast({
      title: "Comment Submitted! 🎉",
      description:
        "Thanks for your feedback! Your comment is awaiting moderation.",
    });
    form.reset();
  }

  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold mb-6">Leave a Comment</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    className="bg-transparent border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary transition"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comment</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your Comment"
                    className="bg-transparent border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary transition min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Post Comment</Button>
        </form>
      </Form>
    </div>
  );
};

export default React.memo(CommentForm);
