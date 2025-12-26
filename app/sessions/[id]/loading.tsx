export default function SessionsLoading() {
  return (
    <main className="min-h-screen romantic-gradient">
      <header className="container mx-auto px-4 py-8">
        <div className="h-8 w-32 bg-charcoal/20 rounded animate-pulse"></div>
      </header>

      <div className="container mx-auto px-4 mb-12">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-charcoal/10 animate-pulse"></div>
      </div>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-xl">
          <div className="space-y-4">
            <div className="h-6 w-24 bg-charcoal/20 rounded animate-pulse"></div>
            <div className="h-12 w-3/4 bg-charcoal/20 rounded animate-pulse"></div>
            <div className="h-6 w-full bg-charcoal/20 rounded animate-pulse"></div>
            <div className="h-6 w-full bg-charcoal/20 rounded animate-pulse"></div>
            <div className="h-6 w-2/3 bg-charcoal/20 rounded animate-pulse"></div>
          </div>
        </div>
      </article>
    </main>
  )
}
