import { useEffect, useRef } from "react";
import frame1 from "../assets/images/bat/bat1.PNG";
import frame2 from "../assets/images/bat/bat2.PNG";
import frame3 from "../assets/images/bat/bat3.PNG";
import frame4 from "../assets/images/bat/bat4.PNG";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import styles from "./CursorBat.module.css";

const FRAMES = [frame1, frame2, frame3, frame4];
const SEQUENCE = [0, 1, 2, 3, 2, 1];
const FRAME_MS = 80;
const OFFSET_Y = 118;
const HOP_MS = 340;
const HOP_COVER = 0.29;
const HOP_MAX = 80;
const DIP_PX = 14;
const TILT_MAX = 45;
const TILT_EASE = 0.16;

FRAMES.forEach((src) => {
  const preload = new Image();
  preload.src = src;
});

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

function clampTilt(deg) {
  let angle = deg;
  while (angle > 180) {
    angle -= 360;
  }
  while (angle < -180) {
    angle += 360;
  }
  return Math.max(-TILT_MAX, Math.min(TILT_MAX, angle));
}

export function CursorBat() {
  const reduceMotion = usePrefersReducedMotion();
  const batRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const bat = batRef.current;
    const img = imgRef.current;
    if (!bat || !img) {
      return undefined;
    }

    let seq = 0;
    let lastFrameAt = 0;
    let lastTime = 0;
    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.5 - OFFSET_Y;
    let cursorX = window.innerWidth * 0.5;
    let cursorY = window.innerHeight * 0.5;
    let visible = false;
    let tilt = 0;
    let dip = 0;
    let hopFromX = x;
    let hopFromY = y;
    let hopToX = x;
    let hopToY = y;
    let hopStarted = 0;
    let hopping = false;
    let raf = 0;

    const aim = () => ({
      x: cursorX,
      y: cursorY - OFFSET_Y,
    });

    const startHop = (now) => {
      const target = aim();
      const dx = target.x - x;
      const dy = target.y - y;
      const dist = Math.hypot(dx, dy);
      hopFromX = x;
      hopFromY = y;

      if (dist < 6) {
        hopToX = target.x;
        hopToY = target.y;
      } else {
        const travel = Math.min(dist * HOP_COVER, HOP_MAX);
        hopToX = x + (dx / dist) * travel;
        hopToY = y + (dy / dist) * travel;
      }

      hopStarted = now;
      hopping = true;
    };

    const onPointerMove = (event) => {
      cursorX = event.clientX;
      cursorY = event.clientY;
      visible = true;
    };

    const tick = (now) => {
      if (!lastTime) {
        lastTime = now;
      }

      lastTime = now;

      if (!reduceMotion && now - lastFrameAt >= FRAME_MS) {
        lastFrameAt = now;
        const prev = SEQUENCE[seq];
        seq = (seq + 1) % SEQUENCE.length;
        const next = SEQUENCE[seq];
        img.src = FRAMES[next];

        if (prev === 1 && next === 2) {
          startHop(now);
        }
      }

      if (hopping) {
        const t = Math.min(1, (now - hopStarted) / HOP_MS);
        const e = easeOutCubic(t);
        x = hopFromX + (hopToX - hopFromX) * e;
        y = hopFromY + (hopToY - hopFromY) * e;
        if (t >= 1) {
          hopping = false;
        }
      } else if (reduceMotion) {
        const target = aim();
        x = target.x;
        y = target.y;
      }

      const dipping = seq === 3 || seq === 4;
      const dipTarget = dipping ? DIP_PX : 0;
      dip += (dipTarget - dip) * 0.22;

      const target = aim();
      const remain = Math.hypot(target.x - x, target.y - y);
      const desiredTilt =
        remain < 140
          ? 0
          : clampTilt(
              (Math.atan2(cursorY - y, cursorX - x) * 180) / Math.PI + 90,
            );
      tilt += (desiredTilt - tilt) * TILT_EASE;

      bat.style.transform = `translate3d(${x}px, ${y + dip}px, 0) translate(-50%, -50%) rotate(${tilt}deg)`;
      bat.style.opacity = visible ? "1" : "0";

      raf = requestAnimationFrame(tick);
    };

    img.src = FRAMES[0];
    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mousemove", onPointerMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mousemove", onPointerMove);
      cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  return (
    <div ref={batRef} className={styles.bat} aria-hidden="true">
      <img
        ref={imgRef}
        src={FRAMES[0]}
        alt=""
        draggable={false}
        className={styles.sprite}
      />
    </div>
  );
}
