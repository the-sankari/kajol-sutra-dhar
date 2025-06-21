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
        "neon-cyan": "0 0 10px #00f0ff, 0 0 20px #00f0ff",
        "neon-purple": "0 0 10px #ff00ff, 0 0 20px #ff00ff",
        "neon-glow":
          "0 0 8px rgba(0, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 0.3)",
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
        rocket: {
          "0%": { transform: "translate(0, 0)", opacity: "1" },
          "100%": { transform: "translate(200px, -200px)", opacity: "0" },
        },
        glowRing: {
          "0%, 100%": { opacity: 0.2, transform: "scale(1)" },
          "50%": { opacity: 0.5, transform: "scale(1.03)" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 2.4s ease-in-out infinite",
        "ping-once": "ping 0.5s ease-in-out",
        "fade-in": "fadeIn 0.5s ease-in-out both",
        rocket: "rocket 5s ease-out forwards",
        "glow-ring": "glowRing 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
