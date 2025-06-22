import { Link } from "react-router-dom";

export default function SidebarLink({
  to,
  label,
  icon: Icon,
  active,
  onClick,
  badge,
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 group ${
        active
          ? "bg-cyan-700/40 text-cyan-300"
          : "text-white hover:bg-gray-700/50 hover:text-cyan-300"
      }`}
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon size={18} className="shrink-0" />}
        {label}
      </div>

      {badge && (
        <span className="ml-2 bg-cyan-600 text-white text-xs px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
}
