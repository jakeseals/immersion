import { getAllSessions } from '@/lib/sanity.queries'

export default async function sitemap() {
  const sessions = await getAllSessions().catch(() => [])
  
  const sessionUrls = sessions.map((session) => ({
    url: `https://immersion.vercel.app/sessions/${session.sessionNumber}`,
    lastModified: new Date(session._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://immersion.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...sessionUrls,
  ]
}
