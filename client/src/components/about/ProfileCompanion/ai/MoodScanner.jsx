import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

const moods = ["Focused", "Learning", "Building", "Glitching", "Ready"];
const colors = [
  "text-cyan-400",
  "text-purple-400",
  "text-green-400",
  "text-pink-400",
  "text-yellow-400",
];

export default function MoodScanner() {
  const [index, setIndex] = useState(0);
  const [soundUrl, setSoundUrl] = useState("");
  const [muted, setMuted] = useState(true); // default: muted
  const audioRef = useRef(null);
  const API_KEY = import.meta.env.VITE_FREESOUND_API_KEY;

  // Load mood and mute state
  useEffect(() => {
    const storedMood = localStorage.getItem("ai-mood");
    const storedMute = localStorage.getItem("ai-muted");
    if (storedMood) setIndex(parseInt(storedMood));
    if (storedMute !== null) setMuted(storedMute === "true");
  }, []);

  // Save state
  useEffect(() => {
    localStorage.setItem("ai-mood", index);
    fetchSound(moods[index]);
  }, [index]);

  useEffect(() => {
    localStorage.setItem("ai-muted", muted.toString());
  }, [muted]);

  const fetchSound = async (keyword) => {
    try {
      const res = await axios.get(`https://freesound.org/apiv2/search/text/`, {
        params: {
          query: keyword,
          fields: "previews",
          sort: "rating",
          token: API_KEY,
        },
      });
      const result = res.data?.results?.[0];
      if (result?.previews?.["preview-hq-mp3"]) {
        setSoundUrl(result.previews["preview-hq-mp3"]);
      }
    } catch (error) {
      console.error("Freesound fetch failed", error);
    }
  };

  const nextMood = () => {
    const next = (index + 1) % moods.length;
    setIndex(next);

    if (audioRef.current && soundUrl && !muted) {
      audioRef.current.src = soundUrl;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const toggleMute = () => {
    setMuted((prev) => !prev);
  };

  return (
    <div className="p-4 bg-skin-panel border border-skin-accent2 rounded-xl text-center relative">
      <h3 className="text-skin-accent font-futuristic text-lg mb-2">
        Mood Scanner
      </h3>

      <div
        onClick={nextMood}
        className="cursor-pointer group relative"
        title="Click to change mood"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.4 }}
            className={`text-xl font-bold ${colors[index]} font-mono`}
          >
            {moods[index]}
          </motion.p>
        </AnimatePresence>

        <div
          className={`absolute inset-0 blur-md opacity-20 animate-pulse-glow ${colors[index]}`}
        />
      </div>

      <p className="text-xs text-skin-text/60 mt-1">
        Neural emotional feedback — click to update.
      </p>

      {/* Mute Toggle */}
      <button
        onClick={toggleMute}
        className="absolute top-2 right-2 text-skin-accent hover:text-skin-accent2 transition"
        title={muted ? "Unmute AI sounds" : "Mute AI sounds"}
      >
        {muted ? <HiSpeakerXMark size={20} /> : <HiSpeakerWave size={20} />}
      </button>

      {/* Audio Element */}
      <audio ref={audioRef} preload="auto" />
    </div>
  );
}
