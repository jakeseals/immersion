import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1F2937',
}

export const metadata: Metadata = {
  title: 'Immersion | Teaching Internship Experience',
  description: 'A journey through three teaching sessions - Vanderbilt Capstone Project by Jake Seals',
  keywords: ['teaching', 'internship', 'education', 'Vanderbilt', 'capstone', 'VSA'],
  authors: [{ name: 'Jake Seals' }],
  creator: 'Jake Seals',
  publisher: 'Jake Seals',
  openGraph: {
    title: 'Immersion | Teaching Internship Experience',
    description: 'A journey through three teaching sessions',
    type: 'website',
    locale: 'en_US',
    siteName: 'Immersion Vanderbilt',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
