// src/components/Cases.js
import Link from 'next/link';
import styles from './Cases.module.css';

export default function Cases({ cases = [] }) {
  return (
    <section id="cases" className={styles.section} aria-labelledby="cases-title">
      <div className="container">
        <p className="section-label">Ausgewählte Projekte</p>
        <h2 id="cases-title" className={`text-heading-xl ${styles.title}`}>Case Studies</h2>
      </div>
      <div className={styles.grid} role="list">
        {cases.map((c) => (
          <article key={c._id} className={styles.card} role="listitem">
            {c.isLinked ? (
              <Link href={`/case/${c.slug.current}`} className={styles.cardInner}>
                <CardContent c={c} />
              </Link>
            ) : (
              <div className={styles.cardInner}>
                <CardContent c={c} />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function CardContent({ c }) {
  return (
    <>
      <span className={`text-eyebrow ${styles.context}`}>{c.context}</span>
      <h3 className={`text-heading-m ${styles.cardTitle}`}>{c.title}</h3>
      <div className={styles.tags} aria-label="Mein Beitrag">
        {(c.tags || []).map((tag) => (
          <span key={tag} className="tag tag-accent">{tag}</span>
        ))}
      </div>
      <p className={styles.desc}>{c.shortDescription}</p>
      <span className={styles.link} aria-hidden={!c.isLinked}>
        {c.isLinked ? 'Case Study ansehen →' : 'Demnächst'}
      </span>
    </>
  );
}
