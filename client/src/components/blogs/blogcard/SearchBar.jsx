import React from "react";

const SearchBar = ({ query, onChange }) => {
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <input
        type="text"
        placeholder="🔍 Search blogs..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-skin-glow bg-skin-card text-skin-accent placeholder-skin-muted focus:outline-none focus:ring-2 focus:ring-skin-glow"
      />
    </div>
  );
};

export default SearchBar;
