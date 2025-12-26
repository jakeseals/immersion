import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Four Weeks in VSA | Immersion Vanderbilt',
  description: 'A reflection on my summer teaching internship experience at Vanderbilt. Explore three sessions documenting the journey of classroom discovery, connection, and growth.',
  keywords: ['Vanderbilt', 'teaching internship', 'capstone project', 'education', 'VSA'],
  authors: [{ name: 'Jake Seals' }],
  openGraph: {
    title: 'Four Weeks in VSA | Immersion Vanderbilt',
    description: 'A reflection on my summer teaching internship experience',
    type: 'website',
    locale: 'en_US',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen romantic-gradient" id="main-content">
      {/* Skip to content link for accessibility */}
      <a href="#session-cards" className="skip-to-content">
        Skip to sessions
      </a>

      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <h1 className="text-xl md:text-2xl font-serif text-charcoal">Immersion Vanderbilt</h1>
        <p className="text-base md:text-lg text-charcoal/70 mt-0.5">Jake Seals</p>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-charcoal mb-6 animate-fade-in">
            Four Weeks in VSA
          </h2>
          <p className="text-xl md:text-2xl text-charcoal/70 mb-12 leading-relaxed animate-slide-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Session Cards */}
      <section id="session-cards" className="container mx-auto px-4 py-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Session 1 */}
          <Link
            href="/sessions/1"
            className="group relative bg-white/50 backdrop-blur-sm rounded-lg p-8 border-2 border-charcoal/20 hover:border-slate transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:border-muted-gold focus:outline-none"
            aria-label="Session 1: First impressions and early discoveries"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-dusty-rose/10 to-slate/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-6xl font-serif text-charcoal/30 mb-4" aria-hidden="true">01</div>
              <h3 className="text-2xl font-serif text-charcoal mb-3">Session One</h3>
              <p className="text-charcoal/70 mb-6">
                First impressions and early discoveries in the classroom.
              </p>
              <div className="flex items-center text-slate font-semibold">
                Explore Session
                <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </div>
            </div>
          </Link>

          {/* Session 2 */}
          <Link
            href="/sessions/2"
            className="group relative bg-white/50 backdrop-blur-sm rounded-lg p-8 border-2 border-charcoal/20 hover:border-dusty-rose transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:border-muted-gold focus:outline-none"
            aria-label="Session 2: Building connections and deepening understanding"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-dusty-rose/10 to-muted-gold/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-6xl font-serif text-charcoal/30 mb-4" aria-hidden="true">02</div>
              <h3 className="text-2xl font-serif text-charcoal mb-3">Session Two</h3>
              <p className="text-charcoal/70 mb-6">
                Building connections and deepening understanding.
              </p>
              <div className="flex items-center text-dusty-rose font-semibold">
                Explore Session
                <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </div>
            </div>
          </Link>

          {/* Session 3 */}
          <Link
            href="/sessions/3"
            className="group relative bg-white/50 backdrop-blur-sm rounded-lg p-8 border-2 border-charcoal/20 hover:border-muted-gold transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:border-muted-gold focus:outline-none"
            aria-label="Session 3: Reflections and lasting lessons learned"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-muted-gold/10 to-slate/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-6xl font-serif text-charcoal/30 mb-4" aria-hidden="true">03</div>
              <h3 className="text-2xl font-serif text-charcoal mb-3">Session Three</h3>
              <p className="text-charcoal/70 mb-6">
                Reflections and lasting lessons learned.
              </p>
              <div className="flex items-center text-muted-gold font-semibold">
                Explore Session
                <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-charcoal/20">
        <div className="text-center text-sm text-charcoal/60">
          <p>Vanderbilt University Capstone Project • 2025</p>
        </div>
      </footer>
    </main>
  )
}
