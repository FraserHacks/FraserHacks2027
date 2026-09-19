import { useId } from "react";

export function SparkleStar1({ className = "", size = 28 }) {
  const id = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-fill`} x1="32" y1="2" x2="32" y2="62">
          <stop offset="0%" stopColor="#fffdf6" />
          <stop offset="42%" stopColor="#f3e2ff" />
          <stop offset="100%" stopColor="#d7b8ff" />
        </linearGradient>
      </defs>
      <path
        d="M32 4C33.2 18.4 37.6 26.8 52 32C37.6 37.2 33.2 45.6 32 60C30.8 45.6 26.4 37.2 12 32C26.4 26.8 30.8 18.4 32 4Z"
        fill={`url(#${id}-fill)`}
      />
    </svg>
  );
}
