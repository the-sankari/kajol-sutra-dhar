import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-skin-accent/30 bg-skin-bg text-skin-text transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-skin-accent font-futuristic text-xl tracking-wide"
        >
          KDEV
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 font-futuristic text-sm md:text-base items-center">
            {menuItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="hover:text-skin-accent transition"
                  onClick={() => {
                    if (item.to === "/blog") {
                      // Reset filters from URL
                      window.history.pushState({}, "", "/blog");
                    }
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center p-2 text-skin-accent rounded-lg hover:bg-skin-panel focus:outline-none focus:ring-2 focus:ring-skin-accent"
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

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-skin-bg/70 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col absolute top-16 left-4 right-4 bg-skin-bg border border-skin-panel rounded-lg p-6 shadow-lg z-50 md:hidden`}
      >
        <ul className="flex flex-col space-y-4 font-futuristic text-sm">
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="block px-3 py-2 rounded-md hover:text-skin-accent hover:bg-skin-panel transition"
                onClick={() => {
                  if (item.to === "/blog") {
                    window.history.pushState({}, "", "/blog");
                  }
                  setIsOpen(false);
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
