import { client, profileQuery } from '@/lib/sanity';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './about.module.css';

export const revalidate = 60;

export const metadata = {
  title: 'Über mich – Raiko Moeller UX/UI Design',
  description: 'UX/UI Designer mit Fokus auf Public Sector & Institutionen. Design Systems, Qualitätsreviews, WCAG/BITV.',
};

export default async function AboutPage() {
  const profile = await client.fetch(profileQuery);

  const name     = profile?.name     || 'Raiko Moeller';
  const role     = profile?.role     || 'Head of UX/UI Design';
  const bio      = profile?.bio      || ['Ich gestalte digitale Interfaces, die für Menschen funktionieren – nicht für Briefings.'];
  const skills   = profile?.skills   || ['UX Research','Informationsarchitektur','UI Design','Design Systems','Accessibility','Prototyping','Quality Reviews','Handoff & Specs'];
  const tools    = profile?.tools    || ['Figma','Miro','FigJam','Notion','TYPO3','Confluence','Jira'];
  const methods  = profile?.methods  || ['Personas','User Journey Maps','WCAG 2.1','BITV','Atomic Design'];
  const email    = profile?.email    || 'post@raikomoeller.de';
  const linkedin = profile?.linkedin || 'https://www.linkedin.com/in/raikomoeller';
  const xing     = profile?.xing     || 'https://www.xing.com/profile/Raiko_Moeller';
  const steps    = profile?.processSteps || [
    { number:'01', title:'Verstehen',    description:'Ziele, Nutzer, Constraints klären.' },
    { number:'02', title:'Strukturieren',description:'IA, Flows – Logik vor Ästhetik.' },
    { number:'03', title:'Gestalten',    description:'Iterativ, testbar, mit Rationale.' },
    { number:'04', title:'Übergeben',    description:'Sauber, dokumentiert, ohne Rückfragen.' },
  ];
  const edu = profile?.education || { degree:'Kommunikationsdesign (B.A.)', school:'Fachhochschule Potsdam', department:'Fachbereich Design' };

  return (
    <>
      <Nav theme="dark" />
      <main id="main-content">

        {/* ── HEADER ── */}
        <section className={styles.header} aria-labelledby="about-title">
          <div className={styles.headerBg} aria-hidden="true" />
          <div className={styles.headerBlob} aria-hidden="true" />
          <div className={`container ${styles.headerGrid}`}>
            <div>
              <p className={`text-eyebrow ${styles.eyebrow}`}>Über mich</p>
              <h1 id="about-title" className={styles.name}>
                <span>{name.split(' ')[0]}</span>
                <span>{name.split(' ')[1]}</span>
              </h1>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.headerIntro}>
                <strong>{role}</strong> mit Fokus auf digitale Services für öffentliche Auftraggeber,
                Institutionen und Organisationen des Public Sector.
              </p>
              <p className={styles.headerSub}>
                Schwerpunkte: <strong>Design Systems &amp; Pattern Libraries</strong>,
                <strong> Qualitätsreviews</strong> und barrierefreies UI nach
                <strong> WCAG/BITV</strong> – als Standard, nicht als Nachgedanke.
              </p>
            </div>
          </div>
        </section>

        {/* ── PROFIL + SKILLS ── */}
        <section className={styles.body} aria-labelledby="profil-title">
          <div className={`container ${styles.bodyGrid}`}>

            <div className={styles.profileText}>
              <p className="section-label">Profil</p>
              <h2 id="profil-title" className="text-heading-xl">Wer ich bin</h2>
              {bio.map((p, i) => (
                <p key={i} className={styles.para}>{p}</p>
              ))}

              {/* Ausbildung */}
              <div className={styles.edu}>
                <p className={styles.eduDegree}>{edu.degree}</p>
                <p className={styles.eduSchool}>{edu.school}</p>
                <p className={styles.eduDept}>{edu.department}</p>
              </div>
            </div>

            <aside className={styles.skills} aria-label="Skills, Tools und Methoden">
              {[
                { label: 'Schwerpunkte', items: skills, type: 'filled' },
                { label: 'Tools',        items: tools,  type: 'outlined' },
                { label: 'Methoden',     items: methods, type: 'outlined' },
              ].map((g) => (
                <div key={g.label} className={styles.skillGroup}>
                  <p className={styles.skillLabel}>{g.label}</p>
                  <ul className={styles.tagList} role="list">
                    {g.items.map((item) => (
                      <li key={item} className={`tag tag-${g.type}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </aside>
          </div>
        </section>

        {/* ── PROZESS ── */}
        <section className={styles.process} aria-labelledby="process-title">
          <div className="container">
            <p className="section-label">Arbeitsweise</p>
            <h2 id="process-title" className="text-heading-xl">Mein Prozess</h2>
          </div>
          <ol className={styles.steps} role="list">
            {steps.map((s) => (
              <li key={s.number} className={styles.step}>
                <span className={styles.stepNum} aria-hidden="true">{s.number}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── KONTAKT ── */}
        <section id="kontakt" className={styles.contact} aria-labelledby="kontakt-title">
          <div className={`container ${styles.contactGrid}`}>
            <div>
              <p className="section-label">Kontakt</p>
              <h2 id="kontakt-title" className={`text-heading-xl ${styles.contactTitle}`}>
                Gemeinsam arbeiten
              </h2>
              <p className={styles.contactIntro}>
                Ich bin offen für Projekt-Anfragen, Festanstellungen und freie Mitarbeit –
                insbesondere bei Projekten im Public Sector, bei Institutionen und bei Teams,
                die UX-Qualität und Barrierefreiheit ernst nehmen.
              </p>
              <p className={styles.contactSub}>Remote oder in der Region Berlin/Potsdam.</p>
            </div>

            <ul className={styles.contactOptions} role="list">
              {[
                { platform: 'E-Mail', value: email, href: `mailto:${email}` },
                { platform: 'LinkedIn', value: 'linkedin.com/in/raikomoeller', href: linkedin, external: true },
                { platform: 'XING', value: 'XING Profil', href: xing, external: true },
                { platform: 'Portfolio', value: 'Projekte ansehen', href: '/#cases' },
              ].map((c) => (
                <li key={c.platform}>
                  <a
                    href={c.href}
                    className={styles.contactOption}
                    {...(c.external ? { target:'_blank', rel:'noopener noreferrer' } : {})}
                  >
                    <span>
                      <span className={styles.optionPlatform}>{c.platform}</span>
                      <span className={styles.optionValue}>{c.value}</span>
                    </span>
                    <span className={styles.optionArrow} aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>
      <Footer profile={profile} />
    </>
  );
}
