import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RelatedProjects = ({ related }) => {
  if (!related?.length) return null;

  return (
    <div className="mt-16">
      <h3 className="text-xl font-semibold text-skin-accent mb-4">
        🔁 Related Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {related.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="block bg-skin-panel border border-skin-accent2/10 rounded-lg p-4 hover:shadow-md transition"
          >
            <h4 className="text-skin-accent2 font-medium mb-1">
              {project.name}
            </h4>
            <p className="text-sm text-skin-text/80 line-clamp-2">
              {project.description?.slice(0, 100)}...
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

RelatedProjects.propTypes = {
  related: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default RelatedProjects;
