export default function BlogPage({ params: { locale } }: BasePageProps) {
  return (
<div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to My Blog</h1>

      <p className="text-lg">
        Writing and expressing my thoughts doesn&apos;t come naturally to me, but I believe in challenging myself. This blog is a part of that challenge. Here, I&apos;ll share my journey, experiences, and learnings in various aspects of my life.
      </p>

      <h2 className="text-2xl font-bold mt-6">Diverse Interests</h2>
      <p className="text-lg mt-4">
        Expect to read about a mix of topics, including:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Insights and stories from my personal and professional life.</li>
        <li>My fitness journey, workout routines, and health tips.</li>
        <li>Adventures and experiences from my travels around the world.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">Photography and Social Media</h2>
      <p className="text-lg mt-4">
        I also enjoy photography, so you&apos;ll find plenty of photos accompanying my blog posts. Don&apos;t forget to follow me on <a href="https://www.instagram.com/zokiioo/" className="text-blue-600 hover:text-blue-800">Instagram</a> for more visual content and updates.
      </p>

      <p className="text-lg mt-4">
        I&apos;m excited to start this blogging journey and I hope you&apos;ll find something here that resonates with you. Thanks for joining me!
      </p>
      <p className="text-lg mt-4">
        Feel free to reach out to me on <a href="https://www.linkedin.com/in/joakimhall/" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
      </p>
    </div>
  )
}

// &apos;