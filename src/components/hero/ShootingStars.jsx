import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import styles from "./ShootingStars.module.css";

const STARS = [
  { top: "8%", left: "58%", duration: "7.4s", delay: "0s", travel: "108px", size: "2.2px", trail: "20px", angle: "132deg" },
  { top: "16%", left: "74%", duration: "8.2s", delay: "-2.6s", travel: "92px", size: "1.8px", trail: "16px", angle: "138deg" },
  { top: "28%", left: "64%", duration: "6.8s", delay: "-4.1s", travel: "124px", size: "2.4px", trail: "22px", angle: "129deg" },
  { top: "6%", left: "18%", duration: "7.8s", delay: "-1.2s", travel: "98px", size: "2px", trail: "18px", angle: "136deg" },
  { top: "21%", left: "9%", duration: "8.6s", delay: "-3.4s", travel: "86px", size: "1.7px", trail: "15px", angle: "142deg" },
  { top: "34%", left: "27%", duration: "7.1s", delay: "-5.5s", travel: "116px", size: "2.1px", trail: "19px", angle: "130deg" },
];

export function ShootingStars() {
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return (
    <div className={styles.field}>
      {STARS.map((star) => (
        <span
          key={`${star.top}-${star.left}`}
          className={styles.star}
          style={{
            top: star.top,
            left: star.left,
            "--duration": star.duration,
            "--delay": star.delay,
            "--travel": star.travel,
            "--size": star.size,
            "--trail": star.trail,
            "--angle": star.angle,
          }}
        >
          <span className={styles.trail} />
          <span className={styles.head} />
        </span>
      ))}
    </div>
  );
}
