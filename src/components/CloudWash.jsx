import { ForegroundClouds } from "./hero/ForegroundClouds";
import { SponsorsSection } from "./SponsorsSection";
import styles from "./CloudWash.module.css";

export function CloudWash() {
  return (
    <section className={styles.wash} id="sponsors">
      <ForegroundClouds />
      <SponsorsSection />
    </section>
  );
}
