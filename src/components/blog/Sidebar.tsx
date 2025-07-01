import * as React from "react";
import { getAllPosts, getCategories, getTags } from "@/lib/mdx";
import SidebarUI from "./SidebarUI";

const Sidebar = async () => {
  const allPosts = await getAllPosts();
  const categories = await getCategories();
  const tags = await getTags();
  const popularPosts = allPosts.slice(0, 3);

  return (
    <SidebarUI
      categories={categories}
      tags={tags}
      popularPosts={popularPosts}
    />
  );
};

export default Sidebar;
