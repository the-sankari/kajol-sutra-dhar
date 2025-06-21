import React, { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import blogData from "../data/blogEntries.json";
import BlogList from "../components/blogs/blogcard/BlogList";
import SearchBar from "../components/blogs/blogcard/SearchBar";
import SortSelect from "../components/blogs/blogcard/SortSelect";
import TagFilterBar from "../components/blogs/blogcard/TagFilterBar";
import TerminalFilterBar from "../components/blogs/blogcard/TerminalFilterBar";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedTags, setSelectedTags] = useState(
    searchParams.get("tags")?.split(",") || []
  );

  // Extract all unique tags
  const allTags = [...new Set(blogData.flatMap((b) => b.tags))];

  // Reset if direct visit to /blog with no params
  useEffect(() => {
    const hasQuery = searchParams.get("q");
    const hasTags = searchParams.get("tags");
    if (location.pathname === "/blog" && !hasQuery && !hasTags) {
      setQuery("");
      setSelectedTags([]);
      setSortBy("newest");
    }
  }, [location.pathname]);

  // Update searchParams only if values exist
  useEffect(() => {
    const params = new URLSearchParams();
    if (query.trim()) {
      params.set("q", query);
    }
    if (selectedTags.length > 0) {
      params.set("tags", selectedTags.join(","));
    }
    setSearchParams(params);
  }, [query, selectedTags, setSearchParams]);

  const toggleTag = (tag) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
  };

  const resetFilters = () => {
    setQuery("");
    setSelectedTags([]);
    setSortBy("newest");
    setSearchParams({});
  };

  const filtered = blogData.filter((blog) => {
    const q = query.toLowerCase();
    const matchesQuery =
      blog.title.toLowerCase().includes(q) ||
      blog.summary.toLowerCase().includes(q) ||
      blog.tags.join(" ").toLowerCase().includes(q);

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => blog.tags.includes(tag));

    return matchesQuery && matchesTags;
  });

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
      <TerminalFilterBar
        onUpdate={({ tag, sort, query }) => {
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
        }}
      />
      <TagFilterBar
        tags={allTags}
        selectedTags={selectedTags}
        onToggleTag={toggleTag}
      />

      <div className="flex justify-end mt-4">
        <button
          onClick={resetFilters}
          className="px-4 py-2 text-sm bg-skin-accent text-black rounded hover:opacity-80 transition"
        >
          Reset Filters
        </button>
      </div>

      <BlogList blogs={sorted} />
    </div>
  );
};

export default Blog;
