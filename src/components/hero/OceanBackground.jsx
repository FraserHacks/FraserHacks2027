import cloudPuff from "../../assets/images/cloud-puff.webp";
import cloudLong from "../../assets/images/cloud-long.webp";
import cloudTall from "../../assets/images/cloud-tall.webp";
import { useLiteEffects } from "../../hooks/useLiteEffects";
import { ParallaxLayer } from "./ParallaxLayer";
import { ShootingStars } from "./ShootingStars";
import styles from "./OceanBackground.module.css";

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
  { top: "46%", left: "46%", width: "34%", opacity: 0.48, height: "clamp(5px, 0.85vmin, 10px)" },
  { top: "53%", left: "22%", width: "30%", opacity: 0.3, height: "clamp(5px, 0.9vmin, 11px)" },
  { top: "56%", left: "78%", width: "32%", opacity: 0.28, height: "clamp(5px, 0.9vmin, 11px)" },
  { top: "63%", left: "50%", width: "44%", opacity: 0.34, height: "clamp(6px, 1vmin, 12px)" },
  { top: "71%", left: "18%", width: "36%", opacity: 0.22, height: "clamp(6px, 1vmin, 12px)" },
  { top: "74%", left: "82%", width: "34%", opacity: 0.2, height: "clamp(6px, 1vmin, 12px)" },
  { top: "83%", left: "50%", width: "56%", opacity: 0.18, height: "clamp(6px, 1.1vmin, 13px)" },
];

const WATER_STREAKS = [
  { top: "6%", left: "12%", width: "10%", height: "6px", opacity: 0.42, rotate: "-4deg", color: "rgba(186, 208, 228, 0.7)", mid: "rgba(210, 226, 238, 0.85)" },
  { top: "9%", left: "88%", width: "8%", height: "5px", opacity: 0.36, rotate: "5deg", color: "rgba(174, 198, 220, 0.65)", mid: "rgba(198, 218, 234, 0.8)" },
  { top: "15%", left: "18%", width: "14%", height: "7px", opacity: 0.4, rotate: "2deg", color: "rgba(166, 194, 218, 0.68)", mid: "rgba(190, 214, 232, 0.82)" },
  { top: "18%", left: "84%", width: "7%", height: "13px", opacity: 0.34, rotate: "-7deg", radius: "50%", color: "rgba(154, 184, 210, 0.62)", mid: "rgba(178, 202, 224, 0.76)" },
  { top: "27%", left: "10%", width: "12%", height: "8px", opacity: 0.38, rotate: "3deg", color: "rgba(138, 170, 200, 0.66)", mid: "rgba(162, 192, 216, 0.8)" },
  { top: "30%", left: "91%", width: "15%", height: "6px", opacity: 0.36, rotate: "-2deg", color: "rgba(132, 164, 196, 0.64)", mid: "rgba(156, 186, 212, 0.78)" },
  { top: "36%", left: "20%", width: "6%", height: "15px", opacity: 0.32, rotate: "8deg", radius: "50%", color: "rgba(122, 154, 188, 0.6)", mid: "rgba(146, 176, 204, 0.74)" },
  { top: "42%", left: "8%", width: "18%", height: "9px", opacity: 0.34, rotate: "-3deg", color: "rgba(110, 144, 180, 0.62)", mid: "rgba(134, 166, 196, 0.76)" },
  { top: "45%", left: "86%", width: "13%", height: "7px", opacity: 0.32, rotate: "4deg", color: "rgba(104, 138, 176, 0.6)", mid: "rgba(128, 160, 192, 0.74)" },
  { top: "54%", left: "16%", width: "9%", height: "12px", opacity: 0.3, rotate: "-5deg", radius: "46%", color: "rgba(96, 130, 168, 0.58)", mid: "rgba(120, 152, 184, 0.72)" },
  { top: "58%", left: "80%", width: "17%", height: "8px", opacity: 0.3, rotate: "2deg", color: "rgba(90, 124, 162, 0.58)", mid: "rgba(114, 146, 178, 0.72)" },
  { top: "67%", left: "12%", width: "20%", height: "10px", opacity: 0.28, rotate: "-2deg", color: "rgba(82, 114, 152, 0.56)", mid: "rgba(106, 138, 170, 0.7)" },
  { top: "72%", left: "88%", width: "11%", height: "16px", opacity: 0.26, rotate: "6deg", radius: "50%", color: "rgba(76, 108, 146, 0.54)", mid: "rgba(100, 132, 164, 0.68)" },
  { top: "81%", left: "24%", width: "16%", height: "9px", opacity: 0.24, rotate: "3deg", color: "rgba(70, 100, 140, 0.52)", mid: "rgba(94, 124, 158, 0.66)" },
  { top: "86%", left: "76%", width: "22%", height: "11px", opacity: 0.24, rotate: "-4deg", color: "rgba(64, 94, 132, 0.5)", mid: "rgba(88, 118, 152, 0.64)" },
];

const SKY_CLOUDS = [
  {
    src: cloudPuff,
    widthPx: 1610,
    heightPx: 510,
    top: "-6%",
    left: "-8%",
    width: "clamp(280px, 44vmin, 640px)",
    opacity: 0.72,
    duration: "32s",
    delay: "-4s",
  },
  {
    src: cloudLong,
    widthPx: 1040,
    heightPx: 412,
    top: "2%",
    left: "58%",
    width: "clamp(260px, 42vmin, 620px)",
    opacity: 0.66,
    flipped: true,
    duration: "38s",
    delay: "-12s",
  },
  {
    src: cloudTall,
    widthPx: 1188,
    heightPx: 748,
    top: "12%",
    left: "-12%",
    width: "clamp(200px, 28vmin, 420px)",
    opacity: 0.46,
    duration: "40s",
    delay: "-22s",
  },
  {
    src: cloudLong,
    widthPx: 1040,
    heightPx: 412,
    top: "20%",
    left: "76%",
    width: "clamp(200px, 28vmin, 420px)",
    opacity: 0.5,
    flipped: true,
    duration: "36s",
    delay: "-8s",
  },
];

export function OceanBackground() {
  const liteEffects = useLiteEffects();

  return (
    <div className={styles.ocean} aria-hidden="true">
      <div className={styles.sky} />
      <div className={styles.topShade} />

      <ParallaxLayer layer="background" className={styles.skyClouds}>
        {SKY_CLOUDS.map((cloud) => (
          <img
            key={`${cloud.top}-${cloud.left}`}
            src={cloud.src}
            alt=""
            width={cloud.widthPx}
            height={cloud.heightPx}
            decoding="async"
            fetchPriority="low"
            draggable={false}
            className={`${styles.skyCloud} ${cloud.flipped ? styles.skyCloudFlipped : ""}`}
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
      </ParallaxLayer>

      <ShootingStars />

      <div className={styles.sunGlow} />
      <div className={styles.sun} />

      <div className={styles.waterline}>
        <div className={styles.waterClip}>
          <div className={`${styles.water} ${liteEffects ? styles.waterStatic : ""}`}>
          <div className={styles.waterReflection}>
            <div className={styles.reflectedSky} />
            <div className={styles.reflectedSun} />
            <div className={styles.waterTexture} />
          </div>
          <div className={styles.waterTint} />
          <div className={styles.sunCone}>
            <div className={styles.sunConeLight} />
          </div>
          <div className={styles.waterSurface} />
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
          <div className={styles.waterStreaks}>
            {WATER_STREAKS.map((streak, index) => (
              <span
                key={`streak-${streak.top}-${streak.left}`}
                className={styles.waterStreak}
                style={{
                  top: streak.top,
                  left: streak.left,
                  width: streak.width,
                  height: streak.height,
                  "--streak-opacity": streak.opacity,
                  "--streak-rotate": streak.rotate,
                  "--streak-radius": streak.radius ?? "999px",
                  "--streak-color": streak.color,
                  "--streak-mid": streak.mid,
                  animationDelay: `${(index % 7) * -1.1}s`,
                  animationDuration: `${9.5 + (index % 5) * 0.8}s`,
                }}
              />
            ))}
          </div>
        </div>
        </div>

        <div className={styles.horizonGlow} />
      </div>

      <svg className={styles.waterFilter} width="0" height="0" focusable="false">
        {liteEffects ? null : (
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
            />
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
              <animate
                attributeName="scale"
                values="7;11;8;10.5;7"
                dur="9s"
                repeatCount="indefinite"
              />
            </feDisplacementMap>
          </filter>
        )}
        <clipPath id="waterTopClip" clipPathUnits="objectBoundingBox">
          <path d="M0 0.018 C0.05 0.006 0.1 0.026 0.16 0.01 C0.185 0.002 0.195 0.004 0.2 0 L0.8 0 C0.805 0.004 0.815 0.002 0.84 0.01 C0.9 0.026 0.95 0.006 1 0.018 L1 1 L0 1 Z" />
        </clipPath>
      </svg>
    </div>
  );
}
