// components/Footer.jsx

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-skin-panel border-t border-skin-accent/20 text-skin-text py-10 mt-20">
      <div className="container mx-auto px-6 text-center space-y-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kajol Sutra Dhar. All rights
          reserved.
        </p>

        <p className="text-sm">
          🛠️ Built with
          <a
            href="https://reactjs.org/"
            className="text-skin-accent hover:underline mx-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          +
          <a
            href="https://tailwindcss.com/"
            className="text-skin-accent hover:underline mx-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          + Future Imagination ✨
        </p>

        <div className="flex justify-center gap-4 text-skin-accent2 text-xl">
          <a
            href="https://github.com/the-sankari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-skin-accent transition"
          >
            <i className="ri-github-line"></i>
          </a>
          <a
            href="https://linkedin.com/in/kajol-sutra-dhar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-skin-accent transition"
          >
            <i className="ri-linkedin-line"></i>
          </a>
          <Link to="/contact" className="hover:text-skin-accent transition">
            <i className="ri-mail-line"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
