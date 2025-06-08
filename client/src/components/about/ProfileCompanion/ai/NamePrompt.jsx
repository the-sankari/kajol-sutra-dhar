import { useEffect, useState } from "react";

export default function NamePrompt() {
  const [name, setName] = useState("Kajol-AI");

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("ai-name");
    if (stored) setName(stored);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("ai-name", name);
  }, [name]);

  // Capitalize first letter
  const handleChange = (e) => {
    const formatted =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setName(formatted);
  };

  return (
    <div className="p-4 bg-skin-panel border border-skin-accent2 rounded-xl transition-all duration-500 group">
      <h3 className="text-skin-accent font-futuristic text-lg mb-2 group-hover:tracking-wider transition">
        AI Identifier
      </h3>
      <input
        value={name}
        onChange={handleChange}
        className="w-full bg-transparent border-b border-skin-accent focus:outline-none text-skin-text font-mono text-sm py-1 transition-all duration-300 focus:border-skin-accent2 focus:shadow-[0_0_8px_var(--glow-color)]"
      />
      <p className="text-xs text-skin-text/60 mt-1">
        Editable assistant label (saved automatically)
      </p>
    </div>
  );
}
