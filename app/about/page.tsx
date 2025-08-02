import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Globe, Sparkles, Code, Rocket } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Navigation />

      <main className="w-[70%] mx-auto py-16 md:py-24">
        {/* Introduction and Skills Section */}
        <section className="grid md:grid-cols-3 gap-12 items-start mb-16">
          <div className="flex justify-center md:justify-start">
            <div className="w-96 h-96 rounded-lg overflow-hidden">
              <Image
                src="/profile-ali.png"
                alt="Ali Khaled"
                width={384} // 96 * 4 = 384px
                height={384} // 96 * 4 = 384px
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a front-end developer with expertise in HTML, CSS, SCSS, JavaScript, jQuery, Bootstrap, Tailwind CSS, React, and Next.js. I craft fast, responsive, and user-focused interfaces with clean, maintainable code. Focused on performance, detail, and design, I help clients bring their ideas to life with modern, high-quality web solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Passionate about continuous learning and eager to tackle challenges to deliver innovative solutions. Dedicated to personal growth and striving for excellence in every task.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-gray-800 border-gray-700 p-4 flex items-center space-x-3">
                <Globe className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg font-semibold">HTML & CSS</h3>
              </Card>
              <Card className="bg-gray-800 border-gray-700 p-4 flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg font-semibold">React JS</h3>
              </Card>
              <Card className="bg-gray-800 border-gray-700 p-4 flex items-center space-x-3">
                <Code className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg font-semibold">JavaScript</h3>
              </Card>
              <Card className="bg-gray-800 border-gray-700 p-4 flex items-center space-x-3">
                <Rocket className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg font-semibold">Next.js</h3>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 border-t border-b border-gray-800 mt-16">
          <div>
            <h2 className="text-4xl font-bold text-emerald-400 mb-2">1+</h2>
            <p className="text-gray-400 text-base uppercase tracking-wider">YEARS OF EXPERIENCE</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-emerald-400 mb-2">17+</h2>
            <p className="text-gray-400 text-base uppercase tracking-wider">PROJECTS COMPLETED</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
