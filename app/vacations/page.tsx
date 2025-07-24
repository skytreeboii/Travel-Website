import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, MapPin, Users, Calendar, Heart, Plane } from "lucide-react"

export default function Vacations() {
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
              <Link href="/disney" className="transition-colors hover:text-foreground/80">
                Disney
              </Link>
              <Link href="/vacations" className="transition-colors hover:text-foreground/80 text-primary">
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
              src="/images/hero-luxury-beach.png"
              alt="Beautiful vacation destination"
              className="object-cover w-full h-full brightness-[0.6]"
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 bg-background/20 text-white border-white">
                  All Vacations
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Vacations for Every Budget & Style
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                  From romantic getaways to family adventures, beach escapes to cultural journeys - we plan it all.
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Plan Your Perfect Vacation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Vacation Types */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Vacation Types
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Something for Everyone</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Whether you're seeking adventure, relaxation, or cultural experiences, we have the perfect vacation
                  for you.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Beach & Resort Vacations",
                  image: "/images/cancun-beach.png",
                  description:
                    "Relax on pristine beaches with all-inclusive resorts, beachfront hotels, and tropical getaways.",
                  features: ["All-Inclusive Options", "Beach Access", "Water Activities"],
                },
                {
                  title: "Family Vacations",
                  image: "/images/orlando-theme-park.png",
                  description:
                    "Kid-friendly destinations with activities for all ages, from theme parks to educational adventures.",
                  features: ["Kid-Friendly", "Family Activities", "Educational Tours"],
                },
                {
                  title: "Romantic Getaways",
                  image: "/images/santorini-sunset.png",
                  description: "Intimate destinations perfect for couples, honeymoons, and anniversary celebrations.",
                  features: ["Couples Activities", "Romantic Dining", "Spa Services"],
                },
                {
                  title: "Adventure Travel",
                  image: "/images/costa-rica-adventure.png",
                  description:
                    "Thrilling experiences from hiking and zip-lining to wildlife safaris and extreme sports.",
                  features: ["Outdoor Activities", "Wildlife Tours", "Adventure Sports"],
                },
                {
                  title: "Cultural & City Breaks",
                  image: "/images/paris-eiffel.png",
                  description:
                    "Explore historic cities, museums, local cuisine, and immerse yourself in different cultures.",
                  features: ["City Tours", "Museums", "Local Cuisine"],
                },
                {
                  title: "Budget-Friendly Escapes",
                  image: "/images/thailand-temple.png",
                  description:
                    "Amazing destinations that won't break the bank, with great value accommodations and activities.",
                  features: ["Great Value", "Budget Hotels", "Free Activities"],
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

        {/* Popular Destinations */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Popular Destinations
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Top Vacation Destinations</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our most popular vacation destinations for all types of travelers.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  title: "Cancun, Mexico",
                  image: "/images/cancun-beach.png",
                  description: "Beautiful beaches, all-inclusive resorts, and vibrant nightlife.",
                  type: "Beach Resort",
                },
                {
                  title: "Orlando, Florida",
                  image: "/images/orlando-theme-park.png",
                  description: "Theme parks, family fun, and magical experiences for all ages.",
                  type: "Family Fun",
                },
                {
                  title: "Paris, France",
                  image: "/images/paris-eiffel.png",
                  description: "Romance, culture, world-class cuisine, and iconic landmarks.",
                  type: "Cultural",
                },
                {
                  title: "Costa Rica",
                  image: "/images/costa-rica-adventure.png",
                  description: "Adventure activities, wildlife, and eco-friendly experiences.",
                  type: "Adventure",
                },
                {
                  title: "Santorini, Greece",
                  image: "/images/santorini-sunset.png",
                  description: "Stunning sunsets, romantic atmosphere, and Mediterranean charm.",
                  type: "Romantic",
                },
                {
                  title: "Thailand",
                  image: "/images/thailand-temple.png",
                  description: "Exotic culture, delicious food, and great value for money.",
                  type: "Budget-Friendly",
                },
                {
                  title: "Hawaii",
                  image: "/images/hawaii-beach.png",
                  description: "Tropical paradise with beaches, volcanoes, and island culture.",
                  type: "Beach Paradise",
                },
                {
                  title: "New York City",
                  image: "/images/new-york-city.png",
                  description: "Urban excitement, Broadway shows, and world-class attractions.",
                  type: "City Break",
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
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <Badge variant="outline" className="text-xs bg-background/20 text-white border-white">
                        {item.type}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                    <Button size="sm" className="w-full">
                      Explore
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Our Services
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Complete Vacation Planning</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  From initial planning to your return home, we handle every detail of your vacation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <MapPin className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">Destination Research</h3>
                  <p className="text-muted-foreground text-sm">Expert knowledge of destinations worldwide</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Plane className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">Flight & Hotel Booking</h3>
                  <p className="text-muted-foreground text-sm">Best rates and convenient travel arrangements</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Calendar className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">Itinerary Planning</h3>
                  <p className="text-muted-foreground text-sm">Customized daily schedules and activity booking</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-bold">24/7 Support</h3>
                  <p className="text-muted-foreground text-sm">Assistance throughout your entire trip</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Budget Options */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1">
                  Budget Options
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Vacations for Every Budget</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We believe everyone deserves a great vacation, regardless of budget.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <Heart className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-bold">Budget-Friendly</h3>
                  <p className="text-muted-foreground">
                    Great destinations with comfortable accommodations and amazing experiences that won't break the
                    bank.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 3-star hotels & vacation rentals</li>
                    <li>• Local dining recommendations</li>
                    <li>• Free and low-cost activities</li>
                    <li>• Budget airline options</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <Users className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-bold">Mid-Range</h3>
                  <p className="text-muted-foreground">
                    Perfect balance of comfort and value with upgraded accommodations and enhanced experiences.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 4-star hotels & resorts</li>
                    <li>• Mix of local & upscale dining</li>
                    <li>• Guided tours & activities</li>
                    <li>• Comfortable flight options</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <Globe className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-bold">Premium</h3>
                  <p className="text-muted-foreground">
                    Luxury accommodations and exclusive experiences for those who want the very best.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 5-star hotels & luxury resorts</li>
                    <li>• Fine dining experiences</li>
                    <li>• Private tours & VIP access</li>
                    <li>• First-class travel options</li>
                  </ul>
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready for Your Next Adventure?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Let us help you plan the perfect vacation that fits your style and budget.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="/contact">Start Planning Today</Link>
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
                Crafting extraordinary travel experiences for all travelers since 2008.
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
