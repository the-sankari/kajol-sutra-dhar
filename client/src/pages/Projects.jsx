// ✅ Updated Projects.jsx with filter and slug routing
import { useState } from "react";
import { projects as rawProjects } from "../data/projects";
import ProjectCard from "../components/project/ProjectCard";
import ProjectFilterBar from "../components/project/ProjectFilterBAr";

const Projects = () => {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects =
    activeTag === "All"
      ? rawProjects
      : rawProjects.filter((p) => p.tags.includes(activeTag));

  return (
    <section className="min-h-screen px-6 py-16 bg-skin-bg text-skin-text">
      <h1 className="text-4xl font-bold text-center text-skin-accent2 mb-8">
        🚀 Projects
      </h1>

      <ProjectFilterBar
        projects={rawProjects}
        onFilter={(tag) => setActiveTag(tag)}
      />

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.name}
            description={project.description}
            tech={project.tags}
            github={project.github}
            live={project.live || ""}
            image={project.image}
            slug={project.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
