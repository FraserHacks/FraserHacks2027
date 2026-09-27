import { useId } from "react";

export function SparkleStar2({ size = 36 }) {
  const id = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`${id}-glow`} cx="50%" cy="46%" r="54%">
          <stop offset="0%" stopColor="#fff8e8" />
          <stop offset="38%" stopColor="#f4d9ff" />
          <stop offset="100%" stopColor="#c9a4ff" stopOpacity="0.12" />
        </radialGradient>
        <filter id={`${id}-soft`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>
      <path
        d="M32 8C35 20 42 27 54 32C42 37 35 44 32 56C29 44 22 37 10 32C22 27 29 20 32 8Z"
        fill={`url(#${id}-glow)`}
        filter={`url(#${id}-soft)`}
      />
      <circle cx="32" cy="32" r="5.5" fill="#fff8ee" opacity="0.95" />
    </svg>
  );
}
