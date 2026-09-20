import { useEffect, useState } from "react";
import cloudPuff from "../assets/images/clouds (1) (1)-Photoroom.png";
import cloudLong from "../assets/images/clouds-lasso (2) (1)-Photoroom.png";
import cloudTall from "../assets/images/clouds-lasso (3)-Photoroom.png";
import styles from "./SunsetBackground.module.css";

const WATER_HIGHLIGHTS = [
  { top: "3%", left: "50%", width: "12%", opacity: 0.95 },
  { top: "5.6%", left: "43%", width: "8%", opacity: 0.64 },
  { top: "7%", left: "58%", width: "10%", opacity: 0.8 },
  { top: "10%", left: "50%", width: "16%", opacity: 0.9 },
  { top: "12.8%", left: "38%", width: "9%", opacity: 0.48 },
  { top: "14.6%", left: "63%", width: "12%", opacity: 0.74 },
  { top: "18%", left: "47%", width: "14%", opacity: 0.68 },
  { top: "21%", left: "68%", width: "11%", opacity: 0.42 },
  { top: "25%", left: "40%", width: "20%", opacity: 0.6 },
  { top: "28.5%", left: "61%", width: "22%", opacity: 0.62 },
  { top: "33%", left: "50%", width: "26%", opacity: 0.58 },
  { top: "38%", left: "28%", width: "22%", opacity: 0.38 },
  { top: "40%", left: "74%", width: "21%", opacity: 0.4 },
  {
    top: "46%",
    left: "46%",
    width: "34%",
    opacity: 0.48,
    height: "clamp(5px, 0.85vmin, 10px)",
  },
  {
    top: "53%",
    left: "22%",
    width: "30%",
    opacity: 0.3,
    height: "clamp(5px, 0.9vmin, 11px)",
  },
  {
    top: "56%",
    left: "78%",
    width: "32%",
    opacity: 0.28,
    height: "clamp(5px, 0.9vmin, 11px)",
  },
  {
    top: "63%",
    left: "50%",
    width: "44%",
    opacity: 0.34,
    height: "clamp(6px, 1vmin, 12px)",
  },
  {
    top: "71%",
    left: "18%",
    width: "36%",
    opacity: 0.22,
    height: "clamp(6px, 1vmin, 12px)",
  },
  {
    top: "74%",
    left: "82%",
    width: "34%",
    opacity: 0.2,
    height: "clamp(6px, 1vmin, 12px)",
  },
  {
    top: "83%",
    left: "50%",
    width: "56%",
    opacity: 0.18,
    height: "clamp(6px, 1.1vmin, 13px)",
  },
];

const SKY_CLOUDS = [
  {
    src: cloudPuff,
    top: "-4%",
    left: "-10%",
    width: "clamp(320px, 52vmin, 720px)",
    opacity: 0.84,
    duration: "32s",
    delay: "-4s",
    layer: "back",
  },
  {
    src: cloudLong,
    top: "0%",
    left: "58%",
    width: "clamp(300px, 48vmin, 680px)",
    opacity: 0.98,
    flipped: true,
    duration: "38s",
    delay: "-12s",
    layer: "back",
  },
  {
    src: cloudLong,
    top: "36%",
    left: "-8%",
    width: "clamp(240px, 36vmin, 520px)",
    opacity: 0.88,
    duration: "40s",
    delay: "-22s",
    layer: "back",
  },
  {
    src: cloudTall,
    top: "34%",
    left: "70%",
    width: "clamp(260px, 38vmin, 560px)",
    opacity: 0.8,
    flipped: true,
    duration: "34s",
    delay: "-6s",
    layer: "back",
  },
  {
    src: cloudTall,
    top: "-10%",
    left: "22%",
    width: "clamp(260px, 40vmin, 600px)",
    opacity: 0.88,
    duration: "36s",
    delay: "-9s",
    layer: "front",
  },
  {
    src: cloudPuff,
    top: "14%",
    left: "-2%",
    width: "clamp(220px, 32vmin, 480px)",
    opacity: 0.8,
    flipped: true,
    duration: "30s",
    delay: "-16s",
    layer: "front",
  },
];

export function SunsetBackground() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReduceMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  return (
    <div className={styles.sunsetScene}>
      <div className={styles.sky} aria-hidden="true" />

      <div className={styles.clouds} aria-hidden="true">
        {SKY_CLOUDS.filter((cloud) => cloud.layer === "back").map((cloud) => (
          <img
            key={`back-${cloud.top}-${cloud.left}`}
            src={cloud.src}
            alt=""
            className={`${styles.cloud} ${cloud.flipped ? styles.cloudFlipped : ""}`}
            style={{
              top: cloud.top,
              left: cloud.left,
              width: cloud.width,
              opacity: cloud.opacity,
              animationDuration: cloud.duration,
              animationDelay: cloud.delay,
            }}
          />
        ))}
      </div>

      <h1 className={styles.logo}>
        <span className={styles.logoText}>fraserhacks</span>
      </h1>

      <div className={styles.cloudsFront} aria-hidden="true">
        {SKY_CLOUDS.filter((cloud) => cloud.layer === "front").map((cloud) => (
          <img
            key={`front-${cloud.top}-${cloud.left}`}
            src={cloud.src}
            alt=""
            className={`${styles.cloud} ${cloud.flipped ? styles.cloudFlipped : ""}`}
            style={{
              top: cloud.top,
              left: cloud.left,
              width: cloud.width,
              opacity: cloud.opacity,
              animationDuration: cloud.duration,
              animationDelay: cloud.delay,
            }}
          />
        ))}
      </div>

      <div className={styles.sunGlow} aria-hidden="true" />
      <div className={styles.sun} aria-hidden="true" />

      <div className={styles.water} aria-hidden="true">
        <div className={styles.waterReflection}>
          <div className={styles.reflectedSky} />
          <div className={styles.reflectedSun} />
          <div className={styles.waterTexture} />
        </div>
        <div className={styles.waterTint} />
        <div className={styles.waterSurface} />
        <div className={styles.waterGrain} />
        <div className={styles.waterHighlights}>
          {WATER_HIGHLIGHTS.map((highlight, index) => (
            <span
              key={`${highlight.top}-${highlight.left}`}
              className={styles.highlight}
              style={{
                top: highlight.top,
                left: highlight.left,
                width: highlight.width,
                "--highlight-opacity": highlight.opacity,
                animationDelay: `${(index % 8) * -0.85}s`,
                animationDuration: `${6.4 + (index % 5) * 0.7}s`,
                ...(highlight.height ? { height: highlight.height } : {}),
              }}
            />
          ))}
        </div>
      </div>

      <div className={styles.horizonGlow} aria-hidden="true" />

      <svg
        className={styles.waterFilter}
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <filter
          id="waterWobble"
          x="-15%"
          y="-15%"
          width="130%"
          height="130%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.0035 0.055"
            numOctaves="1"
            seed="8"
            result="noise"
          >
            {reduceMotion ? null : (
              <animate
                attributeName="baseFrequency"
                values="0.0035 0.055;0.005 0.042;0.0028 0.07;0.0042 0.05;0.0035 0.055"
                dur="10s"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feGaussianBlur in="noise" stdDeviation="0.9" result="softNoise" />
          <feColorMatrix
            in="softNoise"
            type="matrix"
            values="1 0 0 0 0  0 0.28 0 0 0  0 0 0 0 0  0 0 0 1 0"
            result="horizontalBands"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="horizontalBands"
            scale="8.5"
            xChannelSelector="R"
            yChannelSelector="G"
          >
            {reduceMotion ? null : (
              <animate
                attributeName="scale"
                values="7;11;8;10.5;7"
                dur="9s"
                repeatCount="indefinite"
              />
            )}
          </feDisplacementMap>
        </filter>
        <filter
          id="waterGrain"
          x="-5%"
          y="-5%"
          width="110%"
          height="110%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.0025 0.09"
            numOctaves="2"
            seed="3"
            result="grain"
          >
            {reduceMotion ? null : (
              <animate
                attributeName="baseFrequency"
                values="0.0025 0.09;0.0034 0.07;0.002 0.12;0.0025 0.09"
                dur="13s"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feGaussianBlur in="grain" stdDeviation="0.45" result="softGrain" />
          <feColorMatrix
            in="softGrain"
            type="matrix"
            values="1 0 0 0 0  1 0 0 0 0  1 0 0 0 0  0 0 0 0.55 0"
          />
        </filter>
        <filter
          id="highlightWobble"
          x="-20%"
          y="-40%"
          width="140%"
          height="180%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.18"
            numOctaves="1"
            seed="12"
            result="noise"
          >
            {reduceMotion ? null : (
              <animate
                attributeName="baseFrequency"
                values="0.01 0.18;0.016 0.13;0.008 0.24;0.012 0.16;0.01 0.18"
                dur="8s"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feGaussianBlur in="noise" stdDeviation="0.7" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="4.5"
            xChannelSelector="R"
            yChannelSelector="G"
          >
            {reduceMotion ? null : (
              <animate
                attributeName="scale"
                values="3.5;7;4.2;6.5;3.5"
                dur="7s"
                repeatCount="indefinite"
              />
            )}
          </feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
}

export default SunsetBackground;
