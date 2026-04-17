import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer({ profile }) {
  const email   = profile?.email   || 'post@raikomoeller.de';
  const linkedin = profile?.linkedin || 'https://www.linkedin.com/in/raikomoeller';
  const xing    = profile?.xing    || 'https://www.xing.com/profile/Raiko_Moeller';

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brandName}>Raiko Moeller</Link>
          <p className={styles.brandTagline}>
            Head of UX/UI Design<br />
            Public Sector &amp; Institutionen
          </p>
        </div>

        <nav aria-label="Footer-Navigation" className={styles.nav}>
          <p className={styles.colTitle}>Navigation</p>
          <ul role="list">
            <li><Link href="/#cases">Projekte</Link></li>
            <li><Link href="/#services">Leistungen</Link></li>
            <li><Link href="/about">Über mich</Link></li>
            <li><Link href="/about#kontakt">Kontakt</Link></li>
          </ul>
        </nav>

        <div className={styles.col}>
          <p className={styles.colTitle}>Kontakt</p>
          <ul role="list">
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={xing} target="_blank" rel="noopener noreferrer">
                XING
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Rechtliches</p>
          <ul role="list">
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
            <li><Link href="/barrierefreiheit">Barrierefreiheit</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Raiko Moeller</p>
        <p>{email}</p>
      </div>
    </footer>
  );
}
