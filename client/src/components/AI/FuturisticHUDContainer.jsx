import { useEffect, useState } from "react";
import TerminalInterface from "./TerminalInterface";
import MoodScanner from "./MoodScanner";
import AdviceGenerator from "./AdviceGenerator";
import NamePrompt from "./NamePrompt";

const modules = [
  { key: "terminal", label: "Terminal Interface" },
  { key: "mood", label: "Mood Scanner" },
  { key: "advice", label: "Advice Generator" },
  { key: "name", label: "Name Prompt" },
];

const FuturisticHUDContainer = () => {
  const [active, setActive] = useState("terminal");

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("hud-active-module");
    if (saved && modules.find((m) => m.key === saved)) {
      setActive(saved);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("hud-active-module", active);
  }, [active]);

  const renderActiveModule = () => {
    switch (active) {
      case "terminal":
        return <TerminalInterface />;
      case "mood":
        return <MoodScanner />;
      case "advice":
        return <AdviceGenerator />;
      case "name":
        return (
          <NamePrompt onIdentify={(name) => console.log(`User ID: ${name}`)} />
        );
      default:
        return null;
    }
  };

  return (
    <section className="my-20 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-skin-accent text-2xl mb-4">
        🧬 AI Profile Companion Suite
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {modules.map((mod) => (
          <button
            key={mod.key}
            onClick={() => setActive(mod.key)}
            className={`px-4 py-2 border rounded shadow-md transition ${
              active === mod.key
                ? "bg-skin-accent text-skin-bg border-skin-accent2"
                : "text-skin-accent border-skin-accent hover:bg-skin-accent hover:text-skin-bg"
            }`}
          >
            {mod.label}
          </button>
        ))}
      </div>

      <div className="mt-4">{renderActiveModule()}</div>
    </section>
  );
};

export default FuturisticHUDContainer;
