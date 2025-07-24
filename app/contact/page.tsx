"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Calendar } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/movlebzd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b border-luxury-gold/20 glass-effect">
        <div className="container flex h-20 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-8 flex items-center space-x-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250720_022457_521-44ZmYzmeRK1kEJ2zA6gTR8ASuIXnBi.webp"
                alt="Luxe Atlas Travel"
                className="h-12 w-12"
              />
              <span className="hidden font-bold text-xl luxury-text-gradient sm:inline-block">Luxe Atlas Travel</span>
            </Link>
            <nav className="flex items-center space-x-8 text-sm font-medium">
              <Link href="/luxury" className="transition-colors hover:text-luxury-gold">
                Luxury Travel
              </Link>
              <Link href="/cruises" className="transition-colors hover:text-luxury-gold">
                Cruises
              </Link>
              <Link href="/disney" className="transition-colors hover:text-luxury-gold">
                Disney
              </Link>
              <Link href="/vacations" className="transition-colors hover:text-luxury-gold">
                Vacations
              </Link>
              <Link href="/about" className="transition-colors hover:text-luxury-gold">
                About Us
              </Link>
              <Link href="/contact" className="transition-colors hover:text-luxury-gold text-luxury-gold">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button asChild className="hidden md:inline-flex luxury-button">
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 to-luxury-bronze/10" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 border-luxury-gold text-luxury-gold">
                  Contact Us
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Start Planning Your <span className="luxury-text-gradient">Dream Vacation</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Schedule a consultation with Sawyer Roman to discuss your travel desires and let us create your
                  perfect getaway.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
              <Card className="luxury-card">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold luxury-text-gradient">Get In Touch</h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and Sawyer will get back to you within 24 hours to discuss your travel
                        plans.
                      </p>
                    </div>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg
                            className="w-8 h-8 text-luxury-gold"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-luxury-gold mb-2">Thank You!</h3>
                        <p className="text-muted-foreground">
                          Your inquiry has been submitted. Sawyer will contact you within 24 hours to discuss your
                          travel plans.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="first-name" className="text-sm font-medium text-luxury-gold">
                              First name
                            </label>
                            <input
                              id="first-name"
                              name="first-name"
                              required
                              className="flex h-12 w-full rounded-md border border-luxury-gold/20 bg-card/50 px-4 py-2 text-sm backdrop-blur-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                              placeholder="Enter your first name"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="last-name" className="text-sm font-medium text-luxury-gold">
                              Last name
                            </label>
                            <input
                              id="last-name"
                              name="last-name"
                              required
                              className="flex h-12 w-full rounded-md border border-luxury-gold/20 bg-card/50 px-4 py-2 text-sm backdrop-blur-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                              placeholder="Enter your last name"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-luxury-gold">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="flex h-12 w-full rounded-md border border-luxury-gold/20 bg-card/50 px-4 py-2 text-sm backdrop-blur-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-luxury-gold">
                            Phone
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            className="flex h-12 w-full rounded-md border border-luxury-gold/20 bg-card/50 px-4 py-2 text-sm backdrop-blur-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="travel-interest" className="text-sm font-medium text-luxury-gold">
                            I'm interested in
                          </label>
                          <select
                            id="travel-interest"
                            name="travel-interest"
                            className="flex h-12 w-full rounded-md border border-luxury-gold/20 bg-card/50 px-4 py-2 text-sm backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          >
                            <option value="">Select an option</option>
                            <option value="luxury">Luxury Travel</option>
                            <option value="cruises">Cruises</option>
                            <option value="disney">Disney Vacations</option>
                            <option value="vacations">Regular Vacations</option>
                            <option value="multiple">Multiple Interests</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="travel-dates" className="text-sm font-medium text-luxury-gold">
                            Preferred travel dates
                          </label>
                          <input
                            id="travel-dates"
                            name="travel-dates"
                            className="flex h-12 w-full rounded-md border border-luxury-gold/20 bg-card/50 px-4 py-2 text-sm backdrop-blur-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            placeholder="When would you like to travel?"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-luxury-gold">
                            Tell us about your dream vacation
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            className="flex min-h-[120px] w-full rounded-md border border-luxury-gold/20 bg-card/50 px-4 py-2 text-sm backdrop-blur-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            placeholder="Share your travel dreams, preferences, and any special requirements..."
                          ></textarea>
                        </div>
                        <Button type="submit" className="w-full luxury-button text-lg py-6">
                          Submit Inquiry
                        </Button>
                      </form>
                    )}
                  </div>
                </CardContent>
              </Card>
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold luxury-text-gradient">Contact Information</h2>
                  <p className="text-muted-foreground">
                    Ready to start planning? Get in touch with Sawyer using any of the methods below.
                  </p>
                </div>
                <div className="space-y-6">
                  <Card className="luxury-card">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-luxury-gold/10">
                        <Phone className="h-8 w-8 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Call Sawyer</h3>
                        <p className="text-luxury-gold font-medium">(267) 225-3423</p>
                        <p className="text-sm text-muted-foreground">Monday-Friday: 9am-6pm EST</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="luxury-card">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-luxury-gold/10">
                        <Mail className="h-8 w-8 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Email Sawyer</h3>
                        <p className="text-luxury-gold font-medium">skytreeboii@gmail.com</p>
                        <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="luxury-card">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-luxury-gold/10">
                        <Calendar className="h-8 w-8 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Schedule Online</h3>
                        <p className="text-muted-foreground">Book a video consultation</p>
                        <Button variant="link" className="p-0 h-auto text-luxury-gold hover:text-luxury-darkGold">
                          View Available Times
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-luxury-bronze/5" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 border-luxury-gold text-luxury-gold">
                  FAQ
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Frequently Asked <span className="luxury-text-gradient">Questions</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Common questions about our travel services.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl mt-12 space-y-6">
              {[
                {
                  question: "How far in advance should I book my vacation?",
                  answer:
                    "We recommend booking 2-6 months in advance for most vacations. For luxury travel and peak seasons, 6-12 months ahead is ideal. Budget-friendly trips can often be booked closer to your travel dates.",
                },
                {
                  question: "Do you charge fees for your travel planning services?",
                  answer:
                    "Our consultation and planning services are complimentary. We earn our commission through our partnerships with hotels, cruise lines, and tour operators, at no additional cost to you.",
                },
                {
                  question: "Can you help with budget-friendly vacations?",
                  answer:
                    "We specialize in finding great value vacations that fit your budget. From affordable beach resorts to budget city breaks, we'll help you get the most for your money.",
                },
                {
                  question: "What makes your Disney vacation packages special?",
                  answer:
                    "Our Disney packages include VIP tour guides, Lightning Lane access, premium dining reservations, and exclusive experiences not available to general guests. We handle all the details so you can focus on making magical memories.",
                },
                {
                  question: "Do you provide support during my trip?",
                  answer:
                    "Yes! We provide 24/7 support throughout your journey. Whether you need restaurant recommendations, assistance with changes, or help with unexpected situations, we're just a phone call away.",
                },
              ].map((faq, index) => (
                <Card key={index} className="luxury-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-luxury-gold">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-luxury-gold/20 bg-card/50 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250720_022457_521-44ZmYzmeRK1kEJ2zA6gTR8ASuIXnBi.webp"
                  alt="Luxe Atlas Travel"
                  className="h-8 w-8"
                />
                <span className="font-bold luxury-text-gradient">Luxe Atlas Travel</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Crafting extraordinary travel experiences for all travelers since 2008.
              </p>
              <p className="text-xs text-luxury-gold">Independent Advisor of Fora Travel</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-luxury-gold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/luxury" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Luxury Travel
                  </Link>
                </li>
                <li>
                  <Link href="/cruises" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Cruise Vacations
                  </Link>
                </li>
                <li>
                  <Link href="/disney" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Disney Experiences
                  </Link>
                </li>
                <li>
                  <Link href="/vacations" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    All Vacations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-luxury-gold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-luxury-gold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-luxury-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground mb-4 md:mb-0">© 2025 Luxe Atlas Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
