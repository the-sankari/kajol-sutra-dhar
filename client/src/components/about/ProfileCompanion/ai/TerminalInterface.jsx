export default function TerminalInterface() {
  return (
    <div className="p-4 bg-skin-panel border border-skin-accent2 rounded-xl font-mono text-skin-accent text-sm shadow-inner">
      <p>&gt; Query: status --dev</p>
      <p className="mt-2 text-skin-text">
        &gt; Response: All systems operational.
      </p>
      <p className="mt-2 text-skin-text/60">Uptime: ∞ cycles</p>
    </div>
  );
}
