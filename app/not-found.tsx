import Link from 'next/link'
import { HiHome } from 'react-icons/hi2'

export default function NotFound() {
  return (
    <main className="min-h-screen romantic-gradient flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="text-9xl font-serif text-burgundy mb-8 opacity-20">404</div>
        <h1 className="text-4xl md:text-5xl font-serif text-burgundy mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-burgundy/80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-burgundy text-cream rounded-lg hover:bg-burgundy-dark transition-all shadow-lg hover:shadow-xl"
        >
          <HiHome className="text-xl" />
          Return Home
        </Link>
      </div>
    </main>
  )
}
