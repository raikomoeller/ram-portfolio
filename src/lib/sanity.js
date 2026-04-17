import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}

// ── QUERIES ──────────────────────────────────────────────────────

// Alle Case Studies für die Übersicht
export const caseStudiesQuery = `
  *[_type == "caseStudy"] | order(order asc) {
    _id,
    title,
    slug,
    context,
    contribution,
    tags,
    shortDescription,
    isLinked,
    order
  }
`;

// Einzelne Case Study für die Detailseite
export const caseStudyBySlugQuery = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    outcome,
    context,
    role,
    period,
    client,
    team,
    tools,
    contribution,
    tags,
    shortDescription,
    problem,
    constraints,
    process[]{
      step,
      title,
      description
    },
    decisions[]{
      badge,
      title,
      why,
      tradeoff,
      result
    },
    outcomes[],
    learnings[]{
      icon,
      label,
      text
    },
    accessibility[]{
      status,
      title,
      description
    },
    legal,
    nextCase->{
      title,
      slug
    }
  }
`;

// Profil
export const profileQuery = `
  *[_type == "profile"][0] {
    name,
    role,
    positioning,
    location,
    email,
    linkedin,
    xing,
    bio[],
    skills[],
    tools[],
    methods[],
    education,
    processSteps[]{
      number,
      title,
      description
    }
  }
`;

// Services / Leistungen
export const servicesQuery = `
  *[_type == "service"] | order(order asc) {
    _id,
    number,
    title,
    description,
    order
  }
`;
