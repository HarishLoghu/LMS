import { cn } from "@/lib/utils"
import { NeonButton } from "@/components/ui/neon-button"
import { NeonCard } from "@/components/ui/neon-card"
import { RentalProgress } from "@/components/ui/rental-progress"
import { Sidebar } from "@/components/sidebar"
import { BookOpen, Clock } from "lucide-react"

// Mock data for rented books
const rentedBooks = [
  {
    id: 1,
    title: "Snow Crash",
    author: "Neal Stephenson",
    cover: "/placeholder.svg?height=150&width=100",
    dueDate: "2025-05-15",
    isOverdue: false,
  },
  {
    id: 2,
    title: "Ready Player One",
    author: "Ernest Cline",
    cover: "/placeholder.svg?height=150&width=100",
    dueDate: "2025-04-30",
    isOverdue: false,
  },
  {
    id: 3,
    title: "Altered Carbon",
    author: "Richard K. Morgan",
    cover: "/placeholder.svg?height=150&width=100",
    dueDate: "2025-04-01",
    isOverdue: true,
  },
  {
    id: 4,
    title: "The Diamond Age",
    author: "Neal Stephenson",
    cover: "/placeholder.svg?height=150&width=100",
    dueDate: "2025-05-20",
    isOverdue: false,
  },
  {
    id: 5,
    title: "Burning Chrome",
    author: "William Gibson",
    cover: "/placeholder.svg?height=150&width=100",
    dueDate: "2025-03-28",
    isOverdue: true,
  },
]

export default function RentedBooksPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 ml-0 md:ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-neon-blue text-glow-blue">Your Rented Books</h1>
            <p className="text-gray-400 mt-2">Track your current rentals and due dates</p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <NeonCard variant="blue" className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Total Rented</p>
                  <h3 className="text-2xl font-bold text-white">{rentedBooks.length}</h3>
                </div>
                <div className="p-2 rounded-full bg-neon-blue/20">
                  <BookOpen className="h-6 w-6 text-neon-blue" />
                </div>
              </div>
            </NeonCard>

            <NeonCard variant="pink" className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Overdue</p>
                  <h3 className="text-2xl font-bold text-white">
                    {rentedBooks.filter((book) => book.isOverdue).length}
                  </h3>
                </div>
                <div className="p-2 rounded-full bg-neon-pink/20">
                  <Clock className="h-6 w-6 text-neon-pink" />
                </div>
              </div>
            </NeonCard>

            <NeonCard variant="green" className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Rental Limit</p>
                  <h3 className="text-2xl font-bold text-white">10</h3>
                </div>
                <div className="p-2 rounded-full bg-neon-green/20">
                  <BookOpen className="h-6 w-6 text-neon-green" />
                </div>
              </div>
            </NeonCard>
          </div>

          {/* Rented Books List */}
          <NeonCard variant="blue" className="p-6">
            <h2 className="text-xl font-bold text-neon-blue mb-6">Currently Rented Books</h2>

            <div className="space-y-6">
              {rentedBooks.map((book) => (
                <div
                  key={book.id}
                  className={cn(
                    "border rounded-lg p-4 transition-all duration-300",
                    book.isOverdue ? "border-neon-pink pulse-overdue" : "border-neon-blue/30 hover:border-neon-blue/70",
                  )}
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <img
                      src={book.cover || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full md:w-24 h-36 md:h-36 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{book.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{book.author}</p>

                      <RentalProgress dueDate={book.dueDate} isOverdue={book.isOverdue} className="mb-4" />

                      <div className="flex flex-wrap gap-2">
                        <NeonButton variant="blue" size="sm" isLink href={`/books/${book.id}`}>
                          View Details
                        </NeonButton>

                        {book.isOverdue ? (
                          <NeonButton variant="pink" size="sm">
                            Renew Now
                          </NeonButton>
                        ) : (
                          <NeonButton variant="green" size="sm">
                            Return Book
                          </NeonButton>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </NeonCard>
        </div>
      </main>
    </div>
  )
}

