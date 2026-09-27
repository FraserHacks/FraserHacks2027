import { useEffect } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

let listeners = 0;
let ticking = false;
let reduceMotion = false;
let scrollEnd = 0;

function apply(scrollY) {
  const y = reduceMotion ? 0 : scrollY;
  document.documentElement.style.setProperty("--scroll-y", `${y}px`);
}

function onScroll() {
  if (ticking) {
    return;
  }

  ticking = true;
  document.documentElement.classList.add("is-scrolling");

  requestAnimationFrame(() => {
    apply(window.scrollY);
    ticking = false;
    window.clearTimeout(scrollEnd);
    scrollEnd = window.setTimeout(() => {
      document.documentElement.classList.remove("is-scrolling");
    }, 140);
  });
}

function onVisibility() {
  const hidden = document.hidden;
  document.documentElement.classList.toggle("page-hidden", hidden);

  document.querySelectorAll("svg").forEach((svg) => {
    if (typeof svg.pauseAnimations !== "function") {
      return;
    }

    if (hidden) {
      svg.pauseAnimations();
    } else {
      svg.unpauseAnimations();
    }
  });
}

export function useParallaxLayer() {
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    reduceMotion = prefersReduced;
    listeners += 1;

    if (listeners === 1) {
      window.addEventListener("scroll", onScroll, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
    }

    apply(window.scrollY);
    onVisibility();

    return () => {
      listeners -= 1;
      if (listeners === 0) {
        window.removeEventListener("scroll", onScroll);
        document.removeEventListener("visibilitychange", onVisibility);
        window.clearTimeout(scrollEnd);
        document.documentElement.classList.remove("is-scrolling", "page-hidden");
      }
    };
  }, [prefersReduced]);
}
