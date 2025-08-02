import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  const projects = [
    {
      title: "Ecommerce",
      description: "A modern, responsive, and feature-rich e-commerce web application built using the latest React ecosystem tools. Designed for performance, scalability, and a seamless user experience—powered by Vite.",
      image: "/ecommerce photo.png",
      tags: ["JavaScript", "React", "Vite", "E-commerce"],
      githubLink: "https://github.com/iamali-stack/Ecommerce",
      liveLink: "https://iamali-stack.github.io/Ecommerce/",
    },
    {
      title: "Yummy - Recipe Discovery",
      description: "A modern, interactive web application that helps users discover and explore recipes from around the world. Features include recipe search by name, category, area, and ingredients, detailed cooking instructions, and ingredient lists.",
      image: "/yummy photo.png",
      tags: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
      githubLink: "https://github.com/iamali-stack/Yummy-JQuery",
      liveLink: "https://iamali-stack.github.io/Yummy-JQuery/",
    },
    {
      title: "Weather App",
      description: "A sleek weather app showing current conditions and 3-day forecasts. Features real-time weather data, location detection, and city search. Built with HTML, CSS, and JavaScript.",
      image: "/weather photo.png",
      tags: ["CSS", "HTML", "JavaScript", "Weather API"],
      githubLink: "https://github.com/iamali-stack/weather-app",
      liveLink: "https://iamali-stack.github.io/weather-app/",
    },
    {
      title: "Movie App",
      description: "A modern web application for browsing and discovering movies. This application provides features for movie exploration and discovery.",
      image: "/Movie photo.png",
      tags: ["JavaScript", "Movie API", "Web Development"],
      githubLink: "https://github.com/iamali-stack/Movie-App",
      liveLink: "https://iamali-stack.github.io/Movie-App/",
    },
    {
      title: "Games OOP",
      description: "Games OOP is a front-end web application designed to showcase a collection of free-to-play games. The project is built using Object-Oriented Programming (OOP) principles in JavaScript.",
      image: "/games oop photo.png",
      tags: ["JavaScript", "OOP", "Games", "Front-end"],
      githubLink: "https://github.com/iamali-stack/Games-OOP",
      liveLink: "https://iamali-stack.github.io/Games-OOP/",
    },
    {
      title: "Quiz App",
      description: "An interactive web-based Quiz Application that allows users to test their knowledge across various categories. The app uses the Open Trivia Database API to fetch questions dynamically.",
      image: "/Quiz photo.png",
      tags: ["CSS", "JavaScript", "Quiz API", "Interactive"],
      githubLink: "https://github.com/iamali-stack/Quiz-app",
      liveLink: "https://iamali-stack.github.io/Quiz-app/",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Navigation />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Showcasing a selection of my recent projects, demonstrating my skills in front-end development and beyond.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-100">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-emerald-900 text-emerald-200 hover:bg-emerald-800"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-emerald-500 text-emerald-400 hover:bg-emerald-900 flex-1 bg-transparent"
                  >
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" /> GitHub
                    </Link>
                  </Button>
                  <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-white flex-1">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}
