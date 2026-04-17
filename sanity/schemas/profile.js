export const profile = {
  name: 'profile',
  title: 'Profil',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Rolle', type: 'string' },
    {
      name: 'positioning',
      title: 'Positionierung (1 Satz)',
      type: 'text',
      rows: 2,
    },
    { name: 'location', title: 'Standort', type: 'string' },
    { name: 'email', title: 'E-Mail', type: 'string' },
    { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
    { name: 'xing', title: 'XING URL', type: 'url' },
    {
      name: 'bio',
      title: 'Biografie (Absätze)',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Jeder Eintrag = ein Absatz',
    },
    {
      name: 'skills',
      title: 'Schwerpunkte',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'methods',
      title: 'Methoden',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'education',
      title: 'Ausbildung',
      type: 'object',
      fields: [
        { name: 'degree', title: 'Abschluss', type: 'string' },
        { name: 'school', title: 'Hochschule', type: 'string' },
        { name: 'department', title: 'Fachbereich', type: 'string' },
      ],
    },
    {
      name: 'processSteps',
      title: 'Arbeitsweise (4 Schritte)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Nummer (z.B. 01)', type: 'string' },
            { name: 'title', title: 'Titel', type: 'string' },
            { name: 'description', title: 'Kurzbeschreibung', type: 'string' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role' },
  },
};

export const service = {
  name: 'service',
  title: 'Leistung',
  type: 'document',
  fields: [
    { name: 'number', title: 'Nummer (z.B. 01)', type: 'string' },
    { name: 'title', title: 'Titel', type: 'string' },
    { name: 'description', title: 'Beschreibung', type: 'text', rows: 2 },
    { name: 'order', title: 'Reihenfolge', type: 'number' },
  ],
  preview: {
    select: { title: 'title', subtitle: 'number' },
  },
};
