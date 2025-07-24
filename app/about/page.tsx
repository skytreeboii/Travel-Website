import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Clock, Heart, Shield } from "lucide-react"

export default function About() {
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
              <Link href="/about" className="transition-colors hover:text-luxury-gold text-luxury-gold">
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
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/about-hero.png"
              alt="Travel planning consultation"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <Badge variant="outline" className="px-4 py-2 border-luxury-gold text-luxury-gold">
                  About Us
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Your <span className="luxury-text-gradient">Luxury Travel</span> Experts
                </h1>
                <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-muted-foreground">
                  With over 15 years of experience, we specialize in creating unforgettable travel experiences for all
                  budgets and styles.
                </p>
                <p className="text-lg text-luxury-gold font-medium">Independent Advisor of Fora Travel</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge variant="outline" className="px-3 py-1 border-luxury-gold text-luxury-gold">
                    Our Story
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    <span className="luxury-text-gradient">Passionate</span> About Travel
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Founded with a passion for exceptional travel experiences and personalized service.
                  </p>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Luxe Atlas Travel was founded with a simple belief: that luxury travel should be more than just
                    expensive accommodations and first-class flights. It should be about creating transformative
                    experiences that leave lasting memories and broaden perspectives.
                  </p>
                  <p>
                    As an independent advisor of Fora Travel, we combine boutique-level personalized service with the
                    buying power and industry connections of a larger network. This partnership allows us to offer
                    exclusive perks, upgrades, and experiences that aren't available when booking directly.
                  </p>
                  <p>
                    Our expertise spans four distinct areas of travel: luxury experiences, premium cruise vacations, all
                    types of regular vacations, and magical Disney adventures. This comprehensive approach allows us to
                    serve travelers with any budget or preference, providing personalized service that transforms
                    ordinary trips into extraordinary journeys.
                  </p>
                </div>
                <Button asChild className="luxury-button">
                  <Link href="/contact">Work With Us</Link>
                </Button>
              </div>
              <div className="h-full w-full rounded-lg overflow-hidden">
                <img
                  src="/images/travel-consultation.png"
                  alt="Travel consultation meeting"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-luxury-bronze/5" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 border-luxury-gold text-luxury-gold">
                  Our Values
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  What <span className="luxury-text-gradient">Drives Us</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our core values guide everything we do in creating exceptional travel experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
              <Card className="luxury-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-full bg-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-colors">
                    <Heart className="h-12 w-12 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-bold">Personalized Service</h3>
                  <p className="text-muted-foreground">
                    Every client receives individual attention and customized travel solutions tailored to their unique
                    preferences.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-full bg-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-colors">
                    <Award className="h-12 w-12 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-bold">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for perfection in every detail, from initial planning to the final moments of your
                    journey.
                  </p>
                </CardContent>
              </Card>
              <Card className="luxury-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-full bg-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-colors">
                    <Shield className="h-12 w-12 text-luxury-gold" />
                  </div>
                  <h3 className="text-xl font-bold">Trust & Reliability</h3>
                  <p className="text-muted-foreground">
                    Your peace of mind is our priority. We handle every aspect of your travel with professionalism and
                    care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 border-luxury-gold text-luxury-gold">
                  Our Partners
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Trusted <span className="luxury-text-gradient">Industry Partners</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We work with the world's finest cruise lines and luxury hotel brands to bring you exclusive benefits.
                </p>
              </div>
            </div>

            {/* Cruise Lines */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8 luxury-text-gradient">Premium Cruise Lines</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: "Royal Caribbean", image: "/images/partners/royal-caribbean.png" },
                  { name: "Norwegian Cruise Line", image: "/images/partners/norwegian.png" },
                  { name: "Celebrity Cruises", image: "/images/partners/celebrity.png" },
                  { name: "MSC Cruises", image: "/images/partners/msc.png" },
                  { name: "Carnival Cruise Line", image: "/images/partners/carnival.png" },
                  { name: "Princess Cruises", image: "/images/partners/princess.png" },
                ].map((partner, index) => (
                  <Card key={index} className="luxury-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="aspect-square w-full flex items-center justify-center">
                      <img
                        src={partner.image || "/placeholder.svg"}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Hotel Brands */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-8 luxury-text-gradient">Luxury Hotel Brands</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: "Marriott", image: "/images/partners/marriott.png" },
                  { name: "Hilton", image: "/images/partners/hilton.png" },
                  { name: "Hyatt", image: "/images/partners/hyatt.png" },
                  { name: "Four Seasons", image: "/images/partners/four-seasons.png" },
                  { name: "Ritz Carlton", image: "/images/partners/ritz-carlton.png" },
                  { name: "InterContinental", image: "/images/partners/intercontinental.png" },
                ].map((partner, index) => (
                  <Card key={index} className="luxury-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="aspect-square w-full flex items-center justify-center">
                      <img
                        src={partner.image || "/placeholder.svg"}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 to-luxury-bronze/5" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 border-luxury-gold text-luxury-gold">
                  Why Choose Us
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  The <span className="luxury-text-gradient">Luxe Atlas</span> Difference
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover what sets us apart in the luxury travel industry.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
              <Card className="luxury-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-full bg-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-colors">
                    <Clock className="h-12 w-12 text-luxury-gold" />
                  </div>
                  <h3 className="text-lg font-bold">15+ Years Experience</h3>
                  <p className="text-muted-foreground text-sm">Extensive experience in luxury travel planning</p>
                </CardContent>
              </Card>
              <Card className="luxury-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-full bg-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-colors">
                    <Users className="h-12 w-12 text-luxury-gold" />
                  </div>
                  <h3 className="text-lg font-bold">Fora Travel Network</h3>
                  <p className="text-muted-foreground text-sm">Access to exclusive perks and industry connections</p>
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
                  <h3 className="text-lg font-bold">Global Expertise</h3>
                  <p className="text-muted-foreground text-sm">Insider knowledge of destinations around the world</p>
                </CardContent>
              </Card>
              <Card className="luxury-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="p-4 rounded-full bg-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-colors">
                    <Award className="h-12 w-12 text-luxury-gold" />
                  </div>
                  <h3 className="text-lg font-bold">VIP Access</h3>
                  <p className="text-muted-foreground text-sm">Exclusive access to premium experiences and amenities</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
                  Ready to <span className="luxury-text-gradient">Start Your Journey?</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Let us create an extraordinary travel experience tailored just for you.
                </p>
              </div>
              <Button asChild size="lg" className="luxury-button text-lg px-8 py-6">
                <Link href="/contact">Get Started Today</Link>
              </Button>
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
