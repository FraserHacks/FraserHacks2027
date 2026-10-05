import { useState } from "react";
import { InterestModal } from "./InterestModal";
import styles from "./Interest.module.css";

export function InterestButton({ className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${styles.trigger} ${className}`}
      >
        <span className={styles.triggerTitle}>Hacker Interest Form</span>
        <span className={styles.triggerSub}>FraserHacks 2027 &gt;&gt;</span>
      </button>

      {open && <InterestModal onClose={() => setOpen(false)} />}
    </>
  );
}
