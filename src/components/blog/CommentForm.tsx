"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CommentForm = () => (
  <div className="mt-12">
    <h3 className="text-xl font-bold mb-6">Leave a Comment</h3>
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          placeholder="Your Name"
          className="bg-transparent border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary transition"
        />
        <Input
          type="email"
          placeholder="Your Email"
          className="bg-transparent border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary transition"
        />
      </div>
      <Textarea
        placeholder="Your Comment"
        className="bg-transparent border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary transition min-h-[120px]"
      />
      <Button type="submit">Post Comment</Button>
    </form>
  </div>
);

export default React.memo(CommentForm);
