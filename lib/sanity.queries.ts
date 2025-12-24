import { sanityClient } from './sanity'
import type { SanitySession } from '@/types/sanity'

/**
 * Fetch all published sessions
 */
export async function getAllSessions(): Promise<SanitySession[]> {
  const query = `*[_type == "session" && isPublished == true] | order(sessionNumber asc) {
    _id,
    _type,
    sessionNumber,
    title,
    "slug": slug.current,
    heroImage,
    description,
    content,
    learningObjectives,
    gallery,
    branchPath,
    "nextSessions": nextSessions[]->{ _id, sessionNumber, title, "slug": slug.current },
    isPublished,
    publishedAt,
    _createdAt,
    _updatedAt
  }`

  return await sanityClient.fetch(query)
}

/**
 * Fetch a single session by slug
 */
export async function getSessionBySlug(slug: string): Promise<SanitySession | null> {
  const query = `*[_type == "session" && slug.current == $slug && isPublished == true][0] {
    _id,
    _type,
    sessionNumber,
    title,
    "slug": slug.current,
    heroImage,
    description,
    content,
    learningObjectives,
    gallery,
    branchPath,
    "nextSessions": nextSessions[]->{ _id, sessionNumber, title, "slug": slug.current },
    isPublished,
    publishedAt,
    _createdAt,
    _updatedAt
  }`

  return await sanityClient.fetch(query, { slug })
}

/**
 * Fetch a session by session number
 */
export async function getSessionByNumber(sessionNumber: number): Promise<SanitySession | null> {
  const query = `*[_type == "session" && sessionNumber == $sessionNumber && isPublished == true][0] {
    _id,
    _type,
    sessionNumber,
    title,
    "slug": slug.current,
    heroImage,
    description,
    content,
    learningObjectives,
    gallery,
    branchPath,
    "nextSessions": nextSessions[]->{ _id, sessionNumber, title, "slug": slug.current },
    isPublished,
    publishedAt,
    _createdAt,
    _updatedAt
  }`

  return await sanityClient.fetch(query, { sessionNumber })
}

/**
 * Fetch all session slugs for static generation
 */
export async function getAllSessionSlugs(): Promise<string[]> {
  const query = `*[_type == "session" && isPublished == true].slug.current`
  return await sanityClient.fetch(query)
}
