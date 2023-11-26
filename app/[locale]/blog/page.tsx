export default function BlogPage({ params: { locale } }: BasePageProps) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-6">My First Post</h1>

      <p className="text-lg mt-4">
        Welcome to my blog! This is my very first post. I'm excited to start this journey and share my thoughts, experiences, and knowledge with you.
      </p>

      <h2 className="text-2xl font-bold mt-6">Why I Started a Blog</h2>
      <p className="text-lg mt-4">
        I've always enjoyed writing and sharing information. Starting a blog seemed like a natural step for me to not only document my journey but also to connect with others who share similar interests.
      </p>

      <h2 className="text-2xl font-bold mt-6">What to Expect</h2>
      <p className="text-lg mt-4">
        In this blog, I plan to write about:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>My experiences with web development, focusing on technologies like React, TypeScript, and Node.js.</li>
        <li>Tips and tricks that I've learned in my career as a software developer.</li>
        <li>Personal development and learning strategies for continuous growth in the tech industry.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">Stay Connected</h2>
      <p className="text-lg mt-4">
        I'm looking forward to growing with my readers and building a community. Feel free to reach out to me on <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 hover:text-blue-800">LinkedIn</a> or follow me on <a href="https://github.com/yourprofile" className="text-blue-600 hover:text-blue-800">GitHub</a> to stay updated with my latest projects and posts.
      </p>

      <p className="text-lg mt-4 mb-8">
        Thank you for reading, and stay tuned for more!
      </p>
    </div>
  )
}