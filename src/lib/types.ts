export type Reply = {
  id: string;
  author: string;
  avatarUrl: string;
  date: string;
  text: string;
};

export type Comment = {
  id: string;
  author: string;
  avatarUrl: string;
  date: string;
  text: string;
  reply?: Reply;
};

export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  author: string;
  tags: string[];
  readingTime: string;
  comments?: boolean;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
};
