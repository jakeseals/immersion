import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from 'next-sanity'
import { getSessionByNumber, getAllSessions } from '@/lib/sanity.queries'
import { urlFor } from '@/sanity/lib/image'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'
import { Suspense } from 'react'
import SessionKeyboardNav from '@/components/SessionKeyboardNav'
import KeyboardShortcutsHelp from '@/components/KeyboardShortcutsHelp'
import ReadingProgress from '@/components/ReadingProgress'

interface SessionPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  try {
    const sessions = await getAllSessions()
    return sessions.map((session) => ({
      id: session.sessionNumber.toString(),
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
  }
}

export async function generateMetadata({ params }: SessionPageProps): Promise<Metadata> {
  try {
    const { id } = await params
    const sessionNumber = parseInt(id)
    const session = await getSessionByNumber(sessionNumber)

    if (!session) {
      return {
        title: 'Session Not Found | Immersion',
        description: 'The requested session could not be found.',
      }
    }

    return {
      title: `${session.title} | Immersion`,
      description: session.description,
      openGraph: {
        title: session.title,
        description: session.description,
        type: 'article',
        images: session.heroImage
          ? [{ url: urlFor(session.heroImage).width(1200).height(630).url() }]
          : [],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Session | Immersion',
    }
  }
}

export default async function SessionPage({ params }: SessionPageProps) {
  try {
    const { id } = await params
    const sessionNumber = parseInt(id)
    
    if (isNaN(sessionNumber) || sessionNumber < 1 || sessionNumber > 3) {
      notFound()
    }

    const session = await getSessionByNumber(sessionNumber)

    if (!session) {
      notFound()
    }

    const allSessions = await getAllSessions()
    const currentIndex = allSessions.findIndex((s) => s.sessionNumber === sessionNumber)
    const prevSession = currentIndex > 0 ? allSessions[currentIndex - 1] : null
    const nextSession = currentIndex < allSessions.length - 1 ? allSessions[currentIndex + 1] : null

    // JSON-LD structured data for better SEO
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: session.title,
      description: session.description,
      educationalLevel: 'High School',
      learningResourceType: 'Teaching Session',
      about: {
        '@type': 'Thing',
        name: 'Immersion Teaching Internship',
      },
      teaches: session.learningObjectives || [],
      position: session.sessionNumber,
      ...(session.heroImage && {
        image: urlFor(session.heroImage).width(1200).height(630).url(),
      }),
    };

    return (
      <main className="min-h-screen romantic-gradient">
        {/* Reading Progress Bar */}
        <ReadingProgress />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Keyboard Navigation */}
        <SessionKeyboardNav 
          currentSession={sessionNumber}
          prevSession={prevSession?.sessionNumber || null}
          nextSession={nextSession?.sessionNumber || null}
        />
        
        {/* Header */}
        <header className="container mx-auto px-4 py-8">
        <Link href="/" className="text-charcoal hover:text-slate transition-colors">
          <h1 className="text-xl md:text-2xl font-serif">← Immersion Vanderbilt</h1>
          <p className="text-sm text-charcoal/70 mt-0.5">Jake Seals</p>
        </header>

        {/* Hero Image */}
        {session.heroImage && (
          <div className="container mx-auto px-4 mb-12">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={urlFor(session.heroImage).width(1200).height(600).url()}
                alt={session.heroImage.alt || `Hero image for ${session.title}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                placeholder="blur"
                blurDataURL={urlFor(session.heroImage).width(20).height(20).blur(10).url()}
              />
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/30 to-transparent" />
            </div>
          </div>
        )}

        {/* Content */}
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-xl">
            {/* Session Number Badge */}
            <div className="inline-block bg-charcoal text-cream px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Session {session.sessionNumber}
            </div>

            {/* Title and Description */}
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
              {session.title}
            </h2>
            <p className="text-xl text-charcoal/70 mb-8 leading-relaxed">
              {session.description}
            </p>

            {/* Learning Objectives */}
            {session.learningObjectives && session.learningObjectives.length > 0 && (
              <div className="mb-8 p-6 bg-dusty-rose/10 rounded-lg border-l-4 border-dusty-rose">
                <h3 className="text-xl font-serif text-charcoal mb-3">Learning Objectives</h3>
                <ul className="space-y-2">
                  {session.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-muted-gold mr-2">•</span>
                      <span className="text-charcoal/80">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Main Content */}
            {session.content && (
              <div className="prose prose-lg max-w-none mb-8">
                <PortableText
                  value={session.content}
                  components={{
                    types: {
                      image: ({ value }) => (
                        <div className="relative w-full h-[400px] my-8 rounded-lg overflow-hidden">
                          <Image
                            src={urlFor(value).width(800).url()}
                            alt={value.alt || ''}
                            fill
                            className="object-cover"
                          />
                          {value.caption && (
                            <p className="text-center text-sm text-charcoal/60 mt-2">
                              {value.caption}
                            </p>
                          )}
                        </div>
                      ),
                      activity: ({ value }) => (
                        <div className="my-6 p-6 bg-slate/10 rounded-lg border border-slate">
                          <h4 className="text-lg font-serif text-charcoal mb-2 flex items-center">
                            <span className="mr-2">📚</span>
                            {value.title}
                          </h4>
                          <p className="text-charcoal/80 mb-2">{value.description}</p>
                          {value.duration && (
                            <p className="text-sm text-charcoal/60">
                              Duration: {value.duration} minutes
                            </p>
                          )}
                        </div>
                      ),
                    },
                    block: {
                      h2: ({ children }) => (
                        <h2 className="text-3xl font-serif text-charcoal mt-8 mb-4">{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-2xl font-serif text-charcoal mt-6 mb-3">{children}</h3>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-muted-gold pl-4 italic text-charcoal/80 my-6">
                          {children}
                        </blockquote>
                      ),
                    },
                  }}
                />
              </div>
            )}

            {/* Gallery */}
            {session.gallery && session.gallery.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-serif text-charcoal mb-6">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {session.gallery.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={urlFor(image).width(600).height(400).url()}
                        alt={image.alt || `Gallery image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 gap-4">
            {prevSession ? (
              <Link
                href={`/sessions/${prevSession.sessionNumber}`}
                className="group flex items-center gap-2 px-6 py-3 bg-white/70 hover:bg-white transition-all rounded-lg border-2 border-charcoal/20 hover:border-charcoal shadow-sm"
              >
                <HiArrowLeft className="text-slate group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs text-charcoal/60">Previous (←)</div>
                  <div className="font-serif text-charcoal">Session {prevSession.sessionNumber}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextSession ? (
              <Link
                href={`/sessions/${nextSession.sessionNumber}`}
                className="group flex items-center gap-2 px-6 py-3 bg-white/70 hover:bg-white transition-all rounded-lg border-2 border-charcoal/20 hover:border-charcoal shadow-sm"
              >
                <div className="text-right">
                  <div className="text-xs text-charcoal/60">Next (→)</div>
                  <div className="font-serif text-charcoal">Session {nextSession.sessionNumber}</div>
                </div>
                <HiArrowRight className="text-slate group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </article>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 mt-12 border-t border-charcoal/20">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-charcoal hover:text-slate transition-colors">
            >
              <HiArrowLeft />
              Back to Home
            </Link>
          </div>
        </footer>

        {/* Keyboard Shortcuts Help */}
        <KeyboardShortcutsHelp />
      </main>
    )
  } catch (error) {
    console.error('Error rendering session page:', error)
    notFound()
  }
}
