import { useState } from "react";

const TerminalInterface = ({ commands = {} }) => {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      if (cmd === "clear") {
        setLines([]);
        setInput("");
        return;
      }

      const response = commands[cmd] || `❓ Unknown protocol: ${cmd}`;
      setLines((prev) => [...prev, `$ ${cmd}`, response]);
      setInput("");
    }
  };

  return (
    <div className="bg-skin-panel border border-skin-accent2 rounded-lg p-6 shadow-md font-mono">
      <div className="h-48 overflow-y-auto text-skin-text text-sm mb-4">
        {lines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <div className="flex items-center">
        <span className="text-skin-accent2 mr-2">❯</span>
        <input
          type="text"
          className="w-full bg-transparent text-skin-accent placeholder-skin-accent/40 outline-none caret-skin-accent2"
          placeholder="Type a protocol..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          autoFocus
        />
      </div>
    </div>
  );
};

export default TerminalInterface;
