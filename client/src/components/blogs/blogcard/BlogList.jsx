import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  if (!blogs.length) {
    return (
      <div className="text-center text-skin-muted text-lg py-10 col-span-full">
        🚫 No matching blogs found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
