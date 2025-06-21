import React from "react";

const IdentityScannerPanel = ({ email, reason, time, visitorId, name }) => {
  const info = [
    { label: "🆔 Visitor ID", value: visitorId?.slice(-3) || "Not provided" },
    { label: "👤 Name", value: name || "Unknown" },
    { label: "📧 Email", value: email },
    { label: "🎯 Reason", value: reason },
    { label: "🕒 Timestamp", value: time },
  ];

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

        <div className="space-y-4 text-sm md:text-base font-mono text-skin-text text-left max-w-md mx-auto">
          <p className="text-skin-accent2 text-xs leading-relaxed">
            Your identity has been successfully scanned and recorded. This
            information helps us maintain a secure and personalized experience.
            Please ensure the details below are correct. If you have any
            concerns, feel free to reach out.
          </p>

          <div className="bg-skin-panel rounded-lg shadow-md p-4 space-y-2">
            {info.map(({ label, value }, index) => (
              <div
                key={index}
                className="flex justify-between items-start gap-2 border-b border-skin-base last:border-none pb-1"
              >
                <span className="text-skin-accent font-semibold">{label}:</span>
                <span className="text-skin-text break-words text-left">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityScannerPanel;
