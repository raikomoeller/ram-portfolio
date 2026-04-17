'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav({ theme = 'dark' }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${styles[theme]}`}
      role="banner"
    >
      <nav className={styles.inner} aria-label="Hauptnavigation">
        <Link href="/" className={styles.logo} aria-label="Raiko Moeller – Startseite">
          Raiko Moeller
        </Link>
        <ul className={styles.links} role="list">
          <li><Link href="/#cases">Projekte</Link></li>
          <li><Link href="/#services">Leistungen</Link></li>
          <li><Link href="/about">Über mich</Link></li>
          <li><Link href="/about#kontakt" className={styles.cta}>Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
}
