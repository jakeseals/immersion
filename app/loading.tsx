export default function Loading() {
  return (
    <main className="min-h-screen romantic-gradient flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-burgundy mb-4"></div>
        <p className="text-xl text-burgundy/80 font-serif">Loading...</p>
      </div>
    </main>
  )
}
