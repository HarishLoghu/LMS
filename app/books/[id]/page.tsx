import { NeonButton } from "@/components/ui/neon-button"
import { NeonCard } from "@/components/ui/neon-card"
import { Sidebar } from "@/components/sidebar"
import { ArrowLeft, BookOpen, Calendar, Clock, Heart, Star, User } from "lucide-react"
import Link from "next/link"

export default function BookDetailsPage({ params }: { params: { id: string } }) {
  // This would normally fetch data based on the ID
  const bookId = params.id

  // Sample book data
  const book = {
    id: bookId,
    title: "Neuromancer",
    author: "William Gibson",
    cover: "/placeholder.svg?height=600&width=400",
    genre: "Cyberpunk",
    rating: 4.5,
    available: true,
    publishedDate: "1984",
    description:
      "Case was the sharpest data-thief in the matrix—until he crossed the wrong people and they crippled his nervous system, banishing him from cyberspace. Now a mysterious new employer has recruited him for a last-chance run at an unthinkably powerful artificial intelligence. With a dead man riding shotgun and Molly, mirror-eyed street-samurai, to watch his back, Case is ready for the adventure that upped the ante on an entire genre of fiction.",
    popularity: 85,
    reviews: [
      {
        id: 1,
        user: "CyberReader42",
        rating: 5,
        comment:
          "A groundbreaking classic that defined the cyberpunk genre. Gibson's prose is electric and the world-building is unmatched.",
        date: "2023-11-15",
      },
      {
        id: 2,
        user: "NeonDreamer",
        rating: 4,
        comment:
          "Incredible atmosphere and concepts, though the plot can be hard to follow at times. Still a must-read for any sci-fi fan.",
        date: "2023-10-22",
      },
      {
        id: 3,
        user: "DigitalNomad",
        rating: 5,
        comment:
          "This book predicted so much about our digital world decades before it happened. Absolutely brilliant.",
        date: "2023-09-05",
      },
    ],
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 ml-0 md:ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            href="/books"
            className="inline-flex items-center text-neon-blue hover:text-neon-pink transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Catalog
          </Link>

          {/* Book Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Book Cover */}
            <div className="lg:col-span-1">
              <NeonCard variant="blue" className="overflow-hidden">
                <div className="relative group">
                  <img
                    src={book.cover || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </NeonCard>

              {/* Book Stats */}
              <NeonCard variant="blue" className="mt-6 p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-3 border border-neon-blue/30 rounded-lg">
                    <Calendar className="h-5 w-5 text-neon-blue mb-2" />
                    <span className="text-gray-400 text-xs">Published</span>
                    <span className="text-white font-bold">{book.publishedDate}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border border-neon-blue/30 rounded-lg">
                    <BookOpen className="h-5 w-5 text-neon-blue mb-2" />
                    <span className="text-gray-400 text-xs">Genre</span>
                    <span className="text-white font-bold">{book.genre}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border border-neon-blue/30 rounded-lg">
                    <Star className="h-5 w-5 text-neon-yellow mb-2" />
                    <span className="text-gray-400 text-xs">Rating</span>
                    <span className="text-white font-bold">{book.rating}/5</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border border-neon-blue/30 rounded-lg">
                    <User className="h-5 w-5 text-neon-blue mb-2" />
                    <span className="text-gray-400 text-xs">Author</span>
                    <span className="text-white font-bold truncate w-full text-center">{book.author}</span>
                  </div>
                </div>
              </NeonCard>
            </div>

            {/* Book Info */}
            <div className="lg:col-span-2">
              <NeonCard variant="blue" className="p-6">
                <h1 className="text-3xl font-bold text-neon-blue text-glow-blue mb-2">{book.title}</h1>
                <h2 className="text-xl text-gray-300 mb-4">by {book.author}</h2>

                {/* Availability */}
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-6 ${
                    book.available ? "bg-neon-green/20 text-neon-green" : "bg-neon-pink/20 text-neon-pink"
                  }`}
                >
                  {book.available ? "Available Now" : "Currently Borrowed"}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-2">Description</h3>
                  <p className="text-gray-300 leading-relaxed">{book.description}</p>
                </div>

                {/* Popularity Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-white">Popularity</h3>
                    <span className="text-neon-blue">{book.popularity}%</span>
                  </div>
                  <div className="h-2 w-full bg-cyber-dark rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-neon-blue to-neon-pink rounded-full"
                      style={{ width: `${book.popularity}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <NeonButton variant="green" size="lg" className="flex-1">
                    {book.available ? "Borrow Now" : "Join Waitlist"}
                  </NeonButton>
                  <NeonButton variant="blue" size="lg" className="flex-1">
                    Reserve
                  </NeonButton>
                  <NeonButton variant="pink" size="lg" className="w-12 flex items-center justify-center">
                    <Heart className="h-5 w-5" />
                  </NeonButton>
                </div>
              </NeonCard>

              {/* Reviews */}
              <NeonCard variant="blue" className="p-6 mt-6">
                <h3 className="text-xl font-bold text-neon-blue mb-4">User Reviews</h3>

                <div className="space-y-4">
                  {book.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border border-neon-blue/30 rounded-lg p-4 hover:border-neon-blue transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center mr-2">
                            <User className="h-4 w-4 text-neon-blue" />
                          </div>
                          <span className="font-bold text-white">{review.user}</span>
                        </div>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "text-neon-yellow fill-neon-yellow" : "text-gray-600"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-2">{review.comment}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{review.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </NeonCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

