import { useState, useEffect } from "react";

const ProjectFilterBar = ({ projects, onFilter }) => {
  const [activeTag, setActiveTag] = useState("All");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const allTags = projects.flatMap((project) => project.tags);
    const uniqueTags = ["All", ...new Set(allTags)];
    setTags(uniqueTags);
  }, [projects]);

  const handleClick = (tag) => {
    setActiveTag(tag);
    onFilter(tag);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleClick(tag)}
          className={`px-4 py-1 rounded-full border text-sm transition duration-200
            ${
              activeTag === tag
                ? "bg-skin-accent2 text-skin-bg border-skin-accent2 shadow"
                : "text-skin-accent2 border-skin-accent2 hover:bg-skin-accent2 hover:text-skin-bg"
            }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilterBar;
