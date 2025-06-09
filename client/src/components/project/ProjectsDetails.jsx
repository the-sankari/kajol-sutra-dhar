import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-skin-accent text-xl">
        🚫 Project not found
      </div>
    );
  }

  return (
    <section
      className="min-h-screen px-6 py-16 max-w-3xl mx-auto text-skin-text 
             opacity-0 animate-fadeIn"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-skin-accent2 mb-6">
        {project.name}
      </h1>

      <img
        src={project.image}
        alt={project.name}
        className="w-full h-64 object-cover rounded-lg border border-skin-accent2/20 mb-6"
      />

      <p className="text-base mb-4 leading-relaxed text-skin-text/90">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full border border-skin-accent2 text-skin-accent2"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-sm rounded-md border border-skin-accent2 text-skin-accent2 hover:bg-skin-accent2 hover:text-skin-bg"
          >
            🌐 Live Site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-sm rounded-md border border-skin-accent2 text-skin-accent2 hover:bg-skin-accent2 hover:text-skin-bg"
          >
            🛠 GitHub
          </a>
        )}
      </div>

      <div className="mt-12">
        <Link
          to="/projects"
          className="text-skin-accent underline hover:text-skin-accent2"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetails;
