import React from "react";
import { Mail, Linkedin, Github, ClipboardCheck } from "lucide-react";
import { toast } from "react-toastify";

const portals = [
  {
    label: "Encrypted Capsule",
    icon: <Mail className="w-5 h-5 mr-2" />,
    url: "mailto:kajol.sutradhar777@gmail.com",
    copyText: "kajol.sutradhar777@gmail.com",
    tooltip: "Click to copy email",
  },
  {
    label: "Frequency Bridge",
    icon: <Linkedin className="w-5 h-5 mr-2" />,
    url: "https://www.linkedin.com/in/kajol-sutra-dhar/",
    tooltip: "Visit LinkedIn",
  },
  {
    label: "Codebase Node",
    icon: <Github className="w-5 h-5 mr-2" />,
    url: "https://github.com/the-sankari",
    tooltip: "Visit GitHub",
  },
];

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  toast.success("📋 Email copied!");
};

const EncryptedContactPortals = () => {
  return (
    <div className="mt-10 text-center animate-fadeIn">
      <h3 className="text-skin-accent text-xs md:text-sm uppercase mb-4 tracking-wider">
        Encrypted Contact Portals
      </h3>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 text-skin-text">
        {portals.map((portal, index) => (
          <div key={index} className="relative group">
            <a
              href={portal.url}
              onClick={(e) => {
                if (portal.copyText) {
                  e.preventDefault();
                  copyToClipboard(portal.copyText);
                }
              }}
              target="_blank"
              rel="noreferrer"
              className="glow-button flex items-center justify-center px-4 py-2 rounded-full font-mono text-sm hover:bg-skin-accent hover:text-skin-bg transition-all duration-300 ease-in-out w-[240px] sm:w-auto"
            >
              {portal.icon}
              {portal.label}
            </a>

            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs text-skin-accent2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {portal.tooltip}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EncryptedContactPortals;
