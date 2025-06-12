export default function RocketIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#glow)">
        <path
          d="M32 2L42 22L62 32L42 42L32 62L22 42L2 32L22 22L32 2Z"
          fill="url(#grad)"
        />
      </g>
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="64" y2="64">
          <stop stopColor="#00f0ff" />
          <stop offset="1" stopColor="#ff00cc" />
        </linearGradient>
        <filter id="glow" x="-10" y="-10" width="84" height="84">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00ffff" />
        </filter>
      </defs>
    </svg>
  );
}
