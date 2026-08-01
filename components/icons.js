function Icon({ d, size = 16, stroke = 1.5, fill = "none" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={fill}
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {typeof d === "string" ? <path d={d} /> : d}
    </svg>
  );
}

export function IconArrow({ size = 14 }) {
  return <Icon size={size} d="M3 8h10M9 4l4 4-4 4" />;
}

export function IconPlus({ size = 14 }) {
  return <Icon size={size} d="M8 3v10M3 8h10" />;
}

export function IconCheck({ size = 16 }) {
  return <Icon size={size} d="M3 8.5L6.5 12L13 4.5" />;
}
