import React from "react";

const IdentityScannerPanel = ({ email, reason, time, visitorId }) => {
  return (
    <div className="relative mt-12 max-w-xl mx-auto p-6 rounded-2xl bg-skin-panel border border-skin-accent2 glass overflow-hidden animate-fadeIn">
      {/* Grid Glow Background */}
      <div className="absolute inset-0 bg-grid animate-grid-glow opacity-10 pointer-events-none z-0" />

      {/* Scanline Effect */}
      <div className="absolute inset-0 animate-scanline-smooth opacity-20 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-2xl font-futuristic mb-4 drop-shadow-neon text-skin-accent">
          🧬 Identity Scan Complete
        </h2>

        <div className="space-y-2 text-sm md:text-base font-mono text-skin-text">
          <p>
            <strong>🆔 Visitor ID:</strong> {visitorId}
          </p>
          <p>
            <strong>📧 Email:</strong> {email}
          </p>
          <p>
            <strong>🎯 Reason:</strong> {reason}
          </p>
          <p>
            <strong>🕒 Timestamp:</strong> {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdentityScannerPanel;
