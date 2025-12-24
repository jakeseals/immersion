import { PortableTextBlock } from 'next-sanity'
import { ImageAsset, Slug } from '@sanity/types'

export interface SanitySession {
  _id: string
  _type: 'session'
  sessionNumber: number
  title: string
  slug: Slug
  heroImage?: SanityImage
  description: string
  content: PortableTextBlock[]
  learningObjectives: string[]
  gallery: SanityImage[]
  branchPath: 'main' | 'path-a' | 'path-b'
  nextSessions: SanitySession[]
  isPublished: boolean
  publishedAt?: string
  _createdAt: string
  _updatedAt: string
}

export interface SanityImage {
  _type: 'image'
  asset: ImageAsset
  alt?: string
  caption?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface SanityActivity {
  _type: 'activity'
  title: string
  description: string
  duration: number
}
