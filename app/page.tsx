import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Four Weeks in VSA | Immersion Vanderbilt',
  description: 'A reflection on my summer teaching internship experience at Vanderbilt. Explore four diverse teaching sessions across grade levels—psychology, audiology, nanoscience, and astrophysics.',
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
            Four diverse teaching sessions across grade levels—exploring psychology, sound, nanoscience, and the cosmos.
          </p>
        </div>
      </section>

      {/* Session Cards */}
      <section id="session-cards" className="container mx-auto px-4 py-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Session 1 */}
          <Link
            href="/sessions/1"
            className="group relative bg-white/50 backdrop-blur-sm rounded-lg p-6 border-2 border-charcoal/20 hover:border-slate transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:border-muted-gold focus:outline-none"
            aria-label="Session 1: The Psychology of Emotions for 7th and 8th grade"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-dusty-rose/10 to-slate/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-5xl font-serif text-charcoal/30 mb-3" aria-hidden="true">01</div>
              <h3 className="text-xl font-serif text-charcoal mb-2">The Psychology of Emotions</h3>
              <p className="text-sm text-charcoal/60 mb-4 font-semibold">7th/8th Grade</p>
              <div className="flex items-center text-slate font-semibold text-sm">
                Explore
                <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </div>
            </div>
          </Link>

          {/* Session 2 */}
          <Link
            href="/sessions/2"
            className="group relative bg-white/50 backdrop-blur-sm rounded-lg p-6 border-2 border-charcoal/20 hover:border-dusty-rose transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:border-muted-gold focus:outline-none"
            aria-label="Session 2: Audiology: The Journey of Sound for 11th grade"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-dusty-rose/10 to-muted-gold/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-5xl font-serif text-charcoal/30 mb-3" aria-hidden="true">02</div>
              <h3 className="text-xl font-serif text-charcoal mb-2">Audiology: The Journey of Sound</h3>
              <p className="text-sm text-charcoal/60 mb-4 font-semibold">11th Grade</p>
              <div className="flex items-center text-dusty-rose font-semibold text-sm">
                Explore
                <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </div>
            </div>
          </Link>

          {/* Session 3 */}
          <Link
            href="/sessions/3"
            className="group relative bg-white/50 backdrop-blur-sm rounded-lg p-6 border-2 border-charcoal/20 hover:border-muted-gold transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:border-muted-gold focus:outline-none"
            aria-label="Session 3: Nanoscience and Engineering for 9th and 10th grade"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-muted-gold/10 to-slate/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-5xl font-serif text-charcoal/30 mb-3" aria-hidden="true">03</div>
              <h3 className="text-xl font-serif text-charcoal mb-2">Nanoscience and Engineering</h3>
              <p className="text-sm text-charcoal/60 mb-4 font-semibold">9th/10th Grade</p>
              <div className="flex items-center text-muted-gold font-semibold text-sm">
                Explore
                <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </div>
            </div>
          </Link>

          {/* Session 4 */}
          <Link
            href="/sessions/4"
            className="group relative bg-white/50 backdrop-blur-sm rounded-lg p-6 border-2 border-charcoal/20 hover:border-slate-dark transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:border-muted-gold focus:outline-none"
            aria-label="Session 4: Astrophysics: Exploration of Dark Matter for 11th and 12th grade"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate/10 to-charcoal/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-5xl font-serif text-charcoal/30 mb-3" aria-hidden="true">04</div>
              <h3 className="text-xl font-serif text-charcoal mb-2">Astrophysics: Exploration of Dark Matter</h3>
              <p className="text-sm text-charcoal/60 mb-4 font-semibold">11th/12th Grade</p>
              <div className="flex items-center text-slate-dark font-semibold text-sm">
                Explore
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
