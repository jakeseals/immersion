'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { HiExclamationTriangle } from 'react-icons/hi2'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <main className="min-h-screen romantic-gradient flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <HiExclamationTriangle className="text-8xl text-dusty-rose mx-auto mb-6 opacity-60" />
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
          Something went wrong
        </h1>
        <p className="text-xl text-charcoal/70 mb-8">
          We encountered an unexpected error. Please try again.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-charcoal text-cream rounded-lg hover:bg-charcoal-dark transition-all shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 bg-white/70 text-charcoal rounded-lg hover:bg-white transition-all shadow-lg hover:shadow-xl border-2 border-charcoal/20">
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  )
}
