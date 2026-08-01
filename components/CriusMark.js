// Placeholder monogram — swap for the real crius-mark asset when it's provided.
export default function CriusMark({ variant = "dark" }) {
  const color = variant === "light" ? "#c9a54a" : "#201b13";
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" />
      <path d="M8 8h8M8 12h5M8 16h8" />
    </svg>
  );
}
