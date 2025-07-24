import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Star, Sparkles, Users, Calendar, Crown, Heart } from "lucide-react"

export default function Disney() {
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
              <Link href="/cruises" className="transition-colors hover:text-foreground/80">
                Cruises
              </Link>
              <Link href="/disney" className="transition-colors hover:text-foreground/80 text-primary">
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
              src="/images/disney-castle.png"
              alt="Disney castle"
              className="object-cover w-full h-full brightness-[0.6]"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 bg-background/20 text-white border-white">
                  Disney Vacations
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Magical Disney Experiences
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  Create unforgettable memories with both luxury VIP Disney experiences and budget-friendly family
                  packages.
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Plan Your Disney Magic</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Package Types */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Disney Package Types
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Disney for Every Budget</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  From budget-friendly family fun to luxury VIP experiences, we have Disney packages for everyone.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-12">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8 text-center space-y-6">
                  <Crown className="h-16 w-16 text-primary mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Luxury VIP Disney</h3>
                    <p className="text-muted-foreground">
                      Skip the lines, enjoy exclusive access, and experience Disney like royalty with our premium VIP
                      packages.
                    </p>
                  </div>
                  <ul className="text-left space-y-2 text-sm">
                    <li>• Private VIP tour guides</li>
                    <li>• Lightning Lane access to popular attractions</li>
                    <li>• Premium character dining reservations</li>
                    <li>• Luxury resort accommodations</li>
                    <li>• Exclusive fireworks viewing areas</li>
                    <li>• Personal concierge service</li>
                  </ul>
                  <Button className="w-full" size="lg">
                    Explore VIP Packages
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-secondary/20">
                <CardContent className="p-8 text-center space-y-6">
                  <Heart className="h-16 w-16 text-primary mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Family Disney Packages</h3>
                    <p className="text-muted-foreground">
                      Affordable Disney magic for families with comfortable accommodations and great value experiences.
                    </p>
                  </div>
                  <ul className="text-left space-y-2 text-sm">
                    <li>• Value and moderate resort stays</li>
                    <li>• Park hopper tickets included</li>
                    <li>• Dining plan options available</li>
                    <li>• Character meet & greet opportunities</li>
                    <li>• Genie+ planning assistance</li>
                    <li>• Family-friendly itineraries</li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    View Family Packages
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Disney Experiences */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Disney Destinations
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Magical Disney Destinations</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Experience the magic of Disney at destinations around the world.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Disney World Orlando",
                  image: "/images/disney-world.png",
                  description:
                    "The most magical place on earth with four theme parks, luxury resorts, and endless entertainment.",
                  features: ["4 Theme Parks", "VIP Tours Available", "Character Dining"],
                },
                {
                  title: "Disneyland California",
                  image: "/images/disneyland-california.png",
                  description: "Where it all began! Experience both Disneyland Park and Disney California Adventure.",
                  features: ["Original Disney Park", "Both Parks Access", "Premium Experiences"],
                },
                {
                  title: "Disney Cruise Line",
                  image: "/images/disney-cruise.png",
                  description:
                    "Combine the magic of Disney with luxury cruise amenities visiting exclusive destinations.",
                  features: ["Disney Characters", "Private Island", "Kids Clubs"],
                },
                {
                  title: "Disneyland Paris",
                  image: "/images/disneyland-paris.png",
                  description:
                    "European charm meets Disney magic in the heart of France with unique attractions and experiences.",
                  features: ["European Disney", "Unique Attractions", "Luxury Hotels"],
                },
                {
                  title: "Disney Aulani Hawaii",
                  image: "/images/disney-aulani.png",
                  description:
                    "Tropical Disney magic at Aulani Resort with beach activities and Hawaiian cultural experiences.",
                  features: ["Beach Resort", "Hawaiian Culture", "Snorkeling"],
                },
                {
                  title: "Adventures by Disney",
                  image: "/images/adventures-disney.png",
                  description:
                    "Guided family adventures around the world with Disney's signature storytelling and service.",
                  features: ["Expert Guides", "Global Destinations", "Cultural Immersion"],
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

        {/* Disney Services */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Our Disney Services
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Complete Disney Planning</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  From budget planning to VIP experiences, we handle every detail of your Disney vacation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Star className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">VIP Tours</h3>
                  <p className="text-muted-foreground text-sm">
                    Private guided tours with Lightning Lane priority access
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Sparkles className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">Character Dining</h3>
                  <p className="text-muted-foreground text-sm">Exclusive dining experiences with Disney characters</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">Genie+ Planning</h3>
                  <p className="text-muted-foreground text-sm">
                    Expert assistance with Genie+ and Lightning Lane reservations
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Calendar className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">Special Events</h3>
                  <p className="text-muted-foreground text-sm">Access to exclusive Disney events and celebrations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready for Disney Magic?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Let us create the perfect Disney vacation experience for you and your family, whether you want luxury
                  VIP treatment or budget-friendly fun.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="/contact">Start Your Disney Adventure</Link>
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
                    Contact Us
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
