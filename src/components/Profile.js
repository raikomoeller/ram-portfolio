// Profile.js
import Link from 'next/link';
import styles from './Profile.module.css';

export default function Profile({ profile }) {
  const skills  = profile?.skills  || ['UX Research','Informationsarchitektur','UI Design','Design Systems','Accessibility','Prototyping','Quality Reviews'];
  const tools   = profile?.tools   || ['Figma','Miro','FigJam','Notion','TYPO3','Confluence','Jira'];
  const bio     = profile?.bio     || ['Ich gestalte digitale Services, die tatsächlich funktionieren.'];

  return (
    <section id="profile" className={styles.section} aria-labelledby="profile-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className="section-label">Über mich</p>
          <h2 id="profile-title" className={`text-heading-xl ${styles.title}`}>Kurzprofil</h2>
          {bio.map((p, i) => <p key={i} className={styles.para}>{p}</p>)}
          <Link href="/about" className="btn btn-ink" style={{marginTop:'1.5rem', display:'inline-flex'}}>
            Mehr über mich
          </Link>
        </div>
        <aside className={styles.aside} aria-label="Skills und Tools">
          <div className={styles.group}>
            <p className={styles.groupLabel}>Schwerpunkte</p>
            <ul className={styles.tags} role="list">
              {skills.map((s) => <li key={s} className="tag tag-filled">{s}</li>)}
            </ul>
          </div>
          <div className={styles.group}>
            <p className={styles.groupLabel}>Tools</p>
            <ul className={styles.tags} role="list">
              {tools.map((t) => <li key={t} className="tag tag-outlined">{t}</li>)}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
