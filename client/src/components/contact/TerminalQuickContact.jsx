import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import RocketIcon from "../shared/RocketIcon";

const LINKS = {
  github: "https://github.com/the-sankari",
  linkedin: "https://www.linkedin.com/in/kajol-sutra-dhar/",
};

const RESPONSES = {
  github: "Prepare to launch to Codebase Node. Proceed? (yes/no)",
  linkedin: "Establishing frequency bridge. Confirm launch? (yes/no)",
  email: "📨 Please use the contact form above for secure messaging.",
  help: "Available commands: github, linkedin, email, clear, help",
  clear: "Terminal cleared.",
  default: "Unknown command. Try: github, linkedin, email, help, clear",
};

const VALID_COMMANDS = ["github", "linkedin", "email", "help", "clear"];

export default function TerminalQuickContact() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState([]);
  const [pendingLink, setPendingLink] = useState(null);
  const [launching, setLaunching] = useState(false);
  const [launchedLinks, setLaunchedLinks] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [log]);

  const handleCommand = (cmd) => {
    const text = cmd.toLowerCase().trim();

    if (text === "clear") {
      setLog([]);
      return;
    }

    if (text === "help") {
      setLog((prev) => [...prev, { from: "ai", text: RESPONSES.help }]);
      return;
    }

    if (pendingLink) {
      if (text === "yes") {
        setLog((prev) => [
          ...prev,
          { from: "user", text },
          { from: "ai", text: "🚀 Launching..." },
        ]);
        setLaunching(true);
        setTimeout(() => {
          window.open(pendingLink, "_blank");
          setLaunching(false);
          setLaunchedLinks((prev) => [...prev, pendingLink]);
        }, 1600);
        setPendingLink(null);
      } else if (text === "no") {
        setLog((prev) => [
          ...prev,
          { from: "user", text },
          { from: "ai", text: "❌ Launch aborted." },
        ]);
        setPendingLink(null);
      } else {
        setLog((prev) => [
          ...prev,
          { from: "user", text },
          { from: "ai", text: "❓ Please type 'yes' or 'no' to continue." },
        ]);
      }
      return;
    }

    const response = RESPONSES[text] || RESPONSES.default;
    const url = LINKS[text] || null;

    if (text === "email") {
      setLog((prev) => [
        ...prev,
        { from: "user", text: cmd },
        { from: "ai", text: RESPONSES.email },
      ]);
      return;
    }

    if (launchedLinks.includes(url)) {
      setLog((prev) => [
        ...prev,
        { from: "user", text: cmd },
        { from: "ai", text: "✅ You've already launched this command." },
      ]);
      return;
    }

    setLog((prev) => [
      ...prev,
      { from: "user", text: cmd },
      { from: "ai", text: response },
    ]);

    if (url) setPendingLink(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setHistory((prev) => [...prev, input]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      if (history.length === 0) return;
      const newIndex =
        historyIndex <= 0 ? history.length - 1 : historyIndex - 1;
      setInput(history[newIndex]);
      setHistoryIndex(newIndex);
    }
    if (e.key === "ArrowDown") {
      if (historyIndex === -1) return;
      const newIndex =
        historyIndex >= history.length - 1 ? 0 : historyIndex + 1;
      setInput(history[newIndex]);
      setHistoryIndex(newIndex);
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const match = VALID_COMMANDS.find((cmd) =>
        cmd.startsWith(input.toLowerCase())
      );
      if (match) setInput(match);
    }
  };

  return (
    <motion.div
      className="relative bg-skin-panel border border-skin-accent2 rounded-xl p-4 font-mono mt-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="terminal-contact"
    >
      <div className="mb-3">
        <h3 className="text-skin-accent font-futuristic text-lg mb-1">
          Terminal Contact
        </h3>
        <div className="text-xs text-skin-accent2 space-y-1">
          <div>
            <span className="text-skin-accent">🕒 </span>
            {new Date().toLocaleString("en-US", {
              dateStyle: "short",
              timeStyle: "short",
            })}
          </div>
          <div>
            <span className="text-skin-accent">🛰️ Status:</span>{" "}
            {pendingLink ? "Awaiting confirmation..." : "Ready"}
          </div>
          <div>
            <span className="text-skin-accent">🔗 Launched:</span>{" "}
            {launchedLinks.length > 0 ? launchedLinks.join(", ") : "None yet"}
          </div>
        </div>
      </div>

      <div className="text-xs text-skin-accent2 mb-4">
        <span className="text-skin-accent">💡 Tip:</span> Use arrow keys for
        history. Press <span className="text-skin-accent">Tab</span> to
        autocomplete.
      </div>

      <div className="bg-black/20 max-h-64 overflow-y-auto p-2 rounded-md text-skin-text text-sm space-y-2">
        {log.map((entry, i) => (
          <div
            key={i}
            className={
              entry.from === "user" ? "text-skin-accent2" : "text-skin-accent"
            }
          >
            <span className="mr-2">{entry.from === "user" ? ">" : "🤖"}</span>
            {entry.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="> enter command (e.g. github)"
          id="terminal-input"
          className="w-full mt-3 bg-transparent border-b border-skin-accent text-skin-text text-sm py-1 focus:outline-none"
        />
      </form>

      {launching && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 z-50">
          <RocketIcon className="w-10 h-10 animate-takeoff" />
        </div>
      )}
    </motion.div>
  );
}
