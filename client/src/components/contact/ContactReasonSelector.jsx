import React from "react";

const reasons = ["Collaboration", "Internship", "Networking", "Just Saying Hi"];

const ContactReasonSelector = ({ selected, onSelect }) => {
  return (
    <div className="mb-6 text-center">
      <h3 className="text-sm uppercase text-skin-accent2 mb-2">
        Select Contact Reason
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
        {reasons.map((reason) => (
          <button
            key={reason}
            type="button"
            onClick={() => onSelect(reason)}
            className={`px-4 py-2 rounded-full text-sm transition font-mono border 
              ${
                selected === reason
                  ? "bg-skin-accent text-skin-bg border-skin-accent glow-button"
                  : "border-skin-accent2 text-skin-accent hover:border-skin-accent"
              }`}
          >
            {reason}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContactReasonSelector;
