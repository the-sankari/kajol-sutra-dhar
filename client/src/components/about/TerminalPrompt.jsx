import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { HiMicrophone, HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function TerminalPrompt() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState([]);
  const [mood, setMood] = useState("Focused");
  const [listening, setListening] = useState(false);
  const [muted, setMuted] = useState(true);
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const synth = window.speechSynthesis;
  const recognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
      ? new (window.SpeechRecognition || window.webkitSpeechRecognition)()
      : null;

  useEffect(() => {
    const stored = localStorage.getItem("ai-mood");
    if (stored) {
      setMood(
        ["Focused", "Learning", "Building", "Glitching", "Ready"][
          parseInt(stored)
        ]
      );
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("terminal-log");
    if (saved) {
      setLog(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("terminal-log", JSON.stringify(log));
  }, [log]);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [log]);

  const speak = (text) => {
    if (!muted && synth) {
      const utter = new SpeechSynthesisUtterance(text);
      utter.pitch = 1;
      utter.rate = 1.05;
      utter.voice = synth.getVoices()[0];
      synth.speak(utter);
    }
  };

  const toggleMute = () => setMuted((prev) => !prev);

  const handleVoiceInput = () => {
    if (!recognition) return;
    recognition.lang = "en-US";
    recognition.start();
    setListening(true);
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
      handleSubmit(transcript);
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
  };

  const getMoodReply = () => {
    const options = {
      Focused: ["System focused. Proceed."],
      Learning: ["Absorbing data. Query acknowledged."],
      Building: ["Executing code blocks..."],
      Glitching: ["⚠️ Neural error. Recalibrating..."],
      Ready: ["Systems online. How can I help?"],
    };
    return (options[mood] || ["..."])[0];
  };

  const checkEasterEgg = (text) => {
    const t = text.toLowerCase();
    if (t.includes("druid"))
      return "🧙 Druid access detected. Welcome, circle member.";
    if (t.includes("glitch"))
      return "💥 Glitch mode activated. Hold onto your circuits...";
    if (t === "whoami")
      return "👤 You are Kajol Sutra Dhar — Full-Stack Developer, Verified.";
    return null;
  };

  const handleSubmit = async (overrideText = null) => {
    const command = overrideText || input.trim();
    if (!command || loading) return;

    setLoading(true);
    setLog((prev) => [...prev, { from: "user", text: command }]);
    setInput("");

    const easter = checkEasterEgg(command);
    if (easter) {
      setLog((prev) => [...prev, { from: "ai", text: easter }]);
      speak(easter);
      setLoading(false);
      return;
    }

    const systemPrompt = `You are Kajol-AI, a futuristic assistant created by Kajol Sutra Dhar. Mood: ${mood}. Respond like a smart terminal agent, with concise, stylized replies.`;

    const sendOpenAIRequest = async () => {
      return axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo-0125",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: command },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
    };

    try {
      const res = await sendOpenAIRequest();
      const text = res.data.choices[0].message.content.trim();
      setLog((prev) => [...prev, { from: "ai", text }]);
      speak(text);
    } catch (err) {
      if (err.response?.status === 429) {
        const msg = "⚠️ Rate limit hit. Retrying in 3 seconds...";
        setLog((prev) => [...prev, { from: "ai", text: msg }]);
        speak(msg);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        try {
          const retryRes = await sendOpenAIRequest();
          const text = retryRes.data.choices[0].message.content.trim();
          setLog((prev) => [...prev, { from: "ai", text }]);
          speak(text);
        } catch (retryErr) {
          const fallback = "⚠️ Still rate limited. Using mood fallback.";
          const backup = getMoodReply();
          setLog((prev) => [
            ...prev,
            { from: "ai", text: fallback },
            { from: "ai", text: backup },
          ]);
          speak(backup);
        }
      } else {
        const fallback = getMoodReply();
        setLog((prev) => [...prev, { from: "ai", text: fallback }]);
        speak(fallback);
      }
    }
    setLoading(false);
  };

  return (
    <motion.div
      className="bg-skin-panel border border-skin-accent2 rounded-xl p-4 font-mono"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-skin-accent font-futuristic text-lg">
          Terminal Interface
        </h3>
        <div className="flex gap-3">
          <button onClick={handleVoiceInput} title="Voice input">
            <HiMicrophone
              className={`text-skin-accent ${listening ? "animate-pulse" : ""}`}
            />
          </button>
          <button onClick={toggleMute} title="Toggle sound">
            {muted ? (
              <HiSpeakerXMark className="text-skin-accent" />
            ) : (
              <HiSpeakerWave className="text-skin-accent" />
            )}
          </button>
        </div>
      </div>

      {loading && (
        <div className="text-skin-accent text-xs font-mono animate-pulse mb-2">
          ⏳ Querying Kajol-AI...
        </div>
      )}

      <div className="bg-black/20 h-60 overflow-y-auto p-2 rounded-md text-skin-text text-sm space-y-2">
        {log.map((entry, i) => (
          <div
            key={i}
            className={
              entry.from === "user" ? "text-skin-accent2" : "text-skin-accent"
            }
          >
            <span className="mr-2">{entry.from === "user" ? ">" : "🤖"}</span>
            {entry.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          disabled={loading}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={loading ? "Processing..." : "> enter command"}
          className={`w-full mt-3 bg-transparent border-b border-skin-accent text-skin-text text-sm py-1 focus:outline-none ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        />
      </form>
    </motion.div>
  );
}
