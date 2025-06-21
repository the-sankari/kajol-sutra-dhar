import React, { useState, useEffect } from "react";

const TerminalFilterBar = ({ onUpdate }) => {
  const [command, setCommand] = useState("");
  const [error, setError] = useState("");

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const args = command.trim().split(" ");
      if (args[0] !== "filter") {
        setError("Unknown command. Try: filter --tag react");
        return;
      }

      const tagMatch = command.match(/--tag (\w+)/);
      const sortMatch = command.match(/--sort (\w+)/);
      const searchMatch = command.match(/--search ([\w-]+)/);

      const updates = {
        tag: tagMatch?.[1] || null,
        sort: sortMatch?.[1] || null,
        query: searchMatch?.[1] || "",
      };

      onUpdate(updates);
      setError("");
    }
  };

  return (
    <div className="font-mono text-sm max-w-2xl mx-auto mb-6">
      <div className="bg-black text-green-400 rounded-md px-4 py-2 shadow-md border border-green-500">
        <span className="text-skin-muted">~@user</span>{" "}
        <span className="text-skin-glow">/blogs</span> $
        <input
          className="bg-transparent border-none outline-none ml-2 w-3/4 text-green-400 placeholder-green-700"
          type="text"
          placeholder="filter --tag react --sort newest"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleCommand}
        />
      </div>
      {error && <div className="text-red-400 mt-2">{error}</div>}
    </div>
  );
};

export default TerminalFilterBar;
