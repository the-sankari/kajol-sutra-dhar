import { motion } from "framer-motion";
import bchLogo from "../../assets/icons/bc.svg";
import druidLogo from "../../assets/icons/druid.svg";
const resumeData = [
  {
    title: "Intern Developer",
    org: "Unelma Platform",
    year: "2025",
    logo: "https://unelmaplatforms.com/assets/uploads/media-uploader/unelma-platforms-11670581545.jpg",
    description:
      "Worked on Unelma Browser UI/UX, implemented tab system and sidebar layout in dark mode.",
  },
  {
    title: "Full-Stack Student",
    org: "Business College Helsinki",
    year: "2024–2025",
    logo: bchLogo,
    description:
      "Learning React, Tailwind, Drupal, Firebase, and building full-stack apps as part of my coursework.",
  },
  {
    title: "Project: Druid.fi Website Renewal",
    org: "School & Internship Project",
    year: "2024",
    logo: druidLogo,
    description:
      "Rebuilt Druid.fi using headless Drupal + React + Tailwind. Integrated Mautic for personalization. Built a JSON:API-driven frontend with modular content and segment-based targeting.",
  },
];

export default function QuantumResume() {
  return (
    <div className="relative py-20 px-6 bg-skin-panel rounded-2xl transition-all duration-700">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl text-center font-bold text-skin-accent font-futuristic tracking-widest mb-16">
        Quantum Resume Timeline
      </h2>

      <div className="relative space-y-16 before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-[2px] before:bg-cyan-500/40 before:-translate-x-1/2">
        {resumeData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative max-w-xl mx-auto px-6 py-8 rounded-xl bg-white/5 backdrop-blur-md text-center"
          >
            {/* Glowing Dot */}
            <span className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_15px_#00f0ff] z-10" />
            {item.logo && (
              <img
                src={item.logo}
                alt={item.org}
                className="w-15 h-10 mx-auto mb-3 object-contain"
              />
            )}

            <h3 className="text-lg font-semibold text-skin-accent font-mono">
              {item.title}
            </h3>
            <p className="text-sm text-skin-text/80">{item.org}</p>
            <p className="text-xs text-skin-text/60 mb-2">{item.year}</p>
            <p className="text-skin-text text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
