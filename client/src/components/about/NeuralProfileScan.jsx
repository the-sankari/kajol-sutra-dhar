import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const NeuralProfileScan = () => {
  const [started, setStarted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const triggerScan = () => {
    if (!started) {
      setStarted(true);
      setTimeout(() => {
        setRevealed(true);
      }, 3500);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-24 px-4 rounded-2xl bg-white/5 backdrop-blur-md transition-all duration-700 overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-cyan-500/30 before:to-sky-500/10 before:animate-glow-ring before:z-[-1]">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-grid bg-center bg-[length:40px_40px] animate-grid-glow" />
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl text-center font-bold text-skin-accent font-futuristic tracking-widest mb-8">
        Neural Profile Scan
      </h2>

      {/* Trigger Button */}
      {!started && (
        <motion.button
          onClick={triggerScan}
          onMouseEnter={triggerScan}
          className="px-6 py-3 rounded-md bg-black/70 text-skin-accent border border-skin-accent2 font-mono shadow-lg hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⟶ Begin Neural Scan
        </motion.button>
      )}

      {/* Terminal + ID Card */}
      {started && (
        <div className="mt-10 w-full max-w-xl flex flex-col items-center relative">
          {/* ID Card */}
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 w-[280px] md:w-[320px] h-[170px] bg-gradient-to-br from-cyan-500/10 to-sky-500/10 border border-cyan-400/40 backdrop-blur-md rounded-xl p-4 shadow-[0_0_30px_#00f0ff44] animate-holo-id flex items-center gap-4 mb-8"
            >
              <div className="w-20 h-20 rounded-md overflow-hidden border-2 border-cyan-300 shrink-0">
                <img
                  src="https://avatars.githubusercontent.com/u/88396582?v=4"
                  alt="ID Avatar"
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(0.5) brightness(0.6)" }}
                />
              </div>
              <div className="text-cyan-200 font-mono text-xs space-y-1 text-left">
                <p className="text-sm text-cyan-300">Kajol Sutra Dhar</p>
                <p>Full-Stack Developer</p>
                <p>React · Tailwind · Firebase · Drupal</p>
                <p className="italic text-cyan-100/80 pt-1">Status: Verified</p>
              </div>
            </motion.div>
          )}

          {/* Terminal Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative z-10 w-full bg-skin-panel p-6 rounded-lg border border-skin-accent2 font-mono text-skin-accent text-sm shadow-inner text-center"
          >
            {!revealed ? (
              <>
                <p className="mb-2">&gt; Scanning ID card...</p>
                <p className="mb-2">&gt; Authenticating neural signature...</p>
                <p>&gt; Please stand by...</p>
              </>
            ) : (
              <>
                <p className="mb-2">&gt; Identity confirmed.</p>
                <p className="mb-2">&gt; Access granted.</p>
                <p className="mt-3">
                  &gt;{" "}
                  <Typewriter
                    words={[
                      "Subject: Kajol Sutra Dhar",
                      "Role: Full-Stack Developer",
                      "Core: React · Tailwind · Firebase · Drupal",
                      "Status: Actively building the future.",
                    ]}
                    loop={1}
                    cursor
                    typeSpeed={40}
                    deleteSpeed={30}
                    delaySpeed={1000}
                  />
                </p>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NeuralProfileScan;
