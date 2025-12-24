import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Immersion | Teaching Internship Experience',
  description: 'A journey through three teaching sessions - Vanderbilt Capstone Project',
  keywords: ['teaching', 'internship', 'education', 'Vanderbilt', 'capstone'],
  authors: [{ name: 'Jake Seals' }],
  openGraph: {
    title: 'Immersion | Teaching Internship Experience',
    description: 'A journey through three teaching sessions',
    type: 'website',
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
