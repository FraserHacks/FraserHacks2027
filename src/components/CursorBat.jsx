import { useEffect, useRef } from "react";
import frame1 from "../assets/images/bat/1.PNG";
import frame2 from "../assets/images/bat/2.PNG";
import frame3 from "../assets/images/bat/3.PNG";
import frame4 from "../assets/images/bat/4.PNG";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import styles from "./CursorBat.module.css";

const FRAMES = [frame1, frame2, frame3, frame4];
const FRAME_MS = 250;
const SPEED_PX_PER_SEC = 420;
const SNAP_PX = 2;

FRAMES.forEach((src) => {
  const preload = new Image();
  preload.src = src;
});

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

    let frame = 0;
    let lastFrameAt = 0;
    let lastTime = 0;
    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.5;
    let targetX = x;
    let targetY = y;
    let visible = false;
    let raf = 0;

    const onPointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      visible = true;
    };

    const tick = (now) => {
      if (!lastTime) {
        lastTime = now;
      }

      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      const dx = targetX - x;
      const dy = targetY - y;
      const dist = Math.hypot(dx, dy);
      const step = SPEED_PX_PER_SEC * dt;

      if (reduceMotion || dist <= step || dist < SNAP_PX) {
        x = targetX;
        y = targetY;
      } else {
        x += (dx / dist) * step;
        y += (dy / dist) * step;
      }

      bat.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      bat.style.opacity = visible ? "1" : "0";

      if (!reduceMotion && now - lastFrameAt >= FRAME_MS) {
        lastFrameAt = now;
        frame = (frame + 1) % FRAMES.length;
        img.src = FRAMES[frame];
      }

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
      {/* <img
        ref={imgRef}
        src={FRAMES[0]}
        alt=""
        draggable={false}
        className={styles.sprite}
      /> */}
    </div>
  );
}
