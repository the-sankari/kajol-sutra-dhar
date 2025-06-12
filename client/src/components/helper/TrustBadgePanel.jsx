import React from "react";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const TrustBadgePanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group max-w-xl mx-auto mt-10 rounded-xl glass p-5 border border-skin-accent2 overflow-hidden shadow-lg"
    >
      {/* Hover Scanline Beam */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
        <div className="w-full h-20 bg-cyan-300/10 blur-sm group-hover:animate-scanline-smooth" />
      </div>

      {/* Shield Title */}
      <div className="flex items-center justify-center mb-2 gap-2 text-skin-accent drop-shadow-neon relative z-20">
        <ShieldCheck className="w-6 h-6 animate-pulse-fast" />
        <span className="font-bold uppercase text-sm tracking-wider">
          Trust Badge
        </span>
      </div>

      {/* Promise Message */}
      <p className="text-sm text-skin-text opacity-90 text-center z-20 relative">
        Neural inbox activated. <br />
        Response ETA: <strong>1 Earth day</strong>. <br />
        Spam firewall engaged.
      </p>

      {/* Border Glow & Background Pulse */}
      <div className="absolute inset-0 pointer-events-none rounded-xl border border-cyan-400 animate-pulse-slow z-0" />
      <div className="absolute inset-0 rounded-xl bg-cyan-400 opacity-5 animate-grid-glow pointer-events-none z-0" />
    </motion.div>
  );
};

export default TrustBadgePanel;
