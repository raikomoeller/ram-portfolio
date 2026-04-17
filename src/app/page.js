import { client, caseStudiesQuery, servicesQuery, profileQuery } from '@/lib/sanity';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Cases from '@/components/Cases';
import Services from '@/components/Services';
import Profile from '@/components/Profile';
import styles from './page.module.css';

export const revalidate = 60;

export default async function HomePage() {
  const [cases, services, profile] = await Promise.all([
    client.fetch(caseStudiesQuery),
    client.fetch(servicesQuery),
    client.fetch(profileQuery),
  ]);

  return (
    <>
      <Nav theme="dark" />
      <main id="main-content">
        <Hero profile={profile} />
        <Cases cases={cases} />
        <Services services={services} />
        <Profile profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
