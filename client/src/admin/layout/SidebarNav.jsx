import { useLocation } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  LayoutDashboard,
  FileText,
  FolderKanban,
  Mail,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function SidebarNav({ onLogout, onLinkClick }) {
  const { pathname } = useLocation();
  const [contentOpen, setContentOpen] = useState(true); // Collapsible group

  const mainLinks = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/messages", label: "Messages", icon: Mail },
  ];

  const contentLinks = [
    { href: "/admin/blogs", label: "Blogs", icon: FileText },
    { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  ];

  const isGroupActive = contentLinks.some((link) =>
    pathname.startsWith(link.href)
  );

  return (
    <div className="flex flex-col justify-start h-full">
      {/* Mobile top bar with close button */}
      <div className="flex justify-between items-center mb-6 sm:hidden">
        <button
          onClick={onLinkClick}
          className="text-gray-400 hover:text-white p-1 rounded-md"
        >
          <X size={22} />
        </button>
        <h2 className="text-xl font-bold text-cyan-400">⚡ Control Hub</h2>
      </div>

      {/* Desktop title */}
      <h2 className="text-2xl font-bold mb-6 text-cyan-400 hidden sm:block">
        ⚡ Control Hub
      </h2>

      {/* Navigation */}
      <nav className="space-y-3">
        {/* Static links */}
        {mainLinks.map((link) => (
          <SidebarLink
            key={link.href}
            {...link}
            active={pathname.startsWith(link.href)}
            onClick={onLinkClick}
          />
        ))}

        {/* Collapsible group: Content */}
        <div>
          <button
            onClick={() => setContentOpen(!contentOpen)}
            className={`flex items-center justify-between w-full px-4 py-2 text-sm font-semibold transition-colors ${
              isGroupActive
                ? "text-cyan-300"
                : "text-cyan-400 hover:text-cyan-300"
            }`}
          >
            <span className="flex items-center gap-2">
              <FolderKanban size={16} />
              Content
            </span>
            {contentOpen ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>

          <AnimatePresence initial={false}>
            {contentOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pl-6 overflow-hidden space-y-2 mt-2"
              >
                {contentLinks.map((link) => (
                  <SidebarLink
                    key={link.href}
                    {...link}
                    active={pathname.startsWith(link.href)}
                    onClick={onLinkClick}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <div className="flex-grow" />

      {/* Logout button */}
      <button
        onClick={() => {
          onLogout();
          if (onLinkClick) onLinkClick();
        }}
        className="mt-6 w-full bg-red-600 hover:bg-red-700 py-2 rounded text-sm font-semibold"
      >
        🔒 Logout
      </button>
    </div>
  );
}
