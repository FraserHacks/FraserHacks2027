import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

function getLiteEffects() {
  if (typeof window === "undefined") {
    return false;
  }

  return (
    window.matchMedia("(max-width: 720px)").matches ||
    navigator.connection?.saveData === true
  );
}

export function useLiteEffects() {
  const reduceMotion = usePrefersReducedMotion();
  const [lite, setLite] = useState(getLiteEffects);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");
    const connection = navigator.connection;
    const sync = () => setLite(getLiteEffects());

    sync();
    mediaQuery.addEventListener("change", sync);
    connection?.addEventListener?.("change", sync);

    return () => {
      mediaQuery.removeEventListener("change", sync);
      connection?.removeEventListener?.("change", sync);
    };
  }, []);

  return reduceMotion || lite;
}
