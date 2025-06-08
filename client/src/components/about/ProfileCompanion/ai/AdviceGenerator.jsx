import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowPath } from "react-icons/hi2";

const adviceMap = {
  Focused: [
    "🧠 Maintain single-task momentum.",
    "🚀 Precision > speed. Stay dialed in.",
    "⏳ Focus amplifies output exponentially.",
  ],
  Learning: [
    "📚 Feed your neural net. Ask everything.",
    "🤔 Curiosity is your compiler.",
    "📈 Don't fear bugs — debug, decode, grow.",
  ],
  Building: [
    "🛠️ Ship fast. Break nothing critical.",
    "🧩 Code is language. Structure it clearly.",
    "🔁 Refactor to reinforce foundations.",
  ],
  Glitching: [
    "🌀 Something’s off. Breathe. Reboot.",
    "⚠️ Fragments detected — debug internally.",
    "💤 Rest mode may optimize cognition.",
  ],
  Ready: [
    "✅ Systems optimal. You’re cleared for action.",
    "📡 Awaiting mission data...",
    "🎯 Execute primary objective.",
  ],
};

export default function AdviceGenerator() {
  const [mood, setMood] = useState("Focused");
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("ai-mood");
    if (stored) {
      const moodName = [
        "Focused",
        "Learning",
        "Building",
        "Glitching",
        "Ready",
      ][parseInt(stored)];
      setMood(moodName);
    }
  }, []);

  const generateAdvice = () => {
    const options = adviceMap[mood] || ["🤖 No advice found."];
    const random = options[Math.floor(Math.random() * options.length)];
    setAdvice(random);
  };

  useEffect(() => {
    generateAdvice();
  }, [mood]);

  return (
    <motion.div
      className="relative p-4 bg-skin-panel border border-skin-accent2 rounded-xl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-skin-accent font-futuristic text-lg mb-2">
        Advisor Feed
      </h3>

      <motion.p
        key={advice}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-skin-text text-sm font-mono text-center leading-relaxed"
      >
        {advice}
      </motion.p>

      <p className="text-xs text-skin-text/60 mt-2 text-center">
        Based on neural mood: <span className="italic">{mood}</span>
      </p>

      <button
        onClick={generateAdvice}
        className="absolute top-2 right-2 p-1 text-skin-accent hover:text-skin-accent2 transition"
        title="Refresh Advice"
      >
        <HiArrowPath size={18} className="animate-spin-once" />
      </button>
    </motion.div>
  );
}
