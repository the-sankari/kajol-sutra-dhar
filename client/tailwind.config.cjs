module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        skin: {
          bg: "var(--bg)",
          text: "var(--text)",
          accent: "var(--accent)",
          accent2: "var(--accent-secondary)",
          panel: "var(--panel)",
        },
      },
      fontFamily: {
        futuristic: ['"Share Tech Mono"', "monospace"],
      },
      boxShadow: {
        "glow-sm": "0 0 10px var(--glow-color)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            opacity: 1,
            filter: "drop-shadow(0 0 4px var(--glow-color))",
          },
          "50%": {
            opacity: 0.7,
            filter: "drop-shadow(0 0 8px var(--glow-color))",
          },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 2.4s ease-in-out infinite",
        "ping-once": "ping 0.5s ease-in-out",
        "fade-in": "fadeIn 0.5s ease-in-out both",
      },
    },
  },
  plugins: [],
};
