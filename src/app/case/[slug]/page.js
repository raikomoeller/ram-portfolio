import { client, caseStudyBySlugQuery, caseStudiesQuery } from '@/lib/sanity';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './case.module.css';

export const revalidate = 60;

export async function generateStaticParams() {
  const cases = await client.fetch(caseStudiesQuery);
  return cases
    .filter((c) => c.slug?.current)
    .map((c) => ({ slug: c.slug.current }));
}

export async function generateMetadata({ params }) {
  const cs = await client.fetch(caseStudyBySlugQuery, { slug: params.slug });
  return {
    title: `${cs?.title || 'Case Study'} – Raiko Moeller`,
    description: cs?.outcome || cs?.shortDescription || '',
  };
}

export default async function CasePage({ params }) {
  const cs = await client.fetch(caseStudyBySlugQuery, { slug: params.slug });

  if (!cs) {
    return (
      <>
        <Nav theme="dark" />
        <main id="main-content" style={{ padding: '10rem 3rem', textAlign: 'center' }}>
          <h1>Case Study nicht gefunden</h1>
          <Link href="/" className="btn btn-ink" style={{ marginTop: '2rem', display: 'inline-flex' }}>
            Zurück zur Startseite
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Nav theme="dark" />
      <main id="main-content">

        {/* ── HEADER ── */}
        <header className={styles.header} aria-labelledby="case-title">
          <div className={styles.headerBg} aria-hidden="true" />
          <div className={styles.headerBlob} aria-hidden="true" />
          <div className="container">
            <Link href="/#cases" className={styles.backLink}>
              ← Alle Projekte
            </Link>
            <p className={`text-eyebrow ${styles.eyebrow}`}>
              Case Study · {cs.context} · {cs.period}
            </p>
            <h1 id="case-title" className={styles.title}>{cs.title}</h1>
            {cs.outcome && <p className={styles.outcome}>{cs.outcome}</p>}

            {/* Meta Bar */}
            <dl className={styles.metaBar}>
              {[
                { label: 'Meine Rolle', value: cs.role },
                { label: 'Zeitraum',    value: cs.period },
                { label: 'Auftraggeber', value: cs.client },
                { label: 'Team',        value: cs.team },
                { label: 'Tools',       value: cs.tools },
              ].filter(m => m.value).map((m) => (
                <div key={m.label} className={styles.metaItem}>
                  <dt className={styles.metaLabel}>{m.label}</dt>
                  <dd className={styles.metaValue}>{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <div className={`container ${styles.body}`}>

          {/* ── OVERVIEW ── */}
          {(cs.contextLong || cs.contribution) && (
            <section className={styles.section} aria-labelledby="overview-title">
              <p className="section-label">Kurzüberblick</p>
              <h2 id="overview-title" className="text-heading-l">Kontext &amp; Ziel</h2>
              {cs.contextLong && <p className={styles.prose}>{cs.contextLong}</p>}
              {cs.contribution?.length > 0 && (
                <>
                  <p className={styles.contribLabel}>Mein Beitrag</p>
                  <ul className={styles.bullets}>
                    {cs.contribution.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </>
              )}
            </section>
          )}

          {/* ── PROBLEM ── */}
          {(cs.problem || cs.constraints?.length > 0) && (
            <section className={styles.section} aria-labelledby="problem-title">
              <p className="section-label">Problem &amp; Ausgangslage</p>
              <h2 id="problem-title" className="text-heading-l">Was war die Herausforderung?</h2>
              {cs.problem && <p className={styles.prose}>{cs.problem}</p>}
              {cs.constraints?.length > 0 && (
                <ul className={styles.bullets}>
                  {cs.constraints.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              )}
            </section>
          )}

          {/* ── PROCESS ── */}
          {cs.process?.length > 0 && (
            <section className={styles.section} aria-labelledby="process-title">
              <p className="section-label">Vorgehen</p>
              <h2 id="process-title" className="text-heading-l">Prozess in {cs.process.length} Schritten</h2>
              <ol className={styles.timeline} role="list">
                {cs.process.map((s, i) => (
                  <li key={i} className={styles.timelineStep}>
                    <span className={styles.timelineNum} aria-hidden="true">{s.step}</span>
                    <div>
                      <h3 className={styles.timelineTitle}>{s.title}</h3>
                      <p className={styles.timelineDesc}>{s.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* ── DECISIONS ── */}
          {cs.decisions?.length > 0 && (
            <section className={styles.section} aria-labelledby="decisions-title">
              <p className="section-label">Schlüssel-Entscheidungen</p>
              <h2 id="decisions-title" className="text-heading-l">Highlights &amp; Trade-offs</h2>
              <div className={styles.decisions}>
                {cs.decisions.map((d, i) => (
                  <article key={i} className={styles.decisionCard}>
                    <div className={styles.decisionHeader}>
                      <span className={styles.decisionBadge}>{d.badge}</span>
                      <h3 className={styles.decisionTitle}>{d.title}</h3>
                    </div>
                    <dl className={styles.decisionGrid}>
                      <div>
                        <dt className={styles.decisionColLabel}>Warum</dt>
                        <dd className={styles.decisionColText}>{d.why}</dd>
                      </div>
                      <div>
                        <dt className={styles.decisionColLabel}>Trade-off</dt>
                        <dd className={styles.decisionColText}>{d.tradeoff}</dd>
                      </div>
                      <div>
                        <dt className={`${styles.decisionColLabel} ${styles.accent}`}>Resultat</dt>
                        <dd className={styles.decisionColText}>{d.result}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* ── ACCESSIBILITY ── */}
          {cs.accessibility?.length > 0 && (
            <section className={styles.section} aria-labelledby="a11y-title">
              <p className="section-label">Barrierefreiheit</p>
              <h2 id="a11y-title" className="text-heading-l">Was wurde berücksichtigt?</h2>
              <div className={styles.a11yGrid}>
                {cs.accessibility.map((a, i) => (
                  <div key={i} className={styles.a11yItem}>
                    <p className={`${styles.a11yStatus} ${a.status === 'special' ? styles.special : styles.ok}`}>
                      {a.status === 'special' ? '↗ Sonderfall' : '✓ Standard'}
                    </p>
                    <h3 className={styles.a11yTitle}>{a.title}</h3>
                    <p className={styles.a11yDesc}>{a.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── OUTCOMES ── */}
          {cs.outcomes?.length > 0 && (
            <section className={styles.section} aria-labelledby="outcomes-title">
              <p className="section-label">Ergebnis</p>
              <h2 id="outcomes-title" className="text-heading-l">Was wurde erreicht?</h2>
              <ul className={styles.outcomes} role="list">
                {cs.outcomes.map((o, i) => (
                  <li key={i} className={styles.outcome}>
                    <span className={styles.outcomeArrow} aria-hidden="true">→</span>
                    <p>{o}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── LEARNINGS ── */}
          {cs.learnings?.length > 0 && (
            <section className={styles.section} aria-labelledby="learnings-title">
              <p className="section-label">Learnings</p>
              <h2 id="learnings-title" className="text-heading-l">Was habe ich mitgenommen?</h2>
              <div className={styles.learnings}>
                {cs.learnings.map((l, i) => (
                  <article key={i} className={styles.learningCard}>
                    <span className={styles.learningIcon} aria-hidden="true">{l.icon}</span>
                    <p className={styles.learningLabel}>{l.label}</p>
                    <p className={styles.learningText}>{l.text}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* ── LEGAL ── */}
          {cs.legal && (
            <section className={styles.section} aria-labelledby="legal-title">
              <p className="section-label">Rechtliches &amp; Attribution</p>
              <div className={styles.legalBox} role="note">
                <span aria-hidden="true">ℹ</span>
                <p>{cs.legal}</p>
              </div>
            </section>
          )}

        </div>

        {/* ── CTA / NEXT CASE ── */}
        <div className={styles.cta}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <p className={styles.ctaLabel}>Nächster Schritt</p>
                <h2 className={styles.ctaTitle}>Interesse an einer Zusammenarbeit?</h2>
                <p className={styles.ctaSub}>Ich freue mich über Projekte, die Struktur, Qualität und Zugänglichkeit ernst nehmen.</p>
              </div>
              <div className={styles.ctaBtns}>
                <Link href="/about#kontakt" className="btn btn-primary">Kontakt aufnehmen</Link>
                {cs.nextCase && (
                  <Link href={`/case/${cs.nextCase.slug.current}`} className="btn btn-ghost">
                    Nächstes Projekt →
                  </Link>
                )}
                {!cs.nextCase && (
                  <Link href="/#cases" className="btn btn-ghost">Weitere Projekte</Link>
                )}
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
