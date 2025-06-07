import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2023",
    title: "Started Full-Stack Web Dev",
    description:
      "Joined Business College Helsinki and started mastering React, Tailwind, and Drupal.",
  },
  {
    year: "2024",
    title: "Internship at Unelma Platform",
    description:
      "Worked on Unelma Browser project, gaining real-world development experience.",
  },
  {
    year: "2025",
    title: "Graduation & Expansion",
    description:
      "Completed degree and expanded into freelance and AI-based interfaces.",
  },
  {
    year: "∞",
    title: "Future Kajol.AI",
    description:
      "Continue building futuristic digital systems. Always evolving.",
  },
];

const QuantumTimeline = () => {
  return (
    <section
      className="py-24 px-4 md:px-10 bg-skin-bg text-skin-text border-t border-skin-accent/10"
      id="timeline"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-skin-accent mb-12 text-center">
          🧭 Quantum Timeline
        </h2>

        <div className="relative border-l-2 border-skin-accent pl-6 ml-3">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-start gap-4">
                {/* Dot */}
                <div className="w-5 h-5 mt-1 bg-skin-bg border-2 border-skin-accent rounded-full shadow-md flex-shrink-0" />

                {/* Text content */}
                <div>
                  <div className="text-skin-accent2 font-semibold text-sm mb-1">
                    [{item.year}]
                  </div>
                  <div className="text-xl font-semibold mb-1">{item.title}</div>
                  <div className="text-sm text-skin-text/80">
                    {item.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuantumTimeline;
