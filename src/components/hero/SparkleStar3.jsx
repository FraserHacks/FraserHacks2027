import { useId } from "react";

export function SparkleStar3({ className = "", size = 18 }) {
  const id = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`${id}-core`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#f0dcff" />
          <stop offset="100%" stopColor="#e7c56a" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-blur`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="1.8" />
        </filter>
      </defs>
      <g filter={`url(#${id}-blur)`}>
        <path
          d="M16 5L17.4 14.6L27 16L17.4 17.4L16 27L14.6 17.4L5 16L14.6 14.6Z"
          fill={`url(#${id}-core)`}
        />
      </g>
      <circle cx="16" cy="16" r="1.4" fill="#fffdf8" />
    </svg>
  );
}
