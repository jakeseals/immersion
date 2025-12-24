export interface Session {
  _id: string
  sessionNumber: number
  title: string
  slug: string
  description: string
  content: {
    introduction: string
    mainContent: string
    learningObjectives: string[]
    activities: Activity[]
  }
  navigation: {
    previousSession?: string
    nextSessions: string[]
    branch: 'main' | 'path-a' | 'path-b'
  }
  media: {
    heroImage?: string
    gallery: string[]
    videos: Video[]
  }
  metadata: {
    order: number
    isPublished: boolean
    publishedAt?: Date
    lastModified: Date
    author: string
  }
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
  createdAt: Date
  updatedAt: Date
}

export interface Activity {
  title: string
  description: string
  duration: number
}

export interface Video {
  url: string
  title: string
  thumbnail: string
}

export interface User {
  _id: string
  email: string
  password: string
  name: string
  role: 'admin' | 'editor'
  createdAt: Date
  lastLogin?: Date
}

export interface SiteSettings {
  _id: string
  siteName: string
  tagline: string
  contactEmail: string
  socialLinks: {
    twitter?: string
    linkedin?: string
    instagram?: string
  }
  theme: {
    primaryColor: string
    secondaryColor: string
    accentColor: string
    backgroundColor: string
  }
  navigation: {
    mainMenu: MenuItem[]
  }
  updatedAt: Date
}

export interface MenuItem {
  label: string
  url: string
  order: number
}
