import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import blogData from "../data/blogEntries.json";
import BlogList from "../components/blogs/blogcard/BlogList";
import SearchBar from "../components/blogs/blogcard/SearchBar";
import SortSelect from "../components/blogs/blogcard/SortSelect";
import TagFilterBar from "../components/blogs/blogcard/TagFilterBar";
import TerminalFilterBar from "../components/blogs/blogcard/TerminalFilterBar";

const Blogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedTags, setSelectedTags] = useState(searchParams.get("tags")?.split(",") || []);

  // Extract unique tags
  const allTags = [...new Set(blogData.flatMap((b) => b.tags))];

  // Update URL when tags or query change
  useEffect(() => {
    setSearchParams({
      q: query,
      tags: selectedTags.join(","),
    });
  }, [query, selectedTags, setSearchParams]);

  // Toggle tags
  const toggleTag = (tag) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
  };

  // Filter
  const filtered = blogData.filter((blog) => {
    const q = query.toLowerCase();
    const matchesQuery =
      blog.title.toLowerCase().includes(q) ||
      blog.summary.toLowerCase().includes(q) ||
      blog.tags.join(" ").toLowerCase().includes(q);

    const matchesTags =
      selectedTags.length === 0 || selectedTags.every((tag) => blog.tags.includes(tag));

    return matchesQuery && matchesTags;
  });

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
    if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
    if (sortBy === "title-asc") return a.title.localeCompare(b.title);
    if (sortBy === "title-desc") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <div className="min-h-screen bg-skin-bg text-skin-accent px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">⚡ Blog Logs</h1>

      <SearchBar query={query} onChange={setQuery} />
      <SortSelect sortBy={sortBy} onChange={setSortBy} />
      <TerminalFilterBar onUpdate={({ tag, sort, query }) => {
        if (tag) {
          const newTags = tag.split(",").map((t) => t.trim());
          setSelectedTags(newTags);
        }
        if (sort) {
          setSortBy(sort);
        }
        if (query) {
          setQuery(query);
        }
      }
      } />
      <TagFilterBar tags={allTags} selectedTags={selectedTags} onToggleTag={toggleTag} />
      <BlogList blogs={sorted} />
    </div>
  );
};

export default Blogs;


// import { useState } from "react";
// import BlogGridPage from "../components/blogs/gridblog/BlogGridPage";
// import QuantumTimeline from "../components/blogs/quantum/QuantumTimeline";

// const Blog = () => {
//   const [view, setView] = useState("grid"); // or "timeline"

//   return (
//     <div className="min-h-screen bg-skin-bg text-skin-text font-futuristic px-6 py-12">
//       <div className="flex justify-end mb-6">
//         <button
//           onClick={() => setView("grid")}
//           className={`px-3 py-1 mr-2 border rounded ${
//             view === "grid" ? "bg-skin-accent text-black" : "text-skin-accent"
//           }`}
//         >
//           Grid
//         </button>
//         <button
//           onClick={() => setView("timeline")}
//           className={`px-3 py-1 border rounded ${
//             view === "timeline"
//               ? "bg-skin-accent text-black"
//               : "text-skin-accent"
//           }`}
//         >
//           Timeline
//         </button>
//       </div>

//       {view === "grid" ? <BlogGridPage /> : <QuantumTimeline />}
//     </div>
//   );
// };

// export default Blog;
