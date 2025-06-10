import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Breadcrumb = ({ current }) => (
  <div className="text-sm text-skin-accent mb-4">
    <Link to="/">Home</Link> <span className="mx-1">→</span>{" "}
    <Link to="/projects">Projects</Link> <span className="mx-1">→</span>{" "}
    <span className="text-skin-accent2 font-medium">{current}</span>
  </div>
);

Breadcrumb.propTypes = {
  current: PropTypes.string.isRequired,
};

export default Breadcrumb;
