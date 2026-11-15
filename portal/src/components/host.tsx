export function Host({ line, large = false }: { line: string; large?: boolean }) {
  return (
    <div className={large ? "host host-large" : "host"}>
      <svg
        className="face"
        viewBox="0 0 64 64"
        role="img"
        aria-label="a small hive face, greeting you"
      >
        <circle cx="32" cy="32" r="22" fill="#f3e6d0" />
        <circle cx="32" cy="32" r="22" fill="none" stroke="#e0a15a" strokeWidth="2" />
        <circle cx="24" cy="30" r="2.2" fill="#1c1612" />
        <circle cx="40" cy="30" r="2.2" fill="#1c1612" />
        <path
          d="M24 40c2.4 3 5.2 4.4 8 4.4s5.6-1.4 8-4.4"
          fill="none"
          stroke="#1c1612"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="46" cy="18" r="3" fill="#e0a15a" />
      </svg>
      <p className="host-line">{line}</p>
    </div>
  );
}
