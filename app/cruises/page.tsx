import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Ship, Anchor, Waves, Users } from "lucide-react"

export default function Cruises() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Globe className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block">Luxe Atlas Travel</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/luxury" className="transition-colors hover:text-foreground/80">
                Luxury Travel
              </Link>
              <Link href="/cruises" className="transition-colors hover:text-foreground/80 text-primary">
                Cruises
              </Link>
              <Link href="/disney" className="transition-colors hover:text-foreground/80">
                Disney
              </Link>
              <Link href="/vacations" className="transition-colors hover:text-foreground/80">
                Vacations
              </Link>
              <Link href="/about" className="transition-colors hover:text-foreground/80">
                About Us
              </Link>
              <Link href="/contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button asChild className="hidden md:inline-flex">
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/cruise-ship-ocean.png"
              alt="Luxury cruise ship"
              className="object-cover w-full h-full brightness-[0.6]"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 bg-background/20 text-white border-white">
                  Cruise Vacations
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Luxury Cruise Experiences
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  Sail to extraordinary destinations aboard the world's finest cruise ships with premium amenities and
                  personalized service.
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Find Your Perfect Cruise</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Cruises */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Featured Cruises
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Premium Cruise Destinations</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover breathtaking destinations with luxury cruise experiences tailored to your preferences.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Mediterranean Luxury Cruise",
                  image: "/images/mediterranean-cruise.png",
                  description:
                    "Explore the stunning Mediterranean coastline visiting Rome, Barcelona, and the French Riviera on a premium cruise liner.",
                  features: ["Balcony Suite", "Shore Excursions", "Fine Dining"],
                },
                {
                  title: "Alaska Glacier Expedition",
                  image: "/images/alaska-glacier.png",
                  description:
                    "Witness breathtaking glaciers and wildlife on this unforgettable journey through Alaska's pristine wilderness.",
                  features: ["Glacier Viewing", "Wildlife Tours", "Expert Guides"],
                },
                {
                  title: "Caribbean Island Hopping",
                  image: "/images/caribbean-beach.png",
                  description:
                    "Visit multiple tropical islands with crystal-clear waters and pristine beaches in the Caribbean paradise.",
                  features: ["Private Beaches", "Water Sports", "Island Tours"],
                },
                {
                  title: "Northern Lights Cruise",
                  image: "/images/norway-fjords.png",
                  description:
                    "Experience the magical Aurora Borealis while cruising through Norway's dramatic fjords and coastal cities.",
                  features: ["Aurora Viewing", "Fjord Cruising", "Cultural Tours"],
                },
                {
                  title: "Asian Cultural Voyage",
                  image: "/images/asian-temple.png",
                  description:
                    "Immerse yourself in rich Asian cultures visiting Japan, China, and Southeast Asian ports of call.",
                  features: ["Cultural Immersion", "Temple Visits", "Local Cuisine"],
                },
                {
                  title: "Transatlantic Crossing",
                  image: "/images/transatlantic-ship.png",
                  description:
                    "Experience the golden age of ocean travel on a luxurious transatlantic crossing with world-class amenities.",
                  features: ["Ocean Views", "Formal Dining", "Entertainment"],
                },
              ].map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cruise Lines */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Premium Partners
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Luxury Cruise Lines</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We partner with the world's finest cruise lines to offer you exceptional experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Ship className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">Ultra-Luxury Lines</h3>
                  <p className="text-muted-foreground text-sm">Intimate ships with all-suite accommodations</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Anchor className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">Premium Cruises</h3>
                  <p className="text-muted-foreground text-sm">Elevated dining and entertainment experiences</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Waves className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">Expedition Cruises</h3>
                  <p className="text-muted-foreground text-sm">Adventure cruising to remote destinations</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">River Cruises</h3>
                  <p className="text-muted-foreground text-sm">Intimate river journeys through scenic waterways</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Set Sail?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Let us help you find the perfect cruise experience for your next adventure.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="/contact">Book Your Cruise Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-primary" />
                <span className="font-bold">Luxe Atlas Travel</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Crafting extraordinary travel experiences for discerning travelers since 2008.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/luxury" className="text-muted-foreground hover:text-foreground">
                    Luxury Travel
                  </Link>
                </li>
                <li>
                  <Link href="/cruises" className="text-muted-foreground hover:text-foreground">
                    Cruise Vacations
                  </Link>
                </li>
                <li>
                  <Link href="/disney" className="text-muted-foreground hover:text-foreground">
                    Disney Experiences
                  </Link>
                </li>
                <li>
                  <Link href="/vacations" className="text-muted-foreground hover:text-foreground">
                    All Vacations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground mb-4 md:mb-0">© 2025 Luxe Atlas Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
