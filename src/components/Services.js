// Services.js
import styles from './Services.module.css';

const fallbackServices = [
  { _id:'1', number:'01', title:'Workshops & Anforderungsklärung', description:'Stakeholder-Alignment, Kick-off-Workshops, Requirements Engineering.' },
  { _id:'2', number:'02', title:'Informationsarchitektur', description:'Sitemaps, Navigationslogik, User Flows.' },
  { _id:'3', number:'03', title:'Wireframes & Prototypen', description:'Von Lo-Fi bis klickbarem High-Fidelity-Prototyp.' },
  { _id:'4', number:'04', title:'UI Design', description:'Visuell konsistente Oberflächen, States, Responsiveness.' },
  { _id:'5', number:'05', title:'Design Systems & Komponenten', description:'Pattern Libraries – skalierbar für große Teams.' },
  { _id:'6', number:'06', title:'Reviews & Qualitätsstandards', description:'UX-Reviews, Heuristic Evaluations, QA vor Go-Live.' },
  { _id:'7', number:'07', title:'Handoff & Specs', description:'Saubere Entwickler-Übergaben, weniger Rückfragen.' },
  { _id:'8', number:'08', title:'Accessibility (WCAG/BITV)', description:'Kontrastprüfung, Tastaturnavigation – als Standard.' },
];

export default function Services({ services = [] }) {
  const items = services.length > 0 ? services : fallbackServices;
  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <div className="container">
        <p className="section-label" style={{color:'var(--accent)'}}>Was ich liefere</p>
        <h2 id="services-title" className={`text-heading-xl ${styles.title}`}>Leistungen</h2>
      </div>
      <ul className={styles.grid} role="list">
        {items.map((s) => (
          <li key={s._id} className={styles.item}>
            <span className={styles.num}>{s.number}</span>
            <h3 className={styles.itemTitle}>{s.title}</h3>
            <p className={styles.itemDesc}>{s.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
