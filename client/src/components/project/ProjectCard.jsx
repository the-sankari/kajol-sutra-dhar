import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProject } from "../../features/projects/projectsSlice.js";

const ProjectCard = ({
  title,
  description,
  tech,
  github,
  live,
  image,
  slug,
}) => {
  const dispatch = useDispatch();
  const fallbackImage = "https://placehold.co/400x200?text=Project+Preview";

  return (
    <div
      className="relative min-h-[500px] flex flex-col bg-skin-panel border border-skin-accent2/30 rounded-2xl overflow-hidden
                 shadow-[0_0_25px_#00f0ffaa] hover:shadow-[0_0_40px_#00f0ffaa] transition duration-300 group"
    >
      <img
        src={image || fallbackImage}
        alt={`${title} thumbnail`}
        className="w-full h-40 object-cover border-b border-skin-accent2/20"
      />

      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <h3 className="text-xl font-semibold text-skin-accent2 mb-2 group-hover:underline">
            {title}
          </h3>

          <p className="text-skin-text/80 text-sm mb-3 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 text-xs text-skin-accent2/70 italic mb-6">
            {tech.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-skin-bg border border-skin-accent2/40 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs rounded-md border border-skin-accent2 text-skin-accent2
                         hover:bg-skin-accent2 hover:text-skin-bg transition duration-200"
            >
              🌐 Live Site
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs rounded-md border border-skin-accent2 text-skin-accent2
                         hover:bg-skin-accent2 hover:text-skin-bg transition duration-200"
            >
              🛠 GitHub
            </a>
          )}
          {slug && (
            <Link
              to={`/projects/${slug}`}
              onClick={() =>
                dispatch(
                  setSelectedProject({
                    title,
                    description,
                    tech,
                    github,
                    live,
                    image,
                    slug,
                  })
                )
              }
              className="px-4 py-2 text-xs rounded-md border border-skin-accent2 text-skin-accent2
                         hover:bg-skin-accent2 hover:text-skin-bg transition duration-200"
            >
              🔍 More Info
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
