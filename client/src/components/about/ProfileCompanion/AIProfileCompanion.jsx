import TerminalInterface from "./ai/TerminalInterface";
import MoodScanner from "./ai/MoodScanner";
import AdviceGenerator from "./ai/AdviceGenerator";
import NamePrompt from "./ai/NamePrompt";

export default function AIProfileCompanion() {
  return (
    <section className="relative py-20 px-6 bg-skin-panel border border-skin-accent rounded-2xl overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-grid bg-center bg-[length:40px_40px] animate-grid-glow" />
      </div>

      <h2 className="text-3xl md:text-4xl text-center font-bold text-skin-accent font-futuristic tracking-widest mb-16">
        AI Profile Companion
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        <div className="space-y-6">
          <NamePrompt />
          <MoodScanner />
        </div>
        <div className="space-y-6">
          <TerminalInterface />
          <AdviceGenerator />
        </div>
      </div>
    </section>
  );
}
