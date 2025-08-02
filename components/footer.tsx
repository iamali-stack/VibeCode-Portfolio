import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-gray-400 text-center border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-emerald-400">Ali Khaled</h3>
          <p className="text-sm">Front-End Developer</p>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/iamali-stack" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/ali-khaled-6b71811a1" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="mailto:icyalikhaled2013@gmail.com" className="hover:text-emerald-400 transition-colors" aria-label="Email">
            <Mail className="w-6 h-6" />
          </Link>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Ali Khaled. All rights reserved.</p>
      </div>
    </footer>
  )
}
