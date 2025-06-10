import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-skin-accent text-xl">
        🚫 Project not found
      </div>
    );
  }

  // Related projects based on shared tags
  const related = projects
    .filter(
      (p) => p.slug !== slug && p.tags.some((tag) => project.tags.includes(tag))
    )
    .slice(0, 3);

  const isVideo = project.media?.endsWith(".mp4") || false;

  return (
    <section className="min-h-screen px-4 md:px-8 py-20 bg-skin-bg text-skin-text">
      {/* Breadcrumb */}
      <div className="text-sm text-skin-accent mb-4">
        <Link to="/">Home</Link> <span className="mx-1">→</span>{" "}
        <Link to="/projects">Projects</Link> <span className="mx-1">→</span>{" "}
        <span className="text-skin-accent2 font-medium">{project.name}</span>
      </div>

      {/* Hero Media */}
      <div className="relative max-w-5xl mx-auto">
        {isVideo ? (
          <video
            src={project.media}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[250px] md:h-[400px] object-cover rounded-xl shadow-md hover:shadow-lg border border-skin-accent2/20"
          />
        ) : (
          <img
            src={
              project.image ||
              "https://placehold.co/1200x500?text=Project+Preview"
            }
            alt={project.name}
            loading="lazy"
            className="w-full h-[250px] md:h-[400px] object-cover rounded-xl shadow-md hover:shadow-lg border border-skin-accent2/20"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-xl" />
        <h1 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-white drop-shadow-xl">
          {project.name}
        </h1>
      </div>

      {/* Project Info */}
      <div className="max-w-5xl mx-auto mt-12 bg-skin-panel backdrop-blur-md rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
        <ReactMarkdown className="prose prose-invert max-w-none mb-6 text-skin-text/90">
          {project.description}
        </ReactMarkdown>

        <div className="flex flex-wrap gap-3 mb-6">
          {project.tags?.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-skin-bg border border-skin-accent2/50 text-skin-accent2 hover:bg-skin-accent2 hover:text-skin-bg transition duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full text-sm font-medium text-skin-bg bg-skin-accent hover:scale-105 transition-shadow shadow-md hover:shadow-lg"
            >
              🌐 View Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition-shadow shadow-md hover:shadow-lg"
            >
              🛠 GitHub Repo
            </a>
          )}
        </div>

        {/* Share */}
        <div className="mb-10">
          <h3 className="font-semibold text-skin-accent2 mb-2">
            Share this project:
          </h3>
          <div className="flex gap-3">
            <a
              href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-skin-accent underline"
            >
              Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-skin-accent underline"
            >
              Facebook
            </a>
            <a
              href={`mailto:?subject=Check this project&body=${window.location.href}`}
              className="text-sm text-skin-accent underline"
            >
              Email
            </a>
          </div>
        </div>

        {/* Related Projects */}
        {related.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-skin-accent mb-4">
              🔁 Related Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {related.map((p, idx) => (
                <Link
                  key={idx}
                  to={`/projects/${p.slug}`}
                  className="block bg-skin-panel border border-skin-accent2/20 rounded-lg p-4 hover:shadow-md hover:shadow-skin-accent2 transition"
                >
                  <h4 className="text-skin-accent2 font-medium mb-1">
                    {p.name}
                  </h4>
                  <p className="text-sm text-skin-text/80 line-clamp-2">
                    {p.description?.slice(0, 100)}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back */}
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
