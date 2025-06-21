import React from "react";

const SortSelect = ({ sortBy, onChange }) => {
  return (
    <div className="w-full max-w-xs mx-auto mb-6">
      <select
        value={sortBy}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border border-skin-glow bg-skin-card text-skin-accent focus:outline-none focus:ring-2 focus:ring-skin-glow"
      >
        <option value="newest">📅 Newest First</option>
        <option value="oldest">📅 Oldest First</option>
        <option value="title-asc">🔤 Title A → Z</option>
        <option value="title-desc">🔠 Title Z → A</option>
      </select>
    </div>
  );
};

export default SortSelect;
