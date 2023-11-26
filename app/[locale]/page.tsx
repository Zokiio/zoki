export default function HomePage({ params: { locale } }: BasePageProps) {
  return (
    <div className="container container-xl mx-auto">
      {/* fullscreen, centerered text Joakim, under small description, account for navigation bar */}
      <main className="flex flex-col justify-center items-center h-[calc(100vh-5rem)]">
        <h1 className="text-6xl font-bold text-center">Hello 👋 I&apos;m Joakim</h1>
        <h2 className="text-2xl font-bold text-center">quick and dirty site for now</h2>
      </main>
    </div>
  )
}
