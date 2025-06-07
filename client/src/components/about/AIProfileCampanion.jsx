import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import TerminalInterface from "../AI/TerminalInterface";
import MoodScanner from "../AI/MoodScanner";
import AdviceGenerator from "../AI/AdviceGenerator";
import FuturisticHUDContainer from "../AI/FuturisticHUDContainer";

const AIProfileCompanion = () => {
  const messages = [
    "🧠 Syncing your neural blueprint...",
    "📡 Tuning emotional resonance frequency...",
    "🔮 Predicting next career timeline...",
    "💾 Merging creativity subroutines...",
    "🛰️ Connecting to intergalactic project hub...",
  ];
  const commandSet = {
    init: "🔄 System Booting... AI Module Active.",
    status: "🧬 All systems nominal.",
    help: "Available: init, status, clear, help",
  };
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative my-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-skin-accent mb-4">
        🤖 AI Profile Companion
      </h2>

      <div className="bg-skin-panel border border-skin-accent2 rounded-xl p-8 shadow-xl animate-glow">
        <p className="text-lg text-skin-text transition-all duration-700 ease-in-out">
          {messages[index]}
        </p>
      </div>

      {/* Optional animated floating glyphs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-48 h-48 bg-skin-accent/10 rounded-full blur-2xl animate-ping absolute top-1/4 left-1/3" />
        <div className="w-32 h-32 bg-skin-accent2/10 rounded-full blur-2xl animate-pulse absolute bottom-1/4 right-1/4" />
      </div>
        <div className="min-h-screen bg-skin-bg text-skin-text">
      <FuturisticHUDContainer />
    </div>
    </section>
  );
};

export default AIProfileCompanion;
