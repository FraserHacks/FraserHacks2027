import cloudPlump from "../assets/images/clouds/plump.webp";
import logoCodecrafters from "../assets/images/sponsors/codecrafters.svg";
import logoElevenLabs from "../assets/images/sponsors/ElevenLabs.jpeg";
import logoIcube from "../assets/images/sponsors/icube.jpg";
import logoInterviewBuddy from "../assets/images/sponsors/interview_buddy.webp";
import logoN8n from "../assets/images/sponsors/n8n.png";
import styles from "./SponsorsSection.module.css";

const SILVER_SPONSORS = [
  {
    name: "ICUBE UTM",
    src: logoIcube,
  },
];

const OTHER_SPONSORS = [
  {
    name: "n8n",
    src: logoN8n,
  },
  {
    name: "CodeCrafters",
    src: logoCodecrafters,
    invert: true,
  },
  {
    name: "Interview Buddy",
    src: logoInterviewBuddy,
  },
  {
    name: "ElevenLabs",
    src: logoElevenLabs,
  },
];

function SponsorCard({ name, src, invert, wide }) {
  return (
    <article className={`${styles.card} ${wide ? styles.wide : ""}`}>
      <img
        className={`${styles.logo} ${invert ? styles.logoInvert : ""}`}
        src={src}
        alt={name}
        draggable={false}
      />
    </article>
  );
}

function SponsorBoard({ title, sponsors, variant }) {
  return (
    <section className={styles.board} aria-labelledby={`${variant}-tier-title`}>
      <h3 className={styles.tierTitle} id={`${variant}-tier-title`}>
        {title}
      </h3>
      <div className={styles.frame}>
        <div className={`${styles.grid} ${styles[variant]}`}>
          {sponsors.map((sponsor) => (
            <SponsorCard
              key={sponsor.name}
              wide={variant === "silver"}
              {...sponsor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SponsorsSection() {
  return (
    <div className={styles.sponsors}>
      <header className={styles.intro}>
        <div className={styles.introCloud}>
          <img
            className={styles.introCloudArt}
            src={cloudPlump}
            alt=""
            width={1600}
            height={855}
            decoding="async"
            draggable={false}
          />
          <div className={styles.introCopy}>
            <h2 className={styles.introTitle}>Thank you to all our sponsors!</h2>
            <a
              className={styles.cta}
              href="https://www.fraserhacks.dev/FH27_Sponsorship.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Become a sponsor
            </a>
          </div>
        </div>
      </header>
      <SponsorBoard
        title="Silver"
        variant="silver"
        sponsors={SILVER_SPONSORS}
      />
      <SponsorBoard title="Other" variant="other" sponsors={OTHER_SPONSORS} />
    </div>
  );
}
