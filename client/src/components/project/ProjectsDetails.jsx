import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects";
import ReactMarkdown from "react-markdown";
import { useEffect, useRef } from "react";

const ProjectDetails = () => {
  const { slug } = useParams();
  const sectionRef = useRef(null);

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-skin-accent text-xl">
        🚫 Project not found
      </div>
    );
  }

  const featuredContent = project.video ? (
    <video
      controls
      className="w-full h-[250px] md:h-[400px] object-cover rounded-xl border border-skin-accent2/20 shadow-md"
    >
      <source src={project.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img
      src={
        project.image || "https://placehold.co/1200x500?text=Project+Preview"
      }
      alt={project.name}
      className="w-full h-[250px] md:h-[400px] object-cover rounded-xl border border-skin-accent2/20 shadow-md"
    />
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-4 md:px-8 py-20 bg-skin-bg text-skin-text animate-fadeIn"
    >
      {/* Breadcrumb */}
      <div className="text-sm text-skin-accent mb-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        →{" "}
        <Link to="/projects" className="hover:underline">
          Projects
        </Link>{" "}
        → {project.name}
      </div>

      {/* Hero Content */}
      <div className="relative max-w-5xl mx-auto">
        {featuredContent}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-xl" />
        <h1 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-white drop-shadow-xl">
          {project.name}
        </h1>
      </div>

      {/* Project Info */}
      <div className="max-w-5xl mx-auto mt-12 bg-skin-panel backdrop-blur-md border border-skin-accent2/10 rounded-xl p-8 shadow-md">
        <ReactMarkdown className="prose prose-invert max-w-none text-skin-text/90 mb-6">
          {project.description}
        </ReactMarkdown>

        <div className="flex flex-wrap gap-3 mb-6">
          {project.tags?.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-skin-bg border border-skin-accent2/30 text-skin-accent2 hover:bg-skin-accent2 hover:text-skin-bg transition duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full text-sm font-medium text-skin-bg bg-skin-accent hover:scale-105 transition shadow-md"
            >
              🌐 View Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition shadow-md"
            >
              🛠 GitHub Repo
            </a>
          )}
        </div>

        <div className="mt-12">
          <Link
            to="/projects"
            className="text-skin-accent hover:underline inline-flex items-center gap-1"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
