import cloudDrift from "../../assets/images/clouds/drift.webp";
import cloudPlump from "../../assets/images/clouds/plump.webp";
import cloudSwell from "../../assets/images/clouds/swell.webp";
import cloudPuff from "../../assets/images/clouds/puff.webp";
import cloudLong from "../../assets/images/clouds/long.webp";
import cloudWisp from "../../assets/images/clouds/wisp.webp";
import styles from "./ForegroundClouds.module.css";

export function ForegroundClouds() {
  return (
    <div className={styles.band} aria-hidden="true">
      <div className={styles.fade} />
      <img
        src={cloudPlump}
        alt=""
        width={1600}
        height={855}
        decoding="async"
        fetchPriority="low"
        draggable={false}
        className="absolute -bottom-[8%] -left-[18%] w-[min(88vw,820px)] max-w-none opacity-95"
      />
      <img
        src={cloudDrift}
        alt=""
        width={1600}
        height={896}
        decoding="async"
        fetchPriority="low"
        draggable={false}
        className="absolute -right-[16%] -bottom-[6%] w-[min(92vw,860px)] max-w-none -scale-x-100 opacity-95"
      />
      <img
        src={cloudSwell}
        alt=""
        width={1185}
        height={665}
        decoding="async"
        fetchPriority="low"
        draggable={false}
        className={`${styles.hideLg} absolute bottom-[-12%] left-[10%] w-[min(48vw,760px)] max-w-none opacity-92`}
      />
      <img
        src={cloudPuff}
        alt=""
        width={1610}
        height={510}
        decoding="async"
        fetchPriority="low"
        draggable={false}
        className={`${styles.hideLg} absolute bottom-[-4%] right-[16%] w-[min(48vw,760px)] max-w-none opacity-90`}
      />
      <img
        src={cloudLong}
        alt=""
        width={1040}
        height={412}
        decoding="async"
        fetchPriority="low"
        draggable={false}
        className={`${styles.hideLg} absolute -right-[10%] bottom-[-4%] w-[min(48vw,760px)] max-w-none -scale-x-100 opacity-90`}
      />
      <img
        src={cloudWisp}
        alt=""
        width={1051}
        height={417}
        decoding="async"
        fetchPriority="low"
        draggable={false}
        className={`${styles.hideLg} absolute left-[0%] bottom-[-4%] w-[min(42vw,640px)] max-w-none opacity-88`}
      />
    </div>
  );
}
