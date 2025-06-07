// components/sections/LiveTerminalPrompt.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const LiveTerminalPrompt = () => {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") setSubmitted(true);
  };

  return (
    <section className="bg-skin-panel border-t border-skin-accent/10 py-20 px-6 text-skin-text" id="identity">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-skin-accent mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🧠 Terminal Identity Prompt
        </motion.h2>

        <motion.div
          className="bg-skin-bg rounded-lg border border-skin-accent/30 p-6 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {submitted ? (
            <div className="text-skin-accent text-lg">
              ✅ Access granted. Welcome, <span className="font-bold">{username}</span>.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="text-skin-accent2">Run protocol to verify your identity:</label>
              <input
                type="text"
                className="px-4 py-2 rounded bg-transparent border border-skin-accent2 text-skin-accent placeholder-skin-accent/50 outline-none"
                placeholder="Enter codename..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                className="self-start px-5 py-2 border border-skin-accent text-skin-accent hover:bg-skin-accent hover:text-skin-bg rounded transition"
              >
                ▶️ Authenticate
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default LiveTerminalPrompt;
