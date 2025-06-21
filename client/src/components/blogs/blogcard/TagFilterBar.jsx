import React from "react";

// Optional: Map of icons or emojis for each tag
const tagIcons = {
  react: "⚛️",
  firebase: "🔥",
  tailwind: "🌬️",
  animation: "🎞️",
  timeline: "📈",
  cli: "💻",
  openai: "🧠",
  fonts: "🎨",
  forms: "📩",
  vercel: "🚀",
  default: "🏷️",
};

const TagFilterBar = ({ tags, selectedTags, onToggleTag }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        const icon = tagIcons[tag] || tagIcons.default;

        return (
          <button
            key={tag}
            onClick={() => onToggleTag(tag)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full border text-sm font-mono transition
              ${
                isSelected
                  ? "bg-skin-glow text-black"
                  : "border-skin-glow text-skin-accent hover:bg-skin-glow hover:text-black"
              }`}
          >
            <span>{icon}</span>#{tag}
            {isSelected && <span className="ml-1 text-xs">✔️</span>}
          </button>
        );
      })}
    </div>
  );
};

export default TagFilterBar;
