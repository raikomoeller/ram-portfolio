export const caseStudy = {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Projekttitel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL-Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Reihenfolge (1 = zuerst)',
      type: 'number',
    },
    {
      name: 'isLinked',
      title: 'Case Study verfügbar (verlinkt)?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'context',
      title: 'Kontext / Branche',
      type: 'string',
      description: 'z.B. "Hochschule / Forschung" oder "Kommune / Public Sector"',
    },
    {
      name: 'shortDescription',
      title: 'Kurzbeschreibung (für die Card)',
      type: 'text',
      rows: 2,
    },
    {
      name: 'tags',
      title: 'Tags (Beitrag)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'z.B. Research, IA, UX Konzept, Prototyp',
    },

    // ── HEADER ──────────────────────────────────────────────────
    {
      name: 'outcome',
      title: 'Outcome (1 Satz)',
      type: 'text',
      rows: 2,
      description: 'Was wurde besser / gelöst?',
    },
    {
      name: 'role',
      title: 'Meine Rolle',
      type: 'string',
    },
    {
      name: 'period',
      title: 'Zeitraum',
      type: 'string',
    },
    {
      name: 'client',
      title: 'Auftraggeber / Branche',
      type: 'string',
    },
    {
      name: 'team',
      title: 'Team',
      type: 'string',
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'string',
    },

    // ── OVERVIEW ────────────────────────────────────────────────
    {
      name: 'contextLong',
      title: 'Kontext (ausführlich, 3–5 Zeilen)',
      type: 'text',
      rows: 4,
    },
    {
      name: 'contribution',
      title: 'Mein Beitrag (Bulletpoints)',
      type: 'array',
      of: [{ type: 'string' }],
    },

    // ── PROBLEM ─────────────────────────────────────────────────
    {
      name: 'problem',
      title: 'Problem & Ausgangslage',
      type: 'text',
      rows: 4,
    },
    {
      name: 'constraints',
      title: 'Randbedingungen',
      type: 'array',
      of: [{ type: 'string' }],
    },

    // ── PROCESS ─────────────────────────────────────────────────
    {
      name: 'process',
      title: 'Vorgehen / Prozess-Schritte',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', title: 'Schritt (z.B. 01)', type: 'string' },
            { name: 'title', title: 'Titel', type: 'string' },
            { name: 'description', title: 'Beschreibung', type: 'text', rows: 3 },
          ],
        },
      ],
    },

    // ── DECISIONS ───────────────────────────────────────────────
    {
      name: 'decisions',
      title: 'Schlüssel-Entscheidungen',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'badge', title: 'Badge (z.B. "Entscheidung 1")', type: 'string' },
            { name: 'title', title: 'Titel der Entscheidung', type: 'string' },
            { name: 'why', title: 'Warum', type: 'text', rows: 2 },
            { name: 'tradeoff', title: 'Trade-off', type: 'text', rows: 2 },
            { name: 'result', title: 'Resultat', type: 'text', rows: 2 },
          ],
        },
      ],
    },

    // ── OUTCOMES ────────────────────────────────────────────────
    {
      name: 'outcomes',
      title: 'Ergebnisse',
      type: 'array',
      of: [{ type: 'string' }],
    },

    // ── LEARNINGS ───────────────────────────────────────────────
    {
      name: 'learnings',
      title: 'Learnings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon (Emoji)', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'text', title: 'Text', type: 'text', rows: 2 },
          ],
        },
      ],
    },

    // ── ACCESSIBILITY ───────────────────────────────────────────
    {
      name: 'accessibility',
      title: 'Barrierefreiheit',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'status',
              title: 'Status',
              type: 'string',
              options: { list: ['standard', 'special'] },
            },
            { name: 'title', title: 'Titel', type: 'string' },
            { name: 'description', title: 'Beschreibung', type: 'text', rows: 2 },
          ],
        },
      ],
    },

    // ── LEGAL ───────────────────────────────────────────────────
    {
      name: 'legal',
      title: 'Rechtliches / Attribution',
      type: 'text',
      rows: 3,
    },

    // ── NEXT CASE ───────────────────────────────────────────────
    {
      name: 'nextCase',
      title: 'Nächste Case Study',
      type: 'reference',
      to: [{ type: 'caseStudy' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'context',
    },
  },
};
