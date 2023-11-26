import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"

export default function AboutPage({ params: { locale } }: BasePageProps) {
  return (
    <div className="container container-xl mx-auto">
      <div className="flex flex-col justify-between items-center">
        <div>
          <AboutCard />
        </div>
      </div>
    </div>
  )
}

function AboutCard({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <Card className="w-auto h-auto flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/3 bg-[#091538] flex flex-col justify-center items-center p-4">
          <img className="w-32 h-32 rounded-full border-4 border-white" src="https://avatars.githubusercontent.com/u/7363041?v=4" alt="Profile Picture" />
          <h2 className="text-white text-2xl font-bold mt-2">Joakim</h2>
          <p className="text-white text-md">Software Engineer</p>
        </div>
        <div className="md:w-2/3 p-4">
          <div className="text-xl font-bold mb-2 text-black">About Me</div>
          <p className="text-gray-700 text-base mb-4">
            I am a passionate Software Engineer with 3 years of experience, specializing in cloud solutions and modern web technologies. My journey has been marked by extensive work with <strong>Google Cloud</strong>, building and deploying scalable applications.
          </p>
          <p className="text-gray-700 text-base mb-4">
            Proficient in <strong>React</strong> and <strong>TypeScript</strong>, I have developed dynamic user interfaces and robust front-end architectures. My expertise also extends to infrastructure as code, particularly with <strong>Terraform</strong>, and automating workflows using <strong>GitHub Actions</strong>.
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-black">
              <span className="text-sm">Follow me:</span>
              <a href="https://www.linkedin.com/in/joakimhall/" className="ml-2"><LinkedInLogoIcon /></a>
              <a href="https://github.com/Zokiio" className="ml-2"><GitHubLogoIcon /></a>
            </div>
          </div>
        </div>
      </Card>
    </div>

  )
}
