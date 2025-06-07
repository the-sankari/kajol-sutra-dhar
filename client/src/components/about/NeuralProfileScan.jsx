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
    <div className="relative flex flex-col items-center justify-center gap-10 py-20 px-4">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-grid bg-center bg-[length:40px_40px] animate-grid-glow" />
      </div>

      {/* Scan Trigger */}
      {!started && (
        <motion.button
          onClick={triggerScan}
          onMouseEnter={triggerScan}
          className="px-6 py-3 rounded-md bg-black/70 text-skin-accent border border-skin-accent2 font-mono shadow-lg shadow-cyan-400/20 hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⟶ Begin Neural Scan
        </motion.button>
      )}

      {/* Terminal + ID Card Overlay */}
      {started && (
        <div className="relative w-full max-w-xl">
          {/* ID Card Overlay */}
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute  left-1/2 -translate-x-1/2 z-20 w-[280px] h-[160px] bg-gradient-to-br from-cyan-500/10 to-sky-500/10 border border-cyan-400/40 backdrop-blur-md rounded-xl p-3 shadow-[0_0_30px_#00f0ff44] animate-holo-id flex items-center gap-4"
              style={{
                bottom: "100%",
                transform: "translate(-50%)",
                pointerEvents: "none",
              }}
            >
              <div className="w-20 h-20 rounded-md overflow-hidden border-2 border-cyan-300">
                <img
                  src="https://avatars.githubusercontent.com/u/88396582?v=4"
                  alt="ID Avatar"
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(0.5) brightness(0.5)" }}
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

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative z-10 bg-skin-panel p-4 pt-24 rounded-lg border border-skin-accent2 font-mono text-skin-accent text-sm shadow-inner shadow-[inset_0_0_20px_#00f0ff33] backdrop-blur-md text-center"
          >
            {!revealed ? (
              <>
                <span className="block mb-1">&gt; Scanning ID card...</span>
                <span className="block mb-1">
                  &gt; Authenticating neural signature...
                </span>
                <span className="block mb-1">&gt; Please stand by...</span>
              </>
            ) : (
              <>
                <span className="block mb-1">&gt; Identity confirmed.</span>
                <span className="block mb-1">&gt; Access granted.</span>
                <span className="block mt-3">
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
                </span>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default NeuralProfileScan;
