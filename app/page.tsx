import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans flex flex-col">
      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center">
        <div className="mb-8">
          <Image
            src="/profile-ali.png"
            alt="Ali Khaled"
            width={256}
            height={256}
            className="rounded-full object-cover border-4 border-gray-800 shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm <span className="text-emerald-400">Ali Khaled</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          A front-end developer with a passion for creating seamless, responsive, and visually appealing web experiences that deliver real value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg rounded-full">
            <Link href="/portfolio">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-emerald-500 text-emerald-400 hover:bg-emerald-900 px-8 py-3 text-lg rounded-full bg-transparent"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
