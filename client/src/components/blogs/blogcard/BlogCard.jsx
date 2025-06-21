import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.id}`} className="no-underline">
      {/* Wrap the entire card in a Link to make it clickable */}

    <motion.div
      className="group relative bg-skin-card border border-skin-glow rounded-2xl overflow-hidden shadow-lg p-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-neon-glow"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Image Hologram */}
      <div className="relative overflow-hidden rounded-xl h-48 mb-6 hologram-container">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2 text-xs px-3 py-1 font-mono bg-skin-glow text-black rounded-full">
          {blog.emoji} {blog.date}
        </div>
        <div className="holo-glow absolute inset-0 z-10 pointer-events-none" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold tracking-wide group-hover:text-skin-accent transition-colors duration-200 mb-2">
        {blog.title}
      </h2>

      {/* Summary */}
      <p className="text-sm text-skin-muted leading-relaxed line-clamp-3">
        {blog.summary}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {blog.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs font-mono px-3 py-0.5 rounded-full border border-skin-glow hover:bg-skin-glow hover:text-black transition-all duration-200"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Author */}
      <div className="mt-4 text-xs text-skin-muted text-right italic">
        — {blog.author}
      </div>
    </motion.div>
    </Link>
  );
};

export default BlogCard;
