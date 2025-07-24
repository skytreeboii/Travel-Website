import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ship, TreePalmIcon as PalmTree, Star } from "lucide-react"

export default function Home() {
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
              <Link href="/contact" className="transition-colors hover:text-luxury-gold">
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/hero-luxury-beach.png" alt="Luxury beach resort" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <Badge variant="outline" className="px-4 py-2 border-luxury-gold text-luxury-gold bg-background/20">
                  Premium Travel Experiences
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  <span className="luxury-text-gradient">Extraordinary Travel</span>
                  <br />
                  <span className="text-foreground">Experiences</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-muted-foreground">
                  From luxury escapes to family-friendly adventures, unforgettable cruises, and magical Disney
                  vacations.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="luxury-button text-lg px-8 py-6">
                  <Link href="/contact">Plan Your Journey</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-background text-lg px-8 py-6 bg-transparent"
                >
                  <Link href="/luxury">Explore Destinations</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 border-luxury-gold text-luxury-gold">
                  Our Specialties
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
                  <span className="luxury-text-gradient">Tailored Travel</span> Experiences
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We craft personalized journeys that exceed expectations and create lifelong memories.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
              <Card className="luxury-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-full bg-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-colors">
                    <PalmTree className="h-12 w-12 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-bold">Luxury Travel</h3>
                  <p className="text-muted-foreground">
                    Exclusive resorts, private villas, and bespoke itineraries for the discerning traveler.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-background bg-transparent"
                  >
                    <Link href="/luxury">Explore Luxury</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="luxury-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-full bg-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-colors">
                    <Ship className="h-12 w-12 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-bold">Cruise Vacations</h3>
                  <p className="text-muted-foreground">
                    Premium cruise experiences with world-class amenities and breathtaking destinations.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-background bg-transparent"
                  >
                    <Link href="/cruises">View Cruises</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="luxury-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-full bg-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-colors">
                    <Star className="h-12 w-12 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-bold">Disney Magic</h3>
                  <p className="text-muted-foreground">
                    VIP Disney experiences with Lightning Lane access and exclusive character dining for magical
                    memories.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-background bg-transparent"
                  >
                    <Link href="/disney">Disney Vacations</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="luxury-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-full bg-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-colors">
                    <svg className="h-12 w-12 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">All Vacations</h3>
                  <p className="text-muted-foreground">
                    From budget-friendly getaways to luxury escapes, we plan all types of memorable vacations.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-background bg-transparent"
                  >
                    <Link href="/vacations">Explore Vacations</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-luxury-bronze/5" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 border-luxury-gold text-luxury-gold">
                  Testimonials
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
                  What Our <span className="luxury-text-gradient">Clients Say</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Hear from travelers who have experienced our exceptional service.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
              {[
                {
                  name: "Sarah Johnson",
                  initials: "SJ",
                  text: "Our luxury cruise exceeded all expectations. The personalized service and attention to detail made our anniversary truly special.",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  initials: "MC",
                  text: "The Disney vacation package was perfect for our family. Lightning Lane access made the experience magical, and our travel agent handled everything flawlessly.",
                  rating: 5,
                },
                {
                  name: "Emily Rodriguez",
                  initials: "ER",
                  text: "Our Maldives getaway was the definition of luxury. From the private transfers to the overwater villa, every detail was perfect.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="luxury-card">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-luxury-gradient flex items-center justify-center">
                      <span className="text-lg font-semibold text-background">{testimonial.initials}</span>
                    </div>
                    <div className="flex">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-luxury-gold text-luxury-gold" />
                        ))}
                    </div>
                    <p className="italic text-muted-foreground">{testimonial.text}</p>
                    <p className="font-semibold text-luxury-gold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
                  Ready to <span className="luxury-text-gradient">Start Planning?</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Let us create your perfect luxury travel experience. Contact us today for a personalized consultation.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="luxury-button text-lg px-8 py-6">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-background text-lg px-8 py-6 bg-transparent"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
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
                Crafting extraordinary travel experiences for discerning travelers since 2008.
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
