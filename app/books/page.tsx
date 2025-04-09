"use client"

import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { HolographicCard } from "@/components/ui/holographic-card"
import { NeonButton } from "@/components/ui/neon-button"
import { SearchBar } from "@/components/ui/search-bar"
import { Sidebar } from "@/components/sidebar"
import { BookOpen, Filter, Plus, Search, SlidersHorizontal, Star, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

// Sample book data with popularity metrics
const books = [
  {
    id: 1,
    title: "Neuromancer",
    author: "William Gibson",
    cover: "/placeholder.svg?height=300&width=200",
    genre: "Cyberpunk",
    rating: 4.5,
    available: true,
    popularity: 92,
    borrowCount: 487,
  },
  {
    id: 2,
    title: "Snow Crash",
    author: "Neal Stephenson",
    cover: "/placeholder.svg?height=300&width=200",
    genre: "Cyberpunk",
    rating: 4.3,
    available: false,
    popularity: 88,
    borrowCount: 412,
  },
  {
    id: 3,
    title: "Do Androids Dream of Electric Sheep?",
    author: "Philip K. Dick",
    cover: "/placeholder.svg?height=300&width=200",
    genre: "Sci-Fi",
    rating: 4.7,
    available: true,
    popularity: 85,
    borrowCount: 398,
  },
  {
    id: 4,
    title: "Altered Carbon",
    author: "Richard K. Morgan",
    cover: "/placeholder.svg?height=300&width=200",
    genre: "Cyberpunk",
    rating: 4.2,
    available: true,
    popularity: 79,
    borrowCount: 356,
  },
  {
    id: 5,
    title: "The Diamond Age",
    author: "Neal Stephenson",
    cover: "/placeholder.svg?height=300&width=200",
    genre: "Sci-Fi",
    rating: 4.1,
    available: true,
    popularity: 76,
    borrowCount: 321,
  },
  {
    id: 6,
    title: "Ready Player One",
    author: "Ernest Cline",
    cover: "/placeholder.svg?height=300&width=200",
    genre: "Sci-Fi",
    rating: 4.6,
    available: false,
    popularity: 82,
    borrowCount: 378,
  },
  {
    id: 7,
    title: "Burning Chrome",
    author: "William Gibson",
    cover: "/placeholder.svg?height=300&width=200",
    genre: "Cyberpunk",
    rating: 4.0,
    available: true,
    popularity: 72,
    borrowCount: 289,
  },
  {
    id: 8,
    title: "Cryptonomicon",
    author: "Neal Stephenson",
    cover: "/placeholder.svg?height=300&width=200",
    genre: "Techno-thriller",
    rating: 4.4,
    available: true,
    popularity: 74,
    borrowCount: 302,
  },
]

// Get top borrowed books
const topBorrowedBooks = [...books].sort((a, b) => b.borrowCount - a.borrowCount).slice(0, 4)

export default function BooksPage() {
  const [visibleBooks, setVisibleBooks] = useState<typeof books>([])

  // Staggered animation effect for books
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleBooks(books)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // FAB actions
  const fabActions = [
    {
      icon: <Search size={18} />,
      label: "Advanced Search",
      onClick: () => console.log("Advanced Search clicked"),
    },
    {
      icon: <SlidersHorizontal size={18} />,
      label: "Filter Options",
      onClick: () => console.log("Filter Options clicked"),
    },
    {
      icon: <BookOpen size={18} />,
      label: "Browse Categories",
      onClick: () => console.log("Browse Categories clicked"),
    },
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 ml-0 md:ml-64 p-6 animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-neon-blue text-glow-blue">Book Catalog</h1>
            <p className="text-gray-400 mt-2">Browse our extensive collection of digital books</p>
          </header>

          {/* Top Borrowed Books Section */}
          <section className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-neon-purple text-glow-purple flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Top Borrowed Books
              </h2>
              <button className="text-neon-blue hover:text-neon-purple transition-colors text-sm">
                View All Trending →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {topBorrowedBooks.map((book, index) => (
                <HolographicCard
                  key={book.id}
                  variant={index === 0 ? "purple" : "blue"}
                  className="overflow-hidden group transition-all duration-300 hover:scale-105 animate-book-appear"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    {/* Book Cover */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent z-10"></div>
                      <img
                        src={book.cover || "/placeholder.svg"}
                        alt={book.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Trending Badge */}
                      <div className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold z-20 bg-neon-purple/80 text-white">
                        #{index + 1} Trending
                      </div>

                      {/* Availability Badge */}
                      <div
                        className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold z-20 ${
                          book.available ? "bg-neon-green/80 text-black" : "bg-neon-pink/80 text-black"
                        }`}
                      >
                        {book.available ? "Available" : "Borrowed"}
                      </div>
                    </div>

                    {/* Book Info */}
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-1 truncate">{book.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{book.author}</p>

                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs px-2 py-1 rounded-full bg-neon-blue/20 text-neon-blue">
                          {book.genre}
                        </span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-neon-yellow fill-neon-yellow mr-1" />
                          <span className="text-white text-sm">{book.rating}</span>
                        </div>
                      </div>

                      {/* Popularity Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="text-gray-400">Popularity</span>
                          <span className="text-neon-purple">{book.popularity}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-cyber-dark rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                            style={{ width: `${book.popularity}%` }}
                          ></div>
                        </div>
                      </div>

                      <NeonButton
                        variant={book.available ? "green" : "pink"}
                        className="w-full"
                        isLink
                        href={`/books/${book.id}`}
                        rippleEffect={true}
                      >
                        {book.available ? "View Details" : "Join Waitlist"}
                      </NeonButton>
                    </div>
                  </div>
                </HolographicCard>
              ))}
            </div>
          </section>

          {/* Search and Filter */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <SearchBar className="mb-4" placeholder="Search by title, author, or genre..." />

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center">
                <Filter className="h-5 w-5 text-neon-blue mr-2" />
                <span className="text-gray-300">Filter by:</span>
              </div>

              {/* Genre Filter */}
              <select className="bg-cyber-dark border border-neon-blue rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-blue">
                <option>All Genres</option>
                <option>Cyberpunk</option>
                <option>Sci-Fi</option>
                <option>Fantasy</option>
                <option>Techno-thriller</option>
              </select>

              {/* Availability Filter */}
              <select className="bg-cyber-dark border border-neon-blue rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-blue">
                <option>All Status</option>
                <option>Available</option>
                <option>Borrowed</option>
              </select>

              {/* Rating Filter */}
              <select className="bg-cyber-dark border border-neon-blue rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-blue">
                <option>All Ratings</option>
                <option>4+ Stars</option>
                <option>3+ Stars</option>
                <option>2+ Stars</option>
              </select>

              {/* Popularity Filter - New */}
              <select className="bg-cyber-dark border border-neon-blue rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-blue">
                <option>All Popularity</option>
                <option>High (80%+)</option>
                <option>Medium (50-80%)</option>
                <option>Low (Below 50%)</option>
              </select>
            </div>
          </div>

          {/* Book Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleBooks.map((book, index) => (
              <HolographicCard
                key={book.id}
                variant={book.available ? "blue" : "pink"}
                className="overflow-hidden group transition-all duration-300 hover:scale-105 opacity-0 animate-book-appear"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="relative">
                  {/* Book Cover */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent z-10"></div>
                    <img
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Availability Badge */}
                    <div
                      className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold z-20 ${
                        book.available ? "bg-neon-green/80 text-black" : "bg-neon-pink/80 text-black"
                      }`}
                    >
                      {book.available ? "Available" : "Borrowed"}
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-1 truncate">{book.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{book.author}</p>

                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs px-2 py-1 rounded-full bg-neon-blue/20 text-neon-blue">
                        {book.genre}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-neon-yellow fill-neon-yellow mr-1" />
                        <span className="text-white text-sm">{book.rating}</span>
                      </div>
                    </div>

                    {/* Popularity Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-gray-400">Popularity</span>
                        <span className="text-neon-blue">{book.popularity}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-cyber-dark rounded-full overflow-hidden">
                        <div
                          className="h-full bg-neon-blue rounded-full"
                          style={{ width: `${book.popularity}%` }}
                        ></div>
                      </div>
                    </div>

                    <NeonButton
                      variant={book.available ? "green" : "pink"}
                      className="w-full"
                      isLink
                      href={`/books/${book.id}`}
                      rippleEffect={true}
                    >
                      {book.available ? "View Details" : "Join Waitlist"}
                    </NeonButton>
                  </div>
                </div>
              </HolographicCard>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <FloatingActionButton icon={<Plus size={24} />} actions={fabActions} />
    </div>
  )
}

