// src/components/common/ActionButtons.jsx
import PropTypes from "prop-types";

const ActionButtons = ({ live, github }) => (
  <div className="flex flex-wrap gap-4 mb-10">
    {live && (
      <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className="px-5 py-2 rounded-full text-sm font-medium text-skin-bg bg-skin-accent hover:scale-105 transition shadow"
      >
        🌐 View Live
      </a>
    )}
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition shadow"
      >
        🛠 GitHub Repo
      </a>
    )}
  </div>
);

ActionButtons.propTypes = {
  live: PropTypes.string,
  github: PropTypes.string,
};

export default ActionButtons;
