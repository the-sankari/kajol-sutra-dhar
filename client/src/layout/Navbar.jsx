import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle"; // make sure path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-skin-accent/30 bg-skin-bg text-skin-text transition-colors duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <span className="text-skin-accent font-futuristic text-xl tracking-wide hidden sm:inline">
            KDEV
          </span>
        </Link>

        {/* Right Side: Toggle Menu & Theme Toggle */}
        <div className="flex items-center space-x-4 md:order-2">
          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 text-skin-accent rounded-lg hover:bg-skin-panel focus:outline-none focus:ring-2 focus:ring-skin-accent md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 font-futuristic text-sm md:text-base bg-skin-bg md:bg-transparent border border-skin-panel md:border-0 rounded-lg p-4 md:p-0 shadow-md md:shadow-none">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Projects", to: "/projects" },
              { label: "Skills", to: "/skills" },
              { label: "Blog", to: "/blog" },
              { label: "Contact", to: "/contact" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block px-3 py-2 rounded-md hover:text-skin-accent hover:bg-skin-panel transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* ThemeToggle in mobile menu */}
            <li className="md:hidden mt-3">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
