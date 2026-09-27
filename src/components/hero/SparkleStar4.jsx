import { useId } from "react";

export function SparkleStar4({ size = 42 }) {
  const id = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 72"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-shaft`} x1="24" y1="2" x2="24" y2="70">
          <stop offset="0%" stopColor="#fffef8" />
          <stop offset="48%" stopColor="#f6e3ff" />
          <stop offset="100%" stopColor="#efd28a" />
        </linearGradient>
      </defs>
      <path
        d="M24 2C25.6 22 29.5 31.5 46 36C29.5 40.5 25.6 50 24 70C22.4 50 18.5 40.5 2 36C18.5 31.5 22.4 22 24 2Z"
        fill={`url(#${id}-shaft)`}
      />
    </svg>
  );
}
