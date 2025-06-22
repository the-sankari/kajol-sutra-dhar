import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { logout } from "../auth";
import SidebarNav from "./SidebarNav";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login");
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex">
      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 sm:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed sm:relative z-50 h-full w-64 bg-gradient-to-b from-gray-900 to-black shadow-2xl transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full p-6 flex flex-col justify-between">
          <SidebarNav
            onLogout={handleLogout}
            onLinkClick={() => setSidebarOpen(false)}
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
