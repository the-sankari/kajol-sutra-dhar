import { projects as rawProjects } from "../data/projects";
import ProjectCard from "../components/project/ProjectCard";

const Projects = () => {
  const projects = rawProjects.map((p) => ({
    title: p.name,
    description: p.description,
    tech: p.tags,
    github: p.github,
    live: p.live || "",
    image: p.image,
  }));

  return (
    <section className="min-h-screen px-6 py-16 bg-skin-bg text-skin-text">
      <h1 className="text-4xl font-bold text-center text-skin-accent2 mb-12">
        🚀 Projects
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
