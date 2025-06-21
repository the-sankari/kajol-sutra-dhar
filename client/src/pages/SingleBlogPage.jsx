import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../data/blogEntries.json";

const SingleBlogPage = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center mt-20 text-red-400">404 Blog Not Found</div>
    );
  }

  return (
    <div className="min-h-screen bg-skin-bg text-skin-accent px-6 py-16  mx-auto">
      <Link to="/blog" className="text-sm text-skin-glow hover:underline">
        &larr; Back to logs
      </Link>

      <div className="mt-6">
        <h1 className="text-4xl font-bold mb-4">
          {blog.emoji} {blog.title}
        </h1>

        <div className="text-sm text-skin-muted mb-4">
          {blog.date} — <span className="italic">by {blog.author}</span>
        </div>

        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-xl shadow-lg border border-skin-glow mb-6 w-full"
        />

        <p className="text-base leading-relaxed mb-6">{blog.description}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {blog.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-0.5 text-xs font-mono border border-skin-glow rounded-full hover:bg-skin-glow hover:text-black transition"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
