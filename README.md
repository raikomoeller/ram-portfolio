# Portfolio

Next.js + Sanity Portfolio-Website für raikomoeller.de

## Tech Stack

- **Frontend:** Next.js 14 (App Router)
- **CMS:** Sanity (Project ID: `23efp5j0`)
- **Hosting:** Vercel
- **Styling:** CSS Modules + Design Tokens (CSS Variables)

---

## Lokale Einrichtung

### 1. Repository klonen
```bash
git clone https://github.com/DEIN-USERNAME/raiko-portfolio.git
cd raiko-portfolio
```

### 2. Abhängigkeiten installieren
```bash
npm install
```

### 3. Umgebungsvariablen einrichten
Die `.env.local` Datei ist bereits vorkonfiguriert:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=23efp5j0
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 4. Sanity Studio einrichten
```bash
# Sanity CLI installieren (einmalig)
npm install -g sanity

# Sanity Studio starten (auf http://localhost:3333)
npx sanity dev
```

### 5. Next.js Entwicklungsserver starten
```bash
npm run dev
# → http://localhost:3000
```

---

## Inhalte pflegen (Sanity Studio)

### Sanity Studio aufrufen
- Lokal: `http://localhost:3333`
- Nach Deployment: `https://raikomoeller.de/studio` (nach Konfiguration)

### Reihenfolge beim ersten Befüllen

1. **Profil** anlegen (einmalig)
   - Name, Rolle, Bio-Absätze, Skills, Tools, Kontaktdaten

2. **Leistungen** anlegen (8 Stück)
   - Nummer, Titel, Beschreibung, Reihenfolge

3. **Case Studies** anlegen
   - Alle Felder befüllen
   - `isLinked` auf `true` setzen wenn die Study fertig ist

### Case Study anlegen – Schritt für Schritt
1. Sanity Studio öffnen
2. „Case Studies" → „+ Neu"
3. Titel eingeben → Slug wird automatisch generiert
4. Alle gewünschten Felder befüllen
5. Speichern → erscheint sofort auf der Website

---

## Deployment auf Vercel

### Einmaliges Setup
1. [vercel.com](https://vercel.com) öffnen
2. „Add New Project" → GitHub Repository verbinden
3. Vercel erkennt Next.js automatisch
4. „Deploy" klicken

### Domain einrichten
1. Vercel → Projekt → Settings → Domains
2. `raikomoeller.de` eintragen
3. Bei Hosteurope DNS-Einträge setzen:
   - A-Record Root: `76.76.21.21`
   - A-Record www: `76.76.21.21`

### Automatisches Deployment
- Jeder Push auf `main` → automatisches Live-Deployment
- Änderungen in Sanity → nach max. 60 Sekunden live

---

## Projektstruktur

```
raiko-portfolio/
├── sanity/
│   └── schemas/
│       ├── caseStudy.js     Felder für Case Studies
│       ├── profile.js       Felder für Profil & Services
│       └── index.js         Schema-Export
├── src/
│   ├── app/
│   │   ├── page.js          Startseite
│   │   ├── about/           Über mich / Kontakt
│   │   └── case/[slug]/     Case Study Detail
│   ├── components/
│   │   ├── Nav.js           Navigation
│   │   ├── Hero.js          Hero-Bereich
│   │   ├── Cases.js         Case Cards
│   │   ├── Services.js      Leistungsraster
│   │   ├── Profile.js       Kurzprofil + Skills
│   │   └── Footer.js        Footer
│   └── lib/
│       └── sanity.js        Client + alle Queries
├── .env.local               Umgebungsvariablen
├── next.config.js
└── sanity.config.js
```

---

## Barrierefreiheit

- Skip-Link „Zum Hauptinhalt springen" auf allen Seiten
- Semantisches HTML (`<header>`, `<main>`, `<nav>`, `<footer>`, `<article>`, `<section>`)
- ARIA-Labels auf allen interaktiven Elementen
- `:focus-visible` Outline in Accent-Farbe
- `prefers-reduced-motion` berücksichtigt (Hero-Animation)
- Alle Farben mit WCAG AA-konformen Kontrastverhältnissen
- `lang="de"` auf HTML-Element

---

## Kontakt

post@raikomoeller.de
