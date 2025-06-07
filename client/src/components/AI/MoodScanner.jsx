import { useEffect, useState } from "react";

const moods = [
  { label: "⚡ Neural Uplink: Stable", color: "text-green-400" },
  { label: "🌌 Thought Frequency: Expanding", color: "text-cyan-400" },
  { label: "🧠 Brainwaves: Synced", color: "text-purple-400" },
  { label: "💭 Dream Protocol: Active", color: "text-pink-400" },
  { label: "🚀 Focus Drive: Engaged", color: "text-yellow-300" }
];

const MoodScanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % moods.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-skin-panel border border-skin-accent rounded-lg p-6 shadow-lg text-center">
      <h2 className="text-skin-accent2 text-xl mb-4">🌀 Mood Scanner</h2>
      <p
        className={`text-lg font-mono transition-all duration-500 ease-in-out ${
          moods[index].color
        }`}
      >
        {moods[index].label}
      </p>
    </div>
  );
};

export default MoodScanner;
