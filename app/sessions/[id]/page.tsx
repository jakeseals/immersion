import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from 'next-sanity'
import { getSessionByNumber, getAllSessions } from '@/lib/sanity.queries'
import { urlFor } from '@/sanity/lib/image'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'

interface SessionPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  const sessions = await getAllSessions()
  return sessions.map((session) => ({
    id: session.sessionNumber.toString(),
  }))
}

export async function generateMetadata({ params }: SessionPageProps): Promise<Metadata> {
  const { id } = await params
  const sessionNumber = parseInt(id)
  const session = await getSessionByNumber(sessionNumber)

  if (!session) {
    return {
      title: 'Session Not Found',
    }
  }

  return {
    title: `${session.title} | Immersion`,
    description: session.description,
  }
}

export default async function SessionPage({ params }: SessionPageProps) {
  const { id } = await params
  const sessionNumber = parseInt(id)
  const session = await getSessionByNumber(sessionNumber)

  if (!session) {
    notFound()
  }

  const allSessions = await getAllSessions()
  const currentIndex = allSessions.findIndex((s) => s.sessionNumber === sessionNumber)
  const prevSession = currentIndex > 0 ? allSessions[currentIndex - 1] : null
  const nextSession = currentIndex < allSessions.length - 1 ? allSessions[currentIndex + 1] : null

  return (
    <main className="min-h-screen romantic-gradient">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <Link href="/" className="text-burgundy hover:text-burgundy-light transition-colors">
          <h1 className="text-2xl md:text-3xl font-serif">← Immersion</h1>
        </Link>
      </header>

      {/* Hero Image */}
      {session.heroImage && (
        <div className="container mx-auto px-4 mb-12">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={urlFor(session.heroImage).width(1200).height(600).url()}
              alt={session.heroImage.alt || session.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy/30 to-transparent" />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-xl">
          {/* Session Number Badge */}
          <div className="inline-block bg-burgundy text-cream px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Session {session.sessionNumber}
          </div>

          {/* Title and Description */}
          <h2 className="text-4xl md:text-5xl font-serif text-burgundy mb-4">
            {session.title}
          </h2>
          <p className="text-xl text-burgundy/80 mb-8 leading-relaxed">
            {session.description}
          </p>

          {/* Learning Objectives */}
          {session.learningObjectives && session.learningObjectives.length > 0 && (
            <div className="mb-8 p-6 bg-oceanic/10 rounded-lg border-l-4 border-oceanic">
              <h3 className="text-xl font-serif text-burgundy mb-3">Learning Objectives</h3>
              <ul className="space-y-2">
                {session.learningObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-oceanic mr-2">•</span>
                    <span className="text-burgundy/80">{objective}</span>
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
                          <p className="text-center text-sm text-burgundy/60 mt-2">
                            {value.caption}
                          </p>
                        )}
                      </div>
                    ),
                    activity: ({ value }) => (
                      <div className="my-6 p-6 bg-silver/20 rounded-lg border border-silver">
                        <h4 className="text-lg font-serif text-burgundy mb-2 flex items-center">
                          <span className="mr-2">📚</span>
                          {value.title}
                        </h4>
                        <p className="text-burgundy/80 mb-2">{value.description}</p>
                        {value.duration && (
                          <p className="text-sm text-burgundy/60">
                            Duration: {value.duration} minutes
                          </p>
                        )}
                      </div>
                    ),
                  },
                  block: {
                    h2: ({ children }) => (
                      <h2 className="text-3xl font-serif text-burgundy mt-8 mb-4">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-2xl font-serif text-burgundy mt-6 mb-3">{children}</h3>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-oceanic pl-4 italic text-burgundy/80 my-6">
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
              <h3 className="text-2xl font-serif text-burgundy mb-6">Gallery</h3>
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
              className="group flex items-center gap-2 px-6 py-3 bg-white/70 hover:bg-white transition-all rounded-lg border-2 border-burgundy/20 hover:border-burgundy"
            >
              <HiArrowLeft className="text-oceanic group-hover:-translate-x-1 transition-transform" />
              <div>
                <div className="text-xs text-burgundy/60">Previous</div>
                <div className="font-serif text-burgundy">Session {prevSession.sessionNumber}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextSession ? (
            <Link
              href={`/sessions/${nextSession.sessionNumber}`}
              className="group flex items-center gap-2 px-6 py-3 bg-white/70 hover:bg-white transition-all rounded-lg border-2 border-burgundy/20 hover:border-burgundy"
            >
              <div className="text-right">
                <div className="text-xs text-burgundy/60">Next</div>
                <div className="font-serif text-burgundy">Session {nextSession.sessionNumber}</div>
              </div>
              <HiArrowRight className="text-oceanic group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </article>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 mt-12 border-t border-burgundy/20">
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-burgundy hover:text-burgundy-light transition-colors"
          >
            <HiArrowLeft />
            Back to Home
          </Link>
        </div>
      </footer>
    </main>
  )
}
