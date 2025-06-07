import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />
      {/* Main content area */}
      <main className="flex-grow max-w-screen container pt-16 mx-auto w-full bg-white dark:bg-quantum-bg text-black dark:text-quantum-muted transition-colors duration-300"
      style={{  }}
      >
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
