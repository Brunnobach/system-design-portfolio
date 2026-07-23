export function ArchitectureMesh() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9aff6b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#9aff6b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9aff6b" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#9aff6b" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#5eead4" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      <g stroke="url(#edge)" strokeWidth="1.2">
        <path d="M180 520 L340 310 L520 360 L710 220 L880 300 L1020 180" style={{ animation: "pulse-line 5s ease-in-out infinite" }} />
        <path d="M220 640 L390 480 L560 540 L740 420 L920 510 L1080 390" style={{ animation: "pulse-line 6.5s ease-in-out infinite 0.6s" }} />
        <path d="M340 310 L390 480 M520 360 L560 540 M710 220 L740 420 M880 300 L920 510" opacity="0.5" />
        <path d="M520 360 L710 220 M560 540 L740 420 M390 480 L520 360" opacity="0.35" />
      </g>

      {[
        [180, 520],
        [340, 310],
        [390, 480],
        [520, 360],
        [560, 540],
        [710, 220],
        [740, 420],
        [880, 300],
        [920, 510],
        [1020, 180],
        [1080, 390],
        [220, 640],
      ].map(([x, y], i) => (
        <g key={`${x}-${y}`} style={{ animation: `float-node ${4 + (i % 3)}s ease-in-out infinite ${i * 0.2}s` }}>
          <circle cx={x} cy={y} r="18" fill="url(#nodeGlow)" opacity="0.35" />
          <circle cx={x} cy={y} r="4.5" fill="#9aff6b" />
          <circle cx={x} cy={y} r="9" stroke="#9aff6b" strokeOpacity="0.35" />
        </g>
      ))}

      <g fill="#e8ede9" fillOpacity="0.55" fontFamily="ui-monospace, monospace" fontSize="11">
        <text x="320" y="292">ingest</text>
        <text x="500" y="342">decide</text>
        <text x="690" y="202">serve</text>
        <text x="900" y="292">observe</text>
      </g>
    </svg>
  );
}
