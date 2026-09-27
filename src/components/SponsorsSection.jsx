import cloudPlump from "../assets/images/clouds/plump.webp";
import logoCodecrafters from "../assets/images/sponsors/codecrafters.svg";
import logoElevenLabs from "../assets/images/sponsors/elevenlabs.webp";
import logoIcube from "../assets/images/sponsors/icube.webp";
import logoInterviewBuddy from "../assets/images/sponsors/interview_buddy.webp";
import logoN8n from "../assets/images/sponsors/n8n.webp";
import { SparkleStar1 } from "./hero/SparkleStar1";
import { SparkleStar2 } from "./hero/SparkleStar2";
import { SparkleStar3 } from "./hero/SparkleStar3";
import { SparkleStar4 } from "./hero/SparkleStar4";
import styles from "./SponsorsSection.module.css";

const SILVER_SPONSORS = [
  {
    name: "ICUBE UTM",
    href: "https://www.icubeutm.ca/",
    src: logoIcube,
  },
];

const OTHER_SPONSORS = [
  {
    name: "n8n",
    href: "https://n8n.io/",
    src: logoN8n,
  },
  {
    name: "CodeCrafters",
    href: "https://codecrafters.io/",
    src: logoCodecrafters,
  },
  {
    name: "Interview Buddy",
    href: "https://interviewbuddy.net/",
    src: logoInterviewBuddy,
  },
  {
    name: "ElevenLabs",
    href: "https://elevenlabs.io/",
    src: logoElevenLabs,
  },
];

function SponsorCard({ name, src, href }) {
  return (
    <a
      className={`${styles.card} ${styles.link}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} (opens in a new tab)`}
    >
      <img
        className={styles.logo}
        src={src}
        alt={name}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      <span className={styles.linkIcon} aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

function SponsorBoard({ title, sponsors = [], variant }) {
  return (
    <section
      className={styles.board}
      aria-labelledby={title ? `${variant}-tier-title` : undefined}
      aria-label={title ? undefined : "Sponsors"}
    >
      {title && (
        <h3 className={styles.tierTitle} id={`${variant}-tier-title`}>
          {title}
        </h3>
      )}
      <div className={`${styles.grid} ${styles[variant]}`}>
        {sponsors.length ? (
          sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} {...sponsor} />
          ))
        ) : (
          <div className={`${styles.card} ${styles.placeholder}`}>
            <p className={styles.comingSoon}>coming soon!</p>
          </div>
        )}
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
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          <div className={styles.introCopy}>
            <h2 className={styles.introTitle}>Thank you to all our sponsors!</h2>
            <a
              className={styles.cta}
              href="/FH27_Sponsorship.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Become a sponsor
            </a>
          </div>
        </div>
      </header>
      <SponsorBoard title="Gold" variant="gold" />
      <SponsorBoard
        title="Silver"
        variant="silver"
        sponsors={SILVER_SPONSORS}
      />
      <SponsorBoard title="Bronze" variant="bronze" />
      <hr className={styles.divider} />
      <SponsorBoard variant="other" sponsors={OTHER_SPONSORS} />
      <div className={styles.stars} aria-hidden="true">
        <span className="animate-twinkle absolute left-[8%] top-[10%]">
          <SparkleStar1 size={30} />
        </span>
        <span className="animate-twinkle absolute right-[10%] top-[4%] [animation-duration:4.2s]">
          <SparkleStar4 size={42} />
        </span>
        <span className="animate-twinkle absolute left-[22%] bottom-[18%] [animation-duration:2.8s]">
          <SparkleStar3 size={20} />
        </span>
        <span className="animate-twinkle absolute right-[24%] bottom-[30%] [animation-duration:3.8s]">
          <SparkleStar2 size={34} />
        </span>
        <span className="animate-twinkle absolute left-[48%] bottom-[8%] [animation-duration:5s]">
          <SparkleStar1 size={18} />
        </span>
      </div>
    </div>
  );
}
