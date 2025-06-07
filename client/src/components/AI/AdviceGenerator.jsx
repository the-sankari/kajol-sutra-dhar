import { useState } from "react";
import { LuSparkles } from "react-icons/lu";

const advices = [
  "🧬 Merge logic with empathy. Great code understands both.",
  "🌠 Every bug is a path to a deeper truth.",
  "💡 The best solutions are often quantum leaps, not iterations.",
  "🤖 Trust the process, but debug the system.",
  "🛸 Imagination is your greatest compiler."
];

const AdviceGenerator = () => {
  const [message, setMessage] = useState("Click for a Neural Insight...");

  const generateAdvice = () => {
    const random = Math.floor(Math.random() * advices.length);
    setMessage(advices[random]);
  };

  return (
    <div className="bg-skin-panel border border-skin-accent2 rounded-lg p-6 shadow-xl text-center">
      <h2 className="text-skin-accent text-xl mb-4 flex items-center justify-center gap-2">
        <LuSparkles className="text-skin-accent2 animate-pulse" /> Quantum Advice Generator
      </h2>
      <p className="text-skin-text text-base mb-6 transition-opacity duration-500 ease-in-out">
        {message}
      </p>
      <button
        onClick={generateAdvice}
        className="px-4 py-2 border border-skin-accent text-skin-accent hover:bg-skin-accent hover:text-skin-bg transition rounded shadow-md"
      >
        Request Insight
      </button>
    </div>
  );
};

export default AdviceGenerator;
