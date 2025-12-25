import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  name: 'default',
  title: 'Immersion Vanderbilt',

  projectId,
  dataset,

  basePath: '/studio',

  // Allow access from localhost and all Vercel deployment URLs
  cors: {
    allowCredentials: true,
  },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Sessions')
              .child(
                S.documentList()
                  .title('All Sessions')
                  .filter('_type == "session"')
                  .defaultOrdering([{ field: 'sessionNumber', direction: 'asc' }])
              ),
            ...S.documentTypeListItems().filter(
              (listItem) => !['session'].includes(listItem.getId()!)
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
