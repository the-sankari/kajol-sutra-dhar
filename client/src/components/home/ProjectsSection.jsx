// sections/ProjectsSection.jsx

import ProjectCard from "../project/ProjectCard";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "NeuralBlog AI",
    description: "A headless blog engine with real-time comment analysis.",
    tech: ["Next.js", "Tailwind", "Supabase", "OpenAI"],
    link: "https://example.com/neuralblog",
  },
  {
    title: "HoloWeather",
    description: "Futuristic weather visualizer using hologram-inspired UI.",
    tech: ["React", "Three.js", "GraphQL"],
    link: "https://example.com/holoweather",
  },
  {
    title: "QuantumChat",
    description: "Encrypted P2P messaging protocol with quantum UI theme.",
    tech: ["Vue", "Socket.io", "Vite"],
    link: "https://example.com/quantumchat",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects-section"
      className="py-24 px-6 max-w-6xl mx-auto relative"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl text-skin-accent font-bold mb-12 text-center">
        🛰️ Projects From The Future
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-16 flex justify-center">
        <Link
          to="/projects"
          className="relative px-8 py-3 rounded-lg border border-skin-accent2 text-skin-accent2 font-medium tracking-wide
                     hover:bg-skin-accent2 hover:text-skin-bg transition duration-300
                     shadow-[0_0_10px_#00f0ffaa] hover:shadow-[0_0_20px_#00f0ffaa]"
        >
          🔭 See More Projects
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2/3 h-[2px] bg-skin-accent2 blur-sm opacity-50 animate-pulse" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
