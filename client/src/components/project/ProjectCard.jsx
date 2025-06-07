// components/ProjectCard.jsx
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative bg-skin-panel border border-skin-accent2/30 rounded-2xl p-6 shadow-[0_0_25px_#00f0ffaa] transition duration-300 hover:shadow-[0_0_40px_#00f0ffaa] group"
    >
      <h3 className="text-xl font-semibold text-skin-accent2 mb-2 group-hover:underline">
        {title}
      </h3>
      <p className="text-skin-text/80 text-sm mb-3">{description}</p>
      <div className="text-xs text-skin-accent2/70 italic mb-4">
        {tech.join(" • ")}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-skin-accent hover:underline text-sm"
      >
        🔗 Visit Project
      </a>
    </motion.div>
  );
};

export default ProjectCard;
