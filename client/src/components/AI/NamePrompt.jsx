import { useState } from "react";
import { LuFingerprint } from "react-icons/lu";

const NamePrompt = ({ onIdentify }) => {
  const [name, setName] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    if (name.trim()) {
      setConfirmed(true);
      onIdentify?.(name);
    }
  };

  return (
    <div className="bg-skin-panel border border-skin-accent2 rounded-lg p-6 shadow-xl text-center max-w-md mx-auto">
      <h2 className="text-skin-accent text-xl mb-4 flex items-center justify-center gap-2">
        <LuFingerprint className="text-skin-accent2" /> Neural Identity Prompt
      </h2>

      {!confirmed ? (
        <>
          <input
            type="text"
            placeholder="Enter Codename..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-skin-accent2 bg-transparent text-skin-text rounded outline-none placeholder-skin-accent/40 caret-skin-accent2"
          />
          <button
            onClick={handleConfirm}
            className="px-4 py-2 border border-skin-accent text-skin-accent hover:bg-skin-accent hover:text-skin-bg transition rounded shadow"
          >
            Initiate Sequence
          </button>
        </>
      ) : (
        <p className="text-skin-accent text-lg font-mono">
          Identity: <span className="text-skin-accent2">{name}</span> confirmed ✅
        </p>
      )}
    </div>
  );
};

export default NamePrompt;
