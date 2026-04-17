import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'raiko-portfolio',
  title: 'Raiko Moeller – Portfolio',

  projectId: '23efp5j0',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Inhalt')
          .items([
            S.listItem()
              .title('Profil')
              .child(
                S.document()
                  .schemaType('profile')
                  .documentId('profile')
              ),
            S.divider(),
            S.listItem()
              .title('Case Studies')
              .child(S.documentTypeList('caseStudy')),
            S.listItem()
              .title('Leistungen')
              .child(S.documentTypeList('service')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
