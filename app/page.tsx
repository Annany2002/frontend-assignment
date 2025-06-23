import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const categories = [
    {
      title: "Singers",
      description: "Professional vocalists for any occasion",
      artistCount: 150,
      icon: "🎤",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Dancers",
      description: "Dynamic performers to energize your event",
      artistCount: 89,
      icon: "💃",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      title: "Musicians",
      description: "Instrumental artists across all genres",
      artistCount: 200,
      icon: "🎸",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Comedians",
      description: "Stand-up acts to entertain your guests",
      artistCount: 67,
      icon: "🎭",
      gradient: "from-orange-500 to-orange-600",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl transform -rotate-1"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-xl">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Connect Event Planners with{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Top Performing Artists
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Streamline your booking process on Artistly.com. Find the
                  perfect performers for your events with just a few clicks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/explore">
                    <Button size="lg" className="w-full sm:w-auto">
                      Explore Artists
                    </Button>
                  </Link>
                  <Link href="/onboard">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      Join as Artist
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">
              Discover talented performers across different artistic disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of event planners who trust Artistly.com for their
              entertainment needs
            </p>
            <Link href="/explore">
              <Button variant="secondary" size="lg">
                Start Browsing Artists
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
