import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero({ profile }) {
  const name    = profile?.name    || 'Raiko Moeller';
  const role    = profile?.role    || 'Head of UX/UI Design';
  const pos     = profile?.positioning || 'Digitale Services für öffentliche Auftraggeber & Institutionen – von der ersten Workshopsession bis zum barrierefreien Handoff.';
  const location = profile?.location || 'Potsdam / Remote';

  return (
    <section className={styles.hero} aria-label="Einleitung">
      <div className={styles.gridLines} aria-hidden="true" />
      <div className={styles.blob} aria-hidden="true" />

      <div className={styles.content}>
        <p className={`${styles.eyebrow} text-eyebrow`} aria-hidden="true">
          UX/UI Design · Public Sector · Design Systems
        </p>

        <h1 className={styles.name} aria-label={name}>
          {name.split(' ').map((part, i) => (
            <span key={i} className={styles.namePart}>{part}</span>
          ))}
        </h1>

        <p className={styles.role}>{role}</p>

        <p className={styles.positioning}>
          {pos}
        </p>

        <div className={styles.ctas} role="group" aria-label="Hauptaktionen">
          <Link href="/#cases" className="btn btn-primary">
            Case Studies ansehen
          </Link>
          <Link href="/about#kontakt" className="btn btn-ghost">
            Kontakt aufnehmen
          </Link>
        </div>
      </div>

      <div className={styles.footer} aria-hidden="true">
        <span className="text-eyebrow">{location}</span>
        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span className="text-eyebrow">Scroll</span>
        </div>
      </div>
    </section>
  );
}
