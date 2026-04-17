import './globals.css';

export const metadata = {
  title: 'Raiko Moeller – Head of UX/UI Design',
  description: 'UX/UI Design für Public Sector & Institutionen. Design Systems, Qualitätsreviews und Accessibility (WCAG/BITV). Portfolio von Raiko Moeller.',
  keywords: ['UX Design', 'UI Design', 'Public Sector', 'Design Systems', 'Accessibility', 'WCAG', 'BITV', 'Potsdam'],
  authors: [{ name: 'Raiko Moeller' }],
  openGraph: {
    title: 'Raiko Moeller – Head of UX/UI Design',
    description: 'UX/UI Design für Public Sector & Institutionen.',
    url: 'https://raikomoeller.de',
    siteName: 'Raiko Moeller Portfolio',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
