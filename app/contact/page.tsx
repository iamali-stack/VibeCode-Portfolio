import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Navigation />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-800 p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-3xl font-bold text-gray-100">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="bg-gray-800 border-gray-700 text-gray-100 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-800 border-gray-700 text-gray-100 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    rows={5}
                    className="bg-gray-800 border-gray-700 text-gray-100 focus:border-emerald-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-lg rounded-md"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gray-900 border-gray-800 p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-3xl font-bold text-gray-100">Contact Info</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-emerald-400" />
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-gray-300">icyalikhaled2013@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-emerald-400" />
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-gray-300">01099644324</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-emerald-400" />
                <div>
                  <h4 className="text-lg font-semibold">Address</h4>
                  <p className="text-gray-300">6 October</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
