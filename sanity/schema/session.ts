import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'session',
  title: 'Session',
  type: 'document',
  fields: [
    defineField({
      name: 'sessionNumber',
      title: 'Session Number',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(3),
      description: 'Session number (1, 2, or 3)',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
        {
          type: 'object',
          name: 'activity',
          title: 'Activity',
          fields: [
            { name: 'title', type: 'string', title: 'Activity Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'duration', type: 'number', title: 'Duration (minutes)' },
          ],
        },
      ],
    }),
    defineField({
      name: 'learningObjectives',
      title: 'Learning Objectives',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key learning objectives or takeaways from this session',
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'branchPath',
      title: 'Branch Path',
      type: 'string',
      options: {
        list: [
          { title: 'Main Path', value: 'main' },
          { title: 'Path A', value: 'path-a' },
          { title: 'Path B', value: 'path-b' },
        ],
        layout: 'radio',
      },
      initialValue: 'main',
    }),
    defineField({
      name: 'nextSessions',
      title: 'Next Sessions (Branching Navigation)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'session' }] }],
      description: 'Select which sessions come next in the navigation flow',
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle to publish this session on the website',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      sessionNumber: 'sessionNumber',
      media: 'heroImage',
      isPublished: 'isPublished',
    },
    prepare(selection) {
      const { title, sessionNumber, isPublished } = selection
      return {
        title: `Session ${sessionNumber}: ${title}`,
        subtitle: isPublished ? '✅ Published' : '📝 Draft',
        media: selection.media,
      }
    },
  },
})
