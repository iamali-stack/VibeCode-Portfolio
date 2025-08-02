"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-gray-900 text-gray-100 py-4 px-4 md:px-6 border-b border-gray-800">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-emerald-400">
          Ali Khaled
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-emerald-400 transition-colors">
            About
          </Link>
          <Link href="/portfolio" className="hover:text-emerald-400 transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-emerald-400 transition-colors">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block py-2 hover:text-emerald-400 transition-colors" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="block py-2 hover:text-emerald-400 transition-colors" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/portfolio" className="block py-2 hover:text-emerald-400 transition-colors" onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link href="/contact" className="block py-2 hover:text-emerald-400 transition-colors" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
