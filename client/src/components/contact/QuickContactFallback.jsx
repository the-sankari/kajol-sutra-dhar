import React from "react";
import { HiMiniCursorArrowRays } from "react-icons/hi2";

const QuickContactFallback = () => {
  return (
    <div className="mt-6 text-center animate-fadeIn space-y-4">
      <p className="font-futuristic text-xs text-skin-accent2">
        &gt; awaiting identity confirmation... secure portals disabled.
      </p>

      <p className="text-xs text-skin-accent2 font-futuristic">
        Prefer not to fill the form? <br />
        <HiMiniCursorArrowRays className="inline text-skin-accent mr-1 animate-pulse" />
        Try{" "}
        <a href="#terminal-input" className="text-skin-accent hover:underline">
          terminal commands
        </a>{" "}
        instead.
      </p>
    </div>
  );
};

export default QuickContactFallback;
