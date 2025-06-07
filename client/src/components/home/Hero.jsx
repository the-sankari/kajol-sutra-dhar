import { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import AnimatedCursor from "../AnimatedCursor";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Initializing Kajol.AI neural shell protocol...";
  const speed = 40;

  const [input, setInput] = useState("");
  const [log, setLog] = useState([]);

  const aboutBtnRef = useRef(null);
  const projectsBtnRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, []);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      let response = "";

      const triggerButtonEffect = (ref) => {
        if (ref.current) {
          ref.current.classList.add("animate-ping-once");
          setTimeout(() => ref.current.classList.remove("animate-ping-once"), 500);
        }
      };

      switch (cmd) {
        case "help":
          response = "🧠 Commands: help, whoami, projects, about, clear";
          break;
        case "whoami":
          response = "🤖 Kajol.AI // Full-Stack Dev from the past";
          break;
        case "projects":
          response = "🚀 Jumping to Projects Sector...";
          document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
          triggerButtonEffect(projectsBtnRef);
          break;
        case "about":
          response = "⚙️ Opening About Interface...";
          document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
          triggerButtonEffect(aboutBtnRef);
          break;
        case "clear":
          setLog([]);
          setInput("");
          return;
        case "":
          response = "";
          break;
        default:
          response = `⚠️ Unknown protocol: "${cmd}"`;
      }

      setLog((prev) => [...prev, { cmd: input, response }]);
      setInput("");
    }
  };

  return (
    <section
      className="flex min-w-screen w-full items-center justify-center font-futuristic relative overflow-hidden bg-skin-bg text-skin-text transition-colors duration-300"
      id="hero"
      style={{ minHeight: "60vh", minWidth: "100%" }}
    >
      {/* Parallax Background Grid Glow */}
      <Parallax speed={20}>
        <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 pointer-events-none z-0" />
      </Parallax>

      {/* Terminal Container */}
      <div className="relative z-10 max-w-5xl w-full px-6 py-10 md:py-16 bg-skin-panel border border-skin-accent/20 rounded-2xl backdrop-blur-md shadow-[0_0_40px_#00f0ffaa]">

        {/* Typing Status with Parallax */}
        <Parallax speed={-10}>
          <div className="text-skin-accent text-xl md:text-2xl mb-6 tracking-wide flex items-center">
            <span className="text-skin-accent2">◉</span>
            <span className="ml-2">{text}</span>
            <AnimatedCursor />
          </div>
        </Parallax>

        {/* Command Log */}
        <Parallax speed={5}>
          <div className="text-skin-text text-sm md:text-base mb-6 space-y-1 max-h-40 overflow-y-auto">
            {log.map((entry, idx) => (
              <div key={idx}>
                <div>
                  <span className="text-skin-accent2">❯</span> {entry.cmd}
                </div>
                {entry.response && (
                  <div className="ml-4 text-skin-accent">{entry.response}</div>
                )}
              </div>
            ))}
          </div>
        </Parallax>

        {/* Input Field */}
        <div className="flex items-center border-b border-skin-accent2/40 pb-4 mb-6">
          <span className="text-skin-accent2 mr-2">❯</span>
          <input
            type="text"
            placeholder="Run a protocol..."
            className="w-full bg-transparent text-skin-accent placeholder-skin-accent/40 outline-none caret-skin-accent2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            autoFocus
          />
        </div>

        {/* Command Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            ref={aboutBtnRef}
            href="#about-section"
            className="px-5 py-2 border border-skin-accent2 text-skin-accent2 hover:bg-skin-accent2 hover:text-skin-bg transition rounded-md shadow-md"
          >
            ⚙️ Init.About()
          </a>
          <a
            ref={projectsBtnRef}
            href="#projects-section"
            className="px-5 py-2 border border-skin-accent text-skin-accent hover:bg-skin-accent hover:text-skin-bg transition rounded-md shadow-md"
          >
            🛰️ Connect.Projects()
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
