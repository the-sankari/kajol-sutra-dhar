import { useState, useRef } from "react";

const tabs = ["Tech Stack", "Gallery", "Challenges"];

const ProjectTabs = ({ tech, gallery = [], challenges = [] }) => {
  const [activeTab, setActiveTab] = useState("Tech Stack");
  const tabsRef = useRef([]);

  const handleKey = (e, idx) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      tabsRef.current[(idx + 1) % tabs.length].focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      tabsRef.current[(idx - 1 + tabs.length) % tabs.length].focus();
    }
  };

  return (
    <div className="mt-12">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Project Details Tabs"
        className="flex flex-wrap gap-3 mb-6"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab}
            ref={(el) => (tabsRef.current[i] = el)}
            onClick={() => setActiveTab(tab)}
            onKeyDown={(e) => handleKey(e, i)}
            role="tab"
            aria-selected={activeTab === tab}
            className={`group px-4 py-2 rounded-full text-sm font-medium outline-none transition-all duration-300
              focus-visible:ring-2 ring-offset-2 ring-skin-accent
              ${
                activeTab === tab
                  ? "bg-skin-accent text-skin-bg shadow ring-2 ring-skin-accent"
                  : "border border-skin-accent2 text-skin-accent2 hover:ring-1 hover:ring-skin-accent2/70"
              }
            `}
          >
            <span
              className={`inline-block transition-colors duration-300 group-hover:text-skin-accent2 ${
                activeTab === tab ? "text-skin-bg" : ""
              }`}
            >
              {tab}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        role="tabpanel"
        className="bg-skin-panel border border-skin-accent2/20 rounded-xl p-6 transition-all duration-300"
      >
        {activeTab === "Tech Stack" && (
          <div className="flex flex-wrap gap-3">
            {tech.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full border border-skin-accent2 text-skin-accent2 bg-skin-bg"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {activeTab === "Gallery" && (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {gallery.length === 0 && (
              <p className="text-skin-text/60 italic">No gallery items yet.</p>
            )}
            {gallery.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Gallery ${idx}`}
                className="w-full rounded-lg border border-skin-accent2/10 object-cover"
                loading="lazy"
              />
            ))}
          </div>
        )}

        {activeTab === "Challenges" && (
          <ul className="list-disc pl-5 text-skin-text/90 space-y-2">
            {challenges.length === 0 && (
              <li className="text-skin-text/60 italic">
                No challenges listed.
              </li>
            )}
            {challenges.map((c, idx) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectTabs;
