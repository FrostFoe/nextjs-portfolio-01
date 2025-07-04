"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Comment } from "@/lib/types";

interface CommentsSectionProps {
  comments: Comment[];
}

const CommentsSection = ({ comments }: CommentsSectionProps) => (
  <div className="mt-12">
    <h3 className="text-xl font-bold mb-6">Comments ({comments.length})</h3>
    <div className="space-y-8">
      {comments.map((comment) => (
        <div key={comment.id}>
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage
                src={comment.avatarUrl}
                alt={comment.author}
                data-ai-hint="woman portrait"
              />
              <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{comment.author}</span>
                <span className="text-xs text-muted-foreground">
                  {comment.date}
                </span>
              </div>
              <p className="text-muted-foreground mt-1">{comment.text}</p>
            </div>
          </div>
          {comment.reply && (
            <div className="ml-10 mt-6 flex items-start gap-4">
              <Avatar>
                <AvatarImage
                  src={comment.reply.avatarUrl}
                  alt={comment.reply.author}
                  data-ai-hint="man portrait"
                />
                <AvatarFallback>
                  {comment.reply.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">
                    {comment.reply.author}{" "}
                    <span className="text-xs font-normal text-muted-foreground">
                      (Author)
                    </span>
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {comment.reply.date}
                  </span>
                </div>
                <p className="text-muted-foreground mt-1">
                  {comment.reply.text}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default React.memo(CommentsSection);
