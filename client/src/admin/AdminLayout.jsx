import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { logout } from "./auth";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login");
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex">
      {/* Sidebar */}
      <div
        className={`fixed sm:relative z-50 h-full w-64 bg-gradient-to-b from-gray-900 to-black shadow-2xl transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full p-6 flex flex-col justify-between">
          <SidebarNav
            pathname={pathname}
            isActive={isActive}
            handleLogout={handleLogout}
            close={() => setSidebarOpen(false)}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="fixed top-0 left-0 sm:left-64 w-full sm:w-[calc(100%-16rem)] h-16 bg-gradient-to-r from-black to-gray-800 border-b border-gray-700 flex items-center justify-between px-4 sm:px-6 z-40">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="sm:hidden p-2 rounded-md bg-gray-700 hover:bg-gray-600"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h1 className="text-xl font-bold tracking-wide text-cyan-400">
            ⚙️ Admin Panel
          </h1>
        </header>

        <main className="flex-1 overflow-y-auto pt-20 p-6 bg-black bg-opacity-90">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function SidebarNav({ pathname, isActive, handleLogout, close }) {
  const links = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/blogs", label: "Blogs" },
    { href: "/admin/projects", label: "Projects" },
    { href: "/admin/messages", label: "Messages" },
  ];

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-cyan-400">⚡ Control Hub</h2>
        <nav className="space-y-3">
          {links.map(({ href, label }) => (
            <SidebarLink
              key={href}
              href={href}
              label={label}
              active={isActive(href)}
              onClick={close}
            />
          ))}
        </nav>
      </div>
      <button
        onClick={() => {
          handleLogout();
          if (close) close();
        }}
        className="mt-6 w-full bg-red-600 hover:bg-red-700 py-2 rounded text-sm font-semibold"
      >
        🔒 Logout
      </button>
    </div>
  );
}

function SidebarLink({ href, label, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        active
          ? "bg-cyan-700/40 text-cyan-300"
          : "text-white hover:bg-gray-700/50 hover:text-cyan-300"
      }`}
    >
      {label}
    </a>
  );
}
